'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  ThermometerSnowflake, 
  Radio, 
  ArrowRight, 
  FileSpreadsheet, 
  CheckCircle2, 
  Navigation, 
  Gauge 
} from 'lucide-react';
import { useReeferTheme } from './ReeferThemeContext';

interface ReeferHeroProps {
  onOpenQuote: (defaultValues?: Record<string, string>) => void;
}

export default function ReeferHero({ onOpenQuote }: ReeferHeroProps) {
  const { isDark } = useReeferTheme();

  return (
    <section id="hero" className={`relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#0B0F17]' : 'bg-white'
    }`}>
      {/* Background Graphic: Realistic Truck Image Naturally Integrated */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5">
          <Image
            src="/images/reefer/hero-truck.jpg"
            alt="Dubai to GCC 25-Ton Reefer Transport Truck on UAE Highway"
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center ${isDark ? 'opacity-40 contrast-125' : 'opacity-85 contrast-[1.02]'}`}
          />
          {/* Subtle Linear Fade Masking */}
          <div className={`absolute inset-0 bg-gradient-to-r ${
            isDark 
              ? 'from-[#0B0F17] via-[#0B0F17]/90 to-transparent lg:via-[#0B0F17]/60' 
              : 'from-white via-white/80 to-transparent lg:via-white/40'
          }`} />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            isDark ? 'from-[#0B0F17] via-transparent to-[#0B0F17]/60' : 'from-white via-transparent to-white/40'
          }`} />
        </div>
        
        {/* Subtle grid texture */}
        <div className={`absolute inset-0 pointer-events-none [background-size:24px_24px] ${
          isDark 
            ? 'bg-[radial-gradient(#ffffff0a_1px,transparent_1px)]' 
            : 'bg-[radial-gradient(#00000008_1px,transparent_1px)]'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning, Headline, Value Prop & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Live Operational Telemetry Badge */}
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border shadow-sm text-sm font-mono backdrop-blur-md ${
              isDark ? 'bg-slate-900/90 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-[#374151]'
            }`}>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-amber-500 font-bold uppercase tracking-wider">GCC Cold Corridor</span>
              <span className="text-slate-400">|</span>
              <span className={`font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>20 Dedicated Trailers</span>
              <span className="text-slate-400">|</span>
              <span className="font-semibold hidden sm:inline text-slate-400">Daily Border Dispatches</span>
            </div>

            {/* Primary Headline & Master Value Proposition */}
            <div className="space-y-3">
              <div className="inline-block text-amber-500 font-black tracking-widest text-xl sm:text-2xl uppercase">
                DUBAI TO GCC 🚛
              </div>
              <h1 className={`text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] ${
                isDark ? 'text-white' : 'text-[#111111]'
              }`}>
                25-Ton Reefer Transport. <br />
                <span>Dubai to GCC.</span>{' '}
                <span className="text-sky-500">Fully Tracked.</span>{' '}
                <span className="text-amber-500">Border Ready.</span>
              </h1>
            </div>

            {/* Master Supporting Text */}
            <p className={`text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl border-l-4 border-amber-500 pl-5 rounded-r-2xl py-3 border-y border-r shadow-xs ${
              isDark ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-50/95 border-slate-200 text-[#374151]'
            }`}>
              Reliable temperature-controlled road transport from{' '}
              <strong className={isDark ? 'text-white font-bold' : 'text-[#111111] font-bold'}>Al Aweer / JAFZA</strong> to major GCC and regional destinations — built for chilled, frozen and temperature-sensitive cargo.
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>GET A TRANSPORT QUOTE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#routes"
                className={`inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl font-bold text-sm sm:text-base border-2 shadow-sm transition-all ${
                  isDark ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-700' : 'bg-white hover:bg-slate-50 text-[#111111] border-slate-300'
                }`}
              >
                <Navigation className="w-4 h-4 text-sky-500" />
                <span>VIEW OUR GCC ROUTES</span>
              </a>
            </div>

            {/* Fast Operational Attributes */}
            <div className={`pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t text-xs sm:text-sm font-mono ${
              isDark ? 'border-slate-800 text-slate-300' : 'border-slate-200 text-[#374151]'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className={isDark ? 'text-white font-bold' : 'text-[#111111] font-bold'}>Al Aweer & JAFZA Hubs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span className={isDark ? 'text-white font-bold' : 'text-[#111111] font-bold'}>-18°C → +4°C Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span className={isDark ? 'text-white font-bold' : 'text-[#111111] font-bold'}>All GCC Borders Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Logistics Telemetry HUD Box */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-3xl border shadow-2xl p-6 sm:p-7 space-y-6 ${
              isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-[#111111]'
            }`}>
              
              {/* Header: Live Unit Telemetry Simulation */}
              <div className={`flex items-center justify-between border-b pb-4 ${
                isDark ? 'border-slate-800' : 'border-slate-100'
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase">
                    ACTIVE SATELLITE TELEMETRY
                  </span>
                </div>
                <span className={`font-mono text-xs px-3 py-1 rounded-md border font-bold ${
                  isDark ? 'bg-slate-800 text-sky-400 border-slate-700' : 'bg-slate-100 text-[#0369A1] border-slate-200'
                }`}>
                  CARRIER SENSOR
                </span>
              </div>

              {/* Truck Unit Live Stats */}
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${
                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-slate-400 uppercase font-mono font-bold">Consignment Unit</span>
                  <span className="text-xs sm:text-sm font-mono font-black text-amber-500">TRUCK #DXB-RF-01</span>
                </div>

                <div className="grid grid-cols-2 gap-3.5 pt-1">
                  <div className={`p-3.5 sm:p-4 rounded-xl border shadow-2xs ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'
                  }`}>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono font-bold">CARGO TEMP</div>
                    <div className="text-xl sm:text-3xl font-mono font-black text-sky-500 flex items-center gap-1.5 sm:gap-2 mt-1">
                      <ThermometerSnowflake className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
                      <span>-18.4°C</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-emerald-500 font-mono font-bold mt-1.5">● SETPOINT OPTIMAL</div>
                  </div>

                  <div className={`p-3.5 sm:p-4 rounded-xl border shadow-2xs ${
                    isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-white border-slate-200'
                  }`}>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono font-bold">PAYLOAD CAPACITY</div>
                    <div className="text-xl sm:text-3xl font-mono font-black flex items-center gap-1.5 sm:gap-2 mt-1">
                      <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                      <span>25.0 TON</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-1.5 font-bold">15M REEFER TRAILER</div>
                  </div>
                </div>

                {/* Progress bar simulation from Dubai to Riyadh */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono">
                    <span className="text-slate-400 font-bold">ORIGIN: Dubai JAFZA</span>
                    <span className="text-amber-500 font-black">AL GHUWAIFAT BORDER</span>
                    <span className="text-slate-400 font-bold">DEST: Riyadh</span>
                  </div>
                  <div className={`w-full h-2.5 rounded-full overflow-hidden relative ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}>
                    <div className="bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500 h-full w-[62%] rounded-full relative">
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white animate-pulse" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400 pt-0.5 font-semibold">
                    <span>GPS FIX: 24.1302° N, 51.6148° E</span>
                    <span className="text-sky-400 font-bold">EST. CLEARANCE: 38 MIN</span>
                  </div>
                </div>
              </div>

              {/* Fast Spec Points */}
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-mono">
                <div className={`flex items-center gap-2.5 p-3 rounded-xl border font-bold ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>Saudi Transit Visas</span>
                </div>
                <div className={`flex items-center gap-2.5 p-3 rounded-xl border font-bold ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" />
                  <span>24/7 Datalogger</span>
                </div>
              </div>

              {/* Interactive Quick Quote Trigger */}
              <button
                onClick={() => onOpenQuote({ route: 'saudi-arabia', cargoType: 'frozen-food' })}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-colors shadow-sm cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>DISPATCH INSTANT RATE SPEC SHEET</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
