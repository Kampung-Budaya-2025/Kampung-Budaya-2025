import { motion, easeInOut, delay } from "framer-motion";

interface RegisterSuccessProps {
    onFinish?: () => void;
}

const RegisterSuccess = ({ onFinish }: RegisterSuccessProps = {}) => {
    const handleFinish = () => {
        localStorage.removeItem("registrationData");

        if (onFinish) {
            onFinish();
        } else {
            window.location.href = "/";
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
          {/* Success Title dengan Decorative Images untuk Mobile */}
<div className="text-center">
    {/* Mobile Decoration - Top */}
    <motion.img
        src="/decoration/mobile-up.svg"
        alt="Mobile decoration top"
        className="block w-auto h-12 mx-auto mb-4 sm:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
            delay: 0.3, 
            duration: 0.6, 
            ease: [0.25, 0.1, 0.25, 1]
        }}
    />

    {/* Success Title dengan gradient sangat gelap dan font lebih besar */}
    <motion.h2
        className="mb-8 text-center font-samsktrigrama font-normal leading-normal tracking-[-0.03125rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
        style={{
            background: 'linear-gradient(180deg, #FFC411 0%, #CD9C1A 15%, #BD6229 35%, #5D2F24 55%, #3D1F16 75%, #2A1510 85%, #1A0F0B 95%, #0F0805 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent'
        }}
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
            delay: 0.5, 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1]
        }}
    >
        Pendaftaran Berhasil
    </motion.h2>
</div>

            {/* Central Mascots with Background Asset */}
            <motion.div
                className="relative flex items-center justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    delay: 0.8,
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {/* 🎯 TEMPAT BACKGROUND GAMBAR - Layer 1 (Paling Belakang) */}
                <motion.div
                    className="absolute inset-0 z-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                        duration: 1.5,
                        delay: 1,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    {/* 📁 TARUH GAMBAR BACKGROUND DI SINI */}
                    <div
                        className="w-96 h-96 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem]"
                        style={{
                            backgroundImage:
                                "url('/background/success-celebration.svg')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </motion.div>

                {/* 🎯 OPTIONAL: TEMPAT BACKGROUND GAMBAR TAMBAHAN - Layer 2 */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center z-5"
                    initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    animate={{ scale: 1, opacity: 0.8, rotate: 0 }}
                    transition={{
                        duration: 2,
                        delay: 1.3,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    {/* 📁 TARUH GAMBAR OVERLAY/EFFECT DI SINI (OPTIONAL) */}
                    <div
                        className="w-80 h-80 sm:w-96 sm:h-96 md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem]"
                        style={{
                            backgroundImage:
                                "url('/decoration/back-mascot.svg')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </motion.div>

                {/* Maskot Kiri - LEBIH DEKAT */}
                <motion.div
                    className="relative z-20 mr-2 sm:mr-3 md:mr-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            ease: easeInOut,
                            repeat: Infinity,
                            delay: 2,
                        }}
                    >
                        <img
                            src="/mascot/mascot-cowok.svg"
                            alt="Maskot kiri"
                            className="h-auto w-28 sm:w-36 md:w-44 lg:w-48 xl:w-56"
                        />
                    </motion.div>

                    {/* Speech Bubble Kiri */}
                    <motion.div
                        className="absolute z-30 -top-8 -left-6 sm:-top-12 sm:-left-8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 2.2,
                            duration: 0.5,
                            ease: easeInOut,
                        }}
                    >
                        <div className="relative">
                            <div className="px-3 py-2 text-xs font-bold text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)]">
                                Terima kasih telah mendaftar!
                            </div>
                            <div className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] left-6 bg-[#CC8F12]"></div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Maskot Kanan - LEBIH DEKAT */}
                <motion.div
                    className="relative z-20 ml-2 sm:ml-3 md:ml-4"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 1.7,
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            ease: easeInOut,
                            repeat: Infinity,
                            delay: 2.5,
                        }}
                    >
                        <img
                            src="/mascot/mascot-cewek.svg"
                            alt="Maskot kanan"
                            className="h-auto w-28 sm:w-36 md:w-44 lg:w-48 xl:w-56"
                        />
                    </motion.div>

                    {/* Speech Bubble Kanan */}
                    <motion.div
                        className="absolute z-30 -top-8 -right-6 sm:-top-12 sm:-right-8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            delay: 2.4,
                            duration: 0.5,
                            ease: easeInOut,
                        }}
                    >
                        <div className="relative">
                            <div className="px-3 py-2 text-xs font-bold text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)]">
                                Yayyyy!
                            </div>
                            <div className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] right-6 bg-[#CC8F12]"></div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Success Content */}
            <motion.div
                className="max-w-lg mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 2.8,
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {/* Success Message */}
                <motion.p
                    className="mb-6 text-base font-semibold text-amber-800 sm:text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    Segera bergabung di grup WhatsApp untuk mendapatkan
                    informasi selanjutnya!
                </motion.p>

                {/* WhatsApp Link */}
                <motion.a
                    href="https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-8 text-sm text-teal-600 underline break-all transition-colors hover:text-teal-800 sm:text-base"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2 }}
                    whileHover={{ scale: 1.02 }}
                >
                    https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5
                </motion.a>

                {/* Finish Button */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 }}
                >
                    <motion.button
                        onClick={handleFinish}
                        className="px-14 py-3 text-lg font-semibold text-white transition-all rounded-full bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-xl"
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                            boxShadow: "0 20px 40px rgba(206, 156, 23, 0.3)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{
                            delay: 3.8,
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                        }}
                    >
                        Selesai
                    </motion.button>
                </motion.div>
                
                {/* Mobile Decoration - Bottom - DIPINDAH KE SINI */}
                <motion.img
                    src="/decoration/mobile-down.svg"
                    alt="Mobile decoration bottom"
                    className="block w-auto h-12 mx-auto mt-6 sm:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: 4.0, 
                        duration: 0.6, 
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                />
            </motion.div>
        </div>
    );
};

export default RegisterSuccess;
