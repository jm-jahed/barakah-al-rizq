'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Printer, ShieldCheck, Layers, ArrowRight, CheckCircle2, Cpu } from 'lucide-react';

interface PressoraHeroProps {
  onStartOrder: () => void;
  onExploreProducts: () => void;
  onSelectStudioTab: (tab: 'cards' | 'invoices' | 'custom') => void;
}

export const PressoraHero: React.FC<PressoraHeroProps> = ({
  onStartOrder,
  onExploreProducts,
  onSelectStudioTab,
}) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0c10] text-[#f8fafc] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Editorial CMYK Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(56,189,248,0.07)_0%,rgba(10,12,16,0.6)_50%,rgba(8,10,14,0.98)_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#101b2b] rounded-full blur-[140px] opacity-35 mix-blend-screen" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#1e1b2e] rounded-full blur-[120px] opacity-25" />
        
        {/* Subtle halftone & print registration grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`, 
            backgroundSize: '36px 36px' 
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full text-center z-10 flex flex-col items-center">
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#121720]/90 border border-[#38bdf8]/30 text-[10px] sm:text-xs tracking-normal sm:tracking-[0.25em] uppercase text-[#38bdf8] mb-8 backdrop-blur-md font-mono text-center"
        >
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">PRESSORA · COMMERCIAL PRINT & BRAND PRODUCTION · DUBAI</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm tracking-[0.35em] text-[#94a3b8] uppercase font-mono mb-4"
        >
          PRINT PRODUCTION, REIMAGINED
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-sans tracking-tight text-[#f8fafc] font-bold leading-[1.05] max-w-4xl mx-auto mb-6"
        >
          Make Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc]">Detail Count.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#94a3b8] font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          From executive business cards to branded packaging and NCR invoice books, transform ideas into precision-made print products through one intelligent production platform.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={onStartOrder}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#4f46e5] hover:from-[#0369a1] hover:to-[#4338ca] text-[#ffffff] font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.35)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start a Print Order</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreProducts}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#111622]/80 hover:bg-[#182030] text-[#cbd5e1] border border-[#202c40] hover:border-[#38bdf8]/50 font-light text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Explore 24+ Products
          </button>
        </motion.div>

        {/* Quick Configurator Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl p-5 sm:p-6 rounded-2xl bg-[#0f141e]/85 border border-[#1e293b] backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 mb-4 text-left">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#38bdf8] font-mono font-medium flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
              The Print Studio · Instant Configuration
            </span>
            <span className="text-[10px] text-[#64748b] tracking-wider uppercase font-mono hidden sm:inline">
              Real-Time Dynamic Pricing in AED
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { tab: 'cards' as const, title: 'Executive Business Cards', desc: '450gsm Cotton • Soft-Touch • Gold Foil', starting: 'From AED 120' },
              { tab: 'invoices' as const, title: 'NCR Carbonless Books', desc: 'Sequential Numbered • 2/3 Part Copies', starting: 'From AED 180' },
              { tab: 'custom' as const, title: 'Bespoke Custom Print', desc: 'Packaging, Folders, Booklets, Banners', starting: 'Instant Calculator' },
            ].map((item) => (
              <button
                key={item.tab}
                onClick={() => onSelectStudioTab(item.tab)}
                className="p-4 rounded-xl bg-[#141b28]/70 hover:bg-[#1b2538] border border-[#202e44] hover:border-[#38bdf8]/50 text-left transition-all duration-200 cursor-pointer group"
              >
                <div className="text-sm font-bold text-[#f8fafc] group-hover:text-[#38bdf8] transition-colors">
                  {item.title}
                </div>
                <div className="text-[11px] text-[#64748b] mt-1 font-mono">
                  {item.desc}
                </div>
                <div className="text-xs font-mono font-semibold text-[#38bdf8] mt-2">
                  {item.starting}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feature indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-xs text-[#64748b] font-mono tracking-wider uppercase">
          <span className="flex items-center gap-1.5">
            <Printer className="w-3.5 h-3.5 text-[#38bdf8]" />
            Heidelberg Speedmaster Technology
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
            Delta E &lt; 1.5 Color Calibration
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
            24H Fast-Track UAE Courier Dispatch
          </span>
        </div>
      </div>
    </section>
  );
};
