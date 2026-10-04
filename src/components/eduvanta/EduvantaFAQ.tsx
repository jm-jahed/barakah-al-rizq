'use client';

import React, { useState } from 'react';
import { useEduvantaLanguage } from '@/context/EduvantaLanguageContext';
import { translations } from '@/data/eduvantaTranslations';
import { EDUVANTA_DATA } from '@/data/eduvantaData';

export const EduvantaFAQ: React.FC = () => {
  const { language } = useEduvantaLanguage();
  const t = translations[language];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#07090E] py-20 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#E5C378]/30 text-xs font-semibold text-[#E5C378] uppercase tracking-wider mb-4">
            {t.faq.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-3.5">
          {EDUVANTA_DATA.faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-[#0D1118] border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[#E5C378]/40 ring-1 ring-[#E5C378]/20 shadow-lg'
                    : 'border-white/[0.08] hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E5C378]">
                      {language === 'ar' ? `٠${idx + 1}` : (idx < 9 ? `0${idx + 1}` : idx + 1)}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {language === 'ar' ? item.questionAr : item.question}
                    </span>
                  </div>

                  <span
                    className={`w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-[#E5C378] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#E5C378]/10' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.04] mt-1">
                    <p className="pt-3">
                      {language === 'ar' ? item.answerAr : item.answer}
                    </p>
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
