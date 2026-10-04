'use client';

import React, { useState } from 'react';
import { Building, MapPin, TrendingUp, CheckCircle2, Calculator, ArrowRight, Layers } from 'lucide-react';
import { NESTORA_COMMUNITIES } from '@/data/nestoraData';

interface CommunitiesSectionProps {
  onSelectCommunityForYield?: (communityName: string) => void;
  onExploreCatalogForCommunity?: (communityName: string) => void;
}

export const CommunitiesSection: React.FC<CommunitiesSectionProps> = ({
  onSelectCommunityForYield,
  onExploreCatalogForCommunity
}) => {
  const [selectedCommId, setSelectedCommId] = useState('dubai-marina');

  const current = NESTORA_COMMUNITIES.find((c) => c.id === selectedCommId) || NESTORA_COMMUNITIES[0];

  const handleSimulate = () => {
    if (onSelectCommunityForYield) {
      onSelectCommunityForYield(current.name);
    } else {
      const el = document.getElementById('rental-yield-simulator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrowseCatalog = () => {
    if (onExploreCatalogForCommunity) {
      onExploreCatalogForCommunity(current.name);
    } else {
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="communities" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            PRIME UAE RESIDENTIAL COMMUNITIES
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
            Where We Manage.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select a key residential community in Dubai or Abu Dhabi to inspect gross rental yields, occupancy rates, and landlord insights.
          </p>
        </div>

        {/* Community Selector Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {NESTORA_COMMUNITIES.map((comm) => (
            <button
              key={comm.id}
              type="button"
              onClick={() => setSelectedCommId(comm.id)}
              className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                selectedCommId === comm.id
                  ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0C2D31] text-stone-300 border-stone-800 hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4 text-stone-950" />
              <span>{comm.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Community Card */}
        <div className="bg-[#0C2D31] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#C5A059] mb-1">
                <span>{current.city.toUpperCase()} COMMUNITY AUDIT</span>
                <span>•</span>
                <span className="font-bold">{current.avgYield}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE6]">{current.name}</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed mt-2">{current.description}</p>
            </div>

            {/* Top Features */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">KEY LANDLORD ADVANTAGES:</span>
              {current.topFeatures.map((ft) => (
                <div key={ft} className="p-3 rounded-xl bg-[#082023] border border-stone-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-stone-200">{ft}</span>
                </div>
              ))}
            </div>

            <div className="font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1">MOST POPULAR LAYOUTS:</span>
              <span className="text-[#C5A059] font-bold text-sm">{current.popularLayouts}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={handleSimulate}
                className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif font-bold text-xs uppercase flex items-center gap-2 transition-all shadow-md shadow-[#C5A059]/10 cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulate {current.name} Yield</span>
              </button>
              
              <button
                type="button"
                onClick={handleBrowseCatalog}
                className="px-5 py-2.5 rounded-xl bg-[#082023] hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Explore Mandates</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#082023] rounded-2xl p-8 border border-[#C5A059]/30 space-y-4 font-mono">
            <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest block">NESTORA PORTFOLIO INSIGHT</span>
            
            <div className="space-y-3 text-xs">
              <div className="flex justify-between border-b border-stone-800 pb-2">
                <span className="text-stone-400">Average Community Occupancy:</span>
                <span className="text-emerald-400 font-bold">{current.occupancyRate}</span>
              </div>

              <div className="pt-1">
                <span className="text-stone-400 block text-[10px] uppercase">EXPERT LANDLORD INSIGHT:</span>
                <p className="text-stone-300 font-sans font-light text-xs leading-relaxed mt-1">"{current.landlordInsight}"</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
