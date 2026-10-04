'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AUTOVANTA_FAQS } from '@/data/autovantaData';
import { useAutovantaLanguage } from '@/context/AutovantaLanguageContext';

export const AutovantaFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useAutovantaLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0F1012] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#FF5722]/20 border border-[#FF5722]/40 text-[#FF5722] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('faqBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {t('faqTitle')}
          </h2>
          <p className="text-gray-300 text-sm font-light">
            {language === 'ar'
              ? 'كل ما تود معرفته عن خدمات الصيانة، فحص الكمبيوتر، الضمان المعتمد، وقطع الغيار الأصلية.'
              : 'Everything you need to know about our servicing procedures, genuine parts, warranties, and fleet contracts.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {AUTOVANTA_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#181A1D] border-[#FF5722]/50 shadow-xl'
                    : 'bg-[#181A1D]/70 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-white text-base"
                >
                  <span>{language === 'ar' && faq.questionAr ? faq.questionAr : faq.question}</span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform ${
                    isOpen ? 'bg-[#FF5722] text-white rotate-180' : 'bg-white/10 text-gray-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/10 font-light"
                    >
                      {language === 'ar' && faq.answerAr ? faq.answerAr : faq.answer}
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