'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const EduvantaNav: React.FC = () => {
  const { language, toggleLanguage, isRtl } = useEduvantaLanguage();
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
      {/* Top Bar for Executive Credibility */}
      <div className="bg-[#090C12] border-b border-white/[0.06] text-xs text-slate-400 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {language === 'ar' ? 'قبول الدفعات الجديدة مفتوح في دبي وأبوظبي' : 'Admissions Open for Next Cohorts (Dubai & Abu Dhabi)'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${EDUVANTA_DATA.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-[#E5C378] transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-[#E5C378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t.nav.phone}</span>
            </a>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/10 bg-white/5 text-[11px] font-semibold text-[#E5C378] hover:bg-white/10 hover:border-[#E5C378]/40 transition-all cursor-pointer"
              aria-label="Switch Language"
            >
              <svg className="w-3.5 h-3.5 text-[#E5C378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            ? 'bg-[#07090E]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5'
            : 'bg-[#07090E]/80 backdrop-blur-sm border-b border-white/[0.05] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/work/training-education-institute" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5C378] via-[#D4AF37] to-[#B38F28] flex items-center justify-center text-[#07090E] font-black font-sans text-base shadow-lg shadow-[#E5C378]/20 group-hover:scale-105 transition-transform duration-300">
              EV
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-wider text-white font-sans">
                  {language === 'ar' ? 'إدوفانتا' : 'EDUVANTA'}
                </span>
                <span className="text-[10px] font-bold text-[#E5C378] tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#E5C378]/10 border border-[#E5C378]/20">
                  UAE
                </span>
              </div>
              <span className="text-[9.5px] text-slate-400 font-mono tracking-widest uppercase">
                {t.nav.brandTagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[12px] font-medium text-slate-300 tracking-wide">
            <a href="#courses" className="hover:text-[#E5C378] transition-colors">{t.nav.courses}</a>
            <a href="#finder" className="hover:text-[#E5C378] transition-colors">{t.nav.finder}</a>
            <a href="#pathways" className="hover:text-[#E5C378] transition-colors">{t.nav.pathways}</a>
            <a href="#formats" className="hover:text-[#E5C378] transition-colors">{t.nav.formats}</a>
            <a href="#corporate" className="hover:text-[#E5C378] transition-colors">{t.nav.corporate}</a>
            <a href="#why-eduvanta" className="hover:text-[#E5C378] transition-colors">{t.nav.pillars}</a>
            <a href="#campuses" className="hover:text-[#E5C378] transition-colors">{t.nav.campuses}</a>
            <a href="#insights" className="hover:text-[#E5C378] transition-colors">{t.nav.insights}</a>
            <a href="#faq" className="hover:text-[#E5C378] transition-colors">{t.nav.faq}</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={EDUVANTA_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.whatsappAdvisor}</span>
            </a>
            <a
              href="#courses"
              className="text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] hover:from-[#F0D595] hover:to-[#E5C378] px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#E5C378]/20 hover:scale-[1.02]"
            >
              {t.nav.exploreCourses}
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
        <div className="xl:hidden bg-[#07090E]/98 border-b border-white/10 px-6 py-6 space-y-4 text-sm text-slate-200 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-white/10 text-xs">
            <a href="#courses" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.courses}</a>
            <a href="#finder" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.finder}</a>
            <a href="#pathways" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.pathways}</a>
            <a href="#formats" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.formats}</a>
            <a href="#corporate" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.corporate}</a>
            <a href="#why-eduvanta" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.pillars}</a>
            <a href="#campuses" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.campuses}</a>
            <a href="#insights" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.insights}</a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="hover:text-[#E5C378] py-1">{t.nav.faq}</a>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={EDUVANTA_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-center text-xs font-semibold text-emerald-400 border border-emerald-500/30 py-2.5 rounded-lg bg-emerald-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.whatsappAdvisor}</span>
            </a>
            <a
              href="#courses"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-bold text-[#07090E] bg-gradient-to-r from-[#E5C378] to-[#D4AF37] py-2.5 rounded-lg shadow-md"
            >
              {t.nav.exploreCourses}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
