import React from 'react';
import CandiDecoration from './CandiDecoration';

const LeftCandi = () => (
  <div id='candi_left' className="hidden md:block">
    <CandiDecoration
      position="left-0 bottom-[15vh] sm:bottom-[18vh] md:bottom-[22vh]"
      src="img/decoration/candi-hero-3.svg"
      Animation='animate-slide-in-left-nofade'
    />
    <CandiDecoration
      position="left-6 sm:left-8 md:left-12 bottom-[15vh] sm:bottom-[18vh] md:bottom-[22vh]"
      src="img/decoration/candi-hero-2.svg"
      Animation='animate-slide-in-left-nofade delay-300'
    />
    <CandiDecoration
      position="left-0 bottom-[15vh] sm:bottom-[18vh] md:bottom-[22vh]"
      src="img/decoration/candi-hero-1.svg"
      Animation='animate-slide-in-left-nofade delay-200'
    />
  </div>
);

const RightCandi = () => (
  <div id='candi_right' className="hidden md:block">
    <CandiDecoration
      position="right-0 bottom-[15vh] sm:bottom-[18vh] md:bottom-[22vh]"
      src="img/decoration/candi-hero-3.svg"
      className="rotate-y-180"
      Animation='animate-slide-in-right-nofade'
    />
    <CandiDecoration
      position="right-6 sm:right-8 md:right-12 bottom-[15vh] sm:bottom-[18vh] md:bottom-[22vh]"
      src="img/decoration/candi-hero-2.svg "
      className=""
      Animation='animate-slide-in-right-nofade delay-300'
    />
    <CandiDecoration
      position="right-0 bottom-[15vh] sm:bottom-[18vh] md:bottom-[22vh]"
      src="img/decoration/candi-hero-1.svg"
      className="rotate-y-180"
      Animation='animate-slide-in-right-nofade delay-200'
    />
  </div>
);

const MobileCandi = () => (
    <div className="z-0 absolute w-full bottom-[16vh] flex justify-center md:hidden overflow-x-visible animate-slide-in-bottom"
    >
        <CandiDecoration
            position="relative"
            src="img/decoration/candi-compact.svg"
        />
        
    </div>
);

const CandiSection = () => (
  <div id='candi' >
    <LeftCandi />
    <RightCandi />
    <MobileCandi />
  </div>
);

export default CandiSection;