'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, Star, ShieldCheck } from 'lucide-react';
import { MOVING_CASE_STUDY } from '@/data/movingData';

interface MovingCaseStudyProps {
  onOpenQuoteModal: () => void;
}

export const MovingCaseStudy: React.FC<MovingCaseStudyProps> = ({ onOpenQuoteModal }) => {
  const cs = MOVING_CASE_STUDY;

  return (
    <section className="py-24 bg-[#090807] relative border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-b from-[#14100C] to-[#0A0806] rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              FEATURED ROYAL RELOCATION CASE STUDY
            </span>
            <span className="text-xs font-mono text-slate-400">{cs.client}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight max-w-3xl">
            {cs.title}
          </h2>

          <p className="text-xs font-mono text-emerald-400 mb-8">
            📍 Scope: {cs.scope} • Turnaround: {cs.duration}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 font-mono">
            {cs.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
                <span className="text-2xl font-black text-amber-400 block">{m.value}</span>
                <span className="text-[10px] text-slate-400 uppercase block mt-1">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">OPERATIONAL CHALLENGE</span>
              <p className="text-xs text-slate-300 leading-relaxed">{cs.challenge}</p>
            </div>

            <div className="lg:col-span-6 p-5 rounded-2xl bg-amber-950/40 border border-amber-500/30">
              <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">NESTMOVE WHITE-GLOVE EXECUTION</span>
              <p className="text-xs text-slate-200 leading-relaxed">{cs.solution}</p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Discreet Confidentiality Non-Disclosure Agreement (NDA) Protected</span>
            </span>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
            >
              <span>Plan Similar Prestige Move</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
