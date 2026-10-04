'use client';

import React from 'react';

export function GithubActivity() {
  return (
    <section className="py-20 bg-[#0B0F19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                GitHub Activity Matrix
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Open Source & Engineering Footprint
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Track my public contributions, private client repositories, and autonomous production build metrics on GitHub (<code className="text-amber-400 font-mono">@jm-jahed</code>).
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/jm-jahed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center gap-2 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Follow on GitHub (@jm-jahed)
                </a>
              </div>
            </div>

            {/* Stats Metrics Cards */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-amber-400">63</div>
                <div className="text-xs text-slate-400 font-medium uppercase mt-1">Total Repositories</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-emerald-400">51</div>
                <div className="text-xs text-slate-400 font-medium uppercase mt-1">Standalone UAE Projects</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-blue-400">58/58</div>
                <div className="text-xs text-slate-400 font-medium uppercase mt-1">Static Prerender Routes</div>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 text-center">
                <div className="text-3xl font-extrabold text-purple-400">100%</div>
                <div className="text-xs text-slate-400 font-medium uppercase mt-1">TypeScript Strict Coverage</div>
              </div>
            </div>
          </div>

          {/* SVG Contribution Chart Container */}
          <div className="mt-8 pt-8 border-t border-slate-800 text-center overflow-x-auto">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-4">
              Real-Time Contribution Activity Matrix
            </span>
            <div className="inline-block min-w-[600px] p-4 bg-slate-950/80 rounded-xl border border-slate-800">
              <img
                src="https://ghchart.rshah.org/38B2AC/jm-jahed"
                alt="Md Jahedul Islam GitHub Contribution Chart"
                className="w-full h-auto mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
