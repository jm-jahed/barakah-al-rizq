'use client';

import React from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const CodeforgeHero: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden bg-[#070A12] pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/[0.08]">
      {/* Cinematic Background Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-sky-500/15 via-indigo-500/10 to-transparent blur-3xl opacity-60" />
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] bg-gradient-to-l from-indigo-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-[-5%] w-[450px] h-[350px] bg-gradient-to-r from-sky-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf80f_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-sky-500/30 shadow-inner backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
            <span className="text-xs font-semibold font-mono text-[#38BDF8] tracking-wide uppercase">
              {t.hero.badge}
            </span>
          </div>

          {/* Strategic Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 font-sans">
            <span>{t.hero.titleLine1} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#818CF8] drop-shadow-sm font-mono">
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
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-sm tracking-wide text-[#070A12] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#0369A1] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-lg shadow-sky-500/25 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              <span>{t.hero.exploreCta}</span>
              <span className={isRtl ? 'rotate-180' : ''}>→</span>
            </a>

            <a
              href="#apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-sky-500/50 transition-all duration-200 backdrop-blur-sm font-sans"
            >
              <span>{t.hero.advisorCta}</span>
            </a>

            <a
              href="#matcher"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all duration-200"
            >
              <span className="text-[#38BDF8]">{'//'}</span>
              <span>{language === 'ar' ? 'اختبار مطابقة المسار' : 'Track Matcher Quiz'}</span>
            </a>
          </div>

          {/* Metrics Intelligence Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/[0.08]">
            <div className="p-5 rounded-2xl bg-[#0D121F]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-sky-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-white font-mono mb-1 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#38BDF8]">
                {language === 'ar' ? '+٨٥٠' : '850+'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsHiredLabel}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D121F]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-sky-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mb-1">
                {language === 'ar' ? '٨٨٪' : '88%'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsPlacementLabel}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D121F]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-sky-500/30 transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#38BDF8] font-mono mb-1">
                {language === 'ar' ? '١٢-١٦ أسبوعاً' : '12–16 Wks'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsDurationLabel}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D121F]/80 border border-white/[0.06] backdrop-blur-sm text-center hover:border-sky-500/30 transition-colors">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                {language === 'ar' ? 'دبي • أبوظبي' : 'Dubai • Abu Dhabi'}
              </div>
              <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">
                {t.hero.statsCampusesLabel}
              </div>
            </div>
          </div>

          {/* Portfolio Notice */}
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
