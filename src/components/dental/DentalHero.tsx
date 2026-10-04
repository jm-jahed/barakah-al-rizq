'use client';
import React from 'react';
import { Calendar, ArrowRight, Clock, CheckCircle2, Smile } from 'lucide-react';

export const DentalHero: React.FC<any> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center bg-[#06101E] text-white overflow-hidden py-20 px-4 md:px-8 border-b border-cyan-500/20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md text-center">
            <Smile className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold text-cyan-300 uppercase tracking-normal sm:tracking-widest">
              City Walk, Jumeirah • Open 09:00 AM – 08:00 PM
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.08]">
            A Healthier Smile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400">
              Starts Right Here.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans mx-auto lg:mx-0">
            Advanced digital dentistry, thoughtful gentle care, and a comfortable pain-free experience tailored for every smile in Dubai.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-cyan-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-400" /> 12+ Treatment Modalities</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-400" /> Free Valet Parking</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-teal-400" /> 3D Smile Trial Mock-up</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#treatments"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700 hover:border-cyan-400/50 text-white font-bold text-xs uppercase font-mono text-center hover:bg-slate-800 transition-all"
            >
              Explore 12+ Treatments
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
              alt="LUMINA DENTAL Clinic Facility"
              className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-cyan-500/30 shadow-2xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Today's Open Slot
                </span>
                <span className="text-xs font-mono font-bold text-teal-300">AED 150</span>
              </div>
              <h3 className="font-sans text-lg font-bold text-white mb-1">Comprehensive Consultation & 3D Scan</h3>
              <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-400" /> 11:00 AM (Dr. Adam)</span>
                <span className="text-emerald-400 font-bold">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
