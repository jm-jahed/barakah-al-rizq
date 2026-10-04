'use client';

import React from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const WhyLittleHorizon: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].whyUs;

  const pillarIcons = ['👥', '👩‍🏫', '🛡️', '🥗', '📱', '🎓'];

  return (
    <section id="why-lh" className="py-24 bg-[#0E1B13] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            💎 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 6 Institutional Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LITTLE_HORIZON_DATA.whyLittleHorizon.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#132219]/80 p-8 rounded-3xl border border-emerald-800/40 hover:border-amber-400/50 hover:bg-[#1A2F22] transition-all group shadow-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0A120D] border border-emerald-700/40 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                  {pillarIcons[idx]}
                </div>
                <span className="font-mono text-xs font-bold text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/40">
                  {isRtl ? `٠${toArabicDigits(idx + 1)}` : `0${idx + 1}`}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {isRtl ? item.titleAr : item.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                {isRtl ? item.descAr : item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
