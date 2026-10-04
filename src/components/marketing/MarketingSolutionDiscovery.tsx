'use strict';
import React, { useState, useMemo } from 'react';
import { MARKETING_SOLUTIONS_CATALOG, MarketingSolution } from '@/data/marketingCatalogData';
import { MarketingSolutionCard } from './MarketingSolutionCard';
import { Search, SlidersHorizontal, RotateCcw, Crown, Clock, Filter, TrendingUp, Zap, ChevronDown, Check } from 'lucide-react';

interface MarketingSolutionDiscoveryProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  savedIds: string[];
  comparedIds: string[];
  onToggleSave: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectSolution: (solution: MarketingSolution) => void;
  onBookSolution: (solution: MarketingSolution) => void;
}

const DISCIPLINES = [
  { id: 'performance-ppc', name: 'Performance PPC' },
  { id: 'bilingual-seo', name: 'Bilingual SEO' },
  { id: 'cro-funnel', name: 'CRO & Funnels' },
  { id: 'luxury-influencer', name: 'Influencer Matrix' },
  { id: 'crm-automation', name: 'WhatsApp & CRM' },
  { id: 'creative-video-production', name: '4K Video & 3D' },
  { id: 'ai-growth-intelligence', name: 'AI Lead Models' },
  { id: 'brand-identity-launch', name: 'Brand Systems' }
];

export const MarketingSolutionDiscovery: React.FC<MarketingSolutionDiscoveryProps> = ({
  activeCategory,
  onSelectCategory,
  savedIds,
  comparedIds,
  onToggleSave,
  onToggleCompare,
  onSelectSolution,
  onBookSolution
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [maxDurationWeeks, setMaxDurationWeeks] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Unique Industries
  const industries = useMemo(() => {
    return Array.from(new Set(MARKETING_SOLUTIONS_CATALOG.map((s) => s.industryFocus)));
  }, []);

  // Filter & Sort
  const filteredSolutions = useMemo(() => {
    return MARKETING_SOLUTIONS_CATALOG.filter((s) => {
      // Category filter
      if (activeCategory && s.categoryId !== activeCategory) {
        return false;
      }
      // Industry filter
      if (selectedIndustry !== 'all' && s.industryFocus !== selectedIndustry) {
        return false;
      }
      // Duration filter
      if (maxDurationWeeks > 0 && s.durationWeeks > maxDurationWeeks) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = s.title.toLowerCase().includes(query);
        const matchDesc = s.description.toLowerCase().includes(query);
        const matchInd = s.industryFocus.toLowerCase().includes(query);
        const matchCat = s.categoryName.toLowerCase().includes(query);
        const matchTech = s.techStack.some((t) => t.toLowerCase().includes(query));
        if (!matchTitle && !matchDesc && !matchInd && !matchCat && !matchTech) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'duration') return b.durationWeeks - a.durationWeeks;
      return 0; // default
    });
  }, [activeCategory, selectedIndustry, maxDurationWeeks, searchQuery, sortBy]);

  const displayedSolutions = filteredSolutions.slice(0, visibleCount);

  const resetFilters = () => {
    onSelectCategory(null);
    setSearchQuery('');
    setSelectedIndustry('all');
    setMaxDurationWeeks(0);
    setSortBy('featured');
    setVisibleCount(12);
  };

  const hasMore = visibleCount < filteredSolutions.length;
  const progressPercent = Math.min(100, Math.round((displayedSolutions.length / (filteredSolutions.length || 1)) * 100));

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>Master Enterprise Growth Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            160 Sovereign <span className="italic font-normal text-amber-400">Growth Protocols & Sprints</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Deploy precision growth infrastructure across real estate, fintech, luxury automotive, and high-ticket GCC commerce.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-4 sm:p-6 mb-8 backdrop-blur-md shadow-2xl">
          {/* Main Controls Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search solutions, tech (e.g. Google Ads, WhatsApp, SEO, Real Estate)..."
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
              {/* Industry Filter */}
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                aria-label="Filter by Industry"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Industries ({industries.length})</option>
                {industries.map((ind, idx) => (
                  <option key={idx} value={ind}>{ind}</option>
                ))}
              </select>

              {/* Duration Filter */}
              <select
                value={maxDurationWeeks}
                onChange={(e) => setMaxDurationWeeks(Number(e.target.value))}
                aria-label="Filter by Max Duration Weeks"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value={0}>Any Timeline</option>
                <option value={3}>Up to 3 Weeks</option>
                <option value={5}>Up to 5 Weeks</option>
                <option value={8}>Up to 8 Weeks</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort solutions"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="duration">Longest Sprint</option>
              </select>

              {/* Reset */}
              {(activeCategory || searchQuery || selectedIndustry !== 'all' || maxDurationWeeks > 0 || sortBy !== 'featured') && (
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
            {DISCIPLINES.map((cat) => {
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
                  {cat.name} (20)
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs text-neutral-400">
            Showing <span className="text-amber-400 font-semibold">{displayedSolutions.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredSolutions.length}</span> enterprise growth solutions
          </p>
          {activeCategory && (
            <span className="text-xs text-amber-400 font-medium">
              Filtered by: {DISCIPLINES.find((c) => c.id === activeCategory)?.name}
            </span>
          )}
        </div>

        {/* Solutions Grid */}
        {displayedSolutions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedSolutions.map((solution) => (
              <MarketingSolutionCard
                key={solution.id}
                solution={solution}
                isSaved={savedIds.includes(solution.id)}
                isCompared={comparedIds.includes(solution.id)}
                onToggleSave={onToggleSave}
                onToggleCompare={onToggleCompare}
                onSelect={onSelectSolution}
                onBook={onBookSolution}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <Filter className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <p className="text-lg font-serif text-neutral-300 mb-2">No growth solutions match your criteria</p>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
              Try modifying your search keywords, clearing industry filters, or choosing a different growth discipline.
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
        {filteredSolutions.length > 0 && (
          <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Showing <strong className="text-amber-400 font-bold">{displayedSolutions.length}</strong> of <strong className="text-neutral-200 font-bold">{filteredSolutions.length}</strong> Growth Protocols</span>
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
                  onClick={() => setVisibleCount((prev) => Math.min(filteredSolutions.length, prev + 12))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-neutral-950 animate-bounce" />
                  <span>See More Solutions (+{Math.min(12, filteredSolutions.length - visibleCount)})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredSolutions.length)}
                  className="px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Show All {filteredSolutions.length} Solutions
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-400" />
                  All {filteredSolutions.length} Sovereign Growth Protocols Displayed
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('solutions');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-amber-400 hover:underline inline-block pt-1"
                >
                  ↑ Return to Top of Solutions
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
