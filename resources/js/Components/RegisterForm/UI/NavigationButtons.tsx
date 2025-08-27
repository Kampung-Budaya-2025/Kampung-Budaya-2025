import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack } from "react-icons/md";

interface NavigationButtonsProps {
    currentStep: number;
    canProceed: boolean;
    submitting: boolean;
    isTransitioning: boolean;
    nextButtonText: string;
    onNext: () => void;
    onPrev: () => void;
}

const NavigationButtons = ({
    currentStep,
    canProceed,
    submitting,
    isTransitioning,
    nextButtonText,
    onNext,
    onPrev,
}: NavigationButtonsProps) => {
    return (
        <motion.div
            className={`relative flex items-center max-w-lg gap-3 mx-auto mt-4 sm:max-w-xl sm:gap-4 sm:mt-5 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl z-40 ${
                currentStep === 1
                    ? "justify-center"
                    : "flex-col-reverse sm:flex-row sm:justify-between"
            }`}
            initial={{ opacity: 1, y: 0 }}
            exit={{
                opacity: 0,
                y: 50,
                transition: {
                    duration: 0.4,
                    ease: "easeInOut",
                },
            }}
            transition={{
                delay: 0.8,
                duration: 0.6,
                ease: "easeOut",
            }}
        >
            {/* Back Button */}
            {currentStep > 1 && (
                <motion.button
                    type="button"
                    onClick={onPrev}
                    disabled={isTransitioning}
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-all border rounded-full shadow-md sm:w-auto sm:px-5 sm:py-2 sm:text-base border-amber-300 text-amber-700 hover:bg-amber-50 disabled:opacity-50 hover:shadow-lg backdrop-blur-sm bg-white/90"
                    whileHover={
                        !isTransitioning
                            ? {
                                  scale: 1.02,
                                  backgroundColor: "#fffbeb",
                                  y: -2,
                              }
                            : {}
                    }
                    whileTap={!isTransitioning ? { scale: 0.98 } : {}}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <MdArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
                    Kembali
                </motion.button>
            )}

            {/* Next/Submit Button */}
            <motion.button
                type="button"
                onClick={onNext}
                disabled={!canProceed || submitting || isTransitioning}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all sm:px-8 sm:py-3 sm:text-base lg:px-10 lg:py-3 lg:text-lg shadow-lg hover:shadow-xl ${
                    currentStep === 1 ? "w-auto" : "w-full sm:w-auto"
                } ${
                    canProceed && !submitting && !isTransitioning
                        ? "bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-2xl"
                        : "cursor-not-allowed bg-gray-300 text-gray-600 shadow-sm"
                }`}
                whileHover={
                    canProceed && !submitting && !isTransitioning
                        ? {
                              scale: 1.05,
                              y: -4,
                              boxShadow: "0 25px 50px rgba(206, 156, 23, 0.4)",
                          }
                        : {}
                }
                whileTap={
                    canProceed && !submitting && !isTransitioning
                        ? { scale: 0.98 }
                        : {}
                }
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: currentStep === 1 ? 1 : 1.2,
                    duration: 0.6,
                    layout: {
                        duration: 0.3,
                        ease: "easeOut",
                    },
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                }}
            >
                <div className="flex items-center justify-center gap-2">
                    {submitting && (
                        <motion.div
                            className="w-4 h-4 border-2 border-white rounded-full border-t-transparent sm:w-5 sm:h-5"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />
                    )}
                    {nextButtonText}
                </div>
            </motion.button>
        </motion.div>
    );
};

export default NavigationButtons;
