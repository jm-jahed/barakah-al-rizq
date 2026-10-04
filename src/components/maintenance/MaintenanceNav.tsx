'use strict';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AuraLogo } from './AuraLogo';
import { 
  Search, 
  Heart, 
  SlidersHorizontal, 
  Truck, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  Crown, 
  Wrench, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface MaintenanceNavProps {
  onOpenDispatch: () => void;
  onOpenSearch: () => void;
  onOpenSaved: () => void;
  onOpenComparator: () => void;
  savedCount: number;
  compareCount: number;
}

export const MaintenanceNav: React.FC<MaintenanceNavProps> = ({
  onOpenDispatch,
  onOpenSearch,
  onOpenSaved,
  onOpenComparator,
  savedCount,
  compareCount
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-emerald-500/20 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/work/home-maintenance" className="flex items-center">
            <AuraLogo size="md" variant="emerald" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#scopes"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-emerald-400 transition-colors duration-200"
            >
              Services (160+)
            </a>
            <a
              href="#disciplines"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-emerald-400 transition-colors duration-200"
            >
              8 MEP Disciplines
            </a>
            <a
              href="#amc-estimator"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1.5"
            >
              <Wrench className="w-3.5 h-3.5 text-emerald-400" />
              Annual AMC Estimator
            </a>
            <a
              href="#dispatch-zones"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-emerald-400 transition-colors duration-200"
            >
              Palm & Emirates Hills Hubs
            </a>
            <a
              href="#rapid-dispatch"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-emerald-400 transition-colors duration-200 flex items-center gap-1 text-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Sub-30m Dispatch
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-500/40 text-neutral-400 hover:text-emerald-300 transition-all text-xs"
              title="Search 160+ Services (⌘K)"
            >
              <Search className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline text-[11px] uppercase tracking-wider text-neutral-400">Search Services</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-neutral-800 border border-neutral-700 rounded text-neutral-400">⌘K</kbd>
            </button>

            {/* Compare Trigger */}
            {compareCount > 0 && (
              <button
                onClick={onOpenComparator}
                className="relative p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-emerald-500/40 text-emerald-400 transition-all"
                title="Compare Selected Services"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-neutral-950 text-[10px] font-bold flex items-center justify-center">
                  {compareCount}
                </span>
              </button>
            )}

            {/* Wishlist */}
            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-emerald-500/40 text-neutral-300 hover:text-rose-400 transition-all"
              title="Saved Services"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Emergency Van Dispatch CTA */}
            <button
              onClick={onOpenDispatch}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Dispatch Van (28 Min)</span>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 py-6 bg-neutral-950 border-b border-emerald-500/20 shadow-2xl">
          <div className="flex flex-col gap-4">
            <a
              href="#scopes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-emerald-400"
            >
              Maintenance Services (160+ Catalog)
            </a>
            <a
              href="#disciplines"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-emerald-400"
            >
              8 MEP Disciplines
            </a>
            <a
              href="#amc-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-emerald-400"
            >
              Villa AMC Cost Estimator
            </a>
            <a
              href="#dispatch-zones"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-emerald-400"
            >
              Palm & Emirates Hills Service Hubs
            </a>

            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDispatch();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-neutral-950 font-bold text-center tracking-wider uppercase text-xs"
              >
                Emergency Rapid Van Dispatch
              </button>
              <a
                href="tel:+97148819200"
                className="flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-emerald-400 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>24/7 Dispatch Control: +971 4 881 9200</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
