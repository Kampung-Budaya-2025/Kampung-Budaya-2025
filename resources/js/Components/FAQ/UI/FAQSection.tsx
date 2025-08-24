import React, { useRef, useState, useMemo } from "react";
import { useScrollSync } from "../hooks/page";
import { faqData } from "../config/contants";
import SearchField from "./SearchField";
import Scrollbar from "./ScrollBar";
import FAQCard from "./FaqCard";
const FAQSection: React.FC = () => {
    const faqContainerRef = useRef<HTMLDivElement>(null!);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [openItemId, setOpenItemId] = useState<number | null>(null);
    
    const {
        scrollValue,
        maxScrollValue,
        handleScrollChange,
        handleContainerScroll,
    } = useScrollSync(faqContainerRef);

    // Filter FAQ berdasarkan search query
    const filteredFaqs = useMemo(() => {
        if (!searchQuery.trim()) {
            return faqData;
        }
        
        return faqData.filter(faq => 
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        // Reset item yang terbuka saat melakukan pencarian baru
        setOpenItemId(null);
    };

    const handleSearch = () => {
        // Optional: bisa ditambahkan logic tambahan saat tombol search diklik
        console.log('Searching for:', searchQuery);
    };

    const handleFAQToggle = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div className="lg:col-span-3 flex flex-col relative">
            {/* Search Field */}
            <div className="mb-8 mx-0 lg:mx-11">
                <SearchField 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onSearch={handleSearch}
                    placeholder="Cari pertanyaan atau jawaban..."
                />
            </div>

            {/* FAQ Container with ScrollBar */}
            <div className="relative">
                {/* Custom ScrollBar */}
                <div className="absolute left-0 top-0 h-[300px] z-20 hidden md:block">
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
                    className="overflow-y-scroll overflow-x-hidden lg:pl-11 scrollbar-hide h-[300px]"
                    onScroll={handleContainerScroll}
                >
                    {filteredFaqs.length > 0 ? (
                        <FAQCard 
                            faqs={filteredFaqs}
                            searchQuery={searchQuery}
                            onToggle={handleFAQToggle}
                            openItemId={openItemId}
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-[#CD9C1A] text-sm">
                                Tidak ada FAQ yang ditemukan untuk "{searchQuery}"
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQSection;