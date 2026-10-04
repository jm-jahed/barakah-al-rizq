'use client';

import React, { useState } from 'react';
import { useAltairLanguage } from '@/context/AltairLanguageContext';
import { ALTAIR_TRANSLATIONS } from '@/data/altairTranslations';
import { ALTAIR_ACADEMY_DATA } from '@/data/altairAcademyData';

export const Testimonials: React.FC = () => {
  const { lang, isRtl } = useAltairLanguage();
  const tr = ALTAIR_TRANSLATIONS[lang].reviews;
  const [idx, setIdx] = useState(0);
  const items = ALTAIR_ACADEMY_DATA.testimonials;
  const current = items[idx];

  return (
    <section className="py-24 bg-[#050A17] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest bg-[#0D1B3E] px-4 py-1.5 rounded-full border border-amber-500/30">
            💬 {tr.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-5 mb-4 font-serif">
            {tr.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {tr.subtitle}
          </p>
        </div>

        {/* Testimonial Display Box */}
        <div className="max-w-4xl mx-auto bg-[#0D1B3E] p-8 sm:p-12 rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-1 text-amber-400 text-lg mb-6">
            {"★".repeat(current.rating)}
          </div>

          <p className="text-lg sm:text-2xl text-white leading-relaxed font-serif italic mb-8">
            "{isRtl ? current.quoteAr : current.quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-800">
            <div>
              <h4 className="text-lg font-bold text-white font-serif">
                {isRtl ? current.authorAr : current.author}
              </h4>
              <span className="text-xs text-slate-300 font-medium block mt-0.5">
                {isRtl ? current.relationAr : current.relation} — {isRtl ? current.locationAr : current.location}
              </span>
              <span className="text-[11px] text-amber-300 font-semibold block mt-1">
                🎓 {isRtl ? current.studentTrackAr : current.studentTrack}
              </span>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 me-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    className={`h-2 rounded-full transition-all ${
                      idx === i ? 'w-6 bg-amber-400' : 'w-2 bg-slate-700'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1))}
                className="w-11 h-11 rounded-full bg-[#070D1E] border border-amber-500/30 hover:border-amber-400 text-white flex items-center justify-center text-sm font-bold transition-all shadow-md"
                aria-label="Previous Testimonial"
              >
                {isRtl ? '→' : '←'}
              </button>
              <button
                type="button"
                onClick={() => setIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1))}
                className="w-11 h-11 rounded-full bg-[#070D1E] border border-amber-500/30 hover:border-amber-400 text-white flex items-center justify-center text-sm font-bold transition-all shadow-md"
                aria-label="Next Testimonial"
              >
                {isRtl ? '←' : '→'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
