'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const EduvantaFinalCTA: React.FC = () => {
  const { language, isRtl } = useEduvantaLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#090D14] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#E5C378]/10 via-[#6366F1]/10 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
          {t.cta.badge}
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          {t.cta.title}
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {t.cta.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-extrabold text-xs tracking-wide text-[#07090E] bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#C8A030] hover:from-[#F0D595] hover:to-[#E5C378] shadow-lg shadow-[#E5C378]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t.cta.buttonPrimary}</span>
            <span className={isRtl ? 'rotate-180' : ''}>→</span>
          </a>

          <a
            href="#enroll"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-xs text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E5C378]/50 transition-all backdrop-blur-sm"
          >
            <span>{t.cta.buttonSecondary}</span>
          </a>

          <a
            href={EDUVANTA_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>WhatsApp (+971 50 900 78210)</span>
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
