'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRight, ShieldCheck, Layers, ChevronDown, Terminal, Microscope, Eye, Cpu } from 'lucide-react';
import { VIRELIS_METADATA } from '@/data/virelisData';

interface VirelisHeroProps {
  onExploreClick?: () => void;
  onWorkflowClick?: () => void;
  onOpenModal?: () => void;
}

export function VirelisHero({
  onExploreClick,
  onWorkflowClick,
  onOpenModal
}: VirelisHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Abstract microscopic, cellular and diagnostic signal wave canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Microscopic cellular structures & sensor nodes
    const cellCount = 20;
    const cells: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      pulse: number;
      type: 'signal' | 'cell' | 'scan';
    }> = [];

    for (let i = 0; i < cellCount; i++) {
      cells.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 2 + Math.random() * 3.5,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        pulse: Math.random() * Math.PI * 2,
        type: i % 3 === 0 ? 'signal' : i % 3 === 1 ? 'cell' : 'scan'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep clinical graphite/blue radial glow
      const radialGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        30,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.7
      );
      radialGrad.addColorStop(0, 'rgba(12, 26, 44, 0.45)');
      radialGrad.addColorStop(0.55, 'rgba(6, 14, 26, 0.25)');
      radialGrad.addColorStop(1, 'rgba(4, 6, 12, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Diagnostic fine signal grid
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw cellular interconnections & signal tracks
      for (let i = 0; i < cells.length; i++) {
        const c1 = cells[i];
        c1.x += c1.vx;
        c1.y += c1.vy;
        c1.pulse += 0.025;

        if (c1.x < 30 || c1.x > width - 30) c1.vx *= -1;
        if (c1.y < 30 || c1.y > height - 30) c1.vy *= -1;

        for (let j = i + 1; j < cells.length; j++) {
          const c2 = cells[j];
          const dx = c2.x - c1.x;
          const dy = c2.y - c1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(c1.x, c1.y);
            ctx.lineTo(c2.x, c2.y);
            ctx.stroke();
          }
        }
      }

      // Render cells / signal hubs
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        const pulseFactor = Math.sin(c.pulse) * 0.6;
        const r = Math.max(1, c.radius + pulseFactor);

        // Subtle aura
        const aura = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, r * 3.5);
        aura.addColorStop(0, 'rgba(56, 189, 248, 0.3)');
        aura.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(c.x, c.y, r * 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = c.type === 'signal' ? '#38BDF8' : c.type === 'cell' ? '#06B6D4' : '#818CF8';
        ctx.beginPath();
        ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
        ctx.fill();
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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#04060A] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      {/* Background diagnostic network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Atmospheric lighting overlay gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#04060A] via-[#04060A]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#04060A] to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main hero container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Project & Category Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-sky-500/30 backdrop-blur-md mb-6 shadow-lg shadow-sky-950/20"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
          </span>
          <span className="text-[11px] font-mono tracking-widest text-sky-400 uppercase font-semibold">
            {VIRELIS_METADATA.eyebrow}
          </span>
          <span className="text-slate-600 text-xs">•</span>
          <span className="text-slate-400 text-xs font-mono">Project #72</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-sans leading-[1.08]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-sky-300">
            {VIRELIS_METADATA.headline}
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 font-light"
        >
          {VIRELIS_METADATA.heroDescription}
        </motion.p>

        {/* Interactive Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
        >
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 active:scale-[0.98]"
          >
            <span>Explore Diagnostics</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={onWorkflowClick}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all duration-200 backdrop-blur-sm active:scale-[0.98]"
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>View the Diagnostic Flow</span>
          </button>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg bg-transparent hover:bg-slate-800/40 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            <span>Inquire Platform</span>
          </button>
        </motion.div>

        {/* Conceptual Floating Diagnostic Telemetry Ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl rounded-xl bg-slate-950/80 border border-slate-800 p-3.5 sm:p-4 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5 mb-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span className="text-slate-200 font-semibold">DIAGNOSTIC OPERATIONS — SIMULATION</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">DECISION SUPPORT ENGINE v4.2</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400">LAB & PACS PIPELINE ACTIVE</span>
            </div>
          </div>

          {/* 4 Micro Live Telemetry Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-left font-mono">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Active Cases</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                420 <span className="text-xs text-sky-400 font-normal">Patients</span>
              </div>
              <div className="text-[10px] text-emerald-400">● 100% Traceability</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">STAT Turnaround</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                18.4 <span className="text-xs text-sky-400 font-normal">min</span>
              </div>
              <div className="text-[10px] text-slate-400">-45% vs Baseline</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Imaging Volume</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                108 <span className="text-xs text-indigo-400 font-normal">Studies</span>
              </div>
              <div className="text-[10px] text-emerald-400">DICOM Web Streaming</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">QC Verification</div>
              <div className="text-base sm:text-lg font-bold text-sky-400 flex items-baseline gap-1">
                99.96 <span className="text-xs text-slate-300 font-normal">%</span>
              </div>
              <div className="text-[10px] text-teal-300">Westgard Rules Pass</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll anchor indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-1 text-slate-500 text-[11px] font-mono"
        >
          <span>EXPLORE DIAGNOSTIC PIPELINE</span>
          <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
