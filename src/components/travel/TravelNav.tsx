'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Compass, 
  Heart, 
  SlidersHorizontal, 
  PhoneCall, 
  Menu, 
  X, 
  Plane, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  Globe2,
  Calendar
} from 'lucide-react';

interface TravelNavProps {
  wishlistCount: number;
  compareCount: number;
  onOpenWishlist: () => void;
  onOpenCompare: () => void;
  onOpenInquiry: (context?: string) => void;
}

export const TravelNav: React.FC<TravelNavProps> = ({
  wishlistCount,
  compareCount,
  onOpenWishlist,
  onOpenCompare,
  onOpenInquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Curated Packages', href: '#packages' },
    { name: 'Trip Matcher', href: '#trip-matcher' },
    { name: 'Bespoke Builder', href: '#itinerary-builder' },
    { name: 'Private Aviation', href: '#aviation' },
    { name: 'Palaces & Suites', href: '#hotels' },
    { name: 'VIP Concierge', href: '#membership' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-sans ${
      scrolled 
        ? 'bg-[#0A0D14]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5' 
        : 'bg-gradient-to-b from-[#07090E]/90 via-[#07090E]/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Luxury Brand Logo */}
          <Link href="#hero" className="flex items-center gap-3.5 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/25 via-amber-400/10 to-transparent border border-amber-400/40 flex items-center justify-center shadow-lg group-hover:border-amber-400/70 transition-all">
              <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-widest text-white uppercase">
                  AURELIA
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">
                  LUXURY TRAVEL
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase block -mt-0.5">
                DUBAI • ABU DHABI • WORLDWIDE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono font-medium text-slate-300 hover:text-amber-400 transition-colors uppercase tracking-wider relative group py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Wishlist Button with Badge */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all relative cursor-pointer"
              aria-label="View Saved Wishlist"
            >
              <Heart className="w-4 h-4 text-rose-400" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white font-mono text-[9px] font-bold flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Compare Trips Button with Badge */}
            <button
              type="button"
              onClick={onOpenCompare}
              className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all relative cursor-pointer hidden sm:flex"
              aria-label="Compare Packages"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              {compareCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-mono text-[9px] font-bold flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Direct Bespoke Consultation CTA */}
            <button
              type="button"
              onClick={() => onOpenInquiry('General VIP Consultation')}
              className="hidden sm:flex px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider items-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Bespoke Journey</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0A0D14] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-mono text-slate-200 hover:text-amber-400 py-2 border-b border-white/5 uppercase tracking-wider flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry('Mobile Navigation Consultation');
                }}
                className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Bespoke Journey in AED</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
