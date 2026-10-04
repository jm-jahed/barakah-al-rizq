'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, Activity, CheckCircle2, ShieldCheck, Smile, PhoneCall, Lock } from 'lucide-react';

export const MedivantaDoorstepCare: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Heart className="w-3.5 h-3.5 text-emerald-300" />
            CARE-FIRST EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Technology Should <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Feel Human.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Behind every prescription is a patient seeking relief or a caregiver supporting a loved one. We build logistics around warmth, safety, clarity, and reassurance.
          </p>
        </div>

        {/* 3 Core Human Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Simple */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#07111c] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 w-fit mb-6 group-hover:scale-110 transition-transform">
                <Smile className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">PRINCIPLE 01</span>
              <h3 className="text-2xl font-bold text-white mb-3">SIMPLE</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Medicine ordering without unnecessary complexity. One-tap chronic refills, crystal-clear dosage schedules, and zero medical jargon.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-slate-300">Frictionless Patient Flow</span>
            </div>
          </div>

          {/* Visible */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#07111c] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-cyan-300 w-fit mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">PRINCIPLE 02</span>
              <h3 className="text-2xl font-bold text-white mb-3">VISIBLE</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Total transparency throughout the delivery journey. Know who verified your medicine, the compartment temperature, and the exact arrival minute.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-slate-300">Zero Guesswork Tracking</span>
            </div>
          </div>

          {/* Responsive */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-[#07111c] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-teal-300 w-fit mb-6 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">PRINCIPLE 03</span>
              <h3 className="text-2xl font-bold text-white mb-3">RESPONSIVE</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Licensed clinical pharmacists accessible directly via in-app call or chat to answer questions about side effects, timings, or interactions.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 text-xs font-mono text-teal-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-slate-300">Direct Pharmacist Access</span>
            </div>
          </div>
        </div>

        {/* Doorstep Handover Trust Guarantee */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#060e18] via-[#040810] to-[#060e18] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-mono text-slate-300">
          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white">Secure Doorstep Verification:</strong> Deliveries require dual-factor SMS OTP confirmation and are sealed with tamper-evident digital seals.
            </span>
          </div>
          <span className="px-3.5 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 shrink-0 font-bold">
            100% Verified Chain of Custody
          </span>
        </div>
      </div>
    </section>
  );
};
