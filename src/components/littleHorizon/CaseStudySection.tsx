'use client';

import React from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const CaseStudySection: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].caseStudy;
  const cs = LITTLE_HORIZON_DATA.caseStudy;

  return (
    <section className="py-24 bg-[#0A120D] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#132219] rounded-3xl border border-amber-400/40 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-emerald-950 px-3.5 py-1.5 rounded-full border border-emerald-700/40 inline-block">
                📖 {tr.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-4 mb-2">
                {isRtl ? cs.clientAr : cs.client}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-emerald-300 mb-6">
                {isRtl ? cs.scenarioAr : cs.scenario}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-emerald-100 leading-relaxed mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0A120D]/60 border border-emerald-800/40">
                  <strong className="text-amber-300 block text-xs uppercase tracking-wider mb-1">
                    🎯 {tr.challengeTitle}:
                  </strong>
                  <p>{isRtl ? cs.challengeAr : cs.challenge}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-red-950/40 border border-red-800/40">
                    <strong className="text-red-300 block text-xs uppercase tracking-wider mb-1">
                      ⚠️ {isRtl ? 'قبل الحضانة:' : 'Before Nursery:'}
                    </strong>
                    <p className="text-xs text-red-100/90">{isRtl ? cs.beforeAr : cs.before}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-700/50">
                    <strong className="text-emerald-300 block text-xs uppercase tracking-wider mb-1">
                      ✨ {isRtl ? 'بعد الاستقرار والتهيئة:' : 'After Settling In:'}
                    </strong>
                    <p className="text-xs text-emerald-100/90">{isRtl ? cs.afterAr : cs.after}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Metrics Cards Column */}
            <div className="lg:col-span-5 space-y-4">
              {cs.metrics.map((m, i) => (
                <div
                  key={i}
                  className="bg-[#0A120D]/70 p-6 rounded-2xl border border-emerald-800/40 text-center hover:border-amber-400/40 transition-colors shadow-md"
                >
                  <div className="text-3xl sm:text-4xl font-black text-amber-300 font-sans">
                    {isRtl ? m.valueAr : m.value}
                  </div>
                  <div className="text-xs text-emerald-200/90 font-semibold mt-1 tracking-wide">
                    {isRtl ? m.labelAr : m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
