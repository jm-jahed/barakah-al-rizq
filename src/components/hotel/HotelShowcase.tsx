'use client';

import React, { useState } from 'react';
import { HotelNav } from './HotelNav';
import { HotelHero } from './HotelHero';
import { BookingBar } from './BookingBar';
import { HotelIntroduction } from './HotelIntroduction';
import { RoomsSuites } from './RoomsSuites';
import { RoomDetailModal } from './RoomDetailModal';
import { SignatureSuite } from './SignatureSuite';
import { DiningSection } from './DiningSection';
import { ChefSignature } from './ChefSignature';
import { SpaWellness } from './SpaWellness';
import { ExperiencesSection } from './ExperiencesSection';
import { ConciergeSection } from './ConciergeSection';
import { HotelGallery } from './HotelGallery';
import { GuestJourney } from './GuestJourney';
import { GuestReviews } from './GuestReviews';
import { RecognitionSection } from './RecognitionSection';
import { HotelLocation } from './HotelLocation';
import { SeasonalGuide } from './SeasonalGuide';
import { BookingExperience } from './BookingExperience';
import { HotelFAQ } from './HotelFAQ';
import { HotelFinalCTA } from './HotelFinalCTA';
import { HotelFooter } from './HotelFooter';
import { RoomType, ExperienceItem } from '@/data/hotelData';

interface HotelShowcaseProps {
  standalone?: boolean;
}

export const HotelShowcase: React.FC<HotelShowcaseProps> = ({ standalone = true }) => {
  const [activeTab, setActiveTab] = useState<string>('house');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomDetail, setSelectedRoomDetail] = useState<RoomType | null>(null);
  const [initialBookingRoom, setInitialBookingRoom] = useState<RoomType | null>(null);

  const handleOpenBookingModal = (room?: RoomType | null) => {
    setInitialBookingRoom(room || null);
    setIsBookingOpen(true);
  };

  const handleOpenConciergeModal = () => {
    const el = document.getElementById('concierge-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight * 0.7, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1917] text-stone-100 font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* Quiet Luxury Navigation */}
      <HotelNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBookingModal={() => handleOpenBookingModal()}
        onOpenConciergeModal={handleOpenConciergeModal}
      />

      <main id="top">
        
        {/* Full-Screen Hero */}
        <HotelHero
          onOpenBookingModal={() => handleOpenBookingModal()}
          onExploreHouse={() => {
            const el = document.getElementById('house');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Floating Availability Bar */}
        <BookingBar
          onSearchAvailability={(params) => {
            handleOpenBookingModal();
          }}
        />

        {/* Hotel Introduction - THE HOUSE */}
        <HotelIntroduction />

        {/* Rooms & Suites Stack */}
        <RoomsSuites
          onSelectRoom={(room) => setSelectedRoomDetail(room)}
          onBookRoom={(room) => handleOpenBookingModal(room)}
        />

        {/* Flagship Panorama Suite Feature */}
        <SignatureSuite
          onSelectRoom={(room) => setSelectedRoomDetail(room)}
        />

        {/* Gastronomy & ORA Restaurant */}
        <DiningSection
          onOpenReservationModal={handleOpenConciergeModal}
        />

        {/* Culinary Dishes by Chef Marco */}
        <ChefSignature />

        {/* Wellness & Spa */}
        <SpaWellness
          onOpenWellnessModal={handleOpenConciergeModal}
        />

        {/* Curated Coastal Experiences */}
        <ExperiencesSection
          onRequestExperience={(exp) => handleOpenConciergeModal()}
        />

        {/* Concierge Request Module */}
        <div id="concierge-form">
          <ConciergeSection />
        </div>

        {/* Filterable Masonry Gallery */}
        <HotelGallery />

        {/* Guest Journey Timeline */}
        <GuestJourney />

        {/* Testimonial Reflections */}
        <GuestReviews />

        {/* Awards Recognition */}
        <RecognitionSection />

        {/* Location & Map Distances */}
        <HotelLocation />

        {/* Seasonal Guide */}
        <SeasonalGuide />

        {/* Accordion FAQs */}
        <HotelFAQ />

        {/* Final Conversion CTA */}
        <HotelFinalCTA
          onOpenBookingModal={() => handleOpenBookingModal()}
          onOpenConciergeModal={handleOpenConciergeModal}
        />

      </main>

      {/* Footer */}
      <HotelFooter />

      {/* Room Details Modal */}
      <RoomDetailModal
        room={selectedRoomDetail}
        onClose={() => setSelectedRoomDetail(null)}
        onBookRoom={(room) => handleOpenBookingModal(room)}
      />

      {/* Mock Reservation Flow Drawer */}
      <BookingExperience
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoom={initialBookingRoom}
      />

    </div>
  );
};
