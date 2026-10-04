'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuxestateLogo } from './LuxestateLogo';
import { 
  Search, 
  Bookmark, 
  Scale, 
  PhoneCall, 
  ChevronDown, 
  Menu, 
  X, 
  Building2, 
  Compass, 
  Calculator, 
  ShieldCheck, 
  FileText,
  Calendar
} from 'lucide-react';
import { PRIME_COMMUNITIES } from '@/data/realEstateData';

interface RealEstateNavProps {
  savedCount: number;
  compareCount: number;
  onOpenSearch: () => void;
  onOpenSaved: () => void;
  onOpenCompare: () => void;
  onOpenViewing: () => void;
  activeCommunity: string;
  onSelectCommunity: (commId: string) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
  onCurrencyChange: (c: 'AED' | 'USD' | 'EUR' | 'GBP') => void;
}

export const RealEstateNav: React.FC<RealEstateNavProps> = ({
  savedCount,
  compareCount,
  onOpenSearch,
  onOpenSaved,
  onOpenCompare,
  onOpenViewing,
  activeCommunity,
  onSelectCommunity,
  currency,
  onCurrencyChange
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [communitiesMenuOpen, setCommunitiesMenuOpen] = useState(false);

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
            ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-amber-500/15 py-3 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-black/80 via-zinc-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/work/real-estate-lead-platform" className="focus:outline-none">
            <LuxestateLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-zinc-300">
            {/* Communities Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCommunitiesMenuOpen(true)}
              onMouseLeave={() => setCommunitiesMenuOpen(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-amber-400 transition-colors py-2">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Prime Communities</span>
                <ChevronDown className="w-3 h-3 text-zinc-500" />
              </button>

              {communitiesMenuOpen && (
                <div className="absolute top-full -left-12 w-[620px] bg-zinc-950/95 backdrop-blur-2xl border border-amber-500/20 rounded-2xl p-5 shadow-2xl grid grid-cols-2 gap-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {PRIME_COMMUNITIES.map((comm) => (
                    <button
                      key={comm.id}
                      onClick={() => {
                        onSelectCommunity(comm.id);
                        setCommunitiesMenuOpen(false);
                      }}
                      className={`text-left p-2.5 rounded-xl border transition-all flex items-center justify-between group ${
                        activeCommunity === comm.id
                          ? 'bg-amber-500/15 border-amber-500/40 text-amber-300'
                          : 'bg-zinc-900/60 border-zinc-800/80 hover:border-amber-500/30 hover:bg-zinc-900'
                      }`}
                    >
                      <div>
                        <div className="font-semibold text-zinc-100 text-xs group-hover:text-amber-300 transition-colors">
                          {comm.name}
                        </div>
                        <div className="text-[10px] text-zinc-400 lowercase first-letter:uppercase">
                          {comm.emirate} • {comm.propertyCount}+ Estates
                        </div>
                      </div>
                      <div className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        AED {comm.avgSqftPrice.toLocaleString()}/sqft
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#property-discovery" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Private Catalog (216)</span>
            </a>

            <a href="#offplan-studio" className="hover:text-amber-400 transition-colors">
              <span>Off-Plan Studio</span>
            </a>

            <a href="#mortgage-roi" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Investment ROI</span>
            </a>

            <a href="#golden-visa-hub" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Golden Visa & Escrow</span>
            </a>

            <a href="#market-journal" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Intelligence</span>
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
                      ? 'bg-amber-500 text-zinc-950 font-bold shadow-sm'
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
              aria-label="Search Estates"
              className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-amber-300 transition-all flex items-center gap-2 text-xs"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden lg:inline text-zinc-400 font-mono text-[11px]">⌘K Search</span>
            </button>

            {/* Compare Drawer Button */}
            <button
              onClick={onOpenCompare}
              aria-label="Compare Properties"
              className="relative p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-amber-300 transition-all"
            >
              <Scale className="w-4 h-4 text-amber-400" />
              {compareCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono animate-pulse">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Saved Portfolio Button */}
            <button
              onClick={onOpenSaved}
              aria-label="Saved Portfolio"
              className="relative p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-amber-500/40 text-zinc-300 hover:text-amber-300 transition-all"
            >
              <Bookmark className="w-4 h-4 text-amber-400" />
              {savedCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {savedCount}
                </span>
              )}
            </button>

            {/* VIP Viewing Request CTA */}
            <button
              onClick={onOpenViewing}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-zinc-950" />
              <span>Book VIP Viewing</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="xl:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-amber-400"
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
            <LuxestateLogo size="md" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-zinc-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 my-auto overflow-y-auto max-h-[65vh] py-4">
            <div className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
              Navigation
            </div>
            <a
              href="#property-discovery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-amber-400 flex items-center gap-3"
            >
              <Building2 className="w-5 h-5 text-amber-400" />
              Private Catalog (216 Estates)
            </a>
            <a
              href="#communities-explorer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-amber-400 flex items-center gap-3"
            >
              <Compass className="w-5 h-5 text-amber-400" />
              12 Prime UAE Communities
            </a>
            <a
              href="#offplan-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-amber-400 flex items-center gap-3"
            >
              <Building2 className="w-5 h-5 text-amber-400" />
              Off-Plan Developer Showcase
            </a>
            <a
              href="#mortgage-roi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-amber-400 flex items-center gap-3"
            >
              <Calculator className="w-5 h-5 text-amber-400" />
              Investment & Mortgage ROI
            </a>
            <a
              href="#golden-visa-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-zinc-200 hover:text-amber-400 flex items-center gap-3"
            >
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              UAE Golden Visa & DLD Escrow
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
                      currency === curr ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-900 text-zinc-400'
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
                onOpenViewing();
              }}
              className="w-full py-3.5 rounded-xl bg-amber-500 text-zinc-950 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4" />
              Book VIP Chauffeur Viewing
            </button>
            <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
              <span>DIFC Gate Precinct 4, Dubai</span>
              <a href="tel:+97143928100" className="text-amber-400 font-mono">+971 4 392 8100</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
