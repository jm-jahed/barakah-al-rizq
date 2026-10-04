'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RESULTS_METRICS } from '@/data/siteData';
import { TrendingUp, Activity, Clock } from 'lucide-react';

const METRIC_ICONS = [
  <TrendingUp className="w-5 h-5 text-amber-400" key="0" />,
  <Activity className="w-5 h-5 text-emerald-400" key="1" />,
  <Clock className="w-5 h-5 text-amber-400" key="2" />,
  <Activity className="w-5 h-5 text-emerald-400" key="3" />,
];

interface AnimatedMetricProps {
  value: string;
  isInView: boolean;
}

const AnimatedMetric: React.FC<AnimatedMetricProps> = ({ value, isInView }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Check for prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      return;
    }

    // Extract leading/flanking number and remaining suffix/prefix
    const match = value.match(/^([+<]?\s*)(\d+(\.\d+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const isDecimal = match[2].includes('.');
    const suffix = match[4] || '';

    const duration = 1200; // Refined & fast duration (1.2s)
    let animationFrameId: number;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Refined ease-out cubic motion
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNum * easeOut;

      const formatted = isDecimal ? currentVal.toFixed(1) : Math.round(currentVal).toString();
      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return <span>{displayValue}</span>;
};

export const ResultsMetrics: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section ref={ref} className="py-24 bg-[#0E0C0A] border-y border-amber-500/15 relative overflow-hidden">
      {/* Background Subtle Radar Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RESULTS_METRICS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              data-cursor-text="METRIC"
              className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-[#14110E] border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 shadow-xl group overflow-hidden"
            >
              {/* Radar Pulsing Ring Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-4 group-hover:scale-110 transition-transform">
                {METRIC_ICONS[idx] || <TrendingUp className="w-5 h-5 text-amber-400" />}
              </div>

              <span className="text-4xl sm:text-5xl font-extrabold font-mono bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent mb-2 tracking-tight">
                <AnimatedMetric value={item.value} isInView={isInView} />
              </span>

              <span className="text-base font-extrabold text-white mb-1">
                {item.label}
              </span>

              <span className="text-xs text-gray-400 font-normal leading-relaxed">
                {item.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};