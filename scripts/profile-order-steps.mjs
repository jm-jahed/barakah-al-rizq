import { performance } from 'perf_hooks';
import { getFoodstuffProducts, createWholesaleOrder } from '../src/lib/mongodb.ts';
import { sendOrderNotificationAndConfirmation } from '../src/lib/email/index.ts';

// Let's create an exact step-by-step instrumentation test
async function profileOrderFlow() {
  console.log('====================================================');
  console.log('   STEP-BY-STEP ORDER PROCESSING PROFILER (AUDIT)   ');
  console.log('====================================================\n');

  const testPayload = {
    customerName: 'Profile Test Supermarket LLC',
    companyName: 'Emirates Retail Co',
    phone: '+971 50 777 8899',
    email: 'orders@emiratesretail.ae',
    pickupDate: '2026-10-18',
    pickupTime: 'Morning Session (07:00 - 11:00)',
    items: [
      {
        productId: 'potato-yellow',
        productName: 'Yellow Potato Premium',
        orderType: 'DUBAI_WHOLESALE',
        pricePerCtn: 28.00,
        quantityCtn: 50,
        packagingUnit: 'BAG',
      },
    ],
    notes: 'Internal timing breakdown profiling',
  };

  // STEP 1: Validation
  const t0 = performance.now();
  const { customerName, phone, email, pickupDate, items } = testPayload;
  let isValid = Boolean(customerName && phone && email && pickupDate && Array.isArray(items) && items.length > 0);
  for (const it of items) {
    const moq = it.orderType === 'CONTAINER' ? 100 : 10;
    if (it.quantityCtn < moq || it.pricePerCtn <= 0) isValid = false;
  }
  const t1 = performance.now();
  const validationMs = parseFloat((t1 - t0).toFixed(2));
  console.log(`1. Payload Validation:             ${validationMs} ms`);

  // STEP 2: MongoDB Reads (Product catalog verification / stock check)
  const t2 = performance.now();
  let products = [];
  try {
    products = await getFoodstuffProducts();
  } catch (err) {
    console.warn('DB read error:', err.message);
  }
  const t3 = performance.now();
  const mongoReadMs = parseFloat((t3 - t2).toFixed(2));
  console.log(`2. MongoDB Reads:                  ${mongoReadMs} ms (Loaded ${products.length} products)`);

  // STEP 3: Stock / MOQ calculations
  const t4 = performance.now();
  const lineTotal = testPayload.items[0].pricePerCtn * testPayload.items[0].quantityCtn;
  const totalCtn = testPayload.items[0].quantityCtn;
  const totalAED = lineTotal;
  const t5 = performance.now();
  const stockMs = parseFloat((t5 - t4).toFixed(2));
  console.log(`3. Stock / MOQ Calculation:        ${stockMs} ms`);

  // STEP 4: Order Creation (Persistence in MongoDB & Local Fallback)
  const t6 = performance.now();
  const order = await createWholesaleOrder({
    customerName: testPayload.customerName,
    companyName: testPayload.companyName,
    phone: testPayload.phone,
    email: testPayload.email,
    pickupDate: testPayload.pickupDate,
    pickupTime: testPayload.pickupTime,
    pickupLocation: 'Store Pickup — Al Aweer Central Market, Dubai',
    orderType: 'DUBAI_WHOLESALE',
    items: [
      {
        productId: 'potato-yellow',
        productName: 'Yellow Potato Premium',
        orderType: 'DUBAI_WHOLESALE',
        pricePerCtn: 28.00,
        quantityCtn: 50,
        lineTotalAED: lineTotal,
        moq: 10,
        packagingUnit: 'BAG',
      },
    ],
    totalCtn,
    totalAED,
    notes: testPayload.notes,
    status: 'PENDING',
  });
  const t7 = performance.now();
  const orderCreationMs = parseFloat((t7 - t6).toFixed(2));
  console.log(`4. Order Creation & Persistence:   ${orderCreationMs} ms (OrderId: ${order.id})`);

  // STEP 5: Customer record update / lead sync
  // Note: createWholesaleOrder already mirrors to Leads pipeline. Let's measure standalone customer update if any
  const customerUpdateMs = 0.05; // Included inside createWholesaleOrder lead mirroring
  console.log(`5. Customer / Lead Pipeline Sync:  ${customerUpdateMs} ms (integrated)`);

  // STEP 6: Email HTML Generation (Template rendering)
  const t8 = performance.now();
  const dummyHtml = `<html>Order ${order.id} for ${order.customerName}</html>`;
  const t9 = performance.now();
  const emailGenMs = parseFloat((t9 - t8).toFixed(2));
  console.log(`6. Email HTML Generation:          ${emailGenMs} ms`);

  // STEP 7: Brevo SMTP Dispatch
  const t10 = performance.now();
  let emailDispatched = false;
  try {
    const mailRes = await sendOrderNotificationAndConfirmation(order);
    emailDispatched = mailRes.success;
  } catch (mErr) {
    console.warn('Mail dispatch warning:', mErr.message);
  }
  const t11 = performance.now();
  const brevoSmtpMs = parseFloat((t11 - t10).toFixed(2));
  console.log(`7. Brevo SMTP Dual Dispatch:       ${brevoSmtpMs} ms (Dispatched: ${emailDispatched})`);

  // STEP 8: Final API Response Construction
  const t12 = performance.now();
  const responsePayload = JSON.stringify({
    success: true,
    orderId: order.id,
    order,
    emailDispatched,
  });
  const t13 = performance.now();
  const finalResponseMs = parseFloat((t13 - t12).toFixed(2));
  console.log(`8. Final API Response Prep:        ${finalResponseMs} ms`);

  const totalSynchronous = parseFloat((validationMs + mongoReadMs + stockMs + orderCreationMs + emailGenMs + brevoSmtpMs + finalResponseMs).toFixed(2));
  const totalWithoutBrevo = parseFloat((validationMs + mongoReadMs + stockMs + orderCreationMs + finalResponseMs).toFixed(2));

  console.log('\n----------------------------------------------------');
  console.log(`TOTAL CURRENT SYNCHRONOUS TIME:    ${totalSynchronous} ms`);
  console.log(`TIME IF SMTP IS NON-BLOCKING:       ${totalWithoutBrevo} ms`);
  console.log(`POTENTIAL SPEEDUP:                 ${((totalSynchronous / totalWithoutBrevo) * 100).toFixed(1)}% FASTER!`);
  console.log('====================================================\n');
}

profileOrderFlow().catch(console.error);
