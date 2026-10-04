'use client';

import React, { useState } from 'react';
import { Eye, ShoppingBag, Layers, MapPin, Feather, ArrowRight, Crown } from 'lucide-react';
import { FURNITURE_MATERIALS, FurnitureProduct, ALL_FURNITURE_PRODUCTS } from '@/data/furnitureData';

interface FormaMaterialExplorerProps {
  allProducts?: FurnitureProduct[];
  onSelectProduct: (product: FurnitureProduct) => void;
  onAddToCart?: (product: FurnitureProduct) => void;
  onSelectMaterialFilter?: (materialId: string) => void;
}

export const FormaMaterialExplorer: React.FC<FormaMaterialExplorerProps> = ({
  allProducts = ALL_FURNITURE_PRODUCTS,
  onSelectProduct,
  onAddToCart,
  onSelectMaterialFilter
}) => {
  const [activeMaterialIdx, setActiveMaterialIdx] = useState(0);

  const currentMaterial = FURNITURE_MATERIALS[activeMaterialIdx];
  const matchedProducts = (currentMaterial.highlightProductIds || [])
    .map(id => allProducts.find(p => p.id === id))
    .filter(Boolean) as FurnitureProduct[];

  return (
    <section id="materials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#151412] border-t border-b border-[#2C2926] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2C2926] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E6AF73]/10 border border-[#E6AF73]/20 text-[#E6AF73] text-xs font-mono tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Tactile Exploration Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F5F2EB] tracking-tight font-serif">
              Material <span className="italic text-[#E6AF73]">Matters.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8A096] mt-2 max-w-xl">
              We select raw natural stone, sustainably harvested timber, and European textiles that age with honest nobility.
            </p>
          </div>

          {/* Material Pills Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {FURNITURE_MATERIALS.map((mat, idx) => (
              <button
                key={mat.id}
                onClick={() => setActiveMaterialIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all shrink-0 ${
                  activeMaterialIdx === idx
                    ? 'bg-[#E6AF73] text-black font-bold shadow-lg shadow-[#E6AF73]/20'
                    : 'bg-white/[0.03] text-[#C5BDB5] hover:text-white border border-white/5'
                }`}
              >
                {mat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Master Material Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1A1815] border border-[#332F2A] rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left: Material Texture & Tactile Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E6AF73] uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentMaterial.origin}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F2EB] font-serif">
                {currentMaterial.name}
              </h3>
              <p className="text-xs font-mono text-[#E6AF73] font-semibold">
                {currentMaterial.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#C5BDB5] leading-relaxed">
              {currentMaterial.description}
            </p>

            {/* Tactile Specs Box */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-[10px] font-mono uppercase text-[#A8A096]">Sensory Sensation</div>
              <div className="text-xs font-medium text-[#F5F2EB] flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#E6AF73]" />
                <span>{currentMaterial.tactileFeel}</span>
              </div>
            </div>

            {/* Material Texture Zoom Visual */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group">
              <img
                src={currentMaterial.textureImage}
                alt={currentMaterial.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] font-mono text-white/80 uppercase">
                  Macro Surface Relief • Unfilled Porous Grain
                </span>
              </div>
            </div>
          </div>

          {/* Right: Featured Furniture Works in this Material (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#A8A096]">
              Atelier Pieces Sculpted in {currentMaterial.name}:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matchedProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod)}
                  className="p-4 rounded-2xl bg-[#12110F] border border-[#2C2926] hover:border-[#E6AF73]/40 cursor-pointer group transition-all"
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-black/40 mb-3 p-2 flex items-center justify-center">
                    <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="text-[10px] font-mono text-[#A8A096] uppercase">{prod.room}</div>
                  <div className="text-xs font-bold text-[#F5F2EB] group-hover:text-[#E6AF73] transition-colors truncate font-serif mt-0.5">
                    {prod.name}
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5 text-xs font-mono">
                    <span className="text-[#E6AF73] font-bold">AED {prod.price.toLocaleString()}</span>
                    <span className="text-[#A8A096] text-[10px] group-hover:text-white">Inspect →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
