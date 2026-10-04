'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Phone, 
  Globe, 
  Search, 
  Calendar, 
  ArrowUpRight, 
  Menu, 
  X, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language } from '@/data/typingCenterData';

interface TypingNavProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenAppointment: () => void;
  onOpenSearch: () => void;
}

export default function TypingNav({
  lang,
  onToggleLang,
  onOpenAppointment,
  onOpenSearch
}: TypingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAr = lang === 'ar';

  const navLinks = [
    { href: '#services', labelEn: 'All Services', labelAr: 'كافة الخدمات' },
    { href: '#calculator', labelEn: 'Fee Calculator', labelAr: 'حاسبة الرسوم' },
    { href: '#emirates-id', labelEn: 'Emirates ID', labelAr: 'الهوية الإماراتية' },
    { href: '#tasheel', labelEn: 'Tasheel / MOHRE', labelAr: 'تسهيل والعمل' },
    { href: '#corporate-pro', labelEn: 'Business & PRO', labelAr: 'خدمات الشركات' },
    { href: '#tracking', labelEn: 'Track Status', labelAr: 'تتبع المعاملة' },
    { href: '#authorities', labelEn: 'UAE Authorities', labelAr: 'الجهات الحكومية' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070B14]/90 backdrop-blur-xl border-b border-amber-500/15">
      {/* Top Telemetry Notification Bar */}
      <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-amber-950/80 border-b border-amber-500/10 text-[11px] sm:text-xs text-slate-300 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {isAr ? 'منظومة الطباعة الذكية نشطة' : 'ICP & GDRFA TYPING ACTIVE'}
            </span>
            <span className="hidden sm:inline text-slate-400">
              {isAr 
                ? 'مركز سند للخدمات الحكومية الرقمية • دبي وأبوظبي وكافة الإمارات'
                : 'Sanad Digital Government Services Hub • Dubai, Abu Dhabi & All Emirates'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3 text-amber-400" />
              <span>{isAr ? 'السبت - الخميس: 8:00 ص - 8:00 م' : 'Sat - Thu: 8:00 AM - 8:00 PM'}</span>
            </div>
            <a 
              href="tel:+97143998820" 
              className="flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-mono"
            >
              <Phone className="w-3 h-3" />
              <span>+971 4 399 8820</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Authority Label */}
          <Link href="/work/typing-center-government-services" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#090D1A] rounded-[10px] flex items-center justify-center">
                <Building2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white font-sans">
                  {isAr ? 'سند' : 'SANAD'}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-medium">
                  {isAr ? 'خدمات حكومية' : 'GOV HUB'}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">
                {isAr ? 'المركز الرقمي المعتمد للطباعة والمعاملات' : 'UAE Digital Government Services'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.04] transition-all duration-200"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-white/[0.03] border border-slate-700/60 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
              title={isAr ? 'بحث عن خدمة' : 'Search services'}
              aria-label="Search services"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Toggle: EN <-> AR */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-bold font-mono transition-all"
              title="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>

            {/* Primary Book Appointment CTA */}
            <button
              onClick={onOpenAppointment}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white text-xs font-bold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{isAr ? 'حجز موعد / استشارة' : 'Book Service / Appt'}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-white/[0.04] border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-800 bg-[#070B14]/98 px-4 pt-4 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 transition-all"
              >
                {isAr ? link.labelAr : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>{isAr ? 'حجز موعد / تقديم معاملة' : 'Book Service / Submit Application'}</span>
            </button>
            <a
              href="https://wa.me/971507719900?text=Hello%20Sanad%20Government%20Services,%20I%20need%20assistance%20with%20UAE%20typing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>{isAr ? 'محادثة فورية عبر واتساب' : 'WhatsApp Concierge Desk'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
