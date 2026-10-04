'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Plane, 
  Building2, 
  ShieldCheck, 
  Crown, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Calendar,
  Compass
} from 'lucide-react';

interface ItineraryBuilderProps {
  onOpenInquiry: (quoteContext?: string) => void;
}

const DESTINATION_OPTIONS = [
  { id: 'maldives', name: 'Maldives Private Water Reserve', baseNightAED: 9500 },
  { id: 'switzerland', name: 'Swiss Alpine Chalet & St. Moritz', baseNightAED: 12000 },
  { id: 'amalfi', name: 'Amalfi Coast & Capri Clifftop Villa', baseNightAED: 11000 },
  { id: 'japan', name: 'Tokyo Penthouse & Kyoto Ryokan', baseNightAED: 10500 },
  { id: 'serengeti', name: 'Serengeti Private Safari Camp', baseNightAED: 14000 }
];

const FLIGHT_TIERS = [
  { id: 'first-class', name: 'Emirates / Etihad First Class Suites', costAED: 28000, desc: 'Private enclosed suite, shower spa, caviar service, Maybach chauffeur' },
  { id: 'business-class', name: 'Business Class Lie-Flat', costAED: 14000, desc: 'Direct aisle access, priority check-in, lounge access' },
  { id: 'private-jet', name: 'Private Jet Charter (Challenger / G650)', costAED: 95000, desc: 'Direct tarmac boarding DWC/AUH, bespoke catering, zero queues' }
];

const VIP_ADDONS = [
  { id: 'butler', name: '24/7 Dedicated Private Butler', priceAED: 8500 },
  { id: 'yacht-day', name: 'Full-Day Private Yacht / Riva Charter', priceAED: 16500 },
  { id: 'helicopter-transfer', name: 'Helicopter Scenic Transfer / Matterhorn Summit', priceAED: 14500 },
  { id: 'michelin-dining', name: 'Michelin Chef Private Dining Immersion (x3)', priceAED: 9200 }
];

export const ItineraryBuilder: React.FC<ItineraryBuilderProps> = ({ onOpenInquiry }) => {
  const [selectedDestId, setSelectedDestId] = useState<string>('maldives');
  const [nights, setNights] = useState<number>(7);
  const [selectedFlightId, setSelectedFlightId] = useState<string>('first-class');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['butler', 'yacht-day']);
  const shouldReduceMotion = useReducedMotion();

  const currentDest = DESTINATION_OPTIONS.find((d) => d.id === selectedDestId) || DESTINATION_OPTIONS[0];
  const currentFlight = FLIGHT_TIERS.find((f) => f.id === selectedFlightId) || FLIGHT_TIERS[0];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) => 
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Calculations in AED
  const accommodationTotal = currentDest.baseNightAED * nights;
  const flightTotal = currentFlight.costAED * 2; // For 2 guests
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = VIP_ADDONS.find((a) => a.id === id);
    return sum + (item ? item.priceAED : 0);
  }, 0);
  const grandTotalAED = accommodationTotal + flightTotal + addonsTotal;

  return (
    <section id="itinerary-builder" className="py-28 bg-[#090C12] relative overflow-hidden font-sans border-b border-white/10">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>INTERACTIVE BESPOKE ITINERARY CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Engineer Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">Custom Journey</span>.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Configure nights, flight tier, private island villa specifications, and exclusive VIP perks with real-time transparent AED pricing.
            </p>
          </div>

          <div className="text-right font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold block">Live Currency Engine</span>
            <span className="text-[11px] text-slate-500">All Taxes, Transfers & VAT Included</span>
          </div>
        </div>

        {/* 2-Column Builder Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0F141E] border border-white/10 space-y-7 shadow-2xl backdrop-blur-md">
            
            {/* 1. Destination Sanctuary */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                1. Select Destination & Luxury Villa Tier:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DESTINATION_OPTIONS.map((dest) => {
                  const isSelected = dest.id === selectedDestId;
                  return (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => setSelectedDestId(dest.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white font-bold shadow-md'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold text-white mb-0.5">{dest.name}</div>
                      <div className="text-[11px] text-amber-400/90 font-mono">AED {dest.baseNightAED.toLocaleString()} / night</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Duration Slider */}
            <div className="space-y-3 p-5 rounded-2xl bg-black/40 border border-white/5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                  2. Length of Stay:
                </label>
                <span className="text-lg sm:text-xl font-black font-mono text-amber-300">
                  {nights} Nights ({nights + 1} Days)
                </span>
              </div>

              <input
                type="range"
                min={3}
                max={21}
                step={1}
                value={nights}
                onChange={(e) => setNights(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>3 Nights (Weekend)</span>
                <span>7 Nights (Standard)</span>
                <span>21 Nights (Grand Retreat)</span>
              </div>
            </div>

            {/* 3. Flight Class */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                3. Flight & Aviation Cabin Tier (for 2 Guests):
              </label>
              <div className="space-y-2.5">
                {FLIGHT_TIERS.map((flight) => {
                  const isSelected = flight.id === selectedFlightId;
                  return (
                    <button
                      key={flight.id}
                      type="button"
                      onClick={() => setSelectedFlightId(flight.id)}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/15 border-amber-400 text-white font-bold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{flight.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{flight.desc}</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-300 shrink-0">
                        +AED {(flight.costAED * 2).toLocaleString()} Total
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. VIP Add-ons */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                4. Bespoke Concierge & VIP Add-ons:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {VIP_ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-bold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div>
                        <div className="text-xs text-white leading-tight">{addon.name}</div>
                        <div className="text-[10px] font-mono text-amber-400 mt-0.5">+AED {addon.priceAED.toLocaleString()}</div>
                      </div>
                      <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-slate-700'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Quote Summary (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121722] via-[#0E131C] to-[#0A0D14] border border-amber-500/30 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-0.5">
                  ESTIMATED TRIP INVESTMENT
                </span>
                <h3 className="text-xl font-black text-white">
                  Bespoke Itinerary Quote
                </h3>
              </div>
              <Crown className="w-5 h-5 text-amber-400" />
            </div>

            {/* Quote Line Item Table */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Accommodation ({nights} Nights):</span>
                <span className="text-white font-bold">AED {accommodationTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Aviation ({currentFlight.name.split(' ')[0]} x2):</span>
                <span className="text-white font-bold">AED {flightTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">VIP Add-ons ({selectedAddons.length} selected):</span>
                <span className="text-white font-bold">AED {addonsTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Door-to-Door UAE Chauffeur:</span>
                <span className="text-emerald-400 font-bold">Included (Complimentary)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-slate-400">Ahlan DXB Fast-Track:</span>
                <span className="text-emerald-400 font-bold">Included (Complimentary)</span>
              </div>
              
              <div className="pt-3 flex justify-between items-center text-sm">
                <span className="text-slate-300 font-bold">Estimated Grand Total:</span>
                <span className="text-2xl font-black font-mono text-amber-300">
                  AED {grandTotalAED.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 text-xs text-slate-300 leading-relaxed font-mono">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4" />
                <span>Price Match & White-Glove Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All quotes include 24/7 dedicated travel director, flexible rebooking options, and full VAT/resort fee transparency.
              </p>
            </div>

            {/* Dispatch Button */}
            <button
              type="button"
              onClick={() => onOpenInquiry(`Custom Itinerary: ${currentDest.name} (${nights} Nights, ${currentFlight.name}, Total AED ${grandTotalAED.toLocaleString()})`)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            >
              <span>Lock In Proposal & Reserve</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
