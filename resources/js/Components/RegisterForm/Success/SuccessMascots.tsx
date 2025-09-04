import { motion, easeInOut } from "framer-motion";

const SuccessMascots = () => {
    return (
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
    );
};

export default SuccessMascots;