'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const WhyEduvanta: React.FC = () => {
  const { language } = useEduvantaLanguage();
  const t = translations[language];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="why-eduvanta" className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.pillars.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.pillars.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* 6 Institutional Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUVANTA_DATA.pillars.map((p, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={p.number}
                onClick={() => toggleExpand(idx)}
                className={`bg-[#0D1118] border rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#E5C378] ring-1 ring-[#E5C378]/30 shadow-xl shadow-[#E5C378]/5'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#E5C378]">
                      {language === 'ar' ? `٠${idx + 1}` : p.number}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {isExpanded ? (language === 'ar' ? 'تصغير −' : 'Collapse −') : (language === 'ar' ? 'المزايا +' : 'Expand Benefits +')}
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
                  <div className="pt-4 border-t border-white/[0.08] space-y-3 animate-fadeIn text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="block font-bold text-[#E5C378] text-[10.5px] uppercase mb-1">
                        {t.pillars.learnerBenefit}
                      </span>
                      <p className="text-slate-300">
                        {language === 'ar' ? p.learnerAdvantageAr : p.learnerAdvantage}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <span className="block font-bold text-emerald-400 text-[10.5px] uppercase mb-1">
                        {t.pillars.businessBenefit}
                      </span>
                      <p className="text-slate-300">
                        {language === 'ar' ? p.enterpriseValueAr : p.enterpriseValue}
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
