const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables strictly from local .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

async function runSmtpTest() {
  console.log('================================================================');
  console.log('🧪 BARAKAH AL RIZQ — BREVO SMTP CONNECTION & DISPATCH TEST');
  console.log('================================================================');

  const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const fromEmail = process.env.SMTP_FROM_EMAIL || 'info@barakahalrizquae.com';
  const fromName = process.env.SMTP_FROM_NAME || 'BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C';
  const toEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'barakahalrizquae@gmail.com';

  if (!user || !pass) {
    console.error('❌ FAIL: SMTP_USER or SMTP_PASS environment variable is missing.');
    process.exit(1);
  }

  console.log(`📡 Host:     ${host}:${port}`);
  console.log(`👤 User:     ${user}`);
  console.log(`🔒 Pass:     [CONFIGURED SECURELY - ${pass.length} chars]`);
  console.log(`📤 From:     "${fromName}" <${fromEmail}>`);
  console.log(`📥 To:       ${toEmail}`);
  console.log('----------------------------------------------------------------');

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // false for 587 (STARTTLS)
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    console.log('⏳ 1. Verifying SMTP credentials and handshake with Brevo...');
    await transporter.verify();
    console.log('✅ SMTP Handshake & Authentication Successful!');

    console.log(`⏳ 2. Dispatching test email to ${toEmail}...`);
    const testTimestamp = new Date().toISOString();
    const mailOptions = {
      from: `"${fromName}" <${fromEmail}>`,
      to: toEmail,
      subject: `[TEST] Barakah Al Rizq — Brevo SMTP Handshake Verified (${new Date().toLocaleTimeString('en-AE', { timeZone: 'Asia/Dubai' })} GST)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
          <div style="background: #063d24; padding: 20px; border-radius: 8px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; font-weight: bold; color: #fef08a;">BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</h1>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #d1fae5; letter-spacing: 1px;">AL AWEER CENTRAL FRUIT & VEGETABLE MARKET, DUBAI, UAE</p>
          </div>
          <div style="padding: 24px 8px; color: #1f2937;">
            <h2 style="color: #063d24; font-size: 16px; margin-top: 0;">✅ Brevo SMTP Relay Verification Successful</h2>
            <p style="font-size: 14px; line-height: 1.6;">This is an automated verification email confirming that the Brevo SMTP relay for <strong>Barakah Al Rizq</strong> has been properly configured and validated.</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin: 20px 0; background: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 14px; font-weight: bold; color: #4b5563; width: 35%;">Relay Host</td>
                <td style="padding: 10px 14px; color: #111827;">${host}:${port}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Authorized Sender</td>
                <td style="padding: 10px 14px; color: #111827;">${fromEmail}</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Recipient</td>
                <td style="padding: 10px 14px; color: #111827;">${toEmail}</td>
              </tr>
              <tr>
                <td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Timestamp</td>
                <td style="padding: 10px 14px; color: #111827;">${testTimestamp} (GST)</td>
              </tr>
            </table>
            <div style="padding: 12px; background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 4px; font-size: 13px; color: #065f46;">
              <strong>Status:</strong> Ready for real-time customer quotation notifications, wholesale trade inquiries, and daily spot rate alerts.
            </div>
          </div>
          <div style="text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 16px;">
            &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. All rights reserved.<br/>
            Dubai, United Arab Emirates
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('----------------------------------------------------------------');
    console.log('🎉 RESULT: PASS');
    console.log(`✉️ Message ID: ${info.messageId}`);
    console.log(`📬 Response:   ${info.response}`);
    console.log(`👥 Accepted:   ${info.accepted.join(', ')}`);
    console.log('================================================================');
  } catch (error) {
    console.log('----------------------------------------------------------------');
    console.error('❌ RESULT: FAIL');
    console.error(`Error Code:    ${error.code || 'N/A'}`);
    console.error(`Error Command: ${error.command || 'N/A'}`);
    console.error(`Error Message: ${error.message}`);
    if (error.response) {
      console.error(`Server Resp:   ${error.response}`);
    }
    console.log('================================================================');
    process.exit(1);
  }
}

runSmtpTest();
