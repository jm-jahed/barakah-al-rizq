'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { MOVING_FAQS } from '@/data/movingData';

export const MovingFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#1C1917] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
            MOVING FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FDFBF7] tracking-tight mt-4 font-serif">
            Got questions? We've got answers.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 mt-2">
            Everything you need to know about booking, insurance, packing materials, and moving day preparation.
          </p>
        </div>

        <div className="space-y-4">
          {MOVING_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className="bg-[#292524] rounded-2xl border border-stone-700 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-[#E87A36] transition-colors font-serif"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D96B27] flex-shrink-0 transition-transform duration-300 ${
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
                      className="px-6 pb-6 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-4"
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
