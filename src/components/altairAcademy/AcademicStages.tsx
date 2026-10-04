'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA, SchoolStage } from '@/data/altairAcademyData';

export const AcademicStages: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].stages;
  const [selectedStage, setSelectedStage] = useState<SchoolStage | null>(null);

  return (
    <section id="stages" className="py-24 bg-[#070D1E] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            🎓 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 4 Academic Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALTAIR_ACADEMY_DATA.stages.map((stg) => (
            <div
              key={stg.id}
              className="bg-[#0D1B3E]/80 p-6 sm:p-7 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 hover:bg-[#122452] transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-amber-400">
                    {isRtl ? toArabicDigits(stg.num) : stg.num}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-300 bg-[#050A17] px-3 py-1 rounded-full border border-amber-500/30">
                    {isRtl ? stg.yearRangeAr : stg.yearRange}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors font-serif">
                  {isRtl ? stg.titleAr : stg.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {isRtl ? stg.overviewAr : stg.overview}
                </p>

                {/* Ratio & Focus */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-medium text-amber-300/90 flex items-center gap-1.5">
                    <span>✨</span>
                    <span>{isRtl ? stg.facultyRatioAr : stg.facultyRatio}</span>
                  </div>
                  <div className="text-[11px] text-slate-300 line-clamp-1">
                    🎯 {isRtl ? stg.learningFocusAr : stg.learningFocus}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">
                    {tr.tuitionBadge}
                  </span>
                  <span className="text-xs font-black text-amber-300">
                    {isRtl ? stg.priceRangeAr : stg.priceRange}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedStage(stg)}
                  className="text-xs font-bold text-[#070D1E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-3.5 py-2 rounded-xl transition-all shadow-md transform group-hover:scale-105"
                >
                  {isRtl ? 'التفاصيل ←' : 'Details →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stage Detail Modal Drawer */}
      {selectedStage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#0D1B3E] border border-amber-500/40 max-w-4xl w-full p-6 sm:p-8 rounded-3xl relative shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedStage(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#070D1E] hover:bg-red-950/60 border border-slate-700 text-slate-300 hover:text-red-300 flex items-center justify-center font-bold text-base transition-colors"
              aria-label={tr.closeModal}
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-[#050A17] px-3.5 py-1 rounded-full border border-amber-500/30 inline-block mb-2">
                {isRtl ? toArabicDigits(selectedStage.num) : selectedStage.num} • {isRtl ? selectedStage.yearRangeAr : selectedStage.yearRange} ({isRtl ? selectedStage.ageRangeAr : selectedStage.ageRange})
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white mt-1 mb-2 font-serif">
                {isRtl ? selectedStage.titleAr : selectedStage.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                🏛️ {isRtl ? selectedStage.curriculumAr : selectedStage.curriculum} • 👥 {isRtl ? selectedStage.facultyRatioAr : selectedStage.facultyRatio}
              </p>
            </div>

            {/* Overview */}
            <div className="p-4 rounded-2xl bg-[#070D1E] border border-slate-800 mb-6">
              <p className="text-sm text-slate-200 leading-relaxed">
                {isRtl ? selectedStage.overviewAr : selectedStage.overview}
              </p>
            </div>

            {/* Core Subjects Grid */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>📚</span>
                <span>{isRtl ? 'المواد الدراسية الأساسية والمسارات' : 'Core Academic Subjects & Modules'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedStage.coreSubjects.map((sub, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#122452] text-xs text-slate-200 border border-amber-500/20 flex items-center gap-2">
                    <span className="text-amber-400 font-bold">●</span>
                    <span>{isRtl ? sub.ar : sub.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrichment & Co-Curricular */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>🌟</span>
                <span>{tr.enrichmentTitle}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedStage.enrichment.map((en, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#122452] text-xs text-slate-200 border border-amber-500/20 flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{isRtl ? en.ar : en.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included in Tuition */}
            <div className="p-5 rounded-2xl bg-[#070D1E] border border-slate-800 mb-6">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>💎</span>
                <span>{tr.includedFeatures}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tr.includedItems.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-amber-400 font-bold mt-0.5">●</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 font-semibold block uppercase">
                  {tr.tuitionBadge}
                </span>
                <span className="text-lg font-black text-amber-300">
                  {isRtl ? selectedStage.priceRangeAr : selectedStage.priceRange}
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedStage(null)}
                  className="w-1/2 sm:w-auto text-xs font-semibold text-slate-300 hover:text-white px-5 py-3 rounded-xl border border-slate-700 hover:bg-[#122452] transition-colors"
                >
                  {tr.closeModal}
                </button>
                <a
                  href="#admissions-form"
                  onClick={() => setSelectedStage(null)}
                  className="w-1/2 sm:w-auto text-center text-xs font-extrabold text-[#070D1E] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  {tr.applyForStage}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
