"use client";

import React, { useState, useEffect } from "react";
import {
  Banknote,
  CreditCard,
  Smartphone,
  Building2,
  Split,
  CheckCircle2,
  X,
  Calculator,
  Receipt,
  Sparkles,
} from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { PaymentMethod, PaymentSplit } from "../../types/restaurantPos";

export const PaymentModal: React.FC = () => {
  const {
    isPaymentModalOpen,
    setIsPaymentModalOpen,
    grandTotal,
    completePayment,
    formatDhs,
    t,
    lang,
  } = useRestaurantPos();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("cash");
  const [tenderedCash, setTenderedCash] = useState<string>(grandTotal.toFixed(2));

  // Split payment state
  const [splitCash, setSplitCash] = useState<number>(0);
  const [splitCard, setSplitCard] = useState<number>(0);

  // Sync tendered amount when grandTotal changes or modal opens
  useEffect(() => {
    if (isPaymentModalOpen) {
      setTenderedCash(grandTotal.toFixed(2));
      const half = Math.round((grandTotal / 2) * 100) / 100;
      setSplitCash(half);
      setSplitCard(Math.max(0, Math.round((grandTotal - half) * 100) / 100));
    }
  }, [isPaymentModalOpen, grandTotal]);

  if (!isPaymentModalOpen) return null;

  const numericTendered = parseFloat(tenderedCash) || 0;
  const changeDue = Math.max(0, Math.round((numericTendered - grandTotal) * 100) / 100);
  const balanceDue = Math.max(0, Math.round((grandTotal - numericTendered) * 100) / 100);

  // Handle Quick Tender buttons (Exact, 50, 100, 200, 500, 1000 Dhs)
  const handleQuickCash = (amount: number | "exact") => {
    if (amount === "exact") {
      setTenderedCash(grandTotal.toFixed(2));
    } else {
      setTenderedCash(amount.toString());
    }
  };

  const handleConfirm = () => {
    if (selectedMethod === "split") {
      const splits: PaymentSplit[] = [
        { method: "cash", amount: splitCash },
        { method: "card", amount: splitCard },
      ];
      completePayment("split", splitCash + splitCard, splits);
    } else if (selectedMethod === "cash") {
      completePayment("cash", numericTendered);
    } else {
      completePayment(selectedMethod, grandTotal);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in-50">
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="bg-white dark:bg-[#12141C] border border-slate-200 dark:border-[#262B3B] rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col font-sans text-slate-900 dark:text-slate-100 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="flex-shrink-0 px-5 py-3.5 border-b border-slate-200 dark:border-[#202534] flex items-center justify-between bg-slate-50 dark:bg-[#161924]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {t.checkout_title}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {lang === "ar"
                  ? "تسوية الحساب وإصدار الفاتورة الضريبية المعتمدة"
                  : "Instant UAE Tax Settlement & Receipt"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsPaymentModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Total Payable Banner */}
        <div className="flex-shrink-0 p-4 sm:p-5 bg-gradient-to-br from-amber-50 to-slate-100 dark:from-[#1E2230] dark:to-[#141722] border-b border-slate-200 dark:border-[#262B3B] text-center shadow-inner">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-[#D4AF37]">
            {t.amount_payable}
          </div>
          <div className="text-3xl sm:text-4xl font-black font-mono mt-1 tracking-tight text-slate-900 dark:text-white">
            {formatDhs(grandTotal)}
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto min-h-0 p-4 sm:p-5 space-y-4 text-xs">
          {/* Payment Method Selector Grid */}
          <div>
            <label className="font-bold text-slate-400 uppercase tracking-wider block mb-2">
              {t.select_payment_method}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedMethod("cash")}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-xs font-bold ${
                  selectedMethod === "cash"
                    ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15"
                    : "border-[#252A3C] bg-[#161924] text-slate-300 hover:border-slate-500"
                }`}
              >
                <Banknote className="w-5 h-5 text-emerald-400" />
                <span>{t.pay_cash}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("card")}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-xs font-bold ${
                  selectedMethod === "card"
                    ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15"
                    : "border-[#252A3C] bg-[#161924] text-slate-300 hover:border-slate-500"
                }`}
              >
                <CreditCard className="w-5 h-5 text-blue-400" />
                <span>{t.pay_card}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("apple_pay")}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-xs font-bold ${
                  selectedMethod === "apple_pay"
                    ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15"
                    : "border-[#252A3C] bg-[#161924] text-slate-300 hover:border-slate-500"
                }`}
              >
                <Smartphone className="w-5 h-5 text-purple-400" />
                <span>{t.pay_apple_pay}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("bank_transfer")}
                className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition text-xs font-bold ${
                  selectedMethod === "bank_transfer"
                    ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15"
                    : "border-[#252A3C] bg-[#161924] text-slate-300 hover:border-slate-500"
                }`}
              >
                <Building2 className="w-5 h-5 text-amber-400" />
                <span>{t.pay_bank_transfer}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("split")}
                className={`p-3 rounded-xl border col-span-2 sm:col-span-2 flex flex-col items-center gap-1.5 transition text-xs font-bold ${
                  selectedMethod === "split"
                    ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15"
                    : "border-[#252A3C] bg-[#161924] text-slate-300 hover:border-slate-500"
                }`}
              >
                <Split className="w-5 h-5 text-[#D4AF37]" />
                <span>{t.pay_split}</span>
              </button>
            </div>
          </div>

          {/* Cash Payment Section: Tendered & Balance / Change Calculation */}
          {selectedMethod === "cash" && (
            <div className="space-y-3 p-4 rounded-xl bg-[#161924] border border-[#252A3C]">
              <div className="flex items-center justify-between">
                <label className="font-bold text-slate-300">
                  {t.cash_tendered}
                </label>
                <span className="text-[11px] text-slate-400">
                  {lang === "ar" ? "المبلغ المستلم من العميل" : "Cash handed by guest"}
                </span>
              </div>

              {/* Quick Cash Chips */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleQuickCash("exact")}
                  className="px-2 py-1.5 rounded-lg border text-xs font-bold bg-[#1C202C] text-[#D4AF37] border-[#2C3346] hover:border-[#D4AF37] transition"
                >
                  {t.exact_cash}
                </button>
                {[50, 100, 200, 500, 1000].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleQuickCash(amt)}
                    className="px-2 py-1.5 rounded-lg border text-xs font-mono font-bold bg-[#1C202C] text-slate-200 border-[#2C3346] hover:border-[#D4AF37] transition"
                  >
                    {amt} Dhs
                  </button>
                ))}
              </div>

              {/* Custom Cash Tendered Input */}
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 start-3 font-mono font-bold text-[#D4AF37] text-sm">
                  Dhs
                </span>
                <input
                  type="number"
                  step="0.5"
                  value={tenderedCash}
                  onChange={(e) => setTenderedCash(e.target.value)}
                  dir="ltr"
                  className="w-full py-2 ps-14 pe-4 text-lg font-mono font-black rounded-lg border border-[#2B3042] bg-[#11131B] text-white focus:border-[#D4AF37] outline-none"
                />
              </div>

              {/* Change Due / Balance Calculation Display */}
              {changeDue > 0 || numericTendered >= grandTotal ? (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-emerald-300 uppercase tracking-wide">
                      {t.change_due}
                    </div>
                    <div className="text-xs text-emerald-400 mt-0.5 font-mono">
                      Paid: {formatDhs(numericTendered)} — Total: {formatDhs(grandTotal)}
                    </div>
                  </div>
                  <div className="text-xl font-black font-mono text-emerald-400">
                    {formatDhs(changeDue)}
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wide">
                      {t.balance_due}
                    </div>
                    <div className="text-xs text-amber-400 mt-0.5 font-mono">
                      Paid: {formatDhs(numericTendered)}
                    </div>
                  </div>
                  <div className="text-lg font-black font-mono text-amber-400">
                    {formatDhs(balanceDue)}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Split Payment Section */}
          {selectedMethod === "split" && (
            <div className="space-y-3 p-4 rounded-xl bg-[#161924] border border-[#252A3C]">
              <label className="font-bold text-slate-300 block">
                {t.split_payment_desc}
              </label>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Cash Portion (Dhs)</span>
                  <input
                    type="number"
                    value={splitCash}
                    onChange={(e) => setSplitCash(parseFloat(e.target.value) || 0)}
                    className="w-full py-1.5 px-3 rounded-lg bg-[#11131B] border border-[#2B3042] font-mono font-bold text-white"
                  />
                </div>

                <div>
                  <span className="text-[11px] text-slate-400 block mb-1">Card Portion (Dhs)</span>
                  <input
                    type="number"
                    value={splitCard}
                    onChange={(e) => setSplitCard(parseFloat(e.target.value) || 0)}
                    className="w-full py-1.5 px-3 rounded-lg bg-[#11131B] border border-[#2B3042] font-mono font-bold text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#202534] bg-[#161924] flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={() => setIsPaymentModalOpen(false)}
            className="px-4 py-2 rounded-xl bg-[#1A1D2A] text-slate-300 hover:text-white transition font-bold text-xs"
          >
            {t.cancel}
          </button>

          <button
            type="button"
            onClick={handleConfirm}
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:brightness-110 active:scale-95 text-black font-extrabold text-xs shadow-md shadow-[#D4AF37]/20 transition flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
            <span>{t.confirm_and_print}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
