'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShieldCheck, MapPin, Users, ArrowRight, CheckCircle2, Phone, Mail, MessageSquare, Sliders, Star, X, Send, Calendar, Award, ChevronRight, Camera, Clock, HelpCircle, Gem, Compass, Check } from 'lucide-react';
import { 
  EVERA_SERVICES, 
  REAL_WEDDINGS, 
  EVERA_LEADERSHIP, 
  EVERA_INSIGHTS, 
  EVERA_TESTIMONIALS, 
  EVERA_FAQS,
  EveraService,
  RealWedding,
  EveraInsight
} from '@/data/everaData';

export const EveraShowcase: React.FC = () => {
  // ── 1. SERVICE DRAWER MODAL STATE ──
  const [activeServiceModal, setActiveServiceModal] = useState<EveraService | null>(null);

  // ── 2. BUDGET PLANNER STATE ──
  const [bGuestCount, setBGuestCount] = useState<number>(150);
  const [bVenueStyle, setBVenueStyle] = useState<'beach' | 'desert' | 'ballroom' | 'garden'>('beach');
  const [bPlanningLevel, setBPlanningLevel] = useState<'full' | 'partial' | 'day-of'>('full');

  // Budget calculations
  const perGuestRate = bVenueStyle === 'ballroom' ? 2400 : bVenueStyle === 'desert' ? 2100 : bVenueStyle === 'beach' ? 2200 : 1900;
  const baseBudget = bGuestCount * perGuestRate;
  const levelMultiplier = bPlanningLevel === 'full' ? 1.25 : bPlanningLevel === 'partial' ? 1.1 : 1.0;
  const estimatedTotalBudgetAed = Math.round(baseBudget * levelMultiplier);

  const venueFnbShare = Math.round(estimatedTotalBudgetAed * 0.45);
  const decorFloralShare = Math.round(estimatedTotalBudgetAed * 0.25);
  const photoFilmShare = Math.round(estimatedTotalBudgetAed * 0.15);
  const entertainmentShare = Math.round(estimatedTotalBudgetAed * 0.10);
  const planningFeeShare = Math.round(estimatedTotalBudgetAed * 0.05);

  // ── 3. REAL WEDDINGS GALLERY FILTER STATE ──
  const [weddingFilter, setWeddingFilter] = useState<'all' | 'beach' | 'desert' | 'ballroom' | 'garden'>('all');
  const [activeWeddingModal, setActiveWeddingModal] = useState<RealWedding | null>(null);

  // ── 4. INSIGHTS MODAL STATE ──
  const [activeInsightModal, setActiveInsightModal] = useState<EveraInsight | null>(null);

  // ── 5. FAQ ACCORDION STATE ──
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // ── 6. CONSULTATION FORM STATE ──
  const [cNames, setCNames] = useState<string>('');
  const [cEmail, setCEmail] = useState<string>('');
  const [cPhone, setCPhone] = useState<string>('');
  const [cDate, setCDate] = useState<string>('2026-11-14');
  const [cGuests, setCGuests] = useState<string>('150-200 Guests');
  const [cLevel, setCLevel] = useState<string>('Full Wedding Planning');
  const [cMessage, setCMessage] = useState<string>('');
  const [cSubmitted, setCSubmitted] = useState<boolean>(false);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCSubmitted(true);
  };

  const filteredWeddings = weddingFilter === 'all' 
    ? REAL_WEDDINGS 
    : REAL_WEDDINGS.filter(w => w.style === weddingFilter);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2C2623] font-sans selection:bg-[#E8D3C5] selection:text-[#2C2623]">
      
      {/* ── TOP STICKY NAVBAR ── */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E8D3C5]/40 border border-[#C5A059] flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/20 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#2C2623] font-serif">
                EVERA <span className="text-[#C5A059] font-normal italic">WEDDINGS</span>
              </span>
              <span className="block text-[10px] font-mono text-[#8C827A] tracking-widest uppercase">
                Your Story, Beautifully Told.
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-[#5A5049]">
            <a href="#services" className="hover:text-[#C5A059] transition-colors">SERVICES</a>
            <a href="#budget-planner" className="hover:text-[#C5A059] transition-colors">BUDGET PLANNER</a>
            <a href="#how-we-work" className="hover:text-[#C5A059] transition-colors">PROCESS</a>
            <a href="#real-weddings" className="hover:text-[#C5A059] transition-colors">REAL WEDDINGS</a>
            <a href="#leadership" className="hover:text-[#C5A059] transition-colors">ABOUT US</a>
            <a href="#insights" className="hover:text-[#C5A059] transition-colors">INSIGHTS</a>
            <a href="#locations" className="hover:text-[#C5A059] transition-colors">LOCATIONS</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/971507718844?text=Hello%20EVERA%20Weddings,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#C5A059]/40 bg-[#E8D3C5]/20 hover:bg-[#E8D3C5]/40 text-[#2C2623] text-xs font-mono font-bold transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>WHATSAPP PLANNERS</span>
            </a>

            <a
              href="#consultation"
              className="px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#B38E47] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)] flex items-center gap-2"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BOOK A CONSULTATION</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D3C5]/30 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono font-bold tracking-widest uppercase">
                <Gem className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Luxury UAE Wedding Planning & Design Atelier</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2C2623] tracking-tight leading-[1.08] font-serif">
                The Wedding You've Imagined, <br />
                <span className="italic font-normal text-[#C5A059]">Planned to Perfection.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5A5049] font-normal leading-relaxed max-w-2xl font-sans">
                Full-service luxury wedding planning, bespoke styling, and seamless day-of execution for couples across Dubai, Abu Dhabi, and destination celebrations.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation"
                  className="px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#B38E47] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_6px_25px_rgba(197,160,89,0.4)] hover:scale-[1.02] flex items-center gap-3"
                >
                  <span>BOOK A CONSULTATION</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#real-weddings"
                  className="px-8 py-4 rounded-full bg-white border border-[#E5E0D8] hover:border-[#C5A059] text-[#2C2623] font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-[#C5A059]" />
                  <span>VIEW OUR WEDDINGS</span>
                </a>
              </div>

              {/* Floating Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#E5E0D8] max-w-2xl">
                <div>
                  <span className="text-2xl font-extrabold text-[#2C2623] font-serif block">320+</span>
                  <span className="text-[11px] font-mono text-[#8C827A]">Weddings Planned</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#2C2623] font-serif block">AED 95M+</span>
                  <span className="text-[11px] font-mono text-[#8C827A]">Budgets Managed</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#2C2623] font-serif block">5.0★</span>
                  <span className="text-[11px] font-mono text-[#8C827A]">Couple Rating</span>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-[#2C2623] font-serif block">Dubai & Abu Dhabi</span>
                  <span className="text-[11px] font-mono text-[#8C827A]">UAE Coverage</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-3 bg-white border border-[#E5E0D8] shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#FAF6F0]">
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" 
                    alt="Evera Luxury Wedding Setting" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511285560929-80b456802381?auto=format&fit=crop&w=800&q=80';
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2623]/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E5E0D8]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-full bg-[#E8D3C5]/40 text-[#C5A059]">
                        <Heart className="w-5 h-5 fill-[#C5A059]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-[#2C2623] uppercase">Jumeirah Beachfront Celebration</h4>
                        <p className="text-[11px] text-[#8C827A] font-sans">Sara & Omar • 180 Guests • Full Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-6 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-mono text-[#8C827A] uppercase tracking-widest">
            As featured in leading UAE wedding publications & international bridal style dossiers
          </p>
        </div>
      </section>

      {/* ── SERVICES SECTION (8 MODULES + DRAWER) ── */}
      <section id="services" className="py-24 bg-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D3C5]/30 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>BESPOKE PLANNING MODULES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Our Planning & Design Services
            </h2>
            <p className="text-[#5A5049] text-sm mt-3 font-sans max-w-xl mx-auto">
              From end-to-end full wedding architecture to destination concierges and specialized floral styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVERA_SERVICES.map((serv) => (
              <div 
                key={serv.id}
                onClick={() => setActiveServiceModal(serv)}
                className="bg-white rounded-3xl p-6 border border-[#E5E0D8] flex flex-col justify-between space-y-4 hover:border-[#C5A059] transition-all cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold text-[#C5A059]">{serv.num}</span>
                    <Heart className="w-4 h-4 text-[#C5A059]/40" />
                  </div>
                  <h3 className="text-lg font-bold text-[#2C2623] font-serif">{serv.title}</h3>
                  <p className="text-xs text-[#5A5049] font-sans leading-relaxed line-clamp-3">{serv.desc}</p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8] space-y-2">
                  <span className="text-[10px] font-mono text-[#8C827A] uppercase block font-bold">Ideal For:</span>
                  <p className="text-[11px] font-sans text-[#2C2623] line-clamp-2">{serv.idealFor}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-[#C5A059] font-bold pt-2">
                    <span>EXPLORE MODULE</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICE DETAIL DRAWER MODAL */}
      <AnimatePresence>
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2623]/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FFFDF9] border border-[#C5A059] rounded-3xl p-6 sm:p-8 max-w-xl w-full relative space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setActiveServiceModal(null)}
                className="absolute top-6 right-6 text-[#8C827A] hover:text-[#2C2623] p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <img src={activeServiceModal.image} alt={activeServiceModal.title} className="w-20 h-20 rounded-2xl object-cover border border-[#E5E0D8]" />
                <div>
                  <span className="text-xs font-mono font-bold text-[#C5A059]">{activeServiceModal.num}</span>
                  <h3 className="text-2xl font-bold text-[#2C2623] font-serif">{activeServiceModal.title}</h3>
                </div>
              </div>

              <p className="text-xs text-[#5A5049] font-sans leading-relaxed">{activeServiceModal.desc}</p>

              <div className="space-y-3 bg-[#FAF6F0] p-4 rounded-2xl border border-[#E5E0D8]">
                <span className="text-xs font-mono font-bold text-[#2C2623] uppercase block">Key Deliverables Included:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeServiceModal.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#5A5049]">
                      <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="#consultation"
                  onClick={() => setActiveServiceModal(null)}
                  className="w-full py-3.5 rounded-full bg-[#C5A059] text-white font-bold font-mono text-xs uppercase text-center hover:bg-[#B38E47] transition-all"
                >
                  INQUIRE ABOUT THIS SERVICE →
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── WEDDING BUDGET PLANNER ── */}
      <section id="budget-planner" className="py-24 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>INTERACTIVE WEDDING BUDGET CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Plan Your UAE Wedding Budget
            </h2>
            <p className="text-[#5A5049] text-sm mt-3 font-sans">
              Select guest count, venue environment, and planning scope to view realistic estimated budget allocation ranges in AED.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Input Panel */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E5E0D8] space-y-6 shadow-sm">
              
              {/* Guest Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-[#2C2623] uppercase">Expected Guest Count</label>
                  <span className="text-sm font-mono font-extrabold text-[#C5A059]">{bGuestCount} Guests</span>
                </div>
                <input 
                  type="range"
                  min={50}
                  max={500}
                  step={10}
                  value={bGuestCount}
                  onChange={(e) => setBGuestCount(Number(e.target.value))}
                  className="w-full accent-[#C5A059] bg-[#E5E0D8] h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Venue Style */}
              <div>
                <label className="text-xs font-mono font-bold text-[#2C2623] uppercase block mb-3">Venue Setting</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'beach', label: 'Beachfront Resort' },
                    { id: 'desert', label: 'Desert Dune Sanctuary' },
                    { id: 'ballroom', label: 'Grand Palace Ballroom' },
                    { id: 'garden', label: 'Botanical Garden' },
                  ].map(v => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setBVenueStyle(v.id as any)}
                      className={`p-3 rounded-2xl font-mono text-xs font-bold text-left transition-all cursor-pointer border ${
                        bVenueStyle === v.id
                          ? 'bg-[#C5A059] text-white border-[#C5A059] shadow-md'
                          : 'bg-[#FAF6F0] text-[#5A5049] border-[#E5E0D8] hover:border-[#C5A059]'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Planning Level */}
              <div>
                <label className="text-xs font-mono font-bold text-[#2C2623] uppercase block mb-3">Planning Scope Required</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'full', label: 'Full Planning' },
                    { id: 'partial', label: 'Partial Scope' },
                    { id: 'day-of', label: 'Day-Of Execution' },
                  ].map(l => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setBPlanningLevel(l.id as any)}
                      className={`p-3 rounded-2xl font-mono text-xs font-bold text-center transition-all cursor-pointer border ${
                        bPlanningLevel === l.id
                          ? 'bg-[#2C2623] text-white border-[#2C2623]'
                          : 'bg-[#FAF6F0] text-[#5A5049] border-[#E5E0D8]'
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Panel */}
            <div className="lg:col-span-5 bg-[#2C2623] text-white p-8 rounded-3xl border border-[#C5A059]/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
              
              <span className="text-xs font-mono text-[#C5A059] font-bold uppercase tracking-widest block">
                Estimated Total Wedding Capital
              </span>

              <div className="text-4xl font-extrabold font-serif text-white tracking-tight">
                AED {estimatedTotalBudgetAed.toLocaleString()}
              </div>

              <div className="space-y-2 text-xs font-mono text-[#FAF6F0]/80 pt-4 border-t border-white/10 text-left">
                <div className="flex justify-between">
                  <span>Venue & Food/Beverage (45%):</span>
                  <span className="text-white font-bold">AED {venueFnbShare.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Floral Design & Styling (25%):</span>
                  <span className="text-white font-bold">AED {decorFloralShare.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Photo & Cinematography (15%):</span>
                  <span className="text-white font-bold">AED {photoFilmShare.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Entertainment & Audio (10%):</span>
                  <span className="text-white font-bold">AED {entertainmentShare.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>EVERA Planning Fee (5%):</span>
                  <span className="text-[#C5A059] font-bold">AED {planningFeeShare.toLocaleString()}</span>
                </div>
              </div>

              <a
                href="#consultation"
                className="block w-full py-4 rounded-full bg-[#C5A059] hover:bg-[#B38E47] text-white font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                BOOK A PLANNING CONSULTATION →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── HOW WE WORK (4 STEPS) ── */}
      <section id="how-we-work" className="py-24 bg-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D3C5]/30 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>THE EVERA METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Our 4-Phase Planning Process
            </h2>
            <p className="text-[#5A5049] text-sm mt-3 font-sans">
              From creative concept discovery to 24-hour master coordination on your big day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'DISCOVER', desc: 'Deep dive into your personal story, style preferences, guest count expectations, and overall budget allocation.' },
              { num: '02', title: 'DESIGN', desc: 'Developing bespoke 3D spatial concepts, floral installations, table styling, and shortlisting elite UAE venues.' },
              { num: '03', title: 'PLAN', desc: 'Constructing master timelines, finalizing vendor contracts, arranging tasting menus, and guest travel concierges.' },
              { num: '04', title: 'CELEBRATE', desc: 'Full lead planner and on-site production team oversight ensuring every cue, floral, and dish is delivered seamlessly.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5E0D8] space-y-4">
                <span className="text-2xl font-serif font-bold text-[#C5A059]">{step.num}</span>
                <h3 className="text-lg font-bold text-[#2C2623] font-serif">{step.title}</h3>
                <p className="text-xs text-[#5A5049] font-sans leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── REAL WEDDINGS GALLERY (FILTERABLE) ── */}
      <section id="real-weddings" className="py-24 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>CURATED CELEBRATION PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Real Weddings Gallery
            </h2>
            <p className="text-[#5A5049] text-sm mt-3 font-sans">
              Explore authentic luxury celebrations designed and planned across Dubai and Abu Dhabi.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 font-mono text-xs">
              {[
                { id: 'all', label: 'All Venues' },
                { id: 'beach', label: 'Beachfront' },
                { id: 'desert', label: 'Desert Sanctuary' },
                { id: 'ballroom', label: 'Grand Ballroom' },
                { id: 'garden', label: 'Botanical Garden' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setWeddingFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                    weddingFilter === tab.id
                      ? 'bg-[#C5A059] text-white font-bold shadow-md'
                      : 'bg-white text-[#5A5049] border border-[#E5E0D8] hover:border-[#C5A059]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWeddings.map((wed) => (
              <div 
                key={wed.id}
                onClick={() => setActiveWeddingModal(wed)}
                className="bg-white rounded-3xl border border-[#E5E0D8] overflow-hidden group cursor-pointer hover:border-[#C5A059] transition-all shadow-sm hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={wed.image} 
                    alt={wed.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#2C2623] font-mono text-[10px] font-bold">
                    {wed.location}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-[#C5A059] font-bold">{wed.couple}</span>
                    <span className="text-xs font-mono text-[#8C827A]">{wed.guestCount} Guests • {wed.budgetAed}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2623] font-serif">{wed.title}</h3>
                  <p className="text-xs text-[#5A5049] font-sans line-clamp-2">{wed.conceptNotes}</p>
                  
                  <div className="pt-3 border-t border-[#E5E0D8] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#C5A059] font-bold flex items-center gap-1">
                      <span>VIEW WEDDING DETAILS</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* REAL WEDDING DETAIL DRAWER */}
      <AnimatePresence>
        {activeWeddingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2623]/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FFFDF9] border border-[#C5A059] rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setActiveWeddingModal(null)}
                className="absolute top-6 right-6 text-[#8C827A] hover:text-[#2C2623] p-2 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A059] font-bold uppercase">{activeWeddingModal.location}</span>
                <h3 className="text-3xl font-bold text-[#2C2623] font-serif">{activeWeddingModal.couple}: {activeWeddingModal.title}</h3>
                <p className="text-xs font-mono text-[#8C827A]">{activeWeddingModal.guestCount} Guests • Total Budget: {activeWeddingModal.budgetAed}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {activeWeddingModal.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Gallery" className="w-full h-40 object-cover rounded-2xl border border-[#E5E0D8]" />
                ))}
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#2C2623] uppercase">Design Concept & Styling Notes:</h4>
                <p className="text-xs text-[#5A5049] font-sans leading-relaxed">{activeWeddingModal.conceptNotes}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E5E0D8]">
                <h4 className="text-xs font-mono font-bold text-[#2C2623] uppercase">Key Creative Partners:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeWeddingModal.keyVendors.map((v, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#E5E0D8] text-[11px] font-mono text-[#5A5049]">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveWeddingModal(null)}
                className="w-full py-3.5 rounded-full bg-[#C5A059] text-white font-mono text-xs font-bold uppercase"
              >
                CLOSE GALLERY
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── CASE STUDY SECTION ── */}
      <section className="py-24 bg-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-[#E5E0D8] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono">
                <span>FEATURED CASE STUDY: DESTINATION WEDDING</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold text-[#2C2623] font-serif">
                150-Guest Beachfront Destination Celebration in 8 Months
              </h3>

              <p className="text-xs sm:text-sm text-[#5A5049] font-sans leading-relaxed">
                <strong>Challenge:</strong> Coordinating an international destination wedding for UK & US guests with 8 months lead time, complex dietary concierges, and multi-day seaside events during peak Dubai winter.
              </p>

              <p className="text-xs sm:text-sm text-[#5A5049] font-sans leading-relaxed">
                <strong>EVERA Solution:</strong> Full turnkey concierge execution, custom floral arch architecture, private airport VIP transfers, welcome yacht cruise, and zero day-of logistics friction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#E5E0D8]">
                <div>
                  <span className="text-lg sm:text-xl font-bold text-[#2C2623] font-serif block">150 Guests</span>
                  <span className="text-[10px] font-mono text-[#8C827A]">Coordinated Smoothly</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold text-[#2C2623] font-serif block">8 Months</span>
                  <span className="text-[10px] font-mono text-[#8C827A]">Turnkey Execution</span>
                </div>
                <div>
                  <span className="text-lg sm:text-xl font-bold text-[#2C2623] font-serif block">Zero</span>
                  <span className="text-[10px] font-mono text-[#8C827A]">Day-Of Delays</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img 
                src="https://images.unsplash.com/photo-1511285560929-80b456802381?auto=format&fit=crop&w=800&q=80" 
                alt="Case study wedding" 
                className="w-full h-80 object-cover rounded-2xl border border-[#E5E0D8]" 
              />
            </div>

          </div>

        </div>
      </section>

      {/* ── WHY EVERA (6 PILLARS) ── */}
      <section className="py-24 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>THE EVERA PROMISE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Why Couples Choose EVERA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Dedicated Lead Planner', desc: 'Single point of contact giving absolute personalized focus to your wedding.' },
              { title: 'Privileged Venue Relations', desc: 'Access to off-market UAE private estates and preferential resort terms.' },
              { title: 'Bespoke 3D Styling', desc: 'Custom spatial layouts, floral sculpts, and atmospheric architectural lighting.' },
              { title: 'Destination Expertise', desc: 'Seamless travel concierges for international guests arriving across the GCC.' },
              { title: 'Meticulous Execution', desc: 'Minute-by-minute timeline management so you savor every moment of your big day.' },
              { title: 'Transparent Budgeting', desc: 'Real-time expenditure tracking with zero hidden markups or unexpected fees.' },
            ].map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-[#E5E0D8] space-y-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                <h3 className="text-base font-bold text-[#2C2623] font-serif">{p.title}</h3>
                <p className="text-xs text-[#5A5049] font-sans leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LEADERSHIP TEAM ── */}
      <section id="leadership" className="py-24 bg-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D3C5]/30 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>THE CREATIVE ATELIER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Our Leadership Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVERA_LEADERSHIP.map((lead, i) => (
              <div key={i} className="bg-[#FAF6F0] rounded-3xl border border-[#E5E0D8] overflow-hidden text-center p-6 space-y-4">
                <img src={lead.image} alt={lead.name} className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#C5A059]" />
                <div>
                  <h3 className="text-base font-bold text-[#2C2623] font-serif">{lead.name}</h3>
                  <span className="text-xs font-mono text-[#C5A059] block font-bold">{lead.role}</span>
                </div>
                <p className="text-xs text-[#5A5049] font-sans leading-relaxed">{lead.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INSIGHTS SECTION ── */}
      <section id="insights" className="py-24 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>WEDDING PLANNING EDITORIAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Insights & Bridal Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVERA_INSIGHTS.map((article) => (
              <div 
                key={article.id}
                onClick={() => setActiveInsightModal(article)}
                className="bg-white rounded-3xl border border-[#E5E0D8] overflow-hidden flex flex-col justify-between cursor-pointer hover:border-[#C5A059] transition-all"
              >
                <div>
                  <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-mono text-[#C5A059] font-bold uppercase">{article.category} • {article.readTime}</span>
                    <h3 className="text-sm font-bold text-[#2C2623] font-serif leading-tight">{article.title}</h3>
                    <p className="text-xs text-[#5A5049] font-sans line-clamp-2">{article.excerpt}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <span className="text-xs font-mono text-[#C5A059] font-bold flex items-center gap-1">
                    READ ARTICLE <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* INSIGHT MODAL */}
      <AnimatePresence>
        {activeInsightModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2623]/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FFFDF9] border border-[#C5A059] rounded-3xl p-6 sm:p-8 max-w-xl w-full relative space-y-4 shadow-2xl"
            >
              <button 
                onClick={() => setActiveInsightModal(null)}
                className="absolute top-6 right-6 text-[#8C827A] hover:text-[#2C2623] p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-[#C5A059] font-bold uppercase">{activeInsightModal.category} • {activeInsightModal.readTime}</span>
              <h3 className="text-2xl font-bold text-[#2C2623] font-serif">{activeInsightModal.title}</h3>
              <p className="text-xs text-[#5A5049] font-sans leading-relaxed">{activeInsightModal.content}</p>

              <button
                onClick={() => setActiveInsightModal(null)}
                className="w-full py-3 rounded-full bg-[#C5A059] text-white font-mono text-xs font-bold uppercase"
              >
                CLOSE ARTICLE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── TESTIMONIALS CAROUSEL ── */}
      <section className="py-24 bg-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D3C5]/30 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
              <span>COUPLE PRAISE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              What Our Couples Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVERA_TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div key={i} className="bg-[#FAF6F0] p-6 rounded-3xl border border-[#E5E0D8] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex gap-1 text-[#C5A059]">
                    {[...Array(t.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-[#C5A059]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#2C2623] font-serif italic leading-relaxed">"{t.quote}"</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C2623] font-sans">{t.couple}</h4>
                  <span className="text-[11px] font-mono text-[#8C827A]">{t.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LOCATIONS SECTION ── */}
      <section id="locations" className="py-24 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>UAE PLANNING STUDIOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Visit Our Design Atelier
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Dubai */}
            <div className="bg-white p-8 rounded-3xl border border-[#E5E0D8] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#E8D3C5]/30 text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C2623] font-serif">Dubai Design Studio</h3>
                  <p className="text-xs font-mono text-[#8C827A]">Jumeirah 1 • Beach Road Villa 42</p>
                </div>
              </div>
              <div className="space-y-2 text-xs font-mono text-[#5A5049] border-t border-[#E5E0D8] pt-4">
                <p>Phone: <a href="tel:+97143448822" className="text-[#C5A059] font-bold">+971 4 344 8822</a></p>
                <p>WhatsApp: <a href="https://wa.me/971507718844" className="text-[#C5A059] font-bold">+971 50 771 8844</a></p>
                <p>Hours: Mon–Sat 9:00 AM – 7:00 PM (By Appointment)</p>
              </div>
            </div>

            {/* Abu Dhabi */}
            <div className="bg-white p-8 rounded-3xl border border-[#E5E0D8] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#E8D3C5]/30 text-[#C5A059]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2C2623] font-serif">Abu Dhabi Planning Office</h3>
                  <p className="text-xs font-mono text-[#8C827A]">Al Reem Island • Marina Square Level 8</p>
                </div>
              </div>
              <div className="space-y-2 text-xs font-mono text-[#5A5049] border-t border-[#E5E0D8] pt-4">
                <p>Phone: <a href="tel:+97126773311" className="text-[#C5A059] font-bold">+971 2 677 3311</a></p>
                <p>WhatsApp: <a href="https://wa.me/971507718844" className="text-[#C5A059] font-bold">+971 50 771 8844</a></p>
                <p>Hours: Mon–Sat 9:00 AM – 7:00 PM (By Appointment)</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── CONSULTATION FORM SECTION ── */}
      <section id="consultation" className="py-24 bg-[#FFFDF9] border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D3C5]/30 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <Heart className="w-3.5 h-3.5 fill-[#C5A059]" />
              <span>START YOUR JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2C2623] tracking-tight font-serif">
              Let's Start Planning
            </h2>
            <p className="text-[#5A5049] text-sm mt-3 font-sans">
              Schedule your private consultation with an EVERA lead wedding planner today.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#FAF6F0] p-8 sm:p-10 rounded-3xl border border-[#E5E0D8] shadow-xl">
            {cSubmitted ? (
              <div className="text-center py-12 space-y-6">
                <CheckCircle2 className="w-16 h-16 text-[#C5A059] mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-[#2C2623] font-serif">Thank You</h3>
                <p className="text-xs font-mono text-[#5A5049]">
                  A lead EVERA wedding planner will connect with you via WhatsApp ({cPhone}) within 4 hours.
                </p>
                <button 
                  onClick={() => setCSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-[#C5A059] text-white font-mono text-xs font-bold uppercase"
                >
                  NEW INQUIRY FORM
                </button>
              </div>
            ) : (
              <form onSubmit={handleConsultationSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-[#2C2623] block mb-1">Couple Names *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sara & Omar"
                      value={cNames}
                      onChange={(e) => setCNames(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#2C2623] block mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="sara@example.com"
                      value={cEmail}
                      onChange={(e) => setCEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-[#2C2623] block mb-1">UAE Phone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+971 50 771 8844"
                      value={cPhone}
                      onChange={(e) => setCPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#2C2623] block mb-1">Target Wedding Date</label>
                    <input 
                      type="date" 
                      value={cDate}
                      onChange={(e) => setCDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-[#2C2623] block mb-1">Expected Guests</label>
                    <select
                      value={cGuests}
                      onChange={(e) => setCGuests(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none"
                    >
                      <option value="50-100 Guests">50 – 100 Guests</option>
                      <option value="100-200 Guests">100 – 200 Guests</option>
                      <option value="200-350 Guests">200 – 350 Guests</option>
                      <option value="350+ Guests">350+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-[#2C2623] block mb-1">Planning Scope</label>
                    <select
                      value={cLevel}
                      onChange={(e) => setCLevel(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none"
                    >
                      <option value="Full Wedding Planning">Full Wedding Planning</option>
                      <option value="Partial Planning">Partial Planning</option>
                      <option value="Day-of Coordination">Day-of Execution</option>
                      <option value="Destination Weddings">Destination Wedding</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#2C2623] block mb-1">Tell Us About Your Vision</label>
                  <textarea 
                    rows={4}
                    placeholder="Share your preferred venue style, budget parameters, or special design requests..."
                    value={cMessage}
                    onChange={(e) => setCMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E5E0D8] text-[#2C2623] font-mono text-xs focus:border-[#C5A059] outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#C5A059] hover:bg-[#B38E47] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>BOOK A CONSULTATION</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── FAQ ACCORDION (10 ITEMS) ── */}
      <section className="py-24 bg-[#FAF6F0] border-b border-[#E5E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2C2623] font-serif">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {EVERA_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#E5E0D8] overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-sm sm:text-base text-[#2C2623] flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#C5A059] font-mono text-lg">{openFaqIndex === idx ? '-' : '+'}</span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs text-[#5A5049] font-sans leading-relaxed border-t border-[#E5E0D8]/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FINAL CTA SECTION ── */}
      <section className="py-24 bg-[#2C2623] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <Heart className="w-12 h-12 text-[#C5A059] mx-auto fill-[#C5A059]/30 animate-pulse" />
          <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
            Let's Plan the Wedding You've Always Imagined.
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#FAF6F0]/80 max-w-xl mx-auto">
            Book a private consultation and start your luxury wedding journey with EVERA.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#consultation"
              className="px-8 py-4 rounded-full bg-[#C5A059] hover:bg-[#B38E47] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
            >
              BOOK A CONSULTATION
            </a>
            <a
              href="https://wa.me/971507718844"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              WHATSAPP OUR PLANNERS
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16 bg-[#1A1614] text-[#8C827A] text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#C5A059]" />
              <span className="text-2xl font-bold text-white font-serif">
                EVERA <span className="text-[#C5A059] italic font-normal">WEDDINGS</span>
              </span>
            </div>
            <p className="text-center md:text-right text-[#8C827A]">
              Jumeirah Beach Road • Dubai • Al Reem Island • Abu Dhabi, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 EVERA WEDDINGS UAE. ALL RIGHTS RESERVED. (FICTIONAL PORTFOLIO SHOWCASE)</p>
            <div className="flex items-center gap-6">
              <span className="text-[#C5A059]">LUXURY WEDDING PLANNING & STYLING</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default EveraShowcase;
