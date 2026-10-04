'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  Package,
  Layers,
  ThermometerSnowflake,
  Plane,
  HelpCircle
} from 'lucide-react';
import { LOGISTICS_BRAND_INFO } from '@/data/logisticsData';

interface LogisticsRateCalculatorProps {
  onOpenQuoteModalWithData: (data: any) => void;
}

const ORIGINS = [
  'Dubai South Logistics District, UAE',
  'DIFC / Downtown Dubai, UAE',
  'Jebel Ali Free Zone (JAFZA), Dubai, UAE',
  'Abu Dhabi Khalifa Port (KPFTZ), UAE',
  'ADGM Al Maryah Island, Abu Dhabi, UAE',
  'Sharjah Airport Free Zone (SAIF), UAE',
  'Ajman Free Zone, UAE',
  'Ras Al Khaimah Economic Zone (RAKEZ), UAE'
];

const DESTINATIONS = [
  'DIFC / Downtown Dubai, UAE',
  'Dubai Marina & Palm Jumeirah, UAE',
  'Abu Dhabi City & Corniche, UAE',
  'Al Ain Commercial Zone, UAE',
  'Riyadh Dry Port & Olaya, Saudi Arabia (KSA)',
  'Jeddah Islamic Port Corridor, Saudi Arabia (KSA)',
  'Doha Industrial Area, Qatar',
  'Muscat Commercial District, Oman',
  'Kuwait City & Shuwaikh, Kuwait'
];

const SERVICE_CLASSES = [
  { id: 'express', name: 'Intra-Emirate Express (< 3 Hrs)', baseRate: 140, ratePerKg: 4.5, icon: 'Zap' },
  { id: 'cold-chain', name: 'Cold-Chain BioPharma (-20°C to +4°C)', baseRate: 280, ratePerKg: 7.0, icon: 'ThermometerSnowflake' },
  { id: 'overland-gcc', name: 'Overland GCC FTL / LTL Freight', baseRate: 1800, ratePerKg: 1.8, icon: 'Truck' },
  { id: 'air-charter', name: 'Priority SkyCargo (Next Flight Out)', baseRate: 850, ratePerKg: 12.0, icon: 'Plane' },
];

export const LogisticsRateCalculator: React.FC<LogisticsRateCalculatorProps> = ({
  onOpenQuoteModalWithData
}) => {
  const [origin, setOrigin] = useState(ORIGINS[0]);
  const [destination, setDestination] = useState(DESTINATIONS[2]);
  const [serviceClassId, setServiceClassId] = useState('express');
  const [weightKg, setWeightKg] = useState<number>(25);
  const [lengthCm, setLengthCm] = useState<number>(50);
  const [widthCm, setWidthCm] = useState<number>(40);
  const [heightCm, setHeightCm] = useState<number>(30);
  const [includeInsurance, setIncludeInsurance] = useState<boolean>(true);
  const [includeWhiteGlove, setIncludeWhiteGlove] = useState<boolean>(false);

  // Volumetric Weight calculation (L * W * H / 5000)
  const volumetricWeight = useMemo(() => {
    return Math.round(((lengthCm * widthCm * heightCm) / 5000) * 10) / 10;
  }, [lengthCm, widthCm, heightCm]);

  const chargeableWeight = useMemo(() => {
    return Math.max(weightKg, volumetricWeight);
  }, [weightKg, volumetricWeight]);

  // Pricing engine in AED
  const calculation = useMemo(() => {
    const service = SERVICE_CLASSES.find((s) => s.id === serviceClassId) || SERVICE_CLASSES[0];
    
    // Cross-border multiplier
    const isGCC = destination.includes('Saudi Arabia') || destination.includes('Qatar') || destination.includes('Oman') || destination.includes('Kuwait');
    const borderMultiplier = isGCC ? (serviceClassId === 'overland-gcc' ? 1.5 : 2.4) : 1.0;

    const baseCost = service.baseRate;
    const weightCost = chargeableWeight * service.ratePerKg * borderMultiplier;
    const insuranceCost = includeInsurance ? Math.max(45, Math.round(weightCost * 0.04)) : 0;
    const whiteGloveCost = includeWhiteGlove ? 120 : 0;
    const subtotal = baseCost + weightCost + insuranceCost + whiteGloveCost;
    const vat = Math.round(subtotal * 0.05);
    const total = subtotal + vat;

    return {
      serviceName: service.name,
      baseCost: Math.round(baseCost),
      weightCost: Math.round(weightCost),
      insuranceCost,
      whiteGloveCost,
      subtotal: Math.round(subtotal),
      vat,
      total: Math.round(total),
      isGCC
    };
  }, [serviceClassId, origin, destination, chargeableWeight, includeInsurance, includeWhiteGlove]);

  const handleBookQuotation = () => {
    onOpenQuoteModalWithData({
      origin,
      destination,
      serviceClass: calculation.serviceName,
      weight: `${chargeableWeight} kg`,
      dimensions: `${lengthCm}x${widthCm}x${heightCm} cm`,
      estimatedTotalAED: calculation.total
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#070B14] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT TARIFF SIMULATOR • STRICTLY IN AED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Dynamic Freight & Express{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-cyan-300 to-emerald-400">
              Rate Calculator
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            Configure origin, destination, payload, and cargo dimensions to receive a transparent, binding instant price estimation across all UAE Emirates and GCC cross-border routes.
          </p>
        </div>

        {/* Calculator Interactive Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
            
            {/* Origin & Destination Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Collection Origin (UAE)</span>
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                >
                  {ORIGINS.map((o, idx) => (
                    <option key={idx} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5 uppercase">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Delivery Destination</span>
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                >
                  {DESTINATIONS.map((d, idx) => (
                    <option key={idx} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Service Class Selector Buttons */}
            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-400 uppercase">
                Select Service & Cargo Handling Tier:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_CLASSES.map((svc) => {
                  const isSelected = serviceClassId === svc.id;
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setServiceClassId(svc.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg shadow-cyan-950/50'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{svc.name}</div>
                      <div className="text-[10px] font-mono text-cyan-400 mt-1">
                        Base: AED {svc.baseRate} + AED {svc.ratePerKg}/kg
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cargo Dimensions & Weight Sliders */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase">
                  Actual Deadweight:
                </span>
                <span className="text-sm font-black text-cyan-400 font-mono">
                  {weightKg} kg
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="500"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full accent-cyan-400"
              />

              {/* 3D Dimensions Sliders */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">LENGTH (cm)</span>
                  <input
                    type="number"
                    value={lengthCm}
                    onChange={(e) => setLengthCm(Math.max(1, Number(e.target.value)))}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">WIDTH (cm)</span>
                  <input
                    type="number"
                    value={widthCm}
                    onChange={(e) => setWidthCm(Math.max(1, Number(e.target.value)))}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">HEIGHT (cm)</span>
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Math.max(1, Number(e.target.value)))}
                    className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono"
                  />
                </div>
              </div>

              {/* Volumetric Weight Info Banner */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Volumetric Weight (L*W*H/5000):</span>
                <span className="text-amber-400 font-bold">{volumetricWeight} kg</span>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="pt-2 border-t border-slate-800 space-y-2.5">
              <label className="flex items-center gap-3 text-xs text-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeInsurance}
                  onChange={(e) => setIncludeInsurance(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-0 w-4 h-4"
                />
                <span>Include All-Risk Cargo Insurance (Up to AED 100,000 coverage)</span>
              </label>

              <label className="flex items-center gap-3 text-xs text-slate-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeWhiteGlove}
                  onChange={(e) => setIncludeWhiteGlove(e.target.checked)}
                  className="rounded bg-slate-950 border-slate-700 text-cyan-500 focus:ring-0 w-4 h-4"
                />
                <span>White-Glove Inside Delivery & Staircase Carry (+AED 120)</span>
              </label>
            </div>

          </div>

          {/* Right Live Estimate Breakdown HUD */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-slate-900 via-[#0B101D] to-[#070B14] border-2 border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">ESTIMATE BREAKDOWN</span>
                <h3 className="text-lg font-bold text-white mt-0.5">Commercial Invoice Preview</h3>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                BINDING QUOTE
              </span>
            </div>

            {/* Calculation Itemized Rows */}
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Base Dispatch Fee:</span>
                <span className="text-white font-bold">AED {calculation.baseCost}</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Weight Surcharge ({chargeableWeight} kg chargeable):</span>
                <span className="text-white font-bold">AED {calculation.weightCost}</span>
              </div>
              {calculation.insuranceCost > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>All-Risk Cargo Insurance:</span>
                  <span className="text-emerald-400 font-bold">AED {calculation.insuranceCost}</span>
                </div>
              )}
              {calculation.whiteGloveCost > 0 && (
                <div className="flex items-center justify-between text-slate-300">
                  <span>White-Glove In-Home Placement:</span>
                  <span className="text-cyan-300 font-bold">AED {calculation.whiteGloveCost}</span>
                </div>
              )}
              <div className="flex items-center justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Subtotal (Net):</span>
                <span>AED {calculation.subtotal}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>UAE VAT (5%):</span>
                <span>AED {calculation.vat}</span>
              </div>
            </div>

            {/* Total Highlight Banner */}
            <div className="p-5 rounded-2xl bg-cyan-950/60 border border-cyan-500/40">
              <span className="text-[10px] font-mono text-cyan-300 uppercase block">
                TOTAL ESTIMATED FREIGHT CHARGE
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-sm text-amber-400 font-bold">AED</span>
                <span className="text-4xl font-black text-white font-mono">
                  {calculation.total.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-normal">incl. VAT</span>
              </div>
            </div>

            {/* Booking CTA Button */}
            <button
              onClick={handleBookQuotation}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Book Consignment with This Rate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-slate-500 text-center font-mono">
              *Rate includes standard GPS tracking, digital POD, and Mirsal II customs handling.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
