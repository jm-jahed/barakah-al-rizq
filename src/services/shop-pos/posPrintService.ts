// ============================================================================
// RETAIL POS — THERMAL RECEIPT PRINT SERVICE & LOCAL PRINT BRIDGE
// Supports 58mm & 80mm Thermal Receipt Printers (USB, Bluetooth, Network/LAN)
// ESC/POS Command Generation + Local Print Bridge Client + WebUSB Support
// ============================================================================

import { CompletedSale } from '@/types/shopPos';

export interface PrinterConfig {
  type: 'bridge' | 'network' | 'usb_direct' | 'browser';
  mode?: 'bridge' | 'network' | 'usb_direct' | 'browser';
  paperWidth: '58mm' | '80mm';
  paperSize?: '58mm' | '80mm';
  printerName: string;
  bridgeUrl: string; // e.g. http://localhost:8088/print
  networkIp?: string;
  networkPort?: number; // default 9100 for ESC/POS LAN printers
  autoPrintOnCheckout: boolean;
  kickCashDrawer: boolean;
  printQrCode: boolean;
  language: 'en' | 'ar';
}

export const DEFAULT_PRINTER_CONFIG: PrinterConfig = {
  type: 'bridge',
  mode: 'bridge',
  paperWidth: '80mm',
  paperSize: '80mm',
  printerName: 'POS-80 Thermal Receipt Printer',
  bridgeUrl: 'http://localhost:8088/print',
  networkIp: '192.168.1.200',
  networkPort: 9100,
  autoPrintOnCheckout: true,
  kickCashDrawer: true,
  printQrCode: true,
  language: 'en',
};

// ESC/POS Byte Command Constants
const ESC = '\x1B';
const GS = '\x1D';
const INIT = `${ESC}@`;
const ALIGN_LEFT = `${ESC}a\x00`;
const ALIGN_CENTER = `${ESC}a\x01`;
const ALIGN_RIGHT = `${ESC}a\x02`;
const BOLD_ON = `${ESC}E\x01`;
const BOLD_OFF = `${ESC}E\x00`;
const DOUBLE_SIZE = `${GS}!\x11`;
const NORMAL_SIZE = `${GS}!\x00`;
const CUT_PAPER = `${GS}V\x42\x00`;
const KICK_DRAWER = `${ESC}p\x00\x19\xFA`;

/**
 * Format a key-value row with spaces padding according to printer paper width
 */
function formatReceiptRow(label: string, value: string, maxChars: number): string {
  const spaceNeeded = maxChars - label.length - value.length;
  if (spaceNeeded <= 0) {
    return `${label.slice(0, Math.max(1, maxChars - value.length - 1))} ${value}\n`;
  }
  return `${label}${' '.repeat(spaceNeeded)}${value}\n`;
}

/**
 * Generate raw ESC/POS text string for 58mm or 80mm thermal receipt printer
 */
export function generateEscPosReceipt(
  sale: CompletedSale,
  businessInfo: { name: string; branchName: string; trn: string; address: string; phone: string },
  paperWidth: '58mm' | '80mm' = '80mm'
): string {
  const maxChars = paperWidth === '58mm' ? 32 : 48;
  const lineSeparator = '-'.repeat(maxChars) + '\n';
  const doubleSeparator = '='.repeat(maxChars) + '\n';

  let buffer = '';

  // 1. Initialize Printer
  buffer += INIT;

  // 2. Header (Centered, Double Size for Store Name)
  buffer += ALIGN_CENTER;
  buffer += BOLD_ON + DOUBLE_SIZE;
  buffer += `${businessInfo.name}\n`;
  buffer += NORMAL_SIZE + BOLD_OFF;
  buffer += `${businessInfo.branchName}\n`;
  buffer += `${businessInfo.address}\n`;
  buffer += `Tel: ${businessInfo.phone}\n`;
  buffer += BOLD_ON + `TRN: ${businessInfo.trn}\n` + BOLD_OFF;
  buffer += `\n*** SIMPLIFIED TAX INVOICE ***\n\n`;

  // 3. Receipt Details (Left Aligned)
  buffer += ALIGN_LEFT;
  buffer += lineSeparator;
  buffer += formatReceiptRow('Invoice #:', sale.orderNumber, maxChars);
  buffer += formatReceiptRow('Receipt #:', sale.receiptNumber || sale.id, maxChars);
  buffer += formatReceiptRow('Date & Time:', sale.date, maxChars);
  buffer += formatReceiptRow('Cashier:', sale.cashierName, maxChars);
  if (sale.customerName) {
    buffer += formatReceiptRow('Customer:', sale.customerName, maxChars);
  }
  buffer += lineSeparator;

  // 4. Line Items Table
  buffer += BOLD_ON;
  buffer += paperWidth === '58mm'
    ? 'Item             Qty   Total\n'
    : 'Item Description              Qty   Price   Total\n';
  buffer += BOLD_OFF;
  buffer += lineSeparator;

  sale.items.forEach((item) => {
    const itemTotal = (item.price * item.quantity).toFixed(2);
    if (paperWidth === '58mm') {
      const namePart = item.name.slice(0, 16);
      const qtyPart = item.quantity.toString().padStart(4);
      const totalPart = itemTotal.padStart(8);
      buffer += `${namePart.padEnd(16)}${qtyPart} ${totalPart}\n`;
    } else {
      const namePart = item.name.slice(0, 26).padEnd(26);
      const qtyPart = item.quantity.toString().padStart(4);
      const pricePart = item.price.toFixed(2).padStart(7);
      const totalPart = itemTotal.padStart(8);
      buffer += `${namePart}${qtyPart} ${pricePart} ${totalPart}\n`;
    }
  });

  buffer += lineSeparator;

  // 5. Totals & VAT Breakdown
  buffer += formatReceiptRow('Subtotal:', `${sale.currencyCode} ${sale.subtotal.toFixed(2)}`, maxChars);
  if (sale.discountAmount > 0) {
    buffer += formatReceiptRow('Discount:', `-${sale.currencyCode} ${sale.discountAmount.toFixed(2)}`, maxChars);
  }
  buffer += formatReceiptRow('VAT (5% FTA):', `${sale.currencyCode} ${sale.vatAmount.toFixed(2)}`, maxChars);
  buffer += doubleSeparator;

  buffer += BOLD_ON + DOUBLE_SIZE;
  buffer += formatReceiptRow('TOTAL:', `${sale.currencyCode} ${sale.grandTotal.toFixed(2)}`, maxChars);
  buffer += NORMAL_SIZE + BOLD_OFF;

  buffer += doubleSeparator;
  buffer += formatReceiptRow('Payment Tender:', sale.paymentMethod.toUpperCase(), maxChars);
  buffer += formatReceiptRow('Amount Paid:', `${sale.currencyCode} ${sale.paidAmount.toFixed(2)}`, maxChars);
  if (sale.dueAmount && sale.dueAmount > 0) {
    buffer += BOLD_ON + formatReceiptRow('Balance Due:', `${sale.currencyCode} ${sale.dueAmount.toFixed(2)}`, maxChars) + BOLD_OFF;
  } else {
    buffer += formatReceiptRow('Change Due:', `${sale.currencyCode} ${sale.changeAmount.toFixed(2)}`, maxChars);
  }

  // 6. Footer
  buffer += '\n' + ALIGN_CENTER;
  buffer += 'Thank you for shopping with us!\n';
  buffer += 'Please retain receipt for returns within 14 days.\n';
  buffer += 'Powered by WebStudio AE — Universal Retail POS\n\n\n';

  // 7. Drawer Kick & Paper Cut
  buffer += KICK_DRAWER;
  buffer += CUT_PAPER;

  return buffer;
}

/**
 * Send raw print payload to local print bridge server (HTTP POST /print)
 */
export async function sendPrintJob(
  sale: CompletedSale,
  config: PrinterConfig,
  businessInfo: { name: string; branchName: string; trn: string; address: string; phone: string }
): Promise<{ success: boolean; printerName: string; error?: string; method: string }> {
  try {
    const rawPayload = generateEscPosReceipt(sale, businessInfo, config.paperWidth);

    const response = await fetch(config.bridgeUrl || 'http://localhost:8088/print', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        printerName: config.printerName,
        paperWidth: config.paperWidth,
        rawPayload,
        kickDrawer: config.kickCashDrawer,
        orderNumber: sale.orderNumber,
      }),
    });

    if (response.ok) {
      return {
        success: true,
        printerName: config.printerName,
        method: 'Local Print Bridge',
      };
    } else {
      const errText = await response.text();
      return {
        success: false,
        printerName: config.printerName,
        error: `Bridge server error (${response.status}): ${errText || 'Print request rejected'}`,
        method: 'Local Print Bridge',
      };
    }
  } catch (err: any) {
    return {
      success: false,
      printerName: config.printerName,
      error: `Could not reach Local Print Bridge at ${config.bridgeUrl}. Ensure local print bridge daemon is running.`,
      method: 'Local Print Bridge',
    };
  }
}

/**
 * Test print trigger function for settings page
 */
export async function sendTestPrintJob(
  config: PrinterConfig,
  businessInfo: { name: string; branchName: string; trn: string; address: string; phone: string }
): Promise<{ success: boolean; printerName: string; error?: string; method: string }> {
  const dummySale: CompletedSale = {
    id: 'TEST-001',
    orderNumber: 'TEST-REC-001',
    receiptNumber: 'TEST-REC-001',
    date: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' }),
    cashierName: 'System Admin',
    items: [
      {
        productId: 't1',
        sku: 'TEST-01',
        barcode: '629100000001',
        name: 'Test Printer Calibration Item',
        price: 10.00,
        quantity: 1,
        discount: 0,
        discountType: 'fixed',
        image: '',
        unit: 'Pcs',
      },
    ],
    subtotal: 10.00,
    discountAmount: 0,
    vatAmount: 0.50,
    grandTotal: 10.50,
    paidAmount: 20.00,
    changeAmount: 9.50,
    paymentMethod: 'cash',
    currencyCode: 'AED',
  };

  return sendPrintJob(dummySale, config, businessInfo);
}

/**
 * Health check ping to local print bridge server
 */
export async function testPrinterBridgeConnection(
  bridgeUrl: string
): Promise<{ isConnected: boolean; type: 'bridge' | 'gateway' | 'none'; message: string }> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500);

    const targetUrl = (bridgeUrl || 'http://localhost:8088/print').replace(/\/print$/, '/health');
    const res = await fetch(targetUrl, {
      method: 'GET',
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      return {
        isConnected: true,
        type: 'bridge',
        message: 'Connected to Local Thermal Print Bridge (Port 8088)',
      };
    } else {
      return {
        isConnected: false,
        type: 'none',
        message: `Not Connected (HTTP ${res.status}). Ensure print bridge daemon is active on port 8088.`,
      };
    }
  } catch {
    return {
      isConnected: false,
      type: 'none',
      message: 'Not Connected — Local Print Bridge Disconnected (http://localhost:8088)',
    };
  }
}
