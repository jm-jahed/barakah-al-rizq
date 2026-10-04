'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const WhyAltair: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].whyUs;

  const pillarIcons = ['📜', '🎓', '👥', '🏆', '🔬', '💖'];

  return (
    <section id="why-altair" className="py-24 bg-[#050A17] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            💎 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 6 Institutional Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALTAIR_ACADEMY_DATA.whyAltair.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0D1B3E]/80 p-8 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 hover:bg-[#122452] transition-all group shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#070D1E] border border-amber-500/30 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                  {pillarIcons[idx]}
                </div>
                <span className="font-mono text-xs font-bold text-amber-400 bg-[#050A17] px-3 py-1 rounded-full border border-amber-500/30">
                  {isRtl ? `٠${toArabicDigits(idx + 1)}` : `0${idx + 1}`}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors font-serif">
                {isRtl ? item.titleAr : item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isRtl ? item.descAr : item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
