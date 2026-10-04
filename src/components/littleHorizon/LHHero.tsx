'use client';

import React from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';

export const LHHero: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].hero;

  const stats = [
    { value: isRtl ? '+٨٠٠' : '800+', label: tr.stat1Label },
    { value: isRtl ? '١:٣ إلى ١:٦' : '1:3 to 1:6', label: tr.stat2Label },
    { value: isRtl ? '٣ فروع' : '3 Campuses', label: tr.stat3Label },
    { value: isRtl ? '١٠٠٪' : '100%', label: tr.stat4Label }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A120D] via-[#0E1B13] to-[#0A120D] pt-16 sm:pt-20 pb-20 sm:pb-28 border-b border-emerald-900/40">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold tracking-wide mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>{tr.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] mb-6">
            <span>{tr.headlinePre} </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
              {tr.headlineHighlight}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-emerald-200/90 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            {tr.subtext}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#tour"
              className="w-full sm:w-auto text-sm font-extrabold text-[#0A120D] bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-500 px-8 py-4 rounded-2xl transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 text-center transform hover:-translate-y-0.5"
            >
              🌿 {tr.bookTourCta}
            </a>
            <a
              href="#programs"
              className="w-full sm:w-auto text-sm font-semibold text-emerald-100 bg-[#132219]/90 hover:bg-[#1A2F22] border border-emerald-700/50 px-8 py-4 rounded-2xl transition-all text-center hover:border-emerald-500 shadow-md"
            >
              {tr.exploreProgramsCta} {isRtl ? '←' : '→'}
            </a>
          </div>

          {/* Trust Notice */}
          <div className="inline-flex items-center gap-2 text-[12px] text-emerald-400/90 font-medium mb-12 bg-[#0C1710] px-4 py-1.5 rounded-full border border-emerald-900/60">
            <span>🏛️</span>
            <span>{tr.trustNotice}</span>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-emerald-900/60">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#132219]/70 p-5 sm:p-6 rounded-2xl border border-emerald-800/40 backdrop-blur-md text-center group hover:border-amber-400/50 hover:bg-[#1A2F22]/80 transition-all shadow-lg"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300 font-sans group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-emerald-200/90 font-medium tracking-wide mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
