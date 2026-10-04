'use client';

import React, { useState, useMemo } from 'react';
import { CleaningService } from '@/data/cleaningCatalogData';
import { CLEANING_CATEGORIES } from '@/data/cleaningData';
import { CleaningServiceCard } from './CleaningServiceCard';
import { 
  Layers, 
  SlidersHorizontal, 
  Search, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Check,
  ShieldCheck, 
  Clock, 
  Users 
} from 'lucide-react';

interface CleaningServiceDiscoveryProps {
  services: CleaningService[];
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  savedIds: string[];
  compareIds: string[];
  onToggleSave: (s: CleaningService) => void;
  onToggleCompare: (s: CleaningService) => void;
  onSelectService: (s: CleaningService) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
  searchFilter?: string;
}

export const CleaningServiceDiscovery: React.FC<CleaningServiceDiscoveryProps> = ({
  services,
  activeCategory,
  onSelectCategory,
  savedIds,
  compareIds,
  onToggleSave,
  onToggleCompare,
  onSelectService,
  currency,
  searchFilter = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(searchFilter);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>('all');
  const [selectedSpeed, setSelectedSpeed] = useState<string>('all');
  const [priceTier, setPriceTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating-desc' | 'duration-asc'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  React.useEffect(() => {
    if (searchFilter) {
      setSearchTerm(searchFilter);
    }
  }, [searchFilter]);

  // Filtered & Sorted Services
  const filteredServices = useMemo(() => {
    return services.filter((s: CleaningService) => {
      // Category filter
      if (activeCategory !== 'all' && s.categoryId !== activeCategory) {
        return false;
      }

      // Typology filter
      if (selectedPropertyType !== 'all' && !s.propertyType.toLowerCase().includes(selectedPropertyType.toLowerCase())) {
        return false;
      }

      // Speed filter
      if (selectedSpeed !== 'all') {
        if (selectedSpeed === 'same-day' && !s.turnaroundSpeed.includes('Same-Day')) return false;
        if (selectedSpeed === 'scheduled' && !s.turnaroundSpeed.includes('Scheduled')) return false;
      }

      // Price Tier filter (AED)
      if (priceTier !== 'all') {
        if (priceTier === 'under-1000' && s.priceAED > 1000) return false;
        if (priceTier === '1000-2000' && (s.priceAED < 1000 || s.priceAED > 2000)) return false;
        if (priceTier === '2000-3500' && (s.priceAED < 2000 || s.priceAED > 3500)) return false;
        if (priceTier === '3500-plus' && s.priceAED < 3500) return false;
      }

      // Keyword search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = s.title.toLowerCase().includes(query);
        const matchesCat = s.categoryName.toLowerCase().includes(query);
        const matchesDesc = s.description.toLowerCase().includes(query);
        const matchesType = s.propertyType.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCat && !matchesDesc && !matchesType) {
          return false;
        }
      }

      return true;
    }).sort((a: CleaningService, b: CleaningService) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'rating-desc') return b.rating - a.rating;
      if (sortBy === 'duration-asc') return a.durationHours - b.durationHours;
      return 0; // featured default
    });
  }, [
    services,
    activeCategory,
    selectedPropertyType,
    selectedSpeed,
    priceTier,
    searchTerm,
    sortBy
  ]);

  const displayedServices = useMemo(() => {
    return filteredServices.slice(0, visibleCount);
  }, [filteredServices, visibleCount]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSelectedPropertyType('all');
    setSelectedSpeed('all');
    setPriceTier('all');
    setSearchTerm('');
    setSortBy('featured');
    setVisibleCount(12);
  };

  const hasMore = visibleCount < filteredServices.length;
  const progressPercent = Math.min(100, Math.round((displayedServices.length / (filteredServices.length || 1)) * 100));

  return (
    <section id="service-discovery" className="py-20 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>The Sovereign Service Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              160+ Precision Cleaning Protocols
            </h2>
            <p className="text-zinc-400 text-sm mt-1 font-light">
              Displaying <span className="text-emerald-400 font-mono font-semibold">{filteredServices.length}</span> specialized cleaning protocols matching your property criteria.
            </p>
          </div>

          {/* Quick Controls: Sort & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
            >
              <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
              <span>Filters</span>
            </button>

            <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 rounded-xl px-3 py-2 text-xs">
              <span className="text-zinc-500 font-mono hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as any);
                  setVisibleCount(12);
                }}
                className="bg-transparent text-zinc-200 focus:outline-none cursor-pointer font-mono"
              >
                <option value="featured">Featured Curated</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="duration-asc">Fastest Execution</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main 2-Column Layout (Filters Sidebar + Service Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <SlidersHorizontal className="w-4 h-4 text-emerald-400" />
                <span>Refine Catalog</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-[11px] font-mono text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Keyword Search inside Sidebar */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Keyword Search
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Deep clean, marble, sofa..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="w-full pl-9 pr-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-emerald-500/60 focus:outline-none"
                />
              </div>
            </div>

            {/* Discipline Selector */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Service Discipline
              </label>
              <select
                value={activeCategory}
                onChange={(e) => {
                  onSelectCategory(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-emerald-500/60 focus:outline-none cursor-pointer"
              >
                <option value="all">All 8 Disciplines ({services.length})</option>
                {CLEANING_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Typology */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Property Typology
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'All Typologies' },
                  { id: 'Villa', label: 'Mansion / Villa' },
                  { id: 'Penthouse', label: 'Penthouse' },
                  { id: 'Office', label: 'Corporate Office' },
                  { id: 'Clinic', label: 'Medical Clinic' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedPropertyType(type.id);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      selectedPropertyType === type.id
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Turnaround Speed */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Dispatch Speed
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'All Dispatches' },
                  { id: 'same-day', label: 'Same-Day VIP' },
                  { id: 'scheduled', label: 'Scheduled Slot' }
                ].map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => {
                      setSelectedSpeed(sp.id);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      selectedSpeed === sp.id
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {sp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Tier */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Package Budget (AED)
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'Any Budget' },
                  { id: 'under-1000', label: '< AED 1,000' },
                  { id: '1000-2000', label: '1,000 – 2,000' },
                  { id: '2000-3500', label: '2,000 – 3,500' },
                  { id: '3500-plus', label: 'AED 3,500+' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setPriceTier(tier.id);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      priceTier === tier.id
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Service Cards Grid + Pagination */}
          <main className="lg:col-span-9 flex flex-col justify-between">
            {filteredServices.length === 0 ? (
              <div className="py-24 text-center bg-zinc-900/30 rounded-3xl border border-zinc-800/80 p-8">
                <Layers className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-white mb-2">No Services Match Your Filter</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                  Try adjusting your keywords or category selections to explore our 160+ specialized UAE cleaning programs.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {displayedServices.map((service) => (
                    <CleaningServiceCard
                      key={service.id}
                      service={service}
                      isSaved={savedIds.includes(service.id)}
                      isCompared={compareIds.includes(service.id)}
                      onToggleSave={onToggleSave}
                      onToggleCompare={onToggleCompare}
                      onSelectService={onSelectService}
                      currency={currency}
                    />
                  ))}
                </div>

                {/* "See More" Progressive Loading Section */}
                {filteredServices.length > 0 && (
                  <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
                    {/* Progress Telemetry Bar */}
                    <div className="w-full max-w-md space-y-2 text-center">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>Showing <strong className="text-emerald-400 font-bold">{displayedServices.length}</strong> of <strong className="text-zinc-200 font-bold">{filteredServices.length}</strong> Cleaning Protocols</span>
                        <span className="text-emerald-400 font-bold">{progressPercent}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
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
                          onClick={() => setVisibleCount(prev => Math.min(filteredServices.length, prev + 12))}
                          className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-emerald-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                        >
                          <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                          <span>See More Protocols (+{Math.min(12, filteredServices.length - visibleCount)})</span>
                        </button>

                        <button
                          onClick={() => setVisibleCount(filteredServices.length)}
                          className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                        >
                          Show All {filteredServices.length} Protocols
                        </button>
                      </div>
                    ) : (
                      <div className="text-center space-y-2">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          All {filteredServices.length} Specialized Cleaning Protocols Displayed
                        </p>
                        <button
                          onClick={() => {
                            const el = document.getElementById('service-discovery');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-xs font-mono text-emerald-400 hover:underline inline-block pt-1"
                        >
                          ↑ Return to Top of Catalog
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};
