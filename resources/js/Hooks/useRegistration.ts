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
    const urlParams = new URLSearchParams(window.location.search);
    const urlEventType = urlParams.get("eventType");

    useEffect(() => {
        if (!urlEventType) {
            window.location.href = "/register-event";
            return;
        }

        localStorage.removeItem("registrationData");
    }, [urlEventType]);

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
    const [currentStep, setCurrentStep] = useState(1);
    const [isCheckingEmail, setIsCheckingEmail] = useState(false);

    const validationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const emailCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    // Email availability check with debouncing
    useEffect(() => {
        if (emailCheckTimeoutRef.current) {
            clearTimeout(emailCheckTimeoutRef.current);
        }

        // Only check if email and eventType are provided
        if (
            formData.email &&
            formData.eventType &&
            formData.email.includes("@")
        ) {
            emailCheckTimeoutRef.current = setTimeout(async () => {
                try {
                    setIsCheckingEmail(true);
                    const response = await fetch(
                        "/api/event-registrations/check-email",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                            },
                            body: JSON.stringify({
                                email: formData.email,
                                event_type: formData.eventType,
                            }),
                        }
                    );

                    if (response.ok) {
                        const result = await response.json();

                        if (result.exists) {
                            setErrors((prev) => ({
                                ...prev,
                                email: "Email sudah terdaftar untuk jenis event ini. Gunakan email lain atau daftar jenis event berbeda.",
                            }));
                        } else {
                            // Remove email error if email is available
                            setErrors((prev) => {
                                const newErrors = { ...prev };
                                delete newErrors.email;
                                return newErrors;
                            });
                        }
                    }
                } catch (error) {
                    console.error("Email check failed:", error);
                    // Don't set error if check fails - let user continue
                } finally {
                    setIsCheckingEmail(false);
                }
            }, 1000); // 1 second debounce for email check
        }

        return () => {
            if (emailCheckTimeoutRef.current) {
                clearTimeout(emailCheckTimeoutRef.current);
            }
        };
    }, [formData.email, formData.eventType]);

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

    // Tidak menggunakan localStorage untuk menyimpan form data
    // User akan selalu mulai dengan form kosong untuk menghindari konflik data lama

    const nextStep = useCallback(() => {
        const newStep = currentStep + 1;
        setCurrentStep(newStep);
    }, [currentStep]);

    const prevStep = useCallback(() => {
        if (currentStep <= 1) {
            // Jika di step 1, kembali ke halaman register-event
            window.location.href = "/register-event";
            return;
        }
        const newStep = currentStep - 1;
        setCurrentStep(newStep);
    }, [currentStep]);

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

                const response = await fetch("/api/event-registrations", {
                    method: "POST",
                    body: apiFormData,
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        ...(document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") && {
                            "X-CSRF-TOKEN":
                                document
                                    .querySelector('meta[name="csrf-token"]')
                                    ?.getAttribute("content") || "",
                        }),
                    },
                });

                if (!response.ok) {
                    let errorMessage = "Registration failed";
                    let errorDetails = "";

                    try {
                        const errorData = await response.json();
                        errorMessage =
                            errorData.message || "Registration failed";

                        if (errorData.errors) {
                            errorDetails = Object.values(errorData.errors)
                                .flat()
                                .join(", ");
                        }
                    } catch (parseError) {
                        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                    }

                    const fullError = errorDetails
                        ? `${errorMessage} - ${errorDetails}`
                        : errorMessage;
                    throw new Error(fullError);
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
        isCheckingEmail,
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
