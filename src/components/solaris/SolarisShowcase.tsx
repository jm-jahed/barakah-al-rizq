'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Activity, Leaf, ShieldCheck, ArrowRight, CheckCircle2, MapPin, Phone, Mail, Clock, MessageSquare, Building2, Sliders, X, Globe, Factory, BatteryCharging, FileText, Award, Send } from 'lucide-react';

// Energy Solutions Data
const UTILITY_SERVICES = [
  {
    id: 'solar-pv',
    name: 'Utility-Scale Solar PV Farms (50MW+)',
    category: 'Solar Infrastructure',
    capacity: 'Up to 2.0 GW Per Complex',
    investment: 'AED 450M+',
    description: 'Turnkey EPC design, bifacial N-type solar module installation, and single-axis tracker engineering optimized for desert sandstorms and extreme heat.',
    features: ['24.8% Module Efficiency', 'Sand-Resilient Automated Robotic Cleaning', '25-Year Performance Guarantee', 'EWEC Grid Interconnection Compliant'],
    badge: 'Solar Flagship'
  },
  {
    id: 'green-hydrogen',
    name: 'Green Hydrogen Electrolysis Plants',
    category: 'Hydrogen Infrastructure',
    capacity: '50,000 Tons H2 / Year',
    investment: 'AED 890M+',
    description: 'PEM and Alkaline water electrolysis systems powered by 100% renewable solar energy for green ammonia export and industrial decarbonization.',
    features: ['99.999% Pure Green Hydrogen', 'Zero Carbon Footprint', 'KIZAD Industrial Zone Export Terminal', 'ISO 22734 Safety Certified'],
    badge: 'Clean Fuel Leader'
  },
  {
    id: 'bess-storage',
    name: 'BESS Utility Battery Storage (GWh-Scale)',
    category: 'Grid Energy Storage',
    capacity: '1.2 GWh BESS Capacity',
    investment: 'AED 320M+',
    description: 'Containerized Lithium Iron Phosphate (LFP) energy storage systems providing frequency regulation, peak shaving, and grid stability for DEWA & TRANSCO.',
    features: ['Sub-Second Frequency Response', 'Liquid Cooling Thermal Management', '15-Year Cell Lifetime', 'Autonomous AI Dispatch Engine'],
    badge: 'Grid Stability'
  },
  {
    id: 'grid-epc',
    name: 'Sovereign Substation & Transmission EPC',
    category: 'High Voltage Grid',
    capacity: '400kV High Voltage Substations',
    investment: 'AED 280M+',
    description: 'High-voltage Gas Insulated Substations (GIS), underground transmission cabling, and SCADA grid automation for utility connections across Abu Dhabi and Dubai.',
    features: ['400kV / 132kV GIS Design', 'Transco & DEWA Pre-Qualified', 'Cyber-Secured SCADA Architecture', 'Turnkey Civil & Electrical Engineering'],
    badge: 'Utility EPC'
  }
];

// Project Case Studies
const CASE_STUDIES = [
  {
    title: 'Al Dhafra 1.5GW Solar Expansion Phase II',
    location: 'Abu Dhabi, UAE',
    specs: '1.5 GW Solar PV • 3.2M Modules • AED 2.8B Capital Investment',
    impact: 'Powers 160,000 UAE homes • Cuts 2.4M Tons CO2 annually',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Khalifa Industrial Zone (KIZAD) Green Hydrogen Facility',
    location: 'Abu Dhabi Port, UAE',
    specs: '100 MW Electrolyser • 15,000 Tons Green H2 • AED 1.4B Investment',
    impact: 'Supplies green ammonia for Europe & Asia maritime export routes',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80'
  }
];

// Executive Energy Board
const LEADERSHIP = [
  {
    name: 'Eng. Sultan Al-Nuaimi',
    role: 'Chief Executive Officer',
    credentials: 'Ex-Masdar Clean Energy VP • MSc Imperial College',
    bio: '20+ years steering gigawatt-scale solar developments and sovereign clean energy partnerships across the Middle East and North Africa.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Dr. Elena Vaneva',
    role: 'Chief Hydrogen & Technology Officer',
    credentials: 'MIT PhD Chemical Engineering • Hydrogen Europe Board',
    bio: 'Renowned expert in water electrolysis efficiency, zero-emission fuel synthesis, and industrial clean hydrogen integration.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Eng. Tariq Mansoor',
    role: 'Vice President of Grid & EPC Operations',
    credentials: 'Former TRANSCO Senior Engineer • FEWA Consultant',
    bio: 'Lead engineer for high-voltage transmission networks, substation commissioning, and UAE national grid integration.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  }
];

export const SolarisShowcase: React.FC = () => {
  // Calculator state
  const [mwCapacity, setMwCapacity] = useState<number>(100);
  const [hasStorage, setHasStorage] = useState<boolean>(true);
  const [tariffRate, setTariffRate] = useState<number>(0.13); // AED per kWh

  // Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formName, setFormName] = useState<string>('');
  const [formEmail, setFormEmail] = useState<string>('');
  const [formPhone, setFormPhone] = useState<string>('');
  const [formCompany, setFormCompany] = useState<string>('');
  const [formService, setFormService] = useState<string>('solar-pv');
  const [formMessage, setFormMessage] = useState<string>('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Calculations
  const annualGwh = Math.round(mwCapacity * 2.2); // ~2.2 GWh per MW in UAE
  const co2Offset = Math.round(annualGwh * 750); // tons CO2
  const estCostAed = Math.round((mwCapacity * 2.8) + (hasStorage ? mwCapacity * 0.9 : 0)); // Millions AED

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060B08] text-gray-100 font-sans selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* ── TOP HEADER / NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#060B08]/90 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-400 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full bg-[#060B08] rounded-[10px] flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                SOLARIS <span className="text-amber-400">HYDROGEN</span>
              </span>
              <span className="block text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase">
                Masdar City Clean Energy Hub • Abu Dhabi
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#calculator" className="hover:text-amber-400 transition-colors">ROI CALCULATOR</a>
            <a href="#solutions" className="hover:text-amber-400 transition-colors">UTILITY SOLUTIONS</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">MEGA PROJECTS</a>
            <a href="#leadership" className="hover:text-amber-400 transition-colors">ENERGY BOARD</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">CONTACT HUB</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 hover:from-amber-400 hover:to-emerald-400 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>REQUEST EPC TENDER</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-amber-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Abu Dhabi Department of Energy (DoE) & EWEC Pre-Qualified</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Powering UAE’s <br />
                <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-amber-500 bg-clip-text text-transparent">
                  Sovereign Energy Grid.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                Utility-scale solar PV farms, green hydrogen electrolyser infrastructure, and GWh grid battery storage engineered for Abu Dhabi and Dubai Net-Zero 2050 transition.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>SUBMIT EPC TENDER INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#calculator"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-amber-400" />
                  <span>CALCULATE SOLAR & H2 CAPEX</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">3.2 GW</span>
                  <span className="text-xs text-gray-400 font-mono">Active Utility Solar</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">120,000T</span>
                  <span className="text-xs text-gray-400 font-mono">Annual Green H2 Output</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 4.2B</span>
                  <span className="text-xs text-gray-400 font-mono">Infrastructure Assets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-amber-500/30 to-emerald-500/10 border border-amber-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80" 
                    alt="Solaris Masdar Clean Energy Complex" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B08] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#060B08]/90 border border-amber-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                        <Sun className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">Masdar City Tower 3 • Suite 901</h4>
                        <p className="text-[11px] text-gray-400">Abu Dhabi Sovereign Clean Energy HQ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SOLAR & HYDROGEN CAPEX / ROI CALCULATOR ── */}
      <section id="calculator" className="py-24 bg-[#09110D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>INTERACTIVE UTILITY ESTIMATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Calculate Utility Solar & Storage CAPEX
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Estimate annual GWh power output, CO2 displacement, and turn-key EPC capital investment for megawatt-scale solar installations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 bg-[#0E1A14] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* MW Capacity */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Target Solar PV Capacity</label>
                  <span className="text-sm font-mono font-extrabold text-amber-400">{mwCapacity} MW</span>
                </div>
                <input 
                  type="range" 
                  min={20} 
                  max={500} 
                  step={10}
                  value={mwCapacity} 
                  onChange={(e) => setMwCapacity(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Tariff Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Target PPA Tariff Rate (AED/kWh)</label>
                  <span className="text-sm font-mono font-extrabold text-amber-400">{tariffRate} AED / kWh</span>
                </div>
                <input 
                  type="range" 
                  min={0.08} 
                  max={0.25} 
                  step={0.01}
                  value={tariffRate} 
                  onChange={(e) => setTariffRate(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* BESS Storage Toggle */}
              <div className="pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <div>
                    <span className="text-xs font-mono font-bold text-white uppercase block">Integrate GWh Battery Storage (BESS)</span>
                    <span className="text-[11px] text-gray-400 font-mono">Provides 4-hour peak shaving for DEWA/TRANSCO grid stability</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={hasStorage}
                    onChange={(e) => setHasStorage(e.target.checked)}
                    className="w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#14261D] to-[#09110D] p-8 rounded-3xl border border-amber-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest block">
                Estimated Generation & EPC CAPEX
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                {annualGwh} <span className="text-sm text-amber-400 font-sans font-bold">GWh / Yr</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Displaces {co2Offset.toLocaleString()} Tons CO2 Annually
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="block text-[11px] font-mono text-gray-400 uppercase">Turnkey EPC Investment</span>
                <span className="text-3xl font-extrabold text-white font-mono">AED {estCostAed} Million</span>
              </div>

              <a
                href="#contact"
                className="block w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer"
              >
                REQUEST OFFICIAL TENDER PROPOSAL
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── UTILITY SOLUTIONS ── */}
      <section id="solutions" className="py-24 bg-[#060B08] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
                <Factory className="w-3.5 h-3.5" />
                <span>SOLARIS INFRASTRUCTURE PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Utility Clean Energy Solutions
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Full lifecycle EPC, financing, and operations for sovereign utilities and industrial heavy emitters across the GCC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {UTILITY_SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="p-8 rounded-3xl bg-[#0B1510] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[11px] font-mono font-bold">
                      {srv.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{srv.capacity}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors mb-3">
                    {srv.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {srv.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">Average Investment Scope</span>
                    <span className="text-2xl font-extrabold text-white font-mono">{srv.investment}</span>
                  </div>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>INQUIRE EPC</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── MEGA PROJECTS SHOWCASE ── */}
      <section id="projects" className="py-24 bg-[#09110D] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>SOVEREIGN INFRASTRUCTURE TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Flagship UAE Clean Energy Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CASE_STUDIES.map((project, idx) => (
              <div key={idx} className="rounded-3xl bg-[#0E1A14] border border-white/10 overflow-hidden flex flex-col justify-between">
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-amber-400 text-xs font-mono font-bold border border-amber-500/30">
                    {project.location}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-white font-sans">{project.title}</h3>
                  <p className="text-xs font-mono text-amber-300/90">{project.specs}</p>
                  <p className="text-xs text-gray-300 leading-relaxed pt-2 border-t border-white/10">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ENERGY BOARD ── */}
      <section id="leadership" className="py-24 bg-[#060B08] border-b border-amber-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>EXECUTIVE ENERGY BOARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Leadership & Energy Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0E1A14] border border-white/10 hover:border-amber-500/40 transition-all text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-amber-500/30 p-1">
                  <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans mb-1">{leader.name}</h3>
                <span className="text-xs font-mono text-amber-400 block mb-2">{leader.role}</span>
                <span className="text-[11px] font-mono text-gray-400 block mb-4 bg-white/5 py-1 px-3 rounded-full">{leader.credentials}</span>
                <p className="text-xs text-gray-300 leading-relaxed">{leader.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD CONTACT EXPERIENCE SECTION ── */}
      <section id="contact" className="py-24 bg-[#09110D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>FULL CONTACT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Connect With Solaris Clean Energy
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Speak directly with our Abu Dhabi & Dubai utility engineering desks for EPC tenders, PPAs, or joint ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Business Telemetry */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Abu Dhabi HQ Card */}
              <div className="p-8 rounded-3xl bg-[#0E1A14] border border-amber-500/30 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">Abu Dhabi Sovereign HQ</h3>
                    <p className="text-xs font-mono text-gray-400">Masdar City Clean Energy Hub</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Tower 3, Suite 901, Masdar City Boulevard, Abu Dhabi, UAE</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href="tel:+97126994400" className="hover:text-amber-400 transition-colors">+971 2 699 4400</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href="https://wa.me/971508821199" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">+971 50 882 1199 (WhatsApp Energy Desk)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href="mailto:energy@solaris.ae" className="hover:text-amber-400 transition-colors">energy@solaris.ae</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>Sunday – Thursday: 8:00 AM – 6:00 PM GST</span>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href="tel:+97126994400"
                    className="py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold font-mono text-xs text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL DIRECT</span>
                  </a>
                  <a 
                    href="https://wa.me/971508821199" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold font-mono text-xs text-center border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Dubai Regional Office */}
              <div className="p-6 rounded-3xl bg-[#0E1A14] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-sans">Dubai Regional Office</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">DEWA Grid Hub</span>
                </div>
                <p className="text-xs font-mono text-gray-400">
                  Mohammed bin Rashid Al Maktoum Solar Park, Innovation Center Level 4, Dubai, UAE
                </p>
                <p className="text-xs font-mono text-amber-400">+971 4 883 9922 • dubai@solaris.ae</p>
              </div>

            </div>

            {/* Right: Full Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#0E1A14] p-8 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-sans">Tender Proposal Request Received</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formName}</strong>. Our Senior EPC Director in Abu Dhabi has logged your request for <strong>{formCompany || 'your organization'}</strong> and will respond within 4 business hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-sans">EPC Tender & Project Inquiry Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Fill out the official technical inquiry to receive an Executive EPC Proposal.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Eng. Mohammed Al-Dhaheri"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Official Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="m.dhaheri@ewec.gov.ae"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Phone Number (UAE/Intl) *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 444 8899"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Company / Authority Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Abu Dhabi Energy Authority"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Project Category *</label>
                    <select 
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none"
                    >
                      <option value="solar-pv" className="bg-[#0E1A14]">Utility Solar PV Farm (50MW+)</option>
                      <option value="green-h2" className="bg-[#0E1A14]">Green Hydrogen Electrolyser Plant</option>
                      <option value="bess" className="bg-[#0E1A14]">Grid BESS Battery Storage Systems</option>
                      <option value="substation" className="bg-[#0E1A14]">High Voltage Substation EPC (400kV)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Project Details & Location Specifications</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify estimated megawatt capacity, land availability in Abu Dhabi/Dubai, and required PPA timeline..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-amber-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT OFFICIAL EPC TENDER</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#030604] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Sun className="w-6 h-6 text-amber-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-sans">
                SOLARIS <span className="text-amber-400">HYDROGEN</span> UAE
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Tower 3, Suite 901 • Masdar City Clean Energy Hub, Abu Dhabi, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 SOLARIS CLEAN ENERGY INFRASTRUCTURE PJSC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-emerald-400">ABU DHABI REGISTRATION #1049281</span>
              <span>DoE LICENSE #9028-ENERGY</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default SolarisShowcase;
