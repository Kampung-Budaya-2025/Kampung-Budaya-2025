import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MascotWithSpeech from "../UI/MascotWithSpeech";
import ConfettiAnimation from "../UI/ConfettiAnimation";
import TrophyIcon from "../UI/TrophyIcon";

const RegisterSuccess = () => {
    const navigate = useNavigate();

    const handleFinish = () => {
        localStorage.removeItem("registrationData");
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
            {/* Success Title dengan Gradient Pure Tailwind */}
            <motion.h2
                className="mb-8 text-center font-samsktrigrama font-normal leading-normal tracking-[-0.03125rem] text-2xl sm:text-3xl md:text-4xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                Pendaftaran Berhasil
            </motion.h2>

            {/* Central Mascots with Trophy/Success Icon */}
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
                {/* Decorative Background Circle */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{
                        delay: 1,
                        duration: 1.2,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-yellow-100 via-yellow-200 to-amber-200 rounded-full blur-xl"></div>
                </motion.div>

                {/* Trophy Icon */}
                <TrophyIcon />

                {/* Mascot Kiri */}
                <MascotWithSpeech
                    side="left"
                    mascotSrc="/mascot/mascot-cowok.svg"
                    speechText="Terima kasih telah mendaftar!"
                    delay={1.5}
                />

                {/* Mascot Kanan */}
                <MascotWithSpeech
                    side="right"
                    mascotSrc="/mascot/mascot-cewek.svg"
                    speechText="Selamat! Pendaftaran berhasil!"
                    delay={1.7}
                />
            </motion.div>

            {/* Subtitle dengan animasi bertahap */}
            <motion.p
                className="mb-12 text-sm font-medium text-gray-600 sm:text-base md:text-lg max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 3,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                Data Anda telah berhasil dikirim dan sedang dalam proses
                verifikasi. Tim kami akan menghubungi Anda melalui email yang
                telah didaftarkan.
            </motion.p>

            {/* Finish Button dengan animasi enhanced */}
            <motion.div
                className="w-full max-w-xs"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    delay: 3.5,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                <motion.button
                    onClick={handleFinish}
                    className="w-full px-8 py-3 font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] focus:outline-none focus:ring-4 focus:ring-amber-300/50"
                    whileHover={{
                        scale: 1.05,
                        y: -6,
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

            {/* Celebration Confetti */}
            <ConfettiAnimation />
        </div>
    );
};

export default RegisterSuccess;
