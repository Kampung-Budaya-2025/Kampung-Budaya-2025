import React, { useEffect, useState } from "react";
import BatikBackground from "../../FAQ/UI/BatikBackground";
import FlowerDecorations from "@/Components/FAQ/UI/FlowerDecoration";
import { useElementRefs } from "@/Components/RegisterEvent/RegisterHero/hooks/useElementRefs";
import ElementPairComponent from "@/Components/RegisterEvent/RegisterHero/UI/ElementPairComponent";

const ComingSoonSection: React.FC = () => {
    const { ORANG_BERTAPA_PAIR, DAUN_PAIR, WAYANG_PAIR, PATTERN } =
        useElementRefs(
            {
                kiri: { className: "hidden md:block absolute bottom-0 -left-[8%] z-10 w-[26.667vw] h-auto" },
                kanan: { className: "hidden md:block absolute bottom-0 -right-[8%] z-10 transform scale-x-[-1] w-[26.667vw] h-auto" },
            },
            {
                kiri: { className: "hidden md:block absolute bottom-[24%] left-[4.5%] z-0 w-[16.667vw] h-auto" },
                kanan: { className: "hidden md:block absolute bottom-[24%] right-[4.5%] z-0 transform scale-x-[-1] w-[16.667vw] h-auto" },
            },
            {
                kiri: { className: "hidden md:block absolute bottom-[16%] left-[4%] z-0 w-[15.625vw] h-auto" },
                kanan: { className: "hidden md:block absolute bottom-[16%] right-[4%] z-0 transform scale-x-[-1] w-[15.625vw] h-auto"},
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

    const comingSoonText = "Coming Soon".split("");

    return (
        <div className="relative min-h-[110vh] overflow-hidden justify-center items-center flex">
            <BatikBackground
                topSrc="/background/batik-horizontal-event.svg"
                topClassName="absolute -top-[18vh] left-0 w-full h-[6vh] h-auto z-0 pointer-events-none hidden sm:block"
            />
            <FlowerDecorations
                besarClass="absolute -top-[16vh] left-1/2 -translate-x-1/2 w-[111vw] h-auto z-0"
                sedangClass="absolute -top-[12vh] left-1/2 -translate-x-1/2 w-[76vw] h-auto z-0"
                kecil1Class="absolute top-[2vh] left-1/2 -translate-x-1/2 w-[50vw] h-[auto] z-0"
                kecil2Class="absolute top-[16vh] left-1/2 -translate-x-1/2 w-[72vw] h-[auto] z-0"
            />
            <ElementPairComponent pair={ORANG_BERTAPA_PAIR} />
            <ElementPairComponent pair={DAUN_PAIR} />
            <ElementPairComponent pair={WAYANG_PAIR} />

            <div className="relative flex items-center flex-col z-10 space-y-[1.6vh]">
                <div>
                    <img
                        ref={PATTERN.ref}
                        src="/icon/pattern-event-top.svg"
                        alt="pattern-event-top"
                        className={`h-[15.1vh] transition-all duration-1000 ease-out ${
                            PATTERN.isInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-[8vh]"
                        } `}
                    />
                </div>
                <div className="flex items-center text-center flex-col">
                    <h1 className="font-samsktrigrama text-[28.8vh] -mt-[5.6vh]flex justify-center">
                        {comingSoonText.map((char, idx) => (
                            <span
                                key={idx}
                                className={`bg-[linear-gradient(180deg,_#FFC411_0%,_#CD9C1A_22.12%,_#BD6229_44.71%,_#5D2F24_60.58%,_#5D2F24_80.77%)] bg-clip-text text-transparent inline-block transition-all duration-500 ease-out
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
                    </h1>
                    <h2
                        className={`
                            text-[#C88B5F] text-[3.5vh] -mt-[7.2vh]
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
                        We're working on something exciting here.
                        <br /> This page will be available soon — thanks for
                        your patience!
                    </h2>
                </div>
                <div>
                    <img
                        ref={PATTERN.ref}
                        src="/icon/pattern-event-bottom.svg"
                        alt="pattern-event-bottom"
                        className={`h-[9.4vh] transition-all duration-1000 ease-out ${
                            PATTERN.isInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-[8vh]"
                        } `}
                    />
                </div>
            </div>
        </div>
    );
};

export default ComingSoonSection;
