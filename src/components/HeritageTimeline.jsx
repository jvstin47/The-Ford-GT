import React from 'react';

export default function HeritageTimeline() {
  const events = [
    { year: '1966', title: 'Le Mans Dominance', desc: 'The original GT40 secures a 1-2-3 finish at the 24 Hours of Le Mans, cementing its legendary status.' },
    { year: '2005', title: 'The Rebirth', desc: 'Ford celebrates its centennial with a modernized GT, retaining the iconic silhouette and raw power.' },
    { year: '2016', title: 'Return to Glory', desc: 'Exactly 50 years later, the all-new carbon fiber Ford GT returns to Le Mans and wins its class.' },
    { year: 'Tomorrow', title: 'Legacy Forward', desc: 'Pushing the boundaries of aerodynamics and EcoBoost technology into the future.' }
  ];

  return (
    <section className="container" style={{ padding: '160px 80px', position: 'relative' }}>
      <div className="dual-stripe-divider" style={{ left: '40px', top: 0 }} />
      
      <p className="eyebrow-caps" style={{ color: 'var(--primary)', marginBottom: '24px' }}>Heritage</p>
      <h2 className="headline-lg" style={{ marginBottom: '80px' }}>1966 TO TOMORROW</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '64px', paddingLeft: '40px' }}>
        {events.map((evt, idx) => (
          <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px' }}>
            <h3 className="display-xl" style={{ color: 'var(--secondary-container)' }}>{evt.year}</h3>
            <div>
              <h4 style={{ fontSize: '24px', fontFamily: 'var(--font-display)', marginBottom: '16px', color: 'var(--on-background)' }}>{evt.title}</h4>
              <p className="body-md" style={{ color: 'var(--on-surface-variant)' }}>{evt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
