import { Variants } from "framer-motion";

export const PAGE_TRANSITION_VARIANTS: Variants = {
    initial: {
        opacity: 0,
        x: 15, // Kurangi dari 20
        scale: 0.995, // Kurangi dari 0.99
    },
    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.25, // Kurangi dari 0.3
            ease: "easeOut",
            opacity: { duration: 0.15 }, // Kurangi dari 0.2
            scale: { duration: 0.25 }, // Kurangi dari 0.3
        },
    },
    exit: {
        opacity: 0,
        x: -15, // Kurangi dari -20
        scale: 0.995, // Kurangi dari 0.99
        transition: {
            duration: 0.15, // Kurangi dari 0.2
            ease: "easeOut",
        },
    },
};

export const CARD_VARIANTS = {
    hidden: { opacity: 0, y: 15, scale: 0.995 }, // Kurangi values
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4, // Kurangi dari 0.5
            ease: "easeOut" as const,
            delay: 0.03, // Kurangi dari 0.05
        },
    },
    success: (currentStep: number) => ({
        opacity: 1,
        y: 0,
        scale: currentStep === 4 ? 1.005 : 1, // Kurangi dari 1.01
        transition: {
            duration: 0.5, // Kurangi dari 0.6
            ease: "easeOut" as const,
            delay: 0.08, // Kurangi dari 0.1
        },
    }),
};

export const HEADER_ANIMATIONS = {
    leftIcon: {
        initial: { opacity: 0, x: -20, rotate: -10 }, // Kurangi values
        animate: { opacity: 1, x: 0, rotate: 0 },
        transition: {
            duration: 0.8, // Kurangi dari 1.2
            delay: 0.3, // Kurangi dari 0.5
            ease: "easeOut" as const, // Ganti cubic-bezier dengan easeOut
        },
    },
    title: {
        initial: { opacity: 0, scale: 0.95 }, // Kurangi dari 0.9
        animate: { opacity: 1, scale: 1 },
        transition: {
            duration: 0.6, // Kurangi dari 0.8
            delay: 0.2, // Kurangi dari 0.3
            ease: "easeOut" as const,
        },
    },
    rightIcon: {
        initial: { opacity: 0, x: 20, rotate: 10 }, // Kurangi values
        animate: { opacity: 1, x: 0, rotate: 0 },
        transition: {
            duration: 0.8, // Kurangi dari 1.2
            delay: 0.4, // Kurangi dari 0.7
            ease: "easeOut" as const,
        },
    },
};
