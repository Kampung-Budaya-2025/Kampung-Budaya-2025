import BatikBackground from "@/Components/FAQ/UI/BatikBackground";
import DecorationSection from "@/Components/FAQ/UI/Decoration";
import FAQSection from "@/Components/FAQ/UI/FAQSection";
import React from "react";
import "../../../css/app.css";
import FlowerDecorations from "@/Components/FAQ/UI/FlowerDecoration";

const FAQPages: React.FC = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BatikBackground />
            <FlowerDecorations />

            {/* Content Container */}
            <div className="relative min-h-screen z-10 flex flex-col mx-[2.4vh] lg:mx-[4.8vh] space-y-[6.4vh] pt-[22.4vh] md:pt-[22.4vh] pb-[12vh] lg:pb-[15.2vh]">
                <h1 className="text-6xl lg:text-6xl xl:text-[14vh] text-center font-samsktrigrama tracking-[-0.02em] ">
                    <span className="block lg:inline bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent">Frequently </span>
                    <span className="block lg:inline bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent">
                        Asked Questions
                    </span>
                </h1>

                <section className="grid grid-cols-1 lg:grid-cols-5 gap-[4vh]">
                    <FAQSection />
                    <DecorationSection />
                </section>
            </div>
        </div>
    );
};

export default FAQPages;
