'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ShieldCheck, Flame, Zap, ArrowRight, Play, Award, MapPin, Activity, CheckCircle2 } from 'lucide-react';

interface FitnessHeroProps {
  onExploreCatalog: () => void;
  onOpenEstimator: () => void;
  onBookAssessment: () => void;
}

export const FitnessHero: React.FC<FitnessHeroProps> = ({
  onExploreCatalog,
  onOpenEstimator,
  onBookAssessment
}) => {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A0908] pt-8 pb-16">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
          alt="Kinetic Athletica Performance Gym Dubai"
          className="w-full h-full object-cover opacity-25 scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/75 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0908]/60 to-[#0A0908]" />
      </div>

      {/* Decorative Red/Orange Performance Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Crest Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-8 backdrop-blur-md shadow-lg shadow-red-500/10"
        >
          <Award className="w-4 h-4 text-red-400" />
          <span>DUBAI&apos;S PREMIER HIGH-PERFORMANCE ATHLETIC CLUB • DIFC & PALM JUMEIRAH</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white font-mono leading-[1.05] max-w-5xl mx-auto"
        >
          SCIENTIFIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600">CONDITIONING</span> &amp; BIOMECHANICS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          160 master athletic protocols engineered for executive hypertrophy, Olympic speed, endurance periodization, and sub-zero biohacking recovery. Fully certified by the Dubai Sports Council.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExploreCatalog}
            className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black font-mono text-sm uppercase tracking-widest shadow-xl shadow-red-600/30 transition-all hover:scale-105 flex items-center gap-2.5"
          >
            <Dumbbell className="w-5 h-5" />
            <span>Explore 160 Protocols</span>
          </button>

          <button
            onClick={onOpenEstimator}
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold font-mono text-sm uppercase tracking-widest backdrop-blur-md transition-all hover:border-red-500/50 flex items-center gap-2.5"
          >
            <Activity className="w-5 h-5 text-red-400" />
            <span>Membership Calculator</span>
          </button>

          <button
            onClick={onBookAssessment}
            className="px-7 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold font-mono text-sm uppercase tracking-wider transition-all flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Book VIP Assessment</span>
          </button>
        </motion.div>

        {/* Live UAE Telemetry Metrics Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Total Protocols</span>
              <Dumbbell className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">160+</div>
            <p className="text-[11px] text-gray-500 font-mono mt-1">Across 8 Elite Disciplines</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Performance Coaches</span>
              <Award className="w-4 h-4 text-orange-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">42</div>
            <p className="text-[11px] text-gray-500 font-mono mt-1">CSCS &amp; EXOS Certified</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Cryo &amp; Biohacking</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">-110°C</div>
            <p className="text-[11px] text-gray-500 font-mono mt-1">Full-Body Chamber Tech</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">Club Footprint</span>
              <MapPin className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white">65,000</div>
            <p className="text-[11px] text-gray-500 font-mono mt-1">sq.ft in DIFC &amp; Palm</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
