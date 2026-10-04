'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useCanvasObserver } from '@/lib/useCanvasObserver';

interface PerformanceCore3DProps {
  activeSector: string;
  className?: string;
}

export const PerformanceCore3D: React.FC<PerformanceCore3DProps> = ({
  activeSector,
  className = '',
}) => {
  const { containerRef, canvasRef, isVisible, dpr } = useCanvasObserver({
    maxMobileDpr: 1.5,
    maxDesktopDpr: 2.0,
  });
  const shouldReduceMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Handle pointer tracking for subtle interactive tilt
  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMouseOffset({ x: nx, y: ny });
  };

  const handlePointerLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    let ringAngle1 = 0;
    let ringAngle2 = 0;
    let ringAngle3 = 0;

    let currentTiltX = 0;
    let currentTiltY = 0;

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = Math.min(width, height) * 0.22;

      // Smooth interpolation for mouse follow
      currentTiltX += (mouseOffset.x * 0.25 - currentTiltX) * 0.08;
      currentTiltY += (mouseOffset.y * 0.25 - currentTiltY) * 0.08;

      if (!shouldReduceMotion) {
        angle += 0.008;
        ringAngle1 += 0.012;
        ringAngle2 -= 0.009;
        ringAngle3 += 0.006;
      }

      // 1. Subtle Outer Holographic Ambience
      const ambientGlow = ctx.createRadialGradient(cx, cy, baseRadius * 0.4, cx, cy, baseRadius * 1.8);
      ambientGlow.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
      ambientGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.03)');
      ambientGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.8, 0, Math.PI * 2);
      ctx.fill();

      // 2. Mathematical 3D Sphere Wireframe Latitudes & Longitudes
      const numMeridians = 8;
      const numParallels = 6;

      ctx.save();
      ctx.translate(cx, cy);

      // Draw Parallels (Latitudes)
      for (let i = 1; i < numParallels; i++) {
        const lat = (i / numParallels) * Math.PI - Math.PI / 2;
        const rParallel = baseRadius * Math.cos(lat);
        const yParallel = baseRadius * Math.sin(lat) + currentTiltY * 20;

        ctx.beginPath();
        ctx.ellipse(0, yParallel, rParallel, rParallel * 0.35 + Math.abs(currentTiltY) * 5, currentTiltX * 0.2, 0, Math.PI * 2);
        ctx.strokeStyle = i === 3 ? 'rgba(16, 185, 129, 0.35)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = i === 3 ? 1.2 : 0.8;
        ctx.stroke();
      }

      // Draw Meridians (Longitudes) rotating
      for (let i = 0; i < numMeridians; i++) {
        const mAngle = angle + (i * Math.PI) / numMeridians;
        const xSpan = baseRadius * Math.sin(mAngle);
        const isFacing = Math.cos(mAngle) > 0;

        ctx.beginPath();
        ctx.ellipse(0, currentTiltY * 10, Math.abs(xSpan), baseRadius, currentTiltX * 0.3, 0, Math.PI * 2);
        ctx.strokeStyle = isFacing 
          ? 'rgba(16, 185, 129, 0.28)' 
          : 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = isFacing ? 1.0 : 0.6;
        ctx.stroke();
      }

      ctx.restore();

      // 3. Central Luminous Performance Core
      const coreGrad = ctx.createRadialGradient(
        cx - baseRadius * 0.25 + currentTiltX * 15,
        cy - baseRadius * 0.25 + currentTiltY * 15,
        baseRadius * 0.1,
        cx,
        cy,
        baseRadius * 0.95
      );
      coreGrad.addColorStop(0, 'rgba(52, 211, 153, 0.95)');
      coreGrad.addColorStop(0.35, 'rgba(16, 185, 129, 0.7)');
      coreGrad.addColorStop(0.7, 'rgba(5, 150, 105, 0.35)');
      coreGrad.addColorStop(1, 'rgba(6, 78, 59, 0.05)');

      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Core Highlight Rim
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(110, 231, 183, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 4. Multiple 3D Orbital Rings with Precision Data Nodes
      // Orbital Ring 1: Primary Core Web Vitals Equator
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ringAngle1 + currentTiltX * 0.5);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 1.35, baseRadius * 0.55, 0.25 + currentTiltY * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.4)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Orbiting Node on Ring 1
      const n1x = Math.cos(ringAngle1 * 1.8) * baseRadius * 1.35;
      const n1y = Math.sin(ringAngle1 * 1.8) * baseRadius * 0.55;
      ctx.beginPath();
      ctx.arc(n1x, n1y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#34d399';
      ctx.shadowColor = '#34d399';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Orbital Ring 2: Polar Architecture Orbit (Golden Accent)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ringAngle2 - 0.7);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 1.55, baseRadius * 0.45, -0.45 + currentTiltX * 0.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.35)';
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // Orbiting Node on Ring 2
      const n2x = Math.cos(ringAngle2 * 1.5) * baseRadius * 1.55;
      const n2y = Math.sin(ringAngle2 * 1.5) * baseRadius * 0.45;
      ctx.beginPath();
      ctx.arc(n2x, n2y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.restore();

      // Orbital Ring 3: Outer Horizon Ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ringAngle3 + 0.9);
      ctx.beginPath();
      ctx.ellipse(0, 0, baseRadius * 1.75, baseRadius * 0.7, 0.15, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();

      // 5. Four Cardinal Performance Vector Markers
      const labels = [
        { name: 'Core Web Vitals', angle: 0, color: '#34d399' },
        { name: 'Accessibility AA', angle: Math.PI / 2, color: '#60a5fa' },
        { name: 'Technical SEO', angle: Math.PI, color: '#fbbf24' },
        { name: 'Best Practices', angle: (3 * Math.PI) / 2, color: '#a78bfa' },
      ];

      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      labels.forEach((lbl, idx) => {
        const markerDistance = baseRadius * 1.55;
        const currentMarkerAngle = lbl.angle + angle * 0.4;
        const mx = cx + Math.cos(currentMarkerAngle) * markerDistance;
        const my = cy + Math.sin(currentMarkerAngle) * (markerDistance * 0.55);

        // Marker Point
        ctx.beginPath();
        ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = lbl.color;
        ctx.fill();

        // Connective Reticle Ray
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(mx, my);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Small Badge Background
        const textWidth = ctx.measureText(lbl.name).width;
        ctx.fillStyle = 'rgba(7, 9, 14, 0.85)';
        ctx.fillRect(mx - textWidth / 2 - 4, my + 8, textWidth + 8, 14);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(mx - textWidth / 2 - 4, my + 8, textWidth + 8, 14);

        // Label Text
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(lbl.name, mx, my + 15);
      });

      // 6. Central Telemetry Readout in Orb Heart
      ctx.font = 'bold 11px "JetBrains Mono", monospace';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText('NEXT.JS 16', cx, cy - 6);

      ctx.font = '8px "JetBrains Mono", monospace';
      ctx.fillStyle = '#6ee7b7';
      ctx.fillText('EDGE RUNTIME', cx, cy + 8);

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isVisible, dpr, shouldReduceMotion, mouseOffset, activeSector]);

  return (
    <div ref={containerRef} className={`relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-3xl bg-[#090C12] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center ${className}`}>
      {/* Background Micro-Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating Header Tag */}
      <div className="absolute top-4 left-4 sm:left-6 flex items-center gap-2 z-10 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
          3D Core Architecture Observatory
        </span>
      </div>

      {/* Floating Status Corner */}
      <div className="absolute top-4 right-4 sm:right-6 text-right z-10 pointer-events-none">
        <span className="text-[10px] font-mono text-emerald-400 font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
          Active Sector: {activeSector}
        </span>
      </div>

      {/* Canvas 3D Viewport */}
      <canvas
        ref={canvasRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="w-full h-full cursor-crosshair relative z-0 touch-none"
      />

      {/* Bottom Telemetry Legend */}
      <div className="absolute bottom-3 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none text-[9px] font-mono text-slate-400 border-t border-white/5 pt-2">
        <span className="hidden sm:inline">Hover/Touch to interact with orbital tilt</span>
        <span className="text-emerald-300">★ 4-Pillar Performance Core • Sub-Second Rendering</span>
      </div>
    </div>
  );
};
