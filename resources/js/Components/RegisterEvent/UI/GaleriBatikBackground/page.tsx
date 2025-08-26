import { useRef } from "react";
import { useInView } from "framer-motion";

const GaleriBatikBackground: React.FC = () => {
    const batikBackgroundRef = useRef<HTMLImageElement | null>(null);

    const isBatikBackgroundInView = useInView(batikBackgroundRef, {
        once: false,
        margin: "0px",
        amount: 0.2,
    });

    return (
        <>
            <img
                ref={batikBackgroundRef}
                src="/background/batik-horizontal-galeri.svg"
                alt="Batik Background"
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{
                    objectFit: "cover",
                    opacity: isBatikBackgroundInView ? 1 : 0,
                    transform: isBatikBackgroundInView
                        ? "translateY(-20vh)"
                        : "translateY(-40vh)",
                    transition:
                        "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                }}
            />
        </>
    );
};

export default GaleriBatikBackground;
