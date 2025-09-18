import React, { useState } from "react";
import { CardProps } from "../types";
import { faqData } from "../config/constants";

const FAQCard: React.FC<CardProps> = ({
    faqs,
    searchQuery = "",
    onToggle,
    openItemId = null,
}) => {
    const [internalOpenId, setInternalOpenId] = useState<number | null>(null);

    // Inline toggle logic (replacing useFaqToggle hook)
    const handleToggle = (id: number) => {
        if (onToggle) {
            onToggle(id);
        } else {
            setInternalOpenId(internalOpenId === id ? null : id);
        }
    };

    const isExpanded = (id: number) => {
        return onToggle ? openItemId === id : internalOpenId === id;
    };
    // Data FAQ default (fallback)

    // Gunakan faqs dari props atau fallback ke default
    const displayFaqs = faqs || faqData;

    // Function to highlight search query in HTML text
    const highlightText = (htmlText: string, query: string) => {
        if (!query) {
            // Jika tidak ada query, render HTML langsung
            return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
        }

        // Jika ada query, highlight text (untuk sementara strip HTML untuk search)
        const textOnly = htmlText.replace(/<[^>]*>/g, ""); // Strip HTML tags
        const regex = new RegExp(`(${query})`, "gi");

        if (regex.test(textOnly)) {
            // Jika ada match, render dengan highlight
            const highlightedHtml = htmlText.replace(
                new RegExp(`(${query})`, "gi"),
                '<mark class="bg-transparent font-semibold">$1</mark>'
            );
            return (
                <span dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
            );
        }

        // Jika tidak ada match, render HTML biasa
        return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
    };

    return (
        <div className="w-full space-y-6 lg:space-y-10">
            {displayFaqs.map((item) => (
                <div key={item.id} className="w-full relative">
                    {/* FAQ Card Header - Menyamakan dengan lebar SearchField */}
                    <div
                        className="relative flex items-center justify-between cursor-pointer z-20 min-w-full py-4 lg:py-5"
                        style={{
                            // height: '49px', // HAPUS baris ini agar tinggi mengikuti isi
                            borderRadius: "16px",
                            background: "#E1B01B",
                            boxShadow:
                                "0 1.775px 3.55px 0 rgba(0, 0, 0, 0.07) inset",
                        }}
                        onClick={() => handleToggle(item.id)}
                    >
                        {/* Question Text */}
                        <div className="flex-1 px-6 text-left max-w-full">
                            <p className="text-base md:text-xl lg:text-2xl font-medium text-[#3F170D] break-words max-w-full">
                                {highlightText(item.question, searchQuery)}
                            </p>
                        </div>

                        {/* Down Arrow Icon */}
                        <div className="flex items-center justify-center pr-6">
                            <img
                                src="/icon/down-arrow.svg"
                                alt="Down Arrow"
                                width={20}
                                height={10}
                                className={`object-contain transition-transform duration-500 ${
                                    isExpanded(item.id)
                                        ? "rotate-180"
                                        : "rotate-0"
                                }`}
                            />
                        </div>
                    </div>

                    {/* FAQ Answer (Expandable) - Menyamakan dengan lebar SearchField */}
                    <div
                        className={`relative overflow-hidden transition-all duration-700 ${
                            isExpanded(item.id)
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                        }`}
                        style={{ marginTop: "-12px" }}
                    >
                        <div
                            className="px-6 py-4 bg-white border-1 border-[#CD9C1A] border-t-0 relative z-10 w-full max-w-full pt-5"
                            style={{
                                borderRadius: "0 0 16px 16px",
                            }}
                        >
                            <div className="tast-base md:text-xl lg:text-2xl text-[#CD9C1A] leading-relaxed">
                                {highlightText(item.answer, searchQuery)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQCard;
