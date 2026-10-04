'use client';

import React, { useEffect } from 'react';
import { useCanvasObserver } from '@/lib/useCanvasObserver';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  highlight: boolean;
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export const HeroNeuralCanvas: React.FC = () => {
  const { canvasRef, isVisible, isMobile } = useCanvasObserver({
    maxMobileDpr: 1.0,
    maxDesktopDpr: 1.5,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const nodeCount = isMobile ? 14 : 32;
    const maxDistance = isMobile ? 85 : 125;

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
        highlight: Math.random() > 0.75,
      });
    }

    const pulses: Connection[] = [];
    for (let i = 0; i < (isMobile ? 3 : 8); i++) {
      pulses.push({
        from: Math.floor(Math.random() * nodeCount),
        to: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.004 + Math.random() * 0.007,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove, { passive: true });
      parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Smooth interactive mouse repulsion/attraction field
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160 && dist > 0) {
          const force = (1 - dist / 160) * 0.45;
          node.x += (dx / dist) * force;
          node.y += (dy / dist) * force;

          // Connect cursor directly to nearby neural nodes with radiant gold beam
          if (dist < 140) {
            const cursorAlpha = (1 - dist / 140) * 0.55;
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `rgba(245, 158, 11, ${cursorAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Draw node-to-node synaptic connections
        for (let j = i + 1; j < nodeCount; j++) {
          const node2 = nodes[j];
          const nx = node2.x - node.x;
          const ny = node2.y - node.y;
          const ndist = Math.sqrt(nx * nx + ny * ny);

          if (ndist < maxDistance) {
            const alpha = (1 - ndist / maxDistance) * 0.28;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.strokeStyle = node.highlight || node2.highlight
              ? `rgba(245, 158, 11, ${alpha * 1.6})`
              : `rgba(255, 255, 255, ${alpha * 0.6})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw Node with Ambient Glow Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.highlight ? '#F59E0B' : '#10B981';
        ctx.shadowColor = node.highlight ? '#F59E0B' : '#10B981';
        ctx.shadowBlur = node.highlight ? 8 : 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw floating synaptic pulses along network with velocity glow
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulse.progress = 0;
          pulse.from = Math.floor(Math.random() * nodeCount);
          pulse.to = Math.floor(Math.random() * nodeCount);
        }

        const n1 = nodes[pulse.from];
        const n2 = nodes[pulse.to];

        if (n1 && n2) {
          const px = n1.x + (n2.x - n1.x) * pulse.progress;
          const py = n1.y + (n2.y - n1.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#FBBF24';
          ctx.shadowColor = '#F59E0B';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isVisible, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};

