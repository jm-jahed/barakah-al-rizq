'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Stethoscope, 
  Award, 
  Star, 
  Calendar, 
  Globe2, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  UserCheck,
  Eye
} from 'lucide-react';
import { VETERINARIANS_DATA, Veterinarian } from '@/data/petCareData';

interface VeterinarianDirectoryProps {
  onSelectVet: (vet: Veterinarian) => void;
  onOpenBooking: (vetId?: string) => void;
}

export const VeterinarianDirectory: React.FC<VeterinarianDirectoryProps> = ({
  onSelectVet,
  onOpenBooking,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const shouldReduceMotion = useReducedMotion();

  const specialties = ['All', 'Soft Tissue Surgery', 'Orthopedic Joint Repair', 'Cardiology', 'Emergency ICU'];

  const filteredVets = VETERINARIANS_DATA.filter((v) => {
    if (selectedSpecialty === 'All') return true;
    return v.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
  });

  return (
    <section id="specialists" className="py-24 sm:py-32 bg-[#0B1219] text-white relative overflow-hidden border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>RESIDENT MEDICAL BOARD & SURGEONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              Internationally Certified <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Veterinary Specialists.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Our clinical directors, orthopedic surgeons, and emergency physicians hold fellowships from the Royal Veterinary College (UK), UC Davis, and Zurich University.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="px-4 py-2 rounded-2xl bg-[#0E1720] border border-emerald-500/30 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">BOARD CERTIFICATIONS</span>
              <span className="text-xs font-bold font-mono text-emerald-300 flex items-center gap-1.5 justify-end mt-0.5">
                RCVS UK • ACVS USA • DED Lic.
              </span>
            </div>
          </div>
        </div>

        {/* Specialty Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {specialties.map((spec) => (
            <button
              key={spec}
              type="button"
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedSpecialty === spec
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.07] border border-white/10'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVets.map((vet, idx) => (
            <motion.div
              key={vet.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="rounded-3xl bg-[#0E1720] border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group backdrop-blur-md"
            >
              {/* Image & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vet.image}
                  alt={vet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1720] via-transparent to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{vet.rating}</span>
                  <span className="text-slate-400 text-[10px]">({vet.reviewsCount})</span>
                </div>

                {/* Experience Pill */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-xl bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold">
                  {vet.experience}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                    {vet.specialty}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors font-sans">
                    {vet.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">
                    {vet.qualifications}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Languages: {vet.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{vet.availability}</span>
                  </div>
                </div>

                {/* Actions & Price */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">CONSULT FEE</span>
                    <span className="text-base font-black text-emerald-400 font-mono">
                      AED {vet.consultationFee}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectVet(vet)}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/15 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all cursor-pointer"
                      title="View Credentials & Bio"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(vet.id)}
                      className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Consult</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VeterinarianDirectory;
