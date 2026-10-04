'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '@/data/wellnessData';

export const WellnessFAQ: React.FC<any> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#12100E] text-white border-b border-amber-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">Studio FAQs</h2></div>
        <div className="space-y-4">{FAQS_DATA.map((faq, idx) => (<div key={idx} className="bg-[#181512] rounded-2xl border border-amber-500/20 overflow-hidden"><button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full p-5 text-left font-serif font-bold text-sm text-white flex justify-between"><span>{faq.question}</span><ChevronDown className="w-4 h-4 text-amber-400" /></button>{openIdx === idx && (<div className="p-5 pt-0 text-xs text-gray-300">{faq.answer}</div>)}</div>))}</div>
      </div>
    </section>
  );
};
