'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AltairFinalCTA: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].finalCta;

  return (
    <section className="py-24 bg-gradient-to-b from-[#070D1E] via-[#0D1B3E] to-[#070D1E] relative overflow-hidden border-b border-amber-500/20">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30 inline-block mb-6">
          🌟 {tr.badge}
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 font-serif">
          {tr.title}
        </h2>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {tr.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#tour"
            className="w-full sm:w-auto text-xs sm:text-sm font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 px-8 py-4 rounded-2xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transform hover:-translate-y-0.5"
          >
            🏛️ {tr.bookTourNow}
          </a>
          <a
            href={ALTAIR_ACADEMY_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-8 py-4 rounded-2xl transition-all hover:bg-emerald-900/60 flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{tr.whatsappCta}</span>
          </a>
        </div>

        <p className="text-xs text-amber-300/80 font-mono">
          {tr.hotline}
        </p>
      </div>
    </section>
  );
};
