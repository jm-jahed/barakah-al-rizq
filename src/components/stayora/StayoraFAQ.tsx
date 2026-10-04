'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { STAYORA_FAQS } from '@/data/stayoraData';
import { useStayoraLanguage } from '@/context/StayoraLanguageContext';

export const StayoraFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useStayoraLanguage();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F9F6F0] text-[#133C3E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('faqBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#133C3E]">
            {t('faqTitle')}
          </h2>
          <p className="text-gray-600 text-sm font-normal">
            {language === 'ar'
              ? 'كل ما تود معرفته حول إدارة بيوت العطلات، تراخيص السياحة DTCM، خوارزميات التسعير الذكي، ومواعيد تحويل الأرباح.'
              : 'Everything you need to know about short-term rental management, DTCM permits, dynamic pricing, and payouts.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {STAYORA_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#C85A32]/40 shadow-lg'
                    : 'bg-white/80 border-amber-900/10 hover:border-[#C85A32]/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 font-bold text-[#133C3E] text-base"
                >
                  <span>{language === 'ar' && faq.questionAr ? faq.questionAr : faq.question}</span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-transform ${
                    isOpen ? 'bg-[#C85A32] text-white rotate-180' : 'bg-gray-100 text-gray-600'
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
                      className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 font-normal"
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