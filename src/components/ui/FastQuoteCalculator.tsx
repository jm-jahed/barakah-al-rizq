'use client';

import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Bot, 
  ShoppingBag, 
  Layers,
  CheckCircle2,
  Gauge
} from 'lucide-react';
import { UaeDirhamIcon } from '@/components/UaeDirhamIcon';
import { 
  ESTIMATOR_PLATFORMS, 
  ESTIMATOR_ADDONS, 
  calculateEstimatorTotal,
  ScopeQuotePayload 
} from '@/data/estimatorPricing';

interface FastQuoteCalculatorProps {
  onOpenOrderModal: (configuredPackage?: string | ScopeQuotePayload) => void;
}

export const FastQuoteCalculator: React.FC<FastQuoteCalculatorProps> = ({ onOpenOrderModal }) => {
  const [selectedType, setSelectedType] = useState<string>('starter-web');
  const [deliverySpeed, setDeliverySpeed] = useState<'standard' | 'rapid'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatedQuote = useMemo(() => {
    return calculateEstimatorTotal(selectedType, deliverySpeed, selectedAddons);
  }, [selectedType, deliverySpeed, selectedAddons]);

  const handleLaunchOrder = () => {
    onOpenOrderModal({
      platformId: selectedType,
      velocityId: deliverySpeed,
      addonIds: selectedAddons,
    });
  };

  return (
    <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#110E0B]/95 border border-amber-500/30 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
      {/* Subtle Laser Accent Trace */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70 pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white font-mono tracking-tight">
                INSTANT SCOPE ESTIMATOR
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
                MATEBIZ PATTERN #08
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Configure your desired digital platform tier to calculate an instant starting estimate in AED.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold self-start sm:self-auto">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>REAL-TIME ESTIMATION</span>
        </div>
      </div>

      {/* Configuration Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Option Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Project Type */}
          <div>
            <label className="block text-xs font-mono text-gray-400 font-bold uppercase tracking-wider mb-3">
              1. Select Platform Architecture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ESTIMATOR_PLATFORMS.map((pt) => {
                const Icon = pt.icon;
                const isSelected = selectedType === pt.id;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedType(pt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.2)] scale-[1.01]'
                        : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-gray-400'}`} />
                        <span className={`text-xs font-bold font-mono ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                          {pt.name}
                        </span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                    </div>
                    <span className="text-[11px] text-gray-400 font-sans block line-clamp-1">
                      {pt.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Delivery Speed & Optional Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Speed Option */}
            <div>
              <label className="block text-xs font-mono text-gray-400 font-bold uppercase tracking-wider mb-2.5">
                2. Delivery Velocity
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('standard')}
                  className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                    deliverySpeed === 'standard'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Standard
                  <span className="block text-[10px] text-gray-400 mt-0.5">{calculatedQuote.platform.timeline}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliverySpeed('rapid')}
                  className={`p-2.5 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                    deliverySpeed === 'rapid'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold'
                      : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                  }`}
                >
                  Rapid Sprint
                  <span className="block text-[10px] text-amber-400/90 mt-0.5">48–72 Hours</span>
                </button>
              </div>
            </div>

            {/* Optional Addon Chips */}
            <div>
              <label className="block text-xs font-mono text-gray-400 font-bold uppercase tracking-wider mb-2.5">
                3. High-Impact Enhancements
              </label>
              <div className="space-y-1.5">
                {ESTIMATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full px-2.5 py-1.5 rounded-xl border text-left text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                          : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      <span className="truncate">{addon.name}</span>
                      <span className="text-[10px] text-amber-400 font-bold shrink-0 ml-1">+AED {addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Calculated Price Summary & Action Hub */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-[#17130F] border border-amber-500/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                ESTIMATED STARTING QUOTE
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{deliverySpeed === 'rapid' ? '48–72 Hours' : calculatedQuote.platform.timeline}</span>
              </div>
            </div>

            {/* Big Calculated Price Counter */}
            <div>
              <span className="text-[11px] font-mono text-gray-400 block mb-1">Total Estimated Project Value</span>
              <div className="flex items-baseline gap-2">
                <UaeDirhamIcon className="w-8 h-8 text-amber-400" />
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                  {calculatedQuote.total.toLocaleString()}
                </span>
                <span className="text-sm font-mono font-bold text-amber-400">AED</span>
              </div>
            </div>

            {/* Scope Summary Breakdown */}
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-gray-300">
                <span>Base Platform:</span>
                <span className="text-white font-bold">{calculatedQuote.platform.name}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Delivery SLA:</span>
                <span className="text-amber-400">{deliverySpeed === 'rapid' ? 'Rapid MVP (+25%)' : 'Standard Schedule'}</span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between text-gray-300">
                  <span>Enhancements:</span>
                  <span className="text-emerald-400">{selectedAddons.length} Applied (+AED {calculatedQuote.addonsTotal})</span>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-5 mt-4 border-t border-white/10">
            <button
              type="button"
              onClick={handleLaunchOrder}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer font-mono flex items-center justify-center gap-2 group"
            >
              <span>CONFIRM SCOPE &amp; GET EXACT QUOTE</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-gray-400 font-mono text-center mt-2">
              100% Free Consultation • Zero Obligation • UAE SLA Guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastQuoteCalculator;
