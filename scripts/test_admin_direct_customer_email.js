const path = require('path');
const dotenv = require('dotenv');

// Load environment variables strictly from local .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const crypto = require('crypto');
const SECRET = process.env.AUTH_SECRET || 'super-secret-jwt-key-change-in-production-2026';

function createToken(payload) {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // 24 hours
  const data = { ...payload, exp };
  const str = Buffer.from(JSON.stringify(data)).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(str).digest('base64url');
  return `${str}.${sig}`;
}

async function runAdminEmailTestSuite() {
  console.log('================================================================');
  console.log('🛡️ BARAKAH AL RIZQ — ADMIN CLIENT DIRECT EMAIL TEST SUITE');
  console.log('================================================================');

  const testRecipient = process.env.ADMIN_NOTIFICATION_EMAIL || 'barakahalrizquae@gmail.com';
  const brandName = process.env.MAIL_FROM_NAME || 'BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C';
  const infoEmail = process.env.MAIL_FROM_INFO || 'info@barakahalrizquae.com';
  const salesEmail = process.env.MAIL_FROM_SALES || 'sales@barakahalrizquae.com';
  const ordersEmail = process.env.MAIL_FROM_ORDERS || 'orders@barakahalrizquae.com';
  const host = process.env.SMTP_HOST || 'smtp-relay.brevo.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.error('❌ FATAL: SMTP credentials missing from environment.');
    process.exit(1);
  }

  // Generate Admin Session JWT
  const adminToken = createToken({
    userId: 'admin-super-1',
    email: 'admin@barakahalrizquae.com',
    role: 'super_admin',
  });

  const baseUrl = 'http://localhost:3000';
  const results = {};

  console.log(`📡 Base URL:       ${baseUrl}`);
  console.log(`👤 Admin Session:  Active (admin@barakahalrizquae.com)`);
  console.log(`📥 Test Recipient: ${testRecipient}`);
  console.log('----------------------------------------------------------------\n');

  // 1. Security Check: Unauthenticated Request Rejection
  console.log('--- [SECURITY 1] Testing Unauthenticated Request Rejection ---');
  try {
    const unauthRes = await fetch(`${baseUrl}/api/admin/foodstuff/customers/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId: 'cust-test',
        recipientEmail: testRecipient,
        channel: 'sales',
        subject: 'Test Unauthorized',
        message: 'This should be blocked.',
      }),
    });
    console.log(`HTTP Status: ${unauthRes.status} (Expected: 401)`);
    if (unauthRes.status === 401) {
      console.log('✅ SECURITY PASS: Unauthenticated request successfully blocked with 401 Unauthorized.');
      results.securityUnauthenticated = 'PASS';
    } else {
      console.error('❌ SECURITY FAIL: Unauthenticated request was NOT blocked.');
      results.securityUnauthenticated = 'FAIL';
    }
  } catch (err) {
    console.error('Error during unauthenticated test:', err.message);
  }

  // 2. Security Check: Invalid Email / Header Injection Rejection
  console.log('\n--- [SECURITY 2] Testing Header Injection / Invalid Email Rejection ---');
  try {
    const invalidRes = await fetch(`${baseUrl}/api/admin/foodstuff/customers/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `admin_session=${adminToken}`,
      },
      body: JSON.stringify({
        customerId: 'cust-test',
        recipientEmail: 'victim@company.ae\r\nBcc: evil@hacker.com',
        channel: 'sales',
        subject: 'Test Header Injection',
        message: 'This should be blocked.',
      }),
    });
    console.log(`HTTP Status: ${invalidRes.status} (Expected: 400)`);
    if (invalidRes.status === 400) {
      console.log('✅ SECURITY PASS: Header injection attempt rejected with 400 Bad Request.');
      results.securityHeaderInjection = 'PASS';
    } else {
      console.error('❌ SECURITY FAIL: Header injection was not blocked.');
      results.securityHeaderInjection = 'FAIL';
    }
  } catch (err) {
    console.error('Error during header injection test:', err.message);
  }

  // 3. Security Check: Invalid Channel Rejection
  console.log('\n--- [SECURITY 3] Testing Invalid Channel Allowlist Rejection ---');
  try {
    const invalidChannelRes = await fetch(`${baseUrl}/api/admin/foodstuff/customers/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `admin_session=${adminToken}`,
      },
      body: JSON.stringify({
        customerId: 'cust-test',
        recipientEmail: testRecipient,
        channel: 'arbitrary_unauthorized_channel',
        subject: 'Test Invalid Channel',
        message: 'This should be blocked.',
      }),
    });
    console.log(`HTTP Status: ${invalidChannelRes.status} (Expected: 400)`);
    if (invalidChannelRes.status === 400) {
      console.log('✅ SECURITY PASS: Arbitrary sender channel rejected with 400 Bad Request.');
      results.securitySenderAllowlist = 'PASS';
    } else {
      console.error('❌ SECURITY FAIL: Arbitrary sender channel was not rejected.');
      results.securitySenderAllowlist = 'FAIL';
    }
  } catch (err) {
    console.error('Error during invalid channel test:', err.message);
  }

  // -------------------------------------------------------------
  // TEST A: Admin -> Customer -> Email Client -> info@
  // -------------------------------------------------------------
  console.log('\n--- [TEST A] Admin Direct Client Email -> info@barakahalrizquae.com ---');
  try {
    const resA = await fetch(`${baseUrl}/api/admin/foodstuff/customers/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `admin_session=${adminToken}`,
      },
      body: JSON.stringify({
        customerId: 'cust-e2e-1',
        customerName: 'Sultan Al Qassimi',
        recipientEmail: testRecipient,
        channel: 'info',
        subject: '[TEST A] Corporate Inquiry Communication — Barakah Al Rizq',
        message: 'Dear Sultan,\n\nThank you for reaching out to Barakah Al Rizq. This is a direct test message from our executive administration desk.',
        templateName: 'CUSTOM',
      }),
    });
    const dataA = await resA.json();
    console.log(`HTTP Status: ${resA.status}`, dataA);
    if (resA.ok && dataA.success) {
      console.log(`✅ TEST A PASS: info@ channel dispatched to ${testRecipient} (Msg ID: ${dataA.messageId})`);
      results.testA = 'PASS';
    } else {
      console.error(`❌ TEST A FAIL:`, dataA.error);
      results.testA = 'FAIL';
    }
  } catch (err) {
    console.error('Error in Test A:', err.message);
    results.testA = 'FAIL';
  }

  // -------------------------------------------------------------
  // TEST B: Admin -> Customer -> Email Client -> sales@
  // -------------------------------------------------------------
  console.log('\n--- [TEST B] Admin Direct Client Email -> sales@barakahalrizquae.com ---');
  try {
    const resB = await fetch(`${baseUrl}/api/admin/foodstuff/customers/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `admin_session=${adminToken}`,
      },
      body: JSON.stringify({
        customerId: 'cust-e2e-2',
        customerName: 'Grand Hypermarket LLC',
        recipientEmail: testRecipient,
        channel: 'sales',
        subject: '[TEST B] Active Spot Quotation — Fresh Produce Allocation',
        message: 'Dear Procurement Team,\n\nHere are the active spot market rates for today: Fresh Red Tomatoes @ 18.00 Dhs/CTN, White Garlic @ 42.00 Dhs/CTN. Staging at Stand 19, Al Aweer.',
        templateName: 'SPOT_QUOTE',
      }),
    });
    const dataB = await resB.json();
    console.log(`HTTP Status: ${resB.status}`, dataB);
    if (resB.ok && dataB.success) {
      console.log(`✅ TEST B PASS: sales@ channel dispatched to ${testRecipient} (Msg ID: ${dataB.messageId})`);
      results.testB = 'PASS';
    } else {
      console.error(`❌ TEST B FAIL:`, dataB.error);
      results.testB = 'FAIL';
    }
  } catch (err) {
    console.error('Error in Test B:', err.message);
    results.testB = 'FAIL';
  }

  // -------------------------------------------------------------
  // TEST C: Admin -> Customer -> Email Client -> orders@
  // -------------------------------------------------------------
  console.log('\n--- [TEST C] Admin Direct Client Email -> orders@barakahalrizquae.com ---');
  try {
    const resC = await fetch(`${baseUrl}/api/admin/foodstuff/customers/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `admin_session=${adminToken}`,
      },
      body: JSON.stringify({
        customerId: 'cust-e2e-3',
        customerName: 'Al Barari Groceries LLC',
        recipientEmail: testRecipient,
        channel: 'orders',
        subject: '[TEST C] Order Ready For Store Collection — Stand 19 Al Aweer',
        message: 'Dear Valued Buyer,\n\nYour 45 CTN produce order has been checked by our quality controllers and is staged for pickup at Stand 19, Al Aweer Central Market.',
        templateName: 'ORDER_UPDATE',
      }),
    });
    const dataC = await resC.json();
    console.log(`HTTP Status: ${resC.status}`, dataC);
    if (resC.ok && dataC.success) {
      console.log(`✅ TEST C PASS: orders@ channel dispatched to ${testRecipient} (Msg ID: ${dataC.messageId})`);
      results.testC = 'PASS';
    } else {
      console.error(`❌ TEST C FAIL:`, dataC.error);
      results.testC = 'FAIL';
    }
  } catch (err) {
    console.error('Error in Test C:', err.message);
    results.testC = 'FAIL';
  }

  console.log('\n================================================================');
  console.log('🏁 ADMIN CLIENT EMAIL TEST SUMMARY');
  console.log('================================================================');
  console.log(JSON.stringify(results, null, 2));
}

runAdminEmailTestSuite();
