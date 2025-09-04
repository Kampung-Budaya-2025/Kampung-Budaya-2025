// File: VisiMisi.jsx
import React, { useState, useEffect } from 'react';
import VisiMisiSection from './UI/VisiMisiCard';
import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import { useInView } from '@/Hooks/UseInView';

const Misi = [
  "Menjadi perusahaan teknologi terdepan di Asia Tenggara.",
  "Memberikan solusi inovatif yang mempermudah kehidupan jutaan orang.",
  "Menciptakan lingkungan kerja yang inklusif dan mendukung pertumbuhan karyawan.",
  "Berkontribusi secara positif terhadap masyarakat dan lingkungan."
];

const VisiMisi = () => {
  const [misiIndex, setMisiIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // ✅ InView observer
  const { ref, isInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setMisiIndex(prevIndex => (prevIndex + 1) % Misi.length);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      ref={ref} // ✅ attach observer
      className={`
        flex flex-col pb-12 lg:pb-48 items-center 
        bg-gradient-to-b from-[#FFFFFF] to-[#E1C476] gap-12 lg:gap-32 relative
        transform transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className='opacity-20'>
        <FlowerDecoration size='w-24 sm:w-32 md:w-42 lg:w-56 xl:w-64' position='absolute top-24 left-0 -translate-x-1/2 z-0'/>
        <FlowerDecoration size='w-24 sm:w-32 md:w-42 lg:w-56 xl:w-64' position='absolute top-5/12 right-48 translate-x-1/2 z-0'/>
        <FlowerDecoration size='w-24 sm:w-32 md:w-42 lg:w-56 xl:w-64' position='absolute top-3/4 right-0 translate-x-1/2 z-0'/>
        <FlowerDecoration size='w-24 sm:w-32 md:w-42 lg:w-56 xl:w-64' position='absolute top-6/12 left-48 translate-x-1/2 z-0'/>
        <FlowerDecoration size='w-24 sm:w-32 md:w-42 lg:w-56 xl:w-64' position='absolute bottom-0 left-1/2 z-0'/>
      </div>

      {/* Visi */}
      <div className='relative z-10'>
        <VisiMisiSection 
          decorationSrc="img/decoration/visi.svg"
          text="Mewujudkan Kampung Budaya sebagai gerbang pelestarian budaya yang partisipatif, inovatif, dan edukatif, guna menjaga keberlanjutan warisan leluhur serta menjadikannya relevan di masa kini dan masa depan."
          isFading={false}
        />
      </div>

      {/* Misi */}
      <div className='relative z-10'>
        <VisiMisiSection 
          decorationSrc="img/decoration/misi.svg"
          text={Misi[misiIndex]}
          isFading={isFading}
        />
      </div>
    </section>
  );
};

export default VisiMisi;
