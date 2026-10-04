'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { CUSTOMER_REVIEWS } from '@/data/crispoData';
import { CUSTOMER_REVIEWS_AR } from '@/data/crispoTranslations';
import { useCrispoLanguage } from '@/context/CrispoLanguageContext';

export const CustomerReviews: React.FC = () => {
  const { isRtl } = useCrispoLanguage();
  const reviews = isRtl ? CUSTOMER_REVIEWS_AR : CUSTOMER_REVIEWS;
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const current = reviews[currentIdx];

  return (
    <section className="py-20 bg-[#1A1715] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFC107]/10 border border-[#FFC107]/30">
              {isRtl ? 'تقييمات وآراء عشاق الطعام' : 'VERIFIED FOODIE REVIEWS'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#FAF6EE] italic font-sans mt-3">
              {isRtl ? 'يعشقها الجميع.' : 'LOVED BY CRAVERS.'}
            </h2>
            <p className="text-base text-stone-300 font-light mt-2">
              {isRtl ? 'آراء وتجارب حقيقية من عشاق البرجر والدجاج المقرمش في دبي.' : 'Real feedback from fast-food lovers across Dubai.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#12100E] border border-stone-800 text-white hover:border-[#E63946] transition-colors"
              aria-label="Previous Review"
            >
              <ChevronLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#12100E] border border-stone-800 text-white hover:border-[#E63946] transition-colors"
              aria-label="Next Review"
            >
              <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        <div className="bg-[#12100E] rounded-3xl border border-stone-800 p-8 sm:p-12 shadow-2xl relative">
          <div className="flex text-[#FFC107] mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFC107]" />
            ))}
          </div>

          <p className="text-xl sm:text-3xl font-black text-white italic font-sans leading-relaxed mb-8 max-w-4xl">
            "{current.review}"
          </p>

          <div className="pt-6 border-t border-stone-800 flex items-center justify-between font-mono text-xs">
            <div>
              <h4 className="text-base font-bold text-white">{current.name}</h4>
              <p className="text-stone-400 text-[11px]">{current.location}</p>
            </div>

            <span className="text-[#E63946] font-bold px-3 py-1 rounded-full bg-[#E63946]/10 border border-[#E63946]/30 text-[11px]">
              {current.orderType}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
