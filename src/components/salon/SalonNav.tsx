'use strict';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { VelvetLogo } from './VelvetLogo';
import { 
  Search, 
  Heart, 
  Calendar, 
  SlidersHorizontal, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  Crown, 
  Clock,
  Sparkle
} from 'lucide-react';
import { SALON_BRAND_INFO } from '@/data/salonData';

interface SalonNavProps {
  onOpenBooking: () => void;
  onOpenSearch: () => void;
  onOpenSaved: () => void;
  onOpenComparator: () => void;
  savedCount: number;
  compareCount: number;
}

export const SalonNav: React.FC<SalonNavProps> = ({
  onOpenBooking,
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
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/work/salon-beauty-studio" className="flex items-center">
            <VelvetLogo size="md" variant="gold" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#treatments"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200"
            >
              Treatments (160+)
            </a>
            <a
              href="#categories"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200"
            >
              Disciplines
            </a>
            <a
              href="#customizer"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5"
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              VIP Customizer
            </a>
            <a
              href="#stylists"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200"
            >
              Master Artists
            </a>
            <a
              href="#sanctuary"
              className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-amber-400 transition-colors duration-200"
            >
              d3 Atelier
            </a>
          </nav>

          {/* Actions & Triggers */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 text-neutral-400 hover:text-amber-300 transition-all text-xs"
              title="Search 160+ Treatments (⌘K)"
            >
              <Search className="w-4 h-4 text-amber-400" />
              <span className="hidden md:inline text-[11px] uppercase tracking-wider text-neutral-400">Search Treatments</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 text-[10px] bg-neutral-800 border border-neutral-700 rounded text-neutral-400">⌘K</kbd>
            </button>

            {/* Compare Trigger */}
            {compareCount > 0 && (
              <button
                onClick={onOpenComparator}
                className="relative p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-amber-500/40 text-amber-400 transition-all"
                title="Compare Selected Treatments"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-bold flex items-center justify-center">
                  {compareCount}
                </span>
              </button>
            )}

            {/* Wishlist / Saved */}
            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/40 text-neutral-300 hover:text-rose-400 transition-all"
              title="Saved Treatments"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            {/* VIP Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Menu Button */}
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
        <div className="lg:hidden mt-3 px-4 py-6 bg-neutral-950 border-b border-amber-500/20 shadow-2xl">
          <div className="flex flex-col gap-4">
            <a
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-amber-400"
            >
              Treatments (160+ Catalog)
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-amber-400"
            >
              8 Beauty Disciplines
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-amber-400"
            >
              Bridal & VIP Customizer
            </a>
            <a
              href="#stylists"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-amber-400"
            >
              Master Artists Roster
            </a>
            <a
              href="#sanctuary"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-amber-400"
            >
              Dubai d3 Atelier
            </a>

            <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-950 font-bold text-center tracking-wider uppercase text-xs"
              >
                Reserve Appointment Now
              </button>
              <a
                href={`tel:${SALON_BRAND_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-amber-400 py-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Concierge: {SALON_BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
