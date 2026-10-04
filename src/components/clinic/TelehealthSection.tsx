'use client';
import React from 'react';
import { Video, ArrowRight } from 'lucide-react';

export const TelehealthSection: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="telehealth" className="py-24 bg-[#0B132B] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 border border-sky-500/30 text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sky-400"><Video className="w-5 h-5" /><span className="text-xs font-mono font-bold uppercase">SECURE VIRTUAL CARE</span></div>
          <h2 className="text-3xl font-sans font-bold text-white">Private Teleconsultation Services</h2>
          <p className="text-xs text-slate-300 max-w-2xl mx-auto">Connect virtually with your preferred specialist from home. Sample teleconsultation fee AED 280.</p>
          <button onClick={() => onOpenBooking()} className="px-6 py-3 bg-sky-400 text-slate-950 font-mono font-bold text-xs uppercase rounded-xl inline-flex items-center gap-2"><span>Book Teleconsultation</span><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
