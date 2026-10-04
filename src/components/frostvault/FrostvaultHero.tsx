'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, ThermometerSnowflake, ShieldCheck, ArrowRight, Activity, Box, Cpu } from 'lucide-react';

interface FrostvaultHeroProps {
  onRequestStorage: () => void;
  onExploreOperations: () => void;
  onSelectZone: (zoneCode: string) => void;
}

export const FrostvaultHero: React.FC<FrostvaultHeroProps> = ({
  onRequestStorage,
  onExploreOperations,
  onSelectZone,
}) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#070b0e] text-[#f1f5f9] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Sub-Zero Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle cold gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.1)_0%,rgba(7,11,14,0.6)_55%,rgba(5,8,11,0.98)_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#0c2233] rounded-full blur-[150px] opacity-35 mix-blend-screen" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#082f49] rounded-full blur-[120px] opacity-20" />
        
        {/* Cold-air grid and sensor mesh background */}
        <div 
          className="absolute inset-0 opacity-[0.035]" 
          style={{ 
            backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`, 
            backgroundSize: '48px 48px' 
          }} 
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full text-center z-10 flex flex-col items-center">
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0c1620]/90 border border-[#0284c7]/30 text-xs tracking-[0.25em] uppercase text-[#38bdf8] mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
          <span>FROSTVAULT · COLD CHAIN INFRASTRUCTURE · UAE HUB</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-sm tracking-[0.35em] text-[#94a3b8] uppercase font-mono mb-4"
        >
          COLD CHAIN INFRASTRUCTURE
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-sans tracking-tight text-[#f8fafc] font-bold leading-[1.05] max-w-4xl mx-auto mb-6"
        >
          Precision at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#7dd3fc] to-[#e0f2fe]">Every Degree.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#94a3b8] font-light max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Intelligent cold storage and warehouse infrastructure designed to protect products, optimize inventory, and keep every critical condition under control.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
        >
          <button
            onClick={onRequestStorage}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] text-[#ffffff] font-medium text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Request Storage Capacity</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreOperations}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0c1622]/80 hover:bg-[#132334] text-[#cbd5e1] border border-[#1e3a5f] hover:border-[#38bdf8]/50 font-light text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Explore Operations Map
          </button>
        </motion.div>

        {/* Quick Simulated Live Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl p-5 sm:p-6 rounded-2xl bg-[#0b141e]/80 border border-[#172e48] backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[#172e48] pb-3 mb-4 text-left">
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#38bdf8] font-mono font-medium flex items-center gap-2">
              <ThermometerSnowflake className="w-3.5 h-3.5 text-[#38bdf8]" />
              Active Chamber Telemetry · 4 Micro-Climates
            </span>
            <span className="text-[10px] text-[#64748b] tracking-wider uppercase font-mono hidden sm:inline">
              NIST-Calibrated Probes Online
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { code: 'ZONE-A', type: 'Frozen', temp: '-24.8°C', target: '-25°C', color: 'text-[#38bdf8]' },
              { code: 'ZONE-B', type: 'Chilled', temp: '+2.3°C', target: '+2°C', color: 'text-[#0ea5e9]' },
              { code: 'ZONE-C', type: 'Controlled', temp: '+7.9°C', target: '+8°C', color: 'text-[#22d3ee]' },
              { code: 'ZONE-D', type: 'Ambient', temp: '+18.2°C', target: '+18°C', color: 'text-[#94a3b8]' },
            ].map((zone) => (
              <button
                key={zone.code}
                onClick={() => onSelectZone(zone.code)}
                className="p-3.5 rounded-xl bg-[#0e1b29]/70 hover:bg-[#14283c] border border-[#1a3654] hover:border-[#38bdf8]/50 text-left transition-all duration-200 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#64748b]">{zone.code}</span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#070d14] text-[#94a3b8]">{zone.type}</span>
                </div>
                <div className={`text-xl font-mono font-bold mt-1.5 ${zone.color}`}>
                  {zone.temp}
                </div>
                <div className="text-[10px] text-[#64748b] font-mono mt-0.5">
                  Target: {zone.target}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Facility Credentials indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-xs text-[#64748b] font-mono tracking-wider uppercase">
          <span className="flex items-center gap-1.5">
            <Snowflake className="w-3.5 h-3.5 text-[#38bdf8]" />
            Ammonia/CO2 Cascade Redundancy
          </span>
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#38bdf8]" />
            Millisecond IoT Mesh Polling
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
            GDP & HACCP Certified Vaults
          </span>
        </div>
      </div>
    </section>
  );
};
