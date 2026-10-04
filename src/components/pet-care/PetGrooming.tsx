'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Calendar, 
  Heart,
  Droplets
} from 'lucide-react';
import { GROOMING_SERVICES_DATA } from '@/data/petCareData';

interface PetGroomingProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const PetGrooming: React.FC<PetGroomingProps> = ({ onOpenBooking }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="grooming" className="py-24 sm:py-32 bg-[#0B1219] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <Droplets className="w-3.5 h-3.5" />
              <span>FEAR-FREE LUXURY SPA & AROMATHERAPY SALON</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Aromatherapy Spa & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Master Scissor Styling.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Hydro-massage bubble baths with Dead Sea botanicals, blueberry tear-stain facials, microbubble ozone coat therapies, and breed-standard scissor styling.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-[#0E1720] border border-emerald-500/30 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">SALON STANDARD</span>
              <span className="text-xs font-bold font-mono text-emerald-300 flex items-center gap-1.5 justify-end mt-0.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Dedicated Feline Suites
              </span>
            </div>
          </div>
        </div>

        {/* 3 Grooming Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROOMING_SERVICES_DATA.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 group backdrop-blur-md ${
                pkg.isPopular
                  ? 'bg-[#111C27] border-2 border-emerald-400 shadow-emerald-500/15'
                  : 'bg-[#0E1720] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Image & Header */}
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1720] via-transparent to-transparent" />
                  {pkg.isPopular && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-mono font-black text-[10px] uppercase tracking-wider shadow-lg">
                      MOST REQUESTED
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-sans">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mt-1 line-clamp-2">
                    {pkg.description}
                  </p>
                </div>

                {/* Inclusions */}
                <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-mono text-slate-300">
                  {pkg.included.slice(0, 4).map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">PRICE</span>
                  <span className="text-xl font-black text-emerald-400 font-mono block">
                    AED {pkg.price}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{pkg.duration}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(pkg.id)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Spa</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PetGrooming;
