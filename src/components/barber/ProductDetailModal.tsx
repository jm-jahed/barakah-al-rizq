'use client';
import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { GroomingProduct } from '@/data/barberData';

export const ProductDetailModal: React.FC<{ item: GroomingProduct | null; onClose: () => void; onAddToCart: (product: GroomingProduct) => void }> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-neutral-900 border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 text-white relative shadow-2xl space-y-4">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white"><X className="w-5 h-5" /></button>
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-2xl" />
        <h3 className="text-2xl font-sans font-bold text-white">{item.name}</h3>
        <p className="text-xs text-neutral-300">{item.description}</p>
        <span className="text-lg font-mono font-bold text-amber-300 block">AED {item.price}</span>
        <button onClick={() => { onAddToCart(item); onClose(); }} className="w-full py-3 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-2"><ShoppingBag className="w-4 h-4" /> Add to Cart</button>
      </div>
    </div>
  );
};
