'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cake, 
  ShoppingBag, 
  Search, 
  MessageSquare, 
  Menu, 
  X, 
  Heart, 
  Calendar,
  ChevronRight,
  Crown
} from 'lucide-react';
import { BAKERY_BRAND_INFO } from '@/data/bakeryData';
import { PatisserieCrestLogo } from './PatisserieCrestLogo';

interface BakeryNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const BakeryNav: React.FC<BakeryNavProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Cakes' },
    { id: 'builder', label: 'Custom Builder' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'gifting', label: 'Gifting' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0C0A09]/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl">
      {/* Concept Disclaimer Top Bar */}
      <div className="bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border-b border-amber-500/30 px-3 sm:px-4 py-1.5 text-center flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
        <span className="text-[10px] sm:text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider sm:tracking-widest">
          {BAKERY_BRAND_INFO.conceptNotice}
        </span>
        <span className="hidden sm:inline-block text-[10px] text-amber-400/80 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono shrink-0">
          {BAKERY_BRAND_INFO.packageBadge}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shadow-lg shadow-amber-500/10 shrink-0">
            <PatisserieCrestLogo size="sm" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors tracking-tight">
              Maison Crème
            </span>
            <span className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
              Haute Pâtisserie Paris • Dubai
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === link.id
                  ? 'bg-amber-500 text-black font-extrabold shadow-lg shadow-amber-500/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/"
            className="hidden sm:flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono font-bold text-xs border border-white/15 transition-all"
          >
            <span>← Portfolio</span>
          </a>

          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-amber-400 transition-colors"
            title="Search Menu"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-400 hover:bg-amber-500/25 transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-black font-mono font-bold text-[10px] flex items-center justify-center shadow-lg">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenConsultation}
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Consultation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white xl:hidden"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#120F0D] border-b border-amber-500/20 px-4 py-6 space-y-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="p-3 rounded-xl bg-white/5 hover:bg-amber-500/20 text-left text-xs font-bold text-white flex items-center justify-between border border-white/10"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-amber-500 text-black font-extrabold text-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Request Cake Consultation
              </button>

              <a
                href={BAKERY_BRAND_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Bakery Concierge
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
