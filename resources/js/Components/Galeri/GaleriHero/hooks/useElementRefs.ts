import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/Components/FAQ/Refs/page';
import { ElementPair } from '../types';
import { ELEMENT_CONFIGS } from '../config/constants';

export const useElementRefs = () => {
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
            rotateAmount: ELEMENT_CONFIGS.daun.rotateAmount,
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
            rotateAmount: ELEMENT_CONFIGS.daun.rotateAmount,
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
            rotateAmount: ELEMENT_CONFIGS.wayang.rotateAmount,
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
            rotateAmount: ELEMENT_CONFIGS.wayang.rotateAmount,
        },
    };

    return {
        ORANG_BERTAPA_PAIR,
        DAUN_PAIR,
        WAYANG_PAIR,
    };
};