import { NextResponse } from 'next/server';
import { getWholesaleOrders, updateWholesaleOrderStatus } from '@/lib/mongodb';
import { WholesaleOrderStatus } from '@/lib/db/types';

export async function GET() {
  try {
    const orders = await getWholesaleOrders();
    return NextResponse.json({ success: true, orders });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to fetch wholesale orders' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status, notes } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'Order ID and status are required' }, { status: 400 });
    }

    const validStatuses: WholesaleOrderStatus[] = [
      'PENDING',
      'CONFIRMED',
      'READY_FOR_PICKUP',
      'COMPLETED',
      'CANCELLED',
    ];

    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` }, { status: 400 });
    }

    const updated = await updateWholesaleOrderStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, order: updated });
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to update order status' }, { status: 500 });
  }
}
