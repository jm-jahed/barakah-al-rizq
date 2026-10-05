import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { getWholesaleOrders, getWholesalePayments } from '@/lib/mongodb';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const period = searchParams.get('period') || 'all'; // all, today, week, month, year, custom
    const orderType = searchParams.get('orderType') || 'ALL';
    const customerFilter = (searchParams.get('customer') || '').toLowerCase().trim();
    const productFilter = (searchParams.get('product') || '').toLowerCase().trim();
    const customStartDate = searchParams.get('startDate');
    const customEndDate = searchParams.get('endDate');

    const [allOrders, allPayments] = await Promise.all([
      getWholesaleOrders(),
      getWholesalePayments(),
    ]);

    // Determine Date Window
    const now = new Date();
    let startMs = 0;
    let endMs = Infinity;

    if (period === 'today') {
      const todayStr = now.toISOString().slice(0, 10);
      startMs = new Date(`${todayStr}T00:00:00.000Z`).getTime();
      endMs = new Date(`${todayStr}T23:59:59.999Z`).getTime();
    } else if (period === 'week') {
      const day = now.getDay();
      const diffToMonday = (day + 6) % 7;
      const monday = new Date(now);
      monday.setDate(now.getDate() - diffToMonday);
      monday.setHours(0, 0, 0, 0);
      startMs = monday.getTime();
      endMs = now.getTime() + 86400000;
    } else if (period === 'month') {
      const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      startMs = firstOfMonth.getTime();
      endMs = now.getTime() + 86400000;
    } else if (period === 'year') {
      const firstOfYear = new Date(now.getFullYear(), 0, 1);
      startMs = firstOfYear.getTime();
      endMs = now.getTime() + 86400000;
    } else if (period === 'custom' && customStartDate) {
      startMs = new Date(customStartDate).getTime();
      if (customEndDate) {
        endMs = new Date(customEndDate).getTime() + 86400000;
      }
    }

    // Filter Orders by Date & Controls
    let filteredOrders = allOrders.filter((o) => {
      const orderDateMs = new Date(o.pickupDate || o.createdAt).getTime();
      if (orderDateMs < startMs || orderDateMs > endMs) return false;
      if (orderType !== 'ALL' && o.orderType !== orderType) return false;
      if (customerFilter) {
        const matchesCust =
          o.customerName.toLowerCase().includes(customerFilter) ||
          (o.companyName && o.companyName.toLowerCase().includes(customerFilter)) ||
          o.phone.includes(customerFilter);
        if (!matchesCust) return false;
      }
      if (productFilter) {
        const matchesProd = o.items && o.items.some((it) => it.productName.toLowerCase().includes(productFilter));
        if (!matchesProd) return false;
      }
      return true;
    });

    // Filter Payments in period
    const filteredPayments = allPayments.filter((p) => {
      const payMs = new Date(p.paymentDate || p.createdAt).getTime();
      if (payMs < startMs || payMs > endMs) return false;
      return true;
    });

    // Map order ID to valid payments
    const orderPaidMap = new Map<string, number>();
    for (const p of allPayments) {
      if (p.status === 'VALID') {
        orderPaidMap.set(p.orderId, (orderPaidMap.get(p.orderId) || 0) + p.amountAED);
      }
    }

    // 1. Executive KPIs (Separate Financial Metrics)
    let totalCompletedSalesValueAED = 0;
    let totalConfirmedOrderValueAED = 0;
    let totalPendingOrderValueAED = 0;
    let totalCancelledOrderValueAED = 0;
    let totalCtnSold = 0; // Strictly from COMPLETED orders
    let completedOrdersCount = 0;
    let cancelledOrdersCount = 0;
    let pendingOrdersCount = 0;
    let confirmedOrdersCount = 0;

    for (const o of filteredOrders) {
      if (o.status === 'COMPLETED') {
        completedOrdersCount++;
        totalCompletedSalesValueAED += o.totalAED;
        totalConfirmedOrderValueAED += o.totalAED;
        totalCtnSold += o.totalCtn || 0;
      } else if (o.status === 'CONFIRMED' || o.status === 'READY_FOR_PICKUP') {
        confirmedOrdersCount++;
        totalConfirmedOrderValueAED += o.totalAED;
      } else if (o.status === 'PENDING') {
        pendingOrdersCount++;
        totalPendingOrderValueAED += o.totalAED;
      } else if (o.status === 'CANCELLED') {
        cancelledOrdersCount++;
        totalCancelledOrderValueAED += o.totalAED;
      }
    }

    const totalValidPaymentsReceivedAED = parseFloat(
      filteredPayments
        .filter((p) => p.status === 'VALID')
        .reduce((sum, p) => sum + p.amountAED, 0)
        .toFixed(2)
    );

    const totalRefundedPaymentsAED = parseFloat(
      filteredPayments
        .filter((p) => p.status === 'REFUNDED')
        .reduce((sum, p) => sum + p.amountAED, 0)
        .toFixed(2)
    );

    const outstandingReceivablesAED = parseFloat(
      Math.max(0, totalConfirmedOrderValueAED - totalValidPaymentsReceivedAED).toFixed(2)
    );

    const averageCompletedSaleValueAED = completedOrdersCount > 0
      ? parseFloat((totalCompletedSalesValueAED / completedOrdersCount).toFixed(2))
      : 0;

    const cancellationRate = filteredOrders.length > 0
      ? parseFloat(((cancelledOrdersCount / filteredOrders.length) * 100).toFixed(1))
      : 0;

    // 2. Timeline Aggregations
    const timelineMap = new Map<string, {
      periodLabel: string;
      completedSalesAED: number;
      confirmedOrdersAED: number;
      paymentsReceivedAED: number;
      ordersCount: number;
      ctnSold: number;
    }>();

    for (const o of filteredOrders) {
      const rawDate = o.pickupDate || o.createdAt.slice(0, 10);
      const label = (period === 'year' || period === 'all')
        ? rawDate.slice(0, 7) // YYYY-MM
        : rawDate; // YYYY-MM-DD

      const cur = timelineMap.get(label) || {
        periodLabel: label,
        completedSalesAED: 0,
        confirmedOrdersAED: 0,
        paymentsReceivedAED: 0,
        ordersCount: 0,
        ctnSold: 0,
      };

      cur.ordersCount++;
      if (o.status === 'COMPLETED') {
        cur.completedSalesAED += o.totalAED;
        cur.confirmedOrdersAED += o.totalAED;
        cur.ctnSold += o.totalCtn || 0;
      } else if (o.status !== 'CANCELLED') {
        cur.confirmedOrdersAED += o.totalAED;
      }
      timelineMap.set(label, cur);
    }

    // Add Payments to timeline
    for (const p of filteredPayments) {
      if (p.status === 'VALID') {
        const rawDate = p.paymentDate || p.createdAt.slice(0, 10);
        const label = (period === 'year' || period === 'all')
          ? rawDate.slice(0, 7)
          : rawDate;
        const cur = timelineMap.get(label) || {
          periodLabel: label,
          completedSalesAED: 0,
          confirmedOrdersAED: 0,
          paymentsReceivedAED: 0,
          ordersCount: 0,
          ctnSold: 0,
        };
        cur.paymentsReceivedAED += p.amountAED;
        timelineMap.set(label, cur);
      }
    }

    const timeline = Array.from(timelineMap.values()).sort(
      (a, b) => a.periodLabel.localeCompare(b.periodLabel)
    );

    // 3. Wholesale Channel Comparison
    const channelMap = {
      CONTAINER: { count: 0, completedCount: 0, completedAED: 0, pipelineAED: 0, ctnSold: 0 },
      DUBAI_WHOLESALE: { count: 0, completedCount: 0, completedAED: 0, pipelineAED: 0, ctnSold: 0 },
      MIXED: { count: 0, completedCount: 0, completedAED: 0, pipelineAED: 0, ctnSold: 0 },
    };

    for (const o of filteredOrders) {
      const type = (o.orderType || 'DUBAI_WHOLESALE') as 'CONTAINER' | 'DUBAI_WHOLESALE' | 'MIXED';
      const c = channelMap[type] || channelMap.DUBAI_WHOLESALE;
      c.count++;
      if (o.status === 'COMPLETED') {
        c.completedCount++;
        c.completedAED += o.totalAED;
        c.pipelineAED += o.totalAED;
        c.ctnSold += o.totalCtn || 0;
      } else if (o.status !== 'CANCELLED') {
        c.pipelineAED += o.totalAED;
      }
    }

    const channelComparison = [
      {
        channel: 'Container Wholesale',
        code: 'CONTAINER',
        totalOrders: channelMap.CONTAINER.count,
        completedOrders: channelMap.CONTAINER.completedCount,
        completedSalesAED: parseFloat(channelMap.CONTAINER.completedAED.toFixed(2)),
        pipelineAED: parseFloat(channelMap.CONTAINER.pipelineAED.toFixed(2)),
        ctnSold: channelMap.CONTAINER.ctnSold,
        averageOrderAED: channelMap.CONTAINER.completedCount > 0
          ? parseFloat((channelMap.CONTAINER.completedAED / channelMap.CONTAINER.completedCount).toFixed(2))
          : 0,
      },
      {
        channel: 'Dubai Wholesale Market',
        code: 'DUBAI_WHOLESALE',
        totalOrders: channelMap.DUBAI_WHOLESALE.count,
        completedOrders: channelMap.DUBAI_WHOLESALE.completedCount,
        completedSalesAED: parseFloat(channelMap.DUBAI_WHOLESALE.completedAED.toFixed(2)),
        pipelineAED: parseFloat(channelMap.DUBAI_WHOLESALE.pipelineAED.toFixed(2)),
        ctnSold: channelMap.DUBAI_WHOLESALE.ctnSold,
        averageOrderAED: channelMap.DUBAI_WHOLESALE.completedCount > 0
          ? parseFloat((channelMap.DUBAI_WHOLESALE.completedAED / channelMap.DUBAI_WHOLESALE.completedCount).toFixed(2))
          : 0,
      },
      {
        channel: 'Mixed B2B Wholesale',
        code: 'MIXED',
        totalOrders: channelMap.MIXED.count,
        completedOrders: channelMap.MIXED.completedCount,
        completedSalesAED: parseFloat(channelMap.MIXED.completedAED.toFixed(2)),
        pipelineAED: parseFloat(channelMap.MIXED.pipelineAED.toFixed(2)),
        ctnSold: channelMap.MIXED.ctnSold,
        averageOrderAED: channelMap.MIXED.completedCount > 0
          ? parseFloat((channelMap.MIXED.completedAED / channelMap.MIXED.completedCount).toFixed(2))
          : 0,
      },
    ];

    // 4. Sales by Customer Account
    const customerMap = new Map<string, {
      customerName: string;
      companyName?: string;
      phone: string;
      totalOrders: number;
      completedOrders: number;
      completedSalesAED: number;
      pipelineAED: number;
      ctnSold: number;
      totalPaidAED: number;
      outstandingBalanceAED: number;
    }>();

    for (const o of filteredOrders) {
      const key = (o.phone || o.customerName).trim();
      const cur = customerMap.get(key) || {
        customerName: o.customerName,
        companyName: o.companyName,
        phone: o.phone,
        totalOrders: 0,
        completedOrders: 0,
        completedSalesAED: 0,
        pipelineAED: 0,
        ctnSold: 0,
        totalPaidAED: 0,
        outstandingBalanceAED: 0,
      };

      cur.totalOrders++;
      const paid = orderPaidMap.get(o.id) || 0;
      cur.totalPaidAED += paid;

      if (o.status === 'COMPLETED') {
        cur.completedOrders++;
        cur.completedSalesAED += o.totalAED;
        cur.pipelineAED += o.totalAED;
        cur.ctnSold += o.totalCtn || 0;
        cur.outstandingBalanceAED += Math.max(0, o.totalAED - paid);
      } else if (o.status !== 'CANCELLED') {
        cur.pipelineAED += o.totalAED;
        cur.outstandingBalanceAED += Math.max(0, o.totalAED - paid);
      }

      customerMap.set(key, cur);
    }

    const salesByCustomer = Array.from(customerMap.values())
      .sort((a, b) => b.completedSalesAED - a.completedSalesAED)
      .slice(0, 50);

    // 5. Sales by Product
    const productMap = new Map<string, {
      productId: string;
      productName: string;
      totalCtnSold: number;
      completedSalesAED: number;
      pipelineCtn: number;
      pipelineAED: number;
      orderCount: number;
    }>();

    for (const o of filteredOrders) {
      if (o.items && Array.isArray(o.items)) {
        for (const it of o.items) {
          const key = it.productId || it.productName;
          const cur = productMap.get(key) || {
            productId: it.productId,
            productName: it.productName,
            totalCtnSold: 0,
            completedSalesAED: 0,
            pipelineCtn: 0,
            pipelineAED: 0,
            orderCount: 0,
          };

          cur.orderCount++;
          const lineTotal = it.lineTotalAED || (it.pricePerCtn * it.quantityCtn);
          if (o.status === 'COMPLETED') {
            cur.totalCtnSold += it.quantityCtn;
            cur.completedSalesAED += lineTotal;
            cur.pipelineCtn += it.quantityCtn;
            cur.pipelineAED += lineTotal;
          } else if (o.status !== 'CANCELLED') {
            cur.pipelineCtn += it.quantityCtn;
            cur.pipelineAED += lineTotal;
          }

          productMap.set(key, cur);
        }
      }
    }

    const salesByProduct = Array.from(productMap.values())
      .map((p) => ({
        ...p,
        completedSalesAED: parseFloat(p.completedSalesAED.toFixed(2)),
        averagePricePerCtn: p.totalCtnSold > 0
          ? parseFloat((p.completedSalesAED / p.totalCtnSold).toFixed(2))
          : 0,
      }))
      .sort((a, b) => b.completedSalesAED - a.completedSalesAED);

    return NextResponse.json({
      success: true,
      period,
      metrics: {
        totalOrdersCount: filteredOrders.length,
        completedOrdersCount,
        confirmedOrdersCount,
        pendingOrdersCount,
        cancelledOrdersCount,
        cancellationRate,
        totalCompletedSalesValueAED: parseFloat(totalCompletedSalesValueAED.toFixed(2)),
        totalConfirmedOrderValueAED: parseFloat(totalConfirmedOrderValueAED.toFixed(2)),
        totalPendingOrderValueAED: parseFloat(totalPendingOrderValueAED.toFixed(2)),
        totalCancelledOrderValueAED: parseFloat(totalCancelledOrderValueAED.toFixed(2)),
        totalValidPaymentsReceivedAED,
        totalRefundedPaymentsAED,
        outstandingReceivablesAED,
        totalCtnSold,
        averageCompletedSaleValueAED,
      },
      timeline,
      channelComparison,
      salesByCustomer,
      salesByProduct,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to generate sales reports.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
