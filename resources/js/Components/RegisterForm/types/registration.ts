export interface FormData {
    namaLengkap: string;
    kategori: string;
    tanggalLahir: string;
    asalInstansi: string;
    noHandphone: string;
    email: string;
    instagram: string;
    idLine: string;
}

export interface FormErrors {
    email?: string;
    noHandphone?: string;
}

export interface UploadedFile {
    file: File | null;
    name: string;
    size: number;
    isValid: boolean;
    error?: string;
}

export interface UploadFormData {
    formulirPendaftaran: UploadedFile;
    buktiPembayaran: UploadedFile;
}

export interface RegistrationData {
    formData?: FormData;
    uploadData?: UploadFormData;
    step?: number;
    status?: string;
    submittedAt?: string;
}