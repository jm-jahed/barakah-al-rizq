'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Plus, Trash2, CheckCircle2, Trophy, Swords } from 'lucide-react';

interface TeamMember {
  role: 'Captain / IGL' | 'Entry Fragger' | 'Recon Scout' | 'Support Anchor' | 'Substitute';
  username: string;
  avatar: string;
  rank: string;
}

export const NexaraTeamBuilder: React.FC = () => {
  const [teamName, setTeamName] = useState('DUBAI VORTEX');
  const [teamTag, setTeamTag] = useState('DVX');
  const [region, setRegion] = useState('UAE & Middle East');
  const [game, setGame] = useState('ECLIPSE PROTOCOL');
  const [saved, setSaved] = useState(false);

  const [members, setMembers] = useState<TeamMember[]>([
    { role: 'Captain / IGL', username: 'VOIDRUNNER_77', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', rank: 'Apex Grandmaster' },
    { role: 'Entry Fragger', username: 'CYBER_VALKYRIE', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', rank: 'Apex Grandmaster' },
    { role: 'Recon Scout', username: 'ECHO_BLADE', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', rank: 'Master Prime' },
    { role: 'Support Anchor', username: 'SOLAR_STORM', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80', rank: 'Master Prime' },
    { role: 'Substitute', username: 'DUNE_RIDER', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80', rank: 'Diamond Elite' }
  ]);

  const handleSaveTeam = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section className="py-24 bg-[#07090e] text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Swords className="w-3.5 h-3.5" />
            <span>SQUAD OPERATIONS & ROSTERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-400">Squad</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Assemble and register your competitive roster for official NEXARA Premier Majors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Team Configuration Form */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase font-mono">Team Identity</h3>
            
            <div>
              <label className="block text-slate-400 text-xs mb-1">Squad Name</label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 text-xs mb-1">Tag (Clan)</label>
                <input
                  type="text"
                  value={teamTag}
                  onChange={(e) => setTeamTag(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs mb-1">Region Hub</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="UAE & Middle East">UAE & Middle East</option>
                  <option value="Global Prime">Global Prime</option>
                  <option value="Europe Central">Europe Central</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-xs mb-1">Flagship Competitive Game</label>
              <select
                value={game}
                onChange={(e) => setGame(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="ECLIPSE PROTOCOL">ECLIPSE PROTOCOL (5v5)</option>
                <option value="VOID//ASCENT">VOID//ASCENT (3v3)</option>
                <option value="ZERO HOUR">ZERO HOUR (Squad)</option>
              </select>
            </div>

            <button
              onClick={handleSaveTeam}
              className={`w-full mt-4 py-3 px-4 rounded-xl text-xs font-bold font-mono transition-all flex items-center justify-center gap-2 ${
                saved ? 'bg-emerald-500 text-slate-950' : 'bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950'
              }`}
            >
              {saved ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Roster Locked & Verified</span>
                </>
              ) : (
                <span>Save Squad Roster</span>
              )}
            </button>
          </div>

          {/* Active 5-Member Roster */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Active 5-Player Tournament Roster</span>
              <span className="text-cyan-400">{teamName} [{teamTag}]</span>
            </div>

            {members.map((member, idx) => (
              <div
                key={member.username}
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.username}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-800"
                  />
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 uppercase">
                      {member.role}
                    </span>
                    <h4 className="text-sm font-bold text-white font-mono mt-1">{member.username}</h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-fuchsia-400">{member.rank}</span>
                  <div className="text-[10px] text-emerald-400 font-mono">100% Ready</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
