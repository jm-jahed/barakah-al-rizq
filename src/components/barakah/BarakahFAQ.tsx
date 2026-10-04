'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BARAKAH_FAQS } from '@/data/barakahData';

export const BarakahFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8FAF8] text-[#111827] relative font-sans border-b border-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-[#063D24] font-mono text-xs font-bold uppercase tracking-widest inline-block shadow-sm">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#063D24] tracking-tight">
            Commercial Trade &amp; Supply FAQs
          </h2>
          <p className="text-gray-600 text-sm font-light">
            Answers to common questions regarding wholesale MOQs, Al Aweer market pricing, reefer truck logistics, and contract terms.
          </p>
        </div>

        <div className="space-y-4">
          {BARAKAH_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-emerald-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#063D24]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#063D24] shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-emerald-100' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4 text-[#063D24]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed font-light border-t border-gray-100 pt-3">
                    {faq.answer}
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