'use client';

import React, { useState } from 'react';
import { NexaraHero } from './NexaraHero';
import { NexaraGate } from './NexaraGate';
import { NexaraGameDiscovery } from './NexaraGameDiscovery';
import { NexaraPlayerProfile } from './NexaraPlayerProfile';
import { NexaraAchievements } from './NexaraAchievements';
import { NexaraArena } from './NexaraArena';
import { NexaraLeaderboard } from './NexaraLeaderboard';
import { NexaraTeamBuilder } from './NexaraTeamBuilder';
import { NexaraMatchCenter } from './NexaraMatchCenter';
import { NexaraStore } from './NexaraStore';
import { NexaraLibrary } from './NexaraLibrary';
import { NexaraAnalytics } from './NexaraAnalytics';
import { NexaraCommunities } from './NexaraCommunities';
import { NexaraProgressionJourney } from './NexaraProgressionJourney';
import { NexaraOperationsCenter } from './NexaraOperationsCenter';
import { NexaraArchitecture } from './NexaraArchitecture';
import { NexaraClosingCTA } from './NexaraClosingCTA';
import { NexaraGameModal } from './NexaraGameModal';
import { NexaraCartDrawer } from './NexaraCartDrawer';
import { NexaraCheckoutModal } from './NexaraCheckoutModal';
import { NEXARA_GAMES, NEXARA_STORE_ITEMS, NexaraGame, NexaraStoreItem } from '@/data/nexaraData';

export const NexaraShowcase: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<NexaraGame | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [cartItems, setCartItems] = useState<NexaraStoreItem[]>([
    NEXARA_STORE_ITEMS[0],
    NEXARA_STORE_ITEMS[1]
  ]);

  const handleAddToCart = (item: NexaraStoreItem) => {
    setCartItems(prev => [item, ...prev]);
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans overflow-x-clip max-w-full">
      {/* Hero Experience */}
      <NexaraHero
        onExploreGames={() => scrollToSection('discovery')}
        onEnterArena={() => scrollToSection('arena')}
        onOpenCart={() => setCartOpen(true)}
        cartCount={cartItems.length}
      />

      {/* The Nexara Gate: Choose Your World */}
      <div id="gate">
        <NexaraGate onSelectGame={(game) => setSelectedGame(game)} />
      </div>

      {/* 24 Games Discovery Engine */}
      <div id="discovery">
        <NexaraGameDiscovery
          onSelectGame={(game) => setSelectedGame(game)}
          onAddLibrary={(game) => setSelectedGame(game)}
        />
      </div>

      {/* Player Profile & XP System */}
      <NexaraPlayerProfile />

      {/* Achievements Vault */}
      <NexaraAchievements />

      {/* The Arena (20+ Tournaments & Events) */}
      <div id="arena">
        <NexaraArena />
      </div>

      {/* Global Competitive Leaderboard */}
      <div id="leaderboard">
        <NexaraLeaderboard />
      </div>

      {/* Team Builder (Squad Operations) */}
      <NexaraTeamBuilder />

      {/* Live Match Center Simulation */}
      <NexaraMatchCenter />

      {/* Nexara Market (Demo Digital Store) */}
      <div id="market">
        <NexaraStore onAddToCart={handleAddToCart} />
      </div>

      {/* Player Game Library */}
      <NexaraLibrary onLaunchGame={(game) => setSelectedGame(game)} />

      {/* Combat Analytics & Player Intelligence */}
      <NexaraAnalytics />

      {/* Verified Gaming Communities */}
      <NexaraCommunities />

      {/* Progression Journey in 6 Stages */}
      <NexaraProgressionJourney />

      {/* Operations Telemetry Simulation */}
      <NexaraOperationsCenter />

      {/* Digital Technology Infrastructure */}
      <NexaraArchitecture />

      {/* Closing Call to Action */}
      <NexaraClosingCTA
        onEnterArena={() => scrollToSection('arena')}
        onExploreGames={() => scrollToSection('discovery')}
      />

      {/* Game Detail Modal */}
      {selectedGame && (
        <NexaraGameModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
          onAddToLibrary={(game) => {
            alert(`"${game.title}" added to your unified NEXARA library!`);
          }}
        />
      )}

      {/* Loadout Cart Drawer */}
      <NexaraCartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setCartOpen(false);
          setCheckoutOpen(true);
        }}
      />

      {/* Demo Checkout Modal */}
      <NexaraCheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        items={cartItems}
        onClearCart={() => setCartItems([])}
      />
    </div>
  );
};
