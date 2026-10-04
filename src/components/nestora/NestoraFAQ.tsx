'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { NESTORA_FAQS } from '@/data/nestoraData';

export const NestoraFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const displayedFaqs = showAllFaqs ? NESTORA_FAQS : NESTORA_FAQS.slice(0, 4);

  return (
    <section id="faq" className="py-24 bg-[#082023] relative border-b border-stone-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
            PROPERTY MANAGEMENT & LANDLORD FAQ
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#F4EFE6] mt-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-light mt-2">
            Clear responses regarding management fees, overseas landlord wire transfers, tenant placement, and Ejari compliance.
          </p>
        </div>

        <div className="space-y-4 font-sans">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.question}
                className="bg-[#0C2D31] rounded-2xl border border-stone-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-lg font-bold text-[#F4EFE6] hover:text-[#C5A059] transition-colors cursor-pointer"
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

        {/* See More FAQs Toggle */}
        {NESTORA_FAQS.length > 4 && (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0C2D31] hover:bg-stone-800 border border-stone-700 text-[#F4EFE6] hover:text-[#C5A059] font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg"
            >
              {showAllFaqs ? (
                <>
                  <span>Show Fewer FAQs</span>
                  <ChevronUp className="w-4 h-4 text-[#C5A059]" />
                </>
              ) : (
                <>
                  <span>See More Landlord FAQs (+{NESTORA_FAQS.length - 4} More)</span>
                  <ChevronDown className="w-4 h-4 text-[#C5A059]" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
