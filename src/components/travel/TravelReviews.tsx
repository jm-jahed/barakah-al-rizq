'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { TRAVEL_REVIEWS_DATA } from '@/data/travelData';

export const TravelReviews: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>TESTIMONIALS FROM DISTINGUISHED CLIENTELE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Trusted by the UAE’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Most Discerning</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read authentic feedback from prominent royal families, founders, and executives across Dubai and Abu Dhabi.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-amber-400 font-bold block">4.98 / 5.00 Rating</span>
            <span className="text-[11px] text-slate-500">100% Verified VIP Bookings</span>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TRAVEL_REVIEWS_DATA.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-[#0F141E] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden backdrop-blur-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal italic">
                  "{rev.review}"
                </p>

                <div className="pt-2 text-xs font-mono text-amber-400/90 font-bold">
                  Trip: {rev.tripTaken}
                </div>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.clientName}
                  className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {rev.clientName}
                  </h4>
                  <span className="text-xs text-slate-400 font-mono block">
                    {rev.city}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
