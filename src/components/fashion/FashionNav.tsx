'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Crown, Menu, X, Compass, UserCheck } from 'lucide-react';
import { ElaneCrestLogo } from './ElaneCrestLogo';

interface FashionNavProps {
  cartCount?: number;
  wishlistCount?: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onOpenStyling?: () => void;
  onOpenStyleFinder?: () => void;
}

export const FashionNav: React.FC<FashionNavProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  onOpenCart,
  onOpenWishlist,
  onOpenStyling,
  onOpenStyleFinder,
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

  const navLinks = [
    { label: 'New In', href: '#products' },
    { label: 'Women', href: '#products' },
    { label: 'Men', href: '#products' },
    { label: 'Dresses', href: '#products' },
    { label: 'Abayas', href: '#products' },
    { label: 'Occasion', href: '#products' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Journal', href: '#journal' },
  ];

  return (
    <>
      {/* 01 — Announcement Bar */}
      <div className="bg-[#120F0D] border-b border-amber-500/20 py-2 px-3 sm:px-4 text-center text-[10px] sm:text-xs tracking-normal sm:tracking-wider text-amber-200/90 font-mono flex flex-wrap items-center justify-center gap-1.5 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] uppercase font-semibold text-amber-300 shrink-0">
          <Crown className="w-3 h-3" /> Concept Store
        </span>
        <span className="hidden sm:inline text-gray-500">|</span>
        <span>Complimentary UAE Express Delivery on Orders Over AED 500</span>
        <span className="hidden md:inline text-amber-400 font-semibold">• Demo Portfolio Build</span>
      </div>

      {/* 02 — Fashion Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B0908]/90 backdrop-blur-xl border-b border-amber-500/20 py-3.5 shadow-2xl'
            : 'bg-[#0B0908]/60 backdrop-blur-md border-b border-amber-500/10 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 text-gray-300 hover:text-white shrink-0"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <ElaneCrestLogo size="sm" />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl tracking-[0.12em] sm:tracking-[0.2em] text-white uppercase font-bold group-hover:text-amber-200 transition-colors leading-tight">
                ÉLANE ATELIER
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.18em] sm:tracking-[0.3em] text-amber-400 uppercase opacity-85">
                PARIS • DUBAI DESIGN DISTRICT (d3)
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium text-gray-300 hover:text-amber-300 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Controls */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Style Finder CTA */}
            <button
              onClick={onOpenStyleFinder}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-amber-200 font-mono tracking-wider transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Style Finder</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="p-2 text-gray-300 hover:text-amber-300 transition-colors rounded-full hover:bg-white/5 relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-500 text-black text-[9px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag */}
            <button
              onClick={onOpenCart}
              className="p-2 text-gray-300 hover:text-amber-300 transition-colors rounded-full hover:bg-white/5 relative"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-amber-400 text-black text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Personal Styling */}
            <button
              onClick={onOpenStyling}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 text-black font-semibold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Styling</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl lg:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-sm bg-[#120E0B] h-full p-6 border-l border-amber-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500/10">
                  <span className="font-serif text-lg tracking-widest text-white uppercase">ÉLANE ATELIER</span>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm uppercase tracking-widest text-gray-200 hover:text-amber-300 py-2 border-b border-white/5"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-3 pt-6 border-t border-amber-500/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStyling?.();
                  }}
                  className="w-full py-3 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <UserCheck className="w-4 h-4" /> Book Personal Styling
                </button>
                <div className="text-center text-[10px] font-mono text-gray-500 uppercase">
                  Concept Portfolio Demo • UAE AED Pricing
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
