import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { sendBarakahEmail, getEmailConfig, type EmailChannel } from '@/lib/email';
import { saveIncomingInboxMessage } from '@/lib/mongodb';

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const VALID_CHANNELS: EmailChannel[] = ['info', 'sales', 'orders', 'habeeb'];

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
    }

    const { fromMailbox = 'info', toEmail, recipientName, subject, messageBody, cc } = body;

    // 1. Validate Recipient
    if (!toEmail || typeof toEmail !== 'string') {
      return NextResponse.json({ error: 'Valid recipient email is required.' }, { status: 400 });
    }

    const cleanTo = toEmail.trim().toLowerCase();
    if (!EMAIL_REGEX.test(cleanTo) || cleanTo.includes('\r') || cleanTo.includes('\n')) {
      return NextResponse.json({ error: 'Invalid recipient email format.' }, { status: 400 });
    }

    // 2. Validate Sender Channel
    const channel = (String(fromMailbox).toLowerCase() as EmailChannel);
    if (!VALID_CHANNELS.includes(channel)) {
      return NextResponse.json({ error: 'Invalid sender mailbox desk selected.' }, { status: 400 });
    }

    // 3. Validate Subject & Body
    if (!subject || typeof subject !== 'string' || !subject.trim()) {
      return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    }
    const cleanSubject = subject.replace(/[\r\n]+/g, ' ').trim().slice(0, 200);

    if (!messageBody || typeof messageBody !== 'string' || !messageBody.trim()) {
      return NextResponse.json({ error: 'Message body cannot be empty.' }, { status: 400 });
    }
    const cleanBody = messageBody.trim().slice(0, 10000);

    const config = getEmailConfig();
    const channelConfig = config.channels[channel] || config.channels.info;

    // 4. Format Branded HTML Email
    const escapedBody = cleanBody
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    const formattedHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${cleanSubject}</title>
</head>
<body style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b;">
  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
    <div style="background: #022c22; padding: 22px 24px; border-bottom: 2px solid #059669; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 800; letter-spacing: 0.5px;">
        BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
      </h1>
      <p style="color: #6ee7b7; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; font-family: monospace;">
        ${channelConfig.name} &bull; Dubai, UAE
      </p>
    </div>

    <div style="padding: 28px 24px; font-size: 14px; line-height: 1.6; color: #334155;">
      ${recipientName ? `<p style="font-size: 14px; font-weight: 600; margin-top: 0; color: #022c22;">Dear ${recipientName.trim()},</p>` : ''}
      
      <div style="margin: 16px 0; white-space: pre-wrap; font-size: 14px; color: #0f172a; line-height: 1.7;">
        ${escapedBody}
      </div>

      <div style="margin-top: 32px; padding: 16px; background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 6px; font-size: 12px; color: #065f46;">
        <strong>Commercial Trade Desk:</strong> +971 56 944 8850<br/>
        <strong>WhatsApp Orders:</strong> +971 50 252 6750<br/>
        <strong>Location:</strong> Stand 19, Fresh Produce Block B, Al Aweer Central Market, Ras Al Khor, Dubai, UAE<br/>
        <strong>Sender Desk:</strong> ${channelConfig.address}
      </div>
    </div>

    <div style="background: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.5; text-align: center;">
      Sent by <strong>${channelConfig.name}</strong> (&lt;${channelConfig.address}&gt;)<br/>
      &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. All rights reserved.<br/>
      Dubai, United Arab Emirates
    </div>
  </div>
</body>
</html>
    `.trim();

    // 5. Send via Brevo SMTP
    const emailResult = await sendBarakahEmail({
      channel,
      to: cleanTo,
      subject: cleanSubject,
      html: formattedHtml,
      text: cleanBody,
      replyTo: channelConfig.address,
      cc: cc ? String(cc).trim() : undefined,
    });

    if (!emailResult.success && !emailResult.simulated) {
      return NextResponse.json(
        { error: emailResult.error || 'Failed to dispatch email via SMTP service' },
        { status: 502 }
      );
    }

    // 6. Record sent message in Inbox history
    const outboundMessageId = emailResult.messageId || `<outbound-${Date.now()}-${Math.random().toString(36).slice(2)}@barakahalrizquae.com>`;
    const nowISO = new Date().toISOString();

    const storedResult = await saveIncomingInboxMessage({
      messageId: outboundMessageId,
      mailbox: channel,
      fromEmail: channelConfig.address,
      fromName: channelConfig.name,
      toEmail: cleanTo,
      replyTo: channelConfig.address,
      subject: cleanSubject,
      previewText: cleanBody.slice(0, 160),
      textBody: cleanBody,
      htmlBody: formattedHtml,
      hasAttachments: false,
      attachmentsCount: 0,
      receivedAt: nowISO,
    });

    return NextResponse.json({
      success: true,
      simulated: emailResult.simulated || false,
      messageId: outboundMessageId,
      sentTo: cleanTo,
      fromAddress: channelConfig.address,
      channel,
      storedMessage: storedResult.message,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal server error while composing email';
    console.error('[INBOX_COMPOSE_ERROR]:', errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
