'use client';
import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/opticalData';

export const OpticalProductExplorer: React.FC<any> = ({ onSelectProduct, onAddToCart, onToggleWishlist, wishlistIds, searchQuery }) => {
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', 'Optical Frames', 'Sunglasses', 'Blue-Light Glasses', 'Sports Eyewear', 'Kids Eyewear'];

  const filtered = PRODUCTS_DATA.filter(item => {
    const matchesCat = activeCat === 'All' || item.category === activeCat;
    const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="catalogue" className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.3em] block mb-2 font-bold">COMPLETE CATALOGUE</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">30+ Eyewear Products</h2>
        </div>

        <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all ${activeCat === c ? 'bg-sky-400 text-slate-950' : 'bg-slate-900 text-slate-300 border border-slate-800'}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <div key={item.id} className="bg-slate-900 rounded-3xl border border-sky-500/20 p-5 flex flex-col justify-between">
              <div>
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-2xl mb-4" />
                <span className="text-[10px] font-mono text-sky-400 uppercase">{item.category} • {item.shape}</span>
                <h3 className="font-sans text-lg font-bold text-white mt-1">{item.name}</h3>
                <span className="text-sm font-mono font-bold text-sky-300 block mt-1">AED {item.price}</span>
              </div>
              <div className="pt-4 flex justify-between items-center mt-4 border-t border-slate-800">
                <button onClick={() => onSelectProduct(item)} className="text-xs font-mono text-slate-300 underline">View Details</button>
                <button onClick={() => onAddToCart(item)} className="px-4 py-2 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5" /><span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
