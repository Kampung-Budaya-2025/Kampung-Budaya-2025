import { motion } from "framer-motion";

interface DataRowProps {
    label: string;
    value: React.ReactNode;
    delay?: number;
    className?: string;
}

const DataRow = ({ label, value, delay = 0, className }: DataRowProps) => (
    <motion.div 
        className={className || "flex items-start py-1"}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
    >
        <span className="text-gray-700 font-medium min-w-[140px] sm:min-w-[160px] flex-shrink-0">
            {label}
        </span>
        <span className="flex-shrink-0 mx-3 text-gray-500">:</span>
        <span className="flex-1 text-gray-900 break-words">
            {value || '-'}
        </span>
    </motion.div>
);

export default DataRow;