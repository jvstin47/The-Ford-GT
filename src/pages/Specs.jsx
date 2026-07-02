import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Modal from '../components/Modal';

import carbonTubImg from '../assets/carbon_tub.jpg';
import galleryTopdownImg from '../assets/gallery_topdown.jpg';
import galleryWheelImg from '../assets/gallery_wheel.jpg';
import galleryMotionImg from '../assets/gallery_motion.jpg';
import engineCoverImg from '../assets/engine_cover.jpg';
import specsInteriorViewImg from '../assets/specs_interior_view.jpg';

export default function Specs() {
  const { selectedPaint, theme } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <>

{/*  Hero Section  */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
<div className="absolute inset-0 z-0 bg-matte-black">
<img key={selectedPaint.id} className="w-full h-full object-cover opacity-60 animate-fade-in" alt="Cinematic wide-angle shot of a Ford GT." src={selectedPaint.img}/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/40 to-matte-black"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-margin-mobile mt-16">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} block mb-6 tracking-[0.8em] transition-colors`}>FORM FOLLOWING FUNCTION</span>
<h1 className="font-display-xl text-6xl md:text-display-xl mb-8 uppercase text-off-white">Engineering Purity</h1>

<p className="font-body-md text-body-md text-on-surface-variant/80 max-w-2xl mx-auto mb-12">
                A bridge between 1966 and tomorrow. Born to win Le Mans. Built to redefine the supercar through surgical aerodynamics and raw technical excellence.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-12 border-t border-surface-variant/40 pt-12">
<div className="text-center border-b border-surface-variant/40 md:border-b-0 pb-8 md:pb-0">
<span className="block font-eyebrow-caps text-label-bold text-outline uppercase mb-1">Top Speed</span>
<span className="font-display-xl text-5xl md:text-headline-lg text-off-white">216 MPH</span>
</div>
<div className="hidden md:block w-[1px] h-12 bg-surface-variant/40 self-center"></div>
<div className="text-center border-b border-surface-variant/40 md:border-b-0 pb-8 md:pb-0">
<span className="block font-eyebrow-caps text-label-bold text-outline uppercase mb-1">0-60 MPH</span>
<span className="font-display-xl text-5xl md:text-headline-lg text-off-white">3.0S</span>
</div>
<div className="hidden md:block w-[1px] h-12 bg-surface-variant/40 self-center"></div>
<div className="text-center">
<span className="block font-eyebrow-caps text-label-bold text-outline uppercase mb-1">Power</span>
<span className="font-display-xl text-5xl md:text-headline-lg text-off-white">660 HP</span>
</div>
</div>
</div>
</section>

{/*  Engineering Deep Dive: The Carbon Tub  */}
<section className="py-24 md:py-40 px-6 md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
<div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="scroll-reveal">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} block mb-4 uppercase transition-colors`}>The Foundation</span>
<h2 className="font-headline-lg text-4xl md:text-headline-lg mb-8 uppercase tracking-tight text-off-white">The Carbon Fiber Core</h2>
<div className="space-y-6 text-on-surface-variant">
<p className="font-body-md text-body-md">
                        The Ford GT’s structural integrity is anchored by a high-strength carbon fiber monocoque. This lightweight "tub" ensures maximum rigidity while minimizing mass, a critical factor for the vehicle's track-focused performance.
                    </p>
<div className={`flex items-start gap-4 p-6 bg-carbon-gray border-l-4 ${theme.border} transition-colors`}>
<span className={`material-symbols-outlined ${theme.text} transition-colors`}>architecture</span>
<div>
<span className="block font-label-bold text-label-bold text-off-white mb-1">Integrated Steel Roll Cage</span>
<p className="text-body-sm text-outline">Seamlessly bonded to the carbon structure for FIA-grade safety without the bulk.</p>
</div>
</div>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3">
<span className={`w-1.5 h-1.5 ${theme.bg} transition-colors`}></span>
<span className="font-label-bold text-label-bold text-off-white uppercase">Weight: 3,054 lbs (Dry)</span>
</li>
<li className="flex items-center gap-3">
<span className={`w-1.5 h-1.5 ${theme.bg} transition-colors`}></span>
<span className="font-label-bold text-label-bold text-off-white uppercase">Material: Aerospace-grade Pre-preg CF</span>
</li>
</ul>
</div>
</div>
<div className="relative scroll-reveal">
<div className="absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 border-surface-variant/30"></div>
<img loading="lazy" className="w-full aspect-square object-cover grayscale opacity-80 transition-all hover:grayscale-0 hover:opacity-100" alt="Detailed macro shot of an unpainted carbon fiber Ford GT tub in a studio." src={carbonTubImg}/>
<div className="absolute -bottom-10 -right-10 w-32 h-32 border-b-2 border-r-2 border-surface-variant/30"></div>
</div>
</div>
</section>

{/* Cockpit / Interior Section */}
<section className="py-24 md:py-40 bg-surface px-6 md:px-margin-desktop">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-12 md:mb-20">
  <span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} block mb-4 uppercase transition-colors`}>The Cockpit</span>
  <h2 className="font-headline-lg text-4xl md:text-headline-lg uppercase tracking-tight text-off-white">Designed for Control</h2>
  <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-6">
    Every element within the Ford GT cabin is ruthlessly optimized for driver focus. Fixed seats ensure perfect weight distribution, while the adjustable pedal box and steering column bring the controls to you.
  </p>
</div>
<div className="relative w-full h-[600px] overflow-hidden group">
  <img loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={specsInteriorViewImg} alt="Ford GT Alcantara Steering wheel and digital dash" />
  <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
  
  <div className="absolute bottom-12 left-12 glass-panel p-6 border-l-4 border-off-white max-w-sm">
    <span className="block font-label-bold text-off-white mb-2 uppercase">F1-Inspired Wheel</span>
    <p className="text-body-sm text-outline">Housing all essential controls, eliminating the need for stalks, allowing uncompromised focus on the apex.</p>
  </div>
</div>
</div>
</section>

{/*  Interactive Aero Section  */}
<section className="py-24 md:py-40 bg-matte-black">
<div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center mb-16 md:mb-24">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} block mb-4 uppercase transition-colors`}>Advanced Aerodynamics</span>
<h2 className="font-headline-lg text-4xl md:text-headline-lg uppercase tracking-tight text-off-white">Anatomy of Air</h2>
</div>
<div className="relative max-w-[1200px] mx-auto group">
<img loading="lazy" className="w-full h-auto" alt="A top-down view of a Ford GT." src={galleryTopdownImg}/>

{/*  Hotspot 1: Rear Wing  */}
<button 
  className="absolute top-[35%] right-[20%] z-20 group/hotspot focus:outline-none flex items-center justify-center min-w-[48px] min-h-[48px] touch-manipulation"
  aria-label="Toggle details for Active Rear Wing"
  aria-expanded={activeHotspot === 'wing'}
  onClick={() => setActiveHotspot(activeHotspot === 'wing' ? null : 'wing')}
>
<div className="relative flex items-center justify-center w-8 h-8">
<div className={`absolute inset-0 ${theme.bg} rounded-full hotspot-ring transition-colors`}></div>
<div className={`relative w-4 h-4 ${theme.bg} rounded-full transition-colors`}></div>
</div>
<div className={`absolute left-1/2 md:left-12 top-14 md:top-1/2 -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 w-64 glass-panel p-6 border-t-2 md:border-t-0 md:border-l-2 ${theme.border} opacity-0 translate-y-4 md:translate-y-0 md:translate-x-4 pointer-events-none group-hover/hotspot:opacity-100 group-focus/hotspot:opacity-100 group-hover/hotspot:translate-y-0 md:group-hover/hotspot:translate-x-0 transition-all duration-500 text-center md:text-left`}>
<span className={`block font-label-bold text-label-bold ${theme.text} mb-2 uppercase transition-colors`}>Active Rear Wing</span>
<p className="text-body-sm text-on-surface-variant">Changes shape and angle to maximize downforce or act as an airbrake during high-speed maneuvers.</p>
</div>
</button>

{/*  Hotspot 2: Flying Buttress  */}
<button 
  className="absolute top-[45%] left-[35%] z-20 group/hotspot focus:outline-none flex items-center justify-center min-w-[48px] min-h-[48px] touch-manipulation"
  aria-label="Toggle details for Flying Buttress"
  aria-expanded={activeHotspot === 'buttress'}
  onClick={() => setActiveHotspot(activeHotspot === 'buttress' ? null : 'buttress')}
>
<div className="relative flex items-center justify-center w-8 h-8">
<div className={`absolute inset-0 ${theme.bg} rounded-full hotspot-ring transition-colors`}></div>
<div className={`relative w-4 h-4 ${theme.bg} rounded-full transition-colors`}></div>
</div>
<div className={`absolute right-1/2 md:right-12 top-14 md:top-1/2 translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 w-64 glass-panel p-6 border-t-2 md:border-t-0 md:border-r-2 ${theme.border} text-center md:text-right opacity-0 translate-y-4 md:translate-y-0 md:-translate-x-4 pointer-events-none group-hover/hotspot:opacity-100 group-focus/hotspot:opacity-100 group-hover/hotspot:translate-y-0 md:group-hover/hotspot:translate-x-0 transition-all duration-500`}>
<span className={`block font-label-bold text-label-bold ${theme.text} mb-2 uppercase transition-colors`}>Flying Buttress</span>
<p className="text-body-sm text-on-surface-variant">The signature design element that directs airflow while housing the intake for the EcoBoost V6.</p>
</div>
</button>

{/*  Hotspot 3: Suspension  */}
<button 
  className="absolute bottom-[20%] left-[45%] z-20 group/hotspot focus:outline-none flex items-center justify-center min-w-[48px] min-h-[48px] touch-manipulation"
  aria-label="Toggle details for Pushrod Suspension"
  aria-expanded={activeHotspot === 'suspension'}
  onClick={() => setActiveHotspot(activeHotspot === 'suspension' ? null : 'suspension')}
>
<div className="relative flex items-center justify-center w-8 h-8">
<div className={`absolute inset-0 ${theme.bg} rounded-full hotspot-ring transition-colors`}></div>
<div className={`relative w-4 h-4 ${theme.bg} rounded-full transition-colors`}></div>
</div>
<div className={`absolute top-10 left-1/2 -translate-x-1/2 w-64 glass-panel p-6 border-t-2 ${theme.border} text-center opacity-0 translate-y-4 pointer-events-none group-hover/hotspot:opacity-100 group-focus/hotspot:opacity-100 group-hover/hotspot:translate-y-0 transition-all duration-500`}>
<span className={`block font-label-bold text-label-bold ${theme.text} mb-2 uppercase transition-colors`}>Pushrod Suspension</span>
<p className="text-body-sm text-on-surface-variant">Hydraulic-actuated suspension allows for 50mm ride-height adjustment in milliseconds.</p>
</div>
</button>
</div>
</section>

{/*  Race Legacy: Le Mans Section  */}
<section className="py-24 md:py-60 bg-matte-black relative overflow-hidden">
<div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 scroll-reveal">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} block mb-6 tracking-[0.5em] transition-colors`}>RACE LEGACY</span>
<h2 className="font-display-xl text-4xl md:text-headline-lg mb-10 uppercase leading-none text-off-white">The Return of <br/><span className={`${theme.text} transition-colors`}>The Legend</span></h2>
<div className="space-y-8">
<div className={`relative pl-12 border-l-2 ${theme.border} transition-colors`}>
<span className={`absolute left-[-2px] top-0 h-8 w-1 ${theme.bg} transition-colors`}></span>
<span className="block font-label-bold text-headline-lg-mobile text-off-white mb-2 uppercase">2016 Le Mans</span>
<p className="text-on-surface-variant font-body-md">
                                Exactly 50 years after the historic 1-2-3 finish in 1966, the Ford GT returned to Circuit de la Sarthe to claim victory in the LMGTE Pro class.
                            </p>
</div>
<div className="p-8 bg-carbon-gray flex items-center justify-between">
<div>
<span className="font-eyebrow-caps text-label-bold text-outline block mb-1 uppercase">Victorious Chassis</span>
<span className={`font-headline-lg text-headline-lg-mobile ${theme.text} transition-colors`}>No. 68</span>
</div>
<div className={`w-20 h-20 flex items-center justify-center border-2 border-surface-variant/30 rounded-full`}>
<span className={`material-symbols-outlined ${theme.text} text-4xl transition-colors`} style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-4 scroll-reveal">
<div className="space-y-4">
<img loading="lazy" className="w-full aspect-[4/5] object-cover filter contrast-125 grayscale hover:grayscale-0 transition-all duration-700" alt="Close-up of the Ford GT Race car headlight." src={galleryWheelImg}/>
<div className={`h-24 ${theme.bg} flex items-center justify-center p-4 transition-colors`}>
<span className="font-eyebrow-caps text-eyebrow-caps text-off-white text-center">ENDURANCE DNA</span>
</div>
</div>
<div className="space-y-4 pt-12">
<div className="h-48 bg-carbon-gray flex items-center justify-center p-8">
<p className="font-label-bold text-label-bold text-outline text-center uppercase tracking-widest">Driven to victory by Hand, Müller, and Bourdais.</p>
</div>
<img loading="lazy" className="w-full aspect-[4/5] object-cover filter contrast-110" alt="A cinematic motion-blurred shot of the No. 68 Ford GT crossing the finish line at Le Mans." src={galleryMotionImg}/>
</div>
</div>
</div>
</div>
</section>

{/*  Technical Specs: Dual Stripe Divider  */}
<section className="py-24 md:py-40 px-6 md:px-margin-desktop bg-surface-container-lowest">
<div className="max-w-4xl mx-auto">
<div className="relative h-20 flex items-center justify-center mb-24">
<div className="w-full h-[1px] bg-surface-variant/30"></div>
<div className="absolute w-40 h-full bg-surface-container-lowest flex items-center justify-center">
<span className="font-eyebrow-caps text-eyebrow-caps text-outline tracking-[1em] translate-x-2">TECHNICAL</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-x-24 gap-y-12">
<div className="flex justify-between items-end border-b border-surface-variant/40 pb-4">
<span className="font-eyebrow-caps text-label-bold text-outline uppercase">Engine</span>
<span className="font-body-md text-off-white">3.5L Twin-Turbo EcoBoost V6</span>
</div>
<div className="flex justify-between items-end border-b border-surface-variant/40 pb-4">
<span className="font-eyebrow-caps text-label-bold text-outline uppercase">Transmission</span>
<span className="font-body-md text-off-white">7-Speed Dual-Clutch</span>
</div>
<div className="flex justify-between items-end border-b border-surface-variant/40 pb-4">
<span className="font-eyebrow-caps text-label-bold text-outline uppercase">Downforce</span>
<span className="font-body-md text-off-white">400 lbs @ 150 MPH</span>
</div>
<div className="flex justify-between items-end border-b border-surface-variant/40 pb-4">
<span className="font-eyebrow-caps text-label-bold text-outline uppercase">Chassis</span>
<span className="font-body-md text-off-white">Carbon Fiber Monocoque</span>
</div>
<div className="flex justify-between items-end border-b border-surface-variant/40 pb-4">
<span className="font-eyebrow-caps text-label-bold text-outline uppercase">0-100 MPH</span>
<span className="font-body-md text-off-white">6.2 Seconds</span>
</div>
<div className="flex justify-between items-end border-b border-surface-variant/40 pb-4">
<span className="font-eyebrow-caps text-label-bold text-outline uppercase">Brakes</span>
<span className="font-body-md text-off-white">Brembo Carbon Ceramic</span>
</div>
</div>
</div>
</section>

{/*  Call to Action  */}
<section className="py-24 md:py-60 px-6 md:px-margin-desktop relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img loading="lazy" className="w-full h-full object-cover opacity-30" alt="An abstract cinematic detail of the Ford GT's rear exhaust port glowing hot red at dusk." src={engineCoverImg}/>
<div className="absolute inset-0 bg-matte-black/60"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto text-center">
<h2 className="font-display-xl text-4xl md:text-headline-lg mb-12 uppercase text-off-white">A car you earn, not buy.</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto mb-16">
                The Ford GT production is extremely limited. Every owner is selected through a rigorous application process.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<Link to="/ownership" className={`inline-flex items-center justify-center px-12 py-5 ${theme.bg} font-eyebrow-caps text-eyebrow-caps text-off-white ${theme.hoverBg} transition-all transform active:scale-95 min-h-[48px] touch-manipulation select-none`}>
                    Apply for Ownership
                </Link>
<button 
  onClick={() => setModalOpen(true)} 
  className="inline-flex items-center justify-center px-12 py-5 border border-off-white/30 font-eyebrow-caps text-eyebrow-caps text-off-white hover:bg-off-white hover:text-matte-black transition-all transform active:scale-95 min-h-[48px] touch-manipulation select-none"
>
                    View Registry
                </button>
</div>
</div>
</section>

<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Registry Access Restricted">
  Access to the global Ford GT chassis registry is currently restricted to verified owners and authorized Ford Performance personnel.
</Modal>

</>
  );
}
