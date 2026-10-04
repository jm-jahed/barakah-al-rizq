'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useCanvasObserver } from '@/lib/useCanvasObserver';

interface RadarNode {
  id: string;
  name: string;
  category: string;
  r: number; // normalized radius 0..1
  angle: number; // radians
  color: string;
  status: string;
  pingSpeed: number;
}

const RADAR_NODES: RadarNode[] = [
  { id: 'dxb', name: 'DUBAI CORE', category: 'Primary AZ Edge', r: 0.35, angle: 0.45, color: '#f59e0b', status: '< 12ms', pingSpeed: 1.5 },
  { id: 'auh', name: 'ABU DHABI', category: 'Sovereign Node', r: 0.62, angle: 1.85, color: '#10b981', status: '< 18ms', pingSpeed: 1.2 },
  { id: 'rag', name: 'NEURAL RAG', category: 'OpenAI Cluster', r: 0.82, angle: 3.4, color: '#06b6d4', status: 'Active', pingSpeed: 2.0 },
  { id: 'cdn', name: 'GLOBAL CDN', category: 'Anycast Fabric', r: 0.75, angle: 5.1, color: '#8b5cf6', status: '280 PoPs', pingSpeed: 1.0 },
  { id: 'aed', name: 'AED ENGINE', category: 'Ledger Runtime', r: 0.48, angle: 4.3, color: '#eab308', status: '0.00% err', pingSpeed: 1.8 },
];

export const HeroRadar3D: React.FC = () => {
  const { containerRef, canvasRef, isVisible, isMobile, dpr } = useCanvasObserver({
    maxMobileDpr: 1.5,
    maxDesktopDpr: 2.0,
  });
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNode, setHoveredNode] = useState<RadarNode | null>(null);
  const hoveredNodeRef = useRef<RadarNode | null>(null);
  hoveredNodeRef.current = hoveredNode;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let sweepAngle = 0;
    let time = 0;

    const projectedNodePoints: { node: RadarNode; px: number; py: number; radius: number }[] = [];

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
      const maxRadius = Math.min(width, height) * 0.42;

      if (!shouldReduceMotion) {
        sweepAngle += 0.025;
        time += 0.03;
      }

      // 1. Concentric 3D Depth Rings
      const ringFractions = [0.25, 0.5, 0.75, 1.0];
      ringFractions.forEach((frac, idx) => {
        const r = maxRadius * frac;
        ctx.beginPath();
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, 0.55); // 3D perspective ellipse
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.restore();
        ctx.strokeStyle = idx === 3 ? 'rgba(245, 158, 11, 0.28)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = idx === 3 ? 1.5 : 1;
        ctx.setLineDash(idx % 2 === 1 ? [3, 4] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Crosshair Grid Lines
      ctx.beginPath();
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.55);
      ctx.moveTo(-maxRadius, 0);
      ctx.lineTo(maxRadius, 0);
      ctx.moveTo(0, -maxRadius);
      ctx.lineTo(0, maxRadius);
      ctx.restore();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 3. Sweeping 3D Radar Beam Cone
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, 0.55);
      const sweepGrad = ctx.createConicGradient(sweepAngle, 0, 0);
      sweepGrad.addColorStop(0, 'rgba(245, 158, 11, 0.22)');
      sweepGrad.addColorStop(0.12, 'rgba(245, 158, 11, 0.04)');
      sweepGrad.addColorStop(0.2, 'rgba(245, 158, 11, 0)');
      sweepGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

      ctx.beginPath();
      ctx.arc(0, 0, maxRadius, 0, Math.PI * 2);
      ctx.fillStyle = sweepGrad;
      ctx.fill();
      ctx.restore();

      // 4. Render Radar Nodes in 3D Perspective
      projectedNodePoints.length = 0;
      const currentHovered = hoveredNodeRef.current;

      RADAR_NODES.forEach((node) => {
        const r = node.r * maxRadius;
        const currentAngle = node.angle + (shouldReduceMotion ? 0 : Math.sin(time * 0.2 + node.r) * 0.05);

        const rawX = Math.cos(currentAngle) * r;
        const rawY = Math.sin(currentAngle) * r * 0.55; // 3D flattened perspective

        const px = cx + rawX;
        const py = cy + rawY;

        const isNodeHovered = currentHovered?.id === node.id;
        const hitRadius = 14;
        projectedNodePoints.push({ node, px, py, radius: hitRadius });

        // Signal ping pulse
        const pingT = ((time * node.pingSpeed) % 2) / 2;
        ctx.beginPath();
        ctx.arc(px, py, 4 + pingT * 14, 0, Math.PI * 2);
        ctx.strokeStyle = `${node.color}${Math.floor((1 - pingT) * 200).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Glow
        if (isNodeHovered) {
          ctx.beginPath();
          ctx.arc(px, py, 10, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}33`;
          ctx.fill();
        }

        // Center Node Dot
        ctx.beginPath();
        ctx.arc(px, py, isNodeHovered ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isNodeHovered ? '#FFFFFF' : node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isNodeHovered ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label HUD
        ctx.font = `${isNodeHovered ? 'bold 10px' : '9px'} "JetBrains Mono", monospace`;
        ctx.textAlign = 'center';
        ctx.fillStyle = isNodeHovered ? '#FFFFFF' : 'rgba(226, 232, 240, 0.75)';
        ctx.fillText(node.name, px, py - 8);

        if (isNodeHovered) {
          ctx.font = '8px "JetBrains Mono", monospace';
          ctx.fillStyle = node.color;
          ctx.fillText(`${node.category} • ${node.status}`, px, py + 14);
        }
      });

      // 5. Center Hub Node
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found: RadarNode | null = null;
      for (const pt of projectedNodePoints) {
        const dx = mx - pt.px;
        const dy = my - pt.py;
        if (Math.sqrt(dx * dx + dy * dy) <= pt.radius) {
          found = pt.node;
          break;
        }
      }
      setHoveredNode(found);
    };

    const handleMouseLeave = () => {
      setHoveredNode(null);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, dpr, shouldReduceMotion]);

  return (
    <div ref={containerRef} className="relative w-full h-44 rounded-xl overflow-hidden bg-black/40 border border-white/10 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair touch-none"
      />
      <div className="absolute top-2 left-2 flex items-center gap-1.5 text-[9px] font-mono text-amber-400 bg-black/60 px-2 py-0.5 rounded border border-amber-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
        <span>3D TELEMETRY RADAR</span>
      </div>
      <div className="absolute bottom-2 right-2 text-[9px] font-mono text-slate-400 bg-black/60 px-2 py-0.5 rounded border border-white/10">
        {hoveredNode ? `${hoveredNode.name}: ${hoveredNode.status}` : 'HOVER NODES TO ISOLATE'}
      </div>
    </div>
  );
};

export default HeroRadar3D;

