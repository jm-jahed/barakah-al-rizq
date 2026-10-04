'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  ShieldCheck,
  Navigation,
  Thermometer,
  ArrowRight,
  Activity,
  MapPin,
  Clock,
  Compass,
  CheckCircle2,
  Sparkles,
  Zap,
  Layers
} from 'lucide-react';
import { REEFER_COMPANY_INFO, SAMPLE_TELEMATICS_FEED } from '@/data/reeferLogisticsData';

interface ReeferHeroProps {
  onOpenQuote: (prefill?: any) => void;
}

export function ReeferHero({ onOpenQuote }: ReeferHeroProps) {
  const [liveTemp, setLiveTemp] = useState(-18.2);
  const [activeTab, setActiveTab] = useState<'telemetry' | 'route' | 'spec'>('telemetry');

  // Subtle live temperature pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTemp((prev) => {
        const delta = (Math.random() - 0.5) * 0.2;
        return Number((prev + delta).toFixed(1));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#070b14] overflow-hidden pt-12 pb-20 border-b border-white/[0.08]">
      {/* Background Grid & Atmospheric Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      
      {/* Subtle Highway Road perspective grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)'
        }}
      />

      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-mono tracking-wider shadow-inner">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>UAE B2B LOGISTICS INFRASTRUCTURE</span>
              <span className="text-white/30">•</span>
              <span className="text-slate-300 font-sans">AL AWEER & JAFZA DOCKS</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase font-mono leading-[1.08]">
              DUBAI TO GCC <span className="inline-block hover:scale-110 transition-transform">🚛</span>
            </h1>

            {/* Main Value Proposition */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300 font-sans leading-tight">
              25-Ton Reefer Transport.<br className="hidden sm:inline" />
              Dubai to GCC. Fully Tracked. Border Ready.
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Reliable temperature-controlled road transport from{' '}
              <strong className="text-white font-medium">Al Aweer / JAFZA</strong> to major GCC and regional destinations — built for{' '}
              <span className="text-sky-300 font-medium">chilled (+4°C)</span>,{' '}
              <span className="text-sky-400 font-medium">frozen (-18°C)</span>, and temperature-sensitive cargo.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-400 hover:via-sky-500 hover:to-blue-600 text-white font-bold text-base tracking-wide shadow-xl shadow-sky-600/30 hover:shadow-sky-500/50 transition-all active:scale-95"
              >
                <span>GET A TRANSPORT QUOTE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#routes')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/[0.08] hover:border-white/30 text-slate-200 font-semibold text-sm transition-all"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>VIEW OUR GCC ROUTES</span>
              </button>
            </div>

            {/* Quick Operational Micro-Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 max-w-xl text-left">
              <div className="space-y-0.5">
                <div className="text-sky-400 font-mono text-sm font-bold">20 TRAILERS</div>
                <div className="text-[11px] text-slate-400">15m Dedicated Fleet</div>
              </div>
              <div className="space-y-0.5 border-l border-white/10 pl-3">
                <div className="text-white font-mono text-sm font-bold">-18°C ↔ +4°C</div>
                <div className="text-[11px] text-slate-400">Continuous Cold-Chain</div>
              </div>
              <div className="space-y-0.5 border-l border-white/10 pl-3">
                <div className="text-amber-400 font-mono text-sm font-bold">6 DESTINATIONS</div>
                <div className="text-[11px] text-slate-400">Direct GCC Crossings</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telematics & Highway Truck HUD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-[#111927] to-[#0a0f1d] border border-white/15 p-5 sm:p-6 shadow-2xl shadow-black/80 backdrop-blur-xl">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-xs font-mono font-bold text-white tracking-wide">
                      FLEET TELEMETRY CONSOLE
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      UNIT #{SAMPLE_TELEMATICS_FEED.truckId} • HIGHWAY LINK ACTIVE
                    </div>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded bg-sky-500/10 border border-sky-500/30 text-[11px] font-mono font-bold text-sky-400">
                  {SAMPLE_TELEMATICS_FEED.status}
                </div>
              </div>

              {/* Highway Radar Animation Graphic */}
              <div className="my-4 relative h-48 rounded-xl bg-[#060a14] border border-white/10 overflow-hidden flex flex-col justify-between p-4">
                {/* Background Route Vector Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
                  <path
                    d="M 20 160 Q 150 40 380 60"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <path
                    d="M 20 160 Q 150 40 380 60"
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                </svg>

                {/* Radar Grid Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-sky-500/10 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-sky-500/20 pointer-events-none" />

                {/* Top Overlay details */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <div className="flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded border border-white/10">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    <span>DUBAI ⇄ RIYADH CORRIDOR</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded border border-white/10 text-amber-400">
                    <Clock className="w-3 h-3" />
                    <span>ETA: 08:42 AM</span>
                  </div>
                </div>

                {/* Center Truck Pulse Marker */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/60 flex items-center justify-center text-sky-300 shadow-lg shadow-sky-500/30">
                      <Truck className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>

                {/* Bottom Route Progress */}
                <div className="relative z-10 space-y-1.5">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>Origin: Al Aweer / JAFZA</span>
                    <span className="text-sky-300 font-bold">68% Transit Complete</span>
                    <span>Dest: Riyadh Central</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full w-[68%]" />
                  </div>
                </div>
              </div>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                {/* Metric 1: Live Core Temperature */}
                <div className="p-3 rounded-xl bg-black/40 border border-sky-500/20">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>CORE TEMP</span>
                    <Thermometer className="w-3 h-3 text-sky-400" />
                  </div>
                  <div className="text-lg font-bold font-mono text-sky-400 mt-1">
                    {liveTemp}°C
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>SETPOINT LOCK</span>
                  </div>
                </div>

                {/* Metric 2: Payload Rating */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>CAPACITY</span>
                    <Layers className="w-3 h-3 text-amber-400" />
                  </div>
                  <div className="text-lg font-bold font-mono text-white mt-1">
                    25 TON
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    15M Euro Reefer
                  </div>
                </div>

                {/* Metric 3: Border Transit Status */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>BORDER DOCS</span>
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="text-lg font-bold font-mono text-emerald-400 mt-1">
                    CLEARED
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono truncate">
                    Batha Pre-Filed
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Thermo King SLXi-400 Telemetry</span>
                <button
                  onClick={() => onOpenQuote({ route: 'route-ksa', destination: 'Saudi Arabia' })}
                  className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1"
                >
                  <span>Book This Capacity</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
