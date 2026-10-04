'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { VANTAGE_FAQS } from '@/data/vantageData';

export const VantageFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            OFF-PLAN & DEVELOPER FAQ
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Clear responses regarding off-plan payment plans, DLD Escrow security, capital growth expectations, and Golden Visas.
          </p>
        </div>

        <div className="space-y-4 font-sans">
          {VANTAGE_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className="bg-[#0A192F] rounded-2xl border border-stone-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#FAFAFA] hover:text-[#C5A059] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] flex-shrink-0 transition-transform duration-300 ${
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
                      className="px-6 pb-6 text-xs sm:text-sm text-stone-300 font-light leading-relaxed border-t border-stone-800 pt-4 font-sans"
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
