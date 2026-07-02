import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { ROUTES } from '../constants/routes';

export default function Navigation() {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const scrolled = scrollPosition > 50;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (mobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }

      const handleTab = (e) => {
        if (e.key === 'Tab') {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };
      
      document.body.addEventListener('keydown', handleTab);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.removeEventListener('keydown', handleTab);
        document.body.style.overflow = 'unset';
      };
    }
  }, [mobileMenuOpen]);

  const getLinkStyle = (path) => {
    return pathname === path ? 'text-white' : 'text-on-surface-variant hover:text-white transition-colors';
  };

  return (
    <>
      <nav 
        aria-label="Main Navigation"
        className={`fixed left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-500 rounded-full ${scrolled ? 'top-6 w-[95%] md:w-[90%] max-w-5xl bg-surface/80 backdrop-blur-xl border border-surface-variant/40 shadow-2xl' : 'top-8 w-[95%] md:w-[90%] max-w-7xl bg-surface/40 backdrop-blur-md border border-surface-variant/20 shadow-lg'}`}
      >
        <Link to={ROUTES.HOME} className="font-display text-xl md:text-2xl font-bold tracking-widest text-white uppercase hover:scale-105 transition-transform focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded min-h-[48px] flex items-center touch-manipulation">
          FORD GT
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to={ROUTES.HERITAGE} className={`font-display text-xs font-bold tracking-[0.1em] focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded px-2 py-1 ${getLinkStyle(ROUTES.HERITAGE)}`}>HERITAGE</Link>
          <Link to={ROUTES.SPECS} className={`font-display text-xs font-bold tracking-[0.1em] focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded px-2 py-1 ${getLinkStyle(ROUTES.SPECS)}`}>SPECS</Link>
          <Link to={ROUTES.OWNERSHIP} className={`font-display text-xs font-bold tracking-[0.1em] focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded px-2 py-1 ${getLinkStyle(ROUTES.OWNERSHIP)}`}>OWNERSHIP</Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-off-white focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded flex items-center justify-center min-w-[48px] min-h-[48px] active:scale-95 transition-transform touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="fixed inset-0 z-[95] bg-matte-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-12 animate-fade-in md:hidden touch-manipulation overscroll-contain"
        >
          <Link to={ROUTES.HERITAGE} className={`font-display text-3xl font-bold tracking-[0.1em] focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded min-w-[200px] text-center min-h-[64px] flex items-center justify-center active:scale-95 transition-transform ${getLinkStyle(ROUTES.HERITAGE)}`}>HERITAGE</Link>
          <Link to={ROUTES.SPECS} className={`font-display text-3xl font-bold tracking-[0.1em] focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded min-w-[200px] text-center min-h-[64px] flex items-center justify-center active:scale-95 transition-transform ${getLinkStyle(ROUTES.SPECS)}`}>SPECS</Link>
          <Link to={ROUTES.OWNERSHIP} className={`font-display text-3xl font-bold tracking-[0.1em] focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded min-w-[200px] text-center min-h-[64px] flex items-center justify-center active:scale-95 transition-transform ${getLinkStyle(ROUTES.OWNERSHIP)}`}>OWNERSHIP</Link>
        </div>
      )}
    </>
  );
}
