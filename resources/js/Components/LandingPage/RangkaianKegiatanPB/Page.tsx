import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import GradientText from '@/Components/Common/GradientText';
import React from 'react';
import { useInView } from '../../../Hooks/UseInView';

const RangkaianKegiatanPB: React.FC = () => {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
  
      ref={ref}
      className={`
        z-30
        relative lg:max-h-screen w-full overflow-visible lg:pt-48
        transform transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Background batik */}
      <img
        className="absolute left-0 top-0 z-50 transform -translate-y-1/4 hidden lg:block"
        src="img/background/batik-triangle.svg"
        alt=""
      />
      <img
        className="absolute right-0 top-0 z-50 rotate-y-180 -translate-y-1/4 hidden lg:block"
        src="img/background/batik-triangle.svg"
        alt=""
      />

      {/* Batik pemisah mobile paling atas */}
      <div className="flex justify-center items-center order-2 lg:hidden">
        <img className="w-full" src="img/background/batik-mobile.svg" alt="" />
      </div>

      {/* Container utama */}
      <div className="w-full h-full lg:gap-6 xl:gap-12 lg:px-[10%] flex flex-col lg:flex-row overflow-visible">
        {/* Section Maskot */}
        <div className="flex flex-col items-center justify-center relative overflow-visible order-1 lg:order-2 lg:pt-0">
          <div className="relative w-full max-w-[550px] mx-auto flex items-center justify-center overflow-visible">
            <div
              className="absolute inset-0 w-[125%] h-[125%] -translate-x-[10%] -translate-y-[10%] xl:w-[150%] xl:h-[150%] xl:-translate-x-[17.5%] xl:-translate-y-[25%] overflow-visible"
              style={{
                backgroundImage: 'url(img/decoration/gunungan-daun.svg)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 1,
              }}
            />
            <img
              className="animate-float-12-3 relative z-10 w-1/2 md:w-[60%] xl:w-[72%] pt-12"
              src="img/mascot/karakter-obor.svg"
              alt="Karakter Obor"
            />
            <img
              className="hover-zoom-slow absolute z-20 w-24 md:w-32 top-2/5 left-1/5 transform -translate-x-1/2 -translate-y-1/2"
              src="img/card/bubble-welcome.svg"
              alt="Bubble Welcome"
            />
            <img
              className="hover-zoom-slow absolute z-20 w-24 md:w-32 bottom-2/5 right-1/5 transform translate-x-1/2 translate-y-1/2"
              src="img/card/bubble-happy.svg"
              alt="Bubble Happy"
            />
          </div>
        </div>

        {/* Batik mobile pemisah */}
        <div className="flex justify-center items-center order-2 lg:hidden">
          <img className="w-full" src="img/background/batik-mobile.svg" alt="" />
        </div>

        {/* Section Teks */}
        <div className="flex flex-col px-12 sm:px-18 md:px-24 lg:px-0 justify-center order-3 lg:order-1 lg:flex-1">
          <p className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl text-[#3F170D] font-samsktrigrama text-center lg:text-left">
            Kampung Budaya
          </p>

          <div className="pb-4 sm:pb-6 md:pb-8 lg:pb-0 xl:py-2 text-center lg:text-left">
            <GradientText className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-samsktrigrama">
              Rangkaian Kegiatan
            </GradientText>
            <GradientText className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-samsktrigrama">
              Pelestarian Budaya
            </GradientText>
          </div>

          <p className="text-base md:text-lg lg:text-base xl:text-xl text-[#7A4D17] text-center lg:text-left">
            Dilaksanakan oleh Kementerian Dalam Negeri Eksekutif Mahasiswa
            Universitas Brawijaya yang didalamnya terdapat rangkaian kegiatan
            seperti:
          </p>

          <div className="text-[#5D2F24] flex flex-col sm:grid sm:grid-cols-3 xl:gap-2 py-6 font-bold text-base md:text-lg lg:text-base xl:text-lg md:text-[20px] text-center lg:text-left">
            <p>Seminar</p>
            <p>Lomba Budaya</p>
            <p>Panggung Budaya Nusantara</p>
            <p>Teater Cakrawala Budaya</p>
            <p>Gemilang Busana Adat & Parade Budaya</p>
          </div>

          <p className="text-base md:text-lg lg:text-base xl:text-xl text-[#7A4D17] text-center lg:text-left">
            Yang menjadikan Kampung Budaya sebagai salah satu panggung terbesar
            untuk Forda dan komunitas budaya untuk unjuk kemampuan dan meraih
            prestasi.
          </p>
        </div>
      </div>

      {/* Batik pemisah mobile paling bawah */}
      <div className="flex justify-center items-center order-2 lg:hidden">
        <img className="w-full" src="img/background/batik-mobile.svg" alt="" />
      </div>

      {/* Dekorasi bunga */}
      <FlowerDecoration
        position="right-0 bottom-0 translate-x-1/2 translate-y-1/2"
        size="w-40 lg:w-42 xl:w-56"
        zIndex="z-30"
        className="hidden lg:block"
        animation="animate-spin-counter"
      />
      <FlowerDecoration
        position="left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
        size="w-40 lg:w-42 xl:w-56"
        zIndex="z-30"
        className="hidden lg:block"
      />
    </section>
  );
};

export default RangkaianKegiatanPB;


