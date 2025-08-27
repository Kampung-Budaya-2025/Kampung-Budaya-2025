import { motion, easeInOut, Variants, AnimatePresence } from "framer-motion";
import { memo } from "react";

interface FloatingMascotsProps {
    currentStep: number;
}

const FloatingMascots = memo(({ currentStep }: FloatingMascotsProps) => {
    // Simplified floating animation to reduce CPU usage
    const floatingVariants: Variants = {
        animate: {
            y: [0, -6, 0], // Reduced from -8
            transition: {
                duration: 3.5, // Reduced from 4.5
                ease: easeInOut,
                repeat: Infinity,
            },
        },
    };

    // Optimized speech bubble animation
    const speechBubbleVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3, // Reduced from 0.5
                ease: easeInOut,
                delay: 1, // Reduced from 1.5
            },
        },
        exit: {
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.2, // Reduced from 0.3
                ease: easeInOut,
            },
        },
    };

    const getSpeechBubbleContent = () => {
        switch (currentStep) {
            case 1:
                return {
                    left: "Isi data diri dengan benar ya!",
                    right: "Semangat!",
                };
            case 2:
                return {
                    left: "Upload berkasnya yang lengkap!",
                    right: "Jangan lupa cek format file!",
                };
            case 3:
                return {
                    left: "Cek lagi datanya sudah benar?",
                    right: "Siap submit!",
                };
            default:
                return {
                    left: "Selamat datang!",
                    right: "Halo!",
                };
        }
    };

    const speechContent = getSpeechBubbleContent();

    // Don't render if it's success step (step 4) - mascots will be rendered in RegisterSuccess
    if (currentStep === 4) {
        return null;
    }

    return (
        <>
            {/* Maskot kiri */}
            <motion.div
                className="absolute hidden -translate-y-1/2 -left-40 top-1/2 lg:block"
                variants={floatingVariants}
                animate="animate"
            >
                <img
                    src="/mascot/mascot-cowok.svg"
                    alt="Maskot kiri"
                    className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
                />

                {/* Speech Bubble Kiri - WARNA BACKGROUND & CONTAINER DIPERBAIKI */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`left-${currentStep}`}
                        className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12"
                        variants={speechBubbleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="relative">
                            <div className="px-3 py-2 text-xs font-bold text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap min-w-[180px] sm:min-w-[220px] max-w-[280px] text-center bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)]">
                                {speechContent.left}
                            </div>
                            <div className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] left-4 sm:w-3 sm:h-3 sm:left-6 bg-[#CC8F12]"></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Maskot kanan */}
            <motion.div
                className="absolute hidden -translate-y-1/2 -right-40 top-1/2 lg:block"
                variants={{
                    animate: {
                        y: [0, -8, 0],
                        transition: {
                            duration: 4.5,
                            ease: easeInOut,
                            repeat: Infinity,
                            delay: 2.25,
                        },
                    },
                }}
                animate="animate"
            >
                <img
                    src="/mascot/mascot-cewek.svg"
                    alt="Maskot kanan"
                    className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
                />

                {/* Speech Bubble Kanan - WARNA BACKGROUND & CONTAINER DIPERBAIKI */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`right-${currentStep}`}
                        className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12"
                        variants={speechBubbleVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ delay: 1.7 }}
                    >
                        <div className="relative">
                            <div className="px-3 py-2 text-xs font-bold text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap min-w-[120px] sm:min-w-[180px] max-w-[240px] text-center bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)]">
                                {speechContent.right}
                            </div>
                            <div className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] right-4 sm:w-3 sm:h-3 sm:right-6 bg-[#CC8F12]"></div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </>
    );
});

// Add display name for debugging
FloatingMascots.displayName = "FloatingMascots";

export default FloatingMascots;
