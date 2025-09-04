import React from 'react';

type FlowerDecorationProps = {
  position: string;
  size?: string;
  animation?: string;
  zIndex?: string;
  decorationSrc?: 'bunga.svg' | 'bunga-2.svg'; 
  className?: string;
};

const FlowerDecoration = ({ 
  position, 
  size = 'w-64', 
  animation = 'animate-spin-clockwise', 
  zIndex = 'z-10',
  decorationSrc = 'bunga.svg',
  className = '',
}: FlowerDecorationProps) => (
  <div className={`${className} absolute ${position} ${zIndex} `}>
    <img 
      className={`transform ${size} object-contain ${animation}`} 
      src={`img/decoration/${decorationSrc}`} 
      alt="Dekorasi Bunga" 
    />
  </div>
);

export default FlowerDecoration;
