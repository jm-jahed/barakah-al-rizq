import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import {
  getWholesalePayments,
  getWholesaleOrders,
  recordWholesalePayment,
  reverseOrRefundPayment,
  getOrderPaymentSummary,
  getCustomerAccountStatement,
} from '@/lib/mongodb';
import { WholesalePaymentMethod, WholesalePaymentType } from '@/lib/db/types';

export async function GET(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const search = (searchParams.get('search') || searchParams.get('q') || '').toLowerCase().trim();
    const orderId = searchParams.get('orderId');
    const customer = searchParams.get('customer') || searchParams.get('customerId');
    const statement = searchParams.get('statement') === 'true';
    const method = searchParams.get('method') || searchParams.get('paymentMethod');
    const status = searchParams.get('status') || 'ALL';
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // 1. If statement is requested for a customer
    if (statement && customer) {
      const stmt = await getCustomerAccountStatement(customer);
      if (!stmt) {
        return NextResponse.json({ error: `Customer account not found for "${customer}".` }, { status: 404 });
      }
      return NextResponse.json({ success: true, statement: stmt });
    }

    const [allPayments, allOrders] = await Promise.all([
      getWholesalePayments(),
      getWholesaleOrders(),
    ]);

    // 2. Compute live holistic financial metrics
    let totalCollectedAED = 0;
    let cashTotalAED = 0;
    let bankTransferTotalAED = 0;
    let cardTotalAED = 0;
    let chequeTotalAED = 0;
    let otherTotalAED = 0;
    let refundedTotalAED = 0;
    let reversedTotalAED = 0;
    let validCount = 0;

    for (const p of allPayments) {
      if (p.status === 'VALID') {
        validCount++;
        totalCollectedAED += p.amountAED;
        if (p.paymentMethod === 'CASH') cashTotalAED += p.amountAED;
        else if (p.paymentMethod === 'BANK_TRANSFER') bankTransferTotalAED += p.amountAED;
        else if (p.paymentMethod === 'CARD') cardTotalAED += p.amountAED;
        else if (p.paymentMethod === 'CHEQUE') chequeTotalAED += p.amountAED;
        else otherTotalAED += p.amountAED;
      } else if (p.status === 'REFUNDED') {
        refundedTotalAED += p.amountAED;
      } else if (p.status === 'REVERSED') {
        reversedTotalAED += p.amountAED;
      }
    }

    totalCollectedAED = parseFloat(totalCollectedAED.toFixed(2));

    // Order status breakdown & Total Outstanding Receivables
    let totalNonCancelledOrderValueAED = 0;
    let fullyPaidOrdersCount = 0;
    let partiallyPaidOrdersCount = 0;
    let unpaidOrdersCount = 0;

    // Map order ID to valid payments
    const orderPaidMap = new Map<string, number>();
    for (const p of allPayments) {
      if (p.status === 'VALID') {
        orderPaidMap.set(p.orderId, (orderPaidMap.get(p.orderId) || 0) + p.amountAED);
      }
    }

    for (const o of allOrders) {
      if (o.status !== 'CANCELLED') {
        totalNonCancelledOrderValueAED += o.totalAED;
        const paid = Math.max(0, orderPaidMap.get(o.id) || 0);
        if (paid >= o.totalAED - 0.05 && o.totalAED > 0) {
          fullyPaidOrdersCount++;
        } else if (paid > 0) {
          partiallyPaidOrdersCount++;
        } else {
          unpaidOrdersCount++;
        }
      }
    }

    const outstandingReceivablesAED = parseFloat(
      Math.max(0, totalNonCancelledOrderValueAED - totalCollectedAED).toFixed(2)
    );

    const metrics = {
      totalPaymentsCount: allPayments.length,
      validPaymentsCount: validCount,
      reversedCount: allPayments.filter(p => p.status === 'REVERSED').length,
      refundedCount: allPayments.filter(p => p.status === 'REFUNDED').length,
      totalCollectedAED,
      cashTotalAED: parseFloat(cashTotalAED.toFixed(2)),
      bankTransferTotalAED: parseFloat(bankTransferTotalAED.toFixed(2)),
      cardTotalAED: parseFloat(cardTotalAED.toFixed(2)),
      chequeTotalAED: parseFloat(chequeTotalAED.toFixed(2)),
      otherTotalAED: parseFloat(otherTotalAED.toFixed(2)),
      refundedTotalAED: parseFloat(refundedTotalAED.toFixed(2)),
      reversedTotalAED: parseFloat(reversedTotalAED.toFixed(2)),
      outstandingReceivablesAED,
      totalOrderPipelineAED: parseFloat(totalNonCancelledOrderValueAED.toFixed(2)),
      fullyPaidOrdersCount,
      partiallyPaidOrdersCount,
      unpaidOrdersCount,
    };

    // 3. Filter payments
    let filtered = allPayments;

    if (orderId) {
      filtered = filtered.filter(p => p.orderId.toLowerCase() === orderId.toLowerCase());
    }

    if (customer) {
      const lowerCust = customer.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.customerName.toLowerCase().includes(lowerCust) ||
        (p.companyName && p.companyName.toLowerCase().includes(lowerCust)) ||
        p.phone.includes(lowerCust) ||
        (p.customerId && p.customerId.toLowerCase() === lowerCust)
      );
    }

    if (method && method !== 'ALL') {
      filtered = filtered.filter(p => p.paymentMethod === method.toUpperCase());
    }

    if (status && status !== 'ALL') {
      filtered = filtered.filter(p => p.status === status.toUpperCase());
    }

    if (startDate) {
      const startMs = new Date(startDate).getTime();
      if (!isNaN(startMs)) {
        filtered = filtered.filter(p => new Date(p.paymentDate).getTime() >= startMs);
      }
    }

    if (endDate) {
      const endMs = new Date(endDate).getTime() + (24 * 60 * 60 * 1000);
      if (!isNaN(endMs)) {
        filtered = filtered.filter(p => new Date(p.paymentDate).getTime() <= endMs);
      }
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.id.toLowerCase().includes(search) ||
        p.orderId.toLowerCase().includes(search) ||
        p.customerName.toLowerCase().includes(search) ||
        (p.companyName && p.companyName.toLowerCase().includes(search)) ||
        p.phone.includes(search) ||
        (p.referenceNumber && p.referenceNumber.toLowerCase().includes(search)) ||
        (p.notes && p.notes.toLowerCase().includes(search))
      );
    }

    // If orderId is provided, also attach specific order summary
    let orderSummary: any = null;
    if (orderId) {
      orderSummary = await getOrderPaymentSummary(orderId);
    }

    return NextResponse.json({
      success: true,
      totalCount: allPayments.length,
      filteredCount: filtered.length,
      metrics,
      payments: filtered,
      data: filtered,
      orderSummary,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to fetch payments.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      orderId,
      amountAED,
      paymentMethod,
      paymentType,
      paymentDate,
      referenceNumber,
      bankAccount,
      notes,
    } = body;

    if (!orderId || typeof orderId !== 'string') {
      return NextResponse.json({ error: 'Order ID is required.' }, { status: 400 });
    }

    const numAmount = Number(amountAED);
    if (isNaN(numAmount) || numAmount <= 0) {
      return NextResponse.json({ error: 'Valid positive payment amount in AED is required.' }, { status: 400 });
    }

    if (!paymentMethod) {
      return NextResponse.json({ error: 'Payment method is required (CASH, BANK_TRANSFER, CARD, CHEQUE, OTHER).' }, { status: 400 });
    }

    const validMethods: WholesalePaymentMethod[] = ['CASH', 'BANK_TRANSFER', 'CARD', 'CHEQUE', 'OTHER'];
    if (!validMethods.includes(paymentMethod)) {
      return NextResponse.json({ error: `Invalid payment method "${paymentMethod}".` }, { status: 400 });
    }

    const result = await recordWholesalePayment(
      {
        orderId: orderId.trim(),
        amountAED: numAmount,
        paymentMethod,
        paymentType: paymentType as WholesalePaymentType | undefined,
        paymentDate,
        referenceNumber,
        bankAccount,
        notes,
      },
      session.email
    );

    return NextResponse.json({
      success: true,
      payment: result.payment,
      summary: result.summary,
      message: `Payment of AED ${numAmount.toLocaleString()} recorded successfully for Order #${result.payment.orderId}.`,
    }, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to record payment.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { paymentId, action, reason } = body;

    if (!paymentId || typeof paymentId !== 'string') {
      return NextResponse.json({ error: 'Payment ID is required.' }, { status: 400 });
    }

    if (action !== 'REVERSED' && action !== 'REFUNDED') {
      return NextResponse.json({ error: 'Action must be either "REVERSED" or "REFUNDED".' }, { status: 400 });
    }

    if (!reason || typeof reason !== 'string' || reason.trim().length < 3) {
      return NextResponse.json({ error: 'A descriptive reason (min 3 characters) is required for audit compliance.' }, { status: 400 });
    }

    const result = await reverseOrRefundPayment(paymentId.trim(), action, reason.trim(), session.email);

    return NextResponse.json({
      success: true,
      payment: result.payment,
      summary: result.summary,
      message: `Payment #${paymentId} marked as ${action} successfully.`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to process payment status update.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
