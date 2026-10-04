'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Search, 
  CheckCircle2, 
  ChevronRight, 
  Car, 
  ArrowUpRight, 
  Zap, 
  Gauge, 
  Flame 
} from 'lucide-react';
import { VEHICLE_CATEGORIES } from '@/data/carRentalData';

interface CarRentalHeroProps {
  onSearchSubmit: (query: string, category: string, brand: string) => void;
  onSelectCategory: (catId: string) => void;
  onOpenBooking: () => void;
}

export const CarRentalHero: React.FC<CarRentalHeroProps> = ({
  onSearchSubmit,
  onSelectCategory,
  onOpenBooking
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery, selectedCategory, selectedBrand);
    const element = document.getElementById('fleet-discovery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-zinc-950">
      {/* Cinematic Exotic Car Imagery */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=90"
          alt="Dubai Exotic Supercar Fleet"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Dark Crimson & Carbon Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-500/15 via-amber-500/10 to-transparent" />
        
        {/* Precision Carbon Matrix Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            <span>UAE Sovereign Exotic Supercar Reserve</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-mono tracking-wider backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>0% Security Deposit Option • RTA Licensed #84920</span>
          </div>
        </div>

        {/* Title */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-6">
            Unleash Supreme Power.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-amber-400">
              Exotic UAE
            </span>{' '}
            Supercar Reserve.
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-light max-w-3xl mb-8">
            Curating the Emirates' most coveted fleet of Ferrari SF90s, Lamborghini Revueltos, Rolls-Royce Spectres, and Porsche GT3 RS track editions with doorstep delivery in 30 minutes.
          </p>
        </div>

        {/* Search & Reservation Console */}
        <div className="w-full max-w-4xl bg-zinc-950/85 backdrop-blur-2xl border border-amber-500/30 p-3 sm:p-5 rounded-3xl shadow-2xl shadow-black/90 mb-10">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-amber-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search Ferrari, Rolls-Royce, Urus, GT3 RS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/50"
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-500/60 cursor-pointer"
              >
                <option value="all">All Fleet Categories (8)</option>
                {VEHICLE_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Brand Dropdown */}
            <div className="md:col-span-2">
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-3 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-amber-500/60 cursor-pointer"
              >
                <option value="all">All Brands</option>
                <option value="Rolls-Royce">Rolls-Royce</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Bentley">Bentley</option>
                <option value="Porsche">Porsche</option>
                <option value="McLaren">McLaren</option>
                <option value="Mercedes-AMG">Mercedes-AMG</option>
              </select>
            </div>

            {/* Search CTA */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/25 transition-all active:scale-98"
              >
                <span>Find Car</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Quick Tags */}
          <div className="mt-3.5 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
            <span className="font-mono text-zinc-500 uppercase">Top Marques:</span>
            {['Rolls-Royce', 'Ferrari', 'Lamborghini', 'Porsche', 'Bentley'].map((brand) => (
              <button
                key={brand}
                onClick={() => {
                  onSearchSubmit('', 'all', brand);
                  const el = document.getElementById('fleet-discovery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-amber-500/15 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/30 transition-all font-mono"
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>0% Deposit</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Zero Cash Hold Guarantee</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-amber-400 mb-0.5">
              192+
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Exclusive Exotic Supercars</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>2.5s</span>
              <Gauge className="w-3.5 h-3.5 text-rose-400" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Hypercar 0-100 Benchmark</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-md">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5 flex items-center gap-1.5">
              <span>25 Mins</span>
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
            </div>
            <div className="text-[11px] text-zinc-400 font-mono">Doorstep / Tarmac Delivery</div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Ticker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-center justify-between py-2 px-4 rounded-xl bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md text-[11px] font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-zinc-300 font-semibold">LIVE FLEET TELEMETRY:</span>
            <span className="hidden sm:inline">Ferrari SF90 Assetto Ready at Palm Jumeirah • Rolls-Royce Spectre at DIFC Gate</span>
          </div>
          <button
            onClick={onOpenBooking}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold uppercase tracking-wider"
          >
            <span>Request Instant Supercar Delivery</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
