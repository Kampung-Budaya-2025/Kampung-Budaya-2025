import React from 'react';
import Letter from './Letters';

const TitleSection = () => (
  <div 
    id="title" 
    className="
      absolute 
      top-1/2 left-1/2 transform 
      -translate-x-1/2 
      -translate-y-4/5 md:-translate-y-80 
      scale-[0.35] sm:scale-[0.4] md:scale-[0.5] lg:xl:scale-[0.6] xl:scale-[0.7] 
    "
  >
    <div id='kampung' className='flex justify-center gap-1'>
      <Letter className='animate-slide-in-top-quick delay-100' src="img/letters/K.svg" />
      <Letter className='animate-slide-in-top-quick delay-200' src="img/letters/a_1.svg" />
      <Letter className='animate-slide-in-top-quick delay-300' src="img/letters/m.svg" />
      <Letter className='animate-slide-in-top-quick delay-400 transform translate-y-1/5' src="img/letters/p.svg" />
      <Letter className='animate-slide-in-top-quick delay-500' src="img/letters/u.svg" />
      <Letter className='animate-slide-in-top-quick delay-600 transform translate-y-1/20' src="img/letters/n.svg" />
      <Letter className='animate-slide-in-top-quick delay-700 transform translate-y-1/4' src="img/letters/g.svg" />
    </div>

    <div id='budaya' className='flex justify-center gap-1'>
      <Letter className='animate-slide-in-top-quick delay-700' src="img/letters/B.svg" />
      <Letter className='animate-slide-in-top-quick delay-800' src="img/letters/u_2.svg" />
      <Letter className='animate-slide-in-top-quick delay-900 transform -translate-y-1/7' src="img/letters/d.svg" />
      <Letter className='animate-slide-in-top-quick delay-1000' src="img/letters/a_2.svg" />
      <Letter className='animate-slide-in-top-quick delay-1100 transform translate-y-1/5' src="img/letters/y.svg" />
      <Letter className='animate-slide-in-top-quick delay-1200 transform translate-y-1/10' src="img/letters/a_3.svg" />
    </div>

    <div id='2025' className='flex justify-center gap-3 pr-24'>
      <Letter className='animate-slide-in-top-quick delay-1200' src="img/letters/2.svg" />
      <Letter className='animate-slide-in-top-quick delay-1300' src="img/letters/0.svg" />
      <Letter className='animate-slide-in-top-quick delay-1400' src="img/letters/2_2.svg" />
      <Letter className='animate-slide-in-top-quick delay-1500' src="img/letters/5.svg" />
    </div>
  </div>
);

export default TitleSection;
