const dns = require('node:dns');
const fs = require('node:fs');
const path = require('node:path');
const { MongoClient } = require('mongodb');

try {
  if (typeof dns.setServers === 'function') {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  }
} catch {}

function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  const content = fs.readFileSync(envPath, 'utf8');
  const env = {};
  content.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        let v = trimmed.substring(idx + 1).trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        env[trimmed.substring(0, idx).trim()] = v;
      }
    }
  });
  return env;
}

function loadJsonDb() {
  const jsonPath = path.join(__dirname, '..', 'data', 'webstudioae.db.json');
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}

async function verifyPhase2Deep() {
  const jsonData = loadJsonDb();
  const env = loadEnv();
  const client = new MongoClient(env.MONGODB_URI);
  await client.connect();
  const db = client.db(env.MONGODB_DB || 'barakah_al_rizq');

  console.log('====================================================');
  console.log('PHASE 2 DEEP FIELD-LEVEL VALIDATION');
  console.log('====================================================\n');

  let errors = [];

  // 1. Verify Products
  const prodCol = db.collection('foodstuff_products');
  const mongoProds = await prodCol.find({}).toArray();
  console.log(`[Products] JSON Count: ${jsonData.foodstuffProducts.length} | MongoDB Count: ${mongoProds.length}`);
  if (jsonData.foodstuffProducts.length !== mongoProds.length) {
    errors.push(`Product count mismatch: JSON=${jsonData.foodstuffProducts.length}, MongoDB=${mongoProds.length}`);
  }

  const prodMap = new Map(mongoProds.map(p => [p._id, p]));
  for (const jp of jsonData.foodstuffProducts) {
    const mp = prodMap.get(jp.id);
    if (!mp) {
      errors.push(`Missing product in MongoDB: ${jp.id}`);
      continue;
    }
    if (mp.name !== jp.name || mp.arabicName !== jp.arabicName || mp.category !== jp.category || mp.origin !== jp.origin) {
      errors.push(`Field mismatch on product ${jp.id}: name/arabicName/category/origin`);
    }
    if (mp.defaultPackagingUnit !== jp.defaultPackagingUnit || mp.defaultNetWeightKg !== jp.defaultNetWeightKg) {
      errors.push(`Packaging mismatch on product ${jp.id}`);
    }
  }

  // 2. Verify Container Prices
  const cpCol = db.collection('foodstuff_container_prices');
  const mongoCps = await cpCol.find({}).toArray();
  console.log(`[Container Prices] JSON Count: ${jsonData.foodstuffContainerPrices.length} | MongoDB Count: ${mongoCps.length}`);
  if (jsonData.foodstuffContainerPrices.length !== mongoCps.length) {
    errors.push(`Container price count mismatch: JSON=${jsonData.foodstuffContainerPrices.length}, MongoDB=${mongoCps.length}`);
  }

  const cpMap = new Map(mongoCps.map(c => [c._id, c]));
  for (const jc of jsonData.foodstuffContainerPrices) {
    const mc = cpMap.get(jc.id);
    if (!mc) {
      errors.push(`Missing container price in MongoDB: ${jc.id}`);
      continue;
    }
    if (mc.productId !== jc.productId) {
      errors.push(`productId mismatch on container price ${jc.id}: JSON=${jc.productId}, MongoDB=${mc.productId}`);
    }
    if (mc.priceAED !== jc.priceAED || mc.netWeightKg !== jc.netWeightKg || mc.businessStatus !== jc.businessStatus) {
      errors.push(`Data mismatch on container price ${jc.id}`);
    }
    // Check foreign key
    if (!prodMap.has(mc.productId)) {
      errors.push(`Orphan container price ${jc.id}: productId ${mc.productId} not found in products`);
    }
  }

  // 3. Verify Market Prices
  const mpCol = db.collection('foodstuff_market_prices');
  const mongoMps = await mpCol.find({}).toArray();
  console.log(`[Market Prices] JSON Count: ${jsonData.foodstuffMarketPrices.length} | MongoDB Count: ${mongoMps.length}`);
  if (jsonData.foodstuffMarketPrices.length !== mongoMps.length) {
    errors.push(`Market price count mismatch: JSON=${jsonData.foodstuffMarketPrices.length}, MongoDB=${mongoMps.length}`);
  }

  const mpMap = new Map(mongoMps.map(m => [m._id, m]));
  for (const jm of jsonData.foodstuffMarketPrices) {
    const mm = mpMap.get(jm.id);
    if (!mm) {
      errors.push(`Missing market price in MongoDB: ${jm.id}`);
      continue;
    }
    if (mm.productId !== jm.productId) {
      errors.push(`productId mismatch on market price ${jm.id}`);
    }
    if (mm.priceAED !== jm.priceAED || mm.trend !== jm.trend || mm.businessStatus !== jm.businessStatus) {
      errors.push(`Data mismatch on market price ${jm.id}`);
    }
    // Check foreign key
    if (!prodMap.has(mm.productId)) {
      errors.push(`Orphan market price ${jm.id}: productId ${mm.productId} not found in products`);
    }
  }

  // 4. Verify Schedule
  const schedCol = db.collection('foodstuff_schedule');
  const mongoSched = await schedCol.findOne({ _id: 'schedule_config' });
  console.log(`[Schedule] Found in MongoDB: ${mongoSched ? 'YES' : 'NO'}`);
  if (!mongoSched) {
    errors.push('Missing schedule_config document in foodstuff_schedule collection');
  } else {
    const js = jsonData.foodstuffUpdateSchedule;
    if (mongoSched.morningTime !== js.morningTime || mongoSched.middayTime !== js.middayTime || mongoSched.eveningTime !== js.eveningTime || mongoSched.timezone !== js.timezone) {
      errors.push('Schedule timing mismatch');
    }
  }

  // 5. Verify Unmigrated Collections are Still Empty (Phase Isolation Check)
  const unmigratedCollections = ['leads', 'admin_users', 'projects', 'services', 'pricing_packages', 'navigation_items', 'faq_items', 'activity_logs', 'cms_content'];
  for (const u of unmigratedCollections) {
    const cnt = await db.collection(u).countDocuments();
    if (cnt > 0) {
      errors.push(`Phase isolation violation: ${u} should be 0, found ${cnt}`);
    }
  }

  console.log('\n----------------------------------------------------');
  if (errors.length === 0) {
    console.log('✔ ALL DEEP FIELD-LEVEL VALIDATION CHECKS PASSED PERFECTLY!');
    console.log('✔ 100% ID preservation, relationship integrity, and data fidelity confirmed.');
  } else {
    console.error('❌ VALIDATION ERRORS FOUND:', errors);
  }
  console.log('----------------------------------------------------');

  // Print sample verification comparison
  console.log('\nSAMPLE FIELD COMPARISON (Tomato Fresh):');
  const sampleP = prodMap.get('tomato-fresh');
  const sampleCp = cpMap.get('cp-tomato-fresh');
  const sampleMp = mpMap.get('mp-tomato-fresh');
  console.log('Product:', { id: sampleP._id, name: sampleP.name, arabicName: sampleP.arabicName, origin: sampleP.origin, grade: sampleP.grade });
  console.log('Container Rate:', { id: sampleCp._id, productId: sampleCp.productId, priceAED: sampleCp.priceAED, packagingDetails: sampleCp.packagingDetails, status: sampleCp.businessStatus });
  console.log('Market Rate:', { id: sampleMp._id, productId: sampleMp.productId, priceAED: sampleMp.priceAED, trend: sampleMp.trend, status: sampleMp.businessStatus });
  console.log('Schedule:', { morning: mongoSched.morningTime, midday: mongoSched.middayTime, evening: mongoSched.eveningTime, tz: mongoSched.timezone });

  await client.close();
}

verifyPhase2Deep().catch(err => {
  console.error('Verification script failed:', err);
  process.exit(1);
});
