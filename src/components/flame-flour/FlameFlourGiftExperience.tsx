'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, ShieldCheck, Check, ArrowRight, Package } from 'lucide-react';
import { BakeryProduct, BAKERY_PRODUCTS } from '@/data/flameFlourData';

interface FlameFlourGiftExperienceProps {
  onAddToCart: (product: BakeryProduct) => void;
}

export const FlameFlourGiftExperience: React.FC<FlameFlourGiftExperienceProps> = ({
  onAddToCart
}) => {
  const [recipient, setRecipient] = useState('Sarah Jenkins');
  const [message, setMessage] = useState('Wishing you the warmest morning moments with freshly baked woodfire treats!');
  const [selectedGiftId, setSelectedGiftId] = useState('prod-20');
  const [added, setAdded] = useState(false);

  const giftBoxes = BAKERY_PRODUCTS.filter(p => p.category === 'Gift Boxes');

  const currentGift = BAKERY_PRODUCTS.find(p => p.id === selectedGiftId) || giftBoxes[0];

  const handleSendGift = () => {
    if (currentGift) {
      onAddToCart(currentGift);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  return (
    <section className="py-24 bg-[#0a0807] border-b border-stone-850 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase mb-3 px-3.5 py-1 rounded-full bg-amber-950/40 border border-amber-800/30">
            <Gift className="w-3.5 h-3.5" />
            <span>ARTISAN GIFTING CONCIERGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100">
            Send Something Worth Opening
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light">
            Curated presentation boxes delivered in heavy kraft boxes with wax seals and personalized handwritten letterpress cards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Gift Box Options (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono text-stone-400 uppercase">Select Curated Gift Assortment:</div>
            {giftBoxes.map((gift) => {
              const isSelected = selectedGiftId === gift.id;
              return (
                <div
                  key={gift.id}
                  onClick={() => setSelectedGiftId(gift.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-amber-950/50 border-amber-500 ring-1 ring-amber-500/50 shadow-lg'
                      : 'bg-stone-900/60 border-stone-800 hover:bg-stone-850'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={gift.image}
                      alt={gift.name}
                      className="w-14 h-14 rounded-xl object-cover border border-stone-800 shrink-0"
                    />
                    <div>
                      <h4 className="text-base font-serif text-stone-100">{gift.name}</h4>
                      <p className="text-xs text-stone-400 line-clamp-1 font-light">{gift.tagline}</p>
                      <div className="text-xs font-mono font-bold text-amber-400 mt-0.5">AED {gift.priceAED}</div>
                    </div>
                  </div>

                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    isSelected ? 'border-amber-400 bg-amber-500 text-stone-950' : 'border-stone-700'
                  }`}>
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card & Inscription Preview (Right 6 cols) */}
          <div className="lg:col-span-6 bg-[#120f0d] p-6 sm:p-8 rounded-3xl border border-stone-800/80 shadow-2xl space-y-5">
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">
              Gift Card Personalization
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Recipient Name</label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 mb-1">Handwritten Letterpress Message</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-2.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500 resize-none font-serif italic"
              />
            </div>

            <div className="p-4 rounded-2xl bg-stone-950/80 border border-stone-800/80 text-xs font-mono space-y-1.5">
              <div className="flex justify-between text-stone-400">
                <span>Selected Gift:</span>
                <span className="text-stone-200">{currentGift?.name}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Packaging:</span>
                <span className="text-stone-200">Embossed Black Hamper + Satin Ribbon</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-amber-400 pt-2 border-t border-stone-800 font-serif">
                <span>Total Gifting Price:</span>
                <span>AED {currentGift?.priceAED}</span>
              </div>
            </div>

            <button
              onClick={handleSendGift}
              className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                added
                  ? 'bg-emerald-500 text-stone-950'
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-lg shadow-amber-950/40'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Gift Box Added to Basket</span>
                </>
              ) : (
                <>
                  <Gift className="w-4 h-4" />
                  <span>Send Curated Gift Box</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
