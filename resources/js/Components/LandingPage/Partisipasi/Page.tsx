
import GradientText from '@/Components/Common/GradientText'
import React from 'react'
import RegisterButton from './RegsiterButton'
import { useInView } from '@/Hooks/UseInView'

const Partisipasi = () => {
  // Hook inView
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      <div className='relative pb-24 pt-0 lg:pb-24 lg:pt-12 xl:pb-24 xl:pt-24'>
        {/* Dekorasi daun kiri */}
        <img
          className='absolute w-48 sm:w-64 md:w-84 xl:w-128 z-0 transform bottom-80 -translate-x-1/3 left-0 animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]'
          src="img/decoration/daun.svg"
          alt=""
        />
        <img
          className='hidden lg:block absolute z-0 w-42 xl:w-72 transform -translate-x-1/3 left-0 top-96 rotate-30 animate-[floatWithRotateRight-12-3_2s_ease-in-out_infinite]'
          src="img/decoration/daun.svg"
          alt=""
        />

        {/* Dekorasi daun kanan */}
        <div className="absolute z-0 transform bottom-80 translate-x-1/3 right-0 rotate-y-180">
          <img
            className="w-48 sm:w-64 md:w-84 xl:w-128 animate-[floatWithRotateRight-12-3_3s_ease-in-out_infinite]"
            src="img/decoration/daun.svg"
            alt=""
          />
        </div>
        <div className="hidden lg:block absolute z-0 w-42 xl:w-72 transform translate-x-1/3 right-0 top-96 rotate-y-180 -rotate-30">
          <img
            className="animate-[floatWithRotateRight-12-3_2s_ease-in-out_infinite]"
            src="img/decoration/daun.svg"
            alt=""
          />
        </div>

        {/* Konten utama */}
        <div className='flex flex-col lg:flex-row h-full lg:px-24 xl:px-48 items-center'>
          {/* Teks */}
          <div className='flex flex-1 flex-col items-center justify-center'>
            <GradientText className='font-samsktrigrama text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl'>
              Kami Menantikan
            </GradientText>
            <GradientText className='font-samsktrigrama text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl'>
              Partisipasimu
            </GradientText>
            <p className='text-[#3F170D] text-md md:text-xl lg:text-xl xl:text-2xl mt-4 text-center'>
              Jangan lewatkan lomba-lomba dan forum daerah!
            </p>
            <RegisterButton className='hidden lg:block mt-12' />
          </div>

          {/* Maskot + dekorasi */}
          <div className='flex flex-1 w-full items-center justify-center relative py-4 lg:py-12'>
            <img
              className='hover-zoom-slow absolute w-18 sm:w-24 md:w-26 xl:w-32 right-42 sm:right-36 md:right-56 lg:bottom-48 lg:right-0 z-15'
              src="img/card/bubble-daftar.svg"
              alt=""
            />
            <img
              className='hover-zoom-slow absolute w-18 sm:w-24 md:w-26 xl:w-32 left-42 sm:left-36 md:left-56 lg:top-56 lg:left-0 z-15'
              src="img/card/bubble-lupa.svg"
              alt=""
            />
            <div className='absolute w-full inset-0 z-0 flex justify-center items-center pb-0 lg:pb-28'>
              <img
                src="img/decoration/candi.svg"
                alt=""
                className='object-contain w-72 sm:w-96 md:w-108 lg:w-128'
              />
            </div>
            <div className='flex flex-row -space-x-18 justify-center items-center z-10 pt-24 '>
              <div className='hover-zoom-slow'>
                <img
                  className='animate-float-12-3 w-42 sm:w-56 md:w-60 xl:w-72'
                  src="img/mascot/maskot-cowok.svg"
                  alt=""
                />
              </div>
              <div className='hover-zoom-slow'>
                <img
                  className='animate-float-12-4 w-42 sm:w-56 md:w-60 xl:w-72'
                  src="img/mascot/maskot-cewek.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <RegisterButton className='block lg:hidden' />
        </div>
      </div>

      {/* Footer */}
      <img
        className='w-full rotate-x-180'
        src="img/decoration/visi-footer.svg"
        alt=""
      />
    </div>
  )
}

export default Partisipasi
