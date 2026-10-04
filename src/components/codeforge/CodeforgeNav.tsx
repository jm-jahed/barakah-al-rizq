'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const CodeforgeNav: React.FC = () => {
  const { language, toggleLanguage, isRtl } = useCodeforgeLanguage();
  const t = translations[language];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#05070D] border-b border-white/[0.06] text-xs text-slate-400 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-2 text-[11px] text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {language === 'ar' ? 'التقديم مفتوح لدفعة الخريف في دبي وأبوظبي' : 'Applications Open for Upcoming Cohort (Dubai & Abu Dhabi)'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CODEFORGE_DATA.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-[#38BDF8] transition-colors font-mono"
            >
              <svg className="w-3.5 h-3.5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t.nav.phone}</span>
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-semibold text-[#38BDF8] hover:bg-white/10 hover:border-[#38BDF8]/40 transition-all cursor-pointer"
              aria-label="Switch Language"
            >
              <svg className="w-3.5 h-3.5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>{t.nav.switchLang}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#070A12]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5'
            : 'bg-[#070A12]/80 backdrop-blur-sm border-b border-white/[0.05] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/work/coding-tech-academy" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#38BDF8] via-[#0284C7] to-[#0369A1] flex items-center justify-center text-white font-black font-mono text-sm shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              {'<CF/>'}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-wider text-white font-sans">
                  {language === 'ar' ? 'كود فورج' : 'CODEFORGE'}
                </span>
                <span className="text-[10px] font-bold text-[#38BDF8] tracking-widest uppercase px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 font-mono">
                  UAE
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono tracking-widest uppercase">
                {t.nav.brandTagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[12px] font-medium text-slate-300 tracking-wide">
            <a href="#programs" className="hover:text-[#38BDF8] transition-colors">{t.nav.programs}</a>
            <a href="#matcher" className="hover:text-[#38BDF8] transition-colors">{t.nav.matcher}</a>
            <a href="#journey" className="hover:text-[#38BDF8] transition-colors">{t.nav.journey}</a>
            <a href="#outcomes" className="hover:text-[#38BDF8] transition-colors">{t.nav.outcomes}</a>
            <a href="#why-codeforge" className="hover:text-[#38BDF8] transition-colors">{t.nav.whyCodeforge}</a>
            <a href="#faculty" className="hover:text-[#38BDF8] transition-colors">{t.nav.faculty}</a>
            <a href="#campuses" className="hover:text-[#38BDF8] transition-colors">{t.nav.campuses}</a>
            <a href="#insights" className="hover:text-[#38BDF8] transition-colors">{t.nav.insights}</a>
            <a href="#faq" className="hover:text-[#38BDF8] transition-colors">{t.nav.faq}</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CODEFORGE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.whatsappAdvisor}</span>
            </a>
            <a
              href="#apply"
              className="text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] hover:from-[#7DD3FC] hover:to-[#38BDF8] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-sky-500/20 hover:scale-[1.02] font-sans"
            >
              {t.nav.applyNow}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle Menu"
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
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#070A12]/98 border-b border-white/10 px-6 py-6 space-y-4 text-sm text-slate-200 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-white/10 text-xs">
            <a href="#programs" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.programs}</a>
            <a href="#matcher" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.matcher}</a>
            <a href="#journey" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.journey}</a>
            <a href="#outcomes" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.outcomes}</a>
            <a href="#why-codeforge" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.whyCodeforge}</a>
            <a href="#faculty" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.faculty}</a>
            <a href="#campuses" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.campuses}</a>
            <a href="#insights" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.insights}</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="hover:text-[#38BDF8] py-1">{t.nav.faq}</a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={CODEFORGE_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-center text-xs font-semibold text-emerald-400 border border-emerald-500/30 py-2.5 rounded-lg bg-emerald-500/10 font-mono"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.whatsappAdvisor}</span>
            </a>
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-bold text-[#070A12] bg-gradient-to-r from-[#38BDF8] to-[#0284C7] py-2.5 rounded-lg shadow-md"
            >
              {t.nav.applyNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
