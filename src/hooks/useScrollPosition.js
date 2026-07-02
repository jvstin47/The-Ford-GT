import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let requestRunning = null;

    const handleScroll = () => {
      if (requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          requestRunning = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial fetch
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRunning) {
        window.cancelAnimationFrame(requestRunning);
      }
    };
  }, []);

  return scrollPosition;
}
