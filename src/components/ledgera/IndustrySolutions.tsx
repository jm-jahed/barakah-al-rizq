'use client';

import React, { useState } from 'react';
import { ShoppingBag, Building, HardHat, Store, Briefcase, Utensils, Globe2, CheckCircle2 } from 'lucide-react';
import { LEDGERA_INDUSTRIES } from '@/data/ledgeraData';

export const IndustrySolutions: React.FC = () => {
  const [selectedIndId, setSelectedIndId] = useState('e-commerce');

  const current = LEDGERA_INDUSTRIES.find((i) => i.id === selectedIndId) || LEDGERA_INDUSTRIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'e-commerce': return <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />;
      case 'real-estate': return <Building className="w-5 h-5 text-[#D4AF37]" />;
      case 'construction': return <HardHat className="w-5 h-5 text-[#D4AF37]" />;
      case 'retail': return <Store className="w-5 h-5 text-[#D4AF37]" />;
      case 'services': return <Briefcase className="w-5 h-5 text-[#D4AF37]" />;
      case 'hospitality': return <Utensils className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Globe2 className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#0A291C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            SECTOR-SPECIFIC FINANCIAL ARCHITECTURE
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Industry Accounting Practice.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select your business sector to explore common financial hurdles, reporting frameworks, and tailored LEDGERA engagement models.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {LEDGERA_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndId(ind.id)}
              className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border ${
                selectedIndId === ind.id
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#0E3B27] text-stone-300 border-stone-800 hover:text-white'
              }`}
            >
              {getIcon(ind.id)}
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Card */}
        <div className="bg-[#0E3B27] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-widest block">SECTOR AUDIT</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F7F6F2] mt-1">{current.name}</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed mt-2">{current.description}</p>
            </div>

            {/* Challenges */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">RECURRING SECTOR HURDLES:</span>
              {current.challenges.map((ch) => (
                <div key={ch} className="p-3 rounded-xl bg-[#0A291C] border border-stone-800 flex items-center gap-2">
                  <span className="text-amber-400">⚠️</span>
                  <span className="text-stone-200">{ch}</span>
                </div>
              ))}
            </div>

            {/* Relevant Services */}
            <div className="font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block mb-2">RECOMMENDED PRACTICE MODULES:</span>
              <div className="flex flex-wrap gap-2">
                {current.relevantServices.map((rs) => (
                  <span key={rs} className="px-3 py-1.5 rounded-lg bg-[#0A291C] border border-stone-800 text-[#D4AF37]">
                    {rs}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0A291C] rounded-2xl p-8 border border-[#D4AF37]/30 space-y-4 font-mono">
            <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">REPORTING & ENGAGEMENT MODEL</span>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">CUSTOM REPORTING DELIVERABLE:</span>
                <span className="text-white font-serif font-bold text-sm block mt-0.5">{current.reportingNeeds}</span>
              </div>

              <div className="pt-2 border-t border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">RECOMMENDED ENGAGEMENT MODEL:</span>
                <span className="text-[#D4AF37] font-bold text-xs block mt-0.5">{current.suggestedModel}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
