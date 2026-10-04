'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VIRELIS_SECURITY_PILLARS } from '@/data/virelisData';
import { Shield, Lock, Key, FileCode, CheckCircle, ShieldAlert } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Key: <Key className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  FileCode: <FileCode className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />
};

export const VirelisSecurity: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Background glow and subtle mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Shield className="w-3.5 h-3.5" />
            Security & Privacy Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Sensitive Data. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Serious Architecture.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Diagnostic insights demand uncompromised data integrity and role-isolated governance. VIRELIS wraps every biological assay and radiological study in cryptographically verifiable zero-trust protection.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {VIRELIS_SECURITY_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-b from-[#080d16] to-[#04080f] border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform">
                  {iconMap[pillar.icon] || <Lock className="w-5 h-5" />}
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                  {pillar.architectureStandard}
                </span>
              </div>

              <span className="text-xs font-mono text-cyan-400/80 uppercase tracking-wider block mb-1">{pillar.category}</span>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{pillar.description}</p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                {pillar.safeguards.map((safeguard, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{safeguard}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conceptual Architecture Safety Notice Box */}
        <div className="p-6 rounded-2xl bg-[#09111c]/80 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Conceptual Health Data Architecture:</strong> Design reflects theoretical UAE sovereign data enclave principles and role-based zero-trust isolation.
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shrink-0">
            Audit Ready Baseline
          </span>
        </div>
      </div>
    </section>
  );
};
