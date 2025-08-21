interface FlowerInitialPosition {
    x: number;
    y: number;
    rotation?: number;
    scale?: number;
}

interface FlowerPosition {
    ref: React.RefObject<HTMLImageElement | null>;
    isInView: boolean;
    size: number;
    translateDistance: number;
    transitionDuration: string;
    animationClass: string;
    initialPosition?: FlowerInitialPosition;
}

// Components
const FlowerPair: React.FC<{
    level: string;
    flowers: { kiri: FlowerPosition; kanan: FlowerPosition };
    containerClass: string;
    wrapperClass: string;
}> = ({ level, flowers, containerClass, wrapperClass }) => (
    <div className={containerClass}>
        <div className={wrapperClass}>
            {/* Bunga Kiri */}
            <div
                ref={flowers.kiri.ref}
                style={{
                    opacity: flowers.kiri.isInView ? 1 : 0,
                    transform: flowers.kiri.isInView
                        ? "translateX(-25px)"
                        : `translateX(-${flowers.kiri.translateDistance}px)`,
                    transition: `opacity 1.2s cubic-bezier(.4,0,.2,1), transform ${flowers.kiri.transitionDuration} cubic-bezier(.4,0,.2,1)`,
                    ...(flowers.kiri.initialPosition && {
                        left: flowers.kiri.initialPosition.x,
                        top: flowers.kiri.initialPosition.y,
                        transform: `
                            translateX(${flowers.kiri.isInView ? -15 : -flowers.kiri.translateDistance}px)
                            translateY(${flowers.kiri.initialPosition.y}px)
                            ${flowers.kiri.initialPosition.rotation ? `rotate(${flowers.kiri.initialPosition.rotation}deg)` : ''}
                            ${flowers.kiri.initialPosition.scale ? `scale(${flowers.kiri.initialPosition.scale})` : ''}
                        `.trim(),
                    })
                }}
            >
                <img
                    src="/icon/bunga.svg"
                    alt={`Bunga ${level} Kiri`}
                    width={flowers.kiri.size}
                    className={`flex-shrink-0 ${flowers.kiri.animationClass}`}
                />
            </div>

            {/* Bunga Kanan */}
            <div
                ref={flowers.kanan.ref}
                style={{
                    opacity: flowers.kanan.isInView ? 1 : 0,
                    transform: flowers.kanan.isInView
                        ? "translateX(25px)"
                        : `translateX(${flowers.kanan.translateDistance}px)`,
                    transition: `opacity 1.2s cubic-bezier(.4,0,.2,1), transform ${flowers.kanan.transitionDuration} cubic-bezier(.4,0,.2,1)`,
                    ...(flowers.kanan.initialPosition && {
                        left: flowers.kanan.initialPosition.x,
                        top: flowers.kanan.initialPosition.y,
                        transform: `
                            translateX(${flowers.kanan.isInView ? 15 : flowers.kanan.translateDistance}px)
                            translateY(${flowers.kanan.initialPosition.y}px)
                            ${flowers.kanan.initialPosition.rotation ? `rotate(${flowers.kanan.initialPosition.rotation}deg)` : ''}
                            ${flowers.kanan.initialPosition.scale ? `scale(${flowers.kanan.initialPosition.scale})` : ''}
                        `.trim(),
                    })
                }}
            >
                <img
                    src="/icon/bunga.svg"
                    alt={`Bunga ${level} Kanan`}
                    width={flowers.kanan.size}
                    className={`flex-shrink-0 ${flowers.kanan.animationClass}`}
                />
            </div>
        </div>
    </div>
);

export default FlowerPair;