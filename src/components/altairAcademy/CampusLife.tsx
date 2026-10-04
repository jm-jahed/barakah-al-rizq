'use client';

import React from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const CampusLife: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].campusLife;

  return (
    <section id="campus-life" className="py-24 bg-[#070D1E] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            🏟️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ALTAIR_ACADEMY_DATA.facilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-[#0D1B3E]/80 rounded-3xl border border-amber-500/20 overflow-hidden group flex flex-col sm:flex-row hover:border-amber-400/50 hover:bg-[#122452] transition-all shadow-xl"
            >
              <div className="sm:w-1/2 h-60 sm:h-auto overflow-hidden relative">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] sm:from-transparent via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-bold text-amber-300 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/40">
                  {isRtl ? fac.categoryAr : fac.category}
                </span>
              </div>
              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-serif">
                    {isRtl ? fac.titleAr : fac.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isRtl ? fac.descAr : fac.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 text-[11px] font-bold text-amber-300 font-mono">
                  ✦ {isRtl ? fac.metricsAr : fac.metrics}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
