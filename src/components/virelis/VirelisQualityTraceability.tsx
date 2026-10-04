'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Lock, FileCode, Users, Search } from 'lucide-react';
import { TRACEABILITY_PATH, QualityTraceabilityNode } from '@/data/virelisData';

export function VirelisQualityTraceability() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#04060A] border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MEDICAL FORENSIC GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Precision Requires Traceability.
          </h2>
          <p className="mt-4 text-slate-400 text-base font-light">
            Every sample barcode scan, instrument calibration standard, analytical run, and consultant sign-off is preserved in a tamper-proof cryptographic audit trail.
          </p>
        </div>

        {/* 5-Step Traceability Horizontal Track */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {TRACEABILITY_PATH.map((node) => (
            <div
              key={node.nodeNumber}
              className="p-5 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-teal-500/40 transition-colors flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-teal-400 uppercase mb-3">
                  <span>STEP 0{node.nodeNumber}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {node.stageName}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {node.title}
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                  {node.action}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 font-mono text-[10px]">
                <div className="text-slate-400 truncate mb-1">Role: {node.roleAssigned}</div>
                <div className="text-teal-300 truncate font-semibold">{node.auditSignature}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
