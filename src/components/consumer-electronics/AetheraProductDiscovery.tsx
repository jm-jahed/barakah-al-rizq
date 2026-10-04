'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Grid3X3, 
  LayoutGrid, 
  List, 
  RotateCcw, 
  X, 
  Check, 
  ChevronDown, 
  Crown,
  Layers,
  Star,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { GadgetProduct, GADGET_CATEGORIES } from '@/data/consumerElectronicsData';
import { AetheraProductCard } from './AetheraProductCard';

interface AetheraProductDiscoveryProps {
  allProducts: GadgetProduct[];
  onSelectProduct: (product: GadgetProduct) => void;
  onAddToCart: (product: GadgetProduct) => void;
  onToggleWishlist: (product: GadgetProduct) => void;
  isWishlisted: (productId: string) => boolean;
  onToggleCompare: (product: GadgetProduct) => void;
  comparedIds: string[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export const AetheraProductDiscovery: React.FC<AetheraProductDiscoveryProps> = ({
  allProducts,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onToggleCompare,
  comparedIds,
  selectedCategory,
  onSelectCategory
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(40000);
  const [minRating, setMinRating] = useState<number>(0);
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'inStock' | 'limited'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating' | 'newest' | 'discount'>('featured');
  const [viewMode, setViewMode] = useState<'grid4' | 'grid3' | 'list'>('grid4');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  // Extract all distinct brands
  const allBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    allProducts.forEach(p => brandsSet.add(p.brand));
    return Array.from(brandsSet).sort();
  }, [allProducts]);

  // Multi-faceted filtering pipeline
  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      // Category filter
      if (selectedCategory && selectedCategory !== 'all') {
        if (p.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchDesc = p.shortDescription.toLowerCase().includes(q);
        if (!matchName && !matchBrand && !matchCat && !matchDesc) return false;
      }

      // Brand filter
      if (selectedBrand && p.brand !== selectedBrand) return false;

      // Price filter (AED)
      if (p.price > priceRange) return false;

      // Rating filter
      if (p.rating < minRating) return false;

      // Availability
      if (availabilityFilter === 'inStock' && !p.inStock) return false;
      if (availabilityFilter === 'limited' && p.availability !== 'Limited Edition') return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (sortBy === 'discount') return (b.discount || 0) - (a.discount || 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [allProducts, selectedCategory, searchQuery, selectedBrand, priceRange, minRating, availabilityFilter, sortBy]);

  // Paginated slice
  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, itemsPerPage);
  }, [filteredProducts, itemsPerPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedBrand(null);
    setPriceRange(40000);
    setMinRating(0);
    setAvailabilityFilter('all');
    onSelectCategory(null);
  };

  const hasActiveFilters = Boolean(
    selectedCategory || selectedBrand || priceRange < 40000 || minRating > 0 || availabilityFilter !== 'all' || searchQuery
  );

  return (
    <section id="catalog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#090A0C] relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Comprehensive 200+ Gadget Directory</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-sans">
              The <span className="font-serif italic text-amber-300">Catalog</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 mt-2 max-w-xl">
              Discover {allProducts.length} verified luxury electronics across {GADGET_CATEGORIES.length} specialized ecosystems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Buttons */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-white/60">
              <button
                onClick={() => setViewMode('grid4')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid4' ? 'bg-amber-400 text-black shadow' : 'hover:text-white'}`}
                title="4-Column Matrix"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid3')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid3' ? 'bg-amber-400 text-black shadow' : 'hover:text-white'}`}
                title="3-Column Editorial Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
            </button>
          </div>
        </div>

        {/* 40 Categories Interactive Pill Scroller */}
        <div className="relative">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 custom-scrollbar">
            <button
              onClick={() => onSelectCategory(null)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase shrink-0 transition-all ${
                selectedCategory === null
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              All Categories ({allProducts.length})
            </button>

            {GADGET_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.name)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide shrink-0 transition-all flex items-center gap-2 ${
                  selectedCategory?.toLowerCase() === cat.name.toLowerCase()
                    ? 'bg-amber-400 text-black font-bold shadow-lg shadow-amber-500/20'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 hover:border-white/20'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory?.toLowerCase() === cat.name.toLowerCase() ? 'bg-black/20 text-black' : 'bg-white/10 text-white/50'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Catalog Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Sidebar Filters (3 cols) */}
          <div className="hidden lg:block lg:col-span-3 bg-[#0E1015] border border-white/10 rounded-3xl p-6 space-y-6 sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                Refine Discovery
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {/* Live Search Input */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">Search Within Catalog</label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Titanium, Planar, GaN..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-amber-400"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Price Range Slider in AED */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono uppercase tracking-wider text-white/50">Max Budget</span>
                <span className="font-mono font-bold text-amber-300">AED {priceRange.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="300"
                max="40000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 font-mono">
                <span>AED 300</span>
                <span>AED 40,000+</span>
              </div>
            </div>

            {/* Brand Selector */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">Brand Atelier</label>
              <select
                value={selectedBrand || ''}
                onChange={(e) => setSelectedBrand(e.target.value || null)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="">All Brands ({allBrands.length})</option>
                {allBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Minimum Rating */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">Customer Rating</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 4.7, 4.9].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setMinRating(rate)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      minRating === rate
                        ? 'bg-amber-400 text-black font-bold'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    {rate === 0 ? 'Any' : `★ ${rate}+`}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-white/50">Stock Availability</label>
              <div className="flex flex-col gap-1.5 text-xs text-white/80">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'inStock', label: 'In Stock (Dubai / Abu Dhabi)' },
                  { id: 'limited', label: 'Limited Edition Only' }
                ].map(opt => (
                  <label key={opt.id} className="flex items-center gap-2 cursor-pointer hover:text-white">
                    <input
                      type="radio"
                      name="avail"
                      checked={availabilityFilter === opt.id}
                      onChange={() => setAvailabilityFilter(opt.id as any)}
                      className="accent-amber-400"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Catalog Grid Area (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar: Results Count & Sort Dropdown */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0E1015] border border-white/10">
              <div className="text-xs text-white/70 font-mono">
                Showing <span className="font-bold text-amber-300">{filteredProducts.length}</span> of {allProducts.length} Luxury Gadgets
                {selectedCategory && (
                  <span className="ml-2 text-white/40">in &quot;{selectedCategory}&quot;</span>
                )}
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-white/50 uppercase">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/60 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                >
                  <option value="featured">Curated (Featured)</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Highest Rated (★ 5.0)</option>
                  <option value="newest">New Arrivals</option>
                  <option value="discount">Biggest Discount (%)</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {paginatedProducts.length > 0 ? (
              <div className={`grid gap-4 sm:gap-6 ${
                viewMode === 'grid4' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {paginatedProducts.map(product => (
                  <AetheraProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={isWishlisted(product.id)}
                    onToggleCompare={onToggleCompare}
                    isCompared={comparedIds.includes(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-16 rounded-3xl bg-[#0E1015] border border-white/10 text-center space-y-4">
                <Search className="w-10 h-10 text-amber-400/50 mx-auto" />
                <h3 className="text-xl font-bold text-white">No gadgets match your current filters</h3>
                <p className="text-sm text-white/60 max-w-md mx-auto">
                  Try broadening your price range, searching for different keywords, or resetting your filter selections.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-xs uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Load More Pagination */}
            {itemsPerPage < filteredProducts.length && (
              <div className="pt-8 text-center">
                <button
                  onClick={() => setItemsPerPage(prev => prev + 24)}
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-lg hover:border-amber-400/40"
                >
                  Load More Gadgets ({filteredProducts.length - itemsPerPage} Remaining)
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filters Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end justify-center lg:hidden animate-in fade-in duration-200">
          <div className="w-full max-h-[85vh] bg-[#0E1015] border-t border-white/15 rounded-t-3xl p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-amber-400" /> Filter 200+ Gadgets
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 rounded-full bg-white/5 text-white/70"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Category Select */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-white/50">Category ({GADGET_CATEGORIES.length})</label>
              <select
                value={selectedCategory || ''}
                onChange={(e) => onSelectCategory(e.target.value || null)}
                className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs text-white"
              >
                <option value="">All Categories ({allProducts.length})</option>
                {GADGET_CATEGORIES.map(c => (
                  <option key={c.id} value={c.name}>{c.name} ({c.count})</option>
                ))}
              </select>
            </div>

            {/* Mobile Brand Select */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-white/50">Brand</label>
              <select
                value={selectedBrand || ''}
                onChange={(e) => setSelectedBrand(e.target.value || null)}
                className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs text-white"
              >
                <option value="">All Brands</option>
                {allBrands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/50">Max Budget</span>
                <span className="text-amber-300 font-bold">AED {priceRange.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="300"
                max="40000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-amber-400"
              />
            </div>

            <div className="pt-4 flex gap-3">
              <button
                onClick={handleResetFilters}
                className="flex-1 py-3 rounded-xl bg-white/10 text-white font-medium text-xs uppercase"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 rounded-xl bg-amber-400 text-black font-bold text-xs uppercase"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
