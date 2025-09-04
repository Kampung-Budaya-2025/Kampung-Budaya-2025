import React from 'react';

type CandiDecorationProps = {
  position: string;
  src: string;
  className?: string;
  Animation?: string;
};
const CandiDecoration = ({ position, src, className = '', Animation }: CandiDecorationProps) => {
  const getResponsiveHeight = () => {
    if (src.includes('candi-hero-1.svg')) {
      return 'h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem]';
    }
    if (src.includes('candi-hero-2.svg')) {
      return 'h-[12rem] sm:h-[14rem] md:h-[16rem] lg:h-[18rem] xl:h-[20rem]';
    }
    if (src.includes('candi-hero-3.svg')) {
      return 'h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[27rem] xl:h-[30rem]';
    }
    if (src.includes('candi.svg')) {
      return 'h-[18rem] sm:h-[24rem] md:h-[22rem] lg:h-[24rem]';
    }
    if (src.includes('candi-compact.svg')) {
      return 'h-[18rem] sm:h-[24rem] md:h-[22rem] lg:h-[24rem]';
    }
    return 'h-[16rem] sm:h-[20rem] md:h-[24rem]';
  };

  return (
    <div className={`absolute ${position} ${Animation}`}>

      <img
        className={` transform z-10 object-contain ${className} ${getResponsiveHeight()}`}
        src={src}
        alt="Dekorasi Candi"
      />
    </div>
  );
};

export default CandiDecoration;
