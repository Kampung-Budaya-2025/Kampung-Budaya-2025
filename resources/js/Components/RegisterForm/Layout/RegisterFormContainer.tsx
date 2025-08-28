import { useRef, ReactNode } from "react";
import ManualStepper from "@/Components/RegisterForm/UI/ManualStepper";

interface RegisterFormContainerProps {
    currentStep: number;
    isTransitioning: boolean;
    renderCurrentStep: () => ReactNode;
}

const RegisterFormContainer = ({ 
    currentStep, 
    isTransitioning, 
    renderCurrentStep 
}: RegisterFormContainerProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    if (currentStep === 4) {
        return (
            <div className="relative z-40">
                {renderCurrentStep()}
            </div>
        );
    }

    return (
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
    );
};

export default RegisterFormContainer;