interface RegisterFormHeaderProps {
    currentStep: number;
    eventType?: string;
}

const RegisterFormHeader = ({
    currentStep,
    eventType,
}: RegisterFormHeaderProps) => {
    if (currentStep === 4) return null;

    // Function to get event title based on eventType
    const getEventTitle = (eventType?: string) => {
        switch (eventType) {
            case "kolaborasi-musik":
                return "Pendaftaran Lomba Kolaborasi Musik";
            case "bazar-kebudayaan":
                return "Pendaftaran Bazar Kebudayaan";
            case "fashion-show":
                return "Pendaftaran Fashion Show";
            default:
                return "Pendaftaran Event";
        }
    };

    return (
        <header className="relative z-20 pt-12 mb-4 text-center sm:mb-6 lg:mb-8 sm:pt-16 lg:pt-20">
            <div className="relative px-2 mx-auto sm:px-4 max-w-fit">
                <div className="relative flex items-center self-stretch justify-center">
                    <div className="flex-shrink-0 mr-1 md:mr-2 lg:mr-3">
                        <img
                            src="/decoration/leaf-left.svg"
                            alt="Icon"
                            className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                        />
                    </div>

                    <h1 className="text-center font-amaranth font-normal leading-tight tracking-[-0.03125rem] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl bg-gradient-to-b from-[#FFC411] via-[#CD9C1A] via-[36.22%] to-[#BD6229] to-[101%] bg-clip-text text-transparent whitespace-nowrap">
                        {getEventTitle(eventType)}
                    </h1>

                    <div className="flex-shrink-0 ml-1 md:ml-2 lg:ml-3">
                        <img
                            src="/decoration/leaf-right.svg"
                            alt="Icon"
                            className="object-contain w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default RegisterFormHeader;
