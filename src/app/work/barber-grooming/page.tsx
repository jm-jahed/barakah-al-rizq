import React from 'react';
import { BarberShowcase } from '@/components/barber/BarberShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "THE GENTLEMEN'S ROOM — Premium Men's Grooming & Barber Studio Dubai",
  description: "A luxury men's grooming and barber studio in Dubai (DIFC, Downtown, Marina, Jumeirah, Business Bay) offering precision haircuts, skin fades, hot towel shaves, beard sculpting, and facial treatments.",
};

export default function BarberGroomingPage() {
  return <BarberShowcase />;
}
