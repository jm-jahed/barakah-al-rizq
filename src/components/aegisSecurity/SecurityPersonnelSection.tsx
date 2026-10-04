'use client';

import React from 'react';
import { UserCheck, Shield, Award, CheckCircle2 } from 'lucide-react';
import { AEGIS_PERSONNEL_PROFILES } from '@/data/aegisSecurityData';

export default function SecurityPersonnelSection() {
  return (
    <section className="py-24 bg-[#03060C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <span>THE AEGIS HUMAN STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Discipline. Training. Presence.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technology enables, but human excellence protects. Every AEGIS officer is rigorously background-vetted, SIRA certified, and conditioned for high-stakes operational readiness.
          </p>
        </div>

        {/* 3 Personnel Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AEGIS_PERSONNEL_PROFILES.map((profile) => (
            <div
              key={profile.id}
              className="p-8 rounded-3xl bg-[#080D18] border border-slate-800/90 shadow-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 transition group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                  <UserCheck className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                  {profile.roleCategory}
                </span>

                <h3 className="text-xl font-extrabold text-white mb-2">
                  {profile.title}
                </h3>

                <span className="inline-block px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400 font-mono text-xs font-semibold mb-5">
                  {profile.experienceLevel}
                </span>

                <div className="space-y-2 pt-4 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-bold mb-1">
                    Certified Training Disciplines
                  </span>
                  {profile.trainingDisciplines.map((tr, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{tr}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
                <span className="text-slate-500 text-[10px] block uppercase">Deployment Protocol</span>
                <span className="text-slate-300">{profile.deploymentRatio}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
