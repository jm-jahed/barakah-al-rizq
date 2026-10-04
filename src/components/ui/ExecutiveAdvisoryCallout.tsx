'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  Building2,
  Lock
} from 'lucide-react';
import { ScopeQuotePayload } from '@/data/estimatorPricing';

interface ExecutiveAdvisoryCalloutProps {
  onOpenOrderModal: (serviceId?: string | ScopeQuotePayload) => void;
}

export const ExecutiveAdvisoryCallout: React.FC<ExecutiveAdvisoryCalloutProps> = ({ onOpenOrderModal }) => {
  const shouldReduceMotion = useReducedMotion();
  const [dubaiTime, setDubaiTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setDubaiTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppAdvisory = () => {
    const message = encodeURIComponent(
      'Hello WebStudio AE! I would like to schedule an Executive Technical Consultation with a Lead Solutions Architect regarding our UAE web/SaaS architecture roadmap.'
    );
    window.open(`https://wa.me/971566184509?text=${message}`, '_blank');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-3xl bg-gradient-to-r from-[#120F0C] via-[#16120E] to-[#120F0C] border border-amber-500/30 p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(245,158,11,0.1)] overflow-hidden group"
      >
        {/* Top Gold Specular Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-amber-500/20 via-yellow-400 to-amber-500/20 shadow-[0_0_12px_rgba(245,158,11,0.5)]" />

        {/* Ambient Radial Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/[0.06] rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Column: Architect Status & Headline */}
          <div className="space-y-3.5 max-w-2xl">
            {/* Live Telemetry Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>DUBAI LEAD ARCHITECT ONLINE</span>
              </span>

              {dubaiTime && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-gray-400 bg-white/[0.03] border border-white/[0.08]">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dubai Time: {dubaiTime} (GST)</span>
                </span>
              )}

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20">
                <Lock className="w-3 h-3 text-amber-400" />
                <span>100% Mutual NDA</span>
              </span>
            </div>

            {/* Main Headline */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Need Direct Technical Advice Before Committing?{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Speak With a Lead Solutions Architect.
              </span>
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              No sales pitches, no junior middle-men. You will consult directly with a senior engineer to evaluate performance bottlenecks, technical feasibility, and cost-effective cloud architecture.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>&lt; 2-Hour Response SLA</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fixed AED Quote SOW</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Dubai Engineers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Fast-Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-72">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleWhatsAppAdvisory}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-extrabold text-xs flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-500/20 hover:from-emerald-400 hover:to-emerald-500 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Lead Architect</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => onOpenOrderModal({
                platformId: 'starter-web',
                velocityId: 'standard',
                addonIds: [],
                customTitle: '15-Min Executive Architecture Consultation',
              })}
              className="w-full py-3.5 px-5 rounded-2xl bg-white/[0.04] hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/50 text-white font-extrabold text-xs flex items-center justify-center gap-2.5 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Book 15-Min Triage Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExecutiveAdvisoryCallout;
