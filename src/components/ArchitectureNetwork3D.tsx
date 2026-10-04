'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useCanvasObserver } from '@/lib/useCanvasObserver';

export interface ArchNetworkNode {
  id: string;
  name: string;
  shortName: string;
  layer: string;
  ring: number; // 0: Core Architecture, 1: Outer Deployment
  angleOffset: number; // Angular position 0..2PI
  elevation: number;
  color: string;
  speed: number;
  techs: string[];
}

export const ARCH_NODES: ArchNetworkNode[] = [
  // Ring 0: Inner Core Pillars (4 nodes evenly spaced at 90°)
  { id: 'strategy', name: 'STRATEGY', shortName: '01', layer: 'Discovery & Vision', ring: 0, angleOffset: 0, elevation: 16, color: '#f59e0b', speed: 0.004, techs: ['Architecture Blueprints', 'ROI Models'] },
  { id: 'design', name: 'DESIGN', shortName: '02', layer: 'UI/UX & Tokens', ring: 0, angleOffset: Math.PI * 0.5, elevation: -12, color: '#06b6d4', speed: 0.004, techs: ['Figma Tokens', 'Design Systems'] },
  { id: 'engineering', name: 'ENGINEERING', shortName: '03', layer: 'Next.js 16 Core', ring: 0, angleOffset: Math.PI * 1.0, elevation: 18, color: '#8b5cf6', speed: 0.004, techs: ['Turbopack', 'React 19 SSR'] },
  { id: 'ai-systems', name: 'AI SYSTEMS', shortName: '04', layer: 'Autonomous Neural RAG', ring: 0, angleOffset: Math.PI * 1.5, elevation: -14, color: '#10b981', speed: 0.004, techs: ['OpenAI GPT-4o', 'Vector RAG'] },

  // Ring 1: Outer Ecosystem Pillars (4 nodes evenly spaced at 90°, offset by 45°)
  { id: 'data', name: 'DATA', shortName: '05', layer: 'Relational Schemas', ring: 1, angleOffset: Math.PI * 0.25, elevation: 14, color: '#3b82f6', speed: -0.003, techs: ['PostgreSQL', 'Redis Cache'] },
  { id: 'cloud', name: 'CLOUD', shortName: '06', layer: 'Global Edge & UAE Cloud', ring: 1, angleOffset: Math.PI * 0.75, elevation: -16, color: '#ec4899', speed: -0.003, techs: ['Vercel Edge', 'AWS Multi-AZ'] },
  { id: 'automation', name: 'AUTOMATION', shortName: '07', layer: 'B2B Workflow & APIs', ring: 1, angleOffset: Math.PI * 1.25, elevation: 15, color: '#eab308', speed: -0.003, techs: ['Stripe AED', 'WhatsApp Webhooks'] },
  { id: 'digital-products', name: 'DIGITAL PRODUCTS', shortName: '08', layer: 'SaaS & E-Commerce', ring: 1, angleOffset: Math.PI * 1.75, elevation: -15, color: '#14b8a6', speed: -0.003, techs: ['Headless Engines', 'Client Portals'] },
];

const ORBIT_RINGS_3D = [
  { ringIndex: 0, radiusFrac: 0.44, color: 'rgba(245, 158, 11, 0.35)', dash: [4, 6] },
  { ringIndex: 1, radiusFrac: 0.82, color: 'rgba(56, 189, 248, 0.28)', dash: [6, 8] },
];

interface ArchitectureNetwork3DProps {
  selectedNodeId: string;
  onSelectNode: (id: string) => void;
}

export const ArchitectureNetwork3D: React.FC<ArchitectureNetwork3DProps> = ({ selectedNodeId, onSelectNode }) => {
  const { containerRef, canvasRef, isVisible, dpr } = useCanvasObserver({
    maxMobileDpr: 1.5,
    maxDesktopDpr: 2.0,
  });
  const shouldReduceMotion = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const hoveredIdRef = useRef<string | null>(null);
  hoveredIdRef.current = hoveredId;

  const selectedNodeIdRef = useRef(selectedNodeId);
  selectedNodeIdRef.current = selectedNodeId;

  const onSelectNodeRef = useRef(onSelectNode);
  onSelectNodeRef.current = onSelectNode;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;
    let currentCamAngle = 0;
    const projectedPoints: { node: ArchNetworkNode; px: number; py: number; radius: number }[] = [];

    // Mouse tilt tracking
    let mouseTiltX = 0;
    let mouseTiltY = 0;

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
      
      // Expansive panoramic 3D radius spreading across the full width & height
      const spanX = width * 0.44;
      const spanY = height * 0.38 + mouseTiltY * 10;

      if (!shouldReduceMotion) {
        time += 0.015;
        currentCamAngle += 0.0025;
      }

      // ─── 01. 3D Holographic Spider Grid Floor ─────────────────────────────
      const gridRays = 16;
      for (let r = 0; r < gridRays; r++) {
        const rayAngle = (r / gridRays) * Math.PI * 2 + currentCamAngle * 0.3;
        const rx = cx + Math.cos(rayAngle) * spanX * 0.96;
        const ry = cy + Math.sin(rayAngle) * spanY * 0.96;

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(rx, ry);
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.05)';
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // ─── 02. 3D Concentric Holographic Orbit Tracks ───────────────────────
      ORBIT_RINGS_3D.forEach((ring) => {
        const ringRx = spanX * ring.radiusFrac;
        const ringRy = spanY * ring.radiusFrac;

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, ringRx, ringRy, 0, 0, Math.PI * 2);
        ctx.restore();

        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.2;
        ctx.setLineDash(ring.dash);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // ─── 03. Calculate 3D Projected Coordinates & Depth Sorting ───────────
      projectedPoints.length = 0;
      const currentHovered = hoveredIdRef.current;
      const currentSelected = selectedNodeIdRef.current;

      const nodes3D = ARCH_NODES.map((node, idx) => {
        const ringCfg = ORBIT_RINGS_3D[node.ring];
        const orbitRx = spanX * ringCfg.radiusFrac;
        const orbitRy = spanY * ringCfg.radiusFrac;
        const angle = node.angleOffset + currentCamAngle + (shouldReduceMotion ? 0 : Math.sin(time * 0.5 + idx) * 0.05);

        // 3D Spatial coordinates
        const x3D = Math.cos(angle) * orbitRx;
        const z3D = Math.sin(angle) * orbitRy; // Depth Axis
        const yElev = node.elevation * 0.6 + (shouldReduceMotion ? 0 : Math.sin(time * 2 + idx * 1.5) * 4);

        // Panoramic isometric projection
        const px = cx + x3D;
        const py = cy + z3D - yElev;

        // Depth Normalization (0.0 = Far/Rear, 1.0 = Near/Foreground)
        const depthNorm = (z3D + orbitRy) / (orbitRy * 2);
        const scale = 0.82 + depthNorm * 0.4;
        const baseR = node.ring === 0 ? 17 : 15;
        const radius = baseR * scale;

        return { node, px, py, z3D, depthNorm, scale, radius, angle, x3D };
      }).sort((a, b) => a.z3D - b.z3D); // Strict Back-to-Front Depth Sort

      // ─── 04. Render 3D Synaptic Filaments & Traveling Photons ─────────────
      nodes3D.forEach(({ node, px, py, depthNorm }) => {
        const isSelected = currentSelected === node.id;
        const isHovered = currentHovered === node.id;

        if (isSelected || isHovered) {
          // Intense Gold/Cyan Synaptic Laser
          const laserGrad = ctx.createLinearGradient(cx, cy, px, py);
          laserGrad.addColorStop(0, 'rgba(245, 158, 11, 0.95)');
          laserGrad.addColorStop(1, `${node.color}`);

          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = laserGrad;
          ctx.lineWidth = 2.8;
          ctx.shadowColor = '#F59E0B';
          ctx.shadowBlur = 18;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Traveling Gold Photon Pulse along line
          if (!shouldReduceMotion) {
            const photonT = (time * 1.2) % 1;
            const photonX = cx + (px - cx) * photonT;
            const photonY = cy + (py - cy) * photonT;

            ctx.beginPath();
            ctx.arc(photonX, photonY, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#FFFFFF';
            ctx.shadowColor = '#F59E0B';
            ctx.shadowBlur = 14;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        } else {
          // Subtle Ambient Fiber Connection
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(px, py);
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.05 + depthNorm * 0.08})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      });

      // ─── 05. Central Quantum Studio Core (WS.AE Hub) ─────────────────────
      const coreR = Math.max(28, spanX * 0.17);

      // Core Ambient Pulsing Radiant Bloom
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 2.5);
      coreGlow.addColorStop(0, 'rgba(245, 158, 11, 0.55)');
      coreGlow.addColorStop(0.5, 'rgba(245, 158, 11, 0.18)');
      coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(cx, cy, coreR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Rotating Segmented Compass Ring around core
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.8);
      ctx.beginPath();
      ctx.arc(0, 0, coreR * 1.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 8]);
      ctx.stroke();
      ctx.restore();

      // Central Glass Orb Body
      ctx.beginPath();
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
      ctx.fillStyle = '#0E0C09';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Central Monogram Typography
      ctx.font = 'bold 9px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#F59E0B';
      ctx.fillText('WS.AE', cx, cy - 3);

      ctx.font = 'bold 6.5px "JetBrains Mono", monospace';
      ctx.fillStyle = '#E2E8F0';
      ctx.fillText('STUDIO CORE', cx, cy + 6);

      // ─── 06. Draw 3D Glassmorphic Nodes with Collision-Safe Labels ────────
      nodes3D.forEach(({ node, px, py, radius, scale, depthNorm, z3D }) => {
        const isSelected = currentSelected === node.id;
        const isHovered = currentHovered === node.id;
        projectedPoints.push({ node, px, py, radius: radius + 10 });

        // Radiant Specular Bloom on Hover/Selected
        if (isSelected || isHovered) {
          const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, radius * 2.6);
          glowGrad.addColorStop(0, `${node.color}cc`);
          glowGrad.addColorStop(0.6, `${node.color}33`);
          glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.beginPath();
          ctx.arc(px, py, radius * 2.6, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }

        // Circular 3D Glass Orb Pad
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = isSelected
          ? '#F59E0B'
          : isHovered
          ? '#221C16'
          : `rgba(14, 12, 18, ${0.85 + depthNorm * 0.15})`;
        ctx.strokeStyle = isSelected ? '#FFFFFF' : isHovered ? '#F59E0B' : `${node.color}`;
        ctx.lineWidth = isSelected ? 2.5 : isHovered ? 2.2 : 1.4;
        ctx.shadowColor = isSelected || isHovered ? node.color : 'transparent';
        ctx.shadowBlur = isSelected ? 16 : isHovered ? 12 : 0;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Inner Monogram / Number Badge
        ctx.font = `bold ${Math.max(8, 10 * scale)}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = isSelected ? '#000000' : isHovered ? '#FFFFFF' : node.color;
        ctx.fillText(node.shortName, px, py);

        // ─── Floating 3D Monospace Label Pill ────────────────────────────────
        // Position intelligently (above if in top hemisphere, below if in bottom hemisphere)
        const isForeground = z3D > 0;
        const tagY = isForeground ? py + radius + 6 : py - radius - 16;
        const labelText = node.name;

        ctx.font = `bold ${Math.max(8, 9 * scale)}px "JetBrains Mono", monospace`;
        const textW = ctx.measureText(labelText).width;

        // Dark Glassmorphic Pill Background
        ctx.fillStyle = isSelected
          ? 'rgba(245, 158, 11, 0.95)'
          : isHovered
          ? 'rgba(20, 16, 12, 0.95)'
          : `rgba(10, 8, 12, ${0.75 + depthNorm * 0.2})`;
        ctx.strokeStyle = isSelected ? '#FFFFFF' : isHovered ? '#F59E0B' : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = isSelected || isHovered ? 1.2 : 0.8;

        ctx.beginPath();
        ctx.roundRect(px - textW / 2 - 6, tagY, textW + 12, 14, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isSelected ? '#000000' : isHovered ? '#FFFFFF' : `rgba(226, 232, 240, ${0.6 + depthNorm * 0.4})`;
        ctx.fillText(labelText, px, tagY + 7);
      });

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const pt of projectedPoints) {
        const dx = mx - pt.px;
        const dy = my - pt.py;
        if (Math.sqrt(dx * dx + dy * dy) <= pt.radius) {
          onSelectNodeRef.current(pt.node.id);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Mouse tilt offset calculation
      mouseTiltX = (mx / canvas.clientWidth - 0.5) * 2;
      mouseTiltY = (my / canvas.clientHeight - 0.5) * 2;

      let matched: string | null = null;
      for (const pt of projectedPoints) {
        const dx = mx - pt.px;
        const dy = my - pt.py;
        if (Math.sqrt(dx * dx + dy * dy) <= pt.radius) {
          matched = pt.node.id;
          break;
        }
      }
      setHoveredId(matched);
    };

    const handleMouseLeave = () => {
      setHoveredId(null);
      mouseTiltX = 0;
      mouseTiltY = 0;
    };

    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('click', handleCanvasClick);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, dpr, shouldReduceMotion]);

  return (
    <div ref={containerRef} className="relative w-full rounded-3xl bg-[#0B090E]/95 border border-amber-500/25 p-4 sm:p-5 mb-6 shadow-2xl overflow-hidden backdrop-blur-xl">
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.08] text-[11px] font-mono">
        <div className="flex items-center gap-2 text-amber-400">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="font-bold tracking-wider uppercase">3D SYSTEM ARCHITECTURE NETWORK</span>
        </div>
        <span className="text-neutral-400 hidden sm:inline">[CLICK ANY NODE TO INSPECT ARCHITECTURE]</span>
      </div>
      <div className="relative w-full aspect-[16/9] min-h-[300px] sm:min-h-[340px] max-h-[360px] mx-auto flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-pointer touch-none select-none"
          aria-label="3D System Architecture Network"
        />
      </div>
    </div>
  );
};

export default ArchitectureNetwork3D;
