import { motion, AnimatePresence } from "framer-motion";
import { HEADER_ANIMATIONS } from "../constants/animations";

interface RegisterHeaderProps {
    currentStep: number;
}

const RegisterHeader = ({ currentStep }: RegisterHeaderProps) => {
    return (
        <AnimatePresence>
            {currentStep !== 4 && (
                <motion.header
                    className="relative z-20 pt-12 mb-4 text-center sm:mb-6 lg:mb-8 sm:pt-16 lg:pt-20"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        y: -50,
                        transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <div className="relative px-2 mx-auto sm:px-4 max-w-fit">
                        <div className="relative flex items-center self-stretch justify-center">
                            {/* Icon Kiri */}
                            <motion.div
                                className="flex-shrink-0 mr-1 md:mr-2 lg:mr-3"
                                {...HEADER_ANIMATIONS.leftIcon}
                            >
                                <div className="relative">
                                    <img
                                        src="/decoration/leaf-left.svg"
                                        alt="Icon"
                                        className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 drop-shadow-lg"
                                        style={{
                                            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                className="text-center font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap"
                                {...HEADER_ANIMATIONS.title}
                            >
                                Pendaftaran Lomba Kolaborasi Musik
                            </motion.h1>

                            {/* Icon Kanan */}
                            <motion.div
                                className="flex-shrink-0 ml-1 md:ml-2 lg:ml-3"
                                {...HEADER_ANIMATIONS.rightIcon}
                            >
                                <div className="relative">
                                    <img
                                        src="/decoration/leaf-right.svg"
                                        alt="Icon"
                                        className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 drop-shadow-lg"
                                        style={{
                                            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
};

export default RegisterHeader;
