import { motion } from "framer-motion";

const SuccessTitle = () => {
    return (
        <div className="text-center">
            {/* Mobile Decoration - Top */}
            <motion.img
                src="/decoration/mobile-up.svg"
                alt="Mobile decoration top"
                className="block w-auto h-12 mx-auto mb-4 sm:hidden"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    delay: 0.3, 
                    duration: 0.6, 
                    ease: [0.25, 0.1, 0.25, 1]
                }}
            />

            {/* Success Title dengan gradient sangat gelap dan font lebih besar */}
            <motion.h2
                className="mb-8 text-center font-samsktrigrama font-normal leading-normal tracking-[-0.03125rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
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
                    delay: 0.5, 
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