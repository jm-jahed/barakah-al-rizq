'use client';
import React from 'react';
import { STREETWEAR_CATALOG, SNEAKER_CATALOG } from '@/data/sneakerData';

export const OutfitBuilder: React.FC = () => {
  const sneaker = SNEAKER_CATALOG[0];
  const hoodie = STREETWEAR_CATALOG[0];
  const cargo = STREETWEAR_CATALOG[1];
  const total = sneaker.priceAED + hoodie.priceAED + cargo.priceAED;

  return (
    <section className="py-24 bg-[#0A0908] text-white border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-2">COMPLETE THE LOOK</span>
          <h2 className="text-3xl sm:text-5xl font-serif mb-4">Outfit Builder Bundle.</h2>
        </div>

        <div className="bg-[#141210] p-8 rounded-3xl border border-amber-500/20 grid grid-cols-1 md:grid-cols-4 gap-6 items-center max-w-5xl mx-auto">
          <div className="text-left">
            <span className="text-[10px] font-mono text-amber-300 block mb-1">Look #01 • Chicago Heritage</span>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Retro Street Ensemble</h3>
            <p className="text-xs text-gray-400">AJ1 High Top + 480GSM French Terry Hoodie + Tactical Cargo Pants.</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-3 gap-2">
            <img src={sneaker.images[0]} alt="Sneaker" className="w-full h-28 object-cover rounded-xl" />
            <img src={hoodie.images[0]} alt="Hoodie" className="w-full h-28 object-cover rounded-xl" />
            <img src={cargo.images[0]} alt="Cargo" className="w-full h-28 object-cover rounded-xl" />
          </div>

          <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-amber-500/20 pt-4 md:pt-0 md:pl-6">
            <span className="text-[10px] font-mono text-gray-400 uppercase block">Bundle Total</span>
            <span className="font-mono text-2xl font-bold text-amber-400 block mb-4">AED {total.toLocaleString()}</span>
            <button className="w-full py-3 bg-amber-500 text-black font-extrabold text-xs font-mono uppercase tracking-wider rounded-xl">Buy Entire Look</button>
          </div>
        </div>
      </div>
    </section>
  );
};
