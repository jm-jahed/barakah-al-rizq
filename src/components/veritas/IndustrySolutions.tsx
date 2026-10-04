'use client';

import React, { useState } from 'react';
import { Building, Cpu, DollarSign, HardHat, HeartPulse, ShoppingBag, Utensils, CheckCircle2 } from 'lucide-react';
import { VERITAS_INDUSTRIES } from '@/data/veritasData';

export const IndustrySolutions: React.FC = () => {
  const [selectedIndId, setSelectedIndId] = useState('real-estate');

  const current = VERITAS_INDUSTRIES.find((i) => i.id === selectedIndId) || VERITAS_INDUSTRIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'real-estate': return <Building className="w-5 h-5 text-[#C5A059]" />;
      case 'tech': return <Cpu className="w-5 h-5 text-[#C5A059]" />;
      case 'finance': return <DollarSign className="w-5 h-5 text-[#C5A059]" />;
      case 'construction': return <HardHat className="w-5 h-5 text-[#C5A059]" />;
      case 'healthcare': return <HeartPulse className="w-5 h-5 text-[#C5A059]" />;
      case 'retail': return <ShoppingBag className="w-5 h-5 text-[#C5A059]" />;
      default: return <Utensils className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="industries" className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            SPECIALIZED SECTOR COUNSEL
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
            Industry Legal Practice.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select a commercial sector to view key legal risks, relevant practice areas, and verified case examples.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {VERITAS_INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelectedIndId(ind.id)}
              className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border ${
                selectedIndId === ind.id
                  ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-lg shadow-[#C5A059]/20'
                  : 'bg-[#0F1C3F] text-stone-300 border-stone-800 hover:text-white'
              }`}
            >
              {getIcon(ind.id)}
              <span>{ind.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Card */}
        <div className="bg-[#0F1C3F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#C5A059] font-bold uppercase tracking-widest block">SECTOR ANALYSIS</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF8F5] mt-1">{current.name}</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed mt-2">{current.description}</p>
            </div>

            {/* Legal Risks */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">KEY RECURRING LEGAL RISKS:</span>
              {current.legalRisks.map((risk) => (
                <div key={risk} className="p-3 rounded-xl bg-[#0B132B] border border-stone-800 flex items-center gap-2">
                  <span className="text-rose-400">⚠️</span>
                  <span className="text-stone-200">{risk}</span>
                </div>
              ))}
            </div>

            {/* Relevant Practices */}
            <div className="font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block mb-2">RELEVANT PRACTICE GROUPS:</span>
              <div className="flex flex-wrap gap-2">
                {current.relevantPractices.map((rp) => (
                  <span key={rp} className="px-3 py-1.5 rounded-lg bg-[#0B132B] border border-stone-800 text-[#C5A059]">
                    {rp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0B132B] rounded-2xl p-8 border border-[#C5A059]/30 space-y-4 font-mono">
            <span className="text-[10px] text-[#C5A059] font-bold uppercase tracking-widest block">REPRESENTATIVE MATTER & OUTCOME</span>
            <div className="text-base font-serif font-bold text-white leading-snug">
              "{current.exampleMatter}"
            </div>
            <div className="p-3 rounded-xl bg-[#0F1C3F] border border-stone-800 text-xs text-stone-300">
              <span className="text-[#C5A059] font-bold block mb-0.5">OUTCOME:</span>
              <span>{current.outcome}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
