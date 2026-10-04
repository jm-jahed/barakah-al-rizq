'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Globe, Server, Clock } from 'lucide-react';

interface TelemetryMetric {
  id: string;
  icon: React.ElementType;
  label: string;
  sublabel: string;
  badge: string;
  statusColor: string;
}

const TELEMETRY_METRICS: TelemetryMetric[] = [
  {
    id: 'dxb-node',
    icon: Globe,
    label: 'DUBAI HUB (DXB-01)',
    sublabel: 'Edge Cluster Active · 14ms Latency',
    badge: 'ONLINE',
    statusColor: 'bg-emerald-400',
  },
  {
    id: 'ai-engine',
    icon: Zap,
    label: 'AI & DIGITAL ENGINEERING',
    sublabel: 'Next.js 16 SSR · Sub-50ms TTFB',
    badge: '99.99%',
    statusColor: 'bg-amber-400',
  },
  {
    id: 'enterprise-sla',
    icon: ShieldCheck,
    label: 'ENTERPRISE PRODUCTION GRADE',
    sublabel: 'UAE & Global High-Trust Deployments',
    badge: 'VERIFIED',
    statusColor: 'bg-cyan-400',
  },
  {
    id: 'lighthouse',
    icon: Activity,
    label: 'LIGHTHOUSE BENCHMARK',
    sublabel: '100 Performance · 100 SEO · 100 A11y',
    badge: 'GRADE A+',
    statusColor: 'bg-emerald-400',
  },
];

export const HeroTelemetryPill: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [uaeTime, setUaeTime] = useState<string>('');
  const shouldReduceMotion = useReducedMotion();

  // Real UAE Time (GST / UTC+4)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Dubai',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setUaeTime(`${formatter.format(now)} GST`);
      } catch {
        setUaeTime('08:00 GST');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cycle telemetry items automatically
  useEffect(() => {
    if (isExpanded) return;
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TELEMETRY_METRICS.length);
    }, 4200);

    return () => clearInterval(cycleInterval);
  }, [isExpanded]);

  const current = TELEMETRY_METRICS[currentIndex];
  const IconComponent = current.icon;

  return (
    <div className="relative inline-block mb-6 z-30">
      {/* Interactive Main Capsule */}
      <motion.button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="group relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#120F0B]/90 hover:bg-[#1A140E] border border-amber-500/30 hover:border-amber-400/60 backdrop-blur-xl shadow-lg shadow-amber-500/5 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-300 cursor-pointer text-left"
        aria-label="Toggle Live UAE Telemetry Status"
      >
        {/* Pulsing Status Dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${current.statusColor}`} />
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${current.statusColor}`} />
        </span>

        {/* Animated Metric Stream */}
        <div className="h-5 overflow-hidden min-w-[260px] sm:min-w-[320px] relative flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, filter: 'blur(2px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, filter: 'blur(2px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 text-xs font-mono font-medium tracking-wide uppercase"
            >
              <IconComponent className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-amber-200 font-semibold">{current.label}</span>
              <span className="text-neutral-500 hidden sm:inline">·</span>
              <span className="text-neutral-400 text-[11px] hidden sm:inline lowercase first-letter:uppercase font-sans font-normal">
                {current.sublabel}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Live Pill Badge */}
        <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 shrink-0 group-hover:border-amber-400/60 transition-colors">
          {current.badge}
        </span>
      </motion.button>

      {/* Floating Detailed Enterprise HUD Drawer on Hover/Click */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full mt-2 w-80 sm:w-96 rounded-2xl bg-[#0E0C0A]/95 border border-amber-500/30 backdrop-blur-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.15)] z-50 pointer-events-auto"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live UAE Node Telemetry
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>{uaeTime || 'GST (UTC+4)'}</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {TELEMETRY_METRICS.map((metric, idx) => {
                const ItemIcon = metric.icon;
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={metric.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`flex items-start justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'bg-amber-500/15 border border-amber-500/40 text-white shadow-[0_0_15px_rgba(245,158,11,0.1)]'
                        : 'hover:bg-white/5 border border-transparent text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <ItemIcon className={`w-3.5 h-3.5 mt-0.5 ${isActive ? 'text-amber-400' : 'text-neutral-500'}`} />
                      <div>
                        <div className="text-[11px] font-mono font-semibold tracking-wide text-neutral-200">
                          {metric.label}
                        </div>
                        <div className="text-[10px] text-neutral-400">
                          {metric.sublabel}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                        isActive
                          ? 'bg-amber-400 text-black'
                          : 'bg-white/5 text-neutral-400'
                      }`}
                    >
                      {metric.badge}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                DXB &amp; AUH Edge Clusters Active
              </span>
              <span className="text-amber-400/80">WebStudio AE Architecture</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
