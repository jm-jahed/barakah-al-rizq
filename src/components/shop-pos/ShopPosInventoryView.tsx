"use client";

import React, { useState } from "react";
import { FileText, Search, Plus, Minus, ArrowUpDown, AlertTriangle, CheckCircle2, History, Package } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

export const ShopPosInventoryView: React.FC = () => {
  const { products, updateProductStock, stockMovements, formatPrice, lang } = useShopPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "low" | "out">("all");
  const [activeTab, setActiveTab] = useState<"overview" | "movements">("overview");

  // Adjustment Modal State
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [adjustmentDelta, setAdjustmentDelta] = useState<string>("");
  const [adjustmentReason, setAdjustmentReason] = useState<string>("Stock Audit Count Correction");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lowStockItems = products.filter((p) => p.stock > 0 && p.stock <= p.minStock);
  const outOfStockItems = products.filter((p) => p.stock <= 0);

  const filteredProducts = products.filter((p) => {
    const matchesFilter =
      filterType === "all" ||
      (filterType === "low" && p.stock > 0 && p.stock <= p.minStock) ||
      (filterType === "out" && p.stock <= 0);

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.sku.toLowerCase().includes(query) ||
      p.barcode.includes(query);

    return matchesFilter && matchesQuery;
  });

  const totalCostValue = products.reduce((sum, p) => sum + p.costPrice * p.stock, 0);
  const totalRetailValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);

  const handleAdjustmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const delta = parseInt(adjustmentDelta);
    if (!isNaN(delta) && selectedProductId) {
      updateProductStock(selectedProductId, delta, adjustmentReason);
      setIsModalOpen(false);
      setAdjustmentDelta("");
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "إدارة المخزون والتسويات" : "Inventory & Stock Audit Control"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "متابعة كميات المخزون الحالية، التقييم المالي، وتصفية حركات الدخول والخروج"
              : "Monitor stock balances, valuation, stock movements audit log, and perform adjustments"}
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <ArrowUpDown className="w-4 h-4 stroke-[2.5]" />
          <span>{lang === "ar" ? "تعديل / تسوية مخزون" : "Perform Stock Adjustment"}</span>
        </button>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-medium">Total Stock Value (Cost)</div>
          <div className="text-xl font-black text-[#D4AF37] font-mono mt-0.5">{formatPrice(totalCostValue)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-medium">Total Retail Value</div>
          <div className="text-xl font-black text-cyan-400 font-mono mt-0.5">{formatPrice(totalRetailValue)}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-medium">Low Stock Items</div>
          <div className="text-xl font-black text-amber-400 font-mono mt-0.5">{lowStockItems.length}</div>
        </div>
        <div className="p-4 rounded-2xl bg-[#0E121B] border border-[#1E2536]">
          <div className="text-xs text-slate-400 font-medium">Out of Stock Items</div>
          <div className="text-xl font-black text-rose-400 font-mono mt-0.5">{outOfStockItems.length}</div>
        </div>
      </div>

      {/* Sub-Tabs: Overview vs Movements */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
            activeTab === "overview"
              ? "bg-[#1C2436] text-[#D4AF37] border border-[#D4AF37]/40"
              : "bg-[#0E121B] text-slate-400 hover:text-slate-200 border border-[#1C2333]"
          }`}
        >
          {lang === "ar" ? "نظرة عامة على الكميات" : "Stock Levels Overview"}
        </button>
        <button
          onClick={() => setActiveTab("movements")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === "movements"
              ? "bg-[#1C2436] text-[#D4AF37] border border-[#D4AF37]/40"
              : "bg-[#0E121B] text-slate-400 hover:text-slate-200 border border-[#1C2333]"
          }`}
        >
          <History className="w-3.5 h-3.5" />
          <span>{lang === "ar" ? "سجل حركة المخزون Audit" : "Stock Movement Audit Log"}</span>
        </button>
      </div>

      {activeTab === "overview" ? (
        /* Overview View Table */
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 bg-[#0E121B] p-3 rounded-2xl border border-[#1C2333]">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, SKU, or barcode..."
                className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div className="flex items-center gap-1.5 w-full sm:w-auto font-mono text-xs">
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  filterType === "all" ? "bg-[#D4AF37] text-black" : "bg-[#141A26] text-slate-300"
                }`}
              >
                All ({products.length})
              </button>
              <button
                onClick={() => setFilterType("low")}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  filterType === "low" ? "bg-amber-500 text-black" : "bg-[#141A26] text-slate-300"
                }`}
              >
                Low ({lowStockItems.length})
              </button>
              <button
                onClick={() => setFilterType("out")}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  filterType === "out" ? "bg-rose-600 text-white" : "bg-[#141A26] text-slate-300"
                }`}
              >
                Out ({outOfStockItems.length})
              </button>
            </div>
          </div>

          <div className="bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-start border-collapse text-xs">
                <thead>
                  <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                    <th className="py-3 px-4 text-start">Product</th>
                    <th className="py-3 px-4 text-start">SKU & Barcode</th>
                    <th className="py-3 px-4 text-center">Current Stock</th>
                    <th className="py-3 px-4 text-center">Min Stock</th>
                    <th className="py-3 px-4 text-end">Cost Price</th>
                    <th className="py-3 px-4 text-end">Stock Value (Cost)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#182030] text-slate-300">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-[#141A26] transition">
                      <td className="py-3 px-4 font-bold text-slate-100">{p.name}</td>
                      <td className="py-3 px-4 font-mono text-slate-400">{p.sku} • {p.barcode}</td>
                      <td className="py-3 px-4 text-center font-mono">
                        <span
                          className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${
                            p.stock <= 0
                              ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                              : p.stock <= p.minStock
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          }`}
                        >
                          {p.stock} {p.unit}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center font-mono text-slate-400">{p.minStock}</td>
                      <td className="py-3 px-4 text-end font-mono text-slate-400">{formatPrice(p.costPrice)}</td>
                      <td className="py-3 px-4 text-end font-mono font-bold text-[#D4AF37]">
                        {formatPrice(p.costPrice * p.stock)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Stock Movement Log Table */
        <div className="bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start border-collapse text-xs">
              <thead>
                <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4 text-start">Timestamp</th>
                  <th className="py-3 px-4 text-start">Product</th>
                  <th className="py-3 px-4 text-start">Type</th>
                  <th className="py-3 px-4 text-center">Qty Change</th>
                  <th className="py-3 px-4 text-center">Previous → New</th>
                  <th className="py-3 px-4 text-start">Ref No</th>
                  <th className="py-3 px-4 text-start">Notes</th>
                  <th className="py-3 px-4 text-start">User</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#182030] text-slate-300">
                {stockMovements.map((sm) => (
                  <tr key={sm.id} className="hover:bg-[#141A26] transition">
                    <td className="py-3 px-4 font-mono text-slate-400">{sm.date}</td>
                    <td className="py-3 px-4 font-bold text-slate-100">{sm.productName}</td>
                    <td className="py-3 px-4 uppercase font-mono text-[10px]">
                      <span className={`px-2 py-0.5 rounded-full font-bold ${sm.type === "in" || sm.type === "return" ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                        {sm.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center font-mono font-bold text-[#D4AF37]">{sm.quantity}</td>
                    <td className="py-3 px-4 text-center font-mono text-slate-400">
                      {sm.previousStock} → <strong className="text-slate-100">{sm.newStock}</strong>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-400">{sm.referenceNo}</td>
                    <td className="py-3 px-4 text-slate-300">{sm.notes}</td>
                    <td className="py-3 px-4 text-slate-400">{sm.createdBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Stock Adjustment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-md bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6">
            <h3 className="text-base font-bold text-slate-100 mb-4 flex items-center gap-2">
              <ArrowUpDown className="w-5 h-5 text-[#D4AF37]" />
              <span>Perform Stock Adjustment</span>
            </h3>

            <form onSubmit={handleAdjustmentSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Select Product</label>
                <select
                  required
                  value={selectedProductId}
                  onChange={(e) => setSelectedProductId(e.target.value)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                >
                  <option value="">-- Choose Product --</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} (Current Stock: {p.stock})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Adjustment Quantity (+ / -)</label>
                <input
                  type="number"
                  required
                  placeholder="+10 or -5"
                  value={adjustmentDelta}
                  onChange={(e) => setAdjustmentDelta(e.target.value)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono font-bold rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Reason / Notes</label>
                <input
                  type="text"
                  required
                  value={adjustmentReason}
                  onChange={(e) => setAdjustmentReason(e.target.value)}
                  className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2.5 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition"
                >
                  Apply Stock Change
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
