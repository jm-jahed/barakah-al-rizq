'use client';
import React from 'react';
import { X, Calendar, CheckCircle2, Clock } from 'lucide-react';
import { Treatment } from '@/data/dentalData';

export const TreatmentDetailModal: React.FC<{ item: Treatment | null; onClose: () => void; onOpenBooking: () => void }> = ({ item, onClose, onOpenBooking }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white"><X className="w-5 h-5" /></button>

        <div className="relative h-56 rounded-2xl overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold uppercase">{item.category}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-sans font-bold text-white">{item.name}</h2>
            <span className="text-xl font-mono font-bold text-teal-300">AED {item.price}</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl">
            <span><Clock className="w-3.5 h-3.5 text-cyan-400 inline mr-1" /> Duration: {item.duration}</span>
            <span>Recovery: {item.recovery}</span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.description}</p>

          <div className="space-y-2 bg-slate-950 p-4 rounded-xl text-xs text-slate-300">
            <span className="font-mono text-cyan-400 font-bold uppercase block mb-1">Key Benefits</span>
            {item.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>{b}</span></div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs font-mono text-slate-400">Suitable For: {item.suitableFor}</span>
            <button onClick={() => { onClose(); onOpenBooking(); }} className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-mono font-bold text-xs uppercase flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book Treatment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
