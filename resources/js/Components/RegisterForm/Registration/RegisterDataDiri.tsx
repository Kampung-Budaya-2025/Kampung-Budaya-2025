import { motion, easeInOut } from "framer-motion";
import { memo, useCallback } from "react";
import { FormData, FormErrors } from "../types/registration";
import StepHeader from "../UI/StepHeader";

interface RegisterDataDiriProps {
    formData: FormData;
    errors: FormErrors;
    onDataChange: (field: keyof FormData, value: string) => void;
}

const RegisterDataDiri = memo(
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

        // Simplified animation variants to reduce computational overhead
        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.05, // Reduced from 0.1
                    delayChildren: 0.1, // Reduced from 0.2
                },
            },
        };

        const itemVariants = {
            hidden: { opacity: 0, y: 10 }, // Reduced from y: 20
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: easeInOut }, // Reduced from 0.5
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
                    {/* Form fields dengan stagger animation */}
                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="nama"
                            className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                        >
                            Nama <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="nama"
                            type="text"
                            value={formData.namaLengkap}
                            onChange={handleInputChange("namaLengkap")}
                            placeholder="Rangga Raras"
                            autoComplete="name"
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <label
                            htmlFor="kategori"
                            className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                        >
                            Kategori <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="kategori"
                            value={formData.kategori}
                            onChange={handleInputChange("kategori")}
                            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                        >
                            <option value="">Pilih Kategori</option>
                            {kategoriOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        variants={itemVariants}
                    >
                        <div>
                            <label
                                htmlFor="tgl"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                Tanggal Lahir{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="tgl"
                                type="date"
                                value={formData.tanggalLahir}
                                onChange={handleInputChange("tanggalLahir")}
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="instansi"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                Asal Instansi{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="instansi"
                                type="text"
                                value={formData.asalInstansi}
                                onChange={handleInputChange("asalInstansi")}
                                placeholder="Universitas Brawijaya"
                                autoComplete="organization"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        variants={itemVariants}
                    >
                        <div>
                            <label
                                htmlFor="hp"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                No. Handphone{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="hp"
                                type="tel"
                                inputMode="tel"
                                pattern="^(\+62|62|0)8[1-9][0-9]{6,10}$"
                                value={formData.noHandphone}
                                onChange={handleInputChange("noHandphone")}
                                placeholder="081234567890"
                                autoComplete="tel"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                                aria-invalid={!!errors.noHandphone}
                                aria-describedby={
                                    errors.noHandphone ? "hp-error" : undefined
                                }
                            />
                            {errors.noHandphone && (
                                <motion.p
                                    id="hp-error"
                                    className="mt-1 text-xs text-red-500"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: easeInOut,
                                    }}
                                >
                                    {errors.noHandphone}
                                </motion.p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange("email")}
                                placeholder="ranggarraras@gmail.com"
                                autoComplete="email"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                                aria-invalid={!!errors.email}
                                aria-describedby={
                                    errors.email ? "email-error" : undefined
                                }
                            />
                            {errors.email && (
                                <motion.p
                                    id="email-error"
                                    className="mt-1 text-xs text-red-500"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: easeInOut,
                                    }}
                                >
                                    {errors.email}
                                </motion.p>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2"
                        variants={itemVariants}
                    >
                        <div>
                            <label
                                htmlFor="ig"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                Instagram{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="ig"
                                type="text"
                                value={formData.instagram}
                                onChange={handleInputChange("instagram")}
                                placeholder="@ranggarraras"
                                autoComplete="off"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="line"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                ID Line <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="line"
                                type="text"
                                value={formData.idLine}
                                onChange={handleInputChange("idLine")}
                                placeholder="@ranggarraras25"
                                autoComplete="off"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                            />
                        </div>
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
RegisterDataDiri.displayName = "RegisterDataDiri";

export default RegisterDataDiri;
