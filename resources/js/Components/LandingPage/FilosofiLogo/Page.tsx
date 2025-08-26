import GradientText from '@/Components/Common/GradientText'
import React, { useState, useEffect } from 'react'

const FilosofiLogi = () => {
  const logoData = [
    {
      id: 1,
      src: "icon/logo-kampung-budaya.svg",
      title: "BENTUK AIR PADA EKOR PESUT MAHAKAM",
      description: "Memiliki arti Keterhubungan dan Ketergantungan. Bermakna yang menekankan setiap elemen - elemen untuk kolaborasi dan kerja sama."
    },
    {
      id: 2,
      src: "img/decoration/daun.svg",
      title: "KEPALA PESUT MAHAKAM YANG MELENGKUNG",
      description: "Melambangkan kebijaksanaan dan kelembutan dalam memimpin. Menggambarkan sifat ramah dan mudah beradaptasi dengan lingkungan."
    },
    {
      id: 3,
      src: "icon/logo-kampung-budaya.svg",
      title: "GELOMBANG SUNGAI MAHAKAM",
      description: "Mengartikan pergerakan yang dinamis dan berkelanjutan. Simbol kehidupan yang terus mengalir dan berkembang bersama waktu."
    },
    {
      id: 4,
      src: "icon/logo-kampung-budaya.svg",
      title: "LINGKARAN BUDAYA KALIMANTAN",
      description: "Representasi dari keberagaman budaya yang bersatu. Menunjukkan harmoni dan keseimbangan dalam perbedaan."
    }
    ,
    {
      id: 5,
      src: "icon/logo-kampung-budaya.svg",
      title: "LINGKARAN BUDAYA KALIMANTAN",
      description: "Representasi dari keberagaman budaya yang bersatu. Menunjukkan harmoni dan keseimbangan dalam perbedaan."
    }
  ]

  const [activeLogoIndex, setActiveLogoIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const logoCount = logoData.length;

  // Handle swipe/click untuk navigasi
  const handleLogoClick = (index) => {
    if (index !== activeLogoIndex && !isTransitioning) {
      setIsTransitioning(true)
      setActiveLogoIndex(index)
      
      // Reset transition state setelah animasi selesai
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }
  }

  // Auto swipe setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        // This is already correctly looping
        setActiveLogoIndex((prev) => (prev + 1) % logoCount)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isTransitioning, logoCount])

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // Loop forward
      handleLogoClick((activeLogoIndex + 1) % logoCount)
    }
    if (isRightSwipe) {
      // Loop backward
      handleLogoClick((activeLogoIndex - 1 + logoCount) % logoCount)
    }
  }

  const activeLogoData = logoData[activeLogoIndex]

  return (
    <section className="relative flex flex-col pt-32 w-full overflow-hidden">
      {/* Background batikan */}
      <div>
        <img className="w-full rotate-180" src="img/background/batikan.svg" alt="" />
      </div>

      <div className="w-full flex flex-col px-24 my-24">
        {/* Background decoration */}
        <div className="z-0 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px]">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[#E1B01B] opacity-10"></div>
            <div className="absolute w-[800px] h-[800px] rounded-full bg-[#E1B01B] opacity-10"></div>
            <div className="absolute inset-0 m-auto flex justify-center items-center">
              <img 
                className="w-72 opacity-20 animate-spin-counter" 
                src="img/decoration/bunga.svg" 
                alt="Bunga Dekorasi" 
              />
            </div>
          </div>
        </div>

        {/* Judul */}
        <div className="flex flex-col w-full items-end">
          <GradientText className="font-samsktrigrama text-8xl">
            Filosofi Logo
          </GradientText>
          <p className="font-samsktrigrama text-[#3F170D] text-8xl">
            Kampung Budaya 2024
          </p>
        </div>

        {/* Logo utama dengan swipe functionality */}
        <div 
          className="flex flex-row w-full h-full my-12 gap-24 items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Logo utama (active) */}
          <div className="relative flex flex-2 items-center justify-center">
            {/* Concentric circles dengan animasi pulse */}
            <div className={`absolute w-[600px] h-[600px] rounded-full bg-[#E1B01B] opacity-10 transition-all duration-300 ${isTransitioning ? 'scale-110' : 'scale-100'}`}></div>
            <div className={`absolute w-[500px] h-[500px] rounded-full bg-[#E1B01B] opacity-20 transition-all duration-300 ${isTransitioning ? 'scale-105' : 'scale-100'}`}></div>
            <div className={`absolute w-[400px] h-[400px] rounded-full bg-[#E1B01B] opacity-30 transition-all duration-300 ${isTransitioning ? 'scale-110' : 'scale-100'}`}></div>

            {/* Active logo dengan smooth transition */}
            <img
              className={`w-68 relative z-10 transition-all duration-300 ${isTransitioning ? 'scale-105 opacity-80' : 'scale-100 opacity-100'}`}
              src={activeLogoData.src}
              alt="Logo Kampung Budaya Active"
            />
          </div>

          {/* Logo sequence */}
          <div className="relative flex flex-3 gap-12 items-center">
            {/* Display the next elements after the active one */}
            {logoData.slice(activeLogoIndex + 1).map((logo, index) => {
              const positionFromActive = index + 1; // since slice starts after activeIndex
              let sizeClass, opacity, cursor, zIndex;

              if (positionFromActive === 1) {
                sizeClass = "w-50";
                opacity = "opacity-90";
                cursor = "cursor-pointer hover:opacity-100";
                zIndex = "z-20";
              } else if (positionFromActive === 2) {
                sizeClass = "w-40";
                opacity = "opacity-70";
                cursor = "cursor-pointer hover:opacity-90";
                zIndex = "z-15";
              } else if (positionFromActive === 3) {
                sizeClass = "w-30";
                opacity = "opacity-50";
                cursor = "cursor-pointer hover:opacity-70";
                zIndex = "z-10";
              } else {
                sizeClass = "w-20";
                opacity = "opacity-30";
                cursor = "cursor-pointer hover:opacity-50";
                zIndex = "z-5";
              }

              return (
                <img
                  key={logo.id}
                  className={`${sizeClass} ${opacity} ${cursor} ${zIndex} relative transition-all duration-300 transform hover:scale-105`}
                  src={logo.src}
                  alt={`Logo ${logo.id}`}
                  onClick={() => handleLogoClick(activeLogoIndex + positionFromActive)}
                />
              );
            })}

            {/* If not enough elements left, show from the beginning */}
            {logoData.slice(0, Math.max(0, 4 - (logoCount - 1 - activeLogoIndex))).map((logo, index) => {
                const positionFromActive = (logoCount - activeLogoIndex) + index;
                let sizeClass, opacity, cursor, zIndex;

                if (positionFromActive === 1) {
                  sizeClass = "w-50";
                  opacity = "opacity-90";
                  cursor = "cursor-pointer hover:opacity-100";
                  zIndex = "z-20";
                } else if (positionFromActive === 2) {
                  sizeClass = "w-40";
                  opacity = "opacity-70";
                  cursor = "cursor-pointer hover:opacity-90";
                  zIndex = "z-15";
                } else if (positionFromActive === 3) {
                  sizeClass = "w-30";
                  opacity = "opacity-50";
                  cursor = "cursor-pointer hover:opacity-70";
                  zIndex = "z-10";
                } else {
                  sizeClass = "w-20";
                  opacity = "opacity-30";
                  cursor = "cursor-pointer hover:opacity-50";
                  zIndex = "z-5";
                }

                return (
                  <img
                    key={logo.id}
                    className={`${sizeClass} ${opacity} ${cursor} ${zIndex} relative transition-all duration-300 transform hover:scale-105`}
                    src={logo.src}
                    alt={`Logo ${logo.id}`}
                    onClick={() => handleLogoClick(index)}
                  />
                );
            })}

          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 my-8">
          {logoData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeLogoIndex 
                  ? 'bg-[#E1B01B] scale-125' 
                  : 'bg-[#E1B01B] opacity-30 hover:opacity-60'
              }`}
              onClick={() => handleLogoClick(index)}
            />
          ))}
        </div>

        {/* Penjelasan dengan smooth transition */}
        <div className="flex flex-col w-full items-end">
          <p className={`text-[#3F170D] text-3xl font-bold transition-all duration-300 ${isTransitioning ? 'opacity-70 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            {activeLogoData.title}
          </p>
          <p className={`text-[#3F170D] text-2xl w-[50%] text-right mt-4 transition-all duration-300 ${isTransitioning ? 'opacity-70 translate-y-2' : 'opacity-100 translate-y-0'}`}>
            {activeLogoData.description}
          </p>
        </div>

        {/* Navigation buttons */}
        <button
          className="absolute left-8 top-1/2 translate-y-36 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300 z-30"
          onClick={() => handleLogoClick((activeLogoIndex - 1 + logoCount) % logoCount)}
        >
          <svg className="w-6 h-6 text-[#3F170D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="absolute right-8 top-1/2 translate-y-36 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300 z-30"
          onClick={() => handleLogoClick((activeLogoIndex + 1) % logoCount)}
        >
          <svg className="w-6 h-6 text-[#3F170D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default FilosofiLogi