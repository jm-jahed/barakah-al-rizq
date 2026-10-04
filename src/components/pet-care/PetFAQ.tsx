'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { PET_FAQS_DATA } from '@/data/petCareData';

export const PetFAQ: React.FC<any> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0B1219] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>CLINICAL & ADMINISTRATIVE INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Veterinary Questions.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Important details on 24/7 emergency protocols, UAE pet insurance claims, international export requirements, and fear-free clinical care.
          </p>
        </div>

        <div className="space-y-4">
          {PET_FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0E1720] border border-white/10 overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                      {faq.question}
                    </h3>
                  </div>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-white/5">
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

export default PetFAQ;
