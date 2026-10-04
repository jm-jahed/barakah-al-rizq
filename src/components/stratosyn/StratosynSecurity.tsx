'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Key,
  Lock,
  FileCode,
  CheckCircle2,
  Radar,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { SECURITY_PILLARS, SecurityLayerPillar } from '@/data/stratosynData';

export function StratosynSecurity() {
  const getSecurityIcon = (id: string) => {
    switch (id) {
      case 'iam-zero-trust':
        return <Key className="w-5 h-5 text-sky-400" />;
      case 'encryption-layer':
        return <Lock className="w-5 h-5 text-indigo-400" />;
      case 'network-isolation':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'secrets-management':
        return <FileCode className="w-5 h-5 text-emerald-400" />;
      case 'policy-enforcement':
        return <CheckCircle2 className="w-5 h-5 text-sky-300" />;
      case 'threat-monitoring':
        return <Radar className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="security-architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070D] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>ZERO-TRUST SOVEREIGN PERIMETER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Security at Every Layer.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Zero-trust architecture enforced from hardware memory enclaves to transit tunnels. No node or service is trusted implicitly.
          </p>
        </div>

        {/* 6 Security Layer Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECURITY_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getSecurityIcon(pillar.id)}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {pillar.complianceStandard}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider mb-1">
                  {pillar.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Granular Security Safeguards */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                  {pillar.securityPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-400">Enclave Type:</span>
                <span className="text-sky-300 font-semibold">{pillar.enclaveType}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
