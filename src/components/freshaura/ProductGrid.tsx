'use client';

import React, { useState, useMemo } from 'react';
import { RefreshCw, Leaf, CheckCircle2 } from 'lucide-react';
import { ProduceProduct, ALL_210_PRODUCE_PRODUCTS } from '@/data/freshauraCatalogData';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

interface ProductGridProps {
  onQuickView: (p: ProduceProduct) => void;
  onAddToCart: (p: ProduceProduct, qty?: number) => void;
  onToggleWishlist: (p: ProduceProduct) => void;
  wishlistIds: string[];
  searchQuery: string;
  externalCategoryFilter?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  searchQuery,
  externalCategoryFilter,
}) => {
  const { t, isRtl, formatNumber } = useFreshauraLanguage();

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>(externalCategoryFilter || 'All');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [organicOnly, setOrganicOnly] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<number>(200);

  // Pagination state: Initial display count 24 products for fast initial render
  const [displayCount, setDisplayCount] = useState<number>(24);

  // External category handler
  React.useEffect(() => {
    if (externalCategoryFilter) {
      setSelectedCategory(externalCategoryFilter);
      setDisplayCount(24);
    }
  }, [externalCategoryFilter]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedOrigin('All');
    setSortBy('featured');
    setOrganicOnly(false);
    setPriceRange(200);
    setDisplayCount(24);
  };

  // Filter & Sort Products
  const filteredProducts = useMemo(() => {
    return ALL_210_PRODUCE_PRODUCTS.filter((product) => {
      // Search query across English & Arabic fields
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesNameEn = product.nameEn.toLowerCase().includes(q);
        const matchesNameAr = product.nameAr.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        const matchesCatAr = product.categoryAr.toLowerCase().includes(q);
        const matchesOrig = product.originEn.toLowerCase().includes(q);
        const matchesOrigAr = product.originAr.toLowerCase().includes(q);
        if (!matchesNameEn && !matchesNameAr && !matchesCat && !matchesCatAr && !matchesOrig && !matchesOrigAr) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== 'All') {
        if (product.category !== selectedCategory && product.categoryAr !== selectedCategory) {
          return false;
        }
      }

      // Origin
      if (selectedOrigin !== 'All') {
        if (!product.originEn.toLowerCase().includes(selectedOrigin.toLowerCase()) && 
            !product.originAr.toLowerCase().includes(selectedOrigin.toLowerCase())) {
          return false;
        }
      }

      // Organic
      if (organicOnly && !product.isOrganic) {
        return false;
      }

      // Price
      if (product.priceAED > priceRange) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceAED - b.priceAED;
      if (sortBy === 'price-high') return b.priceAED - a.priceAED;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isDailyDeal ? 1 : 0) - (a.isDailyDeal ? 1 : 0);
      return 0; // featured default
    });
  }, [selectedCategory, selectedOrigin, sortBy, organicOnly, priceRange, searchQuery]);

  // Slice to render up to displayCount products
  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const hasMore = displayCount < filteredProducts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 24, filteredProducts.length));
  };

  const handleShowAll = () => {
    setDisplayCount(filteredProducts.length);
  };

  return (
    <section id="catalog" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
              {isRtl ? '٢١٠ أصناف زراعية طازجة وموثقة' : '210 AUTHENTIC FARM-FRESH ITEMS'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
              {t('catalogTitle')}
            </h2>
            <p className="text-base text-stone-200 font-light mt-2 max-w-2xl">
              {t('catalogSubtitle')}
            </p>
          </div>

          {/* Item Count Display */}
          <div className="font-mono text-xs text-stone-300 bg-[#064E3B] px-4 py-2 rounded-xl border border-emerald-600/40">
            <span>{t('displayingCount')} </span>
            <span className="text-emerald-400 font-bold">{formatNumber(visibleProducts.length)}</span>
            <span> {t('ofTotal')} </span>
            <span className="text-emerald-400 font-bold">{formatNumber(filteredProducts.length)}</span>
            <span> {t('freshItems')}</span>
          </div>
        </div>

        {/* Interactive Filters Bar */}
        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedOrigin={selectedOrigin}
          setSelectedOrigin={setSelectedOrigin}
          sortBy={sortBy}
          setSortBy={setSortBy}
          organicOnly={organicOnly}
          setOrganicOnly={setOrganicOnly}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          onReset={handleReset}
        />

        {/* 0 Products Fallback */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#064E3B] rounded-3xl border border-emerald-700/40 p-8">
            <Leaf className="w-12 h-12 text-emerald-400 mx-auto mb-4 opacity-50" />
            <h3 className="text-2xl font-serif font-bold text-[#FBF9F5]">{t('noProductsFound')}</h3>
            <p className="text-stone-300 text-sm mt-2 max-w-md mx-auto font-sans">
              {isRtl ? 'جرب البحث بكلمات أخرى أو تقليل معايير التصفية.' : 'Try adjusting your search query, price limit, or category filters.'}
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-serif text-xs font-bold uppercase tracking-wider transition-all"
            >
              {t('resetFilters')}
            </button>
          </div>
        ) : (
          <>
            {/* Products Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              ))}
            </div>

            {/* Load More & Show All Action Bar */}
            <div className="mt-16 flex flex-col items-center justify-center gap-4">
              <div className="text-xs font-mono text-stone-400">
                {isRtl
                  ? `عرض ${formatNumber(visibleProducts.length)} من أصل ${formatNumber(filteredProducts.length)} صنف`
                  : `Showing ${visibleProducts.length} of ${filteredProducts.length} products`}
              </div>

              {hasMore ? (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3.5 rounded-xl bg-[#064E3B] hover:bg-emerald-800/80 border border-emerald-600/50 text-[#FBF9F5] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <RefreshCw className="w-4 h-4 text-emerald-400" />
                    <span>{t('loadMore')} (+{formatNumber(24)})</span>
                  </button>

                  <button
                    onClick={handleShowAll}
                    className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-emerald-950/40 hover:scale-[1.02]"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{t('showAll')}</span>
                  </button>
                </div>
              ) : (
                <div className="px-6 py-2.5 rounded-full bg-[#064E3B] border border-emerald-600/30 text-emerald-300 font-mono text-xs font-bold">
                  {t('allLoaded')}
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </section>
  );
};
