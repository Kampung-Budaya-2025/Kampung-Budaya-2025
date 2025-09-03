import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ANIMATION_CONFIG, ANIMATION_ONCE_CONFIG} from '@/Components/FAQ/config/constants';
import { BUNGA_MOBILE_CONFIGS } from '../config/constants';
import { ELEMENT_CONFIGS } from '../config/constants';
import { ElementPair } from '../types';

type CustomPairConfig = {
    kiri?: Partial<Omit<ElementPair['kiri'], 'ref' | 'isInView'>>;
    kanan?: Partial<Omit<ElementPair['kanan'], 'ref' | 'isInView'>>;
};

const useElementRefs = (
    orangBertapaConfig?: CustomPairConfig,
    daunConfig?: CustomPairConfig,
    wayangConfig?: CustomPairConfig,
    bungaConfig?: CustomPairConfig
) => {
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
    const bungaMobileRefs = Array.from({ length: 3 }, () => useRef<HTMLImageElement | null>(null));
    const textRef = useRef<HTMLHeadingElement | null>(null);

    
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
    const isBungaMobileInView = bungaMobileRefs.map(ref => useInView(ref, ANIMATION_CONFIG));
    const isTextInView = useInView(textRef, ANIMATION_ONCE_CONFIG);

    // ORANG_BERTAPA_PAIR
    const ORANG_BERTAPA_PAIR: ElementPair = {
        kiri: {
            ref: orangBertapaKiriRef,
            isInView: isOrangBertapaKiriInView,
            src: orangBertapaConfig?.kiri?.src ?? "/background/orang-bertapa.svg",
            alt: orangBertapaConfig?.kiri?.alt ?? "Orang Bertapa Kiri",
            className: orangBertapaConfig?.kiri?.className ?? "hidden md:block absolute bottom-0 -left-[10%] z-10 w-[30vw] h-auto",
            translateDistance: orangBertapaConfig?.kiri?.translateDistance ?? ELEMENT_CONFIGS.orangBertapa.translateDistance,
            transitionDuration: orangBertapaConfig?.kiri?.transitionDuration ?? ELEMENT_CONFIGS.orangBertapa.duration,
            transitionDelay: orangBertapaConfig?.kiri?.transitionDelay ?? ELEMENT_CONFIGS.orangBertapa.delay,
            floatDuration: orangBertapaConfig?.kiri?.floatDuration ?? ELEMENT_CONFIGS.orangBertapa.floatDuration,
            floatDistance: orangBertapaConfig?.kiri?.floatDistance ?? ELEMENT_CONFIGS.orangBertapa.floatDistance,
        },
        kanan: {
            ref: orangBertapaKananRef,
            isInView: isOrangBertapaKananInView,
            src: orangBertapaConfig?.kanan?.src ?? "/background/orang-bertapa.svg",
            alt: orangBertapaConfig?.kanan?.alt ?? "Orang Bertapa Kanan",
            className: orangBertapaConfig?.kanan?.className ?? "hidden md:block absolute bottom-0 -right-[10%] z-10 transform scale-x-[-1] w-[30vw] h-auto",
            translateDistance: orangBertapaConfig?.kanan?.translateDistance ?? ELEMENT_CONFIGS.orangBertapa.translateDistance,
            transitionDuration: orangBertapaConfig?.kanan?.transitionDuration ?? ELEMENT_CONFIGS.orangBertapa.duration,
            transitionDelay: orangBertapaConfig?.kanan?.transitionDelay ?? ELEMENT_CONFIGS.orangBertapa.delay,
            floatDuration: orangBertapaConfig?.kanan?.floatDuration ?? ELEMENT_CONFIGS.orangBertapa.floatDuration,
            floatDistance: orangBertapaConfig?.kanan?.floatDistance ?? ELEMENT_CONFIGS.orangBertapa.floatDistance,
        },
    };

    // DAUN_PAIR
    const DAUN_PAIR: ElementPair = {
        kiri: {
            ref: daunKiriRef,
            isInView: isDaunKiriInView,
            src: daunConfig?.kiri?.src ?? "/background/daun.svg",
            alt: daunConfig?.kiri?.alt ?? "Daun Kiri",
            className: daunConfig?.kiri?.className ?? "hidden md:block absolute bottom-[27%] left-[4.5%] z-0 w-[20vw] h-auto",
            translateDistance: daunConfig?.kiri?.translateDistance ?? ELEMENT_CONFIGS.daun.translateDistance,
            transitionDuration: daunConfig?.kiri?.transitionDuration ?? ELEMENT_CONFIGS.daun.duration,
            transitionDelay: daunConfig?.kiri?.transitionDelay ?? ELEMENT_CONFIGS.daun.delay,
            floatDuration: daunConfig?.kiri?.floatDuration ?? ELEMENT_CONFIGS.daun.floatDuration,
            floatDistance: daunConfig?.kiri?.floatDistance ?? ELEMENT_CONFIGS.daun.floatDistance,
            rotateAmount: daunConfig?.kiri?.rotateAmount ?? ELEMENT_CONFIGS.daun.rotateAmount,
        },
        kanan: {
            ref: daunKananRef,
            isInView: isDaunKananInView,
            src: daunConfig?.kanan?.src ?? "/background/daun.svg",
            alt: daunConfig?.kanan?.alt ?? "Daun Kanan",
            className: daunConfig?.kanan?.className ?? "hidden md:block absolute bottom-[27%] right-[4.5%] z-0 transform scale-x-[-1] w-[20vw] h-auto",
            translateDistance: daunConfig?.kanan?.translateDistance ?? ELEMENT_CONFIGS.daun.translateDistance,
            transitionDuration: daunConfig?.kanan?.transitionDuration ?? ELEMENT_CONFIGS.daun.duration,
            transitionDelay: daunConfig?.kanan?.transitionDelay ?? ELEMENT_CONFIGS.daun.delay,
            floatDuration: daunConfig?.kanan?.floatDuration ?? ELEMENT_CONFIGS.daun.floatDuration,
            floatDistance: daunConfig?.kanan?.floatDistance ?? ELEMENT_CONFIGS.daun.floatDistance,
            rotateAmount: daunConfig?.kanan?.rotateAmount ?? ELEMENT_CONFIGS.daun.rotateAmount,
        },
    };

    const WAYANG_PAIR: ElementPair = {
        kiri: {
            ref: wayangKiriRef,
            isInView: isWayangKiriInView,
            src: "/background/wayang.svg",
            alt: "Wayang Kiri",
            className: wayangConfig?.kiri?.className ?? "hidden md:block absolute bottom-[17%] left-[7%] z-0 w-[19vw] h-auto",
            translateDistance: wayangConfig?.kiri?.translateDistance ?? ELEMENT_CONFIGS.wayang.translateDistance,
            transitionDuration: wayangConfig?.kiri?.transitionDuration ?? ELEMENT_CONFIGS.wayang.duration,
            transitionDelay: wayangConfig?.kiri?.transitionDelay ?? ELEMENT_CONFIGS.wayang.delay,
            floatDuration: wayangConfig?.kiri?.floatDuration ?? ELEMENT_CONFIGS.wayang.floatDuration,
            floatDistance: wayangConfig?.kiri?.floatDistance ?? ELEMENT_CONFIGS.wayang.floatDistance,
            rotateAmount: wayangConfig?.kiri?.rotateAmount ?? ELEMENT_CONFIGS.wayang.rotateAmount,
        },
        kanan: {
            ref: wayangKananRef,
            isInView: isWayangKananInView,
            src: "/background/wayang.svg",
            alt: "Wayang Kanan",
            className: wayangConfig?.kanan?.className ?? "hidden md:block absolute bottom-[17%] right-[7%] z-0 transform scale-x-[-1] w-[19vw] h-auto",
            translateDistance: wayangConfig?.kanan?.translateDistance ?? ELEMENT_CONFIGS.wayang.translateDistance,
            transitionDuration: wayangConfig?.kanan?.transitionDuration ?? ELEMENT_CONFIGS.wayang.duration,
            transitionDelay: wayangConfig?.kanan?.transitionDelay ?? ELEMENT_CONFIGS.wayang.delay,
            floatDuration: wayangConfig?.kanan?.floatDuration ?? ELEMENT_CONFIGS.wayang.floatDuration,
            floatDistance: wayangConfig?.kanan?.floatDistance ?? ELEMENT_CONFIGS.wayang.floatDistance,
            rotateAmount: wayangConfig?.kanan?.rotateAmount ?? ELEMENT_CONFIGS.wayang.rotateAmount,
        },
    };

    // BUNGA_PAIR
    const BUNGA_PAIR: ElementPair = {
        kiri: {
            ref: bungaRef,
            isInView: isBungaInView,
            src: bungaConfig?.kiri?.src ?? "/icon/bunga-opacity.svg",
            alt: bungaConfig?.kiri?.alt ?? "Bunga Kiri",
            className: bungaConfig?.kiri?.className ?? "hidden md:block absolute top-110 -left-30 w-[240px] h-[240px] opacity-30 animate-spin-clockwise",
            translateDistance: bungaConfig?.kiri?.translateDistance ?? ELEMENT_CONFIGS.bunga.translateDistance,
            transitionDuration: bungaConfig?.kiri?.transitionDuration ?? ELEMENT_CONFIGS.bunga.duration,
            transitionDelay: bungaConfig?.kiri?.transitionDelay ?? ELEMENT_CONFIGS.bunga.delay,
            floatDuration: bungaConfig?.kiri?.floatDuration ?? ELEMENT_CONFIGS.bunga.floatDuration,
            floatDistance: bungaConfig?.kiri?.floatDistance ?? ELEMENT_CONFIGS.bunga.floatDistance,
            rotateAmount: bungaConfig?.kiri?.rotateAmount ?? ELEMENT_CONFIGS.bunga.rotateAmount,
        },
        kanan: {
            ref: bungaRef,
            isInView: isBungaInView,
            src: bungaConfig?.kanan?.src ?? "/icon/bunga-opacity.svg",
            alt: bungaConfig?.kanan?.alt ?? "Bunga Kanan",
            className: bungaConfig?.kanan?.className ?? "absolute top-100 -right-30 w-[240px] h-[240px] transform scale-x-[-1] opacity-30 animate-spin-counter",
            translateDistance: bungaConfig?.kanan?.translateDistance ?? ELEMENT_CONFIGS.bunga.translateDistance,
            transitionDuration: bungaConfig?.kanan?.transitionDuration ?? ELEMENT_CONFIGS.bunga.duration,
            transitionDelay: bungaConfig?.kanan?.transitionDelay ?? ELEMENT_CONFIGS.bunga.delay,
            floatDuration: bungaConfig?.kanan?.floatDuration ?? ELEMENT_CONFIGS.bunga.floatDuration,
            floatDistance: bungaConfig?.kanan?.floatDistance ?? ELEMENT_CONFIGS.bunga.floatDistance,
            rotateAmount: bungaConfig?.kanan?.rotateAmount ?? ELEMENT_CONFIGS.bunga.rotateAmount,
        },
    };

    const BATIK_PAIR : ElementPair = {
        kiri: {
            ref: batikRef,
            isInView: isBatikInView,
            src: "/icon/batik.svg",
            alt: "Batik Kiri",
            className: "absolute -bottom-28 left-0 w-[25vw] h-auto",
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
            className: "absolute -bottom-28 right-0 w-[25vw] h-auto scale-x-[-1]",
            translateDistance: ELEMENT_CONFIGS.batik.translateDistance,
            transitionDuration: ELEMENT_CONFIGS.batik.duration,
            transitionDelay: ELEMENT_CONFIGS.batik.delay,
            floatDuration: ELEMENT_CONFIGS.batik.floatDuration,
            floatDistance: ELEMENT_CONFIGS.batik.floatDistance,
            rotateAmount: ELEMENT_CONFIGS.batik.rotateAmount,
        },
    }

    const BUNGA_MOBILE_PAIRS : ElementPair[] = BUNGA_MOBILE_CONFIGS.map((config, idx) => ({
    kiri: {
        ref: bungaMobileRefs[idx],
        isInView: isBungaMobileInView[idx],
        src: "/icon/bunga.svg",
        alt: `Bunga Kiri ${idx + 1}`,
        className: config.kiri.className,
        translateDistance: ELEMENT_CONFIGS.bunga.translateDistance,
        transitionDuration: ELEMENT_CONFIGS.bunga.duration,
        transitionDelay: ELEMENT_CONFIGS.bunga.delay,
        floatDuration: ELEMENT_CONFIGS.bunga.floatDuration,
        floatDistance: ELEMENT_CONFIGS.bunga.floatDistance,
    },
    kanan: {
        ref: bungaMobileRefs[idx],
        isInView: isBungaMobileInView[idx],
        src: "/icon/bunga.svg",
        alt: `Bunga Kanan ${idx + 1}`,
        className: config.kanan.className,
        translateDistance: ELEMENT_CONFIGS.bunga.translateDistance,
        transitionDuration: ELEMENT_CONFIGS.bunga.duration,
        transitionDelay: ELEMENT_CONFIGS.bunga.delay,
        floatDuration: ELEMENT_CONFIGS.bunga.floatDuration,
        floatDistance: ELEMENT_CONFIGS.bunga.floatDistance,
    }
}));

    // Pattern object mirip struktur elemen lain (ref + isInView + src/alt)
    const PATTERN = {
        ref: patternRef,
        isInView: isPatternInView,
        src: "/icon/pattern-event-top.svg",
        alt: "pattern-event-top",
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
        BATIK_PAIR,
        BUNGA_MOBILE_PAIRS
    };
};

export { useElementRefs };