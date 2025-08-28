import { ElementConfig } from '../types';

export const ELEMENT_CONFIGS: Record<string, ElementConfig> = {
    orangBertapa: { 
        translateDistance: 120, 
        duration: "1.8s", 
        delay: "0s", 
        floatDuration: "3s", 
        floatDistance: 8 
    },
    daun: { 
        translateDistance: 200, 
        duration: "2.2s", 
        delay: "0.2s", 
        floatDuration: "4s", 
        floatDistance: 12, 
        rotateAmount: 3 
    },
    wayang: { 
        translateDistance: 200, 
        duration: "3s", 
        delay: "0.4s", 
        floatDuration: "6s", 
        floatDistance: 8, 
        rotateAmount: 2 
    },
    
    pattern: {
        translateDistance: 20,
        duration: "1.2s",
        delay: "0s",
        floatDuration: "5s",
        floatDistance: 6
    },
    bunga: {
        translateDistance: 30,
        duration: "1.5s",
        delay: "0.1s",
        floatDuration: "5s",
        floatDistance: 0,
        rotateAmount: 6
    },
    batik: {
        translateDistance: 20,
        duration: "1.2s",
        delay: "0s",
        floatDuration: "5s",
        floatDistance: 6
    }

} as const;

export const BATIK_BACKGROUND = {
    src: "/background/batik-horizontal-galeri.svg",
    alt: "Batik Background",
    className: "hidden md:block -top-[20vh] left-0 w-full lg:w-auto h-auto z-0",
};

export const BATIK_BACKGROUND_MOBILE = {
    src: "/background/batik-horizontal-galeri-mobile.svg",
    alt: "Batik Background",
    className: "block md:hidden top-0 left-0 w-full lg:w-auto h-auto z-0 object-cover",
};

export const CSS_CLASSES = {
    container: "flex justify-center items-center mb-12 relative w-full min-h-screen",
    mainContent: "relative h-[50vh] lg:h-[110vh] w-[80%] lg:w-[75%] max-w-[1256px] flex flex-col items-center justify-center overflow-y-hidden pt-8 sm:pt-20 md:pt-20 px-0 lg:px-4 z-20",
    titleContainer: "flex flex-col items-center text-center mt-6 sm:mt-8 md:mt-18 justify-center z-20 w-full",
    patternImage: "absolute top-[30vh] lg:top-[20%] h-[3.875rem] lg:h-[15.2vh] z-0",
    gradientImage: "absolute inset-0 w-auto h-auto object-cover z-0",
    titleWrapper: "flex flex-col items-center pt-4 lg:pt-6",
    titleSpacing: "-mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10",
    contentWrapper: "flex flex-col items-center gap-4 md:gap-6 mt-0 lg:-mt-4",
    buttonImage: "w-full min-w-full h-[8rem]",
};

export const BUNGA_MOBILE_CONFIGS = [
    {
        kiri: { className: "block md:hidden absolute top-[8vh] -left-[8vh] w-[8.5rem] h-auto" },
        kanan: { className: "block md:hidden absolute top-[8vh] -right-[8vh] w-[8.5rem] h-auto transform scale-x-[-1]" }
    },
    {
        kiri: { className: "block md:hidden absolute top-[9vh] left-[9vh] w-[5.5rem] h-auto" },
        kanan: { className: "block md:hidden absolute top-[9vh] right-[9vh] w-[5.5rem] h-auto transform scale-x-[-1]" }
    },
    {
        kiri: { className: "block md:hidden absolute top-[21vh] left-[10vh] w-[1.75rem] h-auto" },
        kanan: { className: "block md:hidden absolute top-[21vh] right-[10vh] w-[1.75rem] h-auto transform scale-x-[-1]" }
    }
];