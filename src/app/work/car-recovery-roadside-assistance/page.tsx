import React from 'react';
import { Metadata } from 'next';
import { RoadforgeShowcase } from '@/components/roadforge/RoadforgeShowcase';

export const metadata: Metadata = {
  title: 'ROADFORGE — 24/7 UAE Car Recovery & Roadside Assistance | Showcase #40',
  description: 'Fast, reliable 24/7 vehicle recovery and roadside assistance across Dubai, Abu Dhabi and Sharjah. Flatbed towing, battery jumpstarts, flat tyres, and fuel delivery.',
};

export default function CarRecoveryRoadsideAssistancePage() {
  return <RoadforgeShowcase standalone={true} />;
}