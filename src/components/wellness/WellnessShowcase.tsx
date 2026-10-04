'use client';
import React, { useState } from 'react';
import { WellnessNav } from './WellnessNav';
import { WellnessHero } from './WellnessHero';
import { WellnessDisciplineExplorer } from './WellnessDisciplineExplorer';
import { WellnessDiscovery } from './WellnessDiscovery';
import { WellnessSessionModal } from './WellnessSessionModal';
import { WellnessMetrics } from './WellnessMetrics';
import { WellnessGoalMatcher } from './WellnessGoalMatcher';
import { WellnessClasses } from './WellnessClasses';
import { WellnessClassModal } from './WellnessClassModal';
import { WellnessBookingModal } from './WellnessBookingModal';
import { WellnessSchedule } from './WellnessSchedule';
import { WellnessMemberships } from './WellnessMemberships';
import { WellnessComparison } from './WellnessComparison';
import { WellnessCalculator } from './WellnessCalculator';
import { PersonalWellnessPlanner } from './PersonalWellnessPlanner';
import { WellnessProgressDashboard } from './WellnessProgressDashboard';
import { RecoverySection } from './RecoverySection';
import { MindfulnessSection } from './MindfulnessSection';
import { SoundBathSection } from './SoundBathSection';
import { PrivateCoaching } from './PrivateCoaching';
import { CorporateWellness } from './CorporateWellness';
import { WellnessChallenge } from './WellnessChallenge';
import { WellnessInstructors } from './WellnessInstructors';
import { InstructorProfileModal } from './InstructorProfileModal';
import { StudioExperience } from './StudioExperience';
import { StudioTour } from './StudioTour';
import { WellnessGallery } from './WellnessGallery';
import { WellnessJourney } from './WellnessJourney';
import { WellnessNutrition } from './WellnessNutrition';
import { WellnessJournal } from './WellnessJournal';
import { WellnessTestimonials } from './WellnessTestimonials';
import { WellnessLocation } from './WellnessLocation';
import { WellnessFAQ } from './WellnessFAQ';
import { WellnessFinalCTA } from './WellnessFinalCTA';
import { WellnessContact } from './WellnessContact';
import { WellnessFooter } from './WellnessFooter';
import { YogaClass, WellnessInstructor } from '@/data/wellnessData';
import { AURA_WELLNESS_CATALOG, WellnessCatalogItem } from '@/data/wellnessCatalogData';

export const WellnessShowcase: React.FC<any> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [savedItems, setSavedItems] = useState<WellnessCatalogItem[]>([]);
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<WellnessCatalogItem | null>(null);

  const [selectedClassModal, setSelectedClassModal] = useState<YogaClass | null>(null);
  const [selectedInstructorModal, setSelectedInstructorModal] = useState<WellnessInstructor | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialClass, setBookingInitialClass] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenBooking = (classId?: string) => {
    setBookingInitialClass(classId);
    setIsBookingOpen(true);
  };

  const handleToggleSave = (item: WellnessCatalogItem) => {
    setSavedItems(prev => {
      const exists = prev.some(si => si.id === item.id);
      if (exists) {
        return prev.filter(si => si.id !== item.id);
      }
      return [...prev, item];
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0D0B] text-white font-sans selection:bg-amber-500 selection:text-black overflow-x-clip max-w-full">
      {/* Brand Navigation */}
      <WellnessNav 
        onOpenBooking={() => handleOpenBooking()} 
        onSearch={(q: string) => setSearchQuery(q)} 
      />

      {/* Hero Section */}
      <WellnessHero 
        onOpenBooking={() => handleOpenBooking()}
        onExploreClick={() => {
          const el = document.getElementById('catalog');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onDisciplinesClick={() => {
          const el = document.getElementById('modalities');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 8 Modalities Arenas */}
      <div id="modalities" className="scroll-mt-20">
        <WellnessDisciplineExplorer
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => {
            setSelectedCategory(id);
            const el = document.getElementById('catalog');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </div>

      {/* 160 Practices Catalog with Progressive See More */}
      <section id="catalog" className="scroll-mt-20">
        <WellnessDiscovery
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectItem={(item) => setSelectedCatalogItem(item)}
          onBookItem={(item) => handleOpenBooking(item.id)}
          savedItems={savedItems}
          onToggleSave={handleToggleSave}
        />
      </section>

      {/* Supporting Sections */}
      <WellnessMetrics />

      <div id="matcher" className="scroll-mt-20">
        <WellnessGoalMatcher 
          onSelectClass={(c: YogaClass) => setSelectedClassModal(c)} 
          onOpenBooking={(id?: string) => handleOpenBooking(id)} 
        />
      </div>

      <div id="schedule" className="scroll-mt-20">
        <WellnessSchedule onOpenBooking={() => handleOpenBooking()} />
      </div>

      <div id="memberships" className="scroll-mt-20">
        <WellnessMemberships onOpenBooking={() => handleOpenBooking()} />
      </div>

      <WellnessComparison />
      <WellnessCalculator onOpenBooking={() => handleOpenBooking()} />
      <PersonalWellnessPlanner />
      <WellnessProgressDashboard />
      <RecoverySection onOpenBooking={() => handleOpenBooking()} />

      <div id="mindfulness" className="scroll-mt-20">
        <MindfulnessSection />
      </div>

      <SoundBathSection onOpenBooking={() => handleOpenBooking()} />
      <PrivateCoaching onOpenBooking={() => handleOpenBooking()} />
      <CorporateWellness />
      <WellnessChallenge />

      <div id="instructors" className="scroll-mt-20">
        <WellnessInstructors 
          onSelectInstructor={(i: WellnessInstructor) => setSelectedInstructorModal(i)} 
          onOpenBooking={() => handleOpenBooking()} 
        />
      </div>

      <StudioExperience />

      <div id="tour" className="scroll-mt-20">
        <StudioTour />
      </div>

      <WellnessGallery />
      <WellnessJourney />
      <WellnessNutrition />
      <WellnessJournal />
      <WellnessTestimonials />
      <WellnessLocation />
      <WellnessFAQ />
      <WellnessFinalCTA onOpenBooking={() => handleOpenBooking()} />

      <div id="contact" className="scroll-mt-20">
        <WellnessContact />
      </div>

      <WellnessFooter />

      {/* Modals */}
      {selectedCatalogItem && (
        <WellnessSessionModal
          item={selectedCatalogItem}
          onClose={() => setSelectedCatalogItem(null)}
          onBookDirect={(item) => {
            setSelectedCatalogItem(null);
            handleOpenBooking(item.id);
          }}
          isSaved={savedItems.some(si => si.id === selectedCatalogItem.id)}
          onToggleSave={handleToggleSave}
        />
      )}

      <WellnessClassModal 
        item={selectedClassModal} 
        onClose={() => setSelectedClassModal(null)} 
        onOpenBooking={(id?: string) => handleOpenBooking(id)} 
      />

      <InstructorProfileModal 
        instructor={selectedInstructorModal} 
        onClose={() => setSelectedInstructorModal(null)} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      <WellnessBookingModal 
        isOpen={isBookingOpen} 
        initialClassId={bookingInitialClass} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  );
};
