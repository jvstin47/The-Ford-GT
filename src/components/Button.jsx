import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = "inline-flex items-center justify-center font-display font-bold text-sm tracking-[0.1em] uppercase transition-all duration-300 select-none min-h-[48px] min-w-[48px] px-8 py-4 active:scale-95 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:opacity-90 hover:shadow-lg focus-visible:ring-primary",
    ghost: "bg-transparent text-on-background border border-on-background hover:bg-on-background hover:text-background focus-visible:ring-on-background"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.trim();

  return (
    <button
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
