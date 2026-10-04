'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, MessageCircle, Menu, X, ArrowUpRight, Globe, Phone, ArrowLeft, ArrowRight } from 'lucide-react';
import { SKYVAULT_BRAND } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

interface SkyvaultNavProps {
  onOpenContactModal: (serviceTitle?: string) => void;
}

export const SkyvaultNav: React.FC<SkyvaultNavProps> = ({ onOpenContactModal }) => {
  const { lang, setLanguage, isRtl, t } = useSkyvaultLanguage();
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
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.calculator'), href: '#program' },
    { label: t('nav.camo'), href: '#whyus' },
    { label: t('nav.hangar'), href: '#ground' },
    { label: t('nav.bases'), href: '#bases' },
    { label: t('nav.casestudy'), href: '#casestudy' },
    { label: t('nav.faq'), href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Luxury Utility Strip */}
      <div className="bg-[#05070B] border-b border-white/5 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-medium">
              {lang === 'ar' ? 'صالات DWC آل مكتوم ومطار البطين التنفيذي' : 'Dubai DWC & Abu Dhabi Al Bateen Executive Bases'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SKYVAULT_BRAND.phone.replace(/\s+/g, '')}`}
              className="hover:text-[#E5C378] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#E5C378]" />
              <span className="hidden sm:inline">{t('nav.callDesk')}:</span>
              <span className="text-slate-200 font-bold">{SKYVAULT_BRAND.phone}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lang === 'en' ? 'bg-[#E5C378] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  lang === 'ar' ? 'bg-[#E5C378] text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090E]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-[#07090E]/70 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link href="/work/executive-aviation" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#11161F] to-[#1C2541] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border border-[#E5C378]/30">
                <ShieldCheck className="w-5 h-5 text-[#E5C378]" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                  SKY<span className="text-[#E5C378]">VAULT</span> <span className="text-xs font-mono text-slate-400">UAE</span>
                </span>
                <span className="block text-[8px] sm:text-[9px] font-mono text-slate-400 uppercase tracking-widest -mt-1 font-bold">
                  {lang === 'ar' ? 'إدارة الطيران التنفيذي' : 'EXECUTIVE AVIATION MANAGEMENT'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-slate-300 hover:text-[#E5C378] transition-colors font-sans"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={SKYVAULT_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600/15 border border-emerald-500/30 text-emerald-300 font-semibold text-xs hover:bg-emerald-600/25 transition-all font-mono"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('nav.whatsapp')}</span>
              </a>

              <button
                onClick={() => onOpenContactModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E5C378] hover:bg-[#d4af37] text-black font-extrabold text-xs tracking-wide uppercase shadow-lg shadow-[#E5C378]/20 hover:scale-105 transition-all font-mono"
              >
                <span>{t('nav.requestProposal')}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-[-90deg]' : ''}`} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D1118] border-b border-white/10 px-4 pt-4 pb-6 space-y-3 font-sans shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-200 hover:text-[#E5C378] border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={SKYVAULT_BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t('nav.whatsapp')}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3.5 rounded-xl bg-[#E5C378] text-black font-extrabold text-xs text-center font-mono uppercase tracking-wider"
            >
              {t('nav.requestProposal')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};