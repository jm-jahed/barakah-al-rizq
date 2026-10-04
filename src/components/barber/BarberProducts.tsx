'use client';
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { PRODUCTS_DATA, GroomingProduct } from '@/data/barberData';

export const BarberProducts: React.FC<any> = ({ onSelectProduct, onAddToCart }) => {
  return (
    <section id="products" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Grooming Product Shop</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_DATA.map(item => (
            <div key={item.id} className="bg-neutral-900 rounded-3xl border border-amber-500/20 p-5 flex flex-col justify-between">
              <div>
                <img src={item.image} alt={item.name} className="w-full h-44 object-cover rounded-2xl mb-3" />
                <h3 className="font-sans font-bold text-base text-white">{item.name}</h3>
                <span className="text-xs font-mono text-amber-300 font-bold block mt-1">AED {item.price}</span>
              </div>
              <button onClick={() => onAddToCart(item)} className="w-full py-2.5 mt-4 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center justify-center gap-1">
                <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
