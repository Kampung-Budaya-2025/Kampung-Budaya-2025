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
                className="absolute top-[20vh] lg:top-0 left-0 lg:w-full h-auto lg:object-cover z-0"
                style={{
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
