'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Search, Menu, X, Crown, MessageCircle, Scissors, Sparkles, Calendar, Globe } from 'lucide-react';
import { NOURA_BRAND } from '@/data/nouraAbayaData';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface NouraNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenCustomizer?: () => void;
  onOpenLookbook?: () => void;
  onOpenAtelierBooking?: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const NouraNav: React.FC<NouraNavProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenCustomizer,
  onOpenLookbook,
  onOpenAtelierBooking,
  searchQuery,
  setSearchQuery,
}) => {
  const { language, toggleLanguage, isRtl, t } = useNouraLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'collections', label: t('navCollections') },
    { id: 'catalog', label: t('navCatalog') },
    { id: 'signature', label: isRtl ? 'التوقيع الملكي' : 'Signature Line' },
    { id: 'occasion', label: isRtl ? 'المناسبات والأعياد' : 'Occasion Edit' },
    { id: 'delivery', label: isRtl ? 'الشحن والتوصيل' : 'UAE Delivery' },
    { id: 'story', label: t('navAbout') },
    { id: 'faq', label: t('navFaq') },
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
      {/* Top Banner Notice */}
      <div className="bg-[#121212] text-stone-300 py-1.5 sm:py-2 px-3 sm:px-4 text-center font-mono text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest border-b border-stone-800 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        <Crown className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
        <span>{t('topBarDelivery')}</span>
      </div>

      <header
        className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-stone-800 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Brand Logo */}
            <div className="flex items-center gap-6">
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] p-0.5 shadow-lg group-hover:scale-105 transition-transform shrink-0">
                  <div className="w-full h-full bg-[#0A0A0A] rounded-[10px] flex items-center justify-center">
                    <span className="font-serif font-black text-sm text-[#C5A059]">{isRtl ? 'ن' : 'N'}</span>
                  </div>
                </div>
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-lg sm:text-xl font-serif font-extrabold text-[#FAFAFA] tracking-[0.08em] sm:tracking-[0.15em] leading-none">
                    {t('brandName')}
                  </span>
                  <span className="text-[8px] font-mono font-bold text-[#C5A059] tracking-[0.12em] sm:tracking-[0.2em] uppercase mt-0.5">
                    {isRtl ? 'دبي • هوت كوتور إماراتي' : 'DUBAI • HAUTE COUTURE'}
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Nav Links */}
            <nav className="hidden xl:flex items-center gap-1 font-serif text-xs font-medium text-stone-300">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-3 py-1.5 rounded-lg hover:text-[#C5A059] hover:bg-white/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Icons & Interactive Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-[#C5A059] transition-all"
                title={isRtl ? 'Switch to English' : 'التحويل إلى العربية'}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'EN' : 'العربية'}</span>
              </button>

              {/* Bespoke Studio Button */}
              {onOpenCustomizer && (
                <button
                  onClick={onOpenCustomizer}
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C5A059]/10 hover:bg-[#C5A059]/20 border border-[#C5A059]/30 text-[#C5A059] font-mono text-xs font-bold transition-all"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>{t('navBespoke')}</span>
                </button>
              )}

              {/* Lookbook Button */}
              {onOpenLookbook && (
                <button
                  onClick={onOpenLookbook}
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 font-mono text-xs font-bold transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{t('navLookbook')}</span>
                </button>
              )}

              {/* Atelier Booking Button */}
              {onOpenAtelierBooking && (
                <button
                  onClick={onOpenAtelierBooking}
                  className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-300 font-mono text-xs font-bold transition-all"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>{t('navAtelier')}</span>
                </button>
              )}

              {/* Search Toggle */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center bg-[#121212] border border-stone-700 rounded-xl px-3 py-1.5 text-xs text-white">
                    <Search className="w-3.5 h-3.5 text-[#C5A059] mx-1 shrink-0" />
                    <input
                      type="text"
                      placeholder={t('navSearchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent focus:outline-none w-36 sm:w-56 text-white placeholder-stone-500 text-xs"
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

              {/* Wishlist Button */}
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

              {/* Shopping Bag Button */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 px-3 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] text-black font-bold hover:scale-105 transition-all shadow-lg flex items-center gap-1.5"
                aria-label="Shopping Bag"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="font-mono text-xs font-black">{cartCount}</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2.5 rounded-xl bg-[#121212] border border-stone-800 text-stone-300"
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
            className="fixed inset-x-0 top-[88px] z-40 bg-[#0A0A0A]/95 border-b border-stone-800 backdrop-blur-2xl p-6 xl:hidden shadow-2xl font-serif text-stone-200"
          >
            <div className="flex flex-col gap-4">
              
              <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                <span className="text-xs text-stone-400 font-mono">{t('brandTagline')}</span>
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-1.5 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold flex items-center gap-1"
                >
                  <Globe className="w-3 h-3" />
                  <span>{language === 'ar' ? 'English' : 'العربية'}</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-200 font-bold text-xs text-left rtl:text-right hover:text-[#C5A059]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-stone-800 font-mono text-xs">
                {onOpenCustomizer && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenCustomizer();
                    }}
                    className="w-full py-3 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] font-bold flex items-center justify-center gap-2"
                  >
                    <Scissors className="w-4 h-4" />
                    <span>{t('customizerTitle')}</span>
                  </button>
                )}

                {onOpenLookbook && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenLookbook();
                    }}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#C5A059]" />
                    <span>{t('lookbookTitle')}</span>
                  </button>
                )}

                {onOpenAtelierBooking && (
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenAtelierBooking();
                    }}
                    className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A059]" />
                    <span>{t('bookingTitle')}</span>
                  </button>
                )}

                <a
                  href={NOURA_BRAND.whatsapp}
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
