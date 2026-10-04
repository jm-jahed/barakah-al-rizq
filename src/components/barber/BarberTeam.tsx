'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { BARBERS_DATA, Barber } from '@/data/barberData';

export const BarberTeam: React.FC<any> = ({ onSelectBarber, onOpenBooking }) => {
  return (
    <section id="barbers" className="py-24 bg-[#0A0A0B] text-white border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Master Barbers</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BARBERS_DATA.map(doc => (
            <div key={doc.id} className="bg-neutral-900 rounded-3xl border border-amber-500/20 p-5 flex flex-col justify-between">
              <div>
                <img src={doc.image} alt={doc.name} className="w-full h-48 object-cover rounded-2xl mb-3" />
                <div className="flex items-center gap-1 text-amber-400 text-xs font-mono font-bold mb-1"><Star className="w-3.5 h-3.5 fill-amber-400" /> {doc.rating}</div>
                <h3 className="font-sans text-lg font-bold text-white">{doc.name}</h3>
                <span className="text-xs font-mono text-amber-400 block mb-2">{doc.title}</span>
              </div>
              <div className="pt-3 border-t border-neutral-800 flex justify-between items-center">
                <button onClick={() => onSelectBarber(doc)} className="text-xs font-mono text-neutral-300 underline">Bio</button>
                <button onClick={() => onOpenBooking(doc.id)} className="px-3 py-1.5 bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
