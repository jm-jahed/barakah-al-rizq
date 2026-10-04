'use client';
import React, { useState } from 'react';
import { FITNESS_FAQS } from '@/data/fitnessData';

export const FitnessFAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-24 bg-[#090807] border-b border-red-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-red-400 block mb-2">NEED HELP?</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Frequently Asked Questions.</h2>
        </div>
        <div className="space-y-4">
          {FITNESS_FAQS.map((faq, idx) => (
            <div key={faq.q} className="bg-[#12100F] rounded-2xl border border-red-500/15 overflow-hidden">
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full p-5 text-left font-serif text-base font-semibold text-white flex items-center justify-between">
                <span>{faq.q}</span>
                <span className="text-red-400 font-mono">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="p-5 pt-0 text-xs text-gray-400 leading-relaxed font-mono border-t border-red-500/10">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
