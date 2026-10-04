'use client';
import React, { useState } from 'react';

export const FashionSizeGuide: React.FC = () => {
  const [unit, setUnit] = useState<'CM' | 'IN'>('CM');
  const sizes = [
    { size: 'XS (UK 6)', bust: unit === 'CM' ? '82-85' : '32-33', waist: unit === 'CM' ? '64-67' : '25-26', hips: unit === 'CM' ? '90-93' : '35-36' },
    { size: 'S (UK 8)', bust: unit === 'CM' ? '86-89' : '34-35', waist: unit === 'CM' ? '68-71' : '27-28', hips: unit === 'CM' ? '94-97' : '37-38' },
    { size: 'M (UK 10)', bust: unit === 'CM' ? '90-93' : '35-36', waist: unit === 'CM' ? '72-75' : '28-29', hips: unit === 'CM' ? '98-101' : '38-39' },
    { size: 'L (UK 12)', bust: unit === 'CM' ? '94-98' : '37-38', waist: unit === 'CM' ? '76-80' : '30-31', hips: unit === 'CM' ? '102-106' : '40-41' },
  ];
  return (
    <section className="py-20 bg-[#0D0B0A] text-[#F3EFEA] border-b border-amber-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-[0.3em] block mb-2">PRECISION TAILORING</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white mb-6">Size Guide.</h2>
        <div className="flex justify-center gap-2 mb-8">
          <button onClick={() => setUnit('CM')} className={`px-4 py-1.5 rounded-xl font-mono text-xs ${unit === 'CM' ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-gray-400'}`}>CM</button>
          <button onClick={() => setUnit('IN')} className={`px-4 py-1.5 rounded-xl font-mono text-xs ${unit === 'IN' ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-gray-400'}`}>INCHES</button>
        </div>
        <div className="max-w-3xl mx-auto bg-[#161311] p-6 rounded-3xl border border-amber-500/20 overflow-x-auto">
          <table className="w-full text-xs font-mono text-left">
            <thead>
              <tr className="border-b border-amber-500/20 text-amber-300">
                <th className="p-3">Size Label</th>
                <th className="p-3">Bust ({unit})</th>
                <th className="p-3">Waist ({unit})</th>
                <th className="p-3">Hips ({unit})</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map(s => (
                <tr key={s.size} className="border-b border-white/5 text-gray-300">
                  <td className="p-3 font-bold text-white">{s.size}</td>
                  <td className="p-3">{s.bust}</td>
                  <td className="p-3">{s.waist}</td>
                  <td className="p-3">{s.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
