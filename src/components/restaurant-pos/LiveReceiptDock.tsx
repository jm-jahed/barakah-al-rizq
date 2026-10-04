"use client";

import React from "react";
import { Printer, Download, UtensilsCrossed, Check } from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";

export const LiveReceiptDock: React.FC = () => {
  const {
    currentOrderNumber,
    orderType,
    selectedTable,
    cartItems,
    subtotal,
    discountAmount,
    vatAmount,
    grandTotal,
    businessProfile,
    setIsReceiptModalOpen,
    setActiveReceiptOrder,
    formatDhs,
    lang,
  } = useRestaurantPos();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-[260px] 2xl:w-[280px] h-full bg-[#0C0E15] border-l border-[#1E2230] p-3 flex flex-col justify-between overflow-y-auto select-none flex-shrink-0">
      {/* The White Thermal Slip matching screenshot */}
      <div className="bg-white text-black p-4 rounded-xl shadow-2xl font-mono text-[11px] leading-tight border border-slate-300 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="text-center pb-2.5 border-b border-dashed border-slate-400 space-y-0.5">
            <div className="font-black text-xs tracking-wider uppercase text-slate-950">
              RESTAURANT POS
            </div>
            <div className="text-[10px] font-bold text-slate-700">
              {orderType === "dine_in"
                ? `Table ${selectedTable?.number?.replace(/\D/g, "") || "5"}`
                : orderType.toUpperCase()}
            </div>
            <div className="text-[9px] text-slate-500">
              {orderType === "dine_in" ? "Dine-in" : orderType}
            </div>
            <div className="text-[9px] text-slate-500">
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>

          {/* Items */}
          <div className="py-2 space-y-1.5 border-b border-dashed border-slate-400 text-[10px]">
            {cartItems.length === 0 ? (
              <div className="text-center py-4 text-slate-400 text-[10px] italic">
                Items added to order will appear here live...
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start">
                  <span className="truncate pr-1">
                    {item.name} {item.quantity > 1 && `× ${item.quantity}`}
                  </span>
                  <span className="font-bold flex-shrink-0">
                    Dhs {item.lineTotal.toFixed(2)}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* Financial Breakdown */}
          <div className="py-2 border-b border-dashed border-slate-400 space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-bold">Dhs {subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="flex justify-between text-rose-600 font-bold">
                <span>Discount</span>
                <span>- Dhs {discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-slate-600">
              <span>VAT 5%</span>
              <span className="font-bold">Dhs {vatAmount.toFixed(2)}</span>
            </div>

            <div className="pt-1.5 mt-1 border-t border-slate-900 flex justify-between font-black text-xs">
              <span>Grand Total</span>
              <span>Dhs {grandTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-slate-600 pt-0.5">
              <span>Paid</span>
              <span className="font-bold">Dhs 0.00</span>
            </div>

            <div className="flex justify-between font-black text-slate-950 pt-0.5">
              <span>Balance</span>
              <span>Dhs {grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Footer with fork & knife logo + Thank you */}
          <div className="pt-3 text-center space-y-1">
            <div className="w-6 h-6 mx-auto rounded bg-slate-900 text-white flex items-center justify-center">
              <UtensilsCrossed className="w-3.5 h-3.5" />
            </div>
            <div className="text-[10px] font-bold text-slate-800">
              Thank you!
            </div>
            <div className="text-[8px] text-slate-500">
              {businessProfile.phone} • TRN: {businessProfile.trn}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Print Action */}
      <div className="pt-3">
        <button
          onClick={handlePrint}
          className="w-full py-2 px-3 rounded-xl bg-[#1A1D2A] hover:bg-[#252A3C] border border-[#2B3042] text-slate-200 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
        >
          <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Quick Print Slip</span>
        </button>
      </div>
    </div>
  );
};
