import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Calendar, Menu, X, Crown, SlidersHorizontal, Phone, ShieldCheck } from 'lucide-react';
import { MaisonLogo } from './MaisonLogo';

interface JewelryNavProps {
  cartCount?: number;
  wishlistCount?: number;
  compareCount?: number;
  onOpenCart?: () => void;
  onOpenWishlist?: () => void;
  onOpenComparator?: () => void;
  onOpenConsultation?: () => void;
  onOpenSearch?: () => void;
}

export const JewelryNav: React.FC<JewelryNavProps> = ({
  cartCount = 0,
  wishlistCount = 0,
  compareCount = 0,
  onOpenCart,
  onOpenWishlist,
  onOpenComparator,
  onOpenConsultation,
  onOpenSearch,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CMD+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (onOpenSearch) onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinks = [
    { label: 'Disciplines', href: '#disciplines' },
    { label: '160 Masterpieces', href: '#jewelry-catalog' },
    { label: 'Bespoke Atelier', href: '#bespoke-builder' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Bridal Suite', href: '#bridal' },
    { label: 'Gemstones', href: '#gemstones' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* UAE Performance Telemetry & Armored Delivery Top Bar */}
      <div className="bg-[#080706] border-b border-amber-500/20 py-2 px-3 sm:px-6 text-[11px] font-mono text-zinc-300 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] uppercase font-bold text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            HAUTE JOAILLERIE ATELIER
          </span>
          <span className="hidden md:inline text-zinc-400">
            DIFC Gate Village Vault: <strong className="text-emerald-400 font-bold">Open</strong> • Armored Courier: <strong className="text-white font-bold">Complimentary Across UAE</strong>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
          <span className="hidden lg:inline text-zinc-400">
            Private Salon Concierge: <strong className="text-white">+971 4 398 5500</strong>
          </span>
          <a
            href="https://wa.me/971508822000?text=Hi%20Maison%20D'Or%20Dubai!%20I%20would%20like%20to%20inquire%20about%20a%20private%20appointment."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
          >
            <Phone className="w-3 h-3" />
            <span>WhatsApp VIP</span>
          </a>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#090807]/95 backdrop-blur-xl border-b border-amber-500/20 py-3 shadow-2xl shadow-black/80'
            : 'bg-[#090807]/80 backdrop-blur-md border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Mobile hamburger & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <MaisonLogo size="md" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-mono text-zinc-300 hover:text-amber-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Interactive Utility Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* ⌘K Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 hover:text-white font-mono transition-all"
              title="Search 160 Jewels (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline px-1.5 py-0.5 rounded bg-black/50 text-[9px] text-zinc-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Comparator Drawer Trigger */}
            {onOpenComparator && (
              <button
                onClick={onOpenComparator}
                className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
                title="Compare Jewels"
              >
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                {compareCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-zinc-950 text-[9px] font-mono font-bold flex items-center justify-center animate-bounce">
                    {compareCount}
                  </span>
                )}
              </button>
            )}

            {/* Wishlist Drawer Trigger */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
              title="View Wishlist"
            >
              <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-amber-400 fill-amber-400' : 'text-zinc-400'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-zinc-950 text-[9px] font-mono font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
              title="View Acquisition Bag"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-amber-500 text-zinc-950 text-[9px] font-mono font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book Private Viewing Appointment */}
            <button
              onClick={onOpenConsultation}
              className="px-3.5 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-zinc-950 font-black text-xs font-mono uppercase tracking-wider sm:tracking-widest shadow-lg shadow-amber-950/40 flex items-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0 text-zinc-950" />
              <span className="hidden sm:inline">Book Salon Viewing</span>
              <span className="sm:hidden">Viewing</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl xl:hidden flex justify-end"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="w-full max-w-sm bg-[#110F0E] h-full p-6 border-l border-amber-500/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-500/10">
                  <MaisonLogo size="sm" />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm uppercase font-mono tracking-widest text-zinc-200 hover:text-amber-400 py-2.5 border-b border-white/5 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-amber-950/40"
                >
                  <Calendar className="w-4 h-4" /> Book DIFC Salon Viewing
                </button>

                <div className="text-center text-[10px] font-mono text-zinc-500 uppercase">
                  DIFC Gate Village • The Dubai Mall Fashion Avenue
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
