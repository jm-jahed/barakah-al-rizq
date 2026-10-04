'use client';

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticStrength?: number; // default 0.35
  glowStrength?: number; // default 1
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  magneticStrength = 0.35,
  glowStrength = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * magneticStrength;
    const distanceY = (e.clientY - centerY) * magneticStrength;

    mouseX.set(distanceX);
    mouseY.set(distanceY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
      style={{
        x: shouldReduceMotion ? 0 : x,
        y: shouldReduceMotion ? 0 : y,
      }}
      className="inline-block relative perspective-800"
    >
      {/* Dynamic Magnetic Glow Layer */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.8 * glowStrength : 0,
          scale: isHovered ? 1.15 : 0.9,
        }}
        transition={{ duration: 0.25 }}
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-yellow-400/30 to-amber-600/40 blur-lg pointer-events-none -z-10"
      />

      <div onClick={onClick} className={`relative overflow-hidden ${className}`}>
        {/* Subtle 3D light sweep on hover */}
        {!shouldReduceMotion && isHovered && (
          <motion.div
            initial={{ x: '-120%', opacity: 0 }}
            animate={{ x: '180%', opacity: [0, 0.4, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none z-30"
          />
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default MagneticButton;
