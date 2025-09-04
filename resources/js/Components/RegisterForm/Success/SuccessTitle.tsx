import { motion } from "framer-motion";

const SuccessTitle = () => {
    return (
        <div className="relative text-center">
            {/* Mobile only decorative flowers with animation - sama seperti RegisterFormHeader */}
            <div className="relative w-full pt-8 mb-2 min-[480px]:hidden pointer-events-none">
                {/* Left side flowers - bunga left mentok kiri */}
                <motion.div 
                    className="absolute -top-20 -left-14 pointer-events-none"
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <img
                        src="/decoration/bunga-mobile-left.svg"
                        alt="Bunga Kiri"
                        className="w-32 h-32"
                    />
                    <img
                        src="/decoration/bunga-mobile-small.svg"
                        alt="Bunga Kecil Kiri"
                        className="w-10 h-8 -mt-10 ml-23 animate-spin"
                        style={{ animationDuration: '2s' }}
                    />
                </motion.div>

                {/* Left mobile-up terpisah */}
                <motion.div 
                    className="absolute -top-17 left-10 pointer-events-none"
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
                    className="flex justify-center pt-4 pointer-events-none"
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
                    className="absolute -top-17 right-10 pointer-events-none"
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

                {/* Right side flowers - bunga right mentok kanan */}
                <motion.div 
                    className="absolute flex flex-col items-end -top-20 -right-14 pointer-events-none"
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <img
                        src="/decoration/bunga-mobile-right.svg"
                        alt="Bunga Kanan"
                        className="w-32 h-32"
                    />
                    <img
                        src="/decoration/bunga-mobile-small.svg"
                        alt="Bunga Kecil Kanan"
                        className="w-10 h-8 -mt-10 mr-23 animate-spin"
                        style={{ animationDuration: '2s', animationDirection: 'reverse' }}
                    />
                </motion.div>
            </div>

            {/* Success Title dengan gradient sangat gelap dan font lebih besar */}
            <motion.h2
                className="mb-6 text-center font-samsktrigrama font-normal leading-normal tracking-[-0.03125rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                style={{
                    background: 'linear-gradient(180deg, #FFC411 0%, #CD9C1A 15%, #BD6229 35%, #5D2F24 55%, #3D1F16 75%, #2A1510 85%, #1A0F0B 95%, #0F0805 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent'
                }}
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                    delay: 0.8, 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1]
                }}
            >
                Pendaftaran Berhasil
            </motion.h2>
        </div>
    );
};

export default SuccessTitle;