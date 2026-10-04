'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, Activity, Cpu, CheckCircle2, Globe2, FileCheck, Building, Scale } from 'lucide-react';
import { TENSORIS_BRAND } from '@/data/tensorisData';

export const TensorisTrust: React.FC = () => {
  const certifications = [
    {
      title: 'UAE National AI Strategy 2031',
      subtitle: 'Sovereign Compliance Tier-1',
      description: 'Zero external data egress. Local model weight execution inside Dubai & Abu Dhabi sovereign computing regions.',
      icon: ShieldCheck,
      badge: 'TDRA Level 3'
    },
    {
      title: 'ISO 42001 & SOC 2 Type II',
      subtitle: 'Global AI Management Standard',
      description: 'Continuous mathematical explainability audits, bias mitigation, and verified tamper-evident cryptographic ledgers.',
      icon: FileCheck,
      badge: 'Certified'
    },
    {
      title: 'Confidential GPU Enclaves',
      subtitle: 'Hardware-Enforced Cryptography',
      description: 'NVIDIA H100/H200 hardware-isolated memory enclaves preventing unauthorized kernel inspection or hypervisor tampering.',
      icon: Lock,
      badge: 'FIPS 140-3'
    },
    {
      title: 'Sub-12ms Inference SLAs',
      subtitle: 'Deterministic High Throughput',
      description: 'Bare-metal multi-node NVLink clusters delivering 850M+ tensor calculations daily with 99.999% uptime guarantee.',
      icon: Activity,
      badge: '99.999% Uptime'
    }
  ];

  const enterpriseTrustBadges = [
    'DIFC Gate Avenue Ready',
    'ADGM FSRA Compliant',
    'UAE Central Bank Standards',
    'G42 Cloud Native',
    'Dubai Digital Authority (DDA)',
    'Zero-Knowledge MPC'
  ];

  return (
    <section className="relative py-16 bg-[#040915] border-y border-slate-800/80 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enterprise Trust Strip */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
              SOVEREIGN INTEGRITY & ENTERPRISE COMPLIANCE
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Trusted for Mission-Critical UAE & Global Infrastructure
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {enterpriseTrustBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-slate-300 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group space-y-4 shadow-lg shadow-black/40"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-300 font-semibold">
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                  {item.subtitle}
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
