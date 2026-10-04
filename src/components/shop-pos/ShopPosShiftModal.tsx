"use client";

import React, { useState } from "react";
import { Clock, DollarSign, X, Check, ArrowDownLeft, ArrowUpRight, Lock, Unlock, AlertTriangle } from "lucide-react";
import { useShopPos } from "@/context/ShopPosContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ShopPosShiftModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { currentShift, openShift, closeShift, recordShiftCashInOut, formatPrice, currentStaff, lang } = useShopPos();

  const [openingFloat, setOpeningFloat] = useState<string>("500");
  const [actualCashInput, setActualCashInput] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  // Cash In / Out Form
  const [cashFlowType, setCashFlowType] = useState<"in" | "out">("in");
  const [cashFlowAmount, setCashFlowAmount] = useState<string>("");
  const [cashFlowNotes, setCashFlowNotes] = useState<string>("");

  if (!isOpen) return null;

  const handleOpenShift = (e: React.FormEvent) => {
    e.preventDefault();
    const floatVal = parseFloat(openingFloat);
    if (!isNaN(floatVal) && floatVal >= 0) {
      openShift(floatVal);
    }
  };

  const handleCloseShift = (e: React.FormEvent) => {
    e.preventDefault();
    const actualVal = parseFloat(actualCashInput);
    if (!isNaN(actualVal) && actualVal >= 0) {
      closeShift(actualVal, notes);
      onClose();
    }
  };

  const handleRecordCashFlow = (e: React.FormEvent) => {
    e.preventDefault();
    const amt = parseFloat(cashFlowAmount);
    if (!isNaN(amt) && amt > 0 && cashFlowNotes) {
      recordShiftCashInOut(cashFlowType, amt, cashFlowNotes);
      setCashFlowAmount("");
      setCashFlowNotes("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-xl bg-[#0E121B] border border-[#222A3E] rounded-2xl shadow-2xl p-6 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1C2333]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#182030] text-[#D4AF37]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">
                {lang === "ar" ? "وردية الكاشير والصندوق" : "Cashier Register Shift Management"}
              </h3>
              <p className="text-xs text-slate-400">
                Cashier: <span className="text-slate-200 font-semibold">{currentStaff.name}</span>
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-5">
          {!currentShift || currentShift.status === "closed" ? (
            /* Open Shift Screen */
            <form onSubmit={handleOpenShift} className="space-y-4">
              <div className="p-4 rounded-xl bg-[#141A26] border border-[#202738] text-center">
                <Lock className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
                <h4 className="text-sm font-bold text-slate-100">
                  {lang === "ar" ? "الوردية الحالية مغلقة" : "Shift Currently Closed"}
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === "ar"
                    ? "أدخل مبلغ العهدة النقدية للبدء في تسجيل مبيعات الوردية الجديدة"
                    : "Specify opening cash drawer float to start new cashier session"}
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === "ar" ? "العهدة النقدية الافتتاحية (AED)" : "Opening Cash Float (AED)"}
                </label>
                <input
                  type="number"
                  step="0.5"
                  required
                  value={openingFloat}
                  onChange={(e) => setOpeningFloat(e.target.value)}
                  placeholder="500.00"
                  className="w-full bg-[#141A26] border border-[#202738] text-sm text-slate-100 font-mono font-bold rounded-xl px-3.5 py-2.5 outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-black text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>{lang === "ar" ? "فتح الوردية والبدء" : "Open Shift & Start Sales"}</span>
              </button>
            </form>
          ) : (
            /* Active Open Shift Dashboard */
            <div className="space-y-5">
              {/* Shift Summary Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Opening Float</div>
                  <div className="text-base font-bold text-slate-200 font-mono">{formatPrice(currentShift.openingCash)}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Cash Sales</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">{formatPrice(currentShift.totalSalesCash)}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Card Sales</div>
                  <div className="text-base font-bold text-cyan-400 font-mono">{formatPrice(currentShift.totalSalesCard)}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Cash In / Out</div>
                  <div className="text-base font-bold text-amber-400 font-mono">
                    +{currentShift.cashIn} / -{currentShift.cashOut}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#141A26] border border-[#202738]">
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Refunds</div>
                  <div className="text-base font-bold text-rose-400 font-mono">-{formatPrice(currentShift.totalRefunds)}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1C2436] border border-[#D4AF37]/40 col-span-2 sm:col-span-1">
                  <div className="text-[10px] text-[#D4AF37] uppercase font-bold">Expected Drawer Cash</div>
                  <div className="text-base font-black text-[#D4AF37] font-mono">{formatPrice(currentShift.expectedCash)}</div>
                </div>
              </div>

              {/* Record Cash In / Out Section */}
              <form onSubmit={handleRecordCashFlow} className="p-3.5 rounded-xl bg-[#121622] border border-[#1C2333] space-y-2.5">
                <div className="text-xs font-bold text-slate-200 flex items-center justify-between">
                  <span>{lang === "ar" ? "إيداع / سحب من الصندوق" : "Record Cash In / Paid Out"}</span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setCashFlowType("in")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${cashFlowType === "in" ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40" : "bg-slate-800 text-slate-400"}`}
                    >
                      + Cash In
                    </button>
                    <button
                      type="button"
                      onClick={() => setCashFlowType("out")}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${cashFlowType === "out" ? "bg-rose-500/20 text-rose-400 border border-rose-500/40" : "bg-slate-800 text-slate-400"}`}
                    >
                      - Cash Out
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Amount"
                    value={cashFlowAmount}
                    onChange={(e) => setCashFlowAmount(e.target.value)}
                    className="bg-[#182030] border border-[#242F46] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 font-mono outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="text"
                    placeholder="Reason / Notes"
                    value={cashFlowNotes}
                    onChange={(e) => setCashFlowNotes(e.target.value)}
                    className="bg-[#182030] border border-[#242F46] rounded-lg px-2.5 py-1.5 text-xs text-slate-100 outline-none focus:border-[#D4AF37]"
                  />
                  <button
                    type="submit"
                    className="py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition"
                  >
                    Submit Entry
                  </button>
                </div>
              </form>

              {/* Close Shift Form */}
              <form onSubmit={handleCloseShift} className="pt-3 border-t border-[#1C2333] space-y-3">
                <div className="text-xs font-bold text-slate-100">
                  {lang === "ar" ? "إغلاق الوردية وجرد النقدية" : "Close Shift & Reconciliation"}
                </div>
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">
                    {lang === "ar" ? "المبلغ النقدي الفعلي بالدرهم" : "Actual Cash Counted in Drawer (AED)"}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={actualCashInput}
                    onChange={(e) => setActualCashInput(e.target.value)}
                    placeholder={`Expected: ${currentShift.expectedCash}`}
                    className="w-full bg-[#141A26] border border-[#202738] text-sm text-slate-100 font-mono font-bold rounded-xl px-3.5 py-2.5 outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {actualCashInput !== "" && (
                  <div className="p-2.5 rounded-xl bg-[#141A26] border border-[#202738] flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Calculated Variance:</span>
                    <span className={`font-bold ${parseFloat(actualCashInput) - currentShift.expectedCash < 0 ? "text-rose-400" : "text-emerald-400"}`}>
                      {formatPrice(parseFloat(actualCashInput) - currentShift.expectedCash)}
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition shadow-lg flex items-center justify-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>{lang === "ar" ? "إغلاق الوردية وحفظ الجرد" : "Close Shift & Save Summary"}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
