"use client";

import React, { useState } from "react";
import { Truck, Plus, CheckCircle, Clock, Package, DollarSign, Search, FileText, Check, X } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { PurchaseOrder } from "@/types/shopPos";

export const ShopPosPurchasesView: React.FC = () => {
  const { purchaseOrders, createPurchaseOrder, receivePurchaseOrder, suppliers, products, formatPrice, lang } = useShopPos();

  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  // Form State
  const [supplierId, setSupplierId] = useState(suppliers[0]?.id || "sup-1");
  const [poNumber, setPoNumber] = useState(`PO-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  const [poItems, setPoItems] = useState<{ productId: string; quantity: number; costPrice: number }[]>([]);
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id || "");
  const [itemQty, setItemQty] = useState("10");

  const filteredPOs = purchaseOrders.filter(
    (po) =>
      po.poNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      po.supplierName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddItemToPO = () => {
    const p = products.find((prod) => prod.id === selectedProductId);
    if (!p) return;
    const qty = parseInt(itemQty) || 1;

    setPoItems((prev) => [
      ...prev,
      { productId: p.id, quantity: qty, costPrice: p.costPrice || 10 },
    ]);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (poItems.length === 0) return;

    const supp = suppliers.find((s) => s.id === supplierId);
    const total = poItems.reduce((sum, item) => sum + item.quantity * item.costPrice, 0);

    createPurchaseOrder({
      poNumber,
      supplierId,
      supplierName: supp ? supp.name : "Retail Supplier",
      orderDate: new Date().toISOString().split("T")[0],
      status: "pending",
      items: poItems.map((item) => {
        const prod = products.find((p) => p.id === item.productId);
        return {
          productId: item.productId,
          productName: prod ? prod.name : "Retail Item",
          sku: prod ? prod.sku : "SKU",
          quantity: item.quantity,
          costPrice: item.costPrice,
          total: item.quantity * item.costPrice,
        };
      }),
      totalAmount: total,
      paidAmount: total,
    });

    setIsCreateModalOpen(false);
    setPoItems([]);
    setPoNumber(`PO-2026-${Math.floor(1000 + Math.random() * 9000)}`);
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-[#07090F] p-4 lg:p-6 overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-xl lg:text-2xl font-black text-slate-100 flex items-center gap-2.5">
            <Truck className="w-6 h-6 text-[#D4AF37]" />
            <span>{lang === "ar" ? "أوامر المشتريات والتوريد" : "Purchase Orders & Stock Receiving"}</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            {lang === "ar"
              ? "إصدار أوامر المشتريات للموردين واستلام البضائع لرفع المخزون تلقائياً"
              : "Issue purchase orders to suppliers and receive shipments to update inventory"}
          </p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg shadow-[#D4AF37]/20 hover:brightness-110 transition flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>{lang === "ar" ? "إنشاء أمر شراء جديد" : "Create Purchase Order"}</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center gap-3 mb-4 bg-[#0E121B] p-3 rounded-2xl border border-[#1C2333]">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute start-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search PO number or supplier name..."
            className="w-full bg-[#141A26] border border-[#202738] rounded-xl ps-9 pe-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-[#D4AF37]"
          />
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 bg-[#0E121B] border border-[#1C2333] rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="bg-[#121724] border-b border-[#1C2333] text-slate-400 font-semibold uppercase tracking-wider">
                <th className="py-3 px-4 text-start">PO Number</th>
                <th className="py-3 px-4 text-start">Supplier</th>
                <th className="py-3 px-4 text-start">Order Date</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-center">Items Count</th>
                <th className="py-3 px-4 text-end">Total Amount</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#182030] text-slate-300">
              {filteredPOs.map((po) => {
                const isReceived = po.status === "received";
                return (
                  <tr key={po.id} className="hover:bg-[#141A26] transition">
                    <td className="py-3 px-4 font-mono font-bold text-slate-100">{po.poNumber}</td>
                    <td className="py-3 px-4 font-semibold text-slate-200">{po.supplierName}</td>
                    <td className="py-3 px-4 font-mono text-slate-400">{po.orderDate}</td>
                    <td className="py-3 px-4 text-center uppercase font-mono">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          isReceived
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {po.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center font-mono text-slate-300">
                      {po.items.reduce((acc, i) => acc + i.quantity, 0)} units
                    </td>
                    <td className="py-3 px-4 text-end font-mono font-bold text-[#D4AF37]">
                      {formatPrice(po.totalAmount)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {!isReceived ? (
                        <button
                          onClick={() => receivePurchaseOrder(po.id)}
                          className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-black text-xs font-bold shadow-md hover:brightness-110 transition flex items-center justify-center gap-1.5 mx-auto"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Receive Stock</span>
                        </button>
                      ) : (
                        <span className="text-[11px] text-emerald-400 font-bold flex items-center justify-center gap-1">
                          <Check className="w-3.5 h-3.5 stroke-[3]" /> Stock Restocked
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Purchase Order Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-xl bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1C2333]">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#D4AF37]" />
                <span>Create Purchase Order</span>
              </h3>
              <button onClick={() => setIsCreateModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="flex-1 overflow-y-auto custom-scrollbar space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">PO Number</label>
                  <input
                    type="text"
                    required
                    value={poNumber}
                    onChange={(e) => setPoNumber(e.target.value)}
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 font-mono rounded-xl px-3 py-2 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Supplier</label>
                  <select
                    value={supplierId}
                    onChange={(e) => setSupplierId(e.target.value)}
                    className="w-full bg-[#141A26] border border-[#202738] text-xs text-slate-100 rounded-xl px-3 py-2 outline-none"
                  >
                    {suppliers.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} ({s.company})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add Item Row */}
              <div className="p-3 rounded-xl bg-[#121622] border border-[#1C2333] space-y-2">
                <div className="text-xs font-bold text-[#D4AF37]">Add Products to Order</div>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="flex-1 bg-[#182030] border border-[#242F46] text-xs text-slate-100 rounded-lg px-2.5 py-1.5 outline-none"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} (Cost: {p.costPrice})
                      </option>
                    ))}
                  </select>
                  <input
                    type="number"
                    min="1"
                    value={itemQty}
                    onChange={(e) => setItemQty(e.target.value)}
                    className="w-20 bg-[#182030] border border-[#242F46] text-xs text-slate-100 font-mono text-center rounded-lg py-1.5 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleAddItemToPO}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-black text-xs font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Items Table Preview */}
              <div className="border border-[#1C2333] rounded-xl overflow-hidden text-xs">
                <table className="w-full text-start font-mono">
                  <thead className="bg-[#141A26] text-slate-400 uppercase">
                    <tr>
                      <th className="p-2 text-start">Product</th>
                      <th className="p-2 text-center">Qty</th>
                      <th className="p-2 text-end">Cost</th>
                      <th className="p-2 text-end">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#182030] text-slate-300">
                    {poItems.map((it, idx) => {
                      const prod = products.find((p) => p.id === it.productId);
                      return (
                        <tr key={idx}>
                          <td className="p-2 text-slate-100 font-bold">{prod?.name || "Item"}</td>
                          <td className="p-2 text-center">{it.quantity}</td>
                          <td className="p-2 text-end">{formatPrice(it.costPrice)}</td>
                          <td className="p-2 text-end font-bold text-[#D4AF37]">
                            {formatPrice(it.quantity * it.costPrice)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsCreateModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={poItems.length === 0}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-md hover:brightness-110 transition disabled:opacity-40"
                >
                  Save Purchase Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
