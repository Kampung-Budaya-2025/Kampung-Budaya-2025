import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Default images
const IMGS: string[] = [
  "img/card/kilas_balik/kilas-1.png",
  "img/card/kilas_balik/kilas-2.png",
  "img/card/kilas_balik/kilas-3.png",
  "img/card/kilas_balik/kilas-4.png",
  "img/card/kilas_balik/kilas-5.png",
  "img/card/kilas_balik/kilas-6.png",
  "img/card/kilas_balik/kilas-7.png",
  "img/card/kilas_balik/kilas-8.png",
  "img/card/kilas_balik/kilas-9.png",
  "img/card/kilas_balik/kilas-10.png",
];

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: string[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const effectiveImages: string[] = images.length > 0 ? images : IMGS;
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover && swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover && swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <div
      className="relative flex h-[650px] w-full items-center justify-center overflow-hidden pt-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRef}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={3}
        spaceBetween={-100}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.9,
          slideShadows: false,
        }}
        autoplay={
          autoplay
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: pauseOnHover,
              }
            : false
        }
 
        modules={[Autoplay, EffectCoverflow]}
        className="h-full w-full"
        style={{ paddingBottom: "20px" }}
      >
        {effectiveImages.map((url, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={url}
              alt={`Gallery image ${index + 1}`}
              className="h-[450px] w-[900px] rounded-[15px] object-contain
                         sm:h-[350px] sm:w-[700px] transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        :global(.swiper-slide) {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        :global(.swiper-slide-active) {
          transform: scale(1.2) !important;
          opacity: 1;
          z-index: 10;
        }

        :global(.swiper-slide-prev),
        :global(.swiper-slide-next) {
          transform: scale(0.9) !important;
          opacity: 0.8;
        }

        :global(.swiper-pagination) {
          bottom: 5px !important;
        }

        :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.5) !important;
          opacity: 1 !important;
        }

        :global(.swiper-pagination-bullet-active) {
          background: white !important;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default RollingGallery;