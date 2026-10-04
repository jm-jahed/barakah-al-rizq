import { InvoiceItem, InvoiceTotals } from "@/types/invoice";
import { numberToArabicWords, numberToEnglishWords } from "./tafqeet";

export function formatUAEAmount(value: number, decimals: number = 3): string {
  if (isNaN(value)) return "0.000";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatUAEQuantity(value: number): string {
  if (isNaN(value)) return "0";
  return value.toLocaleString("en-US", {
    maximumFractionDigits: 3,
  });
}

export function calculateInvoiceTotals(
  items: InvoiceItem[],
  discount: number = 0
): InvoiceTotals {
  let subtotal = 0;
  let totalQuantity = 0;
  let vatAmount = 0;

  items.forEach((item) => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.unitPrice) || 0;
    const vatRate = Number(item.vatPercent) || 0;
    const lineTotal = qty * price;

    totalQuantity += qty;
    subtotal += lineTotal;
    vatAmount += (lineTotal * vatRate) / 100;
  });

  const netAmount = Math.max(0, subtotal - (Number(discount) || 0));
  
  // If line items don't have per-line VAT override or VAT is standard 5% on net:
  // standard UAE tax calculation:
  const calculatedVat = (netAmount * 5) / 100;
  const finalVat = vatAmount > 0 ? (vatAmount * (subtotal > 0 ? netAmount / subtotal : 1)) : calculatedVat;
  const grandTotal = netAmount + finalVat;

  return {
    totalQuantity,
    subtotal,
    discount: Number(discount) || 0,
    netAmount,
    vatAmount: finalVat,
    grandTotal,
    amountInWordsArabic: numberToArabicWords(grandTotal),
    amountInWordsEnglish: numberToEnglishWords(grandTotal),
  };
}
