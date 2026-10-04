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

async function testConnection() {
  const env = loadEnv();
  const uri = env.MONGODB_URI;
  const dbName = env.MONGODB_DB || 'barakah_al_rizq';

  if (!uri) {
    console.error('ERROR: MONGODB_URI is not set in .env.local');
    process.exit(1);
  }

  // Mask credentials for display
  const maskedUri = uri.replace(/\/\/([^:]+):([^@]+)@/, '//***:***@');
  console.log(`Connecting to MongoDB Atlas endpoint [${maskedUri}]...`);
  console.log(`Target Database: "${dbName}"`);

  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,
  });

  try {
    const startTime = Date.now();
    await client.connect();
    const connectDuration = Date.now() - startTime;
    console.log(`Connection established in ${connectDuration}ms`);

    const db = client.db(dbName);
    const pingResult = await db.command({ ping: 1 });
    console.log(`Ping Response:`, JSON.stringify(pingResult));

    const collections = await db.listCollections().toArray();
    console.log(`Existing Collections in "${dbName}":`, collections.map(c => c.name));

    console.log('SUCCESS: MongoDB Atlas connection verified and 100% operational.');
  } catch (err) {
    console.error('Connection failed:', err.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

testConnection();
