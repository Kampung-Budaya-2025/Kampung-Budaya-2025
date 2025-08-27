import { useState, useEffect } from 'react';
import { FormData, FormErrors, UploadFormData, UploadedFile } from '../Components/RegisterForm/types/registration';
import { validateFormData, isFormDataComplete, validateFile } from '../Components/RegisterForm/utils/validation';

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
        formulirPendaftaran: { file: null, name: '', size: 0, isValid: false },
        buktiPembayaran: { file: null, name: '', size: 0, isValid: false },
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [currentStep, setCurrentStep] = useState(1);

    // Load existing data
    useEffect(() => {
        const saved = localStorage.getItem("registrationData");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.formData) setFormData(parsed.formData);
            if (parsed.uploadData) setUploadData(parsed.uploadData);
            if (parsed.step) setCurrentStep(parsed.step);
        }
    }, []);

    // Validate form data
    useEffect(() => {
        const newErrors = validateFormData(formData);
        setErrors(newErrors);
    }, [formData]);

    const handleDataChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleFileUpload = (type: keyof UploadFormData, file: File) => {
        const validation = validateFile(file, type === 'formulirPendaftaran' ? 'formulir' : 'bukti');
        
        const newUploadData = {
            ...uploadData,
            [type]: {
                file: validation.isValid ? file : null,
                name: file.name,
                size: file.size,
                isValid: validation.isValid,
                error: validation.error,
            },
        };
        
        setUploadData(newUploadData);
    };

    const saveToLocalStorage = () => {
        const existing = JSON.parse(localStorage.getItem('registrationData') || '{}');
        localStorage.setItem('registrationData', JSON.stringify({
            ...existing,
            formData,
            uploadData,
            step: currentStep
        }));
    };

    const nextStep = () => {
        const newStep = currentStep + 1;
        setCurrentStep(newStep);
        saveToLocalStorage();
    };

    const prevStep = () => {
        const newStep = currentStep - 1;
        setCurrentStep(newStep);
        saveToLocalStorage();
    };

    const handleSubmit = async () => {
        // Save final data
        localStorage.setItem(
            'registrationData',
            JSON.stringify({ 
                formData, 
                uploadData, 
                step: 4, 
                status: 'submitted', 
                submittedAt: new Date().toISOString() 
            })
        );
        
        setCurrentStep(4);
    };

    // Step validations
    const isStep1Valid = () => {
        return isFormDataComplete(formData) && Object.keys(errors).length === 0;
    };

    const isStep2Valid = () => {
        return uploadData.formulirPendaftaran.isValid && uploadData.buktiPembayaran.isValid;
    };

    const isStep3Valid = () => {
        return isStep1Valid() && isStep2Valid();
    };

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