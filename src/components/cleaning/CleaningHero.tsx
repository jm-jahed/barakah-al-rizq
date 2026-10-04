'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Search, 
  CheckCircle2, 
  ChevronRight, 
  Car, 
  ArrowUpRight,
  Sparkles as Dummy, // DO NOT USE
  Zap,
  Leaf
} from 'lucide-react';
import { CLEANING_CATEGORIES } from '@/data/cleaningData';

interface CleaningHeroProps {
  onSearchSubmit: (query: string, category: string, propertyType: string) => void;
  onSelectCategory: (catId: string) => void;
  onOpenDispatch: () => void;
}

export const CleaningHero: React.FC<CleaningHeroProps> = ({
  onSearchSubmit,
  onSelectCategory,
  onOpenDispatch
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPropertyType, setSelectedPropertyType] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery, selectedCategory, selectedPropertyType);
    const element = document.getElementById('service-discovery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-zinc-950">
      {/* Background Architectural Imagery & Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai Luxury Villa Architecture Cleaning"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Dark Emerald & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-transparent" />
        
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>British BICSc & ISO 9001 Certified Master Cleaners</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-mono tracking-wider backdrop-blur-md">
            <Leaf className="w-3.5 h-3.5 text-teal-400" />
            <span>Dubai Municipality Approved • 100% Non-Toxic</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6">
            Architectural Precision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400">
              Sovereign-Grade
            </span>{' '}
            UAE Facility Care.
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
            The UAE’s premier authority in ultra-luxury mansion deep sanitization, Italian diamond marble crystallization, Murano crystal restoration, and corporate facility management.
          </p>
        </div>

        {/* Fast Cleaning Service Search & Estimator Console */}
        <div className="w-full max-w-4xl bg-zinc-950/85 backdrop-blur-2xl border border-emerald-500/30 p-3 sm:p-5 rounded-3xl shadow-2xl shadow-black/90 mb-10">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Query Input */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-emerald-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search deep clean, marble honing, air duct..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50"
              />
            </div>

            {/* Discipline Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/60 cursor-pointer"
              >
                <option value="all">All Disciplines (8)</option>
                {CLEANING_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Typology */}
            <div className="md:col-span-2">
              <select
                value={selectedPropertyType}
                onChange={(e) => setSelectedPropertyType(e.target.value)}
                className="w-full px-3 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-emerald-500/60 cursor-pointer"
              >
                <option value="all">All Typologies</option>
                <option value="Signature Villa / Mansion">Villa / Mansion</option>
                <option value="Sky Penthouse">Sky Penthouse</option>
                <option value="Commercial Office">Office / B2B</option>
                <option value="Medical Clinic">Medical Clinic</option>
              </select>
            </div>

            {/* Search CTA */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/25 transition-all active:scale-98"
              >
                <span>Find Plan</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Filter Tags */}
          <div className="mt-3.5 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
            <span className="font-mono text-zinc-500 uppercase">Core Services:</span>
            {CLEANING_CATEGORIES.slice(0, 4).map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const element = document.getElementById('service-discovery');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-emerald-500/15 hover:text-emerald-300 border border-zinc-800 hover:border-emerald-500/30 transition-all font-mono"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Corporate Trust & Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>99.9%</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Microbial Bio-Decontamination</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-emerald-400 mb-0.5">
              160+
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Precision Protocols & Add-ons</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>AED 5M</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Third-Party Liability Insured</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>25 Mins</span>
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Average Fleet Van Dispatch</div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-zinc-300 font-semibold">LIVE DISPATCH RADAR:</span>
            <span className="hidden sm:inline">Unit #04 Available in Palm Jumeirah • Unit #08 in DIFC Gate</span>
          </div>
          <button
            onClick={onOpenDispatch}
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 font-semibold uppercase tracking-wider"
          >
            <span>Book Priority Van Dispatch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
