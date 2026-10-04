'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const CurriculumApproach: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].curriculum;
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const tabs = LITTLE_HORIZON_DATA.curriculumTabs;
  const currentTab = tabs[activeTabIdx];

  const pillarIcons = ['🗣️', '💖', '🎨', '🔬', '🏃‍♂️'];

  return (
    <section id="curriculum" className="py-24 bg-[#0E1B13] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            🌿 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabIdx(idx)}
              className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 ${
                activeTabIdx === idx
                  ? 'bg-gradient-to-r from-amber-400 to-amber-300 text-[#0A120D] border-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-[#132219]/90 text-emerald-200/90 border-emerald-800/40 hover:bg-[#1A2F22] hover:border-emerald-600'
              }`}
            >
              <span>{pillarIcons[idx]}</span>
              <span>{isRtl ? tab.titleAr : tab.title}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Showcase Box */}
        <div className="bg-[#132219] p-7 sm:p-10 md:p-12 rounded-3xl border border-emerald-800/50 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-60 h-60 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Top Subheader */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-bold text-amber-400 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-700/40">
              {isRtl ? `الركن ٠${toArabicDigits(activeTabIdx + 1)}` : `Pillar 0${activeTabIdx + 1}`}
            </span>
            <span className="text-xs font-medium text-emerald-300">
              🎯 {tr.pillarFocus}: {isRtl ? currentTab.focusAr : currentTab.focus}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
            {isRtl ? currentTab.titleAr : currentTab.title}
          </h3>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed mb-8">
            {isRtl ? currentTab.descriptionAr : currentTab.description}
          </p>

          {/* Key Benefit Highlight */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#1A2F22]/80 border border-emerald-700/40 mb-8">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wide mb-1 flex items-center gap-1.5">
              <span>🌟</span>
              <span>{tr.keyBenefits}</span>
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              {isRtl ? currentTab.benefitAr : currentTab.benefit}
            </p>
          </div>

          {/* Activities Grid */}
          <div>
            <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span>🎨</span>
              <span>{tr.coreActivities}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isRtl ? currentTab.activitiesAr : currentTab.activities).map((act, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#0A120D]/60 text-xs sm:text-sm text-emerald-100 border border-emerald-800/40 flex items-center gap-3 hover:border-amber-400/40 transition-colors"
                >
                  <span className="text-amber-400 font-bold">●</span>
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
