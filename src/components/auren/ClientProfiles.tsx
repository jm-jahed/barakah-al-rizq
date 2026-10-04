'use client';

import React, { useState } from 'react';
import { Briefcase, Building, Shield, Building2, Users, CheckCircle2 } from 'lucide-react';
import { AUREN_CLIENT_PROFILES } from '@/data/aurenData';

export const ClientProfiles: React.FC = () => {
  const [selectedProfId, setSelectedProfId] = useState('entrepreneurs');

  const current = AUREN_CLIENT_PROFILES.find((p) => p.id === selectedProfId) || AUREN_CLIENT_PROFILES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'entrepreneurs': return <Briefcase className="w-5 h-5 text-[#D4AF37]" />;
      case 'family-offices': return <Building className="w-5 h-5 text-[#D4AF37]" />;
      case 'executives': return <Shield className="w-5 h-5 text-[#D4AF37]" />;
      case 'real-estate-investors': return <Building2 className="w-5 h-5 text-[#D4AF37]" />;
      default: return <Users className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="client-profiles" className="py-24 bg-[#080A09] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            TAILORED PRIVATE ADVISORY SEGMENTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F8F6F0] mt-4">
            Who We Advise.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Select your private wealth client category to examine common priorities, relevant practice modules, and discretionary protocols.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="flex justify-center gap-2 flex-wrap mb-12 font-serif text-xs">
          {AUREN_CLIENT_PROFILES.map((prof) => (
            <button
              key={prof.id}
              onClick={() => setSelectedProfId(prof.id)}
              className={`px-5 py-3 rounded-xl font-bold transition-all flex items-center gap-2 border ${
                selectedProfId === prof.id
                  ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-[#1A1D1B] text-stone-300 border-stone-800 hover:text-white'
              }`}
            >
              {getIcon(prof.id)}
              <span>{prof.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Profile Card */}
        <div className="bg-[#1A1D1B] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] font-bold uppercase tracking-widest block">CLIENT SEGMENT AUDIT</span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F8F6F0] mt-1">{current.name}</h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed mt-2">{current.description}</p>
            </div>

            {/* Priorities */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">PRIMARY WEALTH PRIORITIES:</span>
              {current.priorities.map((pr) => (
                <div key={pr} className="p-3 rounded-xl bg-[#080A09] border border-stone-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-stone-200">{pr}</span>
                </div>
              ))}
            </div>

            {/* Relevant Services */}
            <div className="font-mono text-xs">
              <span className="text-[10px] text-stone-400 uppercase font-bold block mb-2">RECOMMENDED ADVISORY MANDATES:</span>
              <div className="flex flex-wrap gap-2">
                {current.relevantServices.map((rs) => (
                  <span key={rs} className="px-3 py-1.5 rounded-lg bg-[#080A09] border border-stone-800 text-[#D4AF37]">
                    {rs}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#080A09] rounded-2xl p-8 border border-[#D4AF37]/30 space-y-4 font-mono">
            <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest block">ENGAGEMENT & DISCRETION</span>
            
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-stone-400 block text-[10px] uppercase">TYPICAL ENGAGEMENT STYLE:</span>
                <span className="text-white font-serif font-bold text-sm block mt-0.5">{current.engagement}</span>
              </div>

              <div className="pt-2 border-t border-stone-800">
                <span className="text-stone-400 block text-[10px] uppercase">DISCRETION & PRIVACY MANDATE:</span>
                <span className="text-[#D4AF37] font-bold text-xs block mt-0.5">{current.discretionNote}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
