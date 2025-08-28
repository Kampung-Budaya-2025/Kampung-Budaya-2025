import { motion } from "framer-motion";
import { memo } from "react";

interface StepHeaderProps {
    title: string;
    subtitle: string;
}

const StepHeader = memo(({ title, subtitle }: StepHeaderProps) => {
    return (
        <motion.div
            className="mb-3 text-center sm:mb-4"
            initial={{ opacity: 0, y: -15 }} // Reduced from -20
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }} // Reduced from 0.6
        >
            <motion.h2
                className="text-center font-amaranth font-normal leading-normal tracking-[-0.03125rem] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.95 }} // Reduced from 0.9
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }} // Reduced delays and duration
            >
                {title}
            </motion.h2>
            <motion.p
                className="text-xs text-gray-600 sm:text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }} // Reduced delays and duration
            >
                {subtitle}
            </motion.p>
        </motion.div>
    );
});

// Add display name for debugging
StepHeader.displayName = "StepHeader";

export default StepHeader;
