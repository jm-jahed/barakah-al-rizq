'use client';

import React, { useState } from 'react';
import { NEXUS_LOCATIONS } from '@/data/nexusWorkspaceData';

export default function SpaceCalculator() {
  const [teamSize, setTeamSize] = useState<number>(6);
  const [suiteTier, setSuiteTier] = useState<'flexi' | 'private' | 'executive' | 'enterprise'>('private');
  const [locationId, setLocationId] = useState<string>('loc-downtown');
  const [leaseMonths, setLeaseMonths] = useState<number>(12);

  // Add-ons
  const [includeDedicatedVlan, setIncludeDedicatedVlan] = useState<boolean>(true);
  const [includeVipParking, setIncludeVipParking] = useState<boolean>(true);
  const [includeBoardroomBundle, setIncludeBoardroomBundle] = useState<boolean>(false);
  const [includeProSetup, setIncludeProSetup] = useState<boolean>(true);

  // Calculation Logic in AED
  let baseDeskRateAed = 2200;
  if (suiteTier === 'private') baseDeskRateAed = 2500;
  if (suiteTier === 'executive') baseDeskRateAed = 3200;
  if (suiteTier === 'enterprise') baseDeskRateAed = 2100;

  // Location multipliers
  let locationMultiplier = 1.0;
  if (locationId === 'loc-downtown' || locationId === 'loc-difc') locationMultiplier = 1.15;
  if (locationId === 'loc-businessbay') locationMultiplier = 1.08;
  if (locationId === 'loc-abudhabi') locationMultiplier = 1.12;

  // Base suite cost
  let rawMonthly = teamSize * baseDeskRateAed * locationMultiplier;

  // Add-ons cost
  let addOnsMonthly = 0;
  if (includeDedicatedVlan) addOnsMonthly += 850;
  if (includeVipParking) addOnsMonthly += 1200;
  if (includeBoardroomBundle) addOnsMonthly += 1500;

  // Lease term discount
  let discountMultiplier = 1.0;
  if (leaseMonths === 6) discountMultiplier = 0.95;
  if (leaseMonths === 12) discountMultiplier = 0.88;
  if (leaseMonths === 24) discountMultiplier = 0.80;

  const discountedMonthly = (rawMonthly + addOnsMonthly) * discountMultiplier;
  const vatAmount = discountedMonthly * 0.05;
  const totalMonthlyWithVat = discountedMonthly + vatAmount;

  // Visa Quota Estimate
  const estimatedVisaQuota = Math.max(1, Math.floor(teamSize * 1.2));

  const selectedLoc = NEXUS_LOCATIONS.find((l) => l.id === locationId) || NEXUS_LOCATIONS[0];

  const whatsappQuoteMessage = encodeURIComponent(
    `Hello NEXUS Concierge, I generated a workspace estimate on your portal:\n\n• Team Size: ${teamSize} Workstations\n• Suite Tier: ${suiteTier.toUpperCase()}\n• Location: ${selectedLoc.name} (${selectedLoc.city})\n• Lease Term: ${leaseMonths} Months\n• Estimated Monthly Lease: AED ${Math.round(totalMonthlyWithVat).toLocaleString()} (incl. 5% VAT)\n• Ejari Visa Quota: ~${estimatedVisaQuota} Visas\n\nPlease confirm availability and send the official commercial proposal.`
  );

  return (
    <section id="calculator" className="py-24 bg-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span>Interactive UAE Space & Ejari Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Calculate Your Turnkey Office Budget
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Customize your team size, tier, and prime UAE business center location to receive an instant transparent monthly quote in AED with 100% Ejari visa quota allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
            {/* 1. Team Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  1. Team Size / Workstations Required
                </label>
                <span className="text-lg font-black text-white font-mono bg-slate-950 px-3 py-1 rounded-lg border border-slate-700">
                  {teamSize} {teamSize === 1 ? 'Desk' : 'Desks'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1.5">
                <span>1 Solo / Executive</span>
                <span>10 Growth Team</span>
                <span>25 Enterprise Wing</span>
                <span>50+ Full Floor</span>
              </div>
            </div>

            {/* 2. Suite Tier Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                2. Suite Specification & Acoustic Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'flexi', name: 'Dedicated Desk', desc: 'STC 40 Co-working' },
                  { id: 'private', name: 'Private Suite', desc: 'STC 48 Acoustic Glass' },
                  { id: 'executive', name: 'Presidential C-Suite', desc: 'STC 52 VIP Executive' },
                  { id: 'enterprise', name: 'Managed Floor', desc: 'STC 52 Whole Plate' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSuiteTier(tier.id as any)}
                    className={`p-3 rounded-2xl border text-left transition ${
                      suiteTier === tier.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block">{tier.name}</span>
                    <span className="text-[10px] text-slate-400 block mt-1">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Location Selector */}
            <div>
              <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                3. Flagship Business Center Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {NEXUS_LOCATIONS.map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setLocationId(loc.id)}
                    className={`p-3 rounded-2xl border text-left transition flex items-center justify-between ${
                      locationId === loc.id
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold block">{loc.name}</span>
                      <span className="text-[10px] text-slate-400 block">{loc.district}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      {loc.availableSuites} Free
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Lease Duration */}
            <div>
              <label className="block text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-3">
                4. Commitment Tenure & Savings
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { months: 1, label: '1 Month', badge: 'Standard' },
                  { months: 6, label: '6 Months', badge: '5% Off' },
                  { months: 12, label: '12 Months', badge: '12% Off' },
                  { months: 24, label: '24 Months', badge: '20% Off' },
                ].map((term) => (
                  <button
                    key={term.months}
                    type="button"
                    onClick={() => setLeaseMonths(term.months)}
                    className={`p-2.5 rounded-xl border text-center transition ${
                      leaseMonths === term.months
                        ? 'bg-amber-500 text-slate-950 font-black border-amber-400'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-xs block font-bold">{term.label}</span>
                    <span className="text-[9px] block opacity-80 font-mono mt-0.5">{term.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Add-on Infrastructure Toggles */}
            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Optional Enterprise Add-Ons
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={includeDedicatedVlan}
                    onChange={(e) => setIncludeDedicatedVlan(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 bg-slate-800 border-slate-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Dedicated Dark Fiber VLAN</span>
                    <span className="text-[10px] text-slate-400">+AED 850 / month</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={includeVipParking}
                    onChange={(e) => setIncludeVipParking(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 bg-slate-800 border-slate-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Reserved VIP Basement Parking</span>
                    <span className="text-[10px] text-slate-400">+AED 1,200 / month</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={includeBoardroomBundle}
                    onChange={(e) => setIncludeBoardroomBundle(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 bg-slate-800 border-slate-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">20h Royal Boardroom Credits</span>
                    <span className="text-[10px] text-slate-400">+AED 1,500 / month</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-slate-950/60 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700">
                  <input
                    type="checkbox"
                    checked={includeProSetup}
                    onChange={(e) => setIncludeProSetup(e.target.checked)}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-0 bg-slate-800 border-slate-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">DED Ejari & PRO Fast-Track</span>
                    <span className="text-[10px] text-emerald-400 font-bold">Included Free</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Quote Breakdown Summary Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">Estimate Summary</span>
                  <h3 className="text-xl font-bold text-white">{selectedLoc.name}</h3>
                </div>
                <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-500/30 rounded-full text-[10px] font-mono font-bold">
                  Ejari Ready
                </span>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Workstations Capacity:</span>
                  <strong className="text-white font-mono">{teamSize} Desks</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Base Workspace Lease:</span>
                  <span className="text-white font-mono">AED {Math.round(rawMonthly).toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Add-Ons Total:</span>
                  <span className="text-white font-mono">AED {addOnsMonthly.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Term Discount ({leaseMonths} Mo):</span>
                  <span className="font-mono font-bold">
                    {leaseMonths > 1 ? `-${Math.round((1 - discountMultiplier) * 100)}% Applied` : 'Standard'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                  <span>UAE 5% VAT:</span>
                  <span className="text-slate-300 font-mono">AED {Math.round(vatAmount).toLocaleString()}</span>
                </div>
              </div>

              {/* Total Card */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-amber-500/30 text-center space-y-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  Net Monthly Commitment (in AED)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                  AED {Math.round(totalMonthlyWithVat).toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 block">
                  Billed monthly • Fully furnished • DEWA & Chiller included
                </span>
              </div>

              {/* Telemetry badges */}
              <div className="p-4 bg-slate-900/60 rounded-2xl border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Estimated Visa Quota:</span>
                  <strong className="text-amber-400 font-mono">{estimatedVisaQuota} UAE Residency Visas</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Ejari Processing:</span>
                  <strong className="text-emerald-400 font-mono">2 - 4 Hours from Signing</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Security Deposit:</span>
                  <strong className="text-slate-200 font-mono">1 Month Escrow in AED</strong>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={`https://wa.me/971508821122?text=${whatsappQuoteMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition"
              >
                <span>💬</span>
                <span>Send Estimate via WhatsApp</span>
              </a>

              <a
                href="#tour"
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl flex items-center justify-center transition border border-slate-700"
              >
                Book VIP Inspection for this Setup
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
