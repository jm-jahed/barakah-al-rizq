'use client';

import React from 'react';
import { Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SKYVAULT_TESTIMONIALS } from '@/data/skyvaultData';
import { useSkyvaultLanguage } from '@/context/SkyvaultLanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { lang, t } = useSkyvaultLanguage();

  return (
    <section className="py-24 bg-[#0D1118] text-white border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('reviews.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('reviews.title')}
          </h2>
          <p className="text-slate-400 text-base font-light">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKYVAULT_TESTIMONIALS.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#11161F] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group"
            >
              <div>
                <Quote className="w-8 h-8 text-[#E5C378]/30 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed font-light italic mb-6">
                  "{lang === 'ar' ? rev.quoteAr : rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-bold text-white block font-sans">
                  {lang === 'ar' ? rev.clientNameAr : rev.clientName}
                </span>
                <span className="text-xs text-[#E5C378] font-mono block mt-0.5">
                  {lang === 'ar' ? rev.vehicleAr : rev.vehicle} • {lang === 'ar' ? rev.locationAr : rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};