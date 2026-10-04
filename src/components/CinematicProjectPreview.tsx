'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Maximize2, 
  ArrowRight, 
  ShieldCheck, 
  Monitor, 
  Smartphone, 
  Sliders, 
  Volume2, 
  VolumeX,
  Layers,
  Flame,
  Film
} from 'lucide-react';
import { getFeaturedProjects, ProjectItem } from '@/data/siteData';

interface CinematicProjectPreviewProps {
  onOpenOrderModal?: (plan?: string) => void;
}

export const CinematicProjectPreview: React.FC<CinematicProjectPreviewProps> = ({ onOpenOrderModal }) => {
  // Use the verified top homepage projects (preserves top 12 exactly)
  const [projects, setProjects] = useState<ProjectItem[]>(() => getFeaturedProjects(12).slice(0, 8));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewDevice, setViewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [isMuted, setIsMuted] = useState(true);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [progress, setProgress] = useState(0);

  // Sync with Admin / dynamic source of truth if available
  useEffect(() => {
    fetch('/api/admin/projects')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.projects?.length && data?.selectedProjectIds?.length) {
          const matched: ProjectItem[] = [];
          for (const id of data.selectedProjectIds) {
            const p = data.projects.find((item: any) => String(item.id) === String(id) || String(item.slug) === String(id));
            if (p) matched.push(p);
            if (matched.length === 8) break;
          }
          if (matched.length > 0) {
            setProjects(matched);
          }
        }
      })
      .catch(() => {});
  }, []);

  const activeProject = projects[currentIndex] || projects[0];

  // Auto-play cinematic reel progress loop
  useEffect(() => {
    if (!isPlaying) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const intervalTime = 60; // ms
    const step = (intervalTime / 6000) * 100; // 6 seconds per project reel

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % projects.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isPlaying, currentIndex, projects.length]);

  const handleSelectProject = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((curr) => (curr + 1) % projects.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((curr) => (curr - 1 + projects.length) % projects.length);
    setProgress(0);
  };

  if (!activeProject) return null;

  return (
    <section id="cinematic-preview" className="py-24 relative bg-[#06080D] border-t border-white/5 overflow-hidden font-sans">
      {/* Ambient background cinematic lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs uppercase tracking-wider">
              <Film className="w-3.5 h-3.5 text-amber-400" />
              <span>Cinematic Project Preview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Project Showcase</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Inspect our featured UAE enterprise platforms in full-width presentation mode. Toggle between desktop and mobile viewport dimensions, view key project metrics, and explore live case studies.
            </p>
          </div>

          {/* Controls Deck */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Play / Pause Reel */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono"
              title={isPlaying ? 'Pause Auto-Cycle' : 'Resume Auto-Cycle'}
              aria-label={isPlaying ? 'Pause Auto-Cycle' : 'Resume Auto-Cycle'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-amber-400" />}
              <span className="hidden sm:inline">{isPlaying ? 'Auto-Cycle On' : 'Paused'}</span>
            </button>

            {/* Viewport Dimension Toggle (Desktop vs Mobile) */}
            <div className="inline-flex p-1 rounded-xl bg-black/60 border border-white/10">
              <button
                type="button"
                onClick={() => setViewDevice('desktop')}
                className={`p-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewDevice === 'desktop'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop Viewport"
                aria-label="Desktop Viewport"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[10px]">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewDevice('mobile')}
                className={`p-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewDevice === 'mobile'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile Viewport"
                aria-label="Mobile Viewport"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden md:inline text-[10px]">Mobile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Cinematic Theater Frame */}
        <div className="relative rounded-3xl bg-[#0B0E17] border border-white/10 shadow-2xl overflow-hidden mb-8">
          
          {/* Top Theater Status Bar */}
          <div className="px-6 py-3.5 bg-black/70 border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:block h-3.5 w-px bg-white/10" />
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-amber-400 font-bold">PROJECT {String(currentIndex + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(projects.length).padStart(2, '0')}</span>
                <span>•</span>
                <span className="text-white truncate max-w-[240px]">{activeProject.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {activeProject.metrics && (
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  {activeProject.metrics}
                </div>
              )}
              <div className="text-[11px] font-mono text-slate-400 hidden sm:block">
                Interactive Preview
              </div>
            </div>
          </div>

          {/* Theater Viewport Display */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
            
            {/* Background Cover Media with Zoom Effect */}
            <div className={`relative w-full h-full transition-all duration-700 ${viewDevice === 'mobile' ? 'max-w-[380px] my-6 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl' : 'w-full'}`}>
              <img
                src={activeProject.image || activeProject.thumbnail}
                alt={activeProject.title}
                className="w-full h-full object-cover select-none"
              />
              
              {/* Subtle Vignette & Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 pointer-events-none" />

              {/* In-Screen Overlay Info Pill */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-[11px] font-bold uppercase">
                      {activeProject.category}
                    </span>
                    {activeProject.client && (
                      <span className="text-xs font-mono text-slate-300 px-2 py-0.5 rounded bg-black/50 border border-white/10">
                        {activeProject.client}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-lg">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 drop-shadow-md">
                    {activeProject.description}
                  </p>
                </div>

                {/* Direct Action Link */}
                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/work/${activeProject.slug || activeProject.id}`}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 text-xs font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <span>Launch Study</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenOrderModal?.(`Cinematic Reel: ${activeProject.title}`)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 hover:from-amber-400 hover:to-yellow-400 transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                  >
                    <span>Order Platform</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Previous / Next Arrow Overlays */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer z-30 backdrop-blur-sm"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer z-30 backdrop-blur-sm"
              aria-label="Next reel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Auto-Play Reel Progress Bar */}
          <div className="w-full bg-white/5 h-1 relative overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom Thumbnail Filmstrip Carousel */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
          {projects.map((proj, idx) => {
            const isSelected = idx === currentIndex;

            return (
              <button
                key={proj.id || idx}
                type="button"
                onClick={() => handleSelectProject(idx)}
                className={`group relative p-2 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-amber-500/15 border-2 border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-white/[0.02] border-white/10 hover:border-amber-400/50 hover:bg-white/[0.06] hover:shadow-[0_6px_18px_rgba(245,158,11,0.12)]'
                }`}
              >
                {/* Thumbnail Preview */}
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-900 relative mb-2">
                  <img
                    src={proj.image || proj.thumbnail}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span className="absolute top-1 left-1.5 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/70 text-amber-400 border border-white/10">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h4 className={`text-[11px] font-bold leading-tight line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {proj.title.split('—')[0].trim()}
                  </h4>
                  <p className="text-[9px] font-mono text-slate-400 truncate mt-0.5">
                    {proj.category.split('&')[0].trim()}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
