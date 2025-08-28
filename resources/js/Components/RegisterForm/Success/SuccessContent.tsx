import { motion } from "framer-motion";

interface SuccessContentProps {
    onFinish: () => void;
}

const SuccessContent = ({ onFinish }: SuccessContentProps) => {
    return (
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
                    onClick={onFinish}
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
            
            {/* Mobile Decoration - Bottom */}
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
    );
};

export default SuccessContent;