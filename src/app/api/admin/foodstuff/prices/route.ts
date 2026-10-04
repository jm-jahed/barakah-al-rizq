import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getDynamicUAESession } from '@/lib/foodstuff/utils';
import { FoodstuffPriceSource } from '@/lib/db/types';
import {
  getFoodstuffSchedule,
  getFoodstuffProducts,
  getFoodstuffContainerPrices,
  getFoodstuffMarketPrices,
  getFoodstuffPriceHistory,
  updateFoodstuffContainerPrice,
  updateFoodstuffMarketPrice,
} from '@/lib/mongodb';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [schedule, products, containerPrices, marketPrices, priceHistory] = await Promise.all([
    getFoodstuffSchedule(),
    getFoodstuffProducts(),
    getFoodstuffContainerPrices(),
    getFoodstuffMarketPrices(),
    getFoodstuffPriceHistory(50),
  ]);

  const dynamicSessionInfo = getDynamicUAESession(schedule);

  return NextResponse.json({
    success: true,
    dynamicSession: dynamicSessionInfo,
    schedule,
    products,
    containerPrices,
    marketPrices,
    priceHistory,
  });
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { type, id, updates, source } = body;

    if (!type || !id) {
      return NextResponse.json({ error: 'Missing type or id' }, { status: 400 });
    }

    if (type !== 'CONTAINER' && type !== 'DUBAI_MARKET') {
      return NextResponse.json({ error: 'Invalid price type' }, { status: 400 });
    }

    // Sanitize numeric inputs
    if (updates.priceAED !== undefined && updates.priceAED !== null) {
      const parsedPrice = parseFloat(updates.priceAED);
      if (isNaN(parsedPrice) || parsedPrice < 0) {
        return NextResponse.json({ error: 'Price must be a positive number or null' }, { status: 400 });
      }
      updates.priceAED = parsedPrice;
    }

    if (updates.netWeightKg !== undefined && updates.netWeightKg !== null) {
      const parsedWeight = parseFloat(updates.netWeightKg);
      if (isNaN(parsedWeight) || parsedWeight <= 0) {
        updates.netWeightKg = null;
      } else {
        updates.netWeightKg = parsedWeight;
      }
    }

    const priceSource: FoodstuffPriceSource = source || (type === 'CONTAINER' ? 'ADMIN_VERIFIED_RATE_SHEET' : 'AL_AWEER_MARKET_UPDATE');

    let updatedRecord = null;
    if (type === 'CONTAINER') {
      updatedRecord = await updateFoodstuffContainerPrice(id, updates, session.email, priceSource);
    } else {
      updatedRecord = await updateFoodstuffMarketPrice(id, updates, session.email, priceSource);
    }

    if (!updatedRecord) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }

    const history = await getFoodstuffPriceHistory(20);

    return NextResponse.json({
      success: true,
      record: updatedRecord,
      history,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update price';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
