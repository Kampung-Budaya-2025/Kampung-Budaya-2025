import { useCallback, useState } from "react";

interface UseNavigationHandlersProps {
    currentStep: number;
    isStep1Valid: boolean;
    isStep2Valid: boolean;
    isStep3Valid: boolean;
    nextStep: () => void;
    prevStep: () => void;
    handleSubmit: () => Promise<void>;
    optimizedScrollToCard: () => void;
}

export const useNavigationHandlers = ({
    currentStep,
    isStep1Valid,
    isStep2Valid,
    isStep3Valid,
    nextStep,
    prevStep,
    handleSubmit,
    optimizedScrollToCard,
}: UseNavigationHandlersProps) => {
    const [submitting, setSubmitting] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleFinalSubmit = useCallback(async () => {
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 1000));
        await handleSubmit();
        setSubmitting(false);
    }, [handleSubmit]);

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

        setTimeout(() => {
            optimizedScrollToCard();
            setIsTransitioning(false);
        }, 150);
    }, [
        currentStep,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
        nextStep,
        isTransitioning,
        optimizedScrollToCard,
        handleFinalSubmit,
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

    return {
        submitting,
        isTransitioning,
        handleNext,
        handlePrev,
    };
};
