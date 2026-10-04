'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, ShieldCheck, Clock } from 'lucide-react';

interface SneakerHeroProps {
  onShopClick?: () => void;
  onDropClick?: () => void;
}

export const SneakerHero: React.FC<SneakerHeroProps> = ({ onShopClick, onDropClick }) => {
  return (
    <section className="relative min-h-[90vh] bg-[#0A0908] flex items-center overflow-hidden pt-12 pb-20 border-b border-amber-500/15">
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[450px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 w-fit mb-6">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono font-semibold text-amber-300 uppercase tracking-widest">
                SOLE//DISTRICT • AUTUMN 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.02] mb-6 font-black uppercase">
              BUILT FOR <span className="italic text-amber-200 font-light lowercase">the</span> STREET.
            </h1>

            <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed max-w-xl mb-10">
              The ultimate destination for 100% authenticated grails, retro high-tops, performance runners, and heavyweight Dubai streetwear.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href="#discovery" onClick={onShopClick} className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-amber-500/20 group">
                <span>Shop Sneakers</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a href="#streetwear" onClick={onDropClick} className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 backdrop-blur-md">
                <span>Explore Streetwear →</span>
              </a>
            </div>

            <div className="pt-8 border-t border-amber-500/15 flex flex-wrap items-center gap-6 text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-400" /><span>100% Verified Authentic</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" /><span>Same-Day Dubai Express</span></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl aspect-[4/5] bg-[#141210]">
              <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop" alt="Jordan 1 Hero" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-60" />
              <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-amber-500/30 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-amber-300">
                Heat Spotlight • AJ1 Chicago
              </div>
            </div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute -bottom-6 -left-6 sm:left-6 right-6 sm:right-auto bg-[#141210]/90 backdrop-blur-2xl p-5 rounded-2xl border border-amber-500/30 shadow-2xl flex items-center gap-4 max-w-sm">
              <img src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=300&auto=format&fit=crop" alt="Air Jordan Thumb" className="w-16 h-16 rounded-xl object-cover border border-amber-500/20" />
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-0.5">High Top • Jordan Brand</span>
                <h4 className="text-sm font-serif text-white font-semibold">AJ1 Retro High OG</h4>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-xs font-bold font-mono text-amber-300">AED 1,299</span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Sample Price</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
