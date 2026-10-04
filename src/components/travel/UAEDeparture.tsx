'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Plane, 
  Crown, 
  ShieldCheck, 
  CheckCircle2, 
  Car, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { UAE_DEPARTURE_SERVICES } from '@/data/travelData';

interface UAEDepartureProps {
  onOpenInquiry: (serviceContext?: string) => void;
}

export const UAEDeparture: React.FC<UAEDepartureProps> = ({ onOpenInquiry }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-amber-400" />
              <span>SEAMLESS VIP AIRPORT PROTOCOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              UAE Home-to-Tarmac <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Concierge Protocol</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Your vacation begins the moment you step out of your villa. Enjoy zero waiting times, private passport clearance, and dedicated chauffeur transfers.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">3-Minute Fast-Track Gate Escort</span>
            <span className="text-[11px] text-slate-500">DXB Terminal 3 & DWC VIP Executive</span>
          </div>
        </div>

        {/* 4 UAE Departure Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {UAE_DEPARTURE_SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#0F141E] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl relative overflow-hidden group backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase">
                  {service.badge}
                </span>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Complimentary for All Clients</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
