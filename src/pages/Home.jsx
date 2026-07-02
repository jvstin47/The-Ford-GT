import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

import homeHeroImg from '../assets/home_hero.jpg';
import galleryTopdownImg from '../assets/gallery_topdown.jpg';
import archive1966Img from '../assets/archive_1966.jpg';
import homeGallerySliderImg from '../assets/home_gallery_slider.jpg';
import galleryWheelImg from '../assets/gallery_wheel.jpg';

export default function Home() {
  const { theme, selectedPaint } = useTheme();

  return (
    <>

{/*  Hero Section  */}
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0" aria-hidden="true">
<div className="w-full h-full parallax-bg transition-opacity duration-1000" style={{ backgroundImage: `url(${selectedPaint.img || homeHeroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/40 to-matte-black"></div>
</div>
<div className="relative z-10 text-center px-margin-mobile">
<p className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} mb-6 tracking-[0.6em] animate-pulse transition-colors`}>LEGACY DEFINED</p>
<h1 className="font-display-xl text-display-xl md:text-[120px] text-off-white uppercase leading-none mb-8 drop-shadow-2xl">
                THE APEX OF<br/>ENGINEERING.
            </h1>
<div className={`w-24 h-1 ${theme.bg} mx-auto mb-12 transition-colors`}></div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
<span className="font-eyebrow-caps text-[10px] text-outline tracking-widest uppercase">Explore the Shrine</span>
<div className={`w-px h-12 bg-gradient-to-b ${theme.bg === 'bg-liquid-blue' ? 'from-liquid-blue' : theme.bg === 'bg-race-red' ? 'from-race-red' : theme.bg === 'bg-frozen-white' ? 'from-off-white' : 'from-surface-variant'} to-transparent transition-colors`}></div>
</div>
</section>

{/*  Stats Ticker  */}
<section className="bg-carbon-gray border-y border-surface-variant/30 py-16 relative overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
<div className="flex flex-col items-center justify-center border-r border-surface-variant/20">
<span className="font-eyebrow-caps text-eyebrow-caps text-outline mb-2">0 - 60 MPH</span>
<span className="font-display-xl text-headline-lg text-off-white">3.0S</span>
</div>
<div className="flex flex-col items-center justify-center border-r border-surface-variant/20">
<span className="font-eyebrow-caps text-eyebrow-caps text-outline mb-2">TOP SPEED</span>
<span className="font-display-xl text-headline-lg text-off-white">216 MPH</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="font-eyebrow-caps text-eyebrow-caps text-outline mb-2">HORSEPOWER</span>
<span className="font-display-xl text-headline-lg text-off-white">660 HP</span>
</div>
</div>
</section>

{/*  Manifesto Section  */}
<section className="py-40 px-margin-mobile max-w-4xl mx-auto text-center reveal">
<div className="mb-12 flex justify-center gap-1">
<div className={`w-1.5 h-1.5 rounded-full ${theme.bg} transition-colors`}></div>
<div className={`w-1.5 h-1.5 rounded-full ${theme.bg} transition-colors`}></div>
</div>
<h2 className="font-headline-lg text-headline-lg text-off-white mb-10 leading-tight">
            A bridge between 1966 and tomorrow. Born to win Le Mans. Built to redefine the supercar.
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            The Ford GT is the ultimate expression of Ford Performance. A technical masterpiece that balances raw power with architectural precision, designed for those who command the road.
        </p>
</section>

{/* Track Dominance Gallery */}
<section className="py-20 bg-surface">
  <div className="flex w-full h-[70vh] min-h-[500px]">
    <div className="w-1/2 h-full relative group overflow-hidden">
      <img loading="lazy" src={homeGallerySliderImg} alt="Dynamic track shot of the Ford GT in motion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
      <div className="absolute bottom-12 left-12">
        <span className={`font-eyebrow-caps text-label-bold ${theme.text} mb-2 block transition-colors`}>01</span>
        <h3 className="font-headline-lg text-3xl text-off-white uppercase">Track Devourer</h3>
      </div>
    </div>
    <div className="w-1/2 h-full relative group overflow-hidden">
      <img loading="lazy" src={galleryWheelImg} alt="Detailed shot of the Ford GT wheel and Brembo brakes" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
      <div className="absolute bottom-12 left-12">
        <span className={`font-eyebrow-caps text-label-bold ${theme.text} mb-2 block transition-colors`}>02</span>
        <h3 className="font-headline-lg text-3xl text-off-white uppercase">Machined Perfection</h3>
      </div>
    </div>
  </div>
</section>

{/*  Engineering Bento Grid  */}
<section className="py-40 bg-surface px-margin-desktop max-w-container-max mx-auto">
<div className="flex justify-between items-end mb-20 border-b border-surface-variant/30 pb-10">
<div>
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} mb-4 block transition-colors`}>DESIGN ARCHITECTURE</span>
<h3 className="font-headline-lg text-headline-lg text-off-white">FORM FOLLOWING FUNCTION.</h3>
</div>
<div className="hidden md:block w-32 dual-stripe-h mb-4"></div>
</div>
<div className="grid grid-cols-12 gap-8">
{/*  Large Focus Card  */}
<div className="col-span-12 md:col-span-8 group overflow-hidden bg-carbon-gray reveal">
<div className="h-[600px] w-full overflow-hidden">
<img loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A detailed, side-profile view of the Ford GT" src={galleryTopdownImg}/>
</div>
<div className="p-12 border-t-2 border-transparent transition-colors duration-500" style={{ borderTopColor: selectedPaint.hex }}>
<span className={`font-eyebrow-caps text-label-bold ${theme.text} mb-4 block uppercase transition-colors`}>Aerodynamics</span>
<h4 className="font-headline-lg text-headline-lg text-off-white mb-6">THE FLYING BUTTRESS.</h4>
<p className="font-body-sm text-body-sm text-outline max-w-xl">
                        A hallmark of GT design, these functional wings guide airflow around the cabin to the rear spoiler, maximizing downforce without compromising drag.
                    </p>
</div>
</div>
{/*  Small Secondary Cards  */}
<div className="col-span-12 md:col-span-4 flex flex-col gap-8">
<div className={`bg-carbon-gray p-10 flex-1 reveal border-l-2 ${theme.border} transition-colors delay-100`}>
<span className={`font-eyebrow-caps text-label-bold ${theme.text} mb-4 block uppercase transition-colors`}>Construction</span>
<h5 className="font-headline-lg text-[32px] text-off-white mb-6">CARBON FIBER TUB</h5>
<p className="font-body-sm text-body-sm text-outline">
                        An ultra-lightweight carbon fiber passenger cell provides extreme rigidity and safety while keeping the curb weight exceptionally low.
                    </p>
</div>
<div className={`bg-carbon-gray p-10 flex-1 reveal border-l-2 ${theme.border} transition-colors delay-200`}>
<span className={`font-eyebrow-caps text-label-bold ${theme.text} mb-4 block uppercase transition-colors`}>Powertrain</span>
<h5 className="font-headline-lg text-[32px] text-off-white mb-6">ECOBOOST V6 HEART</h5>
<p className="font-body-sm text-body-sm text-outline">
                        The twin-turbocharged 3.5L engine delivers 660 HP, proving that performance isn't about displacement, but engineering purity.
                    </p>
</div>
</div>
</div>
</section>

{/*  Race Legacy CTA  */}
<section className="relative h-[819px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="w-full h-full parallax-bg opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" aria-label="A vintage, grainy, high-contrast shot of the 1966 Le Mans 24 Hours finish line" style={{ backgroundImage: `url(${archive1966Img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
<div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/60 to-transparent"></div>
</div>
<div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full reveal">
<div className="max-w-2xl">
<span className={`font-eyebrow-caps text-eyebrow-caps ${theme.text} mb-6 block transition-colors`}>MOTORSPORT DNA</span>
<h2 className="font-display-xl text-headline-lg md:text-[80px] text-off-white mb-10 leading-tight">THE RACE<br/>NEVER ENDS.</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-12">
                    In 1966, we broke the mold. In 2016, we returned to prove it again. Every GT on the road today carries the same competitive fire that dominated Le Mans.
                </p>
<Link to="/heritage" className={`group flex items-center gap-6 font-eyebrow-caps text-eyebrow-caps text-off-white ${theme.hoverText} transition-colors`}>
<span className={`border-b border-off-white group-hover:${theme.border} pb-1 transition-colors`}>VIEW THE ARCHIVES</span>
<span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
</Link>
</div>
</div>
</section>

{/*  Exclusivity Section  */}
<section className="py-60 bg-matte-black text-center reveal">
<div className="max-w-3xl mx-auto px-margin-mobile">
<h2 className="font-display-xl text-headline-lg text-off-white mb-8">A CAR YOU EARN,<br/>NOT BUY.</h2>
<p className="font-body-md text-body-md text-outline mb-16">
                The Ford GT application process is a journey of its own. Reserved for the most passionate collectors and enthusiasts who will carry the legacy forward.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-8">
<Link to="/ownership" className={`inline-block bg-off-white text-matte-black px-12 py-5 font-eyebrow-caps text-eyebrow-caps font-bold ${theme.hoverBg} hover:text-off-white transition-all transform active:scale-95`}>
                    INQUIRE NOW
                </Link>
<Link to="/specs" className={`inline-block border border-surface-variant px-12 py-5 font-eyebrow-caps text-eyebrow-caps text-off-white hover:${theme.border} transition-all transform active:scale-95`}>
                    DOWNLOAD BROCHURE
                </Link>
</div>
</div>
</section>

</>
  );
}
