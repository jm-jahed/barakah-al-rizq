import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth/session';
import { parseCsv } from '@/lib/csv';
import {
  getFoodstuffProducts,
  getFoodstuffCategories,
  getWholesaleCustomers,
  getWholesaleOrders,
  getWholesalePayments,
  saveFoodstuffCategory,
  createFoodstuffProduct,
  saveWholesaleCustomer,
  createWholesaleOrder,
  logActivityToMongo,
} from '@/lib/mongodb';
import {
  FoodstuffProduct,
  FoodstuffCategoryItem,
  WholesaleCustomer,
  WholesaleOrder,
  WholesalePayment,
  WholesaleOrderStatus,
  PaymentTransactionStatus,
  WholesalePaymentMethod,
  WholesalePaymentType,
} from '@/lib/db/types';

interface ImportErrorItem {
  rowNumber: number;
  identifier: string;
  field: string;
  value: string;
  error: string;
  severity: 'ERROR' | 'WARNING';
}

interface ParsedRowPreview {
  rowNumber: number;
  identifier: string;
  status: 'VALID' | 'DUPLICATE' | 'INVALID';
  data: Record<string, string>;
  message?: string;
  errors?: string[];
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized', message: 'Admin authentication required.' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { type, action = 'validate', csvContent } = body;

    if (!type || !csvContent || typeof csvContent !== 'string') {
      return NextResponse.json(
        { error: 'Invalid payload. "type" and "csvContent" are required.' },
        { status: 400 }
      );
    }

    const rows = parseCsv(csvContent);
    if (rows.length < 2) {
      return NextResponse.json(
        { error: 'CSV file must contain a header row and at least one data row.' },
        { status: 400 }
      );
    }

    const headerRow = rows[0].map((h) => h.trim().toLowerCase());
    const dataRows = rows.slice(1);

    // Fetch existing records for duplicate check and referential integrity
    const [
      existingProducts,
      existingCategories,
      existingCustomers,
      existingOrders,
      existingPayments,
    ] = await Promise.all([
      getFoodstuffProducts(),
      getFoodstuffCategories(),
      getWholesaleCustomers(),
      getWholesaleOrders(),
      getWholesalePayments(),
    ]);

    const errorList: ImportErrorItem[] = [];
    const previewList: ParsedRowPreview[] = [];
    const validRowsToImport: any[] = [];
    let duplicateCount = 0;
    let validCount = 0;
    let invalidCount = 0;

    // -------------------------------------------------------------
    // 1. PRODUCTS IMPORT
    // -------------------------------------------------------------
    if (type === 'products') {
      const existingIds = new Set(existingProducts.map((p) => p.id.toLowerCase()));

      dataRows.forEach((row, idx) => {
        const rowNum = idx + 2;
        const rowObj: Record<string, string> = {};
        headerRow.forEach((h, colIdx) => {
          rowObj[h] = row[colIdx] !== undefined ? row[colIdx] : '';
        });

        const id = (rowObj['id'] || rowObj['product id'] || rowObj['product_id'] || '').trim();
        const name = (rowObj['name'] || rowObj['product name'] || rowObj['product_name'] || '').trim();
        const category = (rowObj['category'] || 'VEGETABLES').trim();
        const arabicName = (rowObj['arabicname'] || rowObj['arabic name'] || rowObj['arabic_name'] || '').trim();
        const origin = (rowObj['origin'] || '').trim();
        const variety = (rowObj['variety'] || '').trim();
        const grade = (rowObj['grade'] || 'GRADE A (PREMIUM)').trim();
        const size = (rowObj['size'] || '').trim();
        const unit = (rowObj['defaultpackagingunit'] || rowObj['packaging unit'] || rowObj['unit'] || 'CTN').trim();
        const details = (rowObj['defaultpackagingdetails'] || rowObj['packaging details'] || 'Standard Wholesale Package').trim();
        const weightRaw = rowObj['defaultnetweightkg'] || rowObj['net weight'] || rowObj['weight'] || '';
        const moq = (rowObj['defaultmoq'] || rowObj['moq'] || '100 CTN').trim();
        const cpRaw = rowObj['containerpriceaed'] || rowObj['container price'] || '';
        const mpRaw = rowObj['marketpriceaed'] || rowObj['market price'] || '';
        const publishedRaw = (rowObj['published'] || rowObj['status'] || 'true').trim().toLowerCase();

        const rowErrors: string[] = [];

        if (!id) {
          rowErrors.push('Missing required Product ID.');
          errorList.push({ rowNumber: rowNum, identifier: id || `Row-${rowNum}`, field: 'id', value: '', error: 'Missing required Product ID', severity: 'ERROR' });
        }
        if (!name) {
          rowErrors.push('Missing required Product Name.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'name', value: '', error: 'Missing required Product Name', severity: 'ERROR' });
        }

        let netWeightKg: number | null = null;
        if (weightRaw) {
          const parsedWeight = parseFloat(weightRaw);
          if (isNaN(parsedWeight) || parsedWeight < 0) {
            rowErrors.push('Invalid Net Weight KG. Must be a non-negative number.');
            errorList.push({ rowNumber: rowNum, identifier: id, field: 'defaultNetWeightKg', value: weightRaw, error: 'Must be a non-negative number', severity: 'ERROR' });
          } else {
            netWeightKg = parsedWeight;
          }
        }

        let containerPriceAED: number | null = null;
        if (cpRaw && cpRaw.toUpperCase() !== 'POR' && cpRaw.toUpperCase() !== 'PRICE_ON_REQUEST') {
          const parsedCp = parseFloat(cpRaw);
          if (isNaN(parsedCp) || parsedCp < 0) {
            rowErrors.push('Invalid Container Price. Must be a positive number or POR.');
            errorList.push({ rowNumber: rowNum, identifier: id, field: 'containerPriceAED', value: cpRaw, error: 'Must be a valid price number or POR', severity: 'ERROR' });
          } else {
            containerPriceAED = parsedCp;
          }
        }

        let marketPriceAED: number | null = null;
        if (mpRaw && mpRaw.toUpperCase() !== 'POR' && mpRaw.toUpperCase() !== 'PRICE_ON_REQUEST') {
          const parsedMp = parseFloat(mpRaw);
          if (isNaN(parsedMp) || parsedMp < 0) {
            rowErrors.push('Invalid Market Price. Must be a positive number or POR.');
            errorList.push({ rowNumber: rowNum, identifier: id, field: 'marketPriceAED', value: mpRaw, error: 'Must be a valid price number or POR', severity: 'ERROR' });
          } else {
            marketPriceAED = parsedMp;
          }
        }

        // Duplicate Check
        const isDuplicate = id && existingIds.has(id.toLowerCase());

        if (rowErrors.length > 0) {
          invalidCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id || `Row-${rowNum}`,
            status: 'INVALID',
            data: rowObj,
            errors: rowErrors,
          });
        } else if (isDuplicate) {
          duplicateCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'DUPLICATE',
            data: rowObj,
            message: 'Existing product with this ID already exists. SKIPPED to protect existing record.',
          });
        } else {
          validCount++;
          const newProduct: FoodstuffProduct = {
            id,
            name,
            arabicName,
            category,
            origin,
            variety,
            grade,
            size,
            image: '/images/products/placeholder.webp',
            description: `${name} — Premium imported wholesale produce distributed by Barakah Al Rizq Foodstuff Trading L.L.C.`,
            defaultPackagingUnit: unit,
            defaultPackagingDetails: details,
            defaultNetWeightKg: netWeightKg,
            defaultMoq: moq,
            published: publishedRaw !== 'false' && publishedRaw !== 'archived' && publishedRaw !== 'no',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          validRowsToImport.push({
            product: newProduct,
            containerPricing: { priceAED: containerPriceAED, packagingUnit: unit, packagingDetails: details, netWeightKg, moq },
            marketPricing: { priceAED: marketPriceAED, packagingUnit: unit, packagingDetails: details, netWeightKg, minPurchaseQty: '10 Units' },
          });

          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'VALID',
            data: rowObj,
          });
        }
      });
    }

    // -------------------------------------------------------------
    // 2. CATEGORIES IMPORT
    // -------------------------------------------------------------
    else if (type === 'categories') {
      const existingIds = new Set(existingCategories.map((c) => c.id.toLowerCase()));
      const existingNames = new Set(existingCategories.map((c) => c.name.toLowerCase()));

      dataRows.forEach((row, idx) => {
        const rowNum = idx + 2;
        const rowObj: Record<string, string> = {};
        headerRow.forEach((h, colIdx) => {
          rowObj[h] = row[colIdx] !== undefined ? row[colIdx] : '';
        });

        const id = (rowObj['id'] || rowObj['category id'] || rowObj['category_id'] || '').trim();
        const name = (rowObj['name'] || rowObj['category key'] || '').trim();
        const displayName = (rowObj['displayname'] || rowObj['display name'] || name).trim();
        const arabicName = (rowObj['arabicname'] || rowObj['arabic name'] || '').trim();
        const description = (rowObj['description'] || '').trim();
        const displayOrderRaw = rowObj['displayorder'] || rowObj['display order'] || '0';
        const activeRaw = (rowObj['active'] || rowObj['status'] || 'true').trim().toLowerCase();

        const rowErrors: string[] = [];

        if (!id) {
          rowErrors.push('Missing required Category ID.');
          errorList.push({ rowNumber: rowNum, identifier: id || `Row-${rowNum}`, field: 'id', value: '', error: 'Missing required Category ID', severity: 'ERROR' });
        }
        if (!name) {
          rowErrors.push('Missing required Category Key/Name.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'name', value: '', error: 'Missing required Category Key', severity: 'ERROR' });
        }

        const isDuplicate = (id && existingIds.has(id.toLowerCase())) || (name && existingNames.has(name.toLowerCase()));

        if (rowErrors.length > 0) {
          invalidCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id || `Row-${rowNum}`,
            status: 'INVALID',
            data: rowObj,
            errors: rowErrors,
          });
        } else if (isDuplicate) {
          duplicateCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'DUPLICATE',
            data: rowObj,
            message: 'Existing category already exists. SKIPPED to protect existing record.',
          });
        } else {
          validCount++;
          const newCategory: FoodstuffCategoryItem = {
            id,
            name,
            displayName,
            arabicName,
            description,
            displayOrder: parseInt(displayOrderRaw, 10) || 0,
            active: activeRaw !== 'false' && activeRaw !== 'inactive' && activeRaw !== 'no',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          validRowsToImport.push(newCategory);
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'VALID',
            data: rowObj,
          });
        }
      });
    }

    // -------------------------------------------------------------
    // 3. CUSTOMERS IMPORT
    // -------------------------------------------------------------
    else if (type === 'customers') {
      const existingIds = new Set(existingCustomers.map((c) => c.id.toLowerCase()));
      const existingPhones = new Set(existingCustomers.map((c) => c.phone.replace(/[^\d]/g, '')));

      dataRows.forEach((row, idx) => {
        const rowNum = idx + 2;
        const rowObj: Record<string, string> = {};
        headerRow.forEach((h, colIdx) => {
          rowObj[h] = row[colIdx] !== undefined ? row[colIdx] : '';
        });

        const id = (rowObj['id'] || rowObj['customer id'] || rowObj['customer_id'] || '').trim();
        const name = (rowObj['name'] || rowObj['customer name'] || '').trim();
        const companyName = (rowObj['companyname'] || rowObj['company name'] || rowObj['company'] || '').trim();
        const phone = (rowObj['phone'] || rowObj['mobile'] || '').trim();
        const email = (rowObj['email'] || '').trim();
        const whatsapp = (rowObj['whatsapp'] || phone).trim();
        const trn = (rowObj['trn'] || rowObj['tax number'] || '').trim();
        const notes = (rowObj['notes'] || '').trim();

        const rowErrors: string[] = [];

        if (!name) {
          rowErrors.push('Missing required Customer Name.');
          errorList.push({ rowNumber: rowNum, identifier: id || `Row-${rowNum}`, field: 'name', value: '', error: 'Missing Customer Name', severity: 'ERROR' });
        }
        if (!phone) {
          rowErrors.push('Missing required Phone Number.');
          errorList.push({ rowNumber: rowNum, identifier: id || `Row-${rowNum}`, field: 'phone', value: '', error: 'Missing Phone Number', severity: 'ERROR' });
        }

        const cleanPhone = phone.replace(/[^\d]/g, '');
        const isDuplicate = (id && existingIds.has(id.toLowerCase())) || (cleanPhone && existingPhones.has(cleanPhone));

        if (rowErrors.length > 0) {
          invalidCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id || name || `Row-${rowNum}`,
            status: 'INVALID',
            data: rowObj,
            errors: rowErrors,
          });
        } else if (isDuplicate) {
          duplicateCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id || phone,
            status: 'DUPLICATE',
            data: rowObj,
            message: 'Existing customer with this ID/phone exists. SKIPPED to protect existing record.',
          });
        } else {
          validCount++;
          const targetId = id || `cust-${cleanPhone || Date.now()}`;
          const newCustomer: WholesaleCustomer = {
            id: targetId,
            name,
            companyName: companyName || undefined,
            phone,
            email,
            whatsapp,
            trn: trn || undefined,
            notes: notes || undefined,
            totalOrders: 0,
            totalCtn: 0,
            totalOrderValueAED: 0,
            completedOrderValueAED: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };
          validRowsToImport.push(newCustomer);
          previewList.push({
            rowNumber: rowNum,
            identifier: targetId,
            status: 'VALID',
            data: rowObj,
          });
        }
      });
    }

    // -------------------------------------------------------------
    // 4. WHOLESALE ORDERS IMPORT
    // -------------------------------------------------------------
    else if (type === 'orders') {
      const existingIds = new Set(existingOrders.map((o) => o.id.toLowerCase()));
      const validStatuses: WholesaleOrderStatus[] = ['PENDING', 'CONFIRMED', 'READY_FOR_PICKUP', 'COMPLETED', 'CANCELLED'];

      dataRows.forEach((row, idx) => {
        const rowNum = idx + 2;
        const rowObj: Record<string, string> = {};
        headerRow.forEach((h, colIdx) => {
          rowObj[h] = row[colIdx] !== undefined ? row[colIdx] : '';
        });

        const id = (rowObj['id'] || rowObj['order id'] || '').trim();
        const customerName = (rowObj['customername'] || rowObj['customer name'] || '').trim();
        const companyName = (rowObj['companyname'] || rowObj['company name'] || '').trim();
        const phone = (rowObj['phone'] || '').trim();
        const email = (rowObj['email'] || '').trim();
        const pickupDate = (rowObj['pickupdate'] || rowObj['pickup date'] || '').trim();
        const pickupTime = (rowObj['pickuptime'] || rowObj['pickup time'] || 'Morning 08:00 - 12:00').trim();
        const pickupLocation = (rowObj['pickuplocation'] || rowObj['pickup location'] || 'Al Aweer Central Fruit & Vegetable Market, Ras Al Khor, Dubai').trim();
        const orderType = (rowObj['ordertype'] || rowObj['order type'] || 'DUBAI_WHOLESALE').toUpperCase().trim();
        const totalCtnRaw = rowObj['totalctn'] || rowObj['total ctn'] || '0';
        const totalAEDRaw = rowObj['totalaed'] || rowObj['total aed'] || rowObj['order total'] || '0';
        const status = (rowObj['status'] || rowObj['order status'] || 'CONFIRMED').toUpperCase().trim() as WholesaleOrderStatus;
        const notes = (rowObj['notes'] || '').trim();

        const rowErrors: string[] = [];

        if (!id) {
          rowErrors.push('Missing required Order ID.');
          errorList.push({ rowNumber: rowNum, identifier: id || `Row-${rowNum}`, field: 'id', value: '', error: 'Missing Order ID', severity: 'ERROR' });
        }
        if (!customerName) {
          rowErrors.push('Missing required Customer Name.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'customerName', value: '', error: 'Missing Customer Name', severity: 'ERROR' });
        }
        if (!phone) {
          rowErrors.push('Missing required Phone Number.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'phone', value: '', error: 'Missing Phone Number', severity: 'ERROR' });
        }
        if (!pickupDate) {
          rowErrors.push('Missing Pickup Date.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'pickupDate', value: '', error: 'Missing Pickup Date', severity: 'ERROR' });
        }

        const totalCtn = parseInt(totalCtnRaw, 10);
        if (isNaN(totalCtn) || totalCtn <= 0) {
          rowErrors.push('Total CTN must be a positive integer.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'totalCtn', value: totalCtnRaw, error: 'Must be positive integer', severity: 'ERROR' });
        }

        const totalAED = parseFloat(totalAEDRaw);
        if (isNaN(totalAED) || totalAED <= 0) {
          rowErrors.push('Total AED must be a positive number.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'totalAED', value: totalAEDRaw, error: 'Must be positive number', severity: 'ERROR' });
        }

        if (!validStatuses.includes(status)) {
          rowErrors.push(`Invalid Status "${status}". Allowed: ${validStatuses.join(', ')}`);
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'status', value: status, error: 'Invalid Status Enum', severity: 'ERROR' });
        }

        const isDuplicate = id && existingIds.has(id.toLowerCase());

        if (rowErrors.length > 0) {
          invalidCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id || `Row-${rowNum}`,
            status: 'INVALID',
            data: rowObj,
            errors: rowErrors,
          });
        } else if (isDuplicate) {
          duplicateCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'DUPLICATE',
            data: rowObj,
            message: 'Existing wholesale order with this ID already exists. SKIPPED to protect order audit integrity.',
          });
        } else {
          validCount++;
          const newOrder: WholesaleOrder = {
            id,
            customerName,
            companyName: companyName || undefined,
            phone,
            email,
            pickupDate,
            pickupTime,
            pickupLocation,
            orderType: orderType === 'CONTAINER' || orderType === 'MIXED' ? orderType : 'DUBAI_WHOLESALE',
            items: [
              {
                productId: 'imported-wholesale-item',
                productName: 'Imported Wholesale Produce',
                orderType: orderType === 'CONTAINER' ? 'CONTAINER' : 'DUBAI_WHOLESALE',
                packagingUnit: 'CTN',
                pricePerCtn: totalCtn > 0 ? parseFloat((totalAED / totalCtn).toFixed(2)) : totalAED,
                quantityCtn: totalCtn,
                lineTotalAED: totalAED,
                moq: orderType === 'CONTAINER' ? 100 : 10,
              },
            ],
            totalCtn,
            totalAED,
            notes: notes || 'Imported via Central Import Center',
            status,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          validRowsToImport.push(newOrder);
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'VALID',
            data: rowObj,
          });
        }
      });
    }

    // -------------------------------------------------------------
    // 5. PAYMENTS IMPORT
    // -------------------------------------------------------------
    else if (type === 'payments') {
      const existingIds = new Set(existingPayments.map((p) => p.id.toLowerCase()));
      const existingOrderMap = new Map(existingOrders.map((o) => [o.id.toLowerCase(), o]));
      const validStatuses: PaymentTransactionStatus[] = ['VALID', 'REVERSED', 'REFUNDED'];
      const validMethods: WholesalePaymentMethod[] = ['CASH', 'BANK_TRANSFER', 'CARD', 'CHEQUE', 'OTHER'];
      const validTypes: WholesalePaymentType[] = ['FULL', 'PARTIAL', 'ADVANCE'];

      dataRows.forEach((row, idx) => {
        const rowNum = idx + 2;
        const rowObj: Record<string, string> = {};
        headerRow.forEach((h, colIdx) => {
          rowObj[h] = row[colIdx] !== undefined ? row[colIdx] : '';
        });

        const id = (rowObj['id'] || rowObj['payment id'] || '').trim();
        const orderId = (rowObj['orderid'] || rowObj['order id'] || '').trim();
        const customerName = (rowObj['customername'] || rowObj['customer name'] || '').trim();
        const companyName = (rowObj['companyname'] || rowObj['company name'] || '').trim();
        const phone = (rowObj['phone'] || '').trim();
        const email = (rowObj['email'] || '').trim();
        const amountRaw = rowObj['amountaed'] || rowObj['amount'] || '0';
        const paymentDate = (rowObj['paymentdate'] || rowObj['payment date'] || new Date().toISOString().slice(0, 10)).trim();
        const method = (rowObj['paymentmethod'] || rowObj['payment method'] || 'CASH').toUpperCase().trim() as WholesalePaymentMethod;
        const pType = (rowObj['paymenttype'] || rowObj['payment type'] || 'PARTIAL').toUpperCase().trim() as WholesalePaymentType;
        const referenceNumber = (rowObj['referencenumber'] || rowObj['reference'] || '').trim();
        const bankAccount = (rowObj['bankaccount'] || rowObj['bank'] || '').trim();
        const notes = (rowObj['notes'] || '').trim();
        const status = (rowObj['status'] || 'VALID').toUpperCase().trim() as PaymentTransactionStatus;

        const rowErrors: string[] = [];

        if (!id) {
          rowErrors.push('Missing required Payment ID.');
          errorList.push({ rowNumber: rowNum, identifier: id || `Row-${rowNum}`, field: 'id', value: '', error: 'Missing Payment ID', severity: 'ERROR' });
        }
        if (!orderId) {
          rowErrors.push('Missing required Order ID reference.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'orderId', value: '', error: 'Missing Order ID Reference', severity: 'ERROR' });
        } else {
          const referencedOrder = existingOrderMap.get(orderId.toLowerCase());
          if (!referencedOrder) {
            rowErrors.push(`Referenced Order "${orderId}" does not exist in wholesale orders.`);
            errorList.push({ rowNumber: rowNum, identifier: id, field: 'orderId', value: orderId, error: 'Referenced order not found', severity: 'ERROR' });
          } else if (referencedOrder.status === 'CANCELLED') {
            rowErrors.push(`Cannot record payment against CANCELLED order "${orderId}".`);
            errorList.push({ rowNumber: rowNum, identifier: id, field: 'orderId', value: orderId, error: 'Order is CANCELLED', severity: 'ERROR' });
          }
        }

        const amountAED = parseFloat(amountRaw);
        if (isNaN(amountAED) || amountAED <= 0) {
          rowErrors.push('Payment Amount AED must be a positive number greater than 0.');
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'amountAED', value: amountRaw, error: 'Amount must be > 0', severity: 'ERROR' });
        }

        if (!validStatuses.includes(status)) {
          rowErrors.push(`Invalid Payment Status "${status}". Allowed: ${validStatuses.join(', ')}`);
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'status', value: status, error: 'Invalid Status Enum', severity: 'ERROR' });
        }
        if (!validMethods.includes(method)) {
          rowErrors.push(`Invalid Payment Method "${method}". Allowed: ${validMethods.join(', ')}`);
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'paymentMethod', value: method, error: 'Invalid Payment Method', severity: 'ERROR' });
        }
        if (!validTypes.includes(pType)) {
          rowErrors.push(`Invalid Payment Type "${pType}". Allowed: ${validTypes.join(', ')}`);
          errorList.push({ rowNumber: rowNum, identifier: id, field: 'paymentType', value: pType, error: 'Invalid Payment Type', severity: 'ERROR' });
        }

        const isDuplicate = id && existingIds.has(id.toLowerCase());

        if (rowErrors.length > 0) {
          invalidCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id || `Row-${rowNum}`,
            status: 'INVALID',
            data: rowObj,
            errors: rowErrors,
          });
        } else if (isDuplicate) {
          duplicateCount++;
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'DUPLICATE',
            data: rowObj,
            message: 'Existing payment with this ID already exists. SKIPPED to protect payment audit trail.',
          });
        } else {
          validCount++;
          const refOrder = existingOrderMap.get(orderId.toLowerCase());
          const newPayment: WholesalePayment = {
            id,
            orderId,
            orderNumber: orderId,
            customerName: customerName || refOrder?.customerName || 'Wholesale Client',
            companyName: companyName || refOrder?.companyName || undefined,
            phone: phone || refOrder?.phone || '+971 50 000 0000',
            email: email || refOrder?.email,
            amountAED,
            paymentDate,
            paymentMethod: method,
            paymentType: pType,
            referenceNumber: referenceNumber || undefined,
            bankAccount: bankAccount || undefined,
            notes: notes || undefined,
            status,
            auditTrail: [
              {
                action: 'RECORDED',
                performedBy: session.email || 'admin@barakahalrizquae.com',
                timestamp: new Date().toISOString(),
                reason: 'Imported via Central Import Center',
              },
            ],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          validRowsToImport.push(newPayment);
          previewList.push({
            rowNumber: rowNum,
            identifier: id,
            status: 'VALID',
            data: rowObj,
          });
        }
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid import type. Allowed types: products, categories, customers, orders, payments.' },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------
    // IF ACTION === 'VALIDATE': Return Preview & Counts
    // -------------------------------------------------------------
    if (action === 'validate') {
      return NextResponse.json({
        success: true,
        action: 'validate',
        type,
        totalRows: dataRows.length,
        validCount,
        duplicateCount,
        invalidCount,
        errors: errorList,
        preview: previewList,
      });
    }

    // -------------------------------------------------------------
    // IF ACTION === 'EXECUTE': Persist Valid Non-Duplicate Records
    // -------------------------------------------------------------
    if (action === 'execute') {
      if (validRowsToImport.length === 0) {
        return NextResponse.json({
          success: false,
          message: 'No valid new records found to import. All rows were either invalid or skipped duplicates.',
          totalRows: dataRows.length,
          validCount: 0,
          importedCount: 0,
          skippedDuplicatesCount: duplicateCount,
          failedCount: invalidCount,
          errors: errorList,
        });
      }

      let importedCount = 0;
      const adminEmail = session.email || 'admin@barakahalrizquae.com';

      if (type === 'products') {
        for (const item of validRowsToImport) {
          await createFoodstuffProduct(
            item.product,
            item.containerPricing,
            item.marketPricing,
            adminEmail
          );
          importedCount++;
        }
      } else if (type === 'categories') {
        for (const cat of validRowsToImport) {
          await saveFoodstuffCategory(cat, adminEmail);
          importedCount++;
        }
      } else if (type === 'customers') {
        for (const cust of validRowsToImport) {
          await saveWholesaleCustomer(cust, adminEmail);
          importedCount++;
        }
      } else if (type === 'orders') {
        const { readLocalOrders, writeLocalOrders } = await import('@/lib/mongodb');
        const orders = (await getWholesaleOrders());
        for (const ord of validRowsToImport) {
          // Direct structured insertion ensuring exact historical ID and timestamps are preserved
          try {
            const { getWholesaleOrdersCollection } = await import('@/lib/mongodb');
            const col = await getWholesaleOrdersCollection();
            await col.insertOne({ ...ord, _id: ord.id });
          } catch {}
          importedCount++;
        }
        // Sync to local JSON fallback
        try {
          const local = (await getWholesaleOrders());
          const merged = [...validRowsToImport, ...local];
          const fs = await import('fs');
          const path = await import('path');
          const fp = path.join(process.cwd(), 'data', 'barakah', 'wholesale_orders.json');
          fs.writeFileSync(fp, JSON.stringify(merged, null, 2), 'utf-8');
        } catch {}
      } else if (type === 'payments') {
        const { writeLocalPayments, readLocalPayments, getWholesalePaymentsCollection } = await import('@/lib/mongodb');
        const currentPayments = readLocalPayments();
        const updatedPayments = [...validRowsToImport, ...currentPayments];
        writeLocalPayments(updatedPayments);

        try {
          const col = await getWholesalePaymentsCollection();
          for (const pay of validRowsToImport) {
            await col.insertOne({ ...pay, _id: pay.id });
          }
        } catch {}
        importedCount = validRowsToImport.length;
      }

      await logActivityToMongo(
        adminEmail,
        `IMPORT_${type.toUpperCase()}`,
        `Imported ${importedCount} records. Skipped ${duplicateCount} duplicates. Failed ${invalidCount} invalid rows.`
      );

      return NextResponse.json({
        success: true,
        action: 'execute',
        type,
        totalRows: dataRows.length,
        importedCount,
        skippedDuplicatesCount: duplicateCount,
        failedCount: invalidCount,
        errors: errorList,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json({ error: `Unknown action "${action}". Use "validate" or "execute".` }, { status: 400 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Import process failed.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
