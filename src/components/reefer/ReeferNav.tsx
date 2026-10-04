'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Truck, Phone, MessageSquare, Menu, X, ArrowUpRight, ChevronRight, Sun, Moon } from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferNavProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferNav({ onOpenQuote }: ReeferNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useReeferTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Routes', href: '#routes' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Temperature', href: '#temperature' },
    { label: 'Tracking', href: '#tracking' },
    { label: 'Border Clearance', href: '#border-ready' },
    { label: 'Cargo Types', href: '#cargo' },
    { label: 'Route Matrix', href: '#matrix' },
    { label: 'Quote Calculator', href: '#calculator' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isDark
            ? scrolled
              ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800 shadow-md py-2.5 sm:py-3 text-white'
              : 'bg-[#0B0F17]/90 backdrop-blur-sm border-b border-slate-800/80 py-3 sm:py-3.5 text-white'
            : scrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5 sm:py-3 text-[#111111]'
              : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-3.5 text-[#111111]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo & Moniker */}
            <Link href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950 shadow-xs group-hover:bg-amber-400 transition-colors shrink-0">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 stroke-[2.2]" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className={`font-black tracking-tight text-base sm:text-lg whitespace-nowrap ${isDark ? 'text-white' : 'text-[#111111]'}`}>
                    KHALEEJ<span className="text-amber-500 font-extrabold">REEFER</span>
                  </span>
                  <span className={`inline-flex text-[10px] sm:text-[11px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded-md font-bold whitespace-nowrap shrink-0 ${
                    isDark ? 'bg-slate-800 text-amber-400 border border-slate-700' : 'bg-slate-100 text-[#111111] border border-slate-200'
                  }`}>
                    25-TON
                  </span>
                </div>
                <span className={`text-[10px] sm:text-xs font-mono tracking-tight flex items-center gap-1.5 font-semibold whitespace-nowrap truncate ${
                  isDark ? 'text-slate-400' : 'text-[#4B5563]'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Dubai to GCC Reefer Logistics • 20 Units</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Visible on 2XL / Extra Wide or Large screens) */}
            <nav className="hidden 2xl:flex items-center gap-5 shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase font-bold tracking-wider hover:text-amber-500 transition-colors py-1 whitespace-nowrap ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Large screen navigation (1024px to 1535px) with core items */}
            <nav className="hidden xl:flex 2xl:hidden items-center gap-3.5 shrink-0">
              {navLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase font-bold tracking-wider hover:text-amber-500 transition-colors py-1 whitespace-nowrap ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Quick Contact & Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Theme Toggle Button (Light / Dark) */}
              <button
                onClick={toggleTheme}
                className={`p-2 sm:p-2.5 rounded-xl border transition-all shrink-0 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700 hover:text-amber-300' 
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-amber-600'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* WhatsApp Quick Action (Visible on lg+) */}
              <a
                href="https://wa.me/971508924471?text=Hello%20Khaleej%20Reefer%20Logistics,%20I%20need%20a%2025-ton%20reefer%20truck%20quote%20from%20Dubai%20to%20GCC."
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden lg:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-colors shadow-2xs whitespace-nowrap shrink-0 ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                    : 'bg-slate-50 border-slate-200 text-[#111111] hover:bg-slate-100'
                }`}
                title="Direct WhatsApp Operations Dispatch"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="whitespace-nowrap">+971 50 892 4471</span>
              </a>

              {/* Get Quote CTA Button (Desktop & Tablet) */}
              <button
                onClick={() => onOpenQuote()}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs transition-all transform active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Get Transport Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </button>

              {/* Mobile Quote Button (Compact) */}
              <button
                onClick={() => onOpenQuote()}
                className="sm:hidden px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
              >
                Quote
              </button>

              {/* Mobile & Tablet Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`xl:hidden p-2 sm:p-2.5 rounded-xl border transition-colors shrink-0 cursor-pointer ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700'
                    : 'bg-slate-100 border-slate-200 text-[#111111] hover:bg-slate-200'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Full Screen Overlay & Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-slate-950/70 backdrop-blur-sm z-40 animate-fadeIn">
            <div className={`px-4 sm:px-6 py-5 space-y-5 shadow-2xl max-h-[calc(100vh-68px)] overflow-y-auto border-b transition-colors ${
              isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
            }`}>
              
              {/* Fleet Telemetry Status Pill & Theme Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between gap-3">
                <div className={`p-3 rounded-xl border flex-1 flex items-center justify-between ${
                  isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold">20 UNITS ACTIVE</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    25-TON
                  </span>
                </div>

                <button
                  onClick={toggleTheme}
                  className={`p-3 rounded-xl border flex items-center gap-2 font-mono text-xs font-bold shrink-0 ${
                    isDark ? 'bg-slate-800 border-slate-700 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>{isDark ? 'LIGHT' : 'DARK'}</span>
                </button>
              </div>

              {/* Navigation Links Grid */}
              <div className="space-y-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold px-1 mb-1.5">
                  LOGISTICS SECTIONS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl border text-xs sm:text-sm font-bold transition-colors ${
                        isDark 
                          ? 'bg-slate-800/60 hover:bg-slate-800 hover:text-amber-400 border-slate-700/80 text-slate-200'
                          : 'bg-slate-50 hover:bg-amber-50 hover:text-amber-800 border-slate-100 text-[#111111]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact & Dispatch Direct Channels */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold px-1 mb-1">
                  DIRECT 24/7 DISPATCH DESK
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="https://wa.me/971508924471?text=Hello%20Khaleej%20Reefer%20Logistics,%20I%20need%20a%2025-ton%20reefer%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono font-bold hover:bg-emerald-600/20 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="whitespace-nowrap">WhatsApp: +971 50 892 4471</span>
                  </a>
                  <a
                    href="tel:+97148812900"
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs font-mono font-bold transition-colors ${
                      isDark ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-slate-50 border-slate-200 text-[#111111]'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="whitespace-nowrap">Dubai Desk: +971 4 881 2900</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full mt-2 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider text-center shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>REQUEST 25-TON REEFER QUOTE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
}
