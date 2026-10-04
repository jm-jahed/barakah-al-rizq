"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Users, Truck, FileText, ArrowRight, X, Package, Shield, Settings, DollarSign, RotateCcw, BarChart3, Clock } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";
import { ShopPosView } from "@/types/shopPos";

export const ShopPosCommandPaletteModal: React.FC = () => {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    products,
    customers,
    suppliers,
    setActiveView,
    formatPrice,
    addToCart,
    lang,
  } = useShopPos();

  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const quickNav: { id: string; label: string; view: ShopPosView; icon: any }[] = [
    { id: "v-pos", label: lang === "ar" ? "نقطة البيع الكاشير" : "POS Checkout Workspace", view: "pos", icon: ShoppingBag },
    { id: "v-dash", label: lang === "ar" ? "لوحة التحكم والتحليلات" : "Dashboard & KPI Analytics", view: "dashboard", icon: BarChart3 },
    { id: "v-prod", label: lang === "ar" ? "إدارة المنتجات والأصناف" : "Products Directory & Catalog", view: "products", icon: Package },
    { id: "v-inv", label: lang === "ar" ? "إدارة المخزون والتسويات" : "Inventory & Stock Movement", view: "inventory", icon: FileText },
    { id: "v-pur", label: lang === "ar" ? "أوامر المشتريات والموردين" : "Purchase Orders & Receiving", view: "purchases", icon: Truck },
    { id: "v-cus", label: lang === "ar" ? "دليل العملاء والحسابات" : "Customers Directory & Ledgers", view: "customers", icon: Users },
    { id: "v-sup", label: lang === "ar" ? "دليل الموردين الذمم" : "Suppliers Directory & Ledgers", view: "suppliers", icon: Truck },
    { id: "v-sales", label: lang === "ar" ? "سجل المبيعات والفواتير" : "Completed Sales History", view: "sales", icon: Clock },
    { id: "v-ret", label: lang === "ar" ? "إدارة المرتجعات والاستبدال" : "Returns & Refund Processing", view: "returns", icon: RotateCcw },
    { id: "v-exp", label: lang === "ar" ? "مصروفات النثرية والمتاجر" : "Expenses & Store Outflow", view: "expenses", icon: DollarSign },
    { id: "v-rep", label: lang === "ar" ? "تقارير المبيعات والأرباح" : "Reports & Financial Analysis", view: "reports", icon: BarChart3 },
    { id: "v-set", label: lang === "ar" ? "إعدادات المتجر والطابعات" : "System & Printer Settings", view: "settings", icon: Settings },
  ];

  const matchedProducts = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.sku.toLowerCase().includes(query.toLowerCase()) ||
          p.barcode.includes(query)
      ).slice(0, 5)
    : [];

  const matchedCustomers = query
    ? customers.filter(
        (c) =>
          c.name.toLowerCase().includes(query.toLowerCase()) ||
          c.phone.includes(query)
      ).slice(0, 3)
    : [];

  const matchedNav = query
    ? quickNav.filter((n) => n.label.toLowerCase().includes(query.toLowerCase()))
    : quickNav;

  const handleSelectView = (view: ShopPosView) => {
    setActiveView(view);
    setIsCommandPaletteOpen(false);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    setActiveView("pos");
    setIsCommandPaletteOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Top Search Input */}
        <div className="relative p-4 border-b border-[#1C2333] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "ar" ? "ابحث عن منتج، عميل، مورد أو صفحة (Ctrl+K)..." : "Search products, customers, suppliers or view (Ctrl+K)..."}
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 outline-none text-base font-medium"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Results Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-4">
          {/* Product Results */}
          {matchedProducts.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] px-2 mb-1.5">
                {lang === "ar" ? "المنتجات المطابقة" : "Matching Products"}
              </div>
              <div className="space-y-1">
                {matchedProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleAddToCart(p)}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#141A26] hover:bg-[#1C2436] border border-[#202738] hover:border-[#D4AF37]/50 cursor-pointer transition group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-black/40" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-[#D4AF37]">
                          {p.name}
                        </div>
                        <div className="text-xs text-slate-400 font-mono">
                          SKU: {p.sku} • {p.barcode}
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <div className="text-sm font-bold text-slate-100">{formatPrice(p.price)}</div>
                      <span className="text-[10px] text-emerald-400 font-medium">
                        {p.stock} {p.unit} in stock
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Customer Results */}
          {matchedCustomers.length > 0 && (
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 mb-1.5">
                {lang === "ar" ? "العملاء المطابقون" : "Matching Customers"}
              </div>
              <div className="space-y-1">
                {matchedCustomers.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => handleSelectView("customers")}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#141A26] hover:bg-[#1C2436] border border-[#202738] cursor-pointer transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-sm font-semibold text-slate-100">{c.name}</div>
                        <div className="text-xs text-slate-400">{c.phone}</div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-[#D4AF37]">
                      {c.outstandingBalance && c.outstandingBalance > 0
                        ? `Due: ${formatPrice(c.outstandingBalance)}`
                        : "Clear"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-1.5">
              {lang === "ar" ? "التنقل السريع للصفحات" : "System Navigation"}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {matchedNav.map((n) => {
                const Icon = n.icon;
                return (
                  <button
                    key={n.id}
                    onClick={() => handleSelectView(n.view)}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#121622] hover:bg-[#1A2234] border border-[#1E2536] hover:border-[#D4AF37]/40 text-start text-xs font-semibold text-slate-200 transition group"
                  >
                    <div className="p-1.5 rounded-lg bg-[#182030] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="flex-1">{n.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-[#0A0D14] border-t border-[#1C2333] flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigate with mouse or touch</span>
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">ESC</span> to close
          </div>
        </div>
      </div>
    </div>
  );
};
