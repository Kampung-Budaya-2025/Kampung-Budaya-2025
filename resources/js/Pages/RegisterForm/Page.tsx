import { useState, useCallback, useMemo } from "react";
import { router } from "@inertiajs/react";
import { useRegistration } from "../../Hooks/useRegistration";
import RegisterDataDiri from "../../Components/RegisterForm/Registration/RegisterDataDiri";
import RegisterUpload from "../../Components/RegisterForm/Registration/RegisterUpload";
import RegisterConfirmation from "../../Components/RegisterForm/Registration/RegisterConfirmation";
import RegisterSuccess from "../../Components/RegisterForm/Registration/RegisterSuccess";
import RegisterFormBackground from "@/Components/RegisterForm/Layout/RegisterFormBackground";
import RegisterFormMascots from "@/Components/RegisterForm/Layout/RegisterFormMascots";
import RegisterFormHeader from "@/Components/RegisterForm/Layout/RegisterFormHeader";
import RegisterFormContainer from "@/Components/RegisterForm/Layout/RegisterFormContainer";
import RegisterFormNavigation from "@/Components/RegisterForm/Layout/RegisterFormNavigation";

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
        checkEmailAvailability,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
    } = useRegistration();

    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState<string>("");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const speechContent = useMemo(() => {
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
    }, [currentStep]);

    const handleFinalSubmit = useCallback(async () => {
        try {
            setSubmitting(true);
            await new Promise((r) => setTimeout(r, 800));
            await handleSubmit();
            // Submit berhasil, step akan berubah ke 4 otomatis dari handleSubmit
        } catch (error) {
            console.error("Submit failed:", error);
            // Handle error, tampilkan pesan error jika perlu
            alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
        } finally {
            // Pastikan loading state direset
            setSubmitting(false);
        }
    }, [handleSubmit]);

    const handleNext = useCallback(async () => {
        if (isTransitioning) return;

        setIsTransitioning(true);

        try {
            if (currentStep === 1 && isStep1Valid) {
                nextStep();
            } else if (currentStep === 2 && isStep2Valid) {
                nextStep();
            } else if (currentStep === 3 && isStep3Valid) {
                await handleFinalSubmit();
            }
        } catch (error) {
            console.error("Navigation error:", error);
        } finally {
            setTimeout(() => setIsTransitioning(false), 100);
        }
    }, [
        isTransitioning,
        currentStep,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
        nextStep,
        handleFinalSubmit,
    ]);

    const handlePrev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        prevStep();
        setTimeout(() => setIsTransitioning(false), 100);
    }, [isTransitioning, prevStep]);

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
    }, [
        currentStep,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
        formData.eventType,
    ]);

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
                            // Redirect ke homepage menggunakan Inertia router
                            router.visit("/", {
                                method: "get",
                            });
                        }}
                    />
                );
            default:
                return null;
        }
    }, [
        currentStep,
        formData,
        errors,
        handleDataChange,
        uploadData,
        handleFileUpload,
    ]);

    return (
        <RegisterFormBackground>
            <RegisterFormHeader
                currentStep={currentStep}
                eventType={formData.eventType}
            />

            <div className="relative z-10 max-w-4xl mx-auto">
                <RegisterFormMascots
                    speechContent={speechContent}
                    currentStep={currentStep}
                />

                <RegisterFormContainer
                    currentStep={currentStep}
                    isTransitioning={isTransitioning}
                    renderCurrentStep={renderCurrentStep}
                />

                <RegisterFormNavigation
                    currentStep={currentStep}
                    canProceed={canProceed}
                    submitting={submitting}
                    isTransitioning={isTransitioning}
                    nextButtonText={nextButtonText}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
        </RegisterFormBackground>
    );
};

export default RegisterForm;
