import { performance } from 'perf_hooks';

const BASE_URL = process.env.BASE_URL || 'https://barakahalrizquae.com';

async function timedFetch(name, url, options = {}) {
  const start = performance.now();
  let status = 0;
  let size = 0;
  let error = null;
  let json = null;
  try {
    const res = await fetch(url, options);
    status = res.status;
    const text = await res.text();
    size = text.length;
    try {
      json = JSON.parse(text);
    } catch {}
  } catch (err) {
    error = err.message;
  }
  const end = performance.now();
  const duration = parseFloat((end - start).toFixed(2));
  return { name, duration, status, sizeKB: parseFloat((size / 1024).toFixed(1)), error, json };
}

async function runBenchmark() {
  console.log('========================================================================');
  console.log(`  BARAKAH AL RIZQ COMPREHENSIVE PERFORMANCE AUDIT`);
  console.log(`  Target: ${BASE_URL} | Timestamp: ${new Date().toISOString()}`);
  console.log('========================================================================\n');

  const results = [];

  // 1. PUBLIC PAGES
  console.log('--- 1. PUBLIC PAGES (SSR / HTML) ---');
  results.push(await timedFetch('Homepage (GET /)', `${BASE_URL}/`));
  results.push(await timedFetch('Catalog (GET /foodstuff-trading)', `${BASE_URL}/foodstuff-trading`));
  results.push(await timedFetch('Work Portfolio (GET /work/foodstuff-trading)', `${BASE_URL}/work/foodstuff-trading`));

  // 2. PUBLIC APIS & DATA FEEDS
  console.log('--- 2. PUBLIC APIS & PRICING FEEDS ---');
  results.push(await timedFetch('Container Prices API (GET /api/foodstuff/container-prices)', `${BASE_URL}/api/foodstuff/container-prices`));
  results.push(await timedFetch('Market Prices API (GET /api/foodstuff/market-prices)', `${BASE_URL}/api/foodstuff/market-prices`));
  results.push(await timedFetch('Schedule Status API (GET /api/foodstuff/schedule-status)', `${BASE_URL}/api/foodstuff/schedule-status`));
  results.push(await timedFetch('Filtered Search (GET /api/foodstuff/market-prices?search=onion)', `${BASE_URL}/api/foodstuff/market-prices?search=onion`));

  // 3. TRANSACTIONAL ACTIONS
  console.log('--- 3. TRANSACTIONAL ACTIONS (POST) ---');
  // Contact Inquiry
  results.push(await timedFetch('Contact Form (POST /api/contact)', `${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Perf Test User',
      email: 'bench.lead@dubaihotelier.ae',
      phone: '+971 50 111 2233',
      company: 'Burj Hospitality Audits',
      service: 'General Inquiry',
      message: 'Performance benchmark audit inquiry test',
      source: 'benchmark_suite'
    })
  }));

  // Order Submission
  results.push(await timedFetch('Order Submission (POST /api/foodstuff/orders)', `${BASE_URL}/api/foodstuff/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      customerName: 'Perf Retail Corp',
      companyName: 'Dubai Marina Supermarkets',
      phone: '+971 56 953 8741',
      email: 'orders.perf@dubai-retail.ae',
      pickupDate: '2026-10-20',
      pickupTime: 'Morning Session (07:00 - 11:00)',
      items: [
        {
          productId: 'tomato-fresh',
          productName: 'Fresh Tomato Grade A',
          orderType: 'DUBAI_WHOLESALE',
          pricePerCtn: 22.0,
          quantityCtn: 10,
          packagingUnit: 'CTN'
        }
      ],
      notes: 'Benchmark order performance test'
    })
  }));

  // 4. ADMIN & PORTAL
  console.log('--- 4. ADMIN AUTHENTICATION & VIEWS ---');
  // Admin Login
  const loginRes = await timedFetch('Admin Login (POST /api/auth/login)', `${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: 'admin@barakahalrizquae.com',
      password: 'admin'
    })
  });
  results.push(loginRes);

  // Print results table
  console.log('\n========================================================================');
  console.log('  BENCHMARK RESULTS SUMMARY');
  console.log('========================================================================');
  console.table(results.map(r => ({
    Endpoint: r.name,
    'Latency (ms)': `${r.duration} ms`,
    Status: r.status,
    'Size (KB)': `${r.sizeKB} KB`,
    Error: r.error || 'None'
  })));

  const avgLatency = (results.reduce((acc, cur) => acc + cur.duration, 0) / results.length).toFixed(2);
  const slowest = results.reduce((prev, curr) => (prev.duration > curr.duration) ? prev : curr, results[0]);
  console.log(`\nAverage Latency: ${avgLatency} ms`);
  console.log(`Slowest Operation: ${slowest.name} (${slowest.duration} ms)`);
  console.log('========================================================================\n');
}

runBenchmark().catch(console.error);
