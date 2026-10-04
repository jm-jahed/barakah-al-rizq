"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { CountryFlag } from "../common/CountryFlag";
import { useShopPos } from "@/context/ShopPosContext";
import { SupportedLanguage } from "@/types/shopPos";

export interface LanguageOption {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flagCode: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flagCode: "US",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flagCode: "AE",
    dir: "rtl",
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flagCode: "IN",
    dir: "ltr",
  },
  {
    code: "bn",
    name: "Bangla",
    nativeName: "বাংলা",
    flagCode: "BD",
    dir: "ltr",
  },
];

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  className = "",
}) => {
  const { lang, setLanguage } = useShopPos();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isRtl = lang === "ar";

  const currentOption =
    LANGUAGE_OPTIONS.find((opt) => opt.code === lang) || LANGUAGE_OPTIONS[0];

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

  const handleSelect = (code: SupportedLanguage) => {
    setLanguage(code);
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
        title={`Change Interface Language: Current ${currentOption.nativeName}`}
        aria-expanded={isOpen}
      >
        <CountryFlag country={currentOption.flagCode} size="sm" />
        <span className="font-bold text-slate-100">{currentOption.nativeName}</span>
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
          {/* Header */}
          <div className="px-3 py-1.5 mb-1 border-b border-[#1E2538] flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            <span>INTERFACE LANGUAGE</span>
            <span className="text-[#D4AF37] font-mono">{LANGUAGE_OPTIONS.length} LANGUAGES</span>
          </div>

          {/* Options */}
          <div className="max-h-72 overflow-y-auto py-0.5 space-y-0.5 no-scrollbar">
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = opt.code === currentOption.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-all rounded-xl ${
                    isSelected
                      ? "bg-[#1C2333] text-[#D4AF37] border-s-2 border-[#D4AF37]"
                      : "text-slate-300 hover:bg-[#161B28] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CountryFlag country={opt.flagCode} size="sm" />
                    <div className="flex flex-col text-start leading-tight">
                      <span className="font-bold text-slate-100">{opt.nativeName}</span>
                      <span className="text-[10px] text-slate-400">{opt.name}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase border border-[#262E44] bg-[#121622] text-slate-400">
                      {opt.dir}
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="px-3 py-1.5 mt-1 border-t border-[#1E2538] flex items-center justify-between text-[10px] text-slate-400">
            <span>Default: us English</span>
            <span className="text-emerald-400 font-semibold">RTL Ready</span>
          </div>
        </div>
      )}
    </div>
  );
};
