import React, { useEffect, useState } from "react";
import BatikBackground from "../../FAQ/UI/BatikBackground";
import FlowerDecorations from "@/Components/Common/FlowerDecoration";
import { useElementRefs } from "@/Components/RegisterEvent/RegisterHero/hooks/useElementRefs";
import ElementPairComponent from "@/Components/RegisterEvent/RegisterHero/UI/ElementPairComponent";
import { SingleDecoration } from "@/Components/RegisterEvent/ListLomba/UI/SingleDecoration";
import { bungaMahkotaDecoration } from "@/Components/RegisterEvent/ListLomba/config/constants";
import { AnimatedFlower } from "@/Components/RegisterEvent/ListLomba/UI/AnimatedFlower";

const ComingSoonSection: React.FC = () => {
    const { ORANG_BERTAPA_PAIR, DAUN_PAIR, WAYANG_PAIR, PATTERN } =
        useElementRefs(
            {
                kiri: {
                    className:
                        "hidden md:block absolute bottom-0 -left-[8%] z-10 w-[26.667vw] h-auto",
                },
                kanan: {
                    className:
                        "hidden md:block absolute bottom-0 -right-[8%] z-10 transform scale-x-[-1] w-[26.667vw] h-auto",
                },
            },
            {
                kiri: {
                    className:
                        "hidden md:block absolute bottom-[24%] left-[4.5%] z-0 w-[16.667vw] h-auto",
                },
                kanan: {
                    className:
                        "hidden md:block absolute bottom-[24%] right-[4.5%] z-0 transform scale-x-[-1] w-[16.667vw] h-auto",
                },
            },
            {
                kiri: {
                    className:
                        "hidden md:block absolute bottom-[16%] left-[4%] z-0 w-[15.625vw] h-auto",
                },
                kanan: {
                    className:
                        "hidden md:block absolute bottom-[16%] right-[4%] z-0 transform scale-x-[-1] w-[15.625vw] h-auto",
                },
            }
        );
    const [showLetters, setShowLetters] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);

    useEffect(() => {
        // Trigger animasi setelah komponen mount
        const timeout = setTimeout(() => setShowLetters(true), 200);

        // Hitung total delay animasi h1
        const h1AnimDuration = "Coming Soon".length * 60 + 500; // 60ms per huruf + 500ms animasi terakhir
        const subtitleTimeout = setTimeout(
            () => setShowSubtitle(true),
            h1AnimDuration - 500
        );

        return () => {
            clearTimeout(timeout);
            clearTimeout(subtitleTimeout);
        };
    }, []);

    const comingText = "Coming".split("");
    const soonText = "Soon".split("");
    const comingSoonText = "Coming Soon".split("");

    return (
        <div className="relative min-h-[130vh] lg:min-h-[110vh] overflow-visible justify-center items-center flex">
            <BatikBackground
                topSrc="/background/batik-horizontal-event.svg"
                topClassName="absolute -top-[18vh] left-0 w-full h-[6vh] h-auto z-0 pointer-events-none hidden sm:block"
            />

            <AnimatedFlower 
                containerClassName="block w-[190vw] absolute -top-4 lg:-top-20 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="h-[8.5rem] lg:h-[36.3vh] lg:w-auto animate-spin-clockwise"
                rightFlowerClassName="h-[8.5rem] lg:h-[36.3vh] lg:w-auto animate-spin-counter"
                leftFlowerTransition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                rightFlowerTransition="all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                />
            <AnimatedFlower 
                containerClassName="block w-[90vw] lg:w-[140vw] absolute top-0 lg:-top-14 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="h-[5.4rem] lg:h-[23.2vh] lg:w-auto animate-spin-counter"
                rightFlowerClassName="h-[5.4rem] lg:h-[23.2vh] lg:w-auto animate-spin-clockwise"
                leftFlowerTransition="all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                rightFlowerTransition="all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                />
            <AnimatedFlower 
                containerClassName="block w-[110vw] absolute top-24 lg:top-16 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="h-[1.75rem] lg:h-[7.6vh] lg:w-auto animate-spin-clockwise"
                rightFlowerClassName="h-[1.75rem] lg:h-[7.6vh] lg:w-auto animate-spin-counter"
                leftFlowerTransition="all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
                rightFlowerTransition="all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
                />
            <AnimatedFlower 
                containerClassName="block w-[150vw] absolute top-36 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16"
                leftFlowerClassName="lg:h-[7.6vh] lg:w-auto animate-spin-clockwise"
                rightFlowerClassName="lg:h-[7.6vh] lg:w-auto animate-spin-counter"
                leftFlowerTransition="all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s"
                rightFlowerTransition="all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s"
            />

            <ElementPairComponent pair={ORANG_BERTAPA_PAIR} />
            <ElementPairComponent pair={DAUN_PAIR} />
            <ElementPairComponent pair={WAYANG_PAIR} />

            <div className="block lg:hidden">
                <SingleDecoration decoration={bungaMahkotaDecoration} />
            </div>

            {/* Gradasi Atas */}
            <div
                className="block md:hidden absolute top-0 left-0 w-full h-auto"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "url('/background/gradasi-commingsoon-top.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div>
                    <img
                        src="background/batik-horizontal-commingsoon-mobile-1.svg"
                        alt="Batik"
                        className="w-full h-auto block"
                    />
                </div>
                <div className="absolute top-[48px] left-0 w-full">
                    <img
                        src="background/batik-horizontal-commingsoon-mobile-2.svg"
                        alt="Batik"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            {/* Gradasi Bawah */}
            <div
                className="block md:hidden absolute bottom-0 left-0 w-full h-auto"
                aria-hidden="true"
                style={{
                    backgroundImage:
                        "url('/background/gradasi-commingsoon-bottom.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "80vw", // atur sesuai kebutuhan agar gradasi tidak terpotong
                }}
            >
                <div className="absolute bottom-0">
                    <img
                        src="background/batik-horizontal-commingsoon-mobile-1.svg"
                        alt="Batik"
                        className="w-full h-auto block scale-x-[-1]"
                    />
                </div>
                <div className="absolute bottom-[12px] left-0 w-full">
                    <img
                        src="background/batik-horizontal-commingsoon-mobile-2.svg"
                        alt="Batik"
                        className="w-full h-auto scale-x-[-1]"
                    />
                </div>
            </div>

            <div className="relative flex items-center flex-col z-10">
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
                    <div className="relative z-10 w-full flex flex-col items-center py-4">
                        <div
                            className="absolute inset-0 pointer-events-none z-0"
                            aria-hidden="true"
                            style={{
                                backgroundImage:
                                    "url('/background/gradasi-commingsoon.svg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        />
                        <h1 className="font-samsktrigrama text-[15vh] sm:text-[18vh] lg:text-[28.8vh] mt-0 lg:-mt-[8vh] flex justify-center leading-[0.84] lg:leading-normal text-center">
                            {/* Mobile: dua baris */}
                            <span className="flex flex-col md:hidden -space-y-4 lg:-space-y-6">
                                <span>
                                    {comingText.map((char, idx) => (
                                        <span
                                            key={`coming-${idx}`}
                                            className={`bg-[linear-gradient(180deg,_#FFC411_0%,_#CD9C1A_22.12%,_#BD6229_44.71%,_#5D2F24_60.58%,_#5D2F24_80.77%)] bg-clip-text text-transparent inline-block transition-all duration-700 ease-[cubic-bezier(0.34,2.5,0.64,1)]
                                                ${
                                                    showLetters
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
                                            {char}
                                        </span>
                                    ))}
                                </span>
                                <span>
                                    {soonText.map((char, idx) => (
                                        <span
                                            key={`soon-${idx}`}
                                            className={`bg-[linear-gradient(180deg,_#FFC411_0%,_#CD9C1A_22.12%,_#BD6229_44.71%,_#5D2F24_60.58%,_#5D2F24_80.77%)] bg-clip-text text-transparent inline-block transition-all duration-700 ease-[cubic-bezier(0.34,2.5,0.64,1)]
                                                ${
                                                    showLetters
                                                        ? "opacity-100 translate-y-0"
                                                        : "opacity-0 -translate-y-[10vh]"
                                                }
                                            `}
                                            style={{
                                                transitionDelay: `${
                                                    (comingText.length + idx) *
                                                    60
                                                }ms`,
                                            }}
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </span>
                            </span>
                            {/* Desktop: satu baris */}
                            <span className="hidden md:flex">
                                {comingSoonText.map((char, idx) => (
                                    <span
                                        key={idx}
                                        className={`bg-[linear-gradient(180deg,_#FFC411_0%,_#CD9C1A_22.12%,_#BD6229_44.71%,_#5D2F24_60.58%,_#5D2F24_80.77%)] bg-clip-text text-transparent inline-block transition-all duration-700 ease-[cubic-bezier(0.34,2.5,0.64,1)]
                                            ${
                                                showLetters
                                                    ? "opacity-100 translate-y-0"
                                                    : "opacity-0 -translate-y-[10vh]"
                                            }
                                        `}
                                        style={{
                                            transitionDelay: `${idx * 60}ms`,
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </span>
                                ))}
                            </span>
                        </h1>
                        <h2
                            className={`
                                text-[#C88B5F] text-[0.875rem] lg:text-[3.5vh] -mt-4 lg:-mt-[7.2vh]
                                transition-all duration-1500 ease-out
                                ${
                                    showSubtitle
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-[6vh]"
                                }
                            `}
                            style={{
                                transitionDelay: showSubtitle ? "0ms" : "0ms",
                            }}
                        >
                            Kami sedang mengerjakan sesuatu yang menarik di sini
                            Halaman ini akan segera tersedia. <br></br>Terima
                            kasih atas kesabarannya!
                        </h2>
                    </div>
                </div>
                <div>
                    <img
                        ref={PATTERN.ref}
                        src="/icon/pattern-event-bottom.svg"
                        alt="pattern-event-bottom"
                        className={`h-[6.5vh] lg:h-[9.4vh] transition-all duration-1000 ease-out ${
                            PATTERN.isInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-[8vh]"
                        } `}
                    />
                </div>
            </div>
            <div className='hidden md:block absolute bottom-0 h-[3vh] w-full bg-[#3F170D] rounded-t-4xl z-20'></div>
        </div>
    );
};

export default ComingSoonSection;
