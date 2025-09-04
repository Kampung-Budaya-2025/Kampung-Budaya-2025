import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG } from "@/Components/FAQ/config/constants";

interface AnimatedElementProps {
    containerClassName?: string;
    elementClassName?: string;
    transition?: string;
    src: string;
    alt: string;
    yOffset?: number; // Jarak pergeseran vertikal dalam pixel
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
    containerClassName = "w-full flex justify-center opacity-80 pointer-events-none -my-4",
    elementClassName = "w-[25vw] h-[25vw]",
    transition = "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    src,
    alt,
    yOffset = 20, // Default pergeseran 20px dari bawah
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, ANIMATION_CONFIG);

    return (
        <div ref={ref} className={containerClassName}>
            <div
                style={{
                    transform: inView
                        ? "translateY(0)"
                        : `translateY(${yOffset}px)`,
                    opacity: inView ? 1 : 0,
                    transition: transition,
                }}
            >
                <img src={src} alt={alt} className={elementClassName} />
            </div>
        </div>
    );
};

export { AnimatedElement };