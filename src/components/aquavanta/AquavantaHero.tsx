'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Activity, ArrowRight, Shield, Layers, ShieldCheck, ChevronDown, Terminal } from 'lucide-react';
import { AQUAVANTA_METADATA } from '@/data/aquavantaData';

interface AquavantaHeroProps {
  onExploreClick?: () => void;
  onArchitectureClick?: () => void;
  onOpenModal?: () => void;
}

export function AquavantaHero({
  onExploreClick,
  onArchitectureClick,
  onOpenModal
}: AquavantaHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Abstract smart water pipeline and hydraulic flow canvas
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

    // Grid nodes representing water junctions, reservoirs, treatment nodes
    const nodeCount = 24;
    const nodes: Array<{
      x: number;
      y: number;
      radius: number;
      pulse: number;
      label: string;
      isHub: boolean;
    }> = [];

    const labels = ['SWRO-01', 'RES-MARMOOM', 'DIST-04', 'DMA-MARINA', 'PUMP-VFD', 'VALVE-PRV', 'SENS-A09'];

    for (let i = 0; i < nodeCount; i++) {
      const isHub = i < 6;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isHub ? 4.5 : 2.2,
        pulse: Math.random() * Math.PI * 2,
        label: labels[i % labels.length],
        isHub
      });
    }

    // Water flow particles traveling along pipeline vectors
    const flowParticles: Array<{
      from: number;
      to: number;
      progress: number;
      speed: number;
      color: string;
    }> = [];

    const spawnFlow = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      flowParticles.push({
        from,
        to,
        progress: 0,
        speed: 0.006 + Math.random() * 0.009,
        color: Math.random() > 0.5 ? '#06B6D4' : '#38BDF8'
      });
    };

    let tick = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep water radial backdrop
      const radialGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        40,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.75
      );
      radialGrad.addColorStop(0, 'rgba(8, 28, 54, 0.45)');
      radialGrad.addColorStop(0.6, 'rgba(4, 14, 28, 0.25)');
      radialGrad.addColorStop(1, 'rgba(2, 6, 15, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Subterranean fine piping mesh
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.pulse += 0.03;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            const alpha = (1 - dist / 220) * 0.22;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = dist < 120 ? 1.2 : 0.6;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Spawn flow packets
      tick++;
      if (tick % 35 === 0 && flowParticles.length < 20) {
        spawnFlow();
      }

      // Draw water flow particles
      for (let p = flowParticles.length - 1; p >= 0; p--) {
        const flow = flowParticles[p];
        flow.progress += flow.speed;

        const fromNode = nodes[flow.from];
        const toNode = nodes[flow.to];
        if (!fromNode || !toNode) {
          flowParticles.splice(p, 1);
          continue;
        }

        const curX = fromNode.x + (toNode.x - fromNode.x) * flow.progress;
        const curY = fromNode.y + (toNode.y - fromNode.y) * flow.progress;

        ctx.fillStyle = flow.color;
        ctx.shadowColor = flow.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (flow.progress >= 1) {
          flowParticles.splice(p, 1);
        }
      }

      // Draw junction nodes & reservoir beacons
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulseFactor = Math.sin(n.pulse) * 0.8;
        const r = Math.max(1.5, n.radius + pulseFactor * 0.8);

        if (n.isHub) {
          const aura = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
          aura.addColorStop(0, 'rgba(6, 182, 212, 0.4)');
          aura.addColorStop(1, 'rgba(6, 182, 212, 0)');
          ctx.fillStyle = aura;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = n.isHub ? '#06B6D4' : 'rgba(148, 163, 184, 0.7)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (n.isHub) {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
          ctx.font = '9px monospace';
          ctx.fillText(n.label, n.x + 8, n.y + 3);
        }
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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#020713] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-cyan-950/50">
      {/* Background hydraulic network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />

      {/* Atmospheric deep water overlay gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#020713] via-[#020713]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020713] to-transparent pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main hero container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Project & Category Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-lg shadow-cyan-950/20"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          <span className="text-[11px] font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            {AQUAVANTA_METADATA.eyebrow}
          </span>
          <span className="text-slate-600 text-xs">•</span>
          <span className="text-slate-400 text-xs font-mono">Project #71</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-sans leading-[1.08]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-cyan-300">
            {AQUAVANTA_METADATA.headline}
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 font-light"
        >
          {AQUAVANTA_METADATA.heroDescription}
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
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/25 active:scale-[0.98]"
          >
            <span>Explore the Network</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={onArchitectureClick}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all duration-200 backdrop-blur-sm active:scale-[0.98]"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>View Infrastructure</span>
          </button>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg bg-transparent hover:bg-slate-800/40 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            <span>Inquire Architecture</span>
          </button>
        </motion.div>

        {/* Conceptual Floating Hydraulic Telemetry Ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl rounded-xl bg-slate-950/80 border border-cyan-900/40 p-3.5 sm:p-4 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5 mb-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="text-slate-200 font-semibold">SMART WATER NETWORK TELEMETRY</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">SIMULATION ENGINE v5.2</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400">HYDRAULIC PRESSURE NOMINAL</span>
            </div>
          </div>

          {/* 4 Micro Live Telemetry Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-left font-mono">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Network Pressure</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                4.15 <span className="text-xs text-cyan-400 font-normal">Bar Avg</span>
              </div>
              <div className="text-[10px] text-emerald-400">● 100% DMA Stability</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Strategic Reserves</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                1,330 <span className="text-xs text-cyan-400 font-normal">ML</span>
              </div>
              <div className="text-[10px] text-slate-400">89.2% Capacity</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Water Purity Index</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                99.8 <span className="text-xs text-teal-400 font-normal">% WHO</span>
              </div>
              <div className="text-[10px] text-emerald-400">Turbidity: 0.12 NTU</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">IoT Sensors</div>
              <div className="text-base sm:text-lg font-bold text-cyan-400 flex items-baseline gap-1">
                24,800 <span className="text-xs text-slate-300 font-normal">Active</span>
              </div>
              <div className="text-[10px] text-cyan-300">Acoustic & Flow Grid</div>
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
          <span>EXPLORE WATER INFRASTRUCTURE</span>
          <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
