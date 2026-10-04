'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Award, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  Landmark, 
  Building,
  CheckCircle2
} from 'lucide-react';
import { CORPORATE_LEADERS, CorporateLeader } from '@/data/corporateEnterpriseData';

interface CorporateLeadershipProps {
  onOpenMandateModal: (leaderContext?: string) => void;
}

export const CorporateLeadership: React.FC<CorporateLeadershipProps> = ({ onOpenMandateModal }) => {
  const [selectedLeader, setSelectedLeader] = useState<CorporateLeader | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="leadership" className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Users className="w-3.5 h-3.5 text-amber-400" />
              <span>EXECUTIVE GOVERNANCE & SENIOR PARTNERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Governed by Sovereign & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Institutional Acumen</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Our executive board brings together former sovereign wealth fund directors, Tier-1 investment banking leaders, and pioneering technologists.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">100+ Cumulative Years</span>
            <span className="text-[11px] text-slate-500">Cross-Border Sovereign Advisory</span>
          </div>
        </div>

        {/* 4 Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE_LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
              className="p-6 rounded-3xl bg-[#0F141E] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xl group relative overflow-hidden backdrop-blur-md"
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/5">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F141E] via-transparent to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-slate-300 hover:text-amber-400 flex items-center justify-center transition-colors"
                      aria-label={`${leader.name} LinkedIn Profile`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                    {leader.division}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {leader.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono block mt-0.5">
                    {leader.title}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-normal">
                  {leader.bio}
                </p>

                {/* Credentials */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {leader.credentials.slice(0, 2).map((c, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="truncate">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onOpenMandateModal(`Private Advisory with ${leader.name} (${leader.title})`)}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
