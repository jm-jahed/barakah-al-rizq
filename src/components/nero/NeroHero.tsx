'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Anchor, Compass, ShieldCheck, ArrowRight, Waves, Wind, Navigation, Sparkles, Phone, MessageSquare, Award } from 'lucide-react';
import { NERO_BRAND, LIVE_WEATHER_HUD } from '@/data/neroData';

interface NeroHeroProps {
  onOpenBooking: () => void;
  onSelectVessel: (vesselId: string) => void;
}

export const NeroHero: React.FC<NeroHeroProps> = ({ onOpenBooking, onSelectVessel }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTab, setActiveTab] = useState<'sovereign' | 'majesty' | 'aura'>('sovereign');

  // Interactive Radar and Water Wake Particle Canvas
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

    // Wave & Wake particles
    const particles: { x: number; y: number; speed: number; radius: number; alpha: number; angle: number }[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.3 + Math.random() * 0.7,
        radius: 1 + Math.random() * 2.5,
        alpha: 0.1 + Math.random() * 0.4,
        angle: Math.random() * Math.PI * 2,
      });
    }

    let radarAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep oceanic gradient base
      const gradient = ctx.createRadialGradient(width * 0.5, height * 0.4, 50, width * 0.5, height * 0.5, width * 0.8);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.08)');
      gradient.addColorStop(0.5, 'rgba(14, 116, 144, 0.03)');
      gradient.addColorStop(1, 'rgba(4, 8, 15, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Radar rings in the background
      const centerX = width * 0.82;
      const centerY = height * 0.35;
      const maxRadius = Math.min(width, height) * 0.45;

      ctx.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      ctx.lineWidth = 1;
      for (let r = 40; r < maxRadius; r += 50) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Radar sweep line
      radarAngle += 0.015;
      const sweepX = centerX + Math.cos(radarAngle) * maxRadius;
      const sweepY = centerY + Math.sin(radarAngle) * maxRadius;

      const sweepGrad = ctx.createLinearGradient(centerX, centerY, sweepX, sweepY);
      sweepGrad.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
      sweepGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.strokeStyle = sweepGrad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Floating marine wake particles
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += Math.sin(p.angle) * 0.4;
        p.angle += 0.02;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
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
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#030712] border-b border-cyan-500/20">
      {/* Background Interactive Radar & Wake Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-700/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Live Marine HUD Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 p-3 rounded-2xl bg-[#0B1528]/80 border border-cyan-500/30 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-cyan-300"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="font-bold text-white uppercase tracking-wider">DUBAI HARBOUR MARINA • BERTH A-14</span>
            <span className="hidden sm:inline text-cyan-500/50">|</span>
            <span className="hidden sm:inline text-cyan-200">25.0924° N, 55.1438° E</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-300">
            <div className="flex items-center gap-1.5">
              <Wind className="w-3.5 h-3.5 text-cyan-400" />
              <span>{LIVE_WEATHER_HUD.windSpeedKnots} Knots {LIVE_WEATHER_HUD.windDirection}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Waves className="w-3.5 h-3.5 text-cyan-400" />
              <span>Wave: {LIVE_WEATHER_HUD.waveHeightMeters}m ({LIVE_WEATHER_HUD.tideState})</span>
            </div>
            <div className="hidden md:inline-block px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
              {LIVE_WEATHER_HUD.coastGuardClearance}
            </div>
          </div>
        </motion.div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>DMCA Licensed Commercial Charter & MYBA Corporate Member</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] font-serif">
              Sovereign Marine <br />
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-cyan-500 bg-clip-text text-transparent">
                Superyacht Luxury.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl font-sans">
              Dubai Harbour and Abu Dhabi Yas Marina’s premier superyacht fleet. Bespoke Arabian Gulf island passages, Mediterranean summer seasons, helipad-equipped mega-yachts, and silver-service 3-star Michelin maritime gastronomy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#charter-calc"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-black font-extrabold font-mono text-xs uppercase tracking-wider transition-all shadow-[0_0_30px_rgba(6,182,212,0.45)] hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
              >
                <Anchor className="w-4 h-4" />
                <span>CALCULATE CHARTER COST (AED)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-2xl bg-[#0F1E38] hover:bg-[#162B4E] border border-cyan-500/40 text-cyan-200 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-lg hover:border-cyan-400 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>RESERVE VIP CHARTER</span>
              </button>
            </div>

            {/* Key Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">24 Yachts</span>
                <span className="text-xs text-gray-400 font-mono">Managed Superyacht Fleet</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">240 Feet</span>
                <span className="text-xs text-gray-400 font-mono">Flagship Mega-Yacht Length</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono block">100% Custom</span>
                <span className="text-xs text-gray-400 font-mono">Arabian & Indian Ocean Routes</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Flagship Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-cyan-500/30 via-blue-600/20 to-transparent border border-cyan-500/40 shadow-2xl backdrop-blur-xl">
              {/* Vessel Image Box */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black group">
                <img
                  src={
                    activeTab === 'sovereign'
                      ? 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1000&q=85'
                      : activeTab === 'majesty'
                      ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85'
                      : 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1000&q=85'
                  }
                  alt="NERO Superyacht"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/75 border border-cyan-500/40 text-cyan-300 font-mono text-[11px] font-bold tracking-wider backdrop-blur-md">
                    {activeTab === 'sovereign'
                      ? '185 FT • BENETTI CUSTOM'
                      : activeTab === 'majesty'
                      ? '240 FT • GULF CRAFT FLAGSHIP'
                      : '150 FT • CUSTOM LINE'}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 font-mono text-[10px] font-bold backdrop-blur-md">
                    AVAILABLE IN DUBAI
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#040A17]/90 border border-cyan-500/30 backdrop-blur-md space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold font-serif text-white">
                        {activeTab === 'sovereign'
                          ? 'M/Y NERO SOVEREIGN'
                          : activeTab === 'majesty'
                          ? 'M/Y MAJESTY REGALIA'
                          : 'M/Y AURA HORIZON'}
                      </h4>
                      <p className="text-[11px] font-mono text-cyan-300">
                        {activeTab === 'sovereign'
                          ? 'From AED 110,000 / day • 16 Crew'
                          : activeTab === 'majesty'
                          ? 'From AED 145,000 / day • 22 Crew'
                          : 'From AED 82,000 / day • 11 Crew'}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onSelectVessel(
                          activeTab === 'sovereign'
                            ? 'nero-sovereign'
                            : activeTab === 'majesty'
                            ? 'majesty-regalia'
                            : 'aura-horizon'
                        )
                      }
                      className="px-3 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all cursor-pointer"
                    >
                      INSPECT →
                    </button>
                  </div>
                </div>
              </div>

              {/* Vessel Selector Tabs */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { id: 'sovereign', name: '185ft Sovereign' },
                  { id: 'majesty', name: '240ft Regalia' },
                  { id: 'aura', name: '150ft Horizon' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTab(t.id as any)}
                    className={`py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                      activeTab === t.id
                        ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                        : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
