'use client';
import React from 'react';
import { SNEAKER_CATALOG, SneakerItem } from '@/data/sneakerData';
import { Eye, ShoppingBag } from 'lucide-react';

interface NewDropsProps {
  onSelectProduct?: (product: SneakerItem) => void;
  onAddToCart?: (product: SneakerItem) => void;
}

export const NewDrops: React.FC<NewDropsProps> = ({ onSelectProduct, onAddToCart }) => {
  return (
    <section id="drops" className="py-24 bg-[#0A0908] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full inline-block mb-3">
            RELEASE CALENDAR • CONCEPT DROPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight mb-4">New Drops & Grails.</h2>
          <p className="text-xs sm:text-sm text-gray-400">Explore 40+ authenticated sneakers with realistic UAE AED sample pricing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SNEAKER_CATALOG.map((prod) => (
            <div key={prod.id} className="group relative rounded-2xl bg-[#141210] border border-amber-500/15 overflow-hidden hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between shadow-xl">
              <div className="relative h-72 w-full bg-[#0A0908] overflow-hidden cursor-pointer" onClick={() => onSelectProduct?.(prod)}>
                <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                  {prod.badge && <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black text-[9px] font-mono font-bold uppercase">{prod.badge}</span>}
                </div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-10">
                  <button onClick={(e) => { e.stopPropagation(); onSelectProduct?.(prod); }} className="px-4 py-2 rounded-xl bg-white text-black font-bold text-xs flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" /> Quick View
                  </button>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-amber-400/80 mb-1">
                    <span>{prod.brand}</span>
                    <span>{prod.category}</span>
                  </div>
                  <h3 onClick={() => onSelectProduct?.(prod)} className="text-base font-serif text-white font-semibold mb-1 cursor-pointer hover:text-amber-300 transition-colors line-clamp-1">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-400 line-clamp-1 mb-3 font-normal">{prod.description}</p>
                </div>

                <div className="pt-3 border-t border-amber-500/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase block">Sample AED Price</span>
                    <span className="text-base font-bold font-mono text-white">AED {prod.priceAED.toLocaleString()}</span>
                  </div>
                  <button onClick={() => onAddToCart?.(prod)} className="p-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 text-amber-300 hover:text-black transition-all">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
