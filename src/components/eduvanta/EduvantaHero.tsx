'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const EduvantaHero: React.FC = () => {
  const { language, formatNumber, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden bg-[#07090E] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/[0.08]">
      {/* Cinematic Background Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#E5C378]/12 via-[#6366F1]/10 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-gradient-to-l from-[#6366F1]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-[-5%] w-[450px] h-[350px] bg-gradient-to-r from-[#E5C378]/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#E5C378]/30 shadow-inner backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-ping" />
            <span className="text-xs font-semibold text-[#E5C378] tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Strategic Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 font-sans">
            <span>{t.hero.titleLine1} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#F3E2B8] to-[#D4AF37] drop-shadow-sm">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-10">
            {t.hero.subtitle}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm tracking-wide text-[#07090E] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C8A030] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/25 hover:shadow-xl hover:shadow-[#E5C378]/35 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t.hero.exploreCta}</span>
              <span className={isRtl ? 'rotate-180' : ''}>→</span>
            </a>

            <a
              href="#enroll"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#E5C378]/50 transition-all duration-200 backdrop-blur-sm"
            >
              <span>{t.hero.advisorCta}</span>
            </a>

            <a
              href="#corporate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4 text-[#E5C378]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{t.hero.corporateCta}</span>
            </a>
          </div>

          {/* High-Trust Metrics Intelligence Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/[0.08]">
            <div className="p-5 rounded-2xl bg-[#0D1118]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-[#E5C378]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#E5C378]">
                {language === 'ar' ? '+١٢,٠٠٠' : '12,000+'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsTrainedLabel}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1118]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-[#E5C378]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mb-1">
                {language === 'ar' ? '٩٤٪' : '94%'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsCompletionLabel}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1118]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-[#E5C378]/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#E5C378] font-mono mb-1">
                {language === 'ar' ? '+٤٠' : '40+'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsProgramsLabel}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1118]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-[#E5C378]/30 transition-colors">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {language === 'ar' ? 'دبي • أبوظبي' : 'Dubai • Abu Dhabi'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsCampusesLabel}
              </div>
            </div>
          </div>

          {/* Portfolio & Demo Disclosure Note */}
          <div className="mt-8 text-center">
            <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase px-3 py-1 rounded bg-white/[0.03] border border-white/[0.06]">
              {t.hero.fictionalNotice}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
