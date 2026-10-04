"use client";

import React, { useState } from "react";
import { Lock, X, Check, KeyRound, ShieldCheck, User } from "lucide-react";
import { useRestaurantPos } from "../../context/RestaurantPosContext";
import { StaffMember } from "../../types/restaurantPos";

export const PinAuthModal: React.FC = () => {
  const { isPinModalOpen, setIsPinModalOpen, staff, currentStaff, switchStaff, t, lang } =
    useRestaurantPos();

  const [selectedStaffId, setSelectedStaffId] = useState<string>(currentStaff.id);
  const [enteredPin, setEnteredPin] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  if (!isPinModalOpen) return null;

  const handleKeyPress = (digit: string) => {
    if (enteredPin.length < 4) {
      const next = enteredPin + digit;
      setEnteredPin(next);
      setErrorMsg("");
      if (next.length === 4) {
        verify(next);
      }
    }
  };

  const handleBackspace = () => {
    setEnteredPin((prev) => prev.slice(0, -1));
    setErrorMsg("");
  };

  const handleClear = () => {
    setEnteredPin("");
    setErrorMsg("");
  };

  const verify = (pinToTest: string) => {
    const success = switchStaff(selectedStaffId, pinToTest);
    if (!success) {
      setErrorMsg(lang === "ar" ? "رمز PIN غير صحيح. يرجى المحاولة ثانية." : "Incorrect PIN. Please try again.");
      setEnteredPin("");
    }
  };

  const targetMember = staff.find((s) => s.id === selectedStaffId) || currentStaff;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in-50">
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="bg-[#12141C] border border-[#262B3B] rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl flex flex-col text-slate-100"
      >
        {/* Header */}
        <div className="p-4 border-b border-[#222736] flex items-center justify-between bg-[#161924]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                {t.switch_user}
              </h3>
              <p className="text-[11px] text-slate-400">
                {lang === "ar" ? "تسجيل الدخول السريع برمز PIN" : "Fast Terminal Authentication"}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setIsPinModalOpen(false);
              setEnteredPin("");
              setErrorMsg("");
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Staff Selector Pills */}
        <div className="p-4 pb-2 border-b border-[#1E2230]">
          <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            {lang === "ar" ? "اختر الموظف" : "Select Staff Member"}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {staff.map((s) => {
              const isSelected = s.id === selectedStaffId;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelectedStaffId(s.id);
                    setEnteredPin("");
                    setErrorMsg("");
                  }}
                  className={`p-2 rounded-xl text-left border transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-sm shadow-[#D4AF37]/20"
                      : "bg-[#181B26] border-[#262B3B] text-slate-300 hover:border-slate-600"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                      isSelected ? "bg-[#D4AF37] text-black" : "bg-[#222736] text-slate-300"
                    }`}
                  >
                    {s.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold truncate">
                      {lang === "ar" ? s.arabicName : s.name}
                    </div>
                    <div className="text-[10px] text-[#D4AF37] uppercase font-semibold">
                      {s.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PIN Input Display */}
        <div className="p-5 flex flex-col items-center">
          <div className="text-xs text-slate-400 mb-2">
            {lang === "ar" ? `أدخل الرمز الخاص بـ ${targetMember.arabicName}` : `Enter PIN for ${targetMember.name}`}
          </div>

          <div className="flex items-center gap-3 my-2">
            {[0, 1, 2, 3].map((index) => {
              const filled = enteredPin.length > index;
              return (
                <div
                  key={index}
                  className={`w-3.5 h-3.5 rounded-full border transition-all duration-150 ${
                    filled
                      ? "bg-[#D4AF37] border-[#D4AF37] scale-110 shadow-sm shadow-[#D4AF37]"
                      : "border-slate-600 bg-[#1C202C]"
                  }`}
                />
              );
            })}
          </div>

          {errorMsg && (
            <p className="text-xs text-rose-400 mt-2 font-medium animate-in fade-in">
              {errorMsg}
            </p>
          )}

          {/* Keypad */}
          <div className="grid grid-cols-3 gap-2 w-full mt-4 max-w-[240px]">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleKeyPress(num)}
                className="h-12 rounded-xl bg-[#1A1D2A] hover:bg-[#252A3B] active:scale-95 border border-[#2B3042] text-lg font-bold text-white transition flex items-center justify-center select-none"
              >
                {num}
              </button>
            ))}
            <button
              type="button"
              onClick={handleClear}
              className="h-12 rounded-xl bg-[#1A1D2A] hover:bg-rose-950/40 hover:text-rose-400 active:scale-95 border border-[#2B3042] text-xs font-bold text-slate-400 transition flex items-center justify-center select-none"
            >
              C
            </button>
            <button
              type="button"
              onClick={() => handleKeyPress("0")}
              className="h-12 rounded-xl bg-[#1A1D2A] hover:bg-[#252A3B] active:scale-95 border border-[#2B3042] text-lg font-bold text-white transition flex items-center justify-center select-none"
            >
              0
            </button>
            <button
              type="button"
              onClick={handleBackspace}
              className="h-12 rounded-xl bg-[#1A1D2A] hover:bg-[#252A3B] active:scale-95 border border-[#2B3042] text-xs font-bold text-slate-400 transition flex items-center justify-center select-none"
            >
              ⌫
            </button>
          </div>

          {/* Hint helper */}
          <div className="mt-4 pt-3 border-t border-[#1F2433] w-full text-center text-[10px] text-slate-500 font-mono">
            Demo PINs: 1234 • 9999 • Any 4-digit PIN
          </div>
        </div>
      </div>
    </div>
  );
};
