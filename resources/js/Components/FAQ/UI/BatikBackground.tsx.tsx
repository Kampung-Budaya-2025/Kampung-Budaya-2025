import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG } from "../hooks/refs/page";

const BatikBackground: React.FC = () => {
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
                src="/background/batik-horizontal.svg"
                alt="Batik Background"
                className="absolute top-0 left-0 w-full min-h-[60px] h-auto z-0 pointer-events-none hidden sm:block"
                style={{
                    objectFit: "cover",
                    opacity: isBatikTopInView ? 1 : 0,
                    transform: isBatikTopInView
                        ? "translateY(0)"
                        : "translateY(-40px)",
                    transition:
                        "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                }}
            />

            {/* Background Batik Bottom - Hidden on mobile */}
            <img
                ref={batikBottomRef}
                src="/background/batik-horizontal.svg"
                alt="Batik Background Bottom"
                className="absolute left-0 bottom-0 w-full min-h-[60px] h-auto z-0 pointer-events-none rotate-180 hidden sm:block"
                style={{
                    objectFit: "cover",
                    opacity: isBatikBottomInView ? 1 : 0,
                    transform: isBatikBottomInView
                        ? "translateY(0)"
                        : "translateY(-80px)", // Samakan dengan batik top
                    transition:
                        "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)", // Samakan dengan batik top
                }}
            />

            {/* Mobile Batik Background - Only show on mobile */}
            <img
                ref={batikMobileRef}
                src="/background/batik-horizontal-mobile.svg"
                alt="Batik Background Mobile"
                className="absolute left-0 bottom-0 w-full min-h-[40px] h-auto z-0 pointer-events-none block sm:hidden"
                style={{
                    objectFit: "cover",
                    opacity: isBatikMobileInView ? 1 : 0,
                    transform: isBatikMobileInView
                        ? "translateY(0)"
                        : "translateY(80px)",
                    transition:
                        "opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                }}
            />
        </>
    );
};

export default BatikBackground;