'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Truck,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Calculator,
  Compass,
  MapPin,
  Sparkles
} from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

interface MovingNavProps {
  onOpenQuoteModal: (serviceType?: string) => void;
  onScrollToCalculator: () => void;
}

export const MovingNav: React.FC<MovingNavProps> = ({
  onOpenQuoteModal,
  onScrollToCalculator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#090807]/90 backdrop-blur-xl border-b border-amber-500/20">
      
      {/* Top Operations Live Ticker */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-gradient-to-r from-amber-950/40 via-[#100C08] to-amber-950/40 border-b border-amber-500/10 text-[11px] font-mono text-amber-300">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-300 font-sans font-medium">UAE Dispatch Desk:</span>
            <span className="text-emerald-400 font-bold">ALL CREWS ACTIVE</span>
          </div>
          <span className="text-gray-700">|</span>
          <div className="flex items-center gap-1.5 text-gray-300">
            <span>Damage-Free Guarantee:</span>
            <span className="text-amber-400 font-bold">99.85% Verified</span>
          </div>
          <span className="text-gray-700">|</span>
          <div className="flex items-center gap-1.5 text-gray-300">
            <span>Emaar & Nakheel Permits:</span>
            <span className="text-cyan-300 font-semibold">100% Pre-Approved</span>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-300">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <span>Currency:</span>
            <span className="px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30 text-[10px]">AED (UAE Dirham)</span>
          </div>
          <span className="text-gray-700">|</span>
          <a
            href={NESTMOVE_BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Moving Desk</span>
          </a>
          <span className="text-gray-700">|</span>
          <a href={`tel:${NESTMOVE_BRAND.phone}`} className="hover:text-white flex items-center gap-1 transition-colors font-semibold">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{NESTMOVE_BRAND.phoneDisplay}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/work/moving-relocation" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
              <div className="w-full h-full bg-[#0E0C0A] rounded-[10px] flex items-center justify-center">
                <Truck className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-wider text-white">NESTMOVE</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                  PROJECT #24
                </span>
              </div>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase font-mono">
                Luxury Relocations & Storage UAE
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
            <a href="#property-types" className="hover:text-amber-400 transition-colors">
              Move Types
            </a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Volume & Rate Calculator</span>
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Specialized Services
            </a>
            <a href="#tracker" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Live Move Tracker</span>
            </a>
            <a href="#permits" className="hover:text-amber-400 transition-colors">
              Community Permits
            </a>
            <a href="#international" className="hover:text-amber-400 transition-colors">
              Global Shipping
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onScrollToCalculator}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-gray-200 text-xs font-bold transition-all flex items-center gap-2 hover:border-amber-500/50"
            >
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>Calculate AED Price</span>
            </button>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black font-extrabold text-xs transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book Your Move</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0C0A08] border-b border-amber-900/30 px-6 py-6 space-y-4"
          >
            <div className="space-y-3 font-medium text-gray-200 text-sm">
              <a
                href="#property-types"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800"
              >
                🏡 Property Move Types
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800"
              >
                🧮 Volume & Rate Calculator (AED)
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800"
              >
                📦 Specialized White-Glove Services
              </a>
              <a
                href="#tracker"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800"
              >
                🛰️ Live Moving Day Tracker HUD
              </a>
              <a
                href="#permits"
                onClick={() => setMobileMenuOpen(false)}
                className="block p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800"
              >
                📋 Emaar & Nakheel Permit Guide
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-sm text-center"
              >
                Request Free Home Moving Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};
