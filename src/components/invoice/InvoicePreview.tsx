"use client";

import React from "react";
import { Invoice } from "@/types/invoice";
import { formatUAEAmount, formatUAEQuantity } from "@/utils/calculations";
import { numberToArabicWords } from "@/utils/tafqeet";
import { isDemoMode } from "@/services/invoiceStorage";

interface InvoicePreviewProps {
  invoice: Invoice;
  previewScale?: number;
  containerId?: string;
}

export default function InvoicePreview({
  invoice,
  previewScale = 1,
  containerId = "invoice-print-container",
}: InvoicePreviewProps) {
  // 19 grid ledger rows total (added 2 extra rows for full ledger page proportion)
  const totalGridRows = 19;
  const emptyRowsCount = Math.max(0, totalGridRows - invoice.items.length);

  // Mode-aware brand safety: In Demo Mode, never display or fallback to real Nabta / Xender production records
  const isDemo = isDemoMode();
  const defaultArabicName = isDemo ? "شركة القمة للتجارة والخدمات التجارية – ذ.م.م" : "نبتة لتجارة الخضروات و الفاكهة - ذ.م.م - ش.ش.و";
  const defaultEnglishName = isDemo ? "APEX COMMERCIAL TRADING & SERVICES L.L.C" : "NABTA VEGETABLES AND FRUITS TRADING L.L.C - S.P.C";
  const defaultPhone = isDemo ? "+971 4 388 9200" : "052512775";
  const defaultMobileArabic = isDemo ? "متحرك : ٠٥٠٨٤٢١٩٨٠" : "متحرك : ٠٥٢٥١٢٧٧٥";
  const defaultEmail = isDemo ? "billing@apextrading.ae" : "kattan4@hotmail.com";
  const defaultTrn = isDemo ? "100294817200003" : "104798388500003";
  const defaultAddress1 = isDemo ? "منطقة القوز الصناعية ۳ ، دبي" : "مدينة ابوظبى الصناعية ، ايكاد ۳ مبنى";
  const defaultAddress2 = isDemo ? "دولة الإمارات العربية المتحدة ، ص.ب 48920" : "شركة ابوظبى للمواني ش . م . ع";

  const defaultCustomerName = isDemo ? "AL NOOR SUPERMARKET L.L.C" : "XENDER FOR TRADING L.L.C";
  const defaultCustomerTrn = isDemo ? "DUBAI 100482910400003" : "DUBAI 100584661100003";
  const defaultCustomerAccount = isDemo ? "401" : "429";
  const defaultInvoiceNumber = isDemo ? "INV-2026-1001" : "8206";

  const companyArabic = isDemo && invoice.company?.arabicName?.includes("نبتة")
    ? defaultArabicName
    : (invoice.company?.arabicName || defaultArabicName);

  const companyEnglish = isDemo && invoice.company?.englishName?.includes("NABTA")
    ? defaultEnglishName
    : (invoice.company?.englishName || defaultEnglishName);

  const companyPhone = isDemo && (invoice.company?.phone?.includes("052512775") || !invoice.company?.phone)
    ? defaultPhone
    : (invoice.company?.phone || defaultPhone);

  const companyMobileArabic = isDemo && (invoice.company?.mobileArabic?.includes("٠٥٢٥١٢٧٧") || !invoice.company?.mobileArabic)
    ? defaultMobileArabic
    : (invoice.company?.mobileArabic || defaultMobileArabic);

  const companyEmail = isDemo && (invoice.company?.email?.includes("hotmail") || !invoice.company?.email)
    ? defaultEmail
    : (invoice.company?.email || defaultEmail);

  const companyTrn = isDemo && (invoice.company?.trn === "104798388500003" || !invoice.company?.trn)
    ? defaultTrn
    : (invoice.company?.trn || defaultTrn);

  const companyAddress1 = isDemo && (invoice.company?.addressArabic1?.includes("ايكاد") || !invoice.company?.addressArabic1)
    ? defaultAddress1
    : (invoice.company?.addressArabic1 || defaultAddress1);

  const companyAddress2 = isDemo && (invoice.company?.addressArabic2?.includes("المواني") || !invoice.company?.addressArabic2)
    ? defaultAddress2
    : (invoice.company?.addressArabic2 || defaultAddress2);

  const rawCustomerName = invoice.customer?.name ? invoice.customer.name.replace(".المحترمين", "").replace("المحترمين", "").trim() : "";
  const customerName = isDemo && (rawCustomerName.includes("XENDER") || !rawCustomerName)
    ? defaultCustomerName
    : (rawCustomerName || defaultCustomerName);

  const customerTrn = isDemo && (invoice.customer?.trn?.includes("100584661100003") || !invoice.customer?.trn)
    ? defaultCustomerTrn
    : (invoice.customer?.trn || defaultCustomerTrn);

  const customerAccount = isDemo && (invoice.customer?.accountNumber === "429" || !invoice.customer?.accountNumber)
    ? defaultCustomerAccount
    : (invoice.customer?.accountNumber || defaultCustomerAccount);

  const invoiceNumber = isDemo && (invoice.meta?.invoiceNumber === "8206" || !invoice.meta?.invoiceNumber)
    ? defaultInvoiceNumber
    : (invoice.meta?.invoiceNumber || defaultInvoiceNumber);

  return (
    <div className="w-full overflow-x-auto overscroll-x-contain py-2 print:py-0 print:overflow-visible touch-pan-x flex justify-start sm:justify-center">
      {/* Visual Scaled Bounding Box */}
      <div
        style={{
          width: previewScale !== 1 ? `${210 * previewScale}mm` : "210mm",
          minWidth: previewScale !== 1 ? `${210 * previewScale}mm` : "210mm",
          height: previewScale !== 1 ? `${297 * previewScale}mm` : "297mm",
        }}
        className="flex-shrink-0 origin-top mx-auto"
      >
        {/* Printable Physical Sheet (Exact 210mm x 297mm A4 Dimensions) */}
        <div
          id={containerId}
          className="bg-white text-black leading-none select-none box-border flex flex-col justify-between"
          style={{
            width: "210mm",
            height: "297mm",
            padding: "8mm 10mm 6mm 10mm", // Precise physical margins matching original printed bill
            transform: previewScale !== 1 ? `scale(${previewScale})` : undefined,
            transformOrigin: "top left",
          }}
        >
          <div>
            {/* ========================================================================= */}
            {/* 1. HEADER SECTION                                                         */}
          {/* ========================================================================= */}
          <div>
            {/* Top Center: Company Arabic & English Titles */}
            <div className="text-center flex flex-col items-center justify-center pb-1">
              <h1
                className="font-bold text-black text-[16px] tracking-normal leading-tight"
                dir="rtl"
                style={{ fontFamily: "'Times New Roman', 'Traditional Arabic', serif" }}
              >
                {companyArabic}
              </h1>
              <h2
                className="font-bold uppercase text-black tracking-tight mt-0.5 text-[14px]"
                style={{ fontFamily: "'Times New Roman', Times, serif" }}
              >
                {companyEnglish}
              </h2>
            </div>

            {/* 3 Columns: Left: Mob & Email | Middle: TRN | Right: Arabic Address */}
            <div className="grid grid-cols-12 items-end pt-1 text-black">
              {/* LEFT: Mob & E-mail (LTR) */}
              <div
                className="col-span-4 text-left text-[12px] font-bold leading-tight"
                dir="ltr"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                <p className="font-bold text-black whitespace-nowrap">
                  Mob: {companyPhone}
                </p>
                <p className="font-bold text-black whitespace-nowrap text-[11.5px] mt-0.5">
                  E-mail: {companyEmail}
                </p>
              </div>

              {/* MIDDLE: TRN: (Center) */}
              <div
                className="col-span-4 text-center font-bold text-black text-[12.5px] pb-0.5"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                <span>TRN: </span>
                <span className="font-bold tracking-wider">{companyTrn}</span>
              </div>

              {/* RIGHT: Arabic Address Details (RTL) */}
              <div
                className="col-span-4 text-right text-[12px] font-bold leading-tight"
                dir="rtl"
                style={{ fontFamily: "'Times New Roman', 'Traditional Arabic', serif" }}
              >
                <p className="font-bold text-black whitespace-nowrap">
                  {companyMobileArabic}
                </p>
                <p className="font-bold text-black whitespace-nowrap text-[11.5px] mt-0.5 text-right">
                  {companyAddress1}
                </p>
                <p className="font-bold text-black whitespace-nowrap text-[11.5px] text-right">
                  {companyAddress2}
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2 & 3. BOXED INVOICE TITLE & CUSTOMER INFO (DISTINCT SEPARATE BOX)        */}
          {/* ========================================================================= */}
          <div className="mt-2.5 border border-black bg-white pt-2.5 pb-2.5 px-3">
            {/* Title Row: Date (Far Left), TAX INVOICE – فاتورة ضريبية (Center), Invoice Number THEN : الرقم (Far Right) */}
            <div className="flex items-center justify-between text-black px-1">
              {/* Far Left: Date with Underline */}
              <div className="flex items-center text-[14px] font-bold text-black" dir="ltr">
                <div className="border-b border-black font-bold text-[16px] px-3 min-w-[130px] text-center flex items-center justify-center h-[26px] pb-0.5 leading-none" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {invoice.meta.invoiceDate || "17–08–2026"}
                </div>
                <span className="font-bold whitespace-nowrap text-[15px] leading-none" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
                  :التاريخ
                </span>
              </div>

              {/* Center: TAX INVOICE - فاتورة ضريبية */}
              <div className="flex items-center justify-center gap-2 text-black leading-none">
                <span
                  className="font-bold text-[16px] tracking-wide"
                  style={{ fontFamily: "'Times New Roman', Times, serif" }}
                >
                  TAX INVOICE -
                </span>
                <span
                  className="font-bold text-[18px] leading-none"
                  style={{
                    fontFamily: "'Simplified Arabic', 'Traditional Arabic', 'Geeza Pro', Tahoma, Arial, sans-serif",
                    letterSpacing: "normal",
                  }}
                >
                  فاتورة ضريبية
                </span>
              </div>

              {/* Far Right: [ Number_______ ]  : الرقم */}
              <div className="flex items-center justify-end text-[14px] font-bold text-black" dir="ltr">
                <div className="border-b border-black font-bold text-[17px] px-8 min-w-[120px] text-center flex items-center justify-center h-[26px] pb-0.5 mr-2 leading-none" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {invoiceNumber}
                </div>
                <span className="font-bold whitespace-nowrap text-[15px] leading-none" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
                  : الرقم
                </span>
              </div>
            </div>

            {/* Customer Info Section */}
            <div className="mt-3 text-[13px] text-black px-1" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
              {/* Row 1: [Long Dots (Left)] + [Customer Name (Middle)] + [اسم العميل : السادة / المحترمين . (Middle)] + [___ Account ___] + [رقم الحساب: (Right)] */}
              <div className="flex items-center justify-start" dir="rtl">
                {/* Right Side: رقم الحساب: + Underline Account */}
                <div className="flex items-center shrink-0 ml-8" dir="rtl">
                  <span className="font-bold text-[13.5px] whitespace-nowrap ml-2 text-black">
                    رقم الحساب:
                  </span>
                  <div className="border-b border-black font-bold text-[15px] px-6 min-w-[85px] text-center pb-0.5" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                    {customerAccount}
                  </div>
                </div>

                {/* Middle: اسم العميل : السادة / المحترمين . + Customer Name */}
                <span className="font-bold whitespace-nowrap text-black shrink-0 text-[12.5px] ml-1.5">
                  اسم العميل : السادة / المحترمين .
                </span>

                <span className="font-bold uppercase tracking-normal shrink-0 text-black text-[12px] ml-2" dir="ltr" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {customerName}
                </span>

                {/* Left: Long Continuous Dotted Line stretching all the way to the left margin */}
                <span className="border-b border-dotted border-black flex-1 min-w-[50px] self-end mb-1 mr-1" />
              </div>

              {/* Row 2: [Long Dots (Left)] + [TRN (Middle)] + [Dots] + [الرقم الضريبي للعميل : (Middle)] aligned with Row 1 */}
              <div className="mt-1 flex items-center justify-start" dir="rtl">
                {/* Right Spacer matching Account Number block width */}
                <div className="shrink-0 w-[195px]" />

                {/* Middle: الرقم الضريبي للعميل : + Dots + TRN */}
                <span className="font-bold whitespace-nowrap text-black shrink-0 text-[12.5px] ml-1.5">
                  الرقم الضريبي للعميل :
                </span>

                <span className="border-b border-dotted border-black w-6 shrink-0 self-end mb-1 ml-1.5" />

                <span className="font-bold tracking-wider shrink-0 text-black text-[12px] ml-2" dir="ltr" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                  {customerTrn}
                </span>

                {/* Left: Long Continuous Dotted Line stretching all the way to the left margin */}
                <span className="border-b border-dotted border-black flex-1 min-w-[50px] self-end mb-1 mr-1" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 4. PRODUCT TABLE (DISTINCT SEPARATE BOX WITH GAP)                         */}
          {/* ========================================================================= */}
          <div className="mt-1.5 border border-black bg-white" dir="rtl" style={{ fontFamily: "Arial, sans-serif" }}>
            <table className="w-full border-collapse text-[11px] text-black">
              <thead>
                <tr className="border-b border-black font-bold bg-white h-7">
                  {/* Col 1 (Far Right in RTL): الرقم */}
                  <th className="w-[5%] border-l border-black p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      الرقم
                    </div>
                  </th>
                  {/* Col 2: رمز المادة */}
                  <th className="w-[13%] border-l border-black p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      رمز المادة
                    </div>
                  </th>
                  {/* Col 3: البيان */}
                  <th className="w-[36%] border-l border-black p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      البيان
                    </div>
                  </th>
                  {/* Col 4: الوحدة */}
                  <th className="w-[8%] border-l border-black p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      الوحدة
                    </div>
                  </th>
                  {/* Col 5: الكمية */}
                  <th className="w-[8%] border-l border-black p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      الكمية
                    </div>
                  </th>
                  {/* Col 6: ضريبة% / VAT */}
                  <th className="w-[8%] border-l border-black p-0 text-center">
                    <div className="flex flex-col items-center justify-center h-7 leading-tight">
                      <div className="font-bold text-[10px] leading-none">ضريبة%</div>
                      <div className="text-[9px] font-bold leading-none mt-0.5">VAT</div>
                    </div>
                  </th>
                  {/* Col 7: السعر */}
                  <th className="w-[10%] border-l border-black p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      السعر
                    </div>
                  </th>
                  {/* Col 8 (Far Left in RTL): الإجمالي */}
                  <th className="w-[12%] p-0 text-center font-bold">
                    <div className="flex items-center justify-center h-7 font-bold text-center leading-none">
                      الإجمالي
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Active Filled Items */}
                {invoice.items.map((item, index) => (
                  <tr
                    key={item.id || index}
                    className="border-b border-black h-[22px] text-black"
                  >
                    <td className="border-l border-black p-0">
                      <div className="flex items-center justify-center h-[22px] font-mono font-bold leading-none">
                        {item.itemNumber || index + 1}
                      </div>
                    </td>
                    <td className="border-l border-black p-0">
                      <div className="flex items-center justify-center h-[22px] font-mono font-bold leading-none">
                        {item.itemCode}
                      </div>
                    </td>
                    <td className="border-l border-black p-0 px-2">
                      <div className="flex items-center justify-start h-[22px] font-bold leading-none">
                        {item.description}
                      </div>
                    </td>
                    <td className="border-l border-black p-0">
                      <div className="flex items-center justify-center h-[22px] font-bold leading-none">
                        {item.unit}
                      </div>
                    </td>
                    <td className="border-l border-black p-0">
                      <div className="flex items-center justify-center h-[22px] font-mono font-bold leading-none">
                        {item.quantity}
                      </div>
                    </td>
                    <td className="border-l border-black p-0">
                      <div className="flex items-center justify-center h-[22px] font-mono font-bold leading-none">
                        {item.vatPercent}%
                      </div>
                    </td>
                    <td className="border-l border-black p-0">
                      <div className="flex items-center justify-center h-[22px] font-mono font-bold leading-none">
                        {formatUAEAmount(item.unitPrice)}
                      </div>
                    </td>
                    <td className="p-0">
                      <div className="flex items-center justify-center h-[22px] font-mono font-bold leading-none">
                        {formatUAEAmount(item.lineTotal)}
                      </div>
                    </td>
                  </tr>
                ))}

                {/* Empty Ledger Rows */}
                {Array.from({ length: emptyRowsCount }).map((_, idx) => (
                  <tr
                    key={`empty-${idx}`}
                    className="border-b border-black h-[22px]"
                  >
                    <td className="border-l border-black text-center font-mono text-[10px] text-transparent">
                      &nbsp;
                    </td>
                    <td className="border-l border-black">&nbsp;</td>
                    <td className="border-l border-black">&nbsp;</td>
                    <td className="border-l border-black">&nbsp;</td>
                    <td className="border-l border-black">&nbsp;</td>
                    <td className="border-l border-black">&nbsp;</td>
                    <td className="border-l border-black">&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ========================================================================= */}
          {/* 5. TOTALS & NOTES BLOCK (1:1 Scan Structure)                              */}
          {/* ========================================================================= */}
          <div className="mt-0 flex flex-col border-x border-b border-black bg-white" dir="ltr" style={{ fontFamily: "Arial, sans-serif" }}>
            {/* Top 4 Rows Area: Totals on Left, Gap, 120 Box, Notes on Right */}
            <div className="flex">
              {/* Left Column 1 (12% width): Numbers for Rows 1-4 */}
              <div className="w-[12%] border-r border-black flex flex-col font-mono font-bold text-center text-[11px]">
                <div className="h-[25px] border-b border-black flex items-center justify-center font-black leading-none">
                  {formatUAEAmount(invoice.totals.subtotal)}
                </div>
                <div className="h-[25px] border-b border-black flex items-center justify-center leading-none">
                  {invoice.totals.discount === 0 ? ".000" : formatUAEAmount(invoice.totals.discount)}
                </div>
                <div className="h-[25px] border-b border-black flex items-center justify-center font-black leading-none">
                  {formatUAEAmount(invoice.totals.netAmount)}
                </div>
                <div className="h-[25px] border-b border-black flex items-center justify-center font-black leading-none">
                  {formatUAEAmount(invoice.totals.vatAmount)}
                </div>
              </div>

              {/* Col 2 (16% width): Arabic Labels with Left-Aligned Colon */}
              <div className="w-[16%] border-r border-black flex flex-col font-bold text-[11px]" dir="ltr" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
                <div className="h-[25px] border-b border-black flex items-center justify-between px-2 leading-none">
                  <span className="font-bold text-[11px] leading-none">:</span>
                  <span className="font-bold text-[11px] leading-none" dir="rtl">الاجمالي</span>
                </div>
                <div className="h-[25px] border-b border-black flex items-center justify-between px-2 leading-none">
                  <span className="font-bold text-[11px] leading-none">:</span>
                  <span className="font-bold text-[11px] leading-none" dir="rtl">الخصم</span>
                </div>
                <div className="h-[25px] border-b border-black flex items-center justify-between px-2 leading-none">
                  <span className="font-bold text-[11px] leading-none">:</span>
                  <span className="font-bold text-[11px] leading-none" dir="rtl">الصافي</span>
                </div>
                <div className="h-[25px] border-b border-black flex items-center justify-between px-2 leading-none">
                  <span className="font-bold text-[11px] leading-none">:</span>
                  <span className="font-bold text-[11px] leading-none" dir="rtl">الضريبة</span>
                </div>
              </div>

              {/* Col 3: Gap (6% width, open whitespace under notes) */}
              <div className="w-[6%]" />

              {/* Col 4 (Remaining ~66% width): Row 1 has [120] box; Rows 2-4 have Notes on the right */}
              <div className="flex-1 flex flex-col">
                {/* Row 1: [120] Qty Box on Left + Notes Header on Far Right */}
                <div className="h-[25px] flex items-center justify-between">
                  {/* Quantity Box aligned with الكمية column above */}
                  <div className="w-[54px] h-full border-l border-r border-b border-black flex items-center justify-center font-mono font-bold text-[11px] leading-none">
                    {formatUAEQuantity(invoice.totals.totalQuantity)}
                  </div>

                  {/* Notes Header (Far Right) */}
                  <div className="flex-1 flex items-center justify-end px-3 text-[12px] font-bold text-black leading-none" dir="rtl" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
                    <span>: ملاحظات</span>
                  </div>
                </div>

                {/* Rows 2, 3, 4: Ruled lines on the right with open middle whitespace */}
                <div className="flex-1 flex flex-col justify-end px-3 pb-1" dir="rtl">
                  <div className="w-[70%] border-b border-black mb-3 self-start" />
                  <div className="w-[70%] border-b border-black mb-3 self-start" />
                  <div className="w-[70%] border-b border-black mb-1.5 self-start" />
                </div>
              </div>
            </div>

            {/* Bottom Row 5: [504.000] | [: المجموع الكلي] | [ Gap ] | [ Boxed Tafqeet: فقط خمس مائة و أربعة درهم لاغير ] */}
            <div className="flex h-[28px]">
              {/* Grand Total Number (12% width) */}
              <div className="w-[12%] border-t border-r border-black h-full flex items-center justify-center font-mono font-black text-[12px] text-center leading-none">
                {formatUAEAmount(invoice.totals.grandTotal)}
              </div>

              {/* Grand Total Label (16% width) */}
              <div className="w-[16%] border-t border-r border-black h-full flex items-center justify-between px-2 font-black text-[11.5px] leading-none" dir="ltr" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
                <span className="font-bold text-[11.5px] leading-none">:</span>
                <span className="font-bold text-[11.5px] leading-none" dir="rtl">المجموع الكلي</span>
              </div>

              {/* Open Gap Column (6% width, NO border-t, matching original scan gap) */}
              <div className="w-[6%] h-full" />

              {/* Boxed Tafqeet Rectangle (Remaining width, aligned with 120 box above) */}
              <div className="flex-1 h-full flex items-center border-t border-l border-black px-6 bg-white" dir="rtl">
                <span
                  className="text-[12.5px] font-bold text-black leading-none"
                  style={{
                    fontFamily: "'Simplified Arabic', 'Traditional Arabic', 'Geeza Pro', Tahoma, Arial, sans-serif",
                    letterSpacing: "normal",
                  }}
                >
                  {numberToArabicWords(invoice.totals.grandTotal)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. SIGNATURES / FOOTER SECTION                                            */}
        {/* ========================================================================= */}
        <div className="mt-6 pt-4 border-t border-black flex justify-between items-end text-[12px] font-bold text-black" dir="rtl" style={{ fontFamily: "'Simplified Arabic', Tahoma, Arial, sans-serif" }}>
          {/* Seller Signature (Left in visual LTR, right in RTL) */}
          <div className="w-2/5 flex items-center">
            <span className="font-bold shrink-0 ml-2">:البائع</span>
            <div className="border-b border-black flex-1 mr-2" />
          </div>

          {/* Receiver Signature (Right in visual LTR, left in RTL) */}
          <div className="w-2/5 flex items-center justify-end">
            <div className="border-b border-black flex-1 ml-2" />
            <span className="font-bold shrink-0">:المستلم</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
