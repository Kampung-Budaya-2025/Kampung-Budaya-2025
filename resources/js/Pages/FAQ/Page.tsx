import FAQCard from "@/Components/FAQ/UI/FaqCard";
import Scrollbar from "@/Components/FAQ/UI/ScrollBar";
import SearchField from "@/Components/FAQ/UI/SearchField";
import FlowerPair from "@/Components/FAQ/UI/FlowerPair";
import DecorationSection from "@/Components/FAQ/UI/Decoration";
import React, { useRef, useState, useMemo, useEffect } from "react";
import "../../../css/app.css";
import { useFlowerAnimations } from "@/Components/FAQ/Refs/page";
import BatikBackground from "@/Components/FAQ/UI/BatikBackground";

// Interface untuk FAQ Item
interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

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
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [openItemId, setOpenItemId] = useState<number | null>(null);
    const [scrollValue, setScrollValue] = useState(0);
    const [maxScrollValue, setMaxScrollValue] = useState(100);

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
        window.addEventListener("resize", updateMaxScroll);
        return () => window.removeEventListener("resize", updateMaxScroll);
    }, []);

    const handleScrollChange = (value: number) => {
        setScrollValue(value);
        if (faqContainerRef.current) {
            const scrollPosition =
                (value / maxScrollValue) *
                (faqContainerRef.current.scrollHeight -
                    faqContainerRef.current.clientHeight);
            faqContainerRef.current.scrollTop = scrollPosition;
        }
    };

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

    // Data FAQ - dipindahkan ke sini untuk bisa difilter
    const faqData: FAQItem[] = [
        {
            id: 1,
            question: "Apa itu Kampung Budaya?",
            answer: "Kampung Budaya adalah tempat wisata yang menampilkan kekayaan budaya Indonesia dengan berbagai atraksi tradisional, rumah adat, dan pertunjukan seni budaya.",
        },
        {
            id: 2,
            question: "Berapa harga tiket masuk Kampung Budaya?",
            answer: "Harga tiket masuk mulai dari Rp 25.000 untuk dewasa dan Rp 15.000 untuk anak-anak. Tersedia juga paket family dan paket grup dengan harga khusus.",
        },
        {
            id: 3,
            question: "Jam operasional Kampung Budaya?",
            answer: "Kampung Budaya buka setiap hari mulai pukul 08.00 - 17.00 WIB. Pada hari libur nasional dan weekend, jam operasional dapat diperpanjang hingga 18.00 WIB.",
        },
        {
            id: 4,
            question: "Apa saja fasilitas yang tersedia?",
            answer: "Fasilitas yang tersedia meliputi area parkir luas, toilet, mushola, food court dengan makanan tradisional, toko souvenir, dan area bermain anak.",
        },
        {
            id: 5,
            question: "Apakah ada pertunjukan khusus?",
            answer: "Ya, setiap hari terdapat pertunjukan tari tradisional pada pukul 10.00, 14.00, dan 16.00. Pada weekend ada pertunjukan musik gamelan dan workshop membatik.",
        },
        {
            id: 6,
            question: "Bagaimana cara menuju ke Kampung Budaya?",
            answer: "Kampung Budaya dapat diakses melalui transportasi umum seperti bus, angkot, atau kendaraan pribadi. Tersedia juga layanan shuttle bus dari pusat kota pada akhir pekan.",
        },
        {
            id: 7,
            question: "Apakah ada paket wisata yang tersedia?",
            answer: "Ya, tersedia berbagai paket wisata mulai dari paket half day, full day, hingga paket 2 hari 1 malam yang termasuk akomodasi dan makan.",
        },
        {
            id: 8,
            question: "Bolehkah membawa makanan dari luar?",
            answer: "Pengunjung diperbolehkan membawa makanan ringan dan minuman sendiri. Namun untuk menjaga kebersihan, harap membuang sampah pada tempatnya.",
        },
        {
            id: 9,
            question: "Apakah ada guide atau pemandu wisata?",
            answer: "Ya, tersedia layanan pemandu wisata professional yang dapat menjelaskan sejarah dan budaya setiap atraksi dengan biaya tambahan Rp 50.000 per grup.",
        },
        {
            id: 10,
            question: "Bagaimana cara booking tiket secara online?",
            answer: "Tiket dapat dibeli secara online melalui website resmi atau aplikasi mobile Kampung Budaya. Pembayaran dapat dilakukan via transfer bank atau e-wallet.",
        },
    ];

    // Filter FAQ berdasarkan search query
    const filteredFaqs = useMemo(() => {
        if (!searchQuery.trim()) {
            return faqData;
        }

        return faqData.filter(
            (faq) =>
                faq.question
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
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
        console.log("Searching for:", searchQuery);
    };

    const handleFAQToggle = (id: number) => {
        setOpenItemId(openItemId === id ? null : id);
    };

    return (
        <div className="lg:col-span-3 flex flex-col relative">
            {/* Search Field */}
            <div className="mb-8 mx-11">
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
                    className="overflow-y-scroll overflow-x-hidden pl-11 scrollbar-hide h-[300px]"
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
                                Tidak ada FAQ yang ditemukan untuk "
                                {searchQuery}"
                            </p>
                        </div>
                    )}
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
