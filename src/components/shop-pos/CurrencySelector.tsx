"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { CountryFlag } from "../common/CountryFlag";
import { useShopPos } from "@/context/ShopPosContext";
import { CurrencyCode, CurrencyConfig } from "@/types/shopPos";

interface CurrencySelectorProps {
  className?: string;
  showNameOnTrigger?: boolean;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  className = "",
  showNameOnTrigger = false,
}) => {
  const { activeCurrency, setCurrency, lang, currencies } = useShopPos();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === "ar";

  const currentConfig: CurrencyConfig =
    currencies.find((c) => c.code === activeCurrency) || currencies[0] || {
      code: "AED",
      name: "UAE Dirham",
      arabicName: "درهم إماراتي",
      symbol: "Dhs",
      rateToAED: 1,
      decimals: 2,
      flagCode: "AE",
    };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: CurrencyCode) => {
    setCurrency(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block text-left select-none ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-sm ${
          isOpen
            ? "border-[#D4AF37] bg-[#161B28] text-white ring-1 ring-[#D4AF37]/50"
            : "border-[#202738] bg-[#121622] hover:bg-[#181E2E] text-slate-200 hover:border-[#D4AF37]/40"
        }`}
        title={`Change Currency: Current ${currentConfig.code} (${currentConfig.name})`}
        aria-expanded={isOpen}
      >
        <CountryFlag country={currentConfig.flagCode || currentConfig.code} size="sm" />
        <span className="font-mono font-extrabold text-[11px] text-[#D4AF37]">
          {currentConfig.code}
        </span>
        {showNameOnTrigger && (
          <span className="hidden lg:inline text-slate-300 font-medium text-[11px] truncate max-w-[90px]">
            {currentConfig.name}
          </span>
        )}
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#D4AF37]" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={`absolute z-50 mt-1.5 w-60 sm:w-64 rounded-2xl bg-[#0F131D] border border-[#262E44] shadow-2xl shadow-black/80 py-1.5 backdrop-blur-md animate-in fade-in-80 zoom-in-95 ${
            isRtl ? "left-0" : "right-0"
          }`}
        >
          {/* Header info */}
          <div className="px-3 py-1.5 mb-1 border-b border-[#1E2538] flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>SUPPORTED CURRENCIES</span>
            <span className="text-[#D4AF37] font-mono">{currencies.length} AVAILABLE</span>
          </div>

          <div className="max-h-72 overflow-y-auto py-0.5 space-y-0.5 no-scrollbar">
            {currencies.map((c) => {
              const isSelected = c.code === currentConfig.code;
              return (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => handleSelect(c.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-all rounded-xl ${
                    isSelected
                      ? "bg-[#1C2333] text-[#D4AF37] border-s-2 border-[#D4AF37]"
                      : "text-slate-300 hover:bg-[#161B28] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CountryFlag country={c.flagCode || c.code} size="sm" />
                    <span className="font-mono font-bold text-slate-200">{c.code}</span>
                    <span className="text-slate-500 font-mono">—</span>
                    <span className="text-slate-300 text-[11px] truncate max-w-[100px]">
                      {isRtl ? c.arabicName || c.name : c.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-[#262E44] bg-[#121622] text-slate-400">
                      {c.symbol}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
