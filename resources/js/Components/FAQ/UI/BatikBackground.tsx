import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG } from "../config/constants";

type BatikBackgroundProps = {
    topClassName?: string;
    bottomClassName?: string;
    mobileClassName?: string;
    topStyle?: React.CSSProperties;
    bottomStyle?: React.CSSProperties;
    mobileStyle?: React.CSSProperties;
    topSrc?: string;
    bottomSrc?: string;
    mobileSrc?: string;
};

const BatikBackground: React.FC<BatikBackgroundProps> = ({
    topClassName = "absolute top-0 left-0 w-full min-h-[60px] h-auto z-0 pointer-events-none hidden sm:block",
    bottomClassName = "absolute left-0 bottom-0 w-full min-h-[60px] h-auto z-0 pointer-events-none rotate-180 hidden sm:block",
    mobileClassName = "absolute left-0 bottom-0 w-full min-h-[40px] h-auto z-0 pointer-events-none block sm:hidden",
    topStyle,
    bottomStyle,
    mobileStyle,
    topSrc = "/background/batik-horizontal.svg",
    bottomSrc = "/background/batik-horizontal.svg",
    mobileSrc = "/background/batik-horizontal-mobile.svg",
}) => {
    const batikTopRef = useRef<HTMLImageElement | null>(null);
    const batikBottomRef = useRef<HTMLImageElement | null>(null);
    const batikMobileRef = useRef<HTMLImageElement | null>(null);
    const isBatikTopInView = useInView(batikTopRef, ANIMATION_CONFIG);
    const isBatikBottomInView = useInView(batikBottomRef, ANIMATION_CONFIG);
    const isBatikMobileInView = useInView(batikMobileRef, ANIMATION_CONFIG);

    return (
        <>
            {/* Background Batik Top - Hidden on mobile */}
            <img
                ref={batikTopRef}
                src={topSrc}
                alt="Batik Background"
                className={topClassName}
                style={{
                    objectFit: "cover",
                    opacity: isBatikTopInView ? 1 : 0,
                    transform: isBatikTopInView
                        ? "translateY(0)"
                        : "translateY(-40px)",
                    transition:
                        "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                    ...topStyle,
                }}
            />

            {/* Background Batik Bottom - Hidden on mobile */}
            <img
                ref={batikBottomRef}
                src={bottomSrc}
                alt="Batik Background Bottom"
                className={bottomClassName}
                style={{
                    objectFit: "cover",
                    opacity: isBatikBottomInView ? 1 : 0,
                    transform: isBatikBottomInView
                        ? "translateY(0)"
                        : "translateY(-80px)",
                    transition:
                        "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                    ...bottomStyle,
                }}
            />

            {/* Mobile Batik Background - Only show on mobile */}
            <img
                ref={batikMobileRef}
                src={mobileSrc}
                alt="Batik Background Mobile"
                className={mobileClassName}
                style={{
                    objectFit: "cover",
                    opacity: isBatikMobileInView ? 1 : 0,
                    transform: isBatikMobileInView
                        ? "translateY(0)"
                        : "translateY(80px)",
                    transition:
                        "opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                    ...mobileStyle,
                }}
            />
        </>
    );
};

export default BatikBackground;
