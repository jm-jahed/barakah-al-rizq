'use strict';
import React, { useState, useMemo } from 'react';
import { SALON_TREATMENTS_CATALOG, SalonTreatment, BEAUTY_CATEGORIES } from '@/data/salonData';
import { SalonTreatmentCard } from './SalonTreatmentCard';
import { Search, SlidersHorizontal, RotateCcw, Crown, Clock, Filter, Sparkle, ChevronDown, Check } from 'lucide-react';

interface SalonTreatmentDiscoveryProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  savedIds: string[];
  comparedIds: string[];
  onToggleSave: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectTreatment: (treatment: SalonTreatment) => void;
  onBookTreatment: (treatment: SalonTreatment) => void;
}

export const SalonTreatmentDiscovery: React.FC<SalonTreatmentDiscoveryProps> = ({
  activeCategory,
  onSelectCategory,
  savedIds,
  comparedIds,
  onToggleSave,
  onToggleCompare,
  onSelectTreatment,
  onBookTreatment
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [maxDuration, setMaxDuration] = useState<number>(0);
  const [vipOnly, setVipOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Extract unique brands
  const brands = useMemo(() => {
    const list = Array.from(new Set(SALON_TREATMENTS_CATALOG.map((t) => t.brandProduct)));
    return list.slice(0, 8);
  }, []);

  // Filter & Sort
  const filteredTreatments = useMemo(() => {
    return SALON_TREATMENTS_CATALOG.filter((t) => {
      // Category filter
      if (activeCategory && t.categoryId !== activeCategory) {
        return false;
      }
      // VIP Only
      if (vipOnly && !t.isVipSuiteEligible) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && t.brandProduct !== selectedBrand) {
        return false;
      }
      // Duration filter
      if (maxDuration > 0 && t.durationMinutes > maxDuration) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = t.title.toLowerCase().includes(query);
        const matchDesc = t.description.toLowerCase().includes(query);
        const matchBrand = t.brandProduct.toLowerCase().includes(query);
        const matchCat = t.categoryName.toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchBrand && !matchCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'duration') return b.durationMinutes - a.durationMinutes;
      return 0; // default order
    });
  }, [activeCategory, vipOnly, selectedBrand, maxDuration, searchQuery, sortBy]);

  const displayedTreatments = filteredTreatments.slice(0, visibleCount);

  const resetFilters = () => {
    onSelectCategory(null);
    setSearchQuery('');
    setSelectedBrand('all');
    setMaxDuration(0);
    setVipOnly(false);
    setSortBy('featured');
    setVisibleCount(12);
  };

  const hasMore = visibleCount < filteredTreatments.length;
  const progressPercent = Math.min(100, Math.round((displayedTreatments.length / (filteredTreatments.length || 1)) * 100));

  return (
    <section id="treatments" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>Grand Beauty Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            160 Sovereign <span className="italic font-normal text-amber-400">Rituals & Protocols</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Search and filter our comprehensive roster of luxury salon treatments, clinical aesthetic therapies, and VIP sanctuary rituals.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-6 mb-8 backdrop-blur-md shadow-2xl">
          {/* Main Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search by treatment, technique, brand (e.g. Balayage, Valmont, Caviar)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Filter Controls */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-start lg:justify-end">
              {/* VIP Suite Toggle */}
              <button
                onClick={() => setVipOnly(!vipOnly)}
                className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all ${
                  vipOnly
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>VIP Suite Only</span>
              </button>

              {/* Brand Filter */}
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                aria-label="Filter by Brand"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Brands ({brands.length}+)</option>
                {brands.map((b, idx) => (
                  <option key={idx} value={b}>{b}</option>
                ))}
              </select>

              {/* Duration Filter */}
              <select
                value={maxDuration}
                onChange={(e) => setMaxDuration(Number(e.target.value))}
                aria-label="Filter by Max Duration"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value={0}>Any Duration</option>
                <option value={60}>Up to 60 mins</option>
                <option value={90}>Up to 90 mins</option>
                <option value={120}>Up to 120 mins</option>
                <option value={180}>Up to 180 mins</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort treatments"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Longest Duration</option>
              </select>

              {/* Reset */}
              {(activeCategory || searchQuery || selectedBrand !== 'all' || maxDuration > 0 || vipOnly || sortBy !== 'featured') && (
                <button
                  onClick={resetFilters}
                  className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs flex items-center gap-1"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Quick Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => onSelectCategory(null)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === null
                  ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                  : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
              }`}
            >
              All Disciplines (160)
            </button>
            {BEAUTY_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(isSelected ? null : cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-neutral-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-neutral-950 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                  }`}
                >
                  {cat.name} ({cat.treatmentCount})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs text-neutral-400">
            Showing <span className="text-amber-400 font-semibold">{displayedTreatments.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredTreatments.length}</span> luxury treatments
          </p>
          {activeCategory && (
            <span className="text-xs text-amber-400 font-medium">
              Filtered by: {BEAUTY_CATEGORIES.find((c) => c.id === activeCategory)?.name}
            </span>
          )}
        </div>

        {/* Treatments Grid */}
        {displayedTreatments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedTreatments.map((treatment) => (
              <SalonTreatmentCard
                key={treatment.id}
                treatment={treatment}
                isSaved={savedIds.includes(treatment.id)}
                isCompared={comparedIds.includes(treatment.id)}
                onToggleSave={onToggleSave}
                onToggleCompare={onToggleCompare}
                onSelect={onSelectTreatment}
                onBook={onBookTreatment}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <Filter className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <p className="text-lg font-serif text-neutral-300 mb-2">No treatments match your filters</p>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
              Try adjusting your search query, clearing duration constraints, or selecting another discipline.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* "See More" Progressive Loading Section */}
        {filteredTreatments.length > 0 && (
          <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Showing <strong className="text-amber-400 font-bold">{displayedTreatments.length}</strong> of <strong className="text-neutral-200 font-bold">{filteredTreatments.length}</strong> Luxury Treatments</span>
                <span className="text-amber-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-900 border border-neutral-800 overflow-hidden">
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
                  onClick={() => setVisibleCount((prev) => Math.min(filteredTreatments.length, prev + 12))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-neutral-950 animate-bounce" />
                  <span>See More Treatments (+{Math.min(12, filteredTreatments.length - visibleCount)})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredTreatments.length)}
                  className="px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Show All {filteredTreatments.length} Treatments
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  All {filteredTreatments.length} Sovereign Rituals &amp; Protocols Displayed
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('treatments');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-amber-400 hover:underline inline-block pt-1"
                >
                  ↑ Return to Top of Treatments
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
