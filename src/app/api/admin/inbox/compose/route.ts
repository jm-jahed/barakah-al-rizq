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

    // Clean desk title (remove duplicate company brand prefix if present)
    const deskTitle = channelConfig.name
      .replace(/^BARAKAH\s+AL\s+RIZQ\s+FOODSTUFF\s+TRADING\s+L\.L\.C\s*[—–-]\s*/i, '')
      .trim() || 'Commercial Trade Desk';

    // 4. Format Branded HTML Email
    const escapedBody = cleanBody
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    const formattedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <title>${cleanSubject}</title>
  <style>
    body {
      margin: 0 !important;
      padding: 12px 6px !important;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
    }
    @media only screen and (max-width: 600px) {
      body {
        padding: 4px 0 !important;
      }
      .email-card {
        border-radius: 8px !important;
        border-left: 0 !important;
        border-right: 0 !important;
        width: 100% !important;
        max-width: 100% !important;
      }
      .email-header {
        padding: 14px 12px !important;
      }
      .brand-title {
        font-size: 14px !important;
        line-height: 1.35 !important;
      }
      .brand-subtitle {
        font-size: 10px !important;
      }
      .email-body {
        padding: 16px 12px !important;
      }
      .card-footer {
        padding: 14px 12px !important;
      }
    }
  </style>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 16px 8px; color: #1e293b;">
  <div class="email-card" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
    
    <!-- Executive Brand Header (Optimized for Small Screen) -->
    <div class="email-header" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 100%); padding: 18px 20px; border-bottom: 2px solid #10b981;">
      <div style="margin-bottom: 5px;">
        <span style="display: inline-block; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(110, 231, 183, 0.3); color: #6ee7b7; font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 2px 8px; border-radius: 9999px;">
          DUBAI, UAE &bull; AL AWEER
        </span>
      </div>
      <h1 class="brand-title" style="color: #ffffff; margin: 0; font-size: 15.5px; font-weight: 800; letter-spacing: 0.4px; line-height: 1.35;">
        BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
      </h1>
      <p class="brand-subtitle" style="color: #a7f3d0; margin: 4px 0 0 0; font-size: 11px; font-weight: 600; letter-spacing: 0.2px;">
        ${deskTitle} &bull; Dubai, UAE
      </p>
    </div>

    <!-- Email Content Body -->
    <div class="email-body" style="padding: 22px 20px; font-size: 14px; line-height: 1.65; color: #334155;">
      ${recipientName ? `<p style="font-size: 14px; font-weight: 700; margin-top: 0; margin-bottom: 14px; color: #022c22;">Dear ${recipientName.trim()},</p>` : ''}
      
      <div style="white-space: pre-wrap; word-break: break-word; font-size: 14px; color: #0f172a; line-height: 1.65;">
        ${escapedBody}
      </div>
    </div>

    <!-- Executive UAE Corporate Card Footer (Touch-Friendly & Clean) -->
    <div class="card-footer" style="background: #f8fafc; padding: 16px 20px; border-top: 1px solid #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      
      <div style="margin-bottom: 8px;">
        <div style="font-size: 12.5px; font-weight: 800; color: #022c22; letter-spacing: 0.3px;">
          BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
        </div>
        <div style="font-size: 10px; color: #64748b; line-height: 1.45; margin-top: 2px;">
          Stand 19, Fresh Produce Block B, Al Aweer Central Fruit &amp; Vegetable Market, Ras Al Khor, Dubai, UAE
        </div>
      </div>

      <!-- Tappable Contact Directs -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 8px;">
        <tr>
          <td style="padding: 2.5px 0; color: #334155;">
            <span style="color: #64748b;">Direct / WhatsApp:</span>
            <a href="https://wa.me/971569448850" style="color: #059669; font-weight: 700; text-decoration: none; margin-left: 4px;">+971 56 944 8850</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 2.5px 0; color: #334155;">
            <span style="color: #64748b;">Sales Line:</span>
            <a href="tel:+971569538741" style="color: #0f172a; font-weight: 600; text-decoration: none; margin-left: 4px;">+971 56 953 8741</a>
            <span style="color: #cbd5e1; margin: 0 4px;">&bull;</span>
            <span style="color: #64748b;">Landline:</span>
            <a href="tel:+97145764169" style="color: #0f172a; font-weight: 600; text-decoration: none; margin-left: 4px;">+971 4 576 4169</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 2.5px 0; color: #334155;">
            <span style="color: #64748b;">Official Desk:</span>
            <a href="mailto:${channelConfig.address}" style="color: #059669; font-weight: 600; text-decoration: none; margin-left: 4px;">${channelConfig.address}</a>
          </td>
        </tr>
      </table>

      <!-- Micro-Tagline -->
      <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #e2e8f0; font-size: 9.5px; color: #94a3b8; text-align: center;">
        Quality You Can Trust, Service You Can Rely On &bull; Dubai, UAE
      </div>
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
