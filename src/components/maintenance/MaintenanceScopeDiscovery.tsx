'use strict';
import React, { useState, useMemo } from 'react';
import { MAINTENANCE_SCOPES_CATALOG, MaintenanceScope } from '@/data/maintenanceCatalogData';
import { MaintenanceScopeCard } from './MaintenanceScopeCard';
import { Search, SlidersHorizontal, RotateCcw, Crown, Clock, Filter, Truck, Wrench, MapPin, ChevronDown, Check } from 'lucide-react';

interface MaintenanceScopeDiscoveryProps {
  activeCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
  savedIds: string[];
  comparedIds: string[];
  onToggleSave: (id: string) => void;
  onToggleCompare: (id: string) => void;
  onSelectScope: (scope: MaintenanceScope) => void;
  onBookScope: (scope: MaintenanceScope) => void;
}

const DISCIPLINES = [
  { id: 'hvac-vrv-chiller', name: 'HVAC & VRV' },
  { id: 'electrical-thermal-db', name: 'Electrical & DB' },
  { id: 'plumbing-water-sterilization', name: 'Plumbing & Water' },
  { id: 'villa-amc-retainers', name: 'Villa AMC Contracts' },
  { id: 'emergency-rapid-dispatch', name: 'Rapid Dispatch' },
  { id: 'smart-iot-irrigation', name: 'Smart IoT Irrigation' },
  { id: 'pool-chiller-maintenance', name: 'Pools & Chillers' },
  { id: 'facade-masonry-pressure', name: 'Façade Deep Wash' }
];

export const MaintenanceScopeDiscovery: React.FC<MaintenanceScopeDiscoveryProps> = ({
  activeCategory,
  onSelectCategory,
  savedIds,
  comparedIds,
  onToggleSave,
  onToggleCompare,
  onSelectScope,
  onBookScope
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Extract unique communities
  const communities = useMemo(() => {
    return Array.from(new Set(MAINTENANCE_SCOPES_CATALOG.map((s) => s.communityTarget.split(' ')[0])));
  }, []);

  // Filter & Sort
  const filteredScopes = useMemo(() => {
    return MAINTENANCE_SCOPES_CATALOG.filter((s) => {
      // Category filter
      if (activeCategory && s.categoryId !== activeCategory) {
        return false;
      }
      // Community filter
      if (selectedCommunity !== 'all' && !s.communityTarget.includes(selectedCommunity)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = s.title.toLowerCase().includes(query);
        const matchDesc = s.description.toLowerCase().includes(query);
        const matchComm = s.communityTarget.toLowerCase().includes(query);
        const matchCat = s.categoryName.toLowerCase().includes(query);
        const matchStd = s.certifiedStandards.some((std) => std.toLowerCase().includes(query));
        if (!matchTitle && !matchDesc && !matchComm && !matchCat && !matchStd) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      return 0; // default
    });
  }, [activeCategory, selectedCommunity, searchQuery, sortBy]);

  const displayedScopes = filteredScopes.slice(0, visibleCount);

  const resetFilters = () => {
    onSelectCategory(null);
    setSearchQuery('');
    setSelectedCommunity('all');
    setSortBy('featured');
    setVisibleCount(12);
  };

  const hasMore = visibleCount < filteredScopes.length;
  const progressPercent = Math.min(100, Math.round((displayedScopes.length / (filteredScopes.length || 1)) * 100));

  return (
    <section id="scopes" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>Master MEP Services Registry</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            160 Technical <span className="italic font-normal text-emerald-400">Maintenance Scopes & AMC Plans</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Instant GPS-tracked technician van dispatch across Palm Jumeirah, Emirates Hills, Dubai Hills, and Saadiyat Island.
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
                placeholder="Search services, standards (e.g. AC Coil Wash, Water Tank, Chiller, Palm)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 placeholder-neutral-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
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
              {/* Community Filter */}
              <select
                value={selectedCommunity}
                onChange={(e) => setSelectedCommunity(e.target.value)}
                aria-label="Filter by UAE Community"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-emerald-500"
              >
                <option value="all">All Service Communities ({communities.length})</option>
                {communities.map((comm, idx) => (
                  <option key={idx} value={comm}>{comm}</option>
                ))}
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort maintenance services"
                className="px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-300 text-xs focus:outline-none focus:border-emerald-500"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Rate: Low to High</option>
                <option value="price-desc">Rate: High to Low</option>
              </select>

              {/* Reset */}
              {(activeCategory || searchQuery || selectedCommunity !== 'all' || sortBy !== 'featured') && (
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
                  ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20'
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
                      ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20'
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
            Showing <span className="text-emerald-400 font-semibold">{displayedScopes.length}</span> of{' '}
            <span className="text-white font-semibold">{filteredScopes.length}</span> technical maintenance scopes
          </p>
          {activeCategory && (
            <span className="text-xs text-emerald-400 font-medium">
              Filtered by: {DISCIPLINES.find((c) => c.id === activeCategory)?.name}
            </span>
          )}
        </div>

        {/* Scopes Grid */}
        {displayedScopes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedScopes.map((scope) => (
              <MaintenanceScopeCard
                key={scope.id}
                scope={scope}
                isSaved={savedIds.includes(scope.id)}
                isCompared={comparedIds.includes(scope.id)}
                onToggleSave={onToggleSave}
                onToggleCompare={onToggleCompare}
                onSelect={onSelectScope}
                onBook={onBookScope}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-900/40 rounded-2xl border border-neutral-800">
            <Filter className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
            <p className="text-lg font-serif text-neutral-300 mb-2">No maintenance scopes match your criteria</p>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto mb-4">
              Try modifying your search keywords, clearing community filters, or selecting another discipline.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-full bg-emerald-500 text-neutral-950 font-bold text-xs uppercase tracking-wider"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* "See More" Progressive Loading Section */}
        {filteredScopes.length > 0 && (
          <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col items-center justify-center space-y-5">
            {/* Progress Telemetry Bar */}
            <div className="w-full max-w-md space-y-2 text-center">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Showing <strong className="text-emerald-400 font-bold">{displayedScopes.length}</strong> of <strong className="text-neutral-200 font-bold">{filteredScopes.length}</strong> Maintenance Scopes</span>
                <span className="text-emerald-400 font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-neutral-900 border border-neutral-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            {hasMore ? (
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setVisibleCount((prev) => Math.min(filteredScopes.length, prev + 12))}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-neutral-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-emerald-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ChevronDown className="w-4 h-4 text-neutral-950 animate-bounce" />
                  <span>See More Scopes (+{Math.min(12, filteredScopes.length - visibleCount)})</span>
                </button>

                <button
                  onClick={() => setVisibleCount(filteredScopes.length)}
                  className="px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                >
                  Show All {filteredScopes.length} Scopes
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  All {filteredScopes.length} Specialized Maintenance Scopes Displayed
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('scopes');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-mono text-emerald-400 hover:underline inline-block pt-1"
                >
                  ↑ Return to Top of Maintenance Registry
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
