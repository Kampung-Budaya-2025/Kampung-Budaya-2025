import React from 'react';
import GradientText from '@/Components/Common/GradientText';
import RollingGallery from './UI/RollingGallery';
import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import { useInView } from '@/Hooks/UseInView';



const KilasBalik = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();
    const { ref: mascotRef, isInView: mascotInView } = useInView<HTMLDivElement>(); // <-- untuk mascot

  return (
    <section className='relative flex flex-col'>
      <FlowerDecoration size='w-24 sm:w-40' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-0 top-20 md:top-56 tansform -translate-x-1/2" className='' />       {/* left top*/}
      <FlowerDecoration size='w-24 sm:w-40' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-0 top-20 md:hidden tansform translate-x-1/2" className='' animation='animate-spin-counter' />       {/* right top */}

      <FlowerDecoration size='w-12 sm:w-20' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-18 top-24 md:top-42 md:left-28 tansform -translate-x-1/2" className='' />       {/* left top*/}
      <FlowerDecoration size='w-12 sm:w-20 md:w-16' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-18 top-24 md:top-56 md:right-24 lg:hidden tansform translate-x-1/2" className='' animation='animate-spin-counter' />       {/* right top */}

      <FlowerDecoration size='w-24 sm:w-40' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-0 bottom-20 tansform -translate-x-1/2" className='' />       {/* left big*/}
      <FlowerDecoration size='w-24 sm:w-40' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-0 bottom-20 tansform translate-x-1/2" className='md:hidden' animation='animate-spin-counter' />       {/* right big */}

      <FlowerDecoration className='block md:hidden ' size='w-28 sm:w-40 md:w-24' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-1/2 bottom-0 tansform translate-x-1/2" animation='animate-spin-counter' />  {/* middle */}
      <FlowerDecoration className='block md:hidden' size='w-16 sm:w-24' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-1/5 sm:left-1/4 bottom-0 transform" />  {/* middle */}
      <FlowerDecoration className='block md:hidden' size='w-16 sm:w-24' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-1/5 sm:right-1/4 bottom-0 transform" animation='animate-spin-counter' />  {/* middle */}

      <FlowerDecoration className='hidden md:block' size='w-11' zIndex='z-18' decorationSrc='bunga-2.svg' position="left-32 bottom-42 tansform" />
      <FlowerDecoration className='hidden md:block' animation='animate-spin-counter' zIndex='z-20' decorationSrc='bunga-2.svg' position="right-0 bottom-24 tansform translate-x-1/2" />
      <FlowerDecoration className='hidden md:block' size='w-48' zIndex='z-18' decorationSrc='bunga-2.svg' position="right-14 bottom-30 tansform" />
      <FlowerDecoration className='hidden md:block' animation='animate-spin-counter' size='w-32' zIndex='z-15' decorationSrc='bunga-2.svg' position="right-48 bottom-40 tansform" />
      <FlowerDecoration className='hidden lg:block' animation='animate-spin-counter' size='w-16' zIndex='z-15' decorationSrc='bunga-2.svg' position="right-36 top-84 tansform" />
      <FlowerDecoration className='hidden lg:block' size='w-12' zIndex='z-15' decorationSrc='bunga-2.svg' position="right-48 top-112 tansform" />
      <FlowerDecoration className='hidden lg:block' size='w-24' zIndex='z-15' decorationSrc='bunga-2.svg' position="left-18 top-108 tansform" />
      <FlowerDecoration className='hidden lg:block' animation='animate-spin-counter' size='w-14' zIndex='z-15' decorationSrc='bunga-2.svg' position="left-2 top-128 tansform" />
      <div
        ref={mascotRef} // <-- hubungkan ref di sini
        className={`transition-all duration-1000 ease-out ${mascotInView ? "animate-slide-in-right opacity-100" : "opacity-0"} z-10`}
      >
        <div className='z-10 w-48 lg:w-56 xl:w-60 absolute -right-5 top-64 lg:top-74 xl:top-80 rotate-y-180'>
          <img className='hidden md:block animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]' src="img/mascot/karakter-dewi.svg" alt="" />
        </div>
      </div>
      <img className='w-full' src="img/decoration/visi-footer.svg" alt="" />
      <div className='flex flex-col items-center justify-center pt-24'>
        <GradientText className='font-samsktrigrama text-[#3F170D] text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>
          Kilas Balik
        </GradientText>
        <p className='font-samsktrigrama text-[#3F170D] text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>
          Kampung Budaya 2024
        </p>
      </div>

      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
      >
        <RollingGallery autoplay={false} pauseOnHover={false} />
      </div>
    </section>
  );
};

export default KilasBalik;