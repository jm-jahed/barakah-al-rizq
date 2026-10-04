'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  TrendingUp, 
  ExternalLink,
  Layers,
  FileText,
  Calendar,
  MapPin
} from 'lucide-react';
import { CORPORATE_CASE_STUDIES, CorporateCaseStudy } from '@/data/corporateEnterpriseData';

interface CorporateCaseStudiesProps {
  onSelectCase: (caseStudy: CorporateCaseStudy) => void;
  onOpenMandateModal: (caseContext?: string) => void;
}

export const CorporateCaseStudies: React.FC<CorporateCaseStudiesProps> = ({ onSelectCase, onOpenMandateModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const filteredCases = CORPORATE_CASE_STUDIES.filter((c) => {
    if (selectedFilter === 'all') return true;
    return c.sector.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <section id="case-studies" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>PROVEN TRACK RECORD & ADVISORY MANDATES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Flagship Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Case Studies</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Confidential, multi-jurisdictional capital execution delivered for sovereign authorities, multinational conglomerates, and GCC financial leaders.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-white font-bold text-sm block">AED 3.87B Total Deal Value</span>
            <span className="text-[11px] text-amber-400">100% On-Schedule Financial Close</span>
          </div>
        </div>

        {/* 3 High-Impact Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CORPORATE_CASE_STUDIES.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.01 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group backdrop-blur-md"
            >
              {/* Top Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Image Banner */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D111A] via-transparent to-black/40" />

                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold">
                      {item.dealSizeAED}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-slate-300 font-mono text-[10px]">
                      {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-slate-300 text-[10px] font-mono">
                    <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{item.jurisdiction}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                    {item.sector}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {item.challenge}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Table */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center">
                  {item.metrics.map((m, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[11px] font-black font-mono text-amber-300">{m.value}</div>
                      <div className="text-[9px] font-mono text-slate-400 uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Inspect Brief Button */}
                <button
                  type="button"
                  onClick={() => onSelectCase(item)}
                  className="w-full py-3 rounded-xl bg-white/[0.04] hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  <span>Inspect Mandate Brief</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
