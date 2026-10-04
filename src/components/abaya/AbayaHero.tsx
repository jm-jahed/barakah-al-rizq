'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { ABAYA_STATS } from '@/data/abayaData';

interface AbayaHeroProps {
  onExploreCatalog: () => void;
  onSelectCategory: (cat: string) => void;
}

export const AbayaHero: React.FC<AbayaHeroProps> = ({ onExploreCatalog, onSelectCategory }) => {
  return (
    <section className="relative min-h-[92vh] pt-36 pb-20 bg-[#0A0A0A] overflow-hidden flex items-center">
      
      {/* Background Luxury Fashion Photography Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1800&auto=format&fit=crop"
          alt="NOURA ABAYA Luxury Couture Dubai"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/70" />
      </div>

      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-[#C5A059]/10 blur-[190px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#121212]/50 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-8">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121212] border border-[#C5A059]/40 shadow-xl"
            >
              <Crown className="w-4 h-4 text-[#C5A059]" />
              <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em]">
                NEW RAMADAN & EID COUTURE COLLECTION 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold text-[#FAFAFA] tracking-tight leading-[0.95]"
            >
              Elegance Woven <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#E6DFD5]">
                In Dubai.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-stone-300 max-w-xl font-light leading-relaxed font-sans"
            >
              Explore 100 handcrafted luxury abayas, open-front kaftans, and Ramadan silk ensembles tailored in Dubai with complimentary same-day UAE delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreCatalog}
                className="px-9 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] hover:from-[#b38e47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02]"
              >
                <span>Shop 100 Abaya Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectCategory('Ramadan Edition')}
                className="px-8 py-4 rounded-xl bg-[#121212] hover:bg-stone-800 border border-stone-700 text-[#FAFAFA] font-serif text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Ramadan Edition</span>
              </button>
            </motion.div>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-800 max-w-2xl font-mono"
            >
              {ABAYA_STATS.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#C5A059] block">{stat.value}</span>
                  <span className="text-[10px] text-stone-400 uppercase block font-sans">{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border border-stone-700 shadow-2xl bg-[#121212] group"
            >
              <div className="relative h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
                  alt="NOURA ABAYA Couture Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 right-5 bg-[#0A0A0A]/95 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-[#C5A059]/40 shadow-2xl font-mono text-xs text-white flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#C5A059]" />
                <div>
                  <span className="text-[#C5A059] font-bold block">100 Unique Couture Designs</span>
                  <span className="text-[10px] text-stone-400">Hand-Tailored in Dubai</span>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#121212]/95 backdrop-blur-xl p-4 rounded-2xl border border-stone-700 shadow-2xl flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-[#C5A059] font-bold block">The Royal Golden Thread Abaya</span>
                  <span className="text-[10px] text-stone-400">Authentic Dubai Nida Silk | AED 1,850</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-lg bg-[#0A0A0A] text-emerald-400 border border-emerald-500/30 font-bold">
                  IN STOCK
                </span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
