'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Layers, Clock, Users } from 'lucide-react';

interface CleaningCalculatorProps {
  onOpenDispatch: () => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const CleaningCalculator: React.FC<CleaningCalculatorProps> = ({
  onOpenDispatch,
  currency
}) => {
  // Calculator State
  const [propertyType, setPropertyType] = useState<'villa' | 'penthouse' | 'apartment' | 'office' | 'clinic'>('villa');
  const [sqft, setSqft] = useState<number>(4500); // 4,500 sqft default
  const [bedrooms, setBedrooms] = useState<number>(4);
  const [bathrooms, setBathrooms] = useState<number>(5);
  const [cleaningTier, setCleaningTier] = useState<'deep' | 'regular' | 'move-in' | 'post-renovation'>('deep');
  const [frequency, setFrequency] = useState<'one-time' | 'weekly' | 'bi-weekly' | 'monthly'>('weekly');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['ac-duct', 'marble-polish']);

  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];

  const ADDONS = [
    { id: 'ac-duct', name: 'Robotic HVAC AC Duct & Coil Fogging', priceAED: 650 },
    { id: 'marble-polish', name: 'Italian Diamond Marble Crystallization', priceAED: 950 },
    { id: 'chandelier', name: 'Ultrasonic Crystal Chandelier Clean', priceAED: 450 },
    { id: 'patio-pressure', name: 'Patio & Pool Deck High-PSI Hydro Jet', priceAED: 550 },
    { id: 'mattress-uv', name: 'UV-C Mattress & Bedding Sterilization', priceAED: 350 },
    { id: 'carpet-steam', name: 'Persian Silk Rug & Carpet Steam Extraction', priceAED: 450 }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base rate calculation
  const calculatedPriceAED = useMemo(() => {
    let base = 350;
    // Sqft scale
    base += (sqft / 1000) * 180;
    // Bedroom & Bathroom weight
    base += bedrooms * 90 + bathrooms * 75;

    // Tier multiplier
    if (cleaningTier === 'deep') base *= 1.45;
    else if (cleaningTier === 'move-in') base *= 1.35;
    else if (cleaningTier === 'post-renovation') base *= 1.65;
    else base *= 1.0;

    // Addons sum
    const addonsTotal = selectedAddons.reduce((acc, aId) => {
      const addon = ADDONS.find((a) => a.id === aId);
      return acc + (addon ? addon.priceAED : 0);
    }, 0);

    let total = base + addonsTotal;

    // Frequency discounts
    if (frequency === 'weekly') total *= 0.75; // 25% discount
    else if (frequency === 'bi-weekly') total *= 0.85; // 15% discount
    else if (frequency === 'monthly') total *= 0.90; // 10% discount

    return Math.round(total / 25) * 25;
  }, [propertyType, sqft, bedrooms, bathrooms, cleaningTier, frequency, selectedAddons]);

  const estimatedCrew = Math.max(2, Math.min(8, Math.round(sqft / 1200)));
  const estimatedHours = cleaningTier === 'deep' || cleaningTier === 'post-renovation' ? '5 - 8 Hours' : '3 - 5 Hours';

  return (
    <section id="quote-calculator" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Quotation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            UAE Villa & Commercial Estimator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light">
            Instantly model your custom cleaning specifications, crew dispatch size, subscription savings, and specialty add-ons.
          </p>
        </div>

        {/* Interactive Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/50 border border-emerald-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-zinc-800 pb-3 flex items-center justify-between">
              <span>Property Parameters</span>
              <span className="text-xs font-mono text-emerald-400 font-normal">
                Dubai Municipality Permit Approved
              </span>
            </h3>

            {/* Property Typology Selector */}
            <div>
              <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                1. Select Property Typology
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs font-mono">
                {[
                  { id: 'villa', label: 'Mansion / Villa' },
                  { id: 'penthouse', label: 'Sky Penthouse' },
                  { id: 'apartment', label: 'Apartment' },
                  { id: 'office', label: 'B2B Office' },
                  { id: 'clinic', label: 'Medical Clinic' }
                ].map((pt) => (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setPropertyType(pt.id as any)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all ${
                      propertyType === pt.id
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Square Footage Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-zinc-400 uppercase">2. Built-Up Area (Sq. Ft.)</span>
                <span className="text-emerald-400 font-bold text-sm">{sqft.toLocaleString()} sqft</span>
              </div>
              <input
                type="range"
                min={800}
                max={25000}
                step={250}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                <span>800 sqft</span>
                <span>12,000 sqft</span>
                <span>25,000+ sqft (Palace Tier)</span>
              </div>
            </div>

            {/* Bedrooms & Bathrooms */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                  Bedrooms
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-white focus:border-emerald-500/60 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>{n} Bedroom Suites</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                  Bathrooms
                </label>
                <select
                  value={bathrooms}
                  onChange={(e) => setBathrooms(Number(e.target.value))}
                  className="w-full py-2.5 px-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-white focus:border-emerald-500/60 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((n) => (
                    <option key={n} value={n}>{n} Bathrooms</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Cleaning Program Tier */}
            <div>
              <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                3. Cleaning Protocol Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {[
                  { id: 'deep', label: '7-Phase Deep Clean' },
                  { id: 'move-in', label: 'Move-In Handover' },
                  { id: 'post-renovation', label: 'Post-Renovation' },
                  { id: 'regular', label: 'Routine Upkeep' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setCleaningTier(tier.id as any)}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all ${
                      cleaningTier === tier.id
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/60 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Recurring Subscription Frequency */}
            <div>
              <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                4. Frequency & Subscription Savings
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {[
                  { id: 'weekly', label: 'Weekly (-25%)' },
                  { id: 'bi-weekly', label: 'Bi-Weekly (-15%)' },
                  { id: 'monthly', label: 'Monthly (-10%)' },
                  { id: 'one-time', label: 'One-Time' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id as any)}
                    className={`py-2 px-1 rounded-xl border text-center transition-all ${
                      frequency === f.id
                        ? 'bg-teal-500/20 text-teal-300 border-teal-500/60 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialty Add-ons */}
            <div>
              <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                5. Specialty Add-On Protocols
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-white'
                          : 'bg-zinc-950/60 border-zinc-800/80 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className="truncate pr-2">{addon.name}</span>
                      <span className="text-emerald-400 font-bold shrink-0">+AED {addon.priceAED}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Estimated Service Package Summary
              </h3>

              {/* Price Hero Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-500/30 mb-5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  Estimated Rate ({currency})
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 mt-1">
                  {currency} {Math.round(calculatedPriceAED * currentRate).toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Includes all industrial equipment, supplies & supervisors</span>
                </div>
              </div>

              {/* Resource & Operational Telemetry */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Assigned Crew Size:</span>
                  <span className="text-white font-bold">{estimatedCrew} Certified Cleaners + 1 Supervisor</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Estimated Duration:</span>
                  <span className="text-zinc-300">{estimatedHours}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Fleet Equipment:</span>
                  <span className="text-emerald-400">Kärcher Puzzi + Klindex Diamond</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Chemical Certification:</span>
                  <span className="text-white">Dubai Municipality Approved Eco-Biocide</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Subscription Frequency:</span>
                  <span className="text-teal-400 uppercase font-bold">{frequency}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={onOpenDispatch}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <span>Dispatch Crew with This Configuration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
