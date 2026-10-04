'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { Language, TYPING_FAQS } from '@/data/typingCenterData';

interface FaqSectionProps {
  lang: Language;
}

export default function FaqSection({ lang }: FaqSectionProps) {
  const isAr = lang === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#070A14] relative overflow-hidden border-b border-amber-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isAr ? 'الأسئلة الشائعة والإجابات المعتمدة' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {isAr ? 'كل ما تود معرفته عن المعاملات والرسوم' : 'Government Services & Fees FAQ'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {isAr
              ? 'إجابات دقيقة حول متطلبات التأشيرات، الهوية الإماراتية، كفالة الأسرة، والإقامة الذهبية وفق أحدث القوانين.'
              : 'Clear, compliant answers regarding UAE visa typing, Emirates ID renewals, family sponsorship, and official fees.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-10">
          {TYPING_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#072617] border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left rtl:text-right flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>{isAr ? faq.qAr : faq.qEn}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 bg-white/[0.01]">
                    <p>{isAr ? faq.aAr : faq.aEn}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-[#072617]/90 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right">
          <div>
            <h4 className="text-sm font-bold text-white">
              {isAr ? 'هل لديك استفسار محدد حول معاملتك؟' : 'Have a specific case or fine inquiry?'}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {isAr ? 'تواصل مع مستشارينا عبر الواتساب للحصول على إجابة فورية.' : 'Chat with our government services advisory desk on WhatsApp for instant assistance.'}
            </p>
          </div>

          <a
            href="https://wa.me/971507719900?text=Hello%20Sanad%20Government%20Services,%20I%20have%20a%20question%20regarding%20my%20UAE%20application."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isAr ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
