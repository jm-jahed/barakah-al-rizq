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

async function fixProjectsIndex() {
  const env = loadEnv();
  const uri = env.MONGODB_URI;
  const dbName = env.MONGODB_DB || 'barakah_al_rizq';

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection('projects');

    console.log('--- Step 1: Existing Indexes on "projects" ---');
    let existing = await col.indexes();
    console.table(existing);

    // Drop uniq_slug if it exists
    const hasUniqSlug = existing.some(idx => idx.name === 'uniq_slug');
    if (hasUniqSlug) {
      console.log('Dropping unique index "uniq_slug"...');
      await col.dropIndex('uniq_slug');
      console.log('✔ Dropped "uniq_slug" successfully.');
    }

    // Create unique id index and non-unique slug index
    console.log('Creating unique index on "id" and non-unique index on "slug"...');
    await col.createIndex({ id: 1 }, { unique: true, name: 'uniq_id' });
    await col.createIndex({ slug: 1 }, { name: 'idx_slug' });
    await col.createIndex({ order: 1 }, { name: 'idx_order' });

    console.log('\n--- Step 2: Verified Final Indexes on "projects" ---');
    const finalIndexes = await col.indexes();
    console.table(finalIndexes);

    return finalIndexes;
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  fixProjectsIndex().catch(err => {
    console.error('Failed to fix projects index:', err);
    process.exit(1);
  });
}

module.exports = { fixProjectsIndex };
