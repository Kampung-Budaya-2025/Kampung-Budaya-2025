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
        translateDistance: 100, 
        duration: "2.2s", 
        delay: "0.2s", 
        floatDuration: "4s", 
        floatDistance: 12, 
        rotateAmount: 3 
    },
    wayang: { 
        translateDistance: 80, 
        duration: "3s", 
        delay: "0.4s", 
        floatDuration: "6s", 
        floatDistance: 8, 
        rotateAmount: 2 
    },
} as const;

export const BATIK_BACKGROUND = {
    src: "/background/batik-horizontal-galeri.svg",
    alt: "Batik Background",
    className: "-top-[20vh] left-0 w-auto h-auto z-0",
};

export const CSS_CLASSES = {
    container: "flex justify-center items-center mb-12 relative w-full min-h-screen",
    mainContent: "relative h-[110vh] w-[75%] max-w-[1256px] flex flex-col items-center justify-center overflow-y-hidden pt-16 sm:pt-20 md:pt-20 px-4 z-20",
    titleContainer: "flex flex-col items-center text-center mt-6 sm:mt-8 md:mt-18 justify-center z-20 w-full",
    patternImage: "absolute top-[20%] h-[6.25vh] min-h-[90px] max-h-[110px] z-0",
    gradientImage: "absolute inset-0 w-auto h-auto object-cover z-0",
    titleWrapper: "flex flex-col items-center pt-6",
    titleSpacing: "-mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10",
    contentWrapper: "flex flex-col items-center gap-2 sm:gap-4 md:gap-6 -mt-4",
    buttonImage: "w-[40vw] min-w-[200px] max-w-[250px] h-auto",
};