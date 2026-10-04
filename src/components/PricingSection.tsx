'use client';

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Crown, Check, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { PRICING_PACKAGES } from '@/data/siteData';
import { UaeDirhamIcon, AedPriceDisplay } from '@/components/UaeDirhamIcon';
import { SectionHeader } from './ui/SectionHeader';
import { FastQuoteCalculator } from './ui/FastQuoteCalculator';
import { ScopeQuotePayload } from '@/data/estimatorPricing';

interface PricingSectionProps {
  onOpenOrderModal: (serviceId?: string | ScopeQuotePayload) => void;
}

// Animated AED Counter for Pricing Cards
const AnimatedAedPrice: React.FC<{
  amount: number | string;
  prefix?: string;
  priceClassName?: string;
}> = ({ amount, prefix = 'Starting from', priceClassName = 'text-3xl sm:text-4xl font-extrabold text-white tracking-tight' }) => {
  const numericVal = typeof amount === 'number' ? amount : parseInt(String(amount).replace(/[^0-9]/g, ''), 10) || 0;
  const [displayVal, setDisplayVal] = useState(numericVal);

  useEffect(() => {
    let start = 0;
    const end = numericVal;
    if (end === 0) return;
    const duration = 600;
    const stepTime = 16;
    const totalSteps = Math.floor(duration / stepTime);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / totalSteps;
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * ease);
      setDisplayVal(current);

      if (step >= totalSteps) {
        clearInterval(timer);
        setDisplayVal(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [numericVal]);

  return (
    <div className="flex flex-col items-start gap-1">
      {prefix && (
        <span className="text-[11px] font-mono font-medium text-amber-400/90 tracking-wider uppercase">
          {prefix}
        </span>
      )}
      <div className="flex items-baseline gap-2.5 flex-wrap">
        <div className="flex items-center gap-2">
          <UaeDirhamIcon className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400" />
          <span className={priceClassName}>
            {displayVal.toLocaleString()}
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-amber-300/90 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/25 tracking-widest uppercase">
          AED
        </span>
      </div>
    </div>
  );
};

// Individual Pricing Card with 3D Depth Perspective & Elevation
const PricingCard: React.FC<{
  pkg: typeof PRICING_PACKAGES[0];
  idx: number;
  activeScope: 'sprint' | 'full';
  onOpenOrderModal: (serviceId?: string | ScopeQuotePayload) => void;
  shouldReduceMotion: boolean | null;
}> = ({ pkg, idx, activeScope, onOpenOrderModal, shouldReduceMotion }) => {
  const isFeatured = pkg.featured;
  const summaryBullets = pkg.features.slice(0, 3);
  const [isHovered, setIsHovered] = useState(false);

  const handleSelectPackage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const platformId = pkg.id === 'starter' ? 'starter-web' : pkg.id === 'business' ? 'ai-solution' : pkg.id === 'premium' ? 'ecommerce' : 'full-saas';
    onOpenOrderModal({
      platformId,
      velocityId: 'standard',
      addonIds: [],
      customTitle: `${pkg.name} Package (AED ${pkg.numericPrice || pkg.price})`,
    });
  };

  return (
    <div className="h-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, scale: 0.97 },
          show: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: "spring", stiffness: 220, damping: 24 }
          }
        }}
        whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative z-10 overflow-hidden backdrop-blur-md cursor-default h-full ${
          isFeatured
            ? 'bg-gradient-to-b from-[#1C1712] via-[#14100C] to-[#110E0B] border-2 border-amber-400 shadow-[0_25px_60px_rgba(245,158,11,0.24),0_0_30px_rgba(245,158,11,0.12)]'
            : 'bg-[#110E0B] border border-white/10 hover:border-amber-400/60 shadow-xl shadow-black/80 hover:shadow-[0_20px_45px_rgba(245,158,11,0.18)]'
        }`}
      >
        {/* Top Accent Line */}
        <div
          className={`absolute top-0 inset-x-0 h-[2px] transition-all duration-300 ${
            isFeatured
              ? 'bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 opacity-100 shadow-[0_0_12px_rgba(245,158,11,0.7)]'
              : isHovered
              ? 'bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-100 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
              : 'opacity-0'
          }`}
        />

        {/* Recommended Badge */}
        {isFeatured && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-black font-extrabold text-[10px] tracking-wider shadow-xl flex items-center gap-1.5 font-mono z-20">
            <Crown className="w-3 h-3" />
            <span>RECOMMENDED</span>
          </div>
        )}

        <div className="relative z-10">
          {/* Card Title & Tagline */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              {pkg.name}
            </h3>
            <span className="text-[10px] font-mono font-bold text-amber-400 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              {activeScope === 'sprint' ? '2-Wk Sprint' : '4-Wk Scale'}
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-6 leading-relaxed min-h-[34px] group-hover:text-gray-200 transition-colors">
            {pkg.tagline}
          </p>

          {/* Animated AED Price Display */}
          <div className="mb-6 pb-6 border-b border-white/10 group-hover:border-amber-500/20 transition-colors">
            <AnimatedAedPrice
              amount={pkg.numericPrice || pkg.price}
              prefix="Starting from"
              priceClassName="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors"
            />
          </div>

          {/* Value Highlights (3 Concise Bullets) */}
          <div className="space-y-2.5 mb-8">
            <span className={`text-[10px] font-mono tracking-wider font-bold block mb-2 uppercase ${
              isFeatured ? 'text-amber-500' : 'text-gray-500 group-hover:text-amber-500/80 transition-colors'
            }`}>
              Core Deliverables:
            </span>
            {summaryBullets.map((feature, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2.5 text-xs text-gray-200 group-hover:text-white transition-colors">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isFeatured 
                    ? 'bg-amber-500 text-black' 
                    : 'bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-black'
                }`}>
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="leading-snug truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Action Button */}
        <div className="relative z-20 pt-2">
          <button
            type="button"
            onClick={handleSelectPackage}
            className={`w-full py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 transition-all duration-300 shadow-xl group/btn cursor-pointer ${
              isFeatured
                ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/25 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] active:scale-[0.98]'
                : 'bg-white/5 hover:bg-amber-500 border border-white/10 hover:border-amber-400 text-white hover:text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] active:scale-[0.98]'
            }`}
          >
            <span>Select {pkg.name}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenOrderModal }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeScope, setActiveScope] = useState<'sprint' | 'full'>('sprint');

  // Filter for the 3 main packages: Starter, Business, Premium
  const mainPackages = PRICING_PACKAGES.filter((p) =>
    ['starter', 'business', 'premium'].includes(p.id)
  );

  return (
    <section id="pricing" className="py-28 bg-[#0E0C0A] border-t border-amber-500/15 relative z-10 overflow-hidden font-sans">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Kinetic Typography & Scope Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {}
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-wrap items-center gap-3 mb-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg shadow-amber-500/5">
                <Crown className="w-3.5 h-3.5 text-amber-400" />
                <span>Transparent Agency Rates (UAE)</span>
              </div>
            </motion.div>

            <div className="overflow-hidden pb-1 mb-2">
              <motion.h2
                variants={{
                  hidden: { y: '80%', opacity: 0, filter: 'blur(4px)' },
                  visible: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Simple. Transparent.{' '}
                <span className="italic font-black bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Built to Scale.
                </span>
              </motion.h2>
            </div>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-base text-gray-400 max-w-2xl leading-relaxed"
            >
              Clear starting quotes with premium UAE Dirham pricing treatment and zero hidden fees.
            </motion.p>
          </motion.div>

          {/* Interactive Velocity & Scope Switcher (Motion #23 Spring Pill) */}
          <div className="flex items-center p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl relative">
            <button
              type="button"
              onClick={() => setActiveScope('sprint')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer z-10 ${
                activeScope === 'sprint' ? 'text-black font-extrabold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeScope === 'sprint' && (
                <motion.div
                  layoutId="pricingDeliveryScopePill"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/30 -z-10"
                />
              )}
              <span>RAPID SPRINT</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveScope('full')}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer z-10 ${
                activeScope === 'full' ? 'text-black font-extrabold' : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeScope === 'full' && (
                <motion.div
                  layoutId="pricingDeliveryScopePill"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 shadow-md shadow-amber-500/30 -z-10"
                />
              )}
              <span>🏢 FULL-SCALE PLATFORM</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Compact 3-Column Engagement Architecture) */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {mainPackages.map((pkg, idx) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              idx={idx}
              activeScope={activeScope}
              onOpenOrderModal={onOpenOrderModal}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>

        {/* Inline Fast-Quote Interactive Card (Design #08) */}
        <FastQuoteCalculator onOpenOrderModal={onOpenOrderModal} />

        {/* Enterprise Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 150, damping: 20, delay: 0.4 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#14100C] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl hover:border-amber-400/60 hover:shadow-[0_15px_40px_rgba(245,158,11,0.15)] hover:-translate-y-1 transition-all duration-500 group backdrop-blur-md"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-110 transition-all duration-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">Need an Enterprise Custom Solution?</h4>
              <p className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-300 transition-colors">
                Bespoke microservices, multi-tenant SaaS architectures, or custom AI agent pipelines.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenOrderModal({
                platformId: 'full-saas',
                velocityId: 'standard',
                addonIds: [],
                customTitle: 'Enterprise Custom Solution',
              });
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-amber-500 border border-white/15 hover:border-amber-400 text-amber-300 hover:text-black font-extrabold text-xs shrink-0 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 group/entbtn cursor-pointer"
          >
            <span>Inquire Enterprise Quote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/entbtn:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

