import React from 'react';
import { Metadata } from 'next';
import { AeroviaShowcase } from '@/components/aerovia/AeroviaShowcase';

export const metadata: Metadata = {
  title: 'AEROVIA — Intelligent Global Travel Platform & Flight/Hotel Booking | Showcase #74',
  description: 'Connected flight search, curated luxury hotel discovery, dynamic multi-city journey composition, and digital itinerary management engineered in AED.',
  openGraph: {
    title: 'AEROVIA — Intelligent Global Travel Platform',
    description: 'Go Further. Stay Better. Flights, luxury stays, and complete journeys seamlessly brought together.',
    type: 'website',
  }
};

export default function FlightHotelBookingPage() {
  return <AeroviaShowcase />;
}
