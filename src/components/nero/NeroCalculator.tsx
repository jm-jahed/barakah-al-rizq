'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Anchor, Sparkles, MessageSquare, Download, CheckCircle2, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { YACHT_FLEET_DATA, NERO_BRAND } from '@/data/neroData';

interface NeroCalculatorProps {
  initialYachtId?: string;
  onOpenBooking: () => void;
}

export const NeroCalculator: React.FC<NeroCalculatorProps> = ({
  initialYachtId = 'nero-sovereign',
  onOpenBooking
}) => {
  const [selectedYachtId, setSelectedYachtId] = useState<string>(initialYachtId);
  const [charterMode, setCharterMode] = useState<'daily' | 'weekly'>('weekly');
  const [durationUnits, setDurationUnits] = useState<number>(7);
  const [guestCount, setGuestCount] = useState<number>(10);
  const [selectedRoute, setSelectedRoute] = useState<string>('dubai-world-islands');
  
  // Luxury Add-ons
  const [includeChef, setIncludeChef] = useState<boolean>(true);
  const [includeToys, setIncludeToys] = useState<boolean>(true);
  const [includeVipTransfer, setIncludeVipTransfer] = useState<boolean>(false);
  const [includeSecurity, setIncludeSecurity] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const yacht = YACHT_FLEET_DATA.find((y) => y.id === selectedYachtId) || YACHT_FLEET_DATA[0];

  // Calculations
  const baseRatePerUnit = charterMode === 'weekly' ? yacht.weeklyRateAed : yacht.dailyRateAed;
  const calculatedBaseRate =
    charterMode === 'weekly'
      ? Math.round((yacht.weeklyRateAed / 7) * durationUnits)
      : Math.round(yacht.dailyRateAed * durationUnits);

  const chefCost = includeChef ? 35000 : 0;
  const toysCost = includeToys ? 25000 : 0;
  const vipTransferCost = includeVipTransfer ? 18000 : 0;
  const securityCost = includeSecurity ? 15000 : 0;

  const totalAddons = chefCost + toysCost + vipTransferCost + securityCost;
  const netCharterFee = calculatedBaseRate + totalAddons;
  
  // 30% APA (Advance Provisioning Allowance)
  const apaFee = Math.round(netCharterFee * (yacht.apaRatePercentage / 100));
  
  // 5% UAE VAT
  const vatFee = Math.round(netCharterFee * (yacht.vatPercentage / 100));

  // Grand Total in AED
  const grandTotalAed = netCharterFee + apaFee + vatFee;

  const handleWhatsAppQuote = () => {
    const text = `*NERO MARINE — Superyacht Charter Quote (AED)*%0A%0A` +
      `*Vessel:* ${yacht.name} (${yacht.lengthFeet} ft)%0A` +
      `*Duration:* ${durationUnits} ${charterMode === 'weekly' ? 'Days' : 'Days (Day Charter)'}%0A` +
      `*Guests:* ${guestCount} Passengers%0A` +
      `*Route:* ${selectedRoute}%0A%0A` +
      `*Base Charter:* AED ${calculatedBaseRate.toLocaleString()}%0A` +
      `*Add-ons:* AED ${totalAddons.toLocaleString()}%0A` +
      `*30% APA Deposit:* AED ${apaFee.toLocaleString()}%0A` +
      `*5% UAE VAT:* AED ${vatFee.toLocaleString()}%0A` +
      `*Grand Total:* AED ${grandTotalAed.toLocaleString()}%0A%0A` +
      `Please confirm slot availability at Dubai Harbour Berth A-14.`;

    window.open(`https://wa.me/971508821122?text=${text}`, '_blank');
  };

  const handleCopyQuote = () => {
    const text = `NERO MARINE SUPERYACHT CHARTER ESTIMATE\nVessel: ${yacht.name} (${yacht.lengthFeet}ft)\nDuration: ${durationUnits} Days\nBase Charter: AED ${calculatedBaseRate.toLocaleString()}\n30% APA: AED ${apaFee.toLocaleString()}\n5% VAT: AED ${vatFee.toLocaleString()}\nTotal: AED ${grandTotalAed.toLocaleString()}\nContact: +971 4 399 7700 / charter@neromarine.ae`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="charter-calc" className="py-24 bg-[#050C18] border-b border-cyan-500/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE APA & CHARTER COST CALCULATOR (AED)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Superyacht Cost & Provisioning Estimator
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Compute transparent, all-inclusive pricing in UAE Dirhams (AED) including base charter hire, 30% Advance Provisioning Allowance (APA), 5% UAE VAT, and bespoke luxury additions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-[#091322] p-6 sm:p-8 rounded-3xl border border-cyan-500/30 space-y-6 shadow-xl backdrop-blur-md">
            
            {/* Vessel Selection */}
            <div>
              <label className="text-xs font-mono font-bold text-cyan-300 uppercase block mb-2">
                1. Select Superyacht Vessel
              </label>
              <select
                value={selectedYachtId}
                onChange={(e) => setSelectedYachtId(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#040914] border border-cyan-500/30 text-white font-mono text-xs focus:border-cyan-400 outline-none cursor-pointer"
              >
                {YACHT_FLEET_DATA.map((y) => (
                  <option key={y.id} value={y.id} className="bg-[#091322]">
                    {y.name} ({y.lengthFeet} FT) — AED {y.dailyRateAed.toLocaleString()}/day • {y.crew} Crew
                  </option>
                ))}
              </select>
            </div>

            {/* Mode & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">
                  Charter Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setCharterMode('weekly');
                      setDurationUnits(7);
                    }}
                    className={`py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                      charterMode === 'weekly'
                        ? 'bg-cyan-500 text-black border-cyan-400 font-extrabold shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Weekly Voyage
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setCharterMode('daily');
                      setDurationUnits(2);
                    }}
                    className={`py-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                      charterMode === 'daily'
                        ? 'bg-cyan-500 text-black border-cyan-400 font-extrabold shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Day Charter
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">
                    Duration:
                  </label>
                  <span className="text-xs font-mono font-extrabold text-cyan-400">
                    {durationUnits} {durationUnits === 1 ? 'Day' : 'Days'}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={charterMode === 'weekly' ? 14 : 7}
                  value={durationUnits}
                  onChange={(e) => setDurationUnits(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-white/10 h-2.5 rounded-lg cursor-pointer mt-2"
                />
              </div>
            </div>

            {/* Guest Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-gray-300 uppercase">
                  Guest Passengers (Max {yacht.guestsCruising})
                </label>
                <span className="text-xs font-mono font-extrabold text-white">
                  {guestCount} Guests
                </span>
              </div>
              <input
                type="range"
                min={2}
                max={yacht.guestsCruising}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-white/10 h-2.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Itinerary Route Preference */}
            <div>
              <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">
                Preferred Marine Passage / Destination
              </label>
              <select
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#040914] border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none cursor-pointer"
              >
                <option value="Dubai Marina & World Islands Private Sanctuary">Dubai Marina, Palm Jumeirah Lagoon & World Islands</option>
                <option value="Abu Dhabi Yas Marina & Sir Bani Yas Island">Abu Dhabi Yas Marina & Sir Bani Yas Nature Reserve</option>
                <option value="Musandam Oman Fjords & Straits of Hormuz">Musandam Oman Limestone Fjords & Dolphin Safari</option>
                <option value="Custom Arabian Gulf Archipelago Cruise">Custom Sovereign Island & Deep-Sea Fishing Route</option>
              </select>
            </div>

            {/* Luxury Add-On Options */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase block">
                Bespoke Maritime Add-Ons & Services
              </span>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#040914] border border-white/10 cursor-pointer hover:border-cyan-500/40 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Royal Caviar & 3-Star Michelin Chef Tasting</span>
                  <span className="text-[11px] font-mono text-gray-400">Beluga caviar, grilled lobster, and dedicated sommelier</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">+AED 35,000</span>
                  <input
                    type="checkbox"
                    checked={includeChef}
                    onChange={(e) => setIncludeChef(e.target.checked)}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer"
                  />
                </div>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#040914] border border-white/10 cursor-pointer hover:border-cyan-500/40 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Complete Marine Toys & eFoil Package</span>
                  <span className="text-[11px] font-mono text-gray-400">2x Seabobs, 2x Fliteboards, 9m inflatable water slide</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">+AED 25,000</span>
                  <input
                    type="checkbox"
                    checked={includeToys}
                    onChange={(e) => setIncludeToys(e.target.checked)}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer"
                  />
                </div>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#040914] border border-white/10 cursor-pointer hover:border-cyan-500/40 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Rolls-Royce Chauffeur & Helicopter Gangway Transfer</span>
                  <span className="text-[11px] font-mono text-gray-400">Direct tarmac pick-up and helipad touch-and-go access</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">+AED 18,000</span>
                  <input
                    type="checkbox"
                    checked={includeVipTransfer}
                    onChange={(e) => setIncludeVipTransfer(e.target.checked)}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer"
                  />
                </div>
              </label>
            </div>

          </div>

          {/* Right Column: Financial Breakdown Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F223D] via-[#091526] to-[#040914] p-6 sm:p-8 rounded-3xl border border-cyan-500/40 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Charter Estimate Summary
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                MYBA STANDARD
              </span>
            </div>

            {/* Grand Total AED Headline */}
            <div>
              <span className="text-[11px] font-mono text-gray-400 uppercase block">
                Estimated All-Inclusive Total (AED)
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight mt-1">
                AED {grandTotalAed.toLocaleString()}
              </div>
              <p className="text-xs font-mono text-cyan-300 mt-2">
                {yacht.name} • {durationUnits} Days • {guestCount} Guests
              </p>
            </div>

            {/* Itemized Financial Ledger */}
            <div className="space-y-3 p-4 rounded-2xl bg-[#040914]/80 border border-white/5 font-mono text-xs">
              <div className="flex justify-between text-gray-300">
                <span>Base Vessel Hire ({durationUnits} Days):</span>
                <span className="text-white font-bold">AED {calculatedBaseRate.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Selected Add-Ons & Catering:</span>
                <span className="text-white font-bold">AED {totalAddons.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-cyan-300 border-t border-white/5 pt-2">
                <span>30% APA Deposit (Provisioning):</span>
                <span className="font-bold">AED {apaFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>5% UAE Federal VAT:</span>
                <span className="text-white font-bold">AED {vatFee.toLocaleString()}</span>
              </div>
            </div>

            {/* Included Value Badges */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-[11px] font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{yacht.crew} Dedicated Crew Members & Master Captain</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Dubai Harbour Marina Berth A-14 Dockage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Starlink High-Speed Satellite Maritime Internet</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>TRANSMIT QUOTE VIA WHATSAPP</span>
              </button>

              <button
                type="button"
                onClick={handleCopyQuote}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{isCopied ? 'COPIED TO CLIPBOARD ✓' : 'COPY ITEMIZED LEDGER'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
