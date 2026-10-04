'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye } from 'lucide-react';

export const AtmosphereSection: React.FC = () => {
  const [activeMood, setActiveMood] = useState<'Lunch' | 'Sunset' | 'Dinner'>('Dinner');

  const moods = {
    Lunch: {
      title: "Sunlit DIFC Business Lunch",
      desc: "Bright natural lighting pouring through floor-to-ceiling glass, ideal for business meetings and relaxed daytime dining.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      lighting: "Natural Day Light (5500K)",
      music: "Ambient Acoustic Oud & Chill"
    },
    Sunset: {
      title: "Golden Hour Skyline Lounge",
      desc: "Warm honeyed glow across the DIFC terrace as the sun dips behind Burj Khalifa.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
      lighting: "Warm Golden Sunset (2700K)",
      music: "Deep Arabic House & Lounge Beats"
    },
    Dinner: {
      title: "Candlelit Open-Fire Evening",
      desc: "Dim moody candlelight with the flickering ember glow of 400°C oak charcoal grills.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      lighting: "Dim Candlelight & Ember Glow (1800K)",
      music: "Live Cardamom Dallah & Evening Jazz"
    }
  };

  const current = moods[activeMood];

  return (
    <section className="py-24 bg-[#0A0D14] border-b border-amber-500/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            DYNAMIC AMBIENCE SIMULATOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif mt-4 mb-4">
            Daylight → Evening Transition.
          </h2>
          <p className="text-base text-gray-400">
            Experience how Al-Majlis shifts lighting, temperature, and mood across dining hours.
          </p>
        </div>

        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-6">
          {/* Mood Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {(['Lunch', 'Sunset', 'Dinner'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setActiveMood(m)}
                className={`p-3.5 rounded-2xl border text-center font-mono font-bold transition-all ${
                  activeMood === m
                    ? 'bg-amber-500 text-black border-amber-400 shadow-lg'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {m} Ambience
              </button>
            ))}
          </div>

          {/* Mood Display */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            <div className="md:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover filter brightness-95 transition-all duration-500"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/30 font-bold uppercase">
                {activeMood} Service Mode
              </span>
            </div>

            <div className="md:col-span-6 space-y-4">
              <h3 className="text-2xl font-bold text-white font-serif">{current.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">{current.desc}</p>

              <div className="p-4 rounded-xl bg-[#161D27] border border-white/10 text-xs font-mono text-gray-300 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Color Temperature:</span>
                  <span className="text-amber-300 font-bold">{current.lighting}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Audio Ambience:</span>
                  <span className="text-white font-bold">{current.music}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
