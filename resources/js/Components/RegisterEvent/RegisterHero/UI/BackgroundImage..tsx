import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { ANIMATION_CONFIG } from '@/Components/FAQ/config/constants';
import { BackgroundImageProps } from '../types';

const BackgroundImage: React.FC<BackgroundImageProps> = ({
    src,
    alt,
    className,
    width,
}) => {
    const batikRef = useRef<HTMLImageElement | null>(null);
    const isBatikInView = useInView(batikRef, ANIMATION_CONFIG);

    return (
        <img
            ref={batikRef}
            src={src}
            alt={alt}
            className={`absolute pointer-events-none ${className}`}
            width={width}
            loading="lazy"
            style={{
                opacity: isBatikInView ? 1 : 0,
                transform: isBatikInView
                    ? "translateY(0)"
                    : "translateY(-40px)",
                transition:
                    "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
            }}
        />
    );
};

export default BackgroundImage;