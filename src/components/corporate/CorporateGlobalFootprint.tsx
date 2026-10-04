'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Globe2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Building2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { CORPORATE_OFFICES, CorporateOffice } from '@/data/corporateEnterpriseData';

export const CorporateGlobalFootprint: React.FC = () => {
  const [activeCity, setActiveCity] = useState<string>('Dubai');
  const shouldReduceMotion = useReducedMotion();

  const selectedOffice = CORPORATE_OFFICES.find((o) => o.city === activeCity) || CORPORATE_OFFICES[0];

  return (
    <section id="footprint" className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>REGIONAL & GLOBAL JURISDICTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Global Footprint</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Operating seamlessly across primary financial centers in Dubai, Abu Dhabi, Riyadh, and London.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-white font-bold block">4 Major Financial Hubs</span>
            <span className="text-[11px] text-amber-400">24/7 Global Executive Desks</span>
          </div>
        </div>

        {/* 4 Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORPORATE_OFFICES.map((office) => {
            const isSelected = office.city === activeCity;
            return (
              <motion.div
                key={office.city}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                onClick={() => setActiveCity(office.city)}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer relative overflow-hidden shadow-xl backdrop-blur-md ${
                  isSelected
                    ? 'bg-[#121722] border-amber-400 shadow-[0_12px_30px_rgba(245,158,11,0.15)] -translate-y-0.5'
                    : 'bg-[#0F141E] border-white/10 hover:border-white/20 hover:bg-[#111722]'
                }`}
              >
                {/* Active Top Line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                  isSelected ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-400' : 'opacity-0'
                }`} />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase">
                      {office.hub}
                    </span>
                    <MapPin className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {office.city}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {office.country}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {office.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-300">
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="truncate">{office.email}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
