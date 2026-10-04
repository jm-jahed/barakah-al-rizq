'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wind, ShieldCheck, Compass, MapPin, ArrowRight, CheckCircle2, Activity, Gauge, Radio } from 'lucide-react';

export const DuneExperience: React.FC = () => {
  const [activeWaypoint, setActiveWaypoint] = useState<number>(2);

  const waypoints = [
    {
      id: 'dubai',
      step: '01',
      name: 'DUBAI METROPOLIS',
      elevation: '5m ASL',
      status: 'DEPARTURE POINT',
      desc: 'Pick up from private villa or luxury hotel in bespoke Range Rover Autobiography with cold towels and iced cardamom water.'
    },
    {
      id: 'gate',
      step: '02',
      name: 'DESERT GATE CHECKPOINT',
      elevation: '85m ASL',
      status: 'PRESSURE ADJUSTMENT',
      desc: 'Tire pressures dropped from 35 PSI to 14 PSI to create maximum sand flotation and velvety ride comfort across soft dunes.'
    },
    {
      id: 'dunes',
      step: '03',
      name: 'LAHBAB CRIMSON DUNE FIELD',
      elevation: '210m ASL',
      status: 'HIGH-CREST NAVIGATION',
      desc: 'Choreographed high-incline dune ascents and sand-drifts across untouched ridge lines led by champion master desert navigators.'
    },
    {
      id: 'ridge',
      step: '04',
      name: 'MIRAGE SUNSET RIDGE',
      elevation: '290m ASL',
      status: 'PANORAMIC HALT',
      desc: 'Summit pause for sunset photography, chilled champagne, and royal Gyrfalcon aerial release with the master falconer.'
    },
    {
      id: 'camp',
      step: '05',
      name: 'NOMAD SANCTUARY CAMP',
      elevation: '120m ASL',
      status: 'EVENING OASIS SANCTUARY',
      desc: 'Lantern-lit arrival at our secluded desert camp for private firepit dining, live Oud melodies, and telescope stargazing.'
    }
  ];

  return (
    <section id="dune-experience" className="relative py-24 bg-[#0B0907] text-[#F3EFEA] overflow-hidden border-t border-[#C9A265]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1410] border border-[#C9A265]/30 text-[#C9A265] text-xs font-mono tracking-widest uppercase">
            <Wind className="w-3.5 h-3.5" />
            <span>EXPEDITION ROUTE CONTROL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            Control the Dunes.
          </h2>

          <p className="text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Engineered off-road navigation across Dubai’s most dramatic sand waves. Every route is dynamically scouted for virgin sand, optimal twilight shadows, and supreme passenger comfort.
          </p>
        </div>

        {/* Route Visualizer Control Console */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#1A1410] via-[#120E0B] to-[#090706] border border-[#C9A265]/30 shadow-2xl space-y-8">
          {/* Waypoints Sequence Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {waypoints.map((wp, idx) => {
              const isSelected = activeWaypoint === idx;

              return (
                <button
                  key={wp.id}
                  onClick={() => setActiveWaypoint(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#241B14] border-[#C9A265] shadow-lg shadow-[#C9A265]/20 ring-1 ring-[#C9A265]/40'
                      : 'bg-[#120E0B]/80 border-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#C9A265] font-bold">WAYPOINT {wp.step}</span>
                    <span className="text-stone-500">{wp.elevation}</span>
                  </div>
                  <div className="text-xs font-serif text-white mt-1 truncate">
                    {wp.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Waypoint Telemetry Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-xl bg-[#0C0907] border border-stone-800 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#C9A265]/20 text-[#E8D7B8] text-xs font-mono font-bold">
                  {waypoints[activeWaypoint].status}
                </span>
                <span className="text-xs font-mono text-stone-500">
                  Elevation: {waypoints[activeWaypoint].elevation}
                </span>
              </div>

              <h3 className="text-2xl font-serif text-white">
                {waypoints[activeWaypoint].name}
              </h3>

              <p className="text-sm text-stone-300 font-light leading-relaxed">
                {waypoints[activeWaypoint].desc}
              </p>
            </div>

            {/* Technical Hardware Indicators */}
            <div className="lg:col-span-4 p-4 rounded-xl bg-[#140F0C] border border-stone-800/80 space-y-2 text-xs font-mono">
              <div className="text-[#C9A265] text-[10px] tracking-widest uppercase">
                EXPEDITION TELEMETRY
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Fleet Suspension:</span>
                <span className="text-stone-200">Fox 2.5 Active Bypass</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Tire Configuration:</span>
                <span className="text-[#C9A265]">BFGoodrich KO2 @ 14 PSI</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Comms System:</span>
                <span className="text-emerald-400">Iridium Satellite Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
