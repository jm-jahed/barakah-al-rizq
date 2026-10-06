import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { resolveMailboxByRecipient, saveIncomingInboxMessage } from '@/lib/mongodb';
import { sanitizeHtml, extractPreviewText, stripMimeHeaders } from '@/lib/email/sanitize';

function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function verifyWebhookSecret(providedSecret: string | null, configuredSecret: string): boolean {
  if (!providedSecret || !configuredSecret) return false;
  try {
    const providedBuffer = Buffer.from(providedSecret, 'utf-8');
    const configuredBuffer = Buffer.from(configuredSecret, 'utf-8');
    if (providedBuffer.length !== configuredBuffer.length) {
      return false;
    }
    return crypto.timingSafeEqual(providedBuffer, configuredBuffer);
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    // 1. Security Check: X-Webhook-Secret verification
    const configuredSecret = process.env.INCOMING_EMAIL_WEBHOOK_SECRET || process.env.WEBHOOK_SECRET;
    const providedSecret = req.headers.get('x-webhook-secret') || req.headers.get('X-Webhook-Secret');

    if (!providedSecret) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Missing X-Webhook-Secret header' },
        { status: 401 }
      );
    }

    if (!configuredSecret || !verifyWebhookSecret(providedSecret, configuredSecret)) {
      return NextResponse.json(
        { error: 'Forbidden', message: 'Invalid webhook secret' },
        { status: 403 }
      );
    }

    // 2. Parse & Validate Payload
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { error: 'Bad Request', message: 'Invalid JSON payload' },
        { status: 400 }
      );
    }

    const {
      messageId,
      inReplyTo,
      references,
      fromEmail,
      fromName,
      toEmail,
      replyTo,
      subject,
      textBody,
      htmlBody,
      receivedAt,
      attachmentsCount,
    } = body;

    // Validate messageId
    if (!messageId || typeof messageId !== 'string' || messageId.trim().length < 3) {
      return NextResponse.json(
        { error: 'Validation Error', message: 'Valid messageId is required for idempotency' },
        { status: 400 }
      );
    }

    // Validate fromEmail
    if (!fromEmail || !isValidEmail(fromEmail)) {
      return NextResponse.json(
        { error: 'Validation Error', message: 'Valid fromEmail is required' },
        { status: 400 }
      );
    }

    // Validate toEmail
    if (!toEmail || !isValidEmail(toEmail)) {
      return NextResponse.json(
        { error: 'Validation Error', message: 'Valid toEmail is required' },
        { status: 400 }
      );
    }

    // Validate content body
    const rawText = typeof textBody === 'string' ? textBody : '';
    const rawHtml = typeof htmlBody === 'string' ? htmlBody : '';
    if (!rawText.trim() && !rawHtml.trim()) {
      return NextResponse.json(
        { error: 'Validation Error', message: 'Either textBody or htmlBody is required' },
        { status: 400 }
      );
    }

    // 3. Dynamic Mailbox Resolution (Strictly bound to toEmail recipient)
    const resolvedMailbox = await resolveMailboxByRecipient(toEmail);
    if (!resolvedMailbox) {
      return NextResponse.json(
        { error: 'Mailbox Error', message: `Recipient address ${toEmail} is not a valid business destination` },
        { status: 400 }
      );
    }

    // 4. HTML Sanitization & Preview Text Generation
    const cleanHtml = rawHtml ? sanitizeHtml(rawHtml) : '';
    const cleanPreview = extractPreviewText(rawText, rawHtml, 160);

    // 5. Idempotent Storage in Database & Local Fallback
    const cleanMessageId = messageId.trim();
    const cleanReceivedAt = receivedAt && !isNaN(new Date(receivedAt).getTime())
      ? new Date(receivedAt).toISOString()
      : new Date().toISOString();

    const result = await saveIncomingInboxMessage({
      messageId: cleanMessageId,
      inReplyTo: typeof inReplyTo === 'string' ? inReplyTo.trim() : undefined,
      references: Array.isArray(references) ? references.join(' ') : typeof references === 'string' ? references : undefined,
      mailbox: resolvedMailbox.channel,
      fromEmail: fromEmail.trim().toLowerCase(),
      fromName: (fromName && typeof fromName === 'string' ? fromName.trim() : fromEmail.split('@')[0]) || 'Unknown Sender',
      toEmail: toEmail.trim().toLowerCase(),
      replyTo: replyTo && isValidEmail(replyTo) ? replyTo.trim().toLowerCase() : fromEmail.trim().toLowerCase(),
      subject: (subject && typeof subject === 'string' ? subject.trim() : '(No Subject)') || '(No Subject)',
      previewText: cleanPreview,
      textBody: stripMimeHeaders(rawText),
      htmlBody: cleanHtml,
      rawHtml: rawHtml || undefined,
      hasAttachments: typeof attachmentsCount === 'number' ? attachmentsCount > 0 : false,
      attachmentsCount: typeof attachmentsCount === 'number' ? Math.max(0, attachmentsCount) : 0,
      receivedAt: cleanReceivedAt,
    });

    if (result.isDuplicate) {
      return NextResponse.json({
        success: true,
        idempotent: true,
        message: 'Email already received and stored',
        id: result.message.id,
        messageId: result.message.messageId,
        mailbox: result.message.mailbox,
      }, { status: 200 });
    }

    return NextResponse.json({
      success: true,
      idempotent: false,
      message: 'Email received and stored in inbox',
      id: result.message.id,
      messageId: result.message.messageId,
      mailbox: result.message.mailbox,
      status: result.message.status,
    }, { status: 201 });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal webhook error';
    console.error('[INCOMING_EMAIL_WEBHOOK_ERROR]:', errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
