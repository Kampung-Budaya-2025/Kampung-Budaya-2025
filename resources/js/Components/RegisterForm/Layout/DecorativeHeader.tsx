import { motion } from "framer-motion";

interface DecorativeHeaderProps {
    title: string;
    mobileTitle?: string; // Optional mobile title
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
    showLeafIcons?: boolean;
    containerClassName?: string;
    mobileDecorationsOnly?: boolean;
}

const DecorativeHeader = ({ 
    title,
    mobileTitle,
    titleClassName = "",
    titleStyle = {},
    showLeafIcons = false,
    containerClassName = "",
    mobileDecorationsOnly = true
}: DecorativeHeaderProps) => {
    return (
        <motion.header 
            className={`relative z-20 pt-16 mb-4 text-center sm:mb-6 lg:mb-7 xl:mb-9 sm:pt-15 lg:pt-25 xl:pt-28 ${containerClassName}`}
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
                <div className={`relative w-full pt-8 mb-2 ${mobileDecorationsOnly ? 'min-[480px]:hidden' : ''}`}>
                    {/* Left side flowers - bunga mobile-up dengan bunga small */}
                    <motion.div 
                        className="absolute -top-18 -left-20"
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Bunga Mobile Up Kiri"
                            className="w-32 h-32 animate-spin"
                            style={{ animationDuration: '3s', animationDirection: 'reverse' }}
                        />
                        <img
                            src="/decoration/bunga-mobile-small.svg"
                            alt="Bunga Kecil Kiri"
                            className="w-10 h-8 -mt-10 ml-30 animate-spin"
                            style={{ animationDuration: '2s' }}
                        />
                    </motion.div>

                    {/* Left mobile-up terpisah */}
                    <motion.div 
                        className="absolute -top-18 left-10"
                        initial={{ opacity: 0, y: -30, rotate: -20 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Mobile Up Kiri"
                            className="w-24 h-20 animate-spin"
                            style={{ animationDuration: '4s', animationDirection: 'reverse' }}
                        />
                    </motion.div>

                    {/* Center mobile-up decoration dengan padding */}
                    <motion.div 
                        className="flex justify-center pt-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/mobile-up.svg"
                            alt="Dekorasi Atas Mobile"
                            className="w-[400px] h-auto"
                            style={{ maxWidth: "90vw" }}
                        />
                    </motion.div>

                    {/* Right mobile-up terpisah */}
                    <motion.div 
                        className="absolute -top-18 right-10"
                        initial={{ opacity: 0, y: -30, rotate: 20 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Mobile Up Kanan"
                            className="w-24 h-20 animate-spin"
                            style={{ animationDuration: '4s' }}
                        />
                    </motion.div>

                    {/* Right side flowers - STRUKTUR SAMA DENGAN YANG SUDAH DIPERBAIKI */}
                    <motion.div 
                        className="absolute flex flex-col items-end -top-18 -right-20"
                        initial={{ opacity: 0, x: 50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Bunga Mobile Up Kanan"
                            className="w-32 h-32 animate-spin"
                            style={{ animationDuration: '3s' }}
                        />
                        <img
                            src="/decoration/bunga-mobile-small.svg"
                            alt="Bunga Kecil Kanan"
                            className="w-10 h-8 -mt-10 mr-30 animate-spin"
                            style={{ animationDuration: '2s', animationDirection: 'reverse' }}
                        />
                    </motion.div>
                </div>

                {/* Title with optional leaf icons */}
                <div className="relative flex items-center self-stretch justify-center">
                    {showLeafIcons && (
                        <div className="flex-shrink-0 mr-1 md:mr-2 lg:mr-3">
                            <img
                                src="/decoration/leaf-left.svg"
                                alt="Icon"
                                className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
                            />
                        </div>
                    )}

                    {/* Desktop Title */}
                    <motion.h1
                        className={`text-center ${titleClassName} ${mobileTitle ? 'hidden min-[480px]:block' : ''}`}
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

                    {/* Mobile Title (if provided) */}
                    {mobileTitle && (
                        <motion.h1
                            className={`text-center ${titleClassName} min-[480px]:hidden`}
                            style={titleStyle}
                            initial={{ opacity: 0, y: -30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                delay: 0.8, 
                                duration: 0.8, 
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >
                            {mobileTitle}
                        </motion.h1>
                    )}

                    {showLeafIcons && (
                        <div className="flex-shrink-0 ml-1 md:ml-2 lg:ml-3">
                            <img
                                src="/decoration/leaf-right.svg"
                                alt="Icon"
                                className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
                            />
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.header>
    );
};

export default DecorativeHeader;