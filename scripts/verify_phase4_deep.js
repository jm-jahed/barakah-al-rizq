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

async function verifyPhase4Deep() {
  const jsonData = loadJsonDb();
  const env = loadEnv();
  const client = new MongoClient(env.MONGODB_URI);
  await client.connect();
  const db = client.db(env.MONGODB_DB || 'barakah_al_rizq');

  console.log('====================================================');
  console.log('BARAKAH AL RIZQ — PHASE 4 DEEP VALIDATION REPORT');
  console.log('====================================================\n');

  let errors = [];

  // 1. Verify Projects (51 records)
  const projCol = db.collection('projects');
  const mongoProjs = await projCol.find({}).toArray();
  console.log(`[Projects] JSON Count: ${jsonData.projects.length} | MongoDB Count: ${mongoProjs.length}`);
  if (jsonData.projects.length !== mongoProjs.length) {
    errors.push(`Projects count mismatch: JSON=${jsonData.projects.length}, MongoDB=${mongoProjs.length}`);
  }

  const projMap = new Map(mongoProjs.map(p => [p._id, p]));
  for (const jp of jsonData.projects) {
    const mp = projMap.get(jp.id);
    if (!mp) {
      errors.push(`Missing project in MongoDB: ${jp.id}`);
      continue;
    }
    if (mp.slug !== jp.slug || mp.title !== jp.title || mp.category !== jp.category || mp.order !== jp.order) {
      errors.push(`Field mismatch on project ${jp.id}: slug/title/category/order`);
    }
    if (mp.featured !== jp.featured || mp.published !== jp.published || mp.heroImage !== jp.heroImage) {
      errors.push(`Field mismatch on project ${jp.id}: featured/published/heroImage`);
    }
  }

  // 2. Explicit Duplicate Slugs Verification
  const duplicatePairs = [
    { p1: 'p-45', p2: 'p-3', expectedSlug: 'business-center-serviced-offices' },
    { p1: 'p-19', p2: 'p-27', expectedSlug: 'fast-food-restaurant' },
    { p1: 'p-23', p2: 'p-5', expectedSlug: 'yacht-charter' },
    { p1: 'p-36', p2: 'p-35', expectedSlug: 'holiday-home-management' },
    { p1: 'p-49', p2: 'p-48', expectedSlug: 'coding-tech-academy' },
  ];

  console.log('\n--- Checking 5 Duplicate Slug Pairs ---');
  for (const pair of duplicatePairs) {
    const doc1 = projMap.get(pair.p1);
    const doc2 = projMap.get(pair.p2);
    if (!doc1 || !doc2) {
      errors.push(`Duplicate slug verification failed: Missing ${pair.p1} or ${pair.p2}`);
    } else if (doc1.slug !== pair.expectedSlug || doc2.slug !== pair.expectedSlug) {
      errors.push(`Slug mismatch for pair ${pair.p1}/${pair.p2}: Expected ${pair.expectedSlug}`);
    } else {
      console.log(`✔ Verified pair: [${pair.p1} (${doc1.title})] & [${pair.p2} (${doc2.title})] -> "${pair.expectedSlug}"`);
    }
  }

  // 3. Admin User Verification
  const adminCol = db.collection('admin_users');
  const mongoAdmins = await adminCol.find({}).toArray();
  console.log(`\n[Admin Users] JSON Count: ${jsonData.adminUsers.length} | MongoDB Count: ${mongoAdmins.length}`);
  if (jsonData.adminUsers.length !== mongoAdmins.length) {
    errors.push(`Admin users count mismatch: JSON=${jsonData.adminUsers.length}, MongoDB=${mongoAdmins.length}`);
  }
  const jAdmin = jsonData.adminUsers[0];
  const mAdmin = mongoAdmins.find(a => a.email.toLowerCase() === jAdmin.email.toLowerCase());
  if (!mAdmin) {
    errors.push(`Admin user not found in MongoDB: ${jAdmin.email}`);
  } else {
    if (mAdmin.email !== jAdmin.email || mAdmin.role !== jAdmin.role) {
      errors.push('Admin user email or role mismatch');
    }
    if (!mAdmin.passwordHash || mAdmin.passwordHash !== jAdmin.passwordHash) {
      errors.push('Admin password hash mismatch or missing');
    } else {
      console.log(`✔ Admin user verified: email="${mAdmin.email}", role="${mAdmin.role}", hashPresent=true (length: ${mAdmin.passwordHash.length})`);
    }
  }

  // 4. Services (1) & Pricing Packages (1)
  const servCol = db.collection('services');
  const mongoServices = await servCol.find({}).toArray();
  console.log(`[Services] JSON Count: ${jsonData.services.length} | MongoDB Count: ${mongoServices.length}`);
  if (jsonData.services.length !== mongoServices.length) errors.push('Services count mismatch');

  const pricingCol = db.collection('pricing_packages');
  const mongoPricing = await pricingCol.find({}).toArray();
  console.log(`[Pricing Packages] JSON Count: ${jsonData.pricingPackages.length} | MongoDB Count: ${mongoPricing.length}`);
  if (jsonData.pricingPackages.length !== mongoPricing.length) errors.push('Pricing packages count mismatch');

  // 5. Navigation Items (6) & FAQ Items (2)
  const navCol = db.collection('navigation_items');
  const mongoNav = await navCol.find({}).toArray();
  console.log(`[Navigation Items] JSON Count: ${jsonData.navigationItems.length} | MongoDB Count: ${mongoNav.length}`);
  if (jsonData.navigationItems.length !== mongoNav.length) errors.push('Navigation items count mismatch');

  const faqCol = db.collection('faq_items');
  const mongoFaq = await faqCol.find({}).toArray();
  console.log(`[FAQ Items] JSON Count: ${jsonData.faqItems.length} | MongoDB Count: ${mongoFaq.length}`);
  if (jsonData.faqItems.length !== mongoFaq.length) errors.push('FAQ items count mismatch');

  // 6. CMS Content (2 documents: homepage_content & seo_config)
  const cmsCol = db.collection('cms_content');
  const hpDoc = await cmsCol.findOne({ _id: 'homepage_content' });
  const seoDoc = await cmsCol.findOne({ _id: 'seo_config' });
  console.log(`[CMS Content] homepage_content: ${hpDoc ? 'YES' : 'NO'} | seo_config: ${seoDoc ? 'YES' : 'NO'}`);
  if (!hpDoc || !seoDoc) {
    errors.push('CMS content missing homepage_content or seo_config singleton document');
  }

  // 7. Verify Phase 2 & Phase 3 records remain unchanged
  const pCount = await db.collection('foodstuff_products').countDocuments();
  const cpCount = await db.collection('foodstuff_container_prices').countDocuments();
  const mpCount = await db.collection('foodstuff_market_prices').countDocuments();
  const sCount = await db.collection('foodstuff_schedule').countDocuments();
  const lCount = await db.collection('leads').countDocuments();
  const aCount = await db.collection('activity_logs').countDocuments();

  console.log(`\n--- Cross-Phase Parity Check ---`);
  console.log(`Phase 2 Products: ${pCount}/22 | Container Rates: ${cpCount}/22 | Market Rates: ${mpCount}/22 | Schedule: ${sCount}/1`);
  console.log(`Phase 3 Leads: ${lCount}/2 | Activity Logs: ${aCount}/14`);

  if (pCount !== 22 || cpCount !== 22 || mpCount !== 22 || sCount !== 1) {
    errors.push('Phase 2 parity check failed');
  }
  if (lCount !== 2 || aCount !== 14) {
    errors.push('Phase 3 parity check failed');
  }

  // 8. Total MongoDB document count calculation
  const totalCount = pCount + cpCount + mpCount + sCount + lCount + aCount + mongoAdmins.length + mongoProjs.length + mongoServices.length + mongoPricing.length + mongoNav.length + mongoFaq.length + (hpDoc ? 1 : 0) + (seoDoc ? 1 : 0);
  console.log(`\n====================================================`);
  console.log(`TOTAL DOCUMENTS IN MONGODB ATLAS: ${totalCount} (Expected: 147)`);
  console.log(`====================================================`);

  if (totalCount !== 147) {
    errors.push(`Total document count mismatch: Found ${totalCount}, Expected 147`);
  }

  if (errors.length === 0) {
    console.log('✔ ALL PHASE 4 DEEP VALIDATION CHECKS PASSED WITH 100% PERFECTION!');
  } else {
    console.error('❌ VALIDATION ERRORS FOUND:', errors);
  }

  await client.close();
}

verifyPhase4Deep().catch(err => {
  console.error('Verification script failed:', err);
  process.exit(1);
});
