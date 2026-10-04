'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  ShieldAlert, 
  CheckCircle2, 
  Server, 
  Cpu, 
  FileKey2,
  FileCheck,
  Scale
} from 'lucide-react';
import { SECURITY_PILLARS } from '@/data/tensorisData';

export const TensorisSecurity: React.FC = () => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Shield': return ShieldCheck;
      case 'Lock': return Lock;
      case 'ShieldAlert': return ShieldAlert;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="security" className="relative py-24 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-900">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>SOVEREIGN DEFENSE & GOVERNANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Cryptographic Isolation & Zero-Egress AI Sovereignty
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Protecting intellectual property and national secrets with hardware-enforced confidential computing, zero third-party cloud telemetry, and explainable decision trails.
          </p>
        </div>

        {/* 3 Security Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SECURITY_PILLARS.map((pillar, idx) => {
            const Icon = getPillarIcon(pillar.icon);

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-cyan-300">
                      {pillar.standard}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-850">
                    {pillar.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Badges */}
                <div className="pt-4 border-t border-slate-850 flex flex-wrap gap-1.5">
                  {pillar.complianceBadges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
