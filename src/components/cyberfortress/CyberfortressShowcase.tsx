'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Lock, Terminal, Cpu, Server, Activity, CheckCircle2, ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare, Building2, Sliders, X, AlertTriangle, Send, Eye, FileCheck, Globe } from 'lucide-react';

// Cyber Defense Solutions
const DEFENSE_SOLUTIONS = [
  {
    id: 'managed-soc',
    name: '24/7 Sovereign AI Managed SOC & SIEM',
    category: 'Managed Threat Detection',
    coverage: 'Sub-Minute Threat Isolation',
    investment: 'AED 35,000 / Mo',
    description: 'Continuous 24/7 real-time telemetry ingestion, machine learning anomaly detection, and instant sovereign threat hunting for UAE enterprises.',
    features: ['< 45-Second Mean Response Time', 'Sovereign UAE Data Residency', 'AI Automated Playbook Containment', 'Dedicated CISO Advisory Desk'],
    badge: 'SOC Flagship'
  },
  {
    id: 'zero-trust',
    name: 'Zero-Trust Architecture & Micro-Segmentation',
    category: 'Infrastructure Security',
    coverage: '100% Identity Verification',
    investment: 'AED 120,000 Setup',
    description: 'Complete overhaul of enterprise network perimeter into continuous zero-trust identity verification, micro-segmented cloud workloads, and mTLS encryption.',
    features: ['Passwordless FIDO2 Authentication', 'Workload Isolation Engine', 'DIFC Data Protection Compliant', 'Legacy System Wrapping'],
    badge: 'Zero Trust'
  },
  {
    id: 'red-teaming',
    name: 'Offensive Penetration Testing & Red Teaming',
    category: 'Cyber Assessment',
    coverage: 'Full-Spectrum Cyber Attack Simulation',
    investment: 'AED 65,000 / Audit',
    description: 'CREST-certified ethical hackers simulate advanced persistent threats (APT), social engineering, and zero-day exploit vectors against your defense perimeter.',
    features: ['CREST & OSCP Certified Team', 'Source Code Auditing', 'Executive Risk Remediation Report', 'Re-Testing Guarantee'],
    badge: 'Offensive Security'
  },
  {
    id: 'incident-response',
    name: 'Ransomware Neutralization & Incident Response',
    category: 'Emergency Response',
    coverage: '15-Minute Emergency Retainer',
    investment: 'AED 180,000 Retainer',
    description: 'Rapid-dispatch incident response team for live ransomware containment, forensic malware disassembly, and clean system restoration.',
    features: ['15-Minute On-Site / Remote SLA', 'Digital Forensics & Evidence Preservation', 'Dark Web Negotiation Support', 'Regulatory Breach Notification Assist'],
    badge: 'Emergency SOC'
  }
];

// Threat Intelligence Case Studies
const SECURITY_CASES = [
  {
    title: 'DIFC Tier-1 Bank Ransomware Containment',
    location: 'Dubai International Financial Centre',
    metrics: 'AED 4.5B Assets Protected • 0 Byte Data Exfiltrated • 12 Min Containment',
    description: 'Neutralized multi-stage LockBit 3.0 attack vector attempting to encrypt core banking databases and compromise SWIFT gateway.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sovereign Energy Grid SCADA Hardening',
    location: 'Abu Dhabi Industrial Zone',
    metrics: '350+ Operational Endpoints • Zero-Downtime Migration • NISA Compliant',
    description: 'Deployed air-gapped zero-trust telemetry across 400kV substation SCADA systems preventing state-sponsored intrusion attempts.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
  }
];

// Leadership & Defense Directors
const LEADERSHIP = [
  {
    name: 'Col. (Ret.) Hamdan Al-Mazrouei',
    role: 'Chief Defense Officer',
    credentials: 'Former UAE Military Cyber Command • MSc Royal Holloway',
    bio: '22+ years leading national cyber defense operations, critical infrastructure hardening, and sovereign threat intelligence frameworks.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Dr. Viktor Reznov',
    role: 'Head of Threat Intelligence & AI Detection',
    credentials: 'PhD Computer Science • CISSP • CISM',
    bio: 'Pioneer in neural network anomaly detection and automated SOC response playbooks used by global central banks.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sarah Al-Khouri',
    role: 'Director of Offensive Security & Red Team',
    credentials: 'OSCP • OSCE • CREST Lead Assessor',
    bio: 'Renowned ethical hacker who has audited 300+ financial portals, sovereign cloud networks, and crypto exchanges across the GCC.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

export const CyberfortressShowcase: React.FC = () => {
  // Configurator state
  const [orgType, setOrgType] = useState<'bank' | 'government' | 'energy' | 'hnw'>('bank');
  const [endpoints, setEndpoints] = useState<number>(250);
  const [needs247, setNeeds247] = useState<boolean>(true);

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [service, setService] = useState<string>('managed-soc');
  const [urgency, setUrgency] = useState<string>('standard');
  const [message, setMessage] = useState<string>('');

  const orgSpecs = {
    bank: { name: 'Tier-1 Bank / FinTech', baseRisk: 'High', multiplier: 120 },
    government: { name: 'Government / Ministry', baseRisk: 'Critical', multiplier: 140 },
    energy: { name: 'Critical Utility / Energy', baseRisk: 'Critical', multiplier: 150 },
    hnw: { name: 'HNW Family Office', baseRisk: 'Moderate', multiplier: 95 },
  };

  const currentOrg = orgSpecs[orgType];

  // Calculate estimated monthly protection fee
  const calculateFee = () => {
    let fee = (endpoints * currentOrg.multiplier);
    if (needs247) fee += 15000;
    return Math.round(fee);
  };

  const estFee = calculateFee();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#06080A] text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* ── TOP NAV BAR ── */}
      <header className="sticky top-0 z-40 bg-[#06080A]/90 backdrop-blur-xl border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-[#06080A] rounded-[10px] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                CYBER<span className="text-cyan-400">FORTRESS</span>
              </span>
              <span className="block text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
                Sovereign AI SOC • DIFC Gate Avenue • Dubai
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-gray-300">
            <a href="#estimator" className="hover:text-cyan-400 transition-colors">RISK ESTIMATOR</a>
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">SOC CAPABILITIES</a>
            <a href="#cases" className="hover:text-cyan-400 transition-colors">THREAT INTEL</a>
            <a href="#leadership" className="hover:text-cyan-400 transition-colors">DEFENSE BOARD</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">EMERGENCY SOC HUB</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+97145229900"
              className="hidden lg:flex items-center gap-2 text-xs font-mono font-bold text-red-400 border border-red-500/30 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 transition-all"
            >
              <Phone className="w-3.5 h-3.5 animate-bounce" />
              <span>24/7 HOTLINE: +971 4 522 9900</span>
            </a>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>REQUEST CYBER AUDIT</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden border-b border-cyan-500/10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[180px] pointer-events-none rounded-full" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>UAE Cyber Security Council Endorsed & CREST Certified</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Sovereign Defense <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-500 bg-clip-text text-transparent">
                  For UAE Enterprise.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl">
                24/7 AI-driven Security Operations Center (SOC), zero-trust network architecture, and CREST-certified penetration testing for GCC financial portals and government cloud networks.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
                >
                  <span>SCHEDULE OFFENSIVE RED TEAM AUDIT</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#estimator"
                  className="px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span>CALCULATE SOC RETAINER</span>
                </a>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">1.4B+</span>
                  <span className="text-xs text-gray-400 font-mono">Attacks Intercepted</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">&lt; 45 Sec</span>
                  <span className="text-xs text-gray-400 font-mono">Mean SOC Response</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 15B+</span>
                  <span className="text-xs text-gray-400 font-mono">Assets Safeguarded</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-cyan-500/30 to-blue-600/10 border border-cyan-500/30 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" 
                    alt="Cyberfortress SOC Telemetry Center" 
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080A] via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#06080A]/90 border border-cyan-500/30 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                        <Activity className="w-5 h-5 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono font-bold text-white uppercase">DIFC Gate Avenue Level 3</h4>
                        <p className="text-[11px] text-gray-400">24/7 Sovereign Air-Gapped SOC Command</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INTERACTIVE CYBER RISK & SOC ESTIMATOR ── */}
      <section id="estimator" className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>LIVE INFRASTRUCTURE CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Calculate Managed SOC Retainer
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Select your enterprise sector, endpoint scale, and SOC SLA level to estimate monthly threat protection fees in AED.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
            
            {/* Options */}
            <div className="lg:col-span-7 bg-[#10141C] p-8 rounded-3xl border border-white/10 space-y-6">
              
              {/* Org Type */}
              <div>
                <label className="text-xs font-mono font-bold text-gray-300 uppercase block mb-3">Select Enterprise Sector</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['bank', 'government', 'energy', 'hnw'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrgType(type)}
                      className={`p-3.5 rounded-xl font-mono text-xs font-bold uppercase text-left transition-all cursor-pointer border ${
                        orgType === type
                          ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                          : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                      }`}
                    >
                      {orgSpecs[type].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Endpoint Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono font-bold text-gray-300 uppercase">Monitored Endpoints & Cloud Workloads</label>
                  <span className="text-sm font-mono font-extrabold text-cyan-400">{endpoints} Active Units</span>
                </div>
                <input 
                  type="range" 
                  min={50} 
                  max={1000} 
                  step={25}
                  value={endpoints} 
                  onChange={(e) => setEndpoints(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-white/10 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* 24/7 SLA Toggle */}
              <div className="pt-2">
                <label className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                  <div>
                    <span className="text-xs font-mono font-bold text-white uppercase block">Include 24/7 Sovereign Incident Command</span>
                    <span className="text-[11px] text-gray-400 font-mono">Dedicated Dubai SOC analyst hotline & 15-min emergency SLA</span>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={needs247}
                    onChange={(e) => setNeeds247(e.target.checked)}
                    className="w-4 h-4 accent-cyan-500 cursor-pointer"
                  />
                </label>
              </div>

            </div>

            {/* Calculated Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#121A26] to-[#0A0D12] p-8 rounded-3xl border border-cyan-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                Target Sector Risk Profile: <strong className="text-white">{currentOrg.baseRisk}</strong>
              </span>

              <div className="text-5xl font-extrabold font-mono text-white tracking-tight">
                AED {estFee.toLocaleString()} <span className="text-sm text-cyan-400 font-sans font-bold">/ Mo</span>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full font-mono text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                100% UAE Data Residency • Zero Data Exfiltration SLA
              </div>

              <a
                href="#contact"
                className="block w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                REQUEST CONFIDENTIAL SOC PROPOSAL
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ── DEFENSE CAPABILITIES ── */}
      <section id="solutions" className="py-24 bg-[#06080A] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>CYBERFORTRESS CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Managed Cyber Defense Suite
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Engineered to protect critical infrastructure, sovereign cloud assets, and high-volume financial transaction gateways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEFENSE_SOLUTIONS.map((sol) => (
              <div 
                key={sol.id}
                className="p-8 rounded-3xl bg-[#0E131C] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[11px] font-mono font-bold">
                      {sol.badge}
                    </span>
                    <span className="text-xs font-mono text-cyan-300 font-bold">{sol.coverage}</span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {sol.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-6">
                    {sol.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {sol.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-mono text-gray-400 uppercase">Standard Investment Scope</span>
                    <span className="text-2xl font-extrabold text-white font-mono">{sol.investment}</span>
                  </div>
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>AUDIT SPECS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── THREAT INTEL CASE STUDIES ── */}
      <section id="cases" className="py-24 bg-[#0A0D12] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Eye className="w-3.5 h-3.5" />
              <span>LIVE INCIDENT DISPATCH RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Sovereign Threat Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SECURITY_CASES.map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-[#10141C] border border-white/10 overflow-hidden flex flex-col justify-between">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                    {item.location}
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-bold text-white font-sans">{item.title}</h3>
                  <p className="text-xs font-mono text-cyan-300">{item.metrics}</p>
                  <p className="text-xs text-gray-300 leading-relaxed pt-2 border-t border-white/10">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── DEFENSE BOARD ── */}
      <section id="leadership" className="py-24 bg-[#06080A] border-b border-cyan-500/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>CREST & OSCP CERTIFIED OFFICERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Executive Cyber Defense Officers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP.map((officer, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#0E131C] border border-white/10 hover:border-cyan-500/40 transition-all text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-2 border-cyan-500/30 p-1">
                  <img src={officer.avatar} alt={officer.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans mb-1">{officer.name}</h3>
                <span className="text-xs font-mono text-cyan-400 block mb-2">{officer.role}</span>
                <span className="text-[11px] font-mono text-gray-400 block mb-4 bg-white/5 py-1 px-3 rounded-full">{officer.credentials}</span>
                <p className="text-xs text-gray-300 leading-relaxed">{officer.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FULL REAL-WORLD CONTACT EXPERIENCE SECTION ── */}
      <section id="contact" className="py-24 bg-[#0A0D12] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>FULL CONTACT EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Emergency SOC & Audit Dispatch
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Direct connection to our DIFC Gate Avenue SOC Analysts and Offensive Red Team lead assessors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Box */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* DIFC HQ */}
              <div className="p-8 rounded-3xl bg-[#10141C] border border-cyan-500/30 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">DIFC Gate Avenue SOC HQ</h3>
                    <p className="text-xs font-mono text-gray-400">Dubai International Financial Centre</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-mono text-gray-300 border-t border-white/10 pt-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Innovation Hub, Gate Avenue Level 3, DIFC, Dubai, UAE</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-red-400 shrink-0" />
                    <a href="tel:+97145229900" className="hover:text-cyan-400 transition-colors">+971 4 522 9900 (24/7 SOC Hotline)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href="https://wa.me/971527703311" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">+971 52 770 3311 (WhatsApp Incident Desk)</a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a href="mailto:soc@cyberfortress.ae" className="hover:text-cyan-400 transition-colors">soc@cyberfortress.ae</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Continuous 24/7/365 Sovereign Monitoring</span>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a 
                    href="tel:+97145229900"
                    className="py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold font-mono text-xs text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>CALL HOTLINE</span>
                  </a>
                  <a 
                    href="https://wa.me/971527703311" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold font-mono text-xs text-center border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

              {/* Abu Dhabi Cyber Lab */}
              <div className="p-6 rounded-3xl bg-[#10141C] border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white font-sans">Abu Dhabi Defense Lab</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/30">NISA Verified</span>
                </div>
                <p className="text-xs font-mono text-gray-400">
                  Global Market Square, Al Maryah Island Level 12, Abu Dhabi, UAE
                </p>
                <p className="text-xs font-mono text-cyan-400">+971 2 449 1100 • abudhabi@cyberfortress.ae</p>
              </div>

            </div>

            {/* Right: Full Contact Form */}
            <div className="lg:col-span-7 bg-[#10141C] p-8 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-2xl relative">
              
              {formSubmitted ? (
                <div className="text-center py-16 space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-cyan-400 mx-auto animate-bounce" />
                  <h3 className="text-3xl font-extrabold text-white font-sans">Confidential Audit Request Logged</h3>
                  <p className="text-xs text-gray-300 font-mono max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Our Lead CISO at DIFC Gate Avenue has encrypted your telemetry submission for <strong>{company || 'your organization'}</strong>. Response SLA: &lt; 2 Hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold uppercase transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-sans">Confidential Cyber Audit & SOC Form</h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">Encrypted 256-bit transmission directly to our DIFC Lead Assessor.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Tariq Al-Husseini"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Corporate Email Address *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="tariq@firstdubai.ae"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Phone Number (UAE/Intl) *</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 999 1122"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Organization / Bank Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Apex Wealth Capital DIFC"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Service Required *</label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      >
                        <option value="managed-soc" className="bg-[#10141C]">24/7 Managed AI SOC & SIEM</option>
                        <option value="zero-trust" className="bg-[#10141C]">Zero-Trust Architecture Setup</option>
                        <option value="red-team" className="bg-[#10141C]">Penetration Testing & Red Teaming</option>
                        <option value="incident" className="bg-[#10141C]">Emergency Incident Response Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-300 block mb-1">Urgency / SLA Requirement</label>
                      <select 
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none"
                      >
                        <option value="standard" className="bg-[#10141C]">Standard Audit Inquiry</option>
                        <option value="high" className="bg-[#10141C]">High Priority Architecture Review</option>
                        <option value="active-threat" className="bg-[#10141C]">EMERGENCY: Active Breach Containment</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-300 block mb-1">Infrastructure Scope & Specific Compliance Needs</label>
                    <textarea 
                      rows={4}
                      placeholder="Specify number of servers, cloud providers (AWS/Azure/Alibaba), and compliance requirements (UAE NISA, ISO 27001, DIFC Data Protection)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-mono text-xs focus:border-cyan-400 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT ENCRYPTED INQUIRY</span>
                  </button>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-20 bg-[#030406] text-gray-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-cyan-400" />
              <span className="text-2xl font-extrabold text-white tracking-tight font-sans">
                CYBER<span className="text-cyan-400">FORTRESS</span> DUBAI
              </span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              Innovation Hub, Gate Avenue Level 3 • DIFC, Dubai, UAE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 CYBERFORTRESS DEFENSE LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-6">
              <span className="text-cyan-400">DIFC REGISTRATION #849201</span>
              <span>CREST CERTIFIED SOC PERMIT #9921</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default CyberfortressShowcase;
