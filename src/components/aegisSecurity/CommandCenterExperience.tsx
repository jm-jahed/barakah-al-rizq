'use client';

import React, { useState, useEffect } from 'react';
import { Radio, Shield, Activity, Cpu, MapPin, Eye, Bell, CheckCircle2, UserCheck, AlertCircle, RefreshCw, Maximize2 } from 'lucide-react';

export default function CommandCenterExperience() {
  const [activePanel, setActivePanel] = useState<'operations' | 'monitoring' | 'personnel' | 'locations' | 'reports' | 'response'>('operations');
  const [threatLevel, setThreatLevel] = useState<'DEFCON 4' | 'DEFCON 3' | 'DEFCON 2'>('DEFCON 4');
  const [pingRate, setPingRate] = useState<number>(18);
  const [activePatrolsCount, setActivePatrolsCount] = useState<number>(142);
  const [simulatedFeed, setSimulatedFeed] = useState<number>(1);

  // Live telemetry pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setPingRate(Math.floor(16 + Math.random() * 6));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const panels = [
    { id: 'operations', label: 'OPERATIONS', icon: Activity, desc: 'Central Dispatch & Grid Health' },
    { id: 'monitoring', label: 'MONITORING', icon: Eye, desc: 'AI Video & Sensor Streams' },
    { id: 'personnel', label: 'PERSONNEL', icon: UserCheck, desc: 'Active Guards & CPO Units' },
    { id: 'locations', label: 'LOCATIONS', icon: MapPin, desc: 'Protected UAE Sectors' },
    { id: 'reports', label: 'REPORTS', icon: Shield, desc: 'Audit Logs & SIRA Telemetry' },
    { id: 'response', label: 'RESPONSE', icon: Bell, desc: 'Rapid Mobile Patrol Status' },
  ];

  return (
    <section id="command-center" className="py-24 bg-[#03060C] text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>24 / 7 SOVEREIGN SECURITY OPERATIONS CENTER (SOC)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Live Security Command Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interactive demonstration of our centralized threat monitoring, tactical guard telemetry, and rapid dispatch matrix across the United Arab Emirates.
          </p>
        </div>

        {/* Command Center Virtual Terminal Container */}
        <div className="bg-[#080D18] border-2 border-cyan-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-950/40">
          
          {/* Terminal Top Navigation / Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-bold text-white tracking-wider pl-2 border-l border-slate-800">
                AEGIS SOC TERMINAL v4.8 &bull; DUBAI &bull; ABU DHABI
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <span className="text-slate-500">PING:</span>
                <span className="text-cyan-400 font-bold">{pingRate} ms</span>
              </div>

              <div className="flex items-center gap-2 bg-emerald-950/80 text-emerald-400 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold">GRID ONLINE (100%)</span>
              </div>
            </div>
          </div>

          {/* Interactive Panel Switcher Tabs */}
          <div className="bg-[#050811] p-3 border-b border-slate-800 flex items-center gap-2 overflow-x-auto">
            {panels.map((p) => {
              const IconComp = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePanel(p.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                    activePanel === p.id
                      ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>

          {/* Terminal Screen Body */}
          <div className="p-6 sm:p-8 min-h-[420px]">
            
            {/* Panel 1: OPERATIONS */}
            {activePanel === 'operations' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Active Duty Guards</span>
                    <div className="text-3xl font-black text-white font-mono">{activePatrolsCount} Officers</div>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span>✓</span> 100% RFID Checkpoint Verified
                    </span>
                  </div>

                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Avg Rapid Response</span>
                    <div className="text-3xl font-black text-cyan-400 font-mono">07m 42s</div>
                    <span className="text-[11px] text-slate-400 font-mono">Dubai &bull; Abu Dhabi Urban Belt</span>
                  </div>

                  <div className="p-5 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono uppercase">Optical Sensor Feeds</span>
                    <div className="text-3xl font-black text-amber-400 font-mono">2,480+ CCTVs</div>
                    <span className="text-[11px] text-cyan-400 font-mono">SIRA Secure Encrypted Cloud</span>
                  </div>
                </div>

                <div className="p-6 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      SYSTEM INTEGRITY &bull; REAL-TIME HEALTH MATRIX
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono">Live Demo Stream</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">DIFC Tower Hub</span>
                      <strong className="text-emerald-400">NORMAL &bull; 00 INCIDENTS</strong>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Palm Jumeirah Compound</span>
                      <strong className="text-emerald-400">NORMAL &bull; PERIMETER SECURE</strong>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">ADGM Financial Vault</span>
                      <strong className="text-emerald-400">ARMED &bull; LEVEL-IV LOCKDOWN</strong>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Yas Island Convoy</span>
                      <strong className="text-cyan-400">EN ROUTE &bull; TELEMETRY SYNCED</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 2: MONITORING */}
            {activePanel === 'monitoring' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <Eye className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-bold">AI VIDEO SURVEILLANCE MATRIX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((f) => (
                      <button
                        key={f}
                        onClick={() => setSimulatedFeed(f)}
                        className={`px-3 py-1 rounded text-[10px] font-mono font-bold transition ${
                          simulatedFeed === f
                            ? 'bg-cyan-500 text-slate-950'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        FEED 0{f}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-cyan-500/40">
                    <img
                      src={
                        simulatedFeed === 1
                          ? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
                          : simulatedFeed === 2
                          ? 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80'
                          : 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80'
                      }
                      alt="Camera Feed"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    
                    {/* Camera OSD */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono text-cyan-400 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                      <span>REC &bull; CAM-DIFC-0{simulatedFeed} &bull; 4K 60FPS</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-300 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
                      <span>AI ANALYTICS: PERIMETER TRIPWIRE ACTIVE</span>
                      <span className="text-emerald-400">0 INTRUDERS DETECTED</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-3 font-mono text-xs">
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-slate-500 text-[10px] block">AI OBJECT CLASSIFICATION</span>
                      <span className="text-white font-bold block">Vehicle ANPR + Facial Liveness</span>
                      <span className="text-[10px] text-emerald-400">Confidence: 99.4%</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-slate-500 text-[10px] block">VIDEO RETENTION AUDIT</span>
                      <span className="text-white font-bold block">90-Day SIRA Cloud Storage</span>
                      <span className="text-[10px] text-cyan-400">AES-256 Encrypted Stream</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-slate-500 text-[10px] block">NIGHT-VISION THERMAL</span>
                      <span className="text-white font-bold block">FLIR Long-Wave IR Active</span>
                      <span className="text-[10px] text-emerald-400">Visibility: 1.2 KM</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 3: PERSONNEL */}
            {activePanel === 'personnel' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold">CLOSE PROTECTION (CPO)</span>
                      <span className="text-emerald-400">18 Cells Active</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Tactical EMT trained officers with B6/B7 armored convoy driving credentials assigned to VIP delegations.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold">STATIC MANNED GUARDING</span>
                      <span className="text-emerald-400">110 Posts Active</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      SIRA Grade-A certified officers guarding corporate lobbies, luxury residential gates, and banking hubs.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-bold">RAPID MOBILE PATROL</span>
                      <span className="text-emerald-400">14 Squads Active</span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      Equipped 4x4 mobile units conducting roving checks across industrial parks and expansive communities.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Officer Background Clearance:</span>
                  <span className="text-emerald-400 font-bold">100% MOI / SIRA Fingerprinted &amp; Vetted</span>
                </div>
              </div>
            )}

            {/* Panel 4: LOCATIONS */}
            {activePanel === 'locations' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                  {[
                    { name: 'DIFC & Downtown Dubai', sites: '82 Sites', time: '5m Avg Response' },
                    { name: 'Palm Jumeirah & Marina', sites: '64 Sites', time: '6m Avg Response' },
                    { name: 'ADGM & Saadiyat Island', sites: '58 Sites', time: '7m Avg Response' },
                    { name: 'Al Quoz & Industrial', sites: '46 Sites', time: '8m Avg Response' },
                    { name: 'Sharjah SAIF Zone', sites: '34 Sites', time: '9m Avg Response' },
                    { name: 'Ras Al Khaimah Marjan', sites: '24 Sites', time: '10m Avg Response' },
                    { name: 'Al Ain Private Estates', sites: '28 Sites', time: '11m Avg Response' },
                    { name: 'Fujairah Port Energy', sites: '16 Sites', time: '10m Avg Response' },
                  ].map((loc, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                      <span className="text-white font-bold block">{loc.name}</span>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                        <span className="text-cyan-400">{loc.sites}</span>
                        <span className="text-emerald-400">{loc.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Panel 5: REPORTS */}
            {activePanel === 'reports' && (
              <div className="space-y-4 font-mono text-xs animate-fadeIn">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-cyan-400 font-bold">AUTOMATED AUDIT LOG (SAMPLE TELEMETRY)</span>
                    <span className="text-[10px] text-slate-500">Auto-Refreshes Live</span>
                  </div>

                  <div className="space-y-2 text-[11px] text-slate-300">
                    <div className="p-2 bg-slate-900/60 rounded-lg flex items-center justify-between">
                      <span>[03:32:10 GST] DIFC Tower East: Guard #408 completed RFID checkpoint #14.</span>
                      <span className="text-emerald-400">PASSED</span>
                    </div>
                    <div className="p-2 bg-slate-900/60 rounded-lg flex items-center justify-between">
                      <span>[03:30:45 GST] Palm Jumeirah Villa 88: ANPR scanned registered resident vehicle.</span>
                      <span className="text-cyan-400">GATE OPEN</span>
                    </div>
                    <div className="p-2 bg-slate-900/60 rounded-lg flex items-center justify-between">
                      <span>[03:28:12 GST] ADGM Gold Vault: Dual-custody biometric confirmation logged.</span>
                      <span className="text-emerald-400">VERIFIED</span>
                    </div>
                    <div className="p-2 bg-slate-900/60 rounded-lg flex items-center justify-between">
                      <span>[03:25:00 GST] Central SOC: SIRA compliance video health handshake completed.</span>
                      <span className="text-emerald-400">100% OK</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Panel 6: RESPONSE */}
            {activePanel === 'response' && (
              <div className="space-y-6 font-mono text-xs animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[10px] text-slate-400 uppercase">TIER 1 &bull; ON-SITE GUARD</span>
                    <div className="text-2xl font-bold text-emerald-400">00 - 30 SECONDS</div>
                    <p className="text-slate-400 text-[11px]">Immediate local physical intervention and verbal de-escalation.</p>
                  </div>

                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[10px] text-slate-400 uppercase">TIER 2 &bull; MOBILE SQUAD</span>
                    <div className="text-2xl font-bold text-cyan-400">05 - 08 MINUTES</div>
                    <p className="text-slate-400 text-[11px]">Equipped tactical mobile reinforcement squad dispatch.</p>
                  </div>

                  <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                    <span className="text-[10px] text-slate-400 uppercase">TIER 3 &bull; POLICE / EMS</span>
                    <div className="text-2xl font-bold text-amber-400">DIRECT INTEGRATION</div>
                    <p className="text-slate-400 text-[11px]">SIRA automated priority link to Dubai &amp; Abu Dhabi Police Command.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Terminal Bottom Action Bar */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
            <span className="text-slate-400">
              Need custom central command monitoring for your UAE enterprise?
            </span>
            <a
              href="#assessment"
              className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl transition"
            >
              Request Custom SOC Architecture
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
