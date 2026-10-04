'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  ExternalLink,
  Crown
} from 'lucide-react';
import { ProjectItem } from '@/data/siteData';

interface PortfolioAutoShowcaseProps {
  projects: ProjectItem[];
  onOpenOrderModal?: (plan?: string) => void;
}

export const PortfolioAutoShowcase: React.FC<PortfolioAutoShowcaseProps> = ({
  projects,
  onOpenOrderModal,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = projects.length || 1;

  // Safe cyclic project getters
  const getProject = useCallback(
    (index: number) => {
      const normalizedIndex = ((index % total) + total) % total;
      return projects[normalizedIndex] || projects[0];
    },
    [projects, total]
  );

  const activeProject = getProject(activeIndex);
  const prevProject = getProject(activeIndex - 1);
  const nextProject = getProject(activeIndex + 1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => ((prev - 1) + total) % total);
  }, [total]);

  const handleSelect = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(((index % total) + total) % total);
    },
    [activeIndex, total]
  );

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Transition variants for cinematic editorial transition
  const slideVariants: {
    enter: (dir: number) => { x: number; opacity: number; scale: number };
    center: { x: number; opacity: number; scale: number; transition: { x: { type: 'spring'; stiffness: number; damping: number }; opacity: { duration: number }; scale: { duration: number } } };
    exit: (dir: number) => { x: number; opacity: number; scale: number; transition: { x: { type: 'spring'; stiffness: number; damping: number }; opacity: { duration: number }; scale: { duration: number } } };
  } = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        x: { type: 'spring' as const, stiffness: 350, damping: 32 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  const projectNumFormatted = String((activeProject?.projectNumber || activeIndex + 1)).padStart(2, '0');
  const targetSlug = activeProject?.slug || activeProject?.id;

  return (
    <div className="w-full relative overflow-hidden py-4 select-none">
      {/* Ambient Central Spotlight Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/[0.03] blur-[140px] rounded-full z-0" />

      {/* Main Gallery Viewport */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Gallery Stage Row */}
        <div className="relative flex items-center justify-center gap-3 md:gap-5 lg:gap-6 py-2">
          
          {/* 1. Left Neighbor Preview (Tablet/Desktop) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Previous project: ${prevProject?.title}`}
            className="hidden md:flex flex-col w-36 lg:w-44 xl:w-48 shrink-0 rounded-2xl bg-[#0D0B08] border border-white/[0.06] hover:border-amber-400/40 p-2.5 opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer scale-90 hover:scale-95 group text-left shadow-md"
          >
            <div className="relative h-20 lg:h-24 w-full rounded-xl overflow-hidden bg-slate-950 mb-2">
              <img
                src={prevProject?.image || prevProject?.thumbnail || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80'}
                alt={prevProject?.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-black/40 to-transparent" />
              <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-gray-400">
                #{String(prevProject?.projectNumber || activeIndex).padStart(2, '0')}
              </div>
            </div>
            <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider truncate mb-0.5">
              {prevProject?.category}
            </div>
            <div className="text-[11px] font-bold text-gray-300 group-hover:text-amber-300 transition-colors truncate">
              {prevProject?.title}
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-gray-500 mt-1.5">
              <ChevronLeft className="w-3 h-3 text-amber-400" />
              <span>PREV</span>
            </div>
          </button>

          {/* 2. Dominant Center Exhibition Piece (Full Image + Clean Content Layout) */}
          <div className="w-[88vw] sm:w-[78vw] md:max-w-xl lg:max-w-2xl xl:max-w-3xl shrink-0 mx-auto relative z-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeProject?.id || activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35) handleNext();
                  else if (info.offset.x > 35) handlePrev();
                }}
                className="group relative rounded-3xl bg-[#100D0A] border border-amber-500/30 hover:border-amber-400/60 overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(245,158,11,0.1)] transition-all duration-300 flex flex-col"
              >
                {/* Top Specular Hairline */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_10px_#F59E0B] z-20" />

                {/* Full Project Showcase Image (Complete Full View with Ambient Backdrop) */}
                <div className="relative w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden bg-black/90 flex items-center justify-center">
                  {/* Ambient Blurred Backdrop for rich luxury framing */}
                  <img
                    src={activeProject?.image || activeProject?.thumbnail || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-125 pointer-events-none"
                  />

                  {/* High-Resolution Full Uncropped Image */}
                  <img
                    src={activeProject?.image || activeProject?.thumbnail || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'}
                    alt={activeProject?.title}
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]"
                  />
                  
                  {/* Subtle Cinematic Vignette Veil along top and bottom edges */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B08] via-transparent to-black/40 pointer-events-none z-10" />

                  {/* Top Metadata Overlay Bar */}
                  <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-5 flex items-center justify-between z-20 pointer-events-none">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold backdrop-blur-md shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse" />
                      <span>{projectNumFormatted} / {total}+</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 border border-white/15 text-gray-200 text-[11px] font-mono uppercase tracking-wider backdrop-blur-md shadow-md">
                      <span>{activeProject?.category}</span>
                    </div>
                  </div>

                  {/* Verified Metric Badge */}
                  {activeProject?.metrics && (
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono backdrop-blur-md shadow-lg z-20 pointer-events-none">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-semibold">{activeProject.metrics}</span>
                    </div>
                  )}

                  {/* Prominent Overlay Prev/Next Hover Controls */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous project"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-amber-500 text-white hover:text-black border border-white/20 hover:border-amber-400 backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer shadow-2xl z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next project"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-amber-500 text-white hover:text-black border border-white/20 hover:border-amber-400 backdrop-blur-md transition-all opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer shadow-2xl z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Editorial Content Body Sits Below Full Image */}
                <div className="p-4 sm:p-6 bg-[#0E0B08] border-t border-white/[0.08] relative z-10">
                  <div className="space-y-3">
                    
                    {/* Primary Title & Client */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                      <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                        {activeProject?.title}
                      </h3>
                      {activeProject?.client && (
                        <span className="text-xs font-mono text-amber-400/90 font-medium">
                          {activeProject.client}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed font-normal">
                      {activeProject?.description}
                    </p>

                    {/* Technology Stack Pills */}
                    {activeProject?.technologies && activeProject.technologies.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {activeProject.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-[11px] font-mono text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Links Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-1 border-t border-white/10">
                      <Link
                        href={`/work/${targetSlug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black text-xs font-mono font-extrabold uppercase tracking-wider hover:scale-[1.02] hover:shadow-amber-500/30 transition-all shadow-md"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {onOpenOrderModal && (
                        <button
                          type="button"
                          onClick={() => onOpenOrderModal(activeProject.title)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-mono font-bold uppercase tracking-wider hover:border-amber-400/40 transition-colors cursor-pointer"
                        >
                          <span>Request Scope</span>
                        </button>
                      )}
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. Right Neighbor Preview (Tablet/Desktop) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Next project: ${nextProject?.title}`}
            className="hidden md:flex flex-col w-36 lg:w-44 xl:w-48 shrink-0 rounded-2xl bg-[#0D0B08] border border-white/[0.06] hover:border-amber-400/40 p-2.5 opacity-40 hover:opacity-75 transition-all duration-300 cursor-pointer scale-90 hover:scale-95 group text-left shadow-md"
          >
            <div className="relative h-20 lg:h-24 w-full rounded-xl overflow-hidden bg-slate-950 mb-2">
              <img
                src={nextProject?.image || nextProject?.thumbnail || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80'}
                alt={nextProject?.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-black/40 to-transparent" />
              <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-mono text-gray-400">
                #{String(nextProject?.projectNumber || activeIndex + 2).padStart(2, '0')}
              </div>
            </div>
            <div className="text-[9px] font-mono text-gray-500 uppercase tracking-wider truncate mb-0.5">
              {nextProject?.category}
            </div>
            <div className="text-[11px] font-bold text-gray-300 group-hover:text-amber-300 transition-colors truncate">
              {nextProject?.title}
            </div>
            <div className="flex items-center justify-end gap-1 text-[10px] font-mono text-gray-500 mt-1.5">
              <span>NEXT</span>
              <ChevronRight className="w-3 h-3 text-amber-400" />
            </div>
          </button>

        </div>

        {/* Refined Gallery Controls & Scrubber */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 max-w-2xl lg:max-w-3xl mx-auto border-t border-white/10">
          {/* Step Back / Next Buttons with High Contrast & Visual Polish */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl bg-white/[0.07] hover:bg-amber-500 hover:text-black text-gray-200 border border-white/15 hover:border-amber-400 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold shadow-lg group active:scale-95"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" />
              <span>PREV</span>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2.5 rounded-xl bg-white/[0.07] hover:bg-amber-500 hover:text-black text-gray-200 border border-white/15 hover:border-amber-400 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono font-bold shadow-lg group active:scale-95"
              aria-label="Next Project"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 text-amber-400 group-hover:text-black transition-colors" />
            </button>
          </div>

          {/* Minimal Scrubber Bar */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-xs font-mono text-amber-400 font-bold shrink-0">
              {projectNumFormatted}
            </span>
            <div className="relative w-full sm:w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300 rounded-full shadow-[0_0_8px_#F59E0B]"
                style={{ width: `${((activeIndex + 1) / total) * 100}%` }}
              />
            </div>
            <span className="text-xs font-mono text-gray-500 shrink-0">
              {total}+
            </span>
          </div>

          {/* Direct Quick-Jump Dropdown */}
          <div className="hidden sm:flex items-center gap-2">
            <select
              aria-label="Jump to project"
              value={activeIndex}
              onChange={(e) => handleSelect(Number(e.target.value))}
              className="bg-[#14100C] border border-white/15 hover:border-amber-500/40 rounded-xl px-3 py-2 text-xs font-mono text-gray-200 focus:outline-none focus:border-amber-400 cursor-pointer transition-colors shadow-inner"
            >
              {projects.map((p, idx) => (
                <option key={p.id || idx} value={idx} className="bg-[#14100C] text-gray-200">
                  #{String(p.projectNumber || idx + 1).padStart(2, '0')} — {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioAutoShowcase;
