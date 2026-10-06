import nodemailer, { type Transporter } from 'nodemailer';

export type EmailChannel = 'info' | 'sales' | 'orders' | 'habeeb';

export function getEmailConfig() {
  const brandName = process.env.MAIL_FROM_NAME || process.env.SMTP_FROM_NAME || 'BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C';
  const infoEmail = process.env.MAIL_FROM_INFO || process.env.EMAIL_INFO || 'info@barakahalrizquae.com';
  const salesEmail = process.env.MAIL_FROM_SALES || process.env.EMAIL_SALES || 'sales@barakahalrizquae.com';
  const ordersEmail = process.env.MAIL_FROM_ORDERS || process.env.EMAIL_ORDERS || 'orders@barakahalrizquae.com';
  const habeebEmail = process.env.MAIL_FROM_HABEEB || process.env.EMAIL_HABEEB || 'habeeb@barakahalrizquae.com';
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'barakahalrizquae@gmail.com';

  return {
    brandName,
    adminEmail,
    channels: {
      info: {
        address: infoEmail,
        name: brandName,
        description: 'General Inquiries & Corporate Desk',
      },
      sales: {
        address: salesEmail,
        name: `${brandName} — Sales Desk`,
        description: 'Wholesale Quotations, Container Feeds & Spot Rates',
      },
      orders: {
        address: ordersEmail,
        name: `${brandName} — Wholesale Orders`,
        description: 'Order Confirmations, Logistics & Invoicing',
      },
      habeeb: {
        address: habeebEmail,
        name: `${brandName} — Managing Director Habeeb Khan`,
        description: 'Direct & Management Desk',
      },
    },
  };
}

let cachedTransporter: Transporter | null = null;

export function getTransporter(): Transporter | null {
  const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn('[EMAIL DISPATCHER] Notice: SMTP credentials not present in environment.');
    return null;
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: true,
      },
    });
  }

  return cachedTransporter;
}

export interface SendBarakahEmailOptions {
  channel: EmailChannel;
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
  inReplyTo?: string;
  references?: string;
}

export async function sendBarakahEmail(options: SendBarakahEmailOptions) {
  const { channel, to, subject, html, text, replyTo, cc, bcc, inReplyTo, references } = options;
  const config = getEmailConfig();
  const channelConfig = config.channels[channel] || config.channels.info;
  const fromHeader = `"${channelConfig.name}" <${channelConfig.address}>`;

  const transporter = getTransporter();
  if (!transporter) {
    console.log(`[EMAIL DISPATCHER LOCAL/SIMULATION] Channel [${channel}] to [${to}]: ${subject}`);
    return { success: false, simulated: true, error: 'SMTP credentials missing' };
  }

  try {
    const result = await transporter.sendMail({
      from: fromHeader,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>?/gm, ''),
      replyTo: replyTo || channelConfig.address,
      cc,
      bcc,
      inReplyTo,
      references,
    });

    return {
      success: true,
      messageId: result.messageId,
      accepted: result.accepted,
      response: result.response,
    };
  } catch (error: any) {
    // Safe server-side logging that never exposes credentials
    console.error(`[EMAIL DISPATCHER ERROR] Failed sending on channel [${channel}] (${error.code || 'UNKNOWN'}):`, error.message);
    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
}

/**
 * 1. General Contact / Inquiries Workflow (info@barakahalrizquae.com)
 */
export async function sendGeneralInquiryEmail(lead: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  const { adminEmail, channels } = getEmailConfig();
  
  // A. Admin notification email
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
      <div style="background: #063d24; padding: 18px 24px; border-radius: 8px; text-align: center; color: #ffffff;">
        <h2 style="margin: 0; font-size: 18px; color: #fef08a;">BARAKAH AL RIZQ — GENERAL INQUIRY</h2>
        <p style="margin: 4px 0 0; font-size: 11px; color: #a7f3d0; letter-spacing: 0.5px;">AL AWEER CENTRAL FRUIT & VEGETABLE MARKET, DUBAI, UAE</p>
      </div>
      <div style="padding: 20px 8px; color: #1f2937;">
        <h3 style="color: #063d24; font-size: 15px; margin-top: 0;">Inquiry Details</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px;">
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; width: 32%; color: #4b5563;">Contact Name</td><td style="padding: 10px 14px; color: #111827;">${lead.name}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Company</td><td style="padding: 10px 14px; color: #111827;">${lead.company || 'Not Specified'}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Phone / WhatsApp</td><td style="padding: 10px 14px; color: #111827;"><a href="tel:${lead.phone}" style="color: #065f46; font-weight: bold;">${lead.phone}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Email Address</td><td style="padding: 10px 14px; color: #111827;"><a href="mailto:${lead.email}" style="color: #065f46;">${lead.email}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Category / Interest</td><td style="padding: 10px 14px; color: #111827;">${lead.service || 'General Inquiry'}</td></tr>
          <tr><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Message / Note</td><td style="padding: 10px 14px; color: #111827; white-space: pre-wrap;">${lead.message}</td></tr>
        </table>
      </div>
      <div style="text-align: center; font-size: 11px; color: #9ca3af; padding-top: 14px; border-top: 1px solid #e5e7eb;">
        &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. All rights reserved.
      </div>
    </div>
  `;

  // Internal notification
  const adminResult = await sendBarakahEmail({
    channel: 'info',
    to: adminEmail,
    replyTo: lead.email,
    subject: `[General Inquiry] ${lead.name} — ${lead.company || 'Barakah Portal'}`,
    html: adminHtml,
  });

  // B. Customer confirmation acknowledgment
  if (lead.email && lead.email.includes('@')) {
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
        <div style="background: #063d24; padding: 18px 24px; border-radius: 8px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 18px; color: #fef08a;">BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C</h2>
          <p style="margin: 4px 0 0; font-size: 11px; color: #a7f3d0;">Al Aweer Central Fruit & Vegetable Market, Dubai, UAE</p>
        </div>
        <div style="padding: 24px 8px; color: #1f2937;">
          <h3 style="color: #063d24; font-size: 16px; margin-top: 0;">Thank You for Reaching Out, ${lead.name}</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #374151;">We have received your message regarding <strong>${lead.service || 'Wholesale Produce'}</strong>. Our trade desk team at Al Aweer Central Market will review your request and get in touch with you shortly.</p>
          <div style="padding: 14px; background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 6px; font-size: 13px; color: #065f46; margin: 18px 0;">
            <strong>Direct Sales Hotline:</strong> +971 56 944 8850<br/>
            <strong>WhatsApp Trade Desk:</strong> +971 50 252 6750<br/>
            <strong>Central Market Address:</strong> Stand 19, Fresh Produce Block B, Al Aweer Market, Ras Al Khor, Dubai, UAE
          </div>
        </div>
        <div style="text-align: center; font-size: 11px; color: #9ca3af; padding-top: 14px; border-top: 1px solid #e5e7eb;">
          &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
        </div>
      </div>
    `;

    await sendBarakahEmail({
      channel: 'info',
      to: lead.email,
      replyTo: channels.info.address,
      subject: `Inquiry Received — Barakah Al Rizq Foodstuff Trading L.L.C`,
      html: customerHtml,
    });
  }

  return adminResult;
}

/**
 * 2. Sales & Quotation Workflow (sales@barakahalrizquae.com)
 */
export async function sendSalesQuotationEmail(quote: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  productName?: string;
  quantity?: string;
  orderType?: string;
  notes?: string;
}) {
  const { adminEmail, channels } = getEmailConfig();

  // A. Internal Sales Desk Alert
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
      <div style="background: #063d24; padding: 18px 24px; border-radius: 8px; text-align: center; color: #ffffff;">
        <h2 style="margin: 0; font-size: 18px; color: #fef08a;">⚡ NEW WHOLESALE / CONTAINER QUOTATION REQUEST</h2>
        <p style="margin: 4px 0 0; font-size: 11px; color: #a7f3d0;">Sales Desk — Al Aweer Central Market, Dubai</p>
      </div>
      <div style="padding: 20px 8px; color: #1f2937;">
        <h3 style="color: #063d24; font-size: 15px; margin-top: 0;">Quotation Requirement</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px;">
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; width: 35%; color: #4b5563;">Product Requested</td><td style="padding: 10px 14px; font-weight: bold; color: #065f46;">${quote.productName || 'Wholesale Produce'}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Order Channel</td><td style="padding: 10px 14px; color: #111827;">${quote.orderType || 'Container Wholesale'}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Estimated Volume</td><td style="padding: 10px 14px; color: #111827;">${quote.quantity || '1x40ft FCL Reefer'}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Buyer Name</td><td style="padding: 10px 14px; color: #111827;">${quote.name}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Company Entity</td><td style="padding: 10px 14px; color: #111827;">${quote.company || 'Not Specified'}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Direct Phone / WA</td><td style="padding: 10px 14px; color: #111827;"><a href="tel:${quote.phone}" style="color: #065f46; font-weight: bold;">${quote.phone}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Buyer Email</td><td style="padding: 10px 14px; color: #111827;"><a href="mailto:${quote.email}" style="color: #065f46;">${quote.email}</a></td></tr>
          <tr><td style="padding: 10px 14px; font-weight: bold; color: #4b5563;">Specific Notes</td><td style="padding: 10px 14px; color: #111827; white-space: pre-wrap;">${quote.notes || 'None'}</td></tr>
        </table>
      </div>
      <div style="text-align: center; font-size: 11px; color: #9ca3af; padding-top: 14px; border-top: 1px solid #e5e7eb;">
        &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
      </div>
    </div>
  `;

  // Internal Sales notification
  const adminResult = await sendBarakahEmail({
    channel: 'sales',
    to: adminEmail,
    replyTo: quote.email,
    subject: `[Quotation Request] ${quote.productName || 'Wholesale'} — ${quote.company || quote.name}`,
    html: adminHtml,
  });

  // B. Buyer quotation acknowledgment
  if (quote.email && quote.email.includes('@')) {
    const buyerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
        <div style="background: #063d24; padding: 18px 24px; border-radius: 8px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 18px; color: #fef08a;">BARAKAH AL RIZQ — SALES DESK</h2>
          <p style="margin: 4px 0 0; font-size: 11px; color: #a7f3d0;">Direct Importer Wholesale & Al Aweer Spot Market</p>
        </div>
        <div style="padding: 24px 8px; color: #1f2937;">
          <h3 style="color: #063d24; font-size: 16px; margin-top: 0;">Quotation Request Registered</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #374151;">Dear ${quote.name},</p>
          <p style="font-size: 14px; line-height: 1.6; color: #374151;">We have received your commercial wholesale inquiry for <strong>${quote.productName || 'Fresh Produce'}</strong> (${quote.quantity || 'Wholesale Volume'}). Our sales desk is compiling the active session spot rate and direct importer pricing for you.</p>
          <div style="padding: 14px; background: #ecfdf5; border-left: 4px solid #10b981; border-radius: 6px; font-size: 13px; color: #065f46; margin: 18px 0;">
            <strong>Direct Sales Representative:</strong> +971 56 944 8850<br/>
            <strong>Email:</strong> sales@barakahalrizquae.com<br/>
            <strong>Daily Spot Feed:</strong> Real-time container pricing updated every morning at 06:00 GST.
          </div>
        </div>
        <div style="text-align: center; font-size: 11px; color: #9ca3af; padding-top: 14px; border-top: 1px solid #e5e7eb;">
          &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
        </div>
      </div>
    `;

    await sendBarakahEmail({
      channel: 'sales',
      to: quote.email,
      replyTo: channels.sales.address,
      subject: `Quotation Request Received — ${quote.productName || 'Wholesale Produce'}`,
      html: buyerHtml,
    });
  }

  return adminResult;
}

/**
 * 3. Website Orders Workflow (orders@barakahalrizquae.com)
 */
export async function sendOrderNotificationAndConfirmation(order: {
  id: string;
  customerName: string;
  companyName?: string;
  email: string;
  phone: string;
  pickupDate: string;
  pickupTime?: string;
  pickupLocation: string;
  orderType: string;
  items: Array<{
    productName: string;
    quantityCtn: number;
    pricePerCtn: number;
    lineTotalAED: number;
    packagingUnit?: string;
  }>;
  totalCtn: number;
  totalAED: number;
  notes?: string;
}) {
  const { adminEmail, channels } = getEmailConfig();

  const itemsRows = order.items
    .map(
      (it) => `
      <tr style="border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 8px 12px; color: #111827; font-weight: 500;">${it.productName}</td>
        <td style="padding: 8px 12px; text-align: center; color: #4b5563;">${it.quantityCtn} ${it.packagingUnit || 'CTN'}</td>
        <td style="padding: 8px 12px; text-align: right; color: #4b5563;">${it.pricePerCtn.toFixed(2)} Dhs</td>
        <td style="padding: 8px 12px; text-align: right; font-weight: bold; color: #065f46;">${it.lineTotalAED.toFixed(2)} Dhs</td>
      </tr>
    `
    )
    .join('');

  // A. Internal Orders Desk Notification
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
      <div style="background: #063d24; padding: 18px 24px; border-radius: 8px; text-align: center; color: #ffffff;">
        <h2 style="margin: 0; font-size: 18px; color: #fef08a;">📦 NEW WHOLESALE STORE PICKUP ORDER</h2>
        <p style="margin: 4px 0 0; font-size: 11px; color: #a7f3d0;">Order Reference: <strong>${order.id}</strong></p>
      </div>
      <div style="padding: 20px 8px; color: #1f2937;">
        <h3 style="color: #063d24; font-size: 15px; margin-top: 0;">Customer & Fulfillment Details</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 16px;">
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px; font-weight: bold; width: 35%; color: #4b5563;">Customer</td><td style="padding: 8px 12px; color: #111827;">${order.customerName}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px; font-weight: bold; color: #4b5563;">Company</td><td style="padding: 8px 12px; color: #111827;">${order.companyName || 'Not Specified'}</td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px; font-weight: bold; color: #4b5563;">Phone / WhatsApp</td><td style="padding: 8px 12px; color: #111827;"><a href="tel:${order.phone}" style="color: #065f46; font-weight: bold;">${order.phone}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px; font-weight: bold; color: #4b5563;">Customer Email</td><td style="padding: 8px 12px; color: #111827;"><a href="mailto:${order.email}" style="color: #065f46;">${order.email}</a></td></tr>
          <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px 12px; font-weight: bold; color: #4b5563;">Pickup Schedule</td><td style="padding: 8px 12px; color: #111827;">${order.pickupDate} (${order.pickupTime || 'Morning Session'})</td></tr>
          <tr><td style="padding: 8px 12px; font-weight: bold; color: #4b5563;">Pickup Hub</td><td style="padding: 8px 12px; color: #111827;">${order.pickupLocation}</td></tr>
        </table>

        <h3 style="color: #063d24; font-size: 15px; margin: 16px 0 8px;">Order Manifest</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px;">
          <thead>
            <tr style="background: #f3f4f6; text-align: left; font-size: 11px; text-transform: uppercase; color: #6b7280;">
              <th style="padding: 8px 12px;">Product</th>
              <th style="padding: 8px 12px; text-align: center;">Qty</th>
              <th style="padding: 8px 12px; text-align: right;">Unit Rate</th>
              <th style="padding: 8px 12px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsRows}
            <tr style="background: #f8fafc; font-weight: bold;">
              <td colspan="3" style="padding: 10px 12px; text-align: right; color: #111827;">Grand Total (${order.totalCtn} CTN):</td>
              <td style="padding: 10px 12px; text-align: right; color: #063d24; font-size: 15px;">${order.totalAED.toFixed(2)} Dhs</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="text-align: center; font-size: 11px; color: #9ca3af; padding-top: 14px; border-top: 1px solid #e5e7eb;">
        &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C.
      </div>
    </div>
  `;

  // Internal Orders notification
  const adminResult = await sendBarakahEmail({
    channel: 'orders',
    to: adminEmail,
    replyTo: order.email,
    subject: `[New Order ${order.id}] ${order.customerName} — ${order.totalAED.toFixed(2)} Dhs (${order.totalCtn} CTN)`,
    html: adminHtml,
  });

  // B. Customer Order Confirmation Invoice
  if (order.email && order.email.includes('@')) {
    const customerHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px;">
        <div style="background: #063d24; padding: 20px 24px; border-radius: 8px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 18px; color: #fef08a;">WHOLESALE ORDER CONFIRMATION</h2>
          <p style="margin: 4px 0 0; font-size: 12px; color: #a7f3d0;">Barakah Al Rizq Foodstuff Trading L.L.C</p>
        </div>
        <div style="padding: 24px 8px; color: #1f2937;">
          <h3 style="color: #063d24; font-size: 16px; margin-top: 0;">Order #${order.id} Confirmed</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #374151;">Dear ${order.customerName},</p>
          <p style="font-size: 14px; line-height: 1.6; color: #374151;">Thank you for your wholesale order with Barakah Al Rizq. Your order has been registered in our central fulfillment system for store collection at Al Aweer Central Market.</p>
          
          <div style="padding: 14px; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; margin: 18px 0; font-size: 13px; color: #065f46;">
            <strong>Scheduled Pickup Date:</strong> ${order.pickupDate} (${order.pickupTime || 'Morning Session'})<br/>
            <strong>Pickup Location:</strong> ${order.pickupLocation}<br/>
            <strong>Payment Method:</strong> Cash on Delivery / Bank Transfer upon collection
          </div>

          <h4 style="color: #063d24; margin: 16px 0 8px; font-size: 14px;">Order Summary</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px;">
            <thead>
              <tr style="background: #f3f4f6; text-align: left; font-size: 11px; text-transform: uppercase; color: #6b7280;">
                <th style="padding: 8px 12px;">Item</th>
                <th style="padding: 8px 12px; text-align: center;">Qty</th>
                <th style="padding: 8px 12px; text-align: right;">Unit Price</th>
                <th style="padding: 8px 12px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsRows}
              <tr style="background: #f8fafc; font-weight: bold;">
                <td colspan="3" style="padding: 10px 12px; text-align: right; color: #111827;">Total Amount Payable:</td>
                <td style="padding: 10px 12px; text-align: right; color: #063d24; font-size: 15px;">${order.totalAED.toFixed(2)} Dhs</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 20px; font-size: 12px; color: #6b7280; line-height: 1.5;">
            Need help or need to modify your pickup time? Contact our Orders Desk directly at <a href="tel:+971569448850" style="color: #065f46; font-weight: bold;">+971 56 944 8850</a> or email <a href="mailto:${channels.orders.address}" style="color: #065f46;">${channels.orders.address}</a>.
          </div>
        </div>
        <div style="text-align: center; font-size: 11px; color: #9ca3af; padding-top: 14px; border-top: 1px solid #e5e7eb;">
          &copy; ${new Date().getFullYear()} BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C. All rights reserved.<br/>
          Dubai, United Arab Emirates
        </div>
      </div>
    `;

    await sendBarakahEmail({
      channel: 'orders',
      to: order.email,
      replyTo: channels.orders.address,
      subject: `Order Confirmation #${order.id} — Barakah Al Rizq Foodstuff Trading L.L.C`,
      html: customerHtml,
    });
  }

  return adminResult;
}

// Backward-compatible alias
export const sendLeadNotificationEmail = sendGeneralInquiryEmail;
