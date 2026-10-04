'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import { FRAMEHAUS_DATA } from '@/data/framehausData';
import {
  Phone,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Globe,
  Menu,
  X,
  Camera,
  Layers,
  Sparkles,
  MapPin,
  Clock,
} from 'lucide-react';

export const FramehausNav: React.FC = () => {
  const { language, toggleLanguage, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#070709]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl">
      {/* Tier 1: Top Bar */}
      <div className="bg-black/60 border-b border-zinc-800/50 text-[11px] font-mono text-zinc-400 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="hidden md:flex items-center gap-2 text-zinc-300">
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{t.topbar.locationDubai}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${FRAMEHAUS_DATA.phone.replace(/\s+/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors text-zinc-300"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span dir="ltr">{t.topbar.phone}</span>
            </a>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <a
              href={FRAMEHAUS_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.topbar.whatsapp}</span>
            </a>
            <span className="text-zinc-700">•</span>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-amber-400 border border-amber-500/30 transition-colors font-bold text-[11px]"
              aria-label="Toggle language"
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Brand & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/work/photography-creative-studio" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 border border-amber-500/60 bg-gradient-to-br from-amber-500/20 to-zinc-900 group-hover:border-amber-400 transition-colors flex items-center justify-center text-amber-400 font-mono text-sm font-black tracking-tighter rounded">
            FH
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl sm:text-2xl tracking-widest text-white font-serif uppercase">
                FRAME<span className="text-amber-500">HAUS</span>
              </span>
              <span className="text-[10px] bg-amber-500/10 border border-amber-500/30 text-amber-400 px-1.5 py-0.5 rounded font-mono font-bold">
                PRO 2026
              </span>
            </div>
            <span className="text-[9px] text-zinc-400 font-mono tracking-widest uppercase hidden sm:inline">
              {t.nav.brandSub}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs font-mono text-zinc-300 uppercase tracking-wider">
          <a href="#work" className="hover:text-amber-400 transition-colors">
            {t.nav.work}
          </a>
          <a href="#services" className="hover:text-amber-400 transition-colors">
            {t.nav.services}
          </a>
          <a href="#estimator" className="hover:text-amber-400 text-amber-400/90 transition-colors font-semibold">
            {t.nav.estimator}
          </a>
          <a href="#process" className="hover:text-amber-400 transition-colors">
            {t.nav.process}
          </a>
          <a href="#facilities" className="hover:text-amber-400 transition-colors">
            {t.nav.facilities}
          </a>
          <a href="#case-study" className="hover:text-amber-400 transition-colors">
            {t.nav.caseStudy}
          </a>
          <a href="#why-fh" className="hover:text-amber-400 transition-colors">
            {t.nav.whyUs}
          </a>
          <a href="#studios" className="hover:text-amber-400 transition-colors">
            {t.nav.locations}
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            {t.nav.faq}
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#estimator"
            className="text-xs font-mono text-zinc-300 hover:text-white border border-zinc-700 px-3.5 py-2.5 rounded bg-zinc-900/60 hover:bg-zinc-800 transition-colors uppercase tracking-wider"
          >
            {t.nav.estimator}
          </a>
          <a
            href="#inquiry"
            className="text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-4 py-2.5 rounded transition-all shadow-lg shadow-amber-500/20 uppercase font-mono tracking-wider flex items-center gap-1.5"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{t.nav.bookStudio}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded text-zinc-300 hover:text-white hover:bg-white/5 border border-zinc-800"
          aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
        >
          {mobileOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0A0A0C] border-b border-zinc-800 px-6 py-6 space-y-4 text-xs font-mono text-zinc-300 animate-fadeIn">
          <a href="#work" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.work}
          </a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.services}
          </a>
          <a href="#estimator" onClick={() => setMobileOpen(false)} className="block py-2 text-amber-400 font-bold border-b border-zinc-900">
            {t.nav.estimator}
          </a>
          <a href="#process" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.process}
          </a>
          <a href="#facilities" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.facilities}
          </a>
          <a href="#case-study" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.caseStudy}
          </a>
          <a href="#why-fh" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.whyUs}
          </a>
          <a href="#studios" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.locations}
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block py-2 hover:text-amber-400 border-b border-zinc-900">
            {t.nav.faq}
          </a>

          <div className="pt-4 flex flex-col gap-3 border-t border-zinc-800">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileOpen(false);
              }}
              className="flex items-center justify-center gap-2 text-center text-xs font-mono text-amber-400 border border-amber-500/30 py-2.5 rounded bg-amber-500/10"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}</span>
            </button>
            <a
              href={FRAMEHAUS_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-mono text-emerald-400 border border-emerald-500/30 py-2.5 rounded bg-emerald-500/10"
            >
              {t.topbar.whatsapp}
            </a>
            <a
              href="#inquiry"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 py-3 rounded font-mono uppercase tracking-wider"
            >
              {t.nav.bookStudio}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
