'use client';

import React, { useState } from 'react';
import { Building, MapPin, CheckCircle2, ArrowRight, Sparkles, Compass } from 'lucide-react';
import { VANTAGE_COMMUNITIES } from '@/data/vantageData';

interface MasterplanCommunitiesProps {
  onExploreCommunityReleases?: (categoryName: string) => void;
  onOpenVipModal?: () => void;
}

export const MasterplanCommunities: React.FC<MasterplanCommunitiesProps> = ({
  onExploreCommunityReleases,
  onOpenVipModal,
}) => {
  const [selectedCat, setSelectedCat] = useState<'Waterfront' | 'Urban' | 'Villa' | 'Mixed-Use'>('Waterfront');

  const current = VANTAGE_COMMUNITIES.find((c) => c.category === selectedCat) || VANTAGE_COMMUNITIES[0];

  const handleScrollToReleases = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onExploreCommunityReleases) {
      onExploreCommunityReleases(current.category);
    }
  };

  return (
    <section id="communities" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            UAE MASTERPLAN DESTINATIONS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4 tracking-tight">
            Masterplan Communities.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2 leading-relaxed">
            Select a community archetype to explore lifestyle concepts, amenities, target buyer profiles, and representative project releases.
          </p>
        </div>

        {/* Community Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {VANTAGE_COMMUNITIES.map((comm) => (
            <button
              key={comm.id}
              onClick={() => setSelectedCat(comm.category)}
              className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border ${
                selectedCat === comm.category
                  ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0A192F] text-stone-300 border-stone-800 hover:text-white hover:border-stone-700'
              }`}
            >
              <Building className="w-4 h-4 text-stone-950" />
              <span>{comm.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Masterplan Card */}
        <div className="bg-[#0A192F] rounded-3xl border border-stone-700/80 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#C5A059] mb-1">
                <span>MASTERPLAN ARCHETYPE: {current.category.toUpperCase()}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAFAFA]">{current.name}</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed mt-2">{current.lifestyle}</p>
            </div>

            {/* Signature Amenities */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">SIGNATURE MASTERPLAN AMENITIES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.amenities.map((am) => (
                  <div key={am} className="p-3 rounded-xl bg-[#06101E] border border-stone-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="text-stone-200 text-xs">{am}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1">TARGET BUYER & INVESTOR PROFILE:</span>
              <span className="text-[#C5A059] font-bold text-xs leading-relaxed block">{current.buyerProfile}</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#06101E] rounded-2xl p-8 border border-[#C5A059]/30 space-y-5 font-mono">
            <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-[0.2em] block">FLAGSHIP REPRESENTATIVE PROJECT</span>
            
            <div className="space-y-3 text-xs">
              <div className="border-b border-stone-800 pb-3">
                <span className="text-stone-400 text-[10px] uppercase block">DEVELOPMENT NAME:</span>
                <span className="text-xl font-serif font-bold text-white block mt-1">{current.representativeProject}</span>
              </div>

              <div className="pt-1">
                <span className="text-stone-400 block text-[10px] uppercase">LOCATION CONTEXT:</span>
                <span className="text-emerald-400 font-bold text-xs block mt-1">{current.locationContext}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleScrollToReleases}
                className="w-full py-3.5 px-4 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Browse {current.name} Releases</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenVipModal}
                className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Reserve VIP Masterplan Allocation</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
