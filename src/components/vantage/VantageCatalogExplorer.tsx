'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  MapPin,
  Calendar,
  ArrowRight,
  Eye,
  Layers,
  Search,
  SlidersHorizontal,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Percent,
  X,
  Compass
} from 'lucide-react';
import {
  VANTAGE_CATALOG,
  VANTAGE_CATEGORIES,
  VANTAGE_CATALOG_STATS,
  VantageDevelopment
} from '@/data/vantageData';

interface VantageCatalogExplorerProps {
  onSelectDevelopment: (dev: VantageDevelopment) => void;
  onOpenVipModal: (dev?: VantageDevelopment) => void;
  onOpenRegister: (dev: VantageDevelopment) => void;
  onCalculateMilestones?: (dev: VantageDevelopment) => void;
}

export const VantageCatalogExplorer: React.FC<VantageCatalogExplorerProps> = ({
  onSelectDevelopment,
  onOpenVipModal,
  onOpenRegister,
  onCalculateMilestones,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'roi' | 'completion'>('featured');
  
  // Progressive display pagination
  const [visibleCount, setVisibleCount] = useState<number>(18);
  const newlyLoadedIndexRef = useRef<number | null>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Reset pagination when any filter changes
  useEffect(() => {
    setVisibleCount(18);
    newlyLoadedIndexRef.current = null;
  }, [selectedCategory, searchQuery, selectedCity, selectedStatus, selectedType, sortBy]);

  // Filter and sort catalog
  const filteredCatalog = useMemo(() => {
    return VANTAGE_CATALOG.filter((item) => {
      // Category
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // City
      if (selectedCity !== 'all' && item.city !== selectedCity) {
        return false;
      }
      // Status
      if (selectedStatus !== 'all' && item.status !== selectedStatus) {
        return false;
      }
      // Type
      if (selectedType !== 'all' && item.propertyType !== selectedType) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = item.name.toLowerCase().includes(q);
        const matchLocation = item.location.toLowerCase().includes(q);
        const matchCode = item.code.toLowerCase().includes(q);
        const matchCategory = item.categoryName.toLowerCase().includes(q);
        const matchAmenities = item.amenities.some(a => a.toLowerCase().includes(q));
        if (!matchName && !matchLocation && !matchCode && !matchCategory && !matchAmenities) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.startingPriceAed - b.startingPriceAed;
      if (sortBy === 'price-desc') return b.startingPriceAed - a.startingPriceAed;
      if (sortBy === 'roi') return b.roiProjected - a.roiProjected;
      if (sortBy === 'completion') return b.completionPct - a.completionPct;
      // Default: featured first then code
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return a.id.localeCompare(b.id);
    });
  }, [selectedCategory, searchQuery, selectedCity, selectedStatus, selectedType, sortBy]);

  const visibleItems = useMemo(() => {
    return filteredCatalog.slice(0, visibleCount);
  }, [filteredCatalog, visibleCount]);

  const handleSeeMore = () => {
    const nextIndex = visibleCount;
    newlyLoadedIndexRef.current = nextIndex;
    setVisibleCount((prev) => Math.min(prev + 18, filteredCatalog.length));

    // Smoothly scroll to the first newly revealed item after state updates
    setTimeout(() => {
      const targetItem = filteredCatalog[nextIndex];
      if (targetItem && itemRefs.current[targetItem.id]) {
        const el = itemRefs.current[targetItem.id];
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 150);
  };

  const handleQuickFilter = (catId: string, status?: string) => {
    setSelectedCategory(catId);
    if (status) setSelectedStatus(status);
    else setSelectedStatus('all');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Metrics */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              MASTER DEVELOPMENTS & PROPERTY RELEASES CATALOG
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4 tracking-tight">
              Flagship Portfolio Explorer.
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light mt-2 max-w-2xl leading-relaxed">
              Explore 216+ verified UAE real estate releases across 8 sectors. Compare RERA-registered off-plan towers, fairway golf mansions, and prime capital assets.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap gap-2.5 font-mono text-xs">
            <div className="px-3.5 py-2 rounded-xl bg-[#0A192F] border border-stone-800 text-stone-300">
              <span className="text-[#C5A059] font-bold text-sm block">216</span>
              <span className="text-[10px] text-stone-400 uppercase">Verified Releases</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#0A192F] border border-stone-800 text-stone-300">
              <span className="text-white font-bold text-sm block">{VANTAGE_CATALOG_STATS.totalOffPlan}</span>
              <span className="text-[10px] text-stone-400 uppercase">Off-Plan Launches</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#0A192F] border border-stone-800 text-stone-300">
              <span className="text-emerald-400 font-bold text-sm block">8.4%</span>
              <span className="text-[10px] text-stone-400 uppercase">Avg Projected Yield</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-[#0A192F] border border-stone-800 text-stone-300">
              <span className="text-sky-400 font-bold text-sm block">4</span>
              <span className="text-[10px] text-stone-400 uppercase">UAE Emirates</span>
            </div>
          </div>
        </div>

        {/* Category Navigation Tabs (8 Sectors) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar font-mono text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-xl border whitespace-nowrap font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                : 'bg-[#0A192F] border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
            }`}
          >
            All Developments ({VANTAGE_CATALOG.length})
          </button>

          {VANTAGE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl border whitespace-nowrap font-bold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                    : 'bg-[#0A192F] border-stone-800 text-stone-300 hover:text-white hover:border-stone-700'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-stone-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Comprehensive Filter Bar */}
        <div className="bg-[#0A192F] p-4 sm:p-6 rounded-3xl border border-stone-800 mb-8 font-mono text-xs space-y-4 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            {/* Search Input */}
            <div className="lg:col-span-2 relative">
              <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">SEARCH DEVELOPMENTS</label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by project name, marina, golf, downtown..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-white placeholder-stone-500 focus:outline-none focus:border-[#C5A059]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Emirate Filter */}
            <div>
              <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">EMIRATE / CITY</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Emirates (Dubai, Abu Dhabi...)</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">STATUS</label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-white focus:outline-none focus:border-[#C5A059]"
              >
                <option value="all">All Statuses</option>
                <option value="Off-Plan">Off-Plan Launch</option>
                <option value="Under Construction">Under Construction</option>
                <option value="Ready">Ready to Move-In</option>
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">SORT PORTFOLIO</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-[#C5A059] font-bold focus:outline-none focus:border-[#C5A059]"
              >
                <option value="featured">Featured Developer Releases</option>
                <option value="roi">Highest Net ROI (%)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="completion">Construction Completion (%)</option>
              </select>
            </div>

          </div>

          {/* Quick Filter Tags Strip */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-stone-800/80">
            <span className="text-[10px] text-stone-500 uppercase font-bold mr-1">Quick Filters:</span>
            {[
              { label: 'Off-Plan Releases', cat: 'all', status: 'Off-Plan' },
              { label: 'Immediate Handover', cat: 'all', status: 'Ready' },
              { label: 'Waterfront Living', cat: 'waterfront' },
              { label: 'Mansions & Penthouses', cat: 'ultra-luxury' },
              { label: 'Golf & Park Estates', cat: 'golf-villas' },
              { label: 'Capital Sovereign (Abu Dhabi)', cat: 'abu-dhabi-sovereign' },
              { label: 'Grade-A Commercial', cat: 'commercial-grade-a' },
              { label: 'Eco Net-Zero', cat: 'eco-smart-netzero' }
            ].map((tag) => (
              <button
                key={tag.label}
                onClick={() => handleQuickFilter(tag.cat, tag.status)}
                className="px-2.5 py-1 rounded-lg bg-[#06101E] hover:bg-[#C5A059]/10 border border-stone-800 hover:border-[#C5A059]/40 text-stone-300 hover:text-[#C5A059] text-[10px] transition-all"
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Active Feedback */}
        <div className="flex items-center justify-between font-mono text-xs text-stone-400 mb-6">
          <span>
            Showing <strong className="text-white">{visibleItems.length}</strong> of <strong className="text-[#C5A059]">{filteredCatalog.length}</strong> matching developments
          </span>

          {(selectedCategory !== 'all' || selectedCity !== 'all' || selectedStatus !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCity('all');
                setSelectedStatus('all');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="text-[#C5A059] hover:underline flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Master Catalog Grid */}
        {visibleItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 6) * 0.04 }}
                  className="bg-[#0A192F] rounded-3xl border border-stone-800/90 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#C5A059]/50 transition-all font-sans relative"
                >
                  {/* Image & Badges */}
                  <div>
                    <div className="relative h-60 overflow-hidden bg-[#06101E]">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className={`px-2.5 py-1 rounded-full font-bold uppercase backdrop-blur-md border ${
                            item.status === 'Off-Plan'
                              ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                              : item.status === 'Ready'
                              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                              : 'bg-sky-950/80 text-sky-300 border-sky-500/40'
                          }`}>
                            {item.status}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-[#06101E]/90 text-stone-200 border border-stone-700 font-bold backdrop-blur-md">
                            {item.propertyType}
                          </span>
                        </div>

                        <span className="px-2 py-0.5 rounded-md bg-[#06101E]/90 text-[#C5A059] font-bold border border-[#C5A059]/30">
                          {item.code}
                        </span>
                      </div>

                      {/* Bottom Image Overlay Strip */}
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end font-mono text-xs">
                        <div>
                          <span className="text-stone-400 text-[9px] uppercase block font-bold">STARTING FROM</span>
                          <span className="text-xl font-serif font-extrabold text-[#FAFAFA]">
                            AED {item.startingPriceAed.toLocaleString()}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] text-emerald-400 block font-bold">{item.roiProjected}% ROI</span>
                          <span className="text-[#C5A059] font-bold text-[10px] bg-[#06101E]/90 px-2 py-0.5 rounded border border-[#C5A059]/30">
                            {item.city}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-3.5">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-[#FAFAFA] group-hover:text-[#C5A059] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs font-mono text-stone-400 flex items-center gap-1 mt-1 truncate">
                          <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </p>
                      </div>

                      {/* Construction Progress */}
                      <div className="p-2.5 rounded-xl bg-[#06101E] border border-stone-800/80 font-mono text-[10px] space-y-1">
                        <div className="flex justify-between items-center text-stone-400">
                          <span>Construction Progress:</span>
                          <span className="text-[#C5A059] font-bold">{item.completionPct}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#C5A059] to-amber-400"
                            style={{ width: `${item.completionPct}%` }}
                          />
                        </div>
                      </div>

                      {/* Payment Plan & Handover */}
                      <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[10px] border-t border-stone-800/80">
                        <div>
                          <span className="text-stone-500 uppercase block text-[9px]">HANDOVER</span>
                          <span className="text-stone-200 font-bold truncate block">{item.handover}</span>
                        </div>
                        <div>
                          <span className="text-stone-500 uppercase block text-[9px]">PAYMENT PLAN</span>
                          <span className="text-[#C5A059] font-bold truncate block">{item.paymentPlan}</span>
                        </div>
                      </div>

                      {/* Amenities Chips */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.amenities.slice(0, 2).map((am) => (
                          <span
                            key={am}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-[#06101E] text-stone-300 border border-stone-800 truncate max-w-[140px]"
                          >
                            ✓ {am}
                          </span>
                        ))}
                        {item.amenities.length > 2 && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#06101E] text-stone-400 border border-stone-800">
                            +{item.amenities.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 flex gap-2 font-mono text-xs">
                    <button
                      onClick={() => onSelectDevelopment(item)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-[#06101E] hover:bg-stone-800 border border-stone-700 text-[#C5A059] font-bold flex items-center justify-center gap-1.5 transition-all text-[11px]"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details / CAD</span>
                    </button>

                    <button
                      onClick={() => onOpenVipModal(item)}
                      className="px-3.5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-md hover:scale-[1.02] transition-all"
                      title="Reserve VIP Allocation"
                    >
                      <span>VIP Pass</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </motion.div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 bg-[#0A192F] rounded-3xl border border-stone-800 p-8">
            <Building2 className="w-12 h-12 text-[#C5A059] mx-auto mb-3 opacity-60" />
            <h3 className="text-2xl font-serif font-bold text-white">No Developments Match Your Filters</h3>
            <p className="text-xs font-mono text-stone-400 mt-2 max-w-md mx-auto">
              Try adjusting your search keywords, clearing status filters, or selecting "All Developments" to view our complete 216+ release master catalog.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedCity('all');
                setSelectedStatus('all');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-3 rounded-xl bg-[#C5A059] text-black font-serif font-bold text-xs uppercase"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Progressive "See More" Button with Auto-Scroll */}
        {visibleCount < filteredCatalog.length && (
          <div className="text-center mt-12 space-y-3 font-mono text-xs">
            <button
              onClick={handleSeeMore}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0A192F] via-[#122644] to-[#0A192F] hover:border-[#C5A059] border border-stone-700 text-[#C5A059] font-bold uppercase tracking-wider shadow-2xl hover:scale-[1.02] transition-all group"
            >
              <span>See More Developments (+18 Releases)</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <span className="text-[11px] text-stone-400 block">
              Showing {visibleItems.length} of {filteredCatalog.length} Total Verified Master Releases
            </span>
          </div>
        )}

      </div>
    </section>
  );
};
