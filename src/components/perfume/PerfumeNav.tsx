import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, SlidersHorizontal, ShoppingBag, Droplets, Menu, X, Gift } from 'lucide-react';
import { OudRoyaleLogo } from './OudRoyaleLogo';

interface PerfumeNavProps {
  onOpenSearch: () => void;
  onOpenComparator: () => void;
  comparedCount: number;
  onOpenWishlist: () => void;
  wishlistCount: number;
  onOpenCart: () => void;
  cartCount: number;
  onOpenCoffretBuilder: () => void;
}

export const PerfumeNav: React.FC<PerfumeNavProps> = ({
  onOpenSearch,
  onOpenComparator,
  comparedCount,
  onOpenWishlist,
  wishlistCount,
  onOpenCart,
  cartCount,
  onOpenCoffretBuilder
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-amber-900/30 py-3 shadow-xl shadow-black/50'
          : 'bg-gradient-to-b from-zinc-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/work/perfume-fragrance" className="flex items-center">
          <OudRoyaleLogo size="md" />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-serif tracking-wider uppercase text-zinc-300">
          <a href="#families" className="hover:text-amber-300 transition-colors">
            Olfactory Families
          </a>
          <a href="#perfume-catalog" className="hover:text-amber-300 transition-colors">
            160 Flacons Registry
          </a>
          <a href="#coffret-builder" className="hover:text-amber-300 transition-colors">
            Bespoke Coffrets
          </a>
          <a href="#boutiques" className="hover:text-amber-300 transition-colors">
            Boutiques & Salons
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* ⌘K Search */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors text-xs"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-sans">Search 160 scents...</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-400 font-mono border border-zinc-700">
              ⌘K
            </kbd>
          </button>

          {/* Scent Comparator */}
          {comparedCount > 0 && (
            <button
              onClick={onOpenComparator}
              className="relative p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors"
              title="Compare Scents"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-500 text-zinc-950 font-bold text-[10px] flex items-center justify-center font-mono">
                {comparedCount}
              </span>
            </button>
          )}

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
            title="Scent Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-red-400 fill-current' : ''}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white font-bold text-[10px] flex items-center justify-center font-mono">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Currency indicator */}
          <div className="hidden md:flex items-center px-2.5 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-amber-400">
            AED (د.إ)
          </div>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="px-4 sm:px-5 py-2.5 rounded-xl font-bold font-sans text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-md shadow-amber-950/40 transition-all flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Fragrance Box</span>
            <span className="sm:hidden">Cart</span>
            {cartCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-zinc-950 text-amber-300 text-[10px] font-mono">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-zinc-950/95 border-b border-zinc-800 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs"
          >
            <Search className="w-4 h-4 text-amber-400" />
            <span>Search 160 Scent Flacons...</span>
          </button>

          <nav className="flex flex-col space-y-3 text-sm font-serif tracking-wider text-zinc-300">
            <a
              href="#families"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              Olfactory Families
            </a>
            <a
              href="#perfume-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              160 Flacons Registry
            </a>
            <a
              href="#coffret-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              Bespoke Coffret Simulator
            </a>
            <a
              href="#boutiques"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              Dubai Boutiques & Concierge
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
