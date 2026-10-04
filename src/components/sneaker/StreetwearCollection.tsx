'use client';
import React from 'react';
import { STREETWEAR_CATALOG } from '@/data/sneakerData';
import { ShoppingBag } from 'lucide-react';

export const StreetwearCollection: React.FC = () => {
  return (
    <section id="streetwear" className="py-24 bg-[#0A0908] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            HEAVYWEIGHT COTTONS & CUTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white mb-4">Streetwear Apparel.</h2>
          <p className="text-xs text-gray-400">20+ heavyweight French terry hoodies, oversized graphic tees, and tactical ripstop cargos with realistic UAE pricing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STREETWEAR_CATALOG.map((prod) => (
            <div key={prod.id} className="bg-[#141210] p-4 rounded-2xl border border-amber-500/15 flex flex-col justify-between">
              <div>
                <img src={prod.images[0]} alt={prod.name} className="w-full h-64 object-cover rounded-xl mb-4" />
                <span className="text-[10px] font-mono text-amber-400 uppercase">{prod.category}</span>
                <h3 className="font-serif text-base font-semibold text-white mb-1">{prod.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{prod.fit}</p>
              </div>
              <div className="pt-3 border-t border-amber-500/10 flex items-center justify-between">
                <span className="font-mono text-base font-bold text-white">AED {prod.priceAED}</span>
                <button className="p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-black transition-all">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
