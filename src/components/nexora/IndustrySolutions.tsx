'use client';

import React, { useState } from 'react';
import { Cpu, Building, ShoppingBag, HeartPulse, HardHat, Utensils, Truck, Users, CheckCircle2 } from 'lucide-react';
import { NEXORA_INDUSTRIES } from '@/data/nexoraData';

export const IndustrySolutions: React.FC = () => {
  const [selectedIndId, setSelectedIndId] = useState('tech');

  const current = NEXORA_INDUSTRIES.find((i) => i.id === selectedIndId) || NEXORA_INDUSTRIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#D4AF37]" />;
      case 'Building': return <Building className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-[#D4AF37]" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#D4AF37]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Users className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            SECTOR SPECIALIZATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Tailored Industry Expertise.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select an industry sector to view regulatory challenge mapping, recommended setup pathways, and real UAE client results.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {NEXORA_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndId(ind.id)}
              className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border ${
                selectedIndId === ind.id
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#1A1D24] text-stone-300 border-stone-800 hover:text-white'
              }`}
            >
              {getIcon(ind.icon)}
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Card */}
        <div className="bg-[#1A1D24] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-widest block">SECTOR DEEP-DIVE</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F7F6F2] mt-1">{current.name}</h3>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
                <span className="text-stone-400 text-[10px] uppercase font-bold block">REGULATORY & OPERATIONAL CHALLENGE:</span>
                <p className="text-stone-200 font-sans font-light text-sm">{current.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
                <span className="text-[#D4AF37] text-[10px] uppercase font-bold block">RECOMMENDED NEXORA SOLUTION:</span>
                <p className="text-white font-serif font-bold text-base">{current.recommendedService}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#121417] border border-stone-800 space-y-1">
                <span className="text-stone-400 text-[10px] uppercase font-bold block">UAE MARKET OPPORTUNITY:</span>
                <p className="text-stone-300 font-sans font-light text-xs">{current.uaeOpportunity}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121417] rounded-2xl p-8 border border-[#D4AF37]/30 space-y-4 font-mono">
            <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">VERIFIED CLIENT IMPACT</span>
            <div className="text-2xl font-serif font-bold text-white leading-snug">
              "{current.clientResult}"
            </div>
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
              <span>UAE Case Study Benchmark</span>
              <span className="text-[#D4AF37]">NEXORA VERIFIED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
