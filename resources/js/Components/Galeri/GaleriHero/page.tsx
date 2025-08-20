import React from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  className: string;
  width?: number;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt, className, width }) => (
  <img
    src={src}
    alt={alt}
    className={`absolute pointer-events-none ${className}`}
    width={width}
    loading="lazy"
  />
);

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

interface SubTitleProps {
    children: React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = "" }) => (
  <h1 className={`text-[90px] font-normal font-samsktrigrama leading-[1.1] tracking-[-3px] drop-shadow-2xl relative z-30 bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent overflow-visible ${className}`}>
    {children}
  </h1>
);

const SubTitle: React.FC<SubTitleProps> = ({ children, className = "" }) => (
  <h2 className={`text-[24px] font-amaranth font-normal text-[#C88B5F] leading-normal text-center tracking-[-0.7px] drop-shadow-2xl relative z-30 overflow-visible max-w-[550px] ${className}`}>
    {children}
  </h2>
);

const GaleriHero: React.FC = () => {
  const backgroundImages = [
    {
      src: "/background/batik-horizontal-galeri.svg",
      alt: "Batik Background",
      className: "-top-25 left-0 w-full h-auto z-0"
    },
    {
      src: "/background/orang-bertapa.svg",
      alt: "Orang Bertapa Kiri",
      className: "-bottom-12 -left-28 z-10",
      width: 350
    },
    {
      src: "/background/orang-bertapa.svg",
      alt: "Orang Bertapa Kanan",
      className: "-bottom-12 -right-28 z-10 transform scale-x-[-1]",
      width: 350
    },
    {
      src: "/background/daun.svg",
      alt: "Daun Kiri",
      className: "bottom-30 left-13 z-0",
      width: 225
    },
    {
      src: "/background/daun.svg",
      alt: "Daun Kanan",
      className: "bottom-30 right-13 z-0 transform scale-x-[-1]",
      width: 225
    },
    {
      src: "/background/wayang.svg",
      alt: "Wayang Kiri",
      className: "bottom-10 left-15 z-0",
      width: 225
    },
    {
      src: "/background/wayang.svg",
      alt: "Wayang Kanan",
      className: "bottom-10 right-15 z-0 transform scale-x-[-1]",
      width: 225
    }
  ];

  return (
    <>
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <BackgroundImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          className={image.className}
          width={image.width}
        />
      ))}

      {/* Main Content */}
      <div className="relative h-[100vh] flex flex-col items-center justify-center mt-20 px-4 z-20">
        <Title className="-mb-10">
          Lomba Umum
        </Title>
        <Title>
          Forum Daerah
        </Title>
        <SubTitle>
          Panggung terbesar untuk Forda dan komunitas budaya untuk unjuk kemampuan dan meraih prestasi.
        </SubTitle>
      </div>
    </>
  );
};

export default GaleriHero;