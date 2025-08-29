import { motion } from "framer-motion";

interface FormSelectProps {
    id: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: string[];
    placeholder?: string;
    required?: boolean;
    error?: string;
    variants?: any;
}

const FormSelect = ({
    id,
    label,
    value,
    onChange,
    options,
    placeholder = "Pilih opsi",
    required = false,
    error,
    variants
}: FormSelectProps) => {
    return (
        <motion.div variants={variants}>
            <label
                htmlFor={id}
                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <select
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && (
                <motion.p
                    id={`${id}-error`}
                    className="mt-1 text-xs text-red-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {error}
                </motion.p>
            )}
        </motion.div>
    );
};

export default FormSelect;