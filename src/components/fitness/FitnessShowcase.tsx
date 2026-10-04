'use client';
import React, { useState } from 'react';
import { FITNESS_CATALOG, FitnessProgram } from '@/data/fitnessCatalogData';
import { FitnessNav } from './FitnessNav';
import { FitnessHero } from './FitnessHero';
import { DisciplineExplorer } from './DisciplineExplorer';
import { FitnessDiscovery } from './FitnessDiscovery';
import { MembershipEstimator } from './MembershipEstimator';
import { FitnessMetrics } from './FitnessMetrics';
import { RecoverySection } from './RecoverySection';
import { FacilityTour } from './FacilityTour';
import { FitnessTransformations } from './FitnessTransformations';
import { FitnessTestimonials } from './FitnessTestimonials';
import { FitnessFAQ } from './FitnessFAQ';
import { FitnessFooter } from './FitnessFooter';
import { FitnessProgramModal } from './FitnessProgramModal';
import { AssessmentBookingDrawer } from './AssessmentBookingDrawer';
import { SavedProgramsDrawer } from './SavedProgramsDrawer';
import { FitnessSearchOverlay } from './FitnessSearchOverlay';
import { FitnessComparator } from './FitnessComparator';

export const FitnessShowcase: React.FC = () => {
  // Selected category for filtering 160 items
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // State for PDP modal
  const [selectedProgram, setSelectedProgram] = useState<FitnessProgram | null>(null);

  // State for Assessment Booking Drawer
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [assessmentProgram, setAssessmentProgram] = useState<FitnessProgram | null>(null);
  const [customQuote, setCustomQuote] = useState<any>(null);

  // State for Saved / Wishlist Protocols
  const [savedPrograms, setSavedPrograms] = useState<FitnessProgram[]>([]);
  const [isSavedOpen, setIsSavedOpen] = useState(false);

  // State for Comparison Matrix
  const [comparedPrograms, setComparedPrograms] = useState<FitnessProgram[]>([]);
  const [isComparatorOpen, setIsComparatorOpen] = useState(false);

  // State for ⌘K Search Overlay
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Wishlist toggle handler
  const handleToggleSave = (program: FitnessProgram) => {
    setSavedPrograms(prev => {
      const exists = prev.some(p => p.id === program.id);
      if (exists) {
        return prev.filter(p => p.id !== program.id);
      } else {
        return [...prev, program];
      }
    });
  };

  // Compare toggle handler
  const handleToggleCompare = (program: FitnessProgram) => {
    setComparedPrograms(prev => {
      const exists = prev.some(p => p.id === program.id);
      if (exists) {
        return prev.filter(p => p.id !== program.id);
      } else {
        if (prev.length >= 4) {
          alert('You can compare up to 4 athletic performance protocols simultaneously.');
          return prev;
        }
        return [...prev, program];
      }
    });
  };

  const handleBookAssessmentForProgram = (program?: FitnessProgram | null) => {
    setAssessmentProgram(program || null);
    setCustomQuote(null);
    setIsAssessmentOpen(true);
  };

  const handleBookWithCustomQuote = (quote: any) => {
    setAssessmentProgram(null);
    setCustomQuote(quote);
    setIsAssessmentOpen(true);
  };

  const handleSelectDiscipline = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const el = document.getElementById('catalog');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0A0908] min-h-screen text-[#E8E2D5] font-sans selection:bg-red-500/30">
      {/* Dynamic Nav Bar */}
      <FitnessNav
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenComparator={() => setIsComparatorOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onBookAssessment={() => handleBookAssessmentForProgram(null)}
        savedCount={savedPrograms.length}
        compareCount={comparedPrograms.length}
      />

      {/* Hero Section */}
      <FitnessHero
        onExploreCatalog={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenEstimator={() => {
          const el = document.getElementById('estimator');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onBookAssessment={() => handleBookAssessmentForProgram(null)}
      />

      {/* 8 Disciplines Explorer */}
      <div id="disciplines">
        <DisciplineExplorer
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectDiscipline}
        />
      </div>

      {/* 160 Protocols Catalog Discovery */}
      <div id="catalog">
        <FitnessDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onSelectProgram={(program) => setSelectedProgram(program)}
          onBookProgram={(program) => handleBookAssessmentForProgram(program)}
          comparedPrograms={comparedPrograms}
          onToggleCompare={handleToggleCompare}
          savedPrograms={savedPrograms}
          onToggleSave={handleToggleSave}
        />
      </div>

      {/* Membership & Dual-Club Estimator */}
      <div id="estimator">
        <MembershipEstimator
          onOpenBookingWithQuote={handleBookWithCustomQuote}
        />
      </div>

      {/* Telemetry Metrics */}
      <FitnessMetrics />

      {/* Transformations Case Studies */}
      <div id="transformations">
        <FitnessTransformations />
      </div>

      {/* Sub-Zero Recovery Suite */}
      <div id="recovery">
        <RecoverySection />
      </div>

      {/* Facility Visual Tour */}
      <div id="facilities">
        <FacilityTour />
      </div>

      {/* Athlete Testimonials */}
      <FitnessTestimonials />

      {/* FAQ */}
      <FitnessFAQ />

      {/* Footer */}
      <div id="contact">
        <FitnessFooter />
      </div>

      {/* PDP Protocol Specs Modal */}
      <FitnessProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBook={(p) => {
          setSelectedProgram(null);
          handleBookAssessmentForProgram(p);
        }}
        isSaved={selectedProgram ? savedPrograms.some(p => p.id === selectedProgram.id) : false}
        onToggleSave={handleToggleSave}
        isCompared={selectedProgram ? comparedPrograms.some(p => p.id === selectedProgram.id) : false}
        onToggleCompare={handleToggleCompare}
      />

      {/* VIP Assessment Booking Drawer */}
      <AssessmentBookingDrawer
        isOpen={isAssessmentOpen}
        onClose={() => {
          setIsAssessmentOpen(false);
          setAssessmentProgram(null);
          setCustomQuote(null);
        }}
        selectedProgram={assessmentProgram}
        customQuote={customQuote}
      />

      {/* Saved Shortlist Drawer */}
      <SavedProgramsDrawer
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
        savedPrograms={savedPrograms}
        onRemove={(id) => setSavedPrograms(prev => prev.filter(p => p.id !== id))}
        onClear={() => setSavedPrograms([])}
        onSelectProgram={(p) => setSelectedProgram(p)}
        onBookAssessment={(p) => handleBookAssessmentForProgram(p)}
      />

      {/* ⌘K Search Overlay */}
      <FitnessSearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        protocols={FITNESS_CATALOG}
        onSelectProgram={(p) => setSelectedProgram(p)}
      />

      {/* Side-by-Side Comparator Matrix */}
      {comparedPrograms.length > 0 && isComparatorOpen && (
        <FitnessComparator
          programs={comparedPrograms}
          onRemove={(id) => setComparedPrograms(prev => prev.filter(p => p.id !== id))}
          onClear={() => setComparedPrograms([])}
          onClose={() => setIsComparatorOpen(false)}
          onBook={(p) => {
            setIsComparatorOpen(false);
            handleBookAssessmentForProgram(p);
          }}
        />
      )}
    </div>
  );
};
