'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '@/data/opticalData';

export const OpticalFAQ: React.FC<any> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Frequently Asked Questions</h2></div>
        <div className="space-y-4">{FAQS_DATA.map((faq, idx) => (<div key={idx} className="bg-slate-900 rounded-2xl border border-sky-500/20 overflow-hidden"><button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full p-5 text-left font-sans font-bold text-sm text-white flex justify-between"><span>{faq.question}</span><ChevronDown className="w-4 h-4 text-sky-400" /></button>{openIdx === idx && (<div className="p-5 pt-0 text-xs text-slate-300">{faq.answer}</div>)}</div>))}</div>
      </div>
    </section>
  );
};
