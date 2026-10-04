'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AcademicsSection: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].academics;
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const pillars = ALTAIR_ACADEMY_DATA.academicPillars;
  const currentPillar = pillars[activePillarIdx];

  const pillarIcons = ['🔬', '⚖️', '🎭', '🏆'];

  return (
    <section id="academics" className="py-24 bg-[#050A17] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            🏛️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Pillar Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {pillars.map((pil, idx) => (
            <button
              key={pil.id}
              type="button"
              onClick={() => setActivePillarIdx(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                activePillarIdx === idx
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-[#070D1E] border-amber-300 shadow-lg shadow-amber-500/20 scale-105 font-serif'
                  : 'bg-[#0D1B3E]/90 text-slate-300 border-amber-500/20 hover:bg-[#122452] hover:border-amber-400/40'
              }`}
            >
              <span>{pillarIcons[idx]}</span>
              <span>{isRtl ? pil.titleAr : pil.title}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Showcase Box */}
        <div className="bg-[#0D1B3E] p-7 sm:p-10 md:p-12 rounded-3xl border border-amber-500/30 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-60 h-60 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Top Subheader */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-bold text-amber-400 bg-[#050A17] px-3.5 py-1 rounded-full border border-amber-500/30">
              {isRtl ? `الركن ٠${toArabicDigits(activePillarIdx + 1)}` : `Pillar 0${activePillarIdx + 1}`}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 font-serif">
            {isRtl ? currentPillar.titleAr : currentPillar.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            {isRtl ? currentPillar.descriptionAr : currentPillar.description}
          </p>

          {/* Highlights Grid */}
          <div>
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span>✦</span>
              <span>{tr.highlightsTitle}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentPillar.highlights.map((high, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#050A17]/80 text-xs sm:text-sm text-slate-200 border border-amber-500/20 flex items-start gap-2.5 hover:border-amber-400/40 transition-colors"
                >
                  <span className="text-amber-400 font-bold mt-0.5">●</span>
                  <span>{isRtl ? high.ar : high.en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
