import { motion } from "framer-motion";

const SuccessHeader = () => {
    return (
        <motion.header 
            className="relative z-20 w-full pt-16 mb-4 text-center sm:mb-6 lg:mb-7 xl:mb-9 sm:pt-15 lg:pt-25 xl:pt-28"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {/* Mobile only decorative flowers with animation - anchored to header (not fixed) */}
            <div className="absolute inset-x-0 -top-4 max-[360px]:-top-2 max-[320px]:top-0 w-[100%] min-[480px]:hidden pointer-events-none z-30">
                {/* Left side flowers - mentok kiri layar */}
                <motion.div 
                    className="absolute z-10 top-0 max-[360px]:top-0 max-[320px]:top-0 -left-20"
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
                    className="absolute z-10 top-2 max-[360px]:top-1 max-[320px]:top-0 left-12"
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

                {/* Right mobile-up terpisah */}
                <motion.div 
                    className="absolute z-10 top-2 max-[360px]:top-1 max-[320px]:top-0 right-12"
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

                {/* Right side flowers - mentok kanan layar */}
                <motion.div 
                    className="absolute z-10 flex flex-col items-end top-0 -right-20"
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

            <motion.div 
                className="relative px-2 mx-auto sm:px-4 max-w-fit"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
                {/* Title with centered text */}
                <div className="relative w-full pt-8 mb-2 min-[480px]:hidden">
                    {/* Title content will go here */}
                </div>
            </motion.div>
        </motion.header>
    );
};

export default SuccessHeader;
