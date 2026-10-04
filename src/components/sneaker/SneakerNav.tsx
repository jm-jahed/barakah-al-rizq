'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Crown, Menu, X, Flame } from 'lucide-react';
import { SoleVaultCrestLogo } from './SoleVaultCrestLogo';

interface SneakerNavProps {
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onOpenFinder?: () => void;
}

export const SneakerNav: React.FC<SneakerNavProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
  onOpenFinder,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Men', href: '#discovery' },
    { label: 'Women', href: '#discovery' },
    { label: 'Sneakers', href: '#discovery' },
    { label: 'Streetwear', href: '#streetwear' },
    { label: 'New Drops', href: '#drops' },
    { label: 'Collections', href: '#categories' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <>
      <div className="bg-[#121110] border-b border-amber-500/20 py-2 px-3 sm:px-4 text-center text-[11px] sm:text-xs tracking-wider text-amber-200 font-mono flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] uppercase font-bold text-amber-300">
          <Flame className="w-3 h-3 text-amber-400" /> SOLE//DISTRICT
        </span>
        <span className="hidden sm:inline text-gray-600">|</span>
        <span className="truncate max-w-[200px] sm:max-w-none">100% Authenticated Streetwear • Express 24h UAE Delivery</span>
        <span className="hidden md:inline text-amber-400 font-semibold">• Concept Demo Store</span>
      </div>

      <header className={`sticky top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#0A0908]/95 backdrop-blur-xl border-b border-amber-500/20 py-3.5 shadow-2xl' : 'bg-[#0A0908]/70 backdrop-blur-md border-b border-amber-500/10 py-4 sm:py-5'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-1.5 sm:p-2 text-gray-300 hover:text-white shrink-0">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <a href="#" className="flex items-center gap-3 group min-w-0 text-left">
            <SoleVaultCrestLogo size="sm" />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-xl md:text-2xl tracking-[0.15em] text-white uppercase font-black group-hover:text-amber-400 transition-colors truncate leading-tight">
                SOLE VAULT
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] sm:tracking-[0.3em] text-amber-400 uppercase opacity-90 truncate">
                ALSERKAL AVENUE • DUBAI
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-xs uppercase tracking-[0.18em] font-mono text-gray-300 hover:text-amber-400 transition-colors py-1">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button onClick={onOpenFinder} className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs text-amber-300 font-mono tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>AI Finder</span>
            </button>

            <button onClick={onOpenWishlist} className="p-2 text-gray-300 hover:text-amber-400 transition-colors relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-500 text-black text-[9px] font-bold flex items-center justify-center">{wishlistCount}</span>}
            </button>

            <button onClick={onOpenCart} className="p-2 text-gray-300 hover:text-amber-400 transition-colors relative" aria-label="Shopping Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-400 text-black text-[9px] font-bold flex items-center justify-center">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl lg:hidden flex justify-end">
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="w-full max-w-sm bg-[#12100E] h-full p-6 border-l border-amber-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500/10">
                  <span className="font-serif text-lg tracking-widest text-white uppercase font-bold">SOLE//DISTRICT</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
                </div>
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-sm uppercase font-mono tracking-widest text-gray-200 hover:text-amber-400 py-2 border-b border-white/5">
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="text-center text-[10px] font-mono text-gray-500 uppercase">Concept Demo Build • UAE AED Pricing</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
