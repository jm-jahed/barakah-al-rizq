'use client';

import React from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const CaseStudySection: React.FC = () => {
  const { language } = useEduvantaLanguage();
  const t = translations[language];
  const cs = EDUVANTA_DATA.caseStudy;

  return (
    <section className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.caseStudy.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.caseStudy.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.caseStudy.subtitle}
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-[#0D1118] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Metadata Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
            <div>
              <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-wider block">
                {t.caseStudy.clientLabel}
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {language === 'ar' ? cs.clientAr : cs.client}
              </span>
            </div>

            <div className="text-start sm:text-end">
              <span className="text-[10.5px] font-mono text-[#E5C378] uppercase tracking-wider block">
                {t.caseStudy.scenarioLabel}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-300">
                {language === 'ar' ? cs.scenarioAr : cs.scenario}
              </span>
            </div>
          </div>

          {/* 4-Step Narrative Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Step 1: Challenge */}
            <div className="p-5 rounded-2xl bg-[#11161F] border border-rose-500/20">
              <div className="text-xs font-mono font-bold text-rose-400 uppercase mb-2">
                01. {t.caseStudy.challengeTitle}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar' ? cs.challengeAr : cs.challenge}
              </p>
            </div>

            {/* Step 2: Baseline State */}
            <div className="p-5 rounded-2xl bg-[#11161F] border border-white/5">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase mb-2">
                02. {language === 'ar' ? 'الواقع التشغيلي السابق' : 'Baseline Metrics'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar' ? cs.beforeAr : cs.before}
              </p>
            </div>

            {/* Step 3: Intervention */}
            <div className="p-5 rounded-2xl bg-[#11161F] border border-[#E5C378]/30 ring-1 ring-[#E5C378]/10">
              <div className="text-xs font-mono font-bold text-[#E5C378] uppercase mb-2">
                03. {t.caseStudy.interventionTitle}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'ar' ? cs.afterAr : cs.after}
              </p>
            </div>

            {/* Step 4: Outcome Metrics */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-[#11161F] border border-emerald-500/40 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-2">
                  04. {t.caseStudy.outcomesTitle}
                </div>
                <div className="text-xs text-slate-300">
                  {language === 'ar'
                    ? 'تحقيق التجانس الكامل بين رؤساء الأقسام وتسريع تسليم المشاريع بنسبة ٤٠٪.'
                    : 'Achieved flawless cross-functional handoffs & 40% faster milestone delivery.'}
                </div>
              </div>
            </div>
          </div>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]">
            {cs.metrics.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                <div className="text-3xl font-black text-white font-mono mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] to-[#F3E2B8]">
                  {language === 'ar' ? m.valueAr : m.value}
                </div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  {language === 'ar' ? m.labelAr : m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <span className="text-[10.5px] text-slate-400 font-mono tracking-wider uppercase">
              {t.caseStudy.demoNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
