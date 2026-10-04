'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, ArrowRight, Sliders, Key, Sparkles, MapPin, Layers, Award, Compass } from 'lucide-react';
import { AURELIA_BRAND } from '@/data/aureliaData';

interface AureliaHeroProps {
  onOpenViewing: () => void;
  onExploreResidences: () => void;
}

export const AureliaHero: React.FC<AureliaHeroProps> = ({ onOpenViewing, onExploreResidences }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Architectural Grid & Blueprint Canvas Animation
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

    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep dark stone gradient
      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.3, 50, width * 0.5, height * 0.5, width * 0.8);
      gradient.addColorStop(0, 'rgba(214, 211, 209, 0.05)');
      gradient.addColorStop(0.5, 'rgba(120, 113, 108, 0.02)');
      gradient.addColorStop(1, 'rgba(9, 12, 14, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Architectural Blueprint Grid Lines
      ctx.strokeStyle = 'rgba(214, 211, 209, 0.04)';
      ctx.lineWidth = 1;

      const gridSize = 60;
      offset = (offset + 0.2) % gridSize;

      for (let x = offset; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = offset; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Accent measurement nodes
      ctx.fillStyle = 'rgba(214, 211, 209, 0.2)';
      for (let x = offset; x < width; x += gridSize * 3) {
        for (let y = offset; y < height; y += gridSize * 3) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fill();
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
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#090C0E] border-b border-stone-800">
      {/* Background Architectural Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-stone-500/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Live Private Desk Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 p-3 rounded-2xl bg-[#13191D]/80 border border-stone-700/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-300"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-stone-300" />
            </span>
            <span className="font-bold text-white uppercase tracking-wider">
              DIFC GATE VILLAGE 3 • LEVEL 7 PRIVATE GALLERY
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:inline text-stone-400">RERA Master Developer License #8812</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-stone-300" />
              <span>Active Portfolio: <strong className="text-white">AED 1.8B+ BUA</strong></span>
            </div>
            <div className="hidden md:inline-block px-2 py-0.5 rounded bg-stone-200/10 border border-stone-400/30 text-stone-200 font-bold">
              100% FREEHOLD TITLE DEEDS
            </div>
          </div>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-500/10 border border-stone-500/40 text-stone-300 text-xs font-mono font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4 text-stone-300" />
              <span>Ultra-Luxury Property Developer & Private Residence Atelier</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] font-serif">
              PRIVATE ADDRESSES. <br />
              <span className="bg-gradient-to-r from-stone-100 via-stone-300 to-stone-500 bg-clip-text text-transparent">
                BUILT WITHOUT COMPROMISE.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl font-sans">
              Aurelia Estates crafts bespoke private mansions, waterfront compounds, and trophy sky penthouses across Palm Jumeirah, Emirates Hills, and Saadiyat Island. Complete architectural mastery, Italian marble craftsmanship, and 100% DLD escrow protection.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onExploreResidences}
                className="px-8 py-4 rounded-2xl bg-stone-200 hover:bg-white text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(214,211,209,0.35)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>EXPLORE 12 SIGNATURE ESTATES</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#calc-section"
                className="px-8 py-4 rounded-2xl bg-[#13191D] hover:bg-[#1A2228] border border-stone-600 text-stone-200 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-lg hover:border-stone-400 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-stone-300" />
                <span>CAPITAL CALCULATOR (AED)</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">AED 1.8B+</span>
                <span className="text-xs text-gray-400 font-mono">Active Development BUA</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">12 Estates</span>
                <span className="text-xs text-gray-400 font-mono">Trophy UAE Residences</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">10-Yr Warranty</span>
                <span className="text-xs text-gray-400 font-mono">Structural & MEP Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Architectural Flagship Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-stone-500/30 via-stone-700/15 to-transparent border border-stone-500/40 shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black group">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=85"
                  alt="Aurelia Palm Waterfront Estate"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090C0E] via-transparent to-black/30" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/75 border border-stone-400 text-stone-300 font-mono text-[11px] font-bold tracking-wider backdrop-blur-md">
                    FLAGSHIP • PALM JUMEIRAH FROND N
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-mono text-[10px] font-bold backdrop-blur-md">
                    READY FOR HANDOVER
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090C0E]/90 border border-stone-600 backdrop-blur-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold font-serif text-white">
                        Aurelia Palm Waterfront Estate
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-400 font-bold">
                        AED 145,000,000 • 23,680 sq ft BUA
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={onOpenViewing}
                      className="px-3 py-2 rounded-lg bg-stone-200 hover:bg-white text-black font-mono text-xs font-bold transition-all cursor-pointer"
                    >
                      VIEWING →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
