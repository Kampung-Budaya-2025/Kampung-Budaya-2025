import { motion } from "framer-motion";

interface DataRowProps {
    label: string;
    value: React.ReactNode;
    delay?: number;
    className?: string;
}

const DataRow = ({ label, value, delay = 0, className }: DataRowProps) => {
    const baseClass =
        "grid grid-cols-[minmax(0,120px)_auto_1fr] sm:grid-cols-[minmax(0,140px)_auto_1fr] md:grid-cols-[minmax(0,160px)_auto_1fr] items-start gap-x-2 sm:gap-x-3 py-1 min-w-0";

    return (
        <motion.div
            className={className ? `${baseClass} ${className}` : baseClass}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay }}
        >
            <span
                className="font-medium min-w-[120px] sm:min-w-[140px] md:min-w-[160px] flex-shrink-0 bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent"
            >
                {label}
            </span>
            <span className="self-start text-gray-500">:</span>
            <span className="text-gray-900 break-words min-w-0">
                {value || '-'}
            </span>
        </motion.div>
    );
};

export default DataRow;
