'use client';

import React, { useState, useEffect } from 'react';
import { useFramehausLanguage } from '@/context/FramehausLanguageContext';
import { FRAMEHAUS_TRANSLATIONS } from '@/data/framehausTranslations';
import {
  Camera,
  Play,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Sliders,
  Maximize2,
  X,
  Eye,
  Award,
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 'arch',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    categoryKey: 'architecture',
    tag: '150MP Phase One • Rodenstock Tilt-Shift',
  },
  {
    id: 'prod',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=85',
    categoryKey: 'product',
    tag: 'Focus-Stacked Macro • Broncolor Strobes',
  },
  {
    id: 'fash',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
    categoryKey: 'fashion',
    tag: 'Haute Couture • Desert Dunes Location',
  },
  {
    id: 'hosp',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85',
    categoryKey: 'hospitality',
    tag: 'Michelin Star Atmosphere & Plating',
  },
  {
    id: 'auto',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85',
    categoryKey: 'motion',
    tag: 'Drive-In Soundstage • 8K RED Cinema Rig',
  },
];

export const FramehausHero: React.FC = () => {
  const { language, isRtl, toArabicDigits } = useFramehausLanguage();
  const t = FRAMEHAUS_TRANSLATIONS[language];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#08080A] overflow-hidden border-b border-zinc-800">
      {/* Background Image Slideshow with Smooth Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105'
            } transition-transform duration-7000`}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/70 to-[#08080A]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#08080A]/60 to-[#08080A]" />
        {/* Studio Grid Lines Texture */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          {/* Top Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/40 backdrop-blur-md text-xs font-mono text-amber-400 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-bold tracking-wider uppercase">{t.hero.badge}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-serif leading-[1.08]">
              {t.hero.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                {t.hero.titleLine2}
              </span>
            </h1>
            <p className="text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-3xl pt-3">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#estimator"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-mono font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-500/20 hover:scale-[1.02] transition-all"
            >
              <Sliders className="w-4 h-4" />
              <span>{t.hero.primaryCta}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-4 rounded bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 font-mono text-sm tracking-wider uppercase transition-colors"
            >
              <Camera className="w-4 h-4 text-amber-400" />
              <span>{t.hero.secondaryCta}</span>
            </a>

            <button
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center gap-2.5 px-5 py-4 rounded bg-zinc-950/60 hover:bg-zinc-900 text-zinc-300 hover:text-amber-400 border border-zinc-800 font-mono text-xs tracking-wider uppercase transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                <Play className="w-3 h-3 text-amber-400 fill-amber-400 ml-0.5" />
              </div>
              <span>{t.hero.virtualTourCta}</span>
            </button>
          </div>

          {/* Live Availability Notice */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.hero.availabilityBadge}</span>
          </div>
        </div>
      </div>

      {/* Slide Navigator & Current Subject Indicator */}
      <div className="relative z-10 border-t border-zinc-800/80 bg-[#070709]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Slide Indicator Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`px-3 py-1.5 rounded text-[11px] font-mono whitespace-nowrap transition-all flex items-center gap-2 ${
                  idx === currentSlide
                    ? 'bg-amber-500/20 border border-amber-500 text-amber-400 font-bold'
                    : 'bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>{language === 'ar' ? toArabicDigits(idx + 1) : `0${idx + 1}`}</span>
                <span>
                  {
                    t.hero.slideLabels[
                      slide.categoryKey as keyof typeof t.hero.slideLabels
                    ]
                  }
                </span>
              </button>
            ))}
          </div>

          {/* Active Slide Tech Specs */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/60 px-3.5 py-1.5 rounded border border-zinc-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{HERO_SLIDES[currentSlide].tag}</span>
          </div>
        </div>
      </div>

      {/* 4 Key Studio Metrics Strip */}
      <div className="relative z-10 border-t border-zinc-800 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight flex items-baseline gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                {t.hero.stats.campaignsVal}
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              {t.hero.stats.campaigns}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight flex items-baseline gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                {t.hero.stats.awardsVal}
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              {t.hero.stats.awards}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight flex items-baseline gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                {t.hero.stats.resolutionVal}
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              {t.hero.stats.resolution}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight flex items-baseline gap-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                {t.hero.stats.turnaroundVal}
              </span>
            </div>
            <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
              {t.hero.stats.turnaround}
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour / Reel Preview Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/80">
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-200">
                <Play className="w-4 h-4 text-amber-400" />
                <span className="font-bold">FRAMEHAUS UAE 2026 Production Showreel & Facility Walkthrough</span>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80"
                alt="Studio 1 Al Quoz Virtual Tour"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <Play className="w-8 h-8 text-amber-400 fill-amber-400 ml-1" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-bold font-serif text-white">Al Quoz 3,500 sqft Cyclorama & Abu Dhabi Soundstage</h4>
                  <p className="text-xs font-mono text-zinc-400">Phase One 150MP • Broncolor Scoro • RED 8K Cinema • EIZO Calibrated Suites</p>
                </div>
                <a
                  href="#inquiry"
                  onClick={() => setShowVideoModal(false)}
                  className="px-5 py-2.5 rounded bg-amber-400 hover:bg-amber-300 text-black font-mono text-xs font-bold uppercase tracking-wider"
                >
                  Book Private Studio Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
