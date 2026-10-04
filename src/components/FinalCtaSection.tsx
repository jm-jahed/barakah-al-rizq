'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Crown, 
  ArrowRight, 
  Bot, 
  ShieldCheck, 
  Clock, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  PhoneCall
} from 'lucide-react';
import { AGENCY_BUSINESS } from '@/data/siteData';

interface FinalCtaSectionProps {
  onOpenOrderModal: (serviceId?: string) => void;
}

const INTENT_CHIPS = [
  { id: 'web', label: 'Bespoke Next.js 16 Web Platform' },
  { id: 'ai', label: 'Custom OpenAI RAG AI Agent' },
  { id: 'commerce', label: 'Headless Shopify Plus Store' },
  { id: 'saas', label: 'Enterprise Multi-Tenant SaaS' },
];

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenOrderModal }) => {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 400, y: 250 });
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="contact" className="py-28 bg-[#0B0907] relative z-10 overflow-hidden font-sans border-t border-white/5">
      {/* Ambient Neural Light Source */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-amber-500/15 via-amber-600/5 to-transparent blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-3xl bg-gradient-to-b from-[#18130E] via-[#120F0C] to-[#0D0A08] border border-amber-500/30 p-8 sm:p-14 lg:p-20 text-center shadow-2xl shadow-black/90 overflow-hidden group hover:border-amber-400/60 hover:shadow-[0_24px_90px_rgba(245,158,11,0.22),0_0_35px_rgba(245,158,11,0.1)] transition-all duration-700"
        >
          {/* Dynamic Cursor Spotlight Radial Glow */}
          {!shouldReduceMotion && (
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10"
              style={{
                opacity: isHovered ? 1 : 0.25,
                background: isHovered
                  ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.16), transparent 75%)`
                  : `radial-gradient(400px circle at 50% 50%, rgba(245, 158, 11, 0.08), transparent 75%)`,
              }}
            />
          )}

          {/* Top Specular Gold Accent Line with Motion #30 Laser Energy Sweep */}
          <div
            className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-500 overflow-hidden ${
              isHovered
                ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-100 shadow-[0_0_15px_rgba(245,158,11,0.8)]'
                : 'bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-60'
            }`}
          >
            {!shouldReduceMotion && (
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-90"
              />
            )}
          </div>

          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1a14_1px,transparent_1px),linear-gradient(to_bottom,#1f1a14_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

          {/* Glowing Ambient Radial Nodes */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
          {/* Live Studio Status Pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold font-mono text-amber-300 uppercase tracking-wider">
                ACCEPTING Q3/Q4 UAE &amp; GLOBAL SPRINT COMMISSIONS
              </span>
            </div>
          </div>

            {/* Primary Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Have a Project in Mind?{' '}
              <span className="block mt-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Let&apos;s Build It.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Turn complex specifications into high-performance web products, bespoke AI agents, and enterprise commercial platforms with guaranteed sub-50ms speed.
            </p>

            {/* Interactive Scope Intent Chips */}
            <div className="mb-8 w-full">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
                Select Your Project Direction:
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {INTENT_CHIPS.map((chip) => {
                  const isSelected = selectedIntent === chip.label;
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => {
                        setSelectedIntent(chip.label);
                        onOpenOrderModal(chip.label);
                      }}
                      className={`relative px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer z-10 ${
                        isSelected
                          ? 'text-black font-bold shadow-lg shadow-amber-500/30'
                          : 'bg-white/[0.04] text-gray-300 border border-white/10 hover:border-amber-400/50 hover:text-amber-300'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeCtaIntentPill"
                          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 shadow-lg shadow-amber-500/30 -z-10"
                        />
                      )}
                      <span>{chip.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-10">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onOpenOrderModal(selectedIntent || undefined)}
                className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider font-mono transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-3 cursor-pointer"
              >
                <Crown className="w-4 h-4 text-black" />
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href={AGENCY_BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-amber-500/40 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </motion.a>
            </div>

            {/* SLA & Security Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 w-full text-xs text-gray-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDAS &amp; 100% CODE OWNERSHIP</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>24H DISCOVERY RESPONSE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>30-DAY PRODUCTION SLA WARRANTY</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

