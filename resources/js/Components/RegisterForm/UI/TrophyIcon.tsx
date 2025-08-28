import { motion } from "framer-motion";

const TrophyIcon = () => {
    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center z-30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                delay: 1.2,
                duration: 0.6, // Kurangi dari 0.8
                ease: "easeOut", // Gunakan easing yang lebih ringan
            }}
            style={{ willChange: "transform, opacity" }} // GPU optimization
        >
            <div className="relative">
                <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl"
                    animate={{
                        scale: [1, 1.05, 1], // Kurangi dari 1.1 ke 1.05
                        rotate: [0, 2, -2, 0], // Kurangi dari 5, -5 ke 2, -2
                    }}
                    transition={{
                        duration: 3, // Perlambat dari 2 ke 3
                        repeat: 2, // Batasi dari Infinity ke 2
                        repeatDelay: 5, // Perlambat repeatDelay
                        ease: "easeInOut",
                    }}
                    style={{ willChange: "transform" }}
                >
                    <motion.div
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                        animate={{
                            scale: [1, 1.1, 1], // Kurangi dari 1.2 ke 1.1
                        }}
                        transition={{
                            duration: 3,
                            repeat: 2, // Batasi repeat
                            repeatDelay: 5,
                            ease: "easeInOut",
                        }}
                        style={{ willChange: "transform" }}
                    >
                        🏆
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TrophyIcon;
