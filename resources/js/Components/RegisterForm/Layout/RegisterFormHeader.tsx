import DecorativeHeader from "@/Components/RegisterForm/Layout/DecorativeHeader";
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
                return "Pendaftaran Lomba Kolaborasi Musik Nusantara";
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

    const getMobileEventTitle = (eventType?: string) => {
        switch (eventType) {
            case "kolaborasi-musik":
                return "Pendaftaran Lomba Kolaborasi Musik";
            case "bazar-kebudayaan":
                return "Pendaftaran Bazar Kebudayaan";
            case "gemilang-busana-adat":
                return "Pendaftaran Lomba Gemilang Busana Adat";
            case "gelanggang-tari-nusantara":
                return "Pendaftaran Lomba Gelanggang Tari";
            case "panggung-budaya-nusantara":
                return "Pendaftaran Lomba Panggung Budaya";
            case "karya-citra-inklusif":
                return "Pendaftaran Lomba Karya Citra Inklusif";
            default:
                return "Pendaftaran Event";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <DecorativeHeader
                title={getEventTitle(eventType)}
                mobileTitle={getMobileEventTitle(eventType)}
                titleClassName="lg:my-0 my-2 font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-xl min-[510px]:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] xl:text-[2.5rem] 2xl:text-[2.75rem] bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap"
                showLeafIcons={true}
                mobileDecorationsOnly={true}
                containerClassName="px-6 min-[480px]:px-10 lg:px-0"
            />
        </motion.div>
    );
};

export default RegisterFormHeader;

