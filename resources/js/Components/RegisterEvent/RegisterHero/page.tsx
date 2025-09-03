import React from "react";
import BackgroundImage from "./UI/BackgroundImage.";
import Title from "./UI/Title";
import SubTitle from "./UI/Subtitle";
import ElementPairComponent from "./UI/ElementPairComponent";
import {
    BATIK_BACKGROUND,
    BATIK_BACKGROUND_MOBILE,
    CSS_CLASSES,
} from "./config/constants";
import { useElementRefs } from "./hooks/useElementRefs";
import { AnimatedFlower } from "../ListLomba/UI/AnimatedFlower";
import { AnimatedElement } from "../ListLomba/UI/AnimateElement";

const RegisterHero: React.FC = () => {
    const {
        ORANG_BERTAPA_PAIR,
        DAUN_PAIR,
        WAYANG_PAIR,
        PATTERN,
        GRADIENT_BACKGROUND,
        BUNGA_MOBILE_PAIRS,
    } = useElementRefs();

    const handleScrollToListLomba = () => {
        // Scroll ke elemen dengan ID 'list-lomba' atau class tertentu
        const listLombaElement = document.getElementById("list-lomba");
        if (listLombaElement) {
            listLombaElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // Alternatif: scroll berdasarkan tinggi viewport jika element tidak ditemukan
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        }
    };

    const renderBatikBackground = () => (
        <BackgroundImage
            src={BATIK_BACKGROUND.src}
            alt={BATIK_BACKGROUND.alt}
            className={BATIK_BACKGROUND.className}
        />
    );

    const renderBatikBackgroundMobile = () => (
        <BackgroundImage
            src={BATIK_BACKGROUND_MOBILE.src}
            alt={BATIK_BACKGROUND_MOBILE.alt}
            className={BATIK_BACKGROUND_MOBILE.className}
        />
    );

    // render pattern menggunakan struktur dari useElementRefs (ref + isInView + src)
    const renderPatternImage = () => (
        <img
            ref={PATTERN.ref}
            src={PATTERN.src}
            alt={PATTERN.alt}
            className={`
    ${CSS_CLASSES.patternImage}
    transition-all duration-1000 ease-out
    ${
        PATTERN.isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-[4vh]"
    }
`}
        />
    );

    const renderGradientBackground = () => (
        <div className="h-full relative w-full">
            {/* <img
                src="/background/gradasi-event.svg"
                alt="Gradasi"
                className={CSS_CLASSES.gradientImage}
            /> */}
            <img
                ref={GRADIENT_BACKGROUND.ref}
                src={GRADIENT_BACKGROUND.src}
                alt={GRADIENT_BACKGROUND.alt}
                className={`${
                    CSS_CLASSES.gradientImage
                } transition-opacity duration-1000 ease-out ${
                    GRADIENT_BACKGROUND.isInView ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    );

    const renderTitles = () => (
        <div className={CSS_CLASSES.titleWrapper}>
            <Title className={CSS_CLASSES.titleSpacing}>Lomba Umum</Title>

            <Title>Forum Daerah</Title>
        </div>
    );

    const renderContent = () => (
        <div className={CSS_CLASSES.contentWrapper}>
            <div className="w-full">
                <SubTitle>
                    Panggung terbesar untuk Forda dan komunitas budaya untuk
                    unjuk kemampuan dan meraih prestasi.
                </SubTitle>
            </div>

            <button
                type="button"
                onClick={handleScrollToListLomba}
                className="relative cursor-pointer transition-transform duration-200 hover:scale-105 rounded-lg pt-6 pb-5 active:scale-95 bg-no-repeat bg-center bg-contain w-[28vh] h-[8.3vh] lg:w-[21.667vw] lg:h-[12.8vh] flex items-center justify-center text-[#FFDA88] font-samsktrigrama text-[3.6vh] lg:text-[5.7vh] tracking-[0.1]"
                style={{
                    backgroundImage: "url('/icon/button-daftar.svg')",
                }}
            >
                <h1 className="mt-1">Daftar</h1>
            </button>
        </div>
    );

    return (
        <div className={CSS_CLASSES.container}>
            {renderBatikBackgroundMobile()}
            {renderBatikBackground()}
            <ElementPairComponent pair={ORANG_BERTAPA_PAIR} />
            <ElementPairComponent pair={DAUN_PAIR} />
            <ElementPairComponent pair={WAYANG_PAIR} />

            {/* Bunga Mobile 1 */}
            <AnimatedFlower
                // Mengubah kelas container, misalnya margin dan opacity
                containerClassName="block lg:hidden w-[190vw] absolute  top-0 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="w-[136px] h-[136px] animate-spin-clockwise"
                rightFlowerClassName="w-[136px] h-[136px] animate-spin-counter"
                leftFlowerTransition="all 2s ease-in-out 0.1s"
                rightFlowerTransition="all 2s ease-in-out 0.1s"
            />
            <AnimatedFlower
                // Mengubah kelas container, misalnya margin dan opacity
                containerClassName="block lg:hidden w-[90vw] absolute  top-0 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="w-[87px] h-[87px] animate-spin-clockwise"
                rightFlowerClassName="w-[87px] h-[87px] animate-spin-counter"
                leftFlowerTransition="all 2.5s ease-in-out 0.1s"
                rightFlowerTransition="all 2.5s ease-in-out 0.1s"
            />
            <AnimatedFlower
                // Mengubah kelas container, misalnya margin dan opacity
                containerClassName="block lg:hidden w-[110vw] absolute top-24 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="w-[28px] h-[28px] animate-spin-clockwise"
                rightFlowerClassName="w-[28px] h-[28px] animate-spin-counter"
                leftFlowerTransition="all 3s ease-in-out 0.1s"
                rightFlowerTransition="all 3s ease-in-out 0.1s"
            />

            <div className="lg:hidden absolute w-full h-auto -bottom-16 left-1/2 flex justify-center items-center transform -translate-x-1/2 z-20"
            >
                <div className="absolute -bottom-[40px] left-0 w-full">
                    <img
                        src="background/batik-horizontal-commingsoon-mobile-2.svg"
                        alt="Batik"
                        className="w-full h-auto scale-x-[-1]"
                    />
                </div>

                {/* Bunga Mahkota */}
                <AnimatedElement src="/icon/bunga-mahkota.svg" alt="Bunga Mahkota"
                    containerClassName="block lg:hidden absolute w-full h-auto bottom-12 left-1/2 flex justify-center items-center transform -translate-x-1/2 rotate-180 z-20"
                    elementClassName="h-[64px] w-auto"
                    yOffset={-20}
                />

                {/* Wayang */}
                <AnimatedElement src="/background/wayang.svg" alt="Wayang"
                    containerClassName="hidden lg:hidden absolute w-full h-auto bottom-12 left-1/2 flex justify-center items-center transform -translate-x-1/2 rotate-[152deg] z-30 "
                    elementClassName="h-[252px] w-auto"
                    yOffset={20}
                />

                <AnimatedFlower
                    containerClassName="block lg:hidden absolute w-[130vw] h-auto bottom-18 left-1/2 flex justify-center items-center transform -translate-x-1/2 gap-4 z-0"
                    leftFlowerSrc="/icon/api.svg"
                    rightFlowerSrc="/icon/api.svg"
                    leftFlowerClassName="h-[171px] w-auto"
                    rightFlowerClassName="h-[171px] w-auto transform scale-x-[-1]"
                />

                <AnimatedFlower
                    containerClassName="block lg:hidden absolute w-[110vw] h-auto bottom-6 left-1/2 flex justify-center items-center transform -translate-x-1/2 gap-32 z-10"
                    leftFlowerSrc="/background/daun.svg"
                    rightFlowerSrc="/background/daun.svg"
                    leftFlowerClassName="h-[180px] w-auto scale-x-[-1]"
                    rightFlowerClassName="h-[180px] w-auto transform"
                />
            </div>

            {renderPatternImage()}
            <div className={CSS_CLASSES.mainContent}>
                <div className={CSS_CLASSES.titleContainer}>
                    {renderGradientBackground()}
                    {renderTitles()}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default RegisterHero;
