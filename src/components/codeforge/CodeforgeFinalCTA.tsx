'use client';

import React from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const CodeforgeFinalCTA: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#050811] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
          {t.cta.badge}
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4 font-sans">
          {t.cta.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {t.cta.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-xs tracking-wide text-[#070A12] bg-gradient-to-r from-[#38BDF8] via-[#0284C7] to-[#0369A1] hover:from-[#7DD3FC] hover:to-[#38BDF8] shadow-lg shadow-sky-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer font-sans"
          >
            <span>{t.cta.buttonPrimary}</span>
            <span className={isRtl ? 'rotate-180' : ''}>→</span>
          </a>

          <a
            href="#apply"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-xs text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-sky-500/50 transition-all backdrop-blur-sm font-sans"
          >
            <span>{t.cta.buttonSecondary}</span>
          </a>

          <a
            href={CODEFORGE_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>WhatsApp (+971 50 700 89120)</span>
          </a>
        </div>

        {/* Hotline Bar */}
        <div className="text-xs font-mono text-slate-400">
          {t.cta.hotline}
        </div>
      </div>
    </section>
  );
};
