'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Anchor, MessageCircle, Menu, X, ArrowUpRight, Globe, ArrowLeft, Phone } from 'lucide-react';
import { AZURE_BRAND } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

interface AzureNavProps {
  onOpenBookingModal: (yachtId?: string) => void;
}

export const AzureNav: React.FC<AzureNavProps> = ({ onOpenBookingModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRtl, t } = useAzureLanguage();

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
    { label: t('navPlanner'), href: '#planner' },
    { label: t('navExperiences'), href: '#experiences' },
    { label: t('navProcess'), href: '#workflow' },
    { label: t('navWhyUs'), href: '#whyus' },
    { label: t('navMarinas'), href: '#marinas' },
    { label: t('navFAQ'), href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#071324]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl' 
        : 'bg-transparent py-5'
    }`}>
      {/* Top Banner Strip */}
      <div className="bg-[#030B17] border-b border-white/5 py-1 text-center text-[11px] font-mono text-gray-300 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4 text-gray-400">
            <span>{language === 'ar' ? 'مرسى بيير ٧ دبي مارينا & كورنيش أبوظبي' : 'Dubai Marina Pier 7 & Abu Dhabi Corniche'}</span>
            <span>•</span>
            <a href={`tel:${AZURE_BRAND.phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-amber-400 transition-colors" dir="ltr">
              {AZURE_BRAND.phone}
            </a>
          </div>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 transition-all text-[11px] font-mono font-bold"
          >
            <Globe className="w-3 h-3" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/work/yacht-charter" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-950/50 group-hover:scale-105 transition-transform">
              <Anchor className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                  AZURE <span className="text-amber-400 font-serif">YACHTS</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  #41
                </span>
              </div>
              <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest -mt-0.5">
                {t('brandSubtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-gray-300 hover:text-amber-400 transition-colors uppercase tracking-wider font-mono"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={AZURE_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/30 transition-all font-mono"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('whatsappBooking')}</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-amber-950/50 hover:scale-105 transition-all font-mono"
            >
              <span>{t('navBookCharter')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl bg-white/10 text-amber-400 text-xs font-mono font-bold"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071324] border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold text-gray-200 hover:text-amber-400 font-mono uppercase"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2.5">
            <a
              href={AZURE_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs text-center flex items-center justify-center gap-2 font-mono uppercase"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('whatsappBooking')}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-black font-bold text-xs text-center font-mono uppercase"
            >
              {t('navBookCharter')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};