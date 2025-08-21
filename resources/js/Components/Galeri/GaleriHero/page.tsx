import React from "react";

interface BackgroundImageProps {
    src: string;
    alt: string;
    className: string;
    width?: number;
}

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

interface SubTitleProps {
    children: React.ReactNode;
    className?: string;
}

interface BackgroundImageConfig {
    src: string;
    alt: string;
    className: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
    src,
    alt,
    className,
    width,
}) => (
    <img
        src={src}
        alt={alt}
        className={`absolute pointer-events-none ${className}`}
        width={width}
        loading="lazy"
    />
);

const Title: React.FC<TitleProps> = ({ children, className = "" }) => (
    <h1
        className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-normal font-samsktrigrama leading-[1.1] tracking-[-0.05em] drop-shadow-2xl relative z-30 bg-gradient-to-b from-[#3F170D] to-[#5F3313] bg-clip-text text-transparent overflow-visible ${className}`}
    >
        {children}
    </h1>
);

const SubTitle: React.FC<SubTitleProps> = ({ children, className = "" }) => (
    <h2
        className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-amaranth font-normal text-[#C88B5F] leading-normal text-center tracking-[-0.02em] drop-shadow-2xl relative z-30 overflow-visible max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[600px] px-4 ${className}`}
    >
        {children}
    </h2>
);

const GaleriHero: React.FC = () => {
    const BACKGROUND_IMAGES: BackgroundImageConfig[] = [
        {
            src: "/background/batik-horizontal-galeri.svg",
            alt: "Batik Background",
            className: "-top-[20vh] left-0 w-auto h-auto z-0",
        },
        {
            src: "/background/orang-bertapa.svg",
            alt: "Orang Bertapa Kiri",
            className: "absolute bottom-0 -left-[9%] z-10 w-[370px] h-auto",
        },
        {
            src: "/background/orang-bertapa.svg",
            alt: "Orang Bertapa Kanan",
            className:
                "absolute bottom-0 -right-[9%] z-10 transform scale-x-[-1] w-[370px] h-auto",
        },
        {
            src: "/background/daun.svg",
            alt: "Daun Kiri",
            className: "absolute bottom-[30%] left-[4.5%] z-0 w-[220px] h-auto",
        },
        {
            src: "/background/daun.svg",
            alt: "Daun Kanan",
            className:
                "absolute bottom-[30%] right-[4.5%] z-0 transform scale-x-[-1] w-[220px] h-auto",
        },
        {
            src: "/background/wayang.svg",
            alt: "Wayang Kiri",
            className: "absolute bottom-[17%] left-[5.5%] z-0 w-[230px] h-auto",
        },
        {
            src: "/background/wayang.svg",
            alt: "Wayang Kanan",
            className:
                "absolute bottom-[17%] right-[5.5%] z-0 transform scale-x-[-1] w-[230px] h-auto",
        },
    ];

    const containerClassName =
        "flex justify-center items-center mb-12 relative w-full min-h-screen";
    const mainContentClassName =
        "relative h-[110vh] w-[75%] max-w-[1256px] flex flex-col items-center justify-center overflow-y-hidden pt-16 sm:pt-20 md:pt-20 px-4 z-20";
    const titleContainerClassName =
        "flex flex-col items-center text-center mt-6 sm:mt-8 md:mt-18 justify-center z-20 w-full";
    const patternImageClassName =
        "absolute top-[20%] h-[6.25vh] min-h-[90px] max-h-[110px] z-0";
    const gradientImageClassName =
        "absolute inset-0 w-auto h-auto object-cover z-0";
    const titleWrapperClassName = "flex flex-col items-center pt-6";
    const titleSpacingClassName = "-mb-4 sm:-mb-6 md:-mb-8 lg:-mb-10";
    const contentWrapperClassName =
        "flex flex-col items-center gap-2 sm:gap-4 md:gap-6 -mt-4";
    const buttonImageClassName = "w-[40vw] min-w-[200px] max-w-[250px] h-auto";

    const renderBackgroundImages = () =>
        BACKGROUND_IMAGES.map((image, index) => (
            <BackgroundImage
                key={`${image.src}-${index}`}
                src={image.src}
                alt={image.alt}
                className={image.className}
            />
        ));

    const renderPatternImage = () => (
        <img
            src="/icon/pattern-galeri.svg"
            alt="pattern"
            className={patternImageClassName}
        />
    );

    const renderGradientBackground = () => (
        <div className="h-full relative w-full">
            <img
                src="/background/gradasi-galeri.svg"
                alt="Gradasi"
                className={gradientImageClassName}
            />
        </div>
    );

    const renderTitles = () => (
        <div className={titleWrapperClassName}>
            <Title className={titleSpacingClassName}>Lomba Umum</Title>
            <Title>Forum Daerah</Title>
        </div>
    );

    const renderContent = () => (
        <div className={contentWrapperClassName}>
            <div className="w-full">
                <SubTitle>
                    Panggung terbesar untuk Forda dan komunitas
                    budaya untuk unjuk kemampuan dan meraih
                    prestasi.
                </SubTitle>
            </div>
            <button type="button">
                <img
                    src="/icon/button-daftar.svg"
                    alt="Daftar"
                    className={buttonImageClassName}
                />
            </button>
        </div>
    );

    return (
        <div className={containerClassName}>
            {renderBackgroundImages()}
            {renderPatternImage()}

            <div className={mainContentClassName}>
                <div className={titleContainerClassName}>
                    {renderGradientBackground()}
                    {renderTitles()}
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default GaleriHero;
