interface SpeechContent {
    left: string;
    right: string;
}

interface RegisterFormMascotsProps {
    speechContent: SpeechContent;
    currentStep: number;
}

const RegisterFormMascots = ({ speechContent, currentStep }: RegisterFormMascotsProps) => {
    if (currentStep === 4) return null;

    return (
        <>
            {/* Maskot Kiri - STATIC DENGAN HOVER EFFECT */}
            <div className="absolute hidden -translate-y-1/2 -left-40 top-1/2 lg:block">
                <div 
                    className="transition-transform duration-300 hover:-translate-y-2"
                    style={{
                        transform: 'translateZ(0)', // Hardware acceleration
                        willChange: 'transform'
                    }}
                >
                    <img 
                        src="/mascot/mascot-cowok.svg" 
                        alt="Maskot kiri"
                        className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
                        loading="lazy"
                    />
                </div>
                
                {/* Speech Bubble Kiri */}
                <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12">
                    <div className="relative">
                        <div 
                            className="px-3 py-2 text-xs font-bold text-center text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap"
                            style={{
                                background: 'linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)',
                                minWidth: '180px',
                                maxWidth: '280px'
                            }}
                        >
                            {speechContent.left}
                        </div>
                        <div 
                            className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] left-4 sm:w-3 sm:h-3 sm:left-6"
                            style={{ backgroundColor: '#CC8F12' }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Maskot Kanan - STATIC DENGAN HOVER EFFECT */}
            <div className="absolute hidden -translate-y-1/2 -right-40 top-1/2 lg:block">
                <div 
                    className="transition-transform duration-300 hover:-translate-y-2"
                    style={{
                        transform: 'translateZ(0)', // Hardware acceleration
                        willChange: 'transform'
                    }}
                >
                    <img 
                        src="/mascot/mascot-cewek.svg" 
                        alt="Maskot kanan"
                        className="h-auto w-28 sm:w-36 lg:w-48 xl:w-56"
                        loading="lazy"
                    />
                </div>
                
                {/* Speech Bubble Kanan */}
                <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12">
                    <div className="relative">
                        <div 
                            className="px-3 py-2 text-xs font-bold text-center text-white rounded-full shadow-lg sm:px-4 sm:py-2 sm:text-sm whitespace-nowrap"
                            style={{
                                background: 'linear-gradient(180deg, #CE9C17 0%, #CD9514 52.04%, #CC8F12 100%)',
                                minWidth: '120px',
                                maxWidth: '240px'
                            }}
                        >
                            {speechContent.right}
                        </div>
                        <div 
                            className="absolute w-2 h-2 transform rotate-45 bottom-[-4px] right-4 sm:w-3 sm:h-3 sm:right-6"
                            style={{ backgroundColor: '#CC8F12' }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterFormMascots;