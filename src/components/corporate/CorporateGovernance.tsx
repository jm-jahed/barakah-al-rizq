'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  CheckCircle2, 
  Lock, 
  FileCheck2, 
  Landmark, 
  Globe2, 
  Leaf,
  FileBadge
} from 'lucide-react';
import { CORPORATE_GOVERNANCE_PILLARS } from '@/data/corporateEnterpriseData';

export const CorporateGovernance: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="governance" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-xs uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOVEREIGN COMPLIANCE, TAX & ESG FRAMEWORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Fiduciary Standards</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              We operate under dual DFSA and FSRA regulatory authorization, strict UAE Federal corporate tax compliance, and institutional ESG reporting standards.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">COMPLIANCE RATING</span>
              <span className="text-xs font-bold font-mono text-emerald-400 flex items-center gap-1.5 justify-end mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Flawless Tier-1 Audit
              </span>
            </div>
          </div>
        </div>

        {/* 4 Governance Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORPORATE_GOVERNANCE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.code}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl relative overflow-hidden group backdrop-blur-md"
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {pillar.code}
                  </span>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{pillar.status}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Audited Protocol</span>
                <span className="text-emerald-400">Active Disclosure</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UAE Net-Zero 2050 Institutional Commitment Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1512] via-[#09100D] to-[#07090E] border border-emerald-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4" />
              <span>UAE Net-Zero 2050 Strategic Initiative Aligned</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Institutional Decarbonization & Clean Energy Mandate
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              100% of our real asset deployments adhere to sovereign carbon-intensity ceilings, promoting Sharia-compliant green Sukuk financing and renewable infrastructure development.
            </p>
          </div>

          <div className="shrink-0">
            <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 text-center font-mono space-y-1">
              <div className="text-2xl font-black text-emerald-300">380,000 MT</div>
              <div className="text-[10px] text-slate-400 uppercase">Annualized CO2 Offset</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
