'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeaderProps {
  badgeIcon?: React.ReactNode;
  badgeText?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badgeIcon,
  badgeText,
  title,
  description,
  align = 'center',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
        hidden: {}
      }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-20 ${className}`}
    >
      {/* Badge with subtle opacity/y lift */}
      {(badgeIcon || badgeText) && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } }
          }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 backdrop-blur-md`}
        >
          {badgeIcon}
          {badgeText && (
            <span className="text-xs font-semibold font-mono text-amber-400 uppercase tracking-widest">
              {badgeText}
            </span>
          )}
        </motion.div>
      )}

      {/* Title with kinetic line & word reveal */}
      <div className="overflow-hidden mb-5 leading-none py-1">
        <motion.h2
          variants={{
            hidden: { y: shouldReduceMotion ? '0%' : '80%', opacity: 0, filter: shouldReduceMotion ? 'none' : 'blur(4px)' },
            visible: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE_OUT_EXPO } }
          }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
        >
          {title}
        </motion.h2>
      </div>

      {/* Description with smooth upward drift */}
      {description && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: EASE_OUT_EXPO } }
          }}
          className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;

