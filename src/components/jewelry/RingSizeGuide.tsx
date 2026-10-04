'use client';
import React, { useState } from 'react';

export const RingSizeGuide: React.FC = () => {
  const [selectedUs, setSelectedUs] = useState('US 6');
  const sizes = [
    { us: 'US 5', uk: 'J 1/2', eu: '49', diameter: '15.7mm', circ: '49.3mm' },
    { us: 'US 6', uk: 'L 1/2', eu: '52', diameter: '16.5mm', circ: '51.9mm' },
    { us: 'US 7', uk: 'N 1/2', eu: '54', diameter: '17.3mm', circ: '54.4mm' },
    { us: 'US 8', uk: 'P 1/2', eu: '57', diameter: '18.1mm', circ: '57.0mm' },
    { us: 'US 9', uk: 'R 1/2', eu: '59', diameter: '18.9mm', circ: '59.5mm' },
  ];
  return (
    <section className="py-20 bg-[#0B0907] text-[#E8E2D5] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-2">PRECISION FITTING</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-8">Ring Size Guide.</h2>
        <div className="max-w-3xl mx-auto bg-[#14110E] p-6 rounded-3xl border border-amber-500/20 overflow-x-auto">
          <table className="w-full text-xs font-mono text-left">
            <thead>
              <tr className="border-b border-amber-500/20 text-amber-300">
                <th className="p-3">US Size</th>
                <th className="p-3">UK Size</th>
                <th className="p-3">EU Size</th>
                <th className="p-3">Diameter</th>
                <th className="p-3">Circumference</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map(s => (
                <tr key={s.us} onClick={() => setSelectedUs(s.us)} className={`border-b border-white/5 cursor-pointer ${selectedUs === s.us ? 'bg-amber-500/10 text-white font-bold' : 'text-gray-400'}`}>
                  <td className="p-3">{s.us}</td>
                  <td className="p-3">{s.uk}</td>
                  <td className="p-3">{s.eu}</td>
                  <td className="p-3">{s.diameter}</td>
                  <td className="p-3">{s.circ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
