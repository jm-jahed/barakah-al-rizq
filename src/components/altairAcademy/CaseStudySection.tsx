'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const CaseStudySection: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].caseStudy;
  const cs = ALTAIR_ACADEMY_DATA.caseStudy;

  return (
    <section className="py-24 bg-[#050A17] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1B3E] rounded-3xl border border-amber-500/30 p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-[#050A17] px-3.5 py-1.5 rounded-full border border-amber-500/30 inline-block">
                🎓 {tr.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-4 mb-2 font-serif">
                {isRtl ? cs.clientAr : cs.client}
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-amber-300 mb-6">
                {isRtl ? cs.scenarioAr : cs.scenario}
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#070D1E] border border-slate-800">
                  <strong className="text-amber-300 block text-xs uppercase tracking-wider mb-1">
                    🎯 {tr.challengeTitle}:
                  </strong>
                  <p>{isRtl ? cs.challengeAr : cs.challenge}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40">
                    <strong className="text-amber-300 block text-xs uppercase tracking-wider mb-1">
                      ⚠️ {isRtl ? 'الوضع الأكاديمي المسبق:' : 'Initial Baseline:'}
                    </strong>
                    <p className="text-xs text-amber-100/90">{isRtl ? cs.beforeAr : cs.before}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-600/40">
                    <strong className="text-emerald-300 block text-xs uppercase tracking-wider mb-1">
                      ✨ {isRtl ? 'النتيجة بعد توجيه ألتير:' : 'After Altair Mentorship:'}
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
                  className="bg-[#070D1E] p-6 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/40 transition-colors shadow-md"
                >
                  <div className="text-3xl sm:text-4xl font-black text-amber-300 font-serif">
                    {isRtl ? m.valueAr : m.value}
                  </div>
                  <div className="text-xs text-slate-300 font-semibold mt-1 tracking-wide">
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
