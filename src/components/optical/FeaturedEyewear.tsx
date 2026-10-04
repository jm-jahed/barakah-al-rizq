'use client';
import React from 'react';
import { Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { PRODUCTS_DATA, EyewearProduct } from '@/data/opticalData';

export const FeaturedEyewear: React.FC<any> = ({ onSelectProduct, onAddToCart, onToggleWishlist, wishlistIds }) => {
  const featured = PRODUCTS_DATA.slice(0, 4);

  return (
    <section id="eyewear" className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-[0.3em] block mb-2 font-bold">CURATED ESSENTIALS</span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white mb-4">Featured Optical & Sunglass Frames</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(item => (
            <div key={item.id} className="bg-slate-950 rounded-3xl border border-sky-500/20 overflow-hidden flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300 group shadow-xl">
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 rounded-full bg-sky-400 text-slate-950 font-bold uppercase">{item.category}</span>
                  <button onClick={() => onToggleWishlist(item.id)} className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:text-rose-400">
                    <Heart className={`w-4 h-4 ${wishlistIds.includes(item.id) ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{item.brand} • {item.material}</span>
                  <h3 className="font-sans font-bold text-base text-white group-hover:text-sky-300 transition-colors">{item.name}</h3>
                  <span className="text-sm font-mono font-bold text-sky-300 block">AED {item.price}</span>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-800/80 mt-2">
                <button onClick={() => onSelectProduct(item)} className="w-1/2 py-2.5 rounded-xl bg-slate-900 text-white font-mono text-xs hover:bg-slate-800">Quick View</button>
                <button onClick={() => onAddToCart(item)} className="w-1/2 py-2.5 rounded-xl bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center justify-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5" /><span>Add</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
