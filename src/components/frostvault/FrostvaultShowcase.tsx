'use client';

import React, { useState } from 'react';
import { FrostvaultHero } from './FrostvaultHero';
import { FrostvaultStorageMap } from './FrostvaultStorageMap';
import { FrostvaultOperationsCenter } from './FrostvaultOperationsCenter';
import { FrostvaultTemperatureIntelligence } from './FrostvaultTemperatureIntelligence';
import { FrostvaultAlertSystem } from './FrostvaultAlertSystem';
import { FrostvaultInventoryIntelligence } from './FrostvaultInventoryIntelligence';
import { FrostvaultWarehouseJourney } from './FrostvaultWarehouseJourney';
import { FrostvaultCapacityExperience } from './FrostvaultCapacityExperience';
import { FrostvaultFloorDigitalTwin } from './FrostvaultFloorDigitalTwin';
import { FrostvaultAutomation } from './FrostvaultAutomation';
import { FrostvaultFacilityTypes } from './FrostvaultFacilityTypes';
import { FrostvaultIndustryUseCases } from './FrostvaultIndustryUseCases';
import { FrostvaultPerformanceRadar } from './FrostvaultPerformanceRadar';
import { FrostvaultSmartDispatch } from './FrostvaultSmartDispatch';
import { FrostvaultSmartMatch } from './FrostvaultSmartMatch';
import { FrostvaultArchitecture } from './FrostvaultArchitecture';
import { FrostvaultSecurityControl } from './FrostvaultSecurityControl';
import { FrostvaultSignatureStory } from './FrostvaultSignatureStory';
import { FrostvaultClosingCTA } from './FrostvaultClosingCTA';
import { FrostvaultStorageRequestModal } from './FrostvaultStorageRequestModal';
import { StorageZone, FacilityType } from '@/data/frostvaultData';

export const FrostvaultShowcase: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedZoneCode, setSelectedZoneCode] = useState<string>('ZONE-A');

  const handleOpenStorageModal = (zoneCode?: string) => {
    if (zoneCode) {
      setSelectedZoneCode(zoneCode);
    }
    setIsModalOpen(true);
  };

  const handleSelectZoneFromHero = (zoneCode: string) => {
    setSelectedZoneCode(zoneCode);
    const el = document.getElementById('storage-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreOperations = () => {
    const el = document.getElementById('inventory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070b0e] text-[#f1f5f9] selection:bg-[#38bdf8]/30 selection:text-[#f8fafc]">
      {/* 1. Hero Section */}
      <FrostvaultHero
        onRequestStorage={() => handleOpenStorageModal()}
        onExploreOperations={handleExploreOperations}
        onSelectZone={handleSelectZoneFromHero}
      />

      {/* 2. Digital Cold Storage Map */}
      <FrostvaultStorageMap
        selectedZoneCode={selectedZoneCode}
        onRequestQuoteForZone={(z) => handleOpenStorageModal(z.code)}
      />

      {/* 3. Live Operations Simulation Center */}
      <FrostvaultOperationsCenter />

      {/* 4. Temperature Intelligence (Multi-Zone Graphs) */}
      <FrostvaultTemperatureIntelligence />

      {/* 5. Smart Alert System */}
      <FrostvaultAlertSystem />

      {/* 6. Inventory Intelligence (22+ Items) */}
      <FrostvaultInventoryIntelligence />

      {/* 7. Smart Warehouse Journey (8 Stages) */}
      <FrostvaultWarehouseJourney />

      {/* 8. Warehouse Capacity Experience */}
      <FrostvaultCapacityExperience
        onRequestSpace={() => handleOpenStorageModal()}
      />

      {/* 9. Digital Warehouse Floor Twin */}
      <FrostvaultFloorDigitalTwin />

      {/* 10. Automated Robotics & Retrieval */}
      <FrostvaultAutomation />

      {/* 11. Facility Types & Regimes */}
      <FrostvaultFacilityTypes
        onRequestQuote={() => handleOpenStorageModal()}
      />

      {/* 12. Industry Use Cases */}
      <FrostvaultIndustryUseCases />

      {/* 13. Facility Performance Radar */}
      <FrostvaultPerformanceRadar />

      {/* 14. Smart Outbound Dispatch */}
      <FrostvaultSmartDispatch />

      {/* 15. Smart Match Recommender */}
      <FrostvaultSmartMatch
        onRequestQuoteWithZone={(z) => handleOpenStorageModal(z)}
      />

      {/* 16. Cold Chain Enterprise Architecture */}
      <FrostvaultArchitecture />

      {/* 17. Security & Governance Control */}
      <FrostvaultSecurityControl />

      {/* 18. The Signature Story */}
      <FrostvaultSignatureStory />

      {/* 19. Final Closing CTA */}
      <FrostvaultClosingCTA
        onRequestStorage={() => handleOpenStorageModal()}
        onExploreOperations={handleExploreOperations}
      />

      {/* Multi-Step Storage Request Modal */}
      <FrostvaultStorageRequestModal
        isOpen={isModalOpen}
        initialZoneCode={selectedZoneCode}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
