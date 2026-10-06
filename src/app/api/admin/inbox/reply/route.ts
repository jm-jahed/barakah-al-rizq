import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getInboxMessageById, updateInboxMessageStatus, resolveMailboxByRecipient } from '@/lib/mongodb';
import { sendBarakahEmail, getEmailConfig, type EmailChannel } from '@/lib/email';

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const { messageId, replySubject, replyBody } = body;
    if (!messageId || typeof messageId !== 'string') {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }

    if (!replySubject || typeof replySubject !== 'string' || !replySubject.trim()) {
      return NextResponse.json({ error: 'Reply subject is required' }, { status: 400 });
    }

    if (!replyBody || typeof replyBody !== 'string' || !replyBody.trim()) {
      return NextResponse.json({ error: 'Reply body cannot be empty' }, { status: 400 });
    }

    // Load original message from database
    const originalMessage = await getInboxMessageById(messageId);
    if (!originalMessage) {
      return NextResponse.json({ error: 'Original message not found' }, { status: 404 });
    }

    // Determine sender channel strictly based on original toEmail
    const resolved = await resolveMailboxByRecipient(originalMessage.toEmail);
    const channel: EmailChannel = (resolved?.channel || originalMessage.mailbox || 'info') as EmailChannel;

    // Determine recipient
    const recipient = (originalMessage.replyTo && originalMessage.replyTo.trim()) || originalMessage.fromEmail;
    if (!recipient || !recipient.includes('@')) {
      return NextResponse.json({ error: 'Invalid recipient email address on original message' }, { status: 400 });
    }

    // Security check on subject & body to prevent CRLF injection
    if (/[\r\n]/.test(replySubject)) {
      return NextResponse.json({ error: 'Subject contains invalid control characters' }, { status: 400 });
    }

    const config = getEmailConfig();
    const channelConfig = config.channels[channel] || config.channels.info;

    // Clean desk title (remove duplicate company brand prefix if present)
    const deskTitle = channelConfig.name
      .replace(/^BARAKAH\s+AL\s+RIZQ\s+FOODSTUFF\s+TRADING\s+L\.L\.C\s*[—–-]\s*/i, '')
      .trim() || 'Commercial Trade Desk';

    // Format clean reply body
    const escapedReplyBody = replyBody
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    // Strip raw MIME headers (Content-Type, charset, etc.) and clean quoted snippet
    const rawQuoteText = originalMessage.textBody || originalMessage.previewText || '';
    const filteredQuoteLines: string[] = [];
    for (const line of rawQuoteText.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed && filteredQuoteLines.length === 0) continue;
      // Filter out technical MIME headers leaking into email body
      if (/^Content-(Type|Transfer-Encoding|Disposition|ID):/i.test(trimmed)) continue;
      if (/^charset\s*=/i.test(trimmed)) continue;
      if (/^MIME-Version:/i.test(trimmed)) continue;
      if (/^--[a-zA-Z0-9_-]+--?$/.test(trimmed)) continue;
      if (/^(Received|X-[a-zA-Z0-9-]+|DKIM-Signature):/i.test(trimmed)) continue;
      filteredQuoteLines.push(line);
    }
    const cleanQuoteRaw = filteredQuoteLines.join('\n').trim();
    const originalSnippet = (cleanQuoteRaw || originalMessage.previewText || 'Original message content')
      .slice(0, 500)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    const originalSenderName = originalMessage.fromName || originalMessage.fromEmail;
    const dateFormatted = originalMessage.receivedAt
      ? new Date(originalMessage.receivedAt).toLocaleDateString('en-GB', {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Dubai',
        })
      : '';

    const formattedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <title>${replySubject}</title>
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
      .reply-text {
        font-size: 13.5px !important;
        line-height: 1.6 !important;
      }
      .quote-card {
        margin-top: 16px !important;
        padding: 10px 10px !important;
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
      
      <!-- Primary Reply Message -->
      <div class="reply-text" style="font-size: 14px; color: #0f172a; white-space: pre-wrap; word-break: break-word; line-height: 1.65;">
        ${escapedReplyBody}
      </div>
      
      <!-- Quoted History Card (Cleaned of MIME headers, Sleek on Mobile) -->
      <div class="quote-card" style="margin-top: 22px; padding: 12px 14px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 3px solid #10b981; border-radius: 8px;">
        <div style="font-weight: 700; color: #0f172a; margin-bottom: 6px; font-size: 11.5px;">
          In reply to <span style="color: #047857;">${originalSenderName}</span>
          ${dateFormatted ? `<span style="color: #94a3b8; font-weight: normal; margin-left: 4px;">(${dateFormatted} GST)</span>` : ''}
        </div>
        <div style="font-size: 12px; line-height: 1.55; color: #475569; word-break: break-word;">
          ${originalSnippet}
        </div>
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

    // Send email via Brevo SMTP / Barakah dispatcher
    const sendResult = await sendBarakahEmail({
      channel,
      to: recipient,
      subject: replySubject,
      html: formattedHtml,
      text: `${replyBody}\n\n--- Original Message ---\nFrom: ${originalMessage.fromName || originalMessage.fromEmail}\nDate: ${originalMessage.receivedAt}\n\n${originalMessage.textBody || originalMessage.previewText}`,
      inReplyTo: originalMessage.messageId,
      references: originalMessage.references ? `${originalMessage.references} ${originalMessage.messageId}` : originalMessage.messageId,
    });

    if (!sendResult.success && !sendResult.simulated) {
      return NextResponse.json({
        error: sendResult.error || 'Failed to dispatch email via SMTP service',
      }, { status: 502 });
    }

    // Update message status to REPLIED
    const updated = await updateInboxMessageStatus(messageId, 'REPLIED');

    return NextResponse.json({
      success: true,
      simulated: sendResult.simulated || false,
      messageId: sendResult.messageId,
      message: updated,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal server error while sending reply';
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
