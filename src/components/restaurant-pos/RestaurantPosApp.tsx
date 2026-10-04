"use client";

import React from "react";
import { PosHeader } from "./PosHeader";
import { CategorySidebar } from "./CategorySidebar";
import { CategoryTabs } from "./CategoryTabs";
import { ProductGrid } from "./ProductGrid";
import { OrderCart } from "./OrderCart";

import { PaymentModal } from "./PaymentModal";
import { ReceiptModal } from "./ReceiptModal";
import { TableManagementModal } from "./TableManagementModal";
import { TableManagementView } from "./TableManagementView";
import { KitchenDisplayView } from "./KitchenDisplayView";
import { OrderHistoryView } from "./OrderHistoryView";
import { PosDashboardView } from "./PosDashboardView";
import { MenuManagementView } from "./MenuManagementView";
import { CategoryManagementView } from "./CategoryManagementView";
import { ReportsView } from "./ReportsView";
import { StaffManagementView } from "./StaffManagementView";
import { CustomerManagementView } from "./CustomerManagementView";
import { SettingsView } from "./SettingsView";
import { PosSettingsModal } from "./PosSettingsModal";
import { PinAuthModal } from "./PinAuthModal";
import { KeyboardShortcutsModal } from "./KeyboardShortcutsModal";
import { useRestaurantPos, RestaurantPosProvider } from "../../context/RestaurantPosContext";

const RestaurantPosInner: React.FC = () => {
  const { activeView, isMobileCartOpen, setIsMobileCartOpen, lang, isDark } = useRestaurantPos();

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`h-screen max-h-screen flex flex-col font-sans overflow-hidden select-none transition-colors duration-200 ${
        isDark ? "dark bg-[#0B0D14] text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Universal Header (fixed height, never scrolls away) */}
      <div className="flex-shrink-0 z-30">
        <PosHeader />
      </div>

      {/* Main Operational View (fills exact remaining viewport height, zero body scroll) */}
      <main className="flex-1 flex overflow-hidden min-h-0 relative bg-slate-100 dark:bg-[#0B0D14]">
        {activeView === "pos" && (
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0 w-full h-full">
            {/* Desktop Left: Category Sidebar matching the terminal poster */}
            <div className="hidden lg:flex flex-shrink-0 h-full">
              <CategorySidebar />
            </div>

            {/* Center: Responsive Category Tabs (mobile/tablet) + Product Grid (scrolls smoothly) */}
            <div className="flex-1 flex flex-col overflow-hidden min-h-0 h-full bg-slate-100 dark:bg-[#0B0D14]">
              <div className="lg:hidden flex-shrink-0">
                <CategoryTabs />
              </div>
              <div className="flex-1 overflow-y-auto min-h-0">
                <ProductGrid />
              </div>
            </div>

            {/* Desktop Right: Order Cart Panel (matches poster Current Order panel) */}
            <div className="hidden lg:flex w-[340px] xl:w-[380px] 2xl:w-[410px] h-full flex-col min-h-0 flex-shrink-0 border-l border-slate-200 dark:border-[#1F2433] bg-white dark:bg-[#10121A] shadow-2xl z-20">
              <OrderCart />
            </div>



            {/* Mobile / Tablet Drawer Sheet: Order Cart */}
            {isMobileCartOpen && (
              <div className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-end animate-in fade-in-50">
                <div className="w-full max-w-md h-full bg-white dark:bg-[#10121A] shadow-2xl animate-in slide-in-from-right-full flex flex-col">
                  <OrderCart />
                </div>
              </div>
            )}
          </div>
        )}

        {activeView === "tables" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <TableManagementView />
          </div>
        )}

        {activeView === "kitchen" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <KitchenDisplayView />
          </div>
        )}

        {activeView === "orders" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <OrderHistoryView />
          </div>
        )}

        {activeView === "reports" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <ReportsView />
          </div>
        )}

        {activeView === "menu" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <MenuManagementView />
          </div>
        )}

        {activeView === "categories" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <CategoryManagementView />
          </div>
        )}

        {activeView === "staff" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <StaffManagementView />
          </div>
        )}

        {activeView === "customers" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <CustomerManagementView />
          </div>
        )}

        {activeView === "settings" && (
          <div className="flex-1 overflow-hidden min-h-0 h-full">
            <SettingsView />
          </div>
        )}

        {activeView === "dashboard" && (
          <div className="flex-1 overflow-y-auto min-h-0 h-full">
            <PosDashboardView />
          </div>
        )}
      </main>

      {/* Global Interactive Modals */}
      <PaymentModal />
      <ReceiptModal />
      <TableManagementModal />
      <PinAuthModal />
      <PosSettingsModal />
      <KeyboardShortcutsModal />
    </div>
  );
};

export const RestaurantPosApp: React.FC = () => {
  return (
    <RestaurantPosProvider>
      <RestaurantPosInner />
    </RestaurantPosProvider>
  );
};
