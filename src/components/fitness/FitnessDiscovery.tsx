import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Check, Zap, Flame, Crown, ChevronDown, Award } from 'lucide-react';
import { FITNESS_CATALOG, FitnessProgram } from '@/data/fitnessCatalogData';
import { FitnessItemCard } from './FitnessItemCard';

interface FitnessDiscoveryProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onSelectProgram: (program: FitnessProgram) => void;
  onBookProgram: (program: FitnessProgram) => void;
  comparedPrograms: FitnessProgram[];
  onToggleCompare: (program: FitnessProgram) => void;
  savedPrograms: FitnessProgram[];
  onToggleSave: (program: FitnessProgram) => void;
}

const CATEGORIES = [
  { id: 'all', name: 'All 160 Protocols' },
  { id: 'olympic-strength-conditioning', name: 'Olympic Strength' },
  { id: 'reformer-pilates-biomechanics', name: 'Reformer Pilates' },
  { id: 'championship-combat-boxing', name: 'Boxing & Combat' },
  { id: 'hyrox-endurance-metcon', name: 'HYROX & MetCon' },
  { id: 'biohacking-cryo-recovery', name: 'Biohacking & -110°C Cryo' },
  { id: 'executive-personal-mastery', name: '1-on-1 Master Coaching' },
  { id: 'metabolic-nutrition-dexa', name: 'DEXA & Nutrition Lab' },
  { id: 'vip-black-tier-memberships', name: 'Black-Tier Access' }
];

export const FitnessDiscovery: React.FC<FitnessDiscoveryProps> = ({
  selectedCategory,
  onSelectCategory,
  onSelectProgram,
  onBookProgram,
  comparedPrograms,
  onToggleCompare,
  savedPrograms,
  onToggleSave
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(2500);
  const [selectedIntensity, setSelectedIntensity] = useState<string>('all');
  const [onlyBlackTier, setOnlyBlackTier] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'calories' | 'rating'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const filteredPrograms = useMemo(() => {
    return FITNESS_CATALOG.filter(item => {
      // Category
      if (selectedCategory !== 'all' && item.disciplineId !== selectedCategory) {
        return false;
      }
      // Price
      if (item.priceAED > maxPrice) {
        return false;
      }
      // Black Tier
      if (onlyBlackTier && !item.isBlackTierExclusive) {
        return false;
      }
      // Intensity
      if (selectedIntensity !== 'all' && item.intensityLevel !== selectedIntensity) {
        return false;
      }
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query);
        const matchesCoach = item.masterCoach.name.toLowerCase().includes(query);
        const matchesEquipment = item.equipmentUtilized.some(e => e.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesCoach && !matchesEquipment) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'calories') return b.caloriesBurnEstimate - a.caloriesBurnEstimate;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedCategory, maxPrice, onlyBlackTier, selectedIntensity, searchQuery, sortBy]);

  const displayedPrograms = useMemo(() => {
    return filteredPrograms.slice(0, visibleCount);
  }, [filteredPrograms, visibleCount]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setMaxPrice(2500);
    setSelectedIntensity('all');
    setOnlyBlackTier(false);
    setSortBy('featured');
    setVisibleCount(16);
  };

  const hasMore = visibleCount < filteredPrograms.length;
  const progressPercent = Math.min(100, Math.round((displayedPrograms.length / (filteredPrograms.length || 1)) * 100));

  return (
    <section id="fitness-catalog" className="py-16 bg-zinc-950 text-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-yellow-400 mb-1">
              Athletic Performance Registry • Dubai DIFC & Palm Jumeirah
            </div>
            <h2 className="text-3xl font-serif font-bold text-zinc-100">
              Explore All 160 Athletic Protocols & Programs
            </h2>
          </div>
          <div className="text-xs text-zinc-400 font-mono">
            Displaying <span className="text-yellow-400 font-bold">{displayedPrograms.length}</span> of {filteredPrograms.length} authentic performance programs
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
                    ? 'bg-yellow-500 text-zinc-950 font-bold shadow-lg shadow-yellow-950/40'
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
                placeholder="Search Eleiko, HYROX, Pilates, Cryo, coach..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-yellow-500"
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
                <span className="text-zinc-400 font-mono">Max Rate:</span>
                <span className="text-yellow-400 font-bold font-mono">AED {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={120}
                max={2800}
                step={50}
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(Number(e.target.value));
                  setVisibleCount(16);
                }}
                className="w-full accent-yellow-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Intensity Filter */}
            <div className="relative">
              <select
                value={selectedIntensity}
                onChange={(e) => {
                  setSelectedIntensity(e.target.value);
                  setVisibleCount(16);
                }}
                className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500 appearance-none font-mono"
              >
                <option value="all">All Intensity Levels</option>
                <option value="Elite Athlete">Elite Athlete (High Velocity)</option>
                <option value="Advanced Executive">Advanced Executive Conditioning</option>
                <option value="All Levels Biomechanics">All Levels Biomechanics</option>
                <option value="Sub-Zero Cellular">Sub-Zero Cellular Recovery</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-4 py-2.5 bg-zinc-950/80 border border-zinc-700/60 rounded-xl text-xs text-zinc-200 focus:outline-none focus:border-yellow-500 appearance-none font-mono"
              >
                <option value="featured">Featured Protocols</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="calories">Highest Caloric Burn</option>
                <option value="rating">Top Athlete Rated</option>
              </select>
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

          </div>

          {/* Secondary Quick Filter Toggles */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => {
                setOnlyBlackTier(prev => !prev);
                setVisibleCount(16);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                onlyBlackTier
                  ? 'bg-yellow-500/20 border border-yellow-500/40 text-yellow-300'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-yellow-400" />
              <span>Sovereign Black-Tier Exclusives Only</span>
            </button>
          </div>

          {/* Active Filter Tags */}
          {(selectedCategory !== 'all' || searchQuery || maxPrice < 2500 || selectedIntensity !== 'all' || onlyBlackTier) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-zinc-800/80">
              <span className="text-[11px] font-mono text-zinc-500">Active Filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Arena: {CATEGORIES.find(c => c.id === selectedCategory)?.name}
                  <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => onSelectCategory('all')} />
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Query: &quot;{searchQuery}&quot;
                  <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => setSearchQuery('')} />
                </span>
              )}
              {maxPrice < 2500 && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Under AED {maxPrice}
                  <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => setMaxPrice(2500)} />
                </span>
              )}
              {onlyBlackTier && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-300">
                  Black-Tier
                  <X className="w-3 h-3 cursor-pointer hover:text-red-400" onClick={() => setOnlyBlackTier(false)} />
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-xs text-yellow-400 hover:underline flex items-center gap-1"
              >
                <X className="w-3 h-3" /> Reset All Performance Filters
              </button>
            </div>
          )}
        </div>

        {/* Program Grid */}
        {displayedPrograms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPrograms.map(program => (
              <FitnessItemCard
                key={program.id}
                program={program}
                onSelect={onSelectProgram}
                onBook={onBookProgram}
                isCompared={comparedPrograms.some(p => p.id === program.id)}
                onToggleCompare={onToggleCompare}
                isSaved={savedPrograms.some(p => p.id === program.id)}
                onToggleSave={onToggleSave}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <Zap className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h3 className="text-lg font-serif font-semibold text-zinc-200">No athletic protocols matched your criteria</h3>
            <p className="mt-1 text-xs text-zinc-400">Try broadening your price range, search query, or arena filter.</p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-yellow-500 text-zinc-950 font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* "See More" Progressive Loading Section */}
        {filteredPrograms.length > 0 && (
          <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Showing <strong className="text-yellow-400 font-bold">{displayedPrograms.length}</strong> of <strong className="text-zinc-200 font-bold">{filteredPrograms.length}</strong> Protocols</span>
                <span className="text-yellow-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            {hasMore ? (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount(prev => Math.min(filteredPrograms.length, prev + 16))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-yellow-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                  <span>See More Protocols (+{Math.min(16, filteredPrograms.length - visibleCount)})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredPrograms.length)}
                  className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Show All {filteredPrograms.length} Protocols
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-yellow-400" />
                  All {filteredPrograms.length} Sovereign Athletic Protocols Displayed
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('fitness-catalog');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-yellow-400 hover:underline inline-block pt-1"
                >
                  ↑ Return to Top of Catalog
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
