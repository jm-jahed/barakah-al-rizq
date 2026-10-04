'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AdmissionsJourney: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].journey;

  const journeyIcons = ['📝', '🏛️', '🧠', '📜', '🎒'];

  return (
    <section id="journey" className="py-24 bg-[#050A17] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            🗺️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {ALTAIR_ACADEMY_DATA.journeySteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0D1B3E]/80 p-6 sm:p-7 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 hover:bg-[#122452] transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-amber-400">
                    {isRtl ? step.stepAr : step.step}
                  </span>
                  <span className="text-xl">{journeyIcons[idx]}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-serif">
                  {isRtl ? step.titleAr : step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {isRtl ? step.descAr : step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] font-semibold text-amber-300">
                ⏱️ {isRtl ? step.durationAr : step.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
