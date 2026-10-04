'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, MapPin, Activity, ArrowRight, CheckCircle2, Thermometer, Package, FileText, Clock } from 'lucide-react';
import { MEDIVANTA_METADATA } from '@/data/medivantaData';

interface MedivantaHeroProps {
  onOrderClick?: () => void;
  onTrackClick?: () => void;
  onExploreClick?: () => void;
}

export function MedivantaHero({
  onOrderClick,
  onTrackClick,
  onExploreClick
}: MedivantaHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animated logistics network simulation canvas (flowing delivery nodes, pulses, temperature telemetry vectors)
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

    // Logistics Network Nodes (Hubs, Couriers, Destinations)
    const nodes = Array.from({ length: 24 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: i % 4 === 0 ? 3.5 : 2,
      isHub: i % 6 === 0,
      pulse: Math.random() * Math.PI * 2
    }));

    // Moving delivery packets along routes
    const packets = Array.from({ length: 6 }, () => ({
      fromIdx: Math.floor(Math.random() * nodes.length),
      toIdx: Math.floor(Math.random() * nodes.length),
      progress: Math.random(),
      speed: 0.004 + Math.random() * 0.006
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid
      ctx.strokeStyle = 'rgba(0, 220, 180, 0.03)';
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

      // Update & Draw Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw connections
        nodes.forEach((other) => {
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isHub ? '#10b981' : '#06b6d4';
        ctx.fill();

        // Hub pulse ring
        if (node.isHub) {
          const pulseR = node.radius + Math.sin(node.pulse) * 4 + 4;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseR, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw moving delivery packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.fromIdx = p.toIdx;
          p.toIdx = Math.floor(Math.random() * nodes.length);
        }

        const start = nodes[p.fromIdx];
        const end = nodes[p.toIdx];
        if (start && end) {
          const curX = start.x + (end.x - start.x) * p.progress;
          const curY = start.y + (end.y - start.y) * p.progress;

          ctx.beginPath();
          ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

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
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#020509] border-b border-emerald-950/40 text-slate-100 overflow-hidden pt-24 pb-20">
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0"
      />

      {/* Atmospheric glow overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-950/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-950/15 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-300" />
            {MEDIVANTA_METADATA.eyebrow}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
          >
            Healthcare, Delivered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
              With Precision.
            </span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            {MEDIVANTA_METADATA.heroDescription}
          </motion.p>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <button
              onClick={onOrderClick}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Package className="w-5 h-5 text-slate-950" />
              Order Medicine
              <ArrowRight className="w-4 h-4 text-slate-950 ml-1" />
            </button>

            <button
              onClick={onTrackClick}
              className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 text-slate-200 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              Track Delivery (Live #MV-20481)
            </button>
          </motion.div>

          {/* Micro Trust & Status Pipeline Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-3xl p-4 rounded-2xl bg-gradient-to-r from-[#071018]/90 via-[#040910]/90 to-[#071018]/90 border border-emerald-500/25 backdrop-blur-md shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-300 font-bold">LIVE METRO LOGISTICS</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-400">
                <span>Prescription</span>
                <span className="text-emerald-400">→</span>
                <span>Verification</span>
                <span className="text-emerald-400">→</span>
                <span>Fulfillment</span>
                <span className="text-emerald-400">→</span>
                <span>Doorstep</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Thermometer className="w-3.5 h-3.5" />
                <span>Cold-Chain 2°C – 8°C Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
