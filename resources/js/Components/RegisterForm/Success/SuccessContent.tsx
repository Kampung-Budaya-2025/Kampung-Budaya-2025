import { motion } from "framer-motion";

interface SuccessContentProps {
    onFinish: () => void;
}

const SuccessContent = ({ onFinish }: SuccessContentProps) => {
    return (
        <motion.div
            className="relative z-10 w-full max-w-3xl px-3 mx-auto mt-4 lg:max-w-4xl xl:max-w-3xl sm:px-4 sm:mt-6 md:mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 3.2,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {/* Success Message - SATU BARIS DI DESKTOP */}
            <motion.div
                className="flex justify-center w-full mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.4 }}
            >
                <motion.p
                    className="text-center text-amber-800 max-w-[90vw] sm:max-w-[85vw] md:whitespace-nowrap lg:whitespace-nowrap xl:whitespace-nowrap mx-auto leading-relaxed px-2"
                    style={{ 
                        fontSize: 'clamp(0.875rem, 3.5vw, 1.25rem)',
                        lineHeight: 'clamp(1.375rem, 4.5vw, 1.75rem)'
                    }}
                >
                    Segera bergabung di grup WhatsApp untuk mendapatkan informasi selanjutnya!
                </motion.p>
            </motion.div>

            {/* WhatsApp Link - KOMPAK DI MOBILE */}
            <motion.div
                className="flex justify-center w-full mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.6 }}
            >
                <motion.a
                    href="https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-center text-teal-600 underline transition-colors hover:text-teal-800 px-2 break-all max-w-[85vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[65vw] xl:max-w-[60vw]"
                    style={{ 
                        fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                        lineHeight: 'clamp(1.125rem, 3.5vw, 1.5rem)'
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    https://chat.whatsapp.com/J3au7X2Tu7fiIS9r9RF9K5
                </motion.a>
            </motion.div>

            {/* Finish Button - KOMPAK DI MOBILE */}
            <motion.div
                className="flex justify-center w-full mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.9 }}
            >
                <motion.button
                    onClick={onFinish}
                    className="px-12 py-2.5 sm:px-16 sm:py-3 md:px-16 md:py-3.5 lg:px-14 lg:py-3 xl:px-12 xl:py-2.5 text-base sm:text-lg md:text-lg lg:text-base xl:text-sm font-semibold text-white transition-all rounded-full bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12] shadow-lg hover:from-[#CC8F12] hover:via-[#CD9514] hover:to-[#CE9C17] hover:shadow-xl"
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
            
            {/* Mobile Decoration - Bottom - LEBIH KOMPAK */}
            <div className="relative w-full mb-2 min-[480px]:hidden">
                <motion.div 
                    className="flex justify-center pt-2"
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
        </motion.div>
    );
};

export default SuccessContent;