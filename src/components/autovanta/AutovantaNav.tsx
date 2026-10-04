'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Wrench, MessageCircle, Menu, X, ArrowUpRight, Globe, ArrowLeft, Phone } from 'lucide-react';
import { AUTOVANTA_BRAND } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

interface AutovantaNavProps {
  onOpenBookingModal: () => void;
}

export const AutovantaNav: React.FC<AutovantaNavProps> = ({ onOpenBookingModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRtl, t } = useAutovantaLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { label: t('navServices'), href: '#services' },
    { label: t('navCalculator'), href: '#quote-tool' },
    { label: t('navFleet'), href: '#fleet' },
    { label: t('navProcess'), href: '#workflow' },
    { label: t('navWhyUs'), href: '#whyus' },
    { label: t('navLocations'), href: '#locations' },
    { label: t('navFAQ'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0E0F12]/95 backdrop-blur-md border-b border-orange-500/20 py-2 shadow-2xl' 
        : 'bg-[#0E0F12]/85 backdrop-blur-sm py-3 border-b border-white/10'
    }`}>
      {/* Top Utility Banner */}
      <div className="bg-[#07080A] border-b border-white/5 py-1 text-center text-[11px] font-mono text-gray-300 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <span>{language === 'ar' ? 'القوز دبي • مصفح أبوظبي • صناعية الشارقة' : 'Al Quoz Dubai • Mussafah Abu Dhabi • Sharjah Industrial'}</span>
            <span>•</span>
            <a href={`tel:${AUTOVANTA_BRAND.phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-[#FF5722] transition-colors" dir="ltr">
              {AUTOVANTA_BRAND.phone}
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 hover:bg-orange-500/20 transition-all text-[11px] font-mono font-bold"
          >
            <Globe className="w-3 h-3 text-[#FF5722]" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/work/auto-service-repair" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5722] to-[#F4511E] flex items-center justify-center shadow-lg shadow-orange-950/40 group-hover:scale-105 transition-transform shrink-0">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                  AUTO<span className="text-[#FF5722]">VANTA</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  #38
                </span>
              </div>
              <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest -mt-0.5">
                {language === 'ar' ? 'مركز صيانة معتمد • دبي' : 'CERTIFIED GARAGE UAE'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-gray-200 hover:text-[#FF5722] transition-colors whitespace-nowrap font-mono uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={AUTOVANTA_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </a>

            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-orange-950/40 hover:scale-105 transition-all font-mono"
            >
              <span>{t('navBookService')}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 text-orange-300 text-xs font-mono font-bold"
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
        <div className="lg:hidden bg-[#141518] border-b border-orange-500/20 px-6 pt-4 pb-6 space-y-3 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-200 hover:text-[#FF5722] text-start font-mono uppercase"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-2.5 font-mono text-xs">
            <a
              href={AUTOVANTA_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('whatsappBooking')}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-[#FF5722] text-white font-bold text-center uppercase"
            >
              {t('navBookService')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};