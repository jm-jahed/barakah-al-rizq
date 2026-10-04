'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Share2, Eye, ShieldCheck, CheckCircle2, UserCheck, Stethoscope, Video } from 'lucide-react';

interface TeamMember {
  role: string;
  department: string;
  status: 'Reviewing' | 'Signed Off' | 'Annotating' | 'Consulting';
  statusColor: string;
  focusArea: string;
}

const COLLAB_TEAM: TeamMember[] = [
  {
    role: 'Dr. Tariq Al-Mansoor',
    department: 'Senior Consultant Radiologist',
    status: 'Annotating',
    statusColor: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/30',
    focusArea: '3T MRI DWI Perfusion Discrepancy (Slice 42-48)'
  },
  {
    role: 'Dr. Layla Al-Hashimi',
    department: 'Clinical Hematopathologist',
    status: 'Reviewing',
    statusColor: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30',
    focusArea: 'Flow Cytometry 8-Color Immunophenotype'
  },
  {
    role: 'Dr. Marcus Vance',
    department: 'Precision Oncology Lead',
    status: 'Consulting',
    statusColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
    focusArea: 'EGFR Exon 19 Deletion Targeted Therapy Evaluation'
  },
  {
    role: 'Dr. Fatima Bin Zayed',
    department: 'Attending Neurologist & Care Lead',
    status: 'Signed Off',
    statusColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    focusArea: 'Final Clinical Decision & Treatment Protocol'
  }
];

export const VirelisCollaboration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'board' | 'notes' | 'audit'>('board');

  return (
    <section className="relative py-28 bg-[#040810] border-b border-cyan-950/40 text-slate-100 overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/20 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" />
              Multi-Disciplinary Collaboration
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Lab. Radiology. Oncology. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">
                Connected in Real-Time.
              </span>
            </h2>
          </div>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base leading-relaxed">
            Eliminate communication lags between diagnostic specialists and treating clinicians. VIRELIS enables synchronized multi-disciplinary tumor boards, shared cursor reviews, and cryptographically verified clinical handoffs.
          </p>
        </div>

        {/* Interactive Collaboration Mockup */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0a1220] to-[#050b14] border border-cyan-500/30 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="p-4 sm:p-6 bg-[#080e18] border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">SESSION #MDT-DUBAI-8802</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                    Active Session
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">Multi-Disciplinary Oncology & Neurology Board</h3>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab('board')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'board' ? 'bg-cyan-500 text-black font-semibold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Panelists (4)
              </button>
              <button 
                onClick={() => setActiveTab('notes')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'notes' ? 'bg-cyan-500 text-black font-semibold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Live Discussion
              </button>
              <button 
                onClick={() => setActiveTab('audit')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === 'audit' ? 'bg-cyan-500 text-black font-semibold' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Consensus Sign-Off
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'board' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COLLAB_TEAM.map((member, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-[#09101b] border border-slate-800 hover:border-cyan-500/40 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono text-cyan-400 font-bold">
                          {member.role.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{member.role}</h4>
                          <p className="text-xs text-slate-400">{member.department}</p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${member.statusColor}`}>
                        {member.status}
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs font-mono text-slate-300">
                      <span className="text-slate-500 block text-[10px] uppercase mb-0.5">Active Focus:</span>
                      {member.focusArea}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#09101b] border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <strong className="text-cyan-400 font-mono">Dr. Tariq Al-Mansoor (Radiology)</strong>
                    <span className="font-mono">10:42 AM</span>
                  </div>
                  <p className="text-sm text-slate-200">
                    "Volumetric 3D MRI confirms 14mm focal hyperintensity in left parietal cortex. No midline shift observed. Suggest correlating with CSF biomarkers."
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#09101b] border border-indigo-900/40">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <strong className="text-indigo-400 font-mono">Dr. Layla Al-Hashimi (Pathology)</strong>
                    <span className="font-mono">10:45 AM</span>
                  </div>
                  <p className="text-sm text-slate-200">
                    "CSF panel shows elevated neurofilament light chain (NfL) at 1,840 pg/mL, corroborating acute axonal stress. Findings support early targeted intervention."
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="p-6 rounded-xl bg-[#09101b] border border-cyan-500/30 text-center">
                <ShieldCheck className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-white mb-2">Consensus Reached & Digitally Verified</h4>
                <p className="text-xs text-slate-400 max-w-lg mx-auto mb-4 font-mono">
                  All 4 clinical specialists have verified diagnostic findings. Electronic clinical decision package formatted and dispatched to the attending physician's EHR queue.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  PKI SHA-256 Signature Sealed
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
