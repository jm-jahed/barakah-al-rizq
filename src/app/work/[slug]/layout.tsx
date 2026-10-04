import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react';

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col relative">
      {/* Top Floating Portfolio Navigation & Disclosure Strip */}
      <header className="sticky top-0 z-50 w-full bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>84 Platform Archive</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/25">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Illustrative Architecture Concept</span>
          </span>

          <Link
            href="/#contact"
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-extrabold transition-all shadow-md shadow-amber-500/20"
          >
            Request Proposal
          </Link>
        </div>
      </header>

      {/* Main Showcase Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Bottom Footer Notice */}
      <footer className="w-full bg-[#06080D] border-t border-white/10 py-6 px-4 text-center text-xs font-mono text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>WebStudio AE · Sovereign UAE Digital Engineering</span>
          </div>
          <span className="text-[10px] text-gray-400">
            Case study prototype demonstrating Next.js 16 & TypeScript engineering capabilities.
          </span>
        </div>
      </footer>
    </div>
  );
}
