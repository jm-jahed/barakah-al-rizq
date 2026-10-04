'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NEXUS_BRAND, NEXUS_LOCATIONS } from '@/data/nexusWorkspaceData';

export default function NexusNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalSuites = NEXUS_LOCATIONS.reduce((acc, loc) => acc + loc.totalSuites, 0);
  const availableSuites = NEXUS_LOCATIONS.reduce((acc, loc) => acc + loc.availableSuites, 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-6">

            <Link href="/work/business-center-serviced-offices" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                N
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-wider text-white group-hover:text-amber-300 transition">
                  {NEXUS_BRAND.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-amber-400/90 uppercase -mt-1">
                  Dubai • Abu Dhabi
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300 tracking-wide">
            <div className="relative">
              <button
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                onBlur={() => setTimeout(() => setLocationDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 hover:text-amber-400 transition py-1"
              >
                <span>5 UAE Locations</span>
                <span className="text-[10px] text-amber-400">▾</span>
              </button>

              {locationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-2 z-50 animate-fadeIn">
                  <div className="px-3 py-2 border-b border-slate-800 text-[10px] font-mono uppercase text-slate-400">
                    Flagship Business Hubs
                  </div>
                  {NEXUS_LOCATIONS.map((loc) => (
                    <a
                      key={loc.id}
                      href="#locations"
                      className="block p-2.5 rounded-xl hover:bg-slate-800/80 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white group-hover:text-amber-400">{loc.name}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">{loc.availableSuites} Free</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block truncate">{loc.district}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#offices" className="hover:text-amber-400 transition">
              Serviced Suites
            </a>
            <a href="#calculator" className="hover:text-amber-400 transition flex items-center gap-1">
              <span>AED Calculator</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-500/20 text-amber-400 border border-amber-500/30">
                LIVE
              </span>
            </a>
            <a href="#licenses" className="hover:text-amber-400 transition">
              DED & Ejari
            </a>
            <a href="#experience" className="hover:text-amber-400 transition">
              IT & Infrastructure
            </a>
            <a href="#faq" className="hover:text-amber-400 transition">
              FAQ
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+97144558800"
              className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-mono font-medium flex items-center gap-2 transition"
            >
              <span>📞</span>
              <span>+971 4 455 8800</span>
            </a>

            <a
              href={`https://wa.me/971508821122?text=${encodeURIComponent(
                'Hello NEXUS Concierge, I would like to inquire about available serviced offices and Ejari registration.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-md transition"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>

            <a
              href="#tour"
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/20 transition transform hover:-translate-y-0.5"
            >
              Book Viewing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#tour"
              className="px-3 py-1.5 bg-amber-500 text-slate-950 text-xs font-bold rounded-lg"
            >
              Viewing
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-slate-800 bg-slate-900/95 rounded-2xl p-4 space-y-3 animate-fadeIn">
            <a
              href="#offices"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-amber-400"
            >
              Serviced Suites
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-amber-400"
            >
              AED Space & Ejari Calculator
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-amber-400"
            >
              5 UAE Business Centers
            </a>
            <a
              href="#licenses"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-amber-400"
            >
              DED & Ejari Setup
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-amber-400"
            >
              IT & Infrastructure
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-amber-400"
            >
              FAQ & Regulations
            </a>
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="tel:+97144558800"
                className="w-full text-center py-2.5 bg-slate-800 text-white rounded-xl text-xs font-mono font-bold"
              >
                📞 Call +971 4 455 8800
              </a>
              <a
                href={`https://wa.me/971508821122`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold"
              >
                💬 WhatsApp Concierge
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
