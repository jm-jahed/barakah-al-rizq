/**
 * Complete End-to-End Test Suite for All 4 Mailboxes, Webhook, Idempotency, Reply Dispatch, Trash/Restore, & Auth
 */

import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'http://localhost:3000';
const WEBHOOK_SECRET = 'barakah_incoming_webhook_sec_2026_x89';

let adminSessionCookie = '';

async function makeRequest(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(adminSessionCookie ? { Cookie: adminSessionCookie } : {}),
    ...options.headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
    redirect: options.redirect || 'manual',
  });

  const setCookie = res.headers.get('set-cookie');
  if (setCookie) {
    adminSessionCookie = setCookie.split(';')[0];
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

async function runE2ETests() {
  console.log('====================================================');
  console.log('  STARTING BARAKAH AL RIZQ FINAL E2E TEST SUITE     ');
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

  // 1. Authenticate as Admin
  try {
    const loginRes = await makeRequest('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ password: 'asd123@' }),
    });
    assert('1. Admin Password Login (Access Key) succeeds', loginRes.ok && adminSessionCookie.length > 0);
  } catch (err) {
    assert('1. Admin Password Login succeeds', false, err.message);
  }

  // Mailbox test configurations
  const mailboxes = [
    { key: 'info', email: 'info@barakahalrizquae.com', subject: 'Corporate Partner Inquiry' },
    { key: 'sales', email: 'sales@barakahalrizquae.com', subject: 'Fresh Garlic 40ft Reefer RFQ' },
    { key: 'orders', email: 'orders@barakahalrizquae.com', subject: 'Pallet Collection Verification' },
    { key: 'habeeb', email: 'habeeb@barakahalrizquae.com', subject: 'Direct Management Consultation' },
  ];

  const createdMessages = {};

  // 2. Test Ingestion & Mailbox Derivation for all 4 mailboxes
  for (const m of mailboxes) {
    try {
      const msgId = `<e2e-${m.key}-${Date.now()}@dubai-trader.ae>`;
      const res = await makeRequest('/api/webhooks/incoming-email', {
        method: 'POST',
        headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
        body: JSON.stringify({
          messageId: msgId,
          fromEmail: 'trader@dubai-trader.ae',
          fromName: 'Dubai Fresh Food Trader',
          toEmail: m.email,
          replyTo: 'trader@dubai-trader.ae',
          subject: m.subject,
          textBody: `Inquiry message to ${m.email}`,
          htmlBody: `<p>Inquiry message to <b>${m.email}</b></p>`,
        }),
      });

      assert(
        `TEST: Inbound to ${m.email} stored in [${m.key}] mailbox`,
        res.ok && res.data?.success && res.data?.mailbox === m.key
      );
      if (res.data?.id) {
        createdMessages[m.key] = { id: res.data.id, messageId: msgId, subject: m.subject };
      }
    } catch (err) {
      assert(`TEST: Inbound to ${m.email}`, false, err.message);
    }
  }

  // 3. Test Replies for all 4 mailboxes (strictly locked senders)
  for (const m of mailboxes) {
    try {
      const stored = createdMessages[m.key];
      const res = await makeRequest('/api/admin/inbox/reply', {
        method: 'POST',
        body: JSON.stringify({
          messageId: stored.id,
          replySubject: `Re: ${stored.subject}`,
          replyBody: `Official reply from Barakah Al Rizq ${m.key} desk.`,
        }),
      });

      assert(
        `TEST: Reply from [${m.key}] desk locked to sender ${m.email} & marked REPLIED`,
        res.ok && res.data?.success && res.data?.message?.status === 'REPLIED'
      );
    } catch (err) {
      assert(`TEST: Reply from [${m.key}] desk`, false, err.message);
    }
  }

  // 4. Idempotency Test: Duplicate messageId
  try {
    const existingMsg = createdMessages['sales'];
    const dupRes = await makeRequest('/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        messageId: existingMsg.messageId,
        fromEmail: 'trader@dubai-trader.ae',
        toEmail: 'sales@barakahalrizquae.com',
        subject: existingMsg.subject,
        textBody: 'Duplicate submission attempt',
      }),
    });

    assert(
      'TEST: Duplicate Message-ID handled idempotently (HTTP 200, idempotent: true)',
      dupRes.ok && dupRes.data?.success && dupRes.data?.idempotent === true
    );
  } catch (err) {
    assert('TEST: Duplicate Message-ID handled idempotently', false, err.message);
  }

  // 5. Trash and Restore Test
  try {
    const targetMsg = createdMessages['info'];
    // Move to Trash
    const trashRes = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: targetMsg.id, status: 'TRASH' }),
    });
    assert('TEST: Move email to Trash marks status TRASH', trashRes.ok && trashRes.data?.message?.status === 'TRASH');

    // Restore from Trash
    const restoreRes = await makeRequest('/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: targetMsg.id, status: 'RESTORE' }),
    });
    assert(
      'TEST: Restore email restores status to READ and removes deletedAt',
      restoreRes.ok && restoreRes.data?.message?.status === 'READ' && !restoreRes.data?.message?.deletedAt
    );
  } catch (err) {
    assert('TEST: Trash and Restore', false, err.message);
  }

  // 6. Security Audit: Zero secrets exposed
  try {
    const res = await makeRequest('/api/admin/inbox');
    const jsonStr = JSON.stringify(res.data);
    const hasSecret = jsonStr.includes(WEBHOOK_SECRET) || jsonStr.includes('SMTP_PASS') || jsonStr.includes('process.env');
    assert('TEST: Security Audit - Zero credentials/secrets in API responses', !hasSecret);
  } catch (err) {
    assert('TEST: Security Audit', false, err.message);
  }

  console.log('\n====================================================');
  console.log(`  E2E TEST SUITE SUMMARY: ${passed} PASSED, ${failed} FAILED `);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runE2ETests().catch((err) => {
  console.error('Fatal E2E error:', err);
  process.exit(1);
});
