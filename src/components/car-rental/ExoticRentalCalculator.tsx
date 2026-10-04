'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, Gauge, Flame, Car, Zap } from 'lucide-react';

interface ExoticRentalCalculatorProps {
  onOpenBooking: () => void;
  currency: 'AED' | 'USD' | 'EUR' | 'GBP';
}

export const ExoticRentalCalculator: React.FC<ExoticRentalCalculatorProps> = ({
  onOpenBooking,
  currency
}) => {
  const [vehicleTier, setVehicleTier] = useState<'supercar' | 'hypercar' | 'limousine' | 'suv'>('supercar');
  const [rentalDurationDays, setRentalDurationDays] = useState<number>(3);
  const [mileagePackage, setMileagePackage] = useState<'standard' | 'extended' | 'unlimited'>('standard');
  const [includeChauffeur, setIncludeChauffeur] = useState<boolean>(false);
  const [insuranceTier, setInsuranceTier] = useState<'comprehensive' | 'zero-excess'>('zero-excess');
  const [deliveryLocation, setDeliveryLocation] = useState<'dxb-tarmac' | 'palm-villa' | 'downtown' | 'hotel-valet'>('palm-villa');

  const rates = {
    AED: 1,
    USD: 0.272,
    EUR: 0.252,
    GBP: 0.215
  };
  const currentRate = rates[currency];

  const calculatedTotalAED = useMemo(() => {
    let baseDaily = 3800; // Supercar default
    if (vehicleTier === 'hypercar') baseDaily = 7500;
    else if (vehicleTier === 'limousine') baseDaily = 4800;
    else if (vehicleTier === 'suv') baseDaily = 3200;

    // Duration discount
    let dailyRate = baseDaily;
    if (rentalDurationDays >= 30) dailyRate *= 0.60; // 40% monthly discount
    else if (rentalDurationDays >= 7) dailyRate *= 0.80; // 20% weekly discount

    let subtotal = dailyRate * rentalDurationDays;

    // Mileage Add-on
    if (mileagePackage === 'extended') subtotal += 350 * rentalDurationDays;
    else if (mileagePackage === 'unlimited') subtotal += 750 * rentalDurationDays;

    // Chauffeur Add-on (AED 800/day for 10 hours)
    if (includeChauffeur) subtotal += 800 * rentalDurationDays;

    // Insurance Add-on
    if (insuranceTier === 'zero-excess') subtotal += 250 * rentalDurationDays;

    return Math.round(subtotal / 100) * 100;
  }, [vehicleTier, rentalDurationDays, mileagePackage, includeChauffeur, insuranceTier]);

  return (
    <section id="rental-calculator" className="py-24 bg-zinc-950 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Lease & Telemetry Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Supercar Lease & Rate Calculator
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 font-light">
            Model your multi-day lease rates, zero-excess insurance coverage, private chauffeur options, and direct VIP tarmac deliveries.
          </p>
        </div>

        {/* Interactive Dashboard Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/50 border border-amber-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-serif font-bold text-white border-b border-zinc-800 pb-3 flex items-center justify-between">
              <span>Lease Parameters</span>
              <span className="text-xs font-mono text-emerald-400 font-normal">
                0% Security Deposit Guaranteed
              </span>
            </h3>

            {/* Vehicle Tier */}
            <div>
              <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                1. Select Supercar Category Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {[
                  { id: 'supercar', label: 'Supercars (Ferrari/Lambo)' },
                  { id: 'hypercar', label: 'Hypercars (1000+ HP)' },
                  { id: 'limousine', label: 'Rolls-Royce / Maybach' },
                  { id: 'suv', label: 'Luxury SUV (G63/Urus)' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setVehicleTier(tier.id as any)}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all ${
                      vehicleTier === tier.id
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Rental Duration Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono mb-2">
                <span className="text-zinc-400 uppercase">2. Rental Duration</span>
                <span className="text-amber-400 font-bold text-sm">
                  {rentalDurationDays} Days {rentalDurationDays >= 30 ? '(Monthly -40%)' : (rentalDurationDays >= 7 ? '(Weekly -20%)' : '')}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={60}
                step={1}
                value={rentalDurationDays}
                onChange={(e) => setRentalDurationDays(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-600 mt-1">
                <span>1 Day</span>
                <span>7 Days (-20%)</span>
                <span>30+ Days (-40% Corporate)</span>
              </div>
            </div>

            {/* Mileage Packages */}
            <div>
              <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                3. Daily Mileage Allowance
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: 'standard', label: '250 KM / Day (Standard)' },
                  { id: 'extended', label: '400 KM / Day (+AED 350)' },
                  { id: 'unlimited', label: 'Unlimited KM (+AED 750)' }
                ].map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setMileagePackage(pkg.id as any)}
                    className={`py-2.5 px-2 rounded-xl border text-center transition-all ${
                      mileagePackage === pkg.id
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/60 font-bold'
                        : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {pkg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Insurance Tier & Chauffeur Add-on */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                  4. Insurance Coverage Tier
                </label>
                <select
                  value={insuranceTier}
                  onChange={(e) => setInsuranceTier(e.target.value as any)}
                  className="w-full py-2.5 px-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-white focus:border-amber-500/60 focus:outline-none"
                >
                  <option value="zero-excess">Zero-Excess Super CDW (Recommended)</option>
                  <option value="comprehensive">Comprehensive Standard (AED 3,000 Excess)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">
                  5. Dedicated Private Chauffeur
                </label>
                <button
                  type="button"
                  onClick={() => setIncludeChauffeur(!includeChauffeur)}
                  className={`w-full py-2.5 px-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                    includeChauffeur
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                  }`}
                >
                  <span>British / Multilingual Driver</span>
                  <span className="font-bold">{includeChauffeur ? 'Selected (+AED 800/d)' : 'Add (+AED 800/d)'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-4 border-b border-zinc-800 pb-2">
                Estimated Lease Package Breakdown
              </h3>

              {/* Price Hero Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/30 mb-5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">
                  Total Lease Investment ({currency})
                </div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-amber-400 mt-1">
                  {currency} {Math.round(calculatedTotalAED * currentRate).toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>0% Security Deposit with credit pre-auth or crypto</span>
                </div>
              </div>

              {/* Resource & Operational Telemetry */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Total Duration:</span>
                  <span className="text-white font-bold">{rentalDurationDays} Days</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Included Distance:</span>
                  <span className="text-amber-400 font-semibold">
                    {mileagePackage === 'standard' ? `${250 * rentalDurationDays} KM` : (mileagePackage === 'extended' ? `${400 * rentalDurationDays} KM` : 'Unlimited KM')}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Insurance Level:</span>
                  <span className="text-white">Zero Excess Full CDW</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Chauffeur Service:</span>
                  <span className="text-amber-400">{includeChauffeur ? 'Included (10h/day)' : 'Self-Drive'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-zinc-900">
                  <span className="text-zinc-400">Doorstep Delivery:</span>
                  <span className="text-emerald-400">Complimentary 30-Min Transporter</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-zinc-950 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Reserve Supercar with This Setup</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
