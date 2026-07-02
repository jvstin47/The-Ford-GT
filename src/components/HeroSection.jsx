import React from 'react';
import Button from './Button';

export default function HeroSection() {
  return (
    <section style={{ 
      height: '100vh', 
      position: 'relative', 
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'url("/hero_ford_gt.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        opacity: 0.6
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50%',
        background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)',
        zIndex: -1
      }} />

      <div className="container animate-fade-in" style={{ width: '100%', zIndex: 1 }}>
        <p className="eyebrow-caps" style={{ color: 'var(--outline)', marginBottom: '24px' }}>Ford GT Legacy</p>
        <h1 className="display-xl" style={{ marginBottom: '24px', maxWidth: '800px' }}>
          MACHINED <br/> PRECISION
        </h1>
        <p className="body-md" style={{ maxWidth: '500px', marginBottom: '48px', color: 'var(--on-surface-variant)' }}>
          Stripping away the non-essential to let high-fidelity automotive excellence dominate. The Ford GT is a testament to aerodynamic mastery and carbon-fiber purity.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Button variant="primary">Explore Heritage</Button>
          <Button variant="ghost">Technical Specs</Button>
        </div>
      </div>
    </section>
  );
}
