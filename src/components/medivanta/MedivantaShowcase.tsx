'use client';

import React, { useState } from 'react';
import { MedivantaHero } from './MedivantaHero';
import { MedivantaCommandCenter } from './MedivantaCommandCenter';
import { MedivantaJourney } from './MedivantaJourney';
import { MedivantaOrdering } from './MedivantaOrdering';
import { MedivantaPrescription } from './MedivantaPrescription';
import { MedivantaDeliveryEngine } from './MedivantaDeliveryEngine';
import { MedivantaAvailability } from './MedivantaAvailability';
import { MedivantaInventory } from './MedivantaInventory';
import { MedivantaDoorstepCare } from './MedivantaDoorstepCare';
import { MedivantaNetworkTopology } from './MedivantaNetworkTopology';
import { MedivantaTrustSafety } from './MedivantaTrustSafety';
import { MedivantaAccountExperience } from './MedivantaAccountExperience';
import { MedivantaArchitecture } from './MedivantaArchitecture';
import { MedivantaSignatureStory } from './MedivantaSignatureStory';
import { MedivantaCapabilities } from './MedivantaCapabilities';
import { MedivantaOrderModal } from './MedivantaOrderModal';
import { MEDIVANTA_METADATA, MedicineItem } from '@/data/medivantaData';
import { ShieldAlert } from 'lucide-react';

export const MedivantaShowcase: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState<MedicineItem | null>(null);

  const handleOpenOrderModal = (med?: MedicineItem) => {
    setSelectedMedicine(med || null);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedMedicine(null);
  };

  const handleScrollToTracking = () => {
    const el = document.getElementById('command-center');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToJourney = () => {
    const el = document.getElementById('medicine-journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCatalog = () => {
    const el = document.getElementById('smart-ordering');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020509] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Simulation & Content Safety Banner */}
      <div className="sticky top-0 z-40 bg-[#050d16]/95 border-b border-emerald-500/20 backdrop-blur-md px-4 py-2 text-center text-[11px] font-mono text-emerald-300 flex items-center justify-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate">{MEDIVANTA_METADATA.conceptualNotice}</span>
      </div>

      {/* 1. Hero Section */}
      <MedivantaHero 
        onOrderClick={() => handleOpenOrderModal()}
        onTrackClick={handleScrollToTracking}
        onExploreClick={handleScrollToJourney}
      />

      {/* 2. Delivery Intelligence & Command Center (Live Order #MV-20481) */}
      <div id="command-center">
        <MedivantaCommandCenter />
      </div>

      {/* 3. The 7-Stage Medicine Journey (Prescription to Doorstep) */}
      <div id="medicine-journey">
        <MedivantaJourney />
      </div>

      {/* 4. Smart Medicine Ordering & Catalog */}
      <div id="smart-ordering">
        <MedivantaOrdering onOpenOrderModal={handleOpenOrderModal} />
      </div>

      {/* 5. Prescription Experience & Digital Ingestion */}
      <MedivantaPrescription onOpenUploadModal={() => handleOpenOrderModal()} />

      {/* 6. Smart Delivery Engine (Last-Mile Routing) */}
      <MedivantaDeliveryEngine />

      {/* 7. Medicine Availability Matrix */}
      <MedivantaAvailability />

      {/* 8. Smart Inventory & Micro-Hub Telemetry */}
      <MedivantaInventory />

      {/* 9. Doorstep Experience & Care-First Values */}
      <MedivantaDoorstepCare />

      {/* 10. Healthcare Delivery Network Topology */}
      <MedivantaNetworkTopology />

      {/* 11. Trust & Safety Standards */}
      <MedivantaTrustSafety />

      {/* 12. Patient Account Experience & Order Detail View */}
      <MedivantaAccountExperience />

      {/* 13. Digital Healthcare Architecture & Tech Stack */}
      <MedivantaArchitecture />

      {/* 14. Signature Story (“A MEDICINE DELIVERY IS MORE THAN A PACKAGE”) */}
      <MedivantaSignatureStory />

      {/* 15. Core Capabilities & Final CTA */}
      <MedivantaCapabilities 
        onStartExperience={() => handleOpenOrderModal()}
        onExploreNetwork={handleScrollToCatalog}
      />

      {/* Interactive Order & Prescription Modal */}
      <MedivantaOrderModal 
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        selectedMedicine={selectedMedicine}
      />
    </div>
  );
};
