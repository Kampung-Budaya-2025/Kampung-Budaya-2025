import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

interface StepperItemProps {
    step: number;
    isCompleted?: boolean;
    isActive?: boolean;
}

const StepperItem = ({
    step,
    isCompleted = false,
    isActive = false,
}: StepperItemProps) => {
    const getStatusClasses = () => {
        if (isActive) {
            return "bg-gradient-to-b from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white";
        }
        if (isCompleted) {
            return "bg-gradient-to-b from-[#CE9C17] via-[#CD9514] to-[#CC8F12] text-white";
        }
        return "bg-[#EFF0F6] text-gray-400";
    };

    const renderStepContent = () => {
        if (isCompleted) {
            return (
                <MdCheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
            );
        }
        if (isActive) {
            return (
                <motion.span
                    className="text-xs font-bold text-white sm:text-xs"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    {step}
                </motion.span>
            );
        }
        return (
            <span className="text-xs font-bold text-gray-400 sm:text-xs">
                {step}
            </span>
        );
    };

    return (
        <motion.div
            className={`${!isActive && !isCompleted && "opacity-70"}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: step * 0.1 }}
        >
            <motion.div
                className={`flex items-center justify-center rounded-full h-5 w-5 sm:h-6 sm:w-6 transition-all duration-300 shadow-sm ${getStatusClasses()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
            >
                {renderStepContent()}
            </motion.div>
        </motion.div>
    );
};

interface ManualStepperProps {
    currentStep: number;
}

const ManualStepper = ({ currentStep }: ManualStepperProps) => {
    const getConnectorColor = (stepIndex: number) => {
        if (currentStep > stepIndex) {
            return "bg-gradient-to-r from-[#CE9C17] via-[#CD9514] to-[#CC8F12]";
        }
        return "bg-[#EFF0F6]";
    };

    // Step labels for display
    const stepLabels = ["Data", "Upload", "Konfirmasi"];

    return (
        <motion.div
            className="flex items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            {/* Step 1 - Data Diri */}
            <div className="text-center">
                <StepperItem
                    step={1}
                    isCompleted={currentStep > 1}
                    isActive={currentStep === 1}
                />
                <span className="text-xs text-gray-500 mt-1 block">
                    {stepLabels[0]}
                </span>
            </div>

            {/* Connector Line 1 */}
            <motion.div
                className={`h-1 flex-1 min-w-8 max-w-12 sm:min-w-12 sm:max-w-16 transition-all duration-500 rounded-full ${getConnectorColor(
                    1
                )}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* Step 2 - Upload */}
            <div className="text-center">
                <StepperItem
                    step={2}
                    isCompleted={currentStep > 2}
                    isActive={currentStep === 2}
                />
                <span className="text-xs text-gray-500 mt-1 block">
                    {stepLabels[1]}
                </span>
            </div>

            {/* Connector Line 2 */}
            <motion.div
                className={`h-1 flex-1 min-w-8 max-w-12 sm:min-w-12 sm:max-w-16 transition-all duration-500 rounded-full ${getConnectorColor(
                    2
                )}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />

            {/* Step 3 - Konfirmasi */}
            <div className="text-center">
                <StepperItem
                    step={3}
                    isCompleted={currentStep > 3}
                    isActive={currentStep === 3}
                />
                <span className="text-xs text-gray-500 mt-1 block">
                    {stepLabels[2]}
                </span>
            </div>
        </motion.div>
    );
};

export default ManualStepper;
