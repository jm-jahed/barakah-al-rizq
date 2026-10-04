'use client';

import React, { useEffect, useRef } from 'react';
import { Shield, ShieldAlert, Radio, ArrowRight, Activity, Lock, CheckCircle2 } from 'lucide-react';
import { AEGIS_BRAND } from '@/data/aegisSecurityData';

interface AegisHeroProps {
  onOpenAssessment: () => void;
}

export default function AegisHero({ onOpenAssessment }: AegisHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // High-tech radar sweep & node connection canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 700);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Radar scan angle
    let scanAngle = 0;
    const centerX = width * 0.75;
    const centerY = height * 0.45;
    const maxRadius = Math.min(width, height) * 0.45;

    // Tactical nodes
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number; pulse: number }> = [];
    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle technical coordinate grid
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 50;
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

      // 2. Radar sweep circle on right side
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius * 0.66, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, maxRadius * 0.33, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.stroke();

      // Radar sweep wedge gradient
      scanAngle += 0.015;
      const startAngle = scanAngle;
      const endAngle = scanAngle + 0.35;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, maxRadius, startAngle, endAngle);
      ctx.closePath();
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      // 3. Node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 4. Draw tactical nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;
        const opacity = 0.4 + Math.sin(node.pulse) * 0.4;

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.6)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#050811] text-white">
      {/* Background Interactive Radar Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-65 z-0"
      />

      {/* Cybernetic Radial Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[350px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[300px] bg-blue-700/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          
          {/* Top Security Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-xl shadow-cyan-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SIRA Certified &bull; 24/7 Sovereign Protection Network &bull; UAE</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-sans">
            Protection, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
              Engineered Around You.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
            Security solutions designed for businesses, properties, events, and individuals who cannot afford uncertainty. Built on absolute discipline, advanced surveillance intelligence, and elite executive protection across Dubai and Abu Dhabi.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenAssessment}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 font-mono"
            >
              <span>Request Security Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 font-mono"
            >
              <span>Explore Our Services</span>
            </a>
          </div>

          {/* Live Command Telemetry HUD Bar */}
          <div className="mt-14 p-5 rounded-2xl bg-[#090D18]/90 border border-slate-800/90 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
                  AEGIS CENTRAL COMMAND &bull; LIVE TELEMETRY
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                STATUS: DEFENSE LEVEL 1 (ACTIVE)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">SIRA Compliance</span>
                <span className="text-sm font-black text-white font-mono mt-0.5 block">100% Certified</span>
                <span className="text-[10px] text-emerald-400 font-mono">Dubai Grade-A Operator</span>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Response Time</span>
                <span className="text-sm font-black text-cyan-400 font-mono mt-0.5 block">&lt; 8 Minutes</span>
                <span className="text-[10px] text-slate-400 font-mono">Dubai &bull; Abu Dhabi</span>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Protected Sites</span>
                <span className="text-sm font-black text-white font-mono mt-0.5 block">500+ Assets</span>
                <span className="text-[10px] text-slate-400 font-mono">Across 7 Emirates</span>
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Monitoring Watch</span>
                <span className="text-sm font-black text-amber-400 font-mono mt-0.5 block">24 / 7 / 365</span>
                <span className="text-[10px] text-slate-400 font-mono">Sovereign SOC Center</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
