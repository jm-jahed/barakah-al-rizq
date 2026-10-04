'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, ArrowRight, Crown, Layers, SlidersHorizontal } from 'lucide-react';
import { getAllProjects, parseProjectNumberQuery } from '@/data/siteData';
import { ProjectCard } from '@/components/ui/ProjectCard';

const CATEGORY_GROUPS = [
  'All',
  'Real Estate & PropTech',
  'Corporate & Legal',
  'Hospitality & Luxury',
  'Healthcare & Wellness',
  'Retail & E-Commerce',
  'Technology & Education',
] as const;

type CategoryFilter = (typeof CATEGORY_GROUPS)[number];
type SortOption = 'featured' | 'newest' | 'industry';

export default function AllProjectsPage() {
  const allProjects = useMemo(() => getAllProjects(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const searchInputRef = React.useRef<HTMLInputElement | null>(null);

  // Keyboard shortcut listener: "/" to search, "Escape" to clear/blur
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        setSearchQuery('');
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects based on category and search query with exact project number priority
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim();
    const numericQuery = parseProjectNumberQuery(query);

    // 1. Exact Project Number Search — highest priority & exclusive lookup
    if (numericQuery !== null) {
      return allProjects.filter((project) => project.projectNumber === numericQuery);
    }

    // 2. Standard Search & Category Filtering
    return allProjects.filter((project) => {
      const qLower = query.toLowerCase();
      const matchesSearch =
        !qLower ||
        project.title.toLowerCase().includes(qLower) ||
        project.category.toLowerCase().includes(qLower) ||
        project.description.toLowerCase().includes(qLower) ||
        project.client.toLowerCase().includes(qLower) ||
        project.technologies.some((t) => t.toLowerCase().includes(qLower));

      // Category Group matching
      let matchesCategory = true;
      if (selectedCategory !== 'All') {
        const cat = project.category.toLowerCase();
        const id = project.id.toLowerCase();

        if (selectedCategory === 'Real Estate & PropTech') {
          matchesCategory =
            cat.includes('real estate') ||
            cat.includes('property') ||
            cat.includes('construction') ||
            cat.includes('facility') ||
            cat.includes('relocation') ||
            cat.includes('maintenance') ||
            id.includes('real-estate') ||
            id.includes('workspace');
        } else if (selectedCategory === 'Corporate & Legal') {
          matchesCategory =
            cat.includes('legal') ||
            cat.includes('corporate') ||
            cat.includes('tax') ||
            cat.includes('accounting') ||
            cat.includes('finance') ||
            cat.includes('wealth') ||
            cat.includes('business') ||
            cat.includes('consulting') ||
            cat.includes('logistics') ||
            cat.includes('marketing');
        } else if (selectedCategory === 'Hospitality & Luxury') {
          matchesCategory =
            cat.includes('hospitality') ||
            cat.includes('dining') ||
            cat.includes('hotel') ||
            cat.includes('holiday') ||
            cat.includes('tourism') ||
            cat.includes('travel') ||
            cat.includes('aviation') ||
            cat.includes('charters') ||
            cat.includes('maritime') ||
            cat.includes('rentals') ||
            cat.includes('concierge');
        } else if (selectedCategory === 'Healthcare & Wellness') {
          matchesCategory =
            cat.includes('health') ||
            cat.includes('medical') ||
            cat.includes('dental') ||
            cat.includes('eyewear') ||
            cat.includes('spa') ||
            cat.includes('fitness') ||
            cat.includes('pet') ||
            cat.includes('grooming') ||
            cat.includes('beauty');
        } else if (selectedCategory === 'Retail & E-Commerce') {
          matchesCategory =
            cat.includes('e-commerce') ||
            cat.includes('apparel') ||
            cat.includes('fashion') ||
            cat.includes('jewelry') ||
            cat.includes('fragrance') ||
            cat.includes('perfume') ||
            cat.includes('grocery') ||
            cat.includes('food') ||
            cat.includes('commodities') ||
            cat.includes('restaurants');
        } else if (selectedCategory === 'Technology & Education') {
          matchesCategory =
            cat.includes('education') ||
            cat.includes('training') ||
            cat.includes('school') ||
            cat.includes('tech') ||
            cat.includes('bootcamp') ||
            cat.includes('creative') ||
            cat.includes('media');
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [allProjects, searchQuery, selectedCategory]);

  // Sort projects according to selected sorting criteria
  const sortedProjects = useMemo(() => {
    const list = [...filteredProjects];
    if (sortBy === 'featured') {
      return list.sort((a, b) => {
        const rankA = a.featuredRank ?? 999;
        const rankB = b.featuredRank ?? 999;
        return rankA - rankB;
      });
    } else if (sortBy === 'newest') {
      return list.sort((a, b) => (b.projectNumber || 0) - (a.projectNumber || 0));
    } else if (sortBy === 'industry') {
      return list.sort((a, b) => a.category.localeCompare(b.category));
    }
    return list;
  }, [filteredProjects, sortBy]);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* Background radial ambient glow */}
      <div className="fixed top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[200px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-600/5 blur-[180px] pointer-events-none rounded-full" />

      {/* Top Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#07090E]/90 backdrop-blur-xl border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-slate-300 hover:text-white transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
              {allProjects.length} Live Projects
            </span>
          </div>
        </div>
      </header>

      {/* Page Hero Header */}
      <section className="pt-20 pb-14 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 backdrop-blur-md">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
              Complete Portfolio Archive
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            All Engineering Projects.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 font-normal leading-relaxed">
            Explore our complete {allProjects.length}-platform archive of custom digital products, PropTech portals, and AI systems engineered specifically for the UAE commercial market.
          </p>
        </div>
      </section>

      {/* Search & Filtering Bar Section */}
      <section className="py-6 bg-[#0B0E14] border-b border-white/10 sticky top-[65px] z-40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Top Row: Search Input & Sort Selector */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, #01, category, tech..."
                className="w-full pl-11 pr-16 py-3 rounded-xl bg-[#121722] border border-white/10 text-white placeholder-slate-500 text-xs font-mono focus:outline-none focus:border-amber-400 shadow-inner"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white cursor-pointer px-1.5 py-0.5 rounded bg-white/5"
                >
                  Clear
                </button>
              ) : (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-500 border border-white/10 px-1.5 py-0.5 rounded bg-white/[0.04] pointer-events-none hidden sm:inline-block">
                  /
                </span>
              )}
            </div>

            {/* Sort & Count Controls */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#121722] border border-white/10 text-white rounded-lg px-2.5 py-1.5 text-xs font-mono focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="featured">Featured First</option>
                  <option value="newest">Newest First</option>
                  <option value="industry">Industry A-Z</option>
                </select>
              </div>

              <div className="text-xs font-mono text-slate-400">
                Showing <span className="text-amber-400 font-bold">{sortedProjects.length}</span> of {allProjects.length}
              </div>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
            {CATEGORY_GROUPS.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl transition-all whitespace-nowrap font-semibold border cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20'
                      : 'bg-[#121722] text-slate-300 border-white/10 hover:text-white hover:border-amber-500/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {sortedProjects.length === 0 ? (
            <div className="text-center py-24 bg-[#0F141C] rounded-3xl border border-white/10 max-w-xl mx-auto p-12">
              <Layers className="w-12 h-12 text-amber-400 mx-auto mb-4 opacity-60" />
              <h3 className="text-2xl font-bold text-white mb-2">No Matching Projects Found</h3>
              <p className="text-xs text-slate-400 font-mono mb-6">
                {parseProjectNumberQuery(searchQuery) !== null
                  ? `Project #${parseProjectNumberQuery(searchQuery)} is not registered in this archive.`
                  : 'Try searching for a different keyword or select another category filter.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 rounded-xl bg-amber-500 text-black font-extrabold text-xs cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((item, index) => {
                const displayRank = `#${String(item.projectNumber || (index + 1)).padStart(2, '0')}`;

                return (
                  <ProjectCard
                    key={item.id}
                    project={item}
                    index={index}
                    displayRank={displayRank}
                    featuredBadge={item.featured}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
                  />
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-[#07090E] border-t border-white/10 text-center font-mono text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p>© {new Date().getFullYear()} WebStudioAE. All {allProjects.length} flagship platforms engineered with Next.js 16 SSR & brand isolation.</p>
          <Link href="/" className="text-amber-400 hover:underline font-bold inline-block">
            Return to Agency Homepage →
          </Link>
        </div>
      </footer>

    </div>
  );
}

