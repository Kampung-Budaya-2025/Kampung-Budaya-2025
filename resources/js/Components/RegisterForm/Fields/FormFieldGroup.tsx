import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FormFieldGroupProps {
    children: ReactNode;
    columns?: 1 | 2;
    variants?: any;
}

const FormFieldGroup = ({ 
    children, 
    columns = 1, 
    variants 
}: FormFieldGroupProps) => {
    const gridClass = columns === 2 
        ? "grid grid-cols-1 gap-4 md:grid-cols-2" 
        : "w-full";

    return (
        <motion.div className={gridClass} variants={variants}>
            {children}
        </motion.div>
    );
};

export default FormFieldGroup;