'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Activity, Shield, Flame, Radio, Award } from 'lucide-react';

export const NexaraMatchCenter: React.FC = () => {
  const [scoreTeamA, setScoreTeamA] = useState(6);
  const [scoreTeamB, setScoreTeamB] = useState(4);
  const [round, setRound] = useState(7);
  const [matchTime, setMatchTime] = useState('01:42');

  const killfeed = [
    { time: '01:38', killer: 'VOIDRUNNER_77', victim: 'VOIDCORE_ZERO', weapon: 'Photon Railgun (Headshot)' },
    { time: '01:14', killer: 'CYBER_VALKYRIE', victim: 'GHOST_PULSE', weapon: 'Plasma Blade (Backstab)' },
    { time: '00:48', killer: 'VOIDCORE_TITAN', victim: 'SOLAR_STORM', weapon: 'Kinetic Rifle' }
  ];

  return (
    <section className="py-24 bg-[#0a0d18] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>LIVE MATCH SIMULATION // DUBAI MAJOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Match <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-rose-400 to-violet-400">Center</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Real-time spectator telemetry, dynamic round state, objective plant timers, and live kill-feed stream.
          </p>
        </div>

        {/* The Live Match Center Arena Dashboard */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Header Scoreboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center pb-8 border-b border-slate-800">
            {/* Team A */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">TEAM ALPHA</div>
              <h3 className="text-2xl font-black text-white font-mono">NEXARA VANGUARD</h3>
              <div className="text-5xl font-mono font-black text-cyan-400 mt-2">{scoreTeamA}</div>
            </div>

            {/* Match State & Timer */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-800 text-rose-300 font-mono text-xs animate-pulse">
                ROUND 0{round} IN PROGRESS
              </div>
              <div className="text-3xl font-mono font-bold text-white">{matchTime}</div>
              <div className="text-xs text-slate-400 font-mono">Map: Orbital Spire (DXB Server)</div>
            </div>

            {/* Team B */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-1">TEAM OMEGA</div>
              <h3 className="text-2xl font-black text-white font-mono">VOIDCORE ESPORTS</h3>
              <div className="text-5xl font-mono font-black text-rose-400 mt-2">{scoreTeamB}</div>
            </div>
          </div>

          {/* Momentum Indicator Bar */}
          <div>
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-cyan-400">NEXARA Momentum 60%</span>
              <span className="text-rose-400">VOIDCORE 40%</span>
            </div>
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden flex border border-slate-800">
              <div className="bg-cyan-500 h-full w-[60%]" />
              <div className="bg-rose-500 h-full w-[40%]" />
            </div>
          </div>

          {/* Killfeed & Tactical Log */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase mb-3 flex items-center justify-between">
              <span>Live Elimination Feed</span>
              <span className="text-emerald-400 font-bold">120 FPS Spectator Feed Active</span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              {killfeed.map((kf, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-slate-500 text-[10px]">{kf.time}</span>
                    <span className="text-cyan-400 font-bold">{kf.killer}</span>
                    <span className="text-slate-400">eliminated</span>
                    <span className="text-rose-400 font-bold">{kf.victim}</span>
                  </div>
                  <span className="text-slate-400 text-[11px] self-end sm:self-auto">{kf.weapon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
