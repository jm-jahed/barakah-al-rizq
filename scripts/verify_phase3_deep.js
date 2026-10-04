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

async function verifyPhase3Deep() {
  const jsonData = loadJsonDb();
  const env = loadEnv();
  const client = new MongoClient(env.MONGODB_URI);
  await client.connect();
  const db = client.db(env.MONGODB_DB || 'barakah_al_rizq');

  console.log('====================================================');
  console.log('PHASE 3 DEEP FIELD-LEVEL VALIDATION');
  console.log('====================================================\n');

  let errors = [];

  // 1. Verify Leads
  const leadsCol = db.collection('leads');
  const mongoLeads = await leadsCol.find({}).toArray();
  console.log(`[Leads] JSON Count: ${jsonData.leads.length} | MongoDB Count: ${mongoLeads.length}`);
  if (jsonData.leads.length !== mongoLeads.length) {
    errors.push(`Leads count mismatch: JSON=${jsonData.leads.length}, MongoDB=${mongoLeads.length}`);
  }

  const leadMap = new Map(mongoLeads.map(l => [l._id, l]));
  for (const jl of jsonData.leads) {
    const ml = leadMap.get(jl.id);
    if (!ml) {
      errors.push(`Missing lead in MongoDB: ${jl.id}`);
      continue;
    }
    if (ml.name !== jl.name || ml.email !== jl.email || ml.phone !== jl.phone || ml.status !== jl.status) {
      errors.push(`Field mismatch on lead ${jl.id}: name/email/phone/status`);
    }
    if (ml.message !== jl.message || ml.source !== jl.source) {
      errors.push(`Field mismatch on lead ${jl.id}: message/source`);
    }
  }

  // 2. Verify Activity Logs
  const actCol = db.collection('activity_logs');
  const mongoActs = await actCol.find({}).toArray();
  console.log(`[Activity Logs] JSON Count: ${jsonData.activityLogs.length} | MongoDB Count: ${mongoActs.length}`);
  if (jsonData.activityLogs.length !== mongoActs.length) {
    errors.push(`Activity logs count mismatch: JSON=${jsonData.activityLogs.length}, MongoDB=${mongoActs.length}`);
  }

  const actMap = new Map(mongoActs.map(a => [a._id, a]));
  for (const ja of jsonData.activityLogs) {
    const ma = actMap.get(ja.id);
    if (!ma) {
      errors.push(`Missing activity log in MongoDB: ${ja.id}`);
      continue;
    }
    if (ma.user !== ja.user || ma.action !== ja.action || ma.entity !== ja.entity || ma.timestamp !== ja.timestamp) {
      errors.push(`Field mismatch on activity log ${ja.id}`);
    }
  }

  // 3. Verify Phase 2 Collections are preserved intact (67 records)
  const pCount = await db.collection('foodstuff_products').countDocuments();
  const cpCount = await db.collection('foodstuff_container_prices').countDocuments();
  const mpCount = await db.collection('foodstuff_market_prices').countDocuments();
  const sCount = await db.collection('foodstuff_schedule').countDocuments();
  console.log(`[Phase 2 Integrity] Products: ${pCount}/22, Container Prices: ${cpCount}/22, Market Prices: ${mpCount}/22, Schedule: ${sCount}/1`);
  if (pCount !== 22 || cpCount !== 22 || mpCount !== 22 || sCount !== 1) {
    errors.push('Phase 2 integrity check failed: unexpected record count in Phase 2 collections');
  }

  // 4. Verify Phase 4 Collections remain unmigrated (0 records)
  const phase4Collections = ['admin_users', 'projects', 'services', 'pricing_packages', 'navigation_items', 'faq_items', 'testimonials', 'blog_posts', 'newsletter_subscribers', 'site_settings'];
  for (const u of phase4Collections) {
    const cnt = await db.collection(u).countDocuments();
    if (cnt > 0) {
      errors.push(`Phase 4 isolation violation: ${u} has ${cnt} records, should be 0`);
    }
  }

  const cmsCount = await db.collection('cms_content').countDocuments();
  if (cmsCount > 0) {
    errors.push(`Phase 4 isolation violation: cms_content has ${cmsCount} records, should be 0`);
  }

  console.log('\n----------------------------------------------------');
  if (errors.length === 0) {
    console.log('✔ ALL PHASE 3 DEEP FIELD-LEVEL VALIDATION CHECKS PASSED PERFECTLY!');
    console.log('✔ Leads & Activity Logs 100% matched with exact ID preservation.');
    console.log('✔ Phase 2 collections intact (67 records). Phase 4 collections strictly isolated (0 records).');
  } else {
    console.error('❌ VALIDATION ERRORS FOUND:', errors);
  }
  console.log('----------------------------------------------------');

  // Print sample verification comparison
  console.log('\nSAMPLE LEAD VERIFICATION:');
  const sampleLead = mongoLeads[0];
  console.log('Lead Record:', { id: sampleLead._id, name: sampleLead.name, email: sampleLead.email, phone: sampleLead.phone, service: sampleLead.service, status: sampleLead.status });

  console.log('\nSAMPLE ACTIVITY LOG VERIFICATION:');
  const sampleAct = mongoActs[0];
  console.log('Activity Log Record:', { id: sampleAct._id, user: sampleAct.user, action: sampleAct.action, entity: sampleAct.entity, timestamp: sampleAct.timestamp });

  await client.close();
}

verifyPhase3Deep().catch(err => {
  console.error('Verification script failed:', err);
  process.exit(1);
});
