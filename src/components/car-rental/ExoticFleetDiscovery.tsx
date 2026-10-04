'use client';

import React, { useState, useMemo } from 'react';
import { ExoticVehicle } from '@/data/carRentalCatalogData';
import { VEHICLE_CATEGORIES } from '@/data/carRentalData';
import { ExoticVehicleCard } from './ExoticVehicleCard';
import { 
  Car, 
  SlidersHorizontal, 
  Search, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  Check,
  ShieldCheck, 
  Gauge, 
  Flame 
} from 'lucide-react';

interface ExoticFleetDiscoveryProps {
  vehicles: ExoticVehicle[];
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
  savedIds: string[];
  compareIds: string[];
  onToggleSave: (v: ExoticVehicle) => void;
  onToggleCompare: (v: ExoticVehicle) => void;
  onSelectVehicle: (v: ExoticVehicle) => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
  searchFilter?: string;
  selectedBrandFilter?: string;
}

export const ExoticFleetDiscovery: React.FC<ExoticFleetDiscoveryProps> = ({
  vehicles,
  activeCategory,
  onSelectCategory,
  savedIds,
  compareIds,
  onToggleSave,
  onToggleCompare,
  onSelectVehicle,
  currency,
  searchFilter = '',
  selectedBrandFilter = 'all'
}) => {
  const [searchTerm, setSearchTerm] = useState(searchFilter);
  const [selectedBrand, setSelectedBrand] = useState<string>(selectedBrandFilter);
  const [priceTier, setPriceTier] = useState<string>('all');
  const [horsepowerTier, setHorsepowerTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'hp-desc' | 'speed-asc'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  React.useEffect(() => {
    if (searchFilter) setSearchTerm(searchFilter);
    if (selectedBrandFilter) setSelectedBrand(selectedBrandFilter);
  }, [searchFilter, selectedBrandFilter]);

  const uniqueBrands = useMemo(() => {
    const set = new Set<string>();
    vehicles.forEach((v: ExoticVehicle) => set.add(v.brand));
    return Array.from(set);
  }, [vehicles]);

  // Filtered & Sorted Vehicles
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((v: ExoticVehicle) => {
      // Category filter
      if (activeCategory !== 'all' && v.categoryId !== activeCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'all' && v.brand !== selectedBrand) {
        return false;
      }

      // Price Tier filter (AED / day)
      if (priceTier !== 'all') {
        if (priceTier === 'under-3000' && v.dailyPriceAED > 3000) return false;
        if (priceTier === '3000-5000' && (v.dailyPriceAED < 3000 || v.dailyPriceAED > 5000)) return false;
        if (priceTier === '5000-plus' && v.dailyPriceAED < 5000) return false;
      }

      // Horsepower Tier
      if (horsepowerTier !== 'all') {
        if (horsepowerTier === 'under-600' && v.horsepower >= 600) return false;
        if (horsepowerTier === '600-800' && (v.horsepower < 600 || v.horsepower > 800)) return false;
        if (horsepowerTier === '800-plus' && v.horsepower < 800) return false;
      }

      // Keyword search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = v.title.toLowerCase().includes(query);
        const matchesBrand = v.brand.toLowerCase().includes(query);
        const matchesModel = v.model.toLowerCase().includes(query);
        const matchesCat = v.categoryName.toLowerCase().includes(query);
        if (!matchesTitle && !matchesBrand && !matchesModel && !matchesCat) {
          return false;
        }
      }

      return true;
    }).sort((a: ExoticVehicle, b: ExoticVehicle) => {
      if (sortBy === 'price-asc') return a.dailyPriceAED - b.dailyPriceAED;
      if (sortBy === 'price-desc') return b.dailyPriceAED - a.dailyPriceAED;
      if (sortBy === 'hp-desc') return b.horsepower - a.horsepower;
      if (sortBy === 'speed-asc') return parseFloat(a.acceleration0100) - parseFloat(b.acceleration0100);
      return 0; // featured default
    });
  }, [
    vehicles,
    activeCategory,
    selectedBrand,
    priceTier,
    horsepowerTier,
    searchTerm,
    sortBy
  ]);

  const displayedVehicles = useMemo(() => {
    return filteredVehicles.slice(0, visibleCount);
  }, [filteredVehicles, visibleCount]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSelectedBrand('all');
    setPriceTier('all');
    setHorsepowerTier('all');
    setSearchTerm('');
    setSortBy('featured');
    setVisibleCount(12);
  };

  const hasMore = visibleCount < filteredVehicles.length;
  const progressPercent = Math.min(100, Math.round((displayedVehicles.length / (filteredVehicles.length || 1)) * 100));

  return (
    <section id="fleet-discovery" className="py-20 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 pb-6 border-b border-zinc-900 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Car className="w-3.5 h-3.5" />
              <span>Sovereign Fleet Inventory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              192+ Exotic Supercars & Limousines
            </h2>
            <p className="text-zinc-400 text-sm mt-1 font-light">
              Displaying <span className="text-amber-400 font-mono font-semibold">{filteredVehicles.length}</span> exotic supercars available for immediate 30-minute delivery in Dubai.
            </p>
          </div>

          {/* Quick Controls */}
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
                <option value="featured">Featured Reserve</option>
                <option value="price-desc">Daily Rate: High to Low</option>
                <option value="price-asc">Daily Rate: Low to High</option>
                <option value="hp-desc">Highest Horsepower</option>
                <option value="speed-asc">Fastest 0-100 km/h</option>
              </select>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 h-fit sticky top-24">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                <span>Refine Fleet</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-[11px] font-mono text-zinc-400 hover:text-amber-400 flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Keyword Search */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Keyword Search
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="SF90, Spectre, Urus..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleCount(12);
                  }}
                  className="w-full pl-9 pr-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:border-amber-500/60 focus:outline-none"
                />
              </div>
            </div>

            {/* Marque / Brand */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Automotive Marque
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none cursor-pointer"
              >
                <option value="all">All Brands ({vehicles.length})</option>
                {uniqueBrands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Fleet Category
              </label>
              <select
                value={activeCategory}
                onChange={(e) => {
                  onSelectCategory(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3 py-2 bg-zinc-950/80 border border-zinc-800 rounded-xl text-xs text-zinc-200 focus:border-amber-500/60 focus:outline-none cursor-pointer"
              >
                <option value="all">All 8 Disciplines</option>
                {VEHICLE_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Daily Rate Tier */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Daily Lease Rate (AED)
              </label>
              <div className="grid grid-cols-2 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'Any Rate' },
                  { id: 'under-3000', label: '< AED 3,000' },
                  { id: '3000-5000', label: '3,000 – 5,000' },
                  { id: '5000-plus', label: 'AED 5,000+' }
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

            {/* Horsepower Tier */}
            <div>
              <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2 block">
                Horsepower (HP)
              </label>
              <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono">
                {[
                  { id: 'all', label: 'All' },
                  { id: '600-800', label: '600-800' },
                  { id: '800-plus', label: '800+ HP' }
                ].map((hp) => (
                  <button
                    key={hp.id}
                    onClick={() => {
                      setHorsepowerTier(hp.id);
                      setVisibleCount(12);
                    }}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                      horsepowerTier === hp.id
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {hp.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Vehicle Cards Grid + Pagination */}
          <main className="lg:col-span-9 flex flex-col justify-between">
            {filteredVehicles.length === 0 ? (
              <div className="py-24 text-center bg-zinc-900/30 rounded-3xl border border-zinc-800/80 p-8">
                <Car className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-white mb-2">No Supercars Match Your Filter</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                  Try adjusting your search criteria or brand selections to browse our 192+ luxury exotics.
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
                  {displayedVehicles.map((vehicle) => (
                    <ExoticVehicleCard
                      key={vehicle.id}
                      vehicle={vehicle}
                      isSaved={savedIds.includes(vehicle.id)}
                      isCompared={compareIds.includes(vehicle.id)}
                      onToggleSave={onToggleSave}
                      onToggleCompare={onToggleCompare}
                      onSelectVehicle={onSelectVehicle}
                      currency={currency}
                    />
                  ))}
                </div>

                {/* "See More" Progressive Loading Section */}
                {filteredVehicles.length > 0 && (
                  <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col items-center justify-center space-y-5">
                    {/* Progress Telemetry Bar */}
                    <div className="w-full max-w-md space-y-2 text-center">
                      <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span>Showing <strong className="text-amber-400 font-bold">{displayedVehicles.length}</strong> of <strong className="text-zinc-200 font-bold">{filteredVehicles.length}</strong> Supercars &amp; Hypercars</span>
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
                          onClick={() => setVisibleCount(prev => Math.min(filteredVehicles.length, prev + 12))}
                          className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black font-mono text-xs uppercase tracking-widest shadow-xl shadow-amber-950/50 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                        >
                          <ChevronDown className="w-4 h-4 text-zinc-950 animate-bounce" />
                          <span>See More Vehicles (+{Math.min(12, filteredVehicles.length - visibleCount)})</span>
                        </button>

                        <button
                          onClick={() => setVisibleCount(filteredVehicles.length)}
                          className="px-6 py-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-300 hover:text-white font-bold font-mono text-xs uppercase tracking-wider transition-all"
                        >
                          Show All {filteredVehicles.length} Supercars
                        </button>
                      </div>
                    ) : (
                      <div className="text-center space-y-2">
                        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-1.5">
                          <Check className="w-4 h-4 text-amber-400" />
                          All {filteredVehicles.length} Sovereign Supercars &amp; Hypercars Displayed
                        </p>
                        <button
                          onClick={() => {
                            const el = document.getElementById('fleet-discovery');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-xs font-mono text-amber-400 hover:underline inline-block pt-1"
                        >
                          ↑ Return to Top of Fleet Registry
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
