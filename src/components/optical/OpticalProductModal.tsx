'use client';
import React from 'react';
import { X, ShoppingBag, Heart, CheckCircle2 } from 'lucide-react';
import { EyewearProduct } from '@/data/opticalData';

export const OpticalProductModal: React.FC<{ item: EyewearProduct | null; onClose: () => void; onAddToCart: (product: EyewearProduct) => void }> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-sky-500/30 rounded-3xl max-w-xl w-full p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>

        <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-950">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-sky-400 text-slate-950 font-bold uppercase">{item.category}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-sans font-bold text-white">{item.name}</h3>
            <span className="text-xl font-mono font-bold text-sky-300">AED {item.price}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl">
            <span>Material: {item.material}</span>
            <span>Shape: {item.shape}</span>
            <span>Size: {item.size}</span>
            <span>Gender: {item.gender}</span>
          </div>

          <button onClick={() => { onAddToCart(item); onClose(); }} className="w-full py-3.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Add Frame to Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};
