'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export const BackgroundMotion: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 2000], [0.7, 0.35]);
  const shallowParallax = useTransform(scrollY, [0, 5000], [0, -120]);
  const deepParallax = useTransform(scrollY, [0, 5000], [0, -260]);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const desktop = window.innerWidth >= 1024 && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsDesktop(desktop);

    if (!desktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 350); // 350 is half the width (700px / 2) to center it
      mouseY.set(e.clientY - 350); // 350 is half the height (700px / 2) to center it
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Ambient Cursor Spotlight (Desktop fine pointer only) */}
      {isDesktop && (
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            x: smoothMouseX,
            y: smoothMouseY,
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, rgba(245, 158, 11, 0) 70%)',
          }}
        />
      )}

      {/* Cybernetic Studio Architectural Grid with Parallax Depth */}
      <motion.div
        style={{ 
          opacity, 
          y: shallowParallax,
          willChange: 'transform, opacity',
          transform: 'translateZ(0)',
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#1b1611_1px,transparent_1px),linear-gradient(to_bottom,#1b1611_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"
      />

      {/* Ambient Radial Depth Glows with Multi-Tier Parallax */}
      <motion.div 
        style={{ 
          y: shallowParallax,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        className="absolute -top-[15%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-600/8 via-amber-500/3 to-transparent blur-[160px]" 
      />
      <motion.div 
        style={{ 
          y: deepParallax,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-amber-500/4 to-transparent blur-[180px]" 
      />
      <motion.div 
        style={{ 
          y: deepParallax,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-amber-500/4 blur-[200px]" 
      />
    </div>
  );
};