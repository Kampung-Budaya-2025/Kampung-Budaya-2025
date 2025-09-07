import BatikBackground from "@/Components/FAQ/UI/BatikBackground";
import DecorationSection from "@/Components/FAQ/UI/Decoration";
import FAQSection from "@/Components/FAQ/UI/FAQSection";
import React from "react";
import "../../../css/app.css";
import FlowerDecorations from "@/Components/Common/FlowerDecoration";
import { AnimatedFlower } from "@/Components/RegisterEvent/ListLomba/UI/AnimatedFlower";
import { AnimatedElement } from "@/Components/RegisterEvent/ListLomba/UI/AnimateElement";

const FAQPages: React.FC = () => {
    return (
        <div className="relative overflow-x-hidden">
            <AnimatedFlower
                // Mengubah kelas container, misalnya margin dan opacity
                containerClassName="block md:hidden w-[190vw] absolute -top-22 left-1/2 flex justify-around pointer-events-none my-16 transform -translate-x-1/2"
                leftFlowerClassName="w-[180px] h-[186px] animate-spin-clockwise"
                rightFlowerClassName="w-[180px] h-[186px] animate-spin-counter"
                leftFlowerTransition="all 2s ease-in-out 0.1s"
                rightFlowerTransition="all 2s ease-in-out 0.1s"
            />
            <AnimatedElement
                src="/icon/bunga.svg"
                alt="Bunga Mahkota"
                containerClassName="block md:hidden absolute w-full h-auto top-0 left-1/2 flex justify-center items-center transform -translate-x-1/2 rotate-180 z-20"
                elementClassName="h-[186px] w-auto animate-spin-clockwise"
                transition="all 2s ease-in-out 0.5s"
                yOffset={30}
            />

            <div className="relative min-h-screen overflow-hidden">
                <BatikBackground />
                {/* <FlowerDecorations /> */}
                <FlowerDecorations
                    showPairs={["besar", "sedang", "kecil1", "kecil2"]}
                />

                {/* Content Container */}
                <div className="relative min-h-screen z-10 flex flex-col mx-[2.4vh] lg:mx-[4.8vh] space-y-[6.4vh] pt-[26.4vh] md:pt-[22.4vh] pb-[12vh] lg:pb-[15.2vh]">
                    <h1 className="text-6xl lg:text-6xl xl:text-[14vh] text-center font-samsktrigrama tracking-[-0.02em] ">
                        <span className="block sm:inline bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent">
                            Frequently{" "}
                        </span>
                        <span className="block sm:inline bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent">
                            Asked Questions
                        </span>
                    </h1>

                    <section className="grid grid-cols-1 lg:grid-cols-5 gap-[4vh]">
                        <FAQSection />
                        <DecorationSection />
                    </section>
                </div>
            </div>
            <div className='hidden md:block absolute bottom-0 h-[3vh] w-full bg-[#3F170D] rounded-t-4xl z-20'></div>
        </div>
    );
};

export default FAQPages;
