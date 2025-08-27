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
                containerClass="hidden sm:block absolute -top-8 sm:-top-6 left-1/2 -translate-x-1/2 w-[101vw] h-[363px] z-0"
                wrapperClass="flex justify-between items-start w-full relative"
            />  

            {/* Bunga Besar Mobile (lebih keluar) */}
            <FlowerPair
                level="Besar-Mobile"
                flowers={flowers.besarMobile}
                containerClass="block sm:hidden absolute -top-8 left-0 w-full h-[230px] z-0"
                wrapperClass="flex justify-between items-start w-full relative"
            />

            {/* Bunga Sedang */}
            <FlowerPair
                level="Sedang"
                flowers={flowers.sedang}
                containerClass="hidden sm:block absolute top-0 left-0 w-full h-[130px] mt-1 z-0"
                wrapperClass="flex justify-between items-center w-full px-52"
            />

            {/* Bunga Kecil-1 */}
            <FlowerPair
                level="Kecil-1"
                flowers={flowers.kecil1}
                containerClass="hidden sm:block absolute top-0 left-0 w-full h-[50px] mt-18 z-0"
                wrapperClass="flex justify-between items-center w-full px-94"
            />

            {/* Bunga Kecil-2 */}
            <FlowerPair
                level="Kecil-2"
                flowers={flowers.kecil2}
                containerClass="hidden sm:block absolute top-0 left-0 w-full h-[50px] mt-36 z-0"
                wrapperClass="flex justify-between items-center w-full px-54"
            />
        </>
    );
};

export default FlowerDecorations;