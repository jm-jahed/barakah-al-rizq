import * as XLSX from "xlsx";
import { Invoice } from "@/types/invoice";
import { formatUAEAmount } from "./calculations";

export function exportInvoiceToExcel(invoice: Invoice) {
  // Create a structured worksheet layout
  const rows: any[][] = [];

  // Row 1: Header / Company Names
  rows.push([invoice.company.mobile, "", invoice.company.englishName, "", "", "", invoice.company.arabicName, invoice.company.mobileArabic]);
  rows.push([invoice.company.email, "", `TRN: ${invoice.company.trn}`, "", "", "", invoice.company.addressArabic1, ""]);
  rows.push(["", "", "", "", "", "", invoice.company.addressArabic2, ""]);
  rows.push([]);

  // Row 5: Invoice Title & Number
  rows.push([`Date: ${invoice.meta.invoiceDate}`, "", "", "TAX INVOICE - فاتورة ضريبية", "", "", `Invoice No / الرقم:`, invoice.meta.invoiceNumber]);
  rows.push([]);

  // Row 7: Customer Info
  rows.push([`Customer Name / اسم العميل:`, invoice.customer.name, "", "", "", "", `Account No / رقم الحساب:`, invoice.customer.accountNumber]);
  rows.push([`Customer TRN / الرقم الضريبي:`, invoice.customer.trn, "", "", "", "", "", ""]);
  rows.push([]);

  // Row 10: Table Header (RTL representation)
  // [الإجمالي, السعر, ضريبة %, الكمية, الوحدة, البيان, رمز المادة, الرقم]
  rows.push([
    "الإجمالي (Total)",
    "السعر (Price)",
    "ضريبة % (VAT)",
    "الكمية (Qty)",
    "الوحدة (Unit)",
    "البيان (Description)",
    "رمز المادة (Item Code)",
    "الرقم (No.)"
  ]);

  // Item Rows
  invoice.items.forEach((item, index) => {
    rows.push([
      formatUAEAmount(item.lineTotal),
      formatUAEAmount(item.unitPrice),
      `${item.vatPercent}%`,
      item.quantity,
      item.unit,
      item.description,
      item.itemCode,
      item.itemNumber || index + 1,
    ]);
  });

  // Empty spacer rows to mimic invoice
  for (let i = 0; i < Math.max(0, 10 - invoice.items.length); i++) {
    rows.push(["", "", "", "", "", "", "", ""]);
  }

  // Totals Section
  rows.push([formatUAEAmount(invoice.totals.subtotal), "الإجمالي : Subtotal", invoice.totals.totalQuantity, "", "", "", "Notes / ملاحظات:", ""]);
  rows.push([formatUAEAmount(invoice.totals.discount), "الخصم : Discount", "", "", "", "", invoice.meta.notes || "", ""]);
  rows.push([formatUAEAmount(invoice.totals.netAmount), "الصافي : Net Amount", "", "", "", "", "", ""]);
  rows.push([formatUAEAmount(invoice.totals.vatAmount), "الضريبة : VAT 5%", "", "", "", "", "", ""]);
  rows.push([formatUAEAmount(invoice.totals.grandTotal), "المجموع الكلي : Grand Total", invoice.totals.amountInWordsArabic, "", "", "", "", ""]);
  
  rows.push([]);
  rows.push(["Receiver Signature / توقيع المستلم:", "", "", "", "Seller Signature / توقيع البائع:", "", "", ""]);

  const worksheet = XLSX.utils.aoa_to_sheet(rows);

  // Set column widths
  worksheet["!cols"] = [
    { wch: 16 }, // Total
    { wch: 14 }, // Price
    { wch: 10 }, // VAT
    { wch: 10 }, // Qty
    { wch: 12 }, // Unit
    { wch: 30 }, // Description
    { wch: 14 }, // Code
    { wch: 8 },  // No
  ];

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, `Invoice_${invoice.meta.invoiceNumber}`);

  XLSX.writeFile(workbook, `Invoice_${invoice.meta.invoiceNumber}_${invoice.customer.name.slice(0, 15).trim()}.xlsx`);
}
