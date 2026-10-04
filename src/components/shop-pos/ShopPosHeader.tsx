"use client";

import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Package,
  FileText,
  Truck,
  Users,
  Clock,
  RotateCcw,
  BarChart3,
  DollarSign,
  Shield,
  Settings,
  Search,
  Barcode,
  Globe,
  Sun,
  Moon,
  ChevronDown,
  Lock,
  Unlock,
  CreditCard,
  LayoutGrid,
  Boxes,
  Layers,
  Store,
} from "lucide-react";
import { CurrencySelector } from "./CurrencySelector";
import { LanguageSelector } from "./LanguageSelector";
import { useShopPos } from "@/context/ShopPosContext";
import { ShopPosView } from "@/types/shopPos";

interface Props {
  onOpenShiftModal?: () => void;
}

export const ShopPosHeader: React.FC<Props> = ({ onOpenShiftModal }) => {
  const {
    activeView,
    setActiveView,
    businessProfile,
    currentStaff,
    setIsPinModalOpen,
    setIsCommandPaletteOpen,
    currentShift,
    lang,
    setLanguage,
    theme,
    toggleTheme,
    heldSales,
    cartItems,
    setIsHoldSalesModalOpen,
    activeCurrency,
    setCurrency,
    currencies,
    searchQuery,
    setSearchQuery,
    addToCart,
    products,
  } = useShopPos();

  const [timeString, setTimeString] = useState("");
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchQuery || "");
  const [scanNotification, setScanNotification] = useState<string | null>(null);

  useEffect(() => {
    setSearchInput(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (value: string) => {
    setSearchInput(value);
    setSearchQuery(value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    const code = searchInput.trim().toLowerCase();
    const matchedProduct = products.find(
      (p) =>
        p.barcode?.toLowerCase() === code ||
        p.sku?.toLowerCase() === code ||
        p.id?.toLowerCase() === code
    );

    if (matchedProduct) {
      addToCart(matchedProduct, 1);
      setScanNotification(`Added ${matchedProduct.name}`);
      setSearchInput("");
      setSearchQuery("");
      setTimeout(() => setScanNotification(null), 2500);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const topNavItems: { id: ShopPosView; label: string; icon: any; count?: number }[] = [
    { id: "pos", label: lang === "ar" ? "نقطة الفوترة" : "POS Billing", icon: CreditCard, count: cartItems.length },
    { id: "dashboard", label: lang === "ar" ? "لوحة التحكم" : "Dashboard", icon: LayoutGrid },
    { id: "inventory", label: lang === "ar" ? "المخزون" : "Inventory / Stock", icon: Boxes },
  ];

  const bottomNavItems: { id: ShopPosView; label: string; icon: any; count?: number }[] = [
    { id: "sales", label: lang === "ar" ? "سجل الطلبات" : "Orders", icon: Layers },
    { id: "products", label: lang === "ar" ? "المنتجات" : "Products", icon: Package },
    { id: "purchases", label: lang === "ar" ? "المشتريات" : "Purchases", icon: Truck },
    { id: "customers", label: lang === "ar" ? "العملاء" : "Customers", icon: Users },
    { id: "suppliers", label: lang === "ar" ? "الموردين" : "Suppliers", icon: Truck },
    { id: "returns", label: lang === "ar" ? "المرتجعات" : "Returns", icon: RotateCcw },
    { id: "expenses", label: lang === "ar" ? "المصروفات" : "Expenses", icon: DollarSign },
    { id: "reports", label: lang === "ar" ? "التقارير" : "Reports", icon: BarChart3 },
    { id: "staff", label: lang === "ar" ? "الموظفين" : "Staff", icon: Shield },
    { id: "settings", label: lang === "ar" ? "الإعدادات" : "Settings", icon: Settings },
  ];

  return (
    <header className="w-full bg-[#0B0D14]/95 backdrop-blur-md border-b border-[#1E2330] flex flex-col z-30 select-none flex-shrink-0">
      {/* Line 1: Top Status Bar & Primary Core Nav Items */}
      <div className="w-full px-3 sm:px-4 py-2 flex items-center justify-between gap-2 border-b border-[#1A1F2C]/60 relative z-20">
        {/* Brand Logo & Details */}
        <div
          onClick={() => setActiveView("pos")}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#F3C649] to-[#997B1E] flex items-center justify-center text-black font-black shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
            <Store className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-black tracking-widest text-[#D4AF37] uppercase font-mono whitespace-nowrap">
                {businessProfile.name || "RETAIL POS"}
              </span>
              <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-[#1C2333] text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                UNIVERSAL
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold truncate max-w-[120px] sm:max-w-[180px]">
              {businessProfile.branchName || "ABC GENERAL STORE"}
            </span>
          </div>
        </div>

        {/* Top Bar Navigation Items (POS Billing, Dashboard, Inventory / Stock, Orders) */}
        <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 shrink min-w-0">
          {topNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black shrink-0 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D9A726] text-black shadow-md shadow-[#D9A726]/20 font-black"
                    : "text-slate-300 hover:text-white hover:bg-[#121622]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-black stroke-[2.5]" : "text-[#CEA731]"}`} />
                <span className="whitespace-nowrap">{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className={`px-1.5 py-0.2 text-[9px] font-black rounded-full shrink-0 ${
                    isActive ? "bg-black text-[#D9A726]" : "bg-[#CEA731] text-black"
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Controls & Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Global Search Palette Launcher (Ctrl+K) */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#141A26] hover:bg-[#1A2234] border border-[#202738] hover:border-[#D4AF37]/50 text-xs font-medium text-slate-400 hover:text-slate-200 transition shrink-0 whitespace-nowrap"
            title="Search products, customers, suppliers or commands (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="text-[11px] font-mono">Ctrl+K</span>
          </button>


          {/* Register Shift Status Indicator */}
          <button
            onClick={onOpenShiftModal}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-xs font-bold transition shrink-0 whitespace-nowrap ${
              currentShift && currentShift.status === "open"
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
                : "bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20"
            }`}
            title="Cashier shift open/close details"
          >
            {currentShift && currentShift.status === "open" ? (
              <>
                <Unlock className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">Shift Open</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden sm:inline">Shift Closed</span>
              </>
            )}
          </button>

          {/* Held Carts Badge */}
          {heldSales.length > 0 && (
            <button
              onClick={() => setIsHoldSalesModalOpen(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold animate-pulse shrink-0 whitespace-nowrap"
            >
              <span>Held ({heldSales.length})</span>
            </button>
          )}

          {/* Currency & Language Selectors */}
          <div className="flex items-center gap-1.5 shrink-0">
            <CurrencySelector />
            <LanguageSelector />
          </div>

          {/* Live Dubai GST Time Clock Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121622] border border-[#202738] shadow-sm shrink-0 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="font-mono text-xs font-bold text-[#D4AF37] tracking-wider">{timeString}</span>
          </div>

          {/* Current Staff User Badge & Switch Staff Trigger */}
          <button
            onClick={() => setIsPinModalOpen(true)}
            className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1 rounded-xl bg-[#141A26] hover:bg-[#1A2234] border border-[#202738] hover:border-[#D4AF37]/50 transition shrink-0 whitespace-nowrap"
            title="Switch Staff / Auth PIN"
          >
            <div className="w-6 h-6 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-xs uppercase font-mono">
              {currentStaff.name[0]}
            </div>
            <div className="hidden sm:flex flex-col text-start leading-tight">
              <span className="text-xs font-bold text-slate-200 truncate max-w-[90px]">
                {currentStaff.name}
              </span>
              <span className="text-[9px] font-semibold text-[#D4AF37] capitalize">
                {currentStaff.role}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Line 2: Secondary Operational Navigation Row + Unified Search & Barcode Input */}
      <div className="w-full px-3 sm:px-4 py-1.5 bg-[#0E121B]/90 flex items-center justify-between gap-3 overflow-x-auto no-scrollbar border-b border-[#1A1F2C]/60">
        {/* Left Side: Single Unified Product Search & Barcode Scanner Input */}
        <form onSubmit={handleSearchSubmit} className="relative flex items-center shrink-0">
          <div className="absolute start-3 flex items-center gap-1 text-[#D4AF37] pointer-events-none">
            <Search className="w-3.5 h-3.5" />
            <span className="text-slate-600 font-mono text-[10px]">/</span>
            <Barcode className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder={
              lang === "ar"
                ? "بحث بالاسم، SKU أو مسح الباركود..."
                : "Search Product, SKU, or Scan Barcode..."
            }
            className="w-56 sm:w-72 lg:w-96 ps-14 pe-8 py-1.5 rounded-xl bg-[#141A26] border border-[#202738] focus:border-[#D4AF37] text-xs font-semibold text-slate-100 placeholder-slate-400 outline-none transition"
          />
          {searchInput && (
            <button
              type="button"
              onClick={() => handleSearchChange("")}
              className="absolute end-2.5 p-0.5 rounded-full hover:bg-slate-700/50 text-slate-400 hover:text-white text-[10px] font-bold"
            >
              ✕
            </button>
          )}
          {scanNotification && (
            <div className="absolute top-9 start-0 z-50 px-3 py-1.5 rounded-xl bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-[11px] font-bold shadow-xl whitespace-nowrap">
              {scanNotification}
            </div>
          )}
        </form>

        {/* Right Side: Secondary Navigation Tabs */}
        <nav className="flex items-center justify-end gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5 flex-nowrap shrink-0 ms-auto">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black shrink-0 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#D9A726] text-black shadow-md shadow-[#D9A726]/20 font-black"
                    : "text-slate-300 hover:text-white hover:bg-[#121622]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-black stroke-[2.5]" : "text-[#CEA731]"}`} />
                <span className="whitespace-nowrap">{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span className={`px-1.5 py-0.2 text-[9px] font-black rounded-full shrink-0 ${
                    isActive ? "bg-black text-[#D9A726]" : "bg-[#CEA731] text-black"
                  }`}>
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
