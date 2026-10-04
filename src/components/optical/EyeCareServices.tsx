'use client';
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, EyeCareService } from '@/data/opticalData';

export const EyeCareServices: React.FC<any> = ({ onSelectService, onOpenBooking }) => {
  return (
    <section id="services" className="py-24 bg-[#070D18] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white">Clinical Eye Care Services</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map(item => (
            <div key={item.id} className="bg-slate-900 p-6 rounded-3xl border border-sky-500/20 space-y-4">
              <span className="text-xs font-mono text-sky-400 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {item.duration}</span>
              <h3 className="font-sans text-xl font-bold text-white">{item.name}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                <span className="text-sm font-mono font-bold text-sky-300">AED {item.price}</span>
                <button onClick={() => { onSelectService(item); onOpenBooking(); }} className="px-4 py-2 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl flex items-center gap-1">
                  <span>Book Visit</span><ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
