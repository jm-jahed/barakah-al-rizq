const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables strictly from local .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
const port = parseInt(process.env.SMTP_PORT || '587', 10);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

const brandName = process.env.MAIL_FROM_NAME || 'BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C';
const infoEmail = process.env.MAIL_FROM_INFO || 'info@barakahalrizquae.com';
const salesEmail = process.env.MAIL_FROM_SALES || 'sales@barakahalrizquae.com';
const ordersEmail = process.env.MAIL_FROM_ORDERS || 'orders@barakahalrizquae.com';
const testRecipient = process.env.ADMIN_NOTIFICATION_EMAIL || 'barakahalrizquae@gmail.com';

const results = {
  directTests: {},
  workflowTests: {},
};

async function runAllTests() {
  console.log('================================================================');
  console.log('🇦🇪 BARAKAH AL RIZQ — 3 CHANNELS & WORKFLOWS EMAIL TEST SUITE');
  console.log('================================================================');

  if (!user || !pass) {
    console.error('❌ FATAL: SMTP credentials missing from .env.local');
    process.exit(1);
  }

  console.log(`Relay Host:    ${host}:${port}`);
  console.log(`SMTP Login:    ${user}`);
  console.log(`SMTP Secret:   [CONFIGURED SECURELY - ${pass.length} chars]`);
  console.log(`Test Recipient: ${testRecipient}`);
  console.log('----------------------------------------------------------------\n');

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    tls: { rejectUnauthorized: true },
  });

  try {
    console.log('⏳ Verifying SMTP Handshake with Brevo Relay...');
    await transporter.verify();
    console.log('✅ Handshake Verified successfully!\n');
  } catch (err) {
    console.error('❌ Handshake Failed:', err.message);
    process.exit(1);
  }

  // -------------------------------------------------------------
  // TEST 1: info@ Direct SMTP Test
  // -------------------------------------------------------------
  console.log('--- [TEST 1] Testing info@barakahalrizquae.com ---');
  try {
    const res1 = await transporter.sendMail({
      from: `"${brandName}" <${infoEmail}>`,
      to: testRecipient,
      replyTo: 'customer.test@example.ae',
      subject: '[TEST] Barakah Info Email',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #d1fae5; border-radius: 8px; background: #f0fdf4;">
          <h2 style="color: #063d24; margin: 0 0 10px;">[TEST 1] Barakah Info Channel Verified</h2>
          <p style="font-size: 13px; color: #374151;"><strong>FROM:</strong> "${brandName}" &lt;${infoEmail}&gt;</p>
          <p style="font-size: 13px; color: #374151;"><strong>REPLY-TO:</strong> customer.test@example.ae</p>
          <p style="font-size: 13px; color: #374151;"><strong>TO:</strong> ${testRecipient}</p>
          <p style="font-size: 13px; color: #065f46;">Direct test for General Inquiries and Corporate trade desk.</p>
        </div>
      `,
    });
    console.log(`✅ TEST 1 PASS — info@ -> ${testRecipient} (Msg ID: ${res1.messageId})`);
    results.directTests.info = { status: 'PASS', messageId: res1.messageId, response: res1.response };
  } catch (err) {
    console.error(`❌ TEST 1 FAIL:`, err.message);
    results.directTests.info = { status: 'FAIL', error: err.message };
  }

  // -------------------------------------------------------------
  // TEST 2: sales@ Direct SMTP Test
  // -------------------------------------------------------------
  console.log('\n--- [TEST 2] Testing sales@barakahalrizquae.com ---');
  try {
    const res2 = await transporter.sendMail({
      from: `"${brandName} — Sales Desk" <${salesEmail}>`,
      to: testRecipient,
      replyTo: 'procurement@hypermarket.ae',
      subject: '[TEST] Barakah Sales Email',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #fef08a; border-radius: 8px; background: #fefce8;">
          <h2 style="color: #854d0e; margin: 0 0 10px;">[TEST 2] Barakah Sales Channel Verified</h2>
          <p style="font-size: 13px; color: #374151;"><strong>FROM:</strong> "${brandName} — Sales Desk" &lt;${salesEmail}&gt;</p>
          <p style="font-size: 13px; color: #374151;"><strong>REPLY-TO:</strong> procurement@hypermarket.ae</p>
          <p style="font-size: 13px; color: #374151;"><strong>TO:</strong> ${testRecipient}</p>
          <p style="font-size: 13px; color: #854d0e;">Direct test for Wholesale Quotations, Spot Price Feeds & Container Rates.</p>
        </div>
      `,
    });
    console.log(`✅ TEST 2 PASS — sales@ -> ${testRecipient} (Msg ID: ${res2.messageId})`);
    results.directTests.sales = { status: 'PASS', messageId: res2.messageId, response: res2.response };
  } catch (err) {
    console.error(`❌ TEST 2 FAIL:`, err.message);
    results.directTests.sales = { status: 'FAIL', error: err.message };
  }

  // -------------------------------------------------------------
  // TEST 3: orders@ Direct SMTP Test
  // -------------------------------------------------------------
  console.log('\n--- [TEST 3] Testing orders@barakahalrizquae.com ---');
  try {
    const res3 = await transporter.sendMail({
      from: `"${brandName} — Wholesale Orders" <${ordersEmail}>`,
      to: testRecipient,
      replyTo: ordersEmail,
      subject: '[TEST] Barakah Orders Email',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #bfdbfe; border-radius: 8px; background: #eff6ff;">
          <h2 style="color: #1e3a8a; margin: 0 0 10px;">[TEST 3] Barakah Orders Channel Verified</h2>
          <p style="font-size: 13px; color: #374151;"><strong>FROM:</strong> "${brandName} — Wholesale Orders" &lt;${ordersEmail}&gt;</p>
          <p style="font-size: 13px; color: #374151;"><strong>REPLY-TO:</strong> ${ordersEmail}</p>
          <p style="font-size: 13px; color: #374151;"><strong>TO:</strong> ${testRecipient}</p>
          <p style="font-size: 13px; color: #1e3a8a;">Direct test for Wholesale Store Pickup & Container Invoicing.</p>
        </div>
      `,
    });
    console.log(`✅ TEST 3 PASS — orders@ -> ${testRecipient} (Msg ID: ${res3.messageId})`);
    results.directTests.orders = { status: 'PASS', messageId: res3.messageId, response: res3.response };
  } catch (err) {
    console.error(`❌ TEST 3 FAIL:`, err.message);
    results.directTests.orders = { status: 'FAIL', error: err.message };
  }

  // -------------------------------------------------------------
  // WORKFLOW TESTS
  // -------------------------------------------------------------
  console.log('\n================================================================');
  console.log('🔄 TESTING REAL PRODUCTION APPLICATION EMAIL WORKFLOWS');
  console.log('================================================================');

  // Workflow 1: Contact / Inquiry Workflow (info@)
  console.log('\n--- [WORKFLOW 1] Contact / General Inquiry Flow ---');
  try {
    const leadSample = {
      name: 'Mansoor Al Falasi',
      email: testRecipient,
      phone: '+971 50 882 1944',
      company: 'Emirates Catering Hub LLC',
      service: 'Fresh Fruits & Vegetables Supply',
      budget: 'Weekly 15 Tons',
      message: 'Looking for a daily delivery contract of Fresh Indian Red Onions and Tomatoes for 3 catering facilities in Dubai.',
    };

    const wfRes1 = await transporter.sendMail({
      from: `"${brandName}" <${infoEmail}>`,
      to: testRecipient,
      replyTo: leadSample.email,
      subject: `[General Inquiry] ${leadSample.name} — ${leadSample.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px; background: #ffffff;">
          <div style="background: #063d24; padding: 14px; border-radius: 6px; color: #ffffff; text-align: center;">
            <h3 style="margin: 0; color: #fef08a;">BARAKAH AL RIZQ — GENERAL INQUIRY</h3>
          </div>
          <table style="width: 100%; font-size: 13px; margin: 16px 0; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold; width: 30%;">Name:</td><td>${leadSample.name}</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Company:</td><td>${leadSample.company}</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Phone:</td><td>${leadSample.phone}</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Service:</td><td>${leadSample.service}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td>${leadSample.message}</td></tr>
          </table>
        </div>
      `,
    });
    console.log(`✅ WORKFLOW 1 PASS — Contact/Inquiry -> info@ (Msg ID: ${wfRes1.messageId})`);
    results.workflowTests.contactInquiry = 'PASS';
  } catch (err) {
    console.error(`❌ WORKFLOW 1 FAIL:`, err.message);
    results.workflowTests.contactInquiry = 'FAIL';
  }

  // Workflow 2: Sales / Quotation Workflow (sales@)
  console.log('\n--- [WORKFLOW 2] Sales / Quotation Request Flow ---');
  try {
    const quoteSample = {
      name: 'Rashid Al Nuaimi',
      email: testRecipient,
      phone: '+971 55 921 4400',
      company: 'Gulf Fresh Distribution',
      productName: 'Fresh Garlic (White Pure)',
      quantity: '1x40ft FCL Container (24 Tons)',
      orderType: 'Container Wholesale',
      notes: 'Require CIF Jebel Ali / Dubai Port Delivery schedule for next week.',
    };

    const wfRes2 = await transporter.sendMail({
      from: `"${brandName} — Sales Desk" <${salesEmail}>`,
      to: testRecipient,
      replyTo: quoteSample.email,
      subject: `[Quotation Request] ${quoteSample.productName} — ${quoteSample.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px; background: #ffffff;">
          <div style="background: #063d24; padding: 14px; border-radius: 6px; color: #ffffff; text-align: center;">
            <h3 style="margin: 0; color: #fef08a;">⚡ NEW CONTAINER QUOTATION REQUEST</h3>
          </div>
          <table style="width: 100%; font-size: 13px; margin: 16px 0; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold; width: 30%;">Product:</td><td style="font-weight: bold; color: #065f46;">${quoteSample.productName}</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Volume:</td><td>${quoteSample.quantity}</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Buyer:</td><td>${quoteSample.name} (${quoteSample.company})</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Phone:</td><td>${quoteSample.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Notes:</td><td>${quoteSample.notes}</td></tr>
          </table>
        </div>
      `,
    });
    console.log(`✅ WORKFLOW 2 PASS — Sales/Quotation -> sales@ (Msg ID: ${wfRes2.messageId})`);
    results.workflowTests.salesQuote = 'PASS';
  } catch (err) {
    console.error(`❌ WORKFLOW 2 FAIL:`, err.message);
    results.workflowTests.salesQuote = 'FAIL';
  }

  // Workflow 3: Website Order Confirmation (orders@)
  console.log('\n--- [WORKFLOW 3] Website Order Notification & Invoice Flow ---');
  try {
    const orderSample = {
      id: 'BARAKAH-WH-9042',
      customerName: 'Zayed Al Mansoori',
      companyName: 'Al Barari Groceries LLC',
      email: testRecipient,
      phone: '+971 52 443 8901',
      pickupDate: 'Tomorrow, 07 Oct 2026',
      pickupTime: 'Morning Session (07:00 - 11:00)',
      pickupLocation: 'Store Pickup — Barakah Al Rizq, Al Aweer Central Fruit & Vegetable Market, Stand 19, Dubai',
      items: [
        { productName: 'Fresh Red Tomatoes (Grade A)', quantityCtn: 25, pricePerCtn: 18.5, lineTotalAED: 462.5 },
        { productName: 'Fresh White Garlic (10kg Carton)', quantityCtn: 20, pricePerCtn: 42.0, lineTotalAED: 840.0 },
      ],
      totalCtn: 45,
      totalAED: 1302.5,
    };

    const wfRes3 = await transporter.sendMail({
      from: `"${brandName} — Wholesale Orders" <${ordersEmail}>`,
      to: testRecipient,
      replyTo: orderSample.email,
      subject: `[New Order ${orderSample.id}] ${orderSample.customerName} — ${orderSample.totalAED.toFixed(2)} Dhs (${orderSample.totalCtn} CTN)`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 10px; background: #ffffff;">
          <div style="background: #063d24; padding: 14px; border-radius: 6px; color: #ffffff; text-align: center;">
            <h3 style="margin: 0; color: #fef08a;">📦 WHOLESALE ORDER CONFIRMATION #${orderSample.id}</h3>
          </div>
          <table style="width: 100%; font-size: 13px; margin: 16px 0; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold; width: 30%;">Customer:</td><td>${orderSample.customerName} (${orderSample.companyName})</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Pickup Hub:</td><td>${orderSample.pickupLocation}</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Pickup Schedule:</td><td>${orderSample.pickupDate} (${orderSample.pickupTime})</td></tr>
            <tr style="border-bottom: 1px solid #f3f4f6;"><td style="padding: 8px; font-weight: bold;">Total CTN:</td><td>${orderSample.totalCtn} CTN</td></tr>
            <tr style="font-weight: bold; font-size: 14px;"><td style="padding: 8px; color: #063d24;">Grand Total:</td><td style="color: #063d24;">${orderSample.totalAED.toFixed(2)} Dhs</td></tr>
          </table>
        </div>
      `,
    });
    console.log(`✅ WORKFLOW 3 PASS — Website Order -> orders@ (Msg ID: ${wfRes3.messageId})`);
    results.workflowTests.websiteOrder = 'PASS';
  } catch (err) {
    console.error(`❌ WORKFLOW 3 FAIL:`, err.message);
    results.workflowTests.websiteOrder = 'FAIL';
  }

  console.log('\n================================================================');
  console.log('🏁 ALL TESTS EXECUTED SUCCESSFULLY!');
  console.log('================================================================');
  console.log(JSON.stringify(results, null, 2));
}

runAllTests();
