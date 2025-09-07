import React, { useEffect, useState } from "react";
import BackgroundImage from "./UI/BackgroundImage.";
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
    const { ORANG_BERTAPA_PAIR, DAUN_PAIR, WAYANG_PAIR, PATTERN } =
        useElementRefs();

    const [showLombaLetters, setShowLombaLetters] = useState(false);
    const [showForumLetters, setShowForumLetters] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        // Trigger animasi setelah komponen mount
        const backgroundTimeout = setTimeout(() => setShowBackground(true), 100);
        const lombaTimeout = setTimeout(() => setShowLombaLetters(true), 200);

        // Start forum animation after lomba animation completes
        const lombaAnimDuration = "Lomba Umum".length * 60 + 500;
        const forumTimeout = setTimeout(
            () => setShowForumLetters(true),
            lombaAnimDuration + 200
        );

        return () => {
            clearTimeout(backgroundTimeout);
            clearTimeout(lombaTimeout);
            clearTimeout(forumTimeout);
        };
    }, []);

    const lombaUmumText = "Lomba Umum".split("");
    const forumDaerahText = "Forum Daerah".split("");

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
                containerClassName="block lg:hidden w-[190vw] absolute top-0 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="w-[136px] h-[136px] animate-spin-clockwise"
                rightFlowerClassName="w-[136px] h-[136px] animate-spin-counter"
                leftFlowerTransition="all 2s ease-in-out 0.1s"
                rightFlowerTransition="all 2s ease-in-out 0.1s"
            />
            <AnimatedFlower
                // Mengubah kelas container, misalnya margin dan opacity
                containerClassName="block lg:hidden w-[90vw] absolute top-0 flex justify-around pointer-events-none my-16"
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

            <div className="lg:hidden absolute w-full h-auto -bottom-16 left-1/2 flex justify-center items-center transform -translate-x-1/2 z-20">
                <div className="absolute -bottom-[40px] left-0 w-full">
                    <img
                        src="background/batik-horizontal-commingsoon-mobile-2.svg"
                        alt="Batik"
                        className="w-full h-auto scale-x-[-1]"
                    />
                </div>

                {/* Bunga Mahkota */}
                <AnimatedElement
                    src="/icon/bunga-mahkota.svg"
                    alt="Bunga Mahkota"
                    containerClassName="block lg:hidden absolute w-full h-auto bottom-12 left-1/2 flex justify-center items-center transform -translate-x-1/2 rotate-180 z-30"
                    elementClassName="h-[64px] w-auto animate-float-10"
                    yOffset={-20}
                />

                {/* Wayang */}
                <AnimatedElement
                    src="/background/wayang.svg"
                    alt="Wayang"
                    containerClassName="block lg:hidden absolute w-full h-auto bottom-12 left-1/2 flex justify-center items-center transform -translate-x-1/2 rotate-332 z-20 "
                    elementClassName="h-[252px] w-auto animate-float-8"
                    yOffset={20}
                />

                <AnimatedFlower
                    containerClassName="block lg:hidden absolute w-[130vw] h-auto bottom-18 left-1/2 flex justify-center items-center transform -translate-x-1/2 gap-4 z-0"
                    leftFlowerSrc="/icon/api.svg"
                    rightFlowerSrc="/icon/api.svg"
                    leftFlowerClassName="h-[171px] w-auto animate-float-rotate-right-12-3"
                    rightFlowerClassName="h-[171px] w-auto transform scale-x-[-1] animate-float-rotate-right-12-3"
                />

                <AnimatedFlower
                    containerClassName="block lg:hidden absolute w-[110vw] h-auto bottom-6 left-1/2 flex justify-center items-center transform -translate-x-1/2 gap-32 z-10"
                    leftFlowerSrc="/background/daun.svg"
                    rightFlowerSrc="/background/daun.svg"
                    leftFlowerClassName="h-[180px] w-auto scale-x-[-1] animate-float-rotate-12-3"
                    rightFlowerClassName="h-[180px] w-auto transform animate-float-rotate-12-3"
                />

                <AnimatedFlower
                    containerClassName="block lg:hidden absolute w-[80vw] h-auto bottom-48 left-1/2 flex justify-center items-center transform -translate-x-1/2 gap-64 z-10"
                    leftFlowerClassName="relative -bottom-2 h-[25px] w-auto animate-spin-clockwise"
                    rightFlowerClassName="relative left-8 h-[25px] w-auto animate-spin-counter"
                />
            </div>

            {/* {renderPatternImage()}
            <div className={CSS_CLASSES.mainContent}>
                <div className={CSS_CLASSES.titleContainer}>
                    {renderGradientBackground()}
                    {renderTitles()}
                    {renderContent()}
                </div>
            </div> */}

            <div className="relative flex items-center flex-col z-10 pt-0 md:pt-[12vh] lg:pt-[18vh]">
                <div>
                    <img
                        ref={PATTERN.ref}
                        src="/icon/pattern-event-top.svg"
                        alt="pattern-event-top"
                        className={`h-[9vh] lg:h-[15.1vh] transition-all duration-1000 ease-out ${
                            PATTERN.isInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-[8vh]"
                        } `}
                    />
                </div>
                <div className="flex items-center text-center flex-col w-[75%] md:w-full">
                    <div className="relative z-10 w-full h-full flex flex-col items-center py-4">
                        <div
                            className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-1000 ease-in-out ${
                                showBackground ? "opacity-100" : "opacity-0"
                            }`}
                            aria-hidden="true"
                            style={{
                                backgroundImage:
                                    "url('/background/gradasi-commingsoon.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center px-4">
                            {/* Title Section */}
                            <div className="flex flex-col items-center lg:mb-[2.4vh]">
                                <h1 className="font-samsktrigrama text-[4rem] sm:text-[10vh] lg:text-[15vh] flex justify-center leading-[0.84] lg:leading-normal tracking-[-0.3vh] text-center -ml-12 md:-ml-12 lg:-ml-16">
                                    {lombaUmumText.map((char, idx) => (
                                        <span
                                            key={`lomba-${idx}`}
                                            className={`bg-[linear-gradient(180deg,_#3F170D_0%,_#5F3313_100%)] bg-clip-text text-transparent inline-block transition-all duration-700 ease-[cubic-bezier(0.34,2.5,0.64,1)]
                                        ${
                                            showLombaLetters
                                                ? "opacity-100 translate-y-0"
                                                : "opacity-0 -translate-y-[10vh]"
                                        }
                                    `}
                                            style={{
                                                transitionDelay: `${
                                                    idx * 60
                                                }ms`,
                                            }}
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </span>
                                    ))}
                                </h1>
                                <div className="relative">
                                    <h1 className="font-samsktrigrama text-[4rem] sm:text-[10vh] lg:text-[15vh] flex justify-center leading-[0.84] lg:leading-normal tracking-[-0.3vh] text-center -mt-[1vh] lg:-mt-[12vh] z-40 relative">
                                        {forumDaerahText.map((char, idx) => (
                                            <span
                                                key={`forum-${idx}`}
                                                className={`bg-[linear-gradient(180deg,_#3F170D_0%,_#5F3313_100%)] bg-clip-text text-transparent inline-block transition-all duration-700 ease-[cubic-bezier(0.34,2.5,0.64,1)]
                ${
                    showForumLetters
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-[10vh]"
                }
            `}
                                                style={{
                                                    transitionDelay: `${
                                                        idx * 60
                                                    }ms`,
                                                }}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </span>
                                        ))}
                                    </h1>
                                    {/* Icon And - positioned at the end of Forum Daerah */}
                                    <img
                                        src="/icon/icon-and.svg"
                                        alt="And Icon"
                                        className={`absolute -top-[4vh] lg:-top-[13vh] -translate-y-1/2 left-[calc(100%+-3vh)] lg:left-[calc(100%+-4.8vh)] h-[6vh] lg:h-[10vh] w-auto transition-all duration-700 ease-[cubic-bezier(0.34,2.5,0.64,1)] z-10
                                            ${
                                                showForumLetters
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 -translate-y-[10vh]"
                                            }
                                        `}
                                        style={{
                                            transitionDelay: `${forumDaerahText.length * 60}ms`,
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Subtitle */}
                            <h2 className={`text-[#C88B5F] text-[0.875rem] md:text-lg lg:text-[3.5vh] mb-2 lg:mb-[4vh] mt-0 lg:-mt-[7.2vh] max-w-[90%] lg:max-w-[60%] leading-relaxed transition-all duration-700 ease-out
    ${showForumLetters ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[2vh]"}`}
                            style={{
                                transitionDelay: `${forumDaerahText.length * 60 + 300}ms`,
                            }}>
                                Panggung terbesar untuk Forda dan komunitas
                                budaya untuk unjuk kemampuan dan meraih
                                prestasi.
                            </h2>

                            {/* Button */}
                            <button
                                type="button"
                                onClick={handleScrollToListLomba}
                                className={`relative cursor-pointer transition-all duration-200 hover:scale-105 rounded-lg pt-6 pb-5 active:scale-95 bg-no-repeat bg-center bg-contain w-[28vh] h-[8.3vh] lg:w-[21.667vw] lg:h-[12.8vh] flex items-center justify-center text-[#FFDA88] font-samsktrigrama text-[3.6vh] lg:text-[5.7vh] tracking-[0.1]
        ${showForumLetters ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[3vh] scale-95"}
    `}
                                style={{
                                    backgroundImage: "url('/icon/button-daftar.svg')",
                                    transitionDelay: `${forumDaerahText.length * 60 + 600}ms`,
                                    transitionDuration: "700ms",
                                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                                }}
                            >
                                <h1 className="mt-1">Daftar</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterHero;
