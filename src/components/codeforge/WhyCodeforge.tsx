'use client';

import React, { useState } from 'react';
import { useCodeforgeLanguage } from '@/context/CodeforgeLanguageContext';
import { translations } from '@/data/codeforgeTranslations';
import { CODEFORGE_DATA } from '@/data/codeforgeData';

export const WhyCodeforge: React.FC = () => {
  const { language } = useCodeforgeLanguage();
  const t = translations[language];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="why-codeforge" className="bg-[#070A12] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-sky-500/30 text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider mb-4">
            {t.pillars.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.pillars.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CODEFORGE_DATA.pillars.map((p, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={p.number}
                onClick={() => toggleExpand(idx)}
                className={`bg-[#0D121F] border rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#38BDF8] ring-1 ring-sky-500/30 shadow-xl shadow-sky-500/5'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#38BDF8]">
                      {language === 'ar' ? `٠${idx + 1}` : p.number}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {isExpanded ? (language === 'ar' ? 'تصغير −' : 'Collapse −') : (language === 'ar' ? 'المزايا +' : 'Expand +')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug">
                    {language === 'ar' ? p.titleAr : p.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {language === 'ar' ? p.descAr : p.desc}
                  </p>
                </div>

                {/* Expanded Benefits Breakdown */}
                {isExpanded && (
                  <div className="pt-4 border-t border-white/[0.08] space-y-3 animate-fadeIn text-xs font-mono">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="block font-bold text-[#38BDF8] text-[10.5px] uppercase mb-1">
                        {t.pillars.devAdvantage}
                      </span>
                      <p className="text-slate-300 font-sans">
                        {language === 'ar' ? p.devAdvantageAr : p.devAdvantage}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="block font-bold text-emerald-400 text-[10.5px] uppercase mb-1">
                        {t.pillars.employerImpact}
                      </span>
                      <p className="text-slate-300 font-sans">
                        {language === 'ar' ? p.employerImpactAr : p.employerImpact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
