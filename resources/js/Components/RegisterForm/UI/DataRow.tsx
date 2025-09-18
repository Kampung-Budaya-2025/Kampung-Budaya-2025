import { motion } from "framer-motion";

interface DataRowProps {
    label: string;
    value: React.ReactNode;
    delay?: number;
    className?: string;
}

const DataRow = ({ label, value, delay = 0, className }: DataRowProps) => (
    <motion.div 
        className={className || "flex items-start py-1 min-w-0"}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
    >
        <span 
            className="font-medium min-w-[120px] sm:min-w-[140px] md:min-w-[160px] flex-shrink-0 bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent"
        >
            {label}
        </span>
        <span className="flex-shrink-0 mx-3 text-gray-500">:</span>
        <span className="flex-1 text-gray-900 break-words min-w-0">
            {value || '-'}
        </span>
    </motion.div>
);

export default DataRow;