import { motion } from "framer-motion";
import { FormData, UploadFormData } from "../types/registration";
import { formatDate } from "../utils/validation";
import StepHeader from "../UI/StepHeader";
import DataRow from "../UI/DataRow";

interface RegisterConfirmationProps {
    formData: FormData;
    uploadData: UploadFormData;
}

const RegisterConfirmation = ({ formData, uploadData }: RegisterConfirmationProps) => {
    return (
        <div>
            <StepHeader 
                title="Verifikasi Biodata" 
                subtitle="Pastikan data yang anda masukkan sudah benar" 
            />

            <motion.div 
                className="max-w-2xl p-4 mx-auto mt-5 rounded-lg bg-gray-50 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <div className="space-y-2 text-sm sm:text-base">
                    <DataRow 
                        label="Nama" 
                        value={formData?.namaLengkap} 
                        delay={0.1} 
                    />
                    <DataRow 
                        label="Mendaftar" 
                        value={formData?.kategori} 
                        delay={0.15} 
                    />
                    <DataRow 
                        label="Asal Instansi" 
                        value={formData?.asalInstansi} 
                        delay={0.2} 
                    />
                    <DataRow 
                        label="Tanggal Lahir" 
                        value={formatDate(formData?.tanggalLahir)} 
                        delay={0.25} 
                    />
                    <DataRow 
                        label="Nomor Handphone" 
                        value={formData?.noHandphone?.replace(/(\d{4})\d+/, '$1 XXXX XXXX')} 
                        delay={0.3} 
                    />
                    <DataRow 
                        label="Instagram" 
                        value={formData?.instagram} 
                        delay={0.35} 
                    />
                    <DataRow 
                        label="Email" 
                        value={formData?.email} 
                        delay={0.4} 
                    />
                    <DataRow 
                        label="Formulir Pendaftaran" 
                        value={uploadData?.formulirPendaftaran?.name} 
                        delay={0.45} 
                    />
                    <DataRow 
                        label="Bukti Pembayaran" 
                        value={uploadData?.buktiPembayaran?.name} 
                        delay={0.5} 
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterConfirmation;