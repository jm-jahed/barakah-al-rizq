'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { useSupermarketTheme } from '../../context/SupermarketThemeContext';
import { SUPERMARKET_CATEGORIES, SUPERMARKET_PRODUCTS, SupermarketProduct } from '../../data/supermarketData';
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Percent,
  ShieldCheck,
  Flame,
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';

interface SupermarketHeaderProps {
  onOpenCategoriesModal?: () => void;
  onNavigateToCatalog?: () => void;
}

export default function SupermarketHeader({ onOpenCategoriesModal, onNavigateToCatalog }: SupermarketHeaderProps) {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const { theme, toggleTheme, isDark } = useSupermarketTheme();
  const {
    itemCount,
    subtotal,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsAccountOpen,
    setQuickViewProduct,
    setSelectedCategorySlug,
    searchQuery,
    setSearchQuery
  } = useSupermarketCart();

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<SupermarketProduct[]>([]);
  const [matchedCategories, setMatchedCategories] = useState<typeof SUPERMARKET_CATEGORIES>([]);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle live search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setMatchedCategories([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    
    // Filter matching products
    const prods = SUPERMARKET_PRODUCTS.filter(
      (p) =>
        p.nameEn.toLowerCase().includes(q) ||
        p.nameAr.includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.categoryAr.includes(q)
    ).slice(0, 6);

    // Filter matching categories
    const cats = SUPERMARKET_CATEGORIES.filter(
      (c) => c.nameEn.toLowerCase().includes(q) || c.nameAr.includes(q)
    ).slice(0, 4);

    setSuggestions(prods);
    setMatchedCategories(cats);
  }, [searchQuery]);

  // Click outside to close search suggestions & mega menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = (product: SupermarketProduct) => {
    setQuickViewProduct(product);
    setIsSearchFocused(false);
  };

  const handleSelectCategory = (slug: string) => {
    setSelectedCategorySlug(slug);
    setIsMegaMenuOpen(false);
    setIsSearchFocused(false);
    if (onNavigateToCatalog) onNavigateToCatalog();
  };

  const handleLogoClick = () => {
    setSelectedCategorySlug(null);
    setSearchQuery('');
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          
          {/* Brand Logo & Tagline (Home Button) */}
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer group flex-shrink-0 select-none"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleLogoClick();
            }}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <span className="text-xl font-black tracking-tighter">AM</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base md:text-lg tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {isRtl ? 'سوق المرقاب المركزي' : 'AL MIRQAB'}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded">
                  UAE
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium hidden sm:block">
                {isRtl ? 'طازج كل يوم. بأسعار تناسب كل عائلة' : 'HYPERMARKET • UAE'}
              </p>
            </div>
          </div>

          {/* All Categories Mega Menu Button */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 text-zinc-900 dark:text-white px-3.5 py-2.5 rounded-xl text-sm font-semibold border border-zinc-200 dark:border-zinc-800 transition-all"
            >
              <Menu className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t('allCategories')}</span>
              <span className="text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.2 rounded-full">
                40
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown */}
            {isMegaMenuOpen && (
              <div className="absolute top-full start-0 mt-2 w-[720px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-4 z-50 grid grid-cols-3 gap-2 max-h-[480px] overflow-y-auto">
                {SUPERMARKET_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleSelectCategory(cat.slug)}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-zinc-800 text-start transition-colors group"
                  >
                    <img
                      src={cat.image}
                      alt={cat.nameEn}
                      className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="overflow-hidden">
                      <div className="text-xs font-semibold text-zinc-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {isRtl ? cat.nameAr : cat.nameEn}
                      </div>
                      <div className="text-[10px] text-zinc-500">
                        {cat.itemCount} {isRtl ? 'منتج' : 'items'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Large Intelligent Search Bar */}
          <div ref={searchRef} className="relative flex-1 max-w-2xl">
            <div className="relative flex items-center">
              <Search className={`absolute ${isRtl ? 'right-3.5' : 'left-3.5'} w-4 h-4 text-zinc-400`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={t('searchPlaceholder')}
                className={`w-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 focus:bg-white dark:focus:bg-zinc-900 text-zinc-900 dark:text-white text-sm rounded-xl py-2.5 ${
                  isRtl ? 'pr-10 pl-9' : 'pl-10 pr-9'
                } border border-zinc-200 dark:border-zinc-800 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className={`absolute ${isRtl ? 'left-3' : 'right-3'} text-zinc-400 hover:text-zinc-600 dark:hover:text-white`}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Autocomplete Suggestions Box */}
            {isSearchFocused && (searchQuery.trim().length > 0 || suggestions.length > 0) && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-3 z-50">
                {matchedCategories.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 px-2">
                      {isRtl ? 'الأقسام المطابقة' : 'Suggested Categories'}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedCategories.map((c) => (
                        <button
                          key={c.id}
                          onClick={() => handleSelectCategory(c.slug)}
                          className="text-xs bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-medium px-2.5 py-1 rounded-lg hover:bg-emerald-100 transition-colors"
                        >
                          {isRtl ? c.nameAr : c.nameEn}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {suggestions.length > 0 ? (
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5 px-2">
                      {isRtl ? 'المنتجات المقترحة' : 'Matching Products'}
                    </p>
                    <div className="space-y-1">
                      {suggestions.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => handleSelectProduct(p)}
                          className="flex items-center justify-between p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/70 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <img src={p.image} alt={p.nameEn} className="w-9 h-9 rounded-lg object-cover" />
                            <div>
                              <p className="text-xs font-semibold text-zinc-900 dark:text-white line-clamp-1">
                                {isRtl ? p.nameAr : p.nameEn}
                              </p>
                              <span className="text-[10px] text-zinc-500 font-medium">
                                {p.brand} • {p.unit}
                              </span>
                            </div>
                          </div>
                          <div className="text-end">
                            <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                              AED {p.price.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {onNavigateToCatalog && (
                      <button
                        onClick={() => {
                          setIsSearchFocused(false);
                          onNavigateToCatalog();
                        }}
                        className="w-full mt-2 text-center text-xs font-bold text-emerald-600 dark:text-emerald-400 py-1.5 hover:underline"
                      >
                        {isRtl ? 'عرض كافة نتائج البحث' : 'View all search results'}
                      </button>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-zinc-500 p-2 text-center">
                    {isRtl ? 'لا توجد نتائج مطابقة لبحثك' : 'No matching groceries found.'}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* User Controls: Theme, Wishlist, Account, Cart */}
          <div className="flex items-center gap-1 sm:gap-2">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light mode"
              className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-700" />
              )}
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="relative p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200 transition-colors"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Account Button */}
            <button
              onClick={() => setIsAccountOpen(true)}
              aria-label="Account profile"
              className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold"
            >
              <User className="w-5 h-5" />
              <span className="hidden md:inline">{t('account')}</span>
            </button>

            {/* Cart Trigger with live AED subtotal */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping cart"
              className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white px-3.5 py-2 rounded-xl shadow-md shadow-emerald-700/20 transition-all"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-zinc-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-start">
                <span className="text-[10px] uppercase font-bold text-emerald-200 block leading-none">
                  {t('cart')}
                </span>
                <span className="text-xs font-black tracking-tight">
                  AED {subtotal.toFixed(2)}
                </span>
              </div>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
