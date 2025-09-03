import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG } from "@/Components/FAQ/config/constants";

interface AnimatedFlowerProps {
    containerClassName?: string;
    leftFlowerClassName?: string;
    rightFlowerClassName?: string;
    leftFlowerTransition?: string;
    rightFlowerTransition?: string;
}

const AnimatedFlower: React.FC<AnimatedFlowerProps> = ({
    containerClassName = "w-[130vw] flex justify-between opacity-30 pointer-events-none -my-8",
    leftFlowerClassName = "w-[30vw] h-[30vw] animate-spin-clockwise",
    rightFlowerClassName = "w-[30vw] h-[30vw] animate-spin-counter",
    leftFlowerTransition = "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
    rightFlowerTransition = "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
}) => {
    const ref = useRef(null);
    const inView = useInView(ref, ANIMATION_CONFIG);

    return (
        <div ref={ref} className={containerClassName}>
            <div
                style={{
                    transform: inView ? "translateX(0)" : "translateX(-100%)",
                    opacity: inView ? 1 : 0,
                    transition: leftFlowerTransition,
                }}
            >
                <img
                    src="/icon/bunga.svg"
                    alt="Bunga Kiri"
                    className={leftFlowerClassName}
                />
            </div>
            <div
                style={{
                    transform: inView ? "translateX(0)" : "translateX(100%)",
                    opacity: inView ? 1 : 0,
                    transition: rightFlowerTransition,
                }}
            >
                <img
                    src="/icon/bunga.svg"
                    alt="Bunga Kanan"
                    className={rightFlowerClassName}
                />
            </div>
        </div>
    );
};

export { AnimatedFlower };