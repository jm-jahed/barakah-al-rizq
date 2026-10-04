'use client';

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Grid3X3, 
  LayoutGrid, 
  RotateCcw, 
  X, 
  Crown, 
  Layers, 
  Star,
  Compass
} from 'lucide-react';
import { FurnitureProduct, FURNITURE_ROOMS, FURNITURE_MATERIALS, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';
import { FormaProductCard } from './FormaProductCard';

interface FormaProductDiscoveryProps {
  allProducts?: FurnitureProduct[];
  products?: FurnitureProduct[];
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToCart: (product: FurnitureProduct) => void;
  onToggleWishlist?: (product: FurnitureProduct) => void;
  isWishlisted?: (productId: string) => boolean;
  wishlistIds?: string[];
  selectedRoom?: string | null;
  initialRoomFilter?: string | null;
  initialMaterialFilter?: string | null;
  onSelectRoom?: (roomName: string | null) => void;
}

export const FormaProductDiscovery: React.FC<FormaProductDiscoveryProps> = ({
  allProducts,
  products,
  onSelectProduct,
  onAddToCart,
  onToggleWishlist = () => {},
  isWishlisted,
  wishlistIds = [],
  selectedRoom: controlledRoom,
  initialRoomFilter,
  initialMaterialFilter,
  onSelectRoom
}) => {
  const items = products || allProducts || ALL_FURNITURE_PRODUCTS;
  const checkWishlisted = isWishlisted || ((id: string) => wishlistIds.includes(id));

  const [internalRoom, setInternalRoom] = useState<string | null>(initialRoomFilter || controlledRoom || null);
  const activeRoom = controlledRoom !== undefined ? controlledRoom : internalRoom;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(initialMaterialFilter || null);
  const [priceRange, setPriceRange] = useState<number>(75000);
  const [minRating, setMinRating] = useState<number>(0);
  const [availabilityFilter, setAvailabilityFilter] = useState<'all' | 'inStock' | 'bespoke'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'rating' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid4' | 'grid3'>('grid4');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(24);

  // Extract all distinct materials
  const distinctMaterials = useMemo(() => {
    const set = new Set<string>();
    items.forEach(p => set.add(p.material));
    return Array.from(set).sort();
  }, [items]);

  // Multi-faceted filtering
  const filteredProducts = useMemo(() => {
    return items.filter(p => {
      // Room filter
      if (activeRoom && activeRoom !== 'all') {
        if (p.room.toLowerCase() !== activeRoom.toLowerCase()) return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = p.name.toLowerCase().includes(q);
        const matchCat = p.category.toLowerCase().includes(q);
        const matchMat = p.material.toLowerCase().includes(q);
        const matchDesc = p.shortDescription.toLowerCase().includes(q);
        if (!matchName && !matchCat && !matchMat && !matchDesc) return false;
      }

      // Material filter
      if (selectedMaterial && p.material !== selectedMaterial) return false;

      // Price filter (AED)
      if (p.price > priceRange) return false;

      // Rating filter
      if (p.rating < minRating) return false;

      // Availability filter
      if (availabilityFilter === 'inStock' && !p.availability.includes('In Stock')) return false;
      if (availabilityFilter === 'bespoke' && !p.availability.includes('Bespoke')) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'priceAsc') return a.price - b.price;
      if (sortBy === 'priceDesc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [items, activeRoom, searchQuery, selectedMaterial, priceRange, minRating, availabilityFilter, sortBy]);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, itemsPerPage);
  }, [filteredProducts, itemsPerPage]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedMaterial(null);
    setPriceRange(75000);
    setMinRating(0);
    setAvailabilityFilter('all');
    if (onSelectRoom) onSelectRoom(null);
    setInternalRoom(null);
  };

  const hasActiveFilters = Boolean(
    activeRoom || selectedMaterial || priceRange < 75000 || minRating > 0 || availabilityFilter !== 'all' || searchQuery
  );

  return (
    <section id="catalog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12110F] relative">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Complete Architectural Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              The <span className="italic text-[#E6AF73]">Collection</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              Explore {items.length} verified heirloom works spanning {FURNITURE_ROOMS.length} interior environments.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode */}
            <div className="hidden sm:flex items-center p-1 rounded-xl bg-white/[0.04] border border-[#2C2926] text-[#A8A096]">
              <button
                onClick={() => setViewMode('grid4')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid4' ? 'bg-[#E6AF73] text-black shadow' : 'hover:text-white'}`}
                title="4-Column Grid"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid3')}
                className={`p-2 rounded-lg transition-all ${viewMode === 'grid3' ? 'bg-[#E6AF73] text-black shadow' : 'hover:text-white'}`}
                title="3-Column Editorial Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden px-4 py-2.5 rounded-xl bg-[#E6AF73] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters ({hasActiveFilters ? 'Active' : 'All'})</span>
            </button>
          </div>
        </div>

        {/* Room Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 custom-scrollbar">
          <button
            onClick={() => {
              if (onSelectRoom) onSelectRoom(null);
              setInternalRoom(null);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase shrink-0 transition-all font-mono ${
              activeRoom === null || activeRoom === 'all'
                ? 'bg-[#E6AF73] text-black shadow-lg shadow-[#E6AF73]/20'
                : 'bg-white/[0.03] hover:bg-white/[0.07] text-[#C5BDB5] border border-white/5'
            }`}
          >
            All Spaces ({items.length})
          </button>

          {FURNITURE_ROOMS.map(room => (
            <button
              key={room.id}
              onClick={() => {
                if (onSelectRoom) onSelectRoom(room.name);
                setInternalRoom(room.name);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium tracking-wide shrink-0 transition-all flex items-center gap-2 font-mono ${
                activeRoom?.toLowerCase() === room.name.toLowerCase() || activeRoom?.toLowerCase() === room.id.toLowerCase()
                  ? 'bg-[#E6AF73] text-black font-bold shadow-lg shadow-[#E6AF73]/20'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] text-[#C5BDB5] border border-white/5'
              }`}
            >
              <span>{room.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeRoom?.toLowerCase() === room.name.toLowerCase() || activeRoom?.toLowerCase() === room.id.toLowerCase() ? 'bg-black/20 text-black' : 'bg-white/10 text-[#A8A096]'
              }`}>
                {room.count}
              </span>
            </button>
          ))}
        </div>

        {/* Catalog Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Desktop Filters Sidebar (3 cols) */}
          <div className="hidden lg:block lg:col-span-3 bg-[#171513] border border-[#2F2B26] rounded-3xl p-6 space-y-6 sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#2C2926]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5F2EB] font-bold flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#E6AF73]" />
                Refine Collection
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] text-[#E6AF73] hover:underline font-medium flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" /> Reset
                </button>
              )}
            </div>

            {/* Live Search */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#A8A096]">Search Within Catalog</label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-[#A8A096] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Travertine, Walnut, Bouclé..."
                  className="w-full bg-black/40 border border-[#2C2926] rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-[#68625B] focus:outline-none focus:border-[#E6AF73]"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A8A096] hover:text-white">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Price Range Slider in AED */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono uppercase tracking-wider text-[#A8A096]">Max Budget</span>
                <span className="font-mono font-bold text-[#E6AF73]">AED {priceRange.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="75000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#E6AF73] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#A8A096] font-mono">
                <span>AED 2,000</span>
                <span>AED 75,000+</span>
              </div>
            </div>

            {/* Material Filter */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#A8A096]">Primary Material</label>
              <select
                value={selectedMaterial || ''}
                onChange={(e) => setSelectedMaterial(e.target.value || null)}
                className="w-full bg-black/40 border border-[#2C2926] rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E6AF73] font-mono"
              >
                <option value="">All Materials ({distinctMaterials.length})</option>
                {distinctMaterials.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Minimum Rating */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#A8A096]">Client Rating</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[0, 4.8, 5.0].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setMinRating(rate)}
                    className={`py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                      minRating === rate
                        ? 'bg-[#E6AF73] text-black font-bold'
                        : 'bg-white/5 text-[#C5BDB5] hover:bg-white/10'
                    }`}
                  >
                    {rate === 0 ? 'All' : `★ ${rate}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#A8A096]">Availability</label>
              <div className="flex flex-col gap-1.5 text-xs text-[#C5BDB5]">
                {[
                  { id: 'all', label: 'All Pieces' },
                  { id: 'inStock', label: 'In Stock (Dubai Atelier)' },
                  { id: 'bespoke', label: 'Bespoke Commissions Only' }
                ].map(opt => (
                  <label key={opt.id} className="flex items-center gap-2 cursor-pointer hover:text-white">
                    <input
                      type="radio"
                      name="fur-avail"
                      checked={availabilityFilter === opt.id}
                      onChange={() => setAvailabilityFilter(opt.id as any)}
                      className="accent-[#E6AF73]"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Catalog Grid Area (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#171513] border border-[#2F2B26]">
              <div className="text-xs text-[#C5BDB5] font-mono">
                Showing <span className="font-bold text-[#E6AF73]">{filteredProducts.length}</span> of {items.length} Works
                {activeRoom && activeRoom !== 'all' && (
                  <span className="ml-2 text-[#A8A096]">in &quot;{activeRoom}&quot;</span>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-[#A8A096] uppercase">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-black/60 border border-[#2C2926] rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#E6AF73] font-mono"
                >
                  <option value="featured">Curated (Featured)</option>
                  <option value="priceAsc">Price: Low to High</option>
                  <option value="priceDesc">Price: High to Low</option>
                  <option value="rating">Highest Rated (★ 5.0)</option>
                  <option value="newest">New Arrivals</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {paginatedProducts.length > 0 ? (
              <div className={`grid gap-4 sm:gap-6 ${
                viewMode === 'grid4' 
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {paginatedProducts.map(product => (
                  <FormaProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    onAddToCart={onAddToCart}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={checkWishlisted(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-16 rounded-3xl bg-[#171513] border border-[#2F2B26] text-center space-y-4">
                <Search className="w-10 h-10 text-[#E6AF73]/50 mx-auto" />
                <h3 className="text-xl font-bold text-white font-serif">No pieces match your criteria</h3>
                <p className="text-sm text-[#A8A096] max-w-md mx-auto">
                  Try adjusting your budget slider, selecting a different room, or resetting your filter preferences.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-xl bg-[#E6AF73] text-black font-semibold text-xs uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {itemsPerPage < filteredProducts.length && (
              <div className="pt-8 text-center">
                <button
                  onClick={() => setItemsPerPage(prev => prev + 24)}
                  className="px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-lg hover:border-[#E6AF73]/40"
                >
                  Load More Furniture ({filteredProducts.length - itemsPerPage} Remaining)
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end justify-center lg:hidden animate-in fade-in duration-200">
          <div className="w-full max-h-[85vh] bg-[#171513] border-t border-[#3A352F] rounded-t-3xl p-6 overflow-y-auto space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#2C2926]">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-serif">
                <SlidersHorizontal className="w-4 h-4 text-[#E6AF73]" /> Filter 200+ Furniture Works
              </h3>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-2 rounded-full bg-white/5 text-[#A8A096]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#A8A096]">Living Space</label>
              <select
                value={activeRoom || ''}
                onChange={(e) => {
                  const val = e.target.value || null;
                  if (onSelectRoom) onSelectRoom(val);
                  setInternalRoom(val);
                }}
                className="w-full bg-black/60 border border-[#2C2926] rounded-xl p-3 text-xs text-white"
              >
                <option value="">All Spaces ({items.length})</option>
                {FURNITURE_ROOMS.map(r => (
                  <option key={r.id} value={r.name}>{r.name} ({r.count})</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-[#A8A096]">Material</label>
              <select
                value={selectedMaterial || ''}
                onChange={(e) => setSelectedMaterial(e.target.value || null)}
                className="w-full bg-black/60 border border-[#2C2926] rounded-xl p-3 text-xs text-white"
              >
                <option value="">All Materials</option>
                {distinctMaterials.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#A8A096]">Max Budget</span>
                <span className="text-[#E6AF73] font-bold">AED {priceRange.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="75000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[#E6AF73]"
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
                className="flex-1 py-3 rounded-xl bg-[#E6AF73] text-black font-bold text-xs uppercase"
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
