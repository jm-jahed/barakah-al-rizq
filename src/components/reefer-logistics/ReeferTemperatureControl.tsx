'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ThermometerSnowflake,
  ThermometerSun,
  Activity,
  CheckCircle2,
  Wind,
  ShieldAlert,
  Flame,
  Snowflake,
  Gauge,
  ArrowRight
} from 'lucide-react';

interface ReeferTemperatureControlProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferTemperatureControl({ onOpenQuote }: ReeferTemperatureControlProps) {
  const [currentTemp, setCurrentTemp] = useState<number>(-18);

  const tempZones = [
    {
      id: 'frozen',
      name: 'FROZEN',
      range: '-18°C to -25°C',
      tempValue: -18,
      icon: '❄️',
      color: 'text-sky-400',
      bg: 'bg-sky-950/40 border-sky-500/40',
      products: 'Frozen Poultry, Beef, Seafood, Ice Cream, Pre-Proofed Pastries',
      status: 'SUB-ZERO OPTIMAL',
      airflow: 'High-Velocity Continuous Sub-Zero Circulation'
    },
    {
      id: 'deep-cold',
      name: 'DEEP COLD',
      range: '-5°C to -18°C',
      tempValue: -10,
      icon: '🧊',
      color: 'text-cyan-300',
      bg: 'bg-cyan-950/40 border-cyan-500/40',
      products: 'Processed Meat, Frozen Dough, Butter Blocks, Specialty Frozen FMCG',
      status: 'DEEP COLD CALIBRATED',
      airflow: 'Micro-Pulsed Return-Air Cycle'
    },
    {
      id: 'chilled',
      name: 'CHILLED',
      range: '0°C to +4°C',
      tempValue: 3,
      icon: '🌡️',
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/40 border-emerald-500/40',
      products: 'Fresh Milk, Yogurts, Cheeses, Fresh Berries, Chilled Cuts',
      status: 'COLD-CHAIN SECURE',
      airflow: 'Gentle Constant Flow to Prevent Surface Desiccation'
    },
    {
      id: 'controlled',
      name: 'TEMPERATURE CONTROLLED',
      range: '+10°C to +18°C',
      tempValue: 15,
      icon: '🌿',
      color: 'text-amber-300',
      bg: 'bg-amber-950/40 border-amber-500/40',
      products: 'Fine Chocolates, Confectionery, Dry Bakery Mixes, Cosmetics',
      status: 'CLIMATE CONTROLLED',
      airflow: 'Humidity-Stabilized Ambient Circulation'
    }
  ];

  // Determine active zone based on slider value
  const getActiveZone = (temp: number) => {
    if (temp <= -15) return tempZones[0];
    if (temp <= -2) return tempZones[1];
    if (temp <= 6) return tempZones[2];
    return tempZones[3];
  };

  const activeZone = getActiveZone(currentTemp);

  return (
    <section id="temperature" className="py-20 sm:py-28 bg-[#070b14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-medium">
            <ThermometerSnowflake className="w-3.5 h-3.5" />
            <span>PRECISION THERMAL REFRIGERATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono uppercase">
            YOUR CARGO. THE RIGHT TEMPERATURE.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans">
            Continuous temperature scale from <strong className="text-sky-400 font-mono">-18°C up to +4°C</strong> calibrated to preserve the exact biological and physical integrity of perishable cargo across all GCC transit routes.
          </p>
        </div>

        {/* Interactive Temperature Control Panel */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] border border-white/10 p-6 sm:p-10 shadow-2xl">
          
          {/* Top Interactive Slider Bar */}
          <div className="mb-10 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                DRAG TEMPERATURE SETPOINT SLIDER:
              </label>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-slate-400">CURRENT TARGET:</span>
                <span className="px-3 py-1 rounded-md bg-sky-500/20 border border-sky-400/40 text-sky-300 font-bold text-sm">
                  {currentTemp > 0 ? `+${currentTemp}` : currentTemp}°C
                </span>
              </div>
            </div>

            {/* Range Slider */}
            <div className="relative py-4">
              <input
                type="range"
                min="-25"
                max="20"
                step="1"
                value={currentTemp}
                onChange={(e) => setCurrentTemp(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-sky-600 via-emerald-500 to-amber-500 rounded-lg appearance-none cursor-pointer accent-white shadow-inner"
              />
              
              {/* Slider Scale Ticks */}
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
                <span className="text-sky-400 font-bold">-25°C (Deep Frozen)</span>
                <span className="text-sky-300 font-bold">-18°C (Standard Frozen)</span>
                <span className="text-emerald-400 font-bold">0°C (Ice Point)</span>
                <span className="text-emerald-300 font-bold">+4°C (Chilled Dairy)</span>
                <span className="text-amber-400 font-bold">+18°C (Chocolate)</span>
              </div>
            </div>
          </div>

          {/* 4 Zone Visualizer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 text-left">
            {tempZones.map((zone) => {
              const isActive = activeZone.id === zone.id;
              return (
                <div
                  key={zone.id}
                  onClick={() => setCurrentTemp(zone.tempValue)}
                  className={`cursor-pointer p-5 rounded-xl border transition-all relative overflow-hidden ${
                    isActive
                      ? `${zone.bg} shadow-lg ring-1 ring-sky-400`
                      : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-black/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{zone.icon}</span>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/40 ${zone.color}`}>
                      {zone.range}
                    </span>
                  </div>

                  <div className={`text-base font-bold font-mono ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {zone.name}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 font-sans">
                    {zone.products}
                  </p>

                  <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>{zone.status}</span>
                    {isActive && (
                      <span className="text-sky-400 font-bold">● ACTIVE</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Simulated Telemetry HUD Box */}
          <div className="p-6 rounded-xl bg-[#060a14] border border-sky-500/30 grid grid-cols-1 md:grid-cols-3 gap-6 text-left items-center">
            
            {/* Monitor 1: Live Temperature Readout */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-slate-400 tracking-wider">
                LIVE TELEMETRIC READOUT
              </div>
              <div className="text-3xl font-extrabold font-mono text-sky-400">
                {currentTemp > 0 ? `+${currentTemp}.2` : `${currentTemp}.4`}°C
              </div>
              <div className="text-xs text-slate-300 font-mono">
                Supply: {currentTemp > 0 ? `+${currentTemp - 0.5}` : `${currentTemp - 0.6}`}°C | Return: {currentTemp > 0 ? `+${currentTemp + 0.3}` : `${currentTemp + 0.2}`}°C
              </div>
            </div>

            {/* Monitor 2: Operational Status */}
            <div className="space-y-1 md:border-l border-white/10 md:pl-6">
              <div className="text-[10px] font-mono text-slate-400 tracking-wider">
                THERMAL INTEGRITY STATUS
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>OPTIMAL LOCK</span>
              </div>
              <div className="text-xs text-slate-300 font-mono truncate">
                Mode: {activeZone.airflow}
              </div>
            </div>

            {/* Action Quote Button */}
            <div className="flex flex-col sm:flex-row md:justify-end gap-3">
              <button
                onClick={() => onOpenQuote({ temperature: `${currentTemp}°C (${activeZone.name})` })}
                className="w-full md:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono text-xs font-bold tracking-wider shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>QUOTE AT {currentTemp}°C</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
