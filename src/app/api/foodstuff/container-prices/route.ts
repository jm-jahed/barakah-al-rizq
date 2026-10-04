import { NextResponse } from 'next/server';
import { 
  getFoodstuffSchedule, 
  getFoodstuffProducts, 
  getFoodstuffContainerPrices 
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
    const origin = searchParams.get('origin') || 'ALL';
    const packaging = searchParams.get('packaging') || 'ALL';
    const search = (searchParams.get('search') || '').toLowerCase().trim();

    const [schedule, products, containerPrices] = await Promise.all([
      getFoodstuffSchedule(),
      getFoodstuffProducts(),
      getFoodstuffContainerPrices(),
    ]);

    const dynamicSessionInfo = getDynamicUAESession(schedule);

    const items = containerPrices.map((cp) => {
      const prod = products.find((p) => p.id === cp.productId);
      if (!prod || !prod.published) return null;

      const calcKg = calculatePricePerKg(cp.priceAED, cp.netWeightKg);
      const freshnessInfo = computeFreshnessStatus(
        cp.lastUpdated,
        cp.businessStatus,
        cp.priceAED,
        cp.updateSession,
        schedule.staleThresholdHours
      );

      return {
        id: cp.id,
        productId: prod.id,
        productName: prod.name,
        productArabicName: prod.arabicName,
        category: prod.category,
        origin: prod.origin,
        grade: prod.grade,
        variety: prod.variety,
        size: prod.size,
        image: prod.image,
        description: prod.description,
        importerSupplierName: cp.importerSupplierName,
        packagingUnit: cp.packagingUnit,
        packagingDetails: cp.packagingDetails,
        netWeightKg: cp.netWeightKg,
        priceAED: cp.priceAED,
        calculatedPricePerKg: calcKg,
        moq: cp.moq,
        containerAvailability: cp.containerAvailability,
        portOfArrival: cp.portOfArrival || 'Jebel Ali Port, Dubai',
        businessStatus: cp.businessStatus,
        freshnessStatus: freshnessInfo.freshness,
        isStale: freshnessInfo.isStale,
        freshnessLabel: freshnessInfo.label,
        lastUpdatedISO: cp.lastUpdated,
        lastUpdatedUAE: formatUAEDateTime(cp.lastUpdated),
        updateSession: cp.updateSession,
        updateSource: cp.updateSource,
        quotationNotes: cp.quotationNotes,
      };
    }).filter((item): item is NonNullable<typeof item> => item !== null);

    // Filters
    let filteredItems = items;

    if (category !== 'ALL') {
      filteredItems = filteredItems.filter((item) => item.category === category);
    }

    if (origin !== 'ALL') {
      filteredItems = filteredItems.filter((item) => item.origin.toLowerCase().includes(origin.toLowerCase()));
    }

    if (packaging !== 'ALL') {
      filteredItems = filteredItems.filter((item) => item.packagingUnit === packaging);
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
      lastSyncUAE: formatUAEDateTime(schedule.lastSyncAt),
      activeSession: dynamicSessionInfo.session,
      currentTimeUAE: dynamicSessionInfo.currentTimeUAE,
      totalCount: filteredItems.length,
      items: filteredItems,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch container prices';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
