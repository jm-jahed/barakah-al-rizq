'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, UploadCloud, Camera, ShieldCheck, CheckCircle2, Clock, UserCheck, ArrowRight, Lock } from 'lucide-react';

interface MedivantaPrescriptionProps {
  onOpenUploadModal?: () => void;
}

export const MedivantaPrescription: React.FC<MedivantaPrescriptionProps> = ({ onOpenUploadModal }) => {
  const [selectedMethod, setSelectedMethod] = useState<'upload' | 'camera' | 'ehr'>('upload');

  return (
    <section className="relative py-28 bg-[#020509] border-b border-emerald-950/40 text-slate-100 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-4">
            <FileText className="w-3.5 h-3.5 text-emerald-300" />
            DIGITAL PRESCRIPTION WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Your Prescription. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              Digitally Organized.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Upload paper prescriptions, snap a photo, or synchronize directly with authorized healthcare clinics. Our licensed pharmacists verify dosage safety and coordinate immediate dispatch.
          </p>
        </div>

        {/* 2-Column Grid: Upload Card & 5-Step Prescription Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Upload Card */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#08121e] to-[#040810] border border-emerald-500/35 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Prescription Ingestion Card</h3>
                    <p className="text-xs text-slate-400 font-mono">End-to-end encrypted medical data intake</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  AES-256
                </span>
              </div>

              {/* Upload Methods Selector */}
              <div className="grid grid-cols-3 gap-2 my-6">
                <button
                  onClick={() => setSelectedMethod('upload')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedMethod === 'upload'
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <UploadCloud className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">File / PDF</span>
                </button>
                <button
                  onClick={() => setSelectedMethod('camera')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedMethod === 'camera'
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Camera className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">Camera Snap</span>
                </button>
                <button
                  onClick={() => setSelectedMethod('ehr')}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedMethod === 'ehr'
                      ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 mx-auto mb-1" />
                  <span className="text-[11px] font-mono block">EHR Sync</span>
                </button>
              </div>

              {/* Dropzone Area */}
              <div 
                onClick={onOpenUploadModal}
                className="p-8 rounded-2xl border-2 border-dashed border-emerald-500/30 bg-[#03060c]/60 hover:bg-emerald-950/20 hover:border-emerald-500/60 cursor-pointer transition-all text-center mb-6"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <UploadCloud className="w-6 h-6 animate-bounce" />
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  Drag & Drop Prescription Document or Click to Upload
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Supported formats: PDF, PNG, JPG, HEIC (Max 25MB)
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenUploadModal}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 font-mono"
              >
                Proceed with Prescription Verification <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: 5-Step Process Explainer */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-[#070e17] border border-slate-800">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  01
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Upload Prescription</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Upload via smartphone, webcam, or clinic PDF. Optical character recognition instantly parses doctor credentials and medication specifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#070e17] border border-slate-800">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  02
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Prescription Review</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Licensed clinical pharmacists review active molecules, dosage frequencies, and cross-reference potential drug-drug interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#070e17] border border-slate-800">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  03
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Medicine Matching & Pricing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    System verifies stock availability across local micro-hubs and calculates co-pays or direct AED prices with full transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#070e17] border border-slate-800">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  04
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Order Confirmation</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Customer confirms delivery window and delivery address. Real-time fulfillment queue is automatically scheduled.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#070e17] border border-slate-800">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  05
                </span>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Cold-Chain Fulfillment & Dispatch</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Medicines are dispensed in tamper-evident packaging and assigned to an electric climate-controlled courier for direct doorstep transit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
