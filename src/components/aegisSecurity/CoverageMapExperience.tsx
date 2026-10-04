'use client';

import React, { useState } from 'react';
import { MapPin, Radio, Shield, Activity, Clock, CheckCircle2, Navigation } from 'lucide-react';
import { AEGIS_REGIONS, RegionCoverage } from '@/data/aegisSecurityData';

export default function CoverageMapExperience() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('cov-dubai');

  const selectedRegion = AEGIS_REGIONS.find((r) => r.id === selectedRegionId) || AEGIS_REGIONS[0];

  return (
    <section id="coverage" className="py-24 bg-[#050811] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>SOVEREIGN UAE SECURITY NETWORK &bull; ALL 7 EMIRATES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Nationwide Coverage &amp; Rapid Response
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strategic command nodes, tactical 4x4 mobile patrol squadrons, and sub-10 minute emergency response capability covering every major commercial and sovereign hub.
          </p>
        </div>

        {/* Interactive Map Visualizer + Region Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Tactical Abstract Radar Map (7 Cols) */}
          <div className="lg:col-span-7 bg-[#080D18] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 relative shadow-2xl min-h-[420px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                TACTICAL UAE REGIONAL MATRIX
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                8 COMMAND NODES ACTIVE
              </span>
            </div>

            {/* Region Selector Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-auto">
              {AEGIS_REGIONS.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegionId(reg.id)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    selectedRegionId === reg.id
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-lg shadow-cyan-500/30 border-cyan-400 scale-105'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold font-mono">{reg.city}</span>
                    <span className={`w-2 h-2 rounded-full ${selectedRegionId === reg.id ? 'bg-slate-950' : 'bg-emerald-400 animate-pulse'}`} />
                  </div>
                  <span className={`text-[10px] block font-mono truncate ${selectedRegionId === reg.id ? 'text-slate-900' : 'text-slate-500'}`}>
                    {reg.rapidResponseTime.split(' ')[0]} {reg.rapidResponseTime.split(' ')[1]} {reg.rapidResponseTime.split(' ')[2]}
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Selected Node: <strong className="text-cyan-400">{selectedRegion.commandNode}</strong></span>
              <span className="text-emerald-400 font-bold">{selectedRegion.activeDeployments}</span>
            </div>
          </div>

          {/* Region Detailed Dossier Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#090E1A] to-[#04070D] border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">Operational Territory</span>
                <h3 className="text-2xl font-black text-white">{selectedRegion.city}</h3>
                <span className="text-xs font-mono text-cyan-400">{selectedRegion.emirate}</span>
              </div>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full text-[10px] font-mono font-bold">
                NODE LIVE
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-slate-500 text-[10px] uppercase block">Regional Command Base</span>
                <strong className="text-white block">{selectedRegion.commandNode}</strong>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase block">Rapid Response</span>
                  <strong className="text-cyan-400">{selectedRegion.rapidResponseTime}</strong>
                </div>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 text-[10px] uppercase block">Active Sites</span>
                  <strong className="text-emerald-400">{selectedRegion.activeDeployments}</strong>
                </div>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <span className="text-slate-500 text-[10px] uppercase block">Fleet &amp; Patrol Structure</span>
                <strong className="text-slate-200 block">{selectedRegion.patrolCoverage}</strong>
              </div>
            </div>

            {/* Key Sectors List */}
            <div className="space-y-2 pt-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                Covered Commercial &amp; Sovereign Sectors
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedRegion.sectorsCovered.map((sec, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-[11px] font-mono text-slate-300"
                  >
                    {sec}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 border-t border-slate-800">
              <a
                href="#assessment"
                className="w-full py-3 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold text-xs font-mono uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2"
              >
                <span>Deploy Guards in {selectedRegion.city}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
