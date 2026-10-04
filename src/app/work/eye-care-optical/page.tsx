import React from 'react';
import { OpticalShowcase } from '@/components/optical/OpticalShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VISTAÉYE — Premium Eye Care & Optical Studio Dubai',
  description: 'An advanced digital eye care clinic and optical studio in City Walk, Jumeirah, Dubai featuring clinical eye examinations, Italian acetate frames, sunglasses, blue-light lenses, and virtual frame try-on.',
};

export default function OpticalStorePage() {
  return <OpticalShowcase />;
}
