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
  if (!fs.existsSync(envPath)) throw new Error('.env.local file not found');
  const content = fs.readFileSync(envPath, 'utf8');
  const env = {};
  content.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const k = trimmed.substring(0, idx).trim();
        let v = trimmed.substring(idx + 1).trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        env[k] = v;
      }
    }
  });
  return env;
}

function loadJsonDb() {
  const jsonPath = path.join(__dirname, '..', 'data', 'webstudioae.db.json');
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}

async function validateParity() {
  const jsonData = loadJsonDb();
  const env = loadEnv();
  const uri = env.MONGODB_URI;
  const dbName = env.MONGODB_DB || 'barakah_al_rizq';

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  console.log('====================================================');
  console.log(`BARAKAH AL RIZQ — MIGRATION VALIDATION REPORT`);
  console.log(`Database: "${dbName}"`);
  console.log('====================================================\n');

  const collectionsToCheck = [
    { name: 'foodstuff_products', jsonKey: 'foodstuffProducts' },
    { name: 'foodstuff_container_prices', jsonKey: 'foodstuffContainerPrices' },
    { name: 'foodstuff_market_prices', jsonKey: 'foodstuffMarketPrices' },
    { name: 'foodstuff_price_history', jsonKey: 'foodstuffPriceHistory' },
    { name: 'leads', jsonKey: 'leads' },
    { name: 'admin_users', jsonKey: 'adminUsers' },
    { name: 'projects', jsonKey: 'projects' },
    { name: 'services', jsonKey: 'services' },
    { name: 'pricing_packages', jsonKey: 'pricingPackages' },
    { name: 'navigation_items', jsonKey: 'navigationItems' },
    { name: 'faq_items', jsonKey: 'faqItems' },
    { name: 'activity_logs', jsonKey: 'activityLogs' },
  ];

  const results = [];
  let totalJsonRecords = 0;
  let totalMongoRecords = 0;

  for (const c of collectionsToCheck) {
    const jsonItems = jsonData[c.jsonKey] || [];
    const col = db.collection(c.name);
    const mongoCount = await col.countDocuments();

    totalJsonRecords += jsonItems.length;
    totalMongoRecords += mongoCount;

    const isMatch = jsonItems.length === mongoCount;
    results.push({
      Collection: c.name,
      'JSON Source Count': jsonItems.length,
      'MongoDB Count': mongoCount,
      Status: isMatch ? (jsonItems.length === 0 ? 'Empty (Matched)' : '✔ MATCHED') : 'MISMATCH',
    });
  }

  // Check singletons
  const cmsCol = db.collection('cms_content');
  const homepageDoc = await cmsCol.findOne({ _id: 'homepage_content' });
  const seoDoc = await cmsCol.findOne({ _id: 'seo_config' });

  results.push({
    Collection: 'cms_content [homepage_content]',
    'JSON Source Count': 1,
    'MongoDB Count': homepageDoc ? 1 : 0,
    Status: homepageDoc ? '✔ MATCHED' : 'NOT_MIGRATED',
  });

  results.push({
    Collection: 'cms_content [seo_config]',
    'JSON Source Count': 1,
    'MongoDB Count': seoDoc ? 1 : 0,
    Status: seoDoc ? '✔ MATCHED' : 'NOT_MIGRATED',
  });

  console.table(results);
  console.log(`Total Expected Records: ${totalJsonRecords + 2} | Total In MongoDB: ${totalMongoRecords + (homepageDoc ? 1 : 0) + (seoDoc ? 1 : 0)}`);

  await client.close();
}

if (require.main === module) {
  validateParity().catch(err => {
    console.error('Validation failed:', err.message);
    process.exit(1);
  });
}

module.exports = { validateParity };
