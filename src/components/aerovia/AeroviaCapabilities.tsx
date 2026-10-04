'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AEROVIA_CAPABILITIES } from '@/data/aeroviaData';
import { Plane, Building2, Layers, Compass, Calendar, FileText, TrendingDown, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Calendar: <Calendar className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  TrendingDown: <TrendingDown className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />
};

interface AeroviaCapabilitiesProps {
  onStartExploring?: () => void;
  onBuildJourney?: () => void;
}

export const AeroviaCapabilities: React.FC<AeroviaCapabilitiesProps> = ({
  onStartExploring,
  onBuildJourney
}) => {
  return (
    <section className="relative py-32 bg-[#020509] border-b border-amber-950/40 text-slate-100 overflow-hidden">
      {/* Background dot grid and golden glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/25 bg-amber-950/20 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            CORE TRAVEL CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Engineered for Luxury. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
              Built for Seamless Journeys.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eight integrated operational layers bringing flight discovery, luxury hotel reservations, and custom digital itineraries into one continuous digital product.
          </p>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {AEROVIA_CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#08121f] to-[#040810] border border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-300 group-hover:scale-110 transition-transform">
                    {iconMap[cap.icon] || <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 tracking-wider uppercase px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/20">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs font-mono text-amber-300/80 mb-3">{cap.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{cap.description}</p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {cap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Role */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Impact:</span>
                  <span className="text-amber-300 font-bold">{cap.impactMetric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Closing Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#081524] via-[#040a12] to-[#081524] border border-amber-500/40 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-3 font-bold">
              YOUR NEXT JOURNEY
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              The World Is Closer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5C378] via-[#D4AF37] to-[#F3E5AB]">
                Than It Looks.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto">
              Discover flights, find remarkable stays, and build journeys designed around the way you want to travel.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onStartExploring}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#E5C378] hover:from-[#c5a028] hover:to-[#d4af37] text-black font-extrabold text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(212,175,55,0.35)] flex items-center gap-2 font-mono"
              >
                Start Exploring <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBuildJourney}
                className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base transition-all font-mono"
              >
                Build a Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
