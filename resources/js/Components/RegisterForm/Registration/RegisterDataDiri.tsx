import { motion, easeInOut } from "framer-motion";
import { FormData, FormErrors } from "../types/registration";
import StepHeader from "../UI/StepHeader";
import FormInput from "../Fields/FormInput";
import FormSelect from "../Fields/FormSelect";
import FormFieldGroup from "../Fields/FormFieldGroup";

interface RegisterDataDiriProps {
    formData: FormData;
    errors: FormErrors;
    onDataChange: (field: keyof FormData, value: string) => void;
}

const RegisterDataDiri = ({ formData, errors, onDataChange }: RegisterDataDiriProps) => {
    const kategoriOptions = ["Pelajar", "Mahasiswa"];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: easeInOut }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <StepHeader 
                title="Data Diri" 
                subtitle="Harap isi formulir ini dengan benar" 
            />

            <motion.div
                className="mt-5 space-y-4 sm:space-y-5"
                variants={containerVariants}
            >
                {/* Nama Lengkap */}
                <FormInput
                    id="nama"
                    label="Nama"
                    value={formData.namaLengkap}
                    onChange={(value) => onDataChange("namaLengkap", value)}
                    placeholder="Rangga Raras"
                    autoComplete="name"
                    required
                    variants={itemVariants}
                />

                {/* Kategori */}
                <FormSelect
                    id="kategori"
                    label="Kategori"
                    value={formData.kategori}
                    onChange={(value) => onDataChange("kategori", value)}
                    options={kategoriOptions}
                    placeholder="Pilih Kategori"
                    required
                    variants={itemVariants}
                />

                {/* Tanggal Lahir & Asal Instansi */}
                <FormFieldGroup columns={2} variants={itemVariants}>
                    <FormInput
                        id="tgl"
                        label="Tanggal Lahir"
                        type="date"
                        value={formData.tanggalLahir}
                        onChange={(value) => onDataChange("tanggalLahir", value)}
                        required
                    />
                    <FormInput
                        id="instansi"
                        label="Asal Instansi"
                        value={formData.asalInstansi}
                        onChange={(value) => onDataChange("asalInstansi", value)}
                        placeholder="Universitas Brawijaya"
                        autoComplete="organization"
                        required
                    />
                </FormFieldGroup>

                {/* No. Handphone & Email */}
                <FormFieldGroup columns={2} variants={itemVariants}>
                    <FormInput
                        id="hp"
                        label="No. Handphone"
                        type="tel"
                        inputMode="tel"
                        pattern="^(\+62|62|0)8[1-9][0-9]{6,10}$"
                        value={formData.noHandphone}
                        onChange={(value) => onDataChange("noHandphone", value)}
                        placeholder="081234567890"
                        autoComplete="tel"
                        required
                        error={errors.noHandphone}
                    />
                    <FormInput
                        id="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(value) => onDataChange("email", value)}
                        placeholder="ranggarraras@gmail.com"
                        autoComplete="email"
                        required
                        error={errors.email}
                    />
                </FormFieldGroup>

                {/* Instagram & ID Line */}
                <FormFieldGroup columns={2} variants={itemVariants}>
                    <FormInput
                        id="ig"
                        label="Instagram"
                        value={formData.instagram}
                        onChange={(value) => onDataChange("instagram", value)}
                        placeholder="@ranggarraras"
                        autoComplete="off"
                        required
                    />
                    <FormInput
                        id="line"
                        label="ID Line"
                        value={formData.idLine}
                        onChange={(value) => onDataChange("idLine", value)}
                        placeholder="@ranggarraras25"
                        autoComplete="off"
                        required
                    />
                </FormFieldGroup>

                {/* Required Fields Notice */}
                <motion.p 
                    className="mt-1 text-xs text-red-500"
                    variants={itemVariants}
                >
                    *Form Wajib Diisi
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default RegisterDataDiri;