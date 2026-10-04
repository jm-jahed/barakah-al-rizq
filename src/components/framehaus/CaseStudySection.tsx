'use client';

import React from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  Award,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Eye,
} from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const { language, isRtl } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];

  return (
    <section id="case-study" className="py-24 bg-[#0A0A0D] border-b border-zinc-800 text-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-3 max-w-3xl border-b border-zinc-800 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>{t.caseStudy.badge}</span>
          </div>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
            {t.caseStudy.clientName}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white">
            {t.caseStudy.campaignTitle}
          </h2>
        </div>

        {/* Case Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Campaign Imagery Comparison */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
                alt="Solis Haute Joaillerie Campaign Master"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded bg-amber-400 text-black font-bold">
                  Phase One 150MP Master Proof
                </span>
                <span className="text-zinc-300">Dubai Mall Flagship Launch</span>
              </div>
            </div>

            <p className="text-xs font-mono text-zinc-400 italic">
              {t.caseStudy.overview}
            </p>
          </div>

          {/* Right: Challenge, Solution & Metrics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
                <h4 className="text-sm font-bold font-mono text-red-400 uppercase tracking-wider">
                  {t.caseStudy.challengeTitle}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {t.caseStudy.challengeText}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950/80 border border-amber-500/40 space-y-2">
                <h4 className="text-sm font-bold font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{t.caseStudy.solutionTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {t.caseStudy.solutionText}
                </p>
              </div>
            </div>

            {/* 4 Quantitative Result Metric Boxes */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1">
                <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
                  {t.caseStudy.stat1Val}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  {t.caseStudy.stat1Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1">
                <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
                  {t.caseStudy.stat2Val}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  {t.caseStudy.stat2Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1">
                <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
                  {t.caseStudy.stat3Val}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  {t.caseStudy.stat3Label}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1">
                <div className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
                  {t.caseStudy.stat4Val}
                </div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  {t.caseStudy.stat4Label}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-amber-400 hover:text-black border border-zinc-700 hover:border-amber-400 text-zinc-200 font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Request Case Study Treatment</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
