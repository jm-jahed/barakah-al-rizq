'use client';
import React from 'react';
import { Scissors, Calendar, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const BarberHero: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center bg-[#0A0A0B] text-white overflow-hidden py-20 px-4 md:px-8 border-b border-amber-500/20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-center">
            <Scissors className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold text-amber-300 uppercase tracking-normal sm:tracking-widest">
              DIFC • Downtown • Marina • Open 09:00 AM – 10:00 PM
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.08]">
            Refined. Sharp. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
              Unmistakably You.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed font-sans mx-auto lg:mx-0">
            Precision grooming, modern barbering, traditional hot towel shaves, and private VIP rituals tailored for the modern gentleman in Dubai.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-amber-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 14 Grooming Services</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Valet Parking</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Complimentary Espresso & Drinks</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button onClick={onOpenBooking} className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25 hover:scale-105 transition-all">
              <Calendar className="w-4 h-4" /> Book Appointment <ArrowRight className="w-4 h-4" />
            </button>

            <a href="https://wa.me/971523394001" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase font-mono text-center hover:bg-emerald-500/25 transition-all flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> WhatsApp Barber
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-neutral-900 group">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop" alt="The Gentlemen's Room Barber Studio" className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-neutral-900/90 backdrop-blur-xl p-5 rounded-2xl border border-amber-500/30">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">Featured Ritual</span>
              <h3 className="font-sans text-lg font-bold text-white mb-1">Signature Haircut + Beard Sculpt</h3>
              <span className="text-xs font-mono font-bold text-amber-300">Sample Price: AED 165 • 60 Min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
