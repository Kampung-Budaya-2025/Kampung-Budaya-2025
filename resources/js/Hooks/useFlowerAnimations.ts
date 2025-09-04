import React, { useRef, useMemo } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG, ANIMATION_ONCE_CONFIG, FLOWER_CONFIGS } from "../Components/FAQ/config/constants";
import { AnyObject } from "mongoose";

type FlowerKey = "besar" | "besarMobile" | "sedang" | "kecil1" | "kecil2";

const useFlowerAnimations = (
    keys?: FlowerKey[],
    customSizes?: {
        besar?: string;
        besarMobile?: string;
        sedang?: string;
        kecil1?: string;
        kecil2?: string;
    }
) => {
    // Refs
    const bungaBesarKiriRef = useRef<HTMLImageElement>(null);
    const bungaBesarKananRef = useRef<HTMLImageElement>(null);
    const bungaBesarMobileKiriRef = useRef<HTMLImageElement>(null);
    const bungaBesarMobileKananRef = useRef<HTMLImageElement>(null);
    const bungaSedangKiriRef = useRef<HTMLImageElement>(null);
    const bungaSedangKananRef = useRef<HTMLImageElement>(null);
    const bungaKecil1KiriRef = useRef<HTMLImageElement>(null);
    const bungaKecil1KananRef = useRef<HTMLImageElement>(null);
    const bungaKecil2KiriRef = useRef<HTMLImageElement>(null);
    const bungaKecil2KananRef = useRef<HTMLImageElement>(null);

    // InView hooks
    const isBungaBesarKiriInView = useInView(bungaBesarKiriRef, ANIMATION_CONFIG);
    const isBungaBesarKananInView = useInView(bungaBesarKananRef, ANIMATION_CONFIG);
    const isBungaBesarMobileKiriInView = useInView(bungaBesarMobileKiriRef, ANIMATION_CONFIG);
    const isBungaBesarMobileKananInView = useInView(bungaBesarMobileKananRef, ANIMATION_CONFIG);
    const isBungaSedangKiriInView = useInView(bungaSedangKiriRef, ANIMATION_CONFIG);
    const isBungaSedangKananInView = useInView(bungaSedangKananRef, ANIMATION_CONFIG);
    const isBungaKecil1KiriInView = useInView(bungaKecil1KiriRef, ANIMATION_CONFIG);
    const isBungaKecil1KananInView = useInView(bungaKecil1KananRef, ANIMATION_CONFIG);
    const isBungaKecil2KiriInView = useInView(bungaKecil2KiriRef, ANIMATION_CONFIG);
    const isBungaKecil2KananInView = useInView(bungaKecil2KananRef, ANIMATION_CONFIG);

    const allPairs = useMemo(() => ({
        besar: {
            kiri: {
                ref: bungaBesarKiriRef,
                isInView: isBungaBesarKiriInView,
                size: customSizes?.besar || FLOWER_CONFIGS.besar.size,
                translateDistance: FLOWER_CONFIGS.besar.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besar.duration,
                animationClass: "animate-spin-clockwise",
            },
            kanan: {
                ref: bungaBesarKananRef,
                isInView: isBungaBesarKananInView,
                size: customSizes?.besar || FLOWER_CONFIGS.besar.size,
                translateDistance: FLOWER_CONFIGS.besar.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besar.duration,
                animationClass: "animate-spin-counter",
            },
        },
        besarMobile: {
            kiri: {
                ref: bungaBesarMobileKiriRef,
                isInView: isBungaBesarMobileKiriInView,
                size: customSizes?.besarMobile || FLOWER_CONFIGS.besarmobile.size,
                translateDistance: FLOWER_CONFIGS.besarmobile.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besarmobile.duration,
                animationClass: "animate-spin-clockwise",
            },
            kanan: {
                ref: bungaBesarMobileKananRef,
                isInView: isBungaBesarMobileKananInView,
                size: customSizes?.besarMobile || FLOWER_CONFIGS.besarmobile.size,
                translateDistance: FLOWER_CONFIGS.besarmobile.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besarmobile.duration,
                animationClass: "animate-spin-counter",
            },
        },
        sedang: {
            kiri: {
                ref: bungaSedangKiriRef,
                isInView: isBungaSedangKiriInView,
                size: customSizes?.sedang || FLOWER_CONFIGS.sedang.size,
                translateDistance: FLOWER_CONFIGS.sedang.translateDistance,
                transitionDuration: FLOWER_CONFIGS.sedang.duration,
                animationClass: "animate-spin-counter",
            },
            kanan: {
                ref: bungaSedangKananRef,
                isInView: isBungaSedangKananInView,
                size: customSizes?.sedang || FLOWER_CONFIGS.sedang.size,
                translateDistance: FLOWER_CONFIGS.sedang.translateDistance,
                transitionDuration: FLOWER_CONFIGS.sedang.duration,
                animationClass: "animate-spin-clockwise",
            },
        },
        kecil1: {
            kiri: {
                ref: bungaKecil1KiriRef,
                isInView: isBungaKecil1KiriInView,
                size: customSizes?.kecil1 || FLOWER_CONFIGS.kecil1.size,
                translateDistance: FLOWER_CONFIGS.kecil1.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil1.duration,
                animationClass: "animate-spin-clockwise",
            },
            kanan: {
                ref: bungaKecil1KananRef,
                isInView: isBungaKecil1KananInView,
                size: customSizes?.kecil1 || FLOWER_CONFIGS.kecil1.size,
                translateDistance: FLOWER_CONFIGS.kecil1.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil1.duration,
                animationClass: "animate-spin-counter",
            },
        },
        kecil2: {
            kiri: {
                ref: bungaKecil2KiriRef,
                isInView: isBungaKecil2KiriInView,
                size: customSizes?.kecil2 || FLOWER_CONFIGS.kecil2.size,
                translateDistance: FLOWER_CONFIGS.kecil2.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil2.duration,
                animationClass: "animate-spin-counter",
            },
            kanan: {
                ref: bungaKecil2KananRef,
                isInView: isBungaKecil2KananInView,
                size: customSizes?.kecil2 || FLOWER_CONFIGS.kecil2.size,
                translateDistance: FLOWER_CONFIGS.kecil2.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil2.duration,
                animationClass: "animate-spin-clockwise",
            },
        },
    }), [
        isBungaBesarKiriInView, isBungaBesarKananInView,
        isBungaBesarMobileKiriInView, isBungaBesarMobileKananInView,
        isBungaSedangKiriInView, isBungaSedangKananInView,
        isBungaKecil1KiriInView, isBungaKecil1KananInView,
        isBungaKecil2KiriInView, isBungaKecil2KananInView,
        customSizes
    ]);

    if (!keys) return allPairs;

    return keys.reduce((obj, key) => {
        obj[key] = allPairs[key];
        return obj;
    }, {} as AnyObject);
};

export { useFlowerAnimations };
