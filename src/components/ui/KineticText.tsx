'use client';

import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface KineticTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  stagger?: number;
  duration?: number;
  delay?: number;
  blur?: boolean;
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const KineticText: React.FC<KineticTextProps> = ({
  children,
  className = '',
  as: Component = 'span',
  stagger = 0.045,
  duration = 0.75,
  delay = 0,
  blur = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (typeof children !== 'string') {
    return <Component className={className}>{children}</Component>;
  }

  const words = children.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: '80%',
          filter: blur ? 'blur(4px)' : 'none',
        },
    visible: {
      opacity: 1,
      y: '0%',
      filter: 'blur(0px)',
      transition: {
        duration,
        ease: EASE_OUT_EXPO,
      },
    },
  };

  const MotionComponent = motion[Component] as any;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-8%' }}
      variants={containerVariants}
      className={`inline-block ${className}`}
    >
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`} className="inline-block overflow-hidden py-0.5 align-top">
          <motion.span
            variants={wordVariants}
            className="inline-block will-change-transform"
          >
            {word}
            {idx < words.length - 1 && '\u00A0'}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
};

export default KineticText;
