'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AEROVAULT_FAQS } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

export const AerovaultFAQ: React.FC = () => {
  const { lang } = useAerovaultLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D1118] text-white border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الأسئلة الشائعة والأجوبة' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-sans">
            {lang === 'ar' ? 'الأسئلة الأكثر تكراراً حول استئجار الطائرات' : 'Private Jet Charter FAQ'}
          </h2>
          <p className="text-slate-400 text-sm font-light">
            {lang === 'ar'
              ? 'كل ما تود معرفته عن أوقات الجاهزية، رحلات العودة الفارغة، بطاقات الساعات، وصالات VIP.'
              : 'Everything you need to know about dispatch times, empty leg deals, Jet Cards, FBO access, and catering.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {AEROVAULT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#11161F] border-[#E5C378]/50 shadow-xl'
                    : 'bg-[#11161F]/60 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base font-sans"
                >
                  <span className="text-sm sm:text-base">{lang === 'ar' ? faq.questionAr : faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                    isOpen ? 'bg-[#E5C378] text-black rotate-180' : 'bg-white/10 text-slate-400'
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
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 font-light"
                    >
                      {lang === 'ar' ? faq.answerAr : faq.answer}
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