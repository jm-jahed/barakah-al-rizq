"use client";

import React, { useState, useEffect } from "react";
import { RotateCcw, Search, CheckCircle, Package, AlertCircle, FileText } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

export const ShopPosReturnsView: React.FC = () => {
  const { salesHistory, processOrderReturn, orderReturns, formatPrice, lang } = useShopPos();

  const [invoiceQuery, setInvoiceQuery] = useState("");
  const [selectedInvoiceNumber, setSelectedInvoiceNumber] = useState("");
  const [returnReason, setReturnReason] = useState("Customer Requested Exchange");
  const [refundMethod, setRefundMethod] = useState<"cash" | "card">("cash");
  const [returnSuccessMsg, setReturnSuccessMsg] = useState("");
  const [returnQtys, setReturnQtys] = useState<{ [productId: string]: number }>({});

  // Found Sale Target
  const targetSale = salesHistory.find((s) => s.orderNumber.toLowerCase() === selectedInvoiceNumber.toLowerCase());

  useEffect(() => {
    if (targetSale) {
      const initialQtys: { [productId: string]: number } = {};
      targetSale.items.forEach((item) => {
        const remaining = Math.max(0, item.quantity - (item.returnedQuantity || 0));
        initialQtys[item.productId] = remaining; // default to remaining
      });
      setReturnQtys(initialQtys);
    }
  }, [targetSale]);

  const handleQtyChange = (productId: string, val: number, max: number) => {
    const clamped = Math.max(0, Math.min(max, val));
    setReturnQtys((prev) => ({ ...prev, [productId]: clamped }));
  };

  // Preview live refund calculation based on original transaction pricing
  const calculateRefundPreview = () => {
    if (!targetSale) return { subtotalRefund: 0, vatRefund: 0, totalRefund: 0 };
    let totalRefund = 0;
    targetSale.items.forEach((soldItem) => {
      const qtyToReturn = returnQtys[soldItem.productId] || 0;
      if (qtyToReturn > 0) {
        const itemOriginalGross = soldItem.price * soldItem.quantity;
        const orderSubtotal = targetSale.subtotal > 0 ? targetSale.subtotal : itemOriginalGross;
        const discountRatio = targetSale.discountAmount > 0 ? targetSale.discountAmount / orderSubtotal : 0;
        const itemDiscount = itemOriginalGross * discountRatio;
        const itemTaxable = itemOriginalGross - itemDiscount;
        const itemVat = itemTaxable * 0.05;
        const itemNetTotal = itemTaxable + itemVat;

        const lineRefund = (itemNetTotal * qtyToReturn) / soldItem.quantity;
        totalRefund += lineRefund;
      }
    });

    const vatRefund = (totalRefund * 0.05) / 1.05;
    const subtotalRefund = totalRefund - vatRefund;
    return { subtotalRefund, vatRefund, totalRefund };
  };

  const preview = calculateRefundPreview();

  const handleProcessReturn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!targetSale) return;

    const itemsToReturn = targetSale.items
      .map((i) => ({
        productId: i.productId,
        qty: returnQtys[i.productId] || 0,
        reason: returnReason,
      }))
      .filter((i) => i.qty > 0);

    if (itemsToReturn.length === 0) {
      alert(
        lang === "ar"
          ? "يرجى تحديد كمية صنف واحد على الأقل للإرجاع!"
          : "Please select a return quantity greater than 0 for at least one item!"
      );
      return;
    }

    const success = processOrderReturn(targetSale.orderNumber, itemsToReturn, refundMethod);
    if (success) {
      setReturnSuccessMsg(`Return for Invoice ${targetSale.orderNumber} processed successfully. Inventory restocked!`);
      setSelectedInvoiceNumber("");
      setReturnQtys({});
      setTimeout(() => setReturnSuccessMsg(""), 4500);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <RotateCcw className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "مرتجعات المبيعات والمنتجات" : "Returns & Refund Processing"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "البحث في الفواتير السابقة، تحديد الأصناف المرتجعة، واستعادة المخزون تلقائياً"
              : "Locate original sales receipts, record product returns, and update inventory balances"}
          </p>
        </div>
      </div>

      {returnSuccessMsg && (
        <div className="p-3.5 mb-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{returnSuccessMsg}</span>
        </div>
      )}

      {/* Main Return Form Card */}
      <div className="p-5 mb-6 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">Search Sale Invoice to Return</h3>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={invoiceQuery}
              onChange={(e) => setInvoiceQuery(e.target.value)}
              placeholder="Enter INV-2026-xxxx or Receipt number..."
              className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2.5 text-xs text-slate-100 font-mono outline-none focus:border-[#D4AF37]"
            />
          </div>
          <button
            onClick={() => setSelectedInvoiceNumber(invoiceQuery)}
            className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-black font-bold text-xs hover:brightness-110 transition"
          >
            Find Invoice
          </button>
        </div>

        {/* Found Sale Invoice Preview */}
        {targetSale && (
          <form onSubmit={handleProcessReturn} className="p-4 rounded-xl bg-[#141A26] border border-[#202738] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono font-bold text-[#D4AF37] border-b border-[#202738] pb-3">
              <div>
                <span>Invoice: {targetSale.orderNumber}</span>
                {targetSale.receiptNumber && <span className="ms-3 text-slate-400">({targetSale.receiptNumber})</span>}
              </div>
              <div>
                <span>Date: {targetSale.date}</span>
                <span className="ms-3 text-slate-100">Total: {formatPrice(targetSale.grandTotal)}</span>
              </div>
            </div>

            {targetSale.isReturned && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>This sale invoice has already been 100% returned and refunded.</span>
              </div>
            )}

            <div className="border border-[#202738] rounded-xl overflow-hidden text-xs">
              <table className="w-full text-start border-collapse">
                <thead className="bg-[#182030] text-slate-400 uppercase font-mono">
                  <tr>
                    <th className="p-3 text-start">Item Name</th>
                    <th className="p-3 text-center">Unit Price</th>
                    <th className="p-3 text-center">Purchased</th>
                    <th className="p-3 text-center">Returned</th>
                    <th className="p-3 text-center">Available</th>
                    <th className="p-3 text-center w-32">Return Qty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#202738] text-slate-200">
                  {targetSale.items.map((i) => {
                    const previouslyReturned = i.returnedQuantity || 0;
                    const availableToReturn = Math.max(0, i.quantity - previouslyReturned);
                    const currentReturnVal = returnQtys[i.productId] || 0;

                    return (
                      <tr key={i.productId} className="hover:bg-[#161E2E]">
                        <td className="p-3 font-semibold text-slate-100">{i.name}</td>
                        <td className="p-3 text-center font-mono text-slate-300">{formatPrice(i.price)}</td>
                        <td className="p-3 text-center font-mono">{i.quantity}</td>
                        <td className="p-3 text-center font-mono text-purple-400">{previouslyReturned}</td>
                        <td className="p-3 text-center font-mono text-emerald-400 font-bold">{availableToReturn}</td>
                        <td className="p-3 text-center">
                          <input
                            type="number"
                            min="0"
                            max={availableToReturn}
                            disabled={availableToReturn <= 0 || targetSale.isReturned}
                            value={currentReturnVal}
                            onChange={(e) => handleQtyChange(i.productId, parseInt(e.target.value) || 0, availableToReturn)}
                            className="w-20 bg-[#0E121B] border border-[#242F46] rounded-lg px-2 py-1 text-center font-mono font-bold text-[#D4AF37] outline-none focus:border-[#D4AF37] disabled:opacity-40"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Refund Total Calculation Box */}
            <div className="p-4 rounded-xl bg-[#0E121B] border border-[#202738] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="space-y-1 text-slate-400">
                <div>Subtotal Refund: <span className="font-mono text-slate-200">{formatPrice(preview.subtotalRefund)}</span></div>
                <div>VAT (5%) Refund: <span className="font-mono text-slate-200">{formatPrice(preview.vatRefund)}</span></div>
              </div>
              <div className="text-end">
                <div className="text-[10px] uppercase font-bold text-slate-400">Total Net Refund Amount</div>
                <div className="text-2xl font-black font-mono text-[#D4AF37]">{formatPrice(preview.totalRefund)}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Return Reason</label>
                <select
                  disabled={targetSale.isReturned}
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className="w-full bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none disabled:opacity-50"
                >
                  <option value="Customer Requested Exchange">Customer Requested Exchange</option>
                  <option value="Damaged Product">Damaged Product</option>
                  <option value="Wrong Item Picked">Wrong Item Picked</option>
                  <option value="Defective / Quality Issue">Defective / Quality Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Refund Tender Method</label>
                <select
                  disabled={targetSale.isReturned}
                  value={refundMethod}
                  onChange={(e) => setRefundMethod(e.target.value as any)}
                  className="w-full bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none disabled:opacity-50"
                >
                  <option value="cash">Cash Refund (Deduct from Register)</option>
                  <option value="card">Card / Electronic Refund</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={targetSale.isReturned || preview.totalRefund <= 0}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-black text-xs font-bold shadow-md hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {targetSale.isReturned ? "Invoice Already 100% Returned" : `Confirm Return (${formatPrice(preview.totalRefund)}) & Restock Stock`}
            </button>
          </form>
        )}
      </div>

      {/* Return History Table */}
      <div className="bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="p-4 border-b border-[#1C2333] text-xs font-bold uppercase text-slate-300">
          Processed Returns History Log
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">Return #</th>
                <th className="py-3 px-4 text-start">Original Invoice</th>
                <th className="py-3 px-4 text-start">Date</th>
                <th className="py-3 px-4 text-start">Processed By</th>
                <th className="py-3 px-4 text-start">Method</th>
                <th className="py-3 px-4 text-end">Refund Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {orderReturns.map((ret) => (
                <tr key={ret.id} className="hover:bg-[#141A26] transition">
                  <td className="py-3 px-4 font-mono font-bold text-slate-100">{ret.returnNumber}</td>
                  <td className="py-3 px-4 font-mono text-slate-400">{ret.originalOrderNumber || "-"}</td>
                  <td className="py-3 px-4 font-mono text-slate-400">{ret.date}</td>
                  <td className="py-3 px-4 text-slate-300">{ret.processedBy}</td>
                  <td className="py-3 px-4 uppercase font-mono text-[10px] text-cyan-400">{ret.refundMethod}</td>
                  <td className="py-3 px-4 text-end font-bold text-[#D4AF37] font-mono">{formatPrice(ret.totalRefund)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
