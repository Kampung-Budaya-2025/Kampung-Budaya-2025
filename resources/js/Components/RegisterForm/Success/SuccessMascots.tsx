import { motion, easeInOut } from "framer-motion";

const SuccessMascots = () => {
    return (
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
            {/* TEMPAT BACKGROUND GAMBAR - Layer 1 */}
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
                    className="w-[26rem] h-[26rem] sm:w-[34rem] sm:h-[34rem] md:w-[36rem] md:h-[36rem] lg:w-[38rem] lg:h-[38rem] xl:w-[40rem] xl:h-[40rem]"
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
                        className="absolute z-3 top-18 sm:top-12 md:top-13 lg:top-14 xl:top-15 -left-22 sm:-left-26 md:-left-30 lg:-left-34 xl:-left-38"
                        initial={{ scale: 0, opacity: 0, x: -10 }}
                        animate={{ scale: 1, opacity: 1, x: 0 }}
                        transition={{
                            delay: 2.2,
                            duration: 0.8,
                            ease: [0.34, 1.56, 0.64, 1],
                        }}
                    >
                        <div className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:px-4 md:py-2.5 lg:px-4 lg:py-2.5 shadow-lg flex items-center justify-center max-w-[140px] sm:max-w-[160px] md:max-w-[160px] lg:max-w-[170px]">
                            <span className="text-[10px] sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium text-black text-center leading-tight">
                                Terima kasih telah mendaftar!
                            </span>
                        </div>
                        <div className="absolute bottom-2 -right-1 w-0 h-0 border-l-[8px] border-t-[6px] border-b-[6px] border-l-[#CC8F12] border-t-transparent border-b-transparent"></div>
                    </motion.div>
                </div>
            </motion.div>

            {/* LAYER TENGAH - Maskot Kanan */}
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

                    {/* Bubble Chat - KANAN MASKOT - GESER KE KIRI */}
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
    );
};

export default SuccessMascots;