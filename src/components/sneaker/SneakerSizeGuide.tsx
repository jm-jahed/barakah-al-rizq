'use client';
import React, { useState } from 'react';

export const SneakerSizeGuide: React.FC = () => {
  const [usSize, setUsSize] = useState('US 9');
  const sizes = [
    { us: 'US 8', uk: 'UK 7', eu: 'EU 41', cm: '26.0 cm' },
    { us: 'US 8.5', uk: 'UK 7.5', eu: 'EU 42', cm: '26.5 cm' },
    { us: 'US 9', uk: 'UK 8', eu: 'EU 42.5', cm: '27.0 cm' },
    { us: 'US 9.5', uk: 'UK 8.5', eu: 'EU 43', cm: '27.5 cm' },
    { us: 'US 10', uk: 'UK 9', eu: 'EU 44', cm: '28.0 cm' },
    { us: 'US 11', uk: 'UK 10', eu: 'EU 45', cm: '29.0 cm' },
  ];
  return (
    <section className="py-20 bg-[#0E0D0C] text-[#E8E2D5] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-400 block mb-2">PRECISION FIT</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-8">Sneaker Size Converter.</h2>
        <div className="max-w-3xl mx-auto bg-[#141210] p-6 rounded-3xl border border-amber-500/20 overflow-x-auto">
          <table className="w-full text-xs font-mono text-left">
            <thead>
              <tr className="border-b border-amber-500/20 text-amber-300">
                <th className="p-3">US Size</th>
                <th className="p-3">UK Size</th>
                <th className="p-3">EU Size</th>
                <th className="p-3">Foot Length (CM)</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((s) => (
                <tr key={s.us} onClick={() => setUsSize(s.us)} className={`border-b border-white/5 cursor-pointer ${usSize === s.us ? 'bg-amber-500/10 text-white font-bold' : 'text-gray-400'}`}>
                  <td className="p-3">{s.us}</td>
                  <td className="p-3">{s.uk}</td>
                  <td className="p-3">{s.eu}</td>
                  <td className="p-3">{s.cm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
