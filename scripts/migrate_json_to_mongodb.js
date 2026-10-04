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
  if (!fs.existsSync(envPath)) {
    throw new Error('.env.local file not found');
  }
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
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`JSON Database file not found at: ${jsonPath}`);
  }
  return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
}

async function migrateData(options = { dryRun: true, phase: 'all' }) {
  const isDryRun = options.dryRun !== false;
  const targetPhase = options.phase || 'all';

  console.log('====================================================');
  console.log(`BARAKAH AL RIZQ — MONGODB MIGRATION RUNNER`);
  console.log(`Mode: ${isDryRun ? 'DRY-RUN (NO DATA MODIFIED)' : 'EXECUTE (WRITING TO MONGODB)'}`);
  console.log(`Phase Target: ${targetPhase}`);
  console.log('====================================================\n');

  const jsonData = loadJsonDb();
  const env = loadEnv();
  const uri = env.MONGODB_URI;
  const dbName = env.MONGODB_DB || 'barakah_al_rizq';

  if (!uri) throw new Error('MONGODB_URI is not configured in .env.local');

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  const report = [];

  async function migrateArrayCollection(collectionName, items, idField = 'id') {
    if (!items || !Array.isArray(items)) {
      report.push({ collection: collectionName, sourceCount: 0, targetUpserted: 0, status: 'SKIPPED (Empty)' });
      return;
    }

    const col = db.collection(collectionName);
    let upsertedCount = 0;

    for (const item of items) {
      const docId = item[idField] || item.id || item._id;
      if (!docId) continue;

      const doc = { ...item, _id: String(docId), id: String(docId) };

      if (!isDryRun) {
        await col.replaceOne({ _id: doc._id }, doc, { upsert: true });
      }
      upsertedCount++;
    }

    const destCount = isDryRun ? (await col.countDocuments()) : upsertedCount;

    report.push({
      collection: collectionName,
      sourceCount: items.length,
      processed: upsertedCount,
      destinationCount: destCount,
      status: isDryRun ? 'READY (Dry-Run)' : 'MIGRATED',
    });
  }

  async function migrateSingleton(collectionName, docId, dataObject) {
    if (!dataObject || typeof dataObject !== 'object') {
      report.push({ collection: collectionName, sourceCount: 0, targetUpserted: 0, status: 'SKIPPED (Empty)' });
      return;
    }

    const col = db.collection(collectionName);
    const doc = { ...dataObject, _id: docId };

    if (!isDryRun) {
      await col.replaceOne({ _id: docId }, doc, { upsert: true });
    }

    const destCount = isDryRun ? (await col.countDocuments()) : 1;
    report.push({
      collection: `${collectionName} [${docId}]`,
      sourceCount: 1,
      processed: 1,
      destinationCount: destCount,
      status: isDryRun ? 'READY (Dry-Run)' : 'MIGRATED',
    });
  }

  try {
    // PHASE 2: Foodstuff Live Wholesale Core
    if (targetPhase === 'all' || targetPhase === '2' || targetPhase === 'phase2') {
      console.log('--- Processing Phase 2: Foodstuff Wholesale & Live Rates ---');
      await migrateArrayCollection('foodstuff_products', jsonData.foodstuffProducts, 'id');
      await migrateArrayCollection('foodstuff_container_prices', jsonData.foodstuffContainerPrices, 'id');
      await migrateArrayCollection('foodstuff_market_prices', jsonData.foodstuffMarketPrices, 'id');
      await migrateArrayCollection('foodstuff_price_history', jsonData.foodstuffPriceHistory, 'id');
      await migrateSingleton('foodstuff_schedule', 'schedule_config', jsonData.foodstuffUpdateSchedule);
    }

    // PHASE 3: Commercial Inquiries & Audit Logs
    if (targetPhase === 'all' || targetPhase === '3' || targetPhase === 'phase3') {
      console.log('--- Processing Phase 3: Leads & Activity Logs ---');
      await migrateArrayCollection('leads', jsonData.leads, 'id');
      await migrateArrayCollection('activity_logs', jsonData.activityLogs, 'id');
    }

    // PHASE 4: CMS, Portfolio, Navigation, SEO & Admin
    if (targetPhase === 'all' || targetPhase === '4' || targetPhase === 'phase4') {
      console.log('--- Processing Phase 4: CMS, Projects & Site Platform ---');
      await migrateArrayCollection('admin_users', jsonData.adminUsers, 'id');
      await migrateArrayCollection('projects', jsonData.projects, 'id');
      await migrateArrayCollection('services', jsonData.services, 'id');
      await migrateArrayCollection('pricing_packages', jsonData.pricingPackages, 'id');
      await migrateArrayCollection('testimonials', jsonData.testimonials, 'id');
      await migrateArrayCollection('blog_posts', jsonData.blogPosts, 'id');
      await migrateArrayCollection('newsletter_subscribers', jsonData.newsletterSubscribers, 'id');
      await migrateArrayCollection('navigation_items', jsonData.navigationItems, 'id');
      await migrateArrayCollection('faq_items', jsonData.faqItems, 'id');
      await migrateArrayCollection('site_settings', jsonData.siteSettings, 'id');
      await migrateSingleton('cms_content', 'homepage_content', jsonData.homepageContent);
      await migrateSingleton('cms_content', 'seo_config', jsonData.seoConfig);
    }

    console.log('\n====================================================');
    console.log('MIGRATION SUMMARY TABLE:');
    console.log('====================================================');
    console.table(report);

    if (isDryRun) {
      console.log('\n[DRY RUN COMPLETED] Zero database writes performed. Pass --execute to apply changes.');
    } else {
      console.log('\n[EXECUTION COMPLETED] All selected data successfully migrated into MongoDB Atlas.');
    }

    return report;
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const isExecute = args.includes('--execute');
  const phaseArg = args.find(a => a.startsWith('--phase='));
  const phase = phaseArg ? phaseArg.split('=')[1] : (args.includes('--phase') ? args[args.indexOf('--phase') + 1] : 'all');

  migrateData({ dryRun: !isExecute, phase }).catch(err => {
    console.error('Migration failed:', err.message);
    process.exit(1);
  });
}

module.exports = { migrateData };
