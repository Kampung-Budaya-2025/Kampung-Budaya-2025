import React from "react";
import { router } from "@inertiajs/react";
import cardBackgroundSvg from "@assets/images/card-list-lomba.svg?url";

interface ListCardProps {
    eventId: string;
    title: string;
    icon: string;
    description: string;
    className?: string;
}

const ListCard: React.FC<ListCardProps> = ({
    eventId,
    title = "Kolaborasi Musik",
    icon = "/icon/kolaborasi-musik.svg",
    description = "Deskripsi default",
    className = "",
}) => {
    const handleDaftarClick = () => {
        // Navigate to register form with event type as URL parameter
        router.visit(`/register-form?eventType=${eventId}`, {
            method: "get",
        });
    };

    return (
        <div
            className={`group perspective-1000 w-[46vh] h-[74vh] ${className}`}
        >
            <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side - Tampilan Original */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden flex flex-col items-center justify-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${cardBackgroundSvg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-[1.6vh] z-10">
                        <img
                            src={icon}
                            alt={title}
                            className="w-[24vh] h-[24vh] object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-center text-[#3F170D] text-[3.5vh] px-[3vh] leading-tight z-10 max-w-full">
                        {title}
                    </h1>
                </div>

                {/* Back Side - Tampilan Baru */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col overflow-hidden px-[4vh] pt-[13vh] pb-[10vh]"
                    style={{
                        backgroundImage: `url(${cardBackgroundSvg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Title - Fixed position */}
                    <div className="flex-shrink-0 pt-12 flex flex-row justify-center items-center gap-3">
                        <img src="/decoration/list-card-decoration.svg" alt="decoration" className="mb-[3.2vh]" />
                        <h2 className="text-center text-[#3F170D] text-[2.8vh] leading-[1.25] mb-[0.8vh] z-10 tracking-[-0.07vh]">
                            {title}
                        </h2>
                        <img src="/decoration/list-card-decoration.svg" alt="decoration" className="mb-[3.2vh] scale-x-[-1]" />
                    </div>

                    {/* Description - Flexible area */}
                    <div className="flex-1 flex items-start justify-center -mt-[0.8vh]">
                        <p className="text-justify text-[#7A4D17] text-[1.6vh] z-10 leading-[1.2] tracking-[-0.2px] whitespace-pre-line">
                            {description}
                        </p>
                    </div>

                    {/* Daftar Button - Fixed position */}
                    <div className="flex-shrink-0 pb-[9.6vh] items-center justify-center flex">
                        <button
                            onClick={handleDaftarClick}
                            className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] hover:bg-[linear-gradient(180deg,#D4A51A_0%,#D39E17_52.04%,#D19515_100%)] text-white py-[0.8vh] px-[3.2vh] rounded-[40px] transition-colors duration-300 z-10 shadow-lg"
                        >
                            Daftar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { ListCard };
