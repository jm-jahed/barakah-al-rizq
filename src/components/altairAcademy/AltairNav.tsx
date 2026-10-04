'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AltairNav: React.FC = () => {
  const { lang, language, setLanguage, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].nav;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070D1E]/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl transition-colors duration-300">
      {/* Top Tier Utility Bar */}
      <div className="border-b border-amber-500/15 bg-[#040813]/85 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-amber-200/90 font-medium">
              ✨ {tr.badge}
            </span>
          </div>

          <div className="flex items-center gap-4 ms-auto">
            <a
              href={`tel:${ALTAIR_ACADEMY_DATA.phone}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-mono"
            >
              <span>📞 {tr.hotline}:</span>
              <span className="font-semibold text-white">{ALTAIR_ACADEMY_DATA.phone}</span>
            </a>

            {/* Language Toggle */}
            <div className="flex items-center bg-[#0D1B3E] rounded-full p-0.5 border border-amber-500/30">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  language === 'en'
                    ? 'bg-amber-400 text-[#070D1E] shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  language === 'ar'
                    ? 'bg-amber-400 text-[#070D1E] shadow-sm'
                    : 'text-slate-300 hover:text-white'
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
        <Link href="/work/private-school" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center text-[#070D1E] font-black font-serif text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            AA
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl sm:text-2xl tracking-tight text-white font-serif flex items-center gap-1.5">
              <span>{isRtl ? 'أكاديمية' : 'ALTAIR'}</span>
              <span className="text-amber-400">{isRtl ? 'ألتير' : 'ACADEMY'}</span>
            </span>
            <span className="text-[10px] text-amber-200/80 font-mono tracking-widest uppercase">
              {tr.brandSub}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-200 tracking-wide">
          <a href="#stages" className="hover:text-amber-400 transition-colors">{tr.stages}</a>
          <a href="#academics" className="hover:text-amber-400 transition-colors">{tr.curriculum}</a>
          <a href="#tuition" className="hover:text-amber-400 transition-colors">{tr.calculator}</a>
          <a href="#journey" className="hover:text-amber-400 transition-colors">{tr.journey}</a>
          <a href="#campus-life" className="hover:text-amber-400 transition-colors">{tr.campusLife}</a>
          <a href="#why-altair" className="hover:text-amber-400 transition-colors">{tr.whyUs}</a>
          <a href="#leadership" className="hover:text-amber-400 transition-colors">{tr.leadership}</a>
          <a href="#campuses" className="hover:text-amber-400 transition-colors">{tr.campuses}</a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">{tr.faq}</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={ALTAIR_ACADEMY_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-emerald-400 border border-emerald-500/30 px-3.5 py-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 transition-all shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{tr.whatsapp}</span>
          </a>
          <a
            href="#tour"
            className="text-xs font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 px-4 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 transform hover:-translate-y-0.5"
          >
            {tr.bookTour}
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-xl text-slate-200 hover:text-white bg-[#0D1B3E] border border-amber-500/20"
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
        <div className="xl:hidden bg-[#070D1E] border-b border-amber-500/20 px-6 py-6 space-y-4 text-sm text-slate-200">
          <a href="#stages" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.stages}</a>
          <a href="#academics" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.curriculum}</a>
          <a href="#tuition" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.calculator}</a>
          <a href="#journey" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.journey}</a>
          <a href="#campus-life" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.campusLife}</a>
          <a href="#why-altair" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.whyUs}</a>
          <a href="#leadership" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.leadership}</a>
          <a href="#campuses" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.campuses}</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-amber-400">{tr.faq}</a>

          <div className="pt-4 flex flex-col gap-3 border-t border-slate-800">
            <a
              href={ALTAIR_ACADEMY_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-semibold text-emerald-400 border border-emerald-500/30 py-3 rounded-xl bg-emerald-950/40"
            >
              {tr.whatsapp}
            </a>
            <a
              href="#tour"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-bold text-[#070D1E] bg-gradient-to-r from-amber-400 to-amber-300 py-3 rounded-xl"
            >
              {tr.bookTour}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
