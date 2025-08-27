import { motion, AnimatePresence } from "framer-motion";
import { useRegistration } from "../../Hooks/useRegistration";
import { useNavigationHandlers } from "../../Components/RegisterForm/hooks/useNavigationHandlers";
import FloatingMascots from "../../Components/RegisterForm/UI/FloatingMascots";
import RegisterDataDiri from "../../Components/RegisterForm/Registration/RegisterDataDiri";
import RegisterHeader from "../../Components/RegisterForm/UI/RegisterHeader";
import NavigationButtons from "../../Components/RegisterForm/UI/NavigationButtons";
import {
    LazyRegisterUpload,
    LazyRegisterConfirmation,
    LazyRegisterSuccess,
} from "../../Components/RegisterForm/utils/lazyComponents";
import { ComponentLoader } from "../../Components/RegisterForm/UI/ComponentLoader";
import ManualStepper from "@/Components/RegisterForm/UI/ManualStepper";
import {
    PAGE_TRANSITION_VARIANTS,
    CARD_VARIANTS,
} from "../../Components/RegisterForm/constants/animations";
import { useRef, useCallback, useMemo, Suspense } from "react";

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

    const { submitting, isTransitioning, handleNext, handlePrev } =
        useNavigationHandlers({
            currentStep,
            isStep1Valid,
            isStep2Valid,
            isStep3Valid,
            nextStep,
            prevStep,
            handleSubmit,
            optimizedScrollToCard,
        });

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
            {/* Header */}
            <RegisterHeader currentStep={currentStep} />

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
                                variants={CARD_VARIANTS}
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
                                            variants={PAGE_TRANSITION_VARIANTS}
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
                            <NavigationButtons
                                currentStep={currentStep}
                                canProceed={canProceed}
                                submitting={submitting}
                                isTransitioning={isTransitioning}
                                nextButtonText={nextButtonText}
                                onNext={handleNext}
                                onPrev={handlePrev}
                            />
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
