import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { sendBarakahEmail, EmailChannel, getEmailConfig } from '@/lib/email';
import { logActivityToMongo } from '@/lib/mongodb';
import { logActivity } from '@/lib/db';

// Simple in-memory rate limiter: max 20 emails per minute per admin
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(key: string, limit = 20, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(key) || []).filter((t) => now - t < windowMs);
  if (timestamps.length >= limit) {
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(key, timestamps);
  return true;
}

const ALLOWED_CHANNELS: EmailChannel[] = ['info', 'sales', 'orders', 'habeeb'];
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  try {
    // 1. Authenticate Admin Session
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized. Admin authentication required.' },
        { status: 401 }
      );
    }

    // 2. Rate Limiting Check
    const rateLimitKey = session.userId || session.email;
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Please wait a moment before sending more emails.' },
        { status: 429 }
      );
    }

    // 3. Parse & Validate Payload
    const body = await req.json();
    const { customerId, customerName, recipientEmail, channel = 'sales', subject, message, templateName } = body;

    if (!recipientEmail || typeof recipientEmail !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Valid recipient email address is required.' },
        { status: 400 }
      );
    }

    const cleanRecipient = recipientEmail.trim().toLowerCase();

    // Prevent Header Injection / Invalid Syntax
    if (!EMAIL_REGEX.test(cleanRecipient) || cleanRecipient.includes('\r') || cleanRecipient.includes('\n')) {
      return NextResponse.json(
        { success: false, error: 'Invalid recipient email format.' },
        { status: 400 }
      );
    }

    // Strictly validate sender channel against allowlist
    const selectedChannel = (String(channel).toLowerCase() as EmailChannel);
    if (!ALLOWED_CHANNELS.includes(selectedChannel)) {
      return NextResponse.json(
        { success: false, error: 'Invalid sender channel selected.' },
        { status: 400 }
      );
    }

    // Validate Subject
    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Subject is required (minimum 3 characters).' },
        { status: 400 }
      );
    }
    const cleanSubject = subject.replace(/[\r\n]+/g, ' ').trim().slice(0, 200);

    // Validate Message
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: 'Message body is required (minimum 5 characters).' },
        { status: 400 }
      );
    }
    const cleanMessage = message.trim().slice(0, 5000);

    const config = getEmailConfig();
    const channelInfo = config.channels[selectedChannel];

    // 4. Construct Branded HTML Email Template
    const deskTitle = channelInfo.name
      .replace(/^BARAKAH\s+AL\s+RIZQ\s+FOODSTUFF\s+TRADING\s+L\.L\.C\s*[—–-]\s*/i, '')
      .trim() || channelInfo.description;

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
    body { margin: 0 !important; padding: 12px 6px !important; -webkit-text-size-adjust: 100% !important; }
    @media only screen and (max-width: 600px) {
      body { padding: 4px 0 !important; }
      .email-card { border-radius: 8px !important; width: 100% !important; max-width: 100% !important; }
      .email-header { padding: 14px 12px !important; }
      .brand-title { font-size: 14px !important; }
      .email-body { padding: 16px 12px !important; font-size: 13.5px !important; }
      .card-footer { padding: 14px 12px !important; }
    }
  </style>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 16px 8px; color: #1e293b;">
  <div class="email-card" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
    <!-- Header -->
    <div class="email-header" style="background: linear-gradient(135deg, #022c22 0%, #064e3b 100%); padding: 18px 20px; border-bottom: 2px solid #10b981;">
      <div style="margin-bottom: 5px;">
        <span style="display: inline-block; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(110, 231, 183, 0.3); color: #6ee7b7; font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: 2px 8px; border-radius: 9999px;">
          DUBAI, UAE &bull; AL AWEER
        </span>
      </div>
      <h1 class="brand-title" style="color: #ffffff; margin: 0; font-size: 15.5px; font-weight: 800; letter-spacing: 0.4px; line-height: 1.35;">
        BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
      </h1>
      <p style="color: #a7f3d0; margin: 4px 0 0 0; font-size: 11px; font-weight: 600; letter-spacing: 0.2px;">
        ${deskTitle} &bull; Dubai, UAE
      </p>
    </div>

    <!-- Body Content -->
    <div class="email-body" style="padding: 22px 20px; color: #1e293b; background-color: #ffffff;">
      ${customerName ? `<p style="font-size: 14px; font-weight: 700; margin-top: 0; margin-bottom: 14px; color: #022c22;">Dear ${customerName},</p>` : ''}
      
      <div style="font-size: 14px; line-height: 1.65; color: #334155; white-space: pre-wrap; word-break: break-word; margin: 12px 0;">
${cleanMessage}
      </div>
    </div>

    <!-- Executive Footer -->
    <div class="card-footer" style="background: #f8fafc; padding: 16px 20px; border-top: 1px solid #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="margin-bottom: 8px;">
        <div style="font-size: 12.5px; font-weight: 800; color: #022c22; letter-spacing: 0.3px;">
          BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
        </div>
        <div style="font-size: 10px; color: #64748b; line-height: 1.45; margin-top: 2px;">
          Stand 19, Fresh Produce Block B, Al Aweer Central Fruit &amp; Vegetable Market, Ras Al Khor, Dubai, UAE
        </div>
      </div>

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
      </table>

      <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #e2e8f0; font-size: 9.5px; color: #94a3b8; text-align: center;">
        Quality You Can Trust, Service You Can Rely On &bull; Dubai, UAE
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // 5. Send Server-Side via Brevo SMTP
    const emailResult = await sendBarakahEmail({
      channel: selectedChannel,
      to: cleanRecipient,
      subject: cleanSubject,
      html: formattedHtml,
      text: cleanMessage,
      replyTo: channelInfo.address,
    });

    if (!emailResult.success && !emailResult.simulated) {
      console.error('[ADMIN EMAIL DISPATCH FAILED]:', emailResult.error);
      return NextResponse.json(
        { success: false, error: 'Email could not be dispatched. Please verify SMTP status.' },
        { status: 500 }
      );
    }

    // 6. Safe Audit Logging
    try {
      logActivity(session.email, `CUSTOMER_EMAIL_${selectedChannel.toUpperCase()}`, customerId || cleanRecipient);
      await logActivityToMongo(session.email, `CUSTOMER_EMAIL_${selectedChannel.toUpperCase()}`, customerId || cleanRecipient);
    } catch {
      // Non-blocking audit failure
    }

    return NextResponse.json({
      success: true,
      message: `Email dispatched successfully to ${cleanRecipient}`,
      channel: selectedChannel,
      fromAddress: channelInfo.address,
      messageId: emailResult.messageId || 'MOCK_ID',
    });
  } catch (err: any) {
    console.error('[ADMIN CUSTOMER EMAIL API ERROR]:', err?.message || err);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing email dispatch.' },
      { status: 500 }
    );
  }
}
