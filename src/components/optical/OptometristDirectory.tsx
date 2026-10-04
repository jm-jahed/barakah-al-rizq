'use client';
import React from 'react';
import { OPTOMETRISTS_DATA, Optometrist } from '@/data/opticalData';

export const OptometristDirectory: React.FC<any> = ({ onSelectOptometrist, onOpenBooking }) => {
  return (
    <section id="optometrists" className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Clinical Optometrists</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {OPTOMETRISTS_DATA.map(doc => (
            <div key={doc.id} className="bg-slate-950 rounded-3xl border border-sky-500/20 p-5">
              <img src={doc.image} alt={doc.name} className="w-full h-48 object-cover rounded-2xl mb-3" />
              <h3 className="font-sans text-lg font-bold text-white">{doc.name}</h3>
              <span className="text-xs font-mono text-sky-400 block mb-2">{doc.specialty}</span>
              <div className="flex justify-between items-center pt-3 border-t border-slate-800">
                <button onClick={() => onSelectOptometrist(doc)} className="text-xs font-mono text-slate-300 underline">Bio</button>
                <button onClick={() => onOpenBooking(doc.id)} className="px-3 py-1.5 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
