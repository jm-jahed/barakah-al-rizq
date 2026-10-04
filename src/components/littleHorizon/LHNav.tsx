'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const LHNav: React.FC = () => {
  const { lang, language, setLanguage, isRtl, t } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].nav;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A120D]/95 backdrop-blur-md border-b border-emerald-900/40 shadow-xl transition-colors duration-300">
      {/* Top Tier Utility Bar */}
      <div className="border-b border-emerald-900/30 bg-[#060B08]/80 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-emerald-300/80">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-emerald-200/90 font-medium">
              ✨ {tr.badge}
            </span>
          </div>

          <div className="flex items-center gap-4 ms-auto">
            <a
              href={`tel:${LITTLE_HORIZON_DATA.phone}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-mono"
            >
              <span>📞 {tr.hotline}:</span>
              <span className="font-semibold text-emerald-100">{LITTLE_HORIZON_DATA.phone}</span>
            </a>

            {/* Language Toggle */}
            <div className="flex items-center bg-[#132219] rounded-full p-0.5 border border-emerald-800/40">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  language === 'en'
                    ? 'bg-amber-400 text-[#0A120D] shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  language === 'ar'
                    ? 'bg-amber-400 text-[#0A120D] shadow-sm'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                عربي
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/work/premium-nursery-preschool" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-[#0A120D] font-black text-base shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            LH
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-white font-sans flex items-center gap-1.5">
              <span>{isRtl ? 'ليتل' : 'LITTLE'}</span>
              <span className="text-amber-400">{isRtl ? 'هورايزون' : 'HORIZON'}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
              {tr.brandSub}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-emerald-200/90 tracking-wide">
          <a href="#programs" className="hover:text-amber-400 transition-colors">{tr.programs}</a>
          <a href="#curriculum" className="hover:text-amber-400 transition-colors">{tr.curriculum}</a>
          <a href="#finder" className="hover:text-amber-400 transition-colors">{tr.finder}</a>
          <a href="#timeline" className="hover:text-amber-400 transition-colors">{tr.timeline}</a>
          <a href="#why-lh" className="hover:text-amber-400 transition-colors">{tr.whyUs}</a>
          <a href="#campuses" className="hover:text-amber-400 transition-colors">{tr.campuses}</a>
          <a href="#leadership" className="hover:text-amber-400 transition-colors">{tr.leadership}</a>
          <a href="#insights" className="hover:text-amber-400 transition-colors">{tr.insights}</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">{tr.faq}</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={LITTLE_HORIZON_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-300 border border-emerald-700/50 px-3.5 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 hover:border-emerald-500 transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{tr.whatsapp}</span>
          </a>
          <a
            href="#tour"
            className="text-xs font-bold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5"
          >
            {tr.bookTour}
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-xl text-emerald-200 hover:text-white bg-[#132219] border border-emerald-800/40"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0D1811] border-b border-emerald-800/40 px-6 py-6 space-y-4 text-sm text-emerald-200">
          <a href="#programs" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.programs}</a>
          <a href="#curriculum" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.curriculum}</a>
          <a href="#finder" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.finder}</a>
          <a href="#timeline" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.timeline}</a>
          <a href="#why-lh" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.whyUs}</a>
          <a href="#campuses" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.campuses}</a>
          <a href="#leadership" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.leadership}</a>
          <a href="#insights" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.insights}</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.faq}</a>

          <div className="pt-4 flex flex-col gap-3 border-t border-emerald-900/60">
            <a
              href={LITTLE_HORIZON_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-semibold text-emerald-300 border border-emerald-700/50 py-3 rounded-xl bg-emerald-950/40"
            >
              {tr.whatsapp}
            </a>
            <a
              href="#tour"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-bold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 py-3 rounded-xl"
            >
              {tr.bookTour}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
