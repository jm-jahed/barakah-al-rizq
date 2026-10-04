'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Cpu, 
  Database, 
  Shield, 
  Server, 
  Smartphone, 
  Radio, 
  BarChart2,
  Code2,
  CheckCircle2
} from 'lucide-react';

const ARCH_LAYERS = [
  {
    layerNumber: '01',
    name: 'Customer Interface Layer',
    role: 'Next.js 16 WebApp, React Native iOS/Android, Clinic Portal',
    desc: 'Sub-second prescription upload, real-time map rendering with WebGL, and multi-language patient guidance.'
  },
  {
    layerNumber: '02',
    name: 'Prescription & Verification Engine',
    role: 'Tesseract OCR, Clinical Rule Validator, DHA/MOHAP API Sync',
    desc: 'Ingests multi-format digital prescriptions, isolates molecular dosages, and checks drug-drug interactions.'
  },
  {
    layerNumber: '03',
    name: 'Robotic Fulfillment & RFID Matrix',
    role: 'Automated Pick-and-Pack Carousels, 2D DataMatrix Serialization',
    desc: 'Hardware carousels retrieve medicine SKUs with zero cross-contamination and seal cold-vault pouches.'
  },
  {
    layerNumber: '04',
    name: 'Last-Mile Route & Telematics Orchestrator',
    role: 'Dynamic GIS Graph Routing, Cellular IoT Gateway, Vehicle Telemetry',
    desc: 'Calculates optimal courier paths and streams compartment temperature/humidity every 2 seconds.'
  },
  {
    layerNumber: '05',
    name: 'Sovereign Data & Governance Layer',
    role: 'PostgreSQL, Redis Cache Cluster, AES-256 Hardware Vault (HSM)',
    desc: 'Encrypted patient records, immutable audit logs, and sovereign UAE healthcare data enclave residency.'
  }
];

const TECH_STACK = [
  { name: 'Next.js 16 & Turbopack', category: 'Frontend Platform' },
  { name: 'React 19 & TypeScript', category: 'UI & Type Safety' },
  { name: 'Tailwind CSS & Framer Motion', category: 'Styling & Micro-Interactions' },
  { name: 'PostgreSQL & Prisma', category: 'Relational Health DB' },
  { name: 'Redis Micro-Cluster', category: 'Real-Time Stock Locks' },
  { name: 'Cellular IoT Telematics', category: 'Cold-Vault Sensor Stream' },
  { name: 'Spatial GIS Routing API', category: 'Metro Dispatch Engine' },
  { name: 'Hardware HSM Vault', category: 'FIPS 140-3 Cryptography' }
];

export const MedivantaArchitecture: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#020509] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-950/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-emerald-300" />
            DIGITAL HEALTHCARE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            One Platform. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Every Delivery Layer.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            From patient UI and OCR prescription ingestion down to automated robotic carousels and cellular cold-chain telemetry.
          </p>
        </div>

        {/* 5 Architecture Layers */}
        <div className="space-y-4 mb-16 max-w-4xl mx-auto">
          {ARCH_LAYERS.map((layer) => (
            <div
              key={layer.layerNumber}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#07111c] to-[#040810] border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-emerald-950 border border-emerald-500/30 text-emerald-400 shrink-0">
                  LAYER {layer.layerNumber}
                </span>
                <div>
                  <h3 className="text-base font-bold text-white">{layer.name}</h3>
                  <p className="text-xs font-mono text-cyan-300 mb-1">{layer.role}</p>
                  <p className="text-xs text-slate-400">{layer.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Ecosystem Grid */}
        <div className="p-8 rounded-3xl bg-[#060c15] border border-slate-800">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-400" />
              Technology Ecosystem
            </h3>
            <span className="text-xs font-mono text-emerald-400">Next-Gen Full-Stack Architecture</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TECH_STACK.map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
                <span className="text-[10px] font-mono text-slate-500 uppercase block mb-1">
                  {tech.category}
                </span>
                <div className="text-xs font-bold text-white font-mono">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
