import React from 'react';
import { Award, Crown, UtensilsCrossed, Calendar, ArrowRight, ArrowLeft, ShieldCheck, MapPin, Wine, Flame } from 'lucide-react';
import { useRestaurantLanguage } from '@/context/RestaurantLanguageContext';

interface RestaurantHeroProps {
  onExploreMenu: () => void;
  onOpenEstimator: () => void;
  onOpenReservation: () => void;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({
  onExploreMenu,
  onOpenEstimator,
  onOpenReservation
}) => {
  const { t, isRtl } = useRestaurantLanguage();

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center bg-zinc-950 text-zinc-100 overflow-hidden pt-20" dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Background Image with Cinematic Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Al Sultan Haute Dining"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-pulse duration-[10000ms]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-zinc-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Top UAE Royal Credential Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium backdrop-blur-md mb-8 shadow-lg shadow-amber-950/40">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-serif tracking-wider">{t('heroCredentialBadge')}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="font-mono text-[11px] text-zinc-300">{t('heroMichelin')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-zinc-100 tracking-tight max-w-5xl leading-[1.15]">
          {t('heroTitle1')} <br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent italic">
            {t('heroTitle2')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-sans font-light">
          {t('heroSubtitle')}
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-zinc-950 shadow-2xl shadow-amber-950/60 transition-all flex items-center justify-center gap-2.5 group"
          >
            <Calendar className="w-4 h-4" />
            <span>{t('heroReserveBtn')}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>

          <button
            onClick={onOpenEstimator}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-sans text-xs uppercase tracking-widest bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <Crown className="w-4 h-4 text-amber-400" />
            <span>{t('heroSimulatorBtn')}</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-xs font-mono text-zinc-400 hover:text-amber-300 underline underline-offset-4"
          >
            {t('heroExploreBtn')}
          </button>
        </div>

        {/* Live Telemetry Bar */}
        <div className="mt-16 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md text-start">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">{t('telemetryDishesTitle')}</div>
              <div className="text-[11px] text-zinc-400">{t('telemetryDishesSub')}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">{t('telemetryCertTitle')}</div>
              <div className="text-[11px] text-zinc-400">{t('telemetryCertSub')}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Wine className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">{t('telemetrySalonsTitle')}</div>
              <div className="text-[11px] text-zinc-400">{t('telemetrySalonsSub')}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold text-zinc-100">{t('telemetryChefsTitle')}</div>
              <div className="text-[11px] text-zinc-400">{t('telemetryChefsSub')}</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

