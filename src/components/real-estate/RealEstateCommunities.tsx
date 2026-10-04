'use client';

import React from 'react';
import { PRIME_COMMUNITIES, CommunityArea } from '@/data/realEstateData';
import { MapPin, TrendingUp, ArrowRight, Compass, Building2 } from 'lucide-react';

interface RealEstateCommunitiesProps {
  activeCommunity: string;
  onSelectCommunity: (commId: string) => void;
}

export const RealEstateCommunities: React.FC<RealEstateCommunitiesProps> = ({
  activeCommunity,
  onSelectCommunity
}) => {
  return (
    <section id="communities-explorer" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Geographic Precision</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
              12 Prime UAE Communities
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-light">
              Explore the Emirates’ most prestigious postcodes. From private island enclaves to championship golf sanctuaries and cultural districts.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-500">
            DLD & ADGM Verified Geospatial Data
          </div>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRIME_COMMUNITIES.map((comm: CommunityArea) => {
            const isSelected = activeCommunity === comm.id;
            return (
              <div
                key={comm.id}
                onClick={() => {
                  onSelectCommunity(comm.id);
                  const el = document.getElementById('property-discovery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 flex flex-col justify-between h-[360px] ${
                  isSelected
                    ? 'border-amber-500 ring-2 ring-amber-500/40 shadow-xl shadow-amber-500/10'
                    : 'border-zinc-800/80 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-black'
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={comm.heroImage}
                    alt={comm.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/30" />
                </div>

                {/* Top Badges */}
                <div className="relative z-10 p-5 flex items-start justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-300 font-semibold tracking-wider uppercase">
                    {comm.emirate}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-300">
                    {comm.propertyCount}+ Estates
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="relative z-10 p-5 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pt-8">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                    {comm.name}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-4 font-light">
                    {comm.description}
                  </p>

                  {/* Telemetry Row */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-800/80 text-[11px] font-mono">
                    <div>
                      <div className="text-zinc-500 text-[9px] uppercase">Avg. Sqft Price</div>
                      <div className="text-amber-400 font-semibold">AED {comm.avgSqftPrice.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500 text-[9px] uppercase">Rental Yield</div>
                      <div className="text-emerald-400 font-semibold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{comm.rentalYield}</span>
                      </div>
                    </div>
                  </div>

                  {/* Explore Link */}
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span className="uppercase tracking-wider text-[10px]">Explore Enclave</span>
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
