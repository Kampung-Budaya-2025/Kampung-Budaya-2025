import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRegistration } from "../../Hooks/useRegistration";
import FloatingMascots from "../../Components/RegisterForm/UI/FloatingMascots";
import RegisterDataDiri from "../../Components/RegisterForm/Registration/RegisterDataDiri";
import {
    LazyRegisterUpload,
    LazyRegisterConfirmation,
    LazyRegisterSuccess,
} from "../../Components/RegisterForm/utils/lazyComponents";
import { ComponentLoader } from "../../Components/RegisterForm/UI/ComponentLoader";
import { MdArrowBack } from "react-icons/md";
import ManualStepper from "@/Components/RegisterForm/UI/ManualStepper";
import { useRef, useState, useCallback, useMemo, Suspense } from "react";

const RegisterForm = () => {
    const {
        formData,
        uploadData,
        errors,
        currentStep,
        handleDataChange,
        handleFileUpload,
        nextStep,
        prevStep,
        handleSubmit,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
    } = useRegistration();

    const [submitting, setSubmitting] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Optimized scroll behavior function
    const optimizedScrollToCard = useCallback(() => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const isVisible =
                rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (!isVisible) {
                cardRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest",
                });
            }
        }
    }, []);

    const handleNext = useCallback(async () => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        if (currentStep === 1 && isStep1Valid) {
            nextStep();
        } else if (currentStep === 2 && isStep2Valid) {
            nextStep();
        } else if (currentStep === 3 && isStep3Valid) {
            await handleFinalSubmit();
        }

        // Reduce delay and optimize scroll timing
        setTimeout(() => {
            optimizedScrollToCard();
            setIsTransitioning(false);
        }, 150); // Reduced from complex scroll logic
    }, [
        currentStep,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
        nextStep,
        isTransitioning,
        optimizedScrollToCard,
    ]);

    const handlePrev = useCallback(async () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        prevStep();

        setTimeout(() => {
            optimizedScrollToCard();
            setIsTransitioning(false);
        }, 150);
    }, [prevStep, isTransitioning, optimizedScrollToCard]);

    const handleFinalSubmit = useCallback(async () => {
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 1000)); // Reduced from 1500
        await handleSubmit();
        setSubmitting(false);
    }, [handleSubmit]);

    // Memoized canProceed function to prevent re-calculation
    const canProceed = useMemo(() => {
        switch (currentStep) {
            case 1:
                return isStep1Valid;
            case 2:
                return isStep2Valid;
            case 3:
                return isStep3Valid;
            default:
                return false;
        }
    }, [currentStep, isStep1Valid, isStep2Valid, isStep3Valid]);

    // Memoized render function for better performance with lazy loading
    const renderCurrentStep = useMemo(() => {
        const stepKey = `step-${currentStep}`;

        switch (currentStep) {
            case 1:
                return (
                    <RegisterDataDiri
                        key={stepKey}
                        formData={formData}
                        errors={errors}
                        onDataChange={handleDataChange}
                    />
                );
            case 2:
                return (
                    <Suspense fallback={<ComponentLoader />}>
                        <LazyRegisterUpload
                            key={stepKey}
                            uploadData={uploadData}
                            onFileUpload={handleFileUpload}
                        />
                    </Suspense>
                );
            case 3:
                return (
                    <Suspense fallback={<ComponentLoader />}>
                        <LazyRegisterConfirmation
                            key={stepKey}
                            formData={formData}
                            uploadData={uploadData}
                        />
                    </Suspense>
                );
            case 4:
                return (
                    <Suspense fallback={<ComponentLoader />}>
                        <LazyRegisterSuccess key={stepKey} />
                    </Suspense>
                );
            default:
                return null;
        }
    }, [
        currentStep,
        formData,
        errors,
        uploadData,
        handleDataChange,
        handleFileUpload,
    ]);

    // Memoized button text
    const nextButtonText = useMemo(() => {
        if (currentStep === 3) {
            return submitting ? "Mengirim..." : "Submit";
        }
        return "Selanjutnya";
    }, [currentStep, submitting]);

    // Simplified animation variants for better performance
    const pageTransition: Variants = {
        initial: {
            opacity: 0,
            x: 20, // Reduced from 30
            scale: 0.99, // Reduced from 0.98
        },
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.3, // Reduced from 0.5
                ease: "easeOut",
                opacity: { duration: 0.2 }, // Reduced from 0.3
                scale: { duration: 0.3 }, // Reduced from 0.5
            },
        },
        exit: {
            opacity: 0,
            x: -20, // Reduced from -30
            scale: 0.99, // Reduced from 0.98
            transition: {
                duration: 0.2, // Reduced from 0.3
                ease: "easeOut",
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.99 }, // Reduced values
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5, // Reduced from 0.8
                ease: "easeOut" as const,
                delay: 0.05, // Reduced from 0.1
            },
        },
        success: {
            opacity: 1,
            y: 0,
            scale: currentStep === 4 ? 1.01 : 1, // Reduced from 1.02
            transition: {
                duration: 0.6, // Reduced from 1
                ease: "easeOut" as const,
                delay: 0.1, // Reduced from 0.2
            },
        },
    };

    return (
        <div
            className="relative min-h-screen px-4 py-4 sm:py-6 lg:py-8"
            style={{
                backgroundImage: "url('/background/background-hero.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                overflow: "visible",
            }}
        >
            {/* Header - HANYA TAMPIL JIKA BUKAN SUCCESS */}
            <AnimatePresence>
                {currentStep !== 4 && (
                    <motion.header
                        className="relative z-20 pt-12 mb-4 text-center sm:mb-6 lg:mb-8 sm:pt-16 lg:pt-20"
                        initial={{ opacity: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            y: -50,
                            transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        <div className="relative px-2 mx-auto sm:px-4 max-w-fit">
                            <div className="relative flex items-center self-stretch justify-center">
                                {/* Icon Kiri */}
                                <motion.div
                                    className="flex-shrink-0 mr-1 md:mr-2 lg:mr-3"
                                    initial={{
                                        opacity: 0,
                                        x: -30,
                                        rotate: -15,
                                    }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.5,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    <div className="relative">
                                        <img
                                            src="/decoration/leaf-left.svg"
                                            alt="Icon"
                                            className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 drop-shadow-lg"
                                            style={{
                                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    className="text-center font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.3,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    Pendaftaran Lomba Kolaborasi Musik
                                </motion.h1>

                                {/* Icon Kanan */}
                                <motion.div
                                    className="flex-shrink-0 ml-1 md:ml-2 lg:ml-3"
                                    initial={{ opacity: 0, x: 30, rotate: 15 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.7,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                    }}
                                >
                                    <div className="relative">
                                        <img
                                            src="/decoration/leaf-right.svg"
                                            alt="Icon"
                                            className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 drop-shadow-lg"
                                            style={{
                                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                                            }}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Floating Mascots - SELALU TAMPIL & RESPONSIVE KE STEP */}
                <FloatingMascots currentStep={currentStep} />

                {/* Container Form - HANYA TAMPIL JIKA BUKAN SUCCESS */}
                <AnimatePresence>
                    {currentStep !== 4 && (
                        <>
                            {/* Card Putih */}
                            <motion.div
                                ref={cardRef}
                                className="relative w-full max-w-lg p-3 mx-auto border shadow-xl bg-white/95 backdrop-blur-sm rounded-2xl border-amber-100 sm:max-w-xl sm:rounded-3xl sm:p-4 md:max-w-2xl md:p-5 lg:max-w-2xl lg:p-5 xl:max-w-3xl xl:p-6"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 50,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    },
                                }}
                                style={{
                                    transformOrigin: "center",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform",
                                    zIndex: 30,
                                }}
                            >
                                {/* Loading Overlay */}
                                <AnimatePresence>
                                    {isTransitioning && (
                                        <motion.div
                                            className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <motion.div
                                                className="w-6 h-6 border-2 rounded-full border-amber-500 border-t-transparent"
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    ease: "linear",
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Stepper */}
                                <motion.div
                                    initial={{ opacity: 1, height: "auto" }}
                                    className="mb-3 sm:mb-4"
                                >
                                    <ManualStepper currentStep={currentStep} />
                                </motion.div>

                                {/* Content */}
                                <div className="relative overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentStep}
                                            variants={pageTransition}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="w-full"
                                            style={{
                                                backfaceVisibility: "hidden",
                                                willChange: "transform",
                                            }}
                                        >
                                            {renderCurrentStep}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>

                            {/* Navigation Buttons */}
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
                                        onClick={handlePrev}
                                        disabled={isTransitioning}
                                        className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-all border rounded-full shadow-md sm:w-auto sm:px-5 sm:py-2 sm:text-base border-amber-300 text-amber-700 hover:bg-amber-50 disabled:opacity-50 hover:shadow-lg backdrop-blur-sm bg-white/90"
                                        whileHover={
                                            !isTransitioning
                                                ? {
                                                      scale: 1.02,
                                                      backgroundColor:
                                                          "#fffbeb",
                                                      y: -2,
                                                  }
                                                : {}
                                        }
                                        whileTap={
                                            !isTransitioning
                                                ? { scale: 0.98 }
                                                : {}
                                        }
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
                                    onClick={handleNext}
                                    disabled={
                                        !canProceed ||
                                        submitting ||
                                        isTransitioning
                                    }
                                    className={`rounded-full px-6 py-2 text-sm font-semibold transition-all sm:px-8 sm:py-3 sm:text-base lg:px-10 lg:py-3 lg:text-lg shadow-lg hover:shadow-xl ${
                                        currentStep === 1
                                            ? "w-auto"
                                            : "w-full sm:w-auto"
                                    } ${
                                        canProceed &&
                                        !submitting &&
                                        !isTransitioning
                                            ? "bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-2xl"
                                            : "cursor-not-allowed bg-gray-300 text-gray-600 shadow-sm"
                                    }`}
                                    whileHover={
                                        canProceed &&
                                        !submitting &&
                                        !isTransitioning
                                            ? {
                                                  scale: 1.05,
                                                  y: -4,
                                                  boxShadow:
                                                      "0 25px 50px rgba(206, 156, 23, 0.4)",
                                              }
                                            : {}
                                    }
                                    whileTap={
                                        canProceed &&
                                        !submitting &&
                                        !isTransitioning
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
                        </>
                    )}
                </AnimatePresence>

                {/* Success Content - TAMPIL HANYA SAAT SUCCESS */}
                <AnimatePresence>
                    {currentStep === 4 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.3,
                            }}
                            className="relative z-40"
                        >
                            {renderCurrentStep}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default RegisterForm;
