import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ANIMATION_CONFIG, ANIMATION_ONCE_CONFIG } from '@/Components/FAQ/config/constants';
import { ELEMENT_CONFIGS } from '../config/constants';
import { ElementPair } from '../types';


const useElementRefs = () => {
    // Refs untuk semua elemen
    const orangBertapaKiriRef = useRef<HTMLImageElement | null>(null);
    const orangBertapaKananRef = useRef<HTMLImageElement | null>(null);
    const daunKiriRef = useRef<HTMLImageElement | null>(null);
    const daunKananRef = useRef<HTMLImageElement | null>(null);
    const wayangKiriRef = useRef<HTMLImageElement | null>(null);
    const wayangKananRef = useRef<HTMLImageElement | null>(null);
    const patternRef = useRef<HTMLImageElement | null>(null);
    const bungaRef = useRef<HTMLImageElement | null>(null);
    const batikRef = useRef<HTMLImageElement | null>(null);
    const gradientBackgroundRef = useRef<HTMLImageElement | null>(null);

    
    // InView hooks
    const isOrangBertapaKiriInView = useInView(orangBertapaKiriRef, ANIMATION_CONFIG);
    const isOrangBertapaKananInView = useInView(orangBertapaKananRef, ANIMATION_CONFIG);
    const isDaunKiriInView = useInView(daunKiriRef, ANIMATION_CONFIG);
    const isDaunKananInView = useInView(daunKananRef, ANIMATION_CONFIG);
    const isWayangKiriInView = useInView(wayangKiriRef, ANIMATION_CONFIG);
    const isWayangKananInView = useInView(wayangKananRef, ANIMATION_CONFIG);
    const isPatternInView = useInView(patternRef, ANIMATION_ONCE_CONFIG);
    const isBungaInView = useInView(bungaRef, ANIMATION_CONFIG);
    const isBatikInView = useInView(batikRef, ANIMATION_CONFIG);
    const isGradientBackgroundInView = useInView(gradientBackgroundRef, ANIMATION_ONCE_CONFIG);

    const ORANG_BERTAPA_PAIR: ElementPair = {
        kiri: {
            ref: orangBertapaKiriRef,
            isInView: isOrangBertapaKiriInView,
            src: "/background/orang-bertapa.svg",
            alt: "Orang Bertapa Kiri",
            className: "absolute bottom-0 -left-[10%] z-10 w-[30vw] h-auto",
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
            className: "absolute bottom-0 -right-[10%] z-10 transform scale-x-[-1] w-[30vw] h-auto",
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
            className: "absolute bottom-[27%] left-[4.5%] z-0 w-[20vw] h-auto",
            translateDistance: ELEMENT_CONFIGS.daun.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.daun.duration,
            transitionDelay: ELEMENT_CONFIGS.daun.delay,
            floatDuration: ELEMENT_CONFIGS.daun.floatDuration,
            floatDistance: ELEMENT_CONFIGS.daun.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.daun.rotateAmount,
        },
        kanan: {
            ref: daunKananRef,
            isInView: isDaunKananInView,
            src: "/background/daun.svg",
            alt: "Daun Kanan",
            className: "absolute bottom-[27%] right-[4.5%] z-0 transform scale-x-[-1] w-[20vw] h-auto",
            translateDistance: ELEMENT_CONFIGS.daun.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.daun.duration,
            transitionDelay: ELEMENT_CONFIGS.daun.delay,
            floatDuration: ELEMENT_CONFIGS.daun.floatDuration,
            floatDistance: ELEMENT_CONFIGS.daun.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.daun.rotateAmount,
        },
    };

    const WAYANG_PAIR: ElementPair = {
        kiri: {
            ref: wayangKiriRef,
            isInView: isWayangKiriInView,
            src: "/background/wayang.svg",
            alt: "Wayang Kiri",
            className: "absolute bottom-[17%] left-[7%] z-0 w-[19vw] h-auto",
            translateDistance: ELEMENT_CONFIGS.wayang.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.wayang.duration,
            transitionDelay: ELEMENT_CONFIGS.wayang.delay,
            floatDuration: ELEMENT_CONFIGS.wayang.floatDuration,
            floatDistance: ELEMENT_CONFIGS.wayang.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.wayang.rotateAmount,
        },
        kanan: {
            ref: wayangKananRef,
            isInView: isWayangKananInView,
            src: "/background/wayang.svg",
            alt: "Wayang Kanan",
            className: "absolute bottom-[17%] right-[7%] z-0 transform scale-x-[-1] w-[19vw] h-auto",
            translateDistance: ELEMENT_CONFIGS.wayang.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.wayang.duration,
            transitionDelay: ELEMENT_CONFIGS.wayang.delay,
            floatDuration: ELEMENT_CONFIGS.wayang.floatDuration,
            floatDistance: ELEMENT_CONFIGS.wayang.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.wayang.rotateAmount,
        },
    };

    const BUNGA_PAIR: ElementPair = {
        kiri: {
            ref: bungaRef,
            isInView: isBungaInView,
            src: "/icon/bunga-opacity.svg",
            alt: "Bunga Kiri",
            className: "absolute top-110 -left-30 w-[240px] h-[240px] opacity-30",
            translateDistance: ELEMENT_CONFIGS.bunga.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.bunga.duration,
            transitionDelay: ELEMENT_CONFIGS.bunga.delay,
            floatDuration: ELEMENT_CONFIGS.bunga.floatDuration,
            floatDistance: ELEMENT_CONFIGS.bunga.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.bunga.rotateAmount,
        },
        kanan: {
            ref: bungaRef,
            isInView: isBungaInView,
            src: "/icon/bunga-opacity.svg",
            alt: "Bunga Kanan",
            className: "absolute top-100 -right-30 w-[240px] h-[240px] transform scale-x-[-1] opacity-30",
            translateDistance: ELEMENT_CONFIGS.bunga.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.bunga.duration,
            transitionDelay: ELEMENT_CONFIGS.bunga.delay,
            floatDuration: ELEMENT_CONFIGS.bunga.floatDuration,
            floatDistance: ELEMENT_CONFIGS.bunga.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.bunga.rotateAmount,
        },
    };

    const BATIK_PAIR : ElementPair = {
        kiri: {
            ref: batikRef,
            isInView: isBatikInView,
            src: "/icon/batik.svg",
            alt: "Batik Kiri",
            className: "absolute -bottom-28 left-0 w-[305px] h-auto",
            translateDistance: ELEMENT_CONFIGS.batik.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.batik.duration,
            transitionDelay: ELEMENT_CONFIGS.batik.delay,
            floatDuration: ELEMENT_CONFIGS.batik.floatDuration,
            floatDistance: ELEMENT_CONFIGS.batik.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.batik.rotateAmount,
        },
        kanan: {
            ref: batikRef,
            isInView: isBatikInView,
            src: "/icon/batik.svg",
            alt: "Batik Kanan",
            className: "absolute -bottom-28 right-0 w-[305px] h-auto scale-x-[-1]",
            translateDistance: ELEMENT_CONFIGS.batik.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.batik.duration,
            transitionDelay: ELEMENT_CONFIGS.batik.delay,
            floatDuration: ELEMENT_CONFIGS.batik.floatDuration,
            floatDistance: ELEMENT_CONFIGS.batik.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.batik.rotateAmount,
        },
    }

    // Pattern object mirip struktur elemen lain (ref + isInView + src/alt)
    const PATTERN = {
        ref: patternRef,
        isInView: isPatternInView,
        src: "/icon/pattern-galeri.svg",
        alt: "pattern-galeri",
    };

    const GRADIENT_BACKGROUND = {
        ref: gradientBackgroundRef,
        isInView: isGradientBackgroundInView,
        src: "/background/gradasi-event.svg",
        alt: "gradient-background",
    };


    return {
        ORANG_BERTAPA_PAIR,
        DAUN_PAIR,
        WAYANG_PAIR,
        PATTERN,
        GRADIENT_BACKGROUND,
        BUNGA_PAIR,
        BATIK_PAIR
    };
};

export { useElementRefs };