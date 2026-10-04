'use client';

import React, { useState } from 'react';
import { useLittleHorizonLanguage } from '@/context/LittleHorizonLanguageContext';
import { LH_TRANSLATIONS } from '@/data/littleHorizonTranslations';
import { LITTLE_HORIZON_DATA } from '@/data/littleHorizonData';

export const LHFAQ: React.FC = () => {
  const { lang, isRtl } = useLittleHorizonLanguage();
  const tr = LH_TRANSLATIONS[lang].faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isRtl ? 'الكل' : 'All Topics' },
    { id: 'Admissions', label: isRtl ? 'القبول والتسجيل' : 'Admissions' },
    { id: 'Care & Ratios', label: isRtl ? 'الرعاية والنسب' : 'Care & Ratios' },
    { id: 'Nutrition', label: isRtl ? 'التغذية والصحة' : 'Nutrition' },
    { id: 'Settling-In', label: isRtl ? 'التهيئة والاستقرار' : 'Settling-In' },
    { id: 'Health & Safety', label: isRtl ? 'الصحة والسلامة' : 'Health & Safety' }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? LITTLE_HORIZON_DATA.faq
    : LITTLE_HORIZON_DATA.faq.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#0E1B13] border-b border-emerald-900/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-emerald-950/70 px-4 py-1.5 rounded-full border border-emerald-700/40">
            ❓ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIdx(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-[#0A120D] border-amber-300 shadow-md shadow-amber-500/20'
                  : 'bg-[#132219] text-emerald-200 border-emerald-800/40 hover:bg-[#1A2F22]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#132219]/80 border border-emerald-800/40 rounded-2xl overflow-hidden hover:border-emerald-700 transition-colors shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-amber-300 transition-colors"
                >
                  <span className="leading-snug">
                    {isRtl ? item.questionAr : item.question}
                  </span>
                  <span className="text-amber-400 text-xl font-mono flex-shrink-0 w-8 h-8 rounded-full bg-[#0A120D] border border-emerald-800/40 flex items-center justify-center">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-emerald-200/90 leading-relaxed border-t border-emerald-800/30 pt-4 bg-[#0A120D]/40">
                    {isRtl ? item.answerAr : item.answer}
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
