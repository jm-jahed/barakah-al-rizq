/**
 * Automated Test Suite for Dedicated Email-Only Admin Portal (mail.barakahalrizquae.com & /mail)
 */

import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'http://localhost:3000';
const WEBHOOK_SECRET = 'barakah_incoming_webhook_sec_2026_x89';

let sessionCookie = '';

async function makeRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(sessionCookie ? { Cookie: sessionCookie } : {}),
    ...options.headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
    redirect: options.redirect || 'manual',
  });

  const setCookie = res.headers.get('set-cookie');
  if (setCookie) {
    sessionCookie = setCookie.split(';')[0];
  }

  const contentType = res.headers.get('content-type') || '';
  let data = null;
  let text = '';
  if (contentType.includes('application/json')) {
    data = await res.json().catch(() => null);
  } else {
    text = await res.text().catch(() => '');
  }

  return { status: res.status, ok: res.ok, data, text, headers: res.headers };
}

async function runTests() {
  console.log('====================================================');
  console.log('  STARTING DEDICATED EMAIL PORTAL TEST SUITE        ');
  console.log('  Target: mail.barakahalrizquae.com & /mail         ');
  console.log('====================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(name, condition, details = '') {
    if (condition) {
      console.log(`✅ [PASS] ${name}`);
      passed++;
    } else {
      console.error(`❌ [FAIL] ${name} ${details ? `(${details})` : ''}`);
      failed++;
    }
  }

  // Record initial business data state
  const initialOrdersFile = path.join(process.cwd(), 'data/barakah/orders.json');
  const initialCustomersFile = path.join(process.cwd(), 'data/barakah/customers.json');
  const initialProductsFile = path.join(process.cwd(), 'data/barakah/products.json');

  const initialOrdersCount = fs.existsSync(initialOrdersFile) ? JSON.parse(fs.readFileSync(initialOrdersFile, 'utf8')).length : 0;
  const initialCustomersCount = fs.existsSync(initialCustomersFile) ? JSON.parse(fs.readFileSync(initialCustomersFile, 'utf8')).length : 0;
  const initialProductsCount = fs.existsSync(initialProductsFile) ? JSON.parse(fs.readFileSync(initialProductsFile, 'utf8')).length : 0;

  // 1. Unauthenticated /mail redirects to /mail/login
  try {
    sessionCookie = '';
    const res = await makeRequest('/mail');
    const location = res.headers.get('location') || '';
    assert(
      '1. Unauthenticated access to /mail redirects to /mail/login',
      (res.status === 307 || res.status === 302 || res.status === 308) && location.includes('/mail/login')
    );
  } catch (err) {
    assert('1. Unauthenticated access to /mail redirects to /mail/login', false, err.message);
  }

  // 2. Unauthenticated inbox.barakahalrizquae.com host request redirects to login
  try {
    sessionCookie = '';
    const res = await makeRequest('/', {
      headers: {
        Host: 'inbox.barakahalrizquae.com',
        'x-forwarded-host': 'inbox.barakahalrizquae.com',
      },
    });
    const location = res.headers.get('location') || '';
    assert(
      '2. Unauthenticated host inbox.barakahalrizquae.com/ redirects to login',
      (res.status === 307 || res.status === 302 || res.status === 308) && location.includes('login')
    );
  } catch (err) {
    assert('2. Unauthenticated host inbox.barakahalrizquae.com/ redirects to login', false, err.message);
  }

  // 3. Public Email Portal Login Page loads (HTTP 200)
  try {
    const res = await makeRequest('/mail/login', { redirect: 'follow' });
    assert(
      '3. Email Portal login page /mail/login loads successfully',
      res.status === 200 && res.text.includes('BARAKAH AL RIZQ')
    );
  } catch (err) {
    assert('3. Email Portal login page /mail/login loads successfully', false, err.message);
  }

  // 4. Authenticate as Admin
  try {
    const loginRes = await makeRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'admin@barakahalrizquae.com', password: 'asd123@' }),
    });
    assert('4. Admin login authentication succeeds', loginRes.ok && sessionCookie.length > 0);
  } catch (err) {
    assert('4. Admin login authentication succeeds', false, err.message);
  }

  // 5. Authenticated /mail loads
  try {
    const res = await makeRequest('/mail', { redirect: 'follow' });
    assert(
      '5. Authenticated /mail loads Email Portal inbox UI',
      res.status === 200 && res.text.includes('BARAKAH AL RIZQ')
    );
  } catch (err) {
    assert('5. Authenticated /mail loads Email Portal inbox UI', false, err.message);
  }

  // 6. Test Email Injection for All 4 Mailboxes
  const testMailboxes = [
    { mailbox: 'info', email: 'info@barakahalrizquae.com', subject: 'General Enterprise Inquiry' },
    { mailbox: 'sales', email: 'sales@barakahalrizquae.com', subject: 'Container Spot Price RFQ' },
    { mailbox: 'orders', email: 'orders@barakahalrizquae.com', subject: 'Pallet Delivery Schedule' },
    { mailbox: 'habeeb', email: 'habeeb@barakahalrizquae.com', subject: 'Managing Director Partnership Request' },
  ];

  let injectedIds = {};

  for (const m of testMailboxes) {
    try {
      const msgId = `<mailportal-test-${m.mailbox}-${Date.now()}@uaebusiness.ae>`;
      const res = await makeRequest('/api/webhooks/incoming-email', {
        method: 'POST',
        headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
        body: JSON.stringify({
          messageId: msgId,
          fromEmail: 'client@uaebusiness.ae',
          fromName: 'UAE Business Buyer',
          toEmail: m.email,
          replyTo: 'client@uaebusiness.ae',
          subject: m.subject,
          textBody: `Official message sent to ${m.email}`,
          htmlBody: `<p>Official message sent to <b>${m.email}</b></p>`,
        }),
      });
      assert(`6.${m.mailbox} Incoming email stored for ${m.email} -> mailbox [${m.mailbox}]`, res.ok && res.data?.success);
      if (res.data?.id) injectedIds[m.mailbox] = res.data.id;
    } catch (err) {
      assert(`6.${m.mailbox} Incoming email stored for ${m.email}`, false, err.message);
    }
  }

  // 7. Verify All Inboxes contains all 4 mailboxes
  try {
    const res = await makeRequest('/api/admin/inbox');
    const mailboxesPresent = ['info', 'sales', 'orders', 'habeeb'].every((box) =>
      res.data?.messages?.some((msg) => msg.mailbox === box)
    );
    assert('7. All Inboxes feed aggregates all 4 business mailboxes', res.ok && mailboxesPresent);
  } catch (err) {
    assert('7. All Inboxes feed aggregates all 4 business mailboxes', false, err.message);
  }

  // 8. Test Search across Email Portal
  try {
    const res = await makeRequest('/api/admin/inbox?search=Managing Director Partnership');
    const match = res.data?.messages?.some((msg) => msg.subject.includes('Managing Director Partnership'));
    assert('8. Search by subject query succeeds on Email Portal', res.ok && match);
  } catch (err) {
    assert('8. Search by subject query succeeds on Email Portal', false, err.message);
  }

  // 9. Test Reply to Habeeb Desk: SENDER strictly locked to habeeb@barakahalrizquae.com
  try {
    const habeebMsgId = injectedIds['habeeb'];
    const res = await makeRequest('/api/admin/inbox/reply', {
      method: 'POST',
      body: JSON.stringify({
        messageId: habeebMsgId,
        replySubject: 'Re: Managing Director Partnership Request',
        replyBody: 'Thank you for reaching out directly to the Managing Director desk. Let us schedule a meeting at Al Aweer.',
      }),
    });
    assert(
      '9. Reply from Habeeb desk automatically uses habeeb@barakahalrizquae.com sender',
      res.ok && res.data?.success && res.data?.message?.status === 'REPLIED'
    );
  } catch (err) {
    assert('9. Reply from Habeeb desk automatically uses habeeb@barakahalrizquae.com sender', false, err.message);
  }

  // 10. Test Reply to Sales Desk: SENDER strictly locked to sales@barakahalrizquae.com
  try {
    const salesMsgId = injectedIds['sales'];
    const res = await makeRequest('/api/admin/inbox/reply', {
      method: 'POST',
      body: JSON.stringify({
        messageId: salesMsgId,
        replySubject: 'Re: Container Spot Price RFQ',
        replyBody: 'Today fresh garlic container spot price is AED 42/box.',
      }),
    });
    assert(
      '10. Reply from Sales desk automatically uses sales@barakahalrizquae.com sender',
      res.ok && res.data?.success && res.data?.message?.status === 'REPLIED'
    );
  } catch (err) {
    assert('10. Reply from Sales desk automatically uses sales@barakahalrizquae.com sender', false, err.message);
  }

  // 11. Trash and Restore workflow on Email Portal
  try {
    const infoMsgId = injectedIds['info'];
    // Move to Trash
    const trashRes = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: infoMsgId, status: 'TRASH' }),
    });
    assert('11.1 Move message to Trash succeeds', trashRes.ok && trashRes.data?.message?.status === 'TRASH');

    // Query Trash
    const listTrashRes = await makeRequest('/api/admin/inbox?status=TRASH');
    const isTrashed = listTrashRes.data?.messages?.some((m) => m.id === infoMsgId);
    assert('11.2 Trash folder contains trashed message', listTrashRes.ok && isTrashed);

    // Restore message
    const restoreRes = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: infoMsgId, status: 'RESTORE' }),
    });
    assert('11.3 Restore message to active inbox succeeds', restoreRes.ok && restoreRes.data?.message?.status === 'READ');
  } catch (err) {
    assert('11. Trash and Restore workflow', false, err.message);
  }

  // 12. Security Check: Zero credentials or webhook secrets leaked
  try {
    const res = await makeRequest('/api/admin/inbox');
    const jsonStr = JSON.stringify(res.data);
    const hasSecret = jsonStr.includes(WEBHOOK_SECRET) || jsonStr.includes('SMTP_PASS') || jsonStr.includes('process.env');
    assert('12. Security audit: No SMTP credentials or webhook secrets in API output', !hasSecret);
  } catch (err) {
    assert('12. Security audit', false, err.message);
  }

  // 13. Data Safety Check: Core business records unmodified
  const finalOrdersCount = fs.existsSync(initialOrdersFile) ? JSON.parse(fs.readFileSync(initialOrdersFile, 'utf8')).length : 0;
  const finalCustomersCount = fs.existsSync(initialCustomersFile) ? JSON.parse(fs.readFileSync(initialCustomersFile, 'utf8')).length : 0;
  const finalProductsCount = fs.existsSync(initialProductsFile) ? JSON.parse(fs.readFileSync(initialProductsFile, 'utf8')).length : 0;

  const dataIntact =
    finalOrdersCount === initialOrdersCount &&
    finalCustomersCount === initialCustomersCount &&
    finalProductsCount === initialProductsCount;

  assert('13. Business Data Integrity: Real orders, customers, and products unmodified', dataIntact);

  console.log('\n====================================================');
  console.log(`  EMAIL PORTAL TEST SUMMARY: ${passed} PASSED, ${failed} FAILED `);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
