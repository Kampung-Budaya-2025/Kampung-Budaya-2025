import { useFlowerAnimations } from "../hooks/useFlowerAnimations";
import FlowerPair from "./FlowerPair";

const FlowerDecorations: React.FC = () => {
    const flowers = useFlowerAnimations();

    return (
        <>
            {/* Bunga Besar Desktop */}
            <FlowerPair
                level="Besar"
                flowers={flowers.besar}
                containerClass="hidden sm:block absolute -top-8 sm:-top-4 left-1/2 -translate-x-1/2 w-[101vw] h-auto z-0"
                wrapperClass="flex justify-between items-start w-full relative"
            />  

            {/* Bunga Besar Mobile (lebih keluar) */}
            <FlowerPair
                level="Besar-Mobile"
                flowers={flowers.besarMobile}
                containerClass="block sm:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-[109vw] h-auto z-0"
                wrapperClass="flex justify-between items-start w-full relative"
            />

            {/* Bunga Sedang */}
            <FlowerPair
                level="Sedang"
                flowers={flowers.sedang}
                containerClass="hidden sm:block absolute top-3 left-1/2 -translate-x-1/2 w-[66vw] h-auto z-0"
                wrapperClass="flex justify-between items-center w-full"
            />

            {/* Bunga Kecil-1 */}
            <FlowerPair
                level="Kecil-1"
                flowers={flowers.kecil1}
                containerClass="hidden sm:block absolute top-32 left-1/2 -translate-x-1/2 w-[40vw] h-[auto] z-0"
                wrapperClass="flex justify-between items-center w-full"
            />

            {/* Bunga Kecil-2 */}
            <FlowerPair
                level="Kecil-2"
                flowers={flowers.kecil2}
                containerClass="hidden sm:block absolute top-58 left-1/2 -translate-x-1/2 w-[66vw] h-[auto] z-0"
                wrapperClass="flex justify-between items-center w-full"
            />
        </>
    );
};

export default FlowerDecorations;