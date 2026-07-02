import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Modal({ isOpen, onClose, title, children }) {
  const { theme } = useTheme();
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      dialogRef.current?.showModal();
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = 'unset';
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    }
    
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <dialog 
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="backdrop:bg-matte-black/80 backdrop:backdrop-blur-sm bg-transparent w-full max-w-lg m-auto border-none p-0 outline-none open:animate-fade-in"
      onCancel={onClose}
    >
      <div className="bg-carbon-gray p-8 rounded-lg shadow-2xl border border-surface-variant/30 flex flex-col relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-off-white transition-colors focus-visible:ring-2 focus-visible:ring-off-white outline-none rounded p-1"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <div className={`w-12 h-1 ${theme.bg} mb-6 rounded-full`}></div>
        <h2 id="modal-title" className="font-headline-lg text-off-white mb-4 uppercase">{title}</h2>
        <div className="font-body-md text-on-surface-variant">
          {children}
        </div>
        
        <div className="mt-8 flex justify-end">
          <button 
            onClick={onClose}
            className={`px-6 py-2 ${theme.bg} text-white font-label-bold uppercase tracking-widest ${theme.hoverBg} transition-colors rounded-sm focus-visible:ring-2 focus-visible:ring-white outline-none`}
          >
            Acknowledge
          </button>
        </div>
      </div>
    </dialog>
  );
}
