'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Search, Menu, X, Crown, MessageCircle } from 'lucide-react';
import { ABAYA_BRAND } from '@/data/abayaData';

interface AbayaNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSizeGuide: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const AbayaNav: React.FC<AbayaNavProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSizeGuide,
  searchQuery,
  setSearchQuery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'collections', label: 'Collections' },
    { id: 'catalog', label: 'Abaya Catalog' },
    { id: 'size-guide', label: 'Size Guide', action: onOpenSizeGuide },
    { id: 'delivery', label: 'UAE Delivery' },
    { id: 'reviews', label: 'Client Reviews' },
    { id: 'faq', label: 'FAQ' },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Delivery Notice */}
      <div className="bg-[#121212] text-[#E6DFD5] py-2 px-4 text-center font-mono text-[11px] tracking-widest border-b border-stone-800 flex items-center justify-center gap-2">
        <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>COMPLIMENTARY SAME-DAY DELIVERY IN DUBAI & ABU DHABI | MATCHING SHEILA INCLUDED</span>
      </div>

      <header
        className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C5A059]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Logo */}
            <div className="flex items-center gap-6">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C5A059] via-[#D4AF37] to-[#121212] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
                    <span className="font-serif font-black text-[#C5A059] text-base">N</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-extrabold text-[#FAFAFA] tracking-[0.25em] leading-none">
                    NOURA
                  </span>
                  <span className="text-[8px] font-mono font-bold text-[#C5A059] tracking-[0.3em] uppercase mt-0.5">
                    ABAYA • DUBAI
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Nav Links */}
            <nav className="hidden lg:flex items-center gap-2 font-serif text-xs font-medium text-stone-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => (link.action ? link.action() : scrollToSection(link.id))}
                  className="px-3 py-1.5 rounded-lg hover:text-[#C5A059] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Search, Wishlist, Cart & WhatsApp */}
            <div className="flex items-center gap-3">
              
              {/* Search Toggle */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center bg-[#121212] border border-[#C5A059]/40 rounded-xl px-3 py-1.5 text-xs text-white">
                    <Search className="w-3.5 h-3.5 text-[#C5A059] mr-2" />
                    <input
                      type="text"
                      placeholder="Search 100 abayas..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent focus:outline-none w-36 sm:w-48 text-stone-200"
                      autoFocus
                    />
                    <button onClick={() => setIsSearchOpen(false)} className="text-stone-400 hover:text-white ml-2">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2.5 rounded-xl bg-[#121212] border border-stone-800 text-stone-300 hover:text-[#C5A059]"
                    aria-label="Search Catalog"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Wishlist Icon */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-xl bg-[#121212] border border-stone-800 text-stone-300 hover:text-[#C5A059]"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C5A059] text-black font-mono text-[9px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-[#121212] border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all shadow-md"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C5A059] text-black font-mono text-[9px] font-bold flex items-center justify-center shadow-lg">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Concierge */}
              <a
                href={ABAYA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Boutique WhatsApp</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#121212] border border-stone-800 text-stone-300"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[88px] z-40 bg-[#0A0A0A]/95 border-b border-stone-800 backdrop-blur-2xl p-6 lg:hidden shadow-2xl font-serif text-stone-200"
          >
            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => (link.action ? link.action() : scrollToSection(link.id))}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-200 font-bold text-xs text-left hover:text-[#C5A059]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-stone-800 font-mono">
                <a
                  href={ABAYA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Styling Concierge (+971 50)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
