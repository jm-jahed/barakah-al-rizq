'use client';

import React, { useState } from 'react';
import { Calculator, Truck, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuoteCalculatorProps {
  onOpenQuoteModalWithData: (data: any) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenQuoteModalWithData }) => {
  const [pickup, setPickup] = useState('Dubai');
  const [destination, setDestination] = useState('Abu Dhabi');
  const [packageType, setPackageType] = useState('Standard Parcel');
  const [weightKg, setWeightKg] = useState(5);
  const [speed, setSpeed] = useState<'Standard' | 'Express' | 'SameDay'>('Express');

  // Client-side mock calculation math
  const calculateRate = () => {
    let baseRate = 20;
    if (pickup !== destination) baseRate += 15;
    if (packageType === 'Heavy Cargo') baseRate += 80;
    if (packageType === 'ColdChain Bio-Medical') baseRate += 60;
    
    let weightFee = weightKg * 2.5;
    let speedMultiplier = speed === 'SameDay' ? 1.8 : speed === 'Express' ? 1.4 : 1.0;

    const total = (baseRate + weightFee) * speedMultiplier;
    return total.toFixed(2);
  };

  const calculatedPrice = calculateRate();

  const handleBookQuote = () => {
    onOpenQuoteModalWithData({
      pickup,
      destination,
      packageType,
      weightKg,
      speed,
      estimatedPrice: calculatedPrice,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#070B14] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            TRANSPARENT INSTANT RATE ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Calculate your delivery quote.
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            No hidden fees. Instant rate calculation based on weight, distance, and SLA speed.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="bg-[#0F172A] rounded-3xl border border-blue-500/30 p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Pickup Location */}
            <div>
              <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">
                PICKUP LOCATION
              </label>
              <select
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full p-4 rounded-2xl bg-[#070B14] border border-blue-500/30 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Dubai">Dubai, UAE</option>
                <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                <option value="Sharjah">Sharjah, UAE</option>
                <option value="Ajman">Ajman, UAE</option>
                <option value="Riyadh">Riyadh, Saudi Arabia</option>
              </select>
            </div>

            {/* Delivery Destination */}
            <div>
              <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">
                DELIVERY DESTINATION
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-4 rounded-2xl bg-[#070B14] border border-blue-500/30 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Abu Dhabi">Abu Dhabi, UAE</option>
                <option value="Dubai">Dubai, UAE</option>
                <option value="Sharjah">Sharjah, UAE</option>
                <option value="Doha">Doha, Qatar</option>
                <option value="London">London, UK</option>
              </select>
            </div>

            {/* Package Type */}
            <div>
              <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">
                PACKAGE CATEGORY
              </label>
              <select
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                className="w-full p-4 rounded-2xl bg-[#070B14] border border-blue-500/30 text-white font-mono text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="Standard Parcel">Standard Express Parcel</option>
                <option value="Documents">Important Documents Envelope</option>
                <option value="Heavy Cargo">Heavy Pallet / Cargo</option>
                <option value="ColdChain Bio-Medical">ColdChain Bio-Medical (2°C-8°C)</option>
              </select>
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono font-bold uppercase mb-2">
                <span className="text-gray-300">PACKAGE WEIGHT (KG)</span>
                <span className="text-cyan-400">{weightKg} KG</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full h-2 bg-[#070B14] rounded-lg appearance-none cursor-pointer accent-cyan-400 mt-3"
              />
            </div>

          </div>

          {/* Speed Selection Buttons */}
          <div className="mb-8">
            <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">
              SELECT DELIVERY SPEED SLA
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { key: 'Standard', title: 'Next-Day Delivery', desc: 'Delivered in 24 Hours' },
                { key: 'Express', title: 'Express Same-Day', desc: 'Delivered Today Evening' },
                { key: 'SameDay', title: 'Sub-4-Hour VIP Dispatch', desc: 'Direct Courier Priority' },
              ].map((sp) => (
                <button
                  key={sp.key}
                  type="button"
                  onClick={() => setSpeed(sp.key as any)}
                  className={`p-4 rounded-2xl border text-left transition-all font-mono ${
                    speed === sp.key
                      ? 'bg-blue-600 border-cyan-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-[#070B14] border-white/10 text-gray-300 hover:bg-white/5'
                  }`}
                >
                  <span className="text-xs font-bold block">{sp.title}</span>
                  <span className="text-[10px] text-gray-400 block mt-1">{sp.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Calculated Output Result Card */}
          <div className="p-6 rounded-2xl bg-[#070B14] border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-mono text-gray-400 uppercase block">ESTIMATED RATE</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-5xl font-black font-mono text-cyan-300">
                  AED {calculatedPrice}
                </span>
                <span className="text-xs text-gray-400 font-mono">+ VAT (5%)</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 block mt-1">
                ✓ Guaranteed SLA Delivery: {speed === 'SameDay' ? 'Today, under 4 hours' : speed === 'Express' ? 'Today by 19:00 GST' : 'Tomorrow by 14:00 GST'}
              </span>
            </div>

            <button
              onClick={handleBookQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/30"
            >
              <span>Book Shipment Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
