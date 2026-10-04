'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MEDIVANTA_CAPABILITIES } from '@/data/medivantaData';
import { FileText, ShoppingBag, Truck, MapPin, BarChart2, Layers, Bell, Shield, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  MapPin: <MapPin className="w-5 h-5" />,
  BarChart2: <BarChart2 className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Bell: <Bell className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />
};

interface MedivantaCapabilitiesProps {
  onStartExperience?: () => void;
  onExploreNetwork?: () => void;
}

export const MedivantaCapabilities: React.FC<MedivantaCapabilitiesProps> = ({
  onStartExperience,
  onExploreNetwork
}) => {
  return (
    <section className="relative py-32 bg-[#020509] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow and subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            CORE HEALTHCARE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Healthcare Logistics. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Built for Absolute Precision.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eight integrated operational pillars connecting clinical pharmacists, automated micro-fulfillment centers, climate-controlled couriers, and patients across UAE metropolitan networks.
          </p>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {MEDIVANTA_CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#08121d] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 group-hover:scale-110 transition-transform">
                    {iconMap[cap.icon] || <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 tracking-wider uppercase px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs font-mono text-emerald-400/80 mb-3">{cap.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{cap.description}</p>

                {/* Feature Bullets */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {cap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metric & Role */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Impact:</span>
                  <span className="text-emerald-400 font-bold">{cap.impactMetric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA Banner */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#081522] via-[#040a12] to-[#081522] border border-emerald-500/40 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-3 font-bold">
              THE FUTURE OF MEDICINE DELIVERY
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Care Should Never <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Feel Far Away.
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto">
              Build a healthcare delivery experience where precision, visibility, and human care move together.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onStartExperience}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center gap-2"
              >
                Start the Experience <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreNetwork}
                className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base transition-all"
              >
                Explore the Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
