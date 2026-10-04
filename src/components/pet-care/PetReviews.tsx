'use client';

import React from 'react';
import { Star, MessageSquare, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { PET_REVIEWS_DATA } from '@/data/petCareData';

export const PetReviews: React.FC<any> = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#090F16] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>UAE PET PARENTS VOICES & EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Trusted by Over 18,400 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              UAE Companion Families.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Hear from pet owners across Emirates Hills, Palm Jumeirah, Al Barari, and Al Bateen Abu Dhabi on their experiences at Paws & Claws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PET_REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-[#0E1620] border border-white/10 p-7 space-y-5 shadow-xl flex flex-col justify-between backdrop-blur-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                    Verified UAE Patient
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={rev.image}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border border-emerald-400/40"
                />
                <div>
                  <h4 className="text-xs font-bold text-white font-sans">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    {rev.location} • {rev.pet}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 block font-bold">
                    Procedure: {rev.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetReviews;
