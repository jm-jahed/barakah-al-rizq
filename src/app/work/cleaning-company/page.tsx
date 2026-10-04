import React from 'react';
import { Metadata } from 'next';
import { CleaningShowcase } from '@/components/cleaning/CleaningShowcase';

export const metadata: Metadata = {
  title: 'PRISTINE UAE | Sovereign Facility Detailing & Villa Deep Clean',
  description: 'Flagship UAE luxury cleaning & facility management platform featuring 160+ precision protocols, 8 prime disciplines, interactive villa quote estimator, Dubai Municipality approved eco-biocides, and British BICSc standards.',
};

export default function CleaningCompanyProjectPage() {
  return <CleaningShowcase standalone={true} />;
}
