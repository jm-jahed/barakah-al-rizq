'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LUXSHIELD_FAQS } from '@/data/luxshieldData';

export const LuxshieldFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0C0E] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ceramic Coating &amp; Detailing FAQ
          </h2>
          <p className="text-gray-300 text-sm font-light">
            Everything you need to know about our nano-ceramic application process, PPF warranties, and maintenance advice.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {LUXSHIELD_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#14161A] border-blue-500/50 shadow-xl'
                    : 'bg-[#14161A]/70 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-base"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                    isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/10 text-gray-400'
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