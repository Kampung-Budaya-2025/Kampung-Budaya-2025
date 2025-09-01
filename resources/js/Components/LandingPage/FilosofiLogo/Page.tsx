import GradientText from "@/Components/Common/GradientText";
import React, { useState, TouchEvent } from "react";

// Define the shape of a logo object
interface LogoItem {
    id: number;
    src: string;
    title: string;
    description: string;
}

const logoData: LogoItem[] = [
    {
        id: 1,
        src: "icon/logo-kampung-budaya.svg",
        title: "RUSA",
        description:
            "Rusa Bawean (Axis kuhlii) adalah spesies endemik Indonesia yang hanya ditemukan di Pulau Bawean, Jawa Timur. Rusa ini melambangkan keberlanjutan budaya, keseimbangan dan harmoni, serta identitas lokal yang unik.",
    },
    {
        id: 2,
        src: "img/decoration/daun.svg",
        title: "SILUET RUSA BERLARI",
        description:
            "Siluet rusa berlari mencerminkan dinamika dan perkembangan budaya yang terus bergerak maju. 5 garis pada siluet rusa berlari melambangkan 5 sila pada pancasila dan 5 pulau besar yang ada di Indonesia.",
    },
    {
        id: 3,
        src: "icon/logo-kampung-budaya.svg",
        title: "TANDUK RUSA",
        description:
            "Tanduk yang bercabang melambangkan koneksi antara masa lalu, masa kini, dan masa depan budaya. Tiga cabang pada tiap tanduk melambangkan tri dharma perguruan tinggi.",
    },
    {
        id: 4,
        src: "icon/logo-kampung-budaya.svg",
        title: "BATIK KAWUNG",
        description:
            "Motif Batik 'Kawung' dari pulau melambangkan kesempurnaan, kemurnian, dan kesucian.",
    },
    {
        id: 5,
        src: "icon/logo-kampung-budaya.svg",
        title: "BATIK PUCUK RABUANG",
        description:
            "Motif Batik 'Pucuk Rabuang' dari pulau Sumatera melambangkan pertumbuhan dan perkembangan.",
    },
    {
        id: 6,
        src: "icon/logo-kampung-budaya.svg",
        title: "BATIK DAYAK",
        description:
            "Motif Batik 'Dayak' dari pulau Kalimantan melambangkan kearifan lokal dan spiritualitas.",
    },
    {
        id: 7,
        src: "icon/logo-kampung-budaya.svg",
        title: "BATIK TORAJA",
        description:
            "Motif Batik 'Toraja Pa`Tangke Rapa' dari Pulau Sulawesi melambangkan harapan kebahagiaan dan kedamaian. ",
    },
    {
        id: 8,
        src: "icon/logo-kampung-budaya.svg",
        title: "BATIK ASMAT",
        description:
            "Motif Batik 'Asmat' dari Pulau Papua melambangkan hubungan manusia dengan leluhur.",
    },
    {
        id: 9,
        src: "icon/logo-kampung-budaya.svg",
        title: "WARNA EMAS",
        description:
            "Melambangkan nilai luhur dari tradisi dan warisan budaya yang dijaga dan dilestarikan. Emas juga dimaknai sebagai cahaya harapan masa depan bahwa budaya dapat terus lestari dengan zaman yang terus berkembang ini.",
    },
    {
        id: 10,
        src: "icon/logo-kampung-budaya.svg",
        title: "WARNA COKLAT",
        description:
            "Warna cokelat merepresentasikan akar budaya yang tumbuh dari alam dan tradisi masyarakat.",
    },
];

const FilosofiLogo = () => {
    const [activeLogoIndex, setActiveLogoIndex] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const logoCount = logoData.length;

    const handleLogoClick = (index: number) => {
        if (index !== activeLogoIndex && !isTransitioning) {
            setIsTransitioning(true);
            setActiveLogoIndex(index);

            setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }
    };

    // Swipe handling
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            handleLogoClick((activeLogoIndex + 1) % logoCount);
        }
        if (isRightSwipe) {
            handleLogoClick((activeLogoIndex - 1 + logoCount) % logoCount);
        }
    };

    const activeLogoData = logoData[activeLogoIndex];
    return (
        <section className="relative flex flex-col pt-24 w-full overflow-hidden">
            <div>
                <img
                    className="w-full rotate-180"
                    src="img/background/batikan.svg"
                    alt=""
                />
            </div>

            <div className="w-full flex flex-col px-24 my-24">
                {/* Background Ornament */}
                <div className="z-0 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/4 w-[800px] h-[800px]">
                    <div className="relative w-full h-full flex justify-center items-center">
                        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#E1B01B] opacity-10"></div>
                        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#E1B01B] opacity-10"></div>
                        <div className="absolute inset-0 m-auto flex justify-center items-center">
                            <img
                                className="w-72 opacity-20 animate-spin-counter"
                                src="img/decoration/bunga.svg"
                                alt="Bunga Dekorasi"
                            />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="flex flex-col w-full items-end">
                    <GradientText className="font-samsktrigrama text-8xl">
                        Filosofi Logo
                    </GradientText>
                    <p className="font-samsktrigrama text-[#3F170D] text-8xl">
                        Kampung Budaya 2024
                    </p>
                </div>

                {/* Logo Display */}
                <div
                    className="flex flex-row w-full h-full my-12 gap-24 items-center justify-center"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Active Logo */}
                    <div className="relative flex flex-2 items-center justify-center">
                        <div
                            className={`absolute w-[600px] h-[600px] rounded-full bg-[#E1B01B] opacity-10 transition-all duration-300 ${
                                isTransitioning ? "scale-110" : "scale-100"
                            }`}
                        ></div>
                        <div
                            className={`absolute w-[500px] h-[500px] rounded-full bg-[#E1B01B] opacity-20 transition-all duration-300 ${
                                isTransitioning ? "scale-105" : "scale-100"
                            }`}
                        ></div>
                        <div
                            className={`absolute w-[400px] h-[400px] rounded-full bg-[#E1B01B] opacity-30 transition-all duration-300 ${
                                isTransitioning ? "scale-110" : "scale-100"
                            }`}
                        ></div>

                        <img
                            className={`w-68 relative z-10 transition-all duration-300 ${
                                isTransitioning
                                    ? "scale-105 opacity-80"
                                    : "scale-100 opacity-100"
                            }`}
                            src={activeLogoData.src}
                            alt="Logo Kampung Budaya Active"
                        />
                    </div>

                    {/* Next 4 Logos */}
                    <div className="relative flex flex-3 gap-12 items-center">
                        {Array.from({ length: 4 }).map((_, i) => {
                            const index = (activeLogoIndex + i + 1) % logoCount;
                            const logo = logoData[index];

                            let sizeClass, opacity, cursor, zIndex;

                            if (i === 0) {
                                sizeClass = "w-50";
                                opacity = "opacity-90";
                                cursor = "cursor-pointer hover:opacity-100";
                                zIndex = "z-20";
                            } else if (i === 1) {
                                sizeClass = "w-40";
                                opacity = "opacity-70";
                                cursor = "cursor-pointer hover:opacity-90";
                                zIndex = "z-15";
                            } else if (i === 2) {
                                sizeClass = "w-30";
                                opacity = "opacity-50";
                                cursor = "cursor-pointer hover:opacity-70";
                                zIndex = "z-10";
                            } else {
                                sizeClass = "w-20";
                                opacity = "opacity-30";
                                cursor = "cursor-pointer hover:opacity-50";
                                zIndex = "z-5";
                            }

                            return (
                                <img
                                    key={logo.id}
                                    className={`${sizeClass} ${opacity} ${cursor} ${zIndex} relative transition-all duration-300 transform hover:scale-105`}
                                    src={logo.src}
                                    alt={`Logo ${logo.id}`}
                                    onClick={() => handleLogoClick(index)}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col w-full items-end">
                    <p
                        className={`text-[#3F170D] text-2xl font-bold transition-all duration-300 ${
                            isTransitioning
                                ? "opacity-70 translate-y-2"
                                : "opacity-100 translate-y-0"
                        }`}
                    >
                        {activeLogoData.title}
                    </p>
                    <p
                        className={`text-[#3F170D] text-xl w-[50%] text-right mt-4 transition-all duration-300 ${
                            isTransitioning
                                ? "opacity-70 translate-y-2"
                                : "opacity-100 translate-y-0"
                        }`}
                    >
                        {activeLogoData.description}
                    </p>
                </div>

                {/* Navigation Buttons */}
                <button
                    className="absolute left-8 top-1/2 translate-y-36 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300 z-30"
                    onClick={() =>
                        handleLogoClick(
                            (activeLogoIndex - 1 + logoCount) % logoCount
                        )
                    }
                >
                    <svg
                        className="w-6 h-6 text-[#3F170D]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    className="absolute right-8 top-1/2 translate-y-36 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center transition-all duration-300 z-30"
                    onClick={() =>
                        handleLogoClick((activeLogoIndex + 1) % logoCount)
                    }
                >
                    <svg
                        className="w-6 h-6 text-[#3F170D]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default FilosofiLogo;
