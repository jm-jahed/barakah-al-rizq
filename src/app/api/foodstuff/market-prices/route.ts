import { NextResponse } from 'next/server';
import { 
  getFoodstuffSchedule, 
  getFoodstuffProducts, 
  getFoodstuffMarketPrices 
} from '@/lib/mongodb';
import { 
  getDynamicUAESession, 
  computeFreshnessStatus, 
  formatUAEDateTime, 
  calculatePricePerKg 
} from '@/lib/foodstuff/utils';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get('category') || 'ALL';
    const sessionFilter = searchParams.get('session') || 'ALL';
    const search = (searchParams.get('search') || '').toLowerCase().trim();

    const [schedule, products, marketPrices] = await Promise.all([
      getFoodstuffSchedule(),
      getFoodstuffProducts(),
      getFoodstuffMarketPrices(),
    ]);

    const dynamicSessionInfo = getDynamicUAESession(schedule);

    const items = marketPrices.map((mp) => {
      const prod = products.find((p) => p.id === mp.productId);
      if (!prod || !prod.published) return null;

      const calcKg = calculatePricePerKg(mp.priceAED, mp.netWeightKg);
      const freshnessInfo = computeFreshnessStatus(
        mp.lastUpdated,
        mp.businessStatus,
        mp.priceAED,
        mp.marketSession,
        schedule.staleThresholdHours
      );

      return {
        id: mp.id,
        productId: prod.id,
        productName: prod.name,
        productArabicName: prod.arabicName,
        category: prod.category,
        origin: prod.origin,
        grade: prod.grade,
        variety: prod.variety,
        image: prod.image,
        description: prod.description,
        marketLocation: mp.marketLocation,
        packagingUnit: mp.packagingUnit,
        packagingDetails: mp.packagingDetails,
        netWeightKg: mp.netWeightKg,
        priceAED: mp.priceAED,
        previousPriceAED: mp.previousPriceAED,
        changePercent: mp.changePercent,
        trend: mp.trend,
        calculatedPricePerKg: calcKg,
        minPurchaseQty: mp.minPurchaseQty,
        qualityGrade: mp.qualityGrade,
        marketSession: mp.marketSession,
        businessStatus: mp.businessStatus,
        freshnessStatus: freshnessInfo.freshness,
        isStale: freshnessInfo.isStale,
        freshnessLabel: freshnessInfo.label,
        lastUpdatedISO: mp.lastUpdated,
        lastUpdatedUAE: formatUAEDateTime(mp.lastUpdated),
        updateSource: mp.updateSource,
      };
    }).filter((item): item is NonNullable<typeof item> => item !== null);

    let filteredItems = items;

    if (category !== 'ALL') {
      filteredItems = filteredItems.filter((item) => item.category === category);
    }

    if (sessionFilter !== 'ALL') {
      filteredItems = filteredItems.filter((item) => item.marketSession === sessionFilter);
    }

    if (search) {
      filteredItems = filteredItems.filter((item) => 
        item.productName.toLowerCase().includes(search) ||
        item.productArabicName.includes(search) ||
        item.origin.toLowerCase().includes(search) ||
        item.packagingDetails.toLowerCase().includes(search)
      );
    }

    return NextResponse.json({
      success: true,
      market: 'Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai',
      activeSession: dynamicSessionInfo.session,
      currentTimeUAE: dynamicSessionInfo.currentTimeUAE,
      lastSyncUAE: formatUAEDateTime(schedule.lastSyncAt),
      totalCount: filteredItems.length,
      items: filteredItems,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch market prices';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
