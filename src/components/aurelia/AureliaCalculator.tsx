'use client';

import React, { useState } from 'react';
import { Sliders, Building2, Download, MessageSquare, CheckCircle2, ArrowRight, Landmark, ShieldCheck } from 'lucide-react';
import { AURELIA_BRAND } from '@/data/aureliaData';

interface AureliaCalculatorProps {
  onOpenViewing: () => void;
}

export const AureliaCalculator: React.FC<AureliaCalculatorProps> = ({ onOpenViewing }) => {
  const [propType, setPropType] = useState<'waterfront' | 'penthouse' | 'compound' | 'branded'>('waterfront');
  const [location, setLocation] = useState<string>('Palm Jumeirah');
  const [buaSqM, setBuaSqM] = useState<number>(2000);
  
  // Luxury Add-ons
  const [includePool, setIncludePool] = useState<boolean>(true);
  const [includeShowroom, setIncludeShowroom] = useState<boolean>(true);
  const [includeSmartHome, setIncludeSmartHome] = useState<boolean>(true);
  const [includeHammam, setIncludeHammam] = useState<boolean>(true);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Calculations
  const ratePerSqM =
    propType === 'waterfront'
      ? 48000
      : propType === 'penthouse'
      ? 54000
      : propType === 'compound'
      ? 44000
      : 50000;

  const baseConstructionCost = buaSqM * ratePerSqM;
  const poolCost = includePool ? 8500000 : 0;
  const showroomCost = includeShowroom ? 12000000 : 0;
  const smartHomeCost = includeSmartHome ? 6500000 : 0;
  const hammamCost = includeHammam ? 5500000 : 0;

  const totalAddons = poolCost + showroomCost + smartHomeCost + hammamCost;
  const subtotalCapital = baseConstructionCost + totalAddons;
  
  // 4% DLD Registration Fee
  const dldFee = Math.round(subtotalCapital * 0.04);
  
  // 5% UAE VAT on construction/services
  const vatFee = Math.round(subtotalCapital * 0.05);

  // Total Capital
  const totalInvestmentAed = subtotalCapital + dldFee + vatFee;
  const estimatedYieldAed = Math.round(totalInvestmentAed * 0.068);

  const handleWhatsAppQuote = () => {
    const text = `*AURELIA ESTATES — Turnkey Estate Capital Quote (AED)*%0A%0A` +
      `*Category:* ${propType.toUpperCase()}%0A` +
      `*Prime Address:* ${location}%0A` +
      `*Built-Up Area (BUA):* ${buaSqM.toLocaleString()} sq m (${Math.round(buaSqM * 10.764).toLocaleString()} sq ft)%0A%0A` +
      `*Base Construction Capital:* AED ${baseConstructionCost.toLocaleString()}%0A` +
      `*Luxury Installations:* AED ${totalAddons.toLocaleString()}%0A` +
      `*4% DLD Registration Fee:* AED ${dldFee.toLocaleString()}%0A` +
      `*5% UAE VAT:* AED ${vatFee.toLocaleString()}%0A` +
      `*Total Turnkey Capital:* AED ${totalInvestmentAed.toLocaleString()}%0A` +
      `*Estimated Annual Rental Yield:* AED ${estimatedYieldAed.toLocaleString()} (~6.8%)%0A%0A` +
      `Please schedule an architectural consultation at DIFC Gate Village 3.`;

    window.open(`https://wa.me/971508821122?text=${text}`, '_blank');
  };

  const handleCopyQuote = () => {
    const text = `AURELIA ESTATES TURNKEY CAPITAL ESTIMATE\nCategory: ${propType.toUpperCase()}\nLocation: ${location}\nBUA: ${buaSqM.toLocaleString()} sq m\nBase Construction: AED ${baseConstructionCost.toLocaleString()}\n4% DLD Fee: AED ${dldFee.toLocaleString()}\n5% VAT: AED ${vatFee.toLocaleString()}\nTotal Capital: AED ${totalInvestmentAed.toLocaleString()}\nContact: +971 4 362 8800 / private@aureliaestates.ae`;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="calc-section" className="py-24 bg-[#0C1013] border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/30 text-stone-300 text-xs font-mono">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE ESTATE CAPITAL & DEVELOPMENT CALCULATOR (AED)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-serif">
            Turnkey Estate Capital Estimator
          </h2>
          <p className="text-gray-400 text-sm font-sans max-w-2xl mx-auto">
            Configure land acquisition, built-up area (BUA), and luxury installations to dynamically project total turnkey capital in AED, DLD fees, and estimated annual rental yield.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 bg-[#13191D] p-6 sm:p-8 rounded-3xl border border-stone-700 space-y-6 shadow-xl backdrop-blur-md">
            
            {/* Property Category */}
            <div>
              <label className="text-xs font-mono font-bold text-stone-300 uppercase block mb-3">
                1. Select Property Category
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'waterfront', label: 'Waterfront Villa' },
                  { id: 'penthouse', label: 'Sky Penthouse' },
                  { id: 'compound', label: 'Private Compound' },
                  { id: 'branded', label: 'Branded Residence' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setPropType(t.id as any)}
                    className={`p-3.5 rounded-2xl font-mono text-xs font-bold text-left transition-all cursor-pointer border ${
                      propType === t.id
                        ? 'bg-stone-200 text-black border-white font-extrabold shadow-[0_0_15px_rgba(214,211,209,0.3)]'
                        : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Prime Location Selector */}
            <div>
              <label className="text-xs font-mono font-bold text-stone-300 uppercase block mb-2">
                2. Prime Address Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#090C0E] border border-stone-600 text-white font-mono text-xs focus:border-stone-300 outline-none cursor-pointer"
              >
                <option value="Palm Jumeirah Waterfront" className="bg-[#13191D]">Palm Jumeirah Waterfront (Dubai)</option>
                <option value="Emirates Hills Golf Estate" className="bg-[#13191D]">Emirates Hills Golf Estate (Dubai)</option>
                <option value="Jumeirah Bay Island" className="bg-[#13191D]">Jumeirah Bay Island (Dubai)</option>
                <option value="Saadiyat Cultural District" className="bg-[#13191D]">Saadiyat Cultural District (Abu Dhabi)</option>
                <option value="Dubai Hills Parkway" className="bg-[#13191D]">Dubai Hills Parkway (Dubai)</option>
                <option value="Nad Al Sheba Royal Enclave" className="bg-[#13191D]">Nad Al Sheba Royal Enclave (Dubai)</option>
              </select>
            </div>

            {/* BUA Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold text-stone-300 uppercase">
                  Built-Up Area (BUA):
                </label>
                <span className="text-xs font-mono font-extrabold text-stone-200">
                  {buaSqM.toLocaleString()} sq m ({Math.round(buaSqM * 10.764).toLocaleString()} sq ft)
                </span>
              </div>
              <input
                type="range"
                min={1000}
                max={4500}
                step={100}
                value={buaSqM}
                onChange={(e) => setBuaSqM(Number(e.target.value))}
                className="w-full accent-stone-300 bg-white/10 h-2.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Luxury Add-on Installations */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-stone-300 uppercase block">
                Bespoke Architectural Installations
              </span>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C0E] border border-white/10 cursor-pointer hover:border-stone-400 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">22m Saltwater Zero-Edge Infinity Pool</span>
                  <span className="text-[11px] font-mono text-gray-400">Heating, hydrotherapy jets & sunken firepit</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-stone-300">+AED 8.5M</span>
                  <input
                    type="checkbox"
                    checked={includePool}
                    onChange={(e) => setIncludePool(e.target.checked)}
                    className="w-4 h-4 accent-stone-300 cursor-pointer"
                  />
                </div>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C0E] border border-white/10 cursor-pointer hover:border-stone-400 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Subterranean 8-Car Showroom Garage & Lift</span>
                  <span className="text-[11px] font-mono text-gray-400">Turntable, glass viewing ceiling & climate lock</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-stone-300">+AED 12M</span>
                  <input
                    type="checkbox"
                    checked={includeShowroom}
                    onChange={(e) => setIncludeShowroom(e.target.checked)}
                    className="w-4 h-4 accent-stone-300 cursor-pointer"
                  />
                </div>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C0E] border border-white/10 cursor-pointer hover:border-stone-400 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">KNX Full Smart Home & Biometric Telemetry</span>
                  <span className="text-[11px] font-mono text-gray-400">Automated scenes, facial entry & perimeter radar</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-stone-300">+AED 6.5M</span>
                  <input
                    type="checkbox"
                    checked={includeSmartHome}
                    onChange={(e) => setIncludeSmartHome(e.target.checked)}
                    className="w-4 h-4 accent-stone-300 cursor-pointer"
                  />
                </div>
              </label>

              <label className="flex items-center justify-between p-3.5 rounded-xl bg-[#090C0E] border border-white/10 cursor-pointer hover:border-stone-400 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Moroccan Hammam Spa & Sommelier Wine Vault</span>
                  <span className="text-[11px] font-mono text-gray-400">Thermal stone steam room & 600-bottle vault</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-stone-300">+AED 5.5M</span>
                  <input
                    type="checkbox"
                    checked={includeHammam}
                    onChange={(e) => setIncludeHammam(e.target.checked)}
                    className="w-4 h-4 accent-stone-300 cursor-pointer"
                  />
                </div>
              </label>
            </div>

          </div>

          {/* Right Column: Capital Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1C252B] via-[#13191D] to-[#090C0E] p-6 sm:p-8 rounded-3xl border border-stone-600 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-stone-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-stone-300 uppercase tracking-widest">
                Turnkey Capital Summary
              </span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold">
                100% FREEHOLD
              </span>
            </div>

            {/* Total Capital Headline */}
            <div>
              <span className="text-[11px] font-mono text-gray-400 uppercase block">
                Estimated Turnkey Estate Capital (AED)
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight mt-1">
                AED {totalInvestmentAed.toLocaleString()}
              </div>
              <div className="mt-3 inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                Est. Rental Yield: AED {estimatedYieldAed.toLocaleString()} / Yr (~6.8%)
              </div>
            </div>

            {/* Itemized Breakdown */}
            <div className="space-y-3 p-4 rounded-2xl bg-[#090C0E]/90 border border-white/5 font-mono text-xs">
              <div className="flex justify-between text-gray-300">
                <span>Base Construction ({buaSqM.toLocaleString()} sqm):</span>
                <span className="text-white font-bold">AED {baseConstructionCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Selected Luxury Installations:</span>
                <span className="text-white font-bold">AED {totalAddons.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-stone-300 border-t border-white/5 pt-2">
                <span>4% DLD Registration Fee:</span>
                <span className="font-bold">AED {dldFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>5% UAE Federal VAT:</span>
                <span className="text-white font-bold">AED {vatFee.toLocaleString()}</span>
              </div>
            </div>

            {/* Value Guarantees */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-[11px] font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>10-Year Comprehensive Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% DLD Project Escrow Account Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>10-Year UAE Golden Visa VIP Legal Registration</span>
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
                <span>TRANSMIT CAPITAL QUOTE (WHATSAPP)</span>
              </button>

              <button
                type="button"
                onClick={handleCopyQuote}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-stone-300" />
                <span>{isCopied ? 'COPIED TO CLIPBOARD ✓' : 'COPY ITEMIZED FINANCIAL LEDGER'}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
