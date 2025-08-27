import { Variants } from "framer-motion";

export const PAGE_TRANSITION_VARIANTS: Variants = {
    initial: {
        opacity: 0,
        x: 20,
        scale: 0.99,
    },
    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            opacity: { duration: 0.2 },
            scale: { duration: 0.3 },
        },
    },
    exit: {
        opacity: 0,
        x: -20,
        scale: 0.99,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
};

export const CARD_VARIANTS = {
    hidden: { opacity: 0, y: 20, scale: 0.99 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
            delay: 0.05,
        },
    },
    success: (currentStep: number) => ({
        opacity: 1,
        y: 0,
        scale: currentStep === 4 ? 1.01 : 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
            delay: 0.1,
        },
    }),
};

export const HEADER_ANIMATIONS = {
    leftIcon: {
        initial: { opacity: 0, x: -30, rotate: -15 },
        animate: { opacity: 1, x: 0, rotate: 0 },
        transition: {
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
    title: {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: {
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
    rightIcon: {
        initial: { opacity: 0, x: 30, rotate: 15 },
        animate: { opacity: 1, x: 0, rotate: 0 },
        transition: {
            duration: 1.2,
            delay: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
    },
};
