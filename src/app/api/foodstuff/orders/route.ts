import { NextResponse } from 'next/server';
import { createWholesaleOrder, getWholesaleOrders } from '@/lib/mongodb';
import { WholesaleOrderItem } from '@/lib/db/types';
import { sendOrderNotificationAndConfirmation } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      customerName,
      companyName,
      phone,
      email,
      pickupDate,
      pickupTime,
      items,
      notes,
    } = body;

    // 1. Validate customer details
    if (!customerName?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: 'Customer Name, Phone/WhatsApp, and Email are required.' },
        { status: 400 }
      );
    }

    if (!pickupDate?.trim()) {
      return NextResponse.json(
        { error: 'Preferred pickup date is required for store pickup.' },
        { status: 400 }
      );
    }

    // 2. Validate items
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Order must contain at least one wholesale product.' },
        { status: 400 }
      );
    }

    // 3. Validate MOQ per order type
    // Container Wholesale: MOQ 100 CTN
    // Dubai Wholesale: MOQ 10 CTN
    const validatedItems: WholesaleOrderItem[] = [];
    let totalCtn = 0;
    let totalAED = 0;
    let hasContainer = false;
    let hasDubaiWholesale = false;

    for (const it of items) {
      const orderType = it.orderType === 'CONTAINER' ? 'CONTAINER' : 'DUBAI_WHOLESALE';
      const moq = orderType === 'CONTAINER' ? 100 : 10;
      const quantity = Math.floor(Number(it.quantityCtn) || 0);
      const pricePerCtn = Number(it.pricePerCtn) || 0;

      if (quantity < moq) {
        return NextResponse.json(
          {
            error: `MOQ not met for ${it.productName}. ${
              orderType === 'CONTAINER' ? 'Container Wholesale' : 'Dubai Wholesale'
            } requires a minimum of ${moq} CTN (current: ${quantity} CTN).`,
          },
          { status: 400 }
        );
      }

      if (pricePerCtn <= 0) {
        return NextResponse.json(
          { error: `Invalid unit price for product: ${it.productName}` },
          { status: 400 }
        );
      }

      if (orderType === 'CONTAINER') hasContainer = true;
      else hasDubaiWholesale = true;

      const lineTotal = parseFloat((pricePerCtn * quantity).toFixed(2));
      totalCtn += quantity;
      totalAED += lineTotal;

      validatedItems.push({
        productId: String(it.productId),
        productName: String(it.productName),
        productArabicName: it.productArabicName ? String(it.productArabicName) : undefined,
        orderType,
        packagingUnit: it.packagingUnit ? String(it.packagingUnit) : 'CTN',
        pricePerCtn,
        quantityCtn: quantity,
        lineTotalAED: lineTotal,
        moq,
        image: it.image ? String(it.image) : undefined,
      });
    }

    totalAED = parseFloat(totalAED.toFixed(2));

    const overallOrderType: 'CONTAINER' | 'DUBAI_WHOLESALE' | 'MIXED' =
      hasContainer && hasDubaiWholesale
        ? 'MIXED'
        : hasContainer
        ? 'CONTAINER'
        : 'DUBAI_WHOLESALE';

    const pickupLocation =
      overallOrderType === 'CONTAINER'
        ? 'Container Pickup / Collection — Barakah Al Rizq Logistics & Port Warehouse, Dubai'
        : 'Store Pickup — Barakah Al Rizq, Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai';

    // 4. Create persistent order
    const order = await createWholesaleOrder({
      customerName: customerName.trim(),
      companyName: companyName?.trim() || undefined,
      phone: phone.trim(),
      email: email.trim(),
      pickupDate: pickupDate.trim(),
      pickupTime: pickupTime?.trim() || 'Morning Session (07:00 - 11:00)',
      pickupLocation,
      orderType: overallOrderType,
      items: validatedItems,
      totalCtn,
      totalAED,
      notes: notes?.trim() || undefined,
      status: 'PENDING',
    });

    // 5. Send order notification and customer confirmation via orders@
    let emailDispatched = false;
    try {
      const emailRes = await sendOrderNotificationAndConfirmation(order);
      emailDispatched = emailRes.success;
    } catch (mailErr: any) {
      console.error('[ORDER EMAIL DISPATCH ERROR]:', mailErr?.message || mailErr);
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      order,
      emailDispatched,
      message: 'Wholesale order registered successfully for store pickup.',
    });
  } catch (err: any) {
    console.error('Failed to create wholesale order:', err);
    return NextResponse.json(
      { error: 'Internal server error while processing wholesale order', details: err?.message },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get('orderId');
    const phone = searchParams.get('phone');

    const orders = await getWholesaleOrders();

    if (orderId) {
      const match = orders.find(
        (o) =>
          o.id.toLowerCase() === orderId.toLowerCase() &&
          (!phone || o.phone.replace(/\D/g, '').endsWith(phone.replace(/\D/g, '')))
      );
      if (!match) {
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, order: match });
    }

    return NextResponse.json({ success: true, total: orders.length });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to retrieve orders' }, { status: 500 });
  }
}
