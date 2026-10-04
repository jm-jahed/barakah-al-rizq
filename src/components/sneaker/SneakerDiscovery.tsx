import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Flame, ChevronDown, ShieldCheck } from 'lucide-react';
import { SOLE_VAULT_CATALOG, SoleVaultCatalogItem } from '@/data/sneakerCatalogData';
import { SoleVaultCatalogCard } from './SoleVaultCatalogCard';

interface SneakerDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectItem: (item: SoleVaultCatalogItem) => void;
  onAddToCart: (item: SoleVaultCatalogItem) => void;
  savedItems: SoleVaultCatalogItem[];
  onToggleSave: (item: SoleVaultCatalogItem) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All 160 Grails' },
  { id: 'retro-grail-high-tops', name: 'Retro High-Tops' },
  { id: 'collab-heat-drops', name: 'Heat Collabs' },
  { id: 'performance-running-runners', name: 'Y2K Runners' },
  { id: 'classic-lows-skate', name: 'SB & Lows' },
  { id: 'dubai-heavyweight-hoodies', name: '520GSM Hoodies' },
  { id: 'oversized-vintage-tees', name: 'Graphic Tees' },
  { id: 'tactical-cargo-trackpants', name: 'Tactical Cargos' },
  { id: 'vault-caps-accessories', name: 'Vault Accessories' }
];

export const SneakerDiscovery: React.FC<SneakerDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectItem,
  onAddToCart,
  savedItems,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(9000);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const filteredItems = useMemo(() => {
    return SOLE_VAULT_CATALOG.filter(item => {
      // Category
      if (selectedCategory !== 'all' && item.disciplineId !== selectedCategory) {
        return false;
      }
      // Price
      if (item.priceAED > maxPrice) {
        return false;
      }
      // Brand
      if (selectedBrand !== 'all' && !item.brand.toLowerCase().includes(selectedBrand.toLowerCase())) {
        return false;
      }
      // Search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchBrand = item.brand.toLowerCase().includes(q);
        const matchSpecs = item.specs.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchBrand && !matchSpecs) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      return 0;
    });
  }, [selectedCategory, maxPrice, selectedBrand, searchQuery, sortBy]);

  const displayedItems = filteredItems.slice(0, visibleCount);
  const progressPercent = Math.round((displayedItems.length / filteredItems.length) * 100) || 0;

  const handleSeeMore = () => {
    setVisibleCount(prev => Math.min(prev + 16, filteredItems.length));
  };

  const handleShowAll = () => {
    setVisibleCount(filteredItems.length);
  };

  return (
    <div className="py-20 bg-[#0A0908] border-b border-amber-500/20 text-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Live Alserkal Avenue Vault • 160 Grails
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif uppercase tracking-tight">
            Discover All 160 Grails &amp; Drops.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            Every sneaker is verified under UV multi-spectrum light, tagged with RFID tamper-proof seals, and held in our temperature-controlled Dubai vault.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setVisibleCount(16);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search, Range & Filter Toolbar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-2xl bg-[#120F0D] border border-zinc-800">
            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(16);
                }}
                placeholder="Search Travis, Jordan 1, ASICS, 520GSM..."
                className="w-full pl-10 pr-8 py-2.5 bg-black/60 border border-zinc-700 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Slider */}
            <div className="md:col-span-4 flex flex-col justify-center px-2">
              <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                <span className="text-zinc-400">Budget Limit:</span>
                <span className="text-amber-400 font-bold">AED {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="160"
                max="9000"
                step="100"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(16);
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Brand Dropdown */}
            <div className="md:col-span-2">
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setVisibleCount(16);
                }}
                className="w-full py-2.5 px-3 bg-black/60 border border-zinc-700 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="all">All Brands &amp; Collabs</option>
                <option value="Jordan">Jordan Brand</option>
                <option value="Nike">Nike &amp; SB</option>
                <option value="Travis">Travis Scott</option>
                <option value="ASICS">ASICS</option>
                <option value="New Balance">New Balance</option>
                <option value="Adidas">Adidas Originals</option>
                <option value="Sole Vault">Sole Vault Studio</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-black/60 border border-zinc-700 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="featured">Vault Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Count Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800 text-xs font-mono text-zinc-400">
          <div>
            Showing <span className="text-amber-400 font-bold">{displayedItems.length}</span> of{' '}
            <span className="text-white font-bold">{filteredItems.length}</span> verified grails
            {selectedCategory !== 'all' && (
              <span className="ml-2 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Filtered
              </span>
            )}
          </div>
          <div className="hidden sm:block text-[11px]">
            Same-Day 4-Hour Van Delivery Across Dubai • 100% Authentic
          </div>
        </div>

        {/* 160 Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <SoleVaultCatalogCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
                onAddToCart={onAddToCart}
                isSaved={savedItems.some(si => si.id === item.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-950/60 rounded-3xl border border-zinc-800 p-8">
            <Flame className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-serif text-white font-bold mb-2">No Grails Match Criteria</h3>
            <p className="text-xs text-zinc-400 mb-6">Try broadening your price limit or brand filters.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setMaxPrice(9000);
                setSelectedBrand('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Progressive "See More" (Mandatory Rule: No Next/Prev Pagination) */}
        {filteredItems.length > 0 && (
          <div className="mt-16 flex flex-col items-center justify-center space-y-4 pt-10 border-t border-zinc-800/80">
            {/* Real-time Progress Bar */}
            <div className="w-full max-w-md space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Showing {displayedItems.length} of {filteredItems.length} grails</span>
                <span className="text-amber-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            {displayedItems.length < filteredItems.length && (
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSeeMore}
                  className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>See More (+16 Grails)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleShowAll}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-mono font-semibold text-xs border border-zinc-700 transition-colors cursor-pointer"
                >
                  Show All {filteredItems.length} Grails
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
