'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const DayTimeline: React.FC = () => {
  const { lang, isRtl, toArabicDigits } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].timeline;
  const [selectedSlot, setSelectedSlot] = useState(0);

  const timelineIcons = ['🌅', '🎶', '🔬', '💦', '🥗', '🌙', '🎨', '📱'];

  return (
    <section id="timeline" className="py-24 bg-[#0E1B13] border-b border-emerald-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            ☀️ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* 8-Card Grid with Interactive Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {LITTLE_HORIZON_DATA.dayTimeline.map((item, idx) => {
            const isSelected = selectedSlot === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedSlot(idx)}
                className={`p-6 rounded-3xl border transition-all flex flex-col justify-between cursor-pointer group relative overflow-hidden shadow-lg ${
                  isSelected
                    ? 'bg-[#1A2F22] border-amber-400/60 shadow-amber-500/10 scale-[1.02]'
                    : 'bg-[#132219]/80 border-emerald-800/40 hover:border-emerald-600 hover:bg-[#1A2F22]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-amber-400">
                      {isRtl ? toArabicDigits(item.step) : item.step}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/40 font-mono">
                      {isRtl ? toArabicDigits(item.time) : item.time}
                    </span>
                  </div>

                  <div className="text-2xl mb-2">{timelineIcons[idx]}</div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {isRtl ? item.titleAr : item.title}
                  </h3>

                  <p className="text-xs text-emerald-200/80 leading-relaxed">
                    {isRtl ? item.descAr : item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-emerald-800/30 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400 font-medium">
                    {tr.stepLabel} {isRtl ? toArabicDigits(idx + 1) : idx + 1}
                  </span>
                  <span className={`font-bold ${isSelected ? 'text-amber-300' : 'text-emerald-300/60'}`}>
                    {isSelected ? (isRtl ? 'المرحلة المحددة' : 'Active Phase') : (isRtl ? 'عرض المزيد' : 'Inspect')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
