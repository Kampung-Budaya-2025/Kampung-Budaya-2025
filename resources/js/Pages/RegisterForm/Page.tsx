import { useState, useCallback, useMemo, useRef } from "react";
import { useRegistration } from "../../Hooks/useRegistration";
import RegisterDataDiri from "../../Components/RegisterForm/Registration/RegisterDataDiri";
import RegisterUpload from "../../Components/RegisterForm/Registration/RegisterUpload";
import RegisterConfirmation from "../../Components/RegisterForm/Registration/RegisterConfirmation";
import RegisterSuccess from "../../Components/RegisterForm/Registration/RegisterSuccess";
import { MdArrowBack } from "react-icons/md";
import ManualStepper from "@/Components/RegisterForm/UI/ManualStepper";

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

    // Memoized speech content for mascots
    const speechContent = useMemo(() => {
        switch (currentStep) {
            case 1:
                return {
                    left: "Isi data diri dengan benar ya!",
                    right: "Semangat!"
                };
            case 2:
                return {
                    left: "Upload berkasnya yang lengkap!",
                    right: "Jangan lupa cek format file!"
                };
            case 3:
                return {
                    left: "Cek lagi datanya sudah benar?",
                    right: "Siap submit!"
                };
            default:
                return {
                    left: "Selamat datang!",
                    right: "Halo!"
                };
        }
    }, [currentStep]);

    // Simplified handlers
    const handleNext = useCallback(async () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        
        if (currentStep === 1 && isStep1Valid()) {
            nextStep();
        } else if (currentStep === 2 && isStep2Valid()) {
            nextStep();
        } else if (currentStep === 3 && isStep3Valid()) {
            await handleFinalSubmit();
        }
        
        setTimeout(() => setIsTransitioning(false), 100);
    }, [isTransitioning, currentStep, isStep1Valid, isStep2Valid, isStep3Valid, nextStep]);

    const handlePrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        prevStep();
        setTimeout(() => setIsTransitioning(false), 100);
    }, [isTransitioning, prevStep]);

    const handleFinalSubmit = useCallback(async () => {
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 800));
        await handleSubmit();
        setSubmitting(false);
    }, [handleSubmit]);

    const canProceed = useMemo(() => {
        switch (currentStep) {
            case 1: return isStep1Valid();
            case 2: return isStep2Valid();
            case 3: return isStep3Valid();
            default: return false;
        }
    }, [currentStep, isStep1Valid, isStep2Valid, isStep3Valid]);

    const nextButtonText = useMemo(() => {
        if (currentStep === 3) {
            return submitting ? "Mengirim..." : "Submit";
        }
        return "Selanjutnya";
    }, [currentStep, submitting]);

    const renderCurrentStep = useCallback(() => {
        switch (currentStep) {
            case 1:
                return (
                    <RegisterDataDiri
                        formData={formData}
                        errors={errors}
                        onDataChange={handleDataChange}
                    />
                );
            case 2:
                return (
                    <RegisterUpload
                        uploadData={uploadData}
                        onFileUpload={handleFileUpload}
                    />
                );
            case 3:
                return (
                    <RegisterConfirmation
                        formData={formData}
                        uploadData={uploadData}
                    />
                );
            case 4:
                return (
                    <RegisterSuccess
                        onFinish={() => {
                            localStorage.removeItem("registrationData");
                            window.location.reload();
                        }}
                    />
                );
            default:
                return null;
        }
    }, [currentStep, formData, errors, handleDataChange, uploadData, handleFileUpload]);

    return (
        <div
            className="relative min-h-screen px-4 py-4 sm:py-6 lg:py-8"
            style={{
                backgroundImage: "url('/background/background-hero.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
            }}
        >
            {/* HEADER TANPA ANIMASI */}
            {currentStep !== 4 && (
                <header className="relative z-20 pt-12 mb-4 text-center sm:mb-6 lg:mb-8 sm:pt-16 lg:pt-20">
                    <div className="relative px-2 mx-auto sm:px-4 max-w-fit">
                        <div className="relative flex items-center self-stretch justify-center">
                            <div className="flex-shrink-0 mr-1 md:mr-2 lg:mr-3">
                                <img
                                    src="/decoration/leaf-left.svg"
                                    alt="Icon"
                                    className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                                />
                            </div>

                            <h1 className="text-center font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap">
                                Pendaftaran Lomba Kolaborasi Musik
                            </h1>

                            <div className="flex-shrink-0 ml-1 md:ml-2 lg:ml-3">
                                <img
                                    src="/decoration/leaf-right.svg"
                                    alt="Icon"
                                    className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                                />
                            </div>
                        </div>
                    </div>
                </header>
            )}

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* STATIC MASCOTS - TANPA ANIMASI BERAT */}
                {currentStep !== 4 && (
                    <>
                        {/* Maskot Kiri - STATIC DENGAN HOVER EFFECT */}
                        <div className="absolute hidden -translate-y-1/2 -left-40 top-1/2 lg:block">
                            <div 
                                className="transition-transform duration-300 hover:-translate-y-2"
                                style={{
                                    transform: 'translateZ(0)', // Hardware acceleration
                                    willChange: 'transform'
                                }}
                            >
                                <img 
                                    src="/mascot/mascot-cowok.svg" 
                                    alt="Maskot kiri"
                                    className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Speech Bubble Kiri */}
                            <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12">
                                <div className="relative">
                                    <div 
                                        className="px-3 py-2 text-xs font-bold text-center text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap"
                                        style={{
                                            background: 'linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)',
                                            minWidth: '180px',
                                            maxWidth: '280px'
                                        }}
                                    >
                                        {speechContent.left}
                                    </div>
                                    <div 
                                        className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] left-4 sm:w-3 sm:h-3 sm:left-6"
                                        style={{ backgroundColor: '#CC8F12' }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Maskot Kanan - STATIC DENGAN HOVER EFFECT */}
                        <div className="absolute hidden -translate-y-1/2 -right-40 top-1/2 lg:block">
                            <div 
                                className="transition-transform duration-300 hover:-translate-y-2"
                                style={{
                                    transform: 'translateZ(0)', // Hardware acceleration
                                    willChange: 'transform'
                                }}
                            >
                                <img 
                                    src="/mascot/mascot-cewek.svg" 
                                    alt="Maskot kanan"
                                    className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Speech Bubble Kanan */}
                            <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12">
                                <div className="relative">
                                    <div 
                                        className="px-3 py-2 text-xs font-bold text-center text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap"
                                        style={{
                                            background: 'linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)',
                                            minWidth: '120px',
                                            maxWidth: '240px'
                                        }}
                                    >
                                        {speechContent.right}
                                    </div>
                                    <div 
                                        className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] right-4 sm:w-3 sm:h-3 sm:right-6"
                                        style={{ backgroundColor: '#CC8F12' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* FORM CONTAINER TANPA ANIMASI BERAT */}
                {currentStep !== 4 && (
                    <>
                        <div
                            ref={cardRef}
                            className="relative w-full max-w-lg p-3 mx-auto bg-white border shadow-lg rounded-2xl border-amber-100 sm:max-w-xl sm:rounded-3xl sm:p-4 md:max-w-2xl md:p-5 lg:max-w-2xl lg:p-5 xl:max-w-3xl xl:p-6"
                        >
                            {/* SIMPLE LOADING */}
                            {isTransitioning && (
                                <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 rounded-2xl sm:rounded-3xl">
                                    <div className="w-6 h-6 border-2 rounded-full border-amber-500 border-t-transparent animate-spin" />
                                </div>
                            )}

                            {/* STEPPER */}
                            <div className="mb-3 sm:mb-4">
                                <ManualStepper currentStep={currentStep} />
                            </div>

                            {/* CONTENT TANPA ANIMASI */}
                            <div className="w-full">
                                {renderCurrentStep()}
                            </div>
                        </div>

                        {/* BUTTONS SEDERHANA */}
                        <div
                            className={`relative flex items-center max-w-lg gap-3 mx-auto mt-4 sm:max-w-xl sm:gap-4 sm:mt-5 md:max-w-2xl lg:max-w-2xl xl:max-w-3xl z-40 ${
                                currentStep === 1
                                    ? "justify-center"
                                    : "flex-col-reverse sm:flex-row sm:justify-between"
                            }`}
                        >
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    disabled={isTransitioning}
                                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors bg-white border rounded-full shadow-md sm:w-auto sm:px-5 sm:py-2 sm:text-base border-amber-300 text-amber-700 hover:bg-amber-50 disabled:opacity-50"
                                >
                                    <MdArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Kembali
                                </button>
                            )}

                            <button
                                type="button"
                                onClick={handleNext}
                                disabled={!canProceed || submitting || isTransitioning}
                                className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors sm:px-8 sm:py-3 sm:text-base lg:px-10 lg:py-3 lg:text-lg shadow-lg ${
                                    currentStep === 1 ? "w-auto" : "w-full sm:w-auto"
                                } ${
                                    canProceed && !submitting && !isTransitioning
                                        ? "bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white hover:opacity-90"
                                        : "cursor-not-allowed bg-gray-300 text-gray-600"
                                }`}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {submitting && (
                                        <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin sm:w-5 sm:h-5" />
                                    )}
                                    {nextButtonText}
                                </div>
                            </button>
                        </div>
                    </>
                )}

                {/* SUCCESS TANPA ANIMASI BERAT */}
                {currentStep === 4 && (
                    <div className="relative z-40">
                        {renderCurrentStep()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterForm;