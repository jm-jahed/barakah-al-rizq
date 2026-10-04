'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  IdCard, 
  QrCode, 
  ShieldCheck, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Heart,
  FileCheck
} from 'lucide-react';

export const PetProfileBuilder: React.FC<any> = () => {
  const [petName, setPetName] = useState('Zeus');
  const [species, setSpecies] = useState('Canine (Golden Retriever)');
  const [microchip, setMicrochip] = useState('981098102847192');
  const [dob, setDob] = useState('2021-04-15');
  const [bloodType, setBloodType] = useState('DEA 1.1 Negative');
  const [allergies, setAllergies] = useState('Chicken Protein • Dust Mites');
  const [isGenerated, setIsGenerated] = useState(false);

  return (
    <section id="passport" className="py-24 sm:py-32 bg-[#090E15] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
            <IdCard className="w-3.5 h-3.5" />
            <span>DUBAI MUNICIPALITY & DIGITAL PET ID</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            Interactive UAE Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Pet Identity Pass Builder.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            Generate an official digital emergency medical card complete with ISO microchip verification, emergency contact routing, and allergy alerts.
          </p>
        </div>

        {/* 2-Column Builder & Live Pass Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Form Inputs */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#0E1720] border border-white/10 space-y-4 shadow-2xl backdrop-blur-xl text-xs font-mono">
            <div className="space-y-1">
              <label className="block text-slate-400 font-bold uppercase">Companion Name:</label>
              <input
                type="text"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400 font-bold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-slate-400 font-bold uppercase">Species & Breed:</label>
                <input
                  type="text"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-slate-400 font-bold uppercase">ISO 15-Digit Microchip:</label>
                <input
                  type="text"
                  value={microchip}
                  onChange={(e) => setMicrochip(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="block text-slate-400 font-bold uppercase">Date of Birth:</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#090F16] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-slate-400 font-bold uppercase">Blood Typing:</label>
                <input
                  type="text"
                  value={bloodType}
                  onChange={(e) => setBloodType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-slate-400 font-bold uppercase">Known Medical Allergies:</label>
              <input
                type="text"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Right Live Digital Pass Preview */}
          <div className="lg:col-span-6 flex flex-col items-center space-y-4">
            <div className="w-full max-w-md p-7 rounded-3xl bg-gradient-to-br from-[#12202C] via-[#0E1720] to-[#080E14] border-2 border-emerald-400/50 shadow-[0_20px_50px_rgba(16,185,129,0.15)] space-y-6 relative overflow-hidden backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                    🐾
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block">
                      UNITED ARAB EMIRATES
                    </span>
                    <h3 className="text-base font-black text-white font-sans">
                      Digital Pet Health Pass
                    </h3>
                  </div>
                </div>

                <QrCode className="w-9 h-9 text-emerald-400/80" />
              </div>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Name:</span>
                  <span className="text-white font-bold text-sm">{petName || 'Companion Name'}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Breed:</span>
                  <span className="text-emerald-300 font-bold truncate max-w-[200px]">{species}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Microchip ID:</span>
                  <span className="text-white font-mono font-bold tracking-wider">{microchip}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-slate-400">Blood Type:</span>
                  <span className="text-amber-300 font-bold">{bloodType}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Allergy Alert:</span>
                  <span className="text-rose-300 font-bold truncate max-w-[190px]">{allergies}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  MOCCAE Verified
                </span>
                <span>Hospital Ref: #DXB-VET-992</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsGenerated(true);
                setTimeout(() => setIsGenerated(false), 3000);
              }}
              className="w-full max-w-md py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold text-xs uppercase font-mono tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 hover:scale-102 transition-all cursor-pointer"
            >
              {isGenerated ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  <span>Apple Wallet Pass Synced!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download Apple Wallet / PDF Pass</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PetProfileBuilder;
