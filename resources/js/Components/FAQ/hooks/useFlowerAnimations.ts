import React, { useRef,useMemo } from "react";
import { useInView } from "framer-motion";
import {  ANIMATION_CONFIG, ANIMATION_ONCE_CONFIG, FLOWER_CONFIGS } from "../config/constants";

const useFlowerAnimations = () => {
    // Refs
    const bungaBesarKiriRef = useRef<HTMLImageElement>(null);
    const bungaBesarKananRef = useRef<HTMLImageElement>(null);
    // Tambahan untuk mobile
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
    // Tambahan untuk mobile
    const isBungaBesarMobileKiriInView = useInView(bungaBesarMobileKiriRef, ANIMATION_CONFIG);
    const isBungaBesarMobileKananInView = useInView(bungaBesarMobileKananRef, ANIMATION_CONFIG);
    const isBungaSedangKiriInView = useInView(bungaSedangKiriRef, ANIMATION_CONFIG);
    const isBungaSedangKananInView = useInView(bungaSedangKananRef, ANIMATION_CONFIG);
    const isBungaKecil1KiriInView = useInView(bungaKecil1KiriRef, ANIMATION_CONFIG);
    const isBungaKecil1KananInView = useInView(bungaKecil1KananRef, ANIMATION_CONFIG);
    const isBungaKecil2KiriInView = useInView(bungaKecil2KiriRef, ANIMATION_CONFIG);
    const isBungaKecil2KananInView = useInView(bungaKecil2KananRef, ANIMATION_CONFIG);

    return useMemo(() => ({
        besar: {
            kiri: {
                ref: bungaBesarKiriRef,
                isInView: isBungaBesarKiriInView,
                size: FLOWER_CONFIGS.besar.size,
                translateDistance: FLOWER_CONFIGS.besar.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besar.duration,
                animationClass: "animate-spin-clockwise",
            },
            kanan: {
                ref: bungaBesarKananRef,
                isInView: isBungaBesarKananInView,
                size: FLOWER_CONFIGS.besar.size,
                translateDistance: FLOWER_CONFIGS.besar.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besar.duration,
                animationClass: "animate-spin-counter",
            },
        },
        // Tambahan untuk mobile
        besarMobile: {
            kiri: {
                ref: bungaBesarMobileKiriRef,
                isInView: isBungaBesarMobileKiriInView,
                size: FLOWER_CONFIGS.besarmobile.size,
                translateDistance: FLOWER_CONFIGS.besarmobile.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besarmobile.duration,
                animationClass: "animate-spin-clockwise",
            },
            kanan: {
                ref: bungaBesarMobileKananRef,
                isInView: isBungaBesarMobileKananInView,
                size: FLOWER_CONFIGS.besarmobile.size,
                translateDistance: FLOWER_CONFIGS.besarmobile.translateDistance,
                transitionDuration: FLOWER_CONFIGS.besarmobile.duration,
                animationClass: "animate-spin-counter",
            },
        },
        sedang: {
            kiri: {
                ref: bungaSedangKiriRef,
                isInView: isBungaSedangKiriInView,
                size: FLOWER_CONFIGS.sedang.size,
                translateDistance: FLOWER_CONFIGS.sedang.translateDistance,
                transitionDuration: FLOWER_CONFIGS.sedang.duration,
                animationClass: "animate-spin-counter",
            },
            kanan: {
                ref: bungaSedangKananRef,
                isInView: isBungaSedangKananInView,
                size: FLOWER_CONFIGS.sedang.size,
                translateDistance: FLOWER_CONFIGS.sedang.translateDistance,
                transitionDuration: FLOWER_CONFIGS.sedang.duration,
                animationClass: "animate-spin-clockwise",
            },
        },
        kecil1: {
            kiri: {
                ref: bungaKecil1KiriRef,
                isInView: isBungaKecil1KiriInView,
                size: FLOWER_CONFIGS.kecil1.size,
                translateDistance: FLOWER_CONFIGS.kecil1.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil1.duration,
                animationClass: "animate-spin-clockwise",
            },
            kanan: {
                ref: bungaKecil1KananRef,
                isInView: isBungaKecil1KananInView,
                size: FLOWER_CONFIGS.kecil1.size,
                translateDistance: FLOWER_CONFIGS.kecil1.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil1.duration,
                animationClass: "animate-spin-counter",
            },
        },
        kecil2: {
            kiri: {
                ref: bungaKecil2KiriRef,
                isInView: isBungaKecil2KiriInView,
                size: FLOWER_CONFIGS.kecil2.size,
                translateDistance: FLOWER_CONFIGS.kecil2.translateDistance,
                transitionDuration: FLOWER_CONFIGS.kecil2.duration,
                animationClass: "animate-spin-counter",
            },
            kanan: {
                ref: bungaKecil2KananRef,
                isInView: isBungaKecil2KananInView,
                size: FLOWER_CONFIGS.kecil2.size,
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
        isBungaKecil2KiriInView, isBungaKecil2KananInView
    ]);
};

export { useFlowerAnimations };
