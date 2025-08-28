import { motion } from "framer-motion";

interface SubmissionStateProps {
    isSubmitting: boolean;
    error?: string;
    onRetry?: () => void;
}

const SubmissionState = ({
    isSubmitting,
    error,
    onRetry,
}: SubmissionStateProps) => {
    if (isSubmitting) {
        return (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white rounded-xl p-8 max-w-sm mx-4 text-center shadow-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <motion.div
                        className="w-16 h-16 mx-auto mb-4 border-4 border-amber-500 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Mengirim Pendaftaran
                    </h3>
                    <p className="text-gray-600 text-sm">
                        Mohon tunggu, data Anda sedang diproses...
                    </p>
                </motion.div>
            </motion.div>
        );
    }

    if (error) {
        return (
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="bg-white rounded-xl p-8 max-w-sm mx-4 text-center shadow-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Pendaftaran Gagal
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{error}</p>
                    <button
                        onClick={onRetry}
                        className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                    >
                        Coba Lagi
                    </button>
                </motion.div>
            </motion.div>
        );
    }

    return null;
};

export default SubmissionState;
