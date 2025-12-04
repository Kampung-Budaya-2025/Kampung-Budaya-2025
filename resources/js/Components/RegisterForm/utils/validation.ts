import { RegistrationFormData, FormErrors } from "../types/registration";

// Cached regex patterns for better performance
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;

export const validateEmail = (email: string): boolean => {
    return EMAIL_REGEX.test(email);
};

export const validatePhone = (phone: string): boolean => {
    return PHONE_REGEX.test(phone.replace(/\s+/g, ""));
};

// Memoized validation function to reduce re-calculations
let lastFormData: RegistrationFormData | null = null;
let lastErrors: FormErrors = {};

export const validateFormData = (
    formData: RegistrationFormData
): FormErrors => {
    // Simple memoization to avoid re-validation of same data
    if (
        lastFormData &&
        JSON.stringify(lastFormData) === JSON.stringify(formData)
    ) {
        return lastErrors;
    }

    const errors: FormErrors = {};

    if (formData.email && !validateEmail(formData.email)) {
        errors.email = "Format email tidak valid";
    }

    if (formData.noHandphone && !validatePhone(formData.noHandphone)) {
        errors.noHandphone = "Format nomor handphone tidak valid";
    }

    lastFormData = { ...formData };
    lastErrors = errors;

    return errors;
};

export const isFormDataComplete = (formData: RegistrationFormData): boolean => {
    const required: (keyof RegistrationFormData)[] = [
        "namaLengkap",
        "kategori",
        "tanggalLahir",
        "asalInstansi",
        "noHandphone",
        "email",
        "instagram",
        "idLine",
    ];
    return required.every((k) => String(formData[k]).trim() !== "");
};

export const validateFile = (
    file: File,
    type: "formulir" | "bukti"
): { isValid: boolean; error?: string } => {
    // No validation - accept all file types and sizes
    return { isValid: true };
};

export const formatDate = (dateString?: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};
