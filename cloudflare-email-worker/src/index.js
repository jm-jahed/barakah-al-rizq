import PostalMime from 'postal-mime';

/**
 * Cloudflare Email Routing Worker for Barakah Al Rizq Foodstuff Trading L.L.C
 *
 * Incoming Flow:
 * 1. Client sends email to info@, sales@, orders@, or habeeb@barakahalrizquae.com
 * 2. Cloudflare Email Routing triggers this Worker
 * 3. Worker forwards authentic raw email to Gmail backup (message.forward)
 * 4. Worker parses MIME payload into normalized fields & attachment metadata
 * 5. Worker POSTs payload to https://barakahalrizquae.com/api/webhooks/incoming-email
 *    with X-Webhook-Secret header
 * 6. Email Portal stores and renders message in correct mailbox
 */

export default {
  async email(message, env, ctx) {
    const backupEmail = env.GMAIL_BACKUP_EMAIL || 'barakahalrizquae@gmail.com';
    const webhookUrl = env.WEBHOOK_URL || 'https://barakahalrizquae.com/api/webhooks/incoming-email';
    const webhookSecret = env.INCOMING_EMAIL_WEBHOOK_SECRET;

    // -------------------------------------------------------------
    // STEP 1: Forward authentic original email to Gmail Backup
    // -------------------------------------------------------------
    try {
      await message.forward(backupEmail);
      console.log(`[EMAIL WORKER] Forwarded email from <${message.from}> to Gmail backup <${backupEmail}>`);
    } catch (fwdErr) {
      console.error('[EMAIL WORKER ERROR] Failed to forward to Gmail backup:', fwdErr.message);
    }

    // -------------------------------------------------------------
    // STEP 2: Parse Raw MIME Stream
    // -------------------------------------------------------------
    let parsed = null;
    try {
      const parser = new PostalMime();
      const rawBuffer = await new Response(message.raw).arrayBuffer();
      parsed = await parser.parse(rawBuffer);
    } catch (parseErr) {
      console.error('[EMAIL WORKER ERROR] MIME parsing error, falling back to header parsing:', parseErr.message);
    }

    // -------------------------------------------------------------
    // STEP 3: Normalize Email Properties
    // -------------------------------------------------------------
    const fromAddress = parsed?.from?.address || message.from;
    const fromName = parsed?.from?.name || (parsed?.from?.address ? parsed.from.address.split('@')[0] : message.from);
    const toAddress = message.to;
    const replyTo = parsed?.replyTo?.[0]?.address || fromAddress;
    const subject = parsed?.subject || message.headers.get('subject') || '(No Subject)';
    const messageId =
      parsed?.messageId ||
      message.headers.get('message-id') ||
      `<cf-${Date.now()}-${Math.random().toString(36).slice(2)}@barakahalrizquae.com>`;
    const inReplyTo = parsed?.inReplyTo || message.headers.get('in-reply-to') || undefined;
    const references = parsed?.references || message.headers.get('references') || undefined;
    const textBody = parsed?.text || '';
    const htmlBody = parsed?.html || '';

    // Extract attachment metadata only (avoids bloated DB records)
    const attachments = (parsed?.attachments || []).map((att) => ({
      filename: att.filename || 'attachment',
      mimeType: att.mimeType || 'application/octet-stream',
      size: att.content ? (att.content.byteLength || att.content.length || 0) : 0,
    }));

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

    // -------------------------------------------------------------
    // STEP 4: Deliver to Admin Inbox Webhook API (with Retry)
    // -------------------------------------------------------------
    let delivered = false;
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
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
            `[EMAIL WORKER SUCCESS] Webhook accepted email [${messageId}] on attempt ${attempt}. Mailbox: ${resData.mailbox || 'derived'}`
          );
          delivered = true;
          break;
        } else {
          const errText = await res.text().catch(() => '');
          console.warn(`[EMAIL WORKER WARN] Attempt ${attempt} returned HTTP ${res.status}: ${errText}`);
        }
      } catch (postErr) {
        console.error(`[EMAIL WORKER ERROR] Attempt ${attempt} request failed:`, postErr.message);
      }

      if (attempt < maxRetries) {
        // Exponential backoff wait (1s, 2s)
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      }
    }

    if (!delivered) {
      console.error(
        `[EMAIL WORKER CRITICAL] Failed to deliver email [${messageId}] to webhook after ${maxRetries} attempts. (Gmail copy was preserved).`
      );
    }
  },
};
