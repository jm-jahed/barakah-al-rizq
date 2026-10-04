'use client';

import React from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const TrustStrip: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].trustStrip;

  return (
    <section className="py-10 bg-[#0B150F] border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-6">
          {tr.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center text-center">
          {LITTLE_HORIZON_DATA.trustLogos.map((client, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#132219]/60 border border-emerald-800/30 hover:border-amber-400/40 transition-all hover:bg-[#1A2F22]/70 shadow-sm"
            >
              <span className="font-extrabold text-sm sm:text-base text-white tracking-wide font-sans block">
                {client.name}
              </span>
              <span className="text-[11px] text-emerald-300/80 font-medium block mt-1">
                {isRtl ? client.tagAr : client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
