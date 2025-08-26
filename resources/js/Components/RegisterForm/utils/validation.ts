import { FormData, FormErrors } from '../types/registration';

export const validateEmail = (email: string): boolean => {
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRx.test(email);
};

export const validatePhone = (phone: string): boolean => {
    const phoneRx = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
    return phoneRx.test(phone.replace(/\s+/g, ""));
};

export const validateFormData = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};
    
    if (formData.email && !validateEmail(formData.email)) {
        errors.email = "Format email tidak valid";
    }

    if (formData.noHandphone && !validatePhone(formData.noHandphone)) {
        errors.noHandphone = "Format nomor handphone tidak valid";
    }

    return errors;
};

export const isFormDataComplete = (formData: FormData): boolean => {
    const required: (keyof FormData)[] = [
        "namaLengkap", "kategori", "tanggalLahir", "asalInstansi",
        "noHandphone", "email", "instagram", "idLine",
    ];
    return required.every((k) => String(formData[k]).trim() !== "");
};

export const validateFile = (file: File, type: 'formulir' | 'bukti'): { isValid: boolean; error?: string } => {
    if (type === 'formulir') {
        const allowedMimeTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSizeMB = 5;
        if (!allowedMimeTypes.includes(file.type)) return { isValid: false, error: 'Format harus PDF atau DOCX' };
        if (file.size > maxSizeMB * 1024 * 1024) return { isValid: false, error: `Ukuran maksimal ${maxSizeMB}MB` };
    } else {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
        const maxSizeMB = 2;
        if (!allowedMimeTypes.includes(file.type)) return { isValid: false, error: 'Format harus JPG, PNG, atau PDF' };
        if (file.size > maxSizeMB * 1024 * 1024) return { isValid: false, error: `Ukuran maksimal ${maxSizeMB}MB` };
    }
    return { isValid: true };
};

export const formatDate = (dateString?: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' });
};