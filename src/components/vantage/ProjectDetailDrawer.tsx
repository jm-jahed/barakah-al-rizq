'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Building2, MapPin, Calendar, DollarSign, Layers, MessageCircle } from 'lucide-react';
import { VantageProject, VANTAGE_BRAND } from '@/data/vantageData';

interface ProjectDetailDrawerProps {
  project: VantageProject | null;
  onClose: () => void;
  onRegisterInterest: (project: VantageProject) => void;
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({
  project,
  onClose,
  onRegisterInterest,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#0A192F] border border-stone-700 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative font-sans text-stone-100 max-h-[92vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-xl bg-[#06101E] border border-stone-800 text-stone-400 hover:text-white z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs text-[#C5A059]">
            <span className="px-3 py-1 rounded-full bg-[#06101E] border border-[#C5A059]/30 font-bold uppercase">
              {project.status}
            </span>
            <span>•</span>
            <span className="text-stone-300">{project.type}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              {project.location} ({project.city})
            </span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-serif font-extrabold text-[#FAFAFA] mb-2">{project.name}</h3>
          <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed mb-6">{project.description}</p>

          {/* Main Hero Image */}
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-8 bg-[#06101E] border border-stone-800">
            <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06101E] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
              <span className="px-3 py-1 rounded-lg bg-[#06101E]/90 text-[#C5A059] font-bold border border-[#C5A059]/30">
                Starting Price: AED {project.startingPriceAED.toLocaleString()}
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#06101E]/90 text-white font-bold border border-stone-700">
                Handover: {project.handover}
              </span>
            </div>
          </div>

          {/* Construction Progress Bar */}
          <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800 space-y-2 mb-8 font-mono text-xs">
            <div className="flex justify-between">
              <span className="text-stone-400 uppercase text-[10px] font-bold">CONSTRUCTION PROGRESS STATUS:</span>
              <span className="text-[#C5A059] font-bold">{project.constructionProgress}% COMPLETE</span>
            </div>
            <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C5A059] to-amber-400 transition-all duration-1000"
                style={{ width: `${project.constructionProgress}%` }}
              />
            </div>
          </div>

          {/* 3 Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
              <span className="text-[10px] text-stone-400 uppercase block font-bold">AVAILABLE UNIT TYPES</span>
              <span className="text-[#FAFAFA] font-bold text-sm block mt-1">{project.unitTypes}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
              <span className="text-[10px] text-stone-400 uppercase block font-bold">OFF-PLAN PAYMENT PLAN</span>
              <span className="text-[#C5A059] font-bold text-sm block mt-1">{project.paymentPlan}</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#06101E] border border-stone-800">
              <span className="text-[10px] text-stone-400 uppercase block font-bold">DEVELOPMENT POSITIONING</span>
              <span className="text-emerald-400 font-bold text-xs block mt-1">{project.positioning}</span>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="mb-8 font-mono text-xs space-y-3">
            <span className="text-[10px] text-stone-400 uppercase font-bold block">FLAGSHIP AMENITIES & FEATURES:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.amenities.map((am) => (
                <div key={am} className="p-3 rounded-xl bg-[#06101E] border border-stone-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span className="text-stone-200">{am}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floor Plan Placeholder Preview */}
          <div className="p-6 rounded-2xl bg-[#06101E] border border-stone-800 mb-8 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-stone-400 uppercase font-bold flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#C5A059]" />
                ARCHITECTURAL FLOOR PLAN PREVIEW
              </span>
              <span className="text-[#C5A059] text-[10px]">CAD ARCHITECTURE SHEET</span>
            </div>
            <div className="h-40 rounded-xl bg-[#0A192F] border border-dashed border-stone-700 flex flex-col items-center justify-center text-center p-4">
              <Building2 className="w-8 h-8 text-[#C5A059] mb-2 opacity-60" />
              <span className="text-white font-serif font-bold text-sm">Typical 2BR & 3BR Master Layout</span>
              <span className="text-stone-400 text-[10px]">Contact Sales Desk for Full PDF Floor Plan Brochure</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                const prj = project;
                onClose();
                onRegisterInterest(prj);
              }}
              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#B38E47] text-black font-serif font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
            >
              <span>Register Interest in {project.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={VANTAGE_BRAND.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="py-4 px-6 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sales Desk</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
