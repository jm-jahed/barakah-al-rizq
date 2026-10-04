'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ShieldCheck, Terminal, ArrowRight, CheckCircle2, Activity, Layers, Server, Play, RotateCcw, Bot } from 'lucide-react';
import { TENSORIS_BRAND, ENTERPRISE_METRICS } from '@/data/tensorisData';

interface TensorisHeroProps {
  onOpenModal: (service?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const TensorisHero: React.FC<TensorisHeroProps> = ({
  onOpenModal,
  onScrollToSection
}) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const samplePrompts = [
    {
      domain: 'Sovereign Treasury / DIFC',
      prompt: 'Synthesize optimal AED/USD FX multi-rail liquidity for 14.8M settlement across ADGM & Central Bank rails with zero-slippage risk.',
      agent: 'KRONOS-Quant',
      latency: '8.4ms',
      tokens: '4,210 tokens/s',
      result: 'Optimal route selected: Abu Dhabi FTS Direct Rail · Liquidity confirmed with 0.00% slippage · AED 142k fee savings generated.'
    },
    {
      domain: 'Logistics / JAFZA Port',
      prompt: 'Predict 72h maritime congestion at Jebel Ali Berth 4; auto-reroute 48 reefer containers via Etihad Rail freight link.',
      agent: 'VECTRA-Route',
      latency: '14.2ms',
      tokens: '3,890 tokens/s',
      result: 'Customs pre-clearance green-flagged with Bayan API · 18 electric freight trucks dispatched · Cold-chain preserved.'
    },
    {
      domain: 'Enterprise Knowledge / Legal',
      prompt: 'Execute cross-subsidiary contract audit across 1,840 GCC joint-venture agreements under UAE Commercial Companies Law 2021.',
      agent: 'AURA-Research',
      latency: '28.0ms',
      tokens: '6,400 tokens/s',
      result: '100% entity-relation graph mapped · Zero regulatory exposure detected · Signed SHA-256 audit ledger generated.'
    }
  ];

  // Interactive Neural Particle Grid Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const nodeCount = Math.min(Math.floor(width / 24), 50);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.2,
      pulse: Math.random() * Math.PI * 2,
      color: Math.random() > 0.4 ? '#06b6d4' : '#3b82f6'
    }));

    let mouse = { x: -1000, y: -1000, radius: 140 };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background neural grid
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse gravity / repulsion
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const cdx = node.x - other.x;
          const cdy = node.y - other.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 130) {
            const alpha = (1 - cdist / 130) * 0.22;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node
        const glow = Math.sin(node.pulse) * 0.5 + 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * glow, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
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
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Simulation sequence trigger
  const runSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);
    setTimeout(() => setSimulationStep(2), 500);
    setTimeout(() => setSimulationStep(3), 1100);
    setTimeout(() => {
      setSimulationStep(4);
      setIsSimulating(false);
    }, 1800);
  };

  const currentPrompt = samplePrompts[activeQueryIndex];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Neural Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Atmospheric Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Subtle Grid Lines */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Eyebrow & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide backdrop-blur-md shadow-lg shadow-cyan-950/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-white">TENSORIS NEURAL OS v4.2</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">UAE Sovereign Cognitive Stack</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:flex items-center gap-4 text-xs font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>DIFC Sovereign Node: <strong className="text-emerald-400">ONLINE (99.999%)</strong></span>
            </div>
            <span className="text-slate-700">•</span>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>P99 Latency: <strong className="text-cyan-300">11.8ms</strong></span>
            </div>
          </motion.div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Vision & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              From Enterprise Complexity to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 drop-shadow-sm">
                Sovereign Intelligence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {TENSORIS_BRAND.positioning}
            </motion.p>

            {/* Core Capability Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 pt-1"
            >
              {[
                { label: 'Autonomous Agent Swarms', icon: Bot },
                { label: 'Sub-12ms Local Inference', icon: Activity },
                { label: 'Hybrid Vector-Graph RAG', icon: Layers },
                { label: 'UAE TDRA Level 3 Compliance', icon: ShieldCheck }
              ].map((pill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300 backdrop-blur-sm hover:border-cyan-500/40 transition-colors"
                >
                  <pill.icon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{pill.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => onOpenModal('Enterprise AI Architecture Consultation')}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 text-slate-950 font-bold text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Deploy Sovereign AI Platform</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onScrollToSection('command-center')}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 backdrop-blur-md"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch Live Command Center</span>
              </button>
            </motion.div>

            {/* Trust Micro-Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% UAE Data Residency</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Hallucination Proofs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Deterministic ERP Execution</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Live Neural Inference Testbench */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-[#050b18]/95 border border-cyan-500/30 p-5 sm:p-6 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-slate-400">tensoris-repl://sovereign-matrix</span>
                </div>

                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  LIVE INFERENCE
                </div>
              </div>

              {/* Interactive Scenario Selector */}
              <div className="space-y-2 mb-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Select Enterprise Mandate:
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {samplePrompts.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveQueryIndex(idx);
                        setSimulationStep(0);
                      }}
                      className={`text-left p-2 rounded-lg text-xs font-mono transition-all ${
                        activeQueryIndex === idx
                          ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 font-semibold'
                          : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="truncate">{p.domain}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Prompt Box */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>INPUT DIRECTIVE:</span>
                  <span className="text-cyan-400">Agent: {currentPrompt.agent}</span>
                </div>
                <p className="text-slate-200 leading-relaxed italic">
                  &ldquo;{currentPrompt.prompt}&rdquo;
                </p>
              </div>

              {/* Execution Action Button */}
              <div className="py-3 flex items-center justify-between gap-3">
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono transition-all disabled:opacity-50 shadow-md shadow-cyan-500/20"
                >
                  {isSimulating ? (
                    <>
                      <Activity className="w-3.5 h-3.5 animate-spin text-slate-950" />
                      <span>SYNTHESIZING NEURAL PATHS...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>EXECUTE INFERENCE ENGINE</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setSimulationStep(0)}
                  title="Reset REPL"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Step-by-Step Simulated Telemetry Display */}
              <div className="space-y-2 font-mono text-[11px] pt-1">
                {simulationStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-cyan-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>[01/03] Routing through Sovereign MoE Cluster (128 Experts)...</span>
                  </motion.div>
                )}

                {simulationStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-emerald-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>[02/03] Hybrid Vector-Graph RAG traversal completed in {currentPrompt.latency}</span>
                  </motion.div>
                )}

                {simulationStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-amber-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                    <span>[03/03] SENTINEL-Risk Guardrail passed (0.00% anomaly score)</span>
                  </motion.div>
                )}

                {simulationStep >= 4 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-1.5 mt-2"
                  >
                    <div className="flex items-center justify-between font-bold text-[10px] text-emerald-400">
                      <span>✓ DETERMINISTIC EXECUTION COMMITTED</span>
                      <span>Speed: {currentPrompt.tokens}</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-normal">
                      {currentPrompt.result}
                    </p>
                  </motion.div>
                ) : (
                  simulationStep === 0 && (
                    <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-900 text-slate-500 text-center">
                      Click &ldquo;Execute Inference Engine&rdquo; to trace real-time cognitive deliberation.
                    </div>
                  )
                )}
              </div>

              {/* Footer Live Metrics */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Hardware: NVIDIA H200 NVLink</span>
                <span className="text-cyan-400">Encrypted: AES-256 GCM</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Hero Metric Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {ENTERPRISE_METRICS.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="text-left space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 tracking-tight font-mono">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 font-sans">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
