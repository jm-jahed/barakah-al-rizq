'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, User, FlaskConical, Cpu, Eye, FileText, Stethoscope, ArrowRight, ShieldCheck } from 'lucide-react';

interface TwinNode {
  id: string;
  name: string;
  category: string;
  description: string;
  telemetry: string;
  icon: React.ReactNode;
}

const TWIN_NODES: TwinNode[] = [
  {
    id: 'patient',
    name: 'Patient Context',
    category: 'EHR / Baseline',
    description: 'Longitudinal clinical history, allergies, chronic baselines, and prior diagnostic records.',
    telemetry: 'PATIENT-ANON-7841 • ICD-11 Mapping Complete',
    icon: <User className="w-5 h-5 text-blue-400" />
  },
  {
    id: 'sample',
    name: 'Biological Specimen',
    category: 'Accession & Pre-Analytics',
    description: '2D RFID-tracked tube matrix with continuous cold-chain temperature telemetry.',
    telemetry: 'RFID-CAP: 4.1°C Stable • 100% Chain-of-Custody',
    icon: <FlaskConical className="w-5 h-5 text-cyan-400" />
  },
  {
    id: 'instrument',
    name: 'Analyzer Stream',
    category: 'High-Throughput Testing',
    description: 'Photometric absorption and flow cytometry telemetry calibrated against NIST reference standards.',
    telemetry: 'Dual-Wavelength Laser OD: 1.482 • Multi-Rule Pass',
    icon: <Cpu className="w-5 h-5 text-teal-400" />
  },
  {
    id: 'image',
    name: 'Radiology Modality',
    category: 'Volumetric Imaging',
    description: '3T MRI volumetric reconstruction and CT angiography multi-planar slice series.',
    telemetry: 'DICOM 0.4mm Isotropic • Zero-Latency Stream',
    icon: <Eye className="w-5 h-5 text-indigo-400" />
  },
  {
    id: 'result',
    name: 'Synthesized Finding',
    category: 'Diagnostic Core',
    description: 'Harmonized quantitative markers and flagged anatomical regions presented in context.',
    telemetry: 'Delta Check Shift < 1.2% • Biomarker Flag Normal',
    icon: <FileText className="w-5 h-5 text-emerald-400" />
  },
  {
    id: 'specialist',
    name: 'Specialist Sign-Off',
    category: 'Consultant Review',
    description: 'Certified pathologist and radiologist electronic sign-off with PKI cryptographic keys.',
    telemetry: 'PKI-SIGN: Dr. L. Al-Hashimi (MD, FRCPath)',
    icon: <Stethoscope className="w-5 h-5 text-purple-400" />
  }
];

export const VirelisDigitalTwin: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('result');
  const activeNode = TWIN_NODES.find(n => n.id === activeNodeId) || TWIN_NODES[4];

  return (
    <section className="relative py-28 bg-[#03060c] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Network className="w-3.5 h-3.5" />
            Digital Diagnostic Twin
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            One Diagnostic Journey. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              One Connected View.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Every sample, scan, calibration run, and specialist observation forms a single continuous graph. The Digital Diagnostic Twin links clinical context to analytical evidence in real-time.
          </p>
        </div>

        {/* Interactive Twin Topology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TWIN_NODES.map((node) => {
            const isSelected = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#091322] to-[#050c18] border-cyan-500/60 shadow-[0_0_30px_rgba(0,240,255,0.15)] ring-1 ring-cyan-400/30'
                    : 'bg-[#070c16]/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl border ${
                    isSelected ? 'bg-cyan-500/20 border-cyan-400/40' : 'bg-slate-800/60 border-slate-700/60'
                  }`}>
                    {node.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {node.category}
                  </span>
                </div>

                <h3 className={`text-base font-bold mb-1.5 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {node.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {node.description}
                </p>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-[11px] font-mono text-cyan-400/90 truncate">
                  {node.telemetry}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#08101d] via-[#050b14] to-[#08101d] border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
              Synchronized Twin Node: {activeNode.name}
            </span>
            <h4 className="text-xl font-bold text-white mb-2">{activeNode.description}</h4>
            <p className="text-xs font-mono text-slate-400">
              Active Graph Connection: <span className="text-cyan-300 font-semibold">{activeNode.telemetry}</span>
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Traceable Link
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
