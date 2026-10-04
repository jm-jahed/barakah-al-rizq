'use client';

import React, { useState } from 'react';
import { Wind, Waves, Compass, Radio, Droplets, Thermometer, ShieldCheck, Navigation } from 'lucide-react';
import { LIVE_WEATHER_HUD } from '@/data/neroData';

export const NeroLiveSeaState: React.FC = () => {
  const [selectedStation, setSelectedStation] = useState<'dubai' | 'abudhabi'>('dubai');

  const stationData =
    selectedStation === 'dubai'
      ? {
          name: 'Dubai Harbour Superyacht Basin',
          coords: '25.0924° N, 55.1438° E',
          waterTemp: 28.5,
          airTemp: 31.0,
          windSpeed: 11,
          windDir: 'NNW (330°)',
          waveHeight: 0.6,
          tide: 'High Tide (+1.4m)',
          visibility: '12.0 NM (Unlimited)',
          barometer: '1012.8 hPa',
          clearance: 'Green / Open Seas (Full Clearance)',
          vhf: 'Ch 68 / 16'
        }
      : {
          name: 'Abu Dhabi Yas Marina Station',
          coords: '24.4697° N, 54.6048° E',
          waterTemp: 29.0,
          airTemp: 32.5,
          windSpeed: 9,
          windDir: 'NW (315°)',
          waveHeight: 0.4,
          tide: 'Slack Water (Calm)',
          visibility: '14.0 NM (Crystal)',
          barometer: '1013.2 hPa',
          clearance: 'Green / Open Waters (Full Clearance)',
          vhf: 'Ch 72 / 16'
        };

  return (
    <section className="py-20 bg-[#060D1A] border-b border-cyan-500/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>LIVE TELEMETRY HUD & ARABIAN GULF SEA STATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-serif">
              Real-Time Marine Meteorological Station
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xl font-sans">
              Direct telemetry feeds for navigation safety, swell analysis, and UAE Coast Guard clearance status.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0B1528] border border-cyan-500/30 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setSelectedStation('dubai')}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedStation === 'dubai'
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              DUBAI HARBOUR (BERTH A-14)
            </button>
            <button
              type="button"
              onClick={() => setSelectedStation('abudhabi')}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                selectedStation === 'abudhabi'
                  ? 'bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              YAS MARINA (GATE 3)
            </button>
          </div>
        </div>

        {/* Telemetry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Wind */}
          <div className="p-6 rounded-3xl bg-[#0B1528]/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between text-cyan-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Wind Velocity</span>
              <Wind className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {stationData.windSpeed} <span className="text-sm font-normal text-cyan-400">Knots</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-2">
              <span>Direction:</span>
              <span className="text-white font-bold">{stationData.windDir}</span>
            </div>
          </div>

          {/* Card 2: Wave & Tide */}
          <div className="p-6 rounded-3xl bg-[#0B1528]/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between text-cyan-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Swell & Sea State</span>
              <Waves className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {stationData.waveHeight} <span className="text-sm font-normal text-cyan-400">Meters</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-2">
              <span>Tidal Cycle:</span>
              <span className="text-emerald-400 font-bold">{stationData.tide}</span>
            </div>
          </div>

          {/* Card 3: Water Temp & Barometer */}
          <div className="p-6 rounded-3xl bg-[#0B1528]/80 border border-cyan-500/20 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between text-cyan-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Thermal & Pressure</span>
              <Thermometer className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-white">
              {stationData.waterTemp}°C <span className="text-sm font-normal text-cyan-400">Sea</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-2">
              <span>Air / Baro:</span>
              <span className="text-white font-bold">{stationData.airTemp}°C / {stationData.barometer}</span>
            </div>
          </div>

          {/* Card 4: Coast Guard Status */}
          <div className="p-6 rounded-3xl bg-[#0B1528]/80 border border-emerald-500/30 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between text-emerald-400">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Coast Guard Status</span>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-xl font-extrabold font-mono text-emerald-300 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span>CLEARED</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-t border-white/5 pt-2">
              <span>Radio VHF:</span>
              <span className="text-cyan-300 font-bold">{stationData.vhf}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
