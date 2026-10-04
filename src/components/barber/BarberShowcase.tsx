'use client';
import React, { useState } from 'react';
import { BarberNav } from './BarberNav';
import { BarberHero } from './BarberHero';
import { BarberMetrics } from './BarberMetrics';
import { BarberServices } from './BarberServices';
import { BarberDiscovery } from './BarberDiscovery';
import { ServiceDetailModal } from './ServiceDetailModal';
import { BarberFinder } from './BarberFinder';
import { BarberTeam } from './BarberTeam';
import { BarberProfileModal } from './BarberProfileModal';
import { BarberBookingModal } from './BarberBookingModal';
import { AppointmentCalendar } from './AppointmentCalendar';
import { TimeSlotSelector } from './TimeSlotSelector';
import { MembershipSection } from './MembershipSection';
import { MembershipComparison } from './MembershipComparison';
import { GroomingCalculator } from './GroomingCalculator';
import { GroomingPackageBuilder } from './GroomingPackageBuilder';
import { BarberBeforeAfter } from './BarberBeforeAfter';
import { BarberGallery } from './BarberGallery';
import { BarberProducts } from './BarberProducts';
import { ProductDetailModal } from './ProductDetailModal';
import { BarberCartDrawer } from './BarberCartDrawer';
import { BarberWishlistDrawer } from './BarberWishlistDrawer';
import { BarberCheckout } from './BarberCheckout';
import { GroomingQuiz } from './GroomingQuiz';
import { StyleFinder } from './StyleFinder';
import { FaceShapeGuide } from './FaceShapeGuide';
import { HairStyleExplorer } from './HairStyleExplorer';
import { BeardStyleExplorer } from './BeardStyleExplorer';
import { GroomingRoutineBuilder } from './GroomingRoutineBuilder';
import { WeddingGrooming } from './WeddingGrooming';
import { CorporateGrooming } from './CorporateGrooming';
import { PrivateGrooming } from './PrivateGrooming';
import { BarberLocations } from './BarberLocations';
import { BarberExperience } from './BarberExperience';
import { BarberJournal } from './BarberJournal';
import { BarberTestimonials } from './BarberTestimonials';
import { BarberFAQ } from './BarberFAQ';
import { BarberFinalCTA } from './BarberFinalCTA';
import { BarberContact } from './BarberContact';
import { BarberFooter } from './BarberFooter';
import { BarberService, Barber, GroomingProduct } from '@/data/barberData';

export const BarberShowcase: React.FC<any> = () => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<BarberService | null>(null);
  const [selectedBarberModal, setSelectedBarberModal] = useState<Barber | null>(null);
  const [selectedProductModal, setSelectedProductModal] = useState<GroomingProduct | null>(null);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingInitialBarber, setBookingInitialBarber] = useState<string | undefined>(undefined);

  const [cart, setCart] = useState<GroomingProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddToCart = (product: GroomingProduct) => {
    setCart(prev => [...prev, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleOpenBooking = (barberId?: string) => {
    setBookingInitialBarber(barberId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-amber-400 selection:text-slate-950">
      <BarberNav
        onOpenBooking={() => handleOpenBooking()}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        cartCount={cart.length}
        wishlistCount={0}
        onSearch={(q: string) => setSearchQuery(q)}
      />
      <BarberHero onOpenBooking={() => handleOpenBooking()} />
      <BarberMetrics />
      <BarberDiscovery
        initialSearchQuery={searchQuery}
        onBookAppointment={() => handleOpenBooking()}
      />
      <BarberFinder onSelectService={(s: BarberService) => setSelectedServiceModal(s)} onOpenBooking={() => handleOpenBooking()} />
      <BarberTeam onSelectBarber={(b: Barber) => setSelectedBarberModal(b)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <MembershipSection />
      <GroomingCalculator />
      <StyleFinder />
      <HairStyleExplorer />
      <BeardStyleExplorer />
      <BarberBeforeAfter />
      <BarberProducts onSelectProduct={(p: GroomingProduct) => setSelectedProductModal(p)} onAddToCart={handleAddToCart} />
      <WeddingGrooming />
      <CorporateGrooming />
      <PrivateGrooming />
      <BarberLocations />
      <BarberExperience />
      <BarberGallery />
      <BarberJournal />
      <BarberTestimonials />
      <BarberFAQ />
      <BarberFinalCTA onOpenBooking={() => handleOpenBooking()} />
      <BarberContact />
      <BarberFooter />

      {/* Modals & Drawers */}
      <ServiceDetailModal item={selectedServiceModal} onClose={() => setSelectedServiceModal(null)} onOpenBooking={() => handleOpenBooking()} />
      <BarberProfileModal barber={selectedBarberModal} onClose={() => setSelectedBarberModal(null)} onOpenBooking={(id?: string) => handleOpenBooking(id)} />
      <ProductDetailModal item={selectedProductModal} onClose={() => setSelectedProductModal(null)} onAddToCart={handleAddToCart} />
      <BarberBookingModal isOpen={isBookingOpen} initialBarberId={bookingInitialBarber} onClose={() => setIsBookingOpen(false)} />
      <BarberCartDrawer isOpen={isCartOpen} cart={cart} onClose={() => setIsCartOpen(false)} onRemove={handleRemoveFromCart} onOpenCheckout={() => setIsCheckoutOpen(true)} />
      <BarberWishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
      <BarberCheckout isOpen={isCheckoutOpen} cart={cart} onClose={() => setIsCheckoutOpen(false)} />
    </div>
  );
};
