'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CORPORATE_PUBLICATIONS, CorporatePublication } from '@/data/corporateEnterpriseData';

export const CorporateInsights: React.FC = () => {
  const [downloadedId, setDownloadedId] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleDownload = (id: string) => {
    setDownloadedId(id);
    setTimeout(() => {
      setDownloadedId(null);
    }, 4000);
  };

  return (
    <section id="publications" className="py-28 bg-[#07090E] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[400px] bg-amber-500/[0.02] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>THOUGHT LEADERSHIP & MACRO INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Institutional Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Whitepapers</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Quarterly macroeconomic insights, sovereign capital allocation frameworks, and enterprise technology whitepapers published by our research committee.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">Open Institutional Access</span>
            <span className="text-[11px] text-slate-500">PDF Whitepapers & Research</span>
          </div>
        </div>

        {/* 3 Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CORPORATE_PUBLICATIONS.map((pub, idx) => {
            const isDownloaded = downloadedId === pub.id;

            return (
              <motion.article
                key={pub.id}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                className="p-7 rounded-3xl bg-[#0D111A] border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group backdrop-blur-md"
              >
                {/* Top Shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase">
                      {pub.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{pub.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {pub.summary}
                  </p>

                  <div className="pt-2 text-xs font-mono text-slate-300">
                    <span className="text-slate-500">Author:</span> {pub.author}
                  </div>
                </div>

                {/* Download Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400">
                    {pub.downloadSize}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleDownload(pub.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isDownloaded
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-white/[0.04] hover:bg-amber-500/15 border border-white/10 hover:border-amber-400/40 text-white'
                    }`}
                  >
                    {isDownloaded ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Downloaded PDF</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-amber-400" />
                        <span>Download Brief</span>
                      </>
                    )}
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
