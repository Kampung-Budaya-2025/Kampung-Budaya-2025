import React from 'react';
import CandiDecoration from './CandiDecoration';

const LeftCandi = () => (
  <div id='candi_left'>
    <CandiDecoration 
      position="left-0 bottom-[22vh]" 
      src="img/decoration/candi-hero-3.svg" 
    />
    <CandiDecoration 
      position="left-12 bottom-[22vh]" 
      src="img/decoration/candi-hero-2.svg" 
    />
    <CandiDecoration 
      position="left-0 bottom-[22vh]" 
      src="img/decoration/candi-hero-1.svg" 
    />
  </div>
);

const RightCandi = () => (
  <div id='candi_right'>
    <CandiDecoration 
      position="right-0 bottom-[22vh]" 
      src="img/decoration/candi-hero-3.svg" 
      className="rotate-y-180"
    />
    <CandiDecoration 
      position="right-12 bottom-[22vh]" 
      src="img/decoration/candi-hero-2.svg" 
    />
    <CandiDecoration 
      position="right-0 bottom-[22vh]" 
      src="img/decoration/candi-hero-1.svg" 
      className="rotate-y-180"
    />
  </div>
);

const CandiSection = () => (
  <div id='candi' >
    <LeftCandi />
    <RightCandi />
  </div>
);

export default CandiSection;