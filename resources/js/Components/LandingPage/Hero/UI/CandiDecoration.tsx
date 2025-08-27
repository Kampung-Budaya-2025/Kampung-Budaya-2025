import React from 'react';

type CandiDecorationProps = {
  position: string;
  src: string;
  className?: string;
};

const CandiDecoration = ({ position, src, className = '' }: CandiDecorationProps) => {
  const getHeight = () => {
    if (src.includes('candi-hero-1.svg')) return 'h-[36rem]';
    if (src.includes('candi-hero-2.svg')) return 'h-[20rem]';
    if (src.includes('candi-hero-3.svg')) return 'h-[30rem]';
    return 'h-96'; 
  };

  return (
    <img 
      className={`absolute ${position} transform z-10 object-contain ${className} ${getHeight()}`}
      src={src} 
      alt="Dekorasi Candi" 
    />
  );
};

export default CandiDecoration;