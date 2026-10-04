'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FRESHAURA_FAQS } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const FreshauraFAQ: React.FC = () => {
  const { t, isRtl } = useFreshauraLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
            {isRtl ? 'الأسئلة الشائعة حول التوصيل والنضارة' : 'GROCERY & DELIVERY FAQ'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
            {t('navFAQ')}
          </h2>
          <p className="text-sm sm:text-base text-stone-200 font-light mt-2">
            {isRtl
              ? 'إجابات واضحة حول مواعيد التوصيل، ضمان النضارة واستبدال المنتجات، بناء صناديق الفواكه، وتوريد الشركات.'
              : 'Clear responses regarding delivery times, freshness guarantees, custom fruit box tools, and damaged item refunds.'}
          </p>
        </div>

        <div className="space-y-4 font-sans">
          {FRESHAURA_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const q = isRtl ? faq.questionAr : faq.questionEn;
            const a = isRtl ? faq.answerAr : faq.answerEn;

            return (
              <div
                key={idx}
                className="bg-[#064E3B] rounded-2xl border border-emerald-700/40 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#FBF9F5] hover:text-emerald-300 transition-colors"
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-stone-200 font-light leading-relaxed border-t border-emerald-800 pt-4 font-sans text-start"
                    >
                      {a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
