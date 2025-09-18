import { motion, easeInOut } from "framer-motion";

interface SuccessContentProps {
    onFinish: () => void;
}

const SuccessContent = ({ onFinish }: SuccessContentProps) => {
    return (
        <div className="relative z-10 w-full max-w-4xl mx-auto mt-0 min-[480px]:-mt-16">
            {/* BACK YELLOW SVG - REDUCED HEIGHT */}
            <div className="absolute top-16 bottom-18 w-full left-1/2 transform -translate-x-1/2 flex items-center justify-center pointer-events-none min-[480px]:hidden">
                <img
                    src="/decoration/back-yellow.svg"
                    alt="Yellow Background Decoration"
                    className="object-cover w-full h-full opacity-90"
                    style={{ 
                        minHeight: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            {/* MOBILE UP SVG - UKURAN SAMA DENGAN MOBILE DOWN */}
            <motion.div 
                className="flex justify-center min-[480px]:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <img
                    src="/decoration/mobile-up.svg"
                    alt="Dekorasi Atas Mobile"
                    className="w-[320px] h-auto"
                    style={{ maxWidth: "85vw" }}
                />
            </motion.div>

            {/* TITLE PENDAFTARAN BERHASIL - TURUNKAN LEBIH DEKAT KE MASKOT */}
            <motion.div 
                className="mt-2 mb-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 sm:mb-4"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                    delay: 0.8, 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1]
                }}
            >
                <h1
                    className="mb-0 font-samsktrigrama font-normal leading-normal tracking-[-0.03125rem] text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center"
                    style={{
                        background: 'linear-gradient(rgb(255, 196, 17) 0%, rgb(205, 156, 26) 15%, rgb(189, 98, 41) 35%, rgb(93, 47, 36) 55%, rgb(61, 31, 22) 75%, rgb(42, 21, 16) 85%, rgb(26, 15, 11) 95%, rgb(15, 8, 5) 100%) text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                    }}
                >
                    Pendaftaran Berhasil
                </h1>
            </motion.div>

            {/* MASKOT + BUBBLE CHAT - JARAK SANGAT DEKAT KE TITLE */}
            <motion.div
                className="relative flex items-center justify-center px-4 mb-4 -mt-2 sm:px-6 sm:-mt-3 sm:mb-6 md:-mt-4 md:mb-8"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    delay: 1.2,
                    duration: 1,
                    ease: [0.25, 0.1, 0.25, 1],
                }}
            >
                {/* BACKGROUND CELEBRATION */}
                <motion.div
                    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                    initial={{ scale: 0, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                        delay: 1.4,
                        duration: 1.2,
                        ease: easeInOut,
                    }}
                >
                    <div
                        className="w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] md:w-[30rem] md:h-[30rem] lg:w-[32rem] lg:h-[32rem] xl:w-[34rem] xl:h-[34rem]"
                        style={{
                            backgroundImage: "url('/background/success-celebration.svg')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </motion.div>

                {/* BACKGROUND MASKOT */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-1"
                    initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    animate={{ scale: 1, opacity: 0.8, rotate: 0 }}
                    transition={{
                        delay: 1.7,
                        duration: 2,
                        ease: easeInOut,
                    }}
                >
                    <div
                        className="w-[20rem] h-[20rem] sm:w-[26rem] sm:h-[26rem] md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] xl:w-[32rem] xl:h-[32rem]"
                        style={{
                            backgroundImage: "url('/decoration/back-mascot.svg')",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    />
                </motion.div>

                {/* MASKOT KIRI + BUBBLE CHAT */}
                <motion.div
                    className="relative pointer-events-none z-2"
                    initial={{ x: -100, opacity: 0, rotate: -15 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{
                        delay: 1.6,
                        duration: 1,
                        ease: [0.34, 1.56, 0.64, 1],
                    }}
                >
                    <div className="relative">
                        <img
                            src="/mascot/mascot-cowok.svg"
                            alt="Maskot Kiri"
                            className="object-contain h-auto w-36 sm:w-44 md:w-48 lg:w-50 xl:w-52 drop-shadow-lg"
                        />

                        {/* Bubble Chat - KIRI MASKOT */}
                        <motion.div
                            className="absolute z-3 top-18 sm:top-12 md:top-13 lg:top-14 xl:top-15 -left-16 sm:-left-20 md:-left-22 lg:-left-24 xl:-left-26"
                            initial={{ scale: 0, opacity: 0, x: -10 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{
                                delay: 2.2,
                                duration: 0.8,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                        >
                            <div className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] rounded-2xl px-2 py-1.5 sm:px-3 sm:py-2 md:px-3 md:py-2 lg:px-3 lg:py-2 shadow-lg flex items-center justify-center max-w-[110px] sm:max-w-[120px] md:max-w-[130px] lg:max-w-[140px]">
                                <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-xs font-medium text-black text-center leading-tight">
                                    Terima kasih telah mendaftar!
                                </span>
                            </div>
                            <div className="absolute bottom-2 -right-1 w-0 h-0 border-l-[8px] border-t-[6px] border-b-[6px] border-l-[#CC8F12] border-t-transparent border-b-transparent"></div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* MASKOT KANAN + BUBBLE CHAT */}
                <motion.div
                    className="relative -ml-8 pointer-events-none z-2 sm:-ml-10 md:-ml-12 lg:-ml-14"
                    initial={{ x: 100, opacity: 0, rotate: 15 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{
                        delay: 1.8,
                        duration: 1,
                        ease: [0.34, 1.56, 0.64, 1],
                    }}
                >
                    <div className="relative">
                        <img
                            src="/mascot/mascot-cewek.svg"
                            alt="Maskot Kanan"
                            className="object-contain h-auto w-36 sm:w-44 md:w-48 lg:w-50 xl:w-52 drop-shadow-lg"
                        />

                        {/* Bubble Chat - KANAN MASKOT */}
                        <motion.div
                            className="absolute z-3 top-20 sm:top-12 md:top-13 lg:top-14 xl:top-15 -right-6 sm:-right-12 md:-right-13 lg:-right-14 xl:-right-16"
                            initial={{ scale: 0, opacity: 0, x: 10 }}
                            animate={{ scale: 1, opacity: 1, x: 0 }}
                            transition={{
                                delay: 2.4,
                                duration: 0.8,
                                ease: [0.34, 1.56, 0.64, 1],
                            }}
                        >
                            <div className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5 md:px-5 md:py-2.5 lg:px-5 lg:py-2.5 shadow-lg flex items-center justify-center min-w-max">
                                <span className="text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium text-black text-center leading-tight whitespace-nowrap">
                                    Yayyyy!
                                </span>
                            </div>
                            <div className="absolute bottom-2 -left-1 w-0 h-0 border-r-[8px] border-t-[6px] border-b-[6px] border-r-[#CC8F12] border-t-transparent border-b-transparent"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* SUCCESS MESSAGE */}
            <motion.div
                className="relative z-20 flex justify-center w-full px-3 mb-4 sm:mb-6 sm:px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4 }}
            >
                <motion.p
                    className="text-center text-amber-800 max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto leading-relaxed px-2 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:whitespace-nowrap"
                    style={{}}
                >
                    Segera bergabung di grup WhatsApp untuk mendapatkan informasi selanjutnya!
                </motion.p>
            </motion.div>

            {/* WHATSAPP LINK */}
            <motion.div
                className="relative z-20 flex justify-center w-full px-3 mb-6 sm:mb-8 sm:px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.6 }}
            >
                <motion.a
                    href="https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-center text-teal-600 underline transition-colors hover:text-teal-800 px-2 break-words max-w-[85vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[55vw] mx-auto text-sm sm:text-base md:text-base lg:text-base xl:text-lg 2xl:text-xl"
                    style={{}}
                    whileHover={{ scale: 1.02 }}
                >
                    https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5
                </motion.a>
            </motion.div>

            {/* BUTTON SELESAI */}
            <motion.div
                className="relative z-20 flex justify-center w-full px-3 mb-6 sm:mb-8 sm:px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.9 }}
            >
                <motion.button
                    onClick={onFinish}
                    className="px-14 py-3 sm:px-18 sm:py-3.5 md:px-20 md:py-4 lg:px-20 lg:py-4 xl:px-18 xl:py-3.5 text-base sm:text-lg md:text-lg lg:text-lg xl:text-base font-semibold text-white transition-all rounded-full bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-2xl"
                    whileHover={{
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 20px 40px rgba(206, 156, 23, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 4.2,
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                    }}
                >
                    Selesai
                </motion.button>
            </motion.div>
            
            {/* MOBILE DOWN.SVG - UKURAN SAMA DENGAN MOBILE UP */}
            <div className="relative z-20 w-full mb-2 px-3 min-[480px]:hidden sm:px-4">
                <motion.div 
                    className="flex justify-center pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: 4.4, 
                        duration: 0.6, 
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <img
                        src="/decoration/mobile-down.svg"
                        alt="Mobile decoration bottom"
                        className="w-[320px] h-auto"
                        style={{ maxWidth: "85vw" }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default SuccessContent;
