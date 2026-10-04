'use client';
import React, { useState } from 'react';

export const CupcakeStudio: React.FC = () => {
  const [flavor, setFlavor] = useState('Chocolate Fudge');
  const [topping, setTopping] = useState('Vanilla Silk Cream');
  const [quantity, setQuantity] = useState(12);

  const priceMap: Record<number, number> = { 6: 95, 12: 180, 24: 340, 48: 650 };
  const total = priceMap[quantity] || 180;

  return (
    <section className="py-20 bg-[#FDFBF7] text-[#2C2114] border-b border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-800 block mb-2">ARTISANAL CUPCAKES</span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1A120B]">Cupcake Studio Builder.</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-amber-900/15 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-amber-900 uppercase tracking-widest mb-2">Sponge Flavor</label>
              <select value={flavor} onChange={(e) => setFlavor(e.target.value)} className="w-full bg-amber-50 border border-amber-900/20 rounded-xl p-3 text-xs font-mono">
                {['Chocolate Fudge', 'Vanilla Bean', 'Red Velvet', 'Pistachio', 'Lemon Zest'].map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-amber-900 uppercase tracking-widest mb-2">Topping</label>
              <select value={topping} onChange={(e) => setTopping(e.target.value)} className="w-full bg-amber-50 border border-amber-900/20 rounded-xl p-3 text-xs font-mono">
                {['Vanilla Silk Cream', 'Chocolate Ganache', 'Salted Caramel', 'Fresh Berry Compote'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-amber-900 uppercase tracking-widest mb-2">Box Quantity</label>
              <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="w-full bg-amber-50 border border-amber-900/20 rounded-xl p-3 text-xs font-mono">
                {[6, 12, 24, 48].map(q => <option key={q} value={q}>{q} Cupcakes</option>)}
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-amber-900/10">
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase block">Sample Total</span>
              <span className="font-mono text-2xl font-bold text-amber-900">AED {total}</span>
            </div>
            <button className="px-6 py-3 bg-[#1A120B] text-amber-300 rounded-xl text-xs font-mono font-bold uppercase">Build Cupcake Box</button>
          </div>
        </div>
      </div>
    </section>
  );
};
