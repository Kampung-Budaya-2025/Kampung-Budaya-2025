import { motion } from "framer-motion";

interface DataRowProps {
    label: string;
    value: React.ReactNode;
    delay?: number;
}

const DataRow = ({ label, value, delay = 0 }: DataRowProps) => (
    <motion.div 
        className="grid grid-cols-[auto_1fr] items-start gap-x-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay }}
    >
        <span className="text-gray-600">{label}</span>
        <div className="flex gap-2">
            <span className="text-gray-500">:</span>
            <span className="text-gray-800">{value || '-'}</span>
        </div>
    </motion.div>
);

export default DataRow;