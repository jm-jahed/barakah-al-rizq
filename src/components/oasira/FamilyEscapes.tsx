'use client';

import React from 'react';
import { Users, ArrowRight, Heart } from 'lucide-react';

interface FamilyEscapesProps {
  onExploreFamilyResorts: () => void;
}

export const FamilyEscapes: React.FC<FamilyEscapesProps> = ({ onExploreFamilyResorts }) => {
  return (
    <section className="py-24 bg-[#0F382C] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-[#D4B382] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4B382]/10 border border-[#D4B382]/30">
              FAMILY STAYCATIONS & RESIDENCES
            </span>

            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF6EE] leading-tight">
              More memories. Less planning.
            </h2>

            <p className="text-base text-stone-300 font-light leading-relaxed">
              Interconnecting rooms, kids clubs, temperature-controlled waterparks, and babysitting services designed so parents can relax while children explore.
            </p>

            <div className="grid grid-cols-2 gap-4 font-mono text-xs pt-2">
              <div className="p-4 rounded-2xl bg-[#0A2920] border border-stone-800">
                <span className="text-[#D4B382] font-bold text-sm block">Kids Clubs</span>
                <span className="text-stone-400 text-[11px]">Supervised activities</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#0A2920] border border-stone-800">
                <span className="text-[#D4B382] font-bold text-sm block">Family Suites</span>
                <span className="text-stone-400 text-[11px]">2 & 3 bedroom options</span>
              </div>
            </div>

            <button
              onClick={onExploreFamilyResorts}
              className="px-8 py-4 rounded-2xl bg-[#D4B382] hover:bg-[#c2a170] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              <span>Find Family Resorts</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
                alt="Family Resort Staycation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F382C] via-transparent to-transparent" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
