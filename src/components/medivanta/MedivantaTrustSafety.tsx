'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Thermometer, Lock, FileCode, CheckCircle, AlertTriangle, FileCheck2 } from 'lucide-react';

const TRUST_PILLARS = [
  {
    title: 'Licensed Pharmacist Verification',
    category: 'Clinical Governance',
    desc: 'Every single prescription and chronic refill is cross-checked by certified clinical pharmacists against potential drug interactions and contraindications.',
    safeguards: [
      'Doctor credentials verified against national health registries',
      'Automated drug-drug interaction matrix checks',
      'Direct pharmacist consultation hotline for patients'
    ],
    standard: '100% Licensed Sign-Off'
  },
  {
    title: 'Cold-Chain 2°C – 8°C Integrity',
    category: 'Thermal Preservation',
    desc: 'Temperature-sensitive biologics, vaccines, and insulin are packed in calibrated PCM vaults with active thermal data loggers.',
    safeguards: [
      'Real-time compartment temperature IoT relay',
      'Tamper-evident temperature threshold breach alarms',
      'Certified climate-controlled electric vehicle fleet'
    ],
    standard: 'WHO Cold-Chain Standard'
  },
  {
    title: 'Tamper-Evident Security Seals',
    category: 'Chain of Custody',
    desc: 'Medicines are sealed in serialized tamper-evident pouches with unique QR barcodes that cannot be opened without leaving irreversible optical marks.',
    safeguards: [
      'Unique 2D DataMatrix code per package',
      'Dual-factor SMS OTP required for delivery handover',
      'Full timestamped digital chain of custody audit'
    ],
    standard: 'Tamper-Proof Packaging'
  },
  {
    title: 'Health Data Encryption & Privacy',
    category: 'Information Security',
    desc: 'Patient health records, prescriptions, and delivery destinations are encrypted with hardware-isolated AES-256 keys adhering to UAE data residency.',
    safeguards: [
      'AES-256-GCM encryption at rest and TLS 1.3 in transit',
      'Strict role-based access control for delivery couriers',
      'Sovereign UAE cloud hosting and zero third-party tracking'
    ],
    standard: 'Zero-Trust Enclave'
  }
];

export const MedivantaTrustSafety: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-950/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
            TRUST & SAFETY STANDARDS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Precision Where <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              It Matters Most.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Delivering medication requires higher standards than standard logistics. We combine pharmaceutical rigor, thermal precision, and cryptographic data security.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#08121d] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  {pillar.category}
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                  {pillar.standard}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">{pillar.desc}</p>

              <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                {pillar.safeguards.map((item, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Conceptual Compliance Notice */}
        <div className="p-6 rounded-2xl bg-[#060c14] border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-slate-200">Conceptual Healthcare Logistics Architecture:</strong> Fictional platform simulation designed for Dubai & UAE sovereign healthcare networks.
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 shrink-0 font-bold">
            Controlled Information Handling
          </span>
        </div>
      </div>
    </section>
  );
};
