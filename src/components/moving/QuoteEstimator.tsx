'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Home,
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Sparkles,
  ArrowRight,
  Package,
  Layers,
  Award
} from 'lucide-react';
import { NESTMOVE_BRAND } from '@/data/movingData';

interface QuoteEstimatorProps {
  onOpenQuoteModalWithData: (data: any) => void;
}

const PROPERTY_TIERS = [
  { id: 'studio-1br', name: 'Studio / 1-Bedroom Apartment', baseAED: 750, cbm: 15, crew: '2 Movers + 1 Carpenter', truck: '14ft Padded Van', duration: '3 - 5 Hours' },
  { id: '2br-apt', name: '2-Bedroom Luxury Apartment', baseAED: 1150, cbm: 28, crew: '3 Movers + 1 Carpenter', truck: '18ft Padded Van', duration: '5 - 7 Hours' },
  { id: '3br-apt', name: '3-Bedroom Penthouse / Apartment', baseAED: 1650, cbm: 42, crew: '4 Movers + 1 Master Carpenter', truck: '24ft Enclosed Truck', duration: '6 - 8 Hours' },
  { id: '3br-villa', name: '3-Bedroom Villa / Townhouse', baseAED: 1950, cbm: 55, crew: '5 Movers + 2 Master Carpenters', truck: '24ft Heavy Truck', duration: '1 Day' },
  { id: '4-5br-villa', name: '4-5 Bedroom Luxury Villa (Palms / Hills)', baseAED: 2950, cbm: 85, crew: '8 Movers + 2 Carpenters + Move Lead', truck: '2x 24ft Enclosed Trucks', duration: '1.5 Days' },
  { id: '6br-mansion', name: '6+ Bedroom Royal Mansion (Emirates Hills)', baseAED: 4800, cbm: 130, crew: '12 Movers + 3 Carpenters + Concierge Lead', truck: '3x 24ft Climate Trucks', duration: '2 Days' },
  { id: 'office-comm', name: 'Corporate Office (20-50 Workstations)', baseAED: 3800, cbm: 70, crew: '8 Commercial Movers + IT Techs', truck: 'Commercial Fleet', duration: 'Overnight / Weekend' },
];

const COMMUNITIES = [
  'Dubai Marina & JBR, Dubai',
  'Palm Jumeirah & Fronds, Dubai',
  'Downtown Dubai & DIFC, Dubai',
  'Dubai Hills Estate & MBR City, Dubai',
  'Emirates Hills & The Meadows, Dubai',
  'Arabian Ranches I, II & III, Dubai',
  'Business Bay Towers, Dubai',
  'Saadiyat Island Beach Villas, Abu Dhabi',
  'Yas Island & Al Raha Beach, Abu Dhabi',
  'Al Maryah Island & Reem Island, Abu Dhabi',
  'Al Zahia & University City, Sharjah',
  'Al Hamra Village, Ras Al Khaimah'
];

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({
  onOpenQuoteModalWithData
}) => {
  const [propertyTierId, setPropertyTierId] = useState('2br-apt');
  const [originCommunity, setOriginCommunity] = useState(COMMUNITIES[0]);
  const [destCommunity, setDestCommunity] = useState(COMMUNITIES[3]);
  const [packingTier, setPackingTier] = useState<'standard' | 'white-glove' | 'full-luxury'>('white-glove');
  const [tvMountCount, setTvMountCount] = useState<number>(2);
  const [woodenCratesCount, setWoodenCratesCount] = useState<number>(1);
  const [includeStorage, setIncludeStorage] = useState<boolean>(false);
  const [includeDeepClean, setIncludeDeepClean] = useState<boolean>(false);

  const selectedTier = PROPERTY_TIERS.find((t) => t.id === propertyTierId) || PROPERTY_TIERS[1];

  // Price calculation in AED
  const calculation = useMemo(() => {
    const base = selectedTier.baseAED;

    // Distance Surcharge (if moving inter-emirate)
    const isInterEmirate =
      (originCommunity.includes('Dubai') && destCommunity.includes('Abu Dhabi')) ||
      (originCommunity.includes('Abu Dhabi') && destCommunity.includes('Dubai')) ||
      (originCommunity.includes('Ras Al Khaimah') || destCommunity.includes('Ras Al Khaimah'));
    
    const interEmirateSurcharge = isInterEmirate ? 450 : 0;

    // Packing Tier Cost
    let packingCost = 0;
    if (packingTier === 'standard') packingCost = 250;
    if (packingTier === 'white-glove') packingCost = 500;
    if (packingTier === 'full-luxury') packingCost = 950;

    // Addons
    const tvCost = tvMountCount * 120;
    const crateCost = woodenCratesCount * 350;
    const storageCost = includeStorage ? 350 : 0;
    const deepCleanCost = includeDeepClean ? 490 : 0;

    const subtotal = base + interEmirateSurcharge + packingCost + tvCost + crateCost + storageCost + deepCleanCost;
    const vat = Math.round(subtotal * 0.05);
    const total = subtotal + vat;

    return {
      base,
      interEmirateSurcharge,
      packingCost,
      tvCost,
      crateCost,
      storageCost,
      deepCleanCost,
      subtotal,
      vat,
      total,
      isInterEmirate
    };
  }, [selectedTier, originCommunity, destCommunity, packingTier, tvMountCount, woodenCratesCount, includeStorage, includeDeepClean]);

  const handleBookWithCalculatedQuote = () => {
    onOpenQuoteModalWithData({
      propertyType: selectedTier.name,
      origin: originCommunity,
      destination: destCommunity,
      packingTier: packingTier === 'full-luxury' ? 'Full Luxury White-Glove' : packingTier === 'white-glove' ? 'White-Glove Pack' : 'Standard Pack',
      addons: [
        tvMountCount > 0 ? `${tvMountCount}x TV Wall Mounts` : null,
        woodenCratesCount > 0 ? `${woodenCratesCount}x Fine Art Wooden Crates` : null,
        includeStorage ? '1 Month Climate Storage' : null,
        includeDeepClean ? 'Post-Move Deep Clean & Pest Control' : null,
      ].filter(Boolean).join(', '),
      estimatedTotalAED: calculation.total,
      crew: selectedTier.crew,
      truck: selectedTier.truck
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#0A0806] relative border-t border-amber-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT RELOCATION ESTIMATOR • 100% AED BINDING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Interactive Volume &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Moving Rate Calculator
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            Select your property size, pickup & destination community, packing tier, and master carpentry add-ons for an instant, guaranteed quote across all 7 Emirates.
          </p>
        </div>

        {/* Calculator Master Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Configuration Column */}
          <div className="lg:col-span-7 rounded-3xl bg-[#120F0C]/95 border border-amber-500/30 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            
            {/* 1. Property Size Selector */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-amber-300 uppercase flex items-center justify-between">
                <span>1. Select Property Type & Scale</span>
                <span className="text-slate-400 font-normal">Est. Volume: {selectedTier.cbm} CBM</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROPERTY_TIERS.map((tier) => {
                  const isSelected = propertyTierId === tier.id;
                  return (
                    <button
                      key={tier.id}
                      onClick={() => setPropertyTierId(tier.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-950/70 border-amber-400 text-white shadow-lg shadow-amber-950/60 ring-1 ring-amber-400/40'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{tier.name}</div>
                      <div className="text-[10px] font-mono text-amber-400 mt-1 flex items-center justify-between">
                        <span>Base: AED {tier.baseAED}</span>
                        <span className="text-slate-400">{tier.duration}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Origin & Destination Communities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pickup Community (UAE)</span>
                </label>
                <select
                  value={originCommunity}
                  onChange={(e) => setOriginCommunity(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  {COMMUNITIES.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>New Home Destination</span>
                </label>
                <select
                  value={destCommunity}
                  onChange={(e) => setDestCommunity(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-500"
                >
                  {COMMUNITIES.map((c, i) => (
                    <option key={i} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 3. Packing & Handling Tier */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="text-xs font-mono font-bold text-amber-300 uppercase">
                2. Select White-Glove Packing Tier:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => setPackingTier('standard')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    packingTier === 'standard'
                      ? 'bg-amber-950/70 border-amber-400 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold block">Standard</span>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">+AED 250</span>
                </button>

                <button
                  onClick={() => setPackingTier('white-glove')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    packingTier === 'white-glove'
                      ? 'bg-amber-950/70 border-amber-400 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold block text-amber-300">White-Glove VIP</span>
                  <span className="text-[10px] font-mono text-amber-400 block mt-0.5">+AED 500</span>
                </button>

                <button
                  onClick={() => setPackingTier('full-luxury')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    packingTier === 'full-luxury'
                      ? 'bg-amber-950/70 border-amber-400 text-white'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="text-xs font-bold block">Royal Turnkey</span>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">+AED 950</span>
                </button>
              </div>
            </div>

            {/* 4. Specialized Carpentry & Add-on Steppers */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="text-xs font-mono font-bold text-slate-300 uppercase">
                3. Precision Carpentry & Specialty Add-Ons:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* TV Wall Mounts */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">TV Wall Mount Bracket</span>
                    <span className="text-[10px] text-slate-400">AED 120 / TV (incl. anchors)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setTvMountCount(Math.max(0, tvMountCount - 1))}
                      className="w-7 h-7 rounded-lg bg-slate-800 text-white font-bold"
                    >
                      -
                    </button>
                    <span className="w-5 text-center font-bold text-amber-400 font-mono">{tvMountCount}</span>
                    <button
                      onClick={() => setTvMountCount(tvMountCount + 1)}
                      className="w-7 h-7 rounded-lg bg-slate-800 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Fine Art Custom Crates */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">Bespoke Art Wooden Crate</span>
                    <span className="text-[10px] text-slate-400">AED 350 / custom crate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setWoodenCratesCount(Math.max(0, woodenCratesCount - 1))}
                      className="w-7 h-7 rounded-lg bg-slate-800 text-white font-bold"
                    >
                      -
                    </button>
                    <span className="w-5 text-center font-bold text-amber-400 font-mono">{woodenCratesCount}</span>
                    <button
                      onClick={() => setWoodenCratesCount(woodenCratesCount + 1)}
                      className="w-7 h-7 rounded-lg bg-slate-800 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Checkbox add-ons */}
              <div className="pt-2 space-y-2">
                <label className="flex items-center gap-3 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeStorage}
                    onChange={(e) => setIncludeStorage(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0 w-4 h-4"
                  />
                  <span>1 Month 24/7 Air-Conditioned Storage Vault (+AED 350/mo)</span>
                </label>

                <label className="flex items-center gap-3 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeDeepClean}
                    onChange={(e) => setIncludeDeepClean(e.target.checked)}
                    className="rounded bg-slate-950 border-slate-700 text-amber-500 focus:ring-0 w-4 h-4"
                  />
                  <span>Post-Move Deep Steam Clean & Dubai Municipality Pest Control (+AED 490)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Live Estimate Summary Invoice HUD */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#16120E] via-[#0E0C09] to-[#070605] border-2 border-amber-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">BINDING QUOTE BREAKDOWN</span>
                <h3 className="text-lg font-bold text-white mt-0.5">Move Specification Plan</h3>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                FIXED PRICE
              </span>
            </div>

            {/* Crew & Truck Specs */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">ASSIGNED CREW:</span>
                <span className="text-emerald-400 font-bold">{selectedTier.crew}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">DISPATCH VEHICLE:</span>
                <span className="text-amber-300 font-bold">{selectedTier.truck}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">EST. TIME ON-SITE:</span>
                <span className="text-white font-bold">{selectedTier.duration}</span>
              </div>
            </div>

            {/* Itemized Pricing */}
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Base Moving & Transport:</span>
                <span className="text-white font-bold">AED {calculation.base}</span>
              </div>
              {calculation.interEmirateSurcharge > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Inter-Emirate Transit Surcharge:</span>
                  <span className="text-cyan-300 font-bold">AED {calculation.interEmirateSurcharge}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-slate-300">
                <span>Packing Materials & Wardrobe Boxes:</span>
                <span className="text-white font-bold">AED {calculation.packingCost}</span>
              </div>
              {calculation.tvCost > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>TV Bracket Mounting ({tvMountCount}x):</span>
                  <span className="text-white font-bold">AED {calculation.tvCost}</span>
                </div>
              )}
              {calculation.crateCost > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Bespoke Art Wooden Crates ({woodenCratesCount}x):</span>
                  <span className="text-amber-300 font-bold">AED {calculation.crateCost}</span>
                </div>
              )}
              {calculation.storageCost > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Climate-Controlled Storage (1 Mo):</span>
                  <span className="text-white font-bold">AED {calculation.storageCost}</span>
                </div>
              )}
              {calculation.deepCleanCost > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>Deep Cleaning & Pest Control:</span>
                  <span className="text-white font-bold">AED {calculation.deepCleanCost}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Subtotal:</span>
                <span>AED {calculation.subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>UAE VAT (5%):</span>
                <span>AED {calculation.vat}</span>
              </div>
            </div>

            {/* Total Highlight */}
            <div className="p-5 rounded-2xl bg-amber-950/60 border border-amber-500/40">
              <span className="text-[10px] font-mono text-amber-300 uppercase block">
                TOTAL ESTIMATED RELOCATION CHARGE
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-sm text-amber-400 font-bold">AED</span>
                <span className="text-4xl font-black text-white font-mono">
                  {calculation.total.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-normal">incl. VAT & Full Insurance</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleBookWithCalculatedQuote}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-black font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-amber-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Confirm & Lock In This Moving Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-slate-500 text-center font-mono">
              *Includes floor protection cladding, basic carpentry, and Emaar/Nakheel permit handling.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
