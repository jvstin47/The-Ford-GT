import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-matte-black flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <span className={`material-symbols-outlined text-9xl ${theme.text} mb-8 opacity-20`}>route</span>
        <h1 className="font-display-xl text-off-white text-6xl mb-4">404</h1>
        <h2 className="font-headline-lg text-on-surface-variant mb-6 uppercase">Off Track</h2>
        <p className="font-body-md text-outline mb-10">
          The requested telemetry path does not exist. You have left the mapped circuit.
        </p>
        <Link
          to="/"
          className={`inline-block px-8 py-4 ${theme.bg} text-white font-label-bold uppercase tracking-widest ${theme.hoverBg} transition-colors rounded-sm`}
        >
          Return to Pits
        </Link>
      </div>
    </div>
  );
}
