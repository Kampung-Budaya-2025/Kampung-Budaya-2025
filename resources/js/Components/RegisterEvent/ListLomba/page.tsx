import React from "react";
import { ListCard } from "./UI/ListCard";
import Button from "./UI/Button";
import { DecorationGroup } from "./UI/DecorationGroup";
import { SingleDecoration } from "./UI/SingleDecoration";
import { buttonData, cardData } from "./config/constants";
import {
    bungaDecorations,
    batikDecorations,
    bungaMahkotaDecoration,
} from "./config/constants";
import { useElementRefs } from "../RegisterHero/hooks/useElementRefs";
import ElementPairComponent from "../RegisterHero/UI/ElementPairComponent";

const ListLomba: React.FC = () => {

     const { BATIK_PAIR, BUNGA_PAIR } = useElementRefs();
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
            <div className="relative w-full px-[1.6vh] pt-[2.4vh] pb-[12.8vh] lg:px-[9.6vh]">
                {/* Desktop & Tablet: 3 kolom grid, 6 card */}
                <div className="hidden lg:grid grid-cols-3 w-[170vh] justify-items-center mx-auto">
                    {cardData.slice(0, 6).map((card) => (
                        <ListCard
                            key={card.id}
                            eventId={card.id}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                        />
                    ))}
                </div>

                {/* Mobile: Semua cards dalam 1 kolom */}
                <div className="lg:hidden flex flex-col items-center gap-[3.2vh] w-full mx-auto">
                    {cardData.slice(0, 6).map((card) => (
                        <ListCard
                            key={card.id}
                            eventId={card.id}
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
