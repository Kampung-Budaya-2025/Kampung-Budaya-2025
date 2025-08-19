import FAQCard from "@/Components/FAQ/FAQCard/FAQCard";
import Scrollbar from "@/Components/FAQ/ScrollBar/ScrollBar";
import SearchField from "@/Components/FAQ/SearchField/SearchField";
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion"; // Tambahkan import ini
import "../../../css/app.css"; // Import CSS file

const FAQPages = () => {
    const faqContainerRef = useRef<HTMLDivElement>(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [maxScrollValue, setMaxScrollValue] = useState(100);

    // Ref dan inView untuk background batik atas & bawah
    const batikTopRef = useRef<HTMLImageElement>(null);
    const batikBottomRef = useRef<HTMLImageElement>(null);
    const bungaBesarRef = useRef<HTMLImageElement>(null);
    const bungaBesarKiriRef = useRef<HTMLImageElement>(null);
    const bungaBesarKananRef = useRef<HTMLImageElement>(null);
    const isBatikTopInView = useInView(batikTopRef, {
        once: false,
        margin: "0px",
        amount: 0.2, // threshold 20%
    });
    const isBatikBottomInView = useInView(batikBottomRef, {
        once: false,
        margin: "0px",
        amount: 0.2, // threshold 20%
    });
    const isBungaBesarInView = useInView(bungaBesarRef, {
        once: false,
        margin: "0px",
        amount: 0.2, // threshold 20%
    });
    const isBungaBesarKiriInView = useInView(bungaBesarKiriRef, {
        once: false,
        margin: "0px",
        amount: 0.2,
    });
    const isBungaBesarKananInView = useInView(bungaBesarKananRef, {
        once: false,
        margin: "0px",
        amount: 0.2,
    });

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
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Batik - Full width layar */}
            <img
                ref={batikTopRef}
                src="/background/batik-horizontal.svg"
                alt="Batik Background"
                className="absolute top-0 left-0 w-full h-auto z-0 pointer-events-none"
                style={{
                    objectFit: "cover",
                    opacity: isBatikTopInView ? 1 : 0,
                    transform: isBatikTopInView
                        ? "translateY(0)"
                        : "translateY(-40px)", // dari atas ke bawah
                    transition:
                        "opacity 1.2s cubic-bezier(.9,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                }}
            />

            {/* Background Batik Bawah - Rotasi 180 derajat */}
            <img
                ref={batikBottomRef}
                src="/background/batik-horizontal.svg"
                alt="Batik Background Bottom"
                className="absolute left-0 bottom-0 w-full h-auto z-0 pointer-events-none rotate-180"
                style={{
                    objectFit: "cover",
                    opacity: isBatikBottomInView ? 1 : 0,
                    transform: isBatikBottomInView
                        ? "translateY(0)"
                        : "translateY(-80px)", // dari bawah ke atas
                    transition:
                        "opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                }}
            />

            {/* Bunga Besar */}
            <div className="absolute -top-3 left-0 w-full h-[230px] z-0">
                {/* Bunga Kiri */}
                <div
                    ref={bungaBesarKiriRef}
                    className="absolute top-0 -left-5"
                    style={{
                        opacity: isBungaBesarKiriInView ? 1 : 0,
                        transform: isBungaBesarKiriInView
                            ? "translateX(0)"
                            : "translateX(-60px)",
                        transition:
                            "opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                    }}
                >
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Besar Kiri"
                        width={230}
                        className="animate-spin-clockwise"
                    />
                </div>
                
                {/* Bunga Kanan */}
                <div
                    ref={bungaBesarKananRef}
                    className="absolute top-0 -right-5"
                    style={{
                        opacity: isBungaBesarKananInView ? 1 : 0,
                        transform: isBungaBesarKananInView
                            ? "translateX(0)"
                            : "translateX(60px)",
                        transition:
                            "opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1)",
                    }}
                >
                    <img
                        src="/icon/bunga.svg"
                        alt="Bunga Besar Kanan"
                        width={230}
                        className="animate-spin-counter"
                    />
                </div>
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
            <div className="relative z-10 flex flex-col mx-12 lg:mx-16 xl:mx-12 space-y-6 pt-32 pb-20">
                <h1
                    className="text-5xl lg:text-6xl xl:text-8xl text-center font-samsktrigrama tracking-[-0.02em] 
             bg-[linear-gradient(180deg,#FFC411_0%,#CD9C1A_22.12%,#BD6229_44.71%,#5D2F24_60.58%,#5D2F24_80.77%)]
             bg-clip-text text-transparent"
                >
                    Frequently Asked Questions
                </h1>

                <section className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* FAQ Section */}
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
                    <div className="lg:col-span-2 flex items-start justify-center py-4">
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
                                    bottom: "-105px",
                                    left: "-15px",
                                }}
                            />

                            {/* Bubble Decoration Left */}
                            <img
                                src="/decoration/bubble-left.svg"
                                alt="Bubble Left"
                                height={25}
                                className="h-8 absolute top-60 -left-17 z-20"
                            />

                            {/* Mascot Cewek */}
                            <img
                                src="/mascot/mascot-cewek.svg"
                                alt="Mascot Cewek"
                                className="absolute w-[180px] lg:w-[200px] h-auto object-contain z-10"
                                style={{
                                    bottom: "-105px",
                                    right: "-35px",
                                }}
                            />

                            {/* Bubble Decoration Right */}
                            <img
                                src="/decoration/bubble-right.svg"
                                alt="Bubble Right"
                                height={25}
                                className="h-8 absolute top-60 -right-22 z-20"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FAQPages;
