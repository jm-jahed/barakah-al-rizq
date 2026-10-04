'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Users, ArrowRight, Flame, MapPin, ShieldCheck, Filter } from 'lucide-react';
import { EMBERWILD_STAYS, EmberwildStay } from '@/data/emberwildData';

interface EmberwildStayCatalogProps {
  onSelectStay: (stay: EmberwildStay) => void;
  onQuickBook: (stay: EmberwildStay) => void;
  activeFilter?: any;
}

export const EmberwildStayCatalog: React.FC<EmberwildStayCatalogProps> = ({
  onSelectStay,
  onQuickBook,
  activeFilter
}) => {
  const [selectedLandscape, setSelectedLandscape] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'recommended' | 'priceAsc' | 'priceDesc' | 'rating'>('recommended');

  const filteredStays = EMBERWILD_STAYS.filter(stay => {
    const matchesLandscape = selectedLandscape === 'ALL' || stay.destinationType === selectedLandscape;
    const matchesSearch = 
      stay.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.stayType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stay.experienceTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    // Search filter props if passed from Search Engine
    if (activeFilter) {
      if (activeFilter.destination !== 'ALL' && stay.destinationType !== activeFilter.destination) return false;
      if (activeFilter.stayType !== 'ALL' && stay.stayType !== activeFilter.stayType) return false;
      if (activeFilter.guests > stay.capacity) return false;
      if (activeFilter.firepitOnly && !stay.features.privateFirepit) return false;
      if (activeFilter.hotTubOnly && !stay.features.outdoorHotTub) return false;
      if (activeFilter.petFriendlyOnly && !stay.features.petFriendly) return false;
      if (activeFilter.breakfastOnly && !stay.features.breakfastIncluded) return false;
    }

    return matchesLandscape && matchesSearch;
  }).sort((a, b) => {
    if (sortOption === 'priceAsc') return a.pricePerNightAED - b.pricePerNightAED;
    if (sortOption === 'priceDesc') return b.pricePerNightAED - a.pricePerNightAED;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0; // recommended
  });

  return (
    <section className="py-20 bg-[#0a0d0a] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              CURATED WILDERNESS PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100">
              Extraordinary <span className="font-serif italic text-amber-400">Wild Stays</span>
            </h2>
            <p className="text-stone-400 text-sm mt-2 max-w-xl">
              24 architecturally distinct glass domes, cedar cabins, high-altitude pods, and luxury desert pavilions across the 7 Emirates.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-stone-900 border border-stone-800 p-1.5 rounded-2xl text-xs">
            {['ALL', 'Mountain', 'Desert', 'Forest', 'Lakeside', 'Coastal', 'Valley'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedLandscape(tab)}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  selectedLandscape === tab
                    ? 'bg-amber-500 text-stone-950 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Sort Subbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-stone-900/40 p-4 rounded-2xl border border-stone-800/60">
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search by name, wadi, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto text-xs text-stone-400">
            <span className="font-mono">Showing <strong className="text-amber-400">{filteredStays.length}</strong> of 24 Stays</span>
            <div className="h-4 w-px bg-stone-800" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="bg-stone-950 border border-stone-800 rounded-xl px-3 py-1.5 text-xs text-stone-300 focus:outline-none focus:border-amber-500"
            >
              <option value="recommended">Featured Order</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* 24 Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStays.map((stay) => (
              <motion.div
                key={stay.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-stone-900/60 border border-stone-800/80 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all shadow-xl shadow-stone-950/50 cursor-pointer"
                onClick={() => onSelectStay(stay)}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                    <img
                      src={stay.image}
                      alt={stay.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/20" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-amber-400 font-mono text-[10px] border border-stone-800">
                        {stay.destinationType}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md text-stone-300 font-mono text-[10px] border border-stone-800">
                        {stay.stayType}
                      </span>
                    </div>

                    {/* Availability Status */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className={`px-2.5 py-1 rounded-full backdrop-blur-md font-mono text-[10px] border ${
                        stay.availabilityState === 'Available'
                          ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                          : stay.availabilityState === 'Few Dates Left'
                          ? 'bg-amber-950/80 text-amber-300 border-amber-800'
                          : 'bg-rose-950/80 text-rose-300 border-rose-800'
                      }`}>
                        {stay.availabilityState}
                      </span>
                    </div>

                    {/* Bottom Metadata Bar on Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono bg-stone-950/80 px-2.5 py-1 rounded-lg backdrop-blur-md border border-stone-800">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate max-w-[170px]">{stay.location}</span>
                      </div>

                      <div className="flex items-center gap-1 bg-stone-950/80 px-2 py-1 rounded-lg backdrop-blur-md border border-stone-800">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-mono text-stone-200 text-xs">{stay.rating}</span>
                        <span className="text-stone-500 text-[10px]">({stay.reviewsCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-light text-stone-100 group-hover:text-amber-300 transition-colors">
                      {stay.name}
                    </h3>
                    <p className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed font-light">
                      {stay.description}
                    </p>

                    {/* Capacity & Highlights */}
                    <div className="flex items-center gap-4 text-xs font-mono text-stone-400 mt-4 py-3 border-t border-b border-stone-800/60">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-400" />
                        <span>Up to {stay.capacity} Guests</span>
                      </div>
                      <span>•</span>
                      <div>{stay.bedrooms} Bed · {stay.bathrooms} Bath</div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {stay.experienceTags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-stone-950 border border-stone-800 text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Price & Action */}
                <div className="p-6 pt-0 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase font-mono block">Nightly Rate</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-mono font-medium text-amber-400">
                        AED {stay.pricePerNightAED.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-stone-500 font-mono">/ night</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickBook(stay);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs flex items-center gap-1.5 transition-all shadow-md shadow-amber-950/40"
                  >
                    <span>Reserve Stay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
