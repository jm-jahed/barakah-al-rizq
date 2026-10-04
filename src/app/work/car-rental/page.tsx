import React from 'react';
import { Metadata } from 'next';
import { CarRentalShowcase } from '@/components/car-rental/CarRentalShowcase';

export const metadata: Metadata = {
  title: 'APEX EXOTIC MOTORS UAE | Sovereign Supercar Fleet & VIP Tarmac Reserve',
  description: 'Flagship UAE luxury supercar & exotic car rental platform featuring 192+ exotics (Ferrari, Rolls-Royce, Lamborghini, Porsche), 0% security deposit guarantee, interactive lease rate calculator, and 30-minute doorstep flatbed transporter delivery in Dubai.',
};

export default function CarRentalProjectPage() {
  return <CarRentalShowcase standalone={true} />;
}
