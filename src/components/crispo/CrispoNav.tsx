'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ShoppingBag, Menu, X, Phone, Flame, MapPin, Globe } from 'lucide-react';
import { CRISPO_BRAND } from '@/data/crispoData';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

interface CrispoNavProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCheckout: () => void;
  activeOrderMode: 'Delivery' | 'Pickup' | 'DineIn';
  setActiveOrderMode: (mode: 'Delivery' | 'Pickup' | 'DineIn') => void;
}

export const CrispoNav: React.FC<CrispoNavProps> = ({
  cartCount,
  onOpenCart,
  onOpenCheckout,
  activeOrderMode,
  setActiveOrderMode,
}) => {
  const { language, setLanguage, toggleLanguage, isRtl, t } = useCrispoLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'menu', label: t('navMenu') },
    { id: 'combos', label: t('navCombos') },
    { id: 'offers', label: t('navOffers') },
    { id: 'tracking', label: t('navTracking') },
    { id: 'rewards', label: t('navRewards') },
    { id: 'locations', label: t('navLocations') },
    { id: 'faq', label: t('faqTitle') },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#12100E]/95 backdrop-blur-xl border-b border-[#E63946]/30 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#12100E]/95 via-[#12100E]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-4 lg:gap-6">

              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#E63946] via-[#FF4757] to-[#FFC107] p-0.5 shadow-lg shadow-[#E63946]/30 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#12100E] rounded-[14px] flex items-center justify-center">
                    <Flame className="w-6 h-6 text-[#FFC107]" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#FAF6EE] tracking-tighter italic font-sans leading-none">
                    {t('brandName')}<span className="text-[#E63946]">!</span>
                  </span>
                  <span className="text-[9px] font-extrabold text-[#FFC107] tracking-widest uppercase font-mono">
                    {t('brandTagline')}
                  </span>
                </div>
              </a>
            </div>

            {/* Middle: Order Mode Selector & Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              
              {/* Delivery / Pickup Mode Toggle */}
              <div className="flex items-center bg-[#1A1715] p-1 rounded-full border border-stone-800 font-mono text-xs">
                <button
                  onClick={() => setActiveOrderMode('Delivery')}
                  className={`px-3.5 py-1.5 rounded-full font-bold transition-all ${
                    activeOrderMode === 'Delivery'
                      ? 'bg-[#E63946] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  🚗 {t('orderModeDelivery')}
                </button>
                <button
                  onClick={() => setActiveOrderMode('Pickup')}
                  className={`px-3.5 py-1.5 rounded-full font-bold transition-all ${
                    activeOrderMode === 'Pickup'
                      ? 'bg-[#E63946] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  🏃 {t('orderModePickup')}
                </button>
                <button
                  onClick={() => setActiveOrderMode('DineIn')}
                  className={`px-3.5 py-1.5 rounded-full font-bold transition-all ${
                    activeOrderMode === 'DineIn'
                      ? 'bg-[#E63946] text-white shadow-md'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  🍽️ {t('orderModeDineIn')}
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex items-center gap-1 font-sans text-xs font-bold text-stone-300">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-2.5 py-1.5 rounded-lg hover:text-[#FFC107] hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

            </div>

            {/* Right: Language Switcher, Cart Button & Order Now CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Bilingual Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#1A1715] hover:bg-stone-800 border border-stone-800 text-stone-200 text-xs font-bold transition-all hover:border-[#FFC107]/40 shadow-md"
                aria-label="Toggle Language"
                title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
              >
                <Globe className="w-3.5 h-3.5 text-[#FFC107]" />
                <span className="font-mono text-[11px] font-bold">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </button>

              {/* Cart Drawer Trigger */}
              <button
                onClick={onOpenCart}
                className="relative p-2.5 rounded-2xl bg-[#1A1715] hover:bg-stone-800 border border-stone-800 text-white transition-all shadow-md group"
                aria-label="View Cart"
              >
                <ShoppingBag className="w-5 h-5 text-[#FFC107] group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 rtl:right-auto rtl:-left-1.5 w-5 h-5 rounded-full bg-[#E63946] text-white font-mono text-[10px] font-black flex items-center justify-center shadow-md border border-[#12100E]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              <button
                onClick={onOpenCheckout}
                className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#E63946] via-[#FF4757] to-[#FF3300] hover:from-[#d12e3b] hover:to-[#e62e00] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-[#E63946]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t('navOrderNow')}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-2xl bg-[#1A1715] border border-stone-800 text-stone-300"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#12100E]/95 border-b border-stone-800 backdrop-blur-2xl p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4 font-sans">
              <div className="flex items-center justify-end">

                {/* Mobile Language Toggle */}
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-[#FFC107] text-xs font-bold font-mono"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'العربية (RTL)' : 'English (LTR)'}</span>
                </button>
              </div>

              {/* Order Mode Toggle */}
              <div className="grid grid-cols-3 gap-1 bg-[#1A1715] p-1 rounded-xl border border-stone-800 font-mono text-xs text-center">
                <button
                  onClick={() => setActiveOrderMode('Delivery')}
                  className={`py-2 rounded-lg font-bold ${activeOrderMode === 'Delivery' ? 'bg-[#E63946] text-white' : 'text-stone-400'}`}
                >
                  🚗 {t('orderModeDelivery')}
                </button>
                <button
                  onClick={() => setActiveOrderMode('Pickup')}
                  className={`py-2 rounded-lg font-bold ${activeOrderMode === 'Pickup' ? 'bg-[#E63946] text-white' : 'text-stone-400'}`}
                >
                  🏃 {t('orderModePickup')}
                </button>
                <button
                  onClick={() => setActiveOrderMode('DineIn')}
                  className={`py-2 rounded-lg font-bold ${activeOrderMode === 'DineIn' ? 'bg-[#E63946] text-white' : 'text-stone-400'}`}
                >
                  🍽️ {t('orderModeDineIn')}
                </button>
              </div>

              {/* Mobile Links */}
              <div className="grid grid-cols-2 gap-2 my-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-stone-300 font-bold text-xs text-left rtl:text-right hover:text-[#FFC107]"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCheckout();
                }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E63946] to-[#FF3300] text-white text-xs font-black uppercase tracking-wider shadow-xl"
              >
                {t('navOrderNow')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
