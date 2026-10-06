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
  FoodstuffCategoryItem,
  FoodstuffContainerPrice,
  FoodstuffMarketPrice,
  FoodstuffPriceHistory,
  FoodstuffPriceSource,
  FoodstuffUpdateSchedule,
  WholesaleOrder,
  WholesaleOrderItem,
  WholesaleOrderStatus,
  WholesaleCustomer,
  WholesalePayment,
  WholesalePaymentMethod,
  WholesalePaymentType,
  PaymentTransactionStatus,
  OrderPaymentSummary,
  CustomerStatementItem,
  InboxMessage,
  InboxMailbox,
  EmailMailbox,
  InboxMessageStatus,
} from "@/lib/db/types";
import { getDynamicUAESession, calculatePricePerKg, DEFAULT_FOODSTUFF_CATEGORIES } from "@/lib/foodstuff/utils";

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

export async function getFoodstuffCategoriesCollection(): Promise<Collection<FoodstuffCategoryItem & { _id: string }>> {
  const db = await getDb();
  return db.collection<FoodstuffCategoryItem & { _id: string }>("foodstuff_categories");
}

export async function getFoodstuffCategories(): Promise<FoodstuffCategoryItem[]> {
  try {
    const col = await getFoodstuffCategoriesCollection();
    const items = await col.find({}).sort({ displayOrder: 1 }).toArray();
    if (items && items.length > 0) return items;
  } catch (err) {
    console.warn('MongoDB getFoodstuffCategories fallback:', (err as Error).message);
  }
  try {
    const { readDB } = await import('@/lib/db/index');
    const cats = readDB().foodstuffCategories;
    if (cats && cats.length > 0) return cats;
  } catch {}
  return DEFAULT_FOODSTUFF_CATEGORIES;
}

export async function saveFoodstuffCategory(
  category: FoodstuffCategoryItem,
  adminEmail: string = 'admin@barakahalrizquae.com'
): Promise<FoodstuffCategoryItem> {
  const now = new Date().toISOString();
  const safeCat: FoodstuffCategoryItem & { _id: string } = {
    ...category,
    _id: category.id,
    updatedAt: now,
    createdAt: category.createdAt || now,
  };

  try {
    const col = await getFoodstuffCategoriesCollection();
    await col.replaceOne({ _id: category.id }, safeCat, { upsert: true });
  } catch (err) {
    console.warn('MongoDB saveFoodstuffCategory fallback to JSON:', (err as Error).message);
  }

  try {
    const { db } = await import('@/lib/db/index');
    db.foodstuff.saveCategory(safeCat, adminEmail);
  } catch {}

  await logActivityToMongo(adminEmail, 'CATEGORY_SAVED', category.id);
  return safeCat;
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

function syncProductToLocalJson(product: FoodstuffProduct): void {
  try {
    const fp = path.join(process.cwd(), 'data', 'barakah', 'foodstuff-products.json');
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, 'utf-8');
      const list: FoodstuffProduct[] = JSON.parse(raw);
      const idx = list.findIndex(p => p.id === product.id);
      if (idx >= 0) {
        list[idx] = product;
      } else {
        list.push(product);
      }
      fs.writeFileSync(fp, JSON.stringify(list, null, 2), 'utf-8');
    }
  } catch {}
}

export async function createFoodstuffProduct(
  productData: Omit<FoodstuffProduct, 'createdAt' | 'updatedAt'>,
  containerPricing?: { priceAED: number | null; moq?: string; packagingUnit?: string; packagingDetails?: string; netWeightKg?: number | null },
  marketPricing?: { priceAED: number | null; minPurchaseQty?: string; packagingUnit?: string; packagingDetails?: string; netWeightKg?: number | null },
  adminEmail: string = 'admin@barakahalrizquae.com'
): Promise<{ product: FoodstuffProduct; containerPrice: FoodstuffContainerPrice; marketPrice: FoodstuffMarketPrice }> {
  const existingList = await getFoodstuffProducts();
  if (existingList.some(p => p.id.toLowerCase() === productData.id.toLowerCase())) {
    throw new Error(`Product with ID or Slug "${productData.id}" already exists.`);
  }

  const nowISO = new Date().toISOString();
  const newProduct: FoodstuffProduct = {
    ...productData,
    published: productData.published !== undefined ? productData.published : true,
    createdAt: nowISO,
    updatedAt: nowISO,
  };

  // 1. Save product to MongoDB
  try {
    const col = await getFoodstuffProductsCollection();
    await col.insertOne({ ...newProduct, _id: newProduct.id } as any);
  } catch (err) {
    console.warn('MongoDB createFoodstuffProduct fallback:', (err as Error).message);
  }

  // 2. Save product to local JSON
  try {
    const { db } = await import('@/lib/db/index');
    db.foodstuff.saveProduct(newProduct, adminEmail);
    syncProductToLocalJson(newProduct);
  } catch {}

  // 3. Create Container Price Record
  const sched = await getFoodstuffSchedule();
  const dynamicSession = getDynamicUAESession(sched).session;
  const containerPriceAED = containerPricing?.priceAED !== undefined ? containerPricing.priceAED : null;
  const containerNetWeight = containerPricing?.netWeightKg !== undefined ? containerPricing.netWeightKg : newProduct.defaultNetWeightKg;
  const containerCalcKg = calculatePricePerKg(containerPriceAED, containerNetWeight);

  const newContainerPrice: FoodstuffContainerPrice = {
    id: `cp-${newProduct.id}`,
    productId: newProduct.id,
    importerSupplierName: 'Barakah Direct Import Desk',
    packagingUnit: containerPricing?.packagingUnit || newProduct.defaultPackagingUnit || 'CTN',
    packagingDetails: containerPricing?.packagingDetails || newProduct.defaultPackagingDetails || 'Standard Wholesale Package',
    netWeightKg: containerNetWeight,
    priceAED: containerPriceAED,
    calculatedPricePerKg: containerCalcKg,
    moq: containerPricing?.moq || newProduct.defaultMoq || '100 CTN',
    containerAvailability: 'Direct Port Delivery (Jebel Ali / Dubai Ports)',
    portOfArrival: 'Jebel Ali Port / Dubai Ports',
    businessStatus: containerPriceAED !== null ? 'AVAILABLE' : 'PRICE_ON_REQUEST',
    validUntil: null,
    lastUpdated: nowISO,
    updateSession: dynamicSession,
    updateSource: 'ADMIN_VERIFIED_RATE_SHEET',
    updatedBy: adminEmail,
  };

  try {
    const cpCol = await getFoodstuffContainerPricesCollection();
    await cpCol.replaceOne({ _id: newContainerPrice.id }, { ...newContainerPrice, _id: newContainerPrice.id } as any, { upsert: true });
  } catch {}

  try {
    const { readDB, writeDB } = await import('@/lib/db/index');
    const data = readDB();
    data.foodstuffContainerPrices = data.foodstuffContainerPrices || [];
    const idx = data.foodstuffContainerPrices.findIndex(c => c.id === newContainerPrice.id);
    if (idx >= 0) data.foodstuffContainerPrices[idx] = newContainerPrice;
    else data.foodstuffContainerPrices.push(newContainerPrice);
    writeDB(data);
  } catch {}

  // 4. Create Market Price Record
  const marketPriceAED = marketPricing?.priceAED !== undefined ? marketPricing.priceAED : null;
  const marketNetWeight = marketPricing?.netWeightKg !== undefined ? marketPricing.netWeightKg : newProduct.defaultNetWeightKg;
  const marketCalcKg = calculatePricePerKg(marketPriceAED, marketNetWeight);

  const newMarketPrice: FoodstuffMarketPrice = {
    id: `mp-${newProduct.id}`,
    productId: newProduct.id,
    marketLocation: 'Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai',
    packagingUnit: marketPricing?.packagingUnit || newProduct.defaultPackagingUnit || 'BOX',
    packagingDetails: marketPricing?.packagingDetails || newProduct.defaultPackagingDetails || 'Market Wholesale Packaging',
    netWeightKg: marketNetWeight,
    priceAED: marketPriceAED,
    previousPriceAED: null,
    changePercent: null,
    trend: 'STABLE',
    calculatedPricePerKg: marketCalcKg,
    minPurchaseQty: marketPricing?.minPurchaseQty || '10 Units',
    qualityGrade: newProduct.grade || 'Grade A Market Fresh',
    marketSession: dynamicSession,
    businessStatus: marketPriceAED !== null ? 'AVAILABLE' : 'PRICE_ON_REQUEST',
    lastUpdated: nowISO,
    updateSource: 'AL_AWEER_MARKET_UPDATE',
    updatedBy: adminEmail,
  };

  try {
    const mpCol = await getFoodstuffMarketPricesCollection();
    await mpCol.replaceOne({ _id: newMarketPrice.id }, { ...newMarketPrice, _id: newMarketPrice.id } as any, { upsert: true });
  } catch {}

  try {
    const { readDB, writeDB } = await import('@/lib/db/index');
    const data = readDB();
    data.foodstuffMarketPrices = data.foodstuffMarketPrices || [];
    const idx = data.foodstuffMarketPrices.findIndex(m => m.id === newMarketPrice.id);
    if (idx >= 0) data.foodstuffMarketPrices[idx] = newMarketPrice;
    else data.foodstuffMarketPrices.push(newMarketPrice);
    writeDB(data);
  } catch {}

  await logActivityToMongo(adminEmail, 'PRODUCT_CREATED', newProduct.id);
  return { product: newProduct, containerPrice: newContainerPrice, marketPrice: newMarketPrice };
}

export async function updateFoodstuffProduct(
  id: string,
  productUpdates: Partial<FoodstuffProduct>,
  containerUpdates?: { priceAED?: number | null; moq?: string; packagingUnit?: string; packagingDetails?: string; netWeightKg?: number | null },
  marketUpdates?: { priceAED?: number | null; minPurchaseQty?: string; packagingUnit?: string; packagingDetails?: string; netWeightKg?: number | null },
  adminEmail: string = 'admin@barakahalrizquae.com'
): Promise<FoodstuffProduct | null> {
  const existingList = await getFoodstuffProducts();
  const existing = existingList.find(p => p.id === id);
  if (!existing) return null;

  const nowISO = new Date().toISOString();
  const updatedProduct: FoodstuffProduct = {
    ...existing,
    ...productUpdates,
    id: existing.id,
    updatedAt: nowISO,
  };

  // 1. Update in Mongo
  try {
    const col = await getFoodstuffProductsCollection();
    await col.replaceOne({ $or: [{ _id: id }, { id }] }, { ...updatedProduct, _id: id } as any, { upsert: true });
  } catch (err) {
    console.warn('MongoDB updateFoodstuffProduct fallback:', (err as Error).message);
  }

  // 2. Update in JSON
  try {
    const { db } = await import('@/lib/db/index');
    db.foodstuff.saveProduct(updatedProduct, adminEmail);
    syncProductToLocalJson(updatedProduct);
  } catch {}

  // 3. Update container pricing if requested
  if (containerUpdates) {
    const cpCol = await getFoodstuffContainerPrices();
    const existingCp = cpCol.find(c => c.productId === id);
    if (existingCp) {
      await updateFoodstuffContainerPrice(existingCp.id, containerUpdates, adminEmail);
    }
  }

  // 4. Update market pricing if requested
  if (marketUpdates) {
    const mpCol = await getFoodstuffMarketPrices();
    const existingMp = mpCol.find(m => m.productId === id);
    if (existingMp) {
      await updateFoodstuffMarketPrice(existingMp.id, marketUpdates, adminEmail);
    }
  }

  await logActivityToMongo(adminEmail, 'PRODUCT_UPDATED', id);
  return updatedProduct;
}

export async function archiveFoodstuffProduct(id: string, adminEmail: string = 'admin@barakahalrizquae.com'): Promise<FoodstuffProduct | null> {
  return updateFoodstuffProduct(id, { published: false }, undefined, undefined, adminEmail);
}

export async function activateFoodstuffProduct(id: string, adminEmail: string = 'admin@barakahalrizquae.com'): Promise<FoodstuffProduct | null> {
  return updateFoodstuffProduct(id, { published: true }, undefined, undefined, adminEmail);
}

export async function deleteFoodstuffProduct(id: string, adminEmail: string = 'admin@barakahalrizquae.com'): Promise<{ success: boolean; reason?: string; message: string }> {
  // 1. Check if product is referenced in any wholesale order
  const orders = await getWholesaleOrders();
  const hasOrders = orders.some(o => o.items && o.items.some(item => item.productId === id));
  if (hasOrders) {
    await archiveFoodstuffProduct(id, adminEmail);
    return {
      success: false,
      reason: 'ORDER_HISTORY_EXISTS',
      message: 'Product has historical wholesale order records. To protect order history and audit compliance, the product has been Archived instead of permanently deleted.'
    };
  }

  // 2. Safe to delete
  try {
    const col = await getFoodstuffProductsCollection();
    await col.deleteOne({ $or: [{ _id: id }, { id }] });
  } catch {}

  try {
    const cpCol = await getFoodstuffContainerPricesCollection();
    await cpCol.deleteMany({ productId: id });
    const mpCol = await getFoodstuffMarketPricesCollection();
    await mpCol.deleteMany({ productId: id });
  } catch {}

  try {
    const { readDB, writeDB } = await import('@/lib/db/index');
    const data = readDB();
    data.foodstuffProducts = (data.foodstuffProducts || []).filter(p => p.id !== id);
    data.foodstuffContainerPrices = (data.foodstuffContainerPrices || []).filter(c => c.productId !== id);
    data.foodstuffMarketPrices = (data.foodstuffMarketPrices || []).filter(m => m.productId !== id);
    writeDB(data);

    const fp = path.join(process.cwd(), 'data', 'barakah', 'foodstuff-products.json');
    if (fs.existsSync(fp)) {
      const list: FoodstuffProduct[] = JSON.parse(fs.readFileSync(fp, 'utf-8'));
      fs.writeFileSync(fp, JSON.stringify(list.filter(p => p.id !== id), null, 2), 'utf-8');
    }
  } catch {}

  await logActivityToMongo(adminEmail, 'PRODUCT_DELETED', id);
  return { success: true, message: 'Product successfully removed from database.' };
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

function getLocalLeadsFilePath(): string {
  return path.join(process.cwd(), "data", "barakah", "leads.json");
}

export function readLocalLeads(): Lead[] {
  try {
    const fp = getLocalLeadsFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

export function writeLocalLeads(leads: Lead[]): void {
  try {
    const fp = getLocalLeadsFilePath();
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, JSON.stringify(leads, null, 2), "utf-8");
  } catch {}
}

export async function getLeads(): Promise<Lead[]> {
  const localLeads = readLocalLeads();
  let mongoLeads: Lead[] = [];
  try {
    const col = await getLeadsCollection();
    mongoLeads = await col.find({}).sort({ createdAt: -1 }).toArray();
  } catch (err) {
    // Mongo fallback
  }

  const map = new Map<string, Lead>();
  for (const l of mongoLeads) {
    map.set(l.id, l);
  }
  for (const l of localLeads) {
    const existing = map.get(l.id);
    if (!existing || new Date(l.updatedAt || l.createdAt).getTime() >= new Date(existing.updatedAt || existing.createdAt).getTime()) {
      map.set(l.id, l);
    }
  }

  return Array.from(map.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
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

  // 1. Always sync to local JSON fallback immediately
  const local = readLocalLeads();
  local.unshift(newLead);
  writeLocalLeads(local);

  // 2. Try MongoDB persistence
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
  const nowISO = new Date().toISOString();
  let updatedRecord: Lead | null = null;

  try {
    const col = await getLeadsCollection();
    const existing = await col.findOne({ $or: [{ _id: id }, { id }] });
    if (existing) {
      const updated: Lead & { _id: string } = {
        ...existing,
        ...updates,
        _id: existing._id,
        id: existing.id,
        updatedAt: nowISO,
      };
      await col.replaceOne({ _id: existing._id }, updated, { upsert: true });
      updatedRecord = updated;
      await logActivityToMongo('admin@barakahalrizquae.com', 'LEAD_UPDATED', id);
    }
  } catch (err) {}

  const local = readLocalLeads();
  const idx = local.findIndex(l => l.id === id);
  if (idx !== -1) {
    local[idx] = {
      ...local[idx],
      ...updates,
      updatedAt: nowISO,
    };
    writeLocalLeads(local);
    if (!updatedRecord) updatedRecord = local[idx];
  }

  return updatedRecord;
}

export async function deleteLead(id: string): Promise<boolean> {
  let deleted = false;
  try {
    const col = await getLeadsCollection();
    const res = await col.deleteOne({ $or: [{ _id: id }, { id }] });
    if (res.deletedCount > 0) {
      deleted = true;
      await logActivityToMongo('admin@barakahalrizquae.com', 'LEAD_DELETED', id);
    }
  } catch (err) {}

  const local = readLocalLeads();
  const filtered = local.filter(l => l.id !== id);
  if (filtered.length !== local.length) {
    writeLocalLeads(filtered);
    deleted = true;
  }

  return deleted;
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

export function readLocalOrders(): WholesaleOrder[] {
  try {
    const fp = getLocalOrdersFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

export function writeLocalOrders(orders: WholesaleOrder[]): void {
  try {
    const fp = getLocalOrdersFilePath();
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, JSON.stringify(orders, null, 2), "utf-8");
  } catch {}
}

export async function getWholesaleOrders(): Promise<WholesaleOrder[]> {
  const localOrders = readLocalOrders();
  let mongoOrders: WholesaleOrder[] = [];
  try {
    const col = await getWholesaleOrdersCollection();
    mongoOrders = await col.find({}).sort({ createdAt: -1 }).toArray();
  } catch (err) {
    // Mongo unreachable in this environment; safely rely on local JSON
  }

  // Merge & deduplicate by ID, prioritizing the most recent updatedAt timestamp
  const orderMap = new Map<string, WholesaleOrder>();
  for (const o of mongoOrders) {
    orderMap.set(o.id, o);
  }
  for (const o of localOrders) {
    const existing = orderMap.get(o.id);
    if (!existing || new Date(o.updatedAt || o.createdAt).getTime() >= new Date(existing.updatedAt || existing.createdAt).getTime()) {
      orderMap.set(o.id, o);
    }
  }

  const merged = Array.from(orderMap.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return merged;
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

// ==========================================
// B2B WHOLESALE CUSTOMERS / BUYERS CRM
// ==========================================

export async function getWholesaleCustomersCollection(): Promise<Collection<WholesaleCustomer & { _id: string }>> {
  const db = await getDb();
  return db.collection<WholesaleCustomer & { _id: string }>("wholesale_customers");
}

function getLocalCustomersFilePath(): string {
  return path.join(process.cwd(), "data", "barakah", "customers.json");
}

function readLocalCustomers(): WholesaleCustomer[] {
  try {
    const fp = getLocalCustomersFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

function writeLocalCustomers(customers: WholesaleCustomer[]): void {
  try {
    const fp = getLocalCustomersFilePath();
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, JSON.stringify(customers, null, 2), "utf-8");
  } catch {}
}

export function normalizePhone(phone: string): string {
  if (!phone) return '';
  return phone.replace(/[^\d+]/g, '').replace(/^00/, '+');
}

export async function getWholesaleCustomers(): Promise<WholesaleCustomer[]> {
  const [orders, localSaved] = await Promise.all([
    getWholesaleOrders(),
    readLocalCustomers(),
  ]);

  let mongoSaved: WholesaleCustomer[] = [];
  try {
    const col = await getWholesaleCustomersCollection();
    mongoSaved = await col.find({}).toArray();
  } catch {}

  // Merge saved profile overrides (notes, trn, company edits)
  const profileOverrides = new Map<string, Partial<WholesaleCustomer>>();
  for (const c of [...localSaved, ...mongoSaved]) {
    const key = normalizePhone(c.phone) || c.email?.toLowerCase().trim();
    if (key) {
      profileOverrides.set(key, { ...(profileOverrides.get(key) || {}), ...c });
    }
  }

  // Aggregate customers from all real orders
  const customerMap = new Map<string, WholesaleCustomer>();

  for (const order of orders) {
    const normPhone = normalizePhone(order.phone);
    const normEmail = (order.email || '').toLowerCase().trim();
    const primaryKey = normPhone || normEmail;

    if (!primaryKey) continue;

    const existing = customerMap.get(primaryKey);
    const orderDate = order.createdAt;
    const isCompleted = order.status === 'COMPLETED';
    const isCancelled = order.status === 'CANCELLED';

    if (existing) {
      existing.totalOrders += 1;
      if (!isCancelled) {
        existing.totalCtn += order.totalCtn || 0;
        existing.totalOrderValueAED = parseFloat((existing.totalOrderValueAED + order.totalAED).toFixed(2));
      }
      if (isCompleted) {
        existing.completedOrderValueAED = parseFloat((existing.completedOrderValueAED + order.totalAED).toFixed(2));
      }
      if (!existing.lastOrderDate || new Date(orderDate) > new Date(existing.lastOrderDate)) {
        existing.lastOrderDate = orderDate;
        existing.latestStatus = order.status;
      }
      if (order.companyName && !existing.companyName) {
        existing.companyName = order.companyName;
      }
    } else {
      const override = profileOverrides.get(primaryKey) || {};
      const newCust: WholesaleCustomer = {
        id: override.id || `cust-${normPhone.replace(/\+/g, '') || Math.random().toString(36).substring(2, 8)}`,
        name: override.name || order.customerName,
        companyName: override.companyName || order.companyName || undefined,
        phone: order.phone,
        email: order.email,
        whatsapp: override.whatsapp || order.phone,
        trn: override.trn,
        notes: override.notes,
        totalOrders: 1,
        totalCtn: isCancelled ? 0 : (order.totalCtn || 0),
        totalOrderValueAED: isCancelled ? 0 : order.totalAED,
        completedOrderValueAED: isCompleted ? order.totalAED : 0,
        lastOrderDate: orderDate,
        latestStatus: order.status,
        createdAt: orderDate,
        updatedAt: order.updatedAt || orderDate,
      };
      customerMap.set(primaryKey, newCust);
    }
  }

  // Also include any standalone customers saved by Admin that don't have orders yet
  for (const [key, profile] of profileOverrides.entries()) {
    if (!customerMap.has(key) && profile.name && profile.phone) {
      customerMap.set(key, {
        id: profile.id || `cust-${key.replace(/\+/g, '')}`,
        name: profile.name,
        companyName: profile.companyName,
        phone: profile.phone,
        email: profile.email || '',
        whatsapp: profile.whatsapp || profile.phone,
        trn: profile.trn,
        notes: profile.notes,
        totalOrders: profile.totalOrders || 0,
        totalCtn: profile.totalCtn || 0,
        totalOrderValueAED: profile.totalOrderValueAED || 0,
        completedOrderValueAED: profile.completedOrderValueAED || 0,
        lastOrderDate: profile.lastOrderDate,
        latestStatus: profile.latestStatus,
        createdAt: profile.createdAt || new Date().toISOString(),
        updatedAt: profile.updatedAt || new Date().toISOString(),
      });
    }
  }

  const list = Array.from(customerMap.values()).sort((a, b) => {
    const timeA = a.lastOrderDate ? new Date(a.lastOrderDate).getTime() : 0;
    const timeB = b.lastOrderDate ? new Date(b.lastOrderDate).getTime() : 0;
    return timeB - timeA;
  });

  return list;
}

export async function saveWholesaleCustomer(
  customerData: Partial<WholesaleCustomer> & { name: string; phone: string; email?: string },
  adminEmail: string = 'admin@barakahalrizquae.com'
): Promise<WholesaleCustomer> {
  const normPhone = normalizePhone(customerData.phone);
  const id = customerData.id || `cust-${normPhone.replace(/\+/g, '') || Date.now()}`;
  const nowISO = new Date().toISOString();

  const savedRecord: WholesaleCustomer = {
    id,
    name: customerData.name.trim(),
    companyName: customerData.companyName?.trim() || undefined,
    phone: customerData.phone.trim(),
    email: (customerData.email || '').trim(),
    whatsapp: (customerData.whatsapp || customerData.phone).trim(),
    trn: customerData.trn?.trim() || undefined,
    notes: customerData.notes?.trim() || undefined,
    totalOrders: customerData.totalOrders || 0,
    totalCtn: customerData.totalCtn || 0,
    totalOrderValueAED: customerData.totalOrderValueAED || 0,
    completedOrderValueAED: customerData.completedOrderValueAED || 0,
    lastOrderDate: customerData.lastOrderDate,
    latestStatus: customerData.latestStatus,
    createdAt: customerData.createdAt || nowISO,
    updatedAt: nowISO,
  };

  // 1. Sync to local JSON fallback
  const localList = readLocalCustomers();
  const idx = localList.findIndex(c => c.id === id || normalizePhone(c.phone) === normPhone);
  if (idx >= 0) {
    localList[idx] = { ...localList[idx], ...savedRecord };
  } else {
    localList.unshift(savedRecord);
  }
  writeLocalCustomers(localList);

  // 2. Try MongoDB
  try {
    const col = await getWholesaleCustomersCollection();
    await col.replaceOne({ $or: [{ _id: id }, { id }] }, { ...savedRecord, _id: id } as any, { upsert: true });
  } catch (err) {
    console.warn("MongoDB saveWholesaleCustomer fallback to JSON:", (err as Error).message);
  }

  await logActivityToMongo(adminEmail, 'CUSTOMER_UPDATED', id);
  return savedRecord;
}

// ==========================================
// WHOLESALE PAYMENTS & ACCOUNTS RECEIVABLE PERSISTENCE
// ==========================================

function getLocalPaymentsFilePath(): string {
  return path.join(process.cwd(), "data", "barakah", "payments.json");
}

export function readLocalPayments(): WholesalePayment[] {
  try {
    const fp = getLocalPaymentsFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

export function writeLocalPayments(payments: WholesalePayment[]): void {
  const fp = getLocalPaymentsFilePath();
  const dir = path.dirname(fp);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const tmpPath = `${fp}.${Date.now()}.${Math.random().toString(36).substring(2, 6)}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(payments, null, 2), "utf-8");
  fs.renameSync(tmpPath, fp);
}

export async function getWholesalePaymentsCollection(): Promise<Collection<WholesalePayment & { _id: string }>> {
  const db = await getDb();
  return db.collection<WholesalePayment & { _id: string }>("wholesale_payments");
}

export async function getWholesalePayments(): Promise<WholesalePayment[]> {
  const localPayments = readLocalPayments();
  let mongoPayments: WholesalePayment[] = [];
  try {
    const col = await getWholesalePaymentsCollection();
    mongoPayments = await col.find({}).sort({ createdAt: -1 }).toArray();
  } catch (err) {
    // Mongo unreachable in this environment; fallback to local JSON
  }

  // Merge & deduplicate by ID, prioritizing latest updatedAt
  const map = new Map<string, WholesalePayment>();
  for (const p of mongoPayments) {
    map.set(p.id, p);
  }
  for (const p of localPayments) {
    const existing = map.get(p.id);
    if (!existing || new Date(p.updatedAt || p.createdAt).getTime() >= new Date(existing.updatedAt || existing.createdAt).getTime()) {
      map.set(p.id, p);
    }
  }

  return Array.from(map.values()).sort(
    (a, b) => new Date(b.paymentDate || b.createdAt).getTime() - new Date(a.paymentDate || a.createdAt).getTime()
  );
}

export async function getOrderPaymentSummary(orderId: string): Promise<OrderPaymentSummary | null> {
  const orders = await getWholesaleOrders();
  const order = orders.find(o => o.id === orderId || o.id.toLowerCase() === orderId.toLowerCase());
  if (!order) return null;

  const payments = await getWholesalePayments();
  const orderPayments = payments.filter(p => p.orderId === order.id);

  const totalPaidAED = parseFloat(
    orderPayments
      .filter(p => p.status === 'VALID')
      .reduce((sum, p) => sum + p.amountAED, 0)
      .toFixed(2)
  );

  const refundedAED = parseFloat(
    orderPayments
      .filter(p => p.status === 'REFUNDED')
      .reduce((sum, p) => sum + p.amountAED, 0)
      .toFixed(2)
  );

  const netPaidAED = totalPaidAED;
  const outstandingBalanceAED = parseFloat(Math.max(0, order.totalAED - netPaidAED).toFixed(2));

  let paymentStatus: 'UNPAID' | 'PARTIALLY_PAID' | 'PAID' = 'UNPAID';
  if (netPaidAED >= order.totalAED && order.totalAED > 0) {
    paymentStatus = 'PAID';
  } else if (netPaidAED > 0) {
    paymentStatus = 'PARTIALLY_PAID';
  }

  const validPayments = orderPayments.filter(p => p.status === 'VALID');
  const lastPaymentDate = validPayments.length > 0 ? validPayments[0].paymentDate : undefined;

  return {
    orderId: order.id,
    orderTotalAED: order.totalAED,
    totalPaidAED,
    refundedAED,
    netPaidAED,
    outstandingBalanceAED,
    paymentStatus,
    paymentsCount: orderPayments.length,
    lastPaymentDate,
  };
}

export async function recordWholesalePayment(
  data: {
    orderId: string;
    amountAED: number;
    paymentMethod: WholesalePaymentMethod;
    paymentType?: WholesalePaymentType;
    paymentDate?: string;
    referenceNumber?: string;
    bankAccount?: string;
    notes?: string;
  },
  adminEmail: string
): Promise<{ payment: WholesalePayment; summary: OrderPaymentSummary }> {
  // 1. Validate Amount
  const amount = parseFloat(Number(data.amountAED).toFixed(2));
  if (isNaN(amount) || amount <= 0) {
    throw new Error("Payment amount must be a positive number greater than 0 AED.");
  }

  // 2. Validate Referenced Order
  const orders = await getWholesaleOrders();
  const order = orders.find(o => o.id === data.orderId || o.id.toLowerCase() === data.orderId.toLowerCase());
  if (!order) {
    throw new Error(`Referenced wholesale order "${data.orderId}" does not exist.`);
  }

  if (order.status === 'CANCELLED') {
    throw new Error(`Cannot record payment against CANCELLED order "${order.id}".`);
  }

  // 3. Compute current balance & prevent invalid overpayment
  const currentSummary = await getOrderPaymentSummary(order.id);
  const currentOutstanding = currentSummary ? currentSummary.outstandingBalanceAED : order.totalAED;
  
  if (amount > currentOutstanding + 0.05) {
    throw new Error(
      `Payment amount (AED ${amount.toLocaleString()}) exceeds remaining order balance (AED ${currentOutstanding.toLocaleString()}).`
    );
  }

  // 4. Check for duplicate submission (same order, same amount, same ref within 1 hour)
  const existingPayments = await getWholesalePayments();
  const normalizedRef = (data.referenceNumber || '').trim().toLowerCase();
  const now = new Date();
  const nowISO = now.toISOString();

  const isDuplicate = existingPayments.some(p => {
    if (p.orderId !== order.id || p.amountAED !== amount || p.status !== 'VALID') return false;
    const diffMs = now.getTime() - new Date(p.createdAt).getTime();
    if (diffMs > 60 * 60 * 1000) return false; // More than an hour ago
    if (normalizedRef && p.referenceNumber && p.referenceNumber.trim().toLowerCase() === normalizedRef) {
      return true;
    }
    return diffMs < 30 * 1000; // Accidental double click within 30 seconds
  });

  if (isDuplicate) {
    throw new Error("Duplicate payment submission detected. Please verify transaction history before submitting again.");
  }

  // 5. Generate Unique Payment ID
  const dateStr = nowISO.slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  const paymentId = `BARAKAH-PAY-${dateStr}-${rand}`;

  // Determine payment type
  let derivedType: WholesalePaymentType = data.paymentType || 'PARTIAL';
  if (amount >= currentOutstanding - 0.05) {
    derivedType = 'FULL';
  } else if (currentOutstanding === order.totalAED) {
    derivedType = data.paymentType || 'PARTIAL';
  }

  const paymentRecord: WholesalePayment = {
    id: paymentId,
    orderId: order.id,
    orderNumber: order.id,
    customerName: order.customerName,
    companyName: order.companyName,
    phone: order.phone,
    email: order.email,
    amountAED: amount,
    paymentDate: data.paymentDate ? data.paymentDate.slice(0, 10) : nowISO.slice(0, 10),
    paymentMethod: data.paymentMethod,
    paymentType: derivedType,
    referenceNumber: data.referenceNumber ? data.referenceNumber.trim() : undefined,
    bankAccount: data.bankAccount ? data.bankAccount.trim() : undefined,
    notes: data.notes ? data.notes.trim() : undefined,
    status: 'VALID',
    auditTrail: [
      {
        action: 'RECORDED',
        performedBy: adminEmail,
        timestamp: nowISO,
        reason: 'Payment recorded by administrator',
      },
    ],
    createdAt: nowISO,
    updatedAt: nowISO,
  };

  // 6. Durable Write to Local JSON
  const localPayments = readLocalPayments();
  localPayments.unshift(paymentRecord);
  writeLocalPayments(localPayments);

  // 7. Sync to MongoDB
  try {
    const col = await getWholesalePaymentsCollection();
    await col.insertOne({ ...paymentRecord, _id: paymentId } as any);
  } catch (err) {
    console.warn("MongoDB recordWholesalePayment fallback to JSON:", (err as Error).message);
  }

  await logActivityToMongo(adminEmail, 'PAYMENT_RECORDED', paymentId);

  // 8. Re-calculate Summary
  const updatedSummary = (await getOrderPaymentSummary(order.id))!;
  return { payment: paymentRecord, summary: updatedSummary };
}

export async function reverseOrRefundPayment(
  paymentId: string,
  action: 'REVERSED' | 'REFUNDED',
  reason: string,
  adminEmail: string
): Promise<{ payment: WholesalePayment; summary: OrderPaymentSummary }> {
  if (!reason || !reason.trim()) {
    throw new Error(`A valid reason is required to ${action.toLowerCase()} a payment.`);
  }

  const allPayments = await getWholesalePayments();
  const payment = allPayments.find(p => p.id === paymentId);
  if (!payment) {
    throw new Error(`Payment "${paymentId}" not found.`);
  }

  if (payment.status !== 'VALID') {
    throw new Error(`Cannot ${action.toLowerCase()} payment "${paymentId}" because its status is already ${payment.status}.`);
  }

  const nowISO = new Date().toISOString();
  const previousStatus = payment.status;
  payment.status = action;
  payment.updatedAt = nowISO;
  payment.auditTrail.push({
    action,
    performedBy: adminEmail,
    timestamp: nowISO,
    reason: reason.trim(),
    previousStatus,
  });

  // 1. Update Local JSON
  const localPayments = readLocalPayments();
  const idx = localPayments.findIndex(p => p.id === paymentId);
  if (idx >= 0) {
    localPayments[idx] = payment;
  } else {
    localPayments.unshift(payment);
  }
  writeLocalPayments(localPayments);

  // 2. Update MongoDB
  try {
    const col = await getWholesalePaymentsCollection();
    await col.replaceOne({ $or: [{ _id: paymentId }, { id: paymentId }] }, { ...payment, _id: paymentId } as any, { upsert: true });
  } catch (err) {
    console.warn(`MongoDB ${action} fallback to JSON:`, (err as Error).message);
  }

  await logActivityToMongo(adminEmail, `PAYMENT_${action}`, paymentId);

  const updatedSummary = (await getOrderPaymentSummary(payment.orderId))!;
  return { payment, summary: updatedSummary };
}

export async function getCustomerAccountStatement(customerIdentifier: string): Promise<{
  customerInfo: { name: string; companyName?: string; phone: string; email?: string };
  statementItems: CustomerStatementItem[];
  totals: {
    totalBilledAED: number;
    totalPaidAED: number;
    totalRefundedAED: number;
    netPaidAED: number;
    outstandingReceivablesAED: number;
  };
} | null> {
  const normTarget = normalizePhone(customerIdentifier) || customerIdentifier.toLowerCase().trim();
  const [orders, payments] = await Promise.all([
    getWholesaleOrders(),
    getWholesalePayments(),
  ]);

  const matchingOrders = orders.filter(o => {
    return (
      (o.id && o.id.toLowerCase() === normTarget) ||
      (o.phone && normalizePhone(o.phone) === normTarget) ||
      (o.email && o.email.toLowerCase().trim() === normTarget) ||
      (o.customerName && o.customerName.toLowerCase().trim() === normTarget) ||
      (o.companyName && o.companyName.toLowerCase().trim() === normTarget)
    );
  });

  const matchingPayments = payments.filter(p => {
    return (
      matchingOrders.some(o => o.id === p.orderId) ||
      (p.phone && normalizePhone(p.phone) === normTarget) ||
      (p.email && p.email.toLowerCase().trim() === normTarget) ||
      (p.customerName && p.customerName.toLowerCase().trim() === normTarget)
    );
  });

  if (matchingOrders.length === 0 && matchingPayments.length === 0) {
    return null;
  }

  const primary = matchingOrders[0] || matchingPayments[0];
  const customerInfo = {
    name: primary.customerName,
    companyName: primary.companyName,
    phone: primary.phone,
    email: primary.email,
  };

  // Build Chronological Ledger
  type RawEntry = {
    date: string;
    timestamp: number;
    id: string;
    type: 'ORDER_INVOICE' | 'PAYMENT' | 'REFUND' | 'REVERSAL';
    reference: string;
    description: string;
    debitAED: number;
    creditAED: number;
  };

  const rawEntries: RawEntry[] = [];

  // Add Orders as Invoices (Debits)
  for (const o of matchingOrders) {
    if (o.status !== 'CANCELLED') {
      rawEntries.push({
        date: o.pickupDate || o.createdAt.slice(0, 10),
        timestamp: new Date(o.createdAt).getTime(),
        id: o.id,
        type: 'ORDER_INVOICE',
        reference: o.id,
        description: `Wholesale Order #${o.id} (${o.totalCtn} CTN - ${o.orderType})`,
        debitAED: o.totalAED,
        creditAED: 0,
      });
    }
  }

  // Add Payments (Credits) and Adjustments
  for (const p of matchingPayments) {
    if (p.status === 'VALID') {
      rawEntries.push({
        date: p.paymentDate || p.createdAt.slice(0, 10),
        timestamp: new Date(p.createdAt).getTime(),
        id: p.id,
        type: 'PAYMENT',
        reference: p.referenceNumber || p.id,
        description: `Payment Received [${p.paymentMethod}] (${p.paymentType}) - Ref: ${p.referenceNumber || 'N/A'}`,
        debitAED: 0,
        creditAED: p.amountAED,
      });
    } else if (p.status === 'REFUNDED') {
      rawEntries.push({
        date: p.paymentDate || p.createdAt.slice(0, 10),
        timestamp: new Date(p.createdAt).getTime(),
        id: p.id,
        type: 'REFUND',
        reference: p.id,
        description: `Payment Refunded - ${p.auditTrail[p.auditTrail.length - 1]?.reason || 'Admin Refund'}`,
        debitAED: p.amountAED, // Increases balance again
        creditAED: 0,
      });
    } else if (p.status === 'REVERSED') {
      rawEntries.push({
        date: p.paymentDate || p.createdAt.slice(0, 10),
        timestamp: new Date(p.createdAt).getTime(),
        id: p.id,
        type: 'REVERSAL',
        reference: p.id,
        description: `Payment Reversed - ${p.auditTrail[p.auditTrail.length - 1]?.reason || 'Admin Reversal'}`,
        debitAED: p.amountAED, // Increases balance again
        creditAED: 0,
      });
    }
  }

  // Sort Chronologically
  rawEntries.sort((a, b) => a.timestamp - b.timestamp);

  let runningBalance = 0;
  const statementItems: CustomerStatementItem[] = [];
  let totalBilledAED = 0;
  let totalPaidAED = 0;
  let totalRefundedAED = 0;

  for (const entry of rawEntries) {
    runningBalance += entry.debitAED - entry.creditAED;
    totalBilledAED += entry.debitAED;
    totalPaidAED += entry.creditAED;
    if (entry.type === 'REFUND' || entry.type === 'REVERSAL') {
      totalRefundedAED += entry.debitAED;
    }

    statementItems.push({
      id: entry.id,
      date: entry.date,
      type: entry.type,
      reference: entry.reference,
      description: entry.description,
      debitAED: entry.debitAED,
      creditAED: entry.creditAED,
      runningBalanceAED: parseFloat(runningBalance.toFixed(2)),
    });
  }

  const netPaidAED = parseFloat((totalPaidAED - totalRefundedAED).toFixed(2));
  const outstandingReceivablesAED = parseFloat(Math.max(0, runningBalance).toFixed(2));

  return {
    customerInfo,
    statementItems,
    totals: {
      totalBilledAED: parseFloat(totalBilledAED.toFixed(2)),
      totalPaidAED: parseFloat(totalPaidAED.toFixed(2)),
      totalRefundedAED: parseFloat(totalRefundedAED.toFixed(2)),
      netPaidAED,
      outstandingReceivablesAED,
    },
  };
}

// ==========================================
// DYNAMIC BUSINESS EMAIL MAILBOXES
// ==========================================

export async function getEmailMailboxesCollection(): Promise<Collection<EmailMailbox & { _id: string }>> {
  const db = await getDb();
  return db.collection<EmailMailbox & { _id: string }>("email_mailboxes");
}

function getLocalMailboxesFilePath(): string {
  return path.join(process.cwd(), "data", "barakah", "mailboxes.json");
}

export function readLocalMailboxes(): EmailMailbox[] {
  try {
    const fp = getLocalMailboxesFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

export function writeLocalMailboxes(mailboxes: EmailMailbox[]): void {
  try {
    const fp = getLocalMailboxesFilePath();
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, JSON.stringify(mailboxes, null, 2), "utf-8");
  } catch {}
}

export async function getEmailMailboxes(): Promise<EmailMailbox[]> {
  const localList = readLocalMailboxes();
  let mongoList: EmailMailbox[] = [];
  try {
    const col = await getEmailMailboxesCollection();
    mongoList = await col.find({}).toArray();
  } catch (err) {
    // Mongo fallback
  }

  const map = new Map<string, EmailMailbox>();
  for (const m of mongoList) {
    map.set(m.id || m.channel, m);
  }
  for (const m of localList) {
    const key = m.id || m.channel;
    const existing = map.get(key);
    if (!existing || new Date(m.updatedAt || m.createdAt).getTime() >= new Date(existing.updatedAt || existing.createdAt).getTime()) {
      map.set(key, m);
    }
  }

  return Array.from(map.values());
}

export const ALLOWED_MAILBOXES: Record<string, { channel: InboxMailbox; email: string; displayName: string }> = {
  'info@barakahalrizquae.com': { channel: 'info', email: 'info@barakahalrizquae.com', displayName: 'General Inquiries' },
  'sales@barakahalrizquae.com': { channel: 'sales', email: 'sales@barakahalrizquae.com', displayName: 'Wholesale Sales & RFQ' },
  'orders@barakahalrizquae.com': { channel: 'orders', email: 'orders@barakahalrizquae.com', displayName: 'Website Orders' },
  'habeeb@barakahalrizquae.com': { channel: 'habeeb', email: 'habeeb@barakahalrizquae.com', displayName: 'Managing Director Habeeb Khan' },
};

export async function resolveMailboxByRecipient(toEmail: string): Promise<{ channel: InboxMailbox; email: string; displayName: string } | null> {
  const cleanTo = (toEmail || '').toLowerCase().trim();
  if (!cleanTo) return null;

  // 1. Direct match on official email
  if (ALLOWED_MAILBOXES[cleanTo]) {
    return ALLOWED_MAILBOXES[cleanTo];
  }

  // 2. Match on prefix if sending to official domain (info, sales, orders, habeeb)
  const prefix = cleanTo.split('@')[0] as InboxMailbox;
  const matchEmail = `${prefix}@barakahalrizquae.com`;
  if (ALLOWED_MAILBOXES[matchEmail]) {
    return ALLOWED_MAILBOXES[matchEmail];
  }

  // 3. Match against stored mailboxes
  const mailboxes = await getEmailMailboxes();
  const match = mailboxes.find(m => m.active && (m.email.toLowerCase() === cleanTo || m.channel.toLowerCase() === prefix));
  if (match && ['info', 'sales', 'orders', 'habeeb'].includes(match.channel)) {
    return { channel: match.channel as InboxMailbox, email: match.email, displayName: match.displayName };
  }

  return null;
}

export async function saveEmailMailbox(
  data: Partial<EmailMailbox> & { email: string; displayName: string; channel?: string }
): Promise<EmailMailbox> {
  const cleanEmail = data.email.toLowerCase().trim();
  const channel = (data.channel || cleanEmail.split('@')[0] || 'mailbox').toLowerCase().replace(/[^a-z0-9_-]/g, '');
  const id = data.id || `mailbox-${channel}`;
  const nowISO = new Date().toISOString();

  const record: EmailMailbox = {
    id,
    email: cleanEmail,
    displayName: data.displayName.trim(),
    department: data.department || 'General',
    channel: channel as InboxMailbox,
    active: data.active ?? true,
    createdAt: data.createdAt || nowISO,
    updatedAt: nowISO,
  };

  // 1. Update local JSON fallback
  const local = readLocalMailboxes();
  const idx = local.findIndex(m => m.id === id || m.channel === channel || m.email.toLowerCase() === cleanEmail);
  if (idx !== -1) {
    local[idx] = { ...local[idx], ...record };
  } else {
    local.push(record);
  }
  writeLocalMailboxes(local);

  // 2. Update MongoDB
  try {
    const col = await getEmailMailboxesCollection();
    await col.replaceOne({ _id: id }, { ...record, _id: id } as any, { upsert: true });
    await logActivityToMongo('admin@barakahalrizquae.com', 'MAILBOX_SAVED', id);
  } catch (err) {}

  return record;
}

// ==========================================
// ADMIN INCOMING EMAIL INBOX MESSAGES
// ==========================================

export async function getInboxMessagesCollection(): Promise<Collection<InboxMessage & { _id: string }>> {
  const db = await getDb();
  const col = db.collection<InboxMessage & { _id: string }>("inbox_messages");
  try {
    await col.createIndex({ messageId: 1 }, { unique: true, background: true });
    await col.createIndex({ mailbox: 1, status: 1, receivedAt: -1 }, { background: true });
  } catch {}
  return col;
}

function getLocalInboxMessagesFilePath(): string {
  return path.join(process.cwd(), "data", "barakah", "inbox_messages.json");
}

export function readLocalInboxMessages(): InboxMessage[] {
  try {
    const fp = getLocalInboxMessagesFilePath();
    if (fs.existsSync(fp)) {
      const raw = fs.readFileSync(fp, "utf-8");
      return JSON.parse(raw);
    }
  } catch {}
  return [];
}

export function writeLocalInboxMessages(messages: InboxMessage[]): void {
  try {
    const fp = getLocalInboxMessagesFilePath();
    fs.mkdirSync(path.dirname(fp), { recursive: true });
    fs.writeFileSync(fp, JSON.stringify(messages, null, 2), "utf-8");
  } catch {}
}

export async function getInboxMessages(filter?: {
  mailbox?: string;
  status?: string;
  search?: string;
}): Promise<InboxMessage[]> {
  const localMessages = readLocalInboxMessages();
  let mongoMessages: InboxMessage[] = [];

  try {
    const col = await getInboxMessagesCollection();
    mongoMessages = await col.find({}).sort({ receivedAt: -1 }).toArray();
  } catch (err) {
    // Mongo fallback
  }

  const map = new Map<string, InboxMessage>();
  for (const m of mongoMessages) {
    map.set(m.messageId || m.id, m);
  }
  for (const m of localMessages) {
    const key = m.messageId || m.id;
    const existing = map.get(key);
    if (!existing || new Date(m.updatedAt || m.createdAt).getTime() >= new Date(existing.updatedAt || existing.createdAt).getTime()) {
      map.set(key, m);
    }
  }

  let list = Array.from(map.values()).sort(
    (a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime()
  );

  // Apply filters
  if (filter?.mailbox && filter.mailbox !== 'ALL' && filter.mailbox !== 'all') {
    const mbox = filter.mailbox.toLowerCase().trim();
    list = list.filter(m => m.mailbox.toLowerCase() === mbox);
  }

  if (filter?.status && filter.status !== 'ALL') {
    list = list.filter(m => m.status === filter.status);
  } else {
    // By default, exclude TRASH unless explicitly requested
    list = list.filter(m => m.status !== 'TRASH');
  }

  if (filter?.search) {
    const s = filter.search.toLowerCase().trim();
    list = list.filter(m =>
      m.subject.toLowerCase().includes(s) ||
      m.fromEmail.toLowerCase().includes(s) ||
      m.fromName.toLowerCase().includes(s) ||
      m.toEmail.toLowerCase().includes(s) ||
      m.previewText.toLowerCase().includes(s) ||
      m.textBody.toLowerCase().includes(s)
    );
  }

  return list;
}

export async function getInboxMessageById(id: string): Promise<InboxMessage | null> {
  const local = readLocalInboxMessages();
  const localMatch = local.find(m => m.id === id || m.messageId === id);

  try {
    const col = await getInboxMessagesCollection();
    const mongoMatch = await col.findOne({ $or: [{ _id: id }, { id }, { messageId: id }] });
    if (mongoMatch) return mongoMatch;
  } catch {}

  return localMatch || null;
}

export async function getInboxMessageByMessageId(messageId: string): Promise<InboxMessage | null> {
  const local = readLocalInboxMessages();
  const localMatch = local.find(m => m.messageId === messageId);

  try {
    const col = await getInboxMessagesCollection();
    const mongoMatch = await col.findOne({ messageId });
    if (mongoMatch) return mongoMatch;
  } catch {}

  return localMatch || null;
}

export async function saveIncomingInboxMessage(
  data: Omit<InboxMessage, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'isSpam'> & {
    id?: string;
    status?: InboxMessageStatus;
    isSpam?: boolean;
  }
): Promise<{ message: InboxMessage; isDuplicate: boolean }> {
  // Check Idempotency by messageId
  if (data.messageId) {
    const existing = await getInboxMessageByMessageId(data.messageId);
    if (existing) {
      return { message: existing, isDuplicate: true };
    }
  }

  const id = data.id || `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const nowISO = new Date().toISOString();

  const newRecord: InboxMessage = {
    ...data,
    id,
    status: data.status || 'UNREAD',
    isSpam: data.isSpam ?? false,
    createdAt: nowISO,
    updatedAt: nowISO,
  };

  // 1. Save to local JSON fallback immediately
  const local = readLocalInboxMessages();
  local.unshift(newRecord);
  writeLocalInboxMessages(local);

  // 2. Try MongoDB insertion
  try {
    const col = await getInboxMessagesCollection();
    await col.insertOne({ ...newRecord, _id: id } as any);
    await logActivityToMongo('system', 'INBOX_MESSAGE_RECEIVED', id);
  } catch (err) {
    console.warn("MongoDB saveIncomingInboxMessage fallback to JSON:", (err as Error).message);
  }

  return { message: newRecord, isDuplicate: false };
}

export async function updateInboxMessageStatus(
  id: string,
  targetStatus: InboxMessageStatus
): Promise<InboxMessage | null> {
  const nowISO = new Date().toISOString();
  let updatedRecord: InboxMessage | null = null;

  const updates: Partial<InboxMessage> = {
    status: targetStatus,
    updatedAt: nowISO,
  };

  if (targetStatus === 'READ') {
    updates.readAt = nowISO;
    updates.deletedAt = undefined;
  } else if (targetStatus === 'UNREAD') {
    updates.readAt = undefined;
    updates.deletedAt = undefined;
  } else if (targetStatus === 'TRASH') {
    updates.deletedAt = nowISO;
  } else if (targetStatus === 'REPLIED') {
    updates.repliedAt = nowISO;
    updates.deletedAt = undefined;
  }

  // 1. Update in MongoDB
  try {
    const col = await getInboxMessagesCollection();
    const existing = await col.findOne({ $or: [{ _id: id }, { id }, { messageId: id }] });
    if (existing) {
      const merged: InboxMessage & { _id: string } = {
        ...existing,
        ...updates,
        _id: existing._id,
        id: existing.id,
      };
      await col.replaceOne({ _id: existing._id }, merged, { upsert: true });
      updatedRecord = merged;
      await logActivityToMongo('admin@barakahalrizquae.com', 'INBOX_STATUS_UPDATED', id);
    }
  } catch (err) {}

  // 2. Update local JSON fallback
  const local = readLocalInboxMessages();
  const idx = local.findIndex(m => m.id === id || m.messageId === id);
  if (idx !== -1) {
    local[idx] = {
      ...local[idx],
      ...updates,
    };
    writeLocalInboxMessages(local);
    if (!updatedRecord) updatedRecord = local[idx];
  }

  return updatedRecord;
}

export async function getInboxStats(): Promise<{
  totalCount: number;
  unreadCount: number;
  readCount: number;
  repliedCount: number;
  trashCount: number;
  byMailbox: Record<string, { total: number; unread: number }>;
}> {
  const all = await (async () => {
    const local = readLocalInboxMessages();
    let mongo: InboxMessage[] = [];
    try {
      const col = await getInboxMessagesCollection();
      mongo = await col.find({}).toArray();
    } catch {}
    const map = new Map<string, InboxMessage>();
    for (const m of mongo) map.set(m.messageId || m.id, m);
    for (const m of local) map.set(m.messageId || m.id, m);
    return Array.from(map.values());
  })();

  const stats = {
    totalCount: all.filter(m => m.status !== 'TRASH').length,
    unreadCount: all.filter(m => m.status === 'UNREAD').length,
    readCount: all.filter(m => m.status === 'READ').length,
    repliedCount: all.filter(m => m.status === 'REPLIED').length,
    trashCount: all.filter(m => m.status === 'TRASH').length,
    byMailbox: {} as Record<string, { total: number; unread: number }>,
  };

  const mailboxes = await getEmailMailboxes();
  for (const mbox of mailboxes) {
    stats.byMailbox[mbox.channel] = {
      total: all.filter(m => m.mailbox.toLowerCase() === mbox.channel.toLowerCase() && m.status !== 'TRASH').length,
      unread: all.filter(m => m.mailbox.toLowerCase() === mbox.channel.toLowerCase() && m.status === 'UNREAD').length,
    };
  }

  return stats;
}
