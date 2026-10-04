'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, ArrowRight, Clock, Moon, Droplets } from 'lucide-react';

interface VeloraHeroProps {
  onOpenBooking: (ritualId?: string) => void;
  onExploreTreatments: () => void;
  onSelectIntention: (intentionKey: string) => void;
}

export const VeloraHero: React.FC<VeloraHeroProps> = ({
  onOpenBooking,
  onExploreTreatments,
  onSelectIntention,
}) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0a0c0b] text-[#f5f2eb] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Cinematic Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(197,160,89,0.08)_0%,rgba(20,24,22,0.6)_50%,rgba(10,12,11,0.98)_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#1a231f] rounded-full blur-[140px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-[#2a221b] rounded-full blur-[120px] opacity-25" />
        
        {/* Subtle grid & water ripples texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(#c5a059 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full text-center z-10 flex flex-col items-center">
        {/* Subtle location & ethos badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161a18]/90 border border-[#c5a059]/20 text-xs tracking-[0.25em] uppercase text-[#c5a059] mb-8 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
          <span>VELORA · WELLNESS / RECOVERY / RITUAL · DUBAI</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm tracking-[0.35em] text-[#a29e94] uppercase font-light mb-4"
        >
          PRIVATE WELLNESS SANCTUARY
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-serif tracking-tight text-[#fdfbf7] font-normal leading-[1.05] max-w-4xl mx-auto mb-6"
        >
          Return to <span className="italic font-light text-[#c5a059]">Yourself.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#b8b3a7] font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A private world of restorative rituals, intelligent thermal journeys, and deeply considered experiences designed to bring you back to stillness.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c5a059] hover:bg-[#d4b069] text-[#0a0c0b] font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.25)] hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Reserve Your Experience</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreTreatments}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141816]/80 hover:bg-[#1c221f] text-[#ded9ce] border border-[#343b37] hover:border-[#c5a059]/50 font-light text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Explore Treatments
          </button>
        </motion.div>

        {/* Cinematic Intentions Quick Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl p-6 rounded-2xl bg-[#121614]/70 border border-[#222b26] backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#222b26] pb-3 mb-4 text-left">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#8d887e] font-medium flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
              Choose How You Want to Feel Today
            </span>
            <span className="text-[10px] text-[#6b665d] tracking-widest uppercase hidden sm:inline">
              Instant Ritual Curation
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {[
              { key: 'RESTORE', label: 'Restore', desc: 'Deep recovery' },
              { key: 'REBALANCE', label: 'Rebalance', desc: 'Mind & body reset' },
              { key: 'RENEW', label: 'Renew', desc: 'Refreshing reset' },
              { key: 'RELEASE', label: 'Release', desc: 'Tension unwinding' },
              { key: 'AWAKEN', label: 'Awaken', desc: 'Vitality & focus' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => onSelectIntention(item.key)}
                className="group relative p-3 rounded-xl bg-[#171d1a]/60 hover:bg-[#202924] border border-transparent hover:border-[#c5a059]/40 text-left transition-all duration-300 cursor-pointer"
              >
                <div className="text-xs font-serif tracking-wide text-[#e8e4db] group-hover:text-[#c5a059] transition-colors">
                  {item.label}
                </div>
                <div className="text-[10px] text-[#7a756b] group-hover:text-[#9e988c] mt-0.5 truncate font-light">
                  {item.desc}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Atmosphere indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-xs text-[#7e796e] tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-[#c5a059]" />
            Natural Mineral Pools
          </span>
          <span className="flex items-center gap-1.5">
            <Moon className="w-3.5 h-3.5 text-[#c5a059]" />
            Acoustic Stillness
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
            Complete Discretion
          </span>
        </div>
      </div>
    </section>
  );
};
