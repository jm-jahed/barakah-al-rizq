'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Layers, 
  MapPin, 
  Phone, 
  Zap, 
  Crown,
  Menu, 
  X, 
  ChevronDown,
  SlidersHorizontal,
  ShieldCheck
} from 'lucide-react';
import { GADGET_CATEGORIES } from '@/data/consumerElectronicsData';
import { AetheraLogo } from './AetheraLogo';

interface AetheraNavProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  comparisonCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenComparison: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (categoryId: string) => void;
  onBookShowroom: () => void;
}

export const AetheraNav: React.FC<AetheraNavProps> = ({
  cartCount,
  cartTotal,
  wishlistCount,
  comparisonCount,
  onOpenCart,
  onOpenWishlist,
  onOpenComparison,
  onOpenSearch,
  onSelectCategory,
  onBookShowroom,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* UAE VIP Notification Bar */}
      <div className="bg-[#090A0C] border-b border-white/5 text-[11px] tracking-wider text-white/70 py-1.5 px-4 hidden md:flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            UAE VIP Same-Day Delivery across Dubai & Abu Dhabi
          </span>
          <span className="text-white/20">|</span>
          <span className="flex items-center gap-1 text-white/60">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400/80" /> 2-Year Official UAE Warranty on all 210+ Gadgets
          </span>
        </div>
        <div className="flex items-center gap-5 text-white/60">
          <button 
            onClick={onBookShowroom}
            className="hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Showrooms: Dubai Mall & DIFC</span>
          </button>
          <span className="text-white/20">|</span>
          <a 
            href="https://wa.me/971523394001?text=Hello%20AETHERA,%20I%20would%20like%20to%20inquire%20about%20luxury%20gadgets."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-medium"
          >
            <span>WhatsApp Concierge: +971 52 339 4001</span>
          </a>
          <span className="text-white/20">|</span>
          <span className="text-amber-400/90 font-mono font-semibold">AED (Dirham)</span>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#090A0C]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3' 
            : 'bg-[#090A0C]/60 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Tag */}
            <div className="flex items-center gap-8">
              <a href="#hero" className="transition-transform duration-300 hover:opacity-95">
                <AetheraLogo size="md" />
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1 text-xs tracking-wider uppercase text-white/80 font-medium">
                {/* Categories Dropdown Trigger */}
                <div className="relative">
                  <button 
                    onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                    onMouseEnter={() => setCategoriesDropdownOpen(true)}
                    className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all flex items-center gap-1.5 text-white/90"
                  >
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>40 Categories</span>
                    <ChevronDown className={`w-3 h-3 text-white/40 transition-transform ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Dropdown */}
                  {categoriesDropdownOpen && (
                    <div 
                      onMouseLeave={() => setCategoriesDropdownOpen(false)}
                      className="absolute top-full left-0 mt-2 w-[720px] bg-[#0E0F12]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/80 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                        <div className="text-xs font-semibold text-white tracking-widest uppercase flex items-center gap-2">
                          <Crown className="w-3.5 h-3.5 text-amber-400" />
                          Curated Gadget Ecosystem (210+ Flagships)
                        </div>
                        <a 
                          href="#catalog" 
                          onClick={() => setCategoriesDropdownOpen(false)}
                          className="text-[11px] text-amber-400 hover:text-amber-300 font-medium"
                        >
                          View Full Catalog →
                        </a>
                      </div>

                      <div className="grid grid-cols-4 gap-2 max-h-[360px] overflow-y-auto pr-2 custom-scrollbar">
                        {GADGET_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => {
                              onSelectCategory(cat.name);
                              setCategoriesDropdownOpen(false);
                            }}
                            className="text-left px-2.5 py-2 rounded-lg bg-white/[0.02] hover:bg-amber-400/10 border border-white/5 hover:border-amber-400/30 transition-all group"
                          >
                            <div className="text-[11px] font-medium text-white/90 group-hover:text-amber-300 truncate">
                              {cat.name}
                            </div>
                            <div className="text-[10px] text-white/40 group-hover:text-amber-400/70">
                              {cat.count} Gadgets
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="#showcase" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Showcase
                </a>
                <a href="#edit" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  The Edit
                </a>
                <a href="#catalog" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all text-amber-400/90 font-semibold">
                  200+ Catalog
                </a>
                <a href="#ecosystem" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Setup Builder
                </a>
                <a href="#journal" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Tech Journal
                </a>
                <a href="#showrooms" className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-all">
                  Ateliers
                </a>
              </nav>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Instant Search Bar / Button */}
              <button 
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-xs tracking-wide transition-all shadow-inner"
                title="Search 210+ Gadgets (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Search Gadgets...</span>
                <kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-white/40 font-mono">⌘K</kbd>
              </button>

              {/* Comparison Drawer Trigger */}
              {comparisonCount > 0 && (
                <button
                  onClick={onOpenComparison}
                  className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all"
                  title="Compare Gadgets"
                >
                  <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-500 text-[10px] font-bold text-black flex items-center justify-center">
                    {comparisonCount}
                  </span>
                </button>
              )}

              {/* Wishlist Trigger */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all"
                title="Saved Wishlist"
              >
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : 'text-white/70'}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30 border border-amber-500/40 text-amber-300 font-medium text-xs tracking-wide transition-all shadow-lg shadow-amber-500/10 group"
              >
                <div className="relative">
                  <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-amber-400 text-black text-[10px] font-bold flex items-center justify-center animate-bounce">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col items-start text-left leading-tight">
                  <span className="text-[10px] text-white/50 uppercase">Bag</span>
                  <span className="text-[11px] font-mono font-bold text-amber-300">
                    AED {cartTotal.toLocaleString()}
                  </span>
                </div>
              </button>

              {/* VIP Showroom Booking Button */}
              <button
                onClick={onBookShowroom}
                className="hidden xl:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-amber-300 transition-all shadow-md shadow-white/10"
              >
                <Crown className="w-3.5 h-3.5 text-black" />
                <span>Book Atelier</span>
              </button>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white lg:hidden"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C0D10] border-b border-white/10 px-4 py-6 mt-3 space-y-4 animate-in slide-in-from-top-4">
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a 
                href="#catalog" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 flex items-center gap-2"
              >
                <Layers className="w-4 h-4" /> 210+ Catalog
              </a>
              <a 
                href="#showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-400" /> Living Showcase
              </a>
              <a 
                href="#edit" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                The Edit
              </a>
              <a 
                href="#ecosystem" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                Setup Builder
              </a>
              <a 
                href="#journal" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                Tech Journal
              </a>
              <a 
                href="#showrooms" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-amber-400" /> UAE Showrooms
              </a>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  onBookShowroom();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider text-center"
              >
                Book VIP Atelier Fitting
              </button>
              <a
                href="https://wa.me/971523394001?text=Hello%20AETHERA,%20I%20would%20like%20to%20inquire%20about%20luxury%20gadgets."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-medium text-xs tracking-wider text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp VIP Concierge
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
