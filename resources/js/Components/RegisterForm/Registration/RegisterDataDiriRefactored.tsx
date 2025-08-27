import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import { FormData, FormErrors } from "../types/registration";
import StepHeader from "../UI/StepHeader";
import FormField from "../UI/FormField";

interface RegisterDataDiriProps {
    formData: FormData;
    errors: FormErrors;
    onDataChange: (field: keyof FormData, value: string) => void;
}

const RegisterDataDiriRefactored = memo(
    ({ formData, errors, onDataChange }: RegisterDataDiriProps) => {
        const kategoriOptions = ["Pelajar", "Mahasiswa"];

        // Memoized handler to prevent re-creating functions on every render
        const handleInputChange = useCallback(
            (field: keyof FormData) =>
                (
                    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
                ) => {
                    onDataChange(field, e.target.value);
                },
            [onDataChange]
        );

        // Optimized animation variants for better performance
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.03, // Kurangi dari 0.05
                    delayChildren: 0.05, // Kurangi dari 0.1
                },
            },
        };

        const itemVariants = {
            hidden: { opacity: 0, y: 8 }, // Kurangi dari 10
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.25, ease: "easeOut" as const }, // Kurangi dari 0.3
            },
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
                    <FormField
                        id="nama"
                        label="Nama"
                        value={formData.namaLengkap}
                        onChange={handleInputChange("namaLengkap")}
                        placeholder="Rangga Raras"
                        autoComplete="name"
                        required
                        variants={itemVariants}
                    />

                    {/* Kategori */}
                    <FormField
                        id="kategori"
                        label="Kategori"
                        value={formData.kategori}
                        onChange={handleInputChange("kategori")}
                        options={kategoriOptions}
                        required
                        variants={itemVariants}
                    />

                    {/* Tanggal Lahir & Asal Instansi */}
                    <motion.div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        variants={itemVariants}
                    >
                        <FormField
                            id="tgl"
                            label="Tanggal Lahir"
                            type="date"
                            value={formData.tanggalLahir}
                            onChange={handleInputChange("tanggalLahir")}
                            autoComplete="bday"
                            required
                        />

                        <FormField
                            id="instansi"
                            label="Asal Instansi"
                            value={formData.asalInstansi}
                            onChange={handleInputChange("asalInstansi")}
                            placeholder="Universitas Brawijaya"
                            autoComplete="organization"
                            required
                        />
                    </motion.div>

                    {/* No HP & Email */}
                    <motion.div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        variants={itemVariants}
                    >
                        <FormField
                            id="hp"
                            label="No. Handphone"
                            type="tel"
                            inputMode="tel"
                            pattern="^(\+62|62|0)8[1-9][0-9]{6,10}$"
                            value={formData.noHandphone}
                            onChange={handleInputChange("noHandphone")}
                            placeholder="081234567890"
                            autoComplete="tel"
                            error={errors.noHandphone}
                            ariaInvalid={!!errors.noHandphone}
                            ariaDescribedBy={
                                errors.noHandphone ? "hp-error" : undefined
                            }
                            required
                        />

                        <FormField
                            id="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            placeholder="ranggarraras@gmail.com"
                            autoComplete="email"
                            error={errors.email}
                            ariaInvalid={!!errors.email}
                            ariaDescribedBy={
                                errors.email ? "email-error" : undefined
                            }
                            required
                        />
                    </motion.div>

                    {/* Instagram & ID Line */}
                    <motion.div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        variants={itemVariants}
                    >
                        <FormField
                            id="ig"
                            label="Instagram"
                            value={formData.instagram}
                            onChange={handleInputChange("instagram")}
                            placeholder="@ranggarraras"
                            autoComplete="off"
                            required
                        />

                        <FormField
                            id="line"
                            label="ID Line"
                            value={formData.idLine}
                            onChange={handleInputChange("idLine")}
                            placeholder="@ranggarraras25"
                            autoComplete="off"
                            required
                        />
                    </motion.div>

                    <motion.p
                        className="mt-1 text-xs text-red-500"
                        variants={itemVariants}
                    >
                        *Form Wajib Diisi
                    </motion.p>
                </motion.div>
            </motion.div>
        );
    }
);

// Add display name for debugging
RegisterDataDiriRefactored.displayName = "RegisterDataDiriRefactored";

export default RegisterDataDiriRefactored;
