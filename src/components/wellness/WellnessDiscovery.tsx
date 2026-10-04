import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Sparkles, ChevronDown, Sun } from 'lucide-react';
import { AURA_WELLNESS_CATALOG, WellnessCatalogItem } from '@/data/wellnessCatalogData';
import { WellnessCatalogCard } from './WellnessCatalogCard';

interface WellnessDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectItem: (item: WellnessCatalogItem) => void;
  onBookItem: (item: WellnessCatalogItem) => void;
  savedItems: WellnessCatalogItem[];
  onToggleSave: (item: WellnessCatalogItem) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All 160 Practices' },
  { id: 'sunrise-vinyasa-ashtanga', name: 'Vinyasa Flows' },
  { id: 'reformer-tower-pilates', name: 'Reformer Pilates' },
  { id: 'crystal-sound-baths-gongs', name: 'Sound Baths' },
  { id: 'somatic-pranayama-breathwork', name: 'Somatic Breath' },
  { id: 'hot-infrared-detox-yoga', name: 'Infrared Hot Yoga' },
  { id: 'restorative-yin-myofascial', name: 'Yin & Restorative' },
  { id: 'private-vip-sound-reiki', name: 'Private VIP 1-on-1' },
  { id: 'weekend-desert-wellness-retreat', name: 'Desert Retreats' }
];

export const WellnessDiscovery: React.FC<WellnessDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectItem,
  onBookItem,
  savedItems,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(4200);
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const filteredItems = useMemo(() => {
    return AURA_WELLNESS_CATALOG.filter(item => {
      // Category
      if (selectedCategory !== 'all' && item.disciplineId !== selectedCategory) {
        return false;
      }
      // Price
      if (item.priceAED > maxPrice) {
        return false;
      }
      // Intensity
      if (selectedIntensity !== 'all' && !item.intensity.toLowerCase().includes(selectedIntensity.toLowerCase())) {
        return false;
      }
      // Search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchDesc = item.description.toLowerCase().includes(q);
        const matchInstructor = item.instructor.toLowerCase().includes(q);
        const matchCategory = item.disciplineName.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchInstructor && !matchCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      return 0;
    });
  }, [selectedCategory, maxPrice, selectedIntensity, searchQuery, sortBy]);

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
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Sun className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              Live Downtown Sanctuary Schedule • 160 Practices
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
            Discover All 160 Sanctuary Practices.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400">
            From sunrise vinyasa flows to 432Hz crystal sound baths and private somatic sessions, explore sessions crafted for complete nervous system realignment.
          </p>
        </div>

        {/* Categories Tabs */}
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

          {/* Search, Range & Intensity Toolbar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 rounded-2xl bg-[#14110E] border border-zinc-800">
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
                placeholder="Search sound bath, reformer, breathwork..."
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
                max="4200"
                step="50"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(16);
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Intensity Dropdown */}
            <div className="md:col-span-2">
              <select
                value={selectedIntensity}
                onChange={(e) => {
                  setSelectedIntensity(e.target.value);
                  setVisibleCount(16);
                }}
                className="w-full py-2.5 px-3 bg-black/60 border border-zinc-700 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="all">All Intensity Levels</option>
                <option value="high">High Intensity Flow</option>
                <option value="muscular">Reformer Endurance</option>
                <option value="theta">Deep Theta Wave Rest</option>
                <option value="calm">Parasympathetic Calm</option>
                <option value="private">1-on-1 Private Practice</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 bg-black/60 border border-zinc-700 rounded-xl text-xs text-zinc-300 focus:outline-none focus:border-amber-400 font-mono"
              >
                <option value="featured">Sanctuary Curated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Count Strip */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-zinc-800 text-xs font-mono text-zinc-400">
          <div>
            Displaying <span className="text-amber-400 font-bold">{displayedItems.length}</span> of{' '}
            <span className="text-white font-bold">{filteredItems.length}</span> practices &amp; retreats
            {selectedCategory !== 'all' && (
              <span className="ml-2 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Filtered
              </span>
            )}
          </div>
          <div className="hidden sm:block text-[11px]">
            Downtown Dubai Sanctuary Pavilion • Props &amp; Manduka Mats Included
          </div>
        </div>

        {/* Grid of 160 items */}
        {displayedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((item) => (
              <WellnessCatalogCard
                key={item.id}
                item={item}
                onSelect={onSelectItem}
                onBook={onBookItem}
                isSaved={savedItems.some(si => si.id === item.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-zinc-950/60 rounded-3xl border border-zinc-800 p-8">
            <Sun className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-serif text-white font-bold mb-2">No Practices Match Criteria</h3>
            <p className="text-xs text-zinc-400 mb-6">Try broadening your price limit or intensity filters.</p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setMaxPrice(4200);
                setSelectedIntensity('all');
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
                <span>Showing {displayedItems.length} of {filteredItems.length} practices</span>
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
                  <span>See More (+16 Practices)</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleShowAll}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-mono font-semibold text-xs border border-zinc-700 transition-colors cursor-pointer"
                >
                  Show All {filteredItems.length} Practices
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
