import React from 'react';

type FlowerDecorationProps = {
  position: string;
  size?: string;
  animation?: string;
  zIndex?: string;
  decorationSrc?: 'bunga.svg' | 'bunga-2.svg'; 
};

const FlowerDecoration = ({ 
  position, 
  size = 'w-64', 
  animation = 'animate-spin-clockwise', 
  zIndex = 'z-10',
  decorationSrc = 'bunga.svg'
}: FlowerDecorationProps) => (
  <img 
    className={`absolute ${position} transform ${zIndex} ${size} object-contain ${animation}`}
    src={`img/decoration/${decorationSrc}`}
    alt="Dekorasi Bunga" 
  />
);

export default FlowerDecoration;