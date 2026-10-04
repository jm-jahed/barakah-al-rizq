'use client';

import React from 'react';
import { Scale, ShieldAlert, ArrowRight } from 'lucide-react';
import { VERITAS_JURISDICTIONS } from '@/data/veritasData';

interface JurisdictionComparisonProps {
  onOpenConsultation: () => void;
}

export const JurisdictionComparison: React.FC<JurisdictionComparisonProps> = ({ onOpenConsultation }) => {
  return (
    <section id="jurisdictions" className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              UAE JURISDICTIONAL STRATEGY
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
              The Right Jurisdiction Matters.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Evaluating English Common Law financial free zones (DIFC / ADGM) against UAE Onshore Civil Code jurisdictions for asset protection, dispute resolution, and commercial flexibility.
            </p>
          </div>
        </div>

        {/* 3 Jurisdiction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {VERITAS_JURISDICTIONS.map((jur) => (
            <div
              key={jur.name}
              className="bg-[#0F1C3F] rounded-3xl border border-stone-800 p-8 shadow-xl hover:border-[#C5A059]/40 transition-all flex flex-col justify-between space-y-6 font-sans"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#0B132B] text-[#C5A059] border border-[#C5A059]/30 uppercase inline-block">
                  {jur.type}
                </span>

                <h3 className="text-2xl font-serif font-bold text-[#FAF8F5] leading-snug">{jur.name}</h3>

                <div className="space-y-3 font-mono text-xs text-stone-300 border-t border-stone-800 pt-4">
                  <div>
                    <span className="text-stone-500 uppercase block text-[9px]">TYPICAL USE CASES:</span>
                    <p className="text-stone-200 font-sans font-light text-xs mt-0.5">{jur.useCases}</p>
                  </div>

                  <div>
                    <span className="text-stone-500 uppercase block text-[9px]">LEGAL ECOSYSTEM:</span>
                    <p className="text-stone-200 font-sans font-light text-xs mt-0.5">{jur.ecosystem}</p>
                  </div>

                  <div>
                    <span className="text-[#C5A059] uppercase block text-[9px] font-bold">KEY CONSIDERATION:</span>
                    <p className="text-stone-300 font-sans font-light text-xs mt-0.5">{jur.considerations}</p>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-white/10"
                >
                  <span>Evaluate {jur.name.split(' ')[0]} Structure</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-2xl bg-[#0F1C3F] border border-stone-800 flex items-center gap-3 font-mono text-xs text-stone-400">
          <ShieldAlert className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
          <span>
            <strong>General Informational Notice:</strong> Jurisdictional considerations vary by business structure, asset type, and commercial circumstances. Consult a licensed UAE legal professional for advice specific to your situation.
          </span>
        </div>

      </div>
    </section>
  );
};
