import { motion, easeInOut } from "framer-motion";

const SuccessMascots = () => {
    return (
        <motion.div
            className="relative flex items-center justify-center mb-4"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                delay: 1.2,
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {/* TEMPAT BACKGROUND GAMBAR - Layer 1 (Paling Belakang) */}
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
                {/* 📁 TARUH GAMBAR BACKGROUND DI SINI */}
                <div
                    className="w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]"
                    style={{
                        backgroundImage:
                            "url('/background/success-celebration.svg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </motion.div>

            {/* LAYER BACKGROUND MASKOT - Layer 2 */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center z-1 pointer-events-none"
                initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
                animate={{ scale: 1, opacity: 0.8, rotate: 0 }}
                transition={{
                    delay: 1.7,
                    duration: 2,
                    ease: easeInOut,
                }}
            >
                {/* 🎭 BACKGROUND MASKOT */}
                <div
                    className="w-[24rem] h-[24rem] sm:w-[30rem] sm:h-[30rem] md:w-[36rem] md:h-[36rem] lg:w-[42rem] lg:h-[42rem] xl:w-[48rem] xl:h-[48rem]"
                    style={{
                        backgroundImage: "url('/decoration/back-mascot.svg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </motion.div>

            {/* LAYER TENGAH - Maskot Kiri */}
            <motion.div
                className="relative z-2 pointer-events-none"
                initial={{ x: -100, opacity: 0, rotate: -15 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{
                    delay: 1.6,
                    duration: 1,
                    ease: [0.34, 1.56, 0.64, 1],
                }}
            >
                {/* 🎭 MASKOT KIRI */}
                <div className="relative">
                    <img
                        src="/mascot/mascot-cowok.svg"
                        alt="Maskot Kiri"
                        className="object-contain w-32 h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64 drop-shadow-lg"
                    />

                    {/* Bubble Chat */}
                    <motion.div
                        className="absolute z-3 -top-10 -left-6 sm:-top-12 sm:-left-8"
                        initial={{ scale: 0, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{
                            delay: 2.2,
                            duration: 0.8,
                            ease: [0.34, 1.56, 0.64, 1],
                        }}
                    >
                        <div className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 shadow-lg">
                            <span className="text-[10px] font-bold text-white sm:text-xs">
                                Terima kasih telah mendaftar!
                            </span>
                        </div>
                        {/* Tail bubble */}
                        <div className="absolute -bottom-1 left-6 transform w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#CC8F12]"></div>
                    </motion.div>
                </div>
            </motion.div>

            {/* LAYER TENGAH - Maskot Kanan */}
            <motion.div
                className="relative z-2 ml-2 sm:ml-4 pointer-events-none"
                initial={{ x: 100, opacity: 0, rotate: 15 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{
                    delay: 1.8,
                    duration: 1,
                    ease: [0.34, 1.56, 0.64, 1],
                }}
            >
                {/* 🎭 MASKOT KANAN */}
                <div className="relative">
                    <img
                        src="/mascot/mascot-cewek.svg"
                        alt="Maskot Kanan"
                        className="object-contain w-32 h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64 drop-shadow-lg"
                    />

                    {/* Bubble Chat */}
                    <motion.div
                        className="absolute z-3 -top-10 -right-6 sm:-top-12 sm:-right-8"
                        initial={{ scale: 0, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{
                            delay: 2.4,
                            duration: 0.8,
                            ease: [0.34, 1.56, 0.64, 1],
                        }}
                    >
                        <div className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 shadow-lg">
                            <span className="text-[10px] font-bold text-white sm:text-xs">
                                Yayyyy!
                            </span>
                        </div>
                        {/* Tail bubble */}
                        <div className="absolute -bottom-1 right-6 transform w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#CC8F12]"></div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SuccessMascots;