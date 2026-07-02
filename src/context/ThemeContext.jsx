import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import homeHeroImg from '../assets/home_hero.jpg';
import specsHeroRaceRedImg from '../assets/specs_hero_race_red.jpg';
import specsHeroFrozenWhiteImg from '../assets/specs_hero_frozen_white.jpg';
import specsHeroShadowBlackImg from '../assets/specs_hero_shadow_black.jpg';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Memoize static options to prevent recreation
  const paintOptions = useMemo(() => [
    { id: 'liquid-blue', name: 'Liquid Blue', hex: '#003399', img: homeHeroImg },
    { id: 'race-red', name: 'Race Red', hex: '#D5001C', img: specsHeroRaceRedImg },
    { id: 'frozen-white', name: 'Frozen White', hex: '#F0F2F5', img: specsHeroFrozenWhiteImg },
    { id: 'shadow-black', name: 'Shadow Black', hex: '#111214', img: specsHeroShadowBlackImg }
  ], []);

  const themeColors = useMemo(() => ({
    'liquid-blue': { text: 'text-liquid-blue', bg: 'bg-liquid-blue', border: 'border-liquid-blue', hoverBg: 'hover:bg-blue-700', hoverText: 'hover:text-liquid-blue' },
    'race-red': { text: 'text-race-red', bg: 'bg-race-red', border: 'border-race-red', hoverBg: 'hover:bg-red-700', hoverText: 'hover:text-race-red' },
    'frozen-white': { text: 'text-frozen-white', bg: 'bg-frozen-white', border: 'border-frozen-white', hoverBg: 'hover:bg-gray-300', hoverText: 'hover:text-frozen-white' },
    'shadow-black': { text: 'text-shadow-black', bg: 'bg-shadow-black', border: 'border-shadow-black', hoverBg: 'hover:bg-gray-900', hoverText: 'hover:text-shadow-black' }
  }), []);

  const [selectedPaint, setSelectedPaint] = useState(() => {
    try {
      const saved = localStorage.getItem('fordGtSelectedPaintId');
      if (saved) {
        const found = paintOptions.find(p => p.id === saved);
        if (found) return found;
      }
    } catch (error) {
      console.warn("Failed to access localStorage", error);
    }
    return paintOptions[0];
  });
  
  const theme = useMemo(() => themeColors[selectedPaint.id] || themeColors['liquid-blue'], [selectedPaint.id, themeColors]);

  useEffect(() => {
    try {
      localStorage.setItem('fordGtSelectedPaintId', selectedPaint.id);
    } catch (error) {
      console.warn("Failed to write to localStorage", error);
    }
  }, [selectedPaint.id]);

  // Memoize the context value object
  const contextValue = useMemo(() => ({
    selectedPaint,
    setSelectedPaint,
    theme,
    paintOptions
  }), [selectedPaint, theme, paintOptions]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
