'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TrendingUp, Quote } from 'lucide-react';
import { PortfolioProject } from '@/data/siteData';

interface ProjectCardProps extends Omit<HTMLMotionProps<"article">, "children"> {
  project: PortfolioProject;
  displayRank?: string | number;
  onOpenOrderModal?: (title: string) => void;
  index?: number;
  featuredBadge?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  displayRank,
  onOpenOrderModal,
  index = 0,
  featuredBadge = false,
  className = "",
  ...motionProps
}) => {
  const targetSlug = project.slug || project.id;
  const isFeatured = project.featured || featuredBadge;
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D Perspective Spring Coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { damping: 26, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { damping: 26, stiffness: 220 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xRatio);
    mouseY.set(yRatio);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setIsHovered(true);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.01 }}
      {...motionProps}
      className={`group relative bg-[#0F141C] border border-white/10 hover:border-amber-400/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(245,158,11,0.14)] flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
    >
      {/* Dynamic Top Gold Specular Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_rgba(245,158,11,0.7)] z-30 pointer-events-none" />

      {/* Dynamic Cursor Spotlight Specular Radial Sheen */}
      {!shouldReduceMotion && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.14), transparent 65%)`,
          }}
        />
      )}

      {/* Full Card Clickable Area */}
      <Link href={project.liveUrl || `/work/${targetSlug}`} className="absolute inset-0 z-30" aria-label={`View full project: ${project.title}`} />

      {/* Visual Card Image Container */}
      <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'}
          alt={project.title}
          className="w-full h-full object-cover transform origin-center transition-transform duration-[850ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
          loading="lazy"
        />
        
        {/* Default Subtle Gradient Veil at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F141C] via-[#0F141C]/30 to-transparent pointer-events-none" />

        {/* Premium Hover Action Button - floats up without darkening the image */}
        <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-10 pointer-events-none">
          <div className="translate-y-6 md:group-hover:translate-y-0 opacity-0 md:group-hover:opacity-100 transition-all duration-300 ease-out flex items-center gap-2 px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/50 text-white font-mono text-[11px] font-extrabold uppercase tracking-[0.15em] shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 text-amber-400 -translate-x-1 opacity-80 md:group-hover:translate-x-1 md:group-hover:opacity-100 transition-all duration-300 ease-out" />
          </div>
        </div>

        {/* Top Left Badges: Rank & Category */}
        <div className="absolute top-4 left-4 flex items-center gap-2 z-20 pointer-events-none">
          {displayRank && (
            <motion.div
              initial={{ opacity: 0, x: -16, scale: 0.90, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 380, damping: 25, delay: Math.min(index * 0.07, 0.42) + 0.15 }}
              className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-xs font-mono font-extrabold shadow-md transition-all duration-500 ease-out origin-left md:group-hover:border-amber-400/60 md:group-hover:bg-amber-950/20 md:group-hover:text-amber-300 md:group-hover:scale-[1.08] md:group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]"
            >
              {displayRank}
            </motion.div>
          )}
          {isFeatured && !displayRank && (
            <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-black font-mono font-extrabold text-[10px] tracking-wide shadow-lg">
              Flagship
            </span>
          )}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 350, damping: 20, delay: Math.min(index * 0.07, 0.42) + 0.35 }}
            className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-slate-300 text-xs font-medium truncate max-w-[170px] hidden sm:block"
          >
            {project.category}
          </motion.div>
        </div>

        {/* Top Right: Floating Glass Highlight Quotation Badge (Design #06) */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/25 text-amber-300 text-[10px] font-mono font-semibold shadow-md group-hover:border-amber-400/50 group-hover:bg-amber-950/40 group-hover:text-amber-200 transition-all duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="tracking-wider uppercase">UAE LIVE</span>
          </div>
        </div>

        {/* Metrics Overlay Pill */}
        {project.metrics && (
          <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold shadow-lg">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{project.metrics}</span>
            </div>
          </div>
        )}
      </div>

      {/* Text Content Block */}
      <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between relative z-20 bg-gradient-to-b from-[#0F141C] to-[#0A0D12]">
        <div className="space-y-3">
          <span className="text-[10px] sm:hidden font-mono font-bold text-amber-400 uppercase tracking-wider block">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors leading-snug">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 font-normal">
            {project.description}
          </p>

          {/* Tech Badges */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                <span
                  key={tech}
                  className={`px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-400 transition-all duration-300 ease-out md:group-hover:border-amber-500/30 md:group-hover:text-amber-300 md:group-hover:-translate-y-0.5 md:group-hover:shadow-[0_2px_8px_rgba(245,158,11,0.15)] ${
                    techIndex === 0 ? 'md:group-hover:delay-[0ms]' : techIndex === 1 ? 'md:group-hover:delay-[50ms]' : 'md:group-hover:delay-[100ms]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
            {project.client}
          </div>

          <div className="flex items-center gap-3 relative z-40">
            {onOpenOrderModal && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenOrderModal(project.title);
                }}
                className="text-xs text-slate-400 hover:text-white transition-colors font-medium cursor-pointer relative z-50"
              >
                Inquire
              </button>
            )}
            
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 group-hover:bg-amber-500 text-amber-400 group-hover:text-black border border-amber-500/30 text-xs font-mono font-bold transition-all duration-300 pointer-events-none"
            >
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
