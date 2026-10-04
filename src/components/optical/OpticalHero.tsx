'use client';
import React from 'react';
import { Eye, Calendar, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export const OpticalHero: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center bg-[#070D18] text-white overflow-hidden py-20 px-4 md:px-8 border-b border-sky-500/20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-sky-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-center">
            <Eye className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold text-sky-300 uppercase tracking-normal sm:tracking-widest">
              City Walk Jumeirah • Open 10:00 AM – 10:00 PM
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.08]">
            See Clearly. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400">
              Look Remarkable.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans mx-auto lg:mx-0">
            Advanced clinical eye examinations and hand-crafted Italian acetate & aerospace titanium eyewear, unified in one seamless Dubai experience.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-sky-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 30+ Designer Frames</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Valet Parking</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Same-Day Lens Fitting</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button onClick={onOpenBooking} className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-sky-500/25 hover:scale-105 transition-all">
              <Calendar className="w-4 h-4" /> Book Clinical Eye Test <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#eyewear" className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-sky-400/50 text-white font-bold text-xs uppercase font-mono text-center hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Explore 30+ Frames
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 shadow-2xl bg-slate-900 group">
            <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1000&auto=format&fit=crop" alt="VISTAEYE Eyewear Studio" className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-sky-500/30">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold">Featured Frame</span>
              <h3 className="font-sans text-lg font-bold text-white mb-1">Aura Square Italian Acetate</h3>
              <span className="text-xs font-mono font-bold text-sky-300">Sample Price: AED 399</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
