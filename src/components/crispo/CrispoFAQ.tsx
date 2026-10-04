'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CRISPO_FAQS } from '@/data/crispoData';
import { CRISPO_FAQS_AR } from '@/data/crispoTranslations';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const CrispoFAQ: React.FC = () => {
  const { t, isRtl } = useCrispoLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = isRtl ? CRISPO_FAQS_AR : CRISPO_FAQS;

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#12100E] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-widest px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30">
            {isRtl ? 'الأسئلة الشائعة وخدمة التوصيل' : 'DELIVERY & MENU FAQ'}
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans mt-4">
            {t('faqTitle')}
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            {t('faqSubtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className="bg-[#1A1715] rounded-2xl border border-stone-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left rtl:text-right flex items-center justify-between gap-4 font-sans text-lg font-black text-[#FAF6EE] hover:text-[#FFC107] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E63946] flex-shrink-0 transition-transform duration-300 ${
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
                      className="px-6 pb-6 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-stone-800 pt-4 text-left rtl:text-right"
                    >
                      {faq.answer}
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
