import React from "react";
import { ListCard } from "./UI/ListCard";
import Button from "./UI/Button";
import { SingleDecoration } from "./UI/SingleDecoration";
import {
    bungaMahkotaDecoration,
    cardData,
    buttonData,
} from "./config/constants";
import { useElementRefs } from "../RegisterHero/hooks/useElementRefs";
import ElementPairComponent from "../RegisterHero/UI/ElementPairComponent";
import FlowerDecorations from "@/Components/Common/FlowerDecoration";
import { AnimatedFlower } from "./UI/AnimatedFlower";

const ListLomba: React.FC = () => {
    const { BATIK_PAIR, BUNGA_PAIR } = useElementRefs();
    return (
        <div
            id="list-lomba"
            className="relative h-auto w-full flex flex-col py-8"
        >
            {/* Bunga Kiri & Kanan */}
            <FlowerDecorations
                showPairs={["besar"]}
                besarClass="block absolute top-1/3 left-1/2 -translate-x-1/2 w-[115vw] h-auto z-10 opacity-30"
            />
            {/*Batik Kiri & Kanan  */}
            <ElementPairComponent pair={BATIK_PAIR} />

            {/* Button Section */}
            <div className="flex flex-1 items-center justify-center w-full h-screen gap-6">
                {buttonData.map((button) => (
                    <Button
                        key={button.id}
                        text={button.text}
                        onClick={button.onClick}
                        href={button.href}
                    />
                ))}
            </div>

            {/* Bunga Mahkota */}
            <SingleDecoration decoration={bungaMahkotaDecoration} />

            {/* Grid Container dengan layout responsif */}
            <div className="relative w-full px-[1.6vh] pt-[2.4vh] pb-[25vh] lg:px-[9.6vh]">
                {/* Desktop & Tablet: 3 kolom grid, 6 card */}
                <div className="hidden lg:grid grid-cols-3 w-[170vh] justify-items-center mx-auto">
                    {cardData.slice(0, 6).map((card) => (
                        <ListCard
                            key={card.id}
                            eventId={card.id}
                            title={card.title}
                            icon={card.icon}
                            description={card.description}
                            registrationStart={card.registrationStart}
                            registrationEnd={card.registrationEnd}
                        />
                    ))}
                </div>

                {/* Mobile: Semua cards dalam 1 kolom */}
                <div className="lg:hidden flex flex-col items-center -gap-[3.2vh] w-full mx-auto">
                    {cardData.slice(0, 6).map((card) => (
                        <React.Fragment key={card.id}>
                            <ListCard
                                eventId={card.id}
                                title={card.title}
                                icon={card.icon}
                                description={card.description}
                                registrationStart={card.registrationStart}
                                registrationEnd={card.registrationEnd}
                            />
                            <AnimatedFlower />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListLomba;
