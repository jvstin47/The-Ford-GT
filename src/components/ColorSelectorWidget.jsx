import React, { useState, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ColorSelectorWidget() {
  const { selectedPaint, setSelectedPaint, paintOptions, theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePaintSelect = useCallback((paint) => {
    setSelectedPaint(paint);
    // Auto-close on mobile after selection
    if (window.innerWidth < 768) {
      setIsExpanded(false);
    }
  }, [setSelectedPaint]);

  return (
    <div className={`fixed right-0 md:right-4 top-1/2 -translate-y-1/2 z-[90] flex md:flex-col gap-4 bg-surface/90 backdrop-blur-xl p-3 md:rounded-full border border-surface-variant/30 shadow-2xl transition-transform duration-500 ease-in-out ${isExpanded ? 'translate-x-0 rounded-l-2xl' : 'translate-x-full md:translate-x-0'}`}>
      
      {/* Mobile Toggle Button (Larger Touch Target) */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`absolute top-1/2 -left-14 -translate-y-1/2 w-14 h-16 bg-surface/90 backdrop-blur-xl border-y border-l border-surface-variant/30 rounded-l-xl flex items-center justify-center md:hidden focus-visible:ring-2 focus-visible:ring-off-white outline-none`}
        aria-label="Toggle Color Configurator"
        aria-expanded={isExpanded}
      >
        <span className={`material-symbols-outlined ${theme.text} text-2xl transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          palette
        </span>
      </button>

      {paintOptions.map(paint => (
        <button
          key={paint.id}
          onClick={() => handlePaintSelect(paint)}
          className={`relative w-12 h-12 md:w-8 md:h-8 rounded-full border-2 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-off-white/40 ${selectedPaint.id === paint.id ? 'border-off-white scale-110 ring-2 ring-white/20' : 'border-surface-variant/50 hover:scale-105'}`}
          style={{ backgroundColor: paint.hex }}
          aria-label={`Select ${paint.name}`}
          aria-pressed={selectedPaint.id === paint.id}
        >
          {/* Tooltip */}
          <div className="absolute right-16 md:right-12 top-1/2 -translate-y-1/2 px-3 py-1 bg-carbon-gray text-off-white text-[10px] font-display font-bold tracking-widest uppercase rounded opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 whitespace-nowrap border border-surface-variant/30">
            {paint.name}
          </div>
        </button>
      ))}
    </div>
  );
}
