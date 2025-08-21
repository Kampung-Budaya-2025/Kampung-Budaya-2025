import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import React from 'react';

const Decorations = () => {
  return (
    <>
      <FlowerDecoration 
        position="absolute top-12 right-0 translate-x-1/2" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-56"
        animation="animate-spin-cw"
      />
      <FlowerDecoration 
        position="absolute top-12 right-24" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-24"
        animation="animate-spin-cw"
      />
      <FlowerDecoration 
        position="absolute top-52 right-24" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-12"
        animation="animate-spin-cw"
      />
      <FlowerDecoration 
        position="absolute top-12 left-0 -translate-x-1/2" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-56"
      />
      <FlowerDecoration 
        position="absolute bottom-12 right-0 translate-x-1/2" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-56"
        animation="animate-spin-cw"
      />
      <FlowerDecoration 
        position="absolute bottom-12 left-0 -translate-x-1/2" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-56"
      />
      <FlowerDecoration 
        position="absolute bottom-12 left-24" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-24"
        animation="animate-spin-cw"
      />
      <FlowerDecoration 
        position="absolute bottom-52 left-24" 
        decorationSrc="bunga-2.svg"
        zIndex="z-10"
        size="w-12"
        animation="animate-spin-cw"
      />
    </>
  );
};

export default Decorations;