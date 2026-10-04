'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { ROADFORGE_TESTIMONIALS } from '@/data/roadforgeData';
import { useRoadforgeLanguage } from '@/context/RoadforgeLanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useRoadforgeLanguage();

  return (
    <section className="py-24 bg-[#162032] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {t('testimonialsBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-gray-300 text-base font-light">
            {language === 'ar'
              ? 'تجارب واقعية لعمليات إنقاذ وسحب ناجحة على شارع الشيخ زايد وطريق E311 ومختلف طرق دبي وأبوظبي.'
              : 'Real feedback from drivers stranded on Sheikh Zayed Road, E311, and throughout Dubai and Abu Dhabi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADFORGE_TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-[#0B132B] border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-500/20 mb-3" />
                <p className="text-xs text-gray-200 leading-relaxed font-light italic mb-6">
                  "{language === 'ar' && testimonial.quoteAr ? testimonial.quoteAr : testimonial.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-bold text-white block">
                  {language === 'ar' && testimonial.clientNameAr ? testimonial.clientNameAr : testimonial.clientName}
                </span>
                <span className="text-xs text-amber-300 font-mono block">
                  {language === 'ar' && testimonial.vehicleAr ? testimonial.vehicleAr : testimonial.vehicle} • {language === 'ar' && testimonial.locationAr ? testimonial.locationAr : testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};