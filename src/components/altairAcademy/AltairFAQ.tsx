'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const AltairFAQ: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: isRtl ? 'الكل' : 'All Topics' },
    { id: 'Curriculum', label: isRtl ? 'المناهج والمسارات' : 'Curriculum' },
    { id: 'Accreditation', label: isRtl ? 'الاعتمادات والتصنيف' : 'Accreditation' },
    { id: 'Admissions', label: isRtl ? 'القبول والتسجيل' : 'Admissions' },
    { id: 'Tuition', label: isRtl ? 'الرسوم والخصومات' : 'Tuition & Fees' },
    { id: 'Campus Life', label: isRtl ? 'الحياة المدرسية' : 'Campus Life' },
    { id: 'University Placements', label: isRtl ? 'القبول الجامعي' : 'University' }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? ALTAIR_ACADEMY_DATA.faq
    : ALTAIR_ACADEMY_DATA.faq.filter(f => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#070D1E] border-b border-amber-500/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            ❓ {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
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
                  ? 'bg-amber-400 text-[#070D1E] border-amber-300 shadow-md shadow-amber-500/20 font-serif'
                  : 'bg-[#0D1B3E] text-slate-300 border-amber-500/20 hover:bg-[#122452]'
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
                className="bg-[#0D1B3E]/80 border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-colors shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-amber-300 transition-colors font-serif"
                >
                  <span className="leading-snug">
                    {isRtl ? item.questionAr : item.question}
                  </span>
                  <span className="text-amber-400 text-xl font-mono flex-shrink-0 w-8 h-8 rounded-full bg-[#050A17] border border-amber-500/30 flex items-center justify-center">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4 bg-[#050A17]/60 font-sans">
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
