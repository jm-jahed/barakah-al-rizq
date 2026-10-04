'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Package, 
  FileText, 
  MapPin, 
  Bell, 
  Headphones, 
  Clock, 
  CheckCircle2, 
  Thermometer, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const MedivantaAccountExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'prescriptions' | 'addresses' | 'notifications'>('orders');

  return (
    <section className="relative py-28 bg-[#03070e] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
              <User className="w-3.5 h-3.5 text-emerald-300" />
              PATIENT & CAREGIVER PORTAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Your Health, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
                At Your Fingertips.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Manage your chronic refills, view doctor prescription archives, track active deliveries, and coordinate family member medicine schedules in one seamless portal.
          </p>
        </div>

        {/* Dashboard Concept Mockup */}
        <div className="rounded-3xl bg-gradient-to-b from-[#08121c] to-[#040810] border border-emerald-500/30 shadow-2xl overflow-hidden">
          {/* Top Bar with Account Details */}
          <div className="p-6 bg-[#060c14] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 font-bold font-mono">
                AF
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">Amina Al-Falasi</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    Verified Patient
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">DHA ID: #DXB-8804-PAT • Dubai, UAE</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'orders' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                My Orders (3)
              </button>
              <button
                onClick={() => setActiveTab('prescriptions')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'prescriptions' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Prescriptions (2)
              </button>
              <button
                onClick={() => setActiveTab('addresses')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'addresses' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                Addresses
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                  activeTab === 'notifications' ? 'bg-emerald-500 text-black font-bold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                Alerts
              </button>
            </div>
          </div>

          {/* Main Tab Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'orders' && (
              <div className="space-y-4">
                {/* Active Order Card */}
                <div className="p-5 rounded-2xl bg-[#091320] border border-emerald-500/40">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-emerald-400">ORDER #MV-20481</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                        OUT FOR DELIVERY
                      </span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">Today, 10:15 AM</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono mb-4">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Medicines:</span>
                      <div className="text-slate-200 font-bold">CardioFlow XR + 2 items</div>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Estimated ETA:</span>
                      <div className="text-emerald-300 font-bold">11:42 AM (14 min)</div>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase">Destination:</span>
                      <div className="text-slate-200 truncate">Villa 14, Palm Jumeirah</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5" />
                      Cold-Vault 4.8°C Verified
                    </span>
                    <span className="text-white font-bold">Total: AED 450.00</span>
                  </div>
                </div>

                {/* Past Order */}
                <div className="p-5 rounded-2xl bg-[#060b13] border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-slate-300">ORDER #MV-19940</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-400">
                      DELIVERED ON MARCH 28
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    GlucoPrecision ER 1000mg • Handover verified with SMS OTP
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'prescriptions' && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#091320] border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white">Dr. Sarah Al-Falasi (Cardiology)</div>
                    <div className="text-xs text-slate-400 font-mono">Prescription #RX-9901 • Active for 6 Months</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
                    Auto-Refill Active
                  </span>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#091320] border border-emerald-500/30">
                  <div className="text-xs font-mono text-emerald-400 uppercase mb-1">Primary Home Villa</div>
                  <div className="text-sm font-bold text-white">Villa 14, Crescent Rd</div>
                  <p className="text-xs text-slate-400 mt-1">Palm Jumeirah, Dubai, UAE</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#060b13] border border-slate-800">
                  <div className="text-xs font-mono text-slate-400 uppercase mb-1">Office / DIFC</div>
                  <div className="text-sm font-bold text-white">Level 24, Gate Tower 4</div>
                  <p className="text-xs text-slate-400 mt-1">DIFC, Dubai, UAE</p>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#091320] border border-emerald-500/30 flex items-start gap-3">
                  <Bell className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Courier is 5 Minutes Away</div>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                      Zayd K. is entering Palm Crescent. Please have your 4-digit SMS OTP ready for handover.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
