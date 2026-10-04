'use client';

import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sliders, 
  Landmark, 
  TrendingUp, 
  FileText,
  Clock,
  Coins
} from 'lucide-react';

interface CorporateMandateCalculatorProps {
  onOpenMandateModal: (mandateContext?: string) => void;
}

const SECTORS = [
  { id: 'mna', name: 'Strategic M&A & Private Equity', minAED: 100, maxAED: 2500, defaultAED: 450, rate: 0.015, avgMonths: '3 – 5 Months' },
  { id: 'sovereign-ai', name: 'Sovereign AI & Digital Cloud Mesh', minAED: 50, maxAED: 1500, defaultAED: 280, rate: 0.018, avgMonths: '2 – 4 Months' },
  { id: 'energy-assets', name: 'Clean Energy & Real Asset Infrastructure', minAED: 150, maxAED: 5000, defaultAED: 850, rate: 0.012, avgMonths: '4 – 8 Months' },
  { id: 'trade-finance', name: 'Global Supply Chain & Maritime Trade', minAED: 80, maxAED: 3000, defaultAED: 520, rate: 0.014, avgMonths: '1 – 3 Months' }
];

const JURISDICTIONS = [
  { id: 'difc', name: 'Dubai International Financial Centre (DIFC)', standard: 'DFSA Common Law', tax: '0% Free Zone Tax' },
  { id: 'adgm', name: 'Abu Dhabi Global Market (ADGM)', standard: 'FSRA English Common Law', tax: '0% Free Zone Tax' },
  { id: 'uae-mainland', name: 'UAE Federal Mainland Entity', standard: 'DED Commercial Law', tax: '9% Corporate Tax' },
  { id: 'cross-border', name: 'Multi-Jurisdictional Cross-Border SPV', standard: 'DIFC / ADGM / UK Common Law', tax: 'Dual-Treaty Tax Structuring' }
];

export const CorporateMandateCalculator: React.FC<CorporateMandateCalculatorProps> = ({ onOpenMandateModal }) => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('mna');
  const [dealSizeMillionAED, setDealSizeMillionAED] = useState<number>(450);
  const [selectedJurisdictionId, setSelectedJurisdictionId] = useState<string>('difc');
  const [requireShariaCompliance, setRequireShariaCompliance] = useState<boolean>(true);
  const [includeSovereignSyndication, setIncludeSovereignSyndication] = useState<boolean>(true);
  const shouldReduceMotion = useReducedMotion();

  const currentSector = SECTORS.find((s) => s.id === selectedSectorId) || SECTORS[0];
  const currentJurisdiction = JURISDICTIONS.find((j) => j.id === selectedJurisdictionId) || JURISDICTIONS[0];

  // Calculations
  const totalDealAED = dealSizeMillionAED * 1_000_000;
  const advisoryRetainerAED = Math.round(totalDealAED * currentSector.rate);
  const projectedTargetIRR = requireShariaCompliance ? '21.8% – 24.2%' : '20.5% – 23.8%';
  const capitalReserveCoverage = `${Math.round(dealSizeMillionAED * 0.25)}M AED (25% Equity Anchor)`;

  return (
    <section id="mandate-calculator" className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      
      {/* Dynamic Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>CAPITAL STRUCTURING SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Interactive Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Mandate Estimator</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Model transaction timelines, jurisdiction structuring, Sharia compliance frameworks, and projected syndicate allocations in real time.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5 justify-end">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DIFC DFSA & ADGM Compliant
            </span>
            <span className="text-[10px] block mt-0.5 text-slate-500">Live 2026 Model Engine</span>
          </div>
        </div>

        {/* 2-Column Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Parameter Controls (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F141E] border border-white/10 space-y-7 shadow-2xl backdrop-blur-md">
            
            {/* 1. Sector Selection */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                1. Select Strategic Division & Sector:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SECTORS.map((sec) => {
                  const isSelected = sec.id === selectedSectorId;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => {
                        setSelectedSectorId(sec.id);
                        setDealSizeMillionAED(sec.defaultAED);
                      }}
                      className={`p-3.5 rounded-xl border text-left text-xs font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white font-bold shadow-md'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                      }`}
                    >
                      <div className="truncate font-sans font-bold text-sm text-white mb-0.5">{sec.name}</div>
                      <div className="text-[11px] text-amber-400/90 font-mono">Range: AED {sec.minAED}M – {sec.maxAED}M</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Deal Size Slider */}
            <div className="space-y-3 p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                  2. Projected Transaction Capital (AED):
                </label>
                <span className="text-lg sm:text-xl font-black font-mono text-amber-300">
                  AED {dealSizeMillionAED.toLocaleString()} Million
                </span>
              </div>

              <input
                type="range"
                min={currentSector.minAED}
                max={currentSector.maxAED}
                step={10}
                value={dealSizeMillionAED}
                onChange={(e) => setDealSizeMillionAED(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Min: AED {currentSector.minAED}M</span>
                <span>Target: AED {dealSizeMillionAED}M</span>
                <span>Max: AED {currentSector.maxAED}M</span>
              </div>
            </div>

            {/* 3. Jurisdiction Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                3. Primary Regulatory Jurisdiction:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {JURISDICTIONS.map((jur) => {
                  const isSelected = jur.id === selectedJurisdictionId;
                  return (
                    <button
                      key={jur.id}
                      type="button"
                      onClick={() => setSelectedJurisdictionId(jur.id)}
                      className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white font-bold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="font-bold text-white leading-tight">{jur.name}</div>
                      <div className="text-[10px] font-mono text-emerald-400 mt-1">{jur.standard} • {jur.tax}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Strategic Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setRequireShariaCompliance(!requireShariaCompliance)}
                className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all cursor-pointer ${
                  requireShariaCompliance
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300 font-bold'
                    : 'bg-white/[0.02] border-white/5 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${requireShariaCompliance ? 'text-emerald-400' : 'text-slate-600'}`} />
                  <span>Sharia-Compliant (Sukuk / Ijara)</span>
                </div>
                <span className="text-[10px]">{requireShariaCompliance ? 'Enabled' : 'Off'}</span>
              </button>

              <button
                type="button"
                onClick={() => setIncludeSovereignSyndication(!includeSovereignSyndication)}
                className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-all cursor-pointer ${
                  includeSovereignSyndication
                    ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 font-bold'
                    : 'bg-white/[0.02] border-white/5 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Landmark className={`w-4 h-4 ${includeSovereignSyndication ? 'text-amber-400' : 'text-slate-600'}`} />
                  <span>Sovereign Co-Syndication</span>
                </div>
                <span className="text-[10px]">{includeSovereignSyndication ? 'Targeted' : 'Standard'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dynamic Mandate Blueprint Output (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121722] via-[#0E131C] to-[#0A0D14] border border-amber-500/30 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-0.5">
                  SIMULATED TRANSACTION BLUEPRINT
                </span>
                <h3 className="text-xl font-black text-white">
                  Mandate Specification
                </h3>
              </div>
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-300">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            {/* Spec Breakdown Table */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Target Capital:</span>
                <span className="text-white font-bold text-sm">AED {dealSizeMillionAED.toLocaleString()}M</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Jurisdiction Framework:</span>
                <span className="text-emerald-300 font-bold truncate max-w-[200px]">{currentJurisdiction.standard}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Execution Velocity:</span>
                <span className="text-amber-300 font-bold">{currentSector.avgMonths}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Projected Target IRR:</span>
                <span className="text-emerald-400 font-bold">{projectedTargetIRR}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Anchor Equity Requirement:</span>
                <span className="text-slate-200">{capitalReserveCoverage}</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-400">Sharia / Sukuk Advisory:</span>
                <span className="text-amber-400 font-bold">{requireShariaCompliance ? 'Yes (Fatwa Board Certified)' : 'Standard Conventional'}</span>
              </div>
            </div>

            {/* Fiduciary Guarantee Box */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs text-slate-300 leading-relaxed font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                <span>Hermetic Non-Disclosure Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All submissions are encrypted and routed directly to the Executive Committee under mutual non-disclosure agreement (NDA) standards.
              </p>
            </div>

            {/* Direct RFP Dispatch CTA */}
            <button
              type="button"
              onClick={() => onOpenMandateModal(`Mandate Simulator: ${currentSector.name} (AED ${dealSizeMillionAED}M in ${currentJurisdiction.name})`)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Formalize Mandate Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
