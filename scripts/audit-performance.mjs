import http from 'http';
import https from 'https';
import { performance } from 'perf_hooks';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

async function timedFetch(url, options = {}) {
  const start = performance.now();
  const res = await fetch(url, options);
  const body = await res.text();
  const end = performance.now();
  return {
    status: res.status,
    durationMs: parseFloat((end - start).toFixed(2)),
    sizeBytes: body.length,
    json: () => {
      try {
        return JSON.parse(body);
      } catch {
        return null;
      }
    }
  };
}

async function runAudit() {
  console.log('====================================================');
  console.log('       BARAKAH AL RIZQ PERFORMANCE AUDIT            ');
  console.log('====================================================');
  console.log(`Target Base URL: ${BASE_URL}\n`);

  // 1. PUBLIC WEBSITE BENCHMARKS
  console.log('--- 1. PUBLIC WEBSITE LOAD TIMES ---');
  
  // A. Homepage Load
  const home = await timedFetch(`${BASE_URL}/`);
  console.log(`Homepage (GET /):                     ${home.durationMs}ms [Status: ${home.status}, Size: ${(home.sizeBytes/1024).toFixed(1)} KB]`);

  // B. Product/Catalog Page Load
  const catalog = await timedFetch(`${BASE_URL}/foodstuff-trading`);
  console.log(`Catalog Page (GET /foodstuff-trading): ${catalog.durationMs}ms [Status: ${catalog.status}, Size: ${(catalog.sizeBytes/1024).toFixed(1)} KB]`);

  // C. Container Prices API
  const cp = await timedFetch(`${BASE_URL}/api/foodstuff/container-prices`);
  console.log(`Container Prices API:                 ${cp.durationMs}ms [Status: ${cp.status}, Items: ${cp.json()?.items?.length || 0}]`);

  // D. Market Prices API
  const mp = await timedFetch(`${BASE_URL}/api/foodstuff/market-prices`);
  console.log(`Market Prices API:                    ${mp.durationMs}ms [Status: ${mp.status}, Items: ${mp.json()?.items?.length || 0}]`);

  // E. Product Search / Filter
  const search = await timedFetch(`${BASE_URL}/api/foodstuff/market-prices?search=onion&category=VEGETABLES`);
  console.log(`Product Filter/Search API:            ${search.durationMs}ms [Status: ${search.status}, Results: ${search.json()?.items?.length || 0}]`);

  // 2. CONTACT / INQUIRY BENCHMARK
  console.log('\n--- 2. INQUIRY / CONTACT SUBMISSION ---');
  const inquiryPayload = {
    name: 'Audit Benchmark Lead',
    email: 'bench.lead@dubaihotelier.ae',
    phone: '+971 50 111 2233',
    company: 'Burj Hospitality Audits',
    service: 'General Inquiry',
    message: 'Performance benchmark audit inquiry message.',
    source: 'contact_form'
  };
  const inquiry = await timedFetch(`${BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiryPayload)
  });
  console.log(`Contact / Inquiry Submission:         ${inquiry.durationMs}ms [Status: ${inquiry.status}, Success: ${inquiry.json()?.success}]`);

  // 3. COMPLETE ORDER PROCESSING BENCHMARK
  console.log('\n--- 3. ORDER PROCESSING (POST /api/foodstuff/orders) ---');
  const orderPayload = {
    customerName: 'Audit Retailer LLC',
    companyName: 'Al Aweer Hypermarket Group',
    phone: '+971 56 888 9900',
    email: 'procurement@alaweer-hyper.ae',
    pickupDate: '2026-10-15',
    pickupTime: 'Morning Session (07:00 - 11:00)',
    items: [
      {
        productId: 'tomato-fresh',
        productName: 'Fresh Tomato Grade A',
        orderType: 'DUBAI_WHOLESALE',
        pricePerCtn: 22.00,
        quantityCtn: 15,
        packagingUnit: 'CTN'
      },
      {
        productId: 'onion-red',
        productName: 'Red Onion Jumbo',
        orderType: 'DUBAI_WHOLESALE',
        pricePerCtn: 26.50,
        quantityCtn: 20,
        packagingUnit: 'BAG'
      }
    ],
    notes: 'Audit benchmark order test'
  };

  const orderStart = performance.now();
  const orderRes = await timedFetch(`${BASE_URL}/api/foodstuff/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderPayload)
  });
  const orderEnd = performance.now();
  const orderData = orderRes.json();

  console.log(`Total Order API Response Time:        ${orderRes.durationMs}ms [Status: ${orderRes.status}, OrderId: ${orderData?.orderId}]`);
  console.log(`Email Dispatched Flag:                ${orderData?.emailDispatched}`);

  console.log('\n====================================================');
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
