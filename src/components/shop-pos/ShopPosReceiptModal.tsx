"use client";

import React, { useState, useRef } from "react";
import { Printer, Download, CheckCircle, X, Sparkles, Store, FileText } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ShopPosReceiptModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const {
    completedSale,
    startNewSale,
    reprintReceipt,
    businessProfile,
    formatPrice,
    printerConfig,
    lang,
  } = useShopPos();

  const [receiptFormat, setReceiptFormat] = useState<"80mm" | "58mm" | "a4" | "compact">("80mm");
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !completedSale) return null;

  const handlePrint = async () => {
    setIsPrinting(true);
    try {
      if (printerConfig.mode === "bridge") {
        const res = await reprintReceipt(completedSale.id);
        if (!res?.success) {
          window.print();
        }
      } else {
        window.print();
      }
    } catch (err) {
      window.print();
    } finally {
      setIsPrinting(false);
    }
  };

  const handleStartNext = () => {
    startNewSale();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 border-b border-[#1C2333] bg-[#0B0D14] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-slate-100">
              {lang === "ar" ? "تم إتمام عملية البيع بنجاح" : "Sale Completed Successfully"}
            </h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Bar */}
        <div className="px-4 py-2 bg-[#121622] border-b border-[#1C2333] flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">Receipt Format:</span>
          <div className="flex items-center gap-1.5 font-mono">
            {(["80mm", "58mm", "a4", "compact"] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setReceiptFormat(fmt)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase transition ${
                  receiptFormat === fmt
                    ? "bg-[#D4AF37] text-black font-black"
                    : "bg-[#182030] text-slate-400 hover:text-slate-200"
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>
        </div>

        {/* Printable Thermal Receipt Card */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 bg-[#07090F] flex justify-center items-start min-h-0">
          <div
            ref={printRef}
            className={`printable-receipt bg-white text-slate-900 p-6 rounded-xl shadow-2xl font-mono text-xs select-none h-fit block border border-slate-200 ${
              receiptFormat === "58mm"
                ? "w-[240px]"
                : receiptFormat === "a4"
                ? "w-full max-w-lg"
                : receiptFormat === "compact"
                ? "w-[260px]"
                : "w-[320px]"
            }`}
          >
            {/* Header branding */}
            <div className="text-center pb-3 border-b border-dashed border-slate-400">
              <h2 className="text-base font-black uppercase tracking-wider text-slate-950">
                {businessProfile.name}
              </h2>
              <p className="text-[11px] font-bold text-slate-800">{businessProfile.branchName}</p>
              <p className="text-[10px] text-slate-600 mt-0.5">{businessProfile.address}</p>
              <p className="text-[10px] text-slate-600">Tel: {businessProfile.phone}</p>
              <p className="text-[10px] font-bold text-slate-800 mt-1">TRN: {businessProfile.trn}</p>
              <div className="mt-2 py-0.5 px-2 rounded bg-slate-100 text-slate-900 text-[10px] font-extrabold uppercase inline-block border border-slate-300">
                SIMPLIFIED TAX INVOICE
              </div>
            </div>

            {/* Invoice Info */}
            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-0.5 text-[11px]">
              <div className="flex justify-between font-bold text-slate-900">
                <span>Invoice No:</span>
                <span>{completedSale.orderNumber}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Date & Time:</span>
                <span>{completedSale.date}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Cashier:</span>
                <span>{completedSale.cashierName}</span>
              </div>
              {completedSale.customerName && (
                <div className="flex justify-between text-slate-900 font-bold border-t border-slate-200 pt-0.5 mt-0.5">
                  <span>Customer:</span>
                  <span>{completedSale.customerName}</span>
                </div>
              )}
            </div>

            {/* Line Items Table */}
            <div className="py-2.5 border-b border-dashed border-slate-400">
              <table className="w-full text-start text-[11px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 font-bold text-slate-900">
                    <th className="py-1 text-start">Item</th>
                    <th className="py-1 text-center">Qty</th>
                    <th className="py-1 text-end">Price</th>
                    <th className="py-1 text-end">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {completedSale.items.map((item, idx) => (
                    <tr key={idx} className="align-top">
                      <td className="py-1 text-slate-900 font-semibold max-w-[120px] truncate">
                        {item.name}
                      </td>
                      <td className="py-1 text-center font-bold text-slate-900">{item.quantity}</td>
                      <td className="py-1 text-end text-slate-800">{formatPrice(item.price)}</td>
                      <td className="py-1 text-end font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals Breakdown */}
            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1 text-[11px]">
              <div className="flex justify-between text-slate-700">
                <span>Subtotal:</span>
                <span>{formatPrice(completedSale.subtotal)}</span>
              </div>
              {completedSale.discountAmount > 0 && (
                <div className="flex justify-between text-slate-900 font-bold">
                  <span>Discount:</span>
                  <span>-{formatPrice(completedSale.discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-700">
                <span>VAT (5%):</span>
                <span>{formatPrice(completedSale.vatAmount)}</span>
              </div>
              <div className="flex justify-between font-black text-sm text-slate-950 pt-1 border-t border-slate-300">
                <span>TOTAL:</span>
                <span>{formatPrice(completedSale.grandTotal)}</span>
              </div>
            </div>

            {/* Payment Details */}
            <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1 text-[11px]">
              <div className="flex justify-between text-slate-800">
                <span>Tender Method:</span>
                <span className="font-bold uppercase text-slate-950">{completedSale.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-slate-800">
                <span>Amount Paid:</span>
                <span className="font-semibold text-slate-900">{formatPrice(completedSale.paidAmount)}</span>
              </div>
              {completedSale.dueAmount && completedSale.dueAmount > 0 ? (
                <div className="flex justify-between font-bold text-rose-700">
                  <span>Balance Due:</span>
                  <span>{formatPrice(completedSale.dueAmount)}</span>
                </div>
              ) : (
                <div className="flex justify-between text-slate-800">
                  <span>Change Return:</span>
                  <span className="font-semibold text-slate-900">{formatPrice(completedSale.changeAmount)}</span>
                </div>
              )}
            </div>

            {/* Footer return policy */}
            <div className="pt-3 text-center text-[10px] text-slate-700 space-y-1">
              <p className="font-bold text-slate-900">{businessProfile.receiptFooterNote || "Thank you for your business!"}</p>
              <p className="text-[9px] text-slate-500">Universal Retail System by WebStudio AE</p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 border-t border-[#1C2333] bg-[#0B0D14] flex items-center justify-between">
          <button
            onClick={handleStartNext}
            className="px-4 py-2.5 rounded-xl bg-[#182030] hover:bg-[#202B42] text-slate-200 text-xs font-bold transition flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{lang === "ar" ? "فاتورة جديدة" : "Start Next Sale"}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              disabled={isPrinting}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>{isPrinting ? "Printing..." : "Print Tax Receipt"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
