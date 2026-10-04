'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Activity, 
  Search,
  Filter,
  Eye,
  Calendar
} from 'lucide-react';
import { VET_SERVICES_DATA, VetService } from '@/data/petCareData';

interface PetCareServicesProps {
  onSelectService: (service: VetService) => void;
  onOpenBooking: (serviceId?: string) => void;
  searchQuery?: string;
}

const CATEGORIES = [
  'All Specialties',
  'General',
  'Preventive',
  'Dental',
  'Diagnostics',
  'Specialist',
  'Emergency'
] as const;

export const PetCareServices: React.FC<PetCareServicesProps> = ({
  onSelectService,
  onOpenBooking,
  searchQuery = ''
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Specialties');
  const [internalSearch, setInternalSearch] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const effectiveSearch = searchQuery || internalSearch;

  const filteredServices = useMemo(() => {
    return VET_SERVICES_DATA.filter((service) => {
      const matchesCat = activeCategory === 'All Specialties' || service.category === activeCategory;
      const matchesSearch = !effectiveSearch || 
        service.name.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
        service.description.toLowerCase().includes(effectiveSearch.toLowerCase()) ||
        service.suitablePets.toLowerCase().includes(effectiveSearch.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, effectiveSearch]);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A1016] text-white relative overflow-hidden border-b border-emerald-500/20">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-emerald-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>CLINICAL SPECIALTIES & DIAGNOSTICS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
              World-Class Veterinary <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Specialties & Diagnostics.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              From routine wellness checkups and MOCCAE international pet passport clearances to 128-slice CT scans and complex orthopedic TPLO surgeries.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-[#111A24] border border-emerald-500/30 text-right">
              <span className="block text-[9px] font-mono text-slate-400 uppercase tracking-wider">ACCREDITATION</span>
              <span className="text-xs font-bold font-mono text-emerald-300 flex items-center gap-1.5 justify-end mt-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                RCVS UK & MOCCAE
              </span>
            </div>
          </div>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20'
                      : 'bg-white/[0.03] text-slate-300 hover:bg-white/[0.07] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Filter by symptom or specialty..."
              value={internalSearch}
              onChange={(e) => setInternalSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 font-mono"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="rounded-3xl bg-[#0E1720] border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden group relative backdrop-blur-md"
            >
              {/* Service Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1720] via-transparent to-transparent" />

                {/* Badge */}
                {service.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-300 font-bold">
                    {service.badge}
                  </span>
                )}

                {/* Category Pill */}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-400 font-bold">
                  {service.category}
                </span>
              </div>

              {/* Service Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug font-sans">
                    {service.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                    {service.description}
                  </p>
                </div>

                {/* Inclusions checklist preview */}
                <div className="space-y-1.5 pt-2 border-t border-white/10 text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{service.included[0]}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Duration: {service.duration}</span>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">CONSULTATION</span>
                    <span className="text-base font-black text-emerald-400 font-mono">
                      AED {service.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-emerald-500/15 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all cursor-pointer"
                      title="Inspect clinical protocol"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenBooking(service.id)}
                      className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-extrabold font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      <span>Book</span>
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

export default PetCareServices;
