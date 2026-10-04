'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Snowflake,
  Search,
  ShoppingCart,
  Layers,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  Sun,
  Moon,
  Globe
} from 'lucide-react';
import { FROZEN_BRAND, FROZEN_CATEGORIES } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyNavProps {
  cartCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenCompare: () => void;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const FrozenSupplyNav: React.FC<FrozenSupplyNavProps> = ({
  cartCount,
  compareCount,
  onOpenCart,
  onOpenCompare,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onScrollToSection
}) => {
  const { isDark, toggleTheme } = useFrozenSupplyTheme();
  const { isRtl, language, toggleLanguage, t } = useFrozenSupplyLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top B2B Commercial Utility Bar */}
      <div className={`border-b text-xs py-1.5 px-4 sm:px-8 hidden md:flex items-center justify-between font-mono transition-colors duration-200 ${
        isDark 
          ? 'bg-[#050B14] border-[#1E293B] text-slate-300' 
          : 'bg-slate-100 border-slate-200 text-slate-700'
      }`}>
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            {t('topBarHub')}
          </span>
          <span className="text-slate-500 dark:text-slate-400 hidden xl:inline">
            {t('topBarDelivery')}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            ESMA 100% Halal & HACCP Certified
          </span>
          <a
            href={FROZEN_BRAND.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 font-bold"
          >
            <span>Procurement Hotline: +971 4 882 7400</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 sm:px-8 transition-all duration-300 ${
          isScrolled
            ? isDark
              ? 'bg-[#080E1A]/95 backdrop-blur-xl border-b border-cyan-900/30 py-3 shadow-2xl shadow-black/60'
              : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-lg shadow-slate-200/50'
            : isDark
              ? 'bg-[#080E1A]/80 backdrop-blur-md border-b border-slate-800/60 py-3.5'
              : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <button
            onClick={() => onScrollToSection('top')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Snowflake className="w-6 h-6 animate-[spin_12s_linear_infinite]" />
            </div>
            <div>
              <span className={`text-lg font-black tracking-tight block ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                FROZEN<span className="text-cyan-500">SUPPLY</span>
                <span className={`text-xs ml-1.5 px-1.5 py-0.5 rounded border font-mono font-bold ${
                  isDark
                    ? 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                    : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                }`}>
                  B2B UAE
                </span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-mono block">
                {isRtl ? 'توريد الأغذية المجمدة وسلسلة التبريد' : 'Commercial Cold-Chain Foodservice'}
              </span>
            </div>
          </button>

          {/* Center Navigation Links & Category Dropdown */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-semibold text-slate-700 dark:text-slate-300">
            
            <div className="relative">
              <button
                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                onMouseEnter={() => setCategoryDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'hover:text-white hover:bg-slate-800/60'
                    : 'hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{t('navCategories')} (8)</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180 text-cyan-500' : ''}`} />
              </button>

              <AnimatePresence>
                {categoryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseLeave={() => setCategoryDropdownOpen(false)}
                    className={`absolute top-full ${isRtl ? 'right-0' : 'left-0'} w-[580px] mt-2 p-4 rounded-2xl shadow-2xl backdrop-blur-2xl grid grid-cols-2 gap-2 z-50 border ${
                      isDark
                        ? 'bg-[#0A1120] border-cyan-900/50 shadow-black/80'
                        : 'bg-white border-slate-200 shadow-slate-300/60'
                    }`}
                  >
                    {FROZEN_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onSelectCategory(cat.id);
                          setCategoryDropdownOpen(false);
                          onScrollToSection('catalog');
                        }}
                        className={`flex items-start gap-3 p-2.5 rounded-xl border text-left transition-all group ${
                          isDark
                            ? 'border-transparent hover:bg-cyan-950/40 hover:border-cyan-500/20'
                            : 'border-transparent hover:bg-cyan-50/60 hover:border-cyan-200'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center transition-colors ${
                          isDark
                            ? 'bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black'
                            : 'bg-slate-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white'
                        }`}>
                          <Snowflake className="w-4 h-4" />
                        </div>
                        <div>
                          <div className={`text-xs font-bold transition-colors ${
                            isDark
                              ? 'text-white group-hover:text-cyan-300'
                              : 'text-slate-900 group-hover:text-cyan-600'
                          }`}>
                            {isRtl && cat.nameAr ? cat.nameAr : cat.name}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[190px]">
                            {cat.tempZone} • {cat.itemCount} SKUs
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => onScrollToSection('catalog')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isDark ? 'hover:text-white hover:bg-slate-800/60' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('navCatalog')} (216+)
            </button>

            <button
              onClick={() => onScrollToSection('cold-chain')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isDark ? 'hover:text-white hover:bg-slate-800/60' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('navColdChain')}
            </button>

            <button
              onClick={() => onScrollToSection('trust-faq')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isDark ? 'hover:text-white hover:bg-slate-800/60' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {t('navTrustFaq')}
            </button>
          </div>

          {/* Right Action Controls: Search, Theme Toggle, Language Toggle, Compare & RFQ Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className={`flex items-center border rounded-xl px-3 py-1.5 shadow-inner ${
                  isDark
                    ? 'bg-[#050B14] border-cyan-500/40'
                    : 'bg-slate-50 border-cyan-500'
                }`}>
                  <Search className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder={t('searchPlaceholder')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className={`bg-transparent text-xs sm:text-sm focus:outline-none w-40 sm:w-60 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-white ml-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-colors ${
                    isDark
                      ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300 hover:text-white'
                      : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-900'
                  }`}
                  aria-label="Open Search"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Language Switcher (EN / AR) */}
            <button
              onClick={toggleLanguage}
              className={`h-9 sm:h-10 px-2.5 sm:px-3 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition-all ${
                isDark
                  ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-cyan-400'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-cyan-700'
              }`}
              title="Toggle English / Arabic"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-colors ${
                isDark
                  ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-amber-400 hover:text-amber-300'
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-900'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Product Comparison Trigger */}
            <button
              onClick={onOpenCompare}
              className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center transition-all ${
                compareCount > 0
                  ? isDark
                    ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-500/20'
                    : 'bg-cyan-100 border-cyan-500 text-cyan-800 shadow-md shadow-cyan-500/10'
                  : isDark
                    ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                    : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700'
              }`}
              title={t('navCompare')}
            >
              <Layers className="w-4 h-4" />
              {compareCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-cyan-500 text-black text-[10px] font-mono font-bold flex items-center justify-center shadow-lg">
                  {compareCount}
                </span>
              )}
            </button>

            {/* B2B Supply Request Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
            >
              <ShoppingCart className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">{t('navRequestQuote')}</span>
              <span className="w-5 h-5 rounded-full bg-slate-950 text-cyan-300 font-mono text-[11px] font-black flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center ${
                isDark
                  ? 'bg-slate-800/60 border-slate-700/60 text-slate-300'
                  : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden mt-4 pt-4 border-t space-y-3 pb-3 ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}
            >
              <div className="grid grid-cols-2 gap-2">
                {FROZEN_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      setMobileMenuOpen(false);
                      onScrollToSection('catalog');
                    }}
                    className={`p-2.5 rounded-lg border text-left text-xs ${
                      isDark
                        ? 'bg-slate-900/90 border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="font-bold block truncate">{isRtl && cat.nameAr ? cat.nameAr : cat.name}</span>
                    <span className="text-[10px] text-cyan-500 font-mono">{cat.tempZone}</span>
                  </button>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToSection('catalog');
                  }}
                  className={`w-full py-2.5 text-center rounded-lg font-bold ${
                    isDark ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-900'
                  }`}
                >
                  {t('heroExploreCatalog')}
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onScrollToSection('cold-chain');
                  }}
                  className={`w-full py-2.5 text-center rounded-lg ${
                    isDark ? 'bg-slate-900 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {t('navColdChain')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};
