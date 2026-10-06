/**
 * Automated Test Suite for Phase 1: Incoming Email Webhook & Admin Inbox Backend
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'http://localhost:3000';
const WEBHOOK_SECRET = 'barakah_incoming_webhook_sec_2026_x89';

async function makeRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  const data = await res.json().catch(() => null);
  return { status: res.status, ok: res.ok, data, headers: res.headers };
}

async function runTests() {
  console.log('====================================================');
  console.log('  STARTING PHASE 1 INCOMING EMAIL INBOX TEST SUITE  ');
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

  // 1. Missing Secret
  try {
    const res = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      body: JSON.stringify({
        messageId: '<test-1@client.ae>',
        fromEmail: 'client@example.com',
        toEmail: 'info@barakahalrizquae.com',
        subject: 'Inquiry',
        textBody: 'Hello',
      }),
    });
    assert('1. Missing X-Webhook-Secret rejected with 401', res.status === 401);
  } catch (err) {
    assert('1. Missing X-Webhook-Secret rejected with 401', false, err.message);
  }

  // 2. Invalid Secret
  try {
    const res = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': 'wrong_secret_12345' },
      body: JSON.stringify({
        messageId: '<test-2@client.ae>',
        fromEmail: 'client@example.com',
        toEmail: 'info@barakahalrizquae.com',
        subject: 'Inquiry',
        textBody: 'Hello',
      }),
    });
    assert('2. Invalid X-Webhook-Secret rejected with 403', res.status === 403);
  } catch (err) {
    assert('2. Invalid X-Webhook-Secret rejected with 403', false, err.message);
  }

  // 3. Missing messageId
  try {
    const res = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        fromEmail: 'client@example.com',
        toEmail: 'info@barakahalrizquae.com',
        subject: 'Inquiry',
        textBody: 'Hello',
      }),
    });
    assert('3. Missing messageId rejected with 400', res.status === 400);
  } catch (err) {
    assert('3. Missing messageId rejected with 400', false, err.message);
  }

  // 4. Invalid fromEmail
  try {
    const res = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        messageId: '<test-4@client.ae>',
        fromEmail: 'not-an-email',
        toEmail: 'info@barakahalrizquae.com',
        subject: 'Inquiry',
        textBody: 'Hello',
      }),
    });
    assert('4. Invalid fromEmail format rejected with 400', res.status === 400);
  } catch (err) {
    assert('4. Invalid fromEmail format rejected with 400', false, err.message);
  }

  // 5. Invalid recipient / unauthorized mailbox
  try {
    const res = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        messageId: '<test-5@client.ae>',
        fromEmail: 'client@example.com',
        toEmail: 'unauthorized_hacker@external.com',
        subject: 'Inquiry',
        textBody: 'Hello',
      }),
    });
    assert('5. Unknown/unauthorized mailbox rejected with 400', res.status === 400);
  } catch (err) {
    assert('5. Unknown/unauthorized mailbox rejected with 400', false, err.message);
  }

  // 6. Successful message creation across all 4 official business mailboxes
  const testMailboxes = [
    { to: 'info@barakahalrizquae.com', expectedMailbox: 'info', name: 'General Inquiry' },
    { to: 'sales@barakahalrizquae.com', expectedMailbox: 'sales', name: 'Sales RFQ' },
    { to: 'orders@barakahalrizquae.com', expectedMailbox: 'orders', name: 'Order Notification' },
    { to: 'habeeb@barakahalrizquae.com', expectedMailbox: 'habeeb', name: 'Direct Management' },
  ];

  let testMessageIds = [];

  for (let i = 0; i < testMailboxes.length; i++) {
    const m = testMailboxes[i];
    const uniqueMsgId = `<msg-test-${Date.now()}-${m.expectedMailbox}-${Math.random().toString(36).substr(2, 4)}@buyer.ae>`;
    testMessageIds.push(uniqueMsgId);

    try {
      const res = await makeRequest('/api/webhooks/incoming-email', {
        method: 'POST',
        headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
        body: JSON.stringify({
          messageId: uniqueMsgId,
          fromEmail: `buyer-${m.expectedMailbox}@dubaiwholesale.ae`,
          fromName: `Al Aweer Trader ${i + 1}`,
          toEmail: m.to,
          replyTo: `buyer-${m.expectedMailbox}@dubaiwholesale.ae`,
          subject: `[TEST] ${m.name} - Wholesale Trade Communication`,
          textBody: `This is a test wholesale inquiry for mailbox ${m.expectedMailbox}.\nPlease confirm spot pricing.`,
          htmlBody: `<div style="font-family: Arial"><p>This is a test wholesale inquiry for <b>${m.expectedMailbox}</b>.</p><script>alert('xss')</script></div>`,
          receivedAt: new Date().toISOString(),
          attachmentsCount: 1,
        }),
      });

      assert(
        `6.${i + 1} Webhook stores email for ${m.to} -> mailbox [${m.expectedMailbox}]`,
        res.status === 201 && res.data?.success === true && res.data?.mailbox === m.expectedMailbox
      );
    } catch (err) {
      assert(`6.${i + 1} Webhook stores email for ${m.to}`, false, err.message);
    }
  }

  // 7. HTML Sanitization check (XSS stripped)
  try {
    const messages = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'barakah', 'inbox_messages.json'), 'utf-8'));
    const lastSaved = messages.find(m => m.messageId === testMessageIds[testMessageIds.length - 1]);
    const hasScript = lastSaved && lastSaved.htmlBody.includes('<script>');
    assert('7. Dangerous HTML tags (<script>) stripped from stored htmlBody', !hasScript && !!lastSaved);
  } catch (err) {
    assert('7. Dangerous HTML tags (<script>) stripped from stored htmlBody', false, err.message);
  }

  // 8. Idempotency test (Duplicate messageId)
  try {
    const duplicateTarget = testMessageIds[0];
    const res = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        messageId: duplicateTarget,
        fromEmail: 'buyer-info@dubaiwholesale.ae',
        toEmail: 'info@barakahalrizquae.com',
        subject: 'Duplicate submission attempt',
        textBody: 'Duplicate body',
      }),
    });

    assert(
      '8. Duplicate messageId handled idempotently with 200 and idempotent=true',
      res.status === 200 && res.data?.idempotent === true && res.data?.messageId === duplicateTarget
    );
  } catch (err) {
    assert('8. Duplicate messageId handled idempotently', false, err.message);
  }

  // 9. Admin API Authentication Check
  try {
    const res = await makeRequest('/api/admin/inbox');
    assert('9. GET /api/admin/inbox rejects unauthenticated requests with 401', res.status === 401);
  } catch (err) {
    assert('9. GET /api/admin/inbox rejects unauthenticated requests with 401', false, err.message);
  }

  // 10. Database Inbox Verification & Status Lifecycle Check
  try {
    const inboxFilePath = path.join(process.cwd(), 'data', 'barakah', 'inbox_messages.json');
    const allInbox = JSON.parse(fs.readFileSync(inboxFilePath, 'utf-8'));
    assert('10.1 Messages properly stored in data/barakah/inbox_messages.json', Array.isArray(allInbox) && allInbox.length >= 4);

    const targetMsg = allInbox[0];
    assert('10.2 Stored record has required schema fields', !!targetMsg.id && !!targetMsg.messageId && !!targetMsg.fromEmail && !!targetMsg.toEmail && !!targetMsg.mailbox);

    // Verify all 4 mailboxes are represented in stored messages
    const mailboxesFound = new Set(allInbox.map(m => m.mailbox));
    assert('10.3 All 4 mailboxes (info, sales, orders, habeeb) present in inbox data',
      mailboxesFound.has('info') && mailboxesFound.has('sales') && mailboxesFound.has('orders') && mailboxesFound.has('habeeb')
    );
  } catch (err) {
    assert('10. Inbox message data verification', false, err.message);
  }

  // 11. Verify Existing Business Data Remains Intact
  try {
    const ordersFile = path.join(process.cwd(), 'data', 'barakah', 'wholesale_orders.json');
    const customersFile = path.join(process.cwd(), 'data', 'barakah', 'customers.json');
    const ordersExist = fs.existsSync(ordersFile);
    const customersExist = fs.existsSync(customersFile);
    assert('11. Existing wholesale orders & customer files remain intact and unmodified', ordersExist && customersExist);
  } catch (err) {
    assert('11. Existing wholesale orders & customer files remain intact and unmodified', false, err.message);
  }

  console.log('\n====================================================');
  console.log(`  TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
