interface FlowerPosition {
    ref: React.RefObject<HTMLImageElement | null>;
    isInView: boolean;
    size: number;
    translateDistance: number;
    transitionDuration: string;
    animationClass: string;
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
                        ? "translateX(0)"
                        : `translateX(-${flowers.kiri.translateDistance}px)`,
                    transition: `opacity 1.2s cubic-bezier(.4,0,.2,1), transform ${flowers.kiri.transitionDuration} cubic-bezier(.4,0,.2,1)`,
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
                        ? "translateX(0)"
                        : `translateX(${flowers.kanan.translateDistance}px)`,
                    transition: `opacity 1.2s cubic-bezier(.4,0,.2,1), transform ${flowers.kanan.transitionDuration} cubic-bezier(.4,0,.2,1)`,
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