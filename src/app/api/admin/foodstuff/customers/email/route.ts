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
    const formattedHtml = `
      <div style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <!-- Header -->
        <div style="background-color: #063d24; padding: 24px; text-align: center; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 800; color: #fef08a; letter-spacing: 0.5px;">
            BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
          </h1>
          <p style="margin: 4px 0 0 0; font-size: 11px; color: #a7f3d0; letter-spacing: 1px; text-transform: uppercase;">
            ${channelInfo.description} • Al Aweer Central Market, Dubai, UAE
          </p>
        </div>

        <!-- Body Content -->
        <div style="padding: 28px 24px; color: #1e293b; background-color: #ffffff;">
          ${customerName ? `<p style="font-size: 14px; font-weight: 600; margin-top: 0; color: #063d24;">Dear ${customerName},</p>` : ''}
          
          <div style="font-size: 14px; line-height: 1.7; color: #334155; white-space: pre-wrap; margin: 16px 0;">
${cleanMessage}
          </div>

          <!-- Trade Desk Badge -->
          <div style="margin-top: 28px; padding: 16px; background-color: #f0fdf4; border-left: 4px solid #10b981; border-radius: 6px; font-size: 12px; color: #065f46;">
            <strong>Commercial Sales Desk:</strong> +971 56 944 8850 (Direct / WhatsApp)<br/>
            <strong>Sales Line:</strong> +971 56 953 8741<br/>
            <strong>Landline Office:</strong> +971 4 576 4169<br/>
            <strong>Location:</strong> Stand 19, Fresh Produce Block B, Al Aweer Central Market, Ras Al Khor, Dubai, UAE
          </div>
        </div>

        <!-- Footer -->
        <div style="padding: 16px 24px; background-color: #f1f5f9; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
          Sent by <strong>${channelInfo.name}</strong> (&lt;${channelInfo.address}&gt;)<br/>
          &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. All rights reserved.
        </div>
      </div>
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
