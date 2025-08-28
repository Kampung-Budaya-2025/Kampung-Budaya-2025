import { MdArrowBack } from "react-icons/md";

interface RegisterFormNavigationProps {
    currentStep: number;
    canProceed: boolean;
    submitting: boolean;
    isTransitioning: boolean;
    nextButtonText: string;
    handleNext: () => void;
    handlePrev: () => void;
}

const RegisterFormNavigation = ({
    currentStep,
    canProceed,
    submitting,
    isTransitioning,
    nextButtonText,
    handleNext,
    handlePrev
}: RegisterFormNavigationProps) => {
    if (currentStep === 4) return null;

    return (
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
    );
};

export default RegisterFormNavigation;