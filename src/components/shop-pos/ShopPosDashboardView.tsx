"use client";

import React from "react";
import {
  TrendingUp,
  ShoppingBag,
  DollarSign,
  Users,
  Package,
  AlertTriangle,
  RotateCcw,
  Wallet,
  Clock,
  ArrowUpRight,
  BarChart3,
  PieChart,
  CheckCircle2,
  Receipt,
  Calculator,
} from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

export const ShopPosDashboardView: React.FC = () => {
  const {
    profitMetrics,
    salesHistory,
    products,
    expenses,
    orderReturns,
    purchaseOrders,
    customers,
    currentShift,
    formatPrice,
    setActiveView,
    lang,
  } = useShopPos();

  const {
    grossSales,
    totalRefunds,
    netSales,
    netTaxableSales,
    cogs,
    grossProfit,
    expenses: totalExpenses,
    netProfit,
  } = profitMetrics;

  const lowStockProducts = products.filter((p) => p.stock > 0 && p.stock <= p.minStock);
  const outOfStockProducts = products.filter((p) => p.stock <= 0);
  const totalDueFromCustomers = customers.reduce((sum, c) => sum + (c.outstandingBalance || 0), 0);

  // Payment Tender Breakdown (Net of refunds)
  const grossCashSales = salesHistory.filter((s) => s.paymentMethod === "cash").reduce((sum, s) => sum + (s.paidAmount || s.grandTotal), 0);
  const cashRefunds = orderReturns.filter((r) => r.refundMethod === "cash").reduce((sum, r) => sum + r.totalRefund, 0);
  const cashSalesTotal = Math.max(0, grossCashSales - cashRefunds);

  const grossCardSales = salesHistory.filter((s) => s.paymentMethod === "card").reduce((sum, s) => sum + (s.paidAmount || s.grandTotal), 0);
  const cardRefunds = orderReturns.filter((r) => r.refundMethod === "card").reduce((sum, r) => sum + r.totalRefund, 0);
  const cardSalesTotal = Math.max(0, grossCardSales - cardRefunds);

  const otherSalesTotal = Math.max(0, netSales - cashSalesTotal - cardSalesTotal);

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "لوحة تحليلات المتجر والأداء" : "Universal Retail KPI Dashboard"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "مؤشرات المبيعات، الأرباح، المخزون، المصروفات والتدفقات النقدية"
              : "Real-time analytics for sales revenue, net profit, inventory alerts, and cash flow"}
          </p>
        </div>

        <button
          onClick={() => setActiveView("pos")}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
          <span>{lang === "ar" ? "الذهاب إلى كاشير البيع" : "Go to POS Checkout"}</span>
        </button>
      </div>

      {/* Main Store Profit Breakdown Hero Card */}
      <div className="p-5 mb-6 rounded-2xl bg-[#0E121B] border border-[#1C2333] shadow-xl space-y-4">
        <div className="flex items-center justify-between border-b border-[#1C2333] pb-3">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-200 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#D4AF37]" />
            <span>Store Net Profit Accounting Statement</span>
          </h3>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
            Audited COGS Method
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-start">
          {/* Sales */}
          <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
            <div className="text-[10px] uppercase font-bold text-slate-400">Gross Sales</div>
            <div className="text-sm sm:text-base font-black text-slate-100 font-mono mt-1">{formatPrice(grossSales)}</div>
          </div>

          {/* Returns */}
          <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
            <div className="text-[10px] uppercase font-bold text-rose-400">(-) Returns</div>
            <div className="text-sm sm:text-base font-black text-rose-400 font-mono mt-1">{formatPrice(totalRefunds)}</div>
          </div>

          {/* Net Sales */}
          <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
            <div className="text-[10px] uppercase font-bold text-[#D4AF37]">(=) Net Sales</div>
            <div className="text-sm sm:text-base font-black text-[#D4AF37] font-mono mt-1">{formatPrice(netSales)}</div>
          </div>

          {/* COGS */}
          <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
            <div className="text-[10px] uppercase font-bold text-amber-400">(-) COGS</div>
            <div className="text-sm sm:text-base font-black text-amber-400 font-mono mt-1">{formatPrice(cogs)}</div>
          </div>

          {/* Gross Profit */}
          <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
            <div className="text-[10px] uppercase font-bold text-cyan-400">(=) Gross Profit</div>
            <div className="text-sm sm:text-base font-black text-cyan-400 font-mono mt-1">{formatPrice(grossProfit)}</div>
          </div>

          {/* Expenses */}
          <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
            <div className="text-[10px] uppercase font-bold text-rose-400">(-) Expenses</div>
            <div className="text-sm sm:text-base font-black text-rose-400 font-mono mt-1">{formatPrice(totalExpenses)}</div>
          </div>

          {/* Net Profit */}
          <div className="p-3 rounded-xl bg-[#182234] border border-[#D4AF37]/50 shadow-md col-span-2 sm:col-span-1">
            <div className="text-[10px] uppercase font-black text-[#D4AF37]">(=) NET PROFIT</div>
            <div className={`text-base sm:text-lg font-black font-mono mt-1 ${netProfit >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
              {formatPrice(netProfit)}
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stat Grid (8 Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {/* Card 1: Net Sales Revenue */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-[#D4AF37]/50 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Net Sales Revenue</span>
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-[#D4AF37] font-mono">{formatPrice(netSales)}</div>
          <div className="text-[10px] text-slate-500 mt-1">{salesHistory.length} sales ({formatPrice(totalRefunds)} refunded)</div>
        </div>

        {/* Card 2: Net Profit */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-[#D4AF37]/50 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Net Profit</span>
            <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className={`text-xl font-black font-mono ${netProfit >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
            {formatPrice(netProfit)}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Net Sales - COGS - Expenses</div>
        </div>

        {/* Card 3: Cash in Drawer */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-[#D4AF37]/50 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Register Cash</span>
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Wallet className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-slate-100 font-mono">
            {formatPrice(currentShift ? currentShift.expectedCash : 500)}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            {currentShift ? `Shift ${currentShift.shiftNumber}` : "Drawer float ready"}
          </div>
        </div>

        {/* Card 4: Customer Due */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-[#D4AF37]/50 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Customer Due Balance</span>
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-amber-400 font-mono">{formatPrice(totalDueFromCustomers)}</div>
          <div className="text-[10px] text-slate-500 mt-1">Outstanding credit accounts</div>
        </div>

        {/* Card 5: Low Stock */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-amber-500/40 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Low Stock Alert</span>
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-amber-400 font-mono">{lowStockProducts.length} items</div>
          <div className="text-[10px] text-slate-500 mt-1">Near minimum stock threshold</div>
        </div>

        {/* Card 6: Out of Stock */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-rose-500/40 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Out of Stock</span>
            <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-rose-400 font-mono">{outOfStockProducts.length} items</div>
          <div className="text-[10px] text-slate-500 mt-1">Requires immediate reorder</div>
        </div>

        {/* Card 7: Total Expenses */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-[#D4AF37]/50 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Total Expenses</span>
            <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-slate-200 font-mono">{formatPrice(totalExpenses)}</div>
          <div className="text-[10px] text-slate-500 mt-1">Operating expense outflow</div>
        </div>

        {/* Card 8: Pending Returns */}
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536] hover:border-[#D4AF37]/50 transition shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-400">Processed Returns</span>
            <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
              <RotateCcw className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-black text-purple-400 font-mono">{orderReturns.length} records</div>
          <div className="text-[10px] text-slate-500 mt-1">Stock restored correctly</div>
        </div>
      </div>

      {/* Middle Section: Payment Methods Breakdown & Top Selling Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Payment Methods Breakdown */}
        <div className="p-5 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#D4AF37]" />
              <span>Payment Tender Breakdown</span>
            </h3>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">Cash Payments</span>
                <span className="text-[#D4AF37] font-mono">{formatPrice(cashSalesTotal)}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#182030] overflow-hidden">
                <div
                  className="h-full bg-emerald-400 rounded-full"
                  style={{ width: `${netSales > 0 ? (cashSalesTotal / netSales) * 100 : 40}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">Card & Digital Tenders</span>
                <span className="text-cyan-400 font-mono">{formatPrice(cardSalesTotal)}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#182030] overflow-hidden">
                <div
                  className="h-full bg-cyan-400 rounded-full"
                  style={{ width: `${netSales > 0 ? (cardSalesTotal / netSales) * 100 : 50}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">Other / On Account</span>
                <span className="text-amber-400 font-mono">{formatPrice(otherSalesTotal)}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#182030] overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ width: `${netSales > 0 ? (otherSalesTotal / netSales) * 100 : 10}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="lg:col-span-2 p-5 rounded-2xl bg-[#0E121B] border border-[#1C2333]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
            <Package className="w-4 h-4 text-[#D4AF37]" />
            <span>Inventory Health Overview</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="p-3 rounded-xl bg-[#141A26] border border-[#202738] flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-slate-100">{product.name}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{product.sku}</div>
                </div>
                <div className="text-end font-mono">
                  <div className="text-[#D4AF37] font-bold">{formatPrice(product.price)}</div>
                  <div className="text-[10px] text-slate-400">Cost: {formatPrice(product.costPrice || 0)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
