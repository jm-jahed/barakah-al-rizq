'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CloudSun, Wind, Eye, Compass, Sunrise, Sunset, CheckCircle2 } from 'lucide-react';

export const EmberwildWeather: React.FC = () => {
  return (
    <section className="py-20 bg-[#080c08] text-stone-100 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2">
              REAL-TIME ENVIRONMENTAL TELEMETRY
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-stone-100">
              Know the <span className="font-serif italic text-amber-400">Wild</span>
            </h2>
            <p className="text-stone-400 text-sm mt-1">
              Live automated weather station feed across our Hatta and Jebel Jais wilderness sensor mesh.
            </p>
          </div>

          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs">
            Trails 100% Clear · Optimal Conditions
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Temperature</span>
              <CloudSun className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-mono font-medium text-white">21.4°C</div>
            <div className="text-[10px] text-stone-400 mt-1 font-mono">Low 16°C overnight</div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Wind Velocity</span>
              <Wind className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-mono font-medium text-white">8 km/h</div>
            <div className="text-[10px] text-stone-400 mt-1 font-mono">Gentle NW breeze</div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Atmospheric Visibility</span>
              <Eye className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-mono font-medium text-white">25+ km</div>
            <div className="text-[10px] text-stone-400 mt-1 font-mono">Crystal clear sky</div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Sunrise</span>
              <Sunrise className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-mono font-medium text-amber-300">06:18 AM</div>
            <div className="text-[10px] text-stone-400 mt-1 font-mono">First light 05:54</div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Sunset</span>
              <Sunset className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-mono font-medium text-amber-400">18:04 PM</div>
            <div className="text-[10px] text-stone-400 mt-1 font-mono">Twilight 18:28</div>
          </div>

          <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="flex items-center justify-between text-stone-500 text-xs mb-2">
              <span>Trail Status</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-mono font-medium text-emerald-400">OPEN</div>
            <div className="text-[10px] text-stone-400 mt-1 font-mono">All 6 routes verified</div>
          </div>
        </div>
      </div>
    </section>
  );
};
