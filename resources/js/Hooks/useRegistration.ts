import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
    RegistrationFormData,
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
    // Get eventType from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlEventType = urlParams.get("eventType");

    const [formData, setFormData] = useState<RegistrationFormData>({
        eventType: urlEventType || "",
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
    const [currentStep, setCurrentStep] = useState(urlEventType ? 1 : 0);

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
        (field: keyof RegistrationFormData, value: string) => {
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

    const handleSubmit = useCallback(
        async (eventType?: string) => {
            try {
                // Use eventType parameter or from formData
                const selectedEventType = eventType || formData.eventType;

                if (!selectedEventType) {
                    throw new Error("Event type is required");
                }

                // Prepare form data for API
                const apiFormData = new FormData();

                // Add form fields
                apiFormData.append("event_type", selectedEventType);
                apiFormData.append("name", formData.namaLengkap);
                apiFormData.append("category", formData.kategori);
                apiFormData.append("birthdate", formData.tanggalLahir);
                apiFormData.append("affiliation", formData.asalInstansi);
                apiFormData.append("phone_number", formData.noHandphone);
                apiFormData.append("email", formData.email);
                apiFormData.append("instagram_username", formData.instagram);
                apiFormData.append("id_line", formData.idLine);

                // Add files
                if (uploadData.formulirPendaftaran.file) {
                    apiFormData.append(
                        "registration_form",
                        uploadData.formulirPendaftaran.file
                    );
                }
                if (uploadData.buktiPembayaran.file) {
                    apiFormData.append(
                        "payment_proof",
                        uploadData.buktiPembayaran.file
                    );
                }

                // Send to API
                const response = await fetch("/api/event-registrations", {
                    method: "POST",
                    body: apiFormData,
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Registration failed");
                }

                const result = await response.json();

                // Save final data with API response
                localStorage.setItem(
                    "registrationData",
                    JSON.stringify({
                        formData: { ...formData, eventType: selectedEventType },
                        uploadData,
                        step: 4,
                        status: "submitted",
                        submittedAt: new Date().toISOString(),
                        apiResponse: result,
                    })
                );

                setCurrentStep(4);
                return result;
            } catch (error) {
                console.error("Registration failed:", error);
                throw error;
            }
        },
        [formData, uploadData]
    );

    const checkEmailAvailability = useCallback(
        async (email: string, eventType: string) => {
            try {
                const response = await fetch(
                    "/api/event-registrations/check-email",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                        body: JSON.stringify({
                            email,
                            event_type: eventType,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to check email");
                }

                const result = await response.json();
                return result;
            } catch (error) {
                console.error("Email check failed:", error);
                throw error;
            }
        },
        []
    );

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
        checkEmailAvailability,
        isStep1Valid,
        isStep2Valid,
        isStep3Valid,
    };
};
