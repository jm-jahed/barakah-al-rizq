'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { AEROVAULT_TESTIMONIALS } from '@/data/aerovaultData';
import { useAerovaultLanguage } from '@/context/AerovaultLanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { lang } = useAerovaultLanguage();

  return (
    <section className="py-24 bg-[#07090E] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E5C378]/10 border border-[#E5C378]/30 text-[#E5C378] font-mono text-xs font-bold uppercase tracking-widest inline-block">
            {lang === 'ar' ? 'آراء وتجارب المسافرين الموثقة' : 'VERIFIED CHARTER REVIEWS'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-sans">
            {lang === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
          </h2>
          <p className="text-slate-400 text-base font-light">
            {lang === 'ar'
              ? 'تجارب واقعية من قادة الأعمال، الوفود الدبلوماسية، والمسافرين عبر دبي وأبوظبي.'
              : 'Feedback from corporate leaders, diplomatic representatives, and private travelers across Dubai and Abu Dhabi.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AEROVAULT_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0D1118] border border-white/10 shadow-xl flex flex-col justify-between hover:border-[#E5C378]/40 transition-all group"
            >
              <div>
                <div className="flex items-center gap-1 text-[#E5C378] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5C378]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#E5C378]/20 mb-3" />
                <p className="text-sm text-slate-300 leading-relaxed font-light italic mb-6">
                  "{lang === 'ar' ? t.quoteAr : t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-sm font-bold text-white block font-sans">
                  {lang === 'ar' ? t.clientNameAr : t.clientName}
                </span>
                <span className="text-xs text-[#E5C378] font-mono block">
                  {lang === 'ar' ? t.vehicleAr : t.vehicle} • {lang === 'ar' ? t.locationAr : t.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};