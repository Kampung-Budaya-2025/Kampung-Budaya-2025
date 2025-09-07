import { useFlowerAnimations } from '@/Hooks/useFlowerAnimations'; 
import FlowerPair from './../FAQ/UI/FlowerPair';

type FlowerDecorationProps = {
    showPairs?: Array<"besar" | "besarMobile" | "sedang" | "kecil1" | "kecil2">;
    besarClass?: string;
    besarMobileClass?: string;
    sedangClass?: string;
    kecil1Class?: string;
    kecil2Class?: string;
    wrapperClass?: string;
    // Tambahan prop untuk custom sizes
    customSizes?: {
        besar?: string;
        besarMobile?: string;
        sedang?: string;
        kecil1?: string;
        kecil2?: string;
    };
};

const FlowerDecorations: React.FC<FlowerDecorationProps> = ({
    showPairs = ["besar", "besarMobile", "sedang", "kecil1", "kecil2"],
    besarClass = "hidden md:block absolute -top-[2vh] md:-top-[4vh] left-1/2 -translate-x-1/2 w-[102vw] h-auto z-0",
    besarMobileClass = "block sm:hidden absolute -top-8 sm:-top-4 left-1/2 -translate-x-1/2 w-[109vw] h-auto z-0",
    sedangClass = "hidden md:block absolute -top-3 md:top-[0vh] left-1/2 -translate-x-1/2 w-[66vw] h-auto z-0",
    kecil1Class = "hidden md:block absolute top-[14vh] left-1/2 -translate-x-1/2 w-[40vw] h-[auto] z-0",
    kecil2Class = "hidden md:block absolute top-[26vh] left-1/2 -translate-x-1/2 w-[64vw] h-[auto] z-0",
    wrapperClass = "flex justify-between items-center w-full",
    customSizes,
}) => {
    const flowers = useFlowerAnimations(showPairs, customSizes);

    return (
        <>
            {showPairs.includes("besar") && flowers.besar && (
                <FlowerPair
                    level="Besar"
                    flowers={flowers.besar}
                    containerClass={besarClass}
                    wrapperClass={wrapperClass}
                />
            )}

            {showPairs.includes("besarMobile") && flowers.besarMobile && (
                <FlowerPair
                    level="Besar-Mobile"
                    flowers={flowers.besarMobile}
                    containerClass={besarMobileClass}
                    wrapperClass={wrapperClass }
                />
            )}

            {showPairs.includes("sedang") && flowers.sedang && (
                <FlowerPair
                    level="Sedang"
                    flowers={flowers.sedang}
                    containerClass={sedangClass}
                    wrapperClass={wrapperClass}
                />
            )}

            {showPairs.includes("kecil1") && flowers.kecil1 && (
                <FlowerPair
                    level="Kecil-1"
                    flowers={flowers.kecil1}
                    containerClass={kecil1Class}
                    wrapperClass={wrapperClass}
                />
            )}

            {showPairs.includes("kecil2") && flowers.kecil2 && (
                <FlowerPair
                    level="Kecil-2"
                    flowers={flowers.kecil2}
                    containerClass={kecil2Class}
                    wrapperClass={wrapperClass}
                />
            )}
        </>
    );
};

export default FlowerDecorations;