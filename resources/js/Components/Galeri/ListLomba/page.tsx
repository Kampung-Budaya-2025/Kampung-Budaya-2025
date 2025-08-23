import React from "react";
import { ListCard } from "./UI/ListCard";
import Button from "./UI/Button";
import { buttonData, cardData } from "./config/constants";

const ListLomba: React.FC = () => {
    return (
        <div
            id="list-lomba"
            className="relative h-auto w-full flex flex-col py-8"
        >
            {/* Bunga Kiri & Kanan */}
            <div className="absolute top-110 left-0 w-full flex justify-between pt-4 pointer-events-none opacity-30">
                {/* Bunga Kiri */}
                <div>
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Kiri"
                        className="absolute -left-30 w-[240px] h-[240px]"
                    />
                </div>
                {/* Bunga Kanan */}
                <div>
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Kanan"
                        className="absolute -right-30 w-[240px] h-[240px] scale-x-[-1]"
                    />
                </div>
            </div>

            {/* Batik Kiri & Kanan */}
            <div className="absolute bottom-50 left-0 w-full flex justify-between pb-4 pointer-events-none overflow-visible z-0">
                {/* Batik Kiri */}
                <div>
                    <img
                        src="/icon/batik.svg"
                        alt="Batik Kiri"
                        className="absolute left-0 w-[305px] h-auto"
                    />
                </div>
                {/* Batik KANAN */}
                <div>
                    <img
                        src="/icon/batik.svg"
                        alt="Batik Kanan"
                        className="absolute right-0 w-[305px] h-auto scale-x-[-1]"
                    />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center w-full h-screen gap-6">
                {buttonData.map((button) => (
                    <Button
                        key={button.id}
                        text={button.text}
                        onClick={button.onClick}
                    />
                ))}
            </div>

            {/* Bunga Mahkota */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-0">
                <img src="/icon/bunga-mahkota.svg" alt="Bunga Mahkota" />
            </div>

            {/* Grid Container dengan layout 2 baris */}
            <div className="relative w-full px-24 pt-6 pb-32">
                {/* Baris pertama - 3 cards dengan spacing yang lebih baik */}
                <div className="flex justify-between max-w-[1400px] mx-auto mb-16 px-4 gap-8">
                    <ListCard
                        key={cardData[0].id}
                        title={cardData[0].title}
                        icon={cardData[0].icon}
                        description={cardData[0].description}
                    />
                    <ListCard
                        key={cardData[1].id}
                        title={cardData[1].title}
                        icon={cardData[1].icon}
                        description={cardData[1].description}
                    />
                    <ListCard
                        key={cardData[2].id}
                        title={cardData[2].title}
                        icon={cardData[2].icon}
                        description={cardData[2].description}
                    />
                </div>

                {/* Baris kedua - 2 cards dengan spacing yang lebih baik */}
                <div className="flex justify-center gap-10 max-w-[1000px] mx-auto px-4">
                    <ListCard
                        key={cardData[3].id}
                        title={cardData[3].title}
                        icon={cardData[3].icon}
                        description={cardData[3].description}
                    />
                    <ListCard
                        key={cardData[4].id}
                        title={cardData[4].title}
                        icon={cardData[4].icon}
                        description={cardData[4].description}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListLomba;
