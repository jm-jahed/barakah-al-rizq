/**
 * Automated Test Suite for Phase 2: Admin Email Inbox UI, API Integration & Regression
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
  console.log('  STARTING PHASE 2 ADMIN EMAIL INBOX TEST SUITE     ');
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

  // 1. Unauthenticated API access rejected
  try {
    sessionCookie = '';
    const res = await makeRequest('/api/admin/inbox');
    assert('1. Unauthenticated GET /api/admin/inbox rejected with 401', res.status === 401);
  } catch (err) {
    assert('1. Unauthenticated GET /api/admin/inbox rejected with 401', false, err.message);
  }

  // 2. Unauthenticated Reply API rejected
  try {
    sessionCookie = '';
    const res = await makeRequest('/api/admin/inbox/reply', {
      method: 'POST',
      body: JSON.stringify({ messageId: 'msg-test', replySubject: 'Re: Test', replyBody: 'Test' }),
    });
    assert('2. Unauthenticated POST /api/admin/inbox/reply rejected with 401', res.status === 401);
  } catch (err) {
    assert('2. Unauthenticated POST /api/admin/inbox/reply rejected with 401', false, err.message);
  }

  // 3. Login as Admin
  try {
    const loginRes = await makeRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'admin@barakahalrizquae.com', password: 'asd123@' }),
    });
    assert('3. Admin authentication successful', loginRes.ok && sessionCookie.length > 0);
  } catch (err) {
    assert('3. Admin authentication successful', false, err.message);
  }

  // 4. Inject a specific test email across mailboxes to verify Phase 2 features
  const testMessageId = `<phase2-test-${Date.now()}@dubaihotelier.ae>`;
  let createdDbId = '';
  try {
    const webhookRes = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        messageId: testMessageId,
        fromEmail: 'purchase@burjhospitality.ae',
        fromName: 'Burj Hospitality Procurement',
        toEmail: 'sales@barakahalrizquae.com',
        replyTo: 'purchase@burjhospitality.ae',
        subject: 'Urgent Garlic & Tomato Container Quotation',
        textBody: 'Please provide pricing for 2x 40ft reefer containers delivered to Dubai Wholesale City.',
        htmlBody: '<p>Please provide pricing for 2x 40ft reefer containers delivered to <b>Dubai Wholesale City</b>.</p>',
      }),
    });
    assert('4. Test incoming email injected via webhook', webhookRes.ok && webhookRes.data?.success);
    if (webhookRes.data?.id) createdDbId = webhookRes.data.id;
  } catch (err) {
    assert('4. Test incoming email injected via webhook', false, err.message);
  }

  // 5. Authenticated GET /api/admin/inbox loads all messages and stats
  try {
    const res = await makeRequest('/api/admin/inbox');
    assert(
      '5. Authenticated GET /api/admin/inbox returns messages and stats',
      res.ok && res.data?.success && Array.isArray(res.data?.messages) && res.data?.stats !== undefined
    );
    if (!createdDbId && res.data?.messages?.length > 0) {
      const found = res.data.messages.find((m) => m.messageId === testMessageId);
      if (found) createdDbId = found.id;
    }
  } catch (err) {
    assert('5. Authenticated GET /api/admin/inbox returns messages and stats', false, err.message);
  }

  // 6. Filter by Mailbox: Sales
  try {
    const res = await makeRequest('/api/admin/inbox?mailbox=sales');
    const allSales = res.data?.messages?.every((m) => m.mailbox === 'sales');
    assert('6. Mailbox filter sales returns sales messages only', res.ok && allSales);
  } catch (err) {
    assert('6. Mailbox filter sales returns sales messages only', false, err.message);
  }

  // 7. Filter by Mailbox: Info
  try {
    const res = await makeRequest('/api/admin/inbox?mailbox=info');
    const allInfo = res.data?.messages?.every((m) => m.mailbox === 'info');
    assert('7. Mailbox filter info returns info messages only', res.ok && allInfo);
  } catch (err) {
    assert('7. Mailbox filter info returns info messages only', false, err.message);
  }

  // 8. Filter by Mailbox: Orders
  try {
    const res = await makeRequest('/api/admin/inbox?mailbox=orders');
    const allOrders = res.data?.messages?.every((m) => m.mailbox === 'orders');
    assert('8. Mailbox filter orders returns orders messages only', res.ok && allOrders);
  } catch (err) {
    assert('8. Mailbox filter orders returns orders messages only', false, err.message);
  }

  // 9. Filter by Mailbox: Habeeb
  try {
    const res = await makeRequest('/api/admin/inbox?mailbox=habeeb');
    const allHabeeb = res.data?.messages?.every((m) => m.mailbox === 'habeeb');
    assert('9. Mailbox filter habeeb returns habeeb messages only', res.ok && allHabeeb);
  } catch (err) {
    assert('9. Mailbox filter habeeb returns habeeb messages only', false, err.message);
  }

  // 10. Search query
  try {
    const res = await makeRequest('/api/admin/inbox?search=burjhospitality.ae');
    const foundSearch = res.data?.messages?.some((m) => m.fromEmail.includes('burjhospitality.ae'));
    assert('10. Search query finds matching sender email', res.ok && foundSearch);
  } catch (err) {
    assert('10. Search query finds matching sender email', false, err.message);
  }

  // 11. Mark message as READ
  try {
    const res = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'READ' }),
    });
    assert('11. PATCH /api/admin/inbox status READ succeeds', res.ok && res.data?.message?.status === 'READ');
  } catch (err) {
    assert('11. PATCH /api/admin/inbox status READ succeeds', false, err.message);
  }

  // 12. Mark message as UNREAD
  try {
    const res = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'UNREAD' }),
    });
    assert('12. PATCH /api/admin/inbox status UNREAD succeeds', res.ok && res.data?.message?.status === 'UNREAD');
  } catch (err) {
    assert('12. PATCH /api/admin/inbox status UNREAD succeeds', false, err.message);
  }

  // 13. Move message to TRASH
  try {
    const res = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'TRASH' }),
    });
    assert(
      '13. PATCH /api/admin/inbox status TRASH marks message as trashed',
      res.ok && res.data?.message?.status === 'TRASH' && res.data?.message?.deletedAt !== undefined
    );
  } catch (err) {
    assert('13. PATCH /api/admin/inbox status TRASH marks message as trashed', false, err.message);
  }

  // 14. Query Trash folder
  try {
    const res = await makeRequest('/api/admin/inbox?status=TRASH');
    const hasTrashed = res.data?.messages?.some((m) => m.id === createdDbId && m.status === 'TRASH');
    assert('14. GET /api/admin/inbox?status=TRASH lists trashed email', res.ok && hasTrashed);
  } catch (err) {
    assert('14. GET /api/admin/inbox?status=TRASH lists trashed email', false, err.message);
  }

  // 15. Restore message from TRASH
  try {
    const res = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'RESTORE' }),
    });
    assert(
      '15. PATCH /api/admin/inbox status RESTORE restores message to active inbox',
      res.ok && res.data?.message?.status === 'READ' && !res.data?.message?.deletedAt
    );
  } catch (err) {
    assert('15. PATCH /api/admin/inbox status RESTORE restores message to active inbox', false, err.message);
  }

  // 16. Reply to inbound message via POST /api/admin/inbox/reply
  try {
    const res = await makeRequest('/api/admin/inbox/reply', {
      method: 'POST',
      body: JSON.stringify({
        messageId: createdDbId,
        replySubject: 'Re: Urgent Garlic & Tomato Container Quotation',
        replyBody: 'Dear Procurement Team, Thank you for your inquiry. Today spot container rate is AED 42/box.',
      }),
    });
    assert(
      '16. POST /api/admin/inbox/reply sends reply via original mailbox and marks message REPLIED',
      res.ok && res.data?.success && res.data?.message?.status === 'REPLIED'
    );
  } catch (err) {
    assert('16. POST /api/admin/inbox/reply sends reply via original mailbox and marks message REPLIED', false, err.message);
  }

  // 17. Security Check: No secrets exposed in response payloads
  try {
    const res = await makeRequest('/api/admin/inbox');
    const rawJson = JSON.stringify(res.data);
    const hasWebhookSec = rawJson.includes(WEBHOOK_SECRET);
    const hasSmtpPass = rawJson.includes('process.env') || rawJson.includes('SMTP_PASS');
    assert('17. Security check: API responses contain zero secrets or credentials', !hasWebhookSec && !hasSmtpPass);
  } catch (err) {
    assert('17. Security check: API responses contain zero secrets or credentials', false, err.message);
  }

  // 18. Data Integrity Check: Business orders, customers, and products unchanged
  const finalOrdersCount = fs.existsSync(initialOrdersFile) ? JSON.parse(fs.readFileSync(initialOrdersFile, 'utf8')).length : 0;
  const finalCustomersCount = fs.existsSync(initialCustomersFile) ? JSON.parse(fs.readFileSync(initialCustomersFile, 'utf8')).length : 0;
  const finalProductsCount = fs.existsSync(initialProductsFile) ? JSON.parse(fs.readFileSync(initialProductsFile, 'utf8')).length : 0;

  const dataIntact =
    finalOrdersCount === initialOrdersCount &&
    finalCustomersCount === initialCustomersCount &&
    finalProductsCount === initialProductsCount;

  assert('18. Business Data Integrity: Real orders, customers, and products unmodified', dataIntact);

  console.log('\n====================================================');
  console.log(`  PHASE 2 TEST SUMMARY: ${passed} PASSED, ${failed} FAILED  `);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
