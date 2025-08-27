import { motion, easeInOut } from "framer-motion";

const ConfettiAnimation = () => {
    return (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
        >
            {/* Confetti pieces */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: [
                            "#FFC411",
                            "#CD9C1A",
                            "#BD6229",
                            "#F59E0B",
                            "#D97706",
                        ][i % 5],
                        left: `${15 + Math.random() * 70}%`,
                        top: `${30 + Math.random() * 40}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -30, -60],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: Math.random() * 4 + 2,
                        ease: easeInOut,
                    }}
                />
            ))}

            {/* Floating hearts */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`heart-${i}`}
                    className="absolute text-red-500"
                    style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${30 + Math.random() * 40}%`,
                        fontSize: `${12 + Math.random() * 8}px`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -30, -60],
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
        </motion.div>
    );
};

export default ConfettiAnimation;
