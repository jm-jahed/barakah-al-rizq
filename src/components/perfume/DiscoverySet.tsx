'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, CheckCircle2, ShoppingBag, Gift } from 'lucide-react';
import { PERFUME_BRAND_INFO } from '@/data/perfumeData';

interface DiscoverySetProps {
  onAddToCart: (product: any) => void;
}

export const DiscoverySet: React.FC<DiscoverySetProps> = ({ onAddToCart }) => {
  const discoveryProduct = {
    id: "discovery-set-signature",
    name: "The Signature Discovery Collection (6 × 2ml)",
    category: "Unisex",
    tagline: "Explore 6 flagship Extraits de Parfum with a redeemable AED 100 full-bottle voucher.",
    price: 129,
    sizes: ["6 × 2ml Spray Atomizers"],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
  };

  const includedScents = [
    "Midnight Oud Extrait",
    "Noir Sovereign",
    "Rose Élan",
    "Santal 27",
    "Velvet Bloom",
    "Amber Muse"
  ];

  return (
    <section id="discovery" className="py-24 bg-[#080B0F] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#10141C] border border-amber-500/30 overflow-hidden shadow-2xl p-4">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-black">
                <img
                  src={discoveryProduct.image}
                  alt={discoveryProduct.name}
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono text-amber-300 bg-black/80 backdrop-blur-md border border-amber-500/30 font-bold uppercase">
                    Includes AED 100 Bottle Voucher
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              EXPLORE BEFORE YOU COMMIT
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif leading-tight">
              The Discovery Collection.
            </h2>

            <p className="text-base text-gray-300 leading-relaxed font-serif italic">
              "Experience 6 olfactory masterpieces in 2ml spray atomizers. Includes a AED 100 digital voucher towards your first 100ml bottle."
            </p>

            <div className="p-4 rounded-2xl bg-[#10141C] border border-white/10 space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                6 INCLUDED ATOMIZER SPRAYS:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                {includedScents.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase block font-bold">SPECIAL DISCOVERY PRICE</span>
                <div className="text-3xl font-extrabold text-amber-400 font-mono">AED 129</div>
              </div>

              <button
                onClick={() => onAddToCart(discoveryProduct)}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <ShoppingBag className="w-4 h-4" /> Add Discovery Set →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
