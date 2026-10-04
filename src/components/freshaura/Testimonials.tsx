'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { FRESHAURA_TESTIMONIALS } from '@/data/freshauraCatalogData';
import { useFreshauraLanguage } from '@/context/FreshauraLanguageContext';

export const Testimonials: React.FC = () => {
  const { t, isRtl } = useFreshauraLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % FRESHAURA_TESTIMONIALS.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + FRESHAURA_TESTIMONIALS.length) % FRESHAURA_TESTIMONIALS.length);

  const current = FRESHAURA_TESTIMONIALS[currentIdx];

  return (
    <section className="py-24 bg-[#042F2E] relative border-b border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#064E3B] border border-emerald-500/30">
              {isRtl ? 'آراء وتجارب العملاء في الإمارات' : 'UAE CUSTOMER REPUTATION'}
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FBF9F5] mt-4">
              {isRtl ? 'ثقة أكثر من ٢٥,٠٠٠ عائلة إماراتية.' : 'Trusted by 25,000+ Families.'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-[#064E3B] border border-emerald-700 text-white hover:bg-emerald-800 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-[#064E3B] border border-emerald-700 text-white hover:bg-emerald-800 transition-all"
              aria-label="Next review"
            >
              <ChevronRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        <div className="bg-[#064E3B] rounded-3xl border border-emerald-700/40 p-8 sm:p-12 shadow-2xl relative font-sans">
          <div className="flex text-amber-300 mb-6">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-300" />
            ))}
          </div>

          <p className="text-xl sm:text-3xl font-serif font-bold text-white leading-relaxed mb-8 max-w-4xl text-start">
            "{isRtl ? current.textAr : current.textEn}"
          </p>

          <div className="pt-6 border-t border-emerald-800 flex items-center justify-between font-mono text-xs">
            <div className="text-start">
              <h4 className="text-base font-bold text-white font-serif">
                {isRtl ? current.nameAr : current.nameEn}
              </h4>
              <p className="text-stone-300 text-[11px]">
                {isRtl ? current.roleAr : current.roleEn}
              </p>
            </div>

            <span className="text-emerald-300 font-bold px-3 py-1 rounded-full bg-[#042F2E] border border-emerald-500/30 text-[11px]">
              {isRtl ? current.cityAr : current.cityEn}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
