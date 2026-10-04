const http = require('http');

function fetch(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: data.startsWith('{') || data.startsWith('[') ? JSON.parse(data) : data });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('--- 1. Testing Container Prices API ---');
  const cp = await fetch('http://localhost:3001/api/foodstuff/container-prices');
  console.log('Status:', cp.status, 'Total Items:', cp.data.totalItems, 'Session:', cp.data.activeSession);
  console.log('Item 0:', cp.data.items[0].productName, '| Price:', cp.data.items[0].priceAED, '| Status:', cp.data.items[0].businessStatus);

  console.log('\n--- 2. Testing Market Prices API ---');
  const mp = await fetch('http://localhost:3001/api/foodstuff/market-prices');
  console.log('Status:', mp.status, 'Total Items:', mp.data.totalItems, 'Session:', mp.data.activeSession);
  console.log('Item 0:', mp.data.items[0].productName, '| Price:', mp.data.items[0].priceAED, '| Status:', mp.data.items[0].businessStatus);

  console.log('\n--- 3. Testing Public Showcase Page HTML ---');
  const page = await fetch('http://localhost:3001/work/foodstuff-trading');
  console.log('Status:', page.status, 'HTML Length:', page.data.length);
  console.log('Has Unified Wholesale Produce Board:', page.data.includes('Unified Wholesale Produce Board'));
  console.log('Has CONTAINER WHOLESALE badge:', page.data.includes('CONTAINER WHOLESALE'));
  console.log('Has DUBAI WHOLESALE badge:', page.data.includes('DUBAI WHOLESALE'));
  console.log('Has PRICE ON REQUEST tag:', page.data.includes('PRICE ON REQUEST'));
  console.log('Has grid-cols-2 mobile:', page.data.includes('grid-cols-2'));
  console.log('Has lg:grid-cols-4 desktop:', page.data.includes('lg:grid-cols-4'));

  console.log('\n--- 4. Testing Admin Auth Protection ---');
  const adminRes = await fetch('http://localhost:3001/api/admin/foodstuff/prices');
  console.log('Admin API Unauthorized Status (should be 401):', adminRes.status);
}

run().catch(console.error);
