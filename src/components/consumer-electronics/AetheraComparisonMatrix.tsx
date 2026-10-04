'use client';

import React from 'react';
import { X, SlidersHorizontal, ShoppingBag, Eye, Star, Trash2 } from 'lucide-react';
import { GadgetProduct } from '@/data/consumerElectronicsData';

interface AetheraComparisonMatrixProps {
  comparedProducts: GadgetProduct[];
  onRemoveCompare: (productId: string) => void;
  onClearAll: () => void;
  onClose: () => void;
  onAddToCart: (product: GadgetProduct) => void;
  onSelectProduct: (product: GadgetProduct) => void;
}

export const AetheraComparisonMatrix: React.FC<AetheraComparisonMatrixProps> = ({
  comparedProducts,
  onRemoveCompare,
  onClearAll,
  onClose,
  onAddToCart,
  onSelectProduct
}) => {
  if (comparedProducts.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-6xl bg-[#0E1015] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0B0E]">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">
              Side-by-Side Specification Matrix ({comparedProducts.length}/4)
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClearAll}
              className="text-xs text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear All
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Matrix Table Body */}
        <div className="overflow-x-auto p-6 custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-4 text-xs font-mono text-white/40 uppercase w-48 shrink-0">Instrument</th>
                {comparedProducts.map((p) => (
                  <th key={p.id} className="p-4 min-w-[220px] max-w-[280px]">
                    <div className="relative p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                      <button
                        onClick={() => onRemoveCompare(p.id)}
                        className="absolute top-2 right-2 p-1 text-white/40 hover:text-rose-400"
                        title="Remove"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="aspect-square rounded-xl overflow-hidden bg-black/60 p-2">
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="text-[10px] font-mono text-white/40 uppercase">{p.brand}</div>
                      <div className="text-xs font-bold text-white truncate">{p.name}</div>
                      <div className="text-sm font-mono font-bold text-amber-300">AED {p.price.toLocaleString()}</div>
                      <button
                        onClick={() => onAddToCart(p)}
                        className="w-full py-2 rounded-xl bg-amber-400 text-black text-xs font-bold uppercase flex items-center justify-center gap-1 hover:bg-amber-300"
                      >
                        <ShoppingBag className="w-3 h-3" /> Add to Bag
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-white/80">
              <tr>
                <td className="p-4 font-mono text-white/40 uppercase font-semibold">Category</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 font-mono text-amber-300/80">{p.category}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-mono text-white/40 uppercase font-semibold">Rating</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4">
                    <span className="text-amber-400 font-mono font-bold">★ {p.rating}</span>
                    <span className="text-white/40 ml-1">({p.reviewCount} reviews)</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-mono text-white/40 uppercase font-semibold">Availability</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4 text-emerald-400 font-medium">● {p.availability}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-mono text-white/40 uppercase font-semibold">Warranty</td>
                {comparedProducts.map((p) => (
                  <td key={p.id} className="p-4">{p.uaeWarranty}</td>
                ))}
              </tr>
              {['Display', 'Processor', 'Chassis & Build', 'Connectivity', 'Battery & Charging'].map((specKey) => (
                <tr key={specKey}>
                  <td className="p-4 font-mono text-white/40 uppercase font-semibold">{specKey}</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-4 text-white/70">
                      {p.specifications[specKey] || p.specifications['Chassis'] || 'Calibrated to Flagship Standard'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};
