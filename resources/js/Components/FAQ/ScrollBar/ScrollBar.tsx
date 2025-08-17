import React, { useEffect, useRef, useState } from "react";
import {
    animate,
    motion,
    useMotionValue,
    useMotionValueEvent,
    useTransform,
} from "motion/react";

const MAX_OVERFLOW = 50;

interface ScrollBarProps {
    defaultValue?: number;
    startingValue?: number;
    maxValue?: number;
    className?: string;
    isStepped?: boolean;
    stepSize?: number;
    onValueChange?: (value: number) => void;
}

const Scrollbar: React.FC<ScrollBarProps> = ({
    defaultValue = 50,
    startingValue = 0,
    maxValue = 100,
    className = "",
    isStepped = false,
    stepSize = 1,
    onValueChange,
}) => {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 h-[300px] ${className}`}
        >
            <Slider
                defaultValue={defaultValue}
                startingValue={startingValue}
                maxValue={maxValue}
                isStepped={isStepped}
                stepSize={stepSize}
                onValueChange={onValueChange}
            />
        </div>
    );
};

interface SliderProps {
    defaultValue: number;
    startingValue: number;
    maxValue: number;
    isStepped: boolean;
    stepSize: number;
    onValueChange?: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({
    defaultValue,
    startingValue,
    maxValue,
    isStepped,
    stepSize,
    onValueChange,
}) => {
    const [value, setValue] = useState<number>(defaultValue);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [region, setRegion] = useState<"top" | "middle" | "bottom">("middle");
    const clientY = useMotionValue(0);
    const overflow = useMotionValue(0);
    const scale = useMotionValue(1);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    // Function untuk update value dan trigger callback
    const updateValue = (newValue: number) => {
        setValue(newValue);
        onValueChange?.(newValue);
    };

    useMotionValueEvent(clientY, "change", (latest: number) => {
        if (sliderRef.current) {
            const { top, bottom } = sliderRef.current.getBoundingClientRect();
            let newValue: number;
            if (latest < top) {
                setRegion("top");
                newValue = top - latest;
            } else if (latest > bottom) {
                setRegion("bottom");
                newValue = latest - bottom;
            } else {
                setRegion("middle");
                newValue = 0;
            }
            overflow.jump(decay(newValue, MAX_OVERFLOW));
        }
    });

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.buttons > 0 && sliderRef.current && isDragging) {
            const { top, height } = sliderRef.current.getBoundingClientRect();
            let newValue =
                startingValue +
                ((e.clientY - top) / height) * (maxValue - startingValue);

            if (isStepped) {
                newValue = Math.round(newValue / stepSize) * stepSize;
            }

            const clampedValue = Math.min(
                Math.max(newValue, startingValue),
                maxValue
            );

            if (
                clampedValue !== value &&
                clampedValue >= startingValue &&
                clampedValue <= maxValue
            ) {
                updateValue(clampedValue);
                clientY.jump(e.clientY);
            }
        }
    };

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (sliderRef.current) {
            const { top, height } = sliderRef.current.getBoundingClientRect();
            const currentPosition =
                startingValue +
                ((e.clientY - top) / height) * (maxValue - startingValue);

            if (currentPosition >= startingValue && currentPosition <= maxValue) {
                setIsDragging(true);
                handlePointerMove(e);
                e.currentTarget.setPointerCapture(e.pointerId);
            }
        }
    };

    const handlePointerUp = () => {
        setIsDragging(false);
        animate(overflow, 0, { type: "spring", bounce: 0.5 });
    };

    const getRangePercentage = (): number => {
        const totalRange = maxValue - startingValue;
        if (totalRange === 0) return 0;
        return ((value - startingValue) / totalRange) * 100;
    };

    const isAtMinimum = value <= startingValue;
    const isAtMaximum = value >= maxValue;

    return (
        <>
            <motion.div
                onHoverStart={() => animate(scale, 1)}
                onHoverEnd={() => animate(scale, 1)}
                onTouchStart={() => animate(scale, 1)}
                onTouchEnd={() => animate(scale, 1)}
                style={{
                    scale,
                    opacity: 1,
                }}
                className={`flex h-full touch-none select-none items-center justify-center relative ${
                    (isAtMinimum || isAtMaximum) && !isDragging
                        ? "cursor-not-allowed"
                        : "cursor-grab"
                }`}
            >
                <div
                    ref={sliderRef}
                    className={`relative flex h-full max-h-[300px] flex-col touch-none select-none justify-center px-4 ${
                        isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}
                    onPointerMove={handlePointerMove}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                >
                    <motion.div
                        style={{
                            scaleY: useTransform(() => {
                                if (sliderRef.current) {
                                    const { height } =
                                        sliderRef.current.getBoundingClientRect();
                                    return 1 + overflow.get() / height;
                                }
                                return 1;
                            }),
                            scaleX: useTransform(
                                overflow,
                                [0, MAX_OVERFLOW],
                                [1, 0.8]
                            ),
                            transformOrigin: useTransform(() => {
                                if (sliderRef.current) {
                                    const { top, height } =
                                        sliderRef.current.getBoundingClientRect();
                                    return clientY.get() < top + height / 2
                                        ? "bottom"
                                        : "top";
                                }
                                return "center";
                            }),
                            width: useTransform(scale, [1, 1], [8, 8]),
                            marginLeft: useTransform(scale, [1, 1.1], [0, -2]),
                            marginRight: useTransform(scale, [1, 1.1], [0, -2]),
                        }}
                        className="flex flex-col flex-grow"
                    >
                        <div className="relative w-full flex-grow overflow-visible rounded-full bg-[#CD9C1A]">
                            <div className="relative w-full h-full overflow-visible">
                                {/* Progress bar */}
                                <div
                                    className="absolute w-full bg-[#3F170D] rounded-full"
                                    style={{
                                        height: `${getRangePercentage()}%`,
                                        top: 0,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SVG Bunga Handle */}
                <img
                    src="/icon/bunga-scroll.svg"
                    alt="Bunga Handle"
                    className="absolute w-12 h-12 z-30 opacity-100"
                    style={{
                        top: `calc(${getRangePercentage()}% - 24px)`,
                        left: "50%",
                        transform: "translateX(-50%)",
                        pointerEvents: "none",
                        filter: "none",
                    }}
                />
            </motion.div>
        </>
    );
};

function decay(value: number, max: number): number {
    if (max === 0) {
        return 0;
    }
    const entry = value / max;
    const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);
    return sigmoid * max;
}

export default Scrollbar;
