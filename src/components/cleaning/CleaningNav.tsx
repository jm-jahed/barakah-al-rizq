'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PristineLogo } from './PristineLogo';
import { 
  Search, 
  Bookmark, 
  Scale, 
  PhoneCall, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Layers, 
  Calculator, 
  Award, 
  Calendar,
  Sparkles as Dummy, // Note: DO NOT USE SPARKLES
  Clock,
  Car
} from 'lucide-react';
import { CLEANING_CATEGORIES } from '@/data/cleaningData';

interface CleaningNavProps {
  savedCount: number;
  compareCount: number;
  onOpenSearch: () => void;
  onOpenSaved: () => void;
  onOpenCompare: () => void;
  onOpenDispatch: () => void;
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
  onCurrencyChange: (c: 'AED' | 'USD' | 'EUR' | 'GBP') => void;
}

export const CleaningNav: React.FC<CleaningNavProps> = ({
  savedCount,
  compareCount,
  onOpenSearch,
  onOpenSaved,
  onOpenCompare,
  onOpenDispatch,
  activeCategory,
  onSelectCategory,
  currency,
  onCurrencyChange
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesMenuOpen, setCategoriesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-emerald-500/15 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-zinc-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/work/cleaning-company" className="focus:outline-none">
            <PristineLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-zinc-300">
            {/* Disciplines Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoriesMenuOpen(true)}
              onMouseLeave={() => setCategoriesMenuOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-2">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Disciplines (8)</span>
                <ChevronDown className="w-3 h-3 text-zinc-500" />
              </button>

              {categoriesMenuOpen && (
                <div className="absolute top-full -left-12 w-[640px] bg-zinc-950/95 backdrop-blur-2xl border border-emerald-500/20 rounded-2xl p-5 shadow-2xl grid grid-cols-2 gap-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {CLEANING_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        onSelectCategory(cat.id);
                        setCategoriesMenuOpen(false);
                      }}
                      className={`text-left p-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                        activeCategory === cat.id
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : 'bg-zinc-900/60 border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-zinc-100 text-xs group-hover:text-emerald-300 transition-colors">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-zinc-400 lowercase first-letter:uppercase">
                          {cat.subtitle}
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        From AED {cat.startingPriceAED}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#service-discovery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Catalog (160+)</span>
            </a>

            <a href="#quote-calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>Villa Estimator</span>
            </a>

            <a href="#corporate-fm" className="hover:text-emerald-400 transition-colors">
              <span>B2B & Clinic FM</span>
            </a>

            <a href="#trust-certifications" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>BICSc & Standards</span>
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Currency Selector */}
            <div className="relative hidden md:flex items-center bg-zinc-900/80 border border-zinc-800 rounded-lg p-0.5 text-[11px] font-mono">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  onClick={() => onCurrencyChange(curr)}
                  className={`px-2 py-1 rounded transition-all ${
                    currency === curr
                      ? 'bg-emerald-500 text-zinc-950 font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Instant Search Button */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Services"
              className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-300 transition-all flex items-center gap-2 text-xs"
            >
              <Search className="w-4 h-4 text-emerald-400" />
              <span className="hidden lg:inline text-zinc-400 font-mono text-[11px]">⌘K Search</span>
            </button>

            {/* Compare Drawer Button */}
            <button
              onClick={onOpenCompare}
              aria-label="Compare Services"
              className="relative p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-300 transition-all"
            >
              <Scale className="w-4 h-4 text-emerald-400" />
              {compareCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono animate-pulse">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Saved Services Button */}
            <button
              onClick={onOpenSaved}
              aria-label="Saved Services"
              className="relative p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-300 transition-all"
            >
              <Bookmark className="w-4 h-4 text-emerald-400" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {savedCount}
                </span>
              )}
            </button>

            {/* VIP Dispatch CTA */}
            <button
              onClick={onOpenDispatch}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all active:scale-95"
            >
              <Car className="w-3.5 h-3.5 text-zinc-950" />
              <span>Dispatch Van</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="xl:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-emerald-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/98 backdrop-blur-3xl p-6 flex flex-col justify-between animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
            <PristineLogo size="md" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 my-auto overflow-y-auto max-h-[65vh] py-4">
            <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">
              Service Modules
            </div>
            <a
              href="#service-discovery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-emerald-400 flex items-center gap-3"
            >
              <Layers className="w-5 h-5 text-emerald-400" />
              160+ Precision Cleaning Catalog
            </a>
            <a
              href="#quote-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-emerald-400 flex items-center gap-3"
            >
              <Calculator className="w-5 h-5 text-emerald-400" />
              Villa & Commercial Quote Estimator
            </a>
            <a
              href="#corporate-fm"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-emerald-400 flex items-center gap-3"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              B2B & Clinic Facility Management
            </a>
            <a
              href="#trust-certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-emerald-400 flex items-center gap-3"
            >
              <Award className="w-5 h-5 text-emerald-400" />
              BICSc & Dubai Municipality Standards
            </a>

            {/* Currency Selector on Mobile */}
            <div className="pt-4 border-t border-zinc-800">
              <div className="text-[11px] font-mono text-zinc-400 uppercase mb-2">Display Currency</div>
              <div className="grid grid-cols-4 gap-2">
                {(['AED', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`py-2 text-center rounded-lg font-mono text-xs font-semibold ${
                      currency === curr ? 'bg-emerald-500 text-zinc-950' : 'bg-zinc-900 text-zinc-400'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800/80 pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDispatch();
              }}
              className="w-full py-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Car className="w-4 h-4" />
              Dispatch Service Van Now
            </button>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
              <span>DIFC & Dubai Marina Hub</span>
              <a href="tel:+97143928400" className="text-emerald-400 font-mono">+971 4 392 8400</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
