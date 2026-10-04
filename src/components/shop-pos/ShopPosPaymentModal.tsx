"use client";

import React, { useState, useEffect } from "react";
import { CreditCard, DollarSign, Wallet, Smartphone, Building2, UserCheck, CheckCircle2, X, ShieldAlert } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onPaymentComplete: () => void;
}

export const ShopPosPaymentModal: React.FC<Props> = ({ isOpen, onClose, onPaymentComplete }) => {
  const {
    grandTotal,
    completeSaleTransaction,
    isProcessingPayment,
    selectedCustomer,
    formatCurrency,
    activeCurrency,
    lang,
  } = useShopPos();

  const [paymentMethod, setPaymentMethod] = useState<"cash" | "card" | "bank_transfer" | "mobile" | "due">("cash");
  const [tenderedAmount, setTenderedAmount] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      setTenderedAmount(grandTotal.toFixed(2));
      setErrorMessage("");
    }
  }, [isOpen, grandTotal]);

  if (!isOpen) return null;

  const numericTendered = parseFloat(tenderedAmount) || 0;
  const changeDue = Math.max(0, numericTendered - grandTotal);
  const remainingDue = Math.max(0, grandTotal - numericTendered);

  const quickCashAdd = (add: number) => {
    setTenderedAmount((prev) => ((parseFloat(prev) || 0) + add).toFixed(2));
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if ((paymentMethod === "due" || remainingDue > 0) && !selectedCustomer) {
      setErrorMessage(
        lang === "ar"
          ? "يجب تحديد عميل مسبقاً لإصدار فاتورة آبلة أو سداد جزئي على الحساب!"
          : "Customer profile must be selected prior to issuing on-account credit or partial due sales!"
      );
      return;
    }

    completeSaleTransaction(paymentMethod, numericTendered, remainingDue);
    onPaymentComplete();
  };

  const paymentTenders: { id: "cash" | "card" | "mobile" | "bank_transfer" | "due"; label: string; shortLabel: string; icon: any }[] = [
    { id: "cash", label: lang === "ar" ? "نقداً" : "Cash", shortLabel: lang === "ar" ? "نقداً" : "Cash", icon: DollarSign },
    { id: "card", label: lang === "ar" ? "بطاقة" : "Card", shortLabel: lang === "ar" ? "بطاقة" : "Card", icon: CreditCard },
    { id: "due", label: lang === "ar" ? "آجل" : "Due", shortLabel: lang === "ar" ? "آجل" : "Due", icon: UserCheck },
    { id: "mobile", label: lang === "ar" ? "جوال" : "Mobile", shortLabel: lang === "ar" ? "جوال" : "Mobile", icon: Smartphone },
    { id: "bank_transfer", label: lang === "ar" ? "تحويل" : "Bank", shortLabel: lang === "ar" ? "تحويل" : "Bank", icon: Building2 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#1C2333] bg-[#0B0D14] flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-100">
            {lang === "ar" ? "إتمام الدفع" : "Complete Payment"}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleCheckoutSubmit} className="p-5 space-y-4">
          {/* Total Amount Due Hero Box */}
          <div className="p-5 rounded-2xl bg-[#141A28] border border-[#242E46] text-center space-y-1">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
              {lang === "ar" ? "إجمالي المبلغ المستحق" : "TOTAL AMOUNT DUE"}
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">
              {formatCurrency(grandTotal)}
            </div>
          </div>

          {/* Error Alert Box */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Payment Method Selector */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === "ar" ? "وسيلة الدفع" : "PAYMENT METHOD"}
            </label>
            <div className="grid grid-cols-5 gap-2">
              {paymentTenders.map((tender) => {
                const Icon = tender.icon;
                const isSelected = paymentMethod === tender.id;
                return (
                  <button
                    key={tender.id}
                    type="button"
                    onClick={() => {
                      setPaymentMethod(tender.id);
                      if (tender.id === "due") {
                        setTenderedAmount("0.00");
                      } else {
                        setTenderedAmount(grandTotal.toFixed(2));
                      }
                    }}
                    className={`py-2.5 px-2 rounded-xl border flex items-center justify-center gap-1.5 transition text-xs font-bold ${
                      isSelected
                        ? "bg-[#1E273A] border-[#D4AF37] text-[#D4AF37] shadow-md shadow-[#D4AF37]/10"
                        : "bg-[#121724] border-[#1F273B] text-slate-300 hover:bg-[#161E2E]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{tender.shortLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Amount Tendered Section */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === "ar" ? "المبلغ المستلم" : "AMOUNT TENDERED"}
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                required
                value={tenderedAmount}
                onChange={(e) => setTenderedAmount(e.target.value)}
                className="w-full bg-[#121724] border border-[#1F273B] text-lg font-bold font-mono text-slate-100 rounded-xl ps-4 pe-14 py-3 outline-none focus:border-[#D4AF37] transition"
              />
              <span className="absolute end-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 font-mono pointer-events-none">
                {activeCurrency}
              </span>
            </div>

            {/* Quick Amount Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
              <button
                type="button"
                onClick={() => setTenderedAmount(grandTotal.toFixed(2))}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition ${
                  Math.abs(numericTendered - grandTotal) < 0.01
                    ? "bg-[#1E273A] border-[#D4AF37] text-[#D4AF37]"
                    : "bg-[#121724] border-[#1F273B] text-slate-300 hover:bg-[#182032]"
                }`}
              >
                {lang === "ar" ? "المبلغ بالضبط" : "Exact"}
              </button>
              {[10, 20, 50, 100, 200, 500].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => quickCashAdd(val)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#121724] hover:bg-[#182032] border border-[#1F273B] text-xs font-bold font-mono text-slate-300 transition"
                >
                  +{val}
                </button>
              ))}
            </div>
          </div>

          {/* Change Due Box */}
          <div className="p-3.5 rounded-xl bg-[#121724] border border-[#1F273B] flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300">
              {remainingDue > 0
                ? (lang === "ar" ? "المبلغ المتبقي:" : "Remaining Due:")
                : (lang === "ar" ? "المبلغ المتبقي للمستهلك:" : "Change Due:")}
            </span>
            <span className={`text-base font-bold font-mono ${remainingDue > 0 ? "text-amber-400" : "text-emerald-400"}`}>
              {formatCurrency(remainingDue > 0 ? remainingDue : changeDue)}
            </span>
          </div>

          {/* Customer Warning for On-Account Due */}
          {remainingDue > 0 && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
              <span>
                {lang === "ar" ? "سيتم تسجيل المبلغ المتبقي على حساب:" : "Due balance will be recorded to:"}
              </span>
              <span className="font-bold underline text-white ms-1">
                {selectedCustomer ? selectedCustomer.name : (lang === "ar" ? "لم يتم تحديد عميل" : "None (Select Customer)")}
              </span>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-200 transition"
            >
              {lang === "ar" ? "إلغاء" : "Cancel"}
            </button>
            <button
              type="submit"
              disabled={isProcessingPayment}
              className="px-6 py-3 rounded-xl bg-[#FFB800] hover:bg-[#E5A600] text-black text-xs font-bold shadow-lg shadow-[#FFB800]/20 flex items-center gap-2 transition active:scale-95 disabled:opacity-50"
            >
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
              <span>
                {isProcessingPayment
                  ? (lang === "ar" ? "جاري المعالجة..." : "Processing...")
                  : (lang === "ar" ? "تأكيد وإتمام الدفع" : "Confirm & Complete")}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
