'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar, ArrowRight, Eye, Layers } from 'lucide-react';
import { VANTAGE_PROJECTS, VantageProject } from '@/data/vantageData';
import { ProjectDetailDrawer } from './ProjectDetailDrawer';

interface FeaturedProjectsProps {
  onRegisterInterest: (project: VantageProject) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onRegisterInterest }) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [activeDrawerProject, setActiveDrawerProject] = useState<VantageProject | null>(null);

  // Filter projects
  const filtered = VANTAGE_PROJECTS.filter((p) => {
    if (selectedStatus !== 'All' && p.status !== selectedStatus) return false;
    if (selectedType !== 'All' && p.type !== selectedType) return false;
    if (selectedCity !== 'All' && p.city !== selectedCity) return false;
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-[#06101E] relative border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono font-bold text-[#C5A059] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30">
              FLAGSHIP REAL ESTATE PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-extrabold text-[#FAFAFA] mt-4">
              Featured Developments.
            </h2>
            <p className="text-base text-stone-300 font-light mt-2 max-w-xl">
              Explore our landmark residential towers, golf mansions, and waterfront mixed-use masterplans across Dubai and Abu Dhabi.
            </p>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-[#0A192F] p-4 rounded-2xl border border-stone-800 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          
          {/* Status Filter */}
          <div>
            <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">DEVELOPMENT STATUS</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-white font-serif font-bold focus:outline-none"
            >
              <option value="All">All Statuses (Off-Plan / Ready)</option>
              <option value="Off-Plan">Off-Plan Launch</option>
              <option value="Under Construction">Under Construction</option>
              <option value="Ready">Ready to Move In</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">PROPERTY TYPE</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-white font-serif font-bold focus:outline-none"
            >
              <option value="All">All Property Types</option>
              <option value="Apartments">Luxury Apartments</option>
              <option value="Villas">Golf & Beach Villas</option>
              <option value="Mixed-Use">Mixed-Use Landmarks</option>
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label className="text-[10px] text-stone-400 uppercase font-bold block mb-1">EMIRATE / LOCATION</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-white font-serif font-bold focus:outline-none"
            >
              <option value="All">All Locations (Dubai / Abu Dhabi)</option>
              <option value="Dubai">Dubai</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
            </select>
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A192F] rounded-3xl border border-stone-800 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#C5A059]/40 transition-all font-sans"
            >
              <div>
                <div className="relative h-72 overflow-hidden bg-[#06101E]">
                  <img
                    src={project.heroImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px]">
                    <span className="px-3 py-1 rounded-full bg-[#06101E]/90 text-[#C5A059] border border-[#C5A059]/40 font-bold uppercase backdrop-blur-md">
                      {project.status}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#06101E]/90 text-white border border-stone-700 font-bold backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-xs">
                    <div>
                      <span className="text-stone-400 text-[10px] uppercase block">STARTING FROM</span>
                      <span className="text-2xl font-serif font-bold text-[#FAFAFA]">
                        AED {project.startingPriceAED.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-[#C5A059] font-bold text-[11px] bg-[#06101E]/90 px-3 py-1 rounded-lg border border-[#C5A059]/30">
                      {project.city}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#FAFAFA] group-hover:text-[#C5A059] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-stone-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      {project.location}
                    </p>
                  </div>

                  <p className="text-xs text-stone-300 font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-stone-800 grid grid-cols-2 gap-2 font-mono text-[11px]">
                    <div>
                      <span className="text-stone-500 uppercase block text-[9px]">HANDOVER</span>
                      <span className="text-stone-200 font-bold">{project.handover}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 uppercase block text-[9px]">UNIT TYPES</span>
                      <span className="text-stone-200 font-bold truncate block">{project.unitTypes}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-3 font-mono text-xs">
                <button
                  onClick={() => setActiveDrawerProject(project)}
                  className="flex-1 py-3.5 rounded-xl bg-[#06101E] hover:bg-stone-800 border border-stone-700 text-[#C5A059] font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Details</span>
                </button>

                <button
                  onClick={() => onRegisterInterest(project)}
                  className="px-5 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#b38e47] text-black font-serif font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg"
                >
                  <span>Register</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Drawer */}
      <ProjectDetailDrawer
        project={activeDrawerProject}
        onClose={() => setActiveDrawerProject(null)}
        onRegisterInterest={onRegisterInterest}
      />
    </section>
  );
};
