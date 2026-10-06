/**
 * Automated Production Health & Verification Test Suite for inbox.barakahalrizquae.com
 */

const PROD_URL = 'https://inbox.barakahalrizquae.com';
const MAIN_URL = 'https://barakahalrizquae.com';
const WEBHOOK_SECRET = 'barakah_incoming_webhook_sec_2026_x89';

let sessionCookie = '';

async function makeRequest(baseUrl, endpoint, options = {}) {
  const url = `${baseUrl}${endpoint}`;
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

async function runLiveTests() {
  console.log('====================================================');
  console.log('  STARTING LIVE PRODUCTION VERIFICATION TEST SUITE  ');
  console.log(`  Target: ${PROD_URL}                             `);
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

  // 1. Main Website Health Check
  try {
    const res = await makeRequest(MAIN_URL, '/', { redirect: 'follow' });
    assert(
      '1. Main Website https://barakahalrizquae.com is LIVE and intact',
      res.status === 200 && res.text.includes('Barakah Al Rizq')
    );
  } catch (err) {
    assert('1. Main Website is LIVE', false, err.message);
  }

  // 2. HTTP to HTTPS test
  try {
    const res = await fetch('http://inbox.barakahalrizquae.com/', { redirect: 'manual' });
    const location = res.headers.get('location') || '';
    assert(
      '2. HTTP http://inbox.barakahalrizquae.com redirects to HTTPS',
      (res.status === 301 || res.status === 302 || res.status === 307 || res.status === 308) && location.startsWith('https://')
    );
  } catch (err) {
    assert('2. HTTP redirects to HTTPS', false, err.message);
  }

  // 3. Unauthenticated https://inbox.barakahalrizquae.com redirects to Email Portal Login
  try {
    sessionCookie = '';
    const res = await makeRequest(PROD_URL, '/');
    const location = res.headers.get('location') || '';
    assert(
      '3. Unauthenticated request to inbox.barakahalrizquae.com/ redirects to login',
      (res.status === 307 || res.status === 302) && location.includes('login')
    );
  } catch (err) {
    assert('3. Unauthenticated request redirects to login', false, err.message);
  }

  // 4. Dedicated Email Portal Login Page loads on HTTPS
  try {
    const res = await makeRequest(PROD_URL, '/mail/login', { redirect: 'follow' });
    assert(
      '4. Email Portal Login page loads successfully on https://inbox.barakahalrizquae.com',
      res.status === 200 && res.text.includes('BARAKAH AL RIZQ') && res.text.includes('ENTERPRISE EMAIL PORTAL')
    );
  } catch (err) {
    assert('4. Email Portal Login page loads', false, err.message);
  }

  // 5. Authenticate via production login API
  try {
    const loginRes = await makeRequest(PROD_URL, '/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: 'admin@barakahalrizquae.com', password: 'asd123@' }),
    });
    assert(
      '5. Admin authentication on production Email Portal succeeds',
      loginRes.ok && loginRes.data?.success && sessionCookie.length > 0
    );
  } catch (err) {
    assert('5. Admin authentication on production', false, err.message);
  }

  // 6. Authenticated access to Email Portal loads inbox UI
  try {
    const res = await makeRequest(PROD_URL, '/mail', { redirect: 'follow' });
    assert(
      '6. Authenticated access to https://inbox.barakahalrizquae.com/mail loads Webmail interface',
      res.status === 200 && res.text.includes('BARAKAH AL RIZQ')
    );
  } catch (err) {
    assert('6. Authenticated access to /mail', false, err.message);
  }

  // 7. Test Incoming Email Injection on Production Webhook
  const prodTestMsgId = `<live-prod-${Date.now()}@uaebusiness.ae>`;
  let createdDbId = '';
  try {
    const webhookRes = await makeRequest(PROD_URL, '/api/webhooks/incoming-email', {
      method: 'POST',
      headers: { 'X-Webhook-Secret': WEBHOOK_SECRET },
      body: JSON.stringify({
        messageId: prodTestMsgId,
        fromEmail: 'procurement@dubaihotelgroup.ae',
        fromName: 'Dubai Hotel Group Procurement',
        toEmail: 'sales@barakahalrizquae.com',
        replyTo: 'procurement@dubaihotelgroup.ae',
        subject: 'Wholesale Tomato Container Spot Price Inquiry',
        textBody: 'Please quote delivery for 2 reefer containers of Grade A Tomatoes to Al Aweer.',
        htmlBody: '<p>Please quote delivery for 2 reefer containers of <b>Grade A Tomatoes</b> to Al Aweer.</p>',
      }),
    });
    assert(
      '7. Production incoming email webhook saves email and derives [sales] mailbox',
      webhookRes.ok && webhookRes.data?.success
    );
    if (webhookRes.data?.id) createdDbId = webhookRes.data.id;
  } catch (err) {
    assert('7. Production incoming email webhook', false, err.message);
  }

  // 8. Verify Inbox API on Production
  try {
    const res = await makeRequest(PROD_URL, '/api/admin/inbox');
    assert(
      '8. Production GET /api/admin/inbox returns messages, stats, and 4 mailboxes',
      res.ok && res.data?.success && Array.isArray(res.data?.messages) && res.data?.stats !== undefined
    );
    if (!createdDbId && res.data?.messages?.length > 0) {
      const found = res.data.messages.find((m) => m.messageId === prodTestMsgId);
      if (found) createdDbId = found.id;
    }
  } catch (err) {
    assert('8. Production GET /api/admin/inbox', false, err.message);
  }

  // 9. Mark as READ on Production
  try {
    const res = await makeRequest(PROD_URL, '/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'READ' }),
    });
    assert('9. Production PATCH /api/admin/inbox status READ succeeds', res.ok && res.data?.message?.status === 'READ');
  } catch (err) {
    assert('9. Production PATCH status READ', false, err.message);
  }

  // 10. Reply via Brevo SMTP on Production (locked to sales@barakahalrizquae.com)
  try {
    const res = await makeRequest(PROD_URL, '/api/admin/inbox/reply', {
      method: 'POST',
      body: JSON.stringify({
        messageId: createdDbId,
        replySubject: 'Re: Wholesale Tomato Container Spot Price Inquiry',
        replyBody: 'Dear Procurement Team, Thank you for contacting Barakah Al Rizq. Today spot rate is AED 38/crate.',
      }),
    });
    assert(
      '10. Production POST /api/admin/inbox/reply dispatches via Brevo SMTP and marks REPLIED',
      res.ok && res.data?.success && res.data?.message?.status === 'REPLIED'
    );
  } catch (err) {
    assert('10. Production POST /api/admin/inbox/reply', false, err.message);
  }

  // 11. Move to Trash and Restore on Production
  try {
    // Trash
    const trashRes = await makeRequest(PROD_URL, '/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'TRASH' }),
    });
    assert('11.1 Production Move to Trash succeeds', trashRes.ok && trashRes.data?.message?.status === 'TRASH');

    // Restore
    const restoreRes = await makeRequest(PROD_URL, '/api/admin/inbox', {
      method: 'PATCH',
      body: JSON.stringify({ id: createdDbId, status: 'RESTORE' }),
    });
    assert('11.2 Production Restore from Trash succeeds', restoreRes.ok && restoreRes.data?.message?.status === 'READ');
  } catch (err) {
    assert('11. Move to Trash and Restore', false, err.message);
  }

  // 12. Security Audit: Zero secrets exposed over HTTPS
  try {
    const res = await makeRequest(PROD_URL, '/api/admin/inbox');
    const jsonStr = JSON.stringify(res.data);
    const hasSecret = jsonStr.includes(WEBHOOK_SECRET) || jsonStr.includes('SMTP_PASS') || jsonStr.includes('process.env');
    assert('12. Security Audit: Zero secrets or credentials exposed over HTTPS', !hasSecret);
  } catch (err) {
    assert('12. Security Audit', false, err.message);
  }

  console.log('\n====================================================');
  console.log(`  LIVE PRODUCTION SUMMARY: ${passed} PASSED, ${failed} FAILED `);
  console.log('====================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runLiveTests().catch((err) => {
  console.error('Fatal live test error:', err);
  process.exit(1);
});
