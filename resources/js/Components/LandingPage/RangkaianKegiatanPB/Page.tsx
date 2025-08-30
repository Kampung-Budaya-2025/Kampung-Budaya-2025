import FlowerDecoration from '@/Components/Common/Flower/FlowerDecoration';
import GradientText from '@/Components/Common/GradientText';
import React from 'react';

const gradientColor =
  "tracking-[-0.02em] bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent";

const RangkaianKegiatanPB: React.FC = () => {
  return (
    <section className="relative lg:max-h-screen w-full overflow-visible lg:pt-48">
      {/* Background batik */}
      <img
        className="absolute left-0 top-0 z-30 transform -translate-y-1/4 hidden lg:block"
        src="img/background/batik-triangle.svg"
        alt=""
      />
      <img
        className="absolute right-0 top-0 z-30 rotate-y-180 -translate-y-1/4 hidden lg:block"
        src="img/background/batik-triangle.svg"
        alt=""
      />

                <div className="flex justify-center items-center order-2 lg:hidden">
          <img className="w-full" src="img/background/batik-mobile.svg" alt="" />
        </div>
      {/* Container utama */}
      <div className="w-full h-full lg:px-28 xl:px-56 flex flex-col lg:flex-row overflow-visible">

        
        {/* Section Maskot - di atas saat mobile */}
        <div className="flex flex-col items-center justify-center relative overflow-visible order-1 lg:order-2 lg:pt-0">
<div className="relative w-full max-w-[550px] mx-auto flex items-center justify-center overflow-visible">
            <div
              className="absolute inset-0 w-[125%] h-[125%] -translate-x-[10%] -translate-y-[10%] overflow-visible"
              style={{
                backgroundImage: 'url(img/decoration/gunungan-daun.svg)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: 1,
              }}
            />
            <img
              className="relative z-10 w-1/2 md:w-[60%] pt-12"
              src="img/mascot/karakter-obor.svg"
              alt="Karakter Obor"
            />
            <img
              className="absolute z-20 w-24 md:w-32 top-2/5 left-1/5 transform -translate-x-1/2 -translate-y-1/2"
              src="img/card/bubble-welcome.svg"
              alt="Bubble Welcome"
            />
            <img
              className="absolute z-20 w-24 md:w-32 bottom-2/5 right-1/5 transform translate-x-1/2 translate-y-1/2"
              src="img/card/bubble-happy.svg"
              alt="Bubble Happy"
            />
          </div>
        </div>

        {/* Batik mobile sebagai pemisah - hanya tampil di mobile */}
        <div className="flex justify-center items-center order-2 lg:hidden">
          <img className="w-full" src="img/background/batik-mobile.svg" alt="" />
        </div>

        {/* Section Teks - di bawah saat mobile */}
        <div className="flex flex-col px-12 lg:px-0 justify-center order-3 lg:order-1 lg:flex-1">
          <p className="font-medium text-3xl md:text-5xl text-[#3F170D] font-samsktrigrama text-center lg:text-left">
            Kampung Budaya
          </p>

          <div className="xl:py-2 text-center lg:text-left">
            <GradientText className="text-5xl md:text-8xl font-samsktrigrama">
              Rangkaian Kegiatan
            </GradientText>
            <GradientText className="text-5xl md:text-8xl font-samsktrigrama">
              Pelestarian Budaya
            </GradientText>
          </div>

          <p className="text-lg md:text-xl text-[#7A4D17] text-center lg:text-left">
            Dilaksanakan oleh Kementerian Dalam Negeri Eksekutif Mahasiswa
            Universitas Brawijaya yang didalamnya terdapat rangkaian kegiatan
            seperti:
          </p>

         <div className="flex flex-col sm:grid sm:grid-cols-3 xl:gap-2 py-6 font-bold text-lg md:text-[20px] text-center lg:text-left">
  <GradientText>Talkshow</GradientText>
  <GradientText>Lomba Budaya</GradientText>
  <GradientText>Gelanggang Budaya</GradientText>
  <GradientText>Workshop Membatik</GradientText>
  <GradientText>Parade</GradientText>
</div>


          <p className="text-lg md:text-xl text-[#7A4D17] text-center lg:text-left">
            Yang menjadikan Kampung Budaya sebagai salah satu panggung terbesar
            untuk Forda dan komunitas budaya untuk unjuk kemampuan dan meraih
            prestasi.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center order-2 lg:hidden">
          <img className="w-full" src="img/background/batik-mobile.svg" alt="" />
        </div>

      {/* Dekorasi bunga */}
      <FlowerDecoration
        position="right-0 bottom-0 translate-x-1/2 translate-y-1/2"
        size="w-40 md:w-64"
        zIndex="z-30"
        className='hidden lg:block'
      />
      <FlowerDecoration
        position="left-0 bottom-0 -translate-x-1/2 translate-y-1/2"
        size="w-40 md:w-64"
        zIndex="z-30"
                className='hidden lg:block'

      />
    </section>
  );
};

export default RangkaianKegiatanPB;