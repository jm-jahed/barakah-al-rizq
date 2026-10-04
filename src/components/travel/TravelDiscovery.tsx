'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Globe2, 
  MapPin, 
  Plane, 
  Calendar, 
  Clock, 
  Heart, 
  Eye, 
  SlidersHorizontal, 
  Search,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { DESTINATIONS_DATA, Destination } from '@/data/travelData';

interface TravelDiscoveryProps {
  onSelectDestination: (destination: Destination) => void;
  onToggleWishlist: (destId: string) => void;
  wishlistIds: string[];
  onOpenInquiry: (context?: string) => void;
}

const REGIONS = ['All Regions', 'Africa & Islands', 'Europe', 'Asia'];
const STYLES = ['All Styles', 'Overwater Luxury', 'Alpine Chalet', 'Mediterranean', 'Zen Luxury', 'Safari'];

export const TravelDiscovery: React.FC<TravelDiscoveryProps> = ({
  onSelectDestination,
  onToggleWishlist,
  wishlistIds,
  onOpenInquiry,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All Regions');
  const [selectedStyle, setSelectedStyle] = useState<string>('All Styles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  const filteredDestinations = DESTINATIONS_DATA.filter((dest) => {
    const matchRegion = selectedRegion === 'All Regions' || dest.region === selectedRegion;
    const matchStyle = selectedStyle === 'All Styles' || dest.style.toLowerCase().includes(selectedStyle.toLowerCase());
    const matchSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchRegion && matchStyle && matchSearch;
  });

  return (
    <section id="destinations" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>HANDPICKED SANCTUARIES & EXPEDITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Explore Ultra-Luxe <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Global Destinations</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Curated private atolls, alpine peaks, and cultural sanctuaries with seamless non-stop flight connections from Dubai & Abu Dhabi.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">100% Direct Flight Corridors</span>
            <span className="text-[11px] text-slate-500">Emirates A380 & Private Jet Ready</span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#0F141E] border border-white/10">
          
          {/* Region Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {REGIONS.map((region) => {
              const isSelected = region === selectedRegion;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination, hotel, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-amber-400"
            />
          </div>

        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest, idx) => {
            const isWishlisted = wishlistIds.includes(dest.id);

            return (
              <motion.article
                key={dest.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
                className="p-6 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden group backdrop-blur-md"
              >
                {/* Top Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Image Frame */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                    {/* Top Badges */}
                    <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold">
                        From AED {dest.priceFromAED.toLocaleString()}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(dest.id);
                        }}
                        className={`p-2 rounded-xl backdrop-blur-md border transition-colors ${
                          isWishlisted
                            ? 'bg-rose-500 text-white border-rose-400'
                            : 'bg-black/60 text-slate-300 hover:text-rose-400 border-white/10'
                        }`}
                        aria-label="Save to Wishlist"
                      >
                        <Heart className="w-3.5 h-3.5" fill={isWishlisted ? 'currentColor' : 'none'} />
                      </button>
                    </div>

                    {/* Flight Time Indicator */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-slate-200 text-[10px] font-mono">
                      <Plane className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{dest.flightTimeFromDXB}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                      {dest.style}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                      {dest.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Highlights Pill */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block font-bold">
                      Signature Inclusions:
                    </span>
                    <div className="space-y-1">
                      {dest.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono truncate">
                          <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Card */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="text-xs font-mono">
                    <span className="text-slate-500 block text-[9px] uppercase">Best Season</span>
                    <span className="text-slate-300 font-semibold">{dest.bestSeason.split(' ')[0]}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectDestination(dest)}
                    className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>Inspect Sanctuary</span>
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
