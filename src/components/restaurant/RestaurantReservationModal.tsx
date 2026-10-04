'use client';

import React from 'react';
import { ReservationModal } from './ReservationModal';

export const RestaurantReservationModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  return <ReservationModal isOpen={isOpen} onClose={onClose} />;
};
