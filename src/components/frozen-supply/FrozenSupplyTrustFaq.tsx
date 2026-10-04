'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  ChevronDown,
  HelpCircle,
  Phone,
  MessageCircle
} from 'lucide-react';
import { FROZEN_FAQS, TRUST_CERTIFICATIONS, FROZEN_BRAND } from '@/data/frozenSupplyData';
import { useFrozenSupplyTheme } from '@/context/FrozenSupplyThemeContext';
import { useFrozenSupplyLanguage } from '@/context/FrozenSupplyLanguageContext';

export const FrozenSupplyTrustFaq: React.FC = () => {
  const { isDark } = useFrozenSupplyTheme();
  const { isRtl, t } = useFrozenSupplyLanguage();

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="trust-faq" className={`py-24 border-t transition-colors duration-200 font-sans ${
      isDark ? 'bg-[#050B14] border-slate-800' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Certifications Strip */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block">
              {isRtl ? 'الامتثال للمعايير واللوائح الرسمية' : 'Audited Regulatory Compliance'}
            </span>
            <h3 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('trustTitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRUST_CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className={`p-5 rounded-2xl border flex items-start gap-3.5 shadow-sm ${
                  isDark ? 'bg-[#0A1120] border-slate-800' : 'bg-white border-slate-200 shadow-slate-200/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${
                  isDark ? 'bg-emerald-950 border-emerald-500/40 text-emerald-400' : 'bg-emerald-50 border-emerald-300 text-emerald-700'
                }`}>
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-slate-900'}`}>{cert.name}</h4>
                  <p className={`text-[11px] font-normal leading-relaxed font-sans ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono uppercase font-bold ${
              isDark ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-300 text-cyan-800'
            }`}>
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Procurement Support</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t('faqTitle')}
            </h2>

            <p className={`text-sm font-normal leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t('faqSubtitle')}
            </p>

            <div className={`p-5 rounded-2xl border space-y-4 font-mono text-xs ${
              isDark ? 'bg-[#0A1120] border-cyan-900/40' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className={`font-bold block ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>Need Custom Contract Sourcing?</span>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Speak directly with our senior institutional supply officer at Dubai Industrial City.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href={`tel:${FROZEN_BRAND.phone.replace(/\s+/g, '')}`}
                  className={`w-full py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 transition-colors font-bold ${
                    isDark
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Call {FROZEN_BRAND.phone}</span>
                </a>
                <a
                  href={FROZEN_BRAND.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 transition-colors font-bold ${
                    isDark
                      ? 'bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border-emerald-500/40'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border-emerald-300'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>WhatsApp Commercial Desk</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-8 space-y-3 font-sans">
            {FROZEN_FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border overflow-hidden transition-colors ${
                    isDark
                      ? 'border-slate-800 bg-[#0A1120]'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span className={`text-sm sm:text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {isRtl && faq.qAr ? faq.qAr : faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-500 flex-shrink-0 transition-transform duration-200 ${
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
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className={`p-5 pt-0 text-xs sm:text-sm font-normal leading-relaxed border-t mt-1 ${
                          isDark
                            ? 'text-slate-300 border-slate-800/60'
                            : 'text-slate-700 border-slate-100'
                        }`}>
                          {isRtl && faq.aAr ? faq.aAr : faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
