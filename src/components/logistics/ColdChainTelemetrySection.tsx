'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ThermometerSnowflake,
  Activity,
  ShieldCheck,
  Zap,
  AlertTriangle,
  Award,
  CheckCircle2,
  FileCheck,
  RefreshCw
} from 'lucide-react';

export const ColdChainTelemetrySection: React.FC = () => {
  const [activeTempMode, setActiveTempMode] = useState<'cryo' | 'chilled' | 'ambient'>('chilled');

  return (
    <section id="cold-chain" className="py-24 bg-[#060911] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ThermometerSnowflake className="w-3.5 h-3.5" />
            <span>GDP-CERTIFIED BIO-PHARMA & CHILLED LOGISTICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Active Thermal Integrity From{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              -80°C Cryogenic to +25°C
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            Protecting life-saving oncology vaccines, biological serums, and high-value gourmet produce with redundant Thermo King cooling systems and 24/7 continuous IoT temperature telemetry.
          </p>
        </div>

        {/* Cold-Chain 3 Temperature Zone Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Zone 1: Cryogenic & Frozen */}
          <button
            onClick={() => setActiveTempMode('cryo')}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeTempMode === 'cryo'
                ? 'bg-gradient-to-b from-blue-950/80 to-[#0A0E1A] border-blue-400 shadow-xl shadow-blue-950/60 ring-2 ring-blue-500/20'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-blue-400">ZONE A: DEEP CRYOGENIC</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                -80°C to -20°C
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Liquid Nitrogen & Dry Ice Shippers</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated VIP cryogenic packaging for cell therapy, mRNA vaccines, and frozen plasma with 120-hour thermal holdover times.
            </p>
          </button>

          {/* Zone 2: Chilled BioPharma (+2°C to +8°C) */}
          <button
            onClick={() => setActiveTempMode('chilled')}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeTempMode === 'chilled'
                ? 'bg-gradient-to-b from-cyan-950/80 to-[#0A0E1A] border-cyan-400 shadow-xl shadow-cyan-950/60 ring-2 ring-cyan-500/20'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400">ZONE B: REFRIGERATED PHARMA</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                +2°C to +8°C
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Insulin & Biological Serums</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Active refrigerated van fleet with dual compressors and real-time alarms on ±0.5°C threshold deviation between Dubai and Abu Dhabi hospitals.
            </p>
          </button>

          {/* Zone 3: Controlled Ambient (+15°C to +25°C) */}
          <button
            onClick={() => setActiveTempMode('ambient')}
            className={`p-6 rounded-2xl border text-left transition-all ${
              activeTempMode === 'ambient'
                ? 'bg-gradient-to-b from-emerald-950/80 to-[#0A0E1A] border-emerald-400 shadow-xl shadow-emerald-950/60 ring-2 ring-emerald-500/20'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400">ZONE C: CONTROLLED AMBIENT</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                +15°C to +25°C
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Luxury Fragrances & Tablets</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Guarantees zero heat-stress degradation for luxury perfumes, cosmetics, and dry pharmaceuticals during extreme UAE summer temperatures (+48°C).
            </p>
          </button>

        </div>

        {/* Live Cold-Chain Telemetry Dashboard */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  ACTIVE SENSOR REEFER REE-094 • DUBAI HEALTHCARE CITY ROUTE
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Current Temperature:</span>
                  <span className="text-xl font-black text-emerald-400 font-mono">+3.8°C (Target: +4.0°C)</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Relative Humidity:</span>
                  <span className="text-lg font-bold text-cyan-300 font-mono">48.2% RH (Nominal)</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Door Sensor Status:</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                    SEALED & LOCKED
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs text-slate-400">Backup Compressor:</span>
                  <span className="text-xs font-bold text-white font-mono">STANDBY 100% READY</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-sm font-mono font-bold text-slate-300 uppercase">
                GDP BioPharma Verification Badges:
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white">WHO GDP Compliant</div>
                    <div className="text-[10px] text-slate-400">Good Distribution Practice</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white">MoHAP Approved</div>
                    <div className="text-[10px] text-slate-400">UAE Ministry of Health</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white">IATA CEIV Pharma</div>
                    <div className="text-[10px] text-slate-400">Airside Cold Chain Pass</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Activity className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white">Automated PDF Logs</div>
                    <div className="text-[10px] text-slate-400">Tamper-Proof Audit Trail</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
