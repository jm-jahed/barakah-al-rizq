'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const PressoraPriceEngine: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('business-cards');
  const [paperTier, setPaperTier] = useState<'standard' | 'premium' | 'cotton'>('premium');
  const [finishType, setFinishType] = useState<'none' | 'soft-touch' | 'spot-uv' | 'gold-foil'>('spot-uv');
  const [quantity, setQuantity] = useState<number>(500);
  const [expressDelivery, setExpressDelivery] = useState<boolean>(false);

  // Dynamic price calculation
  const basePrice = selectedProduct === 'business-cards' ? 120 : selectedProduct === 'invoice-books' ? 180 : 340;
  const paperAddition = paperTier === 'cotton' ? 60 : paperTier === 'premium' ? 35 : 0;
  const finishAddition = finishType === 'gold-foil' ? 70 : finishType === 'spot-uv' ? 45 : finishType === 'soft-touch' ? 25 : 0;
  const quantityMultiplier = quantity === 100 ? 0.6 : quantity === 250 ? 0.8 : quantity === 500 ? 1.0 : quantity === 1000 ? 1.6 : 3.2;
  const deliveryCost = expressDelivery ? 40 : 20;

  const subtotal = Math.round((basePrice + paperAddition + finishAddition) * quantityMultiplier);
  const total = subtotal + deliveryCost;

  return (
    <section className="py-24 bg-[#080b0f] text-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-[#1a2536]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1826] border border-[#1d3858] text-xs text-[#38bdf8] font-mono uppercase tracking-[0.25em] mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT DYNAMIC QUOTING</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Live Print Price Engine.
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            No waiting 24 hours for print estimates. Adjust paper weights, luxury foil embellishments, and volume tiers to see exact production costs calculated in AED.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-[#0d131e] border border-[#1a2b40] font-mono text-xs">
            {/* Product Select */}
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                01 · Select Product Line
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'business-cards', label: 'Business Cards' },
                  { id: 'invoice-books', label: 'Invoice Books' },
                  { id: 'folders', label: 'Folders' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProduct(p.id)}
                    className={`p-3 rounded-xl text-center border transition-all cursor-pointer ${
                      selectedProduct === p.id
                        ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Paper Stock */}
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                02 · Paper Grade & Fiber
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Standard 300gsm', add: 'Base' },
                  { id: 'premium', label: 'Silk Art 350gsm', add: '+ AED 35' },
                  { id: 'cotton', label: 'Cotton 450gsm', add: '+ AED 60' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPaperTier(p.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      paperTier === p.id
                        ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    <div className="font-bold text-[11px]">{p.label}</div>
                    <div className="text-[10px] text-[#38bdf8] mt-0.5">{p.add}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Embellishment */}
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                03 · Finishing & Embellishment
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'none', label: 'None (Smooth)', add: 'AED 0' },
                  { id: 'soft-touch', label: 'Velvet Touch', add: '+ AED 25' },
                  { id: 'spot-uv', label: 'Spot UV Glaze', add: '+ AED 45' },
                  { id: 'gold-foil', label: 'Gold Hot Foil', add: '+ AED 70' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFinishType(f.id as any)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      finishType === f.id
                        ? 'bg-[#122236] border-[#38bdf8] text-[#f8fafc] font-bold'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    <div className="font-bold text-[10px]">{f.label}</div>
                    <div className="text-[9px] text-[#38bdf8]">{f.add}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-[11px] uppercase tracking-wider text-[#38bdf8] font-bold mb-2 block">
                04 · Quantity ({quantity.toLocaleString()} Units)
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[100, 250, 500, 1000].map((q) => (
                  <button
                    key={q}
                    onClick={() => setQuantity(q)}
                    className={`p-2.5 rounded-xl text-center border transition-all cursor-pointer ${
                      quantity === q
                        ? 'bg-[#0284c7] border-[#38bdf8] text-[#ffffff] font-bold shadow-md'
                        : 'bg-[#09101a] border-[#16293f] text-[#64748b] hover:text-[#cbd5e1]'
                    }`}
                  >
                    {q.toLocaleString()}u
                  </button>
                ))}
              </div>
            </div>

            {/* Courier Delivery Toggle */}
            <div className="p-4 rounded-xl bg-[#08101a] border border-[#16293f] flex items-center justify-between">
              <div>
                <span className="font-bold text-[#f8fafc]">Express 24-Hour UAE Courier</span>
                <p className="text-[10px] text-[#64748b]">Standard delivery AED 20 included</p>
              </div>
              <button
                onClick={() => setExpressDelivery(!expressDelivery)}
                className={`px-3 py-1.5 rounded-lg border font-mono transition-colors cursor-pointer ${
                  expressDelivery ? 'bg-[#0284c7] border-[#38bdf8] text-[#ffffff]' : 'bg-[#0e1724] border-[#1b2f48] text-[#64748b]'
                }`}
              >
                {expressDelivery ? '+ AED 40 (Active)' : 'Select Express'}
              </button>
            </div>
          </div>

          {/* Real-time Invoice Breakdown Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-b from-[#0f1d2e] via-[#0b1420] to-[#070b10] border border-[#1a385c] shadow-2xl font-mono text-xs space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#38bdf8] font-bold">
              ESTIMATED PRODUCTION SUMMARY
            </div>

            <div className="space-y-2.5 py-4 border-y border-[#182e48]">
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Base Machine Setup</span>
                <span className="text-[#f8fafc]">AED {basePrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Paper Surcharge</span>
                <span className="text-[#f8fafc]">+ AED {paperAddition}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Finishing Plate Cost</span>
                <span className="text-[#f8fafc]">+ AED {finishAddition}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">Quantity Multiplier ({quantity}u)</span>
                <span className="text-[#38bdf8]">× {quantityMultiplier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#94a3b8]">UAE Courier Logistics</span>
                <span className="text-[#f8fafc]">AED {deliveryCost}</span>
              </div>
            </div>

            <div className="flex items-end justify-between pt-2">
              <div>
                <span className="text-[10px] uppercase text-[#64748b]">Total Calculated Price</span>
                <div className="text-4xl font-bold text-[#38bdf8] mt-0.5">
                  AED {total.toLocaleString()}
                </div>
              </div>
              <span className="text-[10px] text-[#4ade80] font-bold">VAT Inclusive</span>
            </div>

            <p className="text-[11px] text-[#64748b] leading-relaxed pt-2">
              Instant quote guarantee. 100% price lock for 14 days upon checkout transmission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
