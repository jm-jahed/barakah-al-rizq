'use client';
import React from 'react';

export const CelebrationPackages: React.FC = () => {
  const pkgs = [
    { title: 'Sweet Birthday', price: 199, items: ['6" Custom Cake', '6 Assorted Cupcakes', 'Personalized Card'] },
    { title: 'Celebration Box', price: 299, items: ['8" Signature Cake', '12 Cupcakes', '6 Brownie Bites'] },
    { title: 'Luxury Celebration', price: 499, items: ['10" Premium Cake', '12 Dessert Box', 'Chocolates & Flowers'] },
    { title: 'Corporate Gifting', price: 750, items: ['Branded Boxes', 'Bulk Logo Personalization', 'Multi-Address Delivery'] },
  ];
  return (
    <section className="py-24 bg-[#FDFBF7] text-[#2C2114] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-800 block mb-2">CURATED BUNDLES</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A120B]">Celebration Packages.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pkgs.map(p => (
            <div key={p.title} className="bg-white p-6 rounded-3xl border border-amber-900/15 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1A120B] mb-2">{p.title}</h3>
                <span className="font-mono text-2xl font-bold text-amber-900 block mb-4">AED {p.price}</span>
                <ul className="space-y-2 text-xs text-gray-600 font-mono mb-6">
                  {p.items.map(i => <li key={i}>✓ {i}</li>)}
                </ul>
              </div>
              <button className="w-full py-3 bg-[#1A120B] text-amber-300 rounded-xl text-xs font-mono font-bold">Select Package</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
