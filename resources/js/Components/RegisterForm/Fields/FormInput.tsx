import { motion, easeInOut } from "framer-motion";

interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
    error?: string;
    pattern?: string;
    inputMode?: "text" | "search" | "tel" | "email" | "none" | "url" | "numeric" | "decimal";
    variants?: any;
}

const FormInput = ({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    autoComplete,
    required = false,
    error,
    pattern,
    inputMode,
    variants
}: FormInputProps) => {
    return (
        <motion.div variants={variants}>
            <label
                htmlFor={id}
                className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                autoComplete={autoComplete}
                pattern={pattern}
                inputMode={inputMode}
                className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && (
                <motion.p
                    id={`${id}-error`}
                    className="mt-1 text-xs text-red-500"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: easeInOut }}
                >
                    {error}
                </motion.p>
            )}
        </motion.div>
    );
};

export default FormInput;