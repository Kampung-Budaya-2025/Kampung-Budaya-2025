import { motion } from "framer-motion";
import { memo, useCallback } from "react";
import { RegistrationFormData } from "../types/registration";
import StepHeader from "../UI/StepHeader";

interface EventTypeSelectorProps {
    formData: RegistrationFormData;
    onDataChange: (field: keyof RegistrationFormData, value: string) => void;
}

const EventTypeSelector = memo(
    ({ formData, onDataChange }: EventTypeSelectorProps) => {
        const eventTypes = [
            {
                id: "kolaborasi-musik",
                title: "Kolaborasi Musik",
                description:
                    "Lomba yang mempresentasikan dan menampilkan busana tradisional khas daerahnya.",
                icon: "/icon/kolaborasi-musik.svg",
            },
            {
                id: "bazar-kebudayaan",
                title: "Bazar Kebudayaan",
                description:
                    "Pameran dan penjualan produk kebudayaan lokal dari berbagai daerah di Indonesia.",
                icon: "/icon/bazar-kebudayaan.svg",
            },
            {
                id: "fashion-show",
                title: "Fashion Show",
                description:
                    "Pertunjukan busana tradisional dengan konsep modern.",
                icon: "/icon/fashion-show.svg",
            },
        ];

        const handleEventTypeSelect = useCallback(
            (eventType: string) => {
                onDataChange("eventType", eventType);
            },
            [onDataChange]
        );

        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                },
            },
        };

        const itemVariants = {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" as const },
            },
        };

        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <StepHeader
                    title="Pilih Event"
                    subtitle="Pilih jenis event yang ingin Anda ikuti"
                />

                <motion.div
                    className="mt-6 space-y-4"
                    variants={containerVariants}
                >
                    {eventTypes.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={itemVariants}
                            className={`
                                relative p-6 border-2 rounded-xl cursor-pointer transition-all duration-200
                                ${
                                    formData.eventType === event.id
                                        ? "border-amber-400 bg-amber-50/50 shadow-lg"
                                        : "border-gray-200 hover:border-amber-300 hover:bg-amber-50/20"
                                }
                            `}
                            onClick={() => handleEventTypeSelect(event.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={event.icon}
                                    alt={event.title}
                                    className="w-12 h-12 object-contain"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {event.description}
                                    </p>
                                </div>
                                <div
                                    className={`
                                    w-6 h-6 rounded-full border-2 transition-all duration-200
                                    ${
                                        formData.eventType === event.id
                                            ? "border-amber-400 bg-amber-400"
                                            : "border-gray-300"
                                    }
                                `}
                                >
                                    {formData.eventType === event.id && (
                                        <motion.div
                                            className="w-full h-full rounded-full bg-white"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 0.6 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        );
    }
);

EventTypeSelector.displayName = "EventTypeSelector";

export default EventTypeSelector;
