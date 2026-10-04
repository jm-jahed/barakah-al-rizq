'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { RefreshCw, X, Sparkles } from 'lucide-react';
import { NouraProduct, NOURA_PRODUCTS } from '@/data/nouraAbayaData';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { useNouraLanguage } from '@/context/NouraLanguageContext';

interface ProductGridProps {
  onQuickView: (p: NouraProduct) => void;
  onOpenDetail: (p: NouraProduct) => void;
  onAddToCart: (p: NouraProduct) => void;
  onToggleWishlist: (p: NouraProduct) => void;
  wishlistIds: string[];
  searchQuery: string;
  externalCategoryFilter?: string;
  externalCollectionFilter?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  onQuickView,
  onOpenDetail,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  searchQuery,
  externalCategoryFilter,
  externalCollectionFilter,
}) => {
  const { isRtl, t, translateProductName, translateCategory, translateCollection, translateFabric } = useNouraLanguage();

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string>(externalCategoryFilter || 'All');
  const [selectedCollection, setSelectedCollection] = useState<string>(externalCollectionFilter || 'All');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<number>(1500);

  // Pagination state: INITIAL DISPLAY LIMIT IS 20 PRODUCTS!
  const [displayCount, setDisplayCount] = useState<number>(20);
  const newlyLoadedIndexRef = useRef<number | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const masterProducts = NOURA_PRODUCTS;

  // Sync external filters
  useEffect(() => {
    if (externalCategoryFilter) {
      setSelectedCategory(externalCategoryFilter);
      setDisplayCount(20);
      newlyLoadedIndexRef.current = null;
    }
  }, [externalCategoryFilter]);

  useEffect(() => {
    if (externalCollectionFilter) {
      setSelectedCollection(externalCollectionFilter);
      setDisplayCount(20);
      newlyLoadedIndexRef.current = null;
    }
  }, [externalCollectionFilter]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setDisplayCount(20);
    newlyLoadedIndexRef.current = null;
  };

  const handleCollectionChange = (col: string) => {
    setSelectedCollection(col);
    setDisplayCount(20);
    newlyLoadedIndexRef.current = null;
  };

  const handleFabricChange = (fab: string) => {
    setSelectedFabric(fab);
    setDisplayCount(20);
    newlyLoadedIndexRef.current = null;
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setDisplayCount(20);
    newlyLoadedIndexRef.current = null;
  };

  const handlePriceChange = (val: number) => {
    setPriceRange(val);
    setDisplayCount(20);
    newlyLoadedIndexRef.current = null;
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedCollection('All');
    setSelectedFabric('All');
    setSortBy('featured');
    setPriceRange(1500);
    setDisplayCount(20);
    newlyLoadedIndexRef.current = null;
  };

  // Filter & Sort Logic (supports both Arabic and English search tokens)
  const filteredProducts = useMemo(() => {
    return masterProducts.filter((product) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const arabicTitle = translateProductName(product.name).toLowerCase();
        const arabicCat = translateCategory(product.category).toLowerCase();
        const arabicCol = translateCollection(product.collection).toLowerCase();
        const arabicFab = translateFabric(product.fabric).toLowerCase();

        const matchesName = product.name.toLowerCase().includes(q) || arabicTitle.includes(q);
        const matchesCat = product.category.toLowerCase().includes(q) || arabicCat.includes(q);
        const matchesCol = product.collection.toLowerCase().includes(q) || arabicCol.includes(q);
        const matchesFab = product.fabric.toLowerCase().includes(q) || arabicFab.includes(q);
        const matchesDesc = product.overview.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesCol && !matchesFab && !matchesDesc) return false;
      }

      // Category
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Collection
      if (selectedCollection !== 'All' && product.collection !== selectedCollection) {
        return false;
      }

      // Fabric
      if (selectedFabric !== 'All' && product.fabric !== selectedFabric) {
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
      if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      return 0; // featured default
    });
  }, [masterProducts, selectedCategory, selectedCollection, selectedFabric, sortBy, priceRange, searchQuery, translateProductName, translateCategory, translateCollection, translateFabric]);

  // Slice to render ONLY up to displayCount products
  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const hasMore = displayCount < filteredProducts.length;

  const handleLoadMore = () => {
    const nextIndex = displayCount;
    newlyLoadedIndexRef.current = nextIndex;
    setDisplayCount((prev) => Math.min(prev + 20, filteredProducts.length));

    // Smoothly auto-scroll to the first newly revealed item
    setTimeout(() => {
      const targetItem = filteredProducts[nextIndex];
      if (targetItem && itemRefs.current[targetItem.id]) {
        const el = itemRefs.current[targetItem.id];
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 150);
  };

  return (
    <section id="catalog" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.15em] px-3.5 py-1 rounded-full bg-[#121212] border border-[#C5A059]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              {isRtl ? '248+ تصميم عباية فاخرة موثقة في الأتيليه' : '248+ HANDCRAFTED ARABIAN FASHION DESIGNS'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4 tracking-tight">
              {t('catalogTitle')}
            </h2>
            <p className="text-base text-stone-300 font-normal mt-2 max-w-xl leading-relaxed">
              {t('catalogSubtitle')}
            </p>
          </div>

          {/* Item Count Display */}
          <div className="font-mono text-xs text-stone-400 bg-[#121212] px-4 py-2.5 rounded-xl border border-stone-800">
            {t('showingProducts')} <strong className="text-[#C5A059]">{visibleProducts.length}</strong> {t('ofProducts')}{' '}
            <strong className="text-white">{filteredProducts.length}</strong> {t('productsWord')}
          </div>
        </div>

        {/* Category Quick Tabs Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar font-mono text-xs">
          {[
            { label: t('filterAllCategories'), cat: 'All' },
            { label: translateCategory('Embroidered Abayas'), cat: 'Embroidered Abayas' },
            { label: translateCategory('Luxury Abayas'), cat: 'Luxury Abayas' },
            { label: translateCategory('Linen & Crepe Abayas'), cat: 'Linen & Crepe Abayas' },
            { label: translateCategory('Classic Black Abayas'), cat: 'Classic Black Abayas' },
            { label: translateCategory('Silk & Organza Abayas'), cat: 'Silk & Organza Abayas' },
            { label: translateCategory('Kaftans & Dresses'), cat: 'Kaftans & Dresses' },
          ].map((tab) => {
            const isActive = selectedCategory === tab.cat;
            return (
              <button
                key={tab.label}
                onClick={() => handleCategoryChange(tab.cat)}
                className={`px-4 py-2.5 rounded-xl border whitespace-nowrap font-bold transition-all ${
                  isActive
                    ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                    : 'bg-[#121212] border-stone-800 text-stone-400 hover:text-white hover:border-stone-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Filters */}
        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          selectedCollection={selectedCollection}
          setSelectedCollection={handleCollectionChange}
          selectedFabric={selectedFabric}
          setSelectedFabric={handleFabricChange}
          sortBy={sortBy}
          setSortBy={handleSortChange}
          priceRange={priceRange}
          setPriceRange={handlePriceChange}
          onReset={handleReset}
        />

        {/* Active Filters Notification / Reset */}
        {(selectedCategory !== 'All' || selectedCollection !== 'All' || selectedFabric !== 'All' || searchQuery) && (
          <div className="flex items-center justify-between font-mono text-xs text-stone-400 mb-6 bg-[#121212] p-3 rounded-xl border border-stone-800">
            <span>
              {isRtl ? 'التصفية الحالية:' : 'Filtered:'} <strong className="text-white">{selectedCategory !== 'All' ? translateCategory(selectedCategory) : t('filterAllCategories')}</strong> / <strong className="text-white">{selectedCollection !== 'All' ? translateCollection(selectedCollection) : t('filterAllCollections')}</strong>
              {searchQuery && <> • {isRtl ? 'البحث:' : 'Search:'} <strong className="text-[#C5A059]">"{searchQuery}"</strong></>}
            </span>
            <button
              onClick={handleReset}
              className="text-[#C5A059] hover:underline flex items-center gap-1 font-bold"
            >
              <X className="w-3.5 h-3.5" />
              <span>{t('clearFilters')}</span>
            </button>
          </div>
        )}

        {/* Products Grid */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                ref={(el) => {
                  itemRefs.current[product.id] = el;
                }}
              >
                <ProductCard
                  product={product}
                  onQuickView={onQuickView}
                  onOpenDetail={onOpenDetail}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlistIds.includes(product.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#121212] rounded-3xl border border-stone-800 p-8 space-y-4 font-mono">
            <span className="text-[#C5A059] text-sm font-bold block">{t('noProductsFound')}</span>
            <p className="text-stone-400 text-xs font-sans max-w-md mx-auto">
              {t('noProductsDesc')}
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
            >
              {t('clearFilters')}
            </button>
          </div>
        )}

        {/* Load More Button with Auto-Scroll */}
        {hasMore && (
          <div className="text-center pt-16 font-serif space-y-3">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#8C6D2D] hover:scale-105 text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-3 transition-all shadow-xl shadow-[#C5A059]/20 group"
            >
              <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>{isRtl ? 'عرض المزيد من العبايات (+20 تصميم)' : 'Load More Abayas (+20 Designs)'}</span>
            </button>
            <span className="text-stone-500 font-mono text-[10px] block uppercase tracking-widest">
              {t('showingProducts')} {visibleProducts.length} {t('ofProducts')} {filteredProducts.length} {t('productsWord')}
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
