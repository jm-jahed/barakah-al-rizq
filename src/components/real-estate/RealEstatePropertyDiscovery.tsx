'use client';

import React, { useState, useMemo } from 'react';
import { LuxuryProperty, PRIME_COMMUNITIES } from '@/data/realEstateData';
import { RealEstatePropertyCard } from './RealEstatePropertyCard';
import { 
  Building2, 
  Filter, 
  SlidersHorizontal, 
  Search, 
  Grid, 
  Layers, 
  X, 
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  ShieldCheck,
  TrendingUp,
  MapPin
} from 'lucide-react';

interface RealEstatePropertyDiscoveryProps {
  properties: LuxuryProperty[];
  activeCommunity: string;
  onSelectCommunity: (commId: string) => void;
  savedIds: string[];
  compareIds: string[];
  onToggleSave: (prop: LuxuryProperty) => void;
  onToggleCompare: (prop: LuxuryProperty) => void;
  onSelectProperty: (prop: LuxuryProperty) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
  searchFilter?: string;
}

export const RealEstatePropertyDiscovery: React.FC<RealEstatePropertyDiscoveryProps> = ({
  properties,
  activeCommunity,
  onSelectCommunity,
  savedIds,
  compareIds,
  onToggleSave,
  onToggleCompare,
  onSelectProperty,
  currency,
  searchFilter = ''
}) => {
  // Local Filtering States
  const [searchTerm, setSearchTerm] = useState(searchFilter);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('all');
  const [priceTier, setPriceTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'sqft-desc' | 'yield-desc'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Sync external searchFilter if changed
  React.useEffect(() => {
    if (searchFilter) {
      setSearchTerm(searchFilter);
    }
  }, [searchFilter]);

  // Extract unique developers
  const uniqueDevelopers = useMemo(() => {
    const set = new Set<string>();
    properties.forEach((p: LuxuryProperty) => set.add(p.developer));
    return Array.from(set);
  }, [properties]);

  // Filtered & Sorted Properties
  const filteredProperties = useMemo(() => {
    return properties.filter((p: LuxuryProperty) => {
      // Community filter
      if (activeCommunity !== 'all' && p.communityId !== activeCommunity) {
        return false;
      }

      // Typology filter
      if (selectedType !== 'all' && !p.type.toLowerCase().includes(selectedType.toLowerCase())) {
        return false;
      }

      // Bedrooms filter
      if (selectedBedrooms !== 'all') {
        const beds = parseInt(selectedBedrooms, 10);
        if (selectedBedrooms === '7+' && p.bedrooms < 7) return false;
        if (selectedBedrooms !== '7+' && p.bedrooms !== beds) return false;
      }

      // Status filter
      if (selectedStatus !== 'all') {
        if (selectedStatus === 'Ready' && !p.status.includes('Ready')) return false;
        if (selectedStatus === 'Off-Plan' && !p.status.includes('Off-Plan')) return false;
      }

      // Developer filter
      if (selectedDeveloper !== 'all' && p.developer !== selectedDeveloper) {
        return false;
      }

      // Price Tier filter (AED)
      if (priceTier !== 'all') {
        if (priceTier === 'under-15m' && p.priceAED > 15000000) return false;
        if (priceTier === '15m-30m' && (p.priceAED < 15000000 || p.priceAED > 30000000)) return false;
        if (priceTier === '30m-60m' && (p.priceAED < 30000000 || p.priceAED > 60000000)) return false;
        if (priceTier === '60m-plus' && p.priceAED < 60000000) return false;
      }

      // Keyword search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesComm = p.communityName.toLowerCase().includes(query);
        const matchesDev = p.developer.toLowerCase().includes(query);
        const matchesType = p.type.toLowerCase().includes(query);
        if (!matchesTitle && !matchesComm && !matchesDev && !matchesType) {
          return false;
        }
      }

      return true;
    }).sort((a: LuxuryProperty, b: LuxuryProperty) => {
      if (sortBy === 'price-asc') return a.priceAED - b.priceAED;
      if (sortBy === 'price-desc') return b.priceAED - a.priceAED;
      if (sortBy === 'sqft-desc') return b.builtUpAreaSqft - a.builtUpAreaSqft;
      if (sortBy === 'yield-desc') return b.rentalYieldPct - a.rentalYieldPct;
      return 0; // featured default
    });
  }, [
    properties,
    activeCommunity,
    selectedType,
    selectedBedrooms,
    selectedStatus,
    selectedDeveloper,
    priceTier,
    searchTerm,
    sortBy
  ]);

  const displayedProperties = useMemo(() => {
    return filteredProperties.slice(0, visibleCount);
  }, [filteredProperties, visibleCount]);

  const resetFilters = () => {
    onSelectCommunity('all');
    setSelectedType('all');
    setSelectedBedrooms('all');
    setSelectedStatus('all');
    setSelectedDeveloper('all');
    setPriceTier('all');
    setSearchTerm('');
    setSortBy('featured');
    setVisibleCount(12);
  };

  const hasMore = visibleCount < filteredProperties.length;
  const progressPercent = Math.min(100, Math.round((displayedProperties.length / (filteredProperties.length || 1)) * 100));

  return (
    <section id="property-discovery" className="py-20 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>The Private Client Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              UAE Prime Real Estate Catalog
            </h2>
            <p className="text-zinc-400 text-sm mt-1 font-light">
              Displaying <span className="text-amber-400 font-mono font-semibold">{filteredProperties.length}</span> luxury estates matching your acquisition criteria.
            </p>
          </div>

          {/* Quick Controls: Sort & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
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
                <option value="sqft-desc">Largest Built-up Area</option>
                <option value="yield-desc">Highest Rental Yield</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main 2-Column Layout (Filters Sidebar + Property Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <span>Refine Portfolio</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-[11px] font-mono text-zinc-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
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
                  placeholder="Villa, Penthouse, Frond..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="w-full pl-9 pr-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none"
                />
              </div>
            </div>

            {/* Community Selector */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Community / Location
              </label>
              <select
                value={activeCommunity}
                onChange={(e) => {
                  onSelectCommunity(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none cursor-pointer"
              >
                <option value="all">All Prime Communities ({properties.length})</option>
                {PRIME_COMMUNITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.emirate})
                  </option>
                ))}
              </select>
            </div>

            {/* Price Tier */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Acquisition Budget (AED)
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'Any Price' },
                  { id: 'under-15m', label: '< AED 15M' },
                  { id: '15m-30m', label: '15M – 30M' },
                  { id: '30m-60m', label: '30M – 60M' },
                  { id: '60m-plus', label: 'AED 60M+' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setPriceTier(tier.id);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      priceTier === tier.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Typology */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Typology
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                {['all', 'Villa', 'Penthouse', 'Mansion', 'Sky Villa'].map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      selectedType === type
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {type === 'all' ? 'All Types' : type}
                  </button>
                ))}
              </div>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Bedrooms
              </label>
              <div className="grid grid-cols-5 gap-1 text-[11px] font-mono">
                {['all', '3', '4', '5', '6', '7+'].map((bed) => (
                  <button
                    key={bed}
                    onClick={() => {
                      setSelectedBedrooms(bed);
                      setVisibleCount(12);
                    }}
                    className={`py-1 rounded-lg border text-center transition-all ${
                      selectedBedrooms === bed
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {bed === 'all' ? 'All' : bed}
                  </button>
                ))}
              </div>
            </div>

            {/* Handover Status */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Status
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'Ready', label: 'Ready' },
                  { id: 'Off-Plan', label: 'Off-Plan' }
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => {
                      setSelectedStatus(st.id);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      selectedStatus === st.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Developer Filter */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Master Developer
              </label>
              <select
                value={selectedDeveloper}
                onChange={(e) => {
                  setSelectedDeveloper(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none cursor-pointer"
              >
                <option value="all">All Developers</option>
                {uniqueDevelopers.map((dev) => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>
            </div>
          </aside>

          {/* Property Cards Grid + Pagination */}
          <main className="lg:col-span-9 flex flex-col justify-between">
            {filteredProperties.length === 0 ? (
              <div className="py-24 text-center bg-zinc-900/30 rounded-3xl border border-zinc-800/80 p-8">
                <Building2 className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-white mb-2">No Properties Match Your Search</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                  Try adjusting your budget, community, or bedroom filters to explore our 216+ luxury portfolio listings.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs font-mono uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {displayedProperties.map((property) => (
                    <RealEstatePropertyCard
                      key={property.id}
                      property={property}
                      isSaved={savedIds.includes(property.id)}
                      isCompared={compareIds.includes(property.id)}
                      onToggleSave={onToggleSave}
                      onToggleCompare={onToggleCompare}
                      onSelectProperty={onSelectProperty}
                      currency={currency}
                    />
                  ))}
                </div>

                {/* "See More" Progressive Loading Section */}
                {filteredProperties.length > 0 && (
                  <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
                    {/* Progress Telemetry Bar */}
                    <div className="w-full max-w-md space-y-2 text-center">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>Showing <strong className="text-amber-400 font-bold">{displayedProperties.length}</strong> of <strong className="text-zinc-200 font-bold">{filteredProperties.length}</strong> Luxury Estates</span>
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
                          onClick={() => setVisibleCount(prev => Math.min(filteredProperties.length, prev + 12))}
                          className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                        >
                          <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                          <span>See More Estates (+{Math.min(12, filteredProperties.length - visibleCount)})</span>
                        </button>

                        <button
                          onClick={() => setVisibleCount(filteredProperties.length)}
                          className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                        >
                          Show All {filteredProperties.length} Estates
                        </button>
                      </div>
                    ) : (
                      <div className="text-center space-y-2">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                          <Check className="w-4 h-4 text-amber-400" />
                          All {filteredProperties.length} Sovereign Dubai Estates Displayed
                        </p>
                        <button
                          onClick={() => {
                            const el = document.getElementById('property-discovery');
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
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};
