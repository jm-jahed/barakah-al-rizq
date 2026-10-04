'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sun, Moon, Wind, ShieldCheck } from 'lucide-react';

export const VeloraDigitalSanctuary: React.FC = () => {
  const [ambientMode, setAmbientMode] = useState<'water' | 'amber' | 'stone' | 'dawn'>('water');

  const modes = [
    { id: 'water', label: 'Mineral Water', tone: 'Deep oceanic emerald and reflective ripples', icon: Droplets, color: '#132822' },
    { id: 'amber', label: 'Candlelight Amber', tone: 'Subdued 1800K warm twilight glow', icon: Moon, color: '#2b1e12' },
    { id: 'stone', label: 'Warm Basalt', tone: 'Tactile textured slate and quiet shadows', icon: ShieldCheck, color: '#1a1f1c' },
    { id: 'dawn', label: 'Desert Mist', tone: 'Soft ivory daylight and botanical whispers', icon: Sun, color: '#242a22' },
  ] as const;

  const currentMode = modes.find((m) => m.id === ambientMode) || modes[0];

  return (
    <section className="relative py-32 bg-[#080a09] text-[#f5f2eb] px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-[#161f1a]">
      {/* Dynamic atmospheric ambient backdrop */}
      <motion.div
        key={ambientMode}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${currentMode.color} 0%, #080a09 80%)`,
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131a16] border border-[#233128] text-xs text-[#c5a059] uppercase tracking-[0.3em] mb-6">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>IMMERSIVE DIGITAL SANCTUARY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#fdfbf7] font-normal tracking-tight mb-6">
          The Space Between <span className="italic text-[#c5a059]">Moments.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#aba69a] font-light max-w-2xl mx-auto leading-relaxed mb-12">
          Pause your rhythm. Interact with our atmospheric light and sound frequencies to experience the stillness that defines the VELORA state of being.
        </p>

        {/* Ambient Mode Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {modes.map((m) => {
            const Icon = m.icon;
            const isSelected = ambientMode === m.id;

            return (
              <button
                key={m.id}
                onClick={() => setAmbientMode(m.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#c5a059] text-[#0a0c0b] font-semibold shadow-[0_0_30px_rgba(197,160,89,0.3)]'
                    : 'bg-[#121815] text-[#8e897e] hover:text-[#ded9ce] border border-[#212c26]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sensory Canvas */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0e1310]/80 border border-[#202c25] backdrop-blur-xl shadow-2xl">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#c5a059]/20 to-transparent border border-[#c5a059]/40 flex items-center justify-center animate-pulse">
              <currentMode.icon className="w-8 h-8 text-[#c5a059]" />
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium">
              Atmosphere: {currentMode.label}
            </div>

            <p className="text-sm text-[#ded9ce] font-serif italic">
              &ldquo;{currentMode.tone}&rdquo;
            </p>

            <div className="pt-4 text-[11px] text-[#6d685e] font-mono tracking-widest">
              FREQUENCY: 432 HZ · SANCTUARY AMBIENCE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
