import { motion } from "framer-motion";

interface StepHeaderProps {
    title: string;
    subtitle: string;
}

const StepHeader = ({ title, subtitle }: StepHeaderProps) => {
    return (
        <motion.div
            className="mb-3 text-center sm:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h2
                className="text-center font-amaranth font-normal leading-normal tracking-[-0.03125rem] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-xs text-gray-600 sm:text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {subtitle}
            </motion.p>
        </motion.div>
    );
};

export default StepHeader;