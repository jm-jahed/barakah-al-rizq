'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, ArrowRight, ShieldCheck, Filter, Flame } from 'lucide-react';
import { NEXARA_TOURNAMENTS, NexaraTournament } from '@/data/nexaraData';

export const NexaraArena: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [registeredTournId, setRegisteredTournId] = useState<string | null>(null);

  const filteredTournaments = NEXARA_TOURNAMENTS.filter(t => {
    const matchRegion = selectedRegion === 'ALL' || t.region === selectedRegion;
    const matchStatus = selectedStatus === 'ALL' || t.status === selectedStatus;
    return matchRegion && matchStatus;
  });

  const handleRegister = (id: string) => {
    setRegisteredTournId(id);
    setTimeout(() => {
      setRegisteredTournId(null);
    }, 2500);
  };

  return (
    <section className="py-24 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span>THE ARENA // COMPETITIVE CIRCUIT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Tournament <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400">Ledger</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              20 active and upcoming competitive majors across UAE & MENA and Global Prime leagues.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['ALL', 'UAE & MENA', 'Global Prime', 'Europe Central', 'Asia Pacific'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedRegion === reg
                    ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* 20 Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tourn) => (
            <motion.div
              key={tourn.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl shadow-slate-950/40"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3 font-mono">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] border ${
                    tourn.status === 'LIVE'
                      ? 'bg-rose-950/80 text-rose-300 border-rose-800 animate-pulse'
                      : tourn.status === 'Registration Open'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}>
                    {tourn.status === 'LIVE' ? '🔴 LIVE NOW' : tourn.status}
                  </span>
                  <span className="text-cyan-400 font-bold">{tourn.region}</span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{tourn.title}</h3>
                <div className="text-xs font-mono text-violet-400 mt-1">{tourn.gameTitle} · {tourn.format}</div>

                <div className="grid grid-cols-2 gap-3 my-5 p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Prize Pool</span>
                    <span className="text-base font-mono font-bold text-amber-400">
                      AED {tourn.prizePoolAED.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Start Date</span>
                    <span className="text-xs font-mono text-slate-200 block mt-1">{tourn.startDate}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                  <span>Req: {tourn.rankRequirement}</span>
                  <span>{tourn.participants}</span>
                </div>
              </div>

              <button
                onClick={() => handleRegister(tourn.id)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 ${
                  registeredTournId === tourn.id
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-600 hover:text-slate-950 text-white'
                }`}
              >
                {registeredTournId === tourn.id ? (
                  <span>Squad Registration Confirmed</span>
                ) : (
                  <>
                    <span>Register Roster</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
