import React from 'react';
import Letter from './Letters';

const TitleSection = () => (
  <div id='title' className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-80 scale-[0.7]'>
    <div id='kampung' className='flex justify-center gap-1'>
      <Letter src="img/letters/K.svg" />
      <Letter src="img/letters/a_1.svg" />
      <Letter src="img/letters/m.svg" />
      <Letter src="img/letters/p.svg" className="transform translate-y-1/5" />
      <Letter src="img/letters/u.svg" />
      <Letter src="img/letters/n.svg" className="transform translate-y-1/20" />
      <Letter src="img/letters/g.svg" className="transform translate-y-1/4" />
    </div>
    <div id='budaya' className='flex justify-center gap-1'>
      <Letter src="img/letters/B.svg" />
      <Letter src="img/letters/u_2.svg" />
      <Letter src="img/letters/d.svg" className="transform -translate-y-1/7" />
      <Letter src="img/letters/a_2.svg" />
      <Letter src="img/letters/y.svg" className="transform translate-y-1/5" />
      <Letter src="img/letters/a_3.svg" className="transform translate-y-1/10" />
    </div>
    <div id='2025' className='flex justify-center gap-3 pr-24'>
      <Letter src="img/letters/2.svg" />
      <Letter src="img/letters/0.svg" />
      <Letter src="img/letters/2_2.svg" />
      <Letter src="img/letters/5.svg" />
    </div>
  </div>
);

export default TitleSection;