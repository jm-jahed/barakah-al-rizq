'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  ArrowRight, 
  Crown, 
  Layers, 
  Code2, 
  Bot, 
  MessageSquare, 
  Building2, 
  ExternalLink,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { getAllProjects, PRICING_PACKAGES, AGENCY_BUSINESS } from '@/data/siteData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOrderModal: (serviceId?: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenOrderModal }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const allProjects = useMemo(() => getAllProjects(), []);

  // Filter items based on query
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return {
        flagships: allProjects.slice(0, 4),
        actions: [
          { id: 'start-proj', title: 'Start a Project Inquiry', category: 'Action', icon: Crown, action: () => { onClose(); onOpenOrderModal(); } },
          { id: 'wa-chat', title: 'Connect on UAE WhatsApp (+971 52 339 4001)', category: 'Direct Chat', icon: MessageSquare, action: () => { window.open(AGENCY_BUSINESS.whatsapp, '_blank'); } },
          { id: 'pricing-view', title: 'View AED Sprint Packages', category: 'Navigation', icon: Layers, action: () => { onClose(); router.push('/#pricing'); } },
        ]
      };
    }

    const q = query.toLowerCase();
    const matchedProjects = allProjects.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.client.toLowerCase().includes(q) ||
      (p.technologies && p.technologies.some((t: string) => t.toLowerCase().includes(q)))
    ).slice(0, 6);

    const matchedActions = [
      { id: 'start-proj', title: `Start Inquiry for "${query}"`, category: 'Action', icon: Crown, action: () => { onClose(); onOpenOrderModal(query); } },
      { id: 'wa-chat', title: 'WhatsApp Solutions Architect', category: 'Direct Chat', icon: MessageSquare, action: () => { window.open(AGENCY_BUSINESS.whatsapp, '_blank'); } },
    ];

    return {
      flagships: matchedProjects,
      actions: matchedActions
    };
  }, [query, allProjects, onClose, onOpenOrderModal, router]);

  const totalItems = filteredResults.actions.length + filteredResults.flagships.length;

  // Keyboard shortcut listener for navigation and execution
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if (isOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % Math.max(1, totalItems));
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + totalItems) % Math.max(1, totalItems));
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (selectedIndex < filteredResults.actions.length) {
            filteredResults.actions[selectedIndex]?.action();
          } else {
            const projectIdx = selectedIndex - filteredResults.actions.length;
            const project = filteredResults.flagships[projectIdx];
            if (project) {
              onClose();
              router.push(`/work/${project.slug || project.id}`);
            }
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, totalItems, selectedIndex, filteredResults, router]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', stiffness: 420, damping: 28 }}
          className="bg-[#0B0D14] border border-amber-500/35 rounded-3xl max-w-2xl w-full shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.18)] overflow-hidden flex flex-col max-h-[75vh] relative"
        >
          {/* Motion #25 Top Laser Energy Trace */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-90 pointer-events-none z-30"
          />

          {/* Search Header Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08] bg-white/[0.02] relative z-10">
            <Search className="w-5 h-5 text-amber-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Search 80 case studies, capabilities, or tech stack..."
              className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none font-sans"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-[11px] font-mono text-gray-400 px-2 py-1 rounded bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              ESC
            </button>
          </div>

          {/* Results List */}
          <div className="p-4 overflow-y-auto space-y-4 relative z-10">
            
            {/* Quick Actions */}
            <div>
              <div className="text-[10px] font-mono uppercase text-gray-400 font-bold tracking-widest px-2 mb-2">
                Quick Actions
              </div>
              <div className="space-y-1">
                {filteredResults.actions.map((act, idx) => {
                  const Icon = act.icon;
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={act.id}
                      type="button"
                      onClick={act.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`relative w-full p-2.5 rounded-xl border flex items-center justify-between transition-colors group cursor-pointer z-10 ${
                        isSelected ? 'border-amber-500/50 text-white' : 'border-white/[0.04] bg-white/[0.02] text-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeCommandItemPill"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                          className="absolute inset-0 rounded-xl bg-amber-500/15 border border-amber-400/50 shadow-md shadow-amber-500/10 -z-10"
                        />
                      )}
                      <div className="flex items-center gap-2.5 relative z-10">
                        <div className="p-1.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold group-hover:text-amber-300 transition-colors text-left">
                          {act.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-amber-400 relative z-10">
                        {act.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flagship Case Studies */}
            <div>
              <div className="text-[10px] font-mono uppercase text-gray-400 font-bold tracking-widest px-2 mb-2 flex items-center justify-between">
                <span>Flagship Production Systems</span>
                <span className="text-amber-400 font-normal">{filteredResults.flagships.length} Results</span>
              </div>
              
              <div className="space-y-1.5">
                {filteredResults.flagships.map((project, pIdx) => {
                  const globalIdx = filteredResults.actions.length + pIdx;
                  const isSelected = selectedIndex === globalIdx;
                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => {
                        onClose();
                        router.push(`/work/${project.slug || project.id}`);
                      }}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      className={`relative w-full p-2.5 rounded-xl border flex items-center justify-between transition-colors group cursor-pointer text-left z-10 ${
                        isSelected ? 'border-amber-500/50 text-white' : 'border-white/[0.04] bg-white/[0.02] text-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeCommandItemPill"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                          className="absolute inset-0 rounded-xl bg-amber-500/15 border border-amber-400/50 shadow-md shadow-amber-500/10 -z-10"
                        />
                      )}
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-7 h-7 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center font-mono text-[10px] font-bold text-amber-400 group-hover:scale-105 transition-transform">
                          #{project.projectNumber || project.id}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                            {project.title}
                          </div>
                          <div className="text-[10px] text-gray-400">
                            {project.category} • {project.client}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 relative z-10">
                        <div className="hidden sm:flex items-center gap-1">
                          {(project.technologies || []).slice(0, 2).map((tech: string) => (
                            <span key={tech} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-gray-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-amber-400 transition-colors" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-3 bg-black/60 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-400 px-5 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-300 font-bold">UAE Studio Command HUD</span>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span>Select: <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">↑↓</kbd></span>
              <span>Open: <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300">↵</kbd></span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
