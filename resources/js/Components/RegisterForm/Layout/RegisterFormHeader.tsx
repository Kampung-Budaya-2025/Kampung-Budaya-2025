import { motion } from "framer-motion";

interface RegisterFormHeaderProps {
    currentStep: number;
    eventType?: string;
}

const RegisterFormHeader = ({
    currentStep,
    eventType,
}: RegisterFormHeaderProps) => {
    if (currentStep === 4) return null;

    // Function to get event title based on eventType
    const getEventTitle = (eventType?: string) => {
        switch (eventType) {
            case "kolaborasi-musik":
                return "Pendaftaran Lomba Kolaborasi Musik";
            case "bazar-kebudayaan":
                return "Pendaftaran Bazar Kebudayaan";
            case "gemilang-busana-adat":
                return "Pendaftaran Lomba Gemilang Busana Adat";
            case "gelanggang-tari-nusantara":
                return "Pendaftaran Lomba Gelanggang Tari Nusantara";
            case "panggung-budaya-nusantara":
                return "Pendaftaran Lomba Panggung Budaya Nusantara";
            case "karya-citra-inklusif":
                return "Pendaftaran Lomba Karya Citra Inklusif";
            default:
                return "Pendaftaran Event";
        }
    };

    return (
        <motion.header 
            className="relative z-20 pt-12 mb-4 text-center sm:mb-6 lg:mb-8 sm:pt-16 lg:pt-20"
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
                <div className="relative w-full pt-8 mb-2 min-[480px]:hidden">
                    {/* Left side flowers - bunga left mentok kiri */}
                    <div className="absolute -top-17 -left-14">
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
                    </div>

                    {/* Left mobile-up terpisah */}
                    <div className="absolute -top-14 left-10">
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Mobile Up Kiri"
                            className="w-24 h-20 animate-spin"
                            style={{
                                animationDuration: "4s",
                                animationDirection: "reverse",
                            }}
                        />
                    </div>

                    {/* Center mobile-up decoration dengan padding */}
                    <div className="flex justify-center pt-4">
                        <img
                            src="/decoration/mobile-up.svg"
                            alt="Dekorasi Atas Mobile"
                            className="w-[400px] h-auto"
                            style={{ maxWidth: "90vw" }}
                        />
                    </div>

                    {/* Right mobile-up terpisah */}
                    <div className="absolute -top-14 right-10">
                        <img
                            src="/decoration/bunga-mobile-up.svg"
                            alt="Mobile Up Kanan"
                            className="w-24 h-20 animate-spin"
                            style={{ animationDuration: "4s" }}
                        />
                    </div>

                    {/* Right side flowers - bunga right mentok kanan */}
                    <div className="absolute flex flex-col items-end -top-17 -right-14">
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
                    </div>
                </div>

                <div className="relative flex items-center self-stretch justify-center">
                    <div className="flex-shrink-0 mr-1 md:mr-2 lg:mr-3">
                        <img
                            src="/decoration/leaf-left.svg"
                            alt="Icon"
                            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
                        />
                    </div>

                    <h1 className="text-center lg:my-0 my-2 font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap">
                        {getEventTitle(eventType)}
                    </h1>

                    <div className="flex-shrink-0 ml-1 md:ml-2 lg:ml-3">
                        <img
                            src="/decoration/leaf-right.svg"
                            alt="Icon"
                            className="object-contain w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.header>
    );
};

export default RegisterFormHeader;
