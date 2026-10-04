'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Eye, 
  ExternalLink,
  ArrowRight,
  Dna,
  Building2,
  Code2,
  Layers,
  Globe2,
  Gauge,
  X
} from 'lucide-react';
import { ProjectItem } from '@/data/siteData';

interface LiveProjectExplorerProps {
  projects: ProjectItem[];
  onOpenOrderModal?: (plan?: string) => void;
}

// 07 — Project Card
const ProjectCard: React.FC<{
  project: ProjectItem;
  index: number;
  onPreview: (project: ProjectItem) => void;
}> = ({ project, index, onPreview }) => {
  const targetSlug = project.slug || project.id;
  const projectNumber = String(project.projectNumber || index + 1).padStart(2, '0');

  return (
    <article
      className="group relative bg-[#0D0F14] border border-white/10 hover:border-amber-400/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
    >
      {/* 09 — Large Background Number */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-2 right-3 font-mono font-black text-6xl sm:text-7xl text-white/[0.03] group-hover:text-amber-500/[0.08] select-none pointer-events-none transition-colors duration-500 z-0 tracking-tighter"
      >
        #{projectNumber}
      </div>

      {/* Full Card Link with keyboard accessibility */}
      <Link
        href={`/work/${targetSlug}`}
        data-cursor-text="OPEN"
        className="absolute inset-0 z-20 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-2xl"
        aria-label={`View case study: ${project.title}`}
      />

      {/* 08 — Layered Thumbnail Container with Cinematic Depth */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
        <img
          src={project.image || project.thumbnail || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/30 to-black/40 pointer-events-none" />

        {/* Top Metadata Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold shadow-md">
            #{projectNumber}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-mono font-medium truncate max-w-[150px]">
            {project.category}
          </span>
        </div>

        {/* Floating Quick Action Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-30 p-4 pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onPreview(project);
            }}
            data-cursor-text="PREVIEW"
            className="pointer-events-auto px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold hover:bg-amber-400 shadow-lg shadow-amber-500/30 transition-all flex items-center gap-2 cursor-pointer scale-90 group-hover:scale-100"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Blueprint</span>
          </button>
        </div>
      </div>

      {/* Card Content & Metrics */}
      <div className="p-5 space-y-3 relative z-10 bg-[#0D0F14]/90 backdrop-blur-sm flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              UAE Certified
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {project.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Key Metric Strip */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-1.5 text-slate-300 truncate max-w-[65%]">
            <TrendingUp className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate text-[11px] text-amber-300 font-semibold">{project.metrics || 'High Conversion'}</span>
          </div>
          <span className="text-amber-400 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform text-[11px]">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </article>
  );
};

export const LiveProjectExplorer: React.FC<LiveProjectExplorerProps> = ({
  projects,
  onOpenOrderModal,
}) => {
  const [activePreviewProject, setActivePreviewProject] = useState<ProjectItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (activePreviewProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activePreviewProject]);

  return (
    <div className="w-full space-y-6">
      {/* Grid View of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
            onPreview={setActivePreviewProject}
          />
        ))}
      </div>

      {/* Interactive Blueprint Quick-Preview Modal Rendered via Portal */}
      {mounted && activePreviewProject && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200 select-none"
          role="dialog"
          aria-modal="true"
          aria-labelledby="preview-project-title"
          onClick={() => setActivePreviewProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[86vh] bg-[#0E1118] border border-amber-500/40 rounded-3xl overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.25)] flex flex-col my-auto select-text"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Media Banner */}
            <div className="relative h-36 sm:h-44 w-full bg-slate-950 overflow-hidden shrink-0">
              <img
                src={activePreviewProject.image || activePreviewProject.thumbnail}
                alt={activePreviewProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1118] via-black/40 to-black/70" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePreviewProject(null)}
                className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/80 hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-white/10 transition-all z-20 cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badges on Banner */}
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3 z-10">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold shadow-sm">
                    <span>CASE BLUEPRINT #{String(activePreviewProject.projectNumber || '01').padStart(2, '0')}</span>
                  </div>
                  <h3 id="preview-project-title" className="text-lg sm:text-2xl font-black text-white tracking-tight drop-shadow-md line-clamp-1">
                    {activePreviewProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body Details (Smooth scrollable viewport) */}
            <div className="p-5 sm:p-7 space-y-6 overflow-y-auto flex-1 font-sans scrollbar-thin scrollbar-thumb-amber-500/30 scrollbar-track-transparent">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-white/10">
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Sector</span>
                  <strong className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {activePreviewProject.category}
                  </strong>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Market</span>
                  <strong className="text-xs sm:text-sm font-semibold text-amber-400">
                    UAE / GCC
                  </strong>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Impact Metric</span>
                  <strong className="text-xs sm:text-sm font-semibold text-emerald-400 truncate block">
                    {activePreviewProject.metrics || 'High Conversion'}
                  </strong>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-slate-400 uppercase">Client</span>
                  <strong className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {activePreviewProject.client || 'Enterprise'}
                  </strong>
                </div>
              </div>

              {/* 5-Pillar Sovereign Project DNA Matrix */}
              <div className="p-4 rounded-2xl bg-black/50 border border-amber-500/25 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                    <Dna className="w-3.5 h-3.5 text-amber-400" />
                    PROJECT DNA PROFILE
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    AUTHENTICATED BLUEPRINT
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-1">
                  {/* Pillar 1: Industry */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase">
                      <Building2 className="w-3 h-3 text-amber-400" />
                      <span>Industry</span>
                    </div>
                    <div className="text-xs font-bold text-white truncate" title={activePreviewProject.category}>
                      {activePreviewProject.category.split('&')[0].trim()}
                    </div>
                  </div>

                  {/* Pillar 2: Technology */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase">
                      <Code2 className="w-3 h-3 text-amber-400" />
                      <span>Technology</span>
                    </div>
                    <div className="text-xs font-bold text-amber-300 truncate" title={(activePreviewProject.technologies || []).join(', ')}>
                      {activePreviewProject.technologies?.[0] || 'Next.js 16'}
                    </div>
                  </div>

                  {/* Pillar 3: Services */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase">
                      <Layers className="w-3 h-3 text-amber-400" />
                      <span>Services</span>
                    </div>
                    <div className="text-xs font-bold text-white truncate">
                      Full-Stack + UX
                    </div>
                  </div>

                  {/* Pillar 4: Platform */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase">
                      <Globe2 className="w-3 h-3 text-amber-400" />
                      <span>Platform</span>
                    </div>
                    <div className="text-xs font-bold text-white truncate">
                      Web + Mobile Edge
                    </div>
                  </div>

                  {/* Pillar 5: Scale */}
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 uppercase">
                      <Gauge className="w-3 h-3 text-amber-400" />
                      <span>Scale</span>
                    </div>
                    <div className="text-xs font-bold text-emerald-400 truncate">
                      Enterprise Grade
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">Platform Overview</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activePreviewProject.description}
                </p>
              </div>

              {/* Technologies Architecture */}
              {activePreviewProject.technologies && activePreviewProject.technologies.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">Engineered With</h4>
                  <div className="flex flex-wrap gap-2">
                    {activePreviewProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Action Footer */}
            <div className="p-4 sm:p-5 bg-[#0A0D12] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <Link
                href={`/work/${activePreviewProject.slug || activePreviewProject.id}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-mono text-xs font-extrabold shadow-lg hover:shadow-amber-500/25 transition-all uppercase tracking-wider"
              >
                <span>Launch Deep Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => {
                  const title = activePreviewProject.title;
                  setActivePreviewProject(null);
                  onOpenOrderModal?.(`Project Inquiry: ${title}`);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold transition-colors cursor-pointer"
              >
                Request Similar Build
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
