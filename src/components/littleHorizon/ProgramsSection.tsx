'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA, NurseryProgram } from '@/data/littleHorizonData';

export const ProgramsSection: React.FC = () => {
  const { lang, isRtl, formatPrice, toArabicDigits } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].programs;
  const [selectedProgram, setSelectedProgram] = useState<NurseryProgram | null>(null);

  return (
    <section id="programs" className="py-24 bg-[#0A120D] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/60 px-4 py-1.5 rounded-full border border-emerald-700/40">
            🌱 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LITTLE_HORIZON_DATA.programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-[#132219]/80 p-6 sm:p-7 rounded-3xl border border-emerald-800/40 hover:border-amber-400/50 hover:bg-[#1A2F22]/90 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-mono text-amber-400">
                    {isRtl ? toArabicDigits(prog.num) : prog.num}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/40">
                    {isRtl ? prog.ageRangeAr : prog.ageRange}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {isRtl ? prog.titleAr : prog.title}
                </h3>

                <p className="text-xs text-emerald-200/80 leading-relaxed mb-4 line-clamp-3">
                  {isRtl ? prog.overviewAr : prog.overview}
                </p>

                {/* Ratio & Highlights */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-medium text-amber-300/90 flex items-center gap-1.5">
                    <span>✨</span>
                    <span>{isRtl ? prog.ratioAr : prog.ratio}</span>
                  </div>
                  <div className="text-[11px] text-emerald-300/80 line-clamp-1">
                    🎯 {isRtl ? prog.learningFocusAr : prog.learningFocus}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-emerald-800/40 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-emerald-400 font-semibold block uppercase">
                    {tr.tuitionBadge}
                  </span>
                  <span className="text-sm font-extrabold text-amber-300">
                    {formatPrice(prog.numericPrice, prog.pricePeriod)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProgram(prog)}
                  className="text-xs font-bold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 px-3.5 py-2 rounded-xl transition-all shadow-md transform group-hover:scale-105"
                >
                  {isRtl ? 'التفاصيل ←' : 'Details →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal Drawer */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[#0E1B13] border border-amber-400/40 max-w-4xl w-full p-6 sm:p-8 rounded-3xl relative shadow-2xl max-h-[92vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-[#1A2F22] hover:bg-red-950/60 border border-emerald-700/40 text-emerald-200 hover:text-red-300 flex items-center justify-center font-bold text-base transition-colors"
              aria-label={tr.closeModal}
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-700/40 inline-block mb-2">
                {isRtl ? toArabicDigits(selectedProgram.num) : selectedProgram.num} • {isRtl ? selectedProgram.ageRangeAr : selectedProgram.ageRange}
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white mt-1 mb-2">
                {isRtl ? selectedProgram.titleAr : selectedProgram.title}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300/90 font-medium">
                🕒 {isRtl ? selectedProgram.scheduleAr : selectedProgram.schedule} • 👥 {isRtl ? selectedProgram.ratioAr : selectedProgram.ratio}
              </p>
            </div>

            {/* Overview */}
            <div className="p-4 rounded-2xl bg-[#132219] border border-emerald-800/40 mb-6">
              <p className="text-sm text-emerald-100 leading-relaxed">
                {isRtl ? selectedProgram.overviewAr : selectedProgram.overview}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-[#1A2F22]/70 border border-emerald-800/40">
                <h4 className="text-xs font-bold text-amber-300 uppercase mb-1">
                  🎯 {tr.learningFocus}
                </h4>
                <p className="text-xs text-emerald-200">
                  {isRtl ? selectedProgram.learningFocusAr : selectedProgram.learningFocus}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#1A2F22]/70 border border-emerald-800/40">
                <h4 className="text-xs font-bold text-amber-300 uppercase mb-1">
                  🌟 {tr.idealFor}
                </h4>
                <p className="text-xs text-emerald-200">
                  {isRtl ? selectedProgram.idealForAr : selectedProgram.idealFor}
                </p>
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                <span>⏰</span>
                <span>{tr.dailyScheduleTitle}</span>
              </h4>
              <div className="space-y-2">
                {selectedProgram.dailyRoutine.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#132219] text-xs text-emerald-100 border border-emerald-800/30 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                  >
                    <span className="font-mono text-amber-400 font-bold sm:min-w-[80px]">
                      {isRtl ? toArabicDigits(item.time) : item.time}
                    </span>
                    <span className="text-emerald-200/90 font-medium">
                      {isRtl ? item.activityAr : item.activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcomes & Inclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span>🏆</span>
                  <span>{tr.outcomesTitle}</span>
                </h4>
                <div className="space-y-2">
                  {selectedProgram.outcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-emerald-100">
                      <span className="text-amber-400 font-bold mt-0.5">✓</span>
                      <span>{isRtl ? out.ar : out.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wide mb-3 flex items-center gap-2">
                  <span>🥗</span>
                  <span>{tr.includedFeatures}</span>
                </h4>
                <div className="space-y-2">
                  {tr.includedItems.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-emerald-200">
                      <span className="text-emerald-400 font-bold mt-0.5">●</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-emerald-800/40">
              <div>
                <span className="text-[11px] text-emerald-400 font-semibold block uppercase">
                  {tr.tuitionBadge}
                </span>
                <span className="text-xl font-black text-amber-300">
                  {formatPrice(selectedProgram.numericPrice, selectedProgram.pricePeriod)}
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="w-1/2 sm:w-auto text-xs font-semibold text-emerald-300 hover:text-white px-5 py-3 rounded-xl border border-emerald-700/40 hover:bg-[#1A2F22] transition-colors"
                >
                  {tr.closeModal}
                </button>
                <a
                  href="#admissions-form"
                  onClick={() => setSelectedProgram(null)}
                  className="w-1/2 sm:w-auto text-center text-xs font-extrabold text-[#0A120D] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-500 px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  {tr.applyForProgram}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
