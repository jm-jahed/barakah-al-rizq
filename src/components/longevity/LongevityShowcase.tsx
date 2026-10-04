'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Activity, ShieldCheck, Clock, Calendar, ArrowRight, CheckCircle2, User, Phone, ChevronRight, Award, FlaskConical, HeartPulse, Sliders, X, Lock, MessageSquare } from 'lucide-react';
import Link from 'next/link';

// Longevity Treatment Protocols Data
const TREATMENT_PROTOCOLS = [
  {
    id: 'stem-cell-regen',
    name: 'Autologous Mesenchymal Stem Cell Protocol',
    category: 'Cellular Regeneration',
    duration: 'Full Day Protocol',
    price: 38000,
    priceFormatted: 'AED 38,000',
    description: 'Harvested autologous stem cells infused for systemic organ rejuvenation, joint repair, and tissue longevity.',
    features: ['100M+ Expanded Viable Cells', 'DIFC Clinical Grade Lab', 'Telomere Length Assessment', '6-Month Post-Care Biomarkers'],
    badge: 'Flagship Therapy',
    popular: true
  },
  {
    id: 'nad-resuscitation',
    name: 'High-Dose NAD+ Cellular Resuscitation',
    category: 'Mitochondrial Energy',
    duration: '3-Hour Session',
    price: 4500,
    priceFormatted: 'AED 4,500',
    description: 'Intravenous NAD+ loading to restore cellular ATP, enhance cognitive clarity, and repair mitochondrial DNA.',
    features: ['1,000mg Bio-Identical NAD+', 'Glutathione Push', 'CoQ10 Metabolic Support', 'Instant Energy Elevation'],
    badge: 'Most Requested',
    popular: false
  },
  {
    id: 'hyperbaric-cryo',
    name: 'Hyperbaric Oxygen & 160°C Cryo Chamber',
    category: 'Hyperbaric & Cold Therapy',
    duration: '90 Minutes',
    price: 2800,
    priceFormatted: 'AED 2,800',
    description: '2.0 ATA pure medical oxygen chamber combined with whole-body cryotherapy to trigger heat-shock proteins and angiogenesis.',
    features: ['2.0 ATA Oxygen Saturation', '-160°C Cryotherapy Unit', 'Infrared Detox Suite', 'Cellular Hypoxia Training'],
    badge: 'Rapid Recovery',
    popular: false
  },
  {
    id: 'genomic-epigenetic',
    name: 'Full Epigenetic Age & Genomic Sequencing',
    category: 'Diagnostics & Telemetry',
    duration: 'Lab Diagnostics',
    price: 12500,
    priceFormatted: 'AED 12,500',
    description: 'Comprehensive DNA methylation analysis, 150+ blood biomarkers, and personalized 12-month bio-hacking roadmap.',
    features: ['Horvath Clock Biological Age', 'Full Genome Sequencing', 'Continuous Glucose Telemetry', '1-on-1 MD Consultation'],
    badge: 'Diagnostic Standard',
    popular: false
  }
];

// Medical Leadership
const MEDICAL_TEAM = [
  {
    name: 'Dr. Alistair Vance, MD, PhD',
    role: 'Chief Medical Officer & Cellular Biologist',
    credentials: 'Oxford PhD • Harvard Medical Fellow',
    bio: 'Former lead researcher at Zurich Bio-Longevity Center with 18+ years pioneering autologous cell therapies in the UK and UAE.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Dr. Mariam Al-Mansoori, MD',
    role: 'Director of Epigenetics & Anti-Aging',
    credentials: 'Johns Hopkins MD • UAE Health Council Advisor',
    bio: 'Specialist in metabolic longevity, hormone optimization, and precision bio-identical therapies for executive leaders across the GCC.',
    avatar: 'https://images.unsplash.com/photo-1594824813566-78a94625b682?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Prof. Henrik Lindqvist',
    role: 'Head of Hyperbaric & Cryo Medicine',
    credentials: 'Karolinska Institute • European Longevity Board',
    bio: 'Pioneer in vascular oxygenation therapies and hyperbaric tissue repair for high-performance athletes and C-suite executives.',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
  }
];

export const LongevityShowcase: React.FC = () => {
  // State for Biological Age Calculator
  const [chronoAge, setChronoAge] = useState<number>(45);
  const [sleepHours, setSleepHours] = useState<number>(6);
  const [stressLevel, setStressLevel] = useState<string>('moderate'); // low, moderate, high
  const [exerciseFreq, setExerciseFreq] = useState<number>(3);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedProtocol, setSelectedProtocol] = useState<string>('stem-cell-regen');
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  // Calculate Estimated Biological Age
  const calculateBioAge = () => {
    let modifier = 0;
    if (sleepHours < 7) modifier += 2.5;
    if (sleepHours >= 8) modifier -= 1.5;
    if (stressLevel === 'high') modifier += 3.8;
    if (stressLevel === 'low') modifier -= 2.0;
    if (exerciseFreq >= 4) modifier -= 3.0;
    if (exerciseFreq <= 1) modifier += 2.2;
    return Math.max(20, Math.round((chronoAge + modifier) * 10) / 10);
  };

  const bioAge = calculateBioAge();
  const ageDelta = Math.round((chronoAge - bioAge) * 10) / 10;

  const activeProtocolObj = TREATMENT_PROTOCOLS.find(p => p.id === selectedProtocol) || TREATMENT_PROTOCOLS[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#070B09] text-gray-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#070B09]/90 backdrop-blur-xl border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <div className="w-full h-full bg-[#070B09] rounded-[10px] flex items-center justify-center">
                <Dna className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                VITA<span className="text-emerald-400">CELL</span>
              </span>
              <span className="block text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase">
                DIFC Longevity Sanctuary • Dubai
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#calculator" className="hover:text-emerald-400 transition-colors">BIO-AGE CALCULATOR</a>
            <a href="#protocols" className="hover:text-emerald-400 transition-colors">TREATMENTS</a>
            <a href="#specialists" className="hover:text-emerald-400 transition-colors">MEDICAL BOARD</a>
            <a href="#facility" className="hover:text-emerald-400 transition-colors">SUITES</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BOOK CONSULTATION</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-emerald-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[160px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>UAE Ministry of Health & DIFC Compliant</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Reverse Your <br />
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-500 bg-clip-text text-transparent">
                  Biological Age.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Dubai’s premier medical sanctuary for autologous stem cell regeneration, NAD+ cellular restoration, and bio-identical longevity protocols tailored for GCC leaders.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>VIP CLINICAL DISCOVERY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#calculator"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-emerald-400" />
                  <span>CALCULATE BIO-AGE</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">-6.4 Yrs</span>
                  <span className="text-xs text-gray-400 font-mono">Avg Bio-Age Reversal</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">100M+</span>
                  <span className="text-xs text-gray-400 font-mono">Stem Cells Infused</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">1,400+</span>
                  <span className="text-xs text-gray-400 font-mono">GCC HNW Patients</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-emerald-500/30 to-teal-500/10 border border-emerald-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" 
                    alt="VitaCell Longevity Suite" 
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B09] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#070B09]/90 border border-emerald-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Activity className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">DIFC Gate Precinct Sanctuary</h4>
                        <p className="text-[11px] text-gray-400">Private Helipad Access & VIP Suites</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BIOLOGICAL AGE CALCULATOR SECTION ── */}
      <section id="calculator" className="py-24 bg-[#0A0F0C] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>INTERACTIVE BIO-TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Calculate Your Biological Age
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Input your current lifestyle metrics to estimate your cellular methylation age and discover your customized protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#101713] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Chronological Age */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Chronological Age</label>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">{chronoAge} Years</span>
                </div>
                <input 
                  type="range" 
                  min={25} 
                  max={75} 
                  value={chronoAge} 
                  onChange={(e) => setChronoAge(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Sleep Hours */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Average Sleep / Night</label>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">{sleepHours} Hours</span>
                </div>
                <input 
                  type="range" 
                  min={4} 
                  max={10} 
                  value={sleepHours} 
                  onChange={(e) => setSleepHours(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Stress Level */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-2">Executive Stress Load</label>
                <div className="grid grid-cols-3 gap-3">
                  {['low', 'moderate', 'high'].map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setStressLevel(level)}
                      className={`py-2.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                        stressLevel === level 
                          ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                          : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exercise Frequency */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Weekly Physical Activity</label>
                  <span className="text-sm font-mono font-extrabold text-emerald-400">{exerciseFreq} Days / Wk</span>
                </div>
                <input 
                  type="range" 
                  min={0} 
                  max={7} 
                  value={exerciseFreq} 
                  onChange={(e) => setExerciseFreq(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#131F19] to-[#0A0F0C] p-8 rounded-3xl border border-emerald-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
                Estimated Biological Age
              </span>

              <div className="text-6xl font-extrabold font-mono text-white tracking-tight">
                {bioAge} <span className="text-sm text-gray-400 font-sans font-normal">Yrs</span>
              </div>

              <div className={`inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold ${
                ageDelta < 0 
                  ? 'bg-red-500/10 text-red-400 border border-red-500/30' 
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              }`}>
                {ageDelta < 0 ? `+${Math.abs(ageDelta)} Yrs Accelerated Aging` : `-${ageDelta} Yrs Longevity Advantage`}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                Recommended Protocol: <strong className="text-white">Autologous Stem Cell Therapy + NAD+ Cellular Resuscitation</strong>.
              </p>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                REQUEST CLINICAL CONSULTATION
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── TREATMENT PROTOCOLS ── */}
      <section id="protocols" className="py-24 bg-[#070B09] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
                <HeartPulse className="w-3.5 h-3.5" />
                <span>EVIDENCE-BASED THERAPIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Cellular Longevity Protocols
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              All protocols are administered in our DIFC private hospital suites by European board-certified anti-aging MDs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TREATMENT_PROTOCOLS.map((protocol) => (
              <div 
                key={protocol.id}
                className="p-8 rounded-3xl bg-[#0E1511] border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-bold">
                      {protocol.badge}
                    </span>
                    <span className="text-xs font-mono text-gray-400">{protocol.duration}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors mb-3">
                    {protocol.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {protocol.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {protocol.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">Protocol Fee</span>
                    <span className="text-2xl font-extrabold text-white font-mono">{protocol.priceFormatted}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProtocol(protocol.id);
                      setIsBookingOpen(true);
                    }}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>RESERVE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MEDICAL BOARD ── */}
      <section id="specialists" className="py-24 bg-[#0A0F0C] border-b border-emerald-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>WORLD-CLASS PHYSICIANS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Leading Medical Longevity Board
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MEDICAL_TEAM.map((doctor, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#101713] border border-white/10 hover:border-emerald-500/40 transition-all text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-emerald-500/30 p-1">
                  <img src={doctor.avatar} alt={doctor.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans mb-1">{doctor.name}</h3>
                <span className="text-xs font-mono text-emerald-400 block mb-2">{doctor.role}</span>
                <span className="text-[11px] font-mono text-gray-400 block mb-4 bg-white/5 py-1 px-3 rounded-full">{doctor.credentials}</span>
                <p className="text-xs text-gray-300 leading-relaxed">{doctor.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER & FINAL CTA ── */}
      <footer className="py-20 bg-[#050806] text-gray-400 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Dna className="w-6 h-6 text-emerald-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-sans">
                VITA<span className="text-emerald-400">CELL</span> DUBAI
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Gate Precinct 4, Level 7 • Dubai International Financial Centre (DIFC), UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 VITA CELL CLINICAL LONGEVITY LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-emerald-400">TEL: +971 4 888 9090</span>
              <span>DIFC CLINIC PERMIT #94820</span>
            </div>
          </div>

        </div>
      </footer>

      {/* ── BOOKING MODAL / DRAWER ── */}
      <AnimatePresence>
        {isBookingOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0E1511] border border-emerald-500/30 p-8 rounded-3xl max-w-lg w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {bookingSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white font-sans">Clinical Consultation Requested</h3>
                  <p className="text-xs text-gray-300 font-mono">
                    Our Senior Medical Concierge will contact you within 2 hours to confirm your private suite appointment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 uppercase font-bold block mb-1">VIP Consultation</span>
                    <h3 className="text-xl font-bold text-white font-sans">Reserve Clinical Discovery</h3>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Select Protocol</label>
                    <select 
                      value={selectedProtocol}
                      onChange={(e) => setSelectedProtocol(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                    >
                      {TREATMENT_PROTOCOLS.map(p => (
                        <option key={p.id} value={p.id} className="bg-[#0E1511]">
                          {p.name} ({p.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. H.E. Sheikh Mansoor"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">UAE Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+971 50 000 0000"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-emerald-400 outline-none"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-gray-300 font-mono flex items-center justify-between">
                    <span>Protocol Total Fee:</span>
                    <strong className="text-emerald-400 text-sm">{activeProtocolObj.priceFormatted}</strong>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
                  >
                    CONFIRM VIP APPOINTMENT
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default LongevityShowcase;
