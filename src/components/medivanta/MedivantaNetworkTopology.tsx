'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Cpu, ShieldCheck, Truck, MapPin, Home, ArrowRight, Network } from 'lucide-react';

interface NetworkNode {
  id: string;
  name: string;
  role: string;
  description: string;
  telemetry: string;
  icon: React.ReactNode;
}

const NETWORK_NODES: NetworkNode[] = [
  {
    id: 'pharmacy',
    name: 'Licensed Pharmacy Core',
    role: 'Clinical Verification',
    description: 'Licensed pharmacists review digital prescriptions, match dosages, and verify drug interaction safety.',
    telemetry: 'DHA/MOHAP Validated • 100% Sign-Off',
    icon: <Building2 className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'fulfillment',
    name: 'Micro-Fulfillment Robotics',
    role: 'Automated Dispense',
    description: 'High-speed robotic carousels retrieve medicine batches with laser RFID scanning and zero picking error.',
    telemetry: 'Pick Latency: 4.2 min • Zero-Defect',
    icon: <Cpu className="w-5 h-5 text-teal-400" />
  },
  {
    id: 'quality',
    name: 'Quality & Cold-Chain Vault',
    role: 'Thermal Sealing',
    description: 'Computer-vision validation confirms batch integrity; Phase Change Materials (PCM) seal cold-chain items.',
    telemetry: 'Cold Vault: 2°C – 8°C Verified',
    icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 'dispatch',
    name: 'Metro Dispatch Fleet',
    role: 'Algorithmic Assignment',
    description: 'Certified medical delivery drivers assigned with route optimization to bypass Dubai/Abu Dhabi traffic congestion.',
    telemetry: 'Dispatch Sched: < 3.5 min',
    icon: <Truck className="w-5 h-5 text-blue-400" />
  },
  {
    id: 'delivery',
    name: 'Live Transit Telemetry',
    role: 'Continuous IoT Relay',
    description: 'Compartment thermal sensors and cellular GPS stream live telemetry directly to the patient app.',
    telemetry: '2.0s Live IoT Refresh Rate',
    icon: <MapPin className="w-5 h-5 text-indigo-400" />
  },
  {
    id: 'home',
    name: 'Patient Doorstep',
    role: 'Secure OTP Handover',
    description: 'Dual-factor verification ensures medicine is placed directly into the hands of the verified recipient.',
    telemetry: 'Dual OTP Validated • Delivery Complete',
    icon: <Home className="w-5 h-5 text-emerald-300" />
  }
];

export const MedivantaNetworkTopology: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('quality');
  const activeNode = NETWORK_NODES.find(n => n.id === selectedNodeId) || NETWORK_NODES[2];

  return (
    <section className="relative py-28 bg-[#03060c] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background radial mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-950/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Network className="w-3.5 h-3.5 text-emerald-300" />
            HEALTHCARE DELIVERY NETWORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            A Network Built <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Around Care.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Every step is an interconnected node. From central licensed pharmacy hubs to climate-controlled vehicle networks and patient doorsteps.
          </p>
        </div>

        {/* 6 Nodes Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {NETWORK_NODES.map((node) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#081420] to-[#040a12] border-emerald-500/60 shadow-[0_0_30px_rgba(16,185,129,0.18)] ring-1 ring-emerald-400/30'
                    : 'bg-[#060c15]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl border ${
                      isSelected ? 'bg-emerald-500/20 border-emerald-400/40' : 'bg-slate-800/60 border-slate-700/60'
                    }`}>
                      {node.icon}
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                      {node.role}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {node.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {node.description}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-emerald-400 truncate">
                  {node.telemetry}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Deep Dive Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#08121e] via-[#050b14] to-[#08121e] border border-emerald-500/35 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
              Active Network Topology Node: {activeNode.name}
            </span>
            <h4 className="text-xl font-bold text-white mb-2">{activeNode.description}</h4>
            <p className="text-xs font-mono text-slate-400">
              Live Network Status: <span className="text-emerald-300 font-semibold">{activeNode.telemetry}</span>
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4" />
              Verified Telemetry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
