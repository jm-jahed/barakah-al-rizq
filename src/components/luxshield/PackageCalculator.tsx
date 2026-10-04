'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, ArrowRight, Star, ShieldCheck, Sparkles, Sliders, Info } from 'lucide-react';
import { LUXSHIELD_PACKAGES, LUXSHIELD_BRAND, LUXSHIELD_LOCATIONS } from '@/data/luxshieldData';

interface PackageCalculatorProps {
  onOpenBookingModal: (pkgId?: string) => void;
}

export const PackageCalculator: React.FC<PackageCalculatorProps> = ({ onOpenBookingModal }) => {
  const [vehicleSize, setVehicleSize] = useState<'sedan' | 'suv' | 'sports'>('sedan');
  const [selectedPkgId, setSelectedPkgId] = useState<string>('signature');
  const [selectedStudio, setSelectedStudio] = useState<string>('dubai');

  // Add-on options
  const [addWindowTint, setAddWindowTint] = useState<boolean>(true);
  const [addInteriorShield, setAddInteriorShield] = useState<boolean>(true);
  const [addWheelCoating, setAddWheelCoating] = useState<boolean>(false);
  const [addWindshieldArmor, setAddWindshieldArmor] = useState<boolean>(false);

  const sizes = [
    { id: 'sedan', label: 'Sedan / Saloon', desc: 'e.g. BMW 5/7, Mercedes S-Class, Porsche Panamera' },
    { id: 'suv', label: 'Luxury SUV / 4x4', desc: 'e.g. Range Rover, G-Wagon, Defender, Urus' },
    { id: 'sports', label: 'Supercar / Coupe', desc: 'e.g. 911 GT3, Ferrari F8, Huracán, McLaren' }
  ];

  const selectedPkg = LUXSHIELD_PACKAGES.find(p => p.id === selectedPkgId) || LUXSHIELD_PACKAGES[1];

  // Base price
  const rawBasePrice = parseInt(selectedPkg.pricing[vehicleSize].replace(/,/g, ''), 10);

  // Add-ons
  let addOnsTotal = 0;
  if (addWindowTint) addOnsTotal += 850;
  if (addInteriorShield) addOnsTotal += 650;
  if (addWheelCoating) addOnsTotal += 750;
  if (addWindshieldArmor) addOnsTotal += 950;

  const subTotal = rawBasePrice + addOnsTotal;
  const vatAmount = subTotal * 0.05;
  const grandTotal = subTotal + vatAmount;

  const whatsappMessage = encodeURIComponent(
    `Hello LUXSHIELD Studio Concierge,\n\nI configured a detailing package on your portal:\n• Vehicle: ${sizes.find(s => s.id === vehicleSize)?.label}\n• Package: ${selectedPkg.name} (${selectedPkg.tagline})\n• Studio: ${selectedStudio === 'dubai' ? 'Al Quoz 1 Dubai' : 'Mussafah M-14 Abu Dhabi'}\n• Add-Ons: ${[
      addWindowTint ? 'IR Ceramic Window Tint' : '',
      addInteriorShield ? 'Leather & Alcantara Interior Shield' : '',
      addWheelCoating ? 'Wheel & Caliper Ceramic' : '',
      addWindshieldArmor ? 'Windshield Armor Film' : ''
    ].filter(Boolean).join(', ') || 'None'}\n• Estimated Total: AED ${Math.round(grandTotal).toLocaleString()} (incl. 5% VAT)\n• Warranty: ${selectedPkg.warrantyText}\n\nPlease confirm availability and studio slot.`
  );

  return (
    <section id="packages" className="py-24 bg-[#0B0C0E] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE UAE DETAILING &amp; PPF CONFIGURATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Configure Your Vehicle Protection
          </h2>
          <p className="text-gray-300 text-base font-light">
            Select your vehicle category, protection package, and bespoke climate add-ons to calculate an instant all-inclusive AED estimate with UAE warranty certification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-[#14161A] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Step 1: Vehicle Category */}
            <div>
              <label className="block text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                1. Select Vehicle Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setVehicleSize(s.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      vehicleSize === s.id
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-950/40'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="text-xs font-bold block text-white">{s.label}</span>
                    <span className="text-[10px] text-gray-400 block mt-1 line-clamp-1">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Protection Package */}
            <div>
              <label className="block text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                2. Choose Protection Standard
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {LUXSHIELD_PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      selectedPkgId === pkg.id
                        ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-950/40'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-blue-600 text-[9px] font-mono font-black uppercase text-white shadow">
                        Popular
                      </span>
                    )}
                    <span className="text-xs font-bold block text-white font-mono">{pkg.name}</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5 font-mono">{pkg.warrantyText}</span>
                    <span className="text-sm font-black text-amber-300 font-mono block mt-2">
                      AED {pkg.pricing[vehicleSize]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Studio Location */}
            <div>
              <label className="block text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                3. Studio Location
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedStudio('dubai')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedStudio === 'dubai'
                      ? 'bg-blue-600/20 border-blue-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold block text-white">Al Quoz 1 Flagship Studio (Dubai)</span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">12-Bay Climate Booths &amp; VIP Lounge</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedStudio('abudhabi')}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedStudio === 'abudhabi'
                      ? 'bg-blue-600/20 border-blue-500 text-white'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-bold block text-white">Mussafah M-14 Studio (Abu Dhabi)</span>
                  <span className="text-[10px] text-gray-400 block mt-0.5">Computerized Graphtec PPF Plotter</span>
                </button>
              </div>
            </div>

            {/* Step 4: Add-Ons */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <label className="block text-xs font-mono font-bold text-gray-300 uppercase tracking-wider">
                4. Optional Climate Armor Add-Ons
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 bg-[#0B0C0E] rounded-xl border border-white/10 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={addWindowTint}
                    onChange={(e) => setAddWindowTint(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-black border-gray-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">IR Ceramic Window Tinting</span>
                    <span className="text-[10px] text-gray-400">+AED 850 (85% Heat Rejection)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#0B0C0E] rounded-xl border border-white/10 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={addInteriorShield}
                    onChange={(e) => setAddInteriorShield(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-black border-gray-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Leather &amp; Alcantara Ceramic</span>
                    <span className="text-[10px] text-gray-400">+AED 650 (Anti-Heat Cracking)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#0B0C0E] rounded-xl border border-white/10 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={addWheelCoating}
                    onChange={(e) => setAddWheelCoating(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-black border-gray-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Wheel Barrel &amp; Caliper Coat</span>
                    <span className="text-[10px] text-gray-400">+AED 750 (Brake Dust Shield)</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-[#0B0C0E] rounded-xl border border-white/10 cursor-pointer hover:border-white/20">
                  <input
                    type="checkbox"
                    checked={addWindshieldArmor}
                    onChange={(e) => setAddWindshieldArmor(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600 focus:ring-0 bg-black border-gray-700"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Windshield PPF Clear Armor</span>
                    <span className="text-[10px] text-gray-400">+AED 950 (Anti Sand-Pitting)</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Quotation Summary Column (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#14161A] to-[#0D1016] border-2 border-blue-500/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">Custom Estimate</span>
                  <h3 className="text-xl font-bold text-white">{selectedPkg.name} PACKAGE</h3>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full text-[10px] font-mono font-bold">
                  {selectedPkg.warrantyText}
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Vehicle Category:</span>
                  <strong className="text-white font-mono capitalize">{vehicleSize}</strong>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Base Package ({selectedPkg.name}):</span>
                  <span className="text-white font-mono">AED {rawBasePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Selected Add-Ons:</span>
                  <span className="text-white font-mono">AED {addOnsTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400 pt-2 border-t border-white/10">
                  <span>UAE 5% VAT:</span>
                  <span className="text-gray-300 font-mono">AED {Math.round(vatAmount).toLocaleString()}</span>
                </div>
              </div>

              {/* Total Box */}
              <div className="bg-[#0B0C0E] p-5 rounded-2xl border border-blue-500/40 text-center space-y-1">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                  Total Investment (in AED)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">
                  AED {Math.round(grandTotal).toLocaleString()}
                </div>
                <span className="text-[11px] text-emerald-400 block font-mono">
                  Includes {selectedPkg.warrantyText} &amp; Certificate
                </span>
              </div>

              {/* Key Highlights */}
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Climate-controlled dust-free curing booth</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Free enclosed recovery transport on request</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Annual maintenance audit &amp; inspection included</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={whatsappMessage ? `https://wa.me/971523394001?text=${whatsappMessage}` : LUXSHIELD_BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all font-mono"
              >
                <span>💬</span>
                <span>Send Estimate via WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBookingModal(selectedPkgId)}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all font-mono"
              >
                <span>Book Studio Slot Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};