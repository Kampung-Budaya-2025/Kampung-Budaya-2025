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
import { Flower } from "lucide-react";
import { AnimatedElement } from "./UI/AnimateElement";

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
                besarClass="block absolute top-1/3 left-1/2 -translate-x-1/2 w-[115vw] h-auto z-0 opacity-30"
            />

            <AnimatedFlower 
                containerClassName="block lg:hidden w-[190vw] absolute -bottom-18 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16 z-10"
                leftFlowerClassName="h-[8.5rem] w-auto animate-spin-clockwise"
                rightFlowerClassName="h-[8.5rem] w-auto animate-spin-counter"
                leftFlowerTransition="all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                rightFlowerTransition="all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            />
            <AnimatedFlower 
                containerClassName="block lg:hidden w-[150vw] absolute bottom-16 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16 z-10"
                leftFlowerClassName="h-[3.125rem] w-auto animate-spin-clockwise"
                rightFlowerClassName="h-[3.125rem] w-auto animate-spin-counter"
                leftFlowerTransition="all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
                rightFlowerTransition="all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
            />
            <AnimatedFlower 
                containerClassName="block lg:hidden w-[110vw] absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-around pointer-events-none my-16 z-10"
                leftFlowerClassName="h-[1.75rem] w-auto animate-spin-clockwise"
                rightFlowerClassName="h-[1.75rem] w-auto animate-spin-counter"
                leftFlowerTransition="all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
                rightFlowerTransition="all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
            />

            <AnimatedElement 
                containerClassName="block md:hidden w-screen absolute -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none z-0"
                elementClassName="w-full h-auto"
                src="/background/batik-horizontal-commingsoon-mobile-2.svg"
                alt="Batik"
                yOffset={30}
            />
            {/*Batik Kiri & Kanan  */}
            <ElementPairComponent pair={BATIK_PAIR} />

            {/* Button Section */}
            <div className="flex flex-1 items-center justify-center w-full h-screen gap-6 flex-col sm:flex-row">
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
            <div className="relative w-full px-[1.6vh] pt-[2.4vh] pb-[24vh] lg:pb-[32vh] lg:px-[9.6vh]">
                {/* Desktop & Tablet: 3 kolom grid, 6 card */}
                <div className="hidden lg:grid grid-cols-3 gap-6 max-w-[min(80vw,1200px)] justify-items-center mx-auto">
                    {cardData.slice(0, 6).map((card) => (
                        <ListCard
                            key={card.id}
                            eventId={card.id}
                            title={card.title}
                            icon={card.icon}
                            date={card.date}
                            category={card.category}
                            description={card.description}
                            registrationStart={card.registrationStart}
                            registrationEnd={card.registrationEnd}
                        />
                    ))}
                </div>

                {/* Mobile: Semua cards dalam 1 kolom */}
                <div className="lg:hidden flex flex-col items-center -gap-[3.2vh] md:-gap-[5.6vh] w-full mx-auto">
                    {cardData.slice(0, 6).map((card, index) => (
                        <React.Fragment key={card.id}>
                            <ListCard
                                eventId={card.id}
                                title={card.title}
                                icon={card.icon}
                                date={card.date}
                                category={card.category}
                                description={card.description}
                                registrationStart={card.registrationStart}
                                registrationEnd={card.registrationEnd}
                            />
                            {index < cardData.slice(0, 6).length - 1 && <AnimatedFlower />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
                <div className='hidden md:block absolute bottom-0 h-[3vh] w-full bg-[#3F170D] rounded-t-4xl z-20'>
            </div>
        </div>
    );
};

export default ListLomba;
