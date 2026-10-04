'use client';

import React, { useState } from 'react';
import { VirelisHero } from './VirelisHero';
import { VirelisCommandCenter } from './VirelisCommandCenter';
import { VirelisJourney } from './VirelisJourney';
import { VirelisLabIntelligence } from './VirelisLabIntelligence';
import { VirelisMedicalImaging } from './VirelisMedicalImaging';
import { VirelisDiagnosticSignals } from './VirelisDiagnosticSignals';
import { VirelisAiAssisted } from './VirelisAiAssisted';
import { VirelisResultExperience } from './VirelisResultExperience';
import { VirelisQualityTraceability } from './VirelisQualityTraceability';
import { VirelisWorkflowMap } from './VirelisWorkflowMap';
import { VirelisMultiModal } from './VirelisMultiModal';
import { VirelisSecurity } from './VirelisSecurity';
import { VirelisCollaboration } from './VirelisCollaboration';
import { VirelisAnalytics } from './VirelisAnalytics';
import { VirelisDigitalTwin } from './VirelisDigitalTwin';
import { VirelisSignatureStory } from './VirelisSignatureStory';
import { VirelisCapabilities } from './VirelisCapabilities';
import { VirelisProjectModal } from './VirelisProjectModal';
import { VIRELIS_METADATA } from '@/data/virelisData';
import { ShieldAlert } from 'lucide-react';

export const VirelisShowcase: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const handleExploreDiagnostics = () => {
    const el = document.getElementById('command-center');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewFlow = () => {
    const el = document.getElementById('diagnostic-journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020408] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Simulation & Content Safety Banner */}
      <div className="sticky top-0 z-40 bg-[#060c16]/95 border-b border-cyan-500/20 backdrop-blur-md px-4 py-2 text-center text-[11px] font-mono text-cyan-300 flex items-center justify-center gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate">{VIRELIS_METADATA.conceptualNotice}</span>
      </div>

      {/* 1. Hero Section */}
      <VirelisHero 
        onExploreClick={handleExploreDiagnostics}
        onWorkflowClick={handleViewFlow}
        onOpenModal={handleOpenConsultation}
      />

      {/* 2. Diagnostic Command Center */}
      <div id="command-center">
        <VirelisCommandCenter />
      </div>

      {/* 3. The Diagnostic Journey (From Signal to Insight) */}
      <div id="diagnostic-journey">
        <VirelisJourney />
      </div>

      {/* 4. Laboratory Intelligence */}
      <VirelisLabIntelligence />

      {/* 5. Medical Imaging (PACS & Multi-Modality) */}
      <VirelisMedicalImaging />

      {/* 6. Diagnostic Signals (Context & Synthesis) */}
      <VirelisDiagnosticSignals />

      {/* 7. AI-Assisted Analysis (Clinician Supervised) */}
      <VirelisAiAssisted />

      {/* 8. Patient / Clinical Result Experience */}
      <VirelisResultExperience />

      {/* 9. Quality & Traceability Path */}
      <VirelisQualityTraceability />

      {/* 10. Interactive Diagnostic Workflow Map (8-Steps) */}
      <VirelisWorkflowMap />

      {/* 11. Multi-Modal Diagnostics */}
      <VirelisMultiModal />

      {/* 12. Security & Privacy Architecture */}
      <VirelisSecurity />

      {/* 13. Clinical Collaboration (Tumor Board MDT) */}
      <VirelisCollaboration />

      {/* 14. Diagnostic Operations Analytics (Simulation) */}
      <VirelisAnalytics />

      {/* 15. Digital Diagnostic Twin */}
      <VirelisDigitalTwin />

      {/* 16. Signature Story (“A RESULT IS MORE THAN A NUMBER”) */}
      <VirelisSignatureStory />

      {/* 17. Core Capabilities & Final CTA */}
      <VirelisCapabilities onOpenConsultation={handleOpenConsultation} />

      {/* Consultation Modal */}
      <VirelisProjectModal 
        isOpen={isConsultationOpen} 
        onClose={handleCloseConsultation} 
      />
    </div>
  );
};
