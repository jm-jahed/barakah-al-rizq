import dns from "node:dns";
import { MongoClient, Db, Collection } from "mongodb";
import { Client, ManagedInvoice, Payment } from "@/types/dashboard";
import {
  AdminUser,
  Project,
  Service,
  PricingPackage,
  Testimonial,
  BlogPost,
  Lead,
  NewsletterSubscriber,
  SiteSetting,
  HomepageContent,
  NavigationItem,
  FAQItem,
  MediaItem,
  SEOConfig,
  ActivityLog,
  AnalyticsEvent,
  FoodstuffProduct,
  FoodstuffContainerPrice,
  FoodstuffMarketPrice,
  FoodstuffPriceHistory,
  FoodstuffPriceSource,
  FoodstuffUpdateSchedule,
  WholesaleOrder,
  WholesaleOrderItem,
  WholesaleOrderStatus,
} from "@/lib/db/types";
import { getDynamicUAESession, calculatePricePerKg } from "@/lib/foodstuff/utils";

try {
  if (typeof dns.setServers === "function") {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  }
} catch {
  // Ignore in environments where setting DNS servers is restricted
}

import fs from "node:fs";
import path from "node:path";

function cleanEnvString(val?: string): string {
  if (!val) return "";
  let s = val.trim().replace(/^[\uFEFF\u200B\u200C\u200D\s]+/, "").trim();
  s = s.replace(/^MONGODB_URI\s*=\s*/i, "").trim();
  while (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'")) ||
    (s.startsWith('\\"') && s.endsWith('\\"')) ||
    (s.startsWith("\\'") && s.endsWith("\\'"))
  ) {
    if (s.startsWith('\\"') || s.startsWith("\\'")) {
      s = s.slice(2, -2).trim();
    } else {
      s = s.slice(1, -1).trim();
    }
  }
  s = s.replace(/^['"]+/, "").replace(/['"]+$/, "").trim();
  return s;
}

function resolveMongoUri(inputUri: string): string {
  if (!inputUri) return "";
  let uri = cleanEnvString(inputUri);
  const srvIdx = uri.indexOf("mongodb+srv://");
  const stdIdx = uri.indexOf("mongodb://");
  if (srvIdx >= 0) {
    uri = uri.slice(srvIdx).trim();
  } else if (stdIdx >= 0) {
    uri = uri.slice(stdIdx).trim();
  }
  uri = uri.replace(/\/["']([^"'/?]+)["'](\?|$)/, "/$1$2");
  uri = uri.replace(/[;'"]+$/, "").trim();
  return uri;
}

function getActiveUri(): string {
  let u = cleanEnvString(process.env.MONGODB_URI);
  try {
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const match = content.match(/MONGODB_URI=["']?([^"'\r\n]+)["']?/);
      if (match && match[1]) {
        u = cleanEnvString(match[1]);
      }
    }
  } catch {}
  return resolveMongoUri(u);
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const dbName = cleanEnvString(process.env.MONGODB_DB) || "barakah_al_rizq";

let client: MongoClient;
let clientPromise: Promise<MongoClient> | null = null;

export function isMongoConfigured(): boolean {
  const uri = getActiveUri();
  return Boolean(uri && uri.trim().length > 0);
}

const mongoOptions = {
  serverSelectionTimeoutMS: 2500,
  connectTimeoutMS: 2500,
};

export async function getMongoClient(): Promise<MongoClient> {
  const activeUri = getActiveUri();
  if (!activeUri) {
    throw new Error("MONGODB_URI is not configured in environment variables.");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(activeUri, mongoOptions);
      global._mongoClientPromise = client.connect();
    }
    try {
      const c = await global._mongoClientPromise;
      return c;
    } catch (err) {
      global._mongoClientPromise = undefined;
      throw err;
    }
  } else {
    if (!clientPromise) {
      client = new MongoClient(activeUri, mongoOptions);
      clientPromise = client.connect();
    }
    try {
      return await clientPromise;
    } catch (err) {
      clientPromise = null;
      throw err;
    }
  }
}

export async function getDb(): Promise<Db> {
  const c = await getMongoClient();
  return c.db(dbName);
}

// ==========================================
// FOODSTUFF WHOLESALE LIVE PRICING COLLECTIONS
// ==========================================

export async function getFoodstuffProductsCollection(): Promise<Collection<FoodstuffProduct & { _id: string }>> {
  const db = await getDb();
  return db.collection<FoodstuffProduct & { _id: string }>("foodstuff_products");
}

export async function getFoodstuffContainerPricesCollection(): Promise<Collection<FoodstuffContainerPrice & { _id: string }>> {
  const db = await getDb();
  return db.collection<FoodstuffContainerPrice & { _id: string }>("foodstuff_container_prices");
}

export async function getFoodstuffMarketPricesCollection(): Promise<Collection<FoodstuffMarketPrice & { _id: string }>> {
  const db = await getDb();
  return db.collection<FoodstuffMarketPrice & { _id: string }>("foodstuff_market_prices");
}

export async function getFoodstuffPriceHistoryCollection(): Promise<Collection<FoodstuffPriceHistory & { _id: string }>> {
  const db = await getDb();
  return db.collection<FoodstuffPriceHistory & { _id: string }>("foodstuff_price_history");
}

export async function getFoodstuffScheduleCollection(): Promise<Collection<FoodstuffUpdateSchedule & { _id: string }>> {
  const db = await getDb();
  return db.collection<FoodstuffUpdateSchedule & { _id: string }>("foodstuff_schedule");
}

export async function getFoodstuffProducts(): Promise<FoodstuffProduct[]> {
  try {
    const col = await getFoodstuffProductsCollection();
    const items = await col.find({}).toArray();
    if (items && items.length > 0) return items;
  } catch (err) {
    console.warn('MongoDB getFoodstuffProducts fallback:', (err as Error).message);
  }
  try {
    const { readDB } = await import('@/lib/db/index');
    return readDB().foodstuffProducts || [];
  } catch {
    return [];
  }
}

export async function getFoodstuffContainerPrices(): Promise<FoodstuffContainerPrice[]> {
  try {
    const col = await getFoodstuffContainerPricesCollection();
    const items = await col.find({}).toArray();
    if (items && items.length > 0) return items;
  } catch (err) {
    console.warn('MongoDB getFoodstuffContainerPrices fallback:', (err as Error).message);
  }
  try {
    const { readDB } = await import('@/lib/db/index');
    return readDB().foodstuffContainerPrices || [];
  } catch {
    return [];
  }
}

export async function getFoodstuffMarketPrices(): Promise<FoodstuffMarketPrice[]> {
  try {
    const col = await getFoodstuffMarketPricesCollection();
    const items = await col.find({}).toArray();
    if (items && items.length > 0) return items;
  } catch (err) {
    console.warn('MongoDB getFoodstuffMarketPrices fallback:', (err as Error).message);
  }
  try {
    const { readDB } = await import('@/lib/db/index');
    return readDB().foodstuffMarketPrices || [];
  } catch {
    return [];
  }
}

export async function getFoodstuffSchedule(): Promise<FoodstuffUpdateSchedule> {
  try {
    const col = await getFoodstuffScheduleCollection();
    const doc = await col.findOne({ _id: "schedule_config" });
    if (doc) {
      const { _id, ...rest } = doc;
      return rest as FoodstuffUpdateSchedule;
    }
  } catch (err) {
    console.warn('MongoDB getFoodstuffSchedule fallback:', (err as Error).message);
  }
  try {
    const { readDB } = await import('@/lib/db/index');
    return readDB().foodstuffUpdateSchedule || {
      morningTime: '06:30',
      middayTime: '12:30',
      eveningTime: '18:00',
      timezone: 'Asia/Dubai',
      staleThresholdHours: 8,
      lastSyncAt: null,
      autoFeedEnabled: false,
    };
  } catch {
    return {
      morningTime: '06:30',
      middayTime: '12:30',
      eveningTime: '18:00',
      timezone: 'Asia/Dubai',
      staleThresholdHours: 8,
      lastSyncAt: null,
      autoFeedEnabled: false,
    };
  }
}

export async function getFoodstuffPriceHistory(limit: number = 100): Promise<FoodstuffPriceHistory[]> {
  try {
    const col = await getFoodstuffPriceHistoryCollection();
    return await col.find({}).sort({ timestamp: -1 }).limit(limit).toArray();
  } catch (err) {
    console.warn('MongoDB getFoodstuffPriceHistory fallback:', (err as Error).message);
  }
  try {
    const { readDB } = await import('@/lib/db/index');
    return (readDB().foodstuffPriceHistory || []).slice(-limit).reverse();
  } catch {
    return [];
  }
}

export async function logActivityToMongo(user: string, action: string, entity: string): Promise<void> {
  try {
    const col = await getActivityLogsCollection();
    const id = 'act-' + Date.now();
    await col.insertOne({
      _id: id,
      id,
      user,
      action,
      entity,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    console.error('Failed to log activity to MongoDB:', err);
  }
}

export async function updateFoodstuffContainerPrice(
  id: string,
  updates: Partial<FoodstuffContainerPrice>,
  updatedBy: string,
  source: FoodstuffPriceSource = 'ADMIN_VERIFIED_RATE_SHEET'
): Promise<FoodstuffContainerPrice | null> {
  const col = await getFoodstuffContainerPricesCollection();
  const existing = await col.findOne({ $or: [{ _id: id }, { id }] });
  if (!existing) return null;

  const prodCol = await getFoodstuffProductsCollection();
  const prod = await prodCol.findOne({ $or: [{ _id: existing.productId }, { id: existing.productId }] });

  const sched = await getFoodstuffSchedule();
  const nowISO = new Date().toISOString();
  const dynamicSession = getDynamicUAESession(sched).session;

  const oldPrice = existing.priceAED;
  const newPrice = updates.priceAED !== undefined ? updates.priceAED : oldPrice;
  const netWeight = updates.netWeightKg !== undefined ? updates.netWeightKg : existing.netWeightKg;
  const calcKg = calculatePricePerKg(newPrice, netWeight);

  const oldStatus = existing.businessStatus;
  const newStatus = updates.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : existing.businessStatus);

  const updatedRecord: FoodstuffContainerPrice & { _id: string } = {
    ...existing,
    ...updates,
    _id: existing._id,
    id: existing.id,
    productId: existing.productId,
    priceAED: newPrice,
    netWeightKg: netWeight,
    calculatedPricePerKg: calcKg,
    businessStatus: newStatus,
    lastUpdated: nowISO,
    updateSession: updates.updateSession || dynamicSession,
    updateSource: source,
    updatedBy,
  };

  await col.replaceOne({ _id: existing._id }, updatedRecord, { upsert: true });

  const diff = oldPrice !== null && newPrice !== null ? parseFloat((newPrice - oldPrice).toFixed(2)) : null;
  const pct = oldPrice !== null && oldPrice > 0 && newPrice !== null 
    ? parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1)) 
    : null;

  const histCol = await getFoodstuffPriceHistoryCollection();
  const histId = `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
  await histCol.insertOne({
    _id: histId,
    id: histId,
    priceType: 'CONTAINER',
    priceRecordId: existing.id,
    productId: existing.productId,
    productName: prod?.name || existing.productId,
    packagingDetails: updatedRecord.packagingDetails,
    oldPriceAED: oldPrice,
    newPriceAED: newPrice,
    differenceAED: diff,
    changePercent: pct,
    oldStatus,
    newStatus,
    session: dynamicSession,
    source,
    updatedBy,
    timestamp: nowISO,
    notes: updates.quotationNotes,
  });

  const schedCol = await getFoodstuffScheduleCollection();
  await schedCol.updateOne({ _id: "schedule_config" }, { $set: { lastSyncAt: nowISO } });

  await logActivityToMongo(updatedBy, 'CONTAINER_PRICE_UPDATED', `${existing.productId}: ${oldPrice} -> ${newPrice}`);
  return updatedRecord;
}

export async function updateFoodstuffMarketPrice(
  id: string,
  updates: Partial<FoodstuffMarketPrice>,
  updatedBy: string,
  source: FoodstuffPriceSource = 'AL_AWEER_MARKET_UPDATE'
): Promise<FoodstuffMarketPrice | null> {
  const col = await getFoodstuffMarketPricesCollection();
  const existing = await col.findOne({ $or: [{ _id: id }, { id }] });
  if (!existing) return null;

  const prodCol = await getFoodstuffProductsCollection();
  const prod = await prodCol.findOne({ $or: [{ _id: existing.productId }, { id: existing.productId }] });

  const sched = await getFoodstuffSchedule();
  const nowISO = new Date().toISOString();
  const dynamicSession = getDynamicUAESession(sched).session;

  const oldPrice = existing.priceAED;
  const newPrice = updates.priceAED !== undefined ? updates.priceAED : oldPrice;
  const netWeight = updates.netWeightKg !== undefined ? updates.netWeightKg : existing.netWeightKg;
  const calcKg = calculatePricePerKg(newPrice, netWeight);

  let trend: 'UP' | 'DOWN' | 'STABLE' | null = existing.trend;
  let pct: number | null = null;
  let diff: number | null = null;

  if (oldPrice !== null && newPrice !== null) {
    diff = parseFloat((newPrice - oldPrice).toFixed(2));
    if (oldPrice > 0) {
      pct = parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1));
    }
    trend = newPrice > oldPrice ? 'UP' : newPrice < oldPrice ? 'DOWN' : 'STABLE';
  }

  const oldStatus = existing.businessStatus;
  const newStatus = updates.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : existing.businessStatus);

  const updatedRecord: FoodstuffMarketPrice & { _id: string } = {
    ...existing,
    ...updates,
    _id: existing._id,
    id: existing.id,
    productId: existing.productId,
    priceAED: newPrice,
    previousPriceAED: oldPrice,
    changePercent: pct,
    trend,
    netWeightKg: netWeight,
    calculatedPricePerKg: calcKg,
    businessStatus: newStatus,
    lastUpdated: nowISO,
    marketSession: updates.marketSession || dynamicSession,
    updateSource: source,
    updatedBy,
  };

  await col.replaceOne({ _id: existing._id }, updatedRecord, { upsert: true });

  const histCol = await getFoodstuffPriceHistoryCollection();
  const histId = `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
  await histCol.insertOne({
    _id: histId,
    id: histId,
    priceType: 'DUBAI_MARKET',
    priceRecordId: existing.id,
    productId: existing.productId,
    productName: prod?.name || existing.productId,
    packagingDetails: updatedRecord.packagingDetails,
    oldPriceAED: oldPrice,
    newPriceAED: newPrice,
    differenceAED: diff,
    changePercent: pct,
    oldStatus,
    newStatus,
    session: dynamicSession,
    source,
    updatedBy,
    timestamp: nowISO,
  });

  const schedCol = await getFoodstuffScheduleCollection();
  await schedCol.updateOne({ _id: "schedule_config" }, { $set: { lastSyncAt: nowISO } });

  await logActivityToMongo(updatedBy, 'MARKET_PRICE_UPDATED', `${existing.productId}: ${oldPrice} -> ${newPrice}`);
  return updatedRecord;
}

export async function bulkUpdateFoodstuffPrices(
  type: 'CONTAINER' | 'DUBAI_MARKET',
  rows: Array<{
    productId: string;
    priceAED: number | null;
    packagingUnit?: string;
    packagingDetails?: string;
    netWeightKg?: number | null;
    businessStatus?: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
    moq?: string;
    containerAvailability?: string;
    minPurchaseQty?: string;
    quotationNotes?: string;
  }>,
  updatedBy: string,
  source: FoodstuffPriceSource
): Promise<{ updatedCount: number; timestamp: string }> {
  const sched = await getFoodstuffSchedule();
  const nowISO = new Date().toISOString();
  const dynamicSession = getDynamicUAESession(sched).session;

  const prodCol = await getFoodstuffProductsCollection();
  const allProds = await prodCol.find({}).toArray();
  const prodMap = new Map(allProds.map(p => [p._id, p]));

  const histCol = await getFoodstuffPriceHistoryCollection();
  const historyInserts: Array<FoodstuffPriceHistory & { _id: string }> = [];
  let updatedCount = 0;

  if (type === 'CONTAINER') {
    const cpCol = await getFoodstuffContainerPricesCollection();
    const allCps = await cpCol.find({}).toArray();
    const cpMap = new Map(allCps.map(c => [c.productId, c]));

    for (const row of rows) {
      const existing = cpMap.get(row.productId);
      if (!existing) continue;

      const prod = prodMap.get(existing.productId);
      const oldPrice = existing.priceAED;
      const newPrice = row.priceAED;
      const netWeight = row.netWeightKg !== undefined ? row.netWeightKg : existing.netWeightKg;
      const calcKg = calculatePricePerKg(newPrice, netWeight);
      const oldStatus = existing.businessStatus;
      const newStatus = row.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : 'AVAILABLE');

      const updatedRecord: FoodstuffContainerPrice & { _id: string } = {
        ...existing,
        priceAED: newPrice,
        packagingUnit: row.packagingUnit || existing.packagingUnit,
        packagingDetails: row.packagingDetails || existing.packagingDetails,
        netWeightKg: netWeight,
        calculatedPricePerKg: calcKg,
        moq: row.moq || existing.moq,
        containerAvailability: row.containerAvailability || existing.containerAvailability,
        businessStatus: newStatus,
        quotationNotes: row.quotationNotes || existing.quotationNotes,
        lastUpdated: nowISO,
        updateSession: dynamicSession,
        updateSource: source,
        updatedBy,
      };

      await cpCol.replaceOne({ _id: existing._id }, updatedRecord, { upsert: true });

      const diff = oldPrice !== null && newPrice !== null ? parseFloat((newPrice - oldPrice).toFixed(2)) : null;
      const pct = oldPrice !== null && oldPrice > 0 && newPrice !== null 
        ? parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1)) 
        : null;

      const histId = `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
      historyInserts.push({
        _id: histId,
        id: histId,
        priceType: 'CONTAINER',
        priceRecordId: existing.id,
        productId: existing.productId,
        productName: prod?.name || existing.productId,
        packagingDetails: row.packagingDetails || existing.packagingDetails,
        oldPriceAED: oldPrice,
        newPriceAED: newPrice,
        differenceAED: diff,
        changePercent: pct,
        oldStatus,
        newStatus,
        session: dynamicSession,
        source,
        updatedBy,
        timestamp: nowISO,
      });

      updatedCount++;
    }
  } else {
    const mpCol = await getFoodstuffMarketPricesCollection();
    const allMps = await mpCol.find({}).toArray();
    const mpMap = new Map(allMps.map(m => [m.productId, m]));

    for (const row of rows) {
      const existing = mpMap.get(row.productId);
      if (!existing) continue;

      const prod = prodMap.get(existing.productId);
      const oldPrice = existing.priceAED;
      const newPrice = row.priceAED;
      const netWeight = row.netWeightKg !== undefined ? row.netWeightKg : existing.netWeightKg;
      const calcKg = calculatePricePerKg(newPrice, netWeight);
      const oldStatus = existing.businessStatus;
      const newStatus = row.businessStatus || (newPrice === null ? 'PRICE_ON_REQUEST' : 'AVAILABLE');

      let trend: 'UP' | 'DOWN' | 'STABLE' | null = existing.trend;
      let pct: number | null = null;
      let diff: number | null = null;

      if (oldPrice !== null && newPrice !== null) {
        diff = parseFloat((newPrice - oldPrice).toFixed(2));
        if (oldPrice > 0) {
          pct = parseFloat((((newPrice - oldPrice) / oldPrice) * 100).toFixed(1));
        }
        trend = newPrice > oldPrice ? 'UP' : newPrice < oldPrice ? 'DOWN' : 'STABLE';
      }

      const updatedRecord: FoodstuffMarketPrice & { _id: string } = {
        ...existing,
        priceAED: newPrice,
        previousPriceAED: oldPrice,
        changePercent: pct,
        trend,
        packagingUnit: row.packagingUnit || existing.packagingUnit,
        packagingDetails: row.packagingDetails || existing.packagingDetails,
        netWeightKg: netWeight,
        calculatedPricePerKg: calcKg,
        minPurchaseQty: row.minPurchaseQty || existing.minPurchaseQty,
        businessStatus: newStatus,
        lastUpdated: nowISO,
        marketSession: dynamicSession,
        updateSource: source,
        updatedBy,
      };

      await mpCol.replaceOne({ _id: existing._id }, updatedRecord, { upsert: true });

      const histId = `fph-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
      historyInserts.push({
        _id: histId,
        id: histId,
        priceType: 'DUBAI_MARKET',
        priceRecordId: existing.id,
        productId: existing.productId,
        productName: prod?.name || existing.productId,
        packagingDetails: row.packagingDetails || existing.packagingDetails,
        oldPriceAED: oldPrice,
        newPriceAED: newPrice,
        differenceAED: diff,
        changePercent: pct,
        oldStatus,
        newStatus,
        session: dynamicSession,
        source,
        updatedBy,
        timestamp: nowISO,
      });

      updatedCount++;
    }
  }

  if (historyInserts.length > 0) {
    await histCol.insertMany(historyInserts as any);
  }

  const schedCol = await getFoodstuffScheduleCollection();
  await schedCol.updateOne({ _id: "schedule_config" }, { $set: { lastSyncAt: nowISO } });

  await logActivityToMongo(updatedBy, 'FOODSTUFF_BULK_UPDATE', `Updated ${updatedCount} ${type} price records via ${source}`);
  return { updatedCount, timestamp: nowISO };
}

export async function updateFoodstuffSchedule(
  updates: Partial<FoodstuffUpdateSchedule>,
  updatedBy: string = 'admin'
): Promise<FoodstuffUpdateSchedule> {
  const col = await getFoodstuffScheduleCollection();
  const current = await getFoodstuffSchedule();
  const updated: FoodstuffUpdateSchedule & { _id: string } = {
    ...current,
    ...updates,
    _id: "schedule_config",
  };

  await col.replaceOne({ _id: "schedule_config" }, updated, { upsert: true });
  await logActivityToMongo(updatedBy, 'FOODSTUFF_SCHEDULE_UPDATED', 'foodstuffUpdateSchedule');
  return updated;
}

// ==========================================
// COMMERCIAL & INQUIRIES COLLECTIONS
// ==========================================

export async function getLeadsCollection(): Promise<Collection<Lead & { _id: string }>> {
  const db = await getDb();
  return db.collection<Lead & { _id: string }>("leads");
}

export async function getAdminUsersCollection(): Promise<Collection<AdminUser & { _id: string }>> {
  const db = await getDb();
  return db.collection<AdminUser & { _id: string }>("admin_users");
}

export async function getActivityLogsCollection(): Promise<Collection<ActivityLog & { _id: string }>> {
  const db = await getDb();
  return db.collection<ActivityLog & { _id: string }>("activity_logs");
}

export async function getLeads(): Promise<Lead[]> {
  try {
    const col = await getLeadsCollection();
    return await col.find({}).sort({ createdAt: -1 }).toArray();
  } catch (err) {
    console.warn("MongoDB getLeads fallback:", (err as Error).message);
    return [];
  }
}

export async function createLead(
  lead: Omit<Lead, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: Lead['status'] }
): Promise<Lead> {
  const id = 'lead-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4);
  const nowISO = new Date().toISOString();
  const newLead: Lead & { _id: string } = {
    ...lead,
    _id: id,
    id,
    status: lead.status || 'NEW',
    createdAt: nowISO,
    updatedAt: nowISO,
  };
  try {
    const col = await getLeadsCollection();
    await col.insertOne(newLead as any);
    await logActivityToMongo('system', 'LEAD_CREATED', newLead.id);
  } catch (err) {
    console.warn("MongoDB createLead fallback:", (err as Error).message);
  }
  return newLead;
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<Lead | null> {
  const col = await getLeadsCollection();
  const existing = await col.findOne({ $or: [{ _id: id }, { id }] });
  if (!existing) return null;

  const nowISO = new Date().toISOString();
  const updatedRecord: Lead & { _id: string } = {
    ...existing,
    ...updates,
    _id: existing._id,
    id: existing.id,
    updatedAt: nowISO,
  };

  await col.replaceOne({ _id: existing._id }, updatedRecord, { upsert: true });
  await logActivityToMongo('admin@barakahalrizquae.com', 'LEAD_UPDATED', id);
  return updatedRecord;
}

export async function deleteLead(id: string): Promise<boolean> {
  const col = await getLeadsCollection();
  const res = await col.deleteOne({ $or: [{ _id: id }, { id }] });
  if (res.deletedCount > 0) {
    await logActivityToMongo('admin@barakahalrizquae.com', 'LEAD_DELETED', id);
    return true;
  }
  return false;
}

export async function getActivityLogs(limit: number = 100): Promise<ActivityLog[]> {
  const col = await getActivityLogsCollection();
  return col.find({}).sort({ timestamp: -1 }).limit(limit).toArray();
}

export async function getAdminUserByEmail(email: string): Promise<AdminUser | null> {
  const col = await getAdminUsersCollection();
  const lower = email.toLowerCase().trim();
  const user = await col.findOne({ email: lower });
  if (!user) {
    return col.findOne({ email: { $regex: new RegExp(`^${lower}$`, 'i') } });
  }
  return user;
}

export async function updateAdminUserPassword(email: string, passwordHash: string): Promise<boolean> {
  const col = await getAdminUsersCollection();
  const lower = email.toLowerCase().trim();
  const res = await col.updateOne(
    { email: { $regex: new RegExp(`^${lower}$`, 'i') } },
    { $set: { passwordHash, updatedAt: new Date().toISOString() } }
  );
  return res.matchedCount > 0;
}

// ==========================================
// CMS & PLATFORM COLLECTIONS
// ==========================================

export async function getProjectsCollection(): Promise<Collection<Project & { _id: string }>> {
  const db = await getDb();
  return db.collection<Project & { _id: string }>("projects");
}

export async function getServicesCollection(): Promise<Collection<Service & { _id: string }>> {
  const db = await getDb();
  return db.collection<Service & { _id: string }>("services");
}

export async function getPricingPackagesCollection(): Promise<Collection<PricingPackage & { _id: string }>> {
  const db = await getDb();
  return db.collection<PricingPackage & { _id: string }>("pricing_packages");
}

export async function getTestimonialsCollection(): Promise<Collection<Testimonial & { _id: string }>> {
  const db = await getDb();
  return db.collection<Testimonial & { _id: string }>("testimonials");
}

export async function getBlogPostsCollection(): Promise<Collection<BlogPost & { _id: string }>> {
  const db = await getDb();
  return db.collection<BlogPost & { _id: string }>("blog_posts");
}

export async function getNavigationItemsCollection(): Promise<Collection<NavigationItem & { _id: string }>> {
  const db = await getDb();
  return db.collection<NavigationItem & { _id: string }>("navigation_items");
}

export async function getFaqItemsCollection(): Promise<Collection<FAQItem & { _id: string }>> {
  const db = await getDb();
  return db.collection<FAQItem & { _id: string }>("faq_items");
}

export async function getCmsContentCollection(): Promise<Collection<{ _id: string; [key: string]: any }>> {
  const db = await getDb();
  return db.collection<{ _id: string; [key: string]: any }>("cms_content");
}

export async function getSiteSettingsCollection(): Promise<Collection<SiteSetting & { _id: string }>> {
  const db = await getDb();
  return db.collection<SiteSetting & { _id: string }>("site_settings");
}

// ==========================================
// INVOICING / ACCOUNTING COLLECTIONS
// ==========================================

export async function getInvoicesCollection(): Promise<Collection<ManagedInvoice & { _id: string }>> {
  const db = await getDb();
  return db.collection<ManagedInvoice & { _id: string }>("invoices");
}

export async function getClientsCollection(): Promise<Collection<Client & { _id: string }>> {
  const db = await getDb();
  return db.collection<Client & { _id: string }>("clients");
}

export async function getPaymentsCollection(): Promise<Collection<Payment & { _id: string }>> {
  const db = await getDb();
  return db.collection<Payment & { _id: string }>("payments");
}

export async function getSettingsCollection(): Promise<Collection<any>> {
  const db = await getDb();
  return db.collection("settings");
}

// ==========================================
// B2B WHOLESALE ORDERS & PICKUP STORE
// ==========================================

export async function getWholesaleOrdersCollection(): Promise<Collection<WholesaleOrder & { _id: string }>> {
  const db = await getDb();
  return db.collection<WholesaleOrder & { _id: string }>("wholesale_orders");
}

function getLocalOrdersFilePath(): string {
  return path.join(process.cwd(), "data", "barakah", "wholesale_orders.json");
}

function readLocalOrders(): WholesaleOrder[] {
  try {
    const fp = getLocalOrdersFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

function writeLocalOrders(orders: WholesaleOrder[]): void {
  try {
    const fp = getLocalOrdersFilePath();
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, JSON.stringify(orders, null, 2), "utf-8");
  } catch {}
}

export async function getWholesaleOrders(): Promise<WholesaleOrder[]> {
  try {
    const col = await getWholesaleOrdersCollection();
    const items = await col.find({}).sort({ createdAt: -1 }).toArray();
    if (items && items.length > 0) return items;
  } catch (err) {
    console.warn("MongoDB getWholesaleOrders fallback:", (err as Error).message);
  }
  return readLocalOrders();
}

export async function createWholesaleOrder(
  orderData: Omit<WholesaleOrder, 'id' | 'createdAt' | 'updatedAt' | 'status'> & { status?: WholesaleOrderStatus }
): Promise<WholesaleOrder> {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  const id = `BARAKAH-ORD-${dateStr}-${rand}`;
  const nowISO = now.toISOString();

  const newOrder: WholesaleOrder = {
    ...orderData,
    id,
    status: orderData.status || 'PENDING',
    createdAt: nowISO,
    updatedAt: nowISO,
  };

  // 1. Always sync to local JSON fallback immediately
  const existing = readLocalOrders();
  existing.unshift(newOrder);
  writeLocalOrders(existing);

  // 2. Try MongoDB persistence
  try {
    const col = await getWholesaleOrdersCollection();
    await col.insertOne({ ...newOrder, _id: id } as any);
  } catch (err) {
    console.warn("MongoDB createWholesaleOrder fallback to JSON:", (err as Error).message);
  }

  // 3. Mirror to Leads pipeline so general sales admin also tracks it (non-blocking)
  try {
    const itemSummary = newOrder.items
      .map(i => `${i.productName} (${i.orderType === 'CONTAINER' ? 'Container Wholesale' : 'Dubai Wholesale'}): ${i.quantityCtn} CTN @ AED ${i.pricePerCtn.toFixed(2)} = AED ${i.lineTotalAED.toFixed(2)}`)
      .join('\n');

    await createLead({
      name: newOrder.customerName,
      email: newOrder.email,
      phone: newOrder.phone,
      company: newOrder.companyName || '',
      service: `Wholesale Order [${newOrder.orderType}] - ${newOrder.totalCtn} CTN`,
      budget: `AED ${newOrder.totalAED.toLocaleString()}`,
      message: `B2B Wholesale Pickup Order #${newOrder.id}\nPickup Date: ${newOrder.pickupDate} (${newOrder.pickupTime || 'Standard'})\nPickup Location: ${newOrder.pickupLocation}\n\nItems:\n${itemSummary}\n\nNotes: ${newOrder.notes || 'None'}`,
      source: 'wholesale_cart',
      status: 'NEW',
      notes: `Order ID: ${newOrder.id} | Status: ${newOrder.status} | Total: AED ${newOrder.totalAED}`,
    });
  } catch (leadErr) {
    // Non-fatal
  }

  try {
    await logActivityToMongo('system', 'WHOLESALE_ORDER_CREATED', id);
  } catch {
    // Non-fatal
  }

  return newOrder;
}

export async function updateWholesaleOrderStatus(
  id: string,
  status: WholesaleOrderStatus,
  notes?: string
): Promise<WholesaleOrder | null> {
  const nowISO = new Date().toISOString();
  let updatedOrder: WholesaleOrder | null = null;

  try {
    const col = await getWholesaleOrdersCollection();
    const existing = await col.findOne({ $or: [{ _id: id }, { id }] });
    if (existing) {
      const updated: WholesaleOrder & { _id: string } = {
        ...existing,
        status,
        ...(notes ? { notes } : {}),
        _id: existing._id,
        id: existing.id,
        updatedAt: nowISO,
      };
      await col.replaceOne({ _id: existing._id }, updated, { upsert: true });
      updatedOrder = updated;
    }
  } catch (err) {
    console.warn("MongoDB updateWholesaleOrderStatus fallback to JSON:", (err as Error).message);
  }

  // Update local JSON fallback
  const orders = readLocalOrders();
  const idx = orders.findIndex(o => o.id === id);
  if (idx !== -1) {
    orders[idx] = {
      ...orders[idx],
      status,
      ...(notes ? { notes } : {}),
      updatedAt: nowISO,
    };
    writeLocalOrders(orders);
    if (!updatedOrder) updatedOrder = orders[idx];
  }

  if (updatedOrder) {
    await logActivityToMongo('admin@barakahalrizquae.com', 'WHOLESALE_ORDER_UPDATED', id);
  }
  return updatedOrder;
}

