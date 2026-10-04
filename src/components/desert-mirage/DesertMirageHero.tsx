'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Clock, ArrowRight, ShieldCheck, ChevronDown, Moon, Wind } from 'lucide-react';
import { DESERT_MIRAGE_BRAND } from '@/data/desertMirageData';

interface DesertMirageHeroProps {
  onOpenBooking: (expeditionId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const DesertMirageHero: React.FC<DesertMirageHeroProps> = ({
  onOpenBooking,
  onScrollToSection
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#090706] text-[#F3EFEA] selection:bg-[#C9A265]/30 selection:text-[#E8D7B8]"
    >
      {/* Cinematic Deep Desert Background with Subtle Parallax */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=2000&q=85')`,
          transform: `scale(1.05) translate(${mousePos.x * -12}px, ${mousePos.y * -12}px)`
        }}
      >
        {/* Layered Vignettes & Desert Darkness Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090706] via-[#090706]/75 to-[#090706]/55" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      {/* Atmospheric Amber Glow & Moonlight Beam */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#C9A265]/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#3B3026]/30 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* Top Status & Location Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[#C9A265]/15 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-[#C9A265]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A265] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A265]"></span>
            </span>
            <span>EXPEDITION DISPATCH: ACTIVE</span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">DESERT CONSERVATION RESERVE</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden sm:flex items-center gap-5 text-xs font-mono text-stone-400"
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A265]" />
              <span>DUBAI, UNITED ARAB EMIRATES</span>
            </div>
            <span className="text-stone-700">•</span>
            <div className="flex items-center gap-1.5">
              <Moon className="w-3.5 h-3.5 text-[#E8D7B8]" />
              <span>DUSK DEPARTURES: <strong className="text-[#E8D7B8]">16:00 - 18:00</strong></span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Center Cinematic Editorial Headline & CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-12 sm:py-16">
        <div className="max-w-3xl space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410]/80 border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase backdrop-blur-md"
          >
            <ShieldCheck className="w-3 h-3" />
            <span>LUXURY DESERT EXPEDITIONS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight leading-[1.02]"
          >
            THE DESERT, <br />
            <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#E8D7B8] via-[#C9A265] to-[#A87B38]">
              AFTER DARK.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-stone-300 max-w-xl font-light leading-relaxed"
          >
            {DESERT_MIRAGE_BRAND.positioning}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => onOpenBooking()}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C9A265] via-[#D8B478] to-[#A87B38] text-[#090706] font-mono font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#C9A265]/20 hover:shadow-[#C9A265]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>BEGIN YOUR EXPEDITION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollToSection('expeditions')}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#140F0C]/80 hover:bg-[#1C1612] text-[#E8D7B8] font-mono text-sm tracking-wider uppercase border border-[#C9A265]/30 hover:border-[#C9A265]/60 transition-all duration-200 backdrop-blur-md"
            >
              <span>EXPLORE THE DESERT</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Features Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="pt-6 border-t border-[#C9A265]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          {[
            { label: 'FLEET', value: 'RANGE ROVER AUTOBIOGRAPHY' },
            { label: 'PRIVACY', value: '100% PRIVATE DUNES' },
            { label: 'CUISINE', value: 'MICHELIN-CALIBRE CHEF TABLE' },
            { label: 'STARGAZING', value: '14-INCH SCHMIDT TELESCOPE' }
          ].map((item, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="text-stone-500 text-[10px] tracking-widest">{item.label}</div>
              <div className="text-[#E8D7B8] font-semibold text-xs truncate">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
