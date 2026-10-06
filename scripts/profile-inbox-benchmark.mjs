// scripts/profile-inbox-benchmark.mjs
import https from 'https';

const BASE_URL = 'https://barakahalrizquae.com';
const ADMIN_USER = process.env.ADMIN_USER || 'admin@barakahalrizquae.com';
const ADMIN_PASS = process.env.ADMIN_PASS || 'asd123@';

function makeRequest(urlStr, options = {}, postData = null) {
  return new Promise((resolve) => {
    const url = new URL(urlStr);
    const reqOptions = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname + url.search,
      method: options.method || 'GET',
      headers: options.headers || {},
      timeout: 15000,
    };

    const start = performance.now();
    const req = https.request(reqOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        const duration = performance.now() - start;
        let json = null;
        try {
          json = JSON.parse(data);
        } catch {}
        resolve({
          status: res.statusCode,
          duration: Math.round(duration * 100) / 100,
          headers: res.headers,
          dataLength: Buffer.byteLength(data, 'utf8'),
          json,
          raw: data,
        });
      });
    });

    req.on('error', (err) => {
      const duration = performance.now() - start;
      resolve({
        status: 0,
        duration: Math.round(duration * 100) / 100,
        error: err.message,
        dataLength: 0,
        json: null,
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        status: 408,
        duration: 15000,
        error: 'Timeout',
        dataLength: 0,
      });
    });

    if (postData) {
      req.write(postData);
    }
    req.end();
  });
}

async function runInboxProfile() {
  console.log('========================================================================');
  console.log(`  BARAKAH AL RIZQ INBOX PERFORMANCE AUDIT`);
  console.log(`  Target: ${BASE_URL} | Timestamp: ${new Date().toISOString()}`);
  console.log('========================================================================\n');

  // 1. Measure Public /mail and /admin/inbox Page Load (SSR/HTML)
  console.log('--- 1. INBOX PAGE LOADS (SSR / HTML) ---');
  const mailPage = await makeRequest(`${BASE_URL}/mail`);
  console.log(`GET /mail -> Status: ${mailPage.status} | Latency: ${mailPage.duration} ms | Size: ${(mailPage.dataLength / 1024).toFixed(1)} KB`);

  const adminInboxPage = await makeRequest(`${BASE_URL}/admin/inbox`);
  console.log(`GET /admin/inbox -> Status: ${adminInboxPage.status} | Latency: ${adminInboxPage.duration} ms | Size: ${(adminInboxPage.dataLength / 1024).toFixed(1)} KB`);

  // 2. Authenticate
  console.log('\n--- 2. ADMIN AUTHENTICATION ---');
  const loginBody = JSON.stringify({ email: ADMIN_USER, password: ADMIN_PASS });
  const loginRes = await makeRequest(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(loginBody) },
  }, loginBody);

  console.log(`POST /api/auth/login -> Status: ${loginRes.status} | Latency: ${loginRes.duration} ms`);
  const cookieHeader = loginRes.headers['set-cookie'];
  let cookieStr = '';
  if (cookieHeader) {
    cookieStr = Array.isArray(cookieHeader)
      ? cookieHeader.map((c) => c.split(';')[0]).join('; ')
      : cookieHeader.split(';')[0];
  }

  const authHeaders = {
    Cookie: cookieStr,
  };

  // 3. Measure Inbox API Queries
  console.log('\n--- 3. INBOX API ENDPOINTS ---');
  const testCases = [
    { name: 'Initial Inbox API (ALL)', path: '/api/admin/inbox' },
    { name: 'Orders Mailbox', path: '/api/admin/inbox?mailbox=orders' },
    { name: 'Info Mailbox', path: '/api/admin/inbox?mailbox=info' },
    { name: 'Sales Mailbox', path: '/api/admin/inbox?mailbox=sales' },
    { name: 'Habeeb Mailbox', path: '/api/admin/inbox?mailbox=habeeb' },
    { name: 'Trash Mailbox', path: '/api/admin/inbox?status=TRASH' },
    { name: 'Search Query (?search=wholesale)', path: '/api/admin/inbox?search=wholesale' },
    { name: 'Unread Filter (?status=UNREAD)', path: '/api/admin/inbox?status=UNREAD' },
  ];

  const results = [];
  let sampleMessageId = null;

  for (const tc of testCases) {
    const res = await makeRequest(`${BASE_URL}${tc.path}`, { headers: authHeaders });
    const sizeKB = (res.dataLength / 1024).toFixed(2);
    const count = res.json?.count ?? (res.json?.messages?.length || 0);
    if (!sampleMessageId && res.json?.messages?.length > 0) {
      sampleMessageId = res.json.messages[0].id || res.json.messages[0].messageId;
    }
    results.push({
      Action: tc.name,
      Latency: `${res.duration} ms`,
      Status: res.status,
      PayloadSize: `${sizeKB} KB`,
      MessageCount: count,
    });
    console.log(`${tc.name.padEnd(35)} -> ${res.duration} ms | ${sizeKB} KB | Messages: ${count}`);
  }

  // 4. Measure Single Message Fetch & Status Operations
  if (sampleMessageId) {
    console.log(`\n--- 4. SINGLE MESSAGE ACTIONS (ID: ${sampleMessageId}) ---`);
    
    // Single message read
    const singleRes = await makeRequest(`${BASE_URL}/api/admin/inbox?id=${encodeURIComponent(sampleMessageId)}`, { headers: authHeaders });
    console.log(`GET Single Message (?id=...)       -> ${singleRes.duration} ms | ${(singleRes.dataLength / 1024).toFixed(2)} KB`);
    results.push({
      Action: 'Open Single Message',
      Latency: `${singleRes.duration} ms`,
      Status: singleRes.status,
      PayloadSize: `${(singleRes.dataLength / 1024).toFixed(2)} KB`,
      MessageCount: 1,
    });

    // Mark Read (PATCH)
    const patchBody = JSON.stringify({ id: sampleMessageId, status: 'READ' });
    const patchRes = await makeRequest(`${BASE_URL}/api/admin/inbox`, {
      method: 'PATCH',
      headers: { ...authHeaders, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(patchBody) },
    }, patchBody);
    console.log(`PATCH Mark Read                      -> ${patchRes.duration} ms | ${(patchRes.dataLength / 1024).toFixed(2)} KB`);
    results.push({
      Action: 'PATCH Mark Read',
      Latency: `${patchRes.duration} ms`,
      Status: patchRes.status,
      PayloadSize: `${(patchRes.dataLength / 1024).toFixed(2)} KB`,
      MessageCount: 1,
    });

    // Mark Unread (PATCH)
    const patchUnreadBody = JSON.stringify({ id: sampleMessageId, status: 'UNREAD' });
    const patchUnreadRes = await makeRequest(`${BASE_URL}/api/admin/inbox`, {
      method: 'PATCH',
      headers: { ...authHeaders, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(patchUnreadBody) },
    }, patchUnreadBody);
    console.log(`PATCH Mark Unread                    -> ${patchUnreadRes.duration} ms | ${(patchUnreadRes.dataLength / 1024).toFixed(2)} KB`);
    results.push({
      Action: 'PATCH Mark Unread',
      Latency: `${patchUnreadRes.duration} ms`,
      Status: patchUnreadRes.status,
      PayloadSize: `${(patchUnreadRes.dataLength / 1024).toFixed(2)} KB`,
      MessageCount: 1,
    });
  }

  console.log('\n========================================================================');
  console.log('  INBOX BENCHMARK SUMMARY TABLE');
  console.log('========================================================================');
  console.table(results);
}

runInboxProfile().catch(console.error);
