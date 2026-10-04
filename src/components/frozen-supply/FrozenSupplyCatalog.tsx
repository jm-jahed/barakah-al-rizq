'use client';

import React, { useState, useMemo, useRef } from 'react';
import {
  Search,
  Grid,
  List,
  X,
  Snowflake,
  ArrowDown
} from 'lucide-react';
import { FrozenProduct, FROZEN_PRODUCTS, FROZEN_CATEGORIES } from '@/data/frozenSupplyData';
import { FrozenSupplyProductCard } from './FrozenSupplyProductCard';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

interface FrozenSupplyCatalogProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onQuickView: (product: FrozenProduct) => void;
  onAddToCart: (product: FrozenProduct, quantity: number) => void;
  onToggleCompare: (product: FrozenProduct) => void;
  comparedProductIds: string[];
  cartProductIds: string[];
}

export const FrozenSupplyCatalog: React.FC<FrozenSupplyCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  setSearchQuery,
  onQuickView,
  onAddToCart,
  onToggleCompare,
  comparedProductIds,
  cartProductIds
}) => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('all');
  const [selectedTempZone, setSelectedTempZone] = useState<string>('all');
  const [sortOption, setSortOption] = useState<'featured' | 'bestseller' | 'price-asc' | 'price-desc' | 'moq-asc' | 'name-asc'>('featured');
  const [displayCount, setDisplayCount] = useState<number>(24);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const catalogTopRef = useRef<HTMLDivElement>(null);
  const newlyLoadedRef = useRef<HTMLDivElement>(null);

  // Available Origins from Catalog
  const allOrigins = useMemo(() => {
    const origins = new Set<string>();
    FROZEN_PRODUCTS.forEach(p => origins.add(p.origin));
    return Array.from(origins).sort();
  }, []);

  // Available Subcategories based on active category
  const availableSubcategories = useMemo<string[]>(() => {
    if (selectedCategory === 'all') return [];
    const subs = new Set<string>();
    FROZEN_PRODUCTS.filter(p => p.categorySlug === selectedCategory).forEach(p => {
      if (p.subcategory) subs.add(p.subcategory);
    });
    return Array.from(subs);
  }, [selectedCategory]);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return FROZEN_PRODUCTS.filter((product) => {
      // Category Match
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Subcategory Match
      if (selectedSubcategory !== 'all' && product.subcategory !== selectedSubcategory) {
        return false;
      }
      // Origin Match
      if (selectedOrigin !== 'all' && product.origin !== selectedOrigin) {
        return false;
      }
      // Temp Zone Match
      if (selectedTempZone !== 'all' && product.storageTemp !== selectedTempZone) {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchName = product.name.toLowerCase().includes(query);
        const matchNameAr = product.nameAr ? product.nameAr.includes(query) : false;
        const matchSku = product.sku.toLowerCase().includes(query);
        const matchCat = product.category.toLowerCase().includes(query);
        const matchSub = product.subcategory.toLowerCase().includes(query);
        const matchOrigin = product.origin.toLowerCase().includes(query);
        const matchBrand = product.brand.toLowerCase().includes(query);
        if (!matchName && !matchNameAr && !matchSku && !matchCat && !matchSub && !matchOrigin && !matchBrand) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortOption === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      }
      if (sortOption === 'bestseller') {
        if (a.isBestseller && !b.isBestseller) return -1;
        if (!a.isBestseller && b.isBestseller) return 1;
        return 0;
      }
      if (sortOption === 'price-asc') return a.priceAED - b.priceAED;
      if (sortOption === 'price-desc') return b.priceAED - a.priceAED;
      if (sortOption === 'moq-asc') return a.moq - b.moq;
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [selectedCategory, selectedSubcategory, selectedOrigin, selectedTempZone, searchQuery, sortOption]);

  const visibleProducts = filteredProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredProducts.length;

  const handleLoadMore = () => {
    const nextCount = displayCount + 24;
    setDisplayCount(nextCount);
    setTimeout(() => {
      if (newlyLoadedRef.current) {
        newlyLoadedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleResetFilters = () => {
    onSelectCategory('all');
    setSelectedSubcategory('all');
    setSelectedOrigin('all');
    setSelectedTempZone('all');
    setSearchQuery('');
    setSortOption('featured');
    setDisplayCount(24);
  };

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedSubcategory !== 'all' ? 1 : 0) +
    (selectedOrigin !== 'all' ? 1 : 0) +
    (selectedTempZone !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  return (
    <section id="catalog" ref={catalogTopRef} className={`py-20 min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-[#050B14]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b pb-6 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono uppercase font-bold mb-2 ${
              isDark 
                ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400' 
                : 'bg-cyan-50 border-cyan-300 text-cyan-800'
            }`}>
              <Snowflake className="w-3.5 h-3.5" />
              <span>{isRtl ? 'المخزون المباشر للمستودع المركزي' : 'Direct Cold Hub Inventory'}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t('catalogTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
              {t('showingProducts')} <strong className="text-cyan-600 dark:text-cyan-400">{filteredProducts.length}</strong> {t('productsWord')}
            </p>
          </div>

          {/* Search Bar & View Mode Toggle */}
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full border rounded-xl pl-9 pr-8 py-2.5 text-xs focus:outline-none font-mono ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400'
                    : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-500'
                }`}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* View Mode Buttons */}
            <div className={`hidden sm:flex items-center border rounded-xl p-1 ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'text-slate-400 hover:text-black dark:hover:text-white'
                }`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'text-slate-400 hover:text-black dark:hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin font-mono text-xs">
          <button
            onClick={() => {
              onSelectCategory('all');
              setSelectedSubcategory('all');
            }}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20'
                : isDark
                  ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
            }`}
          >
            {t('allCategories')} (216)
          </button>

          {FROZEN_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                setSelectedSubcategory('all');
              }}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20'
                  : isDark
                    ? 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              <span>{isRtl && cat.nameAr ? cat.nameAr : cat.name}</span>
              <span className="text-[10px] opacity-75">({cat.itemCount})</span>
            </button>
          ))}
        </div>

        {/* Subcategory Pills (if category selected) */}
        {availableSubcategories.length > 0 && (
          <div className="flex items-center gap-2 overflow-x-auto py-2.5 font-sans text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] uppercase mr-1">
              {isRtl ? 'الأقسام الفرعية:' : 'Subcategories:'}
            </span>
            <button
              onClick={() => setSelectedSubcategory('all')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                selectedSubcategory === 'all'
                  ? isDark
                    ? 'bg-slate-800 text-cyan-300 font-bold border border-cyan-500/40'
                    : 'bg-cyan-100 text-cyan-800 font-bold border border-cyan-300'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {isRtl ? 'كافة الفروع' : 'All Subcategories'}
            </button>
            {availableSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1 rounded-lg transition-colors whitespace-nowrap ${
                  selectedSubcategory === sub
                    ? isDark
                      ? 'bg-slate-800 text-cyan-300 font-bold border border-cyan-500/40'
                      : 'bg-cyan-100 text-cyan-800 font-bold border border-cyan-300'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-200 bg-slate-900/40'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-200/60'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Control Bar: Sort, Filters, and Active Chips */}
        <div className={`my-6 p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 font-mono text-xs ${
          isDark ? 'bg-[#0A1120] border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          
          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Origin Selector */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">{t('filterOrigin')}:</span>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className={`bg-transparent focus:outline-none text-xs cursor-pointer ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <option value="all" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                  {t('allOrigins')} (14 {isRtl ? 'دولة' : 'Countries'})
                </option>
                {allOrigins.map((orig) => (
                  <option key={orig} value={orig} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                    {orig}
                  </option>
                ))}
              </select>
            </div>

            {/* Storage Temp Selector */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">Temp Zone:</span>
              <select
                value={selectedTempZone}
                onChange={(e) => setSelectedTempZone(e.target.value)}
                className={`bg-transparent focus:outline-none text-xs cursor-pointer ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                <option value="all" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                  {isRtl ? 'كافة درجات التبريد' : 'All Sub-Zero Ranges'}
                </option>
                <option value="-18°C to -20°C" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>-18°C to -20°C (Standard)</option>
                <option value="-18°C to -22°C" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>-18°C to -22°C (Poultry/Fruits)</option>
                <option value="-18°C to -24°C" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>-18°C to -24°C (Prime Meats)</option>
                <option value="-20°C to -26°C" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>-20°C to -26°C (Deep Seafood)</option>
              </select>
            </div>

            {/* Reset Button */}
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-rose-500 hover:text-rose-600 flex items-center gap-1 px-2 py-1 underline font-bold"
              >
                <X className="w-3.5 h-3.5" />
                <span>{t('clearFilters')} ({activeFilterCount})</span>
              </button>
            )}

          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 dark:text-slate-400 text-[10px] uppercase">{t('sortBy')}</span>
            <select
              value={sortOption}
              onChange={(e: any) => setSortOption(e.target.value)}
              className={`border rounded-xl px-3 py-1.5 focus:outline-none text-xs font-bold cursor-pointer ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-cyan-300' 
                  : 'bg-slate-100 border-slate-300 text-cyan-800'
              }`}
            >
              <option value="featured">{t('sortFeatured')}</option>
              <option value="bestseller">{isRtl ? 'الأكثر مبيعاً' : 'Bestsellers High-Volume'}</option>
              <option value="price-asc">{t('sortPriceAsc')}</option>
              <option value="price-desc">{t('sortPriceDesc')}</option>
              <option value="moq-asc">{t('sortMoqAsc')}</option>
              <option value="name-asc">{t('sortNameAsc')}</option>
            </select>
          </div>

        </div>

        {/* Product Grid / List */}
        {visibleProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4 font-mono">
            <Snowflake className="w-12 h-12 text-slate-400 mx-auto animate-pulse" />
            <h3 className={`text-xl font-bold font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('noProductsFound')}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              {isRtl 
                ? `لا توجد منتجات مطابقة لمعايير البحث أو الكلمة "${searchQuery}".` 
                : `No active inventory matched your current filter criteria or search keyword "${searchQuery}".`}
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs"
            >
              {t('clearFilters')}
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            
            {/* Grid View */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    ref={idx === displayCount - 24 ? newlyLoadedRef : undefined}
                  >
                    <FrozenSupplyProductCard
                      product={product}
                      onQuickView={onQuickView}
                      onAddToCart={onAddToCart}
                      onToggleCompare={onToggleCompare}
                      isCompared={comparedProductIds.includes(product.id)}
                      isInCart={cartProductIds.includes(product.id)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Compact List View for High-Density Wholesale Browsing */
              <div className="space-y-3">
                {visibleProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    ref={idx === displayCount - 24 ? newlyLoadedRef : undefined}
                    className={`p-4 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs transition-colors ${
                      isDark
                        ? 'bg-[#0A1120] border-slate-800 hover:border-cyan-500/40'
                        : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-900 flex-shrink-0">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold">{product.sku}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400">• {product.origin}</span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400">• {product.storageTemp}</span>
                        </div>
                        <h4
                          onClick={() => onQuickView(product)}
                          className={`text-sm font-bold font-sans cursor-pointer ${
                            isDark ? 'text-white hover:text-cyan-300' : 'text-slate-900 hover:text-cyan-600'
                          }`}
                        >
                          {isRtl && product.nameAr ? product.nameAr : product.name}
                        </h4>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                          Pack: {product.packSize} • MOQ: {product.moq} {product.unit}s
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full md:w-auto gap-6">
                      <div className="text-right">
                        <span className="text-base font-black text-cyan-600 dark:text-cyan-400 block">
                          AED {product.priceAED}
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          ~AED {product.pricePerKgAED}/kg
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onQuickView(product)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold ${
                            isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-200' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                          }`}
                        >
                          {t('quickView')}
                        </button>
                        <button
                          onClick={() => onAddToCart(product, product.moq)}
                          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-sans font-bold text-xs shadow-md shadow-cyan-500/20"
                        >
                          {isRtl ? `إضافة ${product.moq} كرتون` : `Add ${product.moq} Ctns`}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button & Progress Bar */}
            {hasMore && (
              <div className="pt-8 pb-4 text-center space-y-3 font-mono">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t('showingProducts')} <strong className={isDark ? 'text-white' : 'text-slate-900'}>{visibleProducts.length}</strong> {t('ofProducts')} <strong className="text-cyan-600 dark:text-cyan-400">{filteredProducts.length}</strong> {t('productsWord')}
                </p>
                <div className={`w-48 h-1.5 rounded-full mx-auto overflow-hidden ${
                  isDark ? 'bg-slate-800' : 'bg-slate-200'
                }`}>
                  <div
                    className="h-full bg-cyan-500 transition-all"
                    style={{ width: `${(visibleProducts.length / filteredProducts.length) * 100}%` }}
                  />
                </div>
                <button
                  onClick={handleLoadMore}
                  className={`px-8 py-3.5 rounded-xl border font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 mx-auto transition-all shadow-xl hover:scale-105 ${
                    isDark
                      ? 'bg-gradient-to-r from-slate-900 to-[#0A1120] hover:from-cyan-950 hover:to-slate-900 border-cyan-500/40 text-cyan-300 hover:text-white'
                      : 'bg-white hover:bg-cyan-50 border-slate-300 text-cyan-800 hover:text-cyan-900'
                  }`}
                >
                  <ArrowDown className="w-4 h-4 text-cyan-500 animate-bounce" />
                  <span>{isRtl ? 'تحميل الـ 24 منتج التالية' : 'Load Next 24 Commercial Products'}</span>
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};
