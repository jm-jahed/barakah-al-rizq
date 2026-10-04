'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SIMULATED_LIVE_ORDER } from '@/data/medivantaData';
import { 
  MapPin, 
  Truck, 
  Thermometer, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  Package, 
  Battery, 
  Phone, 
  AlertCircle,
  Activity
} from 'lucide-react';

export const MedivantaCommandCenter: React.FC = () => {
  const order = SIMULATED_LIVE_ORDER;
  const [activeTab, setActiveTab] = useState<'tracking' | 'telemetry' | 'manifest'>('tracking');

  return (
    <section className="relative py-28 bg-[#03070d] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Activity className="w-3.5 h-3.5 text-emerald-300" />
              DELIVERY INTELLIGENCE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Know Where Your Medicine Is. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                Down to the Second.
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              DELIVERY SIMULATION
            </span>
            <p className="text-xs text-slate-400 mt-2 font-mono">Live telemetry feed for Dubai metro dispatch fleet</p>
          </div>
        </div>

        {/* Command Center Card */}
        <div className="rounded-3xl bg-gradient-to-b from-[#08121c] via-[#040a12] to-[#02060b] border border-emerald-500/30 shadow-2xl overflow-hidden">
          {/* Top Bar with Live Order Meta */}
          <div className="p-6 bg-[#060e17] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <Truck className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-emerald-400 font-bold">ORDER #{order.orderNumber}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    {order.currentStatus}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-0.5">{order.destinationAddress}</h3>
              </div>
            </div>

            {/* Quick Segment Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('tracking')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors ${
                  activeTab === 'tracking' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Live Journey
              </button>
              <button
                onClick={() => setActiveTab('telemetry')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors ${
                  activeTab === 'telemetry' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Compartment Telemetry
              </button>
              <button
                onClick={() => setActiveTab('manifest')}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors ${
                  activeTab === 'manifest' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Medicine Manifest ({order.totalItems})
              </button>
            </div>
          </div>

          {/* Main Grid: Visual Map & Telemetry Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Interactive Simulated Map & Courier Info */}
            <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-slate-800">
              {/* Simulated Map Container */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl bg-[#040810] border border-emerald-950/80 overflow-hidden mb-6 flex items-center justify-center">
                {/* SVG Route Visualization */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.05)" strokeWidth="1" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />

                  {/* Route path */}
                  <path
                    d="M 60 220 C 140 180, 220 240, 320 140 S 480 180, 560 90"
                    fill="none"
                    stroke="url(#routeGrad)"
                    strokeWidth="4"
                    strokeDasharray="8 4"
                    className="animate-pulse"
                  />

                  {/* Origin Hub Marker */}
                  <circle cx="60" cy="220" r="7" fill="#06b6d4" />
                  <circle cx="60" cy="220" r="14" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />

                  {/* Live Courier Vehicle Marker */}
                  <circle cx="380" cy="155" r="9" fill="#10b981" />
                  <circle cx="380" cy="155" r="18" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.6" className="animate-ping" />

                  {/* Destination Marker */}
                  <circle cx="560" cy="90" r="7" fill="#38bdf8" />
                  <circle cx="560" cy="90" r="14" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.4" />
                </svg>

                {/* Floating Map Overlay Tags */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/85 border border-slate-800 text-[11px] font-mono text-slate-300">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" />
                    APPROACHING PALM JUMEIRAH
                  </div>
                  <div className="text-slate-400 mt-0.5">Speed: 48 km/h • Route: SZR / D94 Coastal</div>
                </div>

                <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-slate-950/85 border border-slate-800 text-[11px] font-mono text-right">
                  <div className="text-slate-400">Estimated Arrival</div>
                  <div className="text-base font-bold text-white font-mono">{order.estimatedArrival}</div>
                </div>
              </div>

              {/* Courier & Vehicle Telemetry Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#060c14] border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Assigned Courier</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    {order.courierName}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#060c14] border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Cold-Vault Temp</div>
                  <div className="text-sm font-bold text-emerald-300 flex items-center gap-1.5 font-mono">
                    <Thermometer className="w-4 h-4 text-emerald-400" />
                    {order.temperatureStatus.split(' ')[0]}
                    <span className="text-[10px] text-slate-400">(Stable)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#060c14] border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Fleet Vehicle</div>
                  <div className="text-sm font-bold text-slate-200 flex items-center gap-1.5 font-mono">
                    <Battery className="w-4 h-4 text-cyan-400" />
                    EV #DXB-914 ({order.batteryReserve})
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Tabs (Timeline, Telemetry, Manifest) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#040811]/60 flex flex-col justify-between">
              {activeTab === 'tracking' && (
                <div>
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Live Step-by-Step Milestones
                  </h4>

                  <div className="space-y-6 relative pl-6 border-l border-emerald-950/80 ml-2">
                    {order.timeline.map((event, idx) => (
                      <div key={idx} className="relative group">
                        {/* Dot indicator */}
                        <div className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 ${
                          event.current
                            ? 'bg-emerald-400 border-emerald-300 shadow-[0_0_12px_#10b981]'
                            : event.completed
                            ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                            : 'bg-slate-900 border-slate-700'
                        }`} />

                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${event.current ? 'text-emerald-300' : event.completed ? 'text-white' : 'text-slate-500'}`}>
                            {event.title}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">{event.time}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{event.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'telemetry' && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
                    IoT Environmental Sensors
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3 font-mono text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Compartment Temp:</span>
                      <strong className="text-emerald-400">4.8°C (PCM Calibrated)</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Relative Humidity:</span>
                      <strong className="text-cyan-300">42% RH</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>G-Force Shock Sensor:</span>
                      <strong className="text-emerald-400">0.02G (Smooth Transit)</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Tamper-Lock Status:</span>
                      <strong className="text-emerald-400">Secured (RFID Locked)</strong>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'manifest' && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">
                    Verified Package Manifest
                  </h4>
                  {order.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{item.name}</div>
                        <div className="text-[11px] font-mono text-slate-400">{item.qty}</div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                        {item.type}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Support Button */}
              <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Assistance Required?</span>
                <button className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" />
                  Connect to Pharmacist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
