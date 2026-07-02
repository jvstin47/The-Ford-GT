import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

import heritageHeroImg from '../assets/heritage_hero.jpg';
import archive1966Img from '../assets/archive_1966.jpg';
import galleryTopdownImg from '../assets/gallery_topdown.jpg';
import carbonTubImg from '../assets/carbon_tub.jpg';
import heritageTimeline1966Img from '../assets/heritage_timeline_1966.jpg';

export default function Heritage() {
  const { theme } = useTheme();

  return (
    <>

<div className="grain-overlay"></div>

{/*  Hero Section  */}
<header className="relative h-screen flex items-end pb-32 hero-clip overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent z-10"></div>
<img className="w-full h-full object-cover transition-opacity duration-1000" alt="A cinematic low-angle wide shot of a modern Liquid Blue Ford GT on a sun-drenched coastal highway." src={heritageHeroImg} />
</div>
<div className="relative z-20 px-6 md:px-margin-desktop w-full max-w-container-max mx-auto">
<div className="max-w-3xl">
<p className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} mb-unit-2 tracking-[0.6em] transition-colors`}>ESTABLISHED 1964</p>
<h1 className="font-display-xl text-6xl md:text-display-xl mb-unit-4 leading-[0.9] text-off-white drop-shadow-lg">SIXTY YEARS.<br />ONE PURPOSE.</h1>
<p className="font-body-md text-body-md text-on-surface-variant mb-unit-8 max-w-xl">
                    A bridge between 1966 and tomorrow. Born to win Le Mans. Built to redefine the supercar.
                </p>
<div className={`flex flex-col md:flex-row gap-8 md:gap-12 border-l-4 ${theme.border} pl-6 md:pl-8 py-4 bg-carbon-gray/30 backdrop-blur-sm transition-colors`}>
<div>
<span className="block font-label-bold text-label-bold text-outline uppercase tracking-widest mb-1">Acceleration</span>
<span className="font-display-xl text-[40px] font-bold text-off-white">3.0<span className="text-xl ml-1 text-on-surface-variant">S</span></span>
</div>
<div>
<span className="block font-label-bold text-label-bold text-outline uppercase tracking-widest mb-1">Top Speed</span>
<span className="font-display-xl text-[40px] font-bold text-off-white">216<span className="text-xl ml-1 text-on-surface-variant">MPH</span></span>
</div>
<div>
<span className="block font-label-bold text-label-bold text-outline uppercase tracking-widest mb-1">Output</span>
<span className="font-display-xl text-[40px] font-bold text-off-white">660<span className="text-xl ml-1 text-on-surface-variant">HP</span></span>
</div>
</div>
</div>
</div>
</header>
{/*  Heritage Split Section  */}
<section className="py-[160px] px-margin-desktop bg-matte-black overflow-hidden">
<div className="max-w-container-max mx-auto">
<div className="mb-24 flex flex-col items-center text-center">
<div className={`w-24 h-1 ${theme.bg} mb-8 transition-colors`}></div>
<h2 className="font-headline-lg text-headline-lg mb-4 text-off-white">THE CHASSIS OF LEGENDS</h2>
<p className="font-body-md text-body-md text-outline max-w-2xl">From the grit of Le Mans '66 to the carbon fiber perfection of today, the Ford GT remains an uncompromising statement of American engineering dominance.</p>
</div>
{/*  Split Timeline Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-surface-variant/20 relative overflow-hidden">
{/*  Archive Half  */}
<div className="group relative aspect-[4/5] lg:aspect-auto overflow-hidden bg-carbon-gray flex flex-col p-12 z-10">
<div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-700">
<img loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="A grainy, high-contrast black and white archival photograph from 1966" src={archive1966Img} />
</div>
<div className="relative z-10 mt-auto">
<span className="font-eyebrow-caps text-eyebrow-caps text-race-red">1966 ORIGINS</span>
<h3 className="font-headline-lg text-headline-lg mt-4 mb-6 text-off-white">THE GT40 MARK II</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-8">
                            Henry Ford II's quest to unseat the dominant Italian force at Le Mans. A 7.0-liter V8 heart wrapped in a body only forty inches tall.
                        </p>
<a href="#timeline" className={`font-label-bold text-label-bold text-off-white border-b border-off-white pb-2 ${theme.hoverText} hover:${theme.border} transition-all inline-flex items-center min-h-[48px] touch-manipulation`}>DISCOVER ORIGINS</a>
</div>
</div>
{/*  Modern Half  */}
<div className="group relative aspect-[4/5] lg:aspect-auto overflow-hidden bg-carbon-gray flex flex-col p-12 z-10">
<div className="absolute inset-0 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
<img loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="A vibrant, high-fidelity close-up of a 2016 Ford GT" src={galleryTopdownImg} />
</div>
<div className="relative z-10 mt-auto lg:text-right flex flex-col lg:items-end">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} transition-colors`}>MODERN ERA</span>
<h3 className="font-headline-lg text-headline-lg mt-4 mb-6 text-off-white">THE GEN 2 CARBON</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mb-8">
                            50 years later, the return to the Circuit de la Sarthe. Twin-turbocharged EcoBoost power meets active aerodynamics and carbon-shell technology.
                        </p>
<Link to="/specs" className={`font-label-bold text-label-bold text-off-white border-b border-off-white pb-2 ${theme.hoverText} hover:${theme.border} transition-all inline-flex items-center min-h-[48px] touch-manipulation`}>VIEW SPECS</Link>
</div>
</div>
{/*  Vertical Center Stripe  */}
<div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] bg-race-red -ml-[2px] z-20"></div>
<div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-[4px] ${theme.bg} ml-[8px] z-20 transition-colors`}></div>
</div>
</div>
</section>

{/* Interactive Timeline Section (Expanded) */}
<section id="timeline" className="py-24 md:py-[160px] px-6 md:px-margin-desktop bg-surface relative overflow-hidden">
<div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 pointer-events-none">
  <img loading="lazy" src={heritageTimeline1966Img} className="w-full h-full object-cover" style={{ maskImage: 'linear-gradient(to right, transparent, black)' }} alt="Vintage 1966 Le Mans pit stop" />
</div>
<div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start relative z-10">
<div className="lg:col-span-4 sticky top-40">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} tracking-widest block mb-4 transition-colors`}>MILESTONES</span>
<h2 className="font-headline-lg text-headline-lg mb-8 leading-tight text-off-white">MOMENTS THAT<br />DEFINED SPEED</h2>
<div className={`w-24 h-1 ${theme.bg} transition-colors`}></div>
</div>
<div className="lg:col-span-8 flex flex-col gap-24 md:gap-32 pl-6 md:pl-12 border-l border-surface-variant/30">
{/*  1964  */}
<div className="scroll-reveal group visible">
<span className={`font-display-xl text-[64px] font-bold text-on-surface/20 ${theme.hoverText} transition-colors duration-500 cursor-default`}>1964</span>
<h4 className="font-headline-lg text-headline-lg-mobile mt-2 text-off-white">The Prototype</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl">
                        The GT40 project begins. Designed to challenge the established racing order with radical mid-engine architecture and a focus on high-speed stability.
                    </p>
</div>
{/*  1966  */}
<div className="scroll-reveal group visible">
<span className={`font-display-xl text-[64px] font-bold text-on-surface/20 hover:text-race-red transition-colors duration-500 cursor-default`}>1966</span>
<h4 className="font-headline-lg text-headline-lg-mobile mt-2 text-off-white">Le Mans 1-2-3</h4>
<div className="p-6 mt-4 bg-carbon-gray border-l-4 border-race-red max-w-xl">
  <p className="font-body-md text-body-md text-on-surface-variant">
                          A legendary clean sweep. The Mark II GT40s dominate the 24 Hours of Le Mans, securing Ford's place in the history books and ending Ferrari's winning streak.
                      </p>
</div>
</div>
{/*  2002  */}
<div className="scroll-reveal group visible">
<span className={`font-display-xl text-[64px] font-bold text-on-surface/20 ${theme.hoverText} transition-colors duration-500 cursor-default`}>2002</span>
<h4 className="font-headline-lg text-headline-lg-mobile mt-2 text-off-white">The Concept Revival</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl">
                        Ford surprises the world at the Detroit Auto Show with the GT40 Concept. It wasn't just a retro-tribute; it was a promise of a new era.
                    </p>
</div>
{/*  2016  */}
<div className="scroll-reveal group visible">
<span className={`font-display-xl text-[64px] font-bold text-on-surface/20 ${theme.hoverText} transition-colors duration-500 cursor-default`}>2016</span>
<h4 className="font-headline-lg text-headline-lg-mobile mt-2 text-off-white">The Return to Le Mans</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl">
                        Exactly 50 years after the 1966 sweep, the new Ford GT wins the LMGTE Pro class at Le Mans. The legacy is reclaimed.
                    </p>
</div>
{/*  2017  */}
<div className="scroll-reveal group visible">
<span className={`font-display-xl text-[64px] font-bold text-on-surface/20 ${theme.hoverText} transition-colors duration-500 cursor-default`}>2017</span>
<h4 className="font-headline-lg text-headline-lg-mobile mt-2 text-off-white">Street Production</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl">
                        The ultimate application of race-bred technology reaches the road. A carbon-fiber monocoque, active aero, and 647 (later 660) horsepower.
                    </p>
</div>
</div>
</div>
</section>

{/*  Engineering Feature  */}
<section className="py-24 md:py-[160px] relative overflow-hidden bg-matte-black px-6 md:px-0">
<div className="absolute inset-0 opacity-20">

</div>
<div className="px-0 md:px-margin-desktop w-full max-w-container-max mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="relative z-10">
<div className={`absolute -top-6 -left-6 md:-top-12 md:-left-12 w-24 h-24 md:w-48 md:h-48 border-t-2 border-l-2 ${theme.border} opacity-50 transition-colors`}></div>
<img loading="lazy" className="w-full grayscale brightness-75 rounded-sm shadow-2xl" alt="A technical blueprint-style image of a Ford GT chassis" src={carbonTubImg} />
</div>
<div className="z-10">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} block mb-4 transition-colors`}>TECHNICAL EXCELLENCE</span>
<h2 className="font-headline-lg text-headline-lg mb-8 leading-tight text-off-white">FORM FOLLOWING<br />FUNCTION</h2>
<div className="space-y-12">
<div className="border-b border-surface-variant/30 pb-6">
<h5 className="font-label-bold text-label-bold text-off-white tracking-widest uppercase mb-2">Flying Buttress</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">Functional art. These structural arches direct airflow to the rear wing while providing lateral stability at high speeds.</p>
</div>
<div className="border-b border-surface-variant/30 pb-6">
<h5 className="font-label-bold text-label-bold text-off-white tracking-widest uppercase mb-2">Carbon Fiber Shell</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">The entire body and tub are constructed from aerospace-grade carbon fiber for maximum rigidity and minimum mass.</p>
</div>
<div className="border-b border-surface-variant/30 pb-6">
<h5 className="font-label-bold text-label-bold text-off-white tracking-widest uppercase mb-2">EcoBoost V6</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">The high-output 3.5L twin-turbocharged heart delivers efficient, immediate, and brutal power to the rear wheels.</p>
</div>
</div>
</div>
</div>
</div>
</section>

{/*  Exclusivity Section  */}
<section className="py-24 md:py-[160px] px-6 md:px-margin-desktop bg-surface-container-lowest">
<div className="max-w-container-max mx-auto text-center">
<div className={`inline-block px-6 md:px-12 py-12 md:py-16 border ${theme.border} relative bg-carbon-gray/20 transition-colors`}>
<div className={`absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 ${theme.border} transition-colors`}></div>
<div className={`absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 ${theme.border} transition-colors`}></div>
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} mb-8 block transition-colors`}>THE APPLICATION PROCESS</span>
<h2 className="font-display-xl text-4xl md:text-[64px] mb-8 uppercase text-off-white">A CAR YOU EARN, NOT BUY.</h2>
<p className="font-body-md text-body-md text-outline max-w-2xl mx-auto mb-12">
                    Ownership of a Ford GT is a partnership with Ford Performance. Each applicant is hand-selected based on their loyalty to the brand and passion for automotive excellence.
                </p>
<Link to="/ownership" className={`inline-flex items-center justify-center bg-off-white text-matte-black px-12 py-4 font-label-bold text-label-bold tracking-widest ${theme.hoverBg} hover:text-white transition-all transform active:scale-95 min-h-[48px] touch-manipulation select-none`}>REGISTER INTEREST</Link>
</div>
</div>
</section>

</>
  );
}
