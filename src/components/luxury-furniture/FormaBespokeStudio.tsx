'use client';

import React, { useState } from 'react';
import { 
  Crown, 
  Layers, 
  Check, 
  Calendar, 
  Phone, 
  Maximize2, 
  Sliders, 
  ShoppingBag,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaBespokeStudioProps {
  onAddToCart?: (product: FurnitureProduct) => void;
  onOpenBooking?: () => void;
  onOrderCustomPiece?: (customDetails: any) => void;
  sampleProduct?: FurnitureProduct;
}

export const FormaBespokeStudio: React.FC<FormaBespokeStudioProps> = ({
  onAddToCart,
  onOpenBooking,
  onOrderCustomPiece,
  sampleProduct
}) => {
  const [selectedFabric, setSelectedFabric] = useState({ name: 'Italian Textured Wool Bouclé', hex: '#EBE5DC', price: 0 });
  const [selectedWood, setSelectedWood] = useState({ name: 'American Black Walnut (Matte Oil)', hex: '#4A3B32', price: 0 });
  const [selectedStone, setSelectedStone] = useState({ name: 'Roman Navona Travertine', hex: '#D8C7B5', price: 2500 });
  const [selectedMetal, setSelectedMetal] = useState({ name: 'Brushed Champagne Brass', hex: '#D4AF37', price: 1200 });
  const [selectedSize, setSelectedSize] = useState({ label: 'Grand Villa Scale (W 280 × D 110 cm)', price: 4500 });

  const basePrice = 24800;
  const totalPrice = basePrice + selectedFabric.price + selectedWood.price + selectedStone.price + selectedMetal.price + selectedSize.price;

  return (
    <section id="bespoke" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#12110F] border-t border-b border-[#2C2926] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Bespoke Atelier Commission</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              Made for <span className="italic text-[#E6AF73]">Your Space.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              Customize upholstery textiles, timber joinery, Roman stone insets, and precise millimeter dimensions to suit your private villa or penthouse architecture.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs tracking-wider uppercase transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#E6AF73]" />
            <span>Consult an Interior Architect</span>
          </button>
        </div>

        {/* Studio Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171513] border border-[#2F2B26] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left: Dynamic Visual Mockup (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-[#2C2926] p-4 flex items-center justify-center group">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke Sofa Visualization"
                className="w-full h-full object-cover rounded-xl transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#E6AF73] uppercase tracking-widest">
                    Real-time Customization Matrix
                  </div>
                  <div className="text-sm font-bold text-white font-serif">
                    Koto Bespoke Curved Three-Seater
                  </div>
                  <div className="text-xs text-[#C5BDB5]">
                    {selectedFabric.name} • {selectedWood.name.split(' ')[0]} • {selectedSize.label.split('(')[0]}
                  </div>
                </div>
              </div>
            </div>

            {/* Customization Summary Chips */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#C5BDB5]">
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: selectedFabric.hex }} />
                <span className="truncate">{selectedFabric.name}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: selectedWood.hex }} />
                <span className="truncate">{selectedWood.name}</span>
              </div>
            </div>
          </div>

          {/* Right: Customization Controls (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Fabric Selection */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#A8A096] uppercase">01 • Upholstery Fabric / Leather</span>
                <span className="text-white font-bold">{selectedFabric.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Italian Textured Wool Bouclé', hex: '#EBE5DC', price: 0 },
                  { name: 'Tuscan Semi-Aniline Leather', hex: '#9E5B32', price: 3800 },
                  { name: 'Belgian Washed Linen', hex: '#D8C7B5', price: 1200 },
                  { name: 'Venetian Cotton Velvet', hex: '#3B443B', price: 2100 }
                ].map((fab) => (
                  <button
                    key={fab.name}
                    onClick={() => setSelectedFabric(fab)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center gap-2.5 ${
                      selectedFabric.name === fab.name
                        ? 'bg-[#E6AF73]/15 border-[#E6AF73] text-white font-semibold'
                        : 'bg-white/[0.03] border-white/5 text-[#C5BDB5] hover:text-white'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full border border-white/20 shrink-0" style={{ backgroundColor: fab.hex }} />
                    <div className="truncate">
                      <div>{fab.name.split(' ')[1] || fab.name}</div>
                      <div className="text-[10px] text-[#A8A096] font-mono">{fab.price === 0 ? 'Included' : `+AED ${fab.price.toLocaleString()}`}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Wood Base Selection */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#A8A096] uppercase">02 • Solid Hardwood Base</span>
                <span className="text-white font-bold">{selectedWood.name.split(' ')[0]}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'American Black Walnut (Matte Oil)', hex: '#4A3B32', price: 0 },
                  { name: 'European White Oak (Wire-Brushed)', hex: '#D2B48C', price: 0 },
                  { name: 'Smoked Ash (Deep Charcoal)', hex: '#2B2825', price: 1500 }
                ].map((wd) => (
                  <button
                    key={wd.name}
                    onClick={() => setSelectedWood(wd)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-center gap-2.5 ${
                      selectedWood.name === wd.name
                        ? 'bg-[#E6AF73]/15 border-[#E6AF73] text-white font-semibold'
                        : 'bg-white/[0.03] border-white/5 text-[#C5BDB5] hover:text-white'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full border border-white/20 shrink-0" style={{ backgroundColor: wd.hex }} />
                    <div className="truncate">
                      <div>{wd.name.split('(')[0]}</div>
                      <div className="text-[10px] text-[#A8A096] font-mono">{wd.price === 0 ? 'Included' : `+AED ${wd.price.toLocaleString()}`}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Dimension Scale */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#A8A096] uppercase">03 • Dimensional Scale</span>
                <span className="text-[#E6AF73] font-bold">{selectedSize.label.split('(')[0]}</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { label: 'Standard Atelier (W 240 × D 105 × H 74 cm)', price: 0 },
                  { label: 'Grand Villa Scale (W 280 × D 110 × H 74 cm)', price: 4500 },
                  { label: 'Palace Scale Modular (W 340 × D 115 × H 74 cm)', price: 9200 }
                ].map((sz) => (
                  <button
                    key={sz.label}
                    onClick={() => setSelectedSize(sz)}
                    className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                      selectedSize.label === sz.label
                        ? 'bg-[#E6AF73]/15 border-[#E6AF73] text-white font-semibold'
                        : 'bg-white/[0.03] border-white/5 text-[#C5BDB5] hover:text-white'
                    }`}
                  >
                    <span>{sz.label}</span>
                    <span className="text-[10px] font-mono text-[#E6AF73]">{sz.price === 0 ? 'Standard' : `+AED ${sz.price.toLocaleString()}`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Total & Commission Action */}
            <div className="p-5 rounded-2xl bg-black/50 border border-[#E6AF73]/30 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#A8A096] uppercase">Bespoke Commission Total</div>
                  <div className="text-2xl font-bold font-mono text-[#E6AF73]">
                    AED {totalPrice.toLocaleString()}
                  </div>
                </div>
                <span className="text-xs text-[#E6AF73] font-mono">Lead Time: 4–6 Weeks</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={onOpenBooking}
                  className="py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Book Fitting
                </button>
                <button
                  onClick={() => {
                    const customItem: FurnitureProduct = sampleProduct ? {
                      ...sampleProduct,
                      name: `Koto Bespoke (${selectedFabric.name.split(' ')[1]}, ${selectedSize.label.split('(')[0]})`,
                      price: totalPrice
                    } : {
                      ...ALL_FURNITURE_PRODUCTS[0],
                      name: `Koto Bespoke (${selectedFabric.name.split(' ')[1]}, ${selectedSize.label.split('(')[0]})`,
                      price: totalPrice
                    };
                    if (onAddToCart) {
                      onAddToCart(customItem);
                    }
                    if (onOrderCustomPiece) {
                      onOrderCustomPiece(customItem);
                    }
                  }}
                  className="py-3 rounded-xl bg-gradient-to-r from-[#E6AF73] to-[#C68D4C] text-black text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Reserve Piece</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
