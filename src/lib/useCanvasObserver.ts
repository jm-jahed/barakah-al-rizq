'use client';

import { useEffect, useRef, useState } from 'react';

interface UseCanvasObserverOptions {
  threshold?: number;
  rootMargin?: string;
  maxMobileDpr?: number;
  maxDesktopDpr?: number;
}

export function useCanvasObserver(options: UseCanvasObserverOptions = {}) {
  const {
    threshold = 0.05,
    rootMargin = '100px 0px 100px 0px',
    maxMobileDpr = 1.5,
    maxDesktopDpr = 2.0,
  } = options;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      const rawDpr = window.devicePixelRatio || 1;
      const targetMaxDpr = mobile ? maxMobileDpr : maxDesktopDpr;
      setDpr(Math.min(rawDpr, targetMaxDpr));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, [maxMobileDpr, maxDesktopDpr]);

  useEffect(() => {
    const target = containerRef.current || canvasRef.current;
    if (!target) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(target);

    // Also listen to document visibility changes (e.g. background tab)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else {
        const rect = target.getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight + 100 &&
          rect.bottom > -100 &&
          rect.left < window.innerWidth &&
          rect.right > 0;
        setIsVisible(inView);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [threshold, rootMargin]);

  return {
    containerRef,
    canvasRef,
    isVisible,
    isMobile,
    dpr,
  };
}

export default useCanvasObserver;
