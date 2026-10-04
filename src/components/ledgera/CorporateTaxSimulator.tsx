'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Building2, 
  ShieldCheck, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  FileSpreadsheet, 
  Sparkles,
  TrendingDown,
  Info
} from 'lucide-react';

interface CorporateTaxSimulatorProps {
  onOpenConsultation?: (defaultService?: string) => void;
}

export const CorporateTaxSimulator: React.FC<CorporateTaxSimulatorProps> = ({
  onOpenConsultation
}) => {
  // Simulator State
  const [entityType, setEntityType] = useState<'mainland' | 'qfzp' | 'non_qfzp'>('mainland');
  const [annualRevenue, setAnnualRevenue] = useState<number>(4500000);
  const [netProfit, setNetProfit] = useState<number>(1200000);
  const [entertainmentExpenses, setEntertainmentExpenses] = useState<number>(60000);
  const [finesAndPenalties, setFinesAndPenalties] = useState<number>(15000);
  const [directorSalary, setDirectorSalary] = useState<number>(240000);
  const [hasSmallBusinessRelief, setHasSmallBusinessRelief] = useState<boolean>(false);

  // Auto-detect Small Business Relief eligibility (Revenue <= 3,000,000 AED)
  const isSbrEligible = annualRevenue <= 3000000;

  // Computation Logic
  const results = useMemo(() => {
    // Disallowed additions: 50% entertainment, 100% fines
    const disallowedEntertainment = entertainmentExpenses * 0.5;
    const totalDisallowedAdditions = disallowedEntertainment + finesAndPenalties;

    // Adjusted Taxable Net Income
    const adjustedTaxableIncome = Math.max(0, netProfit + totalDisallowedAdditions);

    let finalTaxPayable = 0;
    let taxCategory = 'Standard 9% Taxable';
    let savingsVsStandard = 0;

    // Standard 9% benchmark for comparison
    const standardExemptAmount = Math.min(375000, adjustedTaxableIncome);
    const standardTaxableAboveThreshold = Math.max(0, adjustedTaxableIncome - 375000);
    const standardBenchmarkTax = standardTaxableAboveThreshold * 0.09;

    if (isSbrEligible && hasSmallBusinessRelief) {
      finalTaxPayable = 0;
      taxCategory = '0% Small Business Relief (SBR)';
      savingsVsStandard = standardBenchmarkTax;
    } else if (entityType === 'qfzp') {
      finalTaxPayable = 0;
      taxCategory = '0% Qualifying Free Zone Person (QFZP)';
      savingsVsStandard = standardBenchmarkTax;
    } else {
      // Standard UAE Corporate Tax Calculation:
      // First AED 375,000 @ 0%
      // Remainder @ 9%
      finalTaxPayable = standardBenchmarkTax;
      taxCategory = 'Standard Mainland 9% Corporate Tax';
      savingsVsStandard = 0;
    }

    const effectiveTaxRate = netProfit > 0 ? ((finalTaxPayable / netProfit) * 100).toFixed(2) : '0.00';

    return {
      adjustedTaxableIncome,
      standardExemptAmount,
      standardTaxableAboveThreshold,
      finalTaxPayable,
      taxCategory,
      effectiveTaxRate,
      savingsVsStandard,
      totalDisallowedAdditions
    };
  }, [
    entityType,
    annualRevenue,
    netProfit,
    entertainmentExpenses,
    finesAndPenalties,
    isSbrEligible,
    hasSmallBusinessRelief
  ]);

  return (
    <section id="tax-simulator" className="py-24 relative bg-[#070A10] border-b border-emerald-500/15 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive UAE FTA Tax Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            UAE Corporate Tax (9%) &amp; Small Business Relief Simulator
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
            Estimate your exact UAE corporate tax liability under Federal Decree-Law No. 47 of 2022, test Free Zone 0% QFZP qualifications, and identify legal tax relief deductions.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-[#0D131E] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl space-y-7">
            
            {/* 01. Entity Jurisdiction Switcher */}
            <div>
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-3">
                01 · Select Entity Classification &amp; Jurisdiction
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'mainland', label: 'Mainland LLC', sub: 'Standard 9% Taxable' },
                  { id: 'qfzp', label: 'Free Zone (QFZP)', sub: '0% Qualifying Income' },
                  { id: 'non_qfzp', label: 'Free Zone (Non-Qual)', sub: 'Standard 9% Taxable' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setEntityType(item.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      entityType === item.id
                        ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-md shadow-emerald-500/10 ring-1 ring-emerald-500/50'
                        : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="block font-mono font-bold text-xs text-white">{item.label}</span>
                    <span className="text-[10px] text-gray-400 font-mono block mt-0.5">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 02. Annual Revenue Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  02 · Annual Gross Turnover (Revenue)
                </label>
                <span className="text-sm font-extrabold font-mono text-emerald-400">
                  AED {annualRevenue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={200000}
                max={25000000}
                step={100000}
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>AED 200k</span>
                <span className={isSbrEligible ? 'text-emerald-400 font-bold' : ''}>AED 3M (SBR Cap)</span>
                <span>AED 25M+</span>
              </div>

              {/* SBR Banner if revenue <= 3M */}
              {isSbrEligible && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Eligible for 0% Small Business Relief (Revenue ≤ AED 3M)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHasSmallBusinessRelief(!hasSmallBusinessRelief)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all cursor-pointer ${
                      hasSmallBusinessRelief
                        ? 'bg-emerald-500 text-black'
                        : 'bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    {hasSmallBusinessRelief ? 'SBR Active ✓' : 'Apply SBR'}
                  </button>
                </div>
              )}
            </div>

            {/* 03. Net Accounting Profit Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                  03 · Net Accounting Profit (P&amp;L Bottom Line)
                </label>
                <span className="text-sm font-extrabold font-mono text-white">
                  AED {netProfit.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={8000000}
                step={50000}
                value={netProfit}
                onChange={(e) => setNetProfit(Number(e.target.value))}
                className="w-full h-2 bg-[#1A2333] rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                <span>AED 50k</span>
                <span className="text-amber-400 font-bold">AED 375k (0% Bracket)</span>
                <span>AED 8M+</span>
              </div>
            </div>

            {/* 04. Statutory Adjustments & Disallowed Deductions */}
            <div className="p-4 rounded-2xl bg-[#111927] border border-white/5 space-y-4">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                <span>Statutory Adjustments (Article 28 &amp; 33 of CT Law)</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Client Entertainment Exp (50% Disallowed)
                  </label>
                  <input
                    type="number"
                    value={entertainmentExpenses}
                    onChange={(e) => setEntertainmentExpenses(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#0C121D] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                  />
                  <span className="text-[10px] text-gray-500 font-mono block mt-0.5">
                    Adds +AED {(entertainmentExpenses * 0.5).toLocaleString()} to taxable base
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-gray-400 mb-1">
                    Fines, Penalties &amp; Bribes (100% Disallowed)
                  </label>
                  <input
                    type="number"
                    value={finesAndPenalties}
                    onChange={(e) => setFinesAndPenalties(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#0C121D] border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-emerald-500"
                  />
                  <span className="text-[10px] text-gray-500 font-mono block mt-0.5">
                    Adds +AED {finesAndPenalties.toLocaleString()} to taxable base
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Tax Result Console (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111927] to-[#0A0F18] rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl space-y-6 relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">Estimated Liability</span>
                <h3 className="text-lg font-extrabold text-white font-mono">Tax Assessment Output</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold">
                FTA FY2024–2026
              </span>
            </div>

            {/* Big Payable Output Card */}
            <div className="p-6 rounded-2xl bg-[#090E17] border border-white/10 text-center relative overflow-hidden">
              <span className="text-xs font-mono text-gray-400 block mb-1">Estimated UAE Corporate Tax Payable</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-emerald-400 font-mono my-2 tracking-tight">
                AED {results.finalTaxPayable.toLocaleString()}
              </div>
              
              {/* Category Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-[11px] font-mono font-bold mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{results.taxCategory}</span>
              </div>
            </div>

            {/* Calculation Breakdown Matrix */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Net Accounting Profit</span>
                <span className="text-white font-bold">AED {netProfit.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Statutory Disallowed Additions</span>
                <span className="text-amber-400 font-bold">+ AED {results.totalDisallowedAdditions.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Adjusted Taxable Net Income</span>
                <span className="text-white font-extrabold">AED {results.adjustedTaxableIncome.toLocaleString()}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Statutory 0% First Bracket</span>
                <span className="text-emerald-400 font-bold">AED {results.standardExemptAmount.toLocaleString()} (0%)</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5 text-gray-400">
                <span>Taxable Amount @ 9%</span>
                <span className="text-white font-bold">
                  AED {results.standardTaxableAboveThreshold.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between py-2 pt-3 text-sm">
                <span className="text-gray-300 font-bold">Effective Tax Rate</span>
                <span className="text-emerald-400 font-extrabold">{results.effectiveTaxRate}%</span>
              </div>
            </div>

            {/* Tax Savings Telemetry if applicable */}
            {results.savingsVsStandard > 0 && (
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-emerald-300">
                  <TrendingDown className="w-4 h-4 text-emerald-400" />
                  <span>Legitimate Tax Optimized</span>
                </div>
                <span className="font-extrabold text-emerald-400 text-sm">
                  AED {results.savingsVsStandard.toLocaleString()}
                </span>
              </div>
            )}

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('Corporate Tax Advisory (9%)');
                }
              }}
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/30 cursor-pointer"
            >
              <span>Retain FTA Tax Audit &amp; Filing Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-gray-500 font-mono text-center leading-tight">
              ✦ Computations based on Federal Decree-Law No. 47 of 2022. Consult our licensed FTA tax agents for formal tax position opinions.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
