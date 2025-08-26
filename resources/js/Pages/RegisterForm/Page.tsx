import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { motion, easeInOut, Variants } from "framer-motion";
import backgroundHeroSvg from "@assets/images/background-hero.svg?url";

interface FormData {
    namaLengkap: string;
    kategori: string;
    tanggalLahir: string;
    asalInstansi: string;
    noHandphone: string;
    email: string;
    instagram: string;
    idLine: string;
}

interface FormErrors {
    email?: string;
    noHandphone?: string;
}

const RegisterForm = () => {
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

    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const kategoriOptions = ["Pelajar", "Mahasiswa"];

    useEffect(() => {
        const saved = localStorage.getItem("registrationData");
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.formData) setFormData(parsed.formData as FormData);
        }
    }, []);

    useEffect(() => {
        const newErr: FormErrors = {};
        const required: (keyof FormData)[] = [
            "namaLengkap",
            "kategori",
            "tanggalLahir",
            "asalInstansi",
            "noHandphone",
            "email",
            "instagram",
            "idLine",
        ];
        const filled = required.every((k) => String(formData[k]).trim() !== "");

        const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRx.test(formData.email)) {
            newErr.email = "Format email tidak valid";
        }

        const phoneRx = /^(\+62|62|0)8[1-9][0-9]{6,10}$/;
        if (
            formData.noHandphone &&
            !phoneRx.test(formData.noHandphone.replace(/\s+/g, ""))
        ) {
            newErr.noHandphone = "Format nomor handphone tidak valid";
        }

        setErrors(newErr);
        setIsFormValid(filled && Object.keys(newErr).length === 0);
    }, [formData]);

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (!isFormValid) return;
        const existing = JSON.parse(
            localStorage.getItem("registrationData") || "{}"
        );
        localStorage.setItem(
            "registrationData",
            JSON.stringify({ ...existing, formData, step: 1 })
        );
        router.visit("/register-upload");
    };

    const floatingVariants: Variants = {
        animate: {
            y: [0, -8, 0],
            transition: {
                duration: 4.5,
                ease: easeInOut,
                repeat: Infinity,
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: easeInOut },
        },
    };

    const stepperVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const stepVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: easeInOut },
        },
    };

    return (
        <div
            className="relative min-h-screen px-4 py-8 sm:py-10"
            style={{
                backgroundImage: `url(${backgroundHeroSvg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Header */}
            <motion.header
                className="mb-4 text-center sm:mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeInOut }}
            >
                <h1 className="text-xl font-extrabold text-amber-800 sm:text-2xl md:text-3xl">
                    Pendaftaran Lomba Videografi
                </h1>
            </motion.header>

            <div className="relative max-w-5xl mx-auto">
                {/* Maskot kiri */}
                <motion.div
                    className="absolute hidden w-32 -left-2 top-16 lg:block"
                    variants={floatingVariants}
                    animate="animate"
                >
                    <img src="/mascot/mascot-cowok.svg" alt="Maskot kiri" />
                </motion.div>

                {/* Maskot kanan (delay offset) */}
                <motion.div
                    className="absolute hidden w-32 -right-2 top-16 lg:block"
                    variants={{
                        animate: {
                            y: [0, -8, 0],
                            transition: {
                                duration: 4.5,
                                ease: easeInOut,
                                repeat: Infinity,
                                delay: 2.25,
                            },
                        },
                    }}
                    animate="animate"
                >
                    <img src="/mascot/mascot-cewek.svg" alt="Maskot kanan" />
                </motion.div>

                {/* Card Putih */}
                <motion.div
                    className="relative w-full max-w-xl p-4 mx-auto bg-white border shadow-lg rounded-2xl border-amber-100 sm:max-w-2xl sm:rounded-3xl md:max-w-3xl md:p-8"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Stepper */}
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-4 sm:mb-6 sm:gap-6"
                        variants={stepperVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="flex items-center gap-2"
                            variants={stepVariants}
                        >
                            <div className="flex items-center justify-center text-xs font-bold text-white rounded-full h-7 w-7 bg-amber-500 sm:h-8 sm:w-8 sm:text-sm">
                                1
                            </div>
                            <span className="text-xs font-semibold text-amber-700 sm:text-sm">
                                Data Diri
                            </span>
                        </motion.div>
                        <motion.div
                            className="w-8 h-px bg-amber-200 sm:w-10"
                            variants={stepVariants}
                        />
                        <motion.div
                            className="flex items-center gap-2 opacity-70"
                            variants={stepVariants}
                        >
                            <div className="flex items-center justify-center text-xs font-bold rounded-full h-7 w-7 bg-amber-100 text-amber-400 sm:h-8 sm:w-8 sm:text-sm">
                                2
                            </div>
                            <span className="text-xs text-amber-400 sm:text-sm">
                                Upload Berkas
                            </span>
                        </motion.div>
                        <motion.div
                            className="w-8 h-px bg-amber-100 sm:w-10"
                            variants={stepVariants}
                        />
                        <motion.div
                            className="flex items-center gap-2 opacity-70"
                            variants={stepVariants}
                        >
                            <div className="flex items-center justify-center text-xs font-bold rounded-full h-7 w-7 bg-amber-100 text-amber-400 sm:h-8 sm:w-8 sm:text-sm">
                                3
                            </div>
                            <span className="text-xs text-amber-400 sm:text-sm">
                                Konfirmasi
                            </span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="mb-2 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.5,
                            ease: easeInOut,
                        }}
                    >
                        <h2 className="text-base font-bold text-amber-800 sm:text-lg">
                            Data Diri
                        </h2>
                        <p className="text-xs text-amber-600 sm:text-sm">
                            Harap isi formulir ini dengan benar
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        className="mt-5 space-y-4 sm:space-y-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: easeInOut,
                        }}
                    >
                        {/* Nama */}
                        <div>
                            <label
                                htmlFor="nama"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                Nama
                            </label>
                            <input
                                id="nama"
                                type="text"
                                value={formData.namaLengkap}
                                onChange={(e) =>
                                    handleChange("namaLengkap", e.target.value)
                                }
                                placeholder="Rangga Raras"
                                autoComplete="name"
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
                            />
                        </div>

                        {/* Kategori */}
                        <div>
                            <label
                                htmlFor="kategori"
                                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                            >
                                Kategori
                            </label>
                            <select
                                id="kategori"
                                value={formData.kategori}
                                onChange={(e) =>
                                    handleChange("kategori", e.target.value)
                                }
                                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
                            >
                                <option value="">Pilih Kategori</option>
                                {kategoriOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tanggal lahir + Instansi */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="tgl"
                                    className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                                >
                                    Tanggal Lahir
                                </label>
                                <input
                                    id="tgl"
                                    type="date"
                                    value={formData.tanggalLahir}
                                    onChange={(e) =>
                                        handleChange(
                                            "tanggalLahir",
                                            e.target.value
                                        )
                                    }
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="instansi"
                                    className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                                >
                                    Asal Instansi
                                </label>
                                <input
                                    id="instansi"
                                    type="text"
                                    value={formData.asalInstansi}
                                    onChange={(e) =>
                                        handleChange(
                                            "asalInstansi",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Universitas Brawijaya"
                                    autoComplete="organization"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
                                />
                            </div>
                        </div>

                        {/* HP + Email */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="hp"
                                    className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                                >
                                    No. Handphone
                                </label>
                                <div className="relative">
                                    <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none select-none left-3 top-1/2">
                                        +62
                                    </span>
                                    <input
                                        id="hp"
                                        type="tel"
                                        inputMode="tel"
                                        pattern="^(\+62|62|0)8[1-9][0-9]{6,10}$"
                                        value={formData.noHandphone}
                                        onChange={(e) =>
                                            handleChange(
                                                "noHandphone",
                                                e.target.value
                                            )
                                        }
                                        placeholder="812345678"
                                        autoComplete="tel"
                                        className="w-full rounded-xl border border-gray-300 py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-amber-300 sm:py-3"
                                        aria-invalid={!!errors.noHandphone}
                                        aria-describedby={
                                            errors.noHandphone
                                                ? "hp-error"
                                                : undefined
                                        }
                                    />
                                </div>
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
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        handleChange("email", e.target.value)
                                    }
                                    placeholder="ranggarraras@gmail.com"
                                    autoComplete="email"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
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
                        </div>

                        {/* IG + Line */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="ig"
                                    className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                                >
                                    Instagram
                                </label>
                                <input
                                    id="ig"
                                    type="text"
                                    value={formData.instagram}
                                    onChange={(e) =>
                                        handleChange(
                                            "instagram",
                                            e.target.value
                                        )
                                    }
                                    placeholder="@ranggarraras"
                                    autoComplete="off"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="line"
                                    className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                                >
                                    ID Line
                                </label>
                                <input
                                    id="line"
                                    type="text"
                                    value={formData.idLine}
                                    onChange={(e) =>
                                        handleChange("idLine", e.target.value)
                                    }
                                    placeholder="@ranggarraras25"
                                    autoComplete="off"
                                    className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3"
                                />
                            </div>
                        </div>

                        <p className="mt-1 text-xs text-red-500">
                            *Form Wajib Diisi
                        </p>
                    </motion.div>
                </motion.div>

                {/* Tombol */}
                <motion.div
                    className="flex justify-center max-w-xl mx-auto mt-5 sm:mt-6 md:max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, ease: easeInOut }}
                >
                    <motion.button
                        type="button"
                        onClick={handleNext}
                        disabled={!isFormValid}
                        className={`w-full rounded-full px-6 py-3 text-base font-semibold transition sm:w-auto sm:px-10 sm:text-lg ${
                            isFormValid
                                ? "bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17]"
                                : "cursor-not-allowed bg-gray-300 text-gray-600"
                        }`}
                        whileHover={isFormValid ? { scale: 1.05, y: -2 } : {}}
                        whileTap={isFormValid ? { scale: 0.98 } : {}}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                        }}
                    >
                        Selanjutnya
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterForm;
