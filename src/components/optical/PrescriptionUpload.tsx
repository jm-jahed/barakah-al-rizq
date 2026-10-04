'use client';
import React, { useState } from 'react';
import { Upload, CheckCircle2 } from 'lucide-react';

export const PrescriptionUpload: React.FC<any> = () => {
  const [sph, setSph] = useState('-1.50');
  const [uploaded, setUploaded] = useState(false);

  return (
    <section className="py-24 bg-slate-900/90 text-white border-b border-sky-500/20">
      <div className="max-w-2xl mx-auto bg-slate-950 p-8 rounded-3xl border border-sky-500/30 text-center space-y-4">
        <span className="text-xs font-mono text-sky-400 font-bold uppercase">PRESCRIPTION WORKFLOW</span>
        <h3 className="text-2xl font-sans font-bold text-white">Enter or Upload Optical Prescription</h3>
        <p className="text-xs text-slate-300">Demo prescription workflow — final values verified by clinical optometrists.</p>

        {uploaded ? (
          <div className="text-emerald-400 font-mono text-xs flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5" /> Prescription attached successfully!</div>
        ) : (
          <button onClick={() => setUploaded(true)} className="w-full py-4 border-2 border-dashed border-sky-500/40 rounded-2xl bg-slate-900 text-xs font-mono text-sky-300 flex items-center justify-center gap-2">
            <Upload className="w-4 h-4" /> Upload Prescription Photo / PDF
          </button>
        )}
      </div>
    </section>
  );
};
