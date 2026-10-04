"use client";

import React, { useState } from "react";
import { Clock, Search, Receipt, Printer, RotateCcw, Eye, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { CompletedSale } from "@/types/shopPos";

export const ShopPosSalesView: React.FC = () => {
  const { salesHistory, selectReceiptToView, reprintReceipt, formatPrice, setActiveView, lang } = useShopPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredSales = salesHistory.filter((s) => {
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && (!s.status || s.status === "completed")) ||
      (statusFilter === "partial" && s.status === "partial") ||
      (statusFilter === "due" && s.status === "due");

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      s.orderNumber.toLowerCase().includes(query) ||
      (s.receiptNumber && s.receiptNumber.toLowerCase().includes(query)) ||
      (s.customerName && s.customerName.toLowerCase().includes(query)) ||
      s.cashierName.toLowerCase().includes(query);

    return matchesStatus && matchesQuery;
  });

  const totalSalesRevenue = filteredSales.reduce((sum, s) => sum + s.grandTotal, 0);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <Clock className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "سجل المبيعات والفواتير المكتملة" : "Completed Sales & Invoices History"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "مراجعة جميع الفواتير الصادرة، إعادة طباعة الإيصال، ومعالجة المرتجعات"
              : "Review transactions, reprint tax receipts, and initiate customer returns"}
          </p>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {lang === "ar" ? "إجمالي قيمة المبيعات" : "Filtered Sales Volume"}
          </div>
          <div className="text-2xl font-black text-[#D4AF37]">{formatPrice(totalSalesRevenue)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {lang === "ar" ? "عدد الفواتير الصادرة" : "Invoices Count"}
          </div>
          <div className="text-2xl font-black text-slate-100">{filteredSales.length}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-semibold mb-1">
            {lang === "ar" ? "متوسط قيمة الفاتورة" : "Average Ticket Value"}
          </div>
          <div className="text-2xl font-black text-cyan-400">
            {formatPrice(filteredSales.length > 0 ? totalSalesRevenue / filteredSales.length : 0)}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-4 bg-[#0E121B] p-3 rounded-2xl border border-[#1C2333]">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "ar" ? "بحث برقم الفاتورة، اسم العميل أو الكاشير..." : "Search invoice #, receipt #, customer, or cashier..."}
            className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-[#D4AF37]"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-[#141A26] border border-[#202738] text-xs text-slate-200 rounded-xl px-3 py-2 outline-none focus:border-[#D4AF37] w-full sm:w-48"
        >
          <option value="all">{lang === "ar" ? "جميع حالات السداد" : "All Payment Statuses"}</option>
          <option value="completed">{lang === "ar" ? "مكتملة المدفوعات" : "Fully Paid"}</option>
          <option value="partial">{lang === "ar" ? "سداد جزئي" : "Partial Paid"}</option>
          <option value="due">{lang === "ar" ? "آجل على الحساب" : "On Credit / Due"}</option>
        </select>
      </div>

      {/* Transactions Data Table */}
      <div className="flex-1 bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">{lang === "ar" ? "رقم الفاتورة" : "Invoice #"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "التاريخ والوقت" : "Date & Time"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "العميل" : "Customer"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "الكاشير" : "Cashier"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "الأصناف" : "Items"}</th>
                <th className="py-3 px-4 text-start">{lang === "ar" ? "طريقة الدفع" : "Method"}</th>
                <th className="py-3 px-4 text-end">{lang === "ar" ? "الإجمالي" : "Grand Total"}</th>
                <th className="py-3 px-4 text-center">{lang === "ar" ? "إجراءات" : "Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {filteredSales.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    {lang === "ar" ? "لا توجد فواتير مبيعات سابقة مسجلة" : "No completed sale transactions found."}
                  </td>
                </tr>
              ) : (
                filteredSales.map((sale) => {
                  const itemCount = sale.items.reduce((acc, i) => acc + i.quantity, 0);
                  return (
                    <tr key={sale.id} className="hover:bg-[#141A26] transition">
                      <td className="py-3 px-4 font-mono font-bold text-slate-100">{sale.orderNumber}</td>
                      <td className="py-3 px-4 font-mono text-slate-400">{sale.date}</td>
                      <td className="py-3 px-4 font-medium text-slate-200">
                        {sale.customerName || (lang === "ar" ? "عميل تجزئة مباشر" : "Walk-in Retail Customer")}
                      </td>
                      <td className="py-3 px-4 text-slate-400">{sale.cashierName}</td>
                      <td className="py-3 px-4 text-slate-300 font-mono">
                        {itemCount} {itemCount === 1 ? "unit" : "units"}
                      </td>
                      <td className="py-3 px-4 uppercase font-mono text-[10px]">
                        <span className="px-2 py-0.5 rounded-full bg-[#161D2B] text-cyan-400 border border-cyan-500/20">
                          {sale.paymentMethod}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-end font-bold text-[#D4AF37] font-mono">
                        {formatPrice(sale.grandTotal)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => selectReceiptToView(sale)}
                            className="p-1.5 rounded-lg bg-[#182030] text-slate-200 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 border border-[#222B3D] transition"
                            title="View Receipt"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => reprintReceipt(sale.id)}
                            className="p-1.5 rounded-lg bg-[#182030] text-slate-200 hover:text-emerald-400 hover:border-emerald-500/50 border border-[#222B3D] transition"
                            title="Print Thermal Receipt"
                          >
                            <Printer className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setActiveView("returns")}
                            className="p-1.5 rounded-lg bg-[#182030] text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 border border-[#222B3D] transition"
                            title="Process Return"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
