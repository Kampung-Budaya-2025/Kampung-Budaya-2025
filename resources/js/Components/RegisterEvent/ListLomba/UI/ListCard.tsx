import React, { useState } from "react";
import { router } from "@inertiajs/react";
import cardBackgroundSvg from "@assets/images/card-list-lomba.svg?url";

interface ListCardProps {
    eventId: string;
    title: string;
    icon: string;
    date: string;
    category: string;
    description: string;
    className?: string;
    registrationStart?: string;
    registrationEnd?: string;
}

const ListCard: React.FC<ListCardProps> = ({
    eventId,
    title = "Kolaborasi Musik",
    icon = "/icon/kolaborasi-musik.svg",
    date = "",
    category = "",
    description = "Deskripsi default",
    className = "",
    registrationStart,
    registrationEnd,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const getRegistrationStatus = (): { isOpen: boolean; message: string } => {
        // Registration is always open
        return { isOpen: true, message: "Daftar" };
    };

    const registrationStatus = getRegistrationStatus();

    const handleDaftarClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Mencegah card-click event saat tombol di-klik

        // Jika di mobile, flip terlebih dahulu
        if (window.innerWidth < 1024) {
            setIsFlipped(true);
            // Tidak langsung eksekusi proceedWithRegistration di sini
            // Biarkan user melihat back side dan memilih untuk klik button "Daftar" di back side
        } else {
            // Di desktop, langsung proses registrasi
            proceedWithRegistration();
        }
    };

    const handleBackDaftarClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Mencegah card-click event
        proceedWithRegistration(); // Langsung eksekusi registrasi
    };

    const proceedWithRegistration = () => {
        if (registrationStatus.isOpen) {
            // Event IDs yang menggunakan routing internal
            const internalRoutingEvents = [
                "kolaborasi-musik-nusantara",
                "gelanggang-tari-nusantara",
                "panggung-budaya-nusantara",
            ];

            if (internalRoutingEvents.includes(eventId)) {
                // Navigate to register form with event type as URL parameter
                router.visit(`/register-form?eventType=${eventId}`, {
                    method: "get",
                });
            } else {
                // Google Form URLs mapping untuk event lainnya
                const googleFormUrls: { [key: string]: string } = {
                    "bazar-kebudayaan":
                        "https://docs.google.com/forms/d/e/1FAIpQLSdEiS3VK32u-_g2n-bQzWoA8p_9G68PXmIhS5aXGlFI7u_QuA/viewform",
                    "gemilang-busana-adat":
                        "https://docs.google.com/forms/d/e/1FAIpQLSfbwFsz_V9u8bPwsVAOJGc6RmuZZHAgxIf94YPhoz_sX_vTCA/viewform",
                    "teater-cakrawala-budaya":
                        "https://docs.google.com/forms/d/e/1FAIpQLSfkUVrHntBQPU2veO76AjijAYOVYopW7WozN89KCmelsPn_rw/viewform",
                };

                const googleFormUrl = googleFormUrls[eventId];

                if (googleFormUrl) {
                    // Redirect ke Google Form
                    window.open(googleFormUrl, "_blank");
                } else {
                    console.warn(
                        `No Google Form URL found for eventId: ${eventId}`
                    );
                }
            }
        }
    };

    const handleCardClick = () => {
        // Hanya toggle flip pada layar kecil (mobile)
        if (window.innerWidth < 1024) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div
            className={`group perspective-1000 w-[280px] h-[400px] lg:w-[min(46vh,300px)] lg:h-[min(74vh,500px)] xl:w-[min(46vh,350px)] xl:h-[min(74vh,580px)] ${className}`}
            onClick={handleCardClick}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d lg:group-hover:rotate-y-180 ${
                    isFlipped ? "rotate-y-180" : ""
                }`}
            >
                {/* Front Side - Tampilan Original */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center overflow-hidden z-10"
                    style={{
                        backgroundImage: `url(${cardBackgroundSvg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-[1.6vh] z-20">
                        <img
                            src={icon}
                            alt={title}
                            className="w-[8rem] h-[8rem] lg:w-[min(24vh,150px)] lg:h-[min(24vh,150px)] object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-center text-[#3F170D] text-lg lg:text-[min(3.5vh,28px)] px-[3vh] leading-tight z-20 max-w-full mb-0 lg:mb-0">
                        {title}
                    </h1>

                    {/* Mobile Button - Only visible on mobile */}
                    <div className="lg:hidden flex items-center justify-center mt-4">
                        <button
                            onClick={handleDaftarClick}
                            className="py-2 px-6 rounded-[40px] transition-colors duration-300 z-30 shadow-lg text-white text-sm font-medium bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] hover:bg-[linear-gradient(180deg,#D4A51A_0%,#D39E17_52.04%,#D19515_100%)] cursor-pointer"
                        >
                            Klik untuk Daftar
                        </button>
                    </div>
                </div>

                {/* Back Side - Tampilan Baru */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col overflow-hidden px-[4vh] pt-[6vh] md:pt-[13vh] pb-[10vh] z-20"
                    style={{
                        backgroundImage: `url(${cardBackgroundSvg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    {/* Title - Fixed position */}
                    <div className="flex-shrink-0 pt-[min(6vh,50px)] md:pt-[min(0.2vh,10px)] lg:pt-[min(4.8vh,40px)] flex flex-row justify-center items-center gap-2">
                        <img
                            src="/decoration/list-card-decoration.svg"
                            alt="decoration"
                            className="mb-[min(3.2vh,20px)] w-[20px] lg:w-[min(2.5vh,39px)] h-auto"
                        />
                        <h2 className="text-center text-[#3F170D] text-lg lg:text-[min(2.8vh,22px)] leading-[1.25] mb-[min(0.8vh,8px)] z-30 tracking-[-0.5px]">
                            {title}
                        </h2>
                        <img
                            src="/decoration/list-card-decoration.svg"
                            alt="decoration"
                            className="mb-[min(3.2vh,20px)] w-[20px] lg:w-[min(2.5vh,39px)] h-auto scale-x-[-1]"
                        />
                    </div>

                    {/* Date and Category */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-0 -mt-[0.8vh] mb-[1.2vh]">
                        <p className="text-center text-[#7A4D17] text-sm md:text-base z-30 font-medium">
                            {date}
                        </p>
                        <p className="text-center text-[#7A4D17] text-sm md:text-base z-30 italic">
                            {category}
                        </p>
                    </div>

                    {/* Description - Flexible area */}
                    <div className="flex-1 flex items-start justify-center -mt-[0.5vh] md:-mt-[0.8vh] overflow-y-auto custom-cursor-override">
                        <p className="text-justify text-[#7A4D17] text-sm lg:text-[min(24px,2vh)] z-30 leading-[1.2] tracking-[-0.2px] whitespace-pre-line pr-2">
                            {description}
                        </p>
                    </div>

                    {/* Daftar Button - Fixed position */}
                    <div className="flex-shrink-0 pb-[min(2vh,30px)] md:pb-[min(3vh,40px)] lg:pb-[min(9.6vh,60px)] pt-[min(2vh,12px)] items-center justify-center flex">
                        <button
                            onClick={handleBackDaftarClick}
                            disabled={!registrationStatus.isOpen}
                            className={`
                                py-[min(0.8vh,8px)] px-[min(3.2vh,24px)] rounded-[40px] transition-colors duration-300 z-30 shadow-lg text-white text-sm lg:text-base
                                ${
                                    registrationStatus.isOpen
                                        ? "bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] hover:bg-[linear-gradient(180deg,#D4A51A_0%,#D39E17_52.04%,#D19515_100%)] cursor-pointer"
                                        : "bg-gray-400 cursor-not-allowed opacity-70"
                                }
                            `}
                        >
                            {registrationStatus.message}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ListCard };
