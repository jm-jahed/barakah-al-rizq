'use strict';
import React, { useState, useMemo } from 'react';
import { Wrench, Crown, ShieldCheck, ArrowRight, CheckCircle2, Truck, Droplets, Zap, Layers } from 'lucide-react';

interface MaintenanceAmcEstimatorProps {
  onDeployAmc: (amcPlan: {
    propertyType: string;
    acUnitsCount: number;
    amcTier: string;
    addons: string[];
    totalAnnualAED: number;
    monthlyEquivalentAED: number;
  }) => void;
}

const PROPERTY_TYPES = [
  { id: 'villa-medium', name: '3-4 Bedroom Luxury Villa (Palm / Dubai Hills)', baseAnnualAED: 7500, defaultAc: 6 },
  { id: 'villa-palatial', name: '5-7 Bedroom Palatial Mansion (Emirates Hills / Al Barari)', baseAnnualAED: 14500, defaultAc: 12 },
  { id: 'sky-penthouse', name: 'Super-Prime Sky Penthouse (Downtown / Marina)', baseAnnualAED: 5800, defaultAc: 4 },
  { id: 'commercial-office', name: 'Commercial Corporate Suite (DIFC / Business Bay)', baseAnnualAED: 6200, defaultAc: 5 }
];

const AMC_TIERS = [
  { id: 'silver', name: 'Silver Care (4-Hour SLA • 4 Scheduled Overhauls • Labor Covered)', multiplier: 1.0 },
  { id: 'gold', name: 'Gold Priority (1-Hour SLA • 6 Scheduled Overhauls • Minor Parts Covered)', multiplier: 1.35 },
  { id: 'platinum', name: 'Platinum Sovereign (28-Min SLA • Unlimited 24/7 Callouts • 100% All Parts Covered)', multiplier: 1.75 }
];

const ADDONS = [
  { id: 'tank-wash', name: 'Dubai Municipality Certified 2x Annual Water Tank Bio-Wash', priceAED: 1200 },
  { id: 'pool-care', name: 'Swimming Pool & Heat/Cool Chiller Bi-Weekly Maintenance', priceAED: 3600 },
  { id: 'irrigation', name: 'Smart Garden Automated Irrigation & Solenoid Maintenance', priceAED: 1800 },
  { id: 'pest-control', name: 'Quarterly Dubai Municipality Eco-Pest Control Shield', priceAED: 1100 }
];

export const MaintenanceAmcEstimator: React.FC<MaintenanceAmcEstimatorProps> = ({ onDeployAmc }) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>('villa-medium');
  const [acUnitsCount, setAcUnitsCount] = useState<number>(6);
  const [selectedTierId, setSelectedTierId] = useState<string>('gold');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['tank-wash', 'pool-care']);

  const activeProp = PROPERTY_TYPES.find((p) => p.id === selectedPropertyId) || PROPERTY_TYPES[0];
  const activeTier = AMC_TIERS.find((t) => t.id === selectedTierId) || AMC_TIERS[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculations = useMemo(() => {
    let base = activeProp.baseAnnualAED * activeTier.multiplier;
    // Add AC units incremental cost beyond 4 units
    if (acUnitsCount > 4) {
      base += (acUnitsCount - 4) * 350 * activeTier.multiplier;
    }
    // Add selected addons
    let addonsTotal = 0;
    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) addonsTotal += addon.priceAED;
    });

    const totalAnnualAED = Math.round(base + addonsTotal);
    const monthlyEquivalentAED = Math.round(totalAnnualAED / 12);

    return {
      totalAnnualAED,
      monthlyEquivalentAED,
      addonsTotal
    };
  }, [activeProp, activeTier, acUnitsCount, selectedAddons]);

  const handleTriggerDeploy = () => {
    onDeployAmc({
      propertyType: activeProp.name,
      acUnitsCount,
      amcTier: activeTier.name,
      addons: selectedAddons.map((id) => ADDONS.find((a) => a.id === id)?.name || id),
      totalAnnualAED: calculations.totalAnnualAED,
      monthlyEquivalentAED: calculations.monthlyEquivalentAED
    });
  };

  return (
    <section id="amc-estimator" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Preventative Estate Retainers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight mb-4">
            Dubai Villa & Penthouse <span className="italic font-normal text-emerald-400">Annual AMC Estimator</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Customize your 365-day annual maintenance contract with guaranteed rapid emergency SLAs, unlimited call-outs, and 100% parts protection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* 1. Property Type */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-emerald-400 block mb-4 flex items-center gap-2">
                <Crown className="w-4 h-4" />
                1. Select Property Configuration
              </span>

              <div className="flex flex-col gap-2.5">
                {PROPERTY_TYPES.map((prop) => {
                  const isSelected = selectedPropertyId === prop.id;
                  return (
                    <button
                      key={prop.id}
                      onClick={() => {
                        setSelectedPropertyId(prop.id);
                        setAcUnitsCount(prop.defaultAc);
                      }}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500 ring-1 ring-emerald-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{prop.name}</span>
                      <span className="text-[11px] font-mono text-emerald-400">From AED {prop.baseAnnualAED.toLocaleString()} / yr</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. AC / Chiller Count Slider */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-semibold text-emerald-400 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  2. Total AC Units & Chiller Fan Coils
                </span>
                <span className="text-lg font-serif font-bold text-white px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-lg">
                  {acUnitsCount} AC Units
                </span>
              </div>

              <input
                type="range"
                min="2"
                max="24"
                step="1"
                value={acUnitsCount}
                onChange={(e) => setAcUnitsCount(Number(e.target.value))}
                aria-label="Total AC units and chiller fan coils slider"
                className="w-full accent-emerald-500 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 mt-2">
                <span>2 Units (Penthouse)</span>
                <span>8 Units (Standard Villa)</span>
                <span>24 Units (Mega Mansion)</span>
              </div>
            </div>

            {/* 3. Coverage Tier */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-emerald-400 block mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                3. Emergency Response SLA & Coverage Tier
              </span>

              <div className="flex flex-col gap-2.5">
                {AMC_TIERS.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-neutral-700'
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

            {/* 4. Add-on Protection Bundles */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6">
              <span className="text-xs uppercase font-semibold text-emerald-400 block mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                4. Facility Add-On Modules
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500 text-white'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-medium text-neutral-200">{addon.name}</p>
                        <p className="text-[10px] text-emerald-400 font-mono">+ AED {addon.priceAED.toLocaleString()} / yr</p>
                      </div>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${
                          isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-neutral-700'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Cost Summary Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-neutral-900/95 border border-emerald-500/30 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                    Annual Contract Summary
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white">
                    365-Day Estate Protection
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold">
                  UAE Guarantee
                </div>
              </div>

              {/* Total Investment Display */}
              <div className="py-6 border-b border-neutral-800">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Total Annual Retainer (AED)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-300 to-emerald-100">
                    AED {calculations.totalAnnualAED.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400">/ year</span>
                </div>
                <div className="mt-2 text-xs text-emerald-400 font-mono">
                  Equivalent to ~AED {calculations.monthlyEquivalentAED.toLocaleString()} / month
                </div>
              </div>

              {/* Summary Breakdown */}
              <div className="py-5 space-y-3 text-xs border-b border-neutral-800">
                <div className="flex justify-between text-neutral-300">
                  <span>{activeProp.name}</span>
                  <span className="font-serif font-medium text-white">Included</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span>{acUnitsCount} AC Units Preventative Schedule</span>
                  <span className="font-serif font-medium text-white">Included</span>
                </div>
                <div className="flex justify-between text-neutral-300">
                  <span className="truncate max-w-[200px]">{activeTier.name.split('(')[0]}</span>
                  <span className="font-serif font-medium text-emerald-400">Active</span>
                </div>
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>{selectedAddons.length} Facility Add-On Modules</span>
                    <span className="font-serif font-medium text-white">
                      + AED {calculations.addonsTotal.toLocaleString()}
                    </span>
                  </div>
                )}
              </div>

              {/* Inclusions */}
              <div className="py-4 space-y-2 text-xs text-neutral-400 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24/7 Direct Hotline & WhatsApp Dispatch Console</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Genuine OEM European Parts Guarantee</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6">
                <button
                  onClick={handleTriggerDeploy}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-neutral-950 font-bold text-xs uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Deploy Annual Contract & Activate SLA</span>
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
