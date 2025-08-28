import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import MascotWithSpeech from '../UI/MascotWithSpeech';
import ConfettiAnimation from '../UI/ConfettiAnimation';
import TrophyIcon from '../UI/TrophyIcon';

const RegisterSuccess = () => {
    const navigate = useNavigate();

    const handleFinish = () => {
        localStorage.removeItem('registrationData');
        navigate('/');
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
                    ease: [0.25, 0.1, 0.25, 1]
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
                    ease: [0.25, 0.1, 0.25, 1]
                }}
            >
                {/* Decorative Background Circle */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 1.2, delay: 1 }}
                >
                    <div className="rounded-full w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200" />
                </motion.div>

                {/* Success Trophy/Badge - Tanpa Text */}
                <motion.div
                    className="absolute z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        delay: 1.2, 
                        type: "spring", 
                        stiffness: 200,
                        damping: 15
                    }}
                >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full shadow-xl bg-gradient-to-br from-yellow-400 to-yellow-600">
                        {/* Hanya ikon trophy tanpa text */}
                        <motion.div
                            className="text-4xl"
                            animate={{ 
                                rotateY: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                repeatDelay: 3 
                            }}
                        >
                            🏆
                        </motion.div>
                    </div>
                </motion.div>

                {/* Maskot Kiri - DIPERBESAR */}
                <motion.div
                    className="relative z-20 mr-6"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                        delay: 1.5, 
                        duration: 0.8, 
                        ease: [0.25, 0.1, 0.25, 1]
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
                            delay: 2
                        }}
                    >
                        {/* UKURAN DIPERBESAR: dari w-24 sm:w-32 md:w-40 menjadi lebih besar */}
                        <img
                            src="/mascot/mascot-cowok.svg"
                            alt="Maskot kiri"
                            className="h-auto w-28 sm:w-36 md:w-44 lg:w-48 xl:w-56"
                        />
                    </motion.div>
                    
                    {/* Speech Bubble Kiri - WARNA BACKGROUND GRADIENT */}
                    <motion.div
                        className="absolute -top-8 -left-6 sm:-top-12 sm:-left-8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.5, ease: easeInOut }}
                    >
                        <div className="relative">
                            <div className="px-3 py-2 text-xs font-bold text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)]">
                                Terima kasih telah mendaftar!
                            </div>
                            <div className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] left-6 bg-[#CC8F12]"></div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Maskot Kanan - DIPERBESAR */}
                <motion.div
                    className="relative z-20 ml-6"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                        delay: 1.7, 
                        duration: 0.8, 
                        ease: [0.25, 0.1, 0.25, 1]
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
                            delay: 2.5
                        }}
                    >
                        {/* UKURAN DIPERBESAR: dari w-24 sm:w-32 md:w-40 menjadi lebih besar */}
                        <img
                            src="/mascot/mascot-cewek.svg"
                            alt="Maskot kanan"
                            className="h-auto w-28 sm:w-36 md:w-44 lg:w-48 xl:w-56"
                        />
                    </motion.div>
                    
                    {/* Speech Bubble Kanan - WARNA BACKGROUND GRADIENT */}
                    <motion.div
                        className="absolute -top-8 -right-6 sm:-top-12 sm:-right-8"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 2.4, duration: 0.5, ease: easeInOut }}
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
                    ease: [0.25, 0.1, 0.25, 1]
                }}
            >
                {/* Success Message */}
                <motion.p
                    className="mb-6 text-base font-semibold text-amber-800 sm:text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    Segera bergabung di grup WhatsApp untuk mendapatkan informasi selanjutnya!
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
                        className="px-12 py-4 text-lg font-semibold text-white transition-all rounded-full bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-xl"
                        whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            boxShadow: "0 20px 40px rgba(206, 156, 23, 0.3)"
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
            </motion.div>

            {/* Celebration Confetti */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            backgroundColor: i % 3 === 0 ? '#f59e0b' : i % 3 === 1 ? '#ef4444' : '#10b981',
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 3 + 2,
                            ease: easeInOut,
                        }}
                    />
                ))}
            </motion.div>

            {/* Floating Hearts */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`heart-${i}`}
                    className="absolute text-red-400 pointer-events-none"
                    style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${30 + Math.random() * 40}%`,
                        fontSize: `${12 + Math.random() * 8}px`
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: [0, 1, 0], 
                        opacity: [0, 1, 0],
                        y: [0, -30, -60]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: Math.random() * 4 + 3,
                        ease: easeInOut,
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default RegisterSuccess;