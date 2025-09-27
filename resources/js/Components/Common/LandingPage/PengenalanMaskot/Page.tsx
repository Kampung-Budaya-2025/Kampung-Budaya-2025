import React from 'react'
import Mascot from './UI/Mascot'
import { useInView } from '@/Hooks/UseInView'

const PengengalanMaskot = () => {
  const { ref, isInView } = useInView<HTMLDivElement>() // 🔹 aktifkan observer

  return (
    <section
      ref={ref}
      className={`
        xl:min-h-[85vh] relative lg:px-[16%] lg:pt-36
        transform transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <img
        className="hidden md:block absolute left-0 bottom-0 z-30 transform rotate-x-180 translate-y-1/2"
        src="img/background/batik-triangle.svg"
        alt=""
      />
      <img
        className="hidden md:block absolute right-0 bottom-0 z-30 rotate-180 transform translate-y-1/2"
        src="img/background/batik-triangle.svg"
        alt=""
      />

      <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center lg:not-default:gap-10">
        {/* Bagian Teks Pengenalan */}
        <div className="flex flex-col items-center justify-center gap-2 text-[#3F170D] order-1 lg:order-2">
          <img className="w-64 sm:w-72 xl:w-96" src="img/decoration/ukiran.svg" alt="" />
          <p className="text-7xl sm:text-8xl lg:text-7xl xl:text-8xl font-samsktrigrama bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent text-center">
            Pengenalan
          </p>
          <p className="text-7xl sm:text-8xl lg:text-7xl xl:text-8xl font-samsktrigrama bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent text-center">
            MASKOT
          </p>
          <img className="w-64 sm:w-72 xl:w-96 rotate-180" src="img/decoration/ukiran.svg" alt="" />
        </div>

        {/* Batik mobile */}
        <div className="flex justify-center w-full items-center order-2 lg:hidden">
          <img className="w-full" src="img/background/batik-mobile.svg" alt="Batik pemisah mobile" />
        </div>

        {/* Bagian Maskot */}
        <div className="flex flex-col lg:flex-3 relative h-full items-center justify-center order-3 lg:order-1">
          <img
            className="absolute lg:w-[150%] z-0 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3"
            src="img/background/ukiran.svg"
            alt=""
          />
          <div className="flex justify-center items-center w-full h-full -space-x-12 ">
            <Mascot
              className="w-48 sm:w-60 md:w-72 xl:w-72"
              mascotSrc="img/mascot/maskot-cowok.svg"
              nameSrc="img/mascot/Rangga.svg"
              animate="animate-float-12-4"
            />
            <div className="pb-10">
              <Mascot
                className="w-48 sm:w-60 md:w-72 xl:w-72"
                mascotSrc="img/mascot/maskot-cewek.svg"
                nameSrc="img/mascot/Raras.svg"
                translateY="transform"
                animate="animate-float-12-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PengengalanMaskot

