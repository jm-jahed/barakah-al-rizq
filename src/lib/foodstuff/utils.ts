import {
  FoodstuffProduct,
  FoodstuffContainerPrice,
  FoodstuffMarketPrice,
  FoodstuffUpdateSchedule,
  FoodstuffSession,
  FoodstuffFreshnessStatus,
  FoodstuffBusinessStatus
} from '../db/types';
import { INITIAL_PRODUCTS } from '../../data/barakahData';

export const DEFAULT_FOODSTUFF_SCHEDULE: FoodstuffUpdateSchedule = {
  morningTime: '06:30',
  middayTime: '12:30',
  eveningTime: '18:00',
  timezone: 'Asia/Dubai',
  staleThresholdHours: 8,
  lastSyncAt: null,
  autoFeedEnabled: false,
};

/**
 * Format any ISO string into a canonical, human-friendly UAE GST timestamp.
 */
export function formatUAEDateTime(isoString: string | null | undefined): string {
  if (!isoString) return 'Not Yet Updated';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'Invalid Date';
    return new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Dubai',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(d) + ' GST';
  } catch {
    return 'Invalid Date';
  }
}

/**
 * Get current UAE date and time formatted string.
 */
export function getCurrentUAEDateTime(): string {
  return formatUAEDateTime(new Date().toISOString());
}

/**
 * Dynamically computes the current UAE trading session based on Asia/Dubai local time.
 */
export function getDynamicUAESession(schedule: FoodstuffUpdateSchedule = DEFAULT_FOODSTUFF_SCHEDULE): {
  session: FoodstuffSession;
  currentTimeUAE: string;
  morningTime: string;
  middayTime: string;
  eveningTime: string;
} {
  const now = new Date();
  const uaeTimeStr = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Dubai',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(now);

  const [hours, minutes] = uaeTimeStr.split(':').map(Number);
  const currentMinutes = hours * 60 + minutes;

  const [mH, mM] = (schedule.morningTime || '06:30').split(':').map(Number);
  const [dH, dM] = (schedule.middayTime || '12:30').split(':').map(Number);
  const [eH, eM] = (schedule.eveningTime || '18:00').split(':').map(Number);

  const morningMinutes = mH * 60 + mM;
  const middayMinutes = dH * 60 + dM;
  const eveningMinutes = eH * 60 + eM;

  let session: FoodstuffSession = 'EVENING';
  if (currentMinutes >= morningMinutes && currentMinutes < middayMinutes) {
    session = 'MORNING';
  } else if (currentMinutes >= middayMinutes && currentMinutes < eveningMinutes) {
    session = 'MIDDAY';
  } else {
    session = 'EVENING';
  }

  return {
    session,
    currentTimeUAE: formatUAEDateTime(now.toISOString()),
    morningTime: schedule.morningTime,
    middayTime: schedule.middayTime,
    eveningTime: schedule.eveningTime,
  };
}

/**
 * Calculates price per KG strictly when priceAED > 0 and netWeightKg > 0.
 * Otherwise returns null.
 */
export function calculatePricePerKg(
  priceAED: number | null | undefined,
  netWeightKg: number | null | undefined
): number | null {
  if (
    priceAED !== null &&
    priceAED !== undefined &&
    priceAED > 0 &&
    netWeightKg !== null &&
    netWeightKg !== undefined &&
    netWeightKg > 0
  ) {
    return parseFloat((priceAED / netWeightKg).toFixed(2));
  }
  return null;
}

/**
 * Evaluates the dynamic freshness status of a price record.
 * Strict LIVE definition:
 * - businessStatus must be 'AVAILABLE'
 * - priceAED must be > 0
 * - must not be stale (elapsed <= threshold)
 * - updated in the current session window
 */
export function computeFreshnessStatus(
  lastUpdated: string | null | undefined,
  businessStatus: FoodstuffBusinessStatus,
  priceAED: number | null | undefined,
  recordSession?: string | null,
  staleThresholdHours: number = 8
): {
  freshness: FoodstuffFreshnessStatus;
  isStale: boolean;
  label: string;
} {
  if (businessStatus === 'PRICE_ON_REQUEST' || priceAED === null || priceAED === undefined || priceAED <= 0 || !lastUpdated) {
    return { freshness: 'UPDATED', isStale: false, label: 'PRICE ON REQUEST' };
  }

  if (businessStatus === 'OUT_OF_STOCK') {
    return { freshness: 'UPDATED', isStale: false, label: 'OUT OF STOCK' };
  }

  const updatedTime = Date.parse(lastUpdated);
  if (isNaN(updatedTime)) {
    return { freshness: 'STALE', isStale: true, label: 'STALE — Confirm Rate' };
  }

  const elapsedHours = (Date.now() - updatedTime) / (1000 * 60 * 60);

  if (elapsedHours > staleThresholdHours) {
    return { freshness: 'STALE', isStale: true, label: 'STALE — Please confirm today\'s rate' };
  }

  const currentSession = getDynamicUAESession().session;
  const isCurrentSession = recordSession === currentSession;

  if (isCurrentSession && elapsedHours <= staleThresholdHours) {
    return { freshness: 'LIVE', isStale: false, label: 'LIVE' };
  }

  return { freshness: 'UPDATED', isStale: false, label: 'UPDATED' };
}

/**
 * Helper to parse net weight from verified packaging strings in barakahData.ts.
 */
function extractNetWeightFromPackaging(pkg: string): { unit: string; details: string; weight: number | null } {
  if (pkg.includes('6kg Wooden Box')) return { unit: 'BOX', details: '6 KG Wooden Box', weight: 6.0 };
  if (pkg.includes('10kg Mesh Bag')) return { unit: 'BAG', details: '10 KG Mesh Bag', weight: 10.0 };
  if (pkg.includes('10kg Polybag')) return { unit: 'CTN', details: '10 KG Polybag Carton', weight: 10.0 };
  if (pkg.includes('5kg Carton')) return { unit: 'BOX', details: '5 KG Carton', weight: 5.0 };
  if (pkg.includes('13.5kg Carton')) return { unit: 'BOX', details: '13.5 KG Telescopic Box', weight: 13.5 };
  if (pkg.includes('15kg Telescopic')) return { unit: 'CTN', details: '15 KG Telescopic Carton', weight: 15.0 };
  if (pkg.includes('18kg Bush')) return { unit: 'CTN', details: '18 KG Bush Carton', weight: 18.0 };
  if (pkg.includes('20kg')) return { unit: 'BAG', details: '20 KG Fabric Bag', weight: 20.0 };
  if (pkg.includes('25kg')) return { unit: 'BAG', details: '25 KG PP Woven Bag', weight: 25.0 };
  if (pkg.includes('5kg Aroma')) return { unit: 'CTN', details: '5 KG Master Carton', weight: 5.0 };
  return { unit: 'BOX', details: pkg.split('/')[0].trim() || 'Standard Wholesale Package', weight: null };
}

/**
 * Idempotently extracts the 12 verified products from barakahData.ts.
 * Does NOT generate fake prices. All initial price records have priceAED: null.
 */
export function getInitialFoodstuffProducts(): FoodstuffProduct[] {
  const now = new Date().toISOString();
  return INITIAL_PRODUCTS.map((item) => {
    const pkgInfo = extractNetWeightFromPackaging(item.packaging);
    return {
      id: item.id,
      name: item.name,
      arabicName: item.arabicName,
      category: item.category,
      origin: item.origin,
      variety: undefined,
      grade: 'GRADE A (PREMIUM)',
      size: undefined,
      image: item.image,
      description: item.description,
      defaultPackagingUnit: pkgInfo.unit,
      defaultPackagingDetails: pkgInfo.details,
      defaultNetWeightKg: pkgInfo.weight,
      defaultMoq: item.minOrderQuantity,
      published: true,
      createdAt: now,
      updatedAt: now,
    };
  });
}

/**
 * Initial empty / PRICE_ON_REQUEST container prices for the 12 verified products.
 * ZERO INVENTED PRICES: priceAED is strictly null, status is PRICE_ON_REQUEST.
 */
export function getInitialContainerPrices(products: FoodstuffProduct[]): FoodstuffContainerPrice[] {
  return products.map((prod) => ({
    id: `cp-${prod.id}`,
    productId: prod.id,
    importerSupplierName: 'Barakah Direct Import Desk',
    packagingUnit: prod.defaultPackagingUnit,
    packagingDetails: prod.defaultPackagingDetails,
    netWeightKg: prod.defaultNetWeightKg,
    priceAED: null, // Strictly null until admin logs verified rate
    calculatedPricePerKg: null,
    moq: prod.defaultMoq || '1x40ft FCL',
    containerAvailability: 'Prompt Inquiry — Al Aweer Staging Cold Store',
    portOfArrival: 'Jebel Ali Port, Dubai',
    businessStatus: 'PRICE_ON_REQUEST' as FoodstuffBusinessStatus,
    validUntil: null,
    lastUpdated: null,
    updateSession: null,
    updateSource: null,
    updatedBy: null,
    quotationNotes: 'Indicative container quotation. Contact direct import desk to lock booking.',
  }));
}

/**
 * Initial empty / PRICE_ON_REQUEST Dubai Market spot prices for the 12 verified products.
 * ZERO INVENTED PRICES: priceAED is strictly null, status is PRICE_ON_REQUEST.
 */
export function getInitialMarketPrices(products: FoodstuffProduct[]): FoodstuffMarketPrice[] {
  return products.map((prod) => ({
    id: `mp-${prod.id}`,
    productId: prod.id,
    marketLocation: 'Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai',
    packagingUnit: prod.defaultPackagingUnit,
    packagingDetails: prod.defaultPackagingDetails,
    netWeightKg: prod.defaultNetWeightKg,
    priceAED: null, // Strictly null until admin logs verified rate
    previousPriceAED: null,
    changePercent: null,
    trend: null,
    calculatedPricePerKg: null,
    minPurchaseQty: '10 Units',
    qualityGrade: 'Grade A Market Fresh',
    marketSession: null,
    businessStatus: 'PRICE_ON_REQUEST' as FoodstuffBusinessStatus,
    lastUpdated: null,
    updateSource: null,
    updatedBy: null,
  }));
}
