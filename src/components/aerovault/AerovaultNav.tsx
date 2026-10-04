'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plane, MessageCircle, Menu, X, ArrowUpRight, Globe, ArrowLeft, Phone } from 'lucide-react';
import { AEROVAULT_BRAND } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

interface AerovaultNavProps {
  onOpenQuoteModal: (jetId?: string) => void;
}

export const AerovaultNav: React.FC<AerovaultNavProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRtl, t } = useAerovaultLanguage();

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
    { label: t('navFleet'), href: '#fleet' },
    { label: t('navCalculator'), href: '#quote-tool' },
    { label: t('navEmptyLegs'), href: '#emptylegs' },
    { label: t('navJetCard'), href: '#jetcard' },
    { label: t('navProcess'), href: '#workflow' },
    { label: t('navWhyUs'), href: '#whyus' },
    { label: t('navDesks'), href: '#desks' },
    { label: t('navFAQ'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#07090E]/95 backdrop-blur-md border-b border-[#E5C378]/20 py-2.5 shadow-2xl' 
        : 'bg-[#07090E]/85 backdrop-blur-sm py-3.5 border-b border-white/10'
    }`}>
      {/* Top Utility Banner */}
      <div className="bg-[#040609] border-b border-white/5 py-1 text-center text-[11px] font-mono text-gray-300 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <span>{language === 'ar' ? 'صالات كبار الشخصيات: مطار آل مكتوم DWC • مطار زايد AUH' : 'VIP FBO Hubs: Dubai DWC • Abu Dhabi AUH'}</span>
            <span>•</span>
            <a href={`tel:${AEROVAULT_BRAND.phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-[#E5C378] transition-colors" dir="ltr">
              {AEROVAULT_BRAND.phone}
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] hover:bg-[#E5C378]/20 transition-all text-[11px] font-mono font-bold"
          >
            <Globe className="w-3 h-3 text-[#E5C378]" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo */}
          <Link href="/work/private-jet-charter" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1B2230] via-[#242E42] to-[#E5C378] flex items-center justify-center shadow-lg shadow-black/80 group-hover:scale-105 transition-transform border border-[#E5C378]/30 shrink-0">
              <Plane className="w-5 h-5 text-[#E5C378]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                  AERO<span className="text-[#E5C378] font-serif">VAULT</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E5C378]/20 text-[#E5C378] border border-[#E5C378]/40 font-bold">
                  #43
                </span>
              </div>
              <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest -mt-0.5">
                {t('brandSubtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-gray-300 hover:text-[#E5C378] transition-colors whitespace-nowrap font-mono uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={AEROVAULT_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C59B27] text-black font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-amber-950/40 hover:scale-105 transition-all font-mono"
            >
              <span>{t('navRequestFlight')}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 text-[#E5C378] text-xs font-mono font-bold"
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
        <div className="lg:hidden bg-[#0A0E17] border-b border-[#E5C378]/20 px-6 pt-4 pb-6 space-y-3 font-sans">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-200 hover:text-[#E5C378] text-start font-mono uppercase"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-2.5 font-mono text-xs">
            <a
              href={`tel:${AEROVAULT_BRAND.phone.replace(/\s+/g, '')}`}
              className="w-full py-3 rounded-xl bg-white/10 text-white font-bold text-center flex items-center justify-center gap-2"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#E5C378]" />
              <span>{AEROVAULT_BRAND.phone}</span>
            </a>

            <a
              href={AEROVAULT_BRAND.whatsapp}
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
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-[#E5C378] text-black font-extrabold text-center uppercase"
            >
              {t('navRequestFlight')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};