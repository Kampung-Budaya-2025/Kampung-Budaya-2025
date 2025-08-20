import FAQCard from "@/Components/FAQ/UI/FAQCard/Page";
import Scrollbar from "@/Components/FAQ/UI/ScrollBar/Page";
import SearchField from "@/Components/FAQ/UI/SearchField/Page";
import FlowerPair from "@/Components/FAQ/UI/FlowerPair/Page";
import BatikBackground from "@/Components/FAQ/UI/BatikBackground/Page";
import DecorationSection from "@/Components/FAQ/UI/DecorationSection/Page";
import React, { useRef } from "react";
import "../../../css/app.css";
import useScrollSync from "@/Components/FAQ/Hooks/page";
import { useFlowerAnimations } from "@/Components/FAQ/Refs/page";

const FlowerDecorations: React.FC = () => {
    const flowers = useFlowerAnimations();

    return (
        <>
            {/* Bunga Besar */}
            <FlowerPair
                level="Besar"
                flowers={flowers.besar}
                containerClass="absolute -top-3 left-0 w-full h-[230px] z-0"
                wrapperClass="flex justify-between items-start w-full relative"
            />

            {/* Bunga Sedang */}
            <FlowerPair
                level="Sedang"
                flowers={flowers.sedang}
                containerClass="absolute top-0 left-0 w-full h-[130px] mt-1 z-0"
                wrapperClass="flex justify-between items-center w-full px-52"
            />

            {/* Bunga Kecil-1 */}
            <FlowerPair
                level="Kecil-1"
                flowers={flowers.kecil1}
                containerClass="absolute top-0 left-0 w-full h-[50px] mt-18 z-0"
                wrapperClass="flex justify-between items-center w-full px-94"
            />

            {/* Bunga Kecil-2 */}
            <FlowerPair
                level="Kecil-2"
                flowers={flowers.kecil2}
                containerClass="absolute top-0 left-0 w-full h-[50px] mt-36 z-0"
                wrapperClass="flex justify-between items-center w-full px-54"
            />
        </>
    );
};

const FAQSection: React.FC = () => {
    const faqContainerRef = useRef<HTMLDivElement>(null!);
    const {
        scrollValue,
        maxScrollValue,
        handleScrollChange,
        handleContainerScroll,
    } = useScrollSync(faqContainerRef);

    return (
        <div className="lg:col-span-3 flex flex-col relative">
            {/* Search Field */}
            <div className="mb-8 mx-11">
                <SearchField />
            </div>

            {/* FAQ Container with ScrollBar */}
            <div className="relative">
                {/* Custom ScrollBar */}
                <div className="absolute left-0 top-0 h-[300px] z-20">
                    <Scrollbar
                        startingValue={0}
                        defaultValue={scrollValue}
                        maxValue={maxScrollValue}
                        isStepped={false}
                        stepSize={1}
                        onValueChange={handleScrollChange}
                    />
                </div>

                {/* Scrollable FAQ Container */}
                <div
                    ref={faqContainerRef}
                    className="overflow-y-scroll overflow-x-hidden pl-11 scrollbar-hide max-h-[300px]"
                    onScroll={handleContainerScroll}
                >
                    <FAQCard />
                </div>
            </div>
        </div>
    );
};

const FAQPages: React.FC = () => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BatikBackground />
            <FlowerDecorations />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col mx-12 lg:mx-16 xl:mx-12 space-y-6 pt-32 pb-20">
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
