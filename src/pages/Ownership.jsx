import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Modal from '../components/Modal';
import galleryTopdownImg from '../assets/gallery_topdown.jpg';
import galleryWheelImg from '../assets/gallery_wheel.jpg';
import galleryMotionImg from '../assets/gallery_motion.jpg';
import galleryInteriorImg from '../assets/gallery_interior.jpg';
import specsHeroImg from '../assets/specs_hero.jpg';
import engineCoverImg from '../assets/engine_cover.jpg';

export default function Ownership() {
  const { theme, selectedPaint } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div className="w-full">
{/*  Hero: Exclusivity & Ownership  */}
<section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-margin-desktop pt-24 md:pt-32 pb-24 md:pb-40 overflow-hidden">
<div className="absolute inset-0 z-0" aria-hidden="true">
  <div className="w-full h-full parallax-bg scale-105 transition-all duration-1000" style={{ backgroundImage: `url(${selectedPaint.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
  <div className="absolute inset-0 bg-gradient-to-b from-matte-black/90 via-matte-black/40 to-matte-black"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#131314_100%)] opacity-80"></div>
</div>

<div className="relative z-10 text-center max-w-4xl fade-in-section" id="ownership-intro">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} tracking-[0.6em] mb-8 block transition-colors`}>THE EARNED ELITE</span>
<h1 className="font-display-xl text-6xl md:text-display-xl text-off-white mb-12">A car you earn, not buy.</h1>
<p className="font-body-md text-body-md text-on-surface-variant mb-16 leading-relaxed max-w-2xl mx-auto">
                    The Ford GT is a manifestation of ultra-high performance. To ensure every GT finds a home with an individual committed to its legacy, ownership is granted through a rigorous application-only process.
                </p>
<div className="flex flex-col md:flex-row justify-center gap-8 items-center">
<button 
  onClick={() => handleOpenModal('Applications for the current production run of the Ford GT are currently closed. Please check back later or contact your local Ford Performance dealer.')} 
  className={`w-full md:w-auto px-12 py-5 ${theme.bg} text-off-white font-eyebrow-caps text-label-bold tracking-widest ${theme.hoverBg} transition-all min-h-[48px] touch-manipulation flex items-center justify-center select-none active:scale-95`}
>
                        START APPLICATION
                    </button>
<button 
  onClick={() => handleOpenModal('The Owner Portal is currently undergoing maintenance. Please use the concierge phone line provided in your welcome package for immediate assistance.')} 
  className={`w-full md:w-auto px-12 py-5 border border-off-white text-off-white font-eyebrow-caps text-label-bold tracking-widest hover:${theme.bg} hover:border-transparent transition-all min-h-[48px] touch-manipulation flex items-center justify-center select-none active:scale-95`}
>
                        OWNER PORTAL
                    </button>
</div>
</div>
{/*  Scroll Indicator  */}
<div className="absolute bottom-10 flex flex-col items-center gap-4">
<div className={`w-[1px] h-20 bg-gradient-to-b ${theme.bg === 'bg-liquid-blue' ? 'from-liquid-blue' : theme.bg === 'bg-race-red' ? 'from-race-red' : theme.bg === 'bg-frozen-white' ? 'from-off-white' : 'from-surface-variant'} to-transparent transition-colors`}></div>
</div>
</section>

{/*  Ownership Tiers / Stats  */}
<section className="py-24 md:py-40 bg-matte-black px-6 md:px-margin-desktop max-w-container-max mx-auto fade-in-section">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className={`flex flex-col gap-6 p-8 border-t-2 ${theme.border} bg-carbon-gray transition-colors`}>
<span className={`font-eyebrow-caps text-label-bold ${theme.text} transition-colors`}>01. SCARCITY</span>
<h3 className="font-headline-lg text-headline-lg text-off-white">Extremely Rare.</h3>
<p className="text-on-surface-variant font-body-sm">Production is strictly limited. Every chassis number is a piece of documented automotive history, destined for the world's most curated collections.</p>
</div>
<div className={`flex flex-col gap-6 p-8 border-t-2 ${theme.border} bg-carbon-gray transition-colors delay-100`}>
<span className={`font-eyebrow-caps text-label-bold ${theme.text} transition-colors`}>02. PERFORMANCE DNA</span>
<h3 className="font-headline-lg text-headline-lg text-off-white">Earned Pedigree.</h3>
<p className="text-on-surface-variant font-body-sm">The GT is a road-legal race car. Owners are expected to embrace the technical excellence and motorsport heritage that defines the nameplate.</p>
</div>
<div className={`flex flex-col gap-6 p-8 border-t-2 ${theme.border} bg-carbon-gray transition-colors delay-200`}>
<span className={`font-eyebrow-caps text-label-bold ${theme.text} transition-colors`}>03. CURATION</span>
<h3 className="font-headline-lg text-headline-lg text-off-white">Selected Legacy.</h3>
<p className="text-on-surface-variant font-body-sm">Our selection committee reviews every candidate, prioritizing long-term brand ambassadors and performance enthusiasts.</p>
</div>
</div>
</section>

{/* Concierge Services */}
<section className="py-24 md:py-40 bg-surface px-6 md:px-margin-desktop relative overflow-hidden">
  <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">
    <div className="relative group">
      <div className={`absolute -inset-4 border-2 ${theme.border} opacity-20 group-hover:opacity-50 transition-all duration-700`}></div>
      <img loading="lazy" src={galleryInteriorImg} alt="Concierge service detail showing luxury interior" className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
    </div>
    <div>
      <span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} tracking-widest block mb-4 transition-colors`}>BESPOKE EXPERIENCE</span>
      <h2 className="font-headline-lg text-headline-lg text-off-white mb-8">Exclusive Concierge.</h2>
      <p className="font-body-md text-on-surface-variant mb-8">
        The Ford GT ownership experience extends far beyond the driver's seat. Every owner is assigned a dedicated concierge to handle bespoke requests, track day logistics, and factory-direct maintenance.
      </p>
      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <span className={`material-symbols-outlined ${theme.text} transition-colors`}>diamond</span>
          <div>
            <h4 className="font-label-bold text-off-white uppercase mb-1">Tailored Delivery</h4>
            <p className="text-body-sm text-outline">Personalized vehicle handover at the location of your choosing, or at the Multimatic assembly facility.</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className={`material-symbols-outlined ${theme.text} transition-colors`}>support_agent</span>
          <div>
            <h4 className="font-label-bold text-off-white uppercase mb-1">24/7 Direct Line</h4>
            <p className="text-body-sm text-outline">Immediate access to the engineers and specialists who built your specific vehicle.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

{/*  Full-Width Minimal Gallery  */}
<section className="py-24 md:py-40 px-6 md:px-margin-desktop fade-in-section bg-matte-black">
<div className="mb-20 flex justify-between items-end">
<div>
<span className="font-eyebrow-caps text-eyebrow-caps text-off-white/50 block mb-4">MUSEUM OF SPEED</span>
<h2 className="font-display-xl text-4xl md:text-display-xl text-off-white">The Gallery.</h2>
</div>
<div className="hidden md:flex gap-4">
<span className={`material-symbols-outlined ${theme.text} text-4xl transition-colors`}>grid_view</span>
</div>
</div>
<div className="masonry">
{/*  Gallery Item 1  */}
<div className="masonry-item group relative overflow-hidden bg-carbon-gray">
<img loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" alt="A top-down cinematic studio shot of a Ford GT" src={galleryTopdownImg}/>
<div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="font-eyebrow-caps text-label-bold text-off-white">AERODYNAMIC SCULPTURE</span>
</div>
</div>
{/*  Gallery Item 2  */}
<div className="masonry-item group relative overflow-hidden bg-carbon-gray">
<img loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" alt="Extreme close-up shot of the Ford GT's carbon fiber wheel" src={galleryWheelImg}/>
<div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="font-eyebrow-caps text-label-bold text-off-white">TECHNICAL PRECISION</span>
</div>
</div>
{/*  Gallery Item 3  */}
<div className="masonry-item group relative overflow-hidden bg-carbon-gray">
<img loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" alt="A Ford GT in matte black finish captured in motion at sunset on a race track" src={galleryMotionImg}/>
<div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="font-eyebrow-caps text-label-bold text-off-white">DOMINANCE IN MOTION</span>
</div>
</div>
{/*  Gallery Item 4  */}
<div className="masonry-item group relative overflow-hidden bg-carbon-gray">
<img loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" alt="Interior cockpit view of the Ford GT" src={galleryInteriorImg}/>
<div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="font-eyebrow-caps text-label-bold text-off-white">PURPOSEFUL COCKPIT</span>
</div>
</div>
{/*  Gallery Item 5  */}
<div className="masonry-item group relative overflow-hidden bg-carbon-gray">
<img loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" alt="A wide angle shot of a Ford GT parked in a minimalist architecture setting" src={specsHeroImg}/>
<div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="font-eyebrow-caps text-label-bold text-off-white">ARCHITECTURAL FORM</span>
</div>
</div>
{/*  Gallery Item 6  */}
<div className="masonry-item group relative overflow-hidden bg-carbon-gray">
<img loading="lazy" className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105" alt="A close-up of the Ford GT rear engine cover" src={engineCoverImg}/>
<div className="absolute inset-0 bg-matte-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<span className="font-eyebrow-caps text-label-bold text-off-white">MECHANICAL HEART</span>
</div>
</div>
</div>
</section>
{/*  Future Section: Abstract & Atmospheric  */}
<section className="relative h-[819px] flex flex-col justify-center items-center overflow-hidden bg-matte-black fade-in-section">

<div className="relative z-10 text-center px-margin-mobile">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} tracking-[0.8em] mb-6 block transition-colors`}>LEGACY FORWARD</span>
<h2 className="font-headline-lg text-4xl md:text-[64px] text-off-white mb-8">The Future of the GT Bloodline.</h2>
<div className="mx-auto max-w-xs h-px bg-surface-variant/40 relative flex justify-center items-center">
  <div className={`w-16 h-1 ${theme.bg} transition-colors`}></div>
</div>
<p className="font-body-md text-on-surface-variant max-w-xl mx-auto mt-8">
                    The race never ends. We are already engineering the next chapter of performance, where electricity meets wind-tunnel mastery.
                </p>
</div>
</section>
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Notice">
      {modalContent}
    </Modal>
</div>
  );
}
