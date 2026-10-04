'use strict';
import React, { useState, useMemo } from 'react';
import { TrendingUp, Crown, Zap, ShieldCheck, ArrowRight, BarChart3, CheckCircle2, DollarSign } from 'lucide-react';

interface MarketingRoiCalculatorProps {
  onGenerateProposal: (forecast: {
    monthlyAdSpendAED: number;
    industry: string;
    objective: string;
    projectedLeads: number;
    projectedRevenueAED: number;
    blendedRoas: number;
  }) => void;
}

const INDUSTRIES = [
  { id: 'real-estate', name: 'Dubai Luxury Real Estate & Off-Plan', multiplier: 7.2, baseCpl: 110 },
  { id: 'fintech', name: 'DIFC Wealth Management & Fintech', multiplier: 6.5, baseCpl: 140 },
  { id: 'supercars', name: 'Supercar Rental & Exotic Automotive', multiplier: 5.8, baseCpl: 95 },
  { id: 'jewelry', name: 'Haute Horlogerie & High Jewelry', multiplier: 8.4, baseCpl: 160 },
  { id: 'hospitality', name: 'Luxury Hospitality & Fine Dining', multiplier: 5.2, baseCpl: 75 },
  { id: 'healthcare', name: 'Aesthetic Medical & Longevity Clinics', multiplier: 6.8, baseCpl: 125 }
];

const OBJECTIVES = [
  'High-Net-Worth Investor Lead Acquisition',
  'High-Ticket Luxury E-Commerce Scaling',
  'B2B Enterprise C-Suite Account Conquest',
  'Sovereign GCC Market Launch & Dominance'
];

export const MarketingRoiCalculator: React.FC<MarketingRoiCalculatorProps> = ({ onGenerateProposal }) => {
  const [adSpendAED, setAdSpendAED] = useState<number>(50000);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('real-estate');
  const [selectedObjective, setSelectedObjective] = useState<string>(OBJECTIVES[0]);

  const industry = INDUSTRIES.find((i) => i.id === selectedIndustryId) || INDUSTRIES[0];

  const calculations = useMemo(() => {
    const estimatedLeads = Math.round(adSpendAED / industry.baseCpl);
    const blendedRoas = industry.multiplier;
    const projectedRevenue = Math.round(adSpendAED * blendedRoas);
    const estimatedDeals = Math.max(1, Math.round(estimatedLeads * 0.08));

    return {
      estimatedLeads,
      blendedRoas,
      projectedRevenue,
      estimatedDeals
    };
  }, [adSpendAED, industry]);

  const handleTriggerProposal = () => {
    onGenerateProposal({
      monthlyAdSpendAED: adSpendAED,
      industry: industry.name,
      objective: selectedObjective,
      projectedLeads: calculations.estimatedLeads,
      projectedRevenueAED: calculations.projectedRevenue,
      blendedRoas: calculations.blendedRoas
    });
  };

  return (
    <section id="roi-simulator" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Algorithmic Growth Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Interactive Dubai <span className="italic font-normal text-amber-400">ROI Forecast Engine</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Simulate your expected return on ad spend (ROAS), high-net-worth lead volume, and gross deal pipeline based on real UAE market benchmark telemetry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Monthly Budget Slider */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-semibold text-amber-400 flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  1. Target Monthly Ad Spend (AED)
                </span>
                <span className="text-lg font-serif font-bold text-white px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg">
                  AED {adSpendAED.toLocaleString()} / mo
                </span>
              </div>

              <input
                type="range"
                min="15000"
                max="350000"
                step="5000"
                value={adSpendAED}
                onChange={(e) => setAdSpendAED(Number(e.target.value))}
                aria-label="Target monthly ad spend in AED"
                className="w-full accent-amber-500 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 mt-2">
                <span>AED 15,000 (Growth Sprint)</span>
                <span>AED 150,000 (Market Scale)</span>
                <span>AED 350,000+ (GCC Dominance)</span>
              </div>
            </div>

            {/* 2. Industry Sector */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-amber-400 block mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                2. Select Industry Sector in UAE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INDUSTRIES.map((ind) => {
                  const isSelected = selectedIndustryId === ind.id;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustryId(ind.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{ind.name}</span>
                      <span className="text-[10px] font-mono text-amber-400">{ind.multiplier}x ROAS</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Objective */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-amber-400 block mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                3. Primary Commercial Objective
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OBJECTIVES.map((obj, idx) => {
                  const isSelected = selectedObjective === obj;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedObjective(obj)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white font-medium'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {obj}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Summary Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-neutral-900/95 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                    Telemetry Projection
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white">
                    Estimated 90-Day Output
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                  UAE Benchmark
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="py-6 space-y-5 border-b border-neutral-800">
                {/* Gross Pipeline Revenue */}
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Projected Gross Pipeline Revenue
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-100">
                      AED {calculations.projectedRevenue.toLocaleString()}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold font-mono">
                      ({calculations.blendedRoas}x ROAS)
                    </span>
                  </div>
                </div>

                {/* Sub Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-[10px] uppercase text-neutral-500 block">Monthly HNW Leads</span>
                    <span className="text-xl font-serif font-bold text-white">
                      ~{calculations.estimatedLeads} Leads
                    </span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">
                      Avg CPL: AED {industry.baseCpl}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-[10px] uppercase text-neutral-500 block">Estimated Closed Deals</span>
                    <span className="text-xl font-serif font-bold text-amber-400">
                      ~{calculations.estimatedDeals} Deals / mo
                    </span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">
                      8% Conv. Benchmark
                    </span>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="py-4 space-y-2 text-xs text-neutral-400 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Transparent ad spend directly into client Meta/Google accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real-time Looker Studio live financial telemetry dashboard</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  onClick={handleTriggerProposal}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-4 h-4 fill-neutral-950" />
                  <span>Generate Customized Growth Blueprint</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
