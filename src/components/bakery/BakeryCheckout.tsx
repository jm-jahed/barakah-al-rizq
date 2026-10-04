'use client';
import React from 'react';

export const BakeryCheckout: React.FC<any> = (props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#1A1410] text-[#F5EBE6] border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">
            LE PETIT ATELIER DUBAI
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-amber-100 font-bold mb-4">
            Express Order Checkout
          </h2>
          <p className="text-xs md:text-sm text-amber-200/70 leading-relaxed font-sans">
            Review cart items, delivery date, time slot, and delivery address.
          </p>
        </div>

        
        <div className="bg-[#241A12] p-8 rounded-3xl border border-amber-900/30 text-center max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-6">
            <div className="p-4 bg-[#1A1410] rounded-xl border border-amber-900/20">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">01 • Fresh Organic Ingredients</span>
              <p className="text-xs text-gray-300">French AOP Normandy butter, Madagascar vanilla beans, and single-origin Valrhona cocoa.</p>
            </div>
            <div className="p-4 bg-[#1A1410] rounded-xl border border-amber-900/20">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">02 • Same-Day Dubai Van Delivery</span>
              <p className="text-xs text-gray-300">Refrigerated van transport ensuring perfect temperature control to your venue.</p>
            </div>
            <div className="p-4 bg-[#1A1410] rounded-xl border border-amber-900/20">
              <span className="text-xs font-mono text-amber-400 font-bold block mb-1">03 • Bespoke Consultation</span>
              <p className="text-xs text-gray-300">Private tasting consultations and 3D digital cake sketches for weddings & events.</p>
            </div>
          </div>
          <a href="https://wa.me/971501234567?text=Hi%20Le%20Petit%20Atelier!%20I%20want%20to%20order%20a%20custom%20cake." target="_blank" rel="noreferrer" className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-mono text-xs uppercase font-bold rounded-xl inline-block">
            Inquire via WhatsApp →
          </a>
        </div>
        
      </div>
    </section>
  );
};
