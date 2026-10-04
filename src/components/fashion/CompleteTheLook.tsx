'use client';
import React, { useState } from 'react';

export const CompleteTheLook: React.FC<any> = ({ onAddToCart }) => {
  return (
    <section className="py-24 bg-[#0D0B0A] text-[#F3EFEA] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-2">CURATED BUNDLE</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white">Complete The Look.</h2>
        </div>

        <div className="bg-[#161311] p-8 rounded-3xl border border-amber-500/20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <div className="text-left">
            <span className="text-[10px] font-mono text-amber-300 uppercase block mb-1">Look #01 • Evening Silk</span>
            <h3 className="font-serif text-lg font-bold text-white mb-2">Sienna Ensemble</h3>
            <p className="text-xs text-gray-400">Silk wrap dress + calfskin tote bag + pearl drop earrings.</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-3 gap-2">
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop" alt="Dress" className="w-full h-28 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=300&auto=format&fit=crop" alt="Tote" className="w-full h-28 object-cover rounded-xl" />
            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=300&auto=format&fit=crop" alt="Earrings" className="w-full h-28 object-cover rounded-xl" />
          </div>
          <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-amber-500/20 pt-4 md:pt-0 md:pl-6">
            <span className="text-[10px] font-mono text-gray-400 uppercase block">Bundle Total</span>
            <span className="font-mono text-2xl font-bold text-amber-400 block mb-4">AED 1,299</span>
            <button className="w-full py-3 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl">Shop Full Look</button>
          </div>
        </div>
      </div>
    </section>
  );
};
