"use client";

import React, { useState } from "react";
import { BarChart3, Printer, DollarSign, TrendingUp, Users, Truck, FileText, Package, RotateCcw, Calculator } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

export const ShopPosReportsView: React.FC = () => {
  const {
    profitMetrics,
    salesHistory,
    orderReturns,
    expenses,
    purchaseOrders,
    customers,
    suppliers,
    products,
    formatPrice,
    lang,
  } = useShopPos();

  const [reportType, setReportType] = useState<
    "sales" | "profit" | "purchases" | "inventory" | "customer_due" | "supplier_due" | "expenses" | "returns"
  >("sales");

  const {
    grossSales,
    totalRefunds,
    netSales,
    netTaxableSales,
    refundedVat,
    netVat,
    cogs,
    grossProfit,
    expenses: totalExpensesCost,
    netProfit,
  } = profitMetrics;

  const totalPurchasesCost = purchaseOrders.reduce((sum, p) => sum + p.totalAmount, 0);

  // Inventory Valuation Metrics
  const totalInventoryRetailValue = products.reduce((sum, p) => sum + (p.stock * p.price), 0);
  const totalInventoryCostValue = products.reduce((sum, p) => sum + (p.stock * (p.costPrice || 0)), 0);
  const totalStockQuantity = products.reduce((sum, p) => sum + p.stock, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <BarChart3 className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "التقارير المالية والتحليلات" : "Financial & Operational Reports"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "تقارير المبيعات، الأرباح، الذمم، تقييم المخزون والمصروفات"
              : "Comprehensive retail reports for sales, net profit, accounts due, and stock valuation"}
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <Printer className="w-4 h-4" />
          <span>{lang === "ar" ? "طباعة التقرير" : "Print Report / Export PDF"}</span>
        </button>
      </div>

      {/* Report Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
        {[
          { id: "sales", label: "Sales Report" },
          { id: "profit", label: "Net Profit & Loss" },
          { id: "returns", label: "Returns & Refunds" },
          { id: "inventory", label: "Inventory Valuation" },
          { id: "customer_due", label: "Customer Credit Due" },
          { id: "supplier_due", label: "Supplier Payables" },
          { id: "expenses", label: "Expense Summary" },
          { id: "purchases", label: "Purchase Orders" },
        ].map((rep) => (
          <button
            key={rep.id}
            onClick={() => setReportType(rep.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              reportType === rep.id
                ? "bg-[#1C2436] text-[#D4AF37] border border-[#D4AF37]/50 shadow-md"
                : "bg-[#0E121B] text-slate-400 hover:text-slate-200 border border-[#1C2333]"
            }`}
          >
            {rep.label}
          </button>
        ))}
      </div>

      {/* Report Content Panel */}
      <div className="p-5 rounded-2xl bg-[#0E121B] border border-[#1C2333] space-y-6">
        {reportType === "sales" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Sales Summary Report</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Total Gross Sales</div>
                <div className="text-xl font-black text-slate-100 font-mono mt-1">{formatPrice(grossSales)}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400 font-semibold text-rose-400">(-) Total Refunds</div>
                <div className="text-xl font-black text-rose-400 font-mono mt-1">-{formatPrice(totalRefunds)}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400 font-semibold text-[#D4AF37]">(=) Net Sales Revenue</div>
                <div className="text-xl font-black text-[#D4AF37] font-mono mt-1">{formatPrice(netSales)}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Net 5% VAT Collected</div>
                <div className="text-xl font-black text-emerald-400 font-mono mt-1">{formatPrice(netVat)}</div>
              </div>
            </div>
          </div>
        )}

        {reportType === "profit" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#D4AF37]" />
              <span>Net Profit & Loss Statement (COGS Method)</span>
            </h3>
            <div className="p-5 rounded-2xl bg-[#121622] border border-[#1E2536] space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span>(+) Gross Sales Revenue:</span>
                <span className="text-slate-200 font-bold">{formatPrice(grossSales)}</span>
              </div>
              <div className="flex justify-between text-rose-400">
                <span>(-) Less Customer Returns & Refunds:</span>
                <span className="font-bold">-{formatPrice(totalRefunds)}</span>
              </div>
              <div className="pt-2 border-t border-[#1C2333] flex justify-between font-bold text-[#D4AF37]">
                <span>(=) NET SALES REVENUE:</span>
                <span>{formatPrice(netSales)}</span>
              </div>
              <div className="flex justify-between text-amber-400">
                <span>(-) Cost of Goods Sold (COGS):</span>
                <span className="font-bold">-{formatPrice(cogs)}</span>
              </div>
              <div className="pt-2 border-t border-[#1C2333] flex justify-between font-bold text-cyan-400">
                <span>(=) GROSS PROFIT:</span>
                <span>{formatPrice(grossProfit)}</span>
              </div>
              <div className="flex justify-between text-rose-400">
                <span>(-) Operating Expenses Outflow:</span>
                <span className="font-bold">-{formatPrice(totalExpensesCost)}</span>
              </div>
              <div className="pt-3 border-t border-[#1C2333] flex justify-between text-sm font-black">
                <span>(=) NET STORE PROFIT:</span>
                <span className={netProfit >= 0 ? "text-emerald-400" : "text-rose-500"}>{formatPrice(netProfit)}</span>
              </div>
            </div>
          </div>
        )}

        {reportType === "returns" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Returns & Refunds Statement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Total Return Records</div>
                <div className="text-2xl font-black text-purple-400 font-mono mt-1">{orderReturns.length}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Total Refund Amount Issued</div>
                <div className="text-2xl font-black text-[#D4AF37] font-mono mt-1">{formatPrice(totalRefunds)}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Refunded 5% VAT Component</div>
                <div className="text-2xl font-black text-cyan-400 font-mono mt-1">{formatPrice(refundedVat)}</div>
              </div>
            </div>
          </div>
        )}

        {reportType === "inventory" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Inventory Valuation Statement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Total Stock Quantity</div>
                <div className="text-2xl font-black text-slate-100 font-mono mt-1">{totalStockQuantity} units</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Total Inventory Retail Value</div>
                <div className="text-2xl font-black text-[#D4AF37] font-mono mt-1">{formatPrice(totalInventoryRetailValue)}</div>
              </div>
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738]">
                <div className="text-xs text-slate-400">Total Inventory Cost Value</div>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{formatPrice(totalInventoryCostValue)}</div>
              </div>
            </div>
          </div>
        )}

        {reportType === "customer_due" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Customer Outstanding Due Statement</h3>
            <div className="p-4 rounded-2xl bg-[#121622] border border-[#1E2536] text-xs">
              <div className="text-slate-400">Total Outstanding Customer Credit Balance:</div>
              <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                {formatPrice(customers.reduce((sum, c) => sum + (c.outstandingBalance || 0), 0))}
              </div>
            </div>
          </div>
        )}

        {reportType === "supplier_due" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Supplier Outstanding Payables Statement</h3>
            <div className="p-4 rounded-2xl bg-[#121622] border border-[#1E2536] text-xs">
              <div className="text-slate-400">Total Balance Due to Suppliers:</div>
              <div className="text-2xl font-black text-amber-400 font-mono mt-1">
                {formatPrice(suppliers.reduce((sum, s) => sum + (s.balanceDue || 0), 0))}
              </div>
            </div>
          </div>
        )}

        {reportType === "expenses" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Operational Expenses Summary</h3>
            <div className="p-4 rounded-2xl bg-[#121622] border border-[#1E2536] text-xs">
              <div className="text-slate-400">Total Operating Expenses Outflow:</div>
              <div className="text-2xl font-black text-rose-400 font-mono mt-1">
                {formatPrice(totalExpensesCost)}
              </div>
            </div>
          </div>
        )}

        {reportType === "purchases" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Purchase Orders Summary</h3>
            <div className="p-4 rounded-2xl bg-[#121622] border border-[#1E2536] text-xs">
              <div className="text-slate-400">Total Purchase Orders Value:</div>
              <div className="text-2xl font-black text-cyan-400 font-mono mt-1">
                {formatPrice(totalPurchasesCost)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
