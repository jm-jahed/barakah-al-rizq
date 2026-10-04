'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Layers, Shield, Activity, ArrowRight, Terminal, Radio, ChevronDown } from 'lucide-react';
import { STRATOSYN_METADATA } from '@/data/stratosynData';

interface StratosynHeroProps {
  onExploreClick?: () => void;
  onArchitectureClick?: () => void;
  onOpenModal?: () => void;
}

export function StratosynHero({
  onExploreClick,
  onArchitectureClick,
  onOpenModal
}: StratosynHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSimulationTick, setActiveSimulationTick] = useState(0);

  // High-frequency simulation tick for hero status telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSimulationTick((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Abstract global computational network canvas animation
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

    // Compute nodes distributed across canvas representing global mesh
    const nodeCount = 28;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      pulse: number;
      region: string;
      isCore: boolean;
    }> = [];

    const regionNames = ['DXB-01', 'FRA-01', 'LON-01', 'SIN-01', 'NYC-01', 'TYO-01', 'SYD-01'];

    for (let i = 0; i < nodeCount; i++) {
      const isCore = i < 7;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: isCore ? 3.5 : 1.8 + Math.random() * 1.2,
        baseRadius: isCore ? 3.5 : 1.8,
        pulse: Math.random() * Math.PI * 2,
        region: regionNames[i % regionNames.length],
        isCore
      });
    }

    // Packet transmission particles moving along network edges
    const packets: Array<{
      from: number;
      to: number;
      progress: number;
      speed: number;
      color: string;
    }> = [];

    const spawnPacket = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      packets.push({
        from,
        to,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: Math.random() > 0.4 ? '#38BDF8' : '#818CF8'
      });
    };

    let packetInterval = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep atmospheric background glow
      const radialGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        50,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.75
      );
      radialGrad.addColorStop(0, 'rgba(14, 25, 48, 0.45)');
      radialGrad.addColorStop(0.5, 'rgba(9, 15, 30, 0.25)');
      radialGrad.addColorStop(1, 'rgba(4, 6, 12, 0)');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Fine grid coordinate dots
      ctx.fillStyle = 'rgba(56, 189, 248, 0.035)';
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // Update and draw node connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;
        n1.pulse += 0.03;

        // Bounce gently off boundaries
        if (n1.x < 30 || n1.x > width - 30) n1.vx *= -1;
        if (n1.y < 30 || n1.y > height - 30) n1.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = dist < 100 ? 1 : 0.6;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Spawn packets periodically
      packetInterval++;
      if (packetInterval % 40 === 0 && packets.length < 16) {
        spawnPacket();
      }

      // Render moving packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        const fromNode = nodes[pkt.from];
        const toNode = nodes[pkt.to];
        if (!fromNode || !toNode) {
          packets.splice(p, 1);
          continue;
        }

        const curX = fromNode.x + (toNode.x - fromNode.x) * pkt.progress;
        const curY = fromNode.y + (toNode.y - fromNode.y) * pkt.progress;

        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(curX, curY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulseFactor = Math.sin(n.pulse) * 0.8;
        const r = Math.max(1, n.baseRadius + (n.isCore ? pulseFactor * 1.5 : pulseFactor * 0.5));

        // Core node atmospheric outer aura
        if (n.isCore) {
          const auraGrad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4.5);
          auraGrad.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
          auraGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
          ctx.fillStyle = auraGrad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 4.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Inner solid node
        ctx.fillStyle = n.isCore ? '#38BDF8' : 'rgba(148, 163, 184, 0.75)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Node label for core hubs
        if (n.isCore) {
          ctx.fillStyle = 'rgba(148, 163, 184, 0.65)';
          ctx.font = '9px monospace';
          ctx.fillText(n.region, n.x + 8, n.y + 3);
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
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#05070D] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      {/* Background canvas visualization */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Atmospheric lighting overlay gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05070D] via-[#05070D]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#05070D] to-transparent pointer-events-none" />
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
            {STRATOSYN_METADATA.eyebrow}
          </span>
          <span className="text-slate-600 text-xs">•</span>
          <span className="text-slate-400 text-xs font-mono">Project #70</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 font-sans leading-[1.08]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            {STRATOSYN_METADATA.headline}
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8 font-light"
        >
          {STRATOSYN_METADATA.heroDescription}
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
            className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35 active:scale-[0.98]"
          >
            <span>Explore Infrastructure</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={onArchitectureClick}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 font-medium text-sm transition-all duration-200 backdrop-blur-sm active:scale-[0.98]"
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>View Architecture</span>
          </button>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg bg-transparent hover:bg-slate-800/40 text-slate-400 hover:text-slate-200 text-xs font-mono transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            <span>Dispatch Quote</span>
          </button>
        </motion.div>

        {/* Conceptual Simulation Floating Telemetry Ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl rounded-xl bg-slate-950/70 border border-slate-800/80 p-3.5 sm:p-4 backdrop-blur-md shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5 mb-3 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span className="text-slate-300 font-semibold">LIVE GLOBAL MESH TELEMETRY</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-500">SIMULATION ENGINE v4.8</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400">7 FABRICS SYNCHRONIZED</span>
            </div>
          </div>

          {/* 4 Micro Live Telemetry Tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-left font-mono">
            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Throughput</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                142.8 <span className="text-xs text-sky-400 font-normal">Tbps</span>
              </div>
              <div className="text-[10px] text-emerald-400">● 100% Backbone Capacity</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Ingest Velocity</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                4.82 <span className="text-xs text-sky-400 font-normal">M req/s</span>
              </div>
              <div className="text-[10px] text-slate-400">P99: 4.2ms Avg</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Active Pods</div>
              <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                48,290 <span className="text-xs text-indigo-400 font-normal">OCI</span>
              </div>
              <div className="text-[10px] text-emerald-400">1,544 Bare-Metal Nodes</div>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/50">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">UAE Sovereign Hub</div>
              <div className="text-base sm:text-lg font-bold text-sky-400 flex items-baseline gap-1">
                2.1 <span className="text-xs text-slate-300 font-normal">ms</span>
              </div>
              <div className="text-[10px] text-sky-300">ME-DXB-01 Enclave</div>
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
          <span>EXPLORE DISTRIBUTED FABRIC</span>
          <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
