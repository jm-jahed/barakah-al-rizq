"use client";

import React, { useRef, useState } from "react";
import {
  Printer,
  Download,
  Share2,
  PlusCircle,
  X,
  CheckCircle,
  QrCode,
  Store,
  Phone,
  Receipt as ReceiptIcon,
  Globe,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import jsPDF from "jspdf";

export const ReceiptModal: React.FC = () => {
  const {
    isReceiptModalOpen,
    setIsReceiptModalOpen,
    activeReceiptOrder,
    businessProfile,
    startNewBill,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [receiptLang, setReceiptLang] = useState<"auto" | "en" | "ar" | "bilingual">("bilingual");
  const receiptRef = useRef<HTMLDivElement>(null);

  if (!isReceiptModalOpen || !activeReceiptOrder) return null;

  const order = activeReceiptOrder;

  // Financial verification with 2 decimal places
  const subtotal = Math.round(order.subtotal * 100) / 100;
  const discountAmount = Math.round(order.discountAmount * 100) / 100;
  const taxableAmount = Math.round(order.taxableAmount * 100) / 100;
  const vatAmount = Math.round(order.vatAmount * 100) / 100;
  const deliveryFee = Math.round((order.deliveryFee || 0) * 100) / 100;
  const grandTotal = Math.round(order.grandTotal * 100) / 100;
  const paidAmount = Math.round(order.paidAmount * 100) / 100;
  const changeAmount = Math.max(0, Math.round((paidAmount - grandTotal) * 100) / 100);
  const balanceDue = Math.max(0, Math.round((grandTotal - paidAmount) * 100) / 100);

  const getOrderTypeDisplay = () => {
    switch (order.orderType) {
      case "dine_in":
        return {
          en: `DINE-IN ${order.tableNumber ? `(Table ${order.tableNumber})` : ""}`,
          ar: `تناول محلي بالصالة ${order.tableNumber ? `(طاولة ${order.tableNumber})` : ""}`,
        };
      case "takeaway":
        return { en: "TAKEAWAY (Counter Pickup)", ar: "استلام خارجي (سفري)" };
      case "delivery":
        return { en: "HOME DELIVERY", ar: "توصيل للمنازل" };
    }
  };

  const getPaymentMethodDisplay = () => {
    switch (order.paymentMethod) {
      case "cash":
        return { en: "CASH (Dhs)", ar: "نقداً (درهم إماراتي)" };
      case "card":
        return { en: "CARD (Credit / Debit)", ar: "بطاقة مصرفية" };
      case "apple_pay":
        return { en: "APPLE PAY (Contactless)", ar: "أبل باي / دفع لاتلامسي" };
      case "bank_transfer":
        return { en: "BANK TRANSFER", ar: "تحويل بنكي مباشر" };
      case "split":
        return { en: "SPLIT PAYMENT", ar: "دفع مجزأ" };
    }
  };

  const orderTypeObj = getOrderTypeDisplay();
  const paymentObj = getPaymentMethodDisplay();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: [80, 240], // 80mm thermal roll
    });

    let y = 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("RESTAURANT POS", 40, y, { align: "center" });

    y += 5;
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text(businessProfile.name, 40, y, { align: "center" });

    y += 4;
    doc.text(businessProfile.address, 40, y, { align: "center" });

    y += 4;
    doc.text(`Tel: ${businessProfile.phone} | TRN: ${businessProfile.trn}`, 40, y, { align: "center" });

    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("SIMPLIFIED TAX INVOICE", 40, y, { align: "center" });

    y += 5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(`Order #: ${order.orderNumber}`, 5, y);
    y += 4;
    doc.text(`Receipt #: ${order.receiptNumber}`, 5, y);
    y += 4;
    doc.text(`Date & Time: ${order.createdAt}`, 5, y);
    y += 4;
    doc.text(`Cashier: ${order.cashierName}`, 5, y);
    y += 4;
    doc.text(`Type: ${orderTypeObj.en}`, 5, y);

    y += 3;
    doc.line(5, y, 75, y);
    y += 4;

    doc.setFont("helvetica", "bold");
    doc.text("Item", 5, y);
    doc.text("Qty", 48, y);
    doc.text("Total", 75, y, { align: "right" });
    y += 3;
    doc.line(5, y, 75, y);
    y += 4;

    doc.setFont("helvetica", "normal");
    order.items.forEach((item) => {
      const lineName = item.name.length > 20 ? item.name.substring(0, 18) + "..." : item.name;
      doc.text(lineName, 5, y);
      doc.text(`${item.quantity}`, 48, y);
      doc.text(`AED ${item.lineTotal.toFixed(2)}`, 75, y, { align: "right" });
      y += 4;
    });

    y += 2;
    doc.line(5, y, 75, y);
    y += 4;

    doc.text("Subtotal:", 5, y);
    doc.text(`AED ${subtotal.toFixed(2)}`, 75, y, { align: "right" });
    y += 4;

    if (discountAmount > 0) {
      doc.text("Discount:", 5, y);
      doc.text(`-AED ${discountAmount.toFixed(2)}`, 75, y, { align: "right" });
      y += 4;
    }

    doc.text("VAT (5%):", 5, y);
    doc.text(`AED ${vatAmount.toFixed(2)}`, 75, y, { align: "right" });
    y += 4;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.text("Grand Total:", 5, y);
    doc.text(`AED ${grandTotal.toFixed(2)}`, 75, y, { align: "right" });
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text("Paid:", 5, y);
    doc.text(`AED ${paidAmount.toFixed(2)}`, 75, y, { align: "right" });
    y += 4;

    doc.text("Balance / Change:", 5, y);
    doc.text(`AED ${changeAmount.toFixed(2)}`, 75, y, { align: "right" });
    y += 4;

    doc.text("Payment Method:", 5, y);
    doc.text(paymentObj.en, 75, y, { align: "right" });
    y += 6;

    doc.setFont("helvetica", "italic");
    doc.setFontSize(7);
    doc.text("Thank you for dining with RESTAURANT POS!", 40, y, { align: "center" });

    doc.save(`Receipt_${order.receiptNumber}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in-50">
      <div className="bg-[#12141C] border border-[#262B3B] rounded-2xl shadow-2xl max-w-xl w-full flex flex-col max-h-[92vh] text-slate-100">
        {/* Modal Action Bar */}
        <div className="px-5 py-3 border-b border-[#202534] flex items-center justify-between bg-[#161924]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">
                {lang === "ar" ? "الفاتورة الضريبية المعتمدة" : "Simplified Tax Receipt"}
              </h3>
              <p className="text-[11px] text-slate-400">
                {order.receiptNumber} • {order.orderNumber}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1D212E] hover:bg-[#252A3C] border border-[#2B3042] text-xs font-bold text-slate-200 transition"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 transition"
              title="Print Receipt"
            >
              <Printer className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>{lang === "ar" ? "طباعة الفاتورة" : "PRINT RECEIPT"}</span>
            </button>

            <button
              onClick={() => setIsReceiptModalOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 ms-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Receipt Preview Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex justify-center items-start bg-[#0B0D14]">
          {/* Print Styles for thermal 80mm slip */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @media print {
              body {
                background: #ffffff !important;
                color: #000000 !important;
              }
              body * {
                visibility: hidden !important;
              }
              #thermal-receipt-print,
              #thermal-receipt-print * {
                visibility: visible !important;
              }
              #thermal-receipt-print {
                position: absolute !important;
                left: 0 !important;
                top: 0 !important;
                width: 76mm !important;
                max-width: 76mm !important;
                margin: 0 !important;
                padding: 3mm !important;
                background: #ffffff !important;
                color: #000000 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
              }
              @page {
                size: 80mm auto;
                margin: 2mm;
              }
            }
          `,
            }}
          />

          {/* Authentic 80mm Thermal Slip Container */}
          <div
            ref={receiptRef}
            id="thermal-receipt-print"
            className="w-full max-w-[340px] bg-white text-black p-5 rounded-lg shadow-2xl font-mono text-[11px] leading-relaxed border border-slate-300 shrink-0 h-auto self-start"
          >
            {/* Receipt Header */}
            <div className="text-center space-y-1 pb-3 border-b-2 border-dashed border-slate-400">
              <div className="text-sm font-black tracking-wider uppercase text-slate-950">
                RESTAURANT POS
              </div>
              <div className="text-[10px] font-bold text-slate-700">
                {businessProfile.name}
              </div>
              <div className="text-[10px] text-slate-600">
                {businessProfile.arabicName}
              </div>
              <div className="text-[9px] text-slate-600">
                {businessProfile.address}
              </div>
              <div className="text-[9px] text-slate-600 font-bold">
                Tel: {businessProfile.phone}
              </div>
              <div className="text-[9px] font-bold text-slate-900 bg-slate-100 py-0.5 px-1 rounded inline-block mt-1">
                TRN: {businessProfile.trn}
              </div>
              <div className="text-[10px] font-black tracking-wide uppercase pt-1 text-slate-900">
                SIMPLIFIED TAX INVOICE
              </div>
              <div className="text-[9px] text-slate-600">
                فاتورة ضريبية مبسطة
              </div>
            </div>

            {/* Receipt Meta */}
            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-0.5 text-[10px]">
              <div className="flex justify-between">
                <span className="text-slate-600">Order No:</span>
                <span className="font-bold font-mono">{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Receipt No:</span>
                <span className="font-bold font-mono">{order.receiptNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Date & Time:</span>
                <span className="font-mono">{order.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Table / Channel:</span>
                <span className="font-bold">{orderTypeObj.en}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Cashier:</span>
                <span className="font-mono">{order.cashierName} (Terminal 01)</span>
              </div>
              {order.customer && (
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-600">Guest:</span>
                  <span className="font-bold">{order.customer.name}</span>
                </div>
              )}
            </div>

            {/* Items Table Header */}
            <div className="py-1.5 border-b-2 border-slate-900 text-[10px] font-bold flex justify-between uppercase">
              <span className="flex-1">Item Description</span>
              <span className="w-10 text-center">Qty</span>
              <span className="w-16 text-right">Price</span>
              <span className="w-16 text-right">Total</span>
            </div>

            {/* Itemized Lines */}
            <div className="py-2 space-y-1.5 border-b-2 border-dashed border-slate-400 text-[10px]">
              {order.items.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex items-start justify-between">
                    <span className="flex-1 font-bold text-slate-900 leading-tight">
                      {item.name}
                    </span>
                    <span className="w-10 text-center font-mono">{item.quantity}</span>
                    <span className="w-16 text-right font-mono">{item.price.toFixed(2)}</span>
                    <span className="w-16 text-right font-mono font-bold">
                      {item.lineTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-600 leading-tight">
                    {item.arabicName}
                  </div>
                  {item.notes && (
                    <div className="text-[9px] text-amber-900 italic">
                      * {item.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Financial Summary */}
            <div className="py-2.5 border-b-2 border-slate-900 space-y-1 text-[10px]">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal (المجموع الفرعي):</span>
                <span className="font-mono font-bold">Dhs {subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-rose-700">
                  <span>Discount (خصم تجاري):</span>
                  <span className="font-mono font-bold">-Dhs {discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-700">
                <span>Taxable Amount (المبلغ الخاضع للضريبة):</span>
                <span className="font-mono">Dhs {taxableAmount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-slate-700">
                <span>VAT 5% (ضريبة القيمة المضافة):</span>
                <span className="font-mono font-bold">Dhs {vatAmount.toFixed(2)}</span>
              </div>

              {deliveryFee > 0 && (
                <div className="flex justify-between text-slate-700">
                  <span>Delivery Fee (رسوم التوصيل):</span>
                  <span className="font-mono">Dhs {deliveryFee.toFixed(2)}</span>
                </div>
              )}

              {/* Big Grand Total */}
              <div className="pt-2 mt-1 border-t border-slate-900 flex justify-between text-xs font-black">
                <span className="uppercase">GRAND TOTAL (المجموع الكلي):</span>
                <span className="font-mono text-sm">Dhs {grandTotal.toFixed(2)}</span>
              </div>

              {/* Payment Details */}
              <div className="pt-2 mt-1 border-t border-dashed border-slate-300 space-y-0.5">
                <div className="flex justify-between">
                  <span className="text-slate-600">Payment Method (وسيلة السداد):</span>
                  <span className="font-bold">{paymentObj.en}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Amount Paid (المبلغ المدفوع):</span>
                  <span className="font-mono font-bold">Dhs {paidAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Balance / Change (المتبقي):</span>
                  <span className="font-mono font-bold">Dhs {changeAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Receipt Footer & QR Code */}
            <div className="pt-3 text-center space-y-2 text-[9px] text-slate-600">
              <div className="flex justify-center my-1">
                <div className="w-16 h-16 border border-slate-400 p-1 rounded bg-white flex items-center justify-center">
                  <QrCode className="w-14 h-14 text-slate-900" />
                </div>
              </div>
              <div className="font-semibold text-slate-800 leading-snug">
                {businessProfile.receiptFooterEn}
              </div>
              <div className="text-slate-700 leading-snug">
                {businessProfile.receiptFooterAr}
              </div>
              <div className="text-[8px] text-slate-400 pt-1">
                Generated by RESTAURANT POS • UAE Edition
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Actions */}
        <div className="p-3.5 border-t border-[#202534] bg-[#161924] flex items-center justify-between">
          <button
            onClick={startNewBill}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1D212E] hover:bg-[#252A3C] text-xs font-bold text-slate-200 transition"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.new_bill}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsReceiptModalOpen(false)}
              className="px-4 py-1.5 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition font-bold text-xs"
            >
              {t.close}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-5 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 transition"
            >
              <Printer className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{lang === "ar" ? "طباعة الفاتورة" : "PRINT RECEIPT"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
