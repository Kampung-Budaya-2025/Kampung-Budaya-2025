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
        window.addEventListener('resize', updateMaxScroll);
        return () => window.removeEventListener('resize', updateMaxScroll);
    }, []);

    // Handle scroll value change from ScrollBar
    const handleScrollChange = (value: number) => {
        setScrollValue(value);
        if (faqContainerRef.current) {
            // Convert scroll value to actual scroll position
            const scrollPosition = (value / maxScrollValue) * (faqContainerRef.current.scrollHeight - faqContainerRef.current.clientHeight);
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
                const scrollPercentage = (scrollTop / maxScroll) * maxScrollValue;
                setScrollValue(scrollPercentage);
            }
        }
    };

    return (
        <div className="flex flex-col mx-12 lg:mx-16 xl:mx-12 space-y-12 py-12">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl text-center font-bold">
                Frequently Asked Questions
            </h1>
            
            <section className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* FAQ Section */}
                <div className="lg:col-span-3 flex flex-col relative">
                    {/* Search Field */}
                    <div className="mb-6 mx-12">
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
                            className="overflow-y-scroll overflow-x-hidden pl-12 pr-4 scrollbar-hide"
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

            {/* Custom CSS untuk hide scrollbar */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;  /* Safari and Chrome */
                }
            `}</style>
        </div>
    );
};

export default FAQPages;
