import React from "react";
import BackgroundImage from "./UI/BackgroundImage.";
import Title from './UI/Title';
import SubTitle from "./UI/Subtitle";
import ElementPairComponent from './UI/ElementPairComponent';
import { useElementRefs } from './hooks/useElementRefs';
import { BATIK_BACKGROUND, CSS_CLASSES } from './config/constants';

const GaleriHero: React.FC = () => {
    const { ORANG_BERTAPA_PAIR, DAUN_PAIR, WAYANG_PAIR } = useElementRefs();

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
            <button type="button">
                <img
                    src="/icon/button-daftar.svg"
                    alt="Daftar"
                    className={CSS_CLASSES.buttonImage}
                />
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
