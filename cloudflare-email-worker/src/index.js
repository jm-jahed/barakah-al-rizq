/**
 * Cloudflare Email Routing Worker (Zero External Dependencies)
 * Barakah Al Rizq Foodstuff Trading L.L.C
 *
 * Architecture:
 * 1. Cloudflare Email Routing triggers email(message, env, ctx)
 * 2. Worker forwards authentic raw MIME stream to Gmail backup (barakahalrizquae@gmail.com)
 * 3. Worker parses MIME stream (Headers, text/plain, text/html, attachments) with pure JS
 * 4. Worker POSTs payload to https://barakahalrizquae.com/api/webhooks/incoming-email
 *    with X-Webhook-Secret header
 * 5. Handles retries with exponential backoff
 */

// ============================================================================
// Zero-Dependency MIME / RFC 2822 Stream Parser for Cloudflare Workers
// ============================================================================

function decodeQuotedPrintable(str) {
  if (!str) return '';
  return str
    .replace(/=\r?\n/g, '') // Soft line breaks
    .replace(/=([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function decodeBase64Utf8(str) {
  if (!str) return '';
  try {
    const clean = str.replace(/\s+/g, '');
    const binary = atob(clean);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    try {
      return atob(str.replace(/\s+/g, ''));
    } catch {
      return str;
    }
  }
}

function decodeRfc2047(header) {
  if (!header || typeof header !== 'string') return header || '';
  // Encoded word: =?charset?encoding?encoded_text?=
  return header.replace(/=\?([^?]+)\?([BQbq])\?([^?]+)\?=/g, (_, charset, encoding, text) => {
    const enc = encoding.toUpperCase();
    if (enc === 'B') {
      try {
        return decodeBase64Utf8(text);
      } catch {
        return text;
      }
    } else if (enc === 'Q') {
      try {
        const qp = text.replace(/_/g, ' ');
        return decodeQuotedPrintable(qp);
      } catch {
        return text;
      }
    }
    return text;
  });
}

function parseHeaders(headerBlock) {
  const headers = {};
  if (!headerBlock) return headers;

  // Unfold folded headers (lines starting with space or tab)
  const unfolded = headerBlock.replace(/\r?\n[ \t]+/g, ' ');
  const lines = unfolded.split(/\r?\n/);

  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0) {
      const key = line.slice(0, colonIdx).trim().toLowerCase();
      const value = line.slice(colonIdx + 1).trim();
      if (!headers[key]) {
        headers[key] = decodeRfc2047(value);
      }
    }
  }
  return headers;
}

function extractBoundary(contentTypeHeader) {
  if (!contentTypeHeader) return null;
  const match = contentTypeHeader.match(/boundary=["']?([^"';\s]+)["']?/i);
  return match ? match[1] : null;
}

function parseBodyPart(rawPart) {
  const splitIdx = rawPart.indexOf('\r\n\r\n');
  const altSplitIdx = rawPart.indexOf('\n\n');
  let headerBlock = '';
  let bodyBlock = '';

  if (splitIdx !== -1) {
    headerBlock = rawPart.slice(0, splitIdx);
    bodyBlock = rawPart.slice(splitIdx + 4);
  } else if (altSplitIdx !== -1) {
    headerBlock = rawPart.slice(0, altSplitIdx);
    bodyBlock = rawPart.slice(altSplitIdx + 2);
  } else {
    bodyBlock = rawPart;
  }

  const headers = parseHeaders(headerBlock);
  const contentType = headers['content-type'] || 'text/plain';
  const transferEncoding = (headers['content-transfer-encoding'] || '').toLowerCase().trim();
  const contentDisposition = headers['content-disposition'] || '';

  let decodedBody = bodyBlock;
  if (transferEncoding === 'base64') {
    decodedBody = decodeBase64Utf8(bodyBlock);
  } else if (transferEncoding === 'quoted-printable') {
    decodedBody = decodeQuotedPrintable(bodyBlock);
  }

  // Check if attachment
  const isAttachment =
    contentDisposition.toLowerCase().includes('attachment') ||
    (contentDisposition.toLowerCase().includes('filename') && !contentType.startsWith('text/'));

  let filename = '';
  const fnMatch = (contentDisposition + ' ' + contentType).match(/filename\*?=["']?(?:UTF-8'')?([^"';\r\n]+)["']?/i);
  if (fnMatch) {
    filename = decodeURIComponent(fnMatch[1].replace(/^"|"$/g, ''));
  }

  return {
    contentType: contentType.split(';')[0].toLowerCase().trim(),
    fullContentType: contentType,
    transferEncoding,
    isAttachment,
    filename,
    body: decodedBody,
    rawBody: bodyBlock,
    headers,
  };
}

function parseRawMime(rawText) {
  const splitIdx = rawText.indexOf('\r\n\r\n');
  const altSplitIdx = rawText.indexOf('\n\n');
  let topHeaderBlock = '';
  let topBodyBlock = '';

  if (splitIdx !== -1) {
    topHeaderBlock = rawText.slice(0, splitIdx);
    topBodyBlock = rawText.slice(splitIdx + 4);
  } else if (altSplitIdx !== -1) {
    topHeaderBlock = rawText.slice(0, altSplitIdx);
    topBodyBlock = rawText.slice(altSplitIdx + 2);
  } else {
    topHeaderBlock = '';
    topBodyBlock = rawText;
  }

  const headers = parseHeaders(topHeaderBlock);
  const contentTypeHeader = headers['content-type'] || 'text/plain';
  const boundary = extractBoundary(contentTypeHeader);

  let textBody = '';
  let htmlBody = '';
  const attachments = [];

  if (boundary) {
    // Multipart MIME message
    const boundaryDelimiter = `--${boundary}`;
    const parts = topBodyBlock.split(boundaryDelimiter);

    for (let part of parts) {
      part = part.trim();
      if (!part || part === '--' || part.startsWith('--')) continue;

      const parsedPart = parseBodyPart(part);

      // Check sub-boundaries for multipart/alternative nested in multipart/mixed
      const subBoundary = extractBoundary(parsedPart.fullContentType);
      if (subBoundary) {
        const subParts = parsedPart.body.split(`--${subBoundary}`);
        for (let sp of subParts) {
          sp = sp.trim();
          if (!sp || sp === '--' || sp.startsWith('--')) continue;
          const subParsed = parseBodyPart(sp);
          if (subParsed.contentType === 'text/plain' && !textBody) {
            textBody = subParsed.body.trim();
          } else if (subParsed.contentType === 'text/html' && !htmlBody) {
            htmlBody = subParsed.body.trim();
          }
        }
        continue;
      }

      if (parsedPart.isAttachment) {
        attachments.push({
          filename: parsedPart.filename || 'attachment',
          mimeType: parsedPart.contentType || 'application/octet-stream',
          size: parsedPart.rawBody.length,
        });
      } else if (parsedPart.contentType === 'text/plain' && !textBody) {
        textBody = parsedPart.body.trim();
      } else if (parsedPart.contentType === 'text/html' && !htmlBody) {
        htmlBody = parsedPart.body.trim();
      }
    }
  } else {
    // Single part message
    const transferEncoding = (headers['content-transfer-encoding'] || '').toLowerCase().trim();
    let decoded = topBodyBlock;
    if (transferEncoding === 'base64') {
      decoded = decodeBase64Utf8(topBodyBlock);
    } else if (transferEncoding === 'quoted-printable') {
      decoded = decodeQuotedPrintable(topBodyBlock);
    }

    if (contentTypeHeader.toLowerCase().includes('text/html')) {
      htmlBody = decoded.trim();
    } else {
      textBody = decoded.trim();
    }
  }

  // Sender Name & Address Extraction
  const rawFrom = headers['from'] || '';
  let fromName = '';
  let fromEmail = '';

  const fromMatch = rawFrom.match(/^(?:["']?([^"']*)["']?\s*)?<([^>]+)>/);
  if (fromMatch) {
    fromName = (fromMatch[1] || '').trim();
    fromEmail = (fromMatch[2] || '').trim();
  } else if (rawFrom.includes('@')) {
    fromEmail = rawFrom.trim();
    fromName = fromEmail.split('@')[0];
  }

  // Reply-To Extraction
  const rawReplyTo = headers['reply-to'] || '';
  let replyTo = '';
  const replyToMatch = rawReplyTo.match(/<([^>]+)>/);
  if (replyToMatch) {
    replyTo = replyToMatch[1].trim();
  } else if (rawReplyTo.includes('@')) {
    replyTo = rawReplyTo.trim();
  }

  return {
    headers,
    subject: headers['subject'] || '(No Subject)',
    fromName: fromName || fromEmail.split('@')[0] || 'Unknown Sender',
    fromEmail: fromEmail || '',
    toEmail: headers['to'] || '',
    replyTo: replyTo || fromEmail,
    messageId: headers['message-id'] || '',
    inReplyTo: headers['in-reply-to'] || undefined,
    references: headers['references'] || undefined,
    date: headers['date'] || new Date().toISOString(),
    textBody,
    htmlBody,
    attachments,
  };
}

// ============================================================================
// Cloudflare Worker Handler
// ============================================================================

export default {
  async email(message, env, ctx) {
    const backupEmail = env?.GMAIL_BACKUP_EMAIL || 'barakahalrizquae@gmail.com';
    const webhookUrl = env?.WEBHOOK_URL || 'https://barakahalrizquae.com/api/webhooks/incoming-email';
    const webhookSecret = env?.INCOMING_EMAIL_WEBHOOK_SECRET;

    console.log(`[EMAIL WORKER] Inbound email event received from <${message.from}> to <${message.to}>`);

    // ------------------------------------------------------------------------
    // STEP 1: Forward authentic raw email to Gmail Backup
    // ------------------------------------------------------------------------
    try {
      if (backupEmail && typeof message.forward === 'function') {
        await message.forward(backupEmail);
        console.log(`[EMAIL WORKER] ✅ Forwarded raw copy to Gmail backup <${backupEmail}>`);
      }
    } catch (fwdErr) {
      console.error(`[EMAIL WORKER WARNING] Failed to forward to Gmail backup:`, fwdErr?.message || fwdErr);
    }

    // ------------------------------------------------------------------------
    // STEP 2: Read & Parse Raw MIME Stream
    // ------------------------------------------------------------------------
    let parsed = null;
    let rawText = '';
    try {
      const rawBuffer = await new Response(message.raw).arrayBuffer();
      rawText = new TextDecoder('utf-8', { fatal: false }).decode(rawBuffer);
      parsed = parseRawMime(rawText);
    } catch (parseErr) {
      console.error(`[EMAIL WORKER ERROR] MIME parsing error:`, parseErr?.message || parseErr);
    }

    // ------------------------------------------------------------------------
    // STEP 3: Normalize Payload Fields
    // ------------------------------------------------------------------------
    const fromAddress = parsed?.fromEmail || message.from;
    const fromName = parsed?.fromName || (fromAddress ? fromAddress.split('@')[0] : 'Unknown Sender');
    const toAddress = message.to;
    const replyTo = parsed?.replyTo || fromAddress;
    const subject = parsed?.subject || message.headers?.get('subject') || '(No Subject)';
    const messageId =
      parsed?.messageId ||
      message.headers?.get('message-id') ||
      `<cf-${Date.now()}-${Math.random().toString(36).slice(2)}@barakahalrizquae.com>`;
    const inReplyTo = parsed?.inReplyTo || message.headers?.get('in-reply-to') || undefined;
    const references = parsed?.references || message.headers?.get('references') || undefined;
    const textBody = parsed?.textBody || '';
    const htmlBody = parsed?.htmlBody || '';
    const attachments = parsed?.attachments || [];
    const receivedAt = parsed?.date ? new Date(parsed.date).toISOString() : new Date().toISOString();

    const webhookPayload = {
      messageId,
      inReplyTo,
      references,
      fromEmail: fromAddress,
      fromName,
      toEmail: toAddress,
      replyTo,
      subject,
      textBody,
      htmlBody,
      hasAttachments: attachments.length > 0,
      attachmentsCount: attachments.length,
      attachments,
      receivedAt,
    };

    // ------------------------------------------------------------------------
    // STEP 4: Deliver to Admin Inbox Webhook API (with Retry & Backoff)
    // ------------------------------------------------------------------------
    let delivered = false;
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[EMAIL WORKER] Dispatching webhook to ${webhookUrl} (Attempt ${attempt}/${maxRetries})...`);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Webhook-Secret': webhookSecret,
          },
          body: JSON.stringify(webhookPayload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const resData = await res.json().catch(() => ({}));
          console.log(
            `[EMAIL WORKER SUCCESS] ✅ Webhook accepted email [${messageId}] on attempt ${attempt}. Mailbox: [${resData.mailbox || 'derived'}], Status: [${resData.status || 'OK'}]`
          );
          delivered = true;
          break;
        } else {
          const errText = await res.text().catch(() => '');
          console.warn(`[EMAIL WORKER WARN] Attempt ${attempt} returned HTTP ${res.status}: ${errText}`);
        }
      } catch (postErr) {
        console.error(`[EMAIL WORKER ERROR] Attempt ${attempt} request error:`, postErr?.message || postErr);
      }

      if (attempt < maxRetries) {
        // Wait 1s, 2s before retrying
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      }
    }

    if (!delivered) {
      console.error(
        `[EMAIL WORKER CRITICAL] ❌ Failed to deliver email [${messageId}] to webhook after ${maxRetries} attempts. (Gmail copy was preserved).`
      );
    }
  },
};
