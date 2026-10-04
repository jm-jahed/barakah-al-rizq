'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { VANTAGE_CASE_STUDY } from '@/data/vantageData';

interface CaseStudySectionProps {
  onOpenRegisterModal: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenRegisterModal }) => {
  return (
    <section id="case-study" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            FEATURED DEVELOPER DELIVERED CASE STUDY
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            Proven Delivery Record.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Examining our flagship completed project, Vantage Bay Residences Business Bay, delivered on-time in early 2025.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-[#0A192F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl space-y-8 font-sans">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800 font-mono text-xs">
            <div>
              <span className="text-[#C5A059] font-bold uppercase block text-[10px]">DELIVERED LANDMARK DEVELOPMENT</span>
              <h3 className="text-3xl font-serif font-bold text-[#FAFAFA]">{VANTAGE_CASE_STUDY.projectName}</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#06101E] text-stone-300 border border-stone-800 text-[11px]">
                {VANTAGE_CASE_STUDY.location}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-bold text-[11px]">
                {VANTAGE_CASE_STUDY.deliveryDate}
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            "{VANTAGE_CASE_STUDY.summary}"
          </p>

          {/* 3 Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-center">
            {VANTAGE_CASE_STUDY.metrics.map((m) => (
              <div key={m.label} className="p-6 rounded-2xl bg-[#06101E] border border-[#C5A059]/30">
                <span className="text-4xl font-black text-[#C5A059] block">{m.value}</span>
                <span className="text-[10px] text-stone-400 uppercase font-sans mt-2 block">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 space-y-2 font-serif text-sm italic text-stone-200">
            <p>"{VANTAGE_CASE_STUDY.quote}"</p>
            <span className="text-xs font-mono font-bold text-[#C5A059] not-italic block">— Penthouse Buyer (Business Bay, Dubai)</span>
          </div>

          {/* Legal Fictional Note */}
          <div className="text-[10px] font-mono text-stone-500 text-center">
            *Note: Case study figures and project metrics presented as illustrative fictional portfolio demonstrations.
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenRegisterModal}
              className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Register Interest for Upcoming Developments</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
