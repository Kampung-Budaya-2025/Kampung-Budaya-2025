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
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <DecorativeHeader
                title={getEventTitle(eventType)}
                titleClassName="lg:my-0 my-2 font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap"
                showLeafIcons={true}
                mobileDecorationsOnly={true}
            />
        </motion.div>
    );
};

export default RegisterFormHeader;
