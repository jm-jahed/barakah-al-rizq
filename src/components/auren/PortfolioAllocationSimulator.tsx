'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Lock,
  Layers,
  Award
} from 'lucide-react';

interface PortfolioAllocationSimulatorProps {
  onOpenConsultation?: (defaultMandate?: string) => void;
}

export const PortfolioAllocationSimulator: React.FC<PortfolioAllocationSimulatorProps> = ({
  onOpenConsultation
}) => {
  const [investableCapital, setInvestableCapital] = useState<number>(10000000);
  const [riskProfile, setRiskProfile] = useState<'preservation' | 'balanced' | 'alpha'>('balanced');
  const [timeHorizonYears, setTimeHorizonYears] = useState<number>(10);

  // Asset profiles and expected annualized net returns
  const profileDetails = useMemo(() => {
    switch (riskProfile) {
      case 'preservation':
        return {
          label: 'Sovereign Capital Preservation',
          annualReturn: 0.058, // 5.8%
          dividendYield: 0.048, // 4.8%
          volatility: 'Low (2.4% Max Drawdown)',
          allocations: [
            { name: 'Sovereign & Corporate Sukuk', pct: 45, color: 'bg-emerald-400' },
            { name: 'Senior Secured Private Debt', pct: 20, color: 'bg-teal-400' },
            { name: 'Prime Real Estate SPVs', pct: 15, color: 'bg-[#D4AF37]' },
            { name: 'Physical Gold Bullion (DMCC)', pct: 10, color: 'bg-amber-400' },
            { name: 'Institutional Cash Treasury', pct: 10, color: 'bg-gray-400' },
          ]
        };
      case 'alpha':
        return {
          label: 'Opportunistic Private Alpha',
          annualReturn: 0.142, // 14.2%
          dividendYield: 0.038, // 3.8%
          volatility: 'High (Growth Multiples)',
          allocations: [
            { name: 'Direct Private Equity & Buyouts', pct: 35, color: 'bg-[#D4AF37]' },
            { name: 'Pre-IPO Secondary Equities', pct: 25, color: 'bg-amber-400' },
            { name: 'Special Situations & Private Debt', pct: 20, color: 'bg-teal-400' },
            { name: 'Global Equities (Megatrends)', pct: 15, color: 'bg-emerald-400' },
            { name: 'Cash Liquidity Reserve', pct: 5, color: 'bg-gray-400' },
          ]
        };
      case 'balanced':
      default:
        return {
          label: 'Balanced Generational Compounder',
          annualReturn: 0.094, // 9.4%
          dividendYield: 0.052, // 5.2%
          volatility: 'Moderate (Balanced Beta)',
          allocations: [
            { name: 'Global Equities & Dividend Aristocrats', pct: 30, color: 'bg-emerald-400' },
            { name: 'Senior Secured Private Credit', pct: 25, color: 'bg-teal-400' },
            { name: 'Direct Commercial Real Estate SPVs', pct: 20, color: 'bg-[#D4AF37]' },
            { name: 'GCC Sovereign Sukuk', pct: 15, color: 'bg-amber-400' },
            { name: 'Physical Gold & Cash Reserve', pct: 10, color: 'bg-gray-400' },
          ]
        };
    }
  }, [riskProfile]);

  // Projected Calculations
  const projections = useMemo(() => {
    const r = profileDetails.annualReturn;
    const annualCashYield = investableCapital * profileDetails.dividendYield;

    // Compound growth formula: P * (1 + r)^t
    const valueIn5Years = investableCapital * Math.pow(1 + r, 5);
    const valueIn10Years = investableCapital * Math.pow(1 + r, 10);
    const valueIn20Years = investableCapital * Math.pow(1 + r, 20);
    const selectedHorizonValue = investableCapital * Math.pow(1 + r, timeHorizonYears);

    const capitalGain = selectedHorizonValue - investableCapital;

    return {
      annualCashYield,
      valueIn5Years,
      valueIn10Years,
      valueIn20Years,
      selectedHorizonValue,
      capitalGain
    };
  }, [investableCapital, profileDetails, timeHorizonYears]);

  return (
    <section id="portfolio-simulator" className="py-24 relative bg-[#080C14] border-b border-[#D4AF37]/20 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Fiduciary Portfolio Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight leading-tight">
            Multi-Asset Allocation &amp; Compound Wealth Simulator
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3 font-normal leading-relaxed font-sans">
            Simulate institutional asset allocations, stress-test volatility drawdowns, and model generational compound wealth over 5, 10, and 20 years.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Inputs (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0B1019] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-7">
            
            {/* 01. Investable Capital Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  01 · Investable Private Portfolio Capital
                </label>
                <span className="text-sm sm:text-base font-extrabold font-mono text-[#D4AF37]">
                  AED {investableCapital.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={1000000}
                max={50000000}
                step={500000}
                value={investableCapital}
                onChange={(e) => setInvestableCapital(Number(e.target.value))}
                className="w-full h-2 bg-[#172130] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>AED 1M</span>
                <span>AED 25M</span>
                <span>AED 50M+</span>
              </div>
            </div>

            {/* 02. Risk Profile & Return Strategy */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3">
                02 · Fiduciary Mandate Strategy Profile
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'preservation', label: 'Preservation', rate: '5.8% Net', sub: 'Capital Security & Sukuk' },
                  { id: 'balanced', label: 'Balanced', rate: '9.4% Net', sub: 'Compound Generational Beta' },
                  { id: 'alpha', label: 'Private Alpha', rate: '14.2% Net', sub: 'Direct PE & Pre-IPO Deals' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRiskProfile(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      riskProfile === item.id
                        ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/50'
                        : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="block font-serif font-bold text-xs text-white">{item.label}</span>
                    <span className="text-xs font-mono font-extrabold text-[#D4AF37] block mt-0.5">{item.rate}</span>
                    <span className="text-[10px] text-gray-400 font-mono block mt-0.5">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 03. Target Investment Horizon Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  03 · Target Investment Horizon
                </label>
                <span className="text-sm font-extrabold font-mono text-white">
                  {timeHorizonYears} Years Compound Cycle
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={25}
                step={1}
                value={timeHorizonYears}
                onChange={(e) => setTimeHorizonYears(Number(e.target.value))}
                className="w-full h-2 bg-[#172130] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>3 Years</span>
                <span>10 Years (Generational)</span>
                <span>25 Years</span>
              </div>
            </div>

            {/* 04. Dynamic Asset Class Allocation Visualizer */}
            <div className="p-4.5 rounded-2xl bg-[#070B11] border border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-white uppercase tracking-wider">Tactical Asset Mix Breakdown</span>
                <span className="text-gray-400">{profileDetails.volatility}</span>
              </div>

              {/* Progress Bar Stack */}
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
                {profileDetails.allocations.map((alloc, i) => (
                  <div
                    key={i}
                    style={{ width: `${alloc.pct}%` }}
                    className={`${alloc.color} h-full transition-all duration-500`}
                    title={`${alloc.name}: ${alloc.pct}%`}
                  />
                ))}
              </div>

              {/* Legend Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {profileDetails.allocations.map((alloc, i) => (
                  <div key={i} className="flex items-center justify-between text-[11px] font-mono text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${alloc.color}`} />
                      <span className="truncate max-w-[180px]">{alloc.name}</span>
                    </div>
                    <span className="font-bold text-white">{alloc.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Summary Console (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F1622] to-[#080D14] rounded-3xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block">Target Forecast</span>
                <h3 className="text-lg font-serif font-extrabold text-white">Projected Terminal Value</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] font-mono text-[10px] font-bold">
                {timeHorizonYears} Yrs @ {(profileDetails.annualReturn * 100).toFixed(1)}%
              </span>
            </div>

            {/* Projected Terminal Value Display */}
            <div className="p-6 rounded-2xl bg-[#06090F] border border-white/10 text-center">
              <span className="text-xs font-mono text-gray-400 block mb-1">Projected Portfolio Terminal Value</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-[#D4AF37] font-mono my-2 tracking-tight">
                AED {Math.round(projections.selectedHorizonValue).toLocaleString()}
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono font-bold mt-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>+ AED {Math.round(projections.capitalGain).toLocaleString()} Capital Growth</span>
              </div>
            </div>

            {/* Multi-Period Milestone Matrix */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Annual Cash Dividend/Coupon Yield</span>
                <span className="text-emerald-400 font-extrabold">
                  AED {Math.round(projections.annualCashYield).toLocaleString()} / yr
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>5-Year Portfolio Value</span>
                <span className="text-white font-bold">
                  AED {Math.round(projections.valueIn5Years).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>10-Year Generational Milestone</span>
                <span className="text-white font-bold">
                  AED {Math.round(projections.valueIn10Years).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>20-Year Dynasty Legacy Projection</span>
                <span className="text-[#D4AF37] font-extrabold">
                  AED {Math.round(projections.valueIn20Years).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('Global Multi-Asset Discretionary Portfolio Mandate');
                }
              }}
              className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c5a059] text-black font-serif font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#D4AF37]/30 cursor-pointer"
            >
              <span>Commission Custom Investment Policy (IPS)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-gray-500 font-mono text-center leading-tight">
              ✦ Projections based on historical asset class risk premiums under DFSA fiduciary guidelines. Past performance does not guarantee future results.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
