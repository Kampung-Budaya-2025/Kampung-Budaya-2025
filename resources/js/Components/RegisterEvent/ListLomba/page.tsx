import React from "react";
import { ListCard } from "./UI/ListCard";
import Button from "./UI/Button";
import { DecorationGroup } from "./UI/DecorationGroup";
import { SingleDecoration } from "./UI/SingleDecoration";
import { buttonData, cardData } from "./config/constants";
import { bungaDecorations, batikDecorations, bungaMahkotaDecoration } from "./config/constants";
import { useElementRefs } from "../RegisterHero/hooks/useElementRefs";
import ElementPairComponent from "../RegisterHero/UI/ElementPairComponent";

const ListLomba: React.FC = () => {

     const { BUNGA_PAIR, BATIK_PAIR } = useElementRefs();
    return (
        <div
            id="list-lomba"
            className="relative h-auto w-full flex flex-col py-8"
        >
            {/* Bunga Kiri & Kanan */}
            {/* <DecorationGroup decoration={bungaDecorations} /> */}
            {/* <DecorationGroup decoration={batikDecorations} /> */}
            <ElementPairComponent pair={BUNGA_PAIR} />
            <ElementPairComponent pair={BATIK_PAIR} />

            {/* Button Section */}
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
            <SingleDecoration decoration={bungaMahkotaDecoration} />

            {/* Grid Container dengan layout responsif */}
            <div className="relative w-full px-4 pt-6 pb-32 lg:px-24">
                {/* Desktop: Baris pertama - 3 cards */}
                <div className="hidden lg:flex justify-between max-w-[1100px] mx-auto mb-16 px-4 gap-8">
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

                {/* Desktop: Baris kedua - 2 cards */}
                <div className="hidden lg:flex justify-center gap-12 max-w-[1000px] mx-auto px-4">
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

                {/* Mobile & Tablet: Semua cards dalam 1 kolom */}
                <div className="lg:hidden flex flex-col items-center gap-8 w-full mx-auto">
                    {cardData.map((card) => (
                        <ListCard
                            key={card.id}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListLomba;
