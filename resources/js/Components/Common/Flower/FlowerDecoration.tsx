import React from 'react';

type FlowerDecorationProps = {
  position: string;
  size?: string;
  animation?: string;
  zIndex?: string;
  decorationSrc?: 'bunga.svg' | 'bunga-2.svg'; 
  className?: string; // tambahan
};

const FlowerDecoration = ({ 
  position, 
  size = 'w-64', 
  animation = 'animate-spin-clockwise', 
  zIndex = 'z-10',
  decorationSrc = 'bunga.svg',
  className = '', // default kosong
}: FlowerDecorationProps) => (
  <img 
    className={`absolute ${position} transform ${zIndex} ${size} object-contain ${animation} ${className}`}
    src={`img/decoration/${decorationSrc}`}
    alt="Dekorasi Bunga" 
  />
);

export default FlowerDecoration;
