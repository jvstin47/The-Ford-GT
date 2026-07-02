import React from 'react';

export default function TechnicalSpecs() {
  const specs = [
    { label: 'Engine', value: '3.5L EcoBoost V6' },
    { label: 'Horsepower', value: '660 hp' },
    { label: 'Torque', value: '550 lb-ft' },
    { label: 'Top Speed', value: '216 mph' },
    { label: 'Chassis', value: 'Carbon fiber monocoque' },
    { label: 'Aerodynamics', value: 'Active rear wing, flying buttresses' }
  ];

  return (
    <section style={{ backgroundColor: 'var(--secondary)', padding: '160px 0' }}>
      <div className="container">
        <p className="eyebrow-caps" style={{ color: 'var(--tertiary)', marginBottom: '24px' }}>Precision Engineering</p>
        <h2 className="headline-lg" style={{ marginBottom: '80px' }}>TECHNICAL SPECS</h2>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px' 
        }}>
          {specs.map((spec, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid var(--outline-variant)', paddingBottom: '24px' }}>
              <p className="eyebrow-caps" style={{ color: 'var(--on-surface-variant)', marginBottom: '8px' }}>{spec.label}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 600 }}>{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
