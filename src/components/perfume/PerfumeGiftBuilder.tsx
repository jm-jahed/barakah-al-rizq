'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { PERFUME_PRODUCTS, PerfumeProduct } from '@/data/perfumeData';

interface PerfumeGiftBuilderProps {
  onAddToCart: (product: PerfumeProduct) => void;
}

export const PerfumeGiftBuilder: React.FC<PerfumeGiftBuilderProps> = ({ onAddToCart }) => {
  const [recipient, setRecipient] = useState('Partner');
  const [budget, setBudget] = useState('AED 250–400');
  const [style, setStyle] = useState('Oud');
  const [packaging, setPackaging] = useState('Signature Gold Wax Box');

  const handleBuildGift = () => {
    const matched = PERFUME_PRODUCTS.find((p) => p.id === 'midnight-oud') || PERFUME_PRODUCTS[0];
    onAddToCart(matched);
  };

  return (
    <section className="py-24 bg-[#0A0D12] border-b border-amber-500/20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#10141C] border border-amber-500/30 p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  LUXURY GIFT EXPERIENCES
                </span>
                <h3 className="text-2xl font-bold text-white font-serif">Curate a Bespoke Perfume Gift</h3>
              </div>
            </div>

            <span className="text-xs font-mono text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
              Demo Gift Concierge
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Options */}
            <div className="lg:col-span-7 space-y-4">
              {/* Step 1 */}
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                  Step 1: Recipient
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Partner', 'Mother', 'Father', 'Friend', 'Corporate'].map((r) => (
                    <button
                      key={r}
                      onClick={() => setRecipient(r)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        recipient === r
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                  Step 2: Budget Target
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['AED 150–250', 'AED 250–400', 'AED 400–600', 'AED 600+'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        budget === b
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2 font-bold">
                  Step 3: Gift Packaging
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Standard Magnetic Box', 'Signature Gold Wax Box'].map((pkg) => (
                    <button
                      key={pkg}
                      onClick={() => setPackaging(pkg)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-left transition-all ${
                        packaging === pkg
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Gift Preview */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#161D27] border border-amber-500/40 space-y-4 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                  RECOMMENDED GIFT ARRANGEMENT
                </span>
                <h4 className="text-xl font-bold text-white font-serif mt-1">Midnight Oud Gift Suite</h4>
                <p className="text-xs text-gray-300 mt-2 font-sans">
                  Includes 100ml Extrait de Parfum in {packaging} with personalized wax-sealed gift note for your {recipient}.
                </p>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 mt-4 text-xs font-mono text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Target Budget:</span>
                    <span className="text-amber-300 font-bold">{budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <span className="text-white font-bold">{packaging}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBuildGift}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Add Gift Suite to Bag →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
