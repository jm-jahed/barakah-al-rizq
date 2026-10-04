'use client';

import React, { useState, useMemo } from 'react';
import { Crown, RefreshCw } from 'lucide-react';
import { AbayaProduct, ALL_100_ABAYA_PRODUCTS } from '@/data/abayaData';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';

interface ProductGridProps {
  onQuickView: (p: AbayaProduct) => void;
  onAddToCart: (p: AbayaProduct) => void;
  onToggleWishlist: (p: AbayaProduct) => void;
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
  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string>(externalCategoryFilter || 'All');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<number>(3500);

  // Pagination state: INITIAL DISPLAY LIMIT IS STRICTLY 20 PRODUCTS!
  const [displayCount, setDisplayCount] = useState<number>(20);

  // Update category when external prop changes
  React.useEffect(() => {
    if (externalCategoryFilter) {
      setSelectedCategory(externalCategoryFilter);
      setDisplayCount(20);
    }
  }, [externalCategoryFilter]);

  // Reset pagination when any filter changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setDisplayCount(20);
  };

  const handleFabricChange = (fab: string) => {
    setSelectedFabric(fab);
    setDisplayCount(20);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    setDisplayCount(20);
  };

  const handlePriceChange = (val: number) => {
    setPriceRange(val);
    setDisplayCount(20);
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setSelectedFabric('All');
    setSortBy('featured');
    setPriceRange(3500);
    setDisplayCount(20);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return ALL_100_ABAYA_PRODUCTS.filter((product) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q);
        const matchesFab = product.fabric.toLowerCase().includes(q);
        const matchesCol = product.color.toLowerCase().includes(q);
        if (!matchesName && !matchesCat && !matchesFab && !matchesCol) return false;
      }

      // Category
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
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
  }, [selectedCategory, selectedFabric, sortBy, priceRange, searchQuery]);

  // Slice to render ONLY up to displayCount products
  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayCount);
  }, [filteredProducts, displayCount]);

  const hasMore = displayCount < filteredProducts.length;

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 20, filteredProducts.length));
  };

  return (
    <section id="catalog" className="py-24 bg-[#0A0A0A] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              100 UNIQUE HANDCRAFTED ABAYAS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              Explore Our Abaya Catalog.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Filter by silk, linen, organza or Nida fabrics, browse Ramadan editions, and select your tailored size.
            </p>
          </div>

          {/* Item Count Display */}
          <div className="font-mono text-xs text-stone-400 bg-[#121212] px-4 py-2 rounded-xl border border-stone-800">
            Showing <strong className="text-[#C5A059]">{visibleProducts.length}</strong> of{' '}
            <strong className="text-white">{filteredProducts.length}</strong> Products
          </div>
        </div>

        {/* Filters */}
        <ProductFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          selectedFabric={selectedFabric}
          setSelectedFabric={handleFabricChange}
          sortBy={sortBy}
          setSortBy={handleSortChange}
          priceRange={priceRange}
          setPriceRange={handlePriceChange}
          onReset={handleReset}
        />

        {/* Products Grid */}
        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        ) : (
          <div className="text-center py-20 bg-[#121212] rounded-3xl border border-stone-800 p-8 space-y-4 font-mono">
            <span className="text-[#C5A059] text-sm font-bold block">NO MATCHING ABAYAS FOUND</span>
            <p className="text-stone-400 text-xs font-sans max-w-md mx-auto">
              No products match your current price or fabric filters. Try adjusting your selections.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Load More Button (20 -> 40 -> 60 -> 80 -> 100) */}
        {hasMore && (
          <div className="text-center pt-16 font-serif">
            <button
              onClick={handleLoadMore}
              className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-3 transition-all shadow-xl shadow-[#C5A059]/20 hover:scale-105"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Load More Abayas ({filteredProducts.length - displayCount} Remaining)</span>
            </button>
            <span className="text-stone-500 font-mono text-[10px] block mt-3 uppercase tracking-widest">
              20 Products Loaded Per Batch • 100 Total Unique Abayas
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
