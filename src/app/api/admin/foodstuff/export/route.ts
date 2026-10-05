import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import {
  getFoodstuffProducts,
  getFoodstuffCategories,
  getFoodstuffContainerPrices,
  getFoodstuffMarketPrices,
  getWholesaleCustomers,
  getWholesaleOrders,
  getWholesalePayments,
} from '@/lib/mongodb';
import { stringifyCsv } from '@/lib/csv';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const type = (searchParams.get('type') || '').toLowerCase().trim();
    const search = (searchParams.get('search') || searchParams.get('q') || '').toLowerCase().trim();
    const status = searchParams.get('status') || searchParams.get('orderStatus') || 'ALL';
    const paymentStatus = searchParams.get('paymentStatus') || 'ALL';
    const orderType = searchParams.get('orderType') || 'ALL';
    const customer = (searchParams.get('customer') || '').toLowerCase().trim();
    const product = (searchParams.get('product') || '').toLowerCase().trim();
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    const nowStr = new Date().toISOString().slice(0, 10);
    let rows: (string | number | null | undefined)[][] = [];
    let filename = `barakah_${type}_${nowStr}.csv`;

    switch (type) {
      // 1. PRODUCTS EXPORT
      case 'products': {
        const [products, containerPrices, marketPrices] = await Promise.all([
          getFoodstuffProducts(),
          getFoodstuffContainerPrices(),
          getFoodstuffMarketPrices(),
        ]);

        const cpMap = new Map(containerPrices.map((c) => [c.productId, c]));
        const mpMap = new Map(marketPrices.map((m) => [m.productId, m]));

        let filtered = products;
        if (search) {
          filtered = filtered.filter(
            (p) =>
              p.name.toLowerCase().includes(search) ||
              p.arabicName?.toLowerCase().includes(search) ||
              p.category.toLowerCase().includes(search) ||
              p.origin?.toLowerCase().includes(search)
          );
        }

        const headers = [
          'Product ID',
          'Product Name',
          'Arabic Name',
          'Category',
          'Origin',
          'Variety',
          'Grade',
          'Size',
          'Packaging Unit',
          'Packaging Details',
          'Net Weight (KG)',
          'MOQ',
          'Container Price (AED)',
          'Dubai Market Price (AED)',
          'Status',
          'Featured',
          'Created At',
          'Updated At',
        ];

        const dataRows = filtered.map((p) => {
          const cp = cpMap.get(p.id);
          const mp = mpMap.get(p.id);
          return [
            p.id,
            p.name,
            p.arabicName || '',
            p.category,
            p.origin || '',
            p.variety || '',
            p.grade || '',
            p.size || '',
            p.defaultPackagingUnit || 'CTN',
            p.defaultPackagingDetails || '',
            p.defaultNetWeightKg !== null ? p.defaultNetWeightKg : '',
            p.defaultMoq || '',
            cp?.priceAED !== null && cp?.priceAED !== undefined ? cp.priceAED : 'POR',
            mp?.priceAED !== null && mp?.priceAED !== undefined ? mp.priceAED : 'POR',
            p.published ? 'ACTIVE' : 'ARCHIVED',
            p.featured ? 'YES' : 'NO',
            p.createdAt,
            p.updatedAt,
          ];
        });

        rows = [headers, ...dataRows];
        filename = `barakah_products_${nowStr}.csv`;
        break;
      }

      // 2. CATEGORIES EXPORT
      case 'categories': {
        const categories = await getFoodstuffCategories();
        let filtered = categories;
        if (search) {
          filtered = filtered.filter(
            (c) =>
              c.name.toLowerCase().includes(search) ||
              c.displayName?.toLowerCase().includes(search) ||
              c.arabicName?.toLowerCase().includes(search)
          );
        }

        const headers = [
          'Category ID',
          'Category Key',
          'Display Name',
          'Arabic Name',
          'Description',
          'Display Order',
          'Status',
          'Created At',
          'Updated At',
        ];

        const dataRows = filtered.map((c) => [
          c.id,
          c.name,
          c.displayName || c.name,
          c.arabicName || '',
          c.description || '',
          c.displayOrder || 0,
          c.active !== false ? 'ACTIVE' : 'INACTIVE',
          c.createdAt || '',
          c.updatedAt || '',
        ]);

        rows = [headers, ...dataRows];
        filename = `barakah_categories_${nowStr}.csv`;
        break;
      }

      // 3. CUSTOMERS EXPORT
      case 'customers': {
        const customers = await getWholesaleCustomers();
        let filtered = customers;
        if (search) {
          filtered = filtered.filter(
            (c) =>
              c.name.toLowerCase().includes(search) ||
              (c.companyName && c.companyName.toLowerCase().includes(search)) ||
              c.phone.includes(search) ||
              (c.email && c.email.toLowerCase().includes(search))
          );
        }

        const headers = [
          'Customer ID',
          'Customer Name',
          'Company Name',
          'Phone',
          'Email',
          'WhatsApp',
          'TRN',
          'Total Orders',
          'Total CTN',
          'Total Order Value (AED)',
          'Completed Order Value (AED)',
          'Calculated Outstanding (AED)',
          'Latest Order Date',
          'Latest Status',
          'Notes',
          'Created At',
          'Updated At',
        ];

        const dataRows = filtered.map((c) => [
          c.id,
          c.name,
          c.companyName || '',
          c.phone,
          c.email || '',
          c.whatsapp || '',
          c.trn || '',
          c.totalOrders,
          c.totalCtn,
          c.totalOrderValueAED.toFixed(2),
          c.completedOrderValueAED.toFixed(2),
          Math.max(0, c.totalOrderValueAED - c.completedOrderValueAED).toFixed(2), // Calculated Outstanding
          c.lastOrderDate || '',
          c.latestStatus || '',
          c.notes || '',
          c.createdAt,
          c.updatedAt,
        ]);

        rows = [headers, ...dataRows];
        filename = `barakah_customers_${nowStr}.csv`;
        break;
      }

      // 4. WHOLESALE ORDERS EXPORT
      case 'orders': {
        const orders = await getWholesaleOrders();
        let filtered = orders;

        if (status !== 'ALL') {
          filtered = filtered.filter((o) => o.status === status);
        }
        if (orderType !== 'ALL') {
          filtered = filtered.filter((o) => o.orderType === orderType);
        }
        if (customer) {
          filtered = filtered.filter(
            (o) =>
              o.customerName.toLowerCase().includes(customer) ||
              (o.companyName && o.companyName.toLowerCase().includes(customer)) ||
              o.phone.includes(customer)
          );
        }
        if (startDate) {
          const sMs = new Date(startDate).getTime();
          if (!isNaN(sMs)) {
            filtered = filtered.filter((o) => new Date(o.pickupDate || o.createdAt).getTime() >= sMs);
          }
        }
        if (endDate) {
          const eMs = new Date(endDate).getTime() + 24 * 60 * 60 * 1000;
          if (!isNaN(eMs)) {
            filtered = filtered.filter((o) => new Date(o.pickupDate || o.createdAt).getTime() <= eMs);
          }
        }
        if (search) {
          filtered = filtered.filter(
            (o) =>
              o.id.toLowerCase().includes(search) ||
              o.customerName.toLowerCase().includes(search) ||
              (o.companyName && o.companyName.toLowerCase().includes(search)) ||
              o.phone.includes(search)
          );
        }

        const headers = [
          'Order ID',
          'Customer Name',
          'Company Name',
          'Phone',
          'Email',
          'Order Type',
          'Pickup Date',
          'Pickup Time',
          'Pickup Location',
          'Order Status',
          'Total Cartons (CTN)',
          'Total Order Value (AED)',
          'Items Summary',
          'Notes',
          'Created At',
          'Updated At',
        ];

        const dataRows = filtered.map((o) => {
          const itemsSummary = (o.items || [])
            .map((i) => `${i.productName} [${i.quantityCtn} CTN @ AED ${i.pricePerCtn} = AED ${i.lineTotalAED}]`)
            .join(' | ');

          return [
            o.id,
            o.customerName,
            o.companyName || '',
            o.phone,
            o.email,
            o.orderType,
            o.pickupDate,
            o.pickupTime || '',
            o.pickupLocation,
            o.status,
            o.totalCtn,
            o.totalAED.toFixed(2),
            itemsSummary,
            o.notes || '',
            o.createdAt,
            o.updatedAt,
          ];
        });

        rows = [headers, ...dataRows];
        filename = `barakah_orders_${nowStr}.csv`;
        break;
      }

      // 5. PAYMENTS EXPORT
      case 'payments': {
        const payments = await getWholesalePayments();
        let filtered = payments;

        if (status !== 'ALL') {
          filtered = filtered.filter((p) => p.status === status);
        }
        if (customer) {
          filtered = filtered.filter(
            (p) =>
              p.customerName.toLowerCase().includes(customer) ||
              (p.companyName && p.companyName.toLowerCase().includes(customer)) ||
              p.phone.includes(customer)
          );
        }
        if (startDate) {
          const sMs = new Date(startDate).getTime();
          if (!isNaN(sMs)) {
            filtered = filtered.filter((p) => new Date(p.paymentDate || p.createdAt).getTime() >= sMs);
          }
        }
        if (endDate) {
          const eMs = new Date(endDate).getTime() + 24 * 60 * 60 * 1000;
          if (!isNaN(eMs)) {
            filtered = filtered.filter((p) => new Date(p.paymentDate || p.createdAt).getTime() <= eMs);
          }
        }
        if (search) {
          filtered = filtered.filter(
            (p) =>
              p.id.toLowerCase().includes(search) ||
              p.orderId.toLowerCase().includes(search) ||
              p.customerName.toLowerCase().includes(search) ||
              (p.referenceNumber && p.referenceNumber.toLowerCase().includes(search))
          );
        }

        const headers = [
          'Payment ID',
          'Order ID',
          'Customer Name',
          'Company Name',
          'Phone',
          'Email',
          'Amount (AED)',
          'Payment Date',
          'Payment Method',
          'Payment Type',
          'Reference Number',
          'Bank Account',
          'Status',
          'Notes',
          'Created At',
          'Updated At',
        ];

        const dataRows = filtered.map((p) => [
          p.id,
          p.orderId,
          p.customerName,
          p.companyName || '',
          p.phone,
          p.email || '',
          p.amountAED.toFixed(2),
          p.paymentDate,
          p.paymentMethod,
          p.paymentType,
          p.referenceNumber || '',
          p.bankAccount || '',
          p.status,
          p.notes || '',
          p.createdAt,
          p.updatedAt,
        ]);

        rows = [headers, ...dataRows];
        filename = `barakah_payments_${nowStr}.csv`;
        break;
      }

      // 6. SALES HISTORY EXPORT (Reuses Phase D Calculation)
      case 'sales': {
        const [allOrders, allPayments] = await Promise.all([
          getWholesaleOrders(),
          getWholesalePayments(),
        ]);

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

        const enrichedSales = allOrders.map((o) => {
          const pInfo = paymentMap.get(o.id) || { validPaid: 0, refunded: 0, paymentsCount: 0 };
          const netPaidAED = parseFloat(pInfo.validPaid.toFixed(2));
          const refundedAED = parseFloat(pInfo.refunded.toFixed(2));
          const outstandingAED = o.status === 'CANCELLED'
            ? 0
            : parseFloat(Math.max(0, o.totalAED - netPaidAED).toFixed(2));

          let payStatus: 'PAID' | 'PARTIALLY_PAID' | 'UNPAID' = 'UNPAID';
          if (netPaidAED >= o.totalAED - 0.05 && o.totalAED > 0) {
            payStatus = 'PAID';
          } else if (netPaidAED > 0) {
            payStatus = 'PARTIALLY_PAID';
          }

          return {
            ...o,
            saleDate: o.pickupDate || o.createdAt.slice(0, 10),
            netPaidAED,
            refundedAED,
            outstandingBalanceAED: outstandingAED,
            paymentStatus: payStatus,
            paymentsCount: pInfo.paymentsCount,
            lastPaymentDate: pInfo.lastPaymentDate,
          };
        });

        let filtered = enrichedSales;
        if (status !== 'ALL') {
          filtered = filtered.filter((s) => s.status === status);
        }
        if (paymentStatus !== 'ALL') {
          filtered = filtered.filter((s) => s.paymentStatus === paymentStatus);
        }
        if (orderType !== 'ALL') {
          filtered = filtered.filter((s) => s.orderType === orderType);
        }
        if (customer) {
          filtered = filtered.filter(
            (s) =>
              s.customerName.toLowerCase().includes(customer) ||
              (s.companyName && s.companyName.toLowerCase().includes(customer)) ||
              s.phone.includes(customer)
          );
        }
        if (product) {
          filtered = filtered.filter(
            (s) => s.items && s.items.some((it) => it.productName.toLowerCase().includes(product))
          );
        }
        if (startDate) {
          const sMs = new Date(startDate).getTime();
          if (!isNaN(sMs)) {
            filtered = filtered.filter((s) => new Date(s.saleDate || s.createdAt).getTime() >= sMs);
          }
        }
        if (endDate) {
          const eMs = new Date(endDate).getTime() + 24 * 60 * 60 * 1000;
          if (!isNaN(eMs)) {
            filtered = filtered.filter((s) => new Date(s.saleDate || s.createdAt).getTime() <= eMs);
          }
        }
        if (search) {
          filtered = filtered.filter(
            (s) =>
              s.id.toLowerCase().includes(search) ||
              s.customerName.toLowerCase().includes(search) ||
              (s.companyName && s.companyName.toLowerCase().includes(search)) ||
              s.phone.includes(search)
          );
        }

        const headers = [
          'Sale / Order ID',
          'Sale Date',
          'Customer Name',
          'Company Name',
          'Phone',
          'Order Type',
          'Items Summary',
          'Total Cartons (CTN)',
          'Order Total (AED)',
          'Valid Payments Received (AED)',
          'Refunded Payments (AED)',
          'Outstanding Balance (AED)',
          'Order Fulfillment Status',
          'Payment Status',
          'Payments Count',
          'Last Payment Date',
          'Created At',
        ];

        const dataRows = filtered.map((s) => {
          const itemsSummary = (s.items || [])
            .map((i) => `${i.productName} [${i.quantityCtn} CTN @ AED ${i.pricePerCtn} = AED ${i.lineTotalAED}]`)
            .join(' | ');

          return [
            s.id,
            s.saleDate,
            s.customerName,
            s.companyName || '',
            s.phone,
            s.orderType,
            itemsSummary,
            s.totalCtn,
            s.totalAED.toFixed(2),
            s.netPaidAED.toFixed(2),
            s.refundedAED.toFixed(2),
            s.outstandingBalanceAED.toFixed(2),
            s.status,
            s.paymentStatus,
            s.paymentsCount,
            s.lastPaymentDate || '',
            s.createdAt,
          ];
        });

        rows = [headers, ...dataRows];
        filename = `barakah_sales_${nowStr}.csv`;
        break;
      }

      // 7. SALES REPORTS EXPORT
      case 'reports': {
        const [allOrders, allPayments] = await Promise.all([
          getWholesaleOrders(),
          getWholesalePayments(),
        ]);

        const completedOrders = allOrders.filter((o) => o.status === 'COMPLETED');
        const confirmedOrders = allOrders.filter((o) => o.status === 'CONFIRMED' || o.status === 'READY_FOR_PICKUP' || o.status === 'COMPLETED');
        const validPayments = allPayments.filter((p) => p.status === 'VALID');

        const headers = [
          'Report Metric / Dimension',
          'Classification / Entity',
          'Metric Value 1 (Orders / CTN)',
          'Metric Value 2 (Total AED)',
          'Status / Remarks',
        ];

        const dataRows: (string | number)[][] = [
          ['EXECUTIVE SUMMARY', 'Total Real Orders Count', allOrders.length, '', 'All recorded wholesale orders'],
          ['EXECUTIVE SUMMARY', 'Completed Orders (Sales)', completedOrders.length, completedOrders.reduce((sum, o) => sum + o.totalAED, 0).toFixed(2) + ' AED', 'Strictly completed sales revenue'],
          ['EXECUTIVE SUMMARY', 'Pipeline Orders (Confirmed)', confirmedOrders.length, confirmedOrders.reduce((sum, o) => sum + o.totalAED, 0).toFixed(2) + ' AED', 'Active confirmed wholesale pipeline'],
          ['EXECUTIVE SUMMARY', 'Payments Collected (Valid)', validPayments.length, validPayments.reduce((sum, p) => sum + p.amountAED, 0).toFixed(2) + ' AED', 'Verified money received'],
          ['EXECUTIVE SUMMARY', 'Outstanding Receivables', '', Math.max(0, confirmedOrders.reduce((sum, o) => sum + o.totalAED, 0) - validPayments.reduce((sum, p) => sum + p.amountAED, 0)).toFixed(2) + ' AED', 'Uncollected confirmed balance'],
          ['---', '---', '---', '---', '---'],
        ];

        // Channel Breakdown
        const containerOrders = completedOrders.filter((o) => o.orderType === 'CONTAINER');
        const dubaiOrders = completedOrders.filter((o) => o.orderType === 'DUBAI_WHOLESALE');
        const mixedOrders = completedOrders.filter((o) => o.orderType === 'MIXED');

        dataRows.push(
          ['WHOLESALE CHANNEL', 'Direct Container Wholesale', `${containerOrders.length} Orders (${containerOrders.reduce((s, o) => s + o.totalCtn, 0)} CTN)`, `${containerOrders.reduce((s, o) => s + o.totalAED, 0).toFixed(2)} AED`, 'FCL Port Logistics'],
          ['WHOLESALE CHANNEL', 'Dubai Central Wholesale', `${dubaiOrders.length} Orders (${dubaiOrders.reduce((s, o) => s + o.totalCtn, 0)} CTN)`, `${dubaiOrders.reduce((s, o) => s + o.totalAED, 0).toFixed(2)} AED`, 'Al Aweer Market Store Pickup'],
          ['WHOLESALE CHANNEL', 'Mixed Wholesale', `${mixedOrders.length} Orders (${mixedOrders.reduce((s, o) => s + o.totalCtn, 0)} CTN)`, `${mixedOrders.reduce((s, o) => s + o.totalAED, 0).toFixed(2)} AED`, 'Mixed Commodity Cargo'],
          ['---', '---', '---', '---', '---']
        );

        // Product Breakdown from completed orders
        const productSalesMap = new Map<string, { name: string; ctn: number; revenueAED: number }>();
        for (const o of completedOrders) {
          for (const it of o.items || []) {
            const cur = productSalesMap.get(it.productId) || { name: it.productName, ctn: 0, revenueAED: 0 };
            cur.ctn += it.quantityCtn;
            cur.revenueAED += it.lineTotalAED;
            productSalesMap.set(it.productId, cur);
          }
        }

        const topProducts = Array.from(productSalesMap.values()).sort((a, b) => b.revenueAED - a.revenueAED);
        for (const tp of topProducts) {
          dataRows.push([
            'TOP COMMODITIES',
            tp.name,
            `${tp.ctn} CTN Sold`,
            `${tp.revenueAED.toFixed(2)} AED`,
            'Completed Sales Volume',
          ]);
        }

        rows = [headers, ...dataRows];
        filename = `barakah_reports_${nowStr}.csv`;
        break;
      }

      default:
        return NextResponse.json(
          { error: 'Invalid export type. Allowed types: products, categories, customers, orders, payments, sales, reports.' },
          { status: 400 }
        );
    }

    const csvOutput = stringifyCsv(rows);

    return new NextResponse(csvOutput, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Export failed.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
