import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getWholesaleOrders, updateWholesaleOrderStatus } from '@/lib/mongodb';
import { WholesaleOrderStatus } from '@/lib/db/types';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const search = (searchParams.get('search') || searchParams.get('q') || '').toLowerCase().trim();
    const status = searchParams.get('status') || 'ALL';
    const orderType = searchParams.get('orderType') || 'ALL';
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const allOrders = await getWholesaleOrders();

    // Compute live metrics across all verified orders
    const metrics = {
      totalOrders: allOrders.length,
      pending: allOrders.filter(o => o.status === 'PENDING').length,
      confirmed: allOrders.filter(o => o.status === 'CONFIRMED').length,
      readyForPickup: allOrders.filter(o => o.status === 'READY_FOR_PICKUP').length,
      completed: allOrders.filter(o => o.status === 'COMPLETED').length,
      cancelled: allOrders.filter(o => o.status === 'CANCELLED').length,
      totalCtn: allOrders.reduce((sum, o) => sum + (o.totalCtn || 0), 0),
      totalOrderPipelineAED: parseFloat(allOrders.reduce((sum, o) => sum + (o.totalAED || 0), 0).toFixed(2)),
      completedSalesAED: parseFloat(allOrders.filter(o => o.status === 'COMPLETED').reduce((sum, o) => sum + (o.totalAED || 0), 0).toFixed(2)),
    };

    let filtered = allOrders;

    if (status !== 'ALL') {
      filtered = filtered.filter(o => o.status === status);
    }

    if (orderType !== 'ALL') {
      filtered = filtered.filter(o => o.orderType === orderType);
    }

    if (startDate) {
      const startMs = new Date(startDate).getTime();
      if (!isNaN(startMs)) {
        filtered = filtered.filter(o => new Date(o.createdAt).getTime() >= startMs);
      }
    }

    if (endDate) {
      const endMs = new Date(endDate).getTime() + (24 * 60 * 60 * 1000); // End of day
      if (!isNaN(endMs)) {
        filtered = filtered.filter(o => new Date(o.createdAt).getTime() <= endMs);
      }
    }

    if (search) {
      filtered = filtered.filter(o =>
        o.id.toLowerCase().includes(search) ||
        o.customerName.toLowerCase().includes(search) ||
        (o.companyName && o.companyName.toLowerCase().includes(search)) ||
        o.phone.includes(search) ||
        (o.email && o.email.toLowerCase().includes(search)) ||
        (o.items && o.items.some(item => item.productName.toLowerCase().includes(search)))
      );
    }

    return NextResponse.json({
      success: true,
      totalCount: allOrders.length,
      filteredCount: filtered.length,
      metrics,
      orders: filtered,
      data: filtered,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch wholesale orders';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required' }, { status: 401 });
  }

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
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to update order status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
