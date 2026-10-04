'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Truck, Phone, MessageCircle, Menu, X, ShieldAlert, Globe, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ROADFORGE_BRAND } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

interface RoadforgeNavProps {
  onOpenRequestModal: (issue?: string) => void;
}

export const RoadforgeNav: React.FC<RoadforgeNavProps> = ({ onOpenRequestModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isRtl, t } = useRoadforgeLanguage();

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
    { label: t('navDispatcher'), href: '#quick-tool' },
    { label: t('navCoverage'), href: '#coverage' },
    { label: t('navWorkflow'), href: '#workflow' },
    { label: t('navFleetPartners'), href: '#fleet' },
    { label: t('navLocations'), href: '#bases' },
    { label: t('navFAQ'), href: '#faq' },
  ];

  return (
    <>
      {/* Top Persistent Emergency Alert Bar */}
      <div className="bg-[#DC2626] text-white py-1.5 px-4 text-center font-mono text-xs font-bold flex items-center justify-between z-50 relative shadow-md">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 animate-bounce text-yellow-300" />
              <span className="hidden sm:inline">{t('heroBadge')}</span>
            </span>
            <span className="text-red-200">•</span>
            <a
              href={`tel:${ROADFORGE_BRAND.phone.replace(/\s+/g, '')}`}
              className="underline hover:text-yellow-200 font-extrabold"
              dir="ltr"
            >
              {t('emergencyHotline')}
            </a>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/20 border border-white/20 text-white hover:bg-black/30 transition-all text-[11px] font-mono font-bold"
          >
            <Globe className="w-3 h-3 text-yellow-300" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>

      <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B132B]/95 backdrop-blur-md border-b border-amber-500/20 py-2.5 shadow-2xl' 
          : 'bg-[#0B132B]/90 backdrop-blur-sm py-3.5 border-b border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Logo */}
            <Link href="/work/car-recovery-roadside-assistance" className="flex items-center gap-2.5 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#EF4444] to-[#F59E0B] flex items-center justify-center shadow-lg shadow-red-950/50 group-hover:scale-105 transition-transform shrink-0">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                    ROAD<span className="text-[#F59E0B]">FORGE</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                    #40
                  </span>
                </div>
                <span className="block text-[9px] font-mono text-amber-400 uppercase tracking-widest -mt-0.5 font-bold">
                  {language === 'ar' ? 'إنقاذ وسحب السيارات ٢٤/٧' : '24/7 UAE RECOVERY'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#F59E0B] transition-colors font-mono whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={ROADFORGE_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 font-bold text-xs hover:bg-emerald-600/40 transition-all font-mono"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenRequestModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#EF4444] to-[#DC2626] hover:from-[#DC2626] hover:to-[#B91C1C] text-white font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-red-950/50 hover:scale-105 transition-all font-mono"
              >
                <span>{t('dispatchRecoveryBtn')}</span>
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
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1024] border-b border-amber-500/20 px-6 pt-4 pb-6 space-y-3 font-sans">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-gray-200 hover:text-[#F59E0B] text-start font-mono uppercase"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5 font-mono text-xs">
              <a
                href={`tel:${ROADFORGE_BRAND.phone.replace(/\s+/g, '')}`}
                className="w-full py-3 rounded-xl bg-[#DC2626] text-white font-extrabold text-center flex items-center justify-center gap-2"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>800-ROADS ({ROADFORGE_BRAND.phone})</span>
              </a>

              <a
                href={ROADFORGE_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Live GPS Dispatch</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRequestModal();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 text-black font-extrabold text-center uppercase"
              >
                {t('dispatchRecoveryBtn')}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};