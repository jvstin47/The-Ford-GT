import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyle = {
    padding: '16px 32px',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '14px',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--primary)',
      color: 'var(--on-primary)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--on-background)',
      border: '1px solid var(--on-background)',
    }
  };

  return (
    <button
      style={{ ...baseStyle, ...variants[variant] }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.opacity = '0.9';
        } else {
          e.target.style.backgroundColor = 'var(--on-background)';
          e.target.style.color = 'var(--background)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.target.style.opacity = '1';
        } else {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = 'var(--on-background)';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
