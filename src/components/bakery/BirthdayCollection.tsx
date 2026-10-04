'use client';
import React from 'react';

export const BirthdayCollection: React.FC<any> = (props) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#1A1410] text-[#F5EBE6] border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2 font-bold">
            LE PETIT ATELIER DUBAI
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-amber-100 font-bold mb-4">
            Signature Birthday Cakes
          </h2>
          <p className="text-xs md:text-sm text-amber-200/70 leading-relaxed font-sans">
            Celebration cakes designed for unforgettable birthdays across Dubai & Abu Dhabi.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
            <div key="Vanilla Bean & Fresh Raspberry" className="bg-[#241A12] rounded-2xl border border-amber-900/30 overflow-hidden p-4 flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop" alt="Vanilla Bean & Fresh Raspberry" className="w-full h-56 object-cover rounded-xl mb-4" />
                <span className="text-[10px] font-mono text-amber-400 block mb-1">8 Inch (Serves 12)</span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">Vanilla Bean & Fresh Raspberry</h3>
              </div>
              <div className="pt-3 border-t border-amber-900/20 flex items-center justify-between">
                <span className="font-mono text-base font-bold text-amber-200">AED 380</span>
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-black font-extrabold text-xs uppercase font-mono rounded-xl">Order Cake</button>
              </div>
            </div>
          
            <div key="Valrhona Dark Chocolate Drip" className="bg-[#241A12] rounded-2xl border border-amber-900/30 overflow-hidden p-4 flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600&auto=format&fit=crop" alt="Valrhona Dark Chocolate Drip" className="w-full h-56 object-cover rounded-xl mb-4" />
                <span className="text-[10px] font-mono text-amber-400 block mb-1">8 Inch (Serves 12)</span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">Valrhona Dark Chocolate Drip</h3>
              </div>
              <div className="pt-3 border-t border-amber-900/20 flex items-center justify-between">
                <span className="font-mono text-base font-bold text-amber-200">AED 420</span>
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-black font-extrabold text-xs uppercase font-mono rounded-xl">Order Cake</button>
              </div>
            </div>
          
            <div key="Pistachio Praline Crunch" className="bg-[#241A12] rounded-2xl border border-amber-900/30 overflow-hidden p-4 flex flex-col justify-between">
              <div>
                <img src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=600&auto=format&fit=crop" alt="Pistachio Praline Crunch" className="w-full h-56 object-cover rounded-xl mb-4" />
                <span className="text-[10px] font-mono text-amber-400 block mb-1">8 Inch (Serves 12)</span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">Pistachio Praline Crunch</h3>
              </div>
              <div className="pt-3 border-t border-amber-900/20 flex items-center justify-between">
                <span className="font-mono text-base font-bold text-amber-200">AED 450</span>
                <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-black font-extrabold text-xs uppercase font-mono rounded-xl">Order Cake</button>
              </div>
            </div>
          
        </div>
        
      </div>
    </section>
  );
};
