import FAQCard from "@/Components/FAQ/FAQCard/FAQCard";
import Scrollbar from "@/Components/FAQ/ScrollBar/ScrollBar";
import SearchField from "@/Components/FAQ/SearchField/SearchField";
import React, { useRef, useState, useEffect } from "react";

const FAQPages = () => {
    const faqContainerRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [maxScrollValue, setMaxScrollValue] = useState(100);

    // Calculate max scroll value based on content height
    useEffect(() => {
        const updateMaxScroll = () => {
            if (faqContainerRef.current) {
                const container = faqContainerRef.current;
                const scrollHeight = container.scrollHeight;
                const clientHeight = container.clientHeight;
                const maxScroll = Math.max(0, scrollHeight - clientHeight);
                setMaxScrollValue(maxScroll);
            }
        };

        updateMaxScroll();

        // Update on resize
        window.addEventListener("resize", updateMaxScroll);
        return () => window.removeEventListener("resize", updateMaxScroll);
    }, []);

    // Handle scroll value change from ScrollBar
    const handleScrollChange = (value: number) => {
        setScrollValue(value);
        if (faqContainerRef.current) {
            // Convert scroll value to actual scroll position
            const scrollPosition =
                (value / maxScrollValue) *
                (faqContainerRef.current.scrollHeight -
                    faqContainerRef.current.clientHeight);
            faqContainerRef.current.scrollTop = scrollPosition;
        }
    };

    // Handle scroll from mouse wheel to update ScrollBar
    const handleContainerScroll = () => {
        if (faqContainerRef.current) {
            const container = faqContainerRef.current;
            const scrollTop = container.scrollTop;
            const maxScroll = container.scrollHeight - container.clientHeight;

            if (maxScroll > 0) {
                const scrollPercentage =
                    (scrollTop / maxScroll) * maxScrollValue;
                setScrollValue(scrollPercentage);
            }
        }
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Batik - Full width layar */}
            <img
                src="/background/batik-horizontal.svg"
                alt="Batik Background"
                className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none opacity-20"
                style={{
                    objectFit: "cover",
                    minHeight: "100vh",
                }}
            />
            {/* Bunga Besar */}
            <div className="absolute -top-3 left-0 w-full h-[230px] overflow-hidden z-0">
                {/* Bunga Kiri - Overflow ke kiri - Rotasi searah jarum jam */}
                <img
                    src="/icon/bunga.svg"
                    alt="Bunga Besar Kiri"
                    width={230}
                    className="absolute top-0 -left-5 animate-spin-clockwise"
                />
                {/* Bunga Kanan - Overflow ke kanan - Rotasi berlawanan jarum jam */}
                <img
                    src="/icon/bunga.svg"
                    alt="Bunga Besar Kanan"
                    width={230}
                    className="absolute top-0 -right-5 animate-spin-counter"
                />
            </div>

            {/* Bunga Sedang */}
            <div className="absolute top-0 left-0 w-full h-[130px] mt-1 z-0">
                <div className="flex justify-between items-center w-full px-46">
                    {/* Bunga Kiri */}
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Sedang Kiri"
                        width={140}
                        className="flex-shrink-0 animate-spin-counter"
                    />
                    {/* Bunga Kanan */}
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Sedang Kanan"
                        width={140}
                        className="flex-shrink-0 animate-spin-clockwise"
                    />
                </div>
            </div>

             {/* Bunga Kecil-1*/}
            <div className="absolute top-0 left-0 w-full h-[50px] mt-18 z-0">
                <div className="flex justify-between items-center w-full px-86">
                    {/* Bunga Kiri */}
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Kecil-1 Kiri"
                        width={50}
                        className="flex-shrink-0 animate-spin-clockwise"
                    />
                    {/* Bunga Kanan */}
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Kecil-1 Kanan"
                        width={50}
                        className="flex-shrink-0 animate-spin-counter"
                    />
                </div>
            </div>

            {/* Bunga Kecil-2*/}
            <div className="absolute top-0 left-0 w-full h-[50px] mt-36 z-0">
                <div className="flex justify-between items-center w-full px-48">
                    {/* Bunga Kiri */}
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Kecil-2 Kiri"
                        width={50}
                        className="flex-shrink-0 animate-spin-counter"
                    />
                    {/* Bunga Kanan */}
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Kecil-2 Kanan"
                        width={50}
                        className="flex-shrink-0 animate-spin-clockwise"
                    />
                </div>
            </div>


            {/* Content Container */}
            <div className="relative z-10 flex flex-col mx-12 lg:mx-16 xl:mx-12 space-y-12 py-32">
                <h1
                    className="text-5xl lg:text-6xl xl:text-8xl text-center font-samsktrigrama tracking-[-0.02em] 
             bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)]
             bg-clip-text text-transparent"
                >
                    Frequently Ask Questions
                </h1>

                <section className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* FAQ Section */}
                    <div className="lg:col-span-3 flex flex-col relative">
                        {/* Search Field */}
                        <div className="mb-6 mx-11">
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

                            {/* Scrollable FAQ Container - Hide default scrollbar */}
                            <div
                                ref={faqContainerRef}
                                className="overflow-y-scroll overflow-x-hidden pl-11 scrollbar-hide"
                                style={{
                                    maxHeight: "300px",
                                }}
                                onScroll={handleContainerScroll}
                            >
                                <FAQCard />
                            </div>
                        </div>
                    </div>

                    {/* Decoration Section */}
                    <div className="lg:col-span-2 flex items-center justify-center pt-8">
                        <div className="relative">
                            {/* Candi Decoration */}
                            <img
                                src="/decoration/candi-faq.svg"
                                alt="Candi Decoration"
                                className="w-full max-w-[268px] h-auto object-contain"
                            />

                            {/* Mascot Cowok */}
                            <img
                                src="/mascot/mascot-cowok.svg"
                                alt="Mascot Cowok"
                                className="absolute w-[180px] lg:w-[200px] h-auto object-contain z-10"
                                style={{
                                    bottom: "-80px",
                                    left: "-15px",
                                }}
                            />

                            {/* Mascot Cewek */}
                            <img
                                src="/mascot/mascot-cewek.svg"
                                alt="Mascot Cewek"
                                className="absolute w-[180px] lg:w-[200px] h-auto object-contain z-10"
                                style={{
                                    bottom: "-80px",
                                    right: "-15px",
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Custom CSS untuk hide scrollbar */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                    scrollbar-width: none; /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none; /* Safari and Chrome */
                }
                
                .animate-spin-clockwise {
                    animation: spin-clockwise 20s linear infinite;
                }
                
                .animate-spin-counter {
                    animation: spin-counter 20s linear infinite;
                }
                
                @keyframes spin-clockwise {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                @keyframes spin-counter {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(-360deg);
                    }
                }
            `}</style>
        </div>
    );
};

export default FAQPages;
