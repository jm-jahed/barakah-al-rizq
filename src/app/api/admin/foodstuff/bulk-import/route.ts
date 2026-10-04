import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { getAdminSession } from '@/lib/auth/session';
import { FoodstuffPriceSource } from '@/lib/db/types';
import {
  getFoodstuffProducts,
  getFoodstuffContainerPrices,
  getFoodstuffMarketPrices,
  bulkUpdateFoodstuffPrices,
} from '@/lib/mongodb';

interface ParsedImportRow {
  rowNumber: number;
  productId: string;
  matchedProductName: string;
  type: 'CONTAINER' | 'DUBAI_MARKET';
  priceAED: number | null;
  packagingUnit: string;
  packagingDetails: string;
  netWeightKg: number | null;
  moq?: string;
  containerAvailability?: string;
  minPurchaseQty?: string;
  businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  quotationNotes?: string;
  oldPriceAED: number | null;
  changePercent: number | null;
  isValid: boolean;
  errors: string[];
}

interface CommitRowInput {
  productId: string;
  priceAED?: number | string | null;
  packagingUnit?: string;
  packagingDetails?: string;
  netWeightKg?: number | string | null;
  businessStatus?: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
  moq?: string;
  containerAvailability?: string;
  minPurchaseQty?: string;
  quotationNotes?: string;
}

export async function POST(req: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const contentType = req.headers.get('content-type') || '';
    let action = 'DRY_RUN';
    let fileBuffer: Buffer | null = null;
    let targetType: 'CONTAINER' | 'DUBAI_MARKET' = 'CONTAINER';
    let commitRows: CommitRowInput[] | null = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      action = (formData.get('action') as string) || 'DRY_RUN';
      targetType = ((formData.get('type') as string) || 'CONTAINER') as 'CONTAINER' | 'DUBAI_MARKET';
      const file = formData.get('file') as File | null;

      if (file) {
        const arrayBuffer = await file.arrayBuffer();
        fileBuffer = Buffer.from(arrayBuffer);
      }
    } else {
      const json = await req.json();
      action = json.action || 'DRY_RUN';
      targetType = json.type || 'CONTAINER';
      if (json.base64File) {
        fileBuffer = Buffer.from(json.base64File, 'base64');
      }
      if (json.rows) {
        commitRows = json.rows;
      }
    }

    const verifiedProducts = await getFoodstuffProducts();
    const existingPrices = targetType === 'CONTAINER' 
      ? await getFoodstuffContainerPrices() 
      : await getFoodstuffMarketPrices();

    // -------------------------------------------------------------
    // ACTION: COMMIT (Explicit confirmation after dry-run review)
    // -------------------------------------------------------------
    if (action === 'COMMIT') {
      if (!commitRows || !Array.isArray(commitRows) || commitRows.length === 0) {
        return NextResponse.json({ error: 'No validated rows provided for commit' }, { status: 400 });
      }

      // Re-validate that all commit rows map to real products
      const validRowsToCommit: Array<{
        productId: string;
        priceAED: number | null;
        packagingUnit: string;
        packagingDetails: string;
        netWeightKg: number | null;
        businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST';
        moq?: string;
        containerAvailability?: string;
        minPurchaseQty?: string;
        quotationNotes?: string;
      }> = [];
      const seenProductIds = new Set<string>();

      for (const row of commitRows) {
        const prod = verifiedProducts.find((p) => p.id === row.productId);
        if (!prod) continue;
        if (seenProductIds.has(row.productId)) continue; // ignore duplicate
        seenProductIds.add(row.productId);

        validRowsToCommit.push({
          productId: prod.id,
          priceAED: row.priceAED === null || row.priceAED === undefined ? null : parseFloat(String(row.priceAED)),
          packagingUnit: row.packagingUnit || prod.defaultPackagingUnit,
          packagingDetails: row.packagingDetails || prod.defaultPackagingDetails,
          netWeightKg: row.netWeightKg ? parseFloat(String(row.netWeightKg)) : prod.defaultNetWeightKg,
          businessStatus: row.priceAED === null || row.priceAED === undefined ? 'PRICE_ON_REQUEST' : (row.businessStatus || 'AVAILABLE'),
          moq: row.moq || prod.defaultMoq,
          containerAvailability: row.containerAvailability,
          minPurchaseQty: row.minPurchaseQty,
          quotationNotes: row.quotationNotes,
        });
      }

      if (validRowsToCommit.length === 0) {
        return NextResponse.json({ error: 'Zero valid rows matched verified products' }, { status: 400 });
      }

      const source: FoodstuffPriceSource = 'EXCEL_IMPORT';
      const result = await bulkUpdateFoodstuffPrices(targetType, validRowsToCommit, session.email, source);

      return NextResponse.json({
        success: true,
        action: 'COMMIT',
        updatedCount: result.updatedCount,
        timestamp: result.timestamp,
      });
    }

    // -------------------------------------------------------------
    // ACTION: DRY_RUN (Parse, Validate, Detect Duplicates, Show Diff)
    // ZERO DATABASE MUTATIONS OCCUR HERE.
    // -------------------------------------------------------------
    if (!fileBuffer) {
      return NextResponse.json({ error: 'No Excel or CSV file provided for dry-run analysis' }, { status: 400 });
    }

    let workbook;
    try {
      workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    } catch {
      return NextResponse.json({ error: 'Failed to read file. Please ensure it is a valid Excel or CSV document.' }, { status: 400 });
    }

    const firstSheetName = workbook.SheetNames[0];
    if (!firstSheetName) {
      return NextResponse.json({ error: 'File contains no sheets' }, { status: 400 });
    }

    const worksheet = workbook.Sheets[firstSheetName];
    const rawRows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

    if (rawRows.length === 0) {
      return NextResponse.json({ error: 'Sheet is empty or has no data rows' }, { status: 400 });
    }

    const parsedRows: ParsedImportRow[] = [];
    const seenProductIdsInSheet = new Set<string>();

    let rowIdx = 1;
    for (const raw of rawRows) {
      rowIdx++;
      const rowErrors: string[] = [];

      // Extract raw fields with flexible column header matching
      const rawId = (raw['Product ID'] || raw['productId'] || raw['Product Code'] || raw['ID'] || '').toString().trim();
      const rawName = (raw['Product Name'] || raw['productName'] || raw['Name'] || raw['Commodity'] || '').toString().trim();
      const rawPrice = raw['Price (AED)'] ?? raw['Price AED'] ?? raw['Price'] ?? raw['priceAED'] ?? raw['Rate'];
      const rawPkgUnit = (raw['Packaging Unit'] || raw['Unit'] || raw['packagingUnit'] || '').toString().trim().toUpperCase();
      const rawPkgDetails = (raw['Packaging Details'] || raw['Packaging'] || raw['packagingDetails'] || '').toString().trim();
      const rawNetWeight = raw['Net Weight (KG)'] ?? raw['Net Weight KG'] ?? raw['Weight'] ?? raw['netWeightKg'];
      const rawMoq = (raw['MOQ'] || raw['Minimum Order'] || raw['moq'] || '').toString().trim();
      const rawMinQty = (raw['Min Purchase'] || raw['Min Qty'] || raw['minPurchaseQty'] || '').toString().trim();
      const rawStatus = (raw['Status'] || raw['businessStatus'] || '').toString().trim().toUpperCase();
      const rawNotes = (raw['Notes'] || raw['Quotation Notes'] || '').toString().trim();

      // Rule 5: Strict mapping to existing FoodstuffProduct
      let matchedProd = verifiedProducts.find(
        (p) => p.id.toLowerCase() === rawId.toLowerCase()
      );

      if (!matchedProd && rawName) {
        matchedProd = verifiedProducts.find(
          (p) => p.name.toLowerCase() === rawName.toLowerCase()
        );
      }

      if (!matchedProd) {
        rowErrors.push(
          `Unknown Product ID/Name: "${rawId || rawName}". Products cannot be auto-created from imported files. It must match an existing verified catalog item.`
        );
      }

      // Check duplicates
      const effectiveId = matchedProd ? matchedProd.id : rawId || `unknown-${rowIdx}`;
      if (seenProductIdsInSheet.has(effectiveId)) {
        rowErrors.push(`Duplicate row in sheet for product "${effectiveId}". Only one price row per product is permitted.`);
      } else {
        seenProductIdsInSheet.add(effectiveId);
      }

      // Validate price
      let cleanPrice: number | null = null;
      if (rawPrice !== '' && rawPrice !== null && rawPrice !== undefined) {
        const strPrice = rawPrice.toString().toUpperCase().trim();
        if (strPrice === 'PRICE ON REQUEST' || strPrice === 'POR' || strPrice === 'REQUEST' || strPrice === 'NULL') {
          cleanPrice = null;
        } else {
          const num = parseFloat(strPrice.replace(/[^0-9.]/g, ''));
          if (isNaN(num) || num < 0) {
            rowErrors.push(`Invalid price value "${rawPrice}". Must be a positive number or 'PRICE ON REQUEST'.`);
          } else {
            cleanPrice = parseFloat(num.toFixed(2));
          }
        }
      }

      // Validate net weight
      let cleanNetWeight: number | null = null;
      if (rawNetWeight !== '' && rawNetWeight !== null && rawNetWeight !== undefined) {
        const num = parseFloat(rawNetWeight.toString().replace(/[^0-9.]/g, ''));
        if (!isNaN(num) && num > 0) {
          cleanNetWeight = parseFloat(num.toFixed(2));
        }
      } else if (matchedProd) {
        cleanNetWeight = matchedProd.defaultNetWeightKg;
      }

      // Find existing price to calculate diff
      const existingRecord = existingPrices.find((p) => p.productId === matchedProd?.id);
      const oldPrice = existingRecord?.priceAED ?? null;

      let pct: number | null = null;
      if (oldPrice !== null && cleanPrice !== null && oldPrice > 0) {
        pct = parseFloat((((cleanPrice - oldPrice) / oldPrice) * 100).toFixed(1));
      }

      let businessStatus: 'AVAILABLE' | 'OUT_OF_STOCK' | 'PRICE_ON_REQUEST' = 'AVAILABLE';
      if (cleanPrice === null) {
        businessStatus = 'PRICE_ON_REQUEST';
      } else if (rawStatus === 'OUT_OF_STOCK' || rawStatus === 'OUT OF STOCK') {
        businessStatus = 'OUT_OF_STOCK';
      }

      parsedRows.push({
        rowNumber: rowIdx,
        productId: matchedProd ? matchedProd.id : rawId || `ROW_${rowIdx}`,
        matchedProductName: matchedProd ? matchedProd.name : (rawName || 'Unmatched Product'),
        type: targetType,
        priceAED: cleanPrice,
        packagingUnit: rawPkgUnit || matchedProd?.defaultPackagingUnit || 'BOX',
        packagingDetails: rawPkgDetails || matchedProd?.defaultPackagingDetails || 'Standard Wholesale Package',
        netWeightKg: cleanNetWeight,
        moq: rawMoq || matchedProd?.defaultMoq,
        minPurchaseQty: rawMinQty,
        businessStatus,
        quotationNotes: rawNotes,
        oldPriceAED: oldPrice,
        changePercent: pct,
        isValid: rowErrors.length === 0,
        errors: rowErrors,
      });
    }

    const validRows = parsedRows.filter((r) => r.isValid);
    const errorRows = parsedRows.filter((r) => !r.isValid);

    return NextResponse.json({
      success: true,
      action: 'DRY_RUN',
      targetType,
      summary: {
        totalRows: parsedRows.length,
        validCount: validRows.length,
        errorCount: errorRows.length,
        canCommit: validRows.length > 0 && errorRows.length === 0,
      },
      rows: parsedRows,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Bulk import processing failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
