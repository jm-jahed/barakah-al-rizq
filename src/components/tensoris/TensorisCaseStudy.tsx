'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Coins, CheckCircle2, ArrowRight, Quote, Activity, Award, BarChart3 } from 'lucide-react';
import { FLAGSHIP_CASE_STUDY } from '@/data/tensorisData';

interface TensorisCaseStudyProps {
  onOpenModal: (intent?: string) => void;
}

export const TensorisCaseStudy: React.FC<TensorisCaseStudyProps> = ({ onOpenModal }) => {
  const cs = FLAGSHIP_CASE_STUDY;

  return (
    <section className="relative py-24 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>FLAGSHIP TRANSFORMATION STORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How UAE Enterprises Scale With TENSORIS
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A documented transformation case study demonstrating measurable compression of operational latency and substantial AED financial impact.
          </p>
        </div>

        {/* Master Case Study Card */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-[#020617] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl shadow-cyan-950/60 space-y-8">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {cs.sector} · {cs.location}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {cs.client}
              </h3>
            </div>

            <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200">
              Annual Volume: <strong className="text-cyan-300">{cs.scale}</strong>
            </div>
          </div>

          {/* Narrative: Challenge vs Cognitive Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-850 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                <span>THE ARCHITECTURAL CHALLENGE</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {cs.challenge}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                <span>THE TENSORIS COGNITIVE SOLUTION</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {cs.cognitiveSolution}
              </p>
            </div>
          </div>

          {/* 4 Outcome Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
            {cs.outcomes.map((out, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                  {out.metric}
                </div>
                <div className="text-xs font-bold text-white font-sans">
                  {out.label}
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {out.description}
                </p>
              </div>
            ))}
          </div>

          {/* Executive Quote & Action */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <Quote className="w-6 h-6 text-cyan-400" />
              <p className="text-sm text-slate-200 italic leading-relaxed">
                &ldquo;{cs.quote.text}&rdquo;
              </p>
              <div className="text-xs font-mono text-cyan-300 font-bold">
                {cs.quote.author} — <span className="text-slate-400 font-normal">{cs.quote.title}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal(`Schedule Transformation Briefing based on ${cs.client}`)}
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0"
            >
              <span>Schedule Enterprise Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
