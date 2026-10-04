'use strict';
import React, { useState, useMemo } from 'react';
import { Ruler, Crown, Building, ShieldCheck, ArrowRight, CheckCircle2, Compass, Layers, Sparkle } from 'lucide-react';

interface ConstructionCostEstimatorProps {
  onScheduleSurvey: (estimation: {
    propertyType: string;
    buaSqFt: number;
    finishTier: string;
    authorityFastTrack: boolean;
    totalAED: number;
    ratePerSqFt: number;
    timelineMonths: number;
  }) => void;
}

const PROPERTY_TYPES = [
  { id: 'palatial-villa', name: 'Palatial Custom Villa (Ground-Up Build)', baseRateSqFt: 650, baseMonths: 14 },
  { id: 'sky-penthouse', name: 'Super-Prime Penthouse Turnkey Renovation', baseRateSqFt: 580, baseMonths: 7 },
  { id: 'difc-corporate', name: 'Grade-A DIFC Executive Corporate Fit-Out', baseRateSqFt: 420, baseMonths: 4 },
  { id: 'fine-dining', name: 'Michelin-Star Fine Dining Restaurant Fit-Out', baseRateSqFt: 750, baseMonths: 5 },
  { id: 'luxury-retail', name: 'Haute Horlogerie & High-End Retail Boutique', baseRateSqFt: 490, baseMonths: 3 }
];

const FINISH_TIERS = [
  { id: 'grade-a', name: 'Grade-A Premium (Italian Porcelain, Daikin VRV, German Hardware)', multiplier: 1.0 },
  { id: 'royal-bespoke', name: 'Royal Bespoke (Bookmatched Statuario Marble, Poliform Joinery, KNX)', multiplier: 1.28 },
  { id: 'sovereign-imperial', name: 'Sovereign Imperial (Exotic Onyx, Swiss Glazing, Gaggenau 400, Cinema)', multiplier: 1.65 }
];

export const ConstructionCostEstimator: React.FC<ConstructionCostEstimatorProps> = ({ onScheduleSurvey }) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('palatial-villa');
  const [buaSqFt, setBuaSqFt] = useState<number>(8500);
  const [selectedFinishTierId, setSelectedFinishTierId] = useState<string>('royal-bespoke');
  const [authorityFastTrack, setAuthorityFastTrack] = useState<boolean>(true);

  const activeProp = PROPERTY_TYPES.find((p) => p.id === selectedPropertyId) || PROPERTY_TYPES[0];
  const activeTier = FINISH_TIERS.find((t) => t.id === selectedFinishTierId) || FINISH_TIERS[1];

  const calculations = useMemo(() => {
    let ratePerSqFt = Math.round(activeProp.baseRateSqFt * activeTier.multiplier);
    let total = ratePerSqFt * buaSqFt;
    if (authorityFastTrack) {
      total += 75000; // fast-track permitting & engineer expedite
    }
    const timelineMonths = Math.max(3, Math.round(activeProp.baseMonths * Math.sqrt(buaSqFt / 5000)));

    const structuralCost = Math.round(total * 0.38);
    const joineryMarbleCost = Math.round(total * 0.35);
    const mepAutomationCost = Math.round(total * 0.22);
    const pmPermitsCost = total - structuralCost - joineryMarbleCost - mepAutomationCost;

    return {
      total,
      ratePerSqFt: Math.round(total / buaSqFt),
      timelineMonths,
      structuralCost,
      joineryMarbleCost,
      mepAutomationCost,
      pmPermitsCost
    };
  }, [activeProp, activeTier, buaSqFt, authorityFastTrack]);

  const handleTriggerSurvey = () => {
    onScheduleSurvey({
      propertyType: activeProp.name,
      buaSqFt,
      finishTier: activeTier.name,
      authorityFastTrack,
      totalAED: calculations.total,
      ratePerSqFt: calculations.ratePerSqFt,
      timelineMonths: calculations.timelineMonths
    });
  };

  return (
    <section id="cost-estimator" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
            <Ruler className="w-3.5 h-3.5" />
            <span>Interactive Cost Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Dubai Turnkey Fit-Out & <span className="italic font-normal text-amber-400">Construction Estimator</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Generate transparent Bill of Quantities (BOQ) cost forecasts for luxury villas, DIFC offices, and penthouses with realistic UAE Dirham engineering rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Property Type */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-amber-400 block mb-4 flex items-center gap-2">
                <Building className="w-4 h-4" />
                1. Select Architectural Property Type
              </span>

              <div className="flex flex-col gap-2.5">
                {PROPERTY_TYPES.map((prop) => {
                  const isSelected = selectedPropertyId === prop.id;
                  return (
                    <button
                      key={prop.id}
                      onClick={() => setSelectedPropertyId(prop.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{prop.name}</span>
                      <span className="text-[11px] font-mono text-amber-400">Base: AED {prop.baseRateSqFt} / sqft</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. BUA Area Slider */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-semibold text-amber-400 flex items-center gap-2">
                  <Ruler className="w-4 h-4" />
                  2. Built-Up Area (BUA) Size
                </span>
                <span className="text-lg font-serif font-bold text-white px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg">
                  {buaSqFt.toLocaleString()} sq ft
                </span>
              </div>

              <input
                type="range"
                min="1500"
                max="25000"
                step="500"
                value={buaSqFt}
                onChange={(e) => setBuaSqFt(Number(e.target.value))}
                aria-label="Built up area size slider in sq ft"
                className="w-full accent-amber-500 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 mt-2">
                <span>1,500 sq ft (Boutique / Office)</span>
                <span>8,500 sq ft (Luxury Villa)</span>
                <span>25,000+ sq ft (Palatial Estate)</span>
              </div>
            </div>

            {/* 3. Finishing Tier */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-amber-400 block mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                3. Materials, Joinery & Finishes Standard
              </span>

              <div className="flex flex-col gap-2.5">
                {FINISH_TIERS.map((tier) => {
                  const isSelected = selectedFinishTierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedFinishTierId(tier.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-amber-500 bg-amber-500' : 'border-neutral-700'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                        </div>
                        <span className="text-xs font-medium">{tier.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Fast-Track Permitting Toggle */}
            <div
              onClick={() => setAuthorityFastTrack(!authorityFastTrack)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                authorityFastTrack
                  ? 'bg-amber-500/10 border-amber-500 text-white'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded border flex items-center justify-center ${
                    authorityFastTrack ? 'bg-amber-500 border-amber-500' : 'border-neutral-700'
                  }`}
                >
                  {authorityFastTrack && <CheckCircle2 className="w-4 h-4 text-neutral-950" />}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">
                    Fast-Track Dubai Municipality & Civil Defense Permitting Expedite
                  </p>
                  <p className="text-[10px] text-neutral-400">
                    Dedicated chartered liaison engineer to expedite NOCs & approvals within 14 business days.
                  </p>
                </div>
              </div>
              <span className="text-xs font-serif font-bold text-amber-400">+ AED 75,000</span>
            </div>
          </div>

          {/* Real-Time Cost Summary Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-neutral-900/95 border border-amber-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                    Turnkey Engineering BOQ
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white">
                    Estimated Project Investment
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                  UAE Benchmark Rate
                </div>
              </div>

              {/* Total Investment Display */}
              <div className="py-6 border-b border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Estimated Turnkey Contract Value
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-100">
                    AED {calculations.total.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-neutral-400">
                  <span>Rate: <strong className="text-white">AED {calculations.ratePerSqFt} / sq ft</strong></span>
                  <span>•</span>
                  <span>Timeline: <strong className="text-amber-400">~{calculations.timelineMonths} Months</strong></span>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="py-5 space-y-3 text-xs border-b border-neutral-800">
                <p className="text-[10px] uppercase font-bold text-neutral-400">Work Scope Breakdown</p>
                <div className="flex justify-between text-neutral-300">
                  <span>Structural, Piling & Civil Works (38%)</span>
                  <span className="font-serif font-medium text-white">
                    AED {calculations.structuralCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Italian Marble, Glazing & Joinery (35%)</span>
                  <span className="font-serif font-medium text-white">
                    AED {calculations.joineryMarbleCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>MEP, VRV HVAC & KNX Smart Home (22%)</span>
                  <span className="font-serif font-medium text-white">
                    AED {calculations.mepAutomationCost.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>Authority Permits & Project Management (5%)</span>
                  <span className="font-serif font-medium text-white">
                    AED {calculations.pmPermitsCost.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="py-4 space-y-2 text-xs text-neutral-400 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>10-Year Structural Defect Insurance & Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>0% Variations Guarantee with fixed BOQ contract</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  onClick={handleTriggerSurvey}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-500 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <Compass className="w-4 h-4" />
                  <span>Book Chartered Site Survey & Valuation</span>
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
