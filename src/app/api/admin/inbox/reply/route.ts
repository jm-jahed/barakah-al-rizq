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

    // Format professional HTML reply
    const escapedReplyBody = replyBody
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    const originalSnippet = (originalMessage.textBody || originalMessage.previewText || '')
      .slice(0, 500)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br/>');

    const formattedHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${replySubject}</title>
</head>
<body style="font-family: Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b;">
  <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden;">
    <div style="background: #022c22; padding: 20px 24px; border-bottom: 2px solid #059669;">
      <h1 style="color: #ffffff; margin: 0; font-size: 17px; font-weight: 800; letter-spacing: 0.5px;">BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</h1>
      <p style="color: #6ee7b7; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; font-family: monospace;">
        ${channelConfig.name} &bull; Dubai, UAE
      </p>
    </div>
    <div style="padding: 24px; font-size: 14px; line-height: 1.6; color: #334155;">
      <div style="margin-bottom: 24px; white-space: pre-wrap; font-size: 14px; color: #0f172a;">${escapedReplyBody}</div>
      
      <div style="margin-top: 32px; padding: 16px; background-color: #f1f5f9; border-left: 3px solid #059669; border-radius: 6px; font-size: 12px; color: #64748b;">
        <div style="font-weight: 700; color: #334155; margin-bottom: 6px;">On ${new Date(originalMessage.receivedAt).toUTCString()}, ${originalMessage.fromName || originalMessage.fromEmail} wrote:</div>
        <div style="white-space: pre-wrap;">${originalSnippet}</div>
      </div>
    </div>
    <div style="background: #f8fafc; padding: 16px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.5;">
      <p style="margin: 0; font-weight: 600; color: #334155;">Barakah Al Rizq Foodstuff Trading L.L.C</p>
      <p style="margin: 2px 0 0 0;">Stand 19, Fresh Produce Block B, Al Aweer Central Market, Ras Al Khor, Dubai, UAE</p>
      <p style="margin: 2px 0 0 0;">Direct Tel: +971 56 944 8850 &bull; Email: ${channelConfig.address}</p>
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
