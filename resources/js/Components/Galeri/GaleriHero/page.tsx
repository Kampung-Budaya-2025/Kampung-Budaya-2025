import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG } from '@/Components/FAQ/Refs/page';

interface BackgroundImageProps {
    src: string;
    alt: string;
    className: string;
    width?: number;
}

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

interface SubTitleProps {
    children: React.ReactNode;
    className?: string;
}

interface ElementPosition {
    ref: React.RefObject<HTMLImageElement | null>;
    isInView: boolean;
    src: string;
    alt: string;
    className: string;
    translateDistance: number;
    transitionDuration: string;
    transitionDelay: string;
    floatDuration: string;
    floatDistance: number;
}

interface ElementPair {
    kiri: ElementPosition;
    kanan: ElementPosition;
}

// Constants untuk konfigurasi elemen dengan timing yang lebih smooth
const ELEMENT_CONFIGS = {
    orangBertapa: { translateDistance: 120, duration: "1.8s", delay: "0s", floatDuration: "3s", floatDistance: 8 },
    daun: { translateDistance: 100, duration: "2.2s", delay: "0.2s", floatDuration: "4s", floatDistance: 12 },
    wayang: { translateDistance: 80, duration: "3s", delay: "0.4s", floatDuration: "6s", floatDistance: 8 },
} as const;

const BackgroundImage: React.FC<BackgroundImageProps> = ({
    src,
    alt,
    className,
    width,
}) => {
    const batikRef = useRef<HTMLImageElement | null>(null);
    const isBatikInView = useInView(batikRef, ANIMATION_CONFIG);

    return (
        <img
            ref={batikRef}
            src={src}
            alt={alt}
            className={`absolute pointer-events-none ${className}`}
            width={width}
            loading="lazy"
            style={{
                opacity: isBatikInView ? 1 : 0,
                transform: isBatikInView
                    ? "translateY(0)"
                    : "translateY(-40px)",
                transition:
                    "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
            }}
        />
    );
};

const Title: React.FC<TitleProps> = ({ children, className = "" }) => (
    <h1
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-normal font-samsktrigrama leading-[1.1] tracking-[-0.05em] drop-shadow-2xl relative z-30 bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent overflow-visible ${className}`}
    >
        {children}
    </h1>
);

const SubTitle: React.FC<SubTitleProps> = ({ children, className = "" }) => (
    <h2
        className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-amaranth font-normal text-[#C88B5F] leading-normal text-center tracking-[-0.02em] drop-shadow-2xl relative z-30 overflow-visible max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[600px] px-4 ${className}`}
    >
        {children}
    </h2>
);

const ElementPairComponent: React.FC<{
    pair: ElementPair;
}> = ({ pair }) => (
    <>
        {/* Element Kiri */}
        <img
            ref={pair.kiri.ref}
            src={pair.kiri.src}
            alt={pair.kiri.alt}
            className={pair.kiri.className}
            style={{
                opacity: pair.kiri.isInView ? 1 : 0,
                transform: pair.kiri.isInView
                    ? "translateX(0) translateY(0)"
                    : `translateX(-${pair.kiri.translateDistance}px) translateY(0)`,
                transition: `opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kiri.transitionDelay}, transform ${pair.kiri.transitionDuration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kiri.transitionDelay}`,
                animation: pair.kiri.isInView 
                    ? `floatSmooth-${pair.kiri.floatDistance} ${pair.kiri.floatDuration} ease-in-out infinite` 
                    : 'none',
                animationDelay: pair.kiri.isInView ? `calc(${pair.kiri.transitionDuration} + 0.3s)` : '0s',
                animationFillMode: 'both',
            }}
        />

        {/* Element Kanan */}
        <img
            ref={pair.kanan.ref}
            src={pair.kanan.src}
            alt={pair.kanan.alt}
            className={pair.kanan.className}
            style={{
                opacity: pair.kanan.isInView ? 1 : 0,
                transform: pair.kanan.isInView
                    ? "translateX(0) translateY(0)"
                    : `translateX(-${pair.kanan.translateDistance}px) translateY(0)`,
                transition: `opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kanan.transitionDelay}, transform ${pair.kanan.transitionDuration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kanan.transitionDelay}`,
                animation: pair.kanan.isInView 
                    ? `floatSmoothRight-${pair.kanan.floatDistance} ${pair.kanan.floatDuration} ease-in-out infinite` 
                    : 'none',
                animationDelay: pair.kanan.isInView ? `calc(${pair.kanan.transitionDuration} + 0.3s)` : '0s',
                animationFillMode: 'both',
            }}
        />
    </>
);

const GaleriHero: React.FC = () => {
    // Refs untuk semua elemen
    const orangBertapaKiriRef = useRef<HTMLImageElement | null>(null);
    const orangBertapaKananRef = useRef<HTMLImageElement | null>(null);
    const daunKiriRef = useRef<HTMLImageElement | null>(null);
    const daunKananRef = useRef<HTMLImageElement | null>(null);
    const wayangKiriRef = useRef<HTMLImageElement | null>(null);
    const wayangKananRef = useRef<HTMLImageElement | null>(null);

    // InView hooks
    const isOrangBertapaKiriInView = useInView(orangBertapaKiriRef, ANIMATION_CONFIG);
    const isOrangBertapaKananInView = useInView(orangBertapaKananRef, ANIMATION_CONFIG);
    const isDaunKiriInView = useInView(daunKiriRef, ANIMATION_CONFIG);
    const isDaunKananInView = useInView(daunKananRef, ANIMATION_CONFIG);
    const isWayangKiriInView = useInView(wayangKiriRef, ANIMATION_CONFIG);
    const isWayangKananInView = useInView(wayangKananRef, ANIMATION_CONFIG);

    const BATIK_BACKGROUND = {
        src: "/background/batik-horizontal-galeri.svg",
        alt: "Batik Background",
        className: "-top-[20vh] left-0 w-auto h-auto z-0",
    };

    const ORANG_BERTAPA_PAIR: ElementPair = {
        kiri: {
            ref: orangBertapaKiriRef,
            isInView: isOrangBertapaKiriInView,
            src: "/background/orang-bertapa.svg",
            alt: "Orang Bertapa Kiri",
            className: "absolute bottom-0 -left-[9%] z-10 w-[370px] h-auto",
            translateDistance: ELEMENT_CONFIGS.orangBertapa.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.orangBertapa.duration,
            transitionDelay: ELEMENT_CONFIGS.orangBertapa.delay,
            floatDuration: ELEMENT_CONFIGS.orangBertapa.floatDuration,
            floatDistance: ELEMENT_CONFIGS.orangBertapa.floatDistance,
        },
        kanan: {
            ref: orangBertapaKananRef,
            isInView: isOrangBertapaKananInView,
            src: "/background/orang-bertapa.svg",
            alt: "Orang Bertapa Kanan",
            className: "absolute bottom-0 -right-[9%] z-10 transform scale-x-[-1] w-[370px] h-auto",
            translateDistance: ELEMENT_CONFIGS.orangBertapa.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.orangBertapa.duration,
            transitionDelay: ELEMENT_CONFIGS.orangBertapa.delay,
            floatDuration: ELEMENT_CONFIGS.orangBertapa.floatDuration,
            floatDistance: ELEMENT_CONFIGS.orangBertapa.floatDistance,
        },
    };

    const DAUN_PAIR: ElementPair = {
        kiri: {
            ref: daunKiriRef,
            isInView: isDaunKiriInView,
            src: "/background/daun.svg",
            alt: "Daun Kiri",
            className: "absolute bottom-[30%] left-[4.5%] z-0 w-[220px] h-auto",
            translateDistance: ELEMENT_CONFIGS.daun.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.daun.duration,
            transitionDelay: ELEMENT_CONFIGS.daun.delay,
            floatDuration: ELEMENT_CONFIGS.daun.floatDuration,
            floatDistance: ELEMENT_CONFIGS.daun.floatDistance,
        },
        kanan: {
            ref: daunKananRef,
            isInView: isDaunKananInView,
            src: "/background/daun.svg",
            alt: "Daun Kanan",
            className: "absolute bottom-[30%] right-[4.5%] z-0 transform scale-x-[-1] w-[220px] h-auto",
            translateDistance: ELEMENT_CONFIGS.daun.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.daun.duration,
            transitionDelay: ELEMENT_CONFIGS.daun.delay,
            floatDuration: ELEMENT_CONFIGS.daun.floatDuration,
            floatDistance: ELEMENT_CONFIGS.daun.floatDistance,
        },
    };

    const WAYANG_PAIR: ElementPair = {
        kiri: {
            ref: wayangKiriRef,
            isInView: isWayangKiriInView,
            src: "/background/wayang.svg",
            alt: "Wayang Kiri",
            className: "absolute bottom-[17%] left-[5.5%] z-0 w-[230px] h-auto",
            translateDistance: ELEMENT_CONFIGS.wayang.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.wayang.duration,
            transitionDelay: ELEMENT_CONFIGS.wayang.delay,
            floatDuration: ELEMENT_CONFIGS.wayang.floatDuration,
            floatDistance: ELEMENT_CONFIGS.wayang.floatDistance,
        },
        kanan: {
            ref: wayangKananRef,
            isInView: isWayangKananInView,
            src: "/background/wayang.svg",
            alt: "Wayang Kanan",
            className: "absolute bottom-[17%] right-[5.5%] z-0 transform scale-x-[-1] w-[230px] h-auto",
            translateDistance: ELEMENT_CONFIGS.wayang.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.wayang.duration,
            transitionDelay: ELEMENT_CONFIGS.wayang.delay,
            floatDuration: ELEMENT_CONFIGS.wayang.floatDuration,
            floatDistance: ELEMENT_CONFIGS.wayang.floatDistance,
        },
    };

    const containerClassName =
        "flex justify-center items-center mb-12 relative w-full min-h-screen";
    const mainContentClassName =
        "relative h-[110vh] w-[75%] max-w-[1256px] flex flex-col items-center justify-center overflow-y-hidden pt-16 sm:pt-20 md:pt-20 px-4 z-20";
    const titleContainerClassName =
        "flex flex-col items-center text-center mt-6 sm:mt-8 md:mt-18 justify-center z-20 w-full";
    const patternImageClassName =
        "absolute top-[20%] h-[6.25vh] min-h-[90px] max-h-[110px] z-0";
    const gradientImageClassName =
        "absolute inset-0 w-auto h-auto object-cover z-0";
    const titleWrapperClassName = "flex flex-col items-center pt-6";
    const titleSpacingClassName = "-mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10";
    const contentWrapperClassName =
        "flex flex-col items-center gap-2 sm:gap-4 md:gap-6 -mt-4";
    const buttonImageClassName = "w-[40vw] min-w-[200px] max-w-[250px] h-auto";

    const renderBatikBackground = () => (
        <BackgroundImage
            src={BATIK_BACKGROUND.src}
            alt={BATIK_BACKGROUND.alt}
            className={BATIK_BACKGROUND.className}
        />
    );

    const renderPatternImage = () => (
        <img
            src="/icon/pattern-galeri.svg"
            alt="pattern"
            className={patternImageClassName}
        />
    );

    const renderGradientBackground = () => (
        <div className="h-full relative w-full">
            <img
                src="/background/gradasi-galeri.svg"
                alt="Gradasi"
                className={gradientImageClassName}
            />
        </div>
    );

    const renderTitles = () => (
        <div className={titleWrapperClassName}>
            <Title className={titleSpacingClassName}>Lomba Umum</Title>
            <Title>Forum Daerah</Title>
        </div>
    );

    const renderContent = () => (
        <div className={contentWrapperClassName}>
            <div className="w-full">
                <SubTitle>
                    Panggung terbesar untuk Forda dan komunitas budaya untuk
                    unjuk kemampuan dan meraih prestasi.
                </SubTitle>
            </div>
            <button type="button">
                <img
                    src="/icon/button-daftar.svg"
                    alt="Daftar"
                    className={buttonImageClassName}
                />
            </button>
        </div>
    );

    return (
        <div className={containerClassName}>
            {renderBatikBackground()}
            <ElementPairComponent pair={ORANG_BERTAPA_PAIR} />
            <ElementPairComponent pair={DAUN_PAIR} />
            <ElementPairComponent pair={WAYANG_PAIR} />
            {renderPatternImage()}

            <div className={mainContentClassName}>
                <div className={titleContainerClassName}>
                    {renderGradientBackground()}
                    {renderTitles()}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default GaleriHero;
