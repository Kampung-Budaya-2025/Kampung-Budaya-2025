import React from "react";
import cardBackgroundSvg from "@assets/images/card-list-lomba.svg?url";

interface ListCardProps {
    title: string;
    icon: string;
    description: string;
    className?: string;
}

const ListCard: React.FC<ListCardProps> = ({
    title = "Kolaborasi Musik",
    icon = "/icon/kolaborasi-musik.svg",
    description = "Deskripsi default",
    className = "",
}) => {
    const handleDaftarClick = () => {
        console.log(`Daftar untuk ${title}`);
        // Tambahkan logika pendaftaran di sini
    };

    return (
        <div
            className={`group perspective-1000 w-[320px] h-[470px] ${className}`}
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
                    <div className="flex items-center justify-center mb-4 z-10">
                        <img
                            src={icon}
                            alt={title}
                            className="w-35 h-35 object-contain"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-center text-[#3F170D] text-2xl px-4 leading-tight z-10 max-w-full">
                        {title}
                    </h1>
                </div>

                {/* Back Side - Tampilan Baru */}
                <div
                    className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 flex flex-col overflow-hidden p-6"
                    style={{
                        backgroundImage: `url(${cardBackgroundSvg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Title - Fixed position */}
                    <div className="flex-shrink-0 pt-20">
                        <h2 className="text-center text-[#3F170D] text-2xl mb-2 z-10 tracking-[-0.7px]">
                            {title}
                        </h2>
                    </div>

                    {/* Description - Flexible area */}
                    <div className="flex-1 flex items-start justify-center px-2">
                        <p className="text-justify text-[#7A4D17] text-sm z-10 leading-[1.2] tracking-[-0.4px] whitespace-pre-line">
                            {description}
                        </p>
                    </div>

                    {/* Daftar Button - Fixed position */}
                    <div className="flex-shrink-0 pb-24 items-center justify-center flex">
                        <button
                            onClick={handleDaftarClick}
                            className="bg-[linear-gradient(180deg,#CE9C17_0%,#CD9514_52.04%,#CC8F12_100%)] hover:bg-[linear-gradient(180deg,#D4A51A_0%,#D39E17_52.04%,#D19515_100%)] text-white py-2 px-8 rounded-[40px] transition-colors duration-300 z-10 shadow-lg"
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
