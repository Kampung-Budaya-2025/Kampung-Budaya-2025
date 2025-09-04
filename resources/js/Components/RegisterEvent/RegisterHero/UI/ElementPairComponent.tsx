import React from 'react';
import { ElementPair, ElementPosition } from '../types';

interface ElementPairComponentProps {
    pair: ElementPair;
}

const ElementPairComponent: React.FC<ElementPairComponentProps> = ({ pair }) => {
    // Tentukan jenis animasi berdasarkan rotateAmount
    const getAnimationName = (element: ElementPosition, side: 'left' | 'right') => {
        if (element.rotateAmount) {
            return side === 'left' 
                ? `floatWithRotate-${element.floatDistance}-${element.rotateAmount}` 
                : `floatWithRotateRight-${element.floatDistance}-${element.rotateAmount}`;
        }
        return side === 'left'
            ? `floatSmooth-${element.floatDistance}`
            : `floatSmoothRight-${element.floatDistance}`;
    };

    return (
        <>
            {/* Element Kiri */}
            <img
                ref={pair.kiri.ref}
                src={pair.kiri.src}
                alt={pair.kiri.alt}
                className={pair.kiri.className}
                style={{
                    opacity: pair.kiri.isInView ? 1 : 0,
                    transform: pair.kiri.isInView
                        ? "translateX(0) translateY(0)"
                        : `translateX(-${pair.kiri.translateDistance}px) translateY(0)`,
                    transition: `opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kiri.transitionDelay}, transform ${pair.kiri.transitionDuration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kiri.transitionDelay}`,
                    animation: pair.kiri.isInView 
                        ? `${getAnimationName(pair.kiri, 'left')} ${pair.kiri.floatDuration} ease-in-out infinite` 
                        : 'none',
                    animationDelay: pair.kiri.isInView ? `calc(${pair.kiri.transitionDuration} + 0.3s)` : '0s',
                    animationFillMode: 'both',
                }}
            />

            {/* Element Kanan */}
            <img
                ref={pair.kanan.ref}
                src={pair.kanan.src}
                alt={pair.kanan.alt}
                className={pair.kanan.className}
                style={{
                    opacity: pair.kanan.isInView ? 1 : 0,
                    transform: pair.kanan.isInView
                        ? "translateX(0) translateY(0)"
                        : `translateX(-${pair.kanan.translateDistance}px) translateY(0)`,
                    transition: `opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kanan.transitionDelay}, transform ${pair.kanan.transitionDuration} cubic-bezier(0.25, 0.46, 0.45, 0.94) ${pair.kanan.transitionDelay}`,
                    animation: pair.kanan.isInView 
                        ? `${getAnimationName(pair.kanan, 'right')} ${pair.kanan.floatDuration} ease-in-out infinite` 
                        : 'none',
                    animationDelay: pair.kanan.isInView ? `calc(${pair.kanan.transitionDuration} + 0.3s)` : '0s',
                    animationFillMode: 'both',
                }}
            />
        </>
    );
};

export default ElementPairComponent;