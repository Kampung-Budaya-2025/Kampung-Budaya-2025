import React from 'react';
import FlowerDecoration from '../../../Common/Flower/FlowerDecoration';

const LeftFlowers = () => (
  <div id='flower_left'>
    <FlowerDecoration 
      position="left-0 top-0 -translate-x-1/3" 
      size="w-64" 
    />
    <FlowerDecoration 
      position="left-36 top-4" 
      size="w-42" 
    />
    <FlowerDecoration 
      position="left-42 top-46" 
      size="w-14" 
    />
    <FlowerDecoration 
      position="left-80 top-28" 
      size="w-14" 
    />
  </div>
);

const MiddleFlowers = () => (
  <div id='flower_mid'>
    <FlowerDecoration 
      position="left-60 right-0 bottom-[22vh] translate-y-2/3 mx-auto" 
      size="w-32" 
      zIndex="z-0" 
    />
    <FlowerDecoration 
      position="left-0 right-0 bottom-[22vh] translate-y-1/2 mx-auto" 
      size="w-42" 
      animation="animate-spin-cw"
      zIndex="z-0" 
    />
    <FlowerDecoration 
      position="left-0 right-60 bottom-[22vh] translate-y-2/3 mx-auto" 
      size="w-32" 
      zIndex="z-0" 
    />
  </div>
);

const RightFlowers = () => (
  <div id='flower_right'>
    <FlowerDecoration 
      position="right-0 top-0 translate-x-1/3"
      animation='animate-spin-cw'
      size="w-64" 
    />
    <FlowerDecoration 
      position="right-36 top-4" 
      animation='animate-spin-cw'
      size="w-42" 
    />
    <FlowerDecoration 
      position="right-42 top-46" 
      animation='animate-spin-cw'
      size="w-14" 
    />
    <FlowerDecoration 
      position="right-80 top-28" 
      animation='animate-spin-cw'
      size="w-14" 
    />
  </div>
);

const FlowerSection = () => (
  <div id='flower'>
    <LeftFlowers />
    <MiddleFlowers />
    <RightFlowers />
  </div>
);

export default FlowerSection;
