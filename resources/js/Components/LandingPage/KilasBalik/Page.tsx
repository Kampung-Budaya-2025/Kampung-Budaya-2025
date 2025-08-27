import React from 'react';
import GradientText from '@/Components/Common/GradientText';
import RollingGallery from './UI/RollingGallery';
import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';

const KilasBalik = () => {
  return (
    <section className='relative flex flex-col'>
      <FlowerDecoration size='w-40' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-0 bottom-20 tansform -translate-x-1/2" />
      <FlowerDecoration size='w-11' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-32 bottom-42 tansform" />
      <FlowerDecoration animation='animate-spin-counter' zIndex='z-20' decorationSrc='bunga-2.svg' position="right-0 bottom-24 tansform translate-x-1/2" />
      <FlowerDecoration size='w-48' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-14 bottom-30 tansform" />
      <FlowerDecoration animation='animate-spin-counter' size='w-32' zIndex='z-15' decorationSrc='bunga-2.svg' position="right-48 bottom-40 tansform" />
      <FlowerDecoration animation='animate-spin-counter' size='w-16' zIndex='z-15' decorationSrc='bunga-2.svg' position="right-36 top-84 tansform" />
      <FlowerDecoration size='w-12' zIndex='z-15' decorationSrc='bunga-2.svg' position="right-48 top-112 tansform" />
      <FlowerDecoration size='w-24' zIndex='z-15' decorationSrc='bunga-2.svg' position="left-18 top-108 tansform" />
      <FlowerDecoration animation='animate-spin-counter' size='w-14' zIndex='z-15' decorationSrc='bunga-2.svg' position="left-2 top-128 tansform" />
      <div className='z-10 w-60 absolute -right-5 top-80 rotate-y-180'>
      <img className='animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]' src="img/mascot/karakter-dewi.svg"  alt="" />
      </div>
      <img className='w-full' src="img/decoration/visi-footer.svg" alt="" />
      <div className='flex flex-col items-center justify-center pt-24'>
        <GradientText className='font-samsktrigrama text-[#3F170D] text-8xl'>
          Kilas Balik
        </GradientText>
        <p className='font-samsktrigrama text-[#3F170D] text-8xl'>
          Kampung Budaya 2024
        </p>
      </div>

      <RollingGallery autoplay={false} pauseOnHover={false} />
    </section>
  );
};

export default KilasBalik;