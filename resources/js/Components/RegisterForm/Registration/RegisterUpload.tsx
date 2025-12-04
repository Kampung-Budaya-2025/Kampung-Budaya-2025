import { useRef } from "react";
import { motion } from "framer-motion";
import { UploadFormData } from "../types/registration";
import StepHeader from "../UI/StepHeader";
import FileUploadInput from "../UI/FileUploadInput";

interface RegisterUploadProps {
    uploadData: UploadFormData;
    onFileUpload: (type: keyof UploadFormData, file: File) => void;
}

const RegisterUpload = ({ uploadData, onFileUpload }: RegisterUploadProps) => {
    const formulirRef = useRef<HTMLInputElement | null>(null);
    const buktiRef = useRef<HTMLInputElement | null>(null);

    return (
        <div>
            <StepHeader
                title="Unggah Berkas"
                subtitle="Pastikan format dan ukuran file sesuai"
            />

            <motion.div
                className="mt-5 space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <FileUploadInput
                    label="Formulir Pendaftaran"
                    placeholder="Pilih file formulir..."
                    data={uploadData.formulirPendaftaran}
                    inputRef={formulirRef}
                    onPick={(f) => onFileUpload("formulirPendaftaran", f)}
                />
                <FileUploadInput
                    label="Bukti Pembayaran"
                    placeholder="Pilih file bukti bayar..."
                    data={uploadData.buktiPembayaran}
                    inputRef={buktiRef}
                    onPick={(f) => onFileUpload("buktiPembayaran", f)}
                />
            </motion.div>
        </div>
    );
};

export default RegisterUpload;
