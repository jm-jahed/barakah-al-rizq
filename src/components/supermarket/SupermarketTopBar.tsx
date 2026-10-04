'use client';

import React from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { useSupermarketTheme } from '../../context/SupermarketThemeContext';
import { UAE_ZONES } from '../../data/supermarketData';
import { MapPin, PhoneCall, Zap, Sun, Moon } from 'lucide-react';

export default function SupermarketTopBar() {
  const { lang, setLang, isRtl, t } = useSupermarketLanguage();
  const { selectedZone, setSelectedZone } = useSupermarketCart();
  const { theme, toggleTheme, isDark } = useSupermarketTheme();

  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/60 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Express Delivery Tag & Zone Selector */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 bg-emerald-900/80 text-emerald-200 px-2.5 py-0.5 rounded-full font-medium tracking-wide">
            <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>{t('expressTag')}</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-200/90">
            <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="hidden sm:inline text-emerald-300/80">{t('deliveringTo')}</span>
            <select
              value={selectedZone}
              aria-label="Select Emirates delivery zone"
              onChange={(e) => setSelectedZone(e.target.value)}
              className="bg-emerald-900/50 hover:bg-emerald-900 text-white font-semibold rounded px-2 py-0.5 border border-emerald-700/50 focus:outline-none focus:ring-1 focus:ring-emerald-400 cursor-pointer text-xs"
            >
              {UAE_ZONES.map((zone) => (
                <option key={zone.id} value={zone.id} className="bg-emerald-950 text-white">
                  {isRtl ? zone.nameAr : zone.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Phone, Theme Toggle & Language Switcher */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-emerald-200 hover:text-white transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>+971 4 800 MIRQAB</span>
          </a>

          {/* Light / Dark Mode Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="flex items-center gap-1 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 hover:text-white px-2 py-1 rounded-md border border-emerald-700/60 transition-colors text-[11px] font-semibold"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">{isRtl ? 'نهاري' : 'Light'}</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-emerald-300" />
                <span className="hidden sm:inline">{isRtl ? 'داكن' : 'Dark'}</span>
              </>
            )}
          </button>

          {/* Real Bilingual Language Switcher */}
          <div className="flex items-center bg-emerald-900/80 rounded-md p-0.5 border border-emerald-700/60">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                lang === 'en'
                  ? 'bg-emerald-500 text-emerald-950 shadow-sm'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              EN
            </button>
            <span className="text-emerald-700 mx-0.5">|</span>
            <button
              onClick={() => setLang('ar')}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all font-arabic ${
                lang === 'ar'
                  ? 'bg-emerald-500 text-emerald-950 shadow-sm'
                  : 'text-emerald-300 hover:text-white'
              }`}
            >
              العربية
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
