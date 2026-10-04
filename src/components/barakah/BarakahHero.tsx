'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BARAKAH_BRAND } from '@/data/barakahData';

interface BarakahHeroProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const BarakahHero: React.FC<BarakahHeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 bg-gradient-to-b from-[#F2F7F3] via-[#F8FAF8] to-[#FFFFFF] text-[#111827] overflow-hidden font-sans border-b border-emerald-100">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-emerald-200/30 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-amber-200/30 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Emblem Header Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-emerald-900/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-12 sm:h-16 w-auto p-1.5 rounded-2xl bg-white border border-emerald-200 shadow-md flex items-center justify-center shrink-0">
              <img
                src="/images/barakah-logo.png"
                alt="BARAKAH AL RIZQ Official Logo"
                className="h-10 sm:h-14 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest block">
                OFFICIAL TRADING LICENSE &amp; EMBLEM
              </span>
              <span className="text-xs sm:text-sm font-black text-[#063D24] font-sans block leading-snug">
                BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono text-emerald-900 bg-emerald-100/80 px-3 py-1.5 rounded-xl border border-emerald-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>AL AWEER MARKET SALE OFFICE ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column B2B Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold font-mono text-emerald-900 uppercase tracking-widest">
                UAE B2B FOODSTUFF IMPORTER &amp; WHOLESALER
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-sans text-[#063D24]"
            >
              QUALITY FOODSTUFF. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 font-serif italic font-normal">RELIABLE GLOBAL SUPPLY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl text-gray-700 leading-relaxed max-w-2xl font-light"
            >
              {BARAKAH_BRAND.subheading}
            </motion.p>

            {/* Service Pillars (IMPORT | EXPORT | WHOLESALE | SUPPLY) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {['IMPORT', 'EXPORT', 'WHOLESALE', 'SUPPLY'].map((badge, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl bg-white border border-emerald-200 text-[#063D24] font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
            >
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-[#063D24] hover:bg-[#042A18] text-white font-extrabold text-xs tracking-wider uppercase font-mono shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 border border-emerald-900 min-h-[44px]"
              >
                <span className="text-amber-300">REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-gray-50 border border-emerald-300 text-[#063D24] font-bold text-xs uppercase font-mono tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
              >
                <span>VIEW PRODUCTS</span>
              </a>
            </motion.div>

            {/* Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-900/10"
            >
              <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <span className="block text-xl sm:text-3xl font-extrabold text-[#063D24] font-mono">
                  {BARAKAH_BRAND.dailyTonnage}
                </span>
                <span className="text-xs text-gray-600 font-medium">Daily Supply Capacity</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <span className="block text-xl sm:text-3xl font-extrabold text-emerald-700 font-mono">
                  {BARAKAH_BRAND.importOrigins}
                </span>
                <span className="text-xs text-gray-600 font-medium">Global Origins</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <span className="block text-xl sm:text-3xl font-extrabold text-amber-600 font-mono">
                  {BARAKAH_BRAND.clientNetwork}
                </span>
                <span className="text-xs text-gray-600 font-medium">Supermarkets &amp; B2B Clients</span>
              </div>
            </motion.div>

            <div className="flex items-center gap-2 text-xs text-[#063D24] font-mono pt-1">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>RAS AL KHOR • AL AWEER VEGETABLE MARKET • DUBAI, UAE</span>
            </div>
          </div>

          {/* Right Column Logo & Photography Card (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-5 relative space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden border border-emerald-200 shadow-xl bg-white p-3 sm:p-4 flex flex-col items-center justify-center text-center"
            >
              <div className="w-full p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#F2F7F3] to-[#FFFFFF] border border-emerald-100 mb-3 sm:mb-4 shadow-sm">
                <img
                  src="/images/barakah-logo.png"
                  alt="BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C"
                  className="w-full max-w-[220px] sm:max-w-[280px] h-auto object-contain mx-auto filter drop-shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-gray-200 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop"
                  alt="BARAKAH AL RIZQ Fresh Foodstuff Wholesale Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Response SLA Pill */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl bg-white/95 backdrop-blur-md border border-emerald-200 flex items-center justify-between shadow-lg">
                  <div className="text-left">
                    <span className="block text-[8px] sm:text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                      MANAGING DIRECTOR
                    </span>
                    <span className="text-xs font-bold text-[#063D24] font-sans">
                      {BARAKAH_BRAND.mdName}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal()}
                    className="px-3 py-1.5 rounded-lg bg-[#063D24] hover:bg-[#042A18] text-amber-300 text-[10px] font-mono font-bold transition-all flex items-center gap-1 shadow-sm shrink-0 min-h-[36px]"
                  >
                    <span>CONTACT SALES</span>
                    <ArrowRight className="w-3 h-3 text-amber-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};