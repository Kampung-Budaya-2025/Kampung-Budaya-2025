import { useFlowerAnimations } from "../hooks/useFlowerAnimations";
import FlowerPair from "./FlowerPair";

type FlowerDecorationProps = {
    besarClass?: string;
    besarMobileClass?: string;
    sedangClass?: string;
    kecil1Class?: string;
    kecil2Class?: string;
    wrapperClass?: string;
};

const FlowerDecorations: React.FC<FlowerDecorationProps> = ({
    besarClass = "hidden sm:block absolute -top-[2vh] md:-top-[4vh] left-1/2 -translate-x-1/2 w-[102vw] h-auto z-0",
    besarMobileClass = "block sm:hidden absolute -top-8 sm:-top-4 left-1/2 -translate-x-1/2 w-[109vw] h-auto z-0",
    sedangClass = "hidden sm:block absolute -top-3 md:top-[0vh] left-1/2 -translate-x-1/2 w-[66vw] h-auto z-0",
    kecil1Class = "hidden sm:block absolute top-[14vh] left-1/2 -translate-x-1/2 w-[40vw] h-[auto] z-0",
    kecil2Class = "hidden sm:block absolute top-[26vh] left-1/2 -translate-x-1/2 w-[64vw] h-[auto] z-0",
    wrapperClass = "flex justify-between items-center w-full",
}) => {
    const flowers = useFlowerAnimations();

    return (
        <>
            {/* Bunga Besar Desktop */}
            <FlowerPair
                level="Besar"
                flowers={flowers.besar}
                containerClass={besarClass}
                wrapperClass={wrapperClass + " items-start relative"}
            />  

            {/* Bunga Besar Mobile (lebih keluar) */}
            <FlowerPair
                level="Besar-Mobile"
                flowers={flowers.besarMobile}
                containerClass={besarMobileClass}
                wrapperClass={wrapperClass + " items-start relative"}
            />

            {/* Bunga Sedang */}
            <FlowerPair
                level="Sedang"
                flowers={flowers.sedang}
                containerClass={sedangClass}
                wrapperClass={wrapperClass}
            />

            {/* Bunga Kecil-1 */}
            <FlowerPair
                level="Kecil-1"
                flowers={flowers.kecil1}
                containerClass={kecil1Class}
                wrapperClass={wrapperClass}
            />

            {/* Bunga Kecil-2 */}
            <FlowerPair
                level="Kecil-2"
                flowers={flowers.kecil2}
                containerClass={kecil2Class}
                wrapperClass={wrapperClass}
            />
        </>
    );
};

export default FlowerDecorations;