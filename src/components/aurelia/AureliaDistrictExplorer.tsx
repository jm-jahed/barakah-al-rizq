'use client';

import React, { useState } from 'react';
import { MapPin, Compass, Check, ArrowRight } from 'lucide-react';
import { PRIME_DISTRICTS_DATA, PrimeDistrict } from '@/data/aureliaData';

export const AureliaDistrictExplorer: React.FC = () => {
  const [activeDistId, setActiveDistId] = useState<string>(PRIME_DISTRICTS_DATA[0].id);

  const activeDistrict =
    PRIME_DISTRICTS_DATA.find((d) => d.id === activeDistId) || PRIME_DISTRICTS_DATA[0];

  return (
    <section className="py-24 bg-[#090C0E] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>PRIME UAE GEOGRAPHIC ENCLAVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Waterfront & Golf Enclaves
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Aurelia Estates exclusively develops in the highest capital-appreciating districts of Dubai and Abu Dhabi.
          </p>
        </div>

        {/* District Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PRIME_DISTRICTS_DATA.map((dist) => {
            const isSelected = dist.id === activeDistId;
            return (
              <div
                key={dist.id}
                onClick={() => setActiveDistId(dist.id)}
                className={`p-6 rounded-3xl border cursor-pointer transition-all space-y-3 ${
                  isSelected
                    ? 'bg-[#182126] border-white shadow-[0_0_20px_rgba(214,211,209,0.25)]'
                    : 'bg-[#13191D] border-stone-800 hover:border-stone-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 font-mono text-[10px] text-stone-300 font-bold uppercase">
                    {dist.emirate}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 font-bold">
                    AED {dist.averagePsfAed.toLocaleString()} / sqft
                  </span>
                </div>

                <h4 className="text-lg font-bold font-serif text-white">{dist.name}</h4>
                <p className="text-xs font-sans text-gray-300">{dist.vibe}</p>

                <div className="space-y-1 pt-2 border-t border-white/5 text-[11px] font-mono text-gray-400">
                  {dist.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-stone-300" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
