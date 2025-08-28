import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
    FormData,
    FormErrors,
    UploadFormData,
    UploadedFile,
} from "../Components/RegisterForm/types/registration";
import {
    validateFormData,
    isFormDataComplete,
    validateFile,
} from "../Components/RegisterForm/utils/validation";

export const useRegistration = () => {
    const [formData, setFormData] = useState<FormData>({
        namaLengkap: "",
        kategori: "",
        tanggalLahir: "",
        asalInstansi: "",
        noHandphone: "",
        email: "",
        instagram: "",
        idLine: "",
    });

    const [uploadData, setUploadData] = useState<UploadFormData>({
        formulirPendaftaran: { file: null, name: "", size: 0, isValid: false },
        buktiPembayaran: { file: null, name: "", size: 0, isValid: false },
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [currentStep, setCurrentStep] = useState(1);

    // Debounce validation to prevent excessive re-renders
    const validationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Load existing data
    useEffect(() => {
        const saved = localStorage.getItem("registrationData");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.formData) setFormData(parsed.formData);
                if (parsed.uploadData) setUploadData(parsed.uploadData);
                if (parsed.step) setCurrentStep(parsed.step);
            } catch (error) {
                console.warn("Failed to parse saved registration data:", error);
            }
        }
    }, []);

    // Debounced validation
    useEffect(() => {
        if (validationTimeoutRef.current) {
            clearTimeout(validationTimeoutRef.current);
        }

        validationTimeoutRef.current = setTimeout(() => {
            const newErrors = validateFormData(formData);
            setErrors(newErrors);
        }, 300); // Debounce validation by 300ms

        return () => {
            if (validationTimeoutRef.current) {
                clearTimeout(validationTimeoutRef.current);
            }
        };
    }, [formData]);

    const handleDataChange = useCallback(
        (field: keyof FormData, value: string) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
        },
        []
    );

    const handleFileUpload = useCallback(
        (type: keyof UploadFormData, file: File) => {
            const validation = validateFile(
                file,
                type === "formulirPendaftaran" ? "formulir" : "bukti"
            );

            setUploadData((prev) => ({
                ...prev,
                [type]: {
                    file: validation.isValid ? file : null,
                    name: file.name,
                    size: file.size,
                    isValid: validation.isValid,
                    error: validation.error,
                },
            }));
        },
        []
    );

    // Throttled localStorage save
    const saveToLocalStorageRef = useRef<NodeJS.Timeout | null>(null);
    const saveToLocalStorage = useCallback(() => {
        if (saveToLocalStorageRef.current) {
            clearTimeout(saveToLocalStorageRef.current);
        }

        saveToLocalStorageRef.current = setTimeout(() => {
            try {
                const existing = JSON.parse(
                    localStorage.getItem("registrationData") || "{}"
                );
                localStorage.setItem(
                    "registrationData",
                    JSON.stringify({
                        ...existing,
                        formData,
                        uploadData,
                        step: currentStep,
                    })
                );
            } catch (error) {
                console.warn("Failed to save to localStorage:", error);
            }
        }, 500); // Throttle localStorage saves
    }, [formData, uploadData, currentStep]);

    const nextStep = useCallback(() => {
        const newStep = currentStep + 1;
        setCurrentStep(newStep);
        saveToLocalStorage();
    }, [currentStep, saveToLocalStorage]);

    const prevStep = useCallback(() => {
        const newStep = currentStep - 1;
        setCurrentStep(newStep);
        saveToLocalStorage();
    }, [currentStep, saveToLocalStorage]);

    const handleSubmit = useCallback(async () => {
        try {
            // Save final data
            localStorage.setItem(
                "registrationData",
                JSON.stringify({
                    formData,
                    uploadData,
                    step: 4,
                    status: "submitted",
                    submittedAt: new Date().toISOString(),
                })
            );

            setCurrentStep(4);
        } catch (error) {
            console.warn("Failed to save final data:", error);
        }
    }, [formData, uploadData]);

    // Memoized validation functions to prevent unnecessary re-calculations
    const isStep1Valid = useMemo(() => {
        return isFormDataComplete(formData) && Object.keys(errors).length === 0;
    }, [formData, errors]);

    const isStep2Valid = useMemo(() => {
        return (
            uploadData.formulirPendaftaran.isValid &&
            uploadData.buktiPembayaran.isValid
        );
    }, [
        uploadData.formulirPendaftaran.isValid,
        uploadData.buktiPembayaran.isValid,
    ]);

    const isStep3Valid = useMemo(() => {
        return isStep1Valid && isStep2Valid;
    }, [isStep1Valid, isStep2Valid]);

    return {
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
    };
};
