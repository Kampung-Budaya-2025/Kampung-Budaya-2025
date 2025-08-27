import { motion } from "framer-motion";
import { memo } from "react";

interface FormFieldProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    placeholder?: string;
    autoComplete?: string;
    required?: boolean;
    error?: string;
    options?: string[];
    variants?: any;
    inputMode?:
        | "text"
        | "search"
        | "email"
        | "tel"
        | "url"
        | "none"
        | "numeric"
        | "decimal";
    pattern?: string;
    ariaInvalid?: boolean;
    ariaDescribedBy?: string;
}

const FormField = memo(
    ({
        id,
        label,
        type = "text",
        value,
        onChange,
        placeholder,
        autoComplete,
        required = false,
        error,
        options,
        variants,
        inputMode,
        pattern,
        ariaInvalid,
        ariaDescribedBy,
    }: FormFieldProps) => {
        const isSelect = options && options.length > 0;

        return (
            <motion.div
                variants={variants}
                style={{ willChange: "transform, opacity" }} // GPU optimization
            >
                <label
                    htmlFor={id}
                    className="block mb-1 text-sm font-medium text-gray-700 sm:mb-2"
                >
                    {label}{" "}
                    {required && <span className="text-red-500">*</span>}
                </label>
                {isSelect ? (
                    <select
                        id={id}
                        value={value}
                        onChange={onChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                    >
                        <option value="">Pilih {label}</option>
                        {options.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={id}
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        autoComplete={autoComplete}
                        inputMode={inputMode}
                        pattern={pattern}
                        aria-invalid={ariaInvalid}
                        aria-describedby={ariaDescribedBy}
                        className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:ring-2 focus:ring-amber-300 sm:py-3 transition-all"
                    />
                )}
                {error && (
                    <motion.p
                        className="mt-1 text-xs text-red-500"
                        initial={{ opacity: 0, y: -3 }} // Kurangi dari -5
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2, // Kurangi dari 0.3
                            ease: "easeOut", // Ganti dari easeInOut
                        }}
                        style={{ willChange: "transform, opacity" }}
                    >
                        {error}
                    </motion.p>
                )}
            </motion.div>
        );
    }
);

FormField.displayName = "FormField";

export default FormField;
