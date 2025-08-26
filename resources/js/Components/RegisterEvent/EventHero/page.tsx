import React from "react";
import BackgroundImage from "./UI/BackgroundImage.";
import Title from "./UI/Title";
import SubTitle from "./UI/Subtitle";
import ElementPairComponent from "./UI/ElementPairComponent";
import { BATIK_BACKGROUND, CSS_CLASSES } from "./config/constants";
import { useElementRefs } from "./hooks/useElementRefs";

const GaleriHero: React.FC = () => {
    const { ORANG_BERTAPA_PAIR, DAUN_PAIR, WAYANG_PAIR } = useElementRefs();

    const handleScrollToListLomba = () => {
        // Scroll ke elemen dengan ID 'list-lomba' atau class tertentu
        const listLombaElement = document.getElementById("list-lomba");
        if (listLombaElement) {
            listLombaElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        } else {
            // Alternatif: scroll berdasarkan tinggi viewport jika element tidak ditemukan
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        }
    };

    const renderBatikBackground = () => (
        <BackgroundImage
            src={BATIK_BACKGROUND.src}
            alt={BATIK_BACKGROUND.alt}
            className={BATIK_BACKGROUND.className}
        />
    );

    const renderPatternImage = () => (
        <img
            src="/icon/pattern-galeri.svg"
            alt="pattern"
            className={CSS_CLASSES.patternImage}
        />
    );

    const renderGradientBackground = () => (
        <div className="h-full relative w-full">
            <img
                src="/background/gradasi-galeri.svg"
                alt="Gradasi"
                className={CSS_CLASSES.gradientImage}
            />
        </div>
    );

    const renderTitles = () => (
        <div className={CSS_CLASSES.titleWrapper}>
            <Title className={CSS_CLASSES.titleSpacing}>Lomba Umum</Title>

            <Title>Forum Daerah</Title>
        </div>
    );

    const renderContent = () => (
        <div className={CSS_CLASSES.contentWrapper}>
            <div className="w-full">
                <SubTitle>
                    Panggung terbesar untuk Forda dan komunitas budaya untuk
                    unjuk kemampuan dan meraih prestasi.
                </SubTitle>
            </div>

            <button
                type="button"
                onClick={handleScrollToListLomba}
                className="relative cursor-pointer transition-transform duration-200 hover:scale-105 rounded-lg pt-6 pb-5 active:scale-95 bg-no-repeat bg-center bg-contain w-[250px] h-auto flex items-center justify-center text-[#FFDA88] font-samsktrigrama text-3xl tracking-[0.1]"
                style={{
                    backgroundImage: "url('/icon/button-daftar.svg')",
                }}
            >
                Daftar
            </button>
        </div>
    );

    return (
        <div className={CSS_CLASSES.container}>
            {renderBatikBackground()}
            <ElementPairComponent pair={ORANG_BERTAPA_PAIR} />
            <ElementPairComponent pair={DAUN_PAIR} />
            <ElementPairComponent pair={WAYANG_PAIR} />
            {renderPatternImage()}

            <div className={CSS_CLASSES.mainContent}>
                <div className={CSS_CLASSES.titleContainer}>
                    {renderGradientBackground()}
                    {renderTitles()}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default GaleriHero;
