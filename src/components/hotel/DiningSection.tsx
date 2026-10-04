'use client';

import React from 'react';
import { Utensils, Clock, Wine, Award, ArrowRight, Sparkles } from 'lucide-react';
import { VELORA_BRAND } from '@/data/hotelData';

interface DiningSectionProps {
  onOpenReservationModal: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenReservationModal }) => {
  return (
    <section id="dining" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center gap-1.5 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              2 MICHELIN-STARRED GASTRONOMY • DUBAI
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif text-[#F7F4EE] leading-tight mt-4">
              A culinary destination on the Arabian Gulf.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              At ORA & Al Safa Lounge, Executive Chef Laurent & Master Sommelier curate world-class Mediterranean and Middle Eastern fusion gastronomy with rare vintages and sunset terrace seating.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#C5A059] px-3.5 py-2 rounded-xl bg-[#29221D] border border-[#C5A059]/30">
            <Award className="w-4 h-4" />
            <span>RESTAURANT ORA • JUMEIRAH BAY</span>
          </div>
        </div>

        {/* Restaurant Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-stone-800 shadow-2xl h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
              alt="ORA Dubai Terrace Dining"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#29221D]/90 backdrop-blur-md border border-stone-800 text-xs font-mono text-stone-300 flex flex-wrap items-center justify-between gap-2">
              <span>Cuisine: Contemporary Coastal Mediterranean & Levantine</span>
              <span className="text-[#C5A059] font-bold">1,800 Grand Cru Cellar</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#29221D] border border-stone-800 space-y-4">
              <h3 className="text-2xl font-serif text-[#F7F4EE]">ORA Restaurant & Waterfront Lounge</h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Perched on private marble piers suspended over the turquoise waters of Jumeirah Bay Island, ORA serves wild-caught Gulf seafood, Brittany blue lobster, and dry-aged Wagyu A5.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-800 font-mono text-xs">
                <div className="p-3 bg-[#1C1917] rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 block">BREAKFAST / BRUNCH</span>
                  <span className="text-[#F7F4EE] font-bold">07:00 — 11:30</span>
                </div>
                <div className="p-3 bg-[#1C1917] rounded-xl border border-stone-800">
                  <span className="text-[10px] text-stone-400 block">EVENING SERVICE</span>
                  <span className="text-[#F7F4EE] font-bold">18:30 — 00:30</span>
                </div>
              </div>

              <button
                onClick={onOpenReservationModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg mt-2 hover:scale-[1.01] transition-transform"
              >
                <span>Reserve VIP Table at ORA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
