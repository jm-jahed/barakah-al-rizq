"use client";

import React, { useState, useEffect } from "react";
import { ShopPosProvider, useShopPos } from "@/context/ShopPosContext";
import { ShopPosHeader } from "@/components/shop-pos/ShopPosHeader";
import { ShopPosCategorySidebar } from "@/components/shop-pos/ShopPosCategorySidebar";
import { ShopPosCategoryTabs } from "@/components/shop-pos/ShopPosCategoryTabs";
import { ShopPosProductGrid } from "@/components/shop-pos/ShopPosProductGrid";
import { ShopPosOrderCart } from "@/components/shop-pos/ShopPosOrderCart";

import { ShopPosInventoryView } from "@/components/shop-pos/ShopPosInventoryView";
import { ShopPosProductsView } from "@/components/shop-pos/ShopPosProductsView";
import { ShopPosPurchasesView } from "@/components/shop-pos/ShopPosPurchasesView";
import { ShopPosSuppliersView } from "@/components/shop-pos/ShopPosSuppliersView";
import { ShopPosCustomersView } from "@/components/shop-pos/ShopPosCustomersView";
import { ShopPosReturnsView } from "@/components/shop-pos/ShopPosReturnsView";
import { ShopPosSalesView } from "@/components/shop-pos/ShopPosSalesView";
import { ShopPosExpensesView } from "@/components/shop-pos/ShopPosExpensesView";
import { ShopPosReportsView } from "@/components/shop-pos/ShopPosReportsView";
import { ShopPosStaffView } from "@/components/shop-pos/ShopPosStaffView";
import { ShopPosSettingsView } from "@/components/shop-pos/ShopPosSettingsView";
import { ShopPosDashboardView } from "@/components/shop-pos/ShopPosDashboardView";

import { ShopPosPaymentModal } from "@/components/shop-pos/ShopPosPaymentModal";
import { ShopPosReceiptModal } from "@/components/shop-pos/ShopPosReceiptModal";
import { ShopPosHoldSalesModal } from "@/components/shop-pos/ShopPosHoldSalesModal";
import { ShopPosPinModal } from "@/components/shop-pos/ShopPosPinModal";
import { ShopPosShortcutsModal } from "@/components/shop-pos/ShopPosShortcutsModal";
import { ShopPosShiftModal } from "@/components/shop-pos/ShopPosShiftModal";
import { ShopPosCommandPaletteModal } from "@/components/shop-pos/ShopPosCommandPaletteModal";

const ShopPosContainer: React.FC = () => {
  const {
    activeView,
    language,
    theme,
    cart,
    holdCurrentSale,
    clearCart,
    isPinModalOpen,
    setIsPinModalOpen,
    isHoldSalesModalOpen,
    setIsHoldSalesModalOpen,
  } = useShopPos();

  // Modal visibility states
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [showHoldSalesModal, setShowHoldSalesModal] = useState(false);
  const [targetStaffId, setTargetStaffId] = useState<string | null>(null);
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [showShiftModal, setShowShiftModal] = useState(false);

  // Keyboard Shortcuts Listener (F1, F2, F4, F8, F9, ESC)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F1") {
        e.preventDefault();
        setShowShortcutsModal((prev) => !prev);
      } else if (e.key === "F2") {
        e.preventDefault();
        clearCart();
      } else if (e.key === "F4") {
        e.preventDefault();
        if (cart.length > 0) {
          holdCurrentSale();
        }
      } else if (e.key === "F8" || e.key === "F9") {
        e.preventDefault();
        if (cart.length > 0) {
          setShowPaymentModal(true);
        }
      } else if (e.key === "Escape") {
        setShowPaymentModal(false);
        setShowReceiptModal(false);
        setShowHoldSalesModal(false);
        setIsHoldSalesModalOpen(false);
        setIsPinModalOpen(false);
        setShowShortcutsModal(false);
        setShowShiftModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cart, clearCart, holdCurrentSale]);

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`w-full h-screen max-h-screen overflow-hidden flex flex-col font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0B0D14] ${
        theme === "dark" ? "bg-[#0B0D14] text-[#F7FAFC]" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Top Application Header */}
      <ShopPosHeader onOpenShiftModal={() => setShowShiftModal(true)} />

      {/* Main View Router */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden relative">
        {activeView === "pos" && (
          <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden w-full h-full">
            {/* Desktop Left Category Sidebar */}
            <div className="hidden lg:flex">
              <ShopPosCategorySidebar />
            </div>

            {/* Mobile/Tablet Category Tabs */}
            <ShopPosCategoryTabs />

            {/* Product Discovery Grid */}
            <ShopPosProductGrid />

            {/* Right Retail Checkout Cart */}
            <ShopPosOrderCart
              onOpenPayment={() => setShowPaymentModal(true)}
              onOpenHoldSales={() => setShowHoldSalesModal(true)}
            />
          </div>
        )}

        {activeView === "dashboard" && <ShopPosDashboardView />}
        {activeView === "products" && <ShopPosProductsView />}
        {activeView === "inventory" && <ShopPosInventoryView />}
        {activeView === "purchases" && <ShopPosPurchasesView />}
        {activeView === "suppliers" && <ShopPosSuppliersView />}
        {activeView === "customers" && <ShopPosCustomersView />}
        {activeView === "returns" && <ShopPosReturnsView />}
        {activeView === "sales" && <ShopPosSalesView />}
        {activeView === "expenses" && <ShopPosExpensesView />}
        {activeView === "reports" && <ShopPosReportsView />}
        {activeView === "staff" && <ShopPosStaffView />}
        {activeView === "settings" && <ShopPosSettingsView />}
      </main>

      {/* Modals & Command Palette */}
      <ShopPosPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPaymentComplete={() => {
          setShowPaymentModal(false);
          setShowReceiptModal(true);
        }}
      />

      <ShopPosReceiptModal
        isOpen={showReceiptModal}
        onClose={() => setShowReceiptModal(false)}
      />

      <ShopPosHoldSalesModal
        isOpen={showHoldSalesModal || isHoldSalesModalOpen}
        onClose={() => {
          setShowHoldSalesModal(false);
          setIsHoldSalesModalOpen(false);
        }}
      />

      <ShopPosPinModal
        isOpen={isPinModalOpen}
        targetStaffId={targetStaffId}
        onClose={() => setIsPinModalOpen(false)}
      />

      <ShopPosShortcutsModal
        isOpen={showShortcutsModal}
        onClose={() => setShowShortcutsModal(false)}
      />

      <ShopPosShiftModal
        isOpen={showShiftModal}
        onClose={() => setShowShiftModal(false)}
      />

      <ShopPosCommandPaletteModal />
    </div>
  );
};

export default function ShopPosApp() {
  return (
    <ShopPosProvider>
      <ShopPosContainer />
    </ShopPosProvider>
  );
}
