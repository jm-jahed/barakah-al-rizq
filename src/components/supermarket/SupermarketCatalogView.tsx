'use client';

import React, { useState, useMemo } from 'react';
import { useSupermarketLanguage } from '../../context/SupermarketLanguageContext';
import { useSupermarketCart } from '../../context/SupermarketCartContext';
import { SUPERMARKET_PRODUCTS, SUPERMARKET_CATEGORIES, POPULAR_BRANDS, SupermarketProduct } from '../../data/supermarketData';
import SupermarketProductCard from './SupermarketProductCard';
import {
  Filter,
  SlidersHorizontal,
  X,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowUpDown,
  Check
} from 'lucide-react';

export default function SupermarketCatalogView() {
  const { lang, isRtl, t } = useSupermarketLanguage();
  const {
    selectedCategorySlug,
    setSelectedCategorySlug,
    searchQuery,
    setSearchQuery
  } = useSupermarketCart();

  // Filter States
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(3500);
  const [onlyDeals, setOnlyDeals] = useState<boolean>(false);
  const [onlyUae, setOnlyUae] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'discount' | 'rating'>('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(48);

  // Compute filtered & sorted products
  const filteredProducts = useMemo(() => {
    return SUPERMARKET_PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategorySlug && prod.categorySlug !== selectedCategorySlug) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.nameEn.toLowerCase().includes(q) || prod.nameAr.includes(q);
        const matchesBrand = prod.brand.toLowerCase().includes(q);
        const matchesCat = prod.category.toLowerCase().includes(q) || prod.categoryAr.includes(q);
        if (!matchesName && !matchesBrand && !matchesCat) return false;
      }
      // Brand filter
      if (selectedBrand && prod.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // Origin filter
      if (selectedOrigin) {
        if (selectedOrigin === 'UAE' && prod.origin !== 'UAE') return false;
        if (selectedOrigin === 'KSA' && prod.origin !== 'KSA') return false;
        if (selectedOrigin === 'Imported' && (prod.origin === 'UAE' || prod.origin === 'KSA')) return false;
      }
      // Max price filter
      if (prod.price > maxPrice) {
        return false;
      }
      // Only deals
      if (onlyDeals && prod.discountPercent === 0) {
        return false;
      }
      // Only UAE
      if (onlyUae && !prod.isUaeLocal) {
        return false;
      }
      // Rating
      if (minRating > 0 && prod.rating < minRating) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'discount') return b.discountPercent - a.discountPercent;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [
    selectedCategorySlug,
    searchQuery,
    selectedBrand,
    selectedOrigin,
    maxPrice,
    onlyDeals,
    onlyUae,
    minRating,
    sortBy
  ]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleClearFilters = () => {
    setSelectedCategorySlug(null);
    setSearchQuery('');
    setSelectedBrand(null);
    setSelectedOrigin(null);
    setMaxPrice(3500);
    setOnlyDeals(false);
    setOnlyUae(false);
    setMinRating(0);
    setSortBy('featured');
    setVisibleCount(48);
  };

  const hasActiveFilters =
    selectedCategorySlug !== null ||
    searchQuery.trim() !== '' ||
    selectedBrand !== null ||
    selectedOrigin !== null ||
    maxPrice < 3500 ||
    onlyDeals ||
    onlyUae ||
    minRating > 0;

  return (
    <section className="py-8 px-4 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
          
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 dark:text-white">
                {selectedCategorySlug
                  ? (isRtl
                      ? SUPERMARKET_CATEGORIES.find((c) => c.slug === selectedCategorySlug)?.nameAr
                      : SUPERMARKET_CATEGORIES.find((c) => c.slug === selectedCategorySlug)?.nameEn)
                  : (isRtl ? 'كافة منتجات السوبرماركت' : 'All Supermarket Groceries')}
              </h2>
              <span className="text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                {filteredProducts.length} {isRtl ? 'منتج' : 'items'}
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">
              {isRtl
                ? 'تشكيلة متكاملة تضم أكثر من 2,500 منتج معتمد بأسعار الجملة والتجزئة'
                : '2,500+ authentic items with guaranteed everyday UAE hypermarket prices'}
            </p>
          </div>

          {/* Controls: Mobile Filter Button & Sort Dropdown */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            {/* Mobile Filter Trigger */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-3 py-2 rounded-xl text-xs font-bold shadow-sm"
            >
              <Filter className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('filterBy')}</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 py-1.5 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
              <span className="text-zinc-400 hidden sm:inline">{t('sortBy')}:</span>
              <select
                value={sortBy}
                aria-label="Sort products"
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-transparent font-bold text-zinc-900 dark:text-white focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">{t('sortFeatured')}</option>
                <option value="priceAsc" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">{t('sortPriceLow')}</option>
                <option value="priceDesc" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">{t('sortPriceHigh')}</option>
                <option value="discount" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">{t('sortDiscount')}</option>
                <option value="rating" className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">{t('sortRating')}</option>
              </select>
            </div>
          </div>

        </div>

        {/* Active Filter Chips */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 py-3">
            <span className="text-xs font-semibold text-zinc-400">{isRtl ? 'التصفية النشطة:' : 'Active Filters:'}</span>

            {selectedCategorySlug && (
              <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 font-semibold px-2.5 py-1 rounded-lg">
                {isRtl
                  ? SUPERMARKET_CATEGORIES.find((c) => c.slug === selectedCategorySlug)?.nameAr
                  : SUPERMARKET_CATEGORIES.find((c) => c.slug === selectedCategorySlug)?.nameEn}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategorySlug(null)} />
              </span>
            )}

            {searchQuery && (
              <span className="inline-flex items-center gap-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold px-2.5 py-1 rounded-lg">
                &ldquo;{searchQuery}&rdquo;
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
              </span>
            )}

            {selectedBrand && (
              <span className="inline-flex items-center gap-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold px-2.5 py-1 rounded-lg">
                {selectedBrand}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedBrand(null)} />
              </span>
            )}

            {onlyDeals && (
              <span className="inline-flex items-center gap-1 text-xs bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-300 font-semibold px-2.5 py-1 rounded-lg">
                {isRtl ? 'العروض فقط' : 'Deals Only'}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setOnlyDeals(false)} />
              </span>
            )}

            {onlyUae && (
              <span className="inline-flex items-center gap-1 text-xs bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-300 font-semibold px-2.5 py-1 rounded-lg">
                🇦🇪 UAE Local
                <X className="w-3 h-3 cursor-pointer" onClick={() => setOnlyUae(false)} />
              </span>
            )}

            <button
              onClick={handleClearFilters}
              className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t('clearFilters')}</span>
            </button>
          </div>
        )}

        {/* Main Body: Filter Sidebar + Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          
          {/* Desktop Left Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6 bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 self-start sticky top-20">
            
            <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex items-center gap-1.5 font-bold text-sm text-zinc-900 dark:text-white">
                <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                <span>{t('filterBy')}</span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-rose-600 hover:underline"
                >
                  {isRtl ? 'إعادة ضبط' : 'Reset'}
                </button>
              )}
            </div>

            {/* Price Filter Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <span className="text-zinc-700 dark:text-zinc-300">{t('priceRange')}</span>
                <span className="text-emerald-600 dark:text-emerald-400">Up to AED {maxPrice}</span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                step="5"
                value={maxPrice}
                aria-label="Filter maximum price in AED"
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                <span>AED 5</span>
                <span>AED 75</span>
                <span>AED 150+</span>
              </div>
            </div>

            {/* Quick Toggle Checkboxes */}
            <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={onlyDeals}
                  onChange={(e) => setOnlyDeals(e.target.checked)}
                  className="accent-emerald-600 rounded cursor-pointer w-4 h-4"
                />
                <span>{isRtl ? 'عروض وتخفيضات فقط' : 'Special Discount Deals'}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <input
                  type="checkbox"
                  checked={onlyUae}
                  onChange={(e) => setOnlyUae(e.target.checked)}
                  className="accent-emerald-600 rounded cursor-pointer w-4 h-4"
                />
                <span>🇦🇪 {isRtl ? 'إنتاج مزارع الإمارات فقط' : 'UAE Local Farm Produce Only'}</span>
              </label>
            </div>

            {/* Category Filter List */}
            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-bold text-zinc-900 dark:text-white block mb-2">
                {t('allCategories')}
              </span>
              <div className="space-y-1 max-h-48 overflow-y-auto no-scrollbar pr-1">
                <button
                  onClick={() => setSelectedCategorySlug(null)}
                  className={`w-full text-start text-xs py-1 px-2 rounded-lg transition-colors flex items-center justify-between ${
                    selectedCategorySlug === null
                      ? 'bg-emerald-50 dark:bg-emerald-950 font-bold text-emerald-700 dark:text-emerald-300'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span>{isRtl ? 'جميع الأقسام' : 'All Categories'}</span>
                  <span className="text-[10px] text-zinc-400">1081</span>
                </button>
                {SUPERMARKET_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategorySlug(cat.slug)}
                    className={`w-full text-start text-xs py-1 px-2 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategorySlug === cat.slug
                        ? 'bg-emerald-50 dark:bg-emerald-950 font-bold text-emerald-700 dark:text-emerald-300'
                        : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    <span className="truncate">{isRtl ? cat.nameAr : cat.nameEn}</span>
                    <span className="text-[10px] text-zinc-400">{cat.itemCount}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Brand Filter */}
            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800">
              <span className="text-xs font-bold text-zinc-900 dark:text-white block mb-2">
                {t('brands')}
              </span>
              <div className="flex flex-wrap gap-1">
                {POPULAR_BRANDS.slice(0, 8).map((b, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedBrand(selectedBrand === b.name ? null : b.name)}
                    className={`text-[11px] px-2 py-1 rounded-md border font-medium transition-all ${
                      selectedBrand === b.name
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-emerald-500'
                    }`}
                  >
                    {isRtl ? b.ar : b.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Product Grid */}
          <div className="lg:col-span-9">
            
            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                  {displayedProducts.map((prod) => (
                    <SupermarketProductCard key={prod.id} product={prod} />
                  ))}
                </div>

                {/* Load More Pagination */}
                {visibleCount < filteredProducts.length && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 48)}
                      className="bg-white dark:bg-zinc-900 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 text-zinc-900 dark:text-white px-8 py-3 rounded-xl text-xs font-extrabold shadow-sm transition-all"
                    >
                      {isRtl
                        ? `عرض المزيد من المنتجات (${filteredProducts.length - visibleCount} متبقي)`
                        : `Load More Groceries (${filteredProducts.length - visibleCount} remaining)`}
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-12 text-center max-w-md mx-auto my-8">
                <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mx-auto mb-4 text-zinc-400">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                  {t('noProductsFound')}
                </h3>
                <p className="text-xs text-zinc-500 mb-4">
                  {isRtl
                    ? 'جرب ضبط نطاق السعر أو مسح كلمات البحث لتصفح التشكيلة الكاملة.'
                    : 'Try clearing your filters or changing your search term to see more items.'}
                </p>
                <button
                  onClick={handleClearFilters}
                  className="bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  {t('clearFilters')}
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Mobile Filter Slide Drawer */}
        {isMobileFilterOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden flex justify-end">
            <div className="w-full max-w-xs bg-white dark:bg-zinc-900 h-full p-4 overflow-y-auto space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-white">{t('filterBy')}</h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Price Filter */}
              <div>
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 block mb-1">
                  {t('priceRange')} (Up to AED {maxPrice})
                </span>
                <input
                  type="range"
                  min="5"
                  max="3500"
                  step="25"
                  value={maxPrice}
                  aria-label="Mobile filter maximum price in AED"
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              {/* Deals / UAE */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={onlyDeals}
                    onChange={(e) => setOnlyDeals(e.target.checked)}
                    className="accent-emerald-600 w-4 h-4 rounded"
                  />
                  <span>{isRtl ? 'عروض فقط' : 'Deals Only'}</span>
                </label>
                <label className="flex items-center gap-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  <input
                    type="checkbox"
                    checked={onlyUae}
                    onChange={(e) => setOnlyUae(e.target.checked)}
                    className="accent-emerald-600 w-4 h-4 rounded"
                  />
                  <span>🇦🇪 UAE Local</span>
                </label>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex gap-2">
                <button
                  onClick={handleClearFilters}
                  className="flex-1 py-2 text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl"
                >
                  {t('clearFilters')}
                </button>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="flex-1 py-2 text-xs font-bold bg-emerald-600 text-white rounded-xl"
                >
                  {isRtl ? 'تطبيق' : 'Apply'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
