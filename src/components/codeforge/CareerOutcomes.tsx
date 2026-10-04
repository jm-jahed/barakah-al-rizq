'use client';

import React from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const CareerOutcomes: React.FC = () => {
  const { language, isRtl } = useCodeforgeLanguage();
  const t = translations[language];
  const outcomes = CODEFORGE_DATA.careerOutcomes;

  return (
    <section id="outcomes" className="bg-[#050811] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
            {t.outcomes.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.outcomes.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.outcomes.subtitle}
          </p>
        </div>

        {/* 3 Outcome Metric Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {outcomes.stats.map((st, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0D121F] border border-white/[0.08] hover:border-sky-500/40 transition-all text-center group shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-black text-white font-mono mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-white">
                {language === 'ar' ? st.valueAr : st.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 font-sans">
                {language === 'ar' ? st.labelAr : st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated 1-on-1 Career Support Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0D121F] via-[#121829] to-[#0D121F] border border-sky-500/20 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.outcomes.careerSupportTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              {language === 'ar' ? 'فريق توظيف هندسي يرافقك حتى توقيع العقد' : 'Dedicated Technical Career Coaches By Your Side'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {t.outcomes.careerSupportDesc}
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[#38BDF8]">✓</span>
                <span>{language === 'ar' ? 'مراجعة وتدقيق ملف GitHub' : 'GitHub Repository Audits'}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[#38BDF8]">✓</span>
                <span>{language === 'ar' ? 'محاكاة أسئلة LeetCode' : 'Live LeetCode Simulations'}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <span className="text-[#38BDF8]">✓</span>
                <span>{language === 'ar' ? 'توصية مباشرة لمدراء التقنية' : 'Direct Hiring Introductions'}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
