'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  ChevronRight, 
  Award, 
  Key, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { PRIME_COMMUNITIES } from '@/data/realEstateData';

interface RealEstateHeroProps {
  onSearchSubmit: (query: string, community: string, type: string) => void;
  onSelectCommunity: (commId: string) => void;
  onOpenViewing: () => void;
}

export const RealEstateHero: React.FC<RealEstateHeroProps> = ({
  onSearchSubmit,
  onSelectCommunity,
  onOpenViewing
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery, selectedCommunity, selectedType);
    const element = document.getElementById('property-discovery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Architectural Imagery & Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai Ultra Luxury Real Estate Architecture"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Dark Vignette & Gold Tint Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
        
        {/* Fine Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>UAE Super-Prime Real Estate Authority</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RERA Licensed #84920 • DLD Escrow Protected</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6">
            Architectural Mastery.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
              Unrivaled UAE
            </span>{' '}
            Private Estates.
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
            Curating the UAE’s most coveted off-market mansions, signature island waterfront villas, and branded sky penthouses across Palm Jumeirah, Emirates Hills, and Saadiyat Island.
          </p>
        </div>

        {/* High-Performance Real Estate Search Console */}
        <div className="w-full max-w-4xl bg-zinc-950/85 backdrop-blur-2xl border border-amber-500/30 p-3 sm:p-5 rounded-3xl shadow-2xl shadow-black/90 mb-10">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Query Input */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-amber-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search by development, frond, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50"
              />
            </div>

            {/* Community Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCommunity}
                onChange={(e) => setSelectedCommunity(e.target.value)}
                className="w-full px-3 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-500/60 cursor-pointer"
              >
                <option value="all">All Prime Communities</option>
                {PRIME_COMMUNITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.emirate})
                  </option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div className="md:col-span-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-500/60 cursor-pointer"
              >
                <option value="all">All Typologies</option>
                <option value="Villa">Villas & Mansions</option>
                <option value="Penthouse">Sky Penthouses</option>
                <option value="Waterfront Estate">Waterfront Estates</option>
                <option value="Sky Villa">Sky Villas</option>
              </select>
            </div>

            {/* Search CTA */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/25 transition-all active:scale-98"
              >
                <span>Search</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Filter Tags */}
          <div className="mt-3.5 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
            <span className="font-mono text-zinc-500 uppercase">Top Enclaves:</span>
            {PRIME_COMMUNITIES.slice(0, 5).map((comm) => (
              <button
                key={comm.id}
                onClick={() => {
                  onSelectCommunity(comm.id);
                  const element = document.getElementById('property-discovery');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-amber-500/15 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/30 transition-all font-mono"
              >
                {comm.name}
              </button>
            ))}
          </div>
        </div>

        {/* Corporate Trust & Real Estate Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>AED 8.4B+</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Portfolio Volume Transacted</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-amber-400 mb-0.5">
              216+
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Exclusive Private Listings</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>0% Tax</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">UAE Capital Gains & Income</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>10-Yr Visa</span>
              <Key className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">AED 2M+ Golden Visa Guarantee</div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-zinc-300 font-semibold">LIVE UAE MARKET PULSE:</span>
            <span className="hidden sm:inline">Palm Jumeirah Ultra-Prime Avg. +18.4% YoY</span>
          </div>
          <button
            onClick={onOpenViewing}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold uppercase tracking-wider"
          >
            <span>Request Private Chauffeur Tour</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
