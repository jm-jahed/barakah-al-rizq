"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  UtensilsCrossed,
  Search,
  Clock,
  User,
  LayoutGrid,
  ChefHat,
  Receipt,
  BarChart3,
  SlidersHorizontal,
  Moon,
  Sun,
  Globe,
  Keyboard,
  Store,
  Bike,
  ShoppingBag,
  Users,
  CreditCard,
  PlusCircle,
  KeyRound,
  Shield,
} from "lucide-react";
import { useRestaurantPos, PosView } from "../../context/RestaurantPosContext";
import { OrderType } from "../../types/restaurantPos";

export const PosHeader: React.FC = () => {
  const {
    activeView,
    setActiveView,
    lang,
    setLanguage,
    t,
    theme,
    toggleTheme,
    businessProfile,
    orderType,
    setOrderType,
    selectedTable,
    setIsTableModalOpen,
    searchQuery,
    setSearchQuery,
    setIsShortcutsModalOpen,
    setIsPinModalOpen,
    currentStaff,
    stats,
    startNewBill,
    cartItems,
    setIsMobileCartOpen,
    tables,
    kotTickets,
  } = useRestaurantPos();

  const [timeString, setTimeString] = useState("");

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

  const totalCartQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const occupiedTablesCount = tables.filter((tbl) => tbl.status === "occupied").length;
  const pendingKotCount = kotTickets.filter(
    (k) => k.status === "new" || k.status === "preparing"
  ).length;

  const navItems: {
    id: PosView;
    label: string;
    icon: React.FC<{ className?: string }>;
    count?: number;
  }[] = [
    { id: "pos", label: t.nav_pos, icon: CreditCard },
    { id: "tables", label: t.nav_tables, icon: LayoutGrid, count: occupiedTablesCount },
    { id: "kitchen", label: t.nav_kitchen, icon: ChefHat, count: pendingKotCount },
    { id: "orders", label: t.nav_orders, icon: Receipt },
    { id: "reports", label: t.nav_reports, icon: BarChart3 },
    { id: "menu", label: t.nav_menu, icon: UtensilsCrossed },
    { id: "categories", label: t.nav_categories, icon: SlidersHorizontal },
    { id: "staff", label: t.nav_staff, icon: Shield },
    { id: "customers", label: t.nav_customers, icon: Users },
    { id: "settings", label: t.nav_settings, icon: SlidersHorizontal },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-[#0E1017] border-b border-slate-200 dark:border-[#1F2433] shadow-md transition-colors select-none">
      {/* Top Brand & Status Strip */}
      <div className="px-3 sm:px-4 py-1.5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-[#161924]">
        {/* Restaurant Identity & Branch */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-[#C59B27] to-[#D4AF37] text-black flex items-center justify-center shadow-sm font-black">
            <UtensilsCrossed className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xs sm:text-sm font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                {lang === "ar" ? businessProfile.arabicName : businessProfile.name}
              </h1>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                LIVE
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 dark:text-slate-400">
              <span className="font-medium text-slate-600 dark:text-slate-300">{businessProfile.branchName}</span>
              <span>•</span>
              <span className="font-mono text-[9px]">TRN {businessProfile.trn}</span>
            </div>
          </div>
        </div>

        {/* Staff, Terminal, Clock & Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Staff Role & Switch User */}
          <button
            onClick={() => setIsPinModalOpen(true)}
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-100 dark:bg-[#141722] hover:bg-slate-200 dark:hover:bg-[#1A1F2E] border border-slate-200 dark:border-[#222736] text-xs transition"
            title="Switch Staff / Enter PIN"
          >
            <div className="w-4 h-4 rounded-full bg-[#D4AF37] text-black text-[9px] font-black flex items-center justify-center font-mono">
              {currentStaff.name.charAt(0)}
            </div>
            <div className="text-left">
              <span className="font-bold text-slate-800 dark:text-slate-200 block text-[10px] leading-tight">
                {lang === "ar" ? currentStaff.arabicName : currentStaff.name}
              </span>
              <span className="text-[8px] text-amber-700 dark:text-[#D4AF37] uppercase font-semibold block leading-none">
                {currentStaff.role}
              </span>
            </div>
            <KeyRound className="w-3 h-3 text-slate-400 dark:text-slate-500 ms-0.5" />
          </button>

          {/* Tenant SaaS Portal Link */}
          <Link
            href="/login"
            className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25 text-[#D4AF37] text-[11px] font-bold transition"
            title="Restaurant Account / SaaS Portal Login"
          >
            <Store className="w-3 h-3" />
            <span>SaaS</span>
          </Link>

          {/* Real-time Clock */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-100 dark:bg-[#141722] border border-slate-200 dark:border-[#222736] text-[11px] font-mono font-bold text-amber-800 dark:text-[#D4AF37]" title="Gulf Standard Time (GST - UAE)">
            <Clock className="w-3 h-3 text-amber-600 dark:text-[#D4AF37]" />
            <span>{timeString}</span>
          </div>

          {/* New Bill Quick Trigger */}
          <button
            onClick={startNewBill}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-95 text-black text-xs font-black shadow-sm transition-all"
            title="Start New Bill (F2)"
          >
            <PlusCircle className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden sm:inline">{t.new_bill}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(lang === "en" ? "ar" : "en")}
            className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-bold border border-slate-200 dark:border-[#2B3042] bg-slate-100 dark:bg-[#161924] hover:bg-slate-200 dark:hover:bg-[#202534] text-slate-800 dark:text-slate-200 transition"
            title="Switch Language EN / العربية"
          >
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-mono text-[11px]">{lang === "en" ? "العربية" : "EN"}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-1 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#161924] border border-slate-200 dark:border-[#2B3042] transition"
            title={theme === "light" ? t.dark_mode : t.light_mode}
          >
            {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-[#D4AF37]" />}
          </button>

          {/* Mobile Cart Floating Trigger */}
          <button
            onClick={() => setIsMobileCartOpen(true)}
            className="lg:hidden relative flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#D4AF37] text-black font-extrabold text-xs shadow-md active:scale-95 transition"
          >
            <CreditCard className="w-4 h-4" />
            <span>{t.current_bill}</span>
            {totalCartQty > 0 && (
              <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[10px] font-extrabold flex items-center justify-center">
                {totalCartQty}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Primary Operational Views Navigation Strip */}
      <div className="px-3 py-1 bg-slate-50 dark:bg-[#0C0E14] border-b border-slate-200 dark:border-[#1A1E2B] flex items-center justify-between gap-2 overflow-x-auto select-none scrollbar-none">
        <div className="flex items-center gap-1 min-w-max">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#D4AF37] text-black shadow-md shadow-[#D4AF37]/20 font-black scale-[1.01]"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-[#161924]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-[#D4AF37]"}`} />
                <span>{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-black ${
                      isActive
                        ? "bg-black text-[#D4AF37]"
                        : "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Quick Shortcuts Hint Button */}
        <button
          onClick={() => setIsShortcutsModalOpen(true)}
          className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-medium text-slate-400 hover:text-[#D4AF37] hover:bg-[#161924] transition min-w-max"
          title="Keyboard Shortcuts (F1)"
        >
          <Keyboard className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>{t.shortcuts}</span>
          <kbd className="text-[10px] font-mono bg-[#1E2230] px-1 rounded text-slate-400 border border-[#2B3142]">
            F1
          </kbd>
        </button>
      </div>

      {/* POS Context Sub-bar (Only shown when activeView === "pos") */}
      {activeView === "pos" && (
        <div className="px-3 sm:px-4 py-1 bg-slate-100 dark:bg-[#12141C] border-b border-slate-200 dark:border-[#1F2433] flex flex-wrap items-center justify-between gap-2">
          {/* Order Type Toggle Group */}
          <div className="flex items-center p-0.5 rounded-xl bg-slate-200 dark:bg-[#181B26] border border-slate-300 dark:border-[#282E40]">
            <button
              onClick={() => setOrderType("dine_in")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                orderType === "dine_in"
                  ? "bg-[#D4AF37] text-black shadow-sm"
                  : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>{t.dine_in}</span>
            </button>

            <button
              onClick={() => setOrderType("takeaway")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                orderType === "takeaway"
                  ? "bg-[#D4AF37] text-black shadow-sm"
                  : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>{t.takeaway}</span>
            </button>

            <button
              onClick={() => setOrderType("delivery")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                orderType === "delivery"
                  ? "bg-[#D4AF37] text-black shadow-sm"
                  : "text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>{t.delivery}</span>
            </button>
          </div>

          {/* Table Selector for Dine-In */}
          {orderType === "dine_in" && (
            <button
              onClick={() => setIsTableModalOpen(true)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                selectedTable
                  ? "bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37]"
                  : "bg-white dark:bg-[#161924] border-slate-300 dark:border-[#2A2F40] text-slate-800 dark:text-slate-300 hover:border-[#D4AF37]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>
                {selectedTable
                  ? `TABLE ${selectedTable.number.replace(/\D/g, "") || selectedTable.number} (${selectedTable.capacity}p)`
                  : t.select_table}
              </span>
            </button>
          )}

          {/* Product Live Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-3.5 h-3.5 absolute start-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" />
            <input
              id="pos-product-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search_placeholder}
              className="w-full ps-8 pe-8 py-1.5 text-xs rounded-xl bg-white dark:bg-[#161924] border border-slate-300 dark:border-[#262B3B] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute end-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                ×
              </button>
            ) : (
              <kbd className="hidden sm:inline-block absolute end-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.2 text-[10px] font-mono text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-[#1F2433] rounded border border-slate-300 dark:border-[#2D3346]">
                /
              </kbd>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
