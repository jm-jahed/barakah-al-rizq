'use client';

import React from 'react';
import { TrendingUp, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import { NEXORA_CASE_STUDY } from '@/data/nexoraData';

interface CaseStudySectionProps {
  onOpenConsultation: () => void;
}

export const CaseStudySection: React.FC<CaseStudySectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="case-study" className="py-24 bg-[#121417] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-widest px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
            FEATURED CLIENT TRANSFORMATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F7F6F2] mt-4">
            Proven Commercial Results.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            See how NEXORA restructured VANTA Retail Group's operations across Dubai and Abu Dhabi for long-term profitability.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-[#1A1D24] rounded-3xl border border-stone-700 p-8 sm:p-12 shadow-2xl space-y-8 font-sans">
          
          {/* Client Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800 font-mono text-xs">
            <div>
              <span className="text-[#D4AF37] font-bold uppercase block text-[10px]">CASE STUDY CLIENT</span>
              <h3 className="text-2xl font-serif font-bold text-[#F7F6F2]">{NEXORA_CASE_STUDY.clientName}</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#121417] text-stone-300 border border-stone-800 text-[11px]">
              Industry: {NEXORA_CASE_STUDY.industry}
            </span>
          </div>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            "{NEXORA_CASE_STUDY.challenge}"
          </p>

          {/* Before vs After Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            
            {/* Before */}
            <div className="p-6 rounded-2xl bg-[#121417] border border-rose-900/40 space-y-3">
              <span className="text-rose-400 font-bold uppercase block text-[10px]">BEFORE NEXORA ADVISORY</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span>Annual Revenue:</span>
                  <span className="text-white font-bold">{NEXORA_CASE_STUDY.beforeStats.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Operating Overhead:</span>
                  <span className="text-rose-400 font-bold">{NEXORA_CASE_STUDY.beforeStats.overhead}</span>
                </div>
                <div className="flex justify-between">
                  <span>Corporate Structure:</span>
                  <span className="text-stone-400">{NEXORA_CASE_STUDY.beforeStats.entities}</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-6 rounded-2xl bg-[#121417] border border-[#D4AF37]/40 space-y-3">
              <span className="text-[#D4AF37] font-bold uppercase block text-[10px]">AFTER NEXORA RESTRUCTURING</span>
              <div className="space-y-1.5 text-stone-300">
                <div className="flex justify-between">
                  <span>Annual Revenue:</span>
                  <span className="text-white font-bold">{NEXORA_CASE_STUDY.afterStats.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span>Operating Overhead:</span>
                  <span className="text-[#D4AF37] font-bold">{NEXORA_CASE_STUDY.afterStats.overhead}</span>
                </div>
                <div className="flex justify-between">
                  <span>Corporate Structure:</span>
                  <span className="text-emerald-400 font-bold">{NEXORA_CASE_STUDY.afterStats.entities}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Impact Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-800 font-mono text-center">
            {NEXORA_CASE_STUDY.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl bg-[#121417] border border-stone-800">
                <span className="text-3xl font-black text-[#D4AF37] block">{m.value}</span>
                <span className="text-[10px] text-stone-400 uppercase font-sans mt-1 block">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Quote */}
          <div className="p-6 rounded-2xl bg-[#121417] border border-stone-800 space-y-2 font-serif text-sm italic text-stone-200">
            <p>"{NEXORA_CASE_STUDY.quote}"</p>
            <span className="text-xs font-mono font-bold text-[#D4AF37] not-italic block">{NEXORA_CASE_STUDY.author}</span>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
            >
              <span>Achieve Similar Results for Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
