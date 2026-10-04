'use client';

import React from 'react';
import { Scale, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { VERITAS_CASE_STUDY } from '@/data/veritasData';

interface CaseStudySectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="case-study" className="py-24 bg-[#0B132B] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            FEATURED UAE RESTRUCTURING MATTER
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAF8F5] mt-4">
            Proven Legal Outcomes.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Examining how VERITAS LEGAL consolidated Meridian Capital Holdings into a single DIFC Foundation structure.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-[#0F1C3F] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl space-y-8 font-sans">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800 font-mono text-xs">
            <div>
              <span className="text-[#C5A059] font-bold uppercase block text-[10px]">CASE STUDY CLIENT</span>
              <h3 className="text-2xl font-serif font-bold text-[#FAF8F5]">{VERITAS_CASE_STUDY.clientName}</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#0B132B] text-stone-300 border border-stone-800 text-[11px]">
              Industry: {VERITAS_CASE_STUDY.industry}
            </span>
          </div>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            "{VERITAS_CASE_STUDY.challenge}"
          </p>

          {/* Before vs After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            
            {/* Before */}
            <div className="p-6 rounded-2xl bg-[#0B132B] border border-rose-900/40 space-y-3">
              <span className="text-rose-400 font-bold uppercase block text-[10px]">BEFORE LEGAL RESTRUCTURING</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span>Entity Structure:</span>
                  <span className="text-[#FAF8F5] font-bold">{VERITAS_CASE_STUDY.beforeStats.entities}</span>
                </div>
                <div className="flex justify-between">
                  <span>Liability Exposure:</span>
                  <span className="text-rose-400 font-bold">{VERITAS_CASE_STUDY.beforeStats.liability}</span>
                </div>
                <div className="flex justify-between">
                  <span>Legal & Admin Overhead:</span>
                  <span className="text-stone-400">{VERITAS_CASE_STUDY.beforeStats.overhead}</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-6 rounded-2xl bg-[#0B132B] border border-[#C5A059]/40 space-y-3">
              <span className="text-[#C5A059] font-bold uppercase block text-[10px]">AFTER VERITAS LEGAL COUNSEL</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span>Entity Structure:</span>
                  <span className="text-[#FAF8F5] font-bold">{VERITAS_CASE_STUDY.afterStats.entities}</span>
                </div>
                <div className="flex justify-between">
                  <span>Liability Exposure:</span>
                  <span className="text-[#C5A059] font-bold">{VERITAS_CASE_STUDY.afterStats.liability}</span>
                </div>
                <div className="flex justify-between">
                  <span>Legal & Admin Overhead:</span>
                  <span className="text-emerald-400 font-bold">{VERITAS_CASE_STUDY.afterStats.overhead}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-800 font-mono text-center">
            {VERITAS_CASE_STUDY.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-[#0B132B] border border-stone-800">
                <span className="text-3xl font-black text-[#C5A059] block">{m.value}</span>
                <span className="text-[10px] text-stone-400 uppercase font-sans mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="p-6 rounded-2xl bg-[#0B132B] border border-stone-800 space-y-2 font-serif text-sm italic text-stone-200">
            <p>"{VERITAS_CASE_STUDY.quote}"</p>
            <span className="text-xs font-mono font-bold text-[#C5A059] not-italic block">{VERITAS_CASE_STUDY.author}</span>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Discuss Holding Restructuring Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
