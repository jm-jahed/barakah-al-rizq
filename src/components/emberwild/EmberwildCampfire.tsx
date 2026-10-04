'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Volume2, VolumeX, Sliders } from 'lucide-react';

export const EmberwildCampfire: React.FC = () => {
  const [intensity, setIntensity] = useState<number>(75); // 0 to 100
  const [isSparkling, setIsSparkling] = useState(true);

  return (
    <section className="py-24 bg-[#080c08] text-stone-100 border-t border-stone-800 relative overflow-hidden">
      {/* Dynamic ambient campfire glow based on slider */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none rounded-full blur-3xl transition-all duration-300"
        style={{
          width: `${300 + intensity * 4}px`,
          height: `${200 + intensity * 2}px`,
          backgroundColor: `rgba(245, 158, 11, ${0.05 + (intensity / 100) * 0.15})`
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs uppercase tracking-widest mb-6">
          <Flame className="w-4 h-4" />
          <span>SIGNATURE MICRO-INTERACTION // THE FIRE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-stone-100 mb-4">
          Some nights are meant <br />
          <span className="font-serif italic text-amber-400">to be remembered.</span>
        </h2>

        <p className="text-stone-400 text-sm max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Adjust the flame intensity to feel the atmosphere shift. Hand-stacked olive and ghaf embers burn slowly beneath the open desert night.
        </p>

        {/* The Animated Campfire Graphic */}
        <div className="relative w-64 h-64 mx-auto mb-10 flex items-center justify-center">
          {/* Outer glow ring */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-t from-amber-600/20 via-amber-500/10 to-transparent blur-xl"
          />

          {/* Core Flame Visual */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Flames */}
            <div className="relative flex items-end justify-center h-28 w-24">
              <motion.div
                animate={{
                  scaleY: [1, 1.2, 0.95, 1.15, 1],
                  scaleX: [1, 0.95, 1.05, 0.9, 1],
                  rotate: [-2, 2, -1, 3, -2]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute bottom-0 w-16 h-24 bg-gradient-to-t from-amber-600 via-amber-400 to-amber-200 rounded-t-full blur-[1px] opacity-90 origin-bottom"
                style={{ height: `${50 + (intensity / 100) * 50}px` }}
              />

              <motion.div
                animate={{
                  scaleY: [1, 1.3, 0.9, 1.2, 1],
                  rotate: [2, -2, 1, -3, 2]
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2
                }}
                className="absolute bottom-0 w-10 h-16 bg-gradient-to-t from-yellow-400 via-yellow-200 to-white rounded-t-full blur-[0.5px] opacity-95 origin-bottom"
                style={{ height: `${35 + (intensity / 100) * 35}px` }}
              />
            </div>

            {/* Ember Logs at base */}
            <div className="relative -mt-2 flex items-center justify-center">
              <div className="w-24 h-5 rounded-full bg-stone-900 border border-stone-800 rotate-[-8deg] shadow-lg flex items-center justify-around px-2">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              </div>
              <div className="w-24 h-5 rounded-full bg-stone-950 border border-stone-800 rotate-[8deg] -ml-16 shadow-lg flex items-center justify-around px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-amber-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Fireplace Intensity Controls */}
        <div className="max-w-xs mx-auto p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3">
          <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
            <span>Hearth Glow Intensity</span>
            <span className="text-amber-400 font-bold">{intensity}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value, 10))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
