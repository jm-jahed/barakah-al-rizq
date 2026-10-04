'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Heart, Search, Menu, X, Leaf, MessageCircle, MapPin, Globe } from 'lucide-react';
import { FRESHAURA_BRAND } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface FreshauraNavProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

export const FreshauraNav: React.FC<FreshauraNavProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  searchQuery,
  setSearchQuery,
  selectedCity,
  setSelectedCity,
}) => {
  const { language, toggleLanguage, setLanguage, isRtl, t, formatNumber } = useFreshauraLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'categories', label: t('navCategories') },
    { id: 'catalog', label: t('navProduce') },
    { id: 'fruit-builder', label: t('navFruitBoxes') },
    { id: 'veg-boxes', label: t('navVegBoxes') },
    { id: 'deals', label: t('navDailyDeals') },
    { id: 'wholesale', label: t('navWholesale') },
    { id: 'delivery', label: t('navDelivery') },
    { id: 'faq', label: t('navFAQ') },
  ];

  const cityOptions = [
    { id: 'Dubai', en: 'Dubai', ar: 'دبي' },
    { id: 'Abu Dhabi', en: 'Abu Dhabi', ar: 'أبوظبي' },
    { id: 'Sharjah', en: 'Sharjah', ar: 'الشارقة' },
    { id: 'Ajman', en: 'Ajman', ar: 'عجمان' },
    { id: 'Al Ain', en: 'Al Ain', ar: 'العين' },
    { id: 'Ras Al Khaimah', en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
    { id: 'Fujairah', en: 'Fujairah', ar: 'الفجيرة' },
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

  const getCityName = (id: string) => {
    const found = cityOptions.find((c) => c.id === id);
    return isRtl && found ? found.ar : found ? found.en : id;
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#064E3B] text-[#FBF9F5] py-2 px-4 text-center font-mono text-[11px] font-bold tracking-wider border-b border-emerald-800 flex items-center justify-center gap-2">
        <Leaf className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
        <span>
          {isRtl
            ? `توصيل طازج في نفس اليوم عبر ${getCityName(selectedCity)} | ${t('freeDeliveryBadge')}`
            : `SAME-DAY FRESH PRODUCE DELIVERY ACROSS ${selectedCity.toUpperCase()} | ${t('freeDeliveryBadge')}`}
        </span>
      </div>

      <header
        className={`fixed top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#042F2E]/95 backdrop-blur-xl border-b border-emerald-500/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#042F2E]/90 via-[#042F2E]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left Logo */}
            <div className="flex items-center gap-4 lg:gap-6">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 via-teal-500 to-[#064E3B] p-0.5 shadow-lg group-hover:scale-105 transition-transform shrink-0">
                  <div className="w-full h-full bg-[#042F2E] rounded-[10px] flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-extrabold text-[#FBF9F5] tracking-[0.15em] leading-none">
                    {t('brandName')}
                  </span>
                  <span className="text-[8px] font-mono font-bold text-emerald-400 tracking-[0.2em] uppercase mt-0.5">
                    {isRtl ? 'فواكه وخضار طازجة • الإمارات' : 'FRESH GROCERY • UAE'}
                  </span>
                </div>
              </a>
            </div>

            {/* Middle Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-serif text-xs font-medium text-stone-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-2.5 py-1.5 rounded-lg hover:text-emerald-400 hover:bg-white/5 transition-all text-stone-200 whitespace-nowrap"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Controls: Language Switcher, City, Search, Cart & WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Language Switcher Button */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 border border-emerald-500/40 text-xs font-bold text-emerald-200 transition-all hover:scale-105 shadow-md"
                title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{language === 'en' ? 'العربية' : 'EN'}</span>
              </button>

              {/* City Location Select */}
              <div className="hidden md:flex items-center gap-1 bg-[#064E3B] px-3 py-1.5 rounded-xl border border-emerald-600/40 text-xs font-mono text-white">
                <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-transparent text-white font-bold focus:outline-none cursor-pointer"
                >
                  {cityOptions.map((c) => (
                    <option key={c.id} value={c.id} className="bg-[#042F2E]">
                      {isRtl ? c.ar : c.en}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Toggle */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center bg-[#064E3B] border border-emerald-500/40 rounded-xl px-3 py-1.5 text-xs text-white">
                    <Search className={`w-3.5 h-3.5 text-emerald-300 ${isRtl ? 'ml-2' : 'mr-2'}`} />
                    <input
                      type="text"
                      placeholder={t('searchPlaceholder')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent focus:outline-none w-36 sm:w-52 text-white placeholder-stone-300"
                      autoFocus
                    />
                    <button onClick={() => setIsSearchOpen(false)} className={`text-stone-300 hover:text-white ${isRtl ? 'mr-2' : 'ml-2'}`}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2.5 rounded-xl bg-[#064E3B] border border-emerald-600/40 text-stone-200 hover:text-emerald-300"
                    aria-label="Search Produce"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Wishlist Icon */}
              <button
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-xl bg-[#064E3B] border border-emerald-600/40 text-stone-200 hover:text-emerald-300"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 text-black font-mono text-[9px] font-bold flex items-center justify-center">
                    {formatNumber(wishlistCount)}
                  </span>
                )}
              </button>

              {/* Cart Icon */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-all shadow-lg flex items-center gap-1.5"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="font-mono text-xs font-black">{formatNumber(cartCount)}</span>
              </button>

              {/* WhatsApp Quick Order */}
              <a
                href={FRESHAURA_BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isRtl ? 'طلب واتساب' : 'WhatsApp'}</span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-[#064E3B] border border-emerald-600/40 text-stone-200"
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
            className="fixed inset-x-0 top-[88px] z-40 bg-[#042F2E]/95 border-b border-emerald-800 backdrop-blur-2xl p-6 lg:hidden shadow-2xl font-serif text-stone-200"
          >
            <div className="flex flex-col gap-4">
              
              {/* Language Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/80 border border-emerald-600/30">
                <span className="text-xs font-mono text-stone-300">{isRtl ? 'اللغة' : 'Language'}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === 'en' ? 'bg-emerald-500 text-black' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ar')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      language === 'ar' ? 'bg-emerald-500 text-black' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>

              {/* Mobile Emirate Selector */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/80 border border-emerald-600/30 font-mono text-xs">
                <span className="text-stone-300">{t('deliveringTo')}</span>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-[#042F2E] text-emerald-300 font-bold px-3 py-1.5 rounded-lg border border-emerald-600/40"
                >
                  {cityOptions.map((c) => (
                    <option key={c.id} value={c.id}>
                      {isRtl ? c.ar : c.en}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-200 font-bold text-xs hover:text-emerald-400 text-start"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-2 border-t border-emerald-800 font-mono">
                <a
                  href={FRESHAURA_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{isRtl ? 'طلب الخضار والفواكه عبر واتساب (+٩٧١ ٥٠)' : 'WhatsApp Grocery Ordering (+971 50)'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
