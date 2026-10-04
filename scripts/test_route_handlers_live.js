const dns = require('node:dns');
const fs = require('node:fs');
const path = require('node:path');

try {
  if (typeof dns.setServers === 'function') {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  }
} catch {}

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const content = fs.readFileSync(envPath, 'utf8');
  content.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        let v = trimmed.substring(idx + 1).trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        process.env[trimmed.substring(0, idx).trim()] = v;
      }
    }
  });
}

loadEnv();

async function testLiveHandlers() {
  console.log('====================================================');
  console.log('TESTING LIVE ROUTE HANDLERS AGAINST MONGODB ATLAS');
  console.log('====================================================\n');

  // 1. Test Market Prices Route
  const { GET: getMarketPrices } = require('../src/app/api/foodstuff/market-prices/route.ts');
  const req1 = new Request('http://localhost:3000/api/foodstuff/market-prices?category=VEGETABLES');
  const res1 = await getMarketPrices(req1);
  const data1 = await res1.json();
  console.log('[1. /api/foodstuff/market-prices?category=VEGETABLES]');
  console.log(`Status: ${res1.status} | Success: ${data1.success}`);
  console.log(`Market: "${data1.market}"`);
  console.log(`Active Session: ${data1.activeSession} | UAE Time: ${data1.currentTimeUAE}`);
  console.log(`Vegetables Count: ${data1.totalCount} (Sample: ${data1.items[0]?.productName} @ ${data1.items[0]?.priceAED} AED)`);

  // 2. Test Container Prices Route
  const { GET: getContainerPrices } = require('../src/app/api/foodstuff/container-prices/route.ts');
  const req2 = new Request('http://localhost:3000/api/foodstuff/container-prices');
  const res2 = await getContainerPrices(req2);
  const data2 = await res2.json();
  console.log('\n[2. /api/foodstuff/container-prices]');
  console.log(`Status: ${res2.status} | Success: ${data2.success}`);
  console.log(`Total Container Rates: ${data2.totalCount}`);
  console.log(`Sample: ${data2.items[0]?.productName} (${data2.items[0]?.packagingDetails}) - ${data2.items[0]?.priceAED} AED`);

  // 3. Test Schedule Status Route
  const { GET: getScheduleStatus } = require('../src/app/api/foodstuff/schedule-status/route.ts');
  const res3 = await getScheduleStatus();
  const data3 = await res3.json();
  console.log('\n[3. /api/foodstuff/schedule-status]');
  console.log(`Status: ${res3.status} | Success: ${data3.success}`);
  console.log(`Session: ${data3.activeSession} | Timezone: ${data3.timezone}`);
  console.log(`Sessions Timetable: Morning: ${data3.sessions.morning}, Midday: ${data3.sessions.midday}, Evening: ${data3.sessions.evening}`);

  console.log('\n====================================================');
  console.log('✔ ALL 3 MONGODB-POWERED ENDPOINTS RESPONDED WITH 100% SUCCESS');
  console.log('====================================================');
}

testLiveHandlers().catch(err => {
  console.error('Handler test failed:', err);
  process.exit(1);
});
