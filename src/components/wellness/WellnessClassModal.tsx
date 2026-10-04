'use client';
import React from 'react';
import { X, Clock, User, CheckCircle2, Calendar, Award } from 'lucide-react';
import { YogaClass } from '@/data/wellnessData';

export const WellnessClassModal: React.FC<{ item: YogaClass | null; onClose: () => void; onOpenBooking: (id?: string) => void }> = ({ item, onClose, onOpenBooking }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#161411] border border-amber-500/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 text-white relative shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 rounded-2xl overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161411] via-transparent to-transparent" />
          <span className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full bg-amber-500 text-black font-bold uppercase">{item.category}</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">{item.name}</h2>
            <span className="text-xl font-mono font-bold text-amber-300">AED {item.priceSingle}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-300 bg-white/5 p-3 rounded-xl">
            <span><Clock className="w-3.5 h-3.5 text-amber-400 inline mr-1" /> {item.duration}</span>
            <span><User className="w-3.5 h-3.5 text-amber-400 inline mr-1" /> {item.instructor}</span>
            <span><Award className="w-3.5 h-3.5 text-amber-400 inline mr-1" /> Level: {item.level}</span>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>

          <div className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-gray-400">Schedule: {item.schedule}</span>
            <button onClick={() => { onClose(); onOpenBooking(item.id); }} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 text-black font-mono font-bold text-xs uppercase flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" /> Book Class Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
