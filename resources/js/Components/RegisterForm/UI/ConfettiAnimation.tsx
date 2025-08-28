import { motion } from "framer-motion";
import { useMemo } from "react";

const ConfettiAnimation = () => {
    // Pre-calculate positions untuk mengurangi Math.random() calls
    const confettiData = useMemo(() => {
        return Array.from({ length: 12 }, (_, i) => ({
            // Kurangi dari 20 ke 12
            id: i,
            color: ["#FFC411", "#CD9C1A", "#BD6229", "#F59E0B", "#D97706"][
                i % 5
            ],
            left: 15 + Math.random() * 70,
            top: 30 + Math.random() * 40,
            delay: Math.random() * 2 + 1, // Kurangi delay range
        }));
    }, []);

    const heartsData = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => ({
            // Kurangi dari 8 ke 5
            id: i,
            left: 15 + Math.random() * 70,
            top: 30 + Math.random() * 40,
            fontSize: 12 + Math.random() * 6, // Kurangi range
            delay: Math.random() * 2 + 1.5,
        }));
    }, []);

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ willChange: "opacity" }} // GPU optimization
        >
            {/* Confetti pieces - Optimized */}
            {confettiData.map((confetti) => (
                <motion.div
                    key={confetti.id}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: confetti.color,
                        left: `${confetti.left}%`,
                        top: `${confetti.top}%`,
                        willChange: "transform, opacity", // GPU optimization
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40], // Kurangi distance
                    }}
                    transition={{
                        duration: 2.5, // Kurangi dari 4 ke 2.5
                        repeat: 3, // Batasi repeat ke 3x instead of Infinity
                        delay: confetti.delay,
                        ease: "easeOut", // Gunakan easing yang lebih ringan
                    }}
                />
            ))}

            {/* Floating hearts - Optimized */}
            {heartsData.map((heart) => (
                <motion.div
                    key={`heart-${heart.id}`}
                    className="absolute text-red-500"
                    style={{
                        left: `${heart.left}%`,
                        top: `${heart.top}%`,
                        fontSize: `${heart.fontSize}px`,
                        willChange: "transform, opacity",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: 2, // Batasi repeat
                        delay: heart.delay,
                        ease: "easeOut",
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ConfettiAnimation;
