import { motion } from "framer-motion";
import { memo } from "react";

interface StepHeaderProps {
    title: string;
    subtitle: string;
}

const StepHeader = memo(({ title, subtitle }: StepHeaderProps) => {
    return (
        <motion.div
            className="mb-1 text-center sm:mb-2"
            initial={{ opacity: 0, y: -15 }} // Reduced from -20
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }} // Reduced from 0.6
        >
            <motion.h2
                className="text-center font-amaranth font-normal leading-normal tracking-[-0.03125rem] text-lg sm:text-xl md:text-2xl lg:text-3xl mb-0 bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.95 }} // Reduced from 0.9
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }} // Reduced delays and duration
            >
                {title}
            </motion.h2>
            <motion.div
                className="-mt-1 text-xs sm:text-sm md:text-base sm:-mt-1"
                style={{ color: '#7A4D17' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <p className="mb-5">
                    {subtitle}
                </p>
                <div className="w-full h-px bg-[#7A4D17] opacity-30 mb-3"></div>
            </motion.div>
        </motion.div>
    );
});

// Add display name for debugging
StepHeader.displayName = "StepHeader";

export default StepHeader;
