'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { NESTORA_CASE_STUDY } from '@/data/nestoraData';

interface CaseStudySectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="case-study" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            FEATURED LANDLORD CASE STUDY
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
            Proven Portfolio Outcomes.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Examining how NESTORA turned around a 12-unit Dubai Marina & Downtown portfolio for an overseas landlord group.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-[#0C2D31] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl space-y-8 font-sans">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800 font-mono text-xs">
            <div>
              <span className="text-[#C5A059] font-bold uppercase block text-[10px]">CASE STUDY PORTFOLIO</span>
              <h3 className="text-2xl font-serif font-bold text-[#F4EFE6]">{NESTORA_CASE_STUDY.clientName}</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#082023] text-stone-300 border border-stone-800 text-[11px]">
              Location: {NESTORA_CASE_STUDY.location}
            </span>
          </div>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            "{NESTORA_CASE_STUDY.challenge}"
          </p>

          {/* Before vs After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            
            {/* Before */}
            <div className="p-6 rounded-2xl bg-[#082023] border border-rose-900/40 space-y-3">
              <span className="text-rose-400 font-bold uppercase block text-[10px]">BEFORE NESTORA MANAGEMENT</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span>Occupancy Rate:</span>
                  <span className="text-rose-400 font-bold">{NESTORA_CASE_STUDY.beforeStats.occupancy}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rent Collection:</span>
                  <span className="text-rose-400 font-bold">{NESTORA_CASE_STUDY.beforeStats.rentCollection}</span>
                </div>
                <div className="flex justify-between">
                  <span>Net Annual Yield:</span>
                  <span className="text-stone-400">{NESTORA_CASE_STUDY.beforeStats.netYield}</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-6 rounded-2xl bg-[#082023] border border-[#C5A059]/40 space-y-3">
              <span className="text-[#C5A059] font-bold uppercase block text-[10px]">AFTER NESTORA MANAGEMENT</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span>Occupancy Rate:</span>
                  <span className="text-emerald-400 font-bold">{NESTORA_CASE_STUDY.afterStats.occupancy}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rent Collection:</span>
                  <span className="text-[#C5A059] font-bold">{NESTORA_CASE_STUDY.afterStats.rentCollection}</span>
                </div>
                <div className="flex justify-between">
                  <span>Net Annual Yield:</span>
                  <span className="text-emerald-400 font-bold">{NESTORA_CASE_STUDY.afterStats.netYield}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-800 font-mono text-center">
            {NESTORA_CASE_STUDY.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-[#082023] border border-stone-800">
                <span className="text-3xl font-black text-[#C5A059] block">{m.value}</span>
                <span className="text-[10px] text-stone-400 uppercase font-sans mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="p-6 rounded-2xl bg-[#082023] border border-stone-800 space-y-2 font-serif text-sm italic text-stone-200">
            <p>"{NESTORA_CASE_STUDY.quote}"</p>
            <span className="text-xs font-mono font-bold text-[#C5A059] not-italic block">{NESTORA_CASE_STUDY.author}</span>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Discuss Multi-Unit Portfolio Management</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
