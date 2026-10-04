'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { VIRELIS_CAPABILITIES } from '@/data/virelisData';
import { GitMerge, FlaskConical, Eye, Cpu, Users, ShieldCheck, TrendingUp, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  GitMerge: <GitMerge className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Eye: <Eye className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  TrendingUp: <TrendingUp className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />
};

interface VirelisCapabilitiesProps {
  onOpenConsultation?: () => void;
}

export const VirelisCapabilities: React.FC<VirelisCapabilitiesProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-32 bg-[#03060c] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Background glow and subtle dots */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-950/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Core Diagnostic Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Engineered for Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Built for Modern Diagnostic Scale.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Eight integrated operational pillars connecting laboratory instruments, imaging suites, clinical specialists, and diagnostic intelligence across enterprise healthcare networks.
          </p>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VIRELIS_CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#080e18] to-[#040810] border border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform">
                    {iconMap[cap.icon] || <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase px-2 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/20">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mb-3">{cap.subtitle}</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{cap.description}</p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {cap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
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

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#091322] via-[#050b14] to-[#091322] border border-cyan-500/40 shadow-2xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              Next-Generation Healthcare Infrastructure
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Build the Future of Diagnostic Intelligence.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Connect diagnostic workflows, scientific data, and human expertise through one precise digital experience.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                Explore VIRELIS Architecture <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
