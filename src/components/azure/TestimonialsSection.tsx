'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { AZURE_TESTIMONIALS } from '@/data/azureData';
import { useAzureLanguage } from '@/context/AzureLanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useAzureLanguage();

  return (
    <section className="py-24 bg-[#081528] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('reviewsBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {t('reviewsTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light max-w-2xl mx-auto">
            {t('reviewsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AZURE_TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0B1A2F] border border-white/10 shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{language === 'ar' ? 'حجز مؤكد' : 'Verified Charter'}</span>
                  </span>
                </div>
                <Quote className="w-8 h-8 text-amber-500/20 mb-3" />
                <p className="text-sm text-gray-200 leading-relaxed font-light italic mb-6">
                  "{language === 'ar' ? review.quoteAr : review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-bold text-white block font-sans">
                  {language === 'ar' ? review.clientNameAr : review.clientName}
                </span>
                <span className="text-xs text-amber-300 font-mono block mt-0.5">
                  {language === 'ar' ? review.vehicleAr : review.vehicle} • {language === 'ar' ? review.locationAr : review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};