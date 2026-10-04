import React from 'react';
import { Metadata } from 'next';
import { VirelisShowcase } from '@/components/virelis/VirelisShowcase';

export const metadata: Metadata = {
  title: 'VIRELIS — Diagnostic Intelligence Platform & Connected Medical Workflows | Showcase #72',
  description: 'Connected medical diagnostic intelligence platform bringing laboratory automation, 3T MRI/spectral CT imaging workflows, and clinical decision support into one unified experience.',
  openGraph: {
    title: 'VIRELIS — Diagnostic Intelligence Platform',
    description: 'See What Matters. Earlier. Connected laboratory intelligence, multi-modal imaging, and clinician-supervised decision support.',
    type: 'website',
  }
};

export default function MedicalDiagnosticsPage() {
  return <VirelisShowcase />;
}
