'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, TrendingUp, Layers, Crown } from 'lucide-react';
import { getFeaturedProjects, getAllProjects, ProjectItem } from '@/data/siteData';
import { LiveProjectExplorer } from './LiveProjectExplorer';

interface SelectedWorkProps {
  onOpenOrderModal?: (plan?: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenOrderModal }) => {
  const [allProjects, setAllProjects] = useState<ProjectItem[]>(() => getAllProjects());
  const [featuredProjects, setFeaturedProjects] = useState<ProjectItem[]>(() => getFeaturedProjects(12));

  // Dynamically load Admin-controlled selected projects from CMS / Database
  useEffect(() => {
    fetch('/api/admin/projects')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.projects?.length) {
          setAllProjects(data.projects);
          // If Admin has saved selected project IDs, preserve their exact 12 selection & order
          if (data.selectedProjectIds?.length) {
            const seen = new Set<string>();
            const matched: ProjectItem[] = [];
            for (const id of data.selectedProjectIds) {
              const p = data.projects.find((item: any) => String(item.id) === String(id) || String(item.slug) === String(id));
              if (p && !seen.has(p.id)) {
                seen.add(p.id);
                matched.push(p);
              }
              if (matched.length === 12) break;
            }
            if (matched.length > 0) {
              setFeaturedProjects(matched);
              return;
            }
          }
          // Default fallback: Top 12 unique featured projects
          const seen = new Set<string>();
          const uniqueFeatured: ProjectItem[] = [];
          for (const p of data.projects) {
            if (!seen.has(p.id)) {
              seen.add(p.id);
              uniqueFeatured.push(p);
            }
            if (uniqueFeatured.length === 12) break;
          }
          setFeaturedProjects(uniqueFeatured);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#07090E] relative overflow-hidden font-sans">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/[0.03] blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header: Clean Editorial Hierarchy with Kinetic Typography */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
            hidden: {}
          }}
          className="text-center max-w-3xl mx-auto pb-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono tracking-wider backdrop-blur-md mb-5"
          >
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>SELECTED PROJECTS</span>
          </motion.div>

          {/* Signature Typography with Liquid Gold Shimmer & Kinetic Reveal */}
          <div className="overflow-hidden pb-1">
            <motion.h2
              variants={{
                hidden: { y: '80%', opacity: 0, filter: 'blur(4px)' },
                visible: { y: '0%', opacity: 1, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              <span className="block text-white">
                Projects,
              </span>
              <span className="block mt-1 italic font-black bg-[linear-gradient(110deg,#fde68a,30%,#f59e0b,50%,#fef08a,70%,#f59e0b)] bg-[length:250%_100%] bg-clip-text text-transparent animate-[shimmer_5s_linear_infinite]">
                Engineered to Lead.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal mt-4"
          >
            A curated selection of our most ambitious digital platforms — engineered for UAE market leaders, high-growth enterprises, and brands built for global scale.
          </motion.p>

          {/* Top Premium Centered CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="pt-6 flex items-center justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer font-mono group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#07090E]"
            >
              <span>SEE ALL PROJECTS</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Live Project Explorer (Grid + Compact modes, Search, Sector Filters, Quick-Preview Blueprint) */}
        <LiveProjectExplorer
          projects={featuredProjects.slice(0, 12)}
          onOpenOrderModal={onOpenOrderModal}
        />

        {/* ONE Premium Centered CTA linking to the full projects archive */}
        <div className="pt-6 pb-2 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer font-mono group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#07090E]"
          >
            <span>SEE ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SelectedWork;
