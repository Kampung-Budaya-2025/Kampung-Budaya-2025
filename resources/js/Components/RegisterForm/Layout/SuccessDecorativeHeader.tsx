import { motion } from "framer-motion";

interface SuccessDecorativeHeaderProps {
    title: string;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
}

const SuccessDecorativeHeader = ({ 
    title,
    titleClassName = "",
    titleStyle = {}
}: SuccessDecorativeHeaderProps) => {
    return (
        <motion.header 
            className="relative z-20 pt-8 mb-2 text-center sm:mb-3 lg:mb-4 xl:mb-5 sm:pt-10 lg:pt-15 xl:pt-18"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <motion.div 
                className="relative px-2 mx-auto sm:px-4 max-w-fit"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
                {/* Mobile only decorative flowers with animation */}
                <div className="relative w-full pt-0 -mt-16 mb-2 overflow-visible min-[480px]:hidden">
                    {/* Left side flowers - NAIKKAN SEDIKIT */}
                    <motion.div 
                        className="fixed -top-40 -left-28"
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Bunga Mobile Up Kiri"
                            className="w-32 h-32 animate-spin"
                            style={{ animationDuration: '9s', animationDirection: 'reverse' }}
                        />
                        <img
                            src="/decoration/bunga-mobile-small.svg"
                            alt="Bunga Kecil Kiri"
                            className="w-10 h-8 -mt-10 ml-30 animate-spin"
                            style={{ animationDuration: '7s' }}
                        />
                    </motion.div>

                    {/* Left mobile-up terpisah - NAIKKAN SEDIKIT */}
                    <motion.div 
                        className="fixed -top-36 left-4"
                        initial={{ opacity: 0, y: -30, rotate: -20 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Mobile Up Kiri"
                            className="w-24 h-20 animate-spin"
                            style={{ animationDuration: '10s', animationDirection: 'reverse' }}
                        />
                    </motion.div>

                    {/* Center mobile-up decoration */}
                    <motion.div 
                        className="fixed left-1/2 -translate-x-1/2 pt-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/mobile-up.svg"
                            alt="Dekorasi Atas Mobile"
                            className="w-[320px] h-auto"
                            style={{ maxWidth: "85vw" }}
                        />
                    </motion.div>

                    {/* Right mobile-up terpisah - NAIKKAN SEDIKIT */}
                    <motion.div 
                        className="fixed -top-36 right-4"
                        initial={{ opacity: 0, y: -30, rotate: 20 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Mobile Up Kanan"
                            className="w-24 h-20 animate-spin"
                            style={{ animationDuration: '10s' }}
                        />
                    </motion.div>

                    {/* Right side flowers - NAIKKAN SEDIKIT */}
                    <motion.div 
                        className="fixed flex flex-col items-end -top-40 -right-28"
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Bunga Mobile Up Kanan"
                            className="w-32 h-32 animate-spin"
                            style={{ animationDuration: '9s' }}
                        />
                        <img
                            src="/decoration/bunga-mobile-small.svg"
                            alt="Bunga Kecil Kanan"
                            className="w-10 h-8 -mt-10 mr-30 animate-spin"
                            style={{ animationDuration: '7s', animationDirection: 'reverse' }}
                        />
                    </motion.div>
                </div>

                {/* Title dengan spacing yang lebih dekat ke maskot */}
                <div className="mt-8 sm:mt-12 md:mt-20 lg:mt-16 xl:mt-12">
                    <motion.h1
                        className={`text-center ${titleClassName}`}
                        style={titleStyle}
                        initial={{ opacity: 0, y: -30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                            delay: 0.8, 
                            duration: 0.8, 
                            ease: [0.25, 0.1, 0.25, 1]
                        }}
                    >
                        {title}
                    </motion.h1>
                </div>
            </motion.div>
        </motion.header>
    );
};

export default SuccessDecorativeHeader;
