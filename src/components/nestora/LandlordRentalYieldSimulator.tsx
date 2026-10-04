'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Sparkles, 
  ArrowRight, 
  Percent, 
  Building, 
  ShieldCheck, 
  Palmtree, 
  HelpCircle,
  Coins,
  Check
} from 'lucide-react';

interface LandlordRentalYieldSimulatorProps {
  onOpenConsultation?: (mandateText?: string) => void;
}

export const LandlordRentalYieldSimulator: React.FC<LandlordRentalYieldSimulatorProps> = ({
  onOpenConsultation
}) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(2200000); // AED 2.2M
  const [grossAnnualRent, setGrossAnnualRent] = useState<number>(175000); // AED 175K
  const [propertySqft, setPropertySqft] = useState<number>(1250); // 1,250 sqft
  const [serviceChargePerSqft, setServiceChargePerSqft] = useState<number>(18); // AED 18/sqft
  const [managementTier, setManagementTier] = useState<'standard' | 'premium' | 'holiday'>('premium');
  const [leaseHorizon, setLeaseHorizon] = useState<number>(5); // 5 years

  // Calculations
  const metrics = useMemo(() => {
    const totalServiceCharges = propertySqft * serviceChargePerSqft;
    
    // Management fee percentage
    let mgmtRate = 0.05; // standard 5%
    if (managementTier === 'premium') mgmtRate = 0.07;
    if (managementTier === 'holiday') mgmtRate = 0.18;

    // Short-term Holiday Home yield multiplier (historically 25%-35% higher gross rent)
    const effectiveGrossRent = managementTier === 'holiday' 
      ? grossAnnualRent * 1.28 
      : grossAnnualRent;

    const managementFee = effectiveGrossRent * mgmtRate;
    const maintenanceReserve = propertyPrice * 0.0035; // 0.35% annual maintenance reserve

    const totalAnnualExpenses = totalServiceCharges + managementFee + maintenanceReserve;
    const netAnnualRent = Math.max(0, effectiveGrossRent - totalAnnualExpenses);

    const grossYield = ((effectiveGrossRent / propertyPrice) * 100);
    const netYield = ((netAnnualRent / propertyPrice) * 100);

    // 5-Year Capital Appreciation (assumed 5.5% annual average Dubai growth)
    const projectedCapitalValue = propertyPrice * Math.pow(1 + 0.055, leaseHorizon);
    const capitalAppreciationGain = projectedCapitalValue - propertyPrice;
    const cumulativeNetRent = netAnnualRent * leaseHorizon;
    const total5YearReturn = cumulativeNetRent + capitalAppreciationGain;
    const totalRoiPercentage = ((total5YearReturn / propertyPrice) * 100);

    return {
      effectiveGrossRent,
      totalServiceCharges,
      managementFee,
      maintenanceReserve,
      totalAnnualExpenses,
      netAnnualRent,
      grossYield: grossYield.toFixed(2),
      netYield: netYield.toFixed(2),
      cumulativeNetRent,
      capitalAppreciationGain,
      projectedCapitalValue,
      total5YearReturn,
      totalRoiPercentage: totalRoiPercentage.toFixed(1)
    };
  }, [propertyPrice, grossAnnualRent, propertySqft, serviceChargePerSqft, managementTier, leaseHorizon]);

  const handleAction = () => {
    if (onOpenConsultation) {
      onOpenConsultation(
        `Rental Yield Simulation: Property AED ${(propertyPrice / 1000000).toFixed(2)}M, Net Yield ${metrics.netYield}%, Net Annual AED ${Math.round(metrics.netAnnualRent).toLocaleString()} (${managementTier.toUpperCase()} Tier)`
      );
    } else {
      const el = document.getElementById('consultation-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rental-yield-simulator" className="py-24 bg-[#082023] relative border-b border-[#C5A059]/20 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#C5A059]/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#0C2D31]/40 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C2D31] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-xl">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL CASHFLOW & YIELD ENGINE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-[#F4EFE6] tracking-tight leading-tight">
            Rental Yield & ROI Simulator.
          </h2>

          <p className="text-sm sm:text-base text-stone-300 font-light mt-3 leading-relaxed">
            Model your property’s true net rental yield in Dubai and Abu Dhabi after deducting Mollak service charges, maintenance reserves, and management fees.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0A2226]/95 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
            
            {/* Strategy Tiers */}
            <div>
              <label className="text-xs font-mono text-[#C5A059] uppercase tracking-wider block mb-3 font-semibold">
                1. SELECT ASSET STRATEGY & MANAGEMENT TIER
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                <button
                  type="button"
                  onClick={() => setManagementTier('standard')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    managementTier === 'standard'
                      ? 'bg-[#C5A059]/20 border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                      : 'bg-[#06181A] border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <span className="block text-xs font-serif font-bold text-[#F4EFE6]">
                    Standard (5%)
                  </span>
                  <span className="block text-[10px] text-stone-400 font-sans mt-0.5">
                    Tenant placement & annual rent collection
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setManagementTier('premium')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    managementTier === 'premium'
                      ? 'bg-[#C5A059]/20 border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                      : 'bg-[#06181A] border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="block text-xs font-serif font-bold text-[#F4EFE6]">
                      Turnkey (7%)
                    </span>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#C5A059] text-black font-mono font-bold">TOP</span>
                  </div>
                  <span className="block text-[10px] text-stone-400 font-sans mt-0.5">
                    24/7 AMC, Ejari, UAEDDS direct debit
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setManagementTier('holiday')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    managementTier === 'holiday'
                      ? 'bg-[#C5A059]/20 border-[#C5A059] shadow-lg shadow-[#C5A059]/10'
                      : 'bg-[#06181A] border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <span className="block text-xs font-serif font-bold text-[#F4EFE6] flex items-center gap-1">
                    <Palmtree className="w-3 h-3 text-amber-400" />
                    <span>Holiday (18%)</span>
                  </span>
                  <span className="block text-[10px] text-stone-400 font-sans mt-0.5">
                    DET holiday home dynamic yield (+28% rent)
                  </span>
                </button>

              </div>
            </div>

            {/* Slider 1: Property Value */}
            <div className="space-y-2 pt-2 border-t border-stone-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-stone-300">Property Purchase Price / Market Valuation:</span>
                <span className="text-sm font-bold text-[#C5A059]">
                  AED {propertyPrice.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={600000}
                max={15000000}
                step={50000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full accent-[#C5A059] bg-[#06181A] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>AED 600K</span>
                <span>AED 5M</span>
                <span>AED 15M+</span>
              </div>
            </div>

            {/* Slider 2: Annual Expected Rent */}
            <div className="space-y-2 pt-2 border-t border-stone-800">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-stone-300">Expected Annual Gross Rent (Traditional):</span>
                <span className="text-sm font-bold text-emerald-400">
                  AED {grossAnnualRent.toLocaleString()} / year
                </span>
              </div>
              <input
                type="range"
                min={40000}
                max={900000}
                step={5000}
                value={grossAnnualRent}
                onChange={(e) => setGrossAnnualRent(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-[#06181A] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-stone-500">
                <span>AED 40K</span>
                <span>AED 350K</span>
                <span>AED 900K+</span>
              </div>
            </div>

            {/* Property Specs: Sq Ft & Service Charges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-800">
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-300">Property Area:</span>
                  <span className="font-bold text-[#F4EFE6]">{propertySqft} sq.ft</span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={6000}
                  step={50}
                  value={propertySqft}
                  onChange={(e) => setPropertySqft(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#06181A] h-1.5 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-stone-300">Mollak Service Charge:</span>
                  <span className="font-bold text-[#F4EFE6]">AED {serviceChargePerSqft} / sqft</span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={35}
                  step={1}
                  value={serviceChargePerSqft}
                  onChange={(e) => setServiceChargePerSqft(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#06181A] h-1.5 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* Forecast Horizon */}
            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400">Projection Horizon:</span>
              <div className="flex items-center gap-1.5">
                {[3, 5, 10].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setLeaseHorizon(yr)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      leaseHorizon === yr
                        ? 'bg-[#C5A059] text-black font-bold'
                        : 'bg-[#06181A] text-stone-400 hover:text-white border border-stone-800'
                    }`}
                  >
                    {yr} Years
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Live Results Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0C2D31] to-[#081F23] border border-[#C5A059]/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block font-bold">
                  PROJECTED ANNUAL PERFORMANCE
                </span>
                <span className="text-2xl font-serif font-extrabold text-[#F4EFE6]">
                  Yield Breakdown
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-stone-400 block uppercase">NET YIELD:</span>
                <span className="text-3xl font-mono font-black text-emerald-400">
                  {metrics.netYield}%
                </span>
              </div>
            </div>

            {/* Big Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 font-mono">
              
              <div className="p-4 rounded-2xl bg-[#06181A]/80 border border-white/5">
                <span className="text-[10px] text-stone-400 uppercase block">GROSS ANNUAL RENT:</span>
                <span className="text-base font-bold text-[#F4EFE6] block mt-1">
                  AED {Math.round(metrics.effectiveGrossRent).toLocaleString()}
                </span>
                <span className="text-[10px] text-stone-500 block">{metrics.grossYield}% Gross Yield</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#06181A]/80 border border-white/5">
                <span className="text-[10px] text-stone-400 uppercase block">NET ANNUAL CASHFLOW:</span>
                <span className="text-base font-bold text-emerald-400 block mt-1">
                  AED {Math.round(metrics.netAnnualRent).toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-500/80 block">After all expenses</span>
              </div>

            </div>

            {/* Expense Breakdown List */}
            <div className="space-y-2 pt-2 border-t border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-[11px]">- Building Service Charges (Mollak):</span>
                <span className="font-semibold text-rose-300">AED {Math.round(metrics.totalServiceCharges).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-[11px]">- Property Management Fee:</span>
                <span className="font-semibold text-rose-300">AED {Math.round(metrics.managementFee).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-stone-300">
                <span className="text-[11px]">- Maintenance & Sinking Reserve:</span>
                <span className="font-semibold text-rose-300">AED {Math.round(metrics.maintenanceReserve).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-stone-200 pt-2 border-t border-white/5 font-bold">
                <span>Total Annual Expenses:</span>
                <span className="text-rose-400">AED {Math.round(metrics.totalAnnualExpenses).toLocaleString()}</span>
              </div>
            </div>

            {/* Cumulative Horizon Projection */}
            <div className="p-4 rounded-2xl bg-[#06181A] border border-[#C5A059]/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#C5A059] font-bold uppercase">{leaseHorizon}-YEAR CUMULATIVE ROI:</span>
                <span className="text-emerald-400 font-bold">+{metrics.totalRoiPercentage}%</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                <span>Cumulative Net Rent:</span>
                <span className="text-white font-semibold">AED {Math.round(metrics.cumulativeNetRent).toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-300">
                <span>Estimated Capital Gain (5.5%/yr):</span>
                <span className="text-white font-semibold">AED {Math.round(metrics.capitalAppreciationGain).toLocaleString()}</span>
              </div>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={handleAction}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Request Custom Portfolio Yield Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
