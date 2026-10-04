/**
 * STEP 3B — Controlled Test Script for Leads & Activity Logs Migration to MongoDB
 */
const dns = require('node:dns');
try {
  if (typeof dns.setServers === 'function') {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  }
} catch {}

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

async function runStep3BTest() {
  console.log('====================================================');
  console.log('STEP 3B — LEADS & ACTIVITY LOGS MONGODB TEST');
  console.log('====================================================\n');

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'barakah_al_rizq';

  if (!uri) {
    console.error('ERROR: MONGODB_URI not found in .env.local');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  const leadsCol = db.collection('leads');
  const activityCol = db.collection('activity_logs');

  // 1. Initial baseline snapshot
  const initialLeads = await leadsCol.find({}).toArray();
  const initialActivity = await activityCol.find({}).toArray();

  console.log(`[Baseline] Initial Leads count: ${initialLeads.length}`);
  console.log(`[Baseline] Initial Activity Logs count: ${initialActivity.length}`);

  if (initialLeads.length !== 2) {
    console.warn(`WARNING: Expected 2 baseline leads, found ${initialLeads.length}`);
  }
  if (initialActivity.length !== 14) {
    console.warn(`WARNING: Expected 14 baseline activity logs, found ${initialActivity.length}`);
  }

  // 2. Test Lead Creation (Simulate /api/contact or createLead)
  console.log('\n[Test 1] Creating a controlled temporary lead...');
  const testLeadId = 'lead-test-' + Date.now();
  const nowISO = new Date().toISOString();
  const testLead = {
    _id: testLeadId,
    id: testLeadId,
    name: 'STEP3B Test Lead',
    email: 'test.step3b@barakah.ae',
    phone: '+971501234567',
    company: 'Test UAE Trading',
    service: 'Wholesale Fruits',
    budget: '50000 AED',
    message: 'Testing MongoDB leads write flow',
    source: 'website',
    status: 'NEW',
    notes: 'Received via website contact form.',
    createdAt: nowISO,
    updatedAt: nowISO,
  };

  await leadsCol.insertOne(testLead);
  const act1Id = 'act-test-1-' + Date.now();
  await activityCol.insertOne({
    _id: act1Id,
    id: act1Id,
    user: 'system',
    action: 'LEAD_CREATED',
    entity: testLeadId,
    timestamp: nowISO,
  });

  // Verify creation
  const createdLeadInMongo = await leadsCol.findOne({ _id: testLeadId });
  if (!createdLeadInMongo || createdLeadInMongo.email !== 'test.step3b@barakah.ae') {
    throw new Error('FAILED: Test lead was not found in MongoDB after insert');
  }
  console.log('✔ Test lead successfully created and verified in MongoDB.');

  const createdActInMongo = await activityCol.findOne({ entity: testLeadId, action: 'LEAD_CREATED' });
  if (!createdActInMongo) {
    throw new Error('FAILED: LEAD_CREATED activity log not found in MongoDB');
  }
  console.log('✔ LEAD_CREATED activity log verified in MongoDB.');

  // 3. Test Lead Update (Simulate PUT /api/admin/leads)
  console.log('\n[Test 2] Updating test lead status and notes...');
  const updateTime = new Date().toISOString();
  await leadsCol.updateOne(
    { _id: testLeadId },
    { $set: { status: 'IN_DISCUSSION', notes: 'Discussed container pricing', updatedAt: updateTime } }
  );
  const act2Id = 'act-test-2-' + Date.now();
  await activityCol.insertOne({
    _id: act2Id,
    id: act2Id,
    user: 'admin@webstudioae.com',
    action: 'LEAD_UPDATED',
    entity: testLeadId,
    timestamp: updateTime,
  });

  const updatedLeadInMongo = await leadsCol.findOne({ _id: testLeadId });
  if (!updatedLeadInMongo || updatedLeadInMongo.status !== 'IN_DISCUSSION') {
    throw new Error('FAILED: Lead update was not persisted in MongoDB');
  }
  console.log('✔ Lead update successfully verified in MongoDB.');

  // 4. Test Lead Deletion (Simulate DELETE /api/admin/leads)
  console.log('\n[Test 3] Deleting test lead...');
  const deleteTime = new Date().toISOString();
  await leadsCol.deleteOne({ _id: testLeadId });
  const act3Id = 'act-test-3-' + Date.now();
  await activityCol.insertOne({
    _id: act3Id,
    id: act3Id,
    user: 'admin@webstudioae.com',
    action: 'LEAD_DELETED',
    entity: testLeadId,
    timestamp: deleteTime,
  });

  const deletedLeadInMongo = await leadsCol.findOne({ _id: testLeadId });
  if (deletedLeadInMongo) {
    throw new Error('FAILED: Lead still exists after deletion');
  }
  console.log('✔ Lead deletion successfully verified in MongoDB.');

  // 5. Clean up test activity logs to restore 100% original state
  console.log('\n[Cleanup] Cleaning up test activity records...');
  await activityCol.deleteMany({ entity: testLeadId });

  // 6. Final verification of restoration
  const finalLeads = await leadsCol.find({}).toArray();
  const finalActivity = await activityCol.find({}).toArray();

  console.log(`[Post-Test] Final Leads count: ${finalLeads.length} (Expected: ${initialLeads.length})`);
  console.log(`[Post-Test] Final Activity count: ${finalActivity.length} (Expected: ${initialActivity.length})`);

  if (finalLeads.length !== initialLeads.length) {
    throw new Error(`Lead count mismatch: expected ${initialLeads.length}, got ${finalLeads.length}`);
  }
  if (finalActivity.length !== initialActivity.length) {
    throw new Error(`Activity count mismatch: expected ${initialActivity.length}, got ${finalActivity.length}`);
  }

  // Verify all original lead IDs match exactly
  const initialLeadIds = new Set(initialLeads.map(l => l.id));
  for (const l of finalLeads) {
    if (!initialLeadIds.has(l.id)) {
      throw new Error(`Unknown lead ID found after test: ${l.id}`);
    }
  }

  console.log('\n====================================================');
  console.log('✔ ALL STEP 3B TESTS PASSED — DATABASE FULLY RESTORED');
  console.log('====================================================\n');

  await client.close();
}

runStep3BTest().catch((err) => {
  console.error('\n❌ STEP 3B TEST FAILED:', err);
  process.exit(1);
});
