import React from 'react';
import FlowerDecoration from '../../../Common/Flower/FlowerDecoration';

const LeftFlowers = () => (
  <div id="flower_left" >
    <FlowerDecoration
      position="left-0 top-0 -translate-x-2/5 -translate-y-1/5 md:-translate-x-1/3"
      size="w-42 sm:w-48 md:w-56 lg:w-60 xl:w-64"
      className='opacity-0 animate-slide-in-left'
      animation="animate-spin-cw"
    />
    <FlowerDecoration
      position="left-36 top-4"
      size="w-32 lg:w-36 xl:w-42"
      className="hidden md:block opacity-0 animate-slide-in-left delay-100"
    />
    <FlowerDecoration
      position="left-28 top-42 lg:left-36 xl:left-42 xl:top-46"
      size="w-10 lg:w-12 xl:w-14"
      className="hidden md:block opacity-0 animate-slide-in-left delay-500"
      animation="animate-spin-cw"
    />
    <FlowerDecoration
      position="left-64 lg:left-72 xl:left-80 top-28"
      size="w-10 lg:w-12 xl:w-14"
      className="hidden md:block opacity-0 animate-slide-in-left delay-200"
    />
  </div>
);

// const MiddleFlowers = () => (
//   <div id="flower_mid" className="relative">
//     <FlowerDecoration
//       position="absolute bottom-0 left-1/2 "
//       size="w-32"
//       className=" delay-100"
//     />

//     <FlowerDecoration
//       position="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3"
//       size="w-48"
//       animation="animate-spin-cw"
//       className="delay-300"
//     />

//     <FlowerDecoration
//       position="right-1/2 -translate-x-1/2 translate-y-1/2"
//       size="w-32"
//       className="opacity-0 animate-slide-in-top delay-500"
//     />
//   </div>
// );


const MiddleFlowers = () => (
  <div id="flower_right" className='hidden lg:block'>

    <FlowerDecoration
      position="right-1/2 translate-x-48 translate-y-1/2 bottom-0 bottom-[22vh]"
      size="w-24"
      className='opacity-0 animate-slide-in-bottom delay-500'
      z-Index="z-0"

      animation='animate-spin-counter'

    />
    <FlowerDecoration
      position="left-1/2 -translate-x-48 translate-y-1/2 bottom-0 bottom-[22vh]"
      size="w-24"
      className='opacity-0 animate-slide-in-bottom delay-500'
      z-Index="z-0"

    />
    <FlowerDecoration
      position="right-1/2 translate-x-1/2 translate-y-1/2 bottom-[22vh]"
      size="w-48"
      className='opacity-0 animate-slide-in-bottom'
      z-Index="z-0"
    />

  </div>
);

const RightFlowers = () => (
  <div id="flower_right">
    <FlowerDecoration
      position="right-0 top-0 translate-x-2/5 -translate-y-1/5 md:translate-x-1/3"
      size="w-42 sm:w-48 md:w-56 lg:w-60 xl:w-64"
      className='opacity-0 animate-slide-in-right'
    />
    <FlowerDecoration
      position="right-36 top-4"
      animation="animate-spin-cw"
      size="w-32 lg:w-36 xl:w-42"
      className="hidden md:block opacity-0 animate-slide-in-right delay-100"
    />
    <FlowerDecoration
      position="right-28 top-42 lg:right-36 xl:right-42 xl:top-46"
      size="w-10 lg:w-12 xl:w-14"
      className="hidden md:block opacity-0 animate-slide-in-right delay-500"
      animation="animate-spin-counter"
    />
    <FlowerDecoration
      position="right-64 lg:right-72 xl:right-80 top-28"
      size="w-10 lg:w-12 xl:w-14"
      className="hidden md:block opacity-0 animate-slide-in-right delay-200"
    />
  </div>
);

const MobileFlowers = () => (
  <div id="flower_mobile" className="">
    <FlowerDecoration
      position="left-1/2 top-24 -translate-x-1/2 -translate-y-1/2"
      size="w-42"
      animation="animate-spin-cw"
      zIndex="z-20"
      className='opacity-0 animate-slide-in-top md:hidden'
    />
  </div>
);


const FlowerSection = () => (
  <div id="flower" className="">
    <LeftFlowers />
    <MobileFlowers />
    <MiddleFlowers />
    <RightFlowers />
  </div>
);

export default FlowerSection;
