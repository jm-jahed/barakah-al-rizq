'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Compass, 
  Navigation, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { DESERT_REGIONS, DesertRegion } from '@/data/desertMirageData';

export const DesertMap: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(DESERT_REGIONS[0].id);

  const activeRegion = DESERT_REGIONS.find(r => r.id === selectedRegionId) || DESERT_REGIONS[0];

  return (
    <section id="map" className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Navigation className="w-3.5 h-3.5" />
            <span>UAE EXPEDITION GEOGRAPHY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Where Your Expedition Begins
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            From the protected Ghaf tree conservation corridors of Dubai to the towering red slipfaces of Lahbab and the monumental sand seas of Liwa.
          </p>
        </div>

        {/* Interactive Map Region Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DESERT_REGIONS.map((region) => {
            const isSelected = selectedRegionId === region.id;

            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#1A1410] to-[#120E0B] border-[#C9A265] shadow-xl shadow-[#C9A265]/20 ring-1 ring-[#C9A265]/40'
                    : 'bg-[#120E0B]/80 border-stone-800 text-stone-400 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#C9A265]">{region.distanceFromDubai.split(' ')[0]} {region.distanceFromDubai.split(' ')[1]}</span>
                  <MapPin className="w-3.5 h-3.5 text-[#C9A265]" />
                </div>
                <h3 className="text-base font-serif text-white mt-2">{region.name.split('(')[0]}</h3>
                <p className="text-[11px] text-stone-500 font-mono mt-1 truncate">{region.terrainType}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Region Detailed Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/30">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-stone-800">
            <div>
              <div className="text-xs font-mono text-[#C9A265]">{activeRegion.arabicName}</div>
              <h3 className="text-2xl font-serif text-white mt-0.5">{activeRegion.name}</h3>
            </div>
            <div className="text-xs font-mono text-stone-400">
              Transit: <strong className="text-[#E8D7B8]">{activeRegion.distanceFromDubai}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs font-light text-stone-300 leading-relaxed">
            <p>{activeRegion.description}</p>
            <div className="p-4 rounded-xl bg-[#090706] border border-stone-800 space-y-1">
              <div className="font-mono text-[#C9A265] uppercase text-[10px]">Key Geographic Feature</div>
              <div className="text-sm font-serif text-white">{activeRegion.highlight}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
