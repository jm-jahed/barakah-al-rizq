'use client';

import React from 'react';
import { VEHICLE_CATEGORIES, VehicleCategory } from '@/data/carRentalData';
import { Car, ArrowRight, Gauge, Zap } from 'lucide-react';

interface VehicleCategoryExplorerProps {
  activeCategory: string;
  onSelectCategory: (catId: string) => void;
}

export const VehicleCategoryExplorer: React.FC<VehicleCategoryExplorerProps> = ({
  activeCategory,
  onSelectCategory
}) => {
  return (
    <section id="categories-explorer" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Gauge className="w-3.5 h-3.5" />
              <span>Curated Fleet Categories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              8 Sovereign Automotive Disciplines
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              From 1000 HP hybrid hypercars to whisper-quiet Rolls-Royce limousines and luxury desert SUVs.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-500">
            RTA Licensed & Zero Security Deposit Verified
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VEHICLE_CATEGORIES.map((cat: VehicleCategory) => {
            const isSelected = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const el = document.getElementById('fleet-discovery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 flex flex-col justify-between h-[380px] ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/40 shadow-xl shadow-amber-500/10'
                    : 'border-zinc-800/80 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-black'
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 p-5 flex items-start justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300 font-semibold tracking-wider uppercase">
                    {cat.vehicleCount} Supercars
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300 font-bold">
                    From AED {cat.startingPriceAED}/day
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent pt-8">
                  <div className="text-[10px] font-mono text-rose-400 uppercase mb-1">
                    {cat.subtitle}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5 leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-3 font-light">
                    {cat.description}
                  </p>

                  {/* Speed highlight */}
                  <div className="pt-2 border-t border-zinc-800/80 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                    <span className="text-amber-300 font-bold">{cat.speedHighlight}</span>
                  </div>

                  {/* Explore Link */}
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span className="uppercase tracking-wider text-[10px]">Inspect Reserve Fleet</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
