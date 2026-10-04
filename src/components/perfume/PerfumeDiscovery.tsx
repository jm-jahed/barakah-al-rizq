import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, Sparkles, Crown, Flame, ChevronDown } from 'lucide-react';
import { PERFUME_CATALOG, PerfumeItem } from '@/data/perfumeCatalogData';
import { PerfumeItemCard } from './PerfumeItemCard';

interface PerfumeDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectPerfume: (perfume: PerfumeItem) => void;
  onAddToCart: (perfume: PerfumeItem) => void;
  comparedPerfumes: PerfumeItem[];
  onToggleCompare: (perfume: PerfumeItem) => void;
  savedPerfumes: PerfumeItem[];
  onToggleSave: (perfume: PerfumeItem) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All 160 Sovereign Flacons' },
  { id: 'royal-oud-heritage', name: 'Royal Oud & Dahn' },
  { id: 'french-oriental-fusion', name: 'French Oriental' },
  { id: 'amber-resins-incense', name: 'Imperial Amber' },
  { id: 'damascus-rose-taif', name: 'Damascus & Taif Rose' },
  { id: 'desert-woods-smoke', name: 'Desert Woods & Leather' },
  { id: 'gourmand-saffron-spices', name: 'Saffron & Spices' },
  { id: 'white-floral-musk', name: 'White Floral Musk' },
  { id: 'pure-attars-mukhallat', name: 'Pure 100% Attars' }
];

export const PerfumeDiscovery: React.FC<PerfumeDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectPerfume,
  onAddToCart,
  comparedPerfumes,
  onToggleCompare,
  savedPerfumes,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(15000);
  const [selectedConcentration, setSelectedConcentration] = useState<string>('all');
  const [onlyLimited, setOnlyLimited] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'longevity' | 'rating'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const filteredPerfumes = useMemo(() => {
    return PERFUME_CATALOG.filter(item => {
      // Category
      if (selectedCategory !== 'all' && item.categoryId !== selectedCategory) {
        return false;
      }
      // Price
      if (item.priceAED > maxPrice) {
        return false;
      }
      // Limited
      if (onlyLimited && !item.isLimitedEdition) {
        return false;
      }
      // Concentration
      if (selectedConcentration !== 'all' && item.concentration !== selectedConcentration) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesPerfumer = item.masterPerfumer.name.toLowerCase().includes(query);
        const matchesTop = item.pyramid.topNotes.some((n: string) => n.toLowerCase().includes(query));
        const matchesHeart = item.pyramid.heartNotes.some((n: string) => n.toLowerCase().includes(query));
        const matchesBase = item.pyramid.baseNotes.some((n: string) => n.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesPerfumer && !matchesTop && !matchesHeart && !matchesBase) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'longevity') return b.longevityHours - a.longevityHours;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, maxPrice, onlyLimited, selectedConcentration, searchQuery, sortBy]);

  const displayedPerfumes = useMemo(() => {
    return filteredPerfumes.slice(0, visibleCount);
  }, [filteredPerfumes, visibleCount]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setMaxPrice(15000);
    setSelectedConcentration('all');
    setOnlyLimited(false);
    setSortBy('featured');
    setVisibleCount(16);
  };

  const hasMore = visibleCount < filteredPerfumes.length;
  const progressPercent = Math.min(100, Math.round((displayedPerfumes.length / (filteredPerfumes.length || 1)) * 100));

  return (
    <section id="perfume-catalog" className="py-16 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-amber-400 mb-1">
              Grand Haute Parfumerie Registry • Paris & Dubai
            </div>
            <h2 className="text-3xl font-serif font-bold text-zinc-100">
              Discover All 160 Sovereign Flacons &amp; Extraits
            </h2>
          </div>
          <div className="text-xs text-zinc-400 font-mono">
            Displaying <span className="text-amber-400 font-bold">{displayedPerfumes.length}</span> of {filteredPerfumes.length} sovereign fragrances
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

        {/* Controls Filter Bar */}
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md mb-8 space-y-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
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
                placeholder="Search Dehn Al Oud, Taif Rose, Ambergris, Saffron..."
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
                min={450}
                max={15000}
                step={250}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(16);
                }}
                className="w-full accent-amber-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Concentration Filter */}
            <div className="relative">
              <select
                value={selectedConcentration}
                onChange={(e) => {
                  setSelectedConcentration(e.target.value);
                  setVisibleCount(16);
                }}
                className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500 appearance-none font-mono"
              >
                <option value="all">All Concentrations</option>
                <option value="Pure Parfum Oil (Attar)">Pure Parfum Oil (Attar 100%)</option>
                <option value="Extrait de Parfum (40%)">Extrait de Parfum (40%)</option>
                <option value="Eau de Parfum (25%)">Eau de Parfum (25%)</option>
                <option value="Heritage Maceration (50%)">Heritage Maceration (50%)</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-amber-500 appearance-none font-mono"
              >
                <option value="featured">Featured Flacons</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="longevity">Longest Sillage (Hours)</option>
                <option value="rating">Connoisseur Rated</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

          {/* Secondary Quick Filter Toggles */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => {
                setOnlyLimited(prev => !prev);
                setVisibleCount(16);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                onlyLimited
                  ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              <span>Numbered Limited Vault Editions Only</span>
            </button>
          </div>

          {/* Active Filter Tags */}
          {(selectedCategory !== 'all' || searchQuery || maxPrice < 15000 || selectedConcentration !== 'all' || onlyLimited) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-500">Active Filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Family: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => onSelectCategory('all')} />
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Query: &quot;{searchQuery}&quot;
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setSearchQuery('')} />
                </span>
              )}
              {maxPrice < 15000 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Under AED {maxPrice}
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setMaxPrice(15000)} />
                </span>
              )}
              {onlyLimited && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Vault Only
                  <X className="w-3 h-3 cursor-pointer hover:text-amber-400" onClick={() => setOnlyLimited(false)} />
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Reset All Olfactory Filters
              </button>
            </div>
          )}
        </div>

        {/* Perfumes Grid */}
        {displayedPerfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPerfumes.map(perfume => (
              <PerfumeItemCard
                key={perfume.id}
                perfume={perfume}
                onSelect={onSelectPerfume}
                onAddToCart={onAddToCart}
                isCompared={comparedPerfumes.some(p => p.id === perfume.id)}
                onToggleCompare={onToggleCompare}
                isSaved={savedPerfumes.some(p => p.id === perfume.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <Sparkles className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-zinc-200">No sovereign flacons matched your criteria</h3>
            <p className="mt-1 text-xs text-zinc-400">Try broadening your price range, search query, or olfactory family.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-zinc-950 font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* "See More" Progressive Loading Section */}
        {filteredPerfumes.length > 0 && (
          <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Showing <strong className="text-amber-400 font-bold">{displayedPerfumes.length}</strong> of <strong className="text-zinc-200 font-bold">{filteredPerfumes.length}</strong> Sovereign Flacons</span>
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
                  onClick={() => setVisibleCount(prev => Math.min(filteredPerfumes.length, prev + 16))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                  <span>See More Flacons (+{Math.min(16, filteredPerfumes.length - visibleCount)})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredPerfumes.length)}
                  className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Show All {filteredPerfumes.length} Flacons
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  All {filteredPerfumes.length} Sovereign Flacons &amp; Extraits Displayed
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('perfume-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-amber-400 hover:underline inline-block pt-1"
                >
                  ↑ Return to Top of Vault
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
