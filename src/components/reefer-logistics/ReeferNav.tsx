'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Truck, Phone, MessageSquare, ShieldCheck, Thermometer, ChevronRight, Menu, X, ArrowUpRight } from 'lucide-react';
import { REEFER_COMPANY_INFO } from '@/data/reeferLogisticsData';

interface ReeferNavProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferNav({ onOpenQuote }: ReeferNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'GCC Routes', href: '#routes' },
    { label: 'Reefer Fleet', href: '#fleet' },
    { label: 'Temp Control', href: '#temperature' },
    { label: 'Live Tracking', href: '#tracking' },
    { label: 'Border Ready', href: '#border' },
    { label: 'Cargo Types', href: '#cargo' },
    { label: 'Calculator', href: '#calculator' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Operational Top Status Bar */}
      <div className="bg-[#050811] text-[#94a3b8] text-xs border-b border-white/[0.06] py-1.5 px-4 sm:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 font-mono text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              20/20 REEFERS ACTIVE
            </span>
            <span className="text-white/20 hidden md:inline">|</span>
            <span className="hidden md:inline text-slate-300">
              Al Aweer & JAFZA Staging Docks Pre-Cooled
            </span>
            <span className="text-white/20 hidden lg:inline">|</span>
            <span className="hidden lg:inline text-sky-400 font-mono">
              -18°C ↔ +4°C Continuous Telemetry
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] sm:text-xs font-mono ml-auto">
            <a
              href={`tel:${REEFER_COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1 hover:text-white transition-colors text-slate-300"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{REEFER_COMPANY_INFO.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={REEFER_COMPANY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp Dispatch</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60 py-3'
            : 'bg-[#090d16]/80 backdrop-blur-sm border-b border-white/[0.06] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="/work/reefer-logistics" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/20 via-sky-600/10 to-amber-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-lg shadow-sky-950/40 group-hover:border-sky-400 transition-colors">
              <Truck className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white font-mono uppercase">
                  TRANS-GCC <span className="text-sky-400">REEFER</span>
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 font-mono hidden sm:inline-block">
                  25-TON
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider">
                DUBAI ⇄ GCC REFRIGERATED FLEET
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-sky-400 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            <a
              href="#matrix"
              onClick={(e) => handleNavClick(e, '#matrix')}
              className="hidden lg:flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-200 hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              <span>Route Matrix</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all active:scale-95"
            >
              <span>GET A TRANSPORT QUOTE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a0f1d] border-b border-white/10 px-4 py-5 mt-3 space-y-3 animate-in fade-in slide-in-from-top-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm text-center shadow-lg shadow-sky-500/25"
              >
                REQUEST A TRANSPORT QUOTE
              </button>
              <a
                href={REEFER_COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 text-emerald-300 font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Dispatch (+971 50 892 4477)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
