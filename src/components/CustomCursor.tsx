'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Fast, ultra-responsive physics spring for the primary core pointer
  const coreSpringConfig = { damping: 35, stiffness: 600, mass: 0.15 };
  const coreX = useSpring(cursorX, coreSpringConfig);
  const coreY = useSpring(cursorY, coreSpringConfig);

  // Smooth trailing halo spring for the ambient luminous diffusion ring
  const haloSpringConfig = { damping: 25, stiffness: 280, mass: 0.4 };
  const haloX = useSpring(cursorX, haloSpringConfig);
  const haloY = useSpring(cursorY, haloSpringConfig);

  useEffect(() => {
    // Only enable custom pointer halo on desktop devices with fine pointer
    if (typeof window === 'undefined' || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('button, a, input, textarea, select, [data-cursor], [data-cursor-text], [role="button"]');
      
      if (interactiveEl) {
        setIsHovered(true);
        const explicitText = interactiveEl.getAttribute('data-cursor-text');
        if (explicitText) {
          setCursorText(explicitText);
          return;
        }

        // Contextual intelligent state machine
        const href = interactiveEl.getAttribute('href') || '';
        const ariaLabel = interactiveEl.getAttribute('aria-label') || '';
        const classNames = interactiveEl.className || '';
        const textContent = interactiveEl.textContent || '';

        if (href.includes('/projects/') || ariaLabel.toLowerCase().includes('project') || classNames.includes('project-card')) {
          setCursorText('OPEN');
        } else if (interactiveEl.closest('#project-dna, #services, #process, #architecture-matrix') || classNames.includes('node') || classNames.includes('dna')) {
          setCursorText('INSPECT');
        } else if (textContent.toLowerCase().includes('start') || textContent.toLowerCase().includes('build') || textContent.toLowerCase().includes('consult') || textContent.toLowerCase().includes('order')) {
          setCursorText('START');
        } else if (textContent.toLowerCase().includes('explore') || textContent.toLowerCase().includes('portfolio')) {
          setCursorText('EXPLORE');
        } else {
          setCursorText('VIEW');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Ambient Specular Trailing Halo with 3D Depth */}
      <motion.div
        style={{
          x: haloX,
          y: haloY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 84 : 54) : isClicked ? 20 : 34,
          height: isHovered ? (cursorText ? 84 : 54) : isClicked ? 20 : 34,
          backgroundColor: isHovered ? 'rgba(245, 158, 11, 0.14)' : 'rgba(245, 158, 11, 0.04)',
          borderColor: isHovered ? 'rgba(245, 158, 11, 0.55)' : 'rgba(245, 158, 11, 0.18)',
          scale: isClicked ? 0.85 : isHovered ? 1.08 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="fixed rounded-full border flex items-center justify-center text-[10px] font-extrabold font-mono text-amber-300 tracking-wider uppercase text-center backdrop-blur-[1.5px] shadow-[0_0_24px_rgba(245,158,11,0.18)] select-none"
      >
        {cursorText}
      </motion.div>

      {/* Inner Precision Luminous Dot */}
      <motion.div
        style={{
          x: coreX,
          y: coreY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : isClicked ? 1.4 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.9)]"
      />
    </div>
  );
};

export default CustomCursor;

