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

async function initIndexes() {
  const env = loadEnv();
  const uri = env.MONGODB_URI;
  const dbName = env.MONGODB_DB || 'barakah_al_rizq';

  if (!uri) {
    throw new Error('MONGODB_URI is not set in .env.local');
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);

    console.log(`Initializing indexes on MongoDB Atlas database: "${dbName}"...`);

    // 1. foodstuff_products
    await db.collection('foodstuff_products').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await db.collection('foodstuff_products').createIndex({ category: 1 }, { name: 'idx_category' });
    await db.collection('foodstuff_products').createIndex({ published: 1 }, { name: 'idx_published' });
    console.log('✔ foodstuff_products indexes initialized');

    // 2. foodstuff_container_prices
    await db.collection('foodstuff_container_prices').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await db.collection('foodstuff_container_prices').createIndex({ productId: 1 }, { unique: true, name: 'uniq_productId' });
    await db.collection('foodstuff_container_prices').createIndex({ businessStatus: 1 }, { name: 'idx_businessStatus' });
    console.log('✔ foodstuff_container_prices indexes initialized');

    // 3. foodstuff_market_prices
    await db.collection('foodstuff_market_prices').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await db.collection('foodstuff_market_prices').createIndex({ productId: 1 }, { unique: true, name: 'uniq_productId' });
    await db.collection('foodstuff_market_prices').createIndex({ businessStatus: 1 }, { name: 'idx_businessStatus' });
    console.log('✔ foodstuff_market_prices indexes initialized');

    // 4. foodstuff_price_history
    await db.collection('foodstuff_price_history').createIndex({ productId: 1, timestamp: -1 }, { name: 'idx_prod_time' });
    await db.collection('foodstuff_price_history').createIndex({ priceType: 1 }, { name: 'idx_priceType' });
    console.log('✔ foodstuff_price_history indexes initialized');

    // 5. leads
    await db.collection('leads').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await db.collection('leads').createIndex({ createdAt: -1 }, { name: 'idx_createdAt' });
    await db.collection('leads').createIndex({ status: 1 }, { name: 'idx_status' });
    console.log('✔ leads indexes initialized');

    // 6. admin_users
    await db.collection('admin_users').createIndex({ email: 1 }, { unique: true, name: 'uniq_email' });
    console.log('✔ admin_users indexes initialized');

    // 7. projects
    await db.collection('projects').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await db.collection('projects').createIndex({ slug: 1 }, { name: 'idx_slug' });
    await db.collection('projects').createIndex({ order: 1 }, { name: 'idx_order' });
    console.log('✔ projects indexes initialized');

    // 8. services & pricing
    await db.collection('services').createIndex({ slug: 1 }, { unique: true, name: 'uniq_slug' });
    await db.collection('pricing_packages').createIndex({ slug: 1 }, { unique: true, name: 'uniq_slug' });
    console.log('✔ services & pricing_packages indexes initialized');

    // 9. navigation & faq
    await db.collection('navigation_items').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await db.collection('faq_items').createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    console.log('✔ navigation_items & faq_items indexes initialized');

    // 10. activity_logs & site_settings
    await db.collection('activity_logs').createIndex({ timestamp: -1 }, { name: 'idx_timestamp' });
    await db.collection('site_settings').createIndex({ key: 1 }, { unique: true, name: 'uniq_key' });
    console.log('✔ activity_logs & site_settings indexes initialized');

    console.log('----------------------------------------------------');
    console.log('ALL MONGODB INDEXES SUCCESSFULLY CREATED');
    console.log('Zero business documents inserted.');
    console.log('----------------------------------------------------');
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  initIndexes().catch(err => {
    console.error('Failed to initialize indexes:', err.message);
    process.exit(1);
  });
}

module.exports = { initIndexes };
