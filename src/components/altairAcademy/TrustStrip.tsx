'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const TrustStrip: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].trustStrip;

  return (
    <section className="py-10 bg-[#050A17] border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-amber-400 uppercase tracking-widest mb-6">
          {tr.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center justify-center text-center">
          {ALTAIR_ACADEMY_DATA.trustLogos.map((client, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#0D1B3E]/60 border border-amber-500/20 hover:border-amber-400/40 transition-all hover:bg-[#122452] shadow-sm"
            >
              <span className="font-extrabold text-sm sm:text-base text-white tracking-wide font-serif block">
                {client.name}
              </span>
              <span className="text-[11px] text-slate-400 font-medium block mt-1">
                {isRtl ? client.tagAr : client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
