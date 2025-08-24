import BatikBackground from "@/Components/FAQ/UI/BatikBackground.tsx";
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
            <div className="relative z-10 flex flex-col mx-12 lg:mx-16 xl:mx-12 space-y-6 pt-64 md:pt-32 pb-20">
                <h1 className="text-5xl lg:text-6xl xl:text-8xl text-center font-samsktrigrama tracking-[-0.02em] bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)] bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h1>

                <section className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <FAQSection />
                    <DecorationSection />
                </section>
            </div>
        </div>
    );
};

export default FAQPages;
