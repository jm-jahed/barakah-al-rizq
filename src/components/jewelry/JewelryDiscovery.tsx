import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, Crown, ChevronDown, Gem } from 'lucide-react';
import { JEWELRY_CATALOG, JewelryItem } from '@/data/jewelryCatalogData';
import { JewelryItemCard } from './JewelryItemCard';

interface JewelryDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectItem: (item: JewelryItem) => void;
  onAddToCart: (item: JewelryItem) => void;
  comparedItems: JewelryItem[];
  onToggleCompare: (item: JewelryItem) => void;
  savedItems: JewelryItem[];
  onToggleSave: (item: JewelryItem) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All 160 Masterpieces' },
  { id: 'solitaire-bridal-suite', name: 'Solitaires & Bridal' },
  { id: 'haute-collier-necklaces', name: 'Diamond Colliers' },
  { id: 'colombian-emeralds-rubies', name: 'Emeralds & Rubies' },
  { id: 'diamond-tennis-bracelets', name: 'Tennis & Cuffs' },
  { id: 'grand-complication-timepieces', name: 'Complication Watches' },
  { id: 'statement-chandelier-earrings', name: 'Chandelier Earrings' },
  { id: 'arabian-gulf-natural-pearls', name: 'Natural Basra Pearls' },
  { id: 'bespoke-sovereign-masterpieces', name: 'Sovereign Parures' }
];

export const JewelryDiscovery: React.FC<JewelryDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectItem,
  onAddToCart,
  comparedItems,
  onToggleCompare,
  savedItems,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(320000);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedGemstone, setSelectedGemstone] = useState<string>('all');
  const [onlyVault, setOnlyVault] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'carat'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const filteredItems = useMemo(() => {
    return JEWELRY_CATALOG.filter(item => {
      // Category
      if (selectedCategory !== 'all' && item.disciplineId !== selectedCategory) {
        return false;
      }
      // Price
      if (item.priceAED > maxPrice) {
        return false;
      }
      // Material
      if (selectedMaterial !== 'all' && item.material !== selectedMaterial) {
        return false;
      }
      // Gemstone
      if (selectedGemstone !== 'all' && item.gemstone !== selectedGemstone) {
        return false;
      }
      // Vault
      if (onlyVault && !item.isVaultExclusive) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesGem = item.gemstone.toLowerCase().includes(query);
        const matchesMat = item.material.toLowerCase().includes(query);
        const matchesLab = item.certificationLab.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesGem && !matchesMat && !matchesLab) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'carat') return parseFloat(b.caratWeight) - parseFloat(a.caratWeight);
      return 0; // featured default
    });
  }, [selectedCategory, maxPrice, selectedMaterial, selectedGemstone, onlyVault, searchQuery, sortBy]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setMaxPrice(320000);
    setSelectedMaterial('all');
    setSelectedGemstone('all');
    setOnlyVault(false);
    setSortBy('featured');
    setVisibleCount(16);
  };

  const hasMore = visibleCount < filteredItems.length;
  const progressPercent = Math.min(100, Math.round((displayedItems.length / (filteredItems.length || 1)) * 100));

  return (
    <section id="jewelry-catalog" className="py-20 bg-zinc-950 text-zinc-100 min-h-screen border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-1">
              Grand Haute Joaillerie Registry • Paris &amp; Dubai DIFC
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-zinc-100">
              Discover All 160 Sovereign Jewels &amp; Timepieces
            </h2>
          </div>
          <div className="text-xs text-zinc-400 font-mono">
            Displaying <span className="text-amber-400 font-bold">{displayedItems.length}</span> of {filteredItems.length} master creations
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-zinc-800">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setVisibleCount(16);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-950/40'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Filter Controls Bar */}
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md mb-8 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(16);
                }}
                placeholder="Search Solitaire, Muzo Emerald, Tourbillon, GIA..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Price Max Slider */}
            <div className="p-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl flex flex-col justify-center">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-zinc-400 font-mono">Max Price:</span>
                <span className="text-amber-400 font-bold font-mono">AED {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={8500}
                max={320000}
                step={5000}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(16);
                }}
                className="w-full accent-amber-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Gemstone Filter */}
            <div className="relative">
              <select
                value={selectedGemstone}
                onChange={(e) => {
                  setSelectedGemstone(e.target.value);
                  setVisibleCount(16);
                }}
                className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500 appearance-none font-mono"
              >
                <option value="all">All Natural Gemstones</option>
                <option value="Diamond">GIA Certified Diamonds</option>
                <option value="Emerald">Colombian Muzo Emeralds</option>
                <option value="Pearl">Arabian Basra &amp; South Sea Pearls</option>
              </select>
              <Gem className="w-3.5 h-3.5 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500 appearance-none font-mono"
              >
                <option value="featured">Featured Curated</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="carat">Highest Carat Weight</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

          {/* Secondary Quick Filter Toggles */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => {
                setOnlyVault(prev => !prev);
                setVisibleCount(16);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                onlyVault
                  ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Sovereign Vault Parures Only (AED 80,000+)</span>
            </button>
          </div>

          {/* Active Filter Tags */}
          {(selectedCategory !== 'all' || searchQuery || maxPrice < 320000 || selectedGemstone !== 'all' || onlyVault) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-500">Active Filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Discipline: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => onSelectCategory('all')} />
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Query: &quot;{searchQuery}&quot;
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setSearchQuery('')} />
                </span>
              )}
              {maxPrice < 320000 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Under AED {maxPrice.toLocaleString()}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setMaxPrice(320000)} />
                </span>
              )}
              {onlyVault && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Vault Parures
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setOnlyVault(false)} />
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Jewelry Items Grid */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map(item => (
              <JewelryItemCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
                onAddToCart={onAddToCart}
                isCompared={comparedItems.some(c => c.id === item.id)}
                onToggleCompare={onToggleCompare}
                isSaved={savedItems.some(s => s.id === item.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <Gem className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-zinc-200">No jewelry creations matched your criteria</h3>
            <p className="mt-1 text-xs text-zinc-400">Try broadening your price range, gemstone filter, or query.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-zinc-950 font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* "See More" Progressive Loading Section */}
        {filteredItems.length > 0 && (
          <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Showing <strong className="text-amber-400 font-bold">{displayedItems.length}</strong> of <strong className="text-zinc-200 font-bold">{filteredItems.length}</strong> Sovereign Jewels</span>
                <span className="text-amber-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            {hasMore ? (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(filteredItems.length, prev + 16))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                  <span>See More Jewels (+{Math.min(16, filteredItems.length - visibleCount)})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredItems.length)}
                  className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Show All {filteredItems.length} Jewels
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  All {filteredItems.length} Sovereign Pieces Displayed
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('jewelry-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-amber-400 hover:underline inline-block pt-1"
                >
                  ↑ Return to Top of Registry
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
