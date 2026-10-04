'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, CheckCircle2, AlertCircle, FileCheck, ShieldCheck, ArrowRight } from 'lucide-react';

export const PressoraArtworkPreflight: React.FC = () => {
  const [artworkUploaded, setArtworkUploaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('brand_identity_deck_v4.pdf');

  const preflightChecks = [
    { name: 'Resolution', value: '300 DPI High-Res', status: 'Ready' },
    { name: 'Bleed Margins', value: '3.0mm Perimeter Included', status: 'Ready' },
    { name: 'Color Space', value: 'CMYK (ISO Coated Fogra39)', status: 'Ready' },
    { name: 'Safe Cutting Area', value: '4.0mm Inner Boundary Safe', status: 'Ready' },
    { name: 'Vector Fonts', value: '100% Outlined & Embedded', status: 'Ready' },
  ];

  const handleSimulateUpload = () => {
    setArtworkUploaded(true);
  };

  return (
    <section className="py-24 bg-[#0a0c10] text-[#f8fafc] px-4 sm:px-6 lg:px-8 border-t border-[#1a2536]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e1826] border border-[#1e3b5e] text-xs text-[#38bdf8] font-mono uppercase tracking-[0.25em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INSTANT ARTWORK PREFLIGHT</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#f8fafc] mb-4">
            Ready With Your Design?
          </h2>
          <p className="text-[#94a3b8] font-light text-base sm:text-lg">
            Upload your production files for automated pre-press preflight validation. We verify bleed lines, resolution, and CMYK color profiles before plate exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Upload Dropzone / Interaction */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#0e1420] border-2 border-dashed border-[#1f334d] hover:border-[#38bdf8]/60 transition-colors text-center font-mono">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#121c2a] text-[#38bdf8] flex items-center justify-center mb-4 border border-[#1a304c]">
              <UploadCloud className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-bold text-[#f8fafc] mb-1">
              {artworkUploaded ? 'Artwork Uploaded & Verified' : 'Drag & Drop Artwork Files'}
            </h3>
            <p className="text-xs text-[#64748b] mb-6">
              Supported formats: PDF, AI, EPS, High-Res TIFF, PNG, SVG (Max 250MB)
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleSimulateUpload}
                className="px-6 py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-[#ffffff] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
              >
                {artworkUploaded ? 'Replace Uploaded File' : 'Upload Production Artwork'}
              </button>

              <button
                onClick={() => setArtworkUploaded(false)}
                className="px-5 py-3 rounded-xl bg-[#131b26] hover:bg-[#182332] text-[#94a3b8] text-xs uppercase tracking-wider transition-colors cursor-pointer border border-[#1e2d40]"
              >
                Design Later / Send via Email
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-[#162536] text-[11px] text-[#64748b] flex items-center justify-between">
              <span>Status: <strong className={artworkUploaded ? 'text-[#4ade80]' : 'text-[#f59e0b]'}>{artworkUploaded ? 'Artwork Ready' : 'Awaiting File'}</strong></span>
              <span>256-Bit Encrypted Transfer</span>
            </div>
          </div>

          {/* Automated Preflight Check List */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-[#0d131e] border border-[#1b2f48] shadow-2xl font-mono text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-[#182a3e] pb-3">
              <span className="text-xs uppercase tracking-wider text-[#38bdf8] font-bold">
                Automated Pre-Press Preflight Engine
              </span>
              <span className="px-2 py-0.5 rounded bg-[#091018] text-[#4ade80] text-[10px] font-bold">
                AUTO-PASS
              </span>
            </div>

            <div className="space-y-3">
              {preflightChecks.map((chk, idx) => (
                <div
                  key={chk.name}
                  className="p-3.5 rounded-xl bg-[#091018] border border-[#142436] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                    <div>
                      <div className="font-bold text-[#f8fafc]">{chk.name}</div>
                      <div className="text-[10px] text-[#64748b]">{chk.value}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#4ade80] font-bold uppercase">
                    {chk.status}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#64748b] pt-2 leading-relaxed">
              Our prepress workflow automatically inspects transparency flattener settings, rich black ink limits (Max 300% TAC), and die-cut vector contours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
