import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getWholesaleOrders, getWholesalePayments } from '@/lib/mongodb';
import { WholesaleOrderStatus } from '@/lib/db/types';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const search = (searchParams.get('search') || searchParams.get('q') || '').toLowerCase().trim();
    const orderStatus = searchParams.get('orderStatus') || searchParams.get('status') || 'ALL';
    const paymentStatusFilter = searchParams.get('paymentStatus') || 'ALL';
    const orderType = searchParams.get('orderType') || 'ALL';
    const customer = (searchParams.get('customer') || '').toLowerCase().trim();
    const product = (searchParams.get('product') || '').toLowerCase().trim();
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const [allOrders, allPayments] = await Promise.all([
      getWholesaleOrders(),
      getWholesalePayments(),
    ]);

    // Map payments to orders
    // Map orderId -> { validPaid: number, refunded: number }
    const paymentMap = new Map<string, { validPaid: number; refunded: number; paymentsCount: number; lastPaymentDate?: string }>();
    for (const p of allPayments) {
      const cur = paymentMap.get(p.orderId) || { validPaid: 0, refunded: 0, paymentsCount: 0 };
      cur.paymentsCount++;
      if (p.status === 'VALID') {
        cur.validPaid += p.amountAED;
        if (!cur.lastPaymentDate || new Date(p.paymentDate).getTime() > new Date(cur.lastPaymentDate).getTime()) {
          cur.lastPaymentDate = p.paymentDate;
        }
      } else if (p.status === 'REFUNDED') {
        cur.refunded += p.amountAED;
      }
      paymentMap.set(p.orderId, cur);
    }

    // Enrich orders with payment data
    const enrichedSales = allOrders.map((o) => {
      const pInfo = paymentMap.get(o.id) || { validPaid: 0, refunded: 0, paymentsCount: 0 };
      const netPaidAED = parseFloat(pInfo.validPaid.toFixed(2));
      const refundedAED = parseFloat(pInfo.refunded.toFixed(2));
      const outstandingAED = o.status === 'CANCELLED'
        ? 0
        : parseFloat(Math.max(0, o.totalAED - netPaidAED).toFixed(2));

      let paymentStatus: 'PAID' | 'PARTIALLY_PAID' | 'UNPAID' = 'UNPAID';
      if (netPaidAED >= o.totalAED - 0.05 && o.totalAED > 0) {
        paymentStatus = 'PAID';
      } else if (netPaidAED > 0) {
        paymentStatus = 'PARTIALLY_PAID';
      }

      return {
        ...o,
        saleDate: o.pickupDate || o.createdAt.slice(0, 10),
        netPaidAED,
        refundedAED,
        outstandingBalanceAED: outstandingAED,
        paymentStatus,
        paymentsCount: pInfo.paymentsCount,
        lastPaymentDate: pInfo.lastPaymentDate,
      };
    });

    // Compute separate, accurate financial metrics across ALL real records
    let totalConfirmedOrderValueAED = 0;
    let totalCompletedSalesValueAED = 0;
    let totalPendingOrderValueAED = 0;
    let totalCancelledOrderValueAED = 0;
    let totalCtnSold = 0; // Strictly from COMPLETED orders
    let totalPipelineCtn = 0; // From active, non-cancelled orders
    let completedCount = 0;
    let pendingCount = 0;
    let confirmedCount = 0;
    let cancelledCount = 0;

    for (const s of enrichedSales) {
      if (s.status === 'COMPLETED') {
        completedCount++;
        totalCompletedSalesValueAED += s.totalAED;
        totalConfirmedOrderValueAED += s.totalAED;
        totalCtnSold += s.totalCtn || 0;
        totalPipelineCtn += s.totalCtn || 0;
      } else if (s.status === 'CONFIRMED' || s.status === 'READY_FOR_PICKUP') {
        confirmedCount++;
        totalConfirmedOrderValueAED += s.totalAED;
        totalPipelineCtn += s.totalCtn || 0;
      } else if (s.status === 'PENDING') {
        pendingCount++;
        totalPendingOrderValueAED += s.totalAED;
        totalPipelineCtn += s.totalCtn || 0;
      } else if (s.status === 'CANCELLED') {
        cancelledCount++;
        totalCancelledOrderValueAED += s.totalAED;
      }
    }

    // Verified payments collected
    const totalValidPaymentsReceivedAED = parseFloat(
      allPayments
        .filter((p) => p.status === 'VALID')
        .reduce((sum, p) => sum + p.amountAED, 0)
        .toFixed(2)
    );

    const totalRefundedPaymentsAED = parseFloat(
      allPayments
        .filter((p) => p.status === 'REFUNDED')
        .reduce((sum, p) => sum + p.amountAED, 0)
        .toFixed(2)
    );

    const totalReversedPaymentsAED = parseFloat(
      allPayments
        .filter((p) => p.status === 'REVERSED')
        .reduce((sum, p) => sum + p.amountAED, 0)
        .toFixed(2)
    );

    const outstandingReceivablesAED = parseFloat(
      Math.max(0, totalConfirmedOrderValueAED - totalValidPaymentsReceivedAED).toFixed(2)
    );

    const metrics = {
      totalOrdersCount: enrichedSales.length,
      completedSalesCount: completedCount,
      pendingOrdersCount: pendingCount,
      confirmedOrdersCount: confirmedCount,
      cancelledOrdersCount: cancelledCount,
      totalConfirmedOrderValueAED: parseFloat(totalConfirmedOrderValueAED.toFixed(2)),
      totalCompletedSalesValueAED: parseFloat(totalCompletedSalesValueAED.toFixed(2)),
      totalPendingOrderValueAED: parseFloat(totalPendingOrderValueAED.toFixed(2)),
      totalCancelledOrderValueAED: parseFloat(totalCancelledOrderValueAED.toFixed(2)),
      totalValidPaymentsReceivedAED,
      totalRefundedPaymentsAED,
      totalReversedPaymentsAED,
      outstandingReceivablesAED,
      totalCtnSold,
      totalPipelineCtn,
      averageCompletedSaleValueAED: completedCount > 0
        ? parseFloat((totalCompletedSalesValueAED / completedCount).toFixed(2))
        : 0,
    };

    // Apply Filters
    let filtered = enrichedSales;

    if (orderStatus !== 'ALL') {
      filtered = filtered.filter((s) => s.status === orderStatus);
    }

    if (paymentStatusFilter !== 'ALL') {
      filtered = filtered.filter((s) => s.paymentStatus === paymentStatusFilter);
    }

    if (orderType !== 'ALL') {
      filtered = filtered.filter((s) => s.orderType === orderType);
    }

    if (customer) {
      filtered = filtered.filter((s) =>
        s.customerName.toLowerCase().includes(customer) ||
        (s.companyName && s.companyName.toLowerCase().includes(customer)) ||
        s.phone.includes(customer)
      );
    }

    if (product) {
      filtered = filtered.filter((s) =>
        s.items && s.items.some((it) => it.productName.toLowerCase().includes(product))
      );
    }

    if (startDate) {
      const startMs = new Date(startDate).getTime();
      if (!isNaN(startMs)) {
        filtered = filtered.filter((s) => new Date(s.saleDate || s.createdAt).getTime() >= startMs);
      }
    }

    if (endDate) {
      const endMs = new Date(endDate).getTime() + 24 * 60 * 60 * 1000;
      if (!isNaN(endMs)) {
        filtered = filtered.filter((s) => new Date(s.saleDate || s.createdAt).getTime() <= endMs);
      }
    }

    if (search) {
      filtered = filtered.filter((s) =>
        s.id.toLowerCase().includes(search) ||
        s.customerName.toLowerCase().includes(search) ||
        (s.companyName && s.companyName.toLowerCase().includes(search)) ||
        s.phone.includes(search) ||
        (s.items && s.items.some((it) => it.productName.toLowerCase().includes(search))) ||
        (s.notes && s.notes.toLowerCase().includes(search))
      );
    }

    return NextResponse.json({
      success: true,
      totalCount: enrichedSales.length,
      filteredCount: filtered.length,
      metrics,
      sales: filtered,
      data: filtered,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch sales history.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
