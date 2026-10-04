'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home, MessageCircle, Menu, X, Globe, ArrowUpRight, ArrowLeft, Phone } from 'lucide-react';
import { STAYORA_BRAND } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

interface StayoraNavProps {
  onOpenEstimateModal: () => void;
}

export const StayoraNav: React.FC<StayoraNavProps> = ({ onOpenEstimateModal }) => {
  const { language, toggleLanguage, setLanguage, isRtl, t } = useStayoraLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('navServices'), href: '#services' },
    { label: t('navEstimator'), href: '#calculator' },
    { label: t('navProperties'), href: '#properties' },
    { label: t('navCaseStudies'), href: '#casestudy' },
    { label: t('navWhyUs'), href: '#whyus' },
    { label: t('navLocations'), href: '#locations' },
    { label: t('navFAQ'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0E2C2E]/95 backdrop-blur-md border-b border-amber-500/20 py-2 shadow-2xl' 
        : 'bg-[#0E2C2E]/80 backdrop-blur-sm py-3 border-b border-white/10'
    }`}>
      {/* Top Utility Banner */}
      <div className="bg-[#081E20] border-b border-white/5 py-1 text-center text-[11px] font-mono text-stone-300 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-stone-400">
            <span>{isRtl ? 'دبي مارينا • نخلة جميرا • داون تاون' : 'Dubai Marina • Palm Jumeirah • Downtown'}</span>
            <span>•</span>
            <a href={`tel:${STAYORA_BRAND.phone.replace(/\s+/g, '')}`} className="text-stone-300 hover:text-[#E07A5F] transition-colors" dir="ltr">
              {STAYORA_BRAND.phone}
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-all text-[11px] font-mono font-bold"
          >
            <Globe className="w-3 h-3 text-[#E07A5F]" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/work/holiday-home-management" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C85A32] to-[#E07A5F] flex items-center justify-center shadow-lg shadow-amber-950/40 group-hover:scale-105 transition-transform shrink-0">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                  {isRtl ? 'ستايورا' : 'STAY'}<span className="text-[#E07A5F]">{isRtl ? '' : 'ORA'}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  #37
                </span>
              </div>
              <span className="block text-[9px] font-mono text-amber-200/70 uppercase tracking-widest -mt-0.5">
                {isRtl ? 'إدارة بيوت العطلات • دبي' : 'HOLIDAY HOMES UAE'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-gray-200 hover:text-[#E07A5F] transition-colors whitespace-nowrap font-mono uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={STAYORA_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isRtl ? 'واتساب' : 'WhatsApp'}</span>
            </a>

            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#E07A5F] text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-[#C85A32]/40 hover:scale-105 transition-all font-mono"
            >
              <span>{t('estimateEarningsBtn')}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 text-amber-300 text-xs font-mono font-bold"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A2224] border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-3 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-200 hover:text-[#E07A5F] text-start font-mono uppercase"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-2.5 font-mono text-xs">
            <a
              href={STAYORA_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isRtl ? 'استشارة واتساب (+٩٧١ ٥٢)' : 'WhatsApp Host Manager (+971 52)'}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimateModal();
              }}
              className="w-full py-3 rounded-xl bg-[#C85A32] text-white font-bold text-center uppercase"
            >
              {t('estimateEarningsBtn')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};