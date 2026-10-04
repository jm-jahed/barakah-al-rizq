'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Crown,
  Compass
} from 'lucide-react';
import { PRIVATE_EXPERIENCES_DATA, PrivateExperience } from '@/data/travelData';

interface PrivateExperiencesProps {
  onOpenInquiry: (experienceContext?: string) => void;
}

export const PrivateExperiences: React.FC<PrivateExperiencesProps> = ({ onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>UNOBTAINABLE BUCKET-LIST ACCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Private & Bespoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">VIP Experiences</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Rare, privately unlocked moments reserved exclusively for AURELIA clientele across aviation, deep ocean, gastronomy, and culture.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">100% Private Buyouts</span>
            <span className="text-[11px] text-slate-500">Dedicated Crew & Host Included</span>
          </div>
        </div>

        {/* 6 VIP Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIVATE_EXPERIENCES_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
              className="p-6 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden group backdrop-blur-md"
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold">
                      AED {exp.priceAED.toLocaleString()}
                    </span>
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded-lg bg-amber-500 text-slate-950 font-mono text-[9px] font-black uppercase">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-emerald-400" /> {exp.destination.split(',')[0]}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-400" /> {exp.duration}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                    {exp.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {exp.description}
                </p>

                <div className="space-y-1 pt-1 border-t border-white/5">
                  {exp.included.slice(0, 2).map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300 font-mono truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenInquiry(`Private VIP Experience: ${exp.title} (AED ${exp.priceAED.toLocaleString()})`)}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Book Private Experience</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
