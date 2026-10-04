'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Sparkles, 
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';

const DOG_VACCINES = [
  { stage: '6 – 8 Weeks', vaccine: 'DHPPi Core Initial Dose', focus: 'Distemper, Hepatitis, Parvovirus, Parainfluenza', mandatory: true },
  { stage: '10 – 12 Weeks', vaccine: 'DHPPi 2nd Booster + Leptospirosis', focus: 'Immune antibody fortification + Bacterial protection', mandatory: true },
  { stage: '16 Weeks', vaccine: 'Rabies + Dubai Microchip ID', focus: 'Official MOCCAE registration & UAE Pet Passport', mandatory: true },
  { stage: 'Annual (Every 12 Mo)', vaccine: 'Rabies + DHPPi + Kennel Cough Booster', focus: 'Boarding clearance & continuous immunity', mandatory: true },
  { stage: 'Pre-Travel (30-90 Days)', vaccine: 'RNATT Rabies Antibody Titre Test', focus: 'International flight & export clearance (EU/UK/US)', mandatory: false },
];

const CAT_VACCINES = [
  { stage: '8 Weeks', vaccine: 'FVRCP Core Initial Dose', focus: 'Feline Viral Rhinotracheitis, Calicivirus, Panleukopenia', mandatory: true },
  { stage: '12 Weeks', vaccine: 'FVRCP 2nd Booster + FeLV (Leukemia)', focus: 'Full respiratory & immune defense', mandatory: true },
  { stage: '16 Weeks', vaccine: 'Rabies + Dubai Microchip ID', focus: 'Official UAE Municipality passport stamping', mandatory: true },
  { stage: 'Annual (Every 12 Mo)', vaccine: 'Annual Core FVRCP & Rabies Booster', focus: 'Long-term viral & feline leukemia shield', mandatory: true },
  { stage: 'Pre-Travel (30-90 Days)', vaccine: 'RNATT Titre Test & MOCCAE Health Cert', focus: 'Global relocation export approval', mandatory: false },
];

export const VaccinationPlanner: React.FC<any> = () => {
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog');
  const [exported, setExported] = useState(false);

  const activeVaccines = petType === 'dog' ? DOG_VACCINES : CAT_VACCINES;

  const handleExport = () => {
    setExported(true);
    setTimeout(() => setExported(false), 3500);
  };

  return (
    <section id="vaccines" className="py-24 sm:py-32 bg-[#0A1016] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>UAE MUNICIPALITY & MOCCAE COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              UAE Pet Passport & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Immunization Roadmap.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Official Dubai Municipality and UAE Ministry of Climate Change & Environment compliant vaccination milestones for dogs and cats.
            </p>
          </div>

          {/* Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-[#111A24] border border-white/10 self-start md:self-end">
            <button
              type="button"
              onClick={() => setPetType('dog')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                petType === 'dog' ? 'bg-emerald-400 text-slate-950 font-black shadow-lg' : 'text-slate-300 hover:text-white'
              }`}
            >
              🐕 Canine Schedule
            </button>
            <button
              type="button"
              onClick={() => setPetType('cat')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                petType === 'cat' ? 'bg-emerald-400 text-slate-950 font-black shadow-lg' : 'text-slate-300 hover:text-white'
              }`}
            >
              🐈 Feline Schedule
            </button>
          </div>
        </div>

        {/* Milestone Timeline Roadmap */}
        <div className="space-y-4">
          {activeVaccines.map((vax, idx) => (
            <motion.div
              key={vax.stage}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="p-5 sm:p-6 rounded-3xl bg-[#0E1620] border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  #{idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {vax.stage}
                    </span>
                    {vax.mandatory && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30">
                        UAE LAW MANDATORY
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-sans">
                    {vax.vaccine}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-0.5">
                    {vax.focus}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start md:self-auto shrink-0 pt-2 md:pt-0">
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">Cold-Chain Stored</span>
                <a
                  href="#hero"
                  className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/20 hover:border-emerald-400/40 text-xs font-mono font-bold text-emerald-300 transition-all flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Vaccine</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="p-6 rounded-3xl bg-[#0D151F] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <span className="text-white font-bold block text-sm">Download Official UAE Vaccination Timeline</span>
              <span className="text-slate-400 text-xs">Formatted for Dubai Municipality and MOCCAE Pet Passports.</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleExport}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer shrink-0"
          >
            {exported ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-slate-950" />
                <span>Downloaded & Synced</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Export PDF Schedule</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default VaccinationPlanner;
