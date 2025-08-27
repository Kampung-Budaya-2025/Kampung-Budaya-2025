import { motion } from "framer-motion";

interface MascotWithSpeechProps {
    side: "left" | "right";
    mascotSrc: string;
    speechText: string;
    delay: number;
}

const MascotWithSpeech = ({
    side,
    mascotSrc,
    speechText,
    delay,
}: MascotWithSpeechProps) => {
    const isLeft = side === "left";

    return (
        <motion.div
            className={`relative z-20 ${isLeft ? "mr-6" : "ml-6"}`}
            initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                delay,
                duration: 0.6, // Kurangi dari 0.8
                ease: "easeOut", // Gunakan easing yang lebih ringan
            }}
            style={{ willChange: "transform, opacity" }}
        >
            <motion.div
                animate={{
                    y: [0, -5, 0], // Kurangi dari -8 ke -5
                }}
                transition={{
                    duration: 4, // Perlambat dari 3 ke 4
                    ease: "easeInOut",
                    repeat: 3, // Batasi dari Infinity ke 3
                    repeatDelay: 2, // Tambah repeatDelay
                    delay: delay + 0.5,
                }}
                style={{ willChange: "transform" }}
            >
                <img
                    src={mascotSrc}
                    alt={`Maskot ${side}`}
                    className="h-auto w-28 sm:w-36 md:w-44 lg:w-48 xl:w-56"
                />
            </motion.div>

            {/* Speech Bubble */}
            <motion.div
                className={`absolute -top-8 ${
                    isLeft ? "-left-6 sm:-left-8" : "-right-6 sm:-right-8"
                }`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    delay: delay + 0.7,
                    duration: 0.4, // Kurangi dari 0.5
                    ease: "easeOut",
                }}
                style={{ willChange: "transform, opacity" }}
            >
                <div className="relative">
                    <div className="px-3 py-2 text-xs font-bold text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)]">
                        {speechText}
                    </div>
                    <div
                        className={`absolute w-2 h-2 transform rotate-45 bottom-[-4px] ${
                            isLeft ? "left-6" : "right-6"
                        } bg-[#CC8F12]`}
                    ></div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MascotWithSpeech;
