'use client';

import React, { useEffect, useRef } from 'react';
import { NEXUS_BRAND, NEXUS_LOCATIONS } from '@/data/nexusWorkspaceData';

export default function NexusHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated isometric blueprint canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Nodes representing office workstations and fiber nodes
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number; pulse: number; color: string }> = [];
    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1.5,
        pulse: Math.random() * Math.PI,
        color: i % 3 === 0 ? 'rgba(245, 158, 11, ' : 'rgba(56, 189, 248, '
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.15)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${(1 - dist / 130) * 0.18})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;
        const opacity = 0.4 + Math.sin(node.pulse) * 0.3;

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}${opacity})`;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      }
    }, { threshold: 0.05 });

    observer.observe(canvas);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#0B1120]">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
      />

      {/* Radiant Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-xl shadow-amber-500/5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>DET & DED Ejari Licensed Business Centers • Dubai & Abu Dhabi</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto">
          Your UAE Headquarters,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
            Fully Fitted & Ready Today.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Ultra-prime serviced offices and executive boardrooms across DIFC, Downtown Dubai, Business Bay, Dubai Marina, and ADGM Abu Dhabi. Complete with 2-hour DED Ejari issuance, zero fit-out CapEx, and bilingual corporate concierge.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tour"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
          >
            <span>Book Private Viewing & VIP Pass</span>
            <span>→</span>
          </a>
          <a
            href="#calculator"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-sm rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all text-center flex items-center justify-center gap-2"
          >
            <span>⚡ Interactive Space & Ejari Calculator</span>
          </a>
        </div>

        {/* Live Occupancy Telemetry HUD Ticker */}
        <div className="mt-14 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 backdrop-blur-md max-w-5xl mx-auto text-left">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                LIVE UAE BUSINESS CENTER AVAILABILITY
              </span>
            </div>
            <span className="text-[11px] font-mono text-amber-400 font-semibold">
              Updated: September 2026 Telemetry
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {NEXUS_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition group"
              >
                <span className="text-[10px] text-slate-400 font-mono block truncate">{loc.city}</span>
                <span className="text-xs font-bold text-white block truncate group-hover:text-amber-400 transition">
                  {loc.name.split(' ')[0]} {loc.name.split(' ')[1] || ''}
                </span>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-800/60">
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">
                    {loc.availableSuites} Suites Free
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{loc.occupancyPercentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-xs text-amber-400 font-mono font-bold uppercase block">5 Prime UAE Hubs</span>
            <span className="text-base font-extrabold text-white mt-1 block">DIFC, Opus & ADGM</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Grade-A prestigious towers</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-xs text-emerald-400 font-mono font-bold uppercase block">2-Hour Ejari Turnaround</span>
            <span className="text-base font-extrabold text-white mt-1 block">100% License Ready</span>
            <span className="text-[11px] text-slate-400 mt-1 block">DET & DLD system integrated</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-xs text-amber-400 font-mono font-bold uppercase block">1 to 100 Desks</span>
            <span className="text-base font-extrabold text-white mt-1 block">Agile Scale Agreements</span>
            <span className="text-[11px] text-slate-400 mt-1 block">Upgrade without penalty</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm">
            <span className="text-xs text-cyan-400 font-mono font-bold uppercase block">Zero Hidden CapEx</span>
            <span className="text-base font-extrabold text-white mt-1 block">100% All-Inclusive AED</span>
            <span className="text-[11px] text-slate-400 mt-1 block">DEWA, Chiller, Fiber & Tea</span>
          </div>
        </div>
      </div>
    </section>
  );
}
