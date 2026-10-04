import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Heart, SlidersHorizontal, Calendar, UtensilsCrossed, Phone, Menu, X, Globe } from 'lucide-react';
import { AlSultanLogo } from './AlSultanLogo';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface RestaurantNavProps {
  onOpenSearch: () => void;
  onOpenComparator: () => void;
  comparedCount: number;
  onOpenSaved: () => void;
  savedCount: number;
  onOpenReservation: () => void;
}

export const RestaurantNav: React.FC<RestaurantNavProps> = ({
  onOpenSearch,
  onOpenComparator,
  comparedCount,
  onOpenSaved,
  savedCount,
  onOpenReservation
}) => {
  const { language, isRtl, toggleLanguage, t, toArabicDigits } = useRestaurantLanguage();
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
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/work/restaurant-cafe" className="flex items-center">
          <AlSultanLogo size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-serif tracking-wider uppercase text-zinc-300">
          <a href="#disciplines" className="hover:text-amber-300 transition-colors">
            {t('navDisciplines')}
          </a>
          <a href="#menu-catalog" className="hover:text-amber-300 transition-colors">
            {t('navCatalog')}
          </a>
          <a href="#private-dining-estimator" className="hover:text-amber-300 transition-colors">
            {t('navBanquets')}
          </a>
          <a href="#chefs" className="hover:text-amber-300 transition-colors">
            {t('navChefs')}
          </a>
          <a href="#locations" className="hover:text-amber-300 transition-colors">
            {t('navSalons')}
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all text-xs font-bold"
            title={language === 'en' ? 'التحويل إلى اللغة العربية' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* ⌘K Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 transition-colors text-xs"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-sans">{t('navSearchPlaceholder')}</span>
            <kbd className="px-1.5 py-0.5 rounded text-[10px] bg-zinc-800 text-zinc-400 font-mono border border-zinc-700">
              ⌘K
            </kbd>
          </button>

          {/* Compare Button */}
          {comparedCount > 0 && (
            <button
              onClick={onOpenComparator}
              className="relative p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors"
              title={isRtl ? 'مقارنة الأطباق' : 'Compare Dishes'}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 rtl:right-auto rtl:-left-1.5 w-5 h-5 rounded-full bg-amber-500 text-zinc-950 font-bold text-[10px] flex items-center justify-center font-mono">
                {isRtl ? toArabicDigits(comparedCount) : comparedCount}
              </span>
            </button>
          )}

          {/* Saved Wishlist Button */}
          <button
            onClick={onOpenSaved}
            className="relative p-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors"
            title={isRtl ? 'قائمة التذوق المفضلة' : 'Tasting Wishlist'}
          >
            <Heart className={`w-4 h-4 ${savedCount > 0 ? 'text-red-400 fill-current' : ''}`} />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 rtl:right-auto rtl:-left-1.5 w-5 h-5 rounded-full bg-red-500 text-white font-bold text-[10px] flex items-center justify-center font-mono">
                {isRtl ? toArabicDigits(savedCount) : savedCount}
              </span>
            )}
          </button>

          {/* AED Currency Indicator */}
          <div className="hidden md:flex items-center px-2.5 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] font-mono text-amber-400">
            {isRtl ? 'د.إ (AED)' : 'AED (د.إ)'}
          </div>

          {/* Reserve Table CTA */}
          <button
            onClick={onOpenReservation}
            className="px-4 sm:px-5 py-2.5 rounded-xl font-bold font-sans text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-md shadow-amber-950/40 transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('navReserveTable')}</span>
            <span className="sm:hidden">{t('navBookShort')}</span>
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

      {/* Mobile Drawer Menu */}
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
            <span>{t('navSearchPlaceholder')}</span>
          </button>

          <nav className="flex flex-col space-y-3 text-sm font-serif tracking-wider text-zinc-300">
            <a
              href="#disciplines"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              {t('navDisciplines')}
            </a>
            <a
              href="#menu-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              {t('navCatalog')}
            </a>
            <a
              href="#private-dining-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              {t('navBanquets')}
            </a>
            <a
              href="#chefs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              {t('navChefs')}
            </a>
            <a
              href="#locations"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-amber-400"
            >
              {t('navSalons')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

